/*
  Anime Arena — Grand Tournament
  Artwork Identity Validator v1

  PURPOSE:
  Prevent wrong character/form artwork from appearing
  on tournament cards.

  IMPORTANT:
  This validator NEVER trusts an image URL merely because
  the image loads successfully.

  It validates:
  CHARACTER → FORM → ARTWORK → CARD
*/

import {
  normalizeCharacterName,
  verifyImageAccessibility,
} from "./tournamentImageResolver";

/* =========================================================
   RESULT TYPES
========================================================= */

export const ARTWORK_STATUS = {
  PASS: "pass",
  WARNING: "warning",
  REJECT: "reject",
  LOADING: "loading",
};

/* =========================================================
   NAME NORMALIZATION
========================================================= */

function normalize(value) {
  return normalizeCharacterName(
    String(value || "")
  );
}

function tokenize(value) {
  return normalize(value)
    .split("_")
    .filter(Boolean);
}

/* =========================================================
   ALIAS MATCHING
========================================================= */

function matchesName(
  imageIdentity,
  character
) {
  if (!imageIdentity || !character) {
    return false;
  }

  const targetNames = [
    character.name,
    character.canonName,
    ...(character.aliases || []),
  ]
    .filter(Boolean)
    .map(normalize);

  const imageName =
    normalize(imageIdentity);

  return targetNames.some(
    (name) =>
      imageName.includes(name) ||
      name.includes(imageName)
  );
}

/* =========================================================
   FORM MATCHING
========================================================= */

function matchesForm(
  imageIdentity,
  activeForm
) {
  if (!activeForm?.name) {
    return true;
  }

  const formName =
    normalize(activeForm.name);

  const imageName =
    normalize(imageIdentity);

  /*
    Base character artwork is allowed when there is
    no dedicated form artwork.
  */

  if (!imageName) {
    return false;
  }

  return (
    imageName.includes(formName) ||
    formName.includes(imageName)
  );
}

/* =========================================================
   URL / FILE IDENTITY
========================================================= */

function extractArtworkIdentity(url) {
  if (!url) return "";

  try {
    const decoded =
      decodeURIComponent(url);

    const fileName =
      decoded
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "") || "";

    return fileName;
  } catch {
    return String(url);
  }
}

/* =========================================================
   LOCAL ARTWORK IDENTITY
========================================================= */

function validateLocalArtworkPath(
  url,
  character,
  activeForm
) {
  if (!url) {
    return {
      status: ARTWORK_STATUS.WARNING,
      reason: "No artwork URL",
    };
  }

  const identity =
    extractArtworkIdentity(url);

  const characterMatch =
    matchesName(
      identity,
      character
    );

  if (!characterMatch) {
    return {
      status: ARTWORK_STATUS.REJECT,
      reason:
        "Artwork filename does not match character",
    };
  }

  /*
    If this is explicitly a form-specific file,
    verify the form identity too.
  */

  const isFormSpecific =
    url.includes(
      `_${normalize(activeForm?.name || "")}.`
    );

  if (
    isFormSpecific &&
    !matchesForm(
      identity,
      activeForm
    )
  ) {
    return {
      status: ARTWORK_STATUS.REJECT,
      reason:
        "Artwork filename does not match active form",
    };
  }

  return {
    status: ARTWORK_STATUS.PASS,
    reason:
      "Local artwork identity matches",
  };
}

/* =========================================================
   ARTWORK SOURCE DETECTION
========================================================= */

function getArtworkSource(url) {
  if (!url) {
    return "none";
  }

  if (
    url.startsWith(
      "/tournament/artwork/"
    )
  ) {
    return "local";
  }

  if (
    url.includes("anilist.co") ||
    url.includes("s4.anilist.co")
  ) {
    return "anilist";
  }

  if (
    url.includes("jikan.moe") ||
    url.includes("images.jpg")
  ) {
    return "jikan";
  }

  return "external";
}

/* =========================================================
   MAIN VALIDATOR
========================================================= */

