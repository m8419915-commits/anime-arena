export function normalizeId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export function createCharacterId(character) {
  if (character?.characterId) {
    return character.characterId;
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

export function createFormId(character, form) {
  if (form?.formId) {
    return form.formId;
  }

  const characterId =
    createCharacterId(character);

  const formName =
    form?.name ||
    "base";

  return `${characterId}_${normalizeId(formName)}`;
}
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
      ? character.tags
      : [],

    forms: forms.map((form) => ({
      ...form,

      formId:
        createFormId(character, form),

      characterId,

      name:
        form?.name ||
        "Base",
    })),
  };
}