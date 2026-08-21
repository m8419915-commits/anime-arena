// src/tournament/data/auctionIntegrity.js
// Anime Arena — Grand Tournament
// Auction Character Identity & Integrity Foundation

const asText = (value) => String(value ?? "").trim();

const getCharacterId = (character) =>
  asText(
    character?.characterId ??
      character?.id ??
      character?.character?.id
  );

const getFormId = (form) =>
  asText(
    form?.formId ??
      form?.id ??
      form?.form?.id
  );

const getVerseId = (character) =>
  asText(
    character?.verseId ??
      character?.verse ??
      character?.animeId
  );

const getName = (character) =>
  asText(
    character?.name ??
      character?.characterName ??
      character?.canonName
  );

export const INTEGRITY_STATUS = Object.freeze({
  VERIFIED: "verified",
  WARNING: "warning",
  REJECTED: "rejected",
});

export const INTEGRITY_LABEL = Object.freeze({
  VERIFIED: "VERIFIED",
  WARNING: "REVIEW",
  REJECTED: "BLOCKED",
});

/**
 * Creates an immutable snapshot of the exact character/form
 * entering the auction.
 *
 * The auction UI should use this snapshot instead of repeatedly
 * resolving identity from different sources.
 */
export function buildAuctionCharacterSnapshot(
  character,
  activeForm = null
) {
  if (!character) {
    return Object.freeze({
      characterId: "",
      verseId: "",
      name: "",
      formId: "",
      formName: "",
      tier: "",
      stats: Object.freeze({}),
    });
  }

  const characterForms = Array.isArray(character.forms)
    ? character.forms
    : [];

  const form =
    activeForm ??
    characterForms[0] ??
    null;

  const stats = {
    ...(character.stats || {}),
    ...(form?.stats || {}),
  };

  return Object.freeze({
    characterId: getCharacterId(character),
    verseId: getVerseId(character),
    name: getName(character),

    formId: getFormId(form),

    formName: asText(
      form?.name ??
        form?.formName ??
        character?.formName
    ),

    tier: asText(
      form?.tier ??
        character?.tier ??
        "standard"
    ),

    stats: Object.freeze(stats),
  });
}

/**
 * Ensures the selected form actually belongs to the
 * character currently entering the auction.
 */
export function validateFormOwnership(
  character,
  activeForm
) {
  const characterId = getCharacterId(character);
  const requestedFormId = getFormId(activeForm);

  if (!characterId) {
    return {
      valid: false,
      reason: "Missing character ID.",
    };
  }

  if (!requestedFormId) {
    return {
      valid: false,
      reason: "Missing form ID.",
    };
  }

  const forms = Array.isArray(character?.forms)
    ? character.forms
    : [];

  const ownedForm = forms.find(
    (form) =>
      getFormId(form) === requestedFormId
  );

  if (!ownedForm) {
    return {
      valid: false,
      reason:
        "Selected form does not belong to the current character.",
    };
  }

  return {
    valid: true,
    characterId,
    formId: requestedFormId,
    form: ownedForm,
  };
}

/**
 * Validates artwork identity against the canonical
 * auction snapshot.
 *
 * IMPORTANT:
 * Missing identity proof is NOT treated as verified.
 */
export function validateArtworkIdentity(
  snapshot,
  artwork
) {
  const artworkIdentity =
    artwork?.identity || artwork || {};

  const artworkCharacterId = asText(
    artworkIdentity.characterId
  );

  const artworkVerseId = asText(
    artworkIdentity.verseId
  );

  const artworkFormId = asText(
    artworkIdentity.formId
  );

  const errors = [];
  const warnings = [];

  if (!artworkCharacterId) {
    warnings.push(
      "Artwork has no independent character identity."
    );
  } else if (
    artworkCharacterId !== snapshot.characterId
  ) {
    errors.push(
      "Artwork character ID does not match auction character."
    );
  }

  if (
    artworkVerseId &&
    artworkVerseId !== snapshot.verseId
  ) {
    errors.push(
      "Artwork verse ID does not match auction character."
    );
  }

  /**
   * A character-level image may legitimately have no
   * formId. Therefore form mismatch is only checked when
   * the artwork explicitly claims to be form-specific.
   */
  if (
    artworkFormId &&
    snapshot.formId &&
    artworkFormId !== snapshot.formId
  ) {
    warnings.push(
      "Artwork belongs to another form of the same character."
    );
  }

  return {
    valid: errors.length === 0,
    verified:
      errors.length === 0 &&
      Boolean(artworkCharacterId),

    errors,
    warnings,

    identity: {
      characterId: artworkCharacterId,
      verseId: artworkVerseId,
      formId: artworkFormId,
    },
  };
}

