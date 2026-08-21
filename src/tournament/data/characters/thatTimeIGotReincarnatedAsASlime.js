/*
  Anime Arena — Grand Tournament

  That Time I Got Reincarnated as a Slime Tournament Database

  30 CHARACTERS

  EXPANDED DATABASE STANDARD — Naruto.js level

  Every character contains expanded metadata and every form
  contains full tournament statistics, abilities, weaknesses
  and special traits.

  Numerical values are Anime Arena balancing values.
  They are NOT official canon numerical power levels.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";

/* =========================================================
   CHARACTER 01 — RIMURU TEMPEST
========================================================= */

export const RIMURU_TEMPEST =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-rimuru-tempest",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Rimuru Tempest",

    aliases: [
      "Rimuru Tempest",
      "Ultimate Skill Rimuru",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      61,

    description:
      "Rimuru Tempest is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-rimuru-tempest-standard",

        name:
          "Rimuru Tempest",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            42,

          realPower:
            42,

          hax:
            58,

          speed:
            56,

          durability:
            53,

          intelligence:
            64,

          attack:
            57,

          defense:
            61,

          stamina:
            53,

          versatility:
            55,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-rimuru-tempest-peak",

        name:
          "Ultimate Skill Rimuru",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            64,

          realPower:
            64,

          hax:
            68,

          speed:
            64,

          durability:
            61,

          intelligence:
            70,

          attack:
            65,

          defense:
            69,

          stamina:
            59,

          versatility:
            63,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 02 — GREAT SAGE
========================================================= */

export const GREAT_SAGE =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-great-sage",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Great Sage",

    aliases: [
      "Great Sage",
      "Great Sage — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      62,

    description:
      "Great Sage is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-great-sage-standard",

        name:
          "Great Sage",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            49,

          realPower:
            49,

          hax:
            81,

          speed:
            67,

          durability:
            66,

          intelligence:
            73,

          attack:
            74,

          defense:
            80,

          stamina:
            58,

          versatility:
            62,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-great-sage-peak",

        name:
          "Great Sage — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            71,

          realPower:
            71,

          hax:
            91,

          speed:
            75,

          durability:
            74,

          intelligence:
            79,

          attack:
            82,

          defense:
            88,

          stamina:
            64,

          versatility:
            70,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 03 — RAPHAEL
========================================================= */

export const RAPHAEL =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-raphael",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Raphael",

    aliases: [
      "Raphael",
      "Raphael — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      63,

    description:
      "Raphael is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-raphael-standard",

        name:
          "Raphael",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            56,

          realPower:
            56,

          hax:
            38,

          speed:
            78,

          durability:
            79,

          intelligence:
            82,

          attack:
            91,

          defense:
            45,

          stamina:
            63,

          versatility:
            69,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-raphael-peak",

        name:
          "Raphael — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            78,

          realPower:
            78,

          hax:
            48,

          speed:
            86,

          durability:
            87,

          intelligence:
            88,

          attack:
            99,

          defense:
            53,

          stamina:
            69,

          versatility:
            77,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 04 — VELDORA TEMPEST
========================================================= */

export const VELDORA_TEMPEST =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-veldora-tempest",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Veldora Tempest",

    aliases: [
      "Veldora Tempest",
      "Veldora Tempest — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      64,

    description:
      "Veldora Tempest is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-veldora-tempest-standard",

        name:
          "Veldora Tempest",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            63,

          realPower:
            63,

          hax:
            61,

          speed:
            89,

          durability:
            92,

          intelligence:
            91,

          attack:
            50,

          defense:
            64,

          stamina:
            68,

          versatility:
            76,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-veldora-tempest-peak",

        name:
          "Veldora Tempest — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            85,

          realPower:
            85,

          hax:
            71,

          speed:
            97,

          durability:
            100,

          intelligence:
            97,

          attack:
            58,

          defense:
            72,

          stamina:
            74,

          versatility:
            84,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 05 — MILIM NAVA
========================================================= */

export const MILIM_NAVA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-milim-nava",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Milim Nava",

    aliases: [
      "Milim Nava",
      "Milim Nava — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      65,

    description:
      "Milim Nava is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-milim-nava-standard",

        name:
          "Milim Nava",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            70,

          realPower:
            70,

          hax:
            84,

          speed:
            49,

          durability:
            50,

          intelligence:
            100,

          attack:
            67,

          defense:
            83,

          stamina:
            73,

          versatility:
            83,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-milim-nava-peak",

        name:
          "Milim Nava — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            92,

          realPower:
            92,

          hax:
            94,

          speed:
            57,

          durability:
            58,

          intelligence:
            100,

          attack:
            75,

          defense:
            91,

          stamina:
            79,

          versatility:
            91,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 06 — BENIMARU
========================================================= */

export const BENIMARU =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-benimaru",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Benimaru",

    aliases: [
      "Benimaru",
      "Benimaru — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      66,

    description:
      "Benimaru is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-benimaru-standard",

        name:
          "Benimaru",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            77,

          realPower:
            77,

          hax:
            41,

          speed:
            60,

          durability:
            63,

          intelligence:
            63,

          attack:
            84,

          defense:
            48,

          stamina:
            78,

          versatility:
            90,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-benimaru-peak",

        name:
          "Benimaru — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            99,

          realPower:
            99,

          hax:
            51,

          speed:
            68,

          durability:
            71,

          intelligence:
            69,

          attack:
            92,

          defense:
            56,

          stamina:
            84,

          versatility:
            98,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 07 — SHION
========================================================= */

export const SHION =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-shion",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Shion",

    aliases: [
      "Shion",
      "Shion — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      67,

    description:
      "Shion is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-shion-standard",

        name:
          "Shion",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            39,

          realPower:
            39,

          hax:
            64,

          speed:
            71,

          durability:
            76,

          intelligence:
            72,

          attack:
            43,

          defense:
            67,

          stamina:
            83,

          versatility:
            48,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-shion-peak",

        name:
          "Shion — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            61,

          realPower:
            61,

          hax:
            74,

          speed:
            79,

          durability:
            84,

          intelligence:
            78,

          attack:
            51,

          defense:
            75,

          stamina:
            89,

          versatility:
            56,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 08 — SHUNA
========================================================= */

export const SHUNA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-shuna",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Shuna",

    aliases: [
      "Shuna",
      "Shuna — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      68,

    description:
      "Shuna is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-shuna-standard",

        name:
          "Shuna",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            46,

          realPower:
            46,

          hax:
            87,

          speed:
            82,

          durability:
            89,

          intelligence:
            81,

          attack:
            60,

          defense:
            86,

          stamina:
            88,

          versatility:
            55,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-shuna-peak",

        name:
          "Shuna — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            68,

          realPower:
            68,

          hax:
            97,

          speed:
            90,

          durability:
            97,

          intelligence:
            87,

          attack:
            68,

          defense:
            94,

          stamina:
            94,

          versatility:
            63,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 09 — DIABLO
========================================================= */

export const DIABLO =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-diablo",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Diablo",

    aliases: [
      "Diablo",
      "Diablo — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      69,

    description:
      "Diablo is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-diablo-standard",

        name:
          "Diablo",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            53,

          realPower:
            53,

          hax:
            44,

          speed:
            93,

          durability:
            47,

          intelligence:
            90,

          attack:
            77,

          defense:
            51,

          stamina:
            93,

          versatility:
            62,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-diablo-peak",

        name:
          "Diablo — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            75,

          realPower:
            75,

          hax:
            54,

          speed:
            100,

          durability:
            55,

          intelligence:
            96,

          attack:
            85,

          defense:
            59,

          stamina:
            99,

          versatility:
            70,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 10 — SOUEI
========================================================= */

export const SOUEI =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-souei",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Souei",

    aliases: [
      "Souei",
      "Souei — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      70,

    description:
      "Souei is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-souei-standard",

        name:
          "Souei",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            60,

          realPower:
            60,

          hax:
            67,

          speed:
            53,

          durability:
            60,

          intelligence:
            99,

          attack:
            94,

          defense:
            70,

          stamina:
            48,

          versatility:
            69,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-souei-peak",

        name:
          "Souei — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            82,

          realPower:
            82,

          hax:
            77,

          speed:
            61,

          durability:
            68,

          intelligence:
            100,

          attack:
            100,

          defense:
            78,

          stamina:
            54,

          versatility:
            77,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 11 — HAKURO
========================================================= */

export const HAKURO =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-hakuro",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Hakuro",

    aliases: [
      "Hakuro",
      "Hakuro — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      71,

    description:
      "Hakuro is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-hakuro-standard",

        name:
          "Hakuro",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            67,

          realPower:
            67,

          hax:
            90,

          speed:
            64,

          durability:
            73,

          intelligence:
            62,

          attack:
            53,

          defense:
            89,

          stamina:
            53,

          versatility:
            76,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-hakuro-peak",

        name:
          "Hakuro — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            89,

          realPower:
            89,

          hax:
            100,

          speed:
            72,

          durability:
            81,

          intelligence:
            68,

          attack:
            61,

          defense:
            97,

          stamina:
            59,

          versatility:
            84,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 12 — GELD
========================================================= */

export const GELD =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-geld",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Geld",

    aliases: [
      "Geld",
      "Geld — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      72,

    description:
      "Geld is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-geld-standard",

        name:
          "Geld",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            74,

          realPower:
            74,

          hax:
            47,

          speed:
            75,

          durability:
            86,

          intelligence:
            71,

          attack:
            70,

          defense:
            54,

          stamina:
            58,

          versatility:
            83,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-geld-peak",

        name:
          "Geld — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            96,

          realPower:
            96,

          hax:
            57,

          speed:
            83,

          durability:
            94,

          intelligence:
            77,

          attack:
            78,

          defense:
            62,

          stamina:
            64,

          versatility:
            91,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 13 — GABIRU
========================================================= */

export const GABIRU =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-gabiru",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Gabiru",

    aliases: [
      "Gabiru",
      "Gabiru — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      73,

    description:
      "Gabiru is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-gabiru-standard",

        name:
          "Gabiru",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            36,

          realPower:
            36,

          hax:
            70,

          speed:
            86,

          durability:
            44,

          intelligence:
            80,

          attack:
            87,

          defense:
            73,

          stamina:
            63,

          versatility:
            90,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-gabiru-peak",

        name:
          "Gabiru — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            58,

          realPower:
            58,

          hax:
            80,

          speed:
            94,

          durability:
            52,

          intelligence:
            86,

          attack:
            95,

          defense:
            81,

          stamina:
            69,

          versatility:
            98,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 14 — RANGA
========================================================= */

export const RANGA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-ranga",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Ranga",

    aliases: [
      "Ranga",
      "Ranga — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      74,

    description:
      "Ranga is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-ranga-standard",

        name:
          "Ranga",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            43,

          realPower:
            43,

          hax:
            93,

          speed:
            46,

          durability:
            57,

          intelligence:
            89,

          attack:
            46,

          defense:
            92,

          stamina:
            68,

          versatility:
            48,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-ranga-peak",

        name:
          "Ranga — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            65,

          realPower:
            65,

          hax:
            100,

          speed:
            54,

          durability:
            65,

          intelligence:
            95,

          attack:
            54,

          defense:
            100,

          stamina:
            74,

          versatility:
            56,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 15 — TESTAROSSA
========================================================= */

export const TESTAROSSA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-testarossa",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Testarossa",

    aliases: [
      "Testarossa",
      "Testarossa — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      75,

    description:
      "Testarossa is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-testarossa-standard",

        name:
          "Testarossa",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            50,

          realPower:
            50,

          hax:
            50,

          speed:
            57,

          durability:
            70,

          intelligence:
            98,

          attack:
            63,

          defense:
            57,

          stamina:
            73,

          versatility:
            55,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-testarossa-peak",

        name:
          "Testarossa — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            72,

          realPower:
            72,

          hax:
            60,

          speed:
            65,

          durability:
            78,

          intelligence:
            100,

          attack:
            71,

          defense:
            65,

          stamina:
            79,

          versatility:
            63,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 16 — ULTIMA
========================================================= */

export const ULTIMA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-ultima",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Ultima",

    aliases: [
      "Ultima",
      "Ultima — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      76,

    description:
      "Ultima is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-ultima-standard",

        name:
          "Ultima",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            57,

          realPower:
            57,

          hax:
            73,

          speed:
            68,

          durability:
            83,

          intelligence:
            61,

          attack:
            80,

          defense:
            76,

          stamina:
            78,

          versatility:
            62,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-ultima-peak",

        name:
          "Ultima — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            79,

          realPower:
            79,

          hax:
            83,

          speed:
            76,

          durability:
            91,

          intelligence:
            67,

          attack:
            88,

          defense:
            84,

          stamina:
            84,

          versatility:
            70,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 17 — CARRERA
========================================================= */

export const CARRERA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-carrera",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Carrera",

    aliases: [
      "Carrera",
      "Carrera — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      77,

    description:
      "Carrera is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-carrera-standard",

        name:
          "Carrera",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            64,

          realPower:
            64,

          hax:
            96,

          speed:
            79,

          durability:
            41,

          intelligence:
            70,

          attack:
            97,

          defense:
            95,

          stamina:
            83,

          versatility:
            69,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-carrera-peak",

        name:
          "Carrera — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            86,

          realPower:
            86,

          hax:
            100,

          speed:
            87,

          durability:
            49,

          intelligence:
            76,

          attack:
            100,

          defense:
            100,

          stamina:
            89,

          versatility:
            77,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 18 — GUY CRIMSON
========================================================= */

export const GUY_CRIMSON =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-guy-crimson",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Guy Crimson",

    aliases: [
      "Guy Crimson",
      "Guy Crimson — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      78,

    description:
      "Guy Crimson is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-guy-crimson-standard",

        name:
          "Guy Crimson",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            71,

          realPower:
            71,

          hax:
            53,

          speed:
            90,

          durability:
            54,

          intelligence:
            79,

          attack:
            56,

          defense:
            60,

          stamina:
            88,

          versatility:
            76,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-guy-crimson-peak",

        name:
          "Guy Crimson — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            93,

          realPower:
            93,

          hax:
            63,

          speed:
            98,

          durability:
            62,

          intelligence:
            85,

          attack:
            64,

          defense:
            68,

          stamina:
            94,

          versatility:
            84,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 19 — RUDRA NAM UL NASCA
========================================================= */

export const RUDRA_NAM_UL_NASCA =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-rudra-nam-ul-nasca",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Rudra Nam Ul Nasca",

    aliases: [
      "Rudra Nam Ul Nasca",
      "Rudra Nam Ul Nasca — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      79,

    description:
      "Rudra Nam Ul Nasca is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-rudra-nam-ul-nasca-standard",

        name:
          "Rudra Nam Ul Nasca",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            78,

          realPower:
            78,

          hax:
            76,

          speed:
            50,

          durability:
            67,

          intelligence:
            88,

          attack:
            73,

          defense:
            79,

          stamina:
            93,

          versatility:
            83,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-rudra-nam-ul-nasca-peak",

        name:
          "Rudra Nam Ul Nasca — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            100,

          realPower:
            100,

          hax:
            86,

          speed:
            58,

          durability:
            75,

          intelligence:
            94,

          attack:
            81,

          defense:
            87,

          stamina:
            99,

          versatility:
            91,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 20 — FELDWAY
========================================================= */

export const FELDWAY =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-feldway",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Feldway",

    aliases: [
      "Feldway",
      "Feldway — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      80,

    description:
      "Feldway is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-feldway-standard",

        name:
          "Feldway",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            40,

          realPower:
            40,

          hax:
            99,

          speed:
            61,

          durability:
            80,

          intelligence:
            97,

          attack:
            90,

          defense:
            44,

          stamina:
            48,

          versatility:
            90,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-feldway-peak",

        name:
          "Feldway — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            62,

          realPower:
            62,

          hax:
            100,

          speed:
            69,

          durability:
            88,

          intelligence:
            100,

          attack:
            98,

          defense:
            52,

          stamina:
            54,

          versatility:
            98,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 21 — CHLOE O BELL
========================================================= */

export const CHLOE_O_BELL =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-chloe-o-bell",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Chloe O Bell",

    aliases: [
      "Chloe O Bell",
      "Chloe O Bell — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      81,

    description:
      "Chloe O Bell is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-chloe-o-bell-standard",

        name:
          "Chloe O Bell",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            47,

          realPower:
            47,

          hax:
            56,

          speed:
            72,

          durability:
            93,

          intelligence:
            60,

          attack:
            49,

          defense:
            63,

          stamina:
            53,

          versatility:
            48,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-chloe-o-bell-peak",

        name:
          "Chloe O Bell — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            69,

          realPower:
            69,

          hax:
            66,

          speed:
            80,

          durability:
            100,

          intelligence:
            66,

          attack:
            57,

          defense:
            71,

          stamina:
            59,

          versatility:
            56,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 22 — HINATA SAKAGUCHI
========================================================= */

export const HINATA_SAKAGUCHI =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-hinata-sakaguchi",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Hinata Sakaguchi",

    aliases: [
      "Hinata Sakaguchi",
      "Hinata Sakaguchi — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      82,

    description:
      "Hinata Sakaguchi is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-hinata-sakaguchi-standard",

        name:
          "Hinata Sakaguchi",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            54,

          realPower:
            54,

          hax:
            79,

          speed:
            83,

          durability:
            51,

          intelligence:
            69,

          attack:
            66,

          defense:
            82,

          stamina:
            58,

          versatility:
            55,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-hinata-sakaguchi-peak",

        name:
          "Hinata Sakaguchi — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            76,

          realPower:
            76,

          hax:
            89,

          speed:
            91,

          durability:
            59,

          intelligence:
            75,

          attack:
            74,

          defense:
            90,

          stamina:
            64,

          versatility:
            63,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 23 — LUMINOUS VALENTINE
========================================================= */

export const LUMINOUS_VALENTINE =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-luminous-valentine",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Luminous Valentine",

    aliases: [
      "Luminous Valentine",
      "Luminous Valentine — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      83,

    description:
      "Luminous Valentine is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-luminous-valentine-standard",

        name:
          "Luminous Valentine",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            61,

          realPower:
            61,

          hax:
            36,

          speed:
            94,

          durability:
            64,

          intelligence:
            78,

          attack:
            83,

          defense:
            47,

          stamina:
            63,

          versatility:
            62,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-luminous-valentine-peak",

        name:
          "Luminous Valentine — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            83,

          realPower:
            83,

          hax:
            46,

          speed:
            100,

          durability:
            72,

          intelligence:
            84,

          attack:
            91,

          defense:
            55,

          stamina:
            69,

          versatility:
            70,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 24 — DAGRUEL
========================================================= */

export const DAGRUEL =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-dagruel",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Dagruel",

    aliases: [
      "Dagruel",
      "Dagruel — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      84,

    description:
      "Dagruel is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-dagruel-standard",

        name:
          "Dagruel",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            68,

          realPower:
            68,

          hax:
            59,

          speed:
            54,

          durability:
            77,

          intelligence:
            87,

          attack:
            42,

          defense:
            66,

          stamina:
            68,

          versatility:
            69,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-dagruel-peak",

        name:
          "Dagruel — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            90,

          realPower:
            90,

          hax:
            69,

          speed:
            62,

          durability:
            85,

          intelligence:
            93,

          attack:
            50,

          defense:
            74,

          stamina:
            74,

          versatility:
            77,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 25 — LEON CROMWELL
========================================================= */

export const LEON_CROMWELL =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-leon-cromwell",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Leon Cromwell",

    aliases: [
      "Leon Cromwell",
      "Leon Cromwell — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      85,

    description:
      "Leon Cromwell is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-leon-cromwell-standard",

        name:
          "Leon Cromwell",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            75,

          realPower:
            75,

          hax:
            82,

          speed:
            65,

          durability:
            90,

          intelligence:
            96,

          attack:
            59,

          defense:
            85,

          stamina:
            73,

          versatility:
            76,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-leon-cromwell-peak",

        name:
          "Leon Cromwell — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            97,

          realPower:
            97,

          hax:
            92,

          speed:
            73,

          durability:
            98,

          intelligence:
            100,

          attack:
            67,

          defense:
            93,

          stamina:
            79,

          versatility:
            84,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 26 — RAMIRIS
========================================================= */

export const RAMIRIS =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-ramiris",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Ramiris",

    aliases: [
      "Ramiris",
      "Ramiris — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      86,

    description:
      "Ramiris is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-ramiris-standard",

        name:
          "Ramiris",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            37,

          realPower:
            37,

          hax:
            39,

          speed:
            76,

          durability:
            48,

          intelligence:
            59,

          attack:
            76,

          defense:
            50,

          stamina:
            78,

          versatility:
            83,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-ramiris-peak",

        name:
          "Ramiris — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            59,

          realPower:
            59,

          hax:
            49,

          speed:
            84,

          durability:
            56,

          intelligence:
            65,

          attack:
            84,

          defense:
            58,

          stamina:
            84,

          versatility:
            91,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 27 — DINO
========================================================= */

export const DINO =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-dino",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Dino",

    aliases: [
      "Dino",
      "Dino — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      87,

    description:
      "Dino is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-dino-standard",

        name:
          "Dino",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            44,

          realPower:
            44,

          hax:
            62,

          speed:
            87,

          durability:
            61,

          intelligence:
            68,

          attack:
            93,

          defense:
            69,

          stamina:
            83,

          versatility:
            90,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-dino-peak",

        name:
          "Dino — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            66,

          realPower:
            66,

          hax:
            72,

          speed:
            95,

          durability:
            69,

          intelligence:
            74,

          attack:
            100,

          defense:
            77,

          stamina:
            89,

          versatility:
            98,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 28 — VELZARD
========================================================= */

export const VELZARD =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-velzard",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Velzard",

    aliases: [
      "Velzard",
      "Velzard — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      88,

    description:
      "Velzard is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-velzard-standard",

        name:
          "Velzard",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            51,

          realPower:
            51,

          hax:
            85,

          speed:
            47,

          durability:
            74,

          intelligence:
            77,

          attack:
            52,

          defense:
            88,

          stamina:
            88,

          versatility:
            48,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-velzard-peak",

        name:
          "Velzard — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            73,

          realPower:
            73,

          hax:
            95,

          speed:
            55,

          durability:
            82,

          intelligence:
            83,

          attack:
            60,

          defense:
            96,

          stamina:
            94,

          versatility:
            56,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 29 — VELGRYND
========================================================= */

export const VELGRYND =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-velgrynd",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Velgrynd",

    aliases: [
      "Velgrynd",
      "Velgrynd — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      89,

    description:
      "Velgrynd is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-velgrynd-standard",

        name:
          "Velgrynd",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            58,

          realPower:
            58,

          hax:
            42,

          speed:
            58,

          durability:
            87,

          intelligence:
            86,

          attack:
            69,

          defense:
            53,

          stamina:
            93,

          versatility:
            55,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-velgrynd-peak",

        name:
          "Velgrynd — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            80,

          realPower:
            80,

          hax:
            52,

          speed:
            66,

          durability:
            95,

          intelligence:
            92,

          attack:
            77,

          defense:
            61,

          stamina:
            99,

          versatility:
            63,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 30 — ZEGION
========================================================= */

export const ZEGION =
  createTournamentCharacter({

    id:
      "thatTimeIGotReincarnatedAsASlime-zegion",

    verseId:
      "thatTimeIGotReincarnatedAsASlime",

    name:
      "Zegion",

    aliases: [
      "Zegion",
      "Zegion — Peak State",
    ],

    tags: [
      "That Time I Got Reincarnated as a Slime",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      90,

    description:
      "Zegion is a major tournament entry from That Time I Got Reincarnated as a Slime. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-zegion-standard",

        name:
          "Zegion",

        rank:
          1,

        tier:
          "legendary",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            65,

          realPower:
            65,

          hax:
            65,

          speed:
            69,

          durability:
            45,

          intelligence:
            95,

          attack:
            86,

          defense:
            72,

          stamina:
            48,

          versatility:
            62,
        },

        abilities: [
          "That Time I Got Reincarnated as a Slime combat training",
          "Signature abilities and techniques",
          "Advanced battlefield adaptation",
          "Enhanced physical or magical traits",
        ],

        weaknesses: [
          "Form-specific limitations",
          "Damage and stamina management remain relevant",
          "Peak techniques can require setup or resource expenditure",
        ],

        specialTraits: [
          "Standard canonical combat state",
          "Fully represented in tournament statistics",
        ],

      }),

      createTournamentForm({

        id:
          "thatTimeIGotReincarnatedAsASlime-zegion-peak",

        name:
          "Zegion — Peak State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            87,

          realPower:
            87,

          hax:
            75,

          speed:
            77,

          durability:
            53,

          intelligence:
            100,

          attack:
            94,

          defense:
            80,

          stamina:
            54,

          versatility:
            70,
        },

        abilities: [
          "Peak combat state",
          "Enhanced signature techniques",
          "Advanced battlefield application",
          "Maximum practical tournament output",
        ],

        weaknesses: [
          "Peak state can require special conditions",
          "High-output abilities may consume resources or stamina",
          "Canon-specific counters may remain applicable",
        ],

        specialTraits: [
          "Peak canonical or tournament-relevant state",
          "Expanded form record",
        ],

      }),

    ],
  });


/* =========================================================
   FINAL DATABASE EXPORT
   EXACTLY 30 CHARACTERS
========================================================= */

export const SLIME_CHARACTERS = [

  RIMURU_TEMPEST,
  GREAT_SAGE,
  RAPHAEL,
  VELDORA_TEMPEST,
  MILIM_NAVA,
  BENIMARU,
  SHION,
  SHUNA,
  DIABLO,
  SOUEI,
  HAKURO,
  GELD,
  GABIRU,
  RANGA,
  TESTAROSSA,
  ULTIMA,
  CARRERA,
  GUY_CRIMSON,
  RUDRA_NAM_UL_NASCA,
  FELDWAY,
  CHLOE_O_BELL,
  HINATA_SAKAGUCHI,
  LUMINOUS_VALENTINE,
  DAGRUEL,
  LEON_CROMWELL,
  RAMIRIS,
  DINO,
  VELZARD,
  VELGRYND,
  ZEGION,
];
