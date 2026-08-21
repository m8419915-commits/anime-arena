/*
  Anime Arena — Grand Tournament
  Character Identity + Integrity System
*/

export function normalizeId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/* =========================================================
   CHARACTER ID
========================================================= */

export function createCharacterId(character) {
  if (character?.characterId) {
    return String(character.characterId);
  }

  const verse =
    character?.verseId ||
    character?.verse ||
    "general";

  const name =
    character?.name ||
    character?.canonName ||
    "character";

  return `${normalizeId(verse)}_${normalizeId(name)}`;
}

/* =========================================================
   FORM ID
========================================================= */

export function createFormId(character, form) {
  if (form?.formId) {
    return String(form.formId);
  }

  const characterId =
    createCharacterId(character);

  const formName =
    form?.name ||
    "base";

  return `${characterId}_${normalizeId(formName)}`;
}

/* =========================================================
   ARTWORK ID
========================================================= */

export function createArtworkId(character, form = null) {
  const characterId =
    createCharacterId(character);

  if (form) {
    const formId =
      createFormId(character, form);

    return `art_${formId}`;
  }

  return `art_${characterId}`;
}

/* =========================================================
   CHARACTER NORMALIZATION
========================================================= */

export function normalizeTournamentCharacter(character) {
  if (!character) return null;

  const characterId =
    createCharacterId(character);

  const forms = Array.isArray(character.forms)
    ? character.forms
    : [];

  return {
    ...character,

    characterId,

    name:
      character.name ||
      character.canonName ||
      "Character",

    tags: Array.isArray(character.tags)
      ? [...character.tags]
      : [],

    forms: forms.map((form) => {
      const formId =
        createFormId(
          {
            ...character,
            characterId,
          },
          form
        );

      return {
        ...form,

        formId,

        characterId,

        artworkId:
          createArtworkId(
            {
              ...character,
              characterId,
            },
            {
              ...form,
              formId,
            }
          ),

        name:
          form?.name ||
          "Base",
      };
    }),
  };
}

/* =========================================================
   FORM OWNERSHIP CHECK
========================================================= */

export function isFormOwnedByCharacter(
  character,
  form
) {
  if (!character || !form) {
    return false;
  }

  const characterId =
    createCharacterId(character);

  const formCharacterId =
    form.characterId ||
    "";

  return String(formCharacterId) ===
    String(characterId);
}

/* =========================================================
   INTEGRITY CHECK
========================================================= */

export function validateCharacterIntegrity(
  character
) {
  const errors = [];

  if (!character) {
    return {
      valid: false,
      errors: ["Character is missing."],
    };
  }

  const characterId =
    createCharacterId(character);

  if (!characterId) {
    errors.push(
      "Character has no valid characterId."
    );
  }

  if (
    !Array.isArray(character.tags)
  ) {
    errors.push(
      "Character tags must be an array."
    );
  }

  const forms =
    Array.isArray(character.forms)
      ? character.forms
      : [];

  const formIds = new Set();

  for (const form of forms) {
    const formId =
      createFormId(
        {
          ...character,
          characterId,
        },
        form
      );

    if (formIds.has(formId)) {
      errors.push(
        `Duplicate formId: ${formId}`
      );
    }

    formIds.add(formId);

    if (
      form.characterId &&
      String(form.characterId) !==
        String(characterId)
    ) {
      errors.push(
        `Form "${form.name}" belongs to another character.`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    characterId,
  };
}