/**
 * Validates Intel identity.
 */
export function validateIntelIdentity(
  snapshot,
  intel
) {
  if (!intel) {
    return {
      valid: false,
      verified: false,
      errors: ["No intel record found."],
      warnings: [],
    };
  }

  const intelCharacterId = asText(
    intel.characterId ??
      intel.id
  );

  const intelVerseId = asText(
    intel.verseId ??
      intel.verse
  );

  const errors = [];
  const warnings = [];

  if (
    intelCharacterId &&
    intelCharacterId !== snapshot.characterId
  ) {
    errors.push(
      "Intel character ID does not match auction character."
    );
  }

  if (
    intelVerseId &&
    intelVerseId !== snapshot.verseId
  ) {
    errors.push(
      "Intel verse ID does not match auction character."
    );
  }

  if (!intelCharacterId) {
    warnings.push(
      "Intel record has no explicit character ID."
    );
  }

  return {
    valid: errors.length === 0,
    verified:
      errors.length === 0 &&
      Boolean(intelCharacterId),

    errors,
    warnings,
  };
}

/**
 * Master verification function.
 *
 * This is the function the auction engine/UI will
 * eventually call whenever a character appears.
 */
export function validateAuctionCharacter({
  character,
  activeForm = null,
  artwork = null,
  intel = null,
} = {}) {
  const snapshot =
    buildAuctionCharacterSnapshot(
      character,
      activeForm
    );

  const errors = [];
  const warnings = [];

  if (!snapshot.characterId) {
    errors.push("Missing canonical character ID.");
  }

  if (!snapshot.name) {
    errors.push("Missing canonical character name.");
  }

  if (!snapshot.verseId) {
    errors.push("Missing canonical verse ID.");
  }

  if (!snapshot.formId) {
    errors.push("Missing active form ID.");
  }

  const formCheck =
    validateFormOwnership(
      character,
      activeForm
    );

  if (!formCheck.valid) {
    errors.push(formCheck.reason);
  }

  const artworkCheck =
    validateArtworkIdentity(
      snapshot,
      artwork
    );

  errors.push(
    ...artworkCheck.errors
  );

  warnings.push(
    ...artworkCheck.warnings
  );

  const intelCheck =
    validateIntelIdentity(
      snapshot,
      intel
    );

  errors.push(
    ...intelCheck.errors
  );

  warnings.push(
    ...intelCheck.warnings
  );

  let status =
    INTEGRITY_STATUS.VERIFIED;

  if (errors.length > 0) {
    status =
      INTEGRITY_STATUS.REJECTED;
  } else if (warnings.length > 0) {
    status =
      INTEGRITY_STATUS.WARNING;
  }

  return Object.freeze({
    status,

    safeToDisplay:
      status !== INTEGRITY_STATUS.REJECTED,

    snapshot,

    errors: Object.freeze(errors),
    warnings: Object.freeze(warnings),

    checks: Object.freeze({
      character:
        Boolean(
          snapshot.characterId &&
          snapshot.name
        ),

      verse:
        Boolean(snapshot.verseId),

      form:
        formCheck.valid,

      artwork:
        artworkCheck.verified,

      intel:
        intelCheck.verified,

      stats:
        Object.keys(snapshot.stats).length > 0,
    }),

    artwork: artworkCheck,
    intel: intelCheck,
    form: formCheck,
  });
}

/**
 * Human-readable status for the UI.
 */
export function getIntegrityLabel(status) {
  return (
    INTEGRITY_LABEL[status] ??
    "UNKNOWN"
  );
}

/**
 * Small helper for UI badges.
 */
export function getIntegritySeverity(status) {
  switch (status) {
    case INTEGRITY_STATUS.VERIFIED:
      return "success";

    case INTEGRITY_STATUS.WARNING:
      return "warning";

    case INTEGRITY_STATUS.REJECTED:
      return "error";

    default:
      return "neutral";
  }
}