/*
  Anime Arena — Grand Tournament
  Character/Form Identity Registry

  PURPOSE:
  One character = ONE identity.
  Forms = children of that character.

  Example:

  Goku
    characterId: dragonball_goku_001

    forms:
      SS
      SS2
      SS3
      UI
      MUI
*/

export function normalizeIdentityName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/* =========================================================
   CHARACTER ID
========================================================= */

export function createCharacterId(verseId, characterName) {
  return [
    normalizeIdentityName(verseId || "general"),
    normalizeIdentityName(characterName || "character"),
  ].join("_");
}

/* =========================================================
   FORM ID
========================================================= */

export function createFormId(
  characterId,
  formName,
  index = 0
) {
  const cleanCharacterId =
    characterId || "character_unknown";

  const cleanForm =
    normalizeIdentityName(formName || "base");

  return `${cleanCharacterId}__form_${cleanForm}_${index}`;
}

/* =========================================================
   CHARACTER IDENTITY
========================================================= */

export function getCharacterIdentity(character) {
  if (!character) {
    return {
      characterId: "character_unknown",
      characterName: "Unknown Character",
      verseId: "general",
    };
  }

  const verseId =
    character.verseId ||
    character.verse ||
    "general";

  const characterName =
    character.name ||
    character.canonName ||
    "Character";

  const characterId =
    character.characterId ||
    character.canonId ||
    createCharacterId(
      verseId,
      characterName
    );

  return {
    characterId,
    characterName,
    verseId,
  };
}

/* =========================================================
   FORM IDENTITY
========================================================= */

export function getFormIdentity(
  character,
  activeForm = null,
  formIndex = 0
) {
  const characterIdentity =
    getCharacterIdentity(character);

  const form =
    activeForm ||
    character?.forms?.[formIndex] ||
    null;

  const formName =
    typeof form === "string"
      ? form
      : form?.name || "Base";

  const existingFormId =
    typeof form === "object"
      ? form?.formId || form?.id
      : null;

  const formId =
    existingFormId ||
    createFormId(
      characterIdentity.characterId,
      formName,
      formIndex
    );

  return {
    characterId:
      characterIdentity.characterId,

    characterName:
      characterIdentity.characterName,

    verseId:
      characterIdentity.verseId,

    formId,

    formName,

    formIndex,
  };
}

/* =========================================================
   COMPLETE IDENTITY
========================================================= */

export function getArtworkIdentity(
  character,
  activeForm = null,
  formIndex = 0
) {
  const characterIdentity =
    getCharacterIdentity(character);

  const formIdentity =
    getFormIdentity(
      character,
      activeForm,
      formIndex
    );

  return {
    characterId:
      characterIdentity.characterId,

    characterName:
      characterIdentity.characterName,

    verseId:
      characterIdentity.verseId,

    formId:
      formIdentity.formId,

    formName:
      formIdentity.formName,

    formIndex:
      formIdentity.formIndex,
  };
}

/* =========================================================
   IDENTITY VALIDATION
========================================================= */

export function validateCharacterIdentity(
  character
) {
  const errors = [];

  if (!character) {
    return {
      valid: false,
      errors: ["Character object is missing."],
    };
  }

  const identity =
    getCharacterIdentity(character);

  if (!identity.characterId) {
    errors.push(
      "Character ID is missing."
    );
  }

  if (!identity.characterName) {
    errors.push(
      "Character name is missing."
    );
  }

  if (!identity.verseId) {
    errors.push(
      "Verse ID is missing."
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    identity,
  };
}

/* =========================================================
   FORM VALIDATION
========================================================= */

export function validateFormIdentity(
  character,
  activeForm,
  formIndex = 0
) {
  const errors = [];

  if (!character) {
    return {
      valid: false,
      errors: ["Character is missing."],
    };
  }

  const identity =
    getArtworkIdentity(
      character,
      activeForm,
      formIndex
    );

  if (!identity.characterId) {
    errors.push(
      "Character ID missing."
    );
  }

  if (!identity.formId) {
    errors.push(
      "Form ID missing."
    );
  }

  if (!identity.formName) {
    errors.push(
      "Form name missing."
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    identity,
  };
}

/* =========================================================
   FORM LIST NORMALIZATION
========================================================= */

export function normalizeCharacterForms(
  character
) {
  if (!character) return null;

  const identity =
    getCharacterIdentity(character);

  const forms =
    Array.isArray(character.forms)
      ? character.forms
      : [];

  const normalizedForms =
    forms.map((form, index) => {
      const formName =
        typeof form === "string"
          ? form
          : form?.name || `Form ${index + 1}`;

      const formId =
        typeof form === "object"
          ? form?.formId ||
            form?.id ||
            createFormId(
              identity.characterId,
              formName,
              index
            )
          : createFormId(
              identity.characterId,
              formName,
              index
            );

      if (typeof form === "string") {
        return {
          name: formName,
          formId,
          characterId:
            identity.characterId,
          formIndex: index,
        };
      }

      return {
        ...form,

        name: formName,

        formId,

        characterId:
          identity.characterId,

        formIndex: index,
      };
    });

  return {
    ...character,

    characterId:
      identity.characterId,

    verseId:
      identity.verseId,

    forms: normalizedForms,
  };
}

/* =========================================================
   ARTWORK KEY
========================================================= */

export function createArtworkIdentityKey(
  character,
  activeForm = null,
  formIndex = 0
) {
  const identity =
    getArtworkIdentity(
      character,
      activeForm,
      formIndex
    );

  return [
    identity.verseId,
    identity.characterId,
    identity.formId,
  ].join("::");
}

/* =========================================================
   DEBUG
========================================================= */

export function debugArtworkIdentity(
  character,
  activeForm = null,
  formIndex = 0
) {
  const identity =
    getArtworkIdentity(
      character,
      activeForm,
      formIndex
    );

  console.table({
    "Character ID":
      identity.characterId,

    "Character Name":
      identity.characterName,

    "Verse":
      identity.verseId,

    "Form ID":
      identity.formId,

    "Form":
      identity.formName,

    "Form Index":
      identity.formIndex,

    "Artwork Key":
      createArtworkIdentityKey(
        character,
        activeForm,
        formIndex
      ),
  });

  return identity;
}