export async function validateArtworkIdentity({
  character,
  activeForm,
  imageUrl,
}) {
  const errors = [];
  const warnings = [];

  if (!character) {
    return {
      status: ARTWORK_STATUS.REJECT,
      score: 0,
      errors: [
        "Character data is missing",
      ],
      warnings: [],
      checks: {},
    };
  }

  if (!imageUrl) {
    return {
      status: ARTWORK_STATUS.REJECT,
      score: 0,
      errors: [
        "Artwork URL is missing",
      ],
      warnings: [],
      checks: {},
    };
  }

  /* =====================================================
     CHECK 1 — IMAGE LOAD
  ===================================================== */

  const accessibility =
    await verifyImageAccessibility(
      imageUrl,
      2500
    );

  const imageLoads =
    accessibility.ok;

  if (!imageLoads) {
    errors.push(
      "Image cannot be loaded"
    );
  }

  /* =====================================================
     CHECK 2 — DIMENSIONS
  ===================================================== */

  const validDimensions =
    accessibility.width > 0 &&
    accessibility.height > 0;

  if (!validDimensions) {
    errors.push(
      "Image has invalid dimensions"
    );
  }

  /* =====================================================
     CHECK 3 — SOURCE
  ===================================================== */

  const source =
    getArtworkSource(imageUrl);

  /* =====================================================
     CHECK 4 — LOCAL IDENTITY
  ===================================================== */

  let localIdentity = null;

  if (source === "local") {
    localIdentity =
      validateLocalArtworkPath(
        imageUrl,
        character,
        activeForm
      );

    if (
      localIdentity.status ===
      ARTWORK_STATUS.REJECT
    ) {
      errors.push(
        localIdentity.reason
      );
    }
  }

  /* =====================================================
     CHECK 5 — FORM ARTWORK
  ===================================================== */

  const hasExplicitFormArtwork =
    Boolean(
      activeForm?.artwork?.portrait ||
      activeForm?.artwork?.card ||
      activeForm?.artwork?.image ||
      activeForm?.artwork?.url
    );

  const usingExplicitFormArtwork =
    hasExplicitFormArtwork &&
    [
      activeForm?.artwork?.portrait,
      activeForm?.artwork?.card,
      activeForm?.artwork?.image,
      activeForm?.artwork?.url,
    ]
      .filter(Boolean)
      .includes(imageUrl);

  /*
    External AniList/Jikan artwork is character-level.
    Therefore it gets a WARNING rather than being falsely
    declared as exact transformation artwork.
  */

  let formConfidence = 100;

  if (
    activeForm?.name &&
    !usingExplicitFormArtwork
  ) {
    if (
      source === "anilist" ||
      source === "jikan"
    ) {
      formConfidence = 55;

      warnings.push(
        "Artwork is character-level, not confirmed form-specific artwork"
      );
    }
  }

  /* =====================================================
     CHECK 6 — CHARACTER DATA
  ===================================================== */

  const characterHasTags =
    Array.isArray(
      character.tags
    ) &&
    character.tags.length > 0;

  const characterHasForms =
    Array.isArray(
      character.forms
    ) &&
    character.forms.length > 0;

  if (!characterHasTags) {
    warnings.push(
      "Character has no tags"
    );
  }

  if (!characterHasForms) {
    warnings.push(
      "Character has no forms"
    );
  }

  /* =====================================================
     CHECK 7 — ACTIVE FORM BELONGS TO CHARACTER
  ===================================================== */

  let formBelongsToCharacter = true;

  if (activeForm && character.forms) {
    formBelongsToCharacter =
      character.forms.some(
        (form) =>
          form === activeForm ||
          form.id === activeForm.id
      );

    if (!formBelongsToCharacter) {
      errors.push(
        "Active form does not belong to this character"
      );
    }
  }

  /* =====================================================
     SCORE
  ===================================================== */

  let score = 100;

  score -= errors.length * 35;
  score -= warnings.length * 10;

  score = Math.max(
    0,
    Math.min(100, score)
  );

  /* =====================================================
     FINAL STATUS
  ===================================================== */

  let status =
    ARTWORK_STATUS.PASS;

  if (errors.length > 0) {
    status =
      ARTWORK_STATUS.REJECT;
  } else if (
    warnings.length > 0
  ) {
    status =
      ARTWORK_STATUS.WARNING;
  }

  return {
    status,
    score,

    errors,
    warnings,

    checks: {
      imageLoads,
      validDimensions,
      source,
      characterData:
        Boolean(character),
      characterHasTags,
      characterHasForms,
      formBelongsToCharacter,
      explicitFormArtwork:
        usingExplicitFormArtwork,
      formConfidence,
    },

    image: {
      url: imageUrl,
      width:
        accessibility.width,
      height:
        accessibility.height,
      latencyMs:
        accessibility.latencyMs,
    },
  };
}

/* =========================================================
   CARD SAFETY GATE
========================================================= */

export async function artworkSafetyGate({
  character,
  activeForm,
  imageUrl,
}) {
  const result =
    await validateArtworkIdentity({
      character,
      activeForm,
      imageUrl,
    });

  /*
    REJECT = NEVER DISPLAY
    WARNING = DISPLAY WITH CAUTION
    PASS = SAFE
  */

  return {
    ...result,

    safeToDisplay:
      result.status !==
      ARTWORK_STATUS.REJECT,

    exactFormConfirmed:
      result.checks
        ?.explicitFormArtwork === true,

    needsReview:
      result.status ===
      ARTWORK_STATUS.WARNING,
  };
}

/* =========================================================
   HUMAN-READABLE LABEL
========================================================= */

export function getArtworkStatusLabel(
  status
) {
  switch (status) {
    case ARTWORK_STATUS.PASS:
      return "✓ VERIFIED";

    case ARTWORK_STATUS.WARNING:
      return "⚠ REVIEW";

    case ARTWORK_STATUS.REJECT:
      return "✕ REJECTED";

    case ARTWORK_STATUS.LOADING:
      return "⟳ CHECKING";

    default:
      return "UNKNOWN";
  }
}