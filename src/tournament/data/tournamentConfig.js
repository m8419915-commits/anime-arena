/*
  Anime Arena — Grand Tournament
  Central rules for the separate tournament database.
*/

export const TOURNAMENT_DATABASE_CONFIG = {
  version: "0.2.0",

  verseCount: 31,
  charactersPerVerse: 30,
  totalBaseCharacters: 930,

  minimumFieldSize: 32,
  maximumFieldSize: 930,

  fieldSizePresets: [
    32,
    64,
    128,
    256,
    512,
    600,
    930,
  ],
};

export const FORM_RULESETS = {
  peak: {
    id: "peak",
    name: "Peak Forms",
    description:
      "Every character enters using their strongest tournament-eligible form.",
  },

  locked: {
    id: "locked",
    name: "Locked Forms",
    description:
      "Each character's form is chosen and locked before the tournament starts.",
  },

  baseOnly: {
    id: "baseOnly",
    name: "Base Forms Only",
    description:
      "Every character enters in their base form for a more tactical tournament.",
  },

  custom: {
    id: "custom",
    name: "Custom Rules",
    description:
      "The event uses custom form restrictions chosen during setup.",
  },
};

export const SEEDING_MODES = {
  ranked: {
    id: "ranked",
    name: "Power Seeding",
    description:
      "Higher-rated characters receive stronger seeds and possible play-in byes.",
  },

  random: {
    id: "random",
    name: "Random Draw",
    description:
      "Every selected character is placed randomly into the bracket.",
  },

  custom: {
    id: "custom",
    name: "Custom Seeding",
    description:
      "The player manually adjusts seeds before the tournament begins.",
  },
};

export const TOURNAMENT_STATUS = {
  setup: "setup",
  active: "active",
  completed: "completed",
};