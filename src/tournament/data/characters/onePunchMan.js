/*
  Anime Arena — Grand Tournament

  One Punch Man Tournament Database

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
   CHARACTER 01 — SAITAMA
========================================================= */

export const SAITAMA =
  createTournamentCharacter({

    id:
      "onePunchMan-saitama",

    verseId:
      "onePunchMan",

    name:
      "Saitama",

    aliases: [
      "Saitama",
      "Serious Saitama",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      61,

    description:
      "Saitama is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-saitama-standard",

        name:
          "Saitama",

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
          "One Punch Man combat training",
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
          "onePunchMan-saitama-peak",

        name:
          "Serious Saitama",

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
   CHARACTER 02 — GENOS
========================================================= */

export const GENOS =
  createTournamentCharacter({

    id:
      "onePunchMan-genos",

    verseId:
      "onePunchMan",

    name:
      "Genos",

    aliases: [
      "Genos",
      "Genos — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      62,

    description:
      "Genos is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-genos-standard",

        name:
          "Genos",

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
          "One Punch Man combat training",
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
          "onePunchMan-genos-peak",

        name:
          "Genos — Peak State",

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
   CHARACTER 03 — TATSUMAKI
========================================================= */

export const TATSUMAKI =
  createTournamentCharacter({

    id:
      "onePunchMan-tatsumaki",

    verseId:
      "onePunchMan",

    name:
      "Tatsumaki",

    aliases: [
      "Tatsumaki",
      "Tatsumaki — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      63,

    description:
      "Tatsumaki is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-tatsumaki-standard",

        name:
          "Tatsumaki",

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
          "One Punch Man combat training",
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
          "onePunchMan-tatsumaki-peak",

        name:
          "Tatsumaki — Peak State",

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
   CHARACTER 04 — BANG
========================================================= */

export const BANG =
  createTournamentCharacter({

    id:
      "onePunchMan-bang",

    verseId:
      "onePunchMan",

    name:
      "Bang",

    aliases: [
      "Bang",
      "Bang — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      64,

    description:
      "Bang is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-bang-standard",

        name:
          "Bang",

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
          "One Punch Man combat training",
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
          "onePunchMan-bang-peak",

        name:
          "Bang — Peak State",

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
   CHARACTER 05 — BOMB
========================================================= */

export const BOMB =
  createTournamentCharacter({

    id:
      "onePunchMan-bomb",

    verseId:
      "onePunchMan",

    name:
      "Bomb",

    aliases: [
      "Bomb",
      "Bomb — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      65,

    description:
      "Bomb is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-bomb-standard",

        name:
          "Bomb",

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
          "One Punch Man combat training",
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
          "onePunchMan-bomb-peak",

        name:
          "Bomb — Peak State",

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
   CHARACTER 06 — ATOMIC SAMURAI
========================================================= */

export const ATOMIC_SAMURAI =
  createTournamentCharacter({

    id:
      "onePunchMan-atomic-samurai",

    verseId:
      "onePunchMan",

    name:
      "Atomic Samurai",

    aliases: [
      "Atomic Samurai",
      "Atomic Samurai — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      66,

    description:
      "Atomic Samurai is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-atomic-samurai-standard",

        name:
          "Atomic Samurai",

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
          "One Punch Man combat training",
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
          "onePunchMan-atomic-samurai-peak",

        name:
          "Atomic Samurai — Peak State",

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
   CHARACTER 07 — CHILD EMPEROR
========================================================= */

export const CHILD_EMPEROR =
  createTournamentCharacter({

    id:
      "onePunchMan-child-emperor",

    verseId:
      "onePunchMan",

    name:
      "Child Emperor",

    aliases: [
      "Child Emperor",
      "Child Emperor — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      67,

    description:
      "Child Emperor is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-child-emperor-standard",

        name:
          "Child Emperor",

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
          "One Punch Man combat training",
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
          "onePunchMan-child-emperor-peak",

        name:
          "Child Emperor — Peak State",

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
   CHARACTER 08 — KING
========================================================= */

export const KING =
  createTournamentCharacter({

    id:
      "onePunchMan-king",

    verseId:
      "onePunchMan",

    name:
      "King",

    aliases: [
      "King",
      "King — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      68,

    description:
      "King is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-king-standard",

        name:
          "King",

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
          "One Punch Man combat training",
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
          "onePunchMan-king-peak",

        name:
          "King — Peak State",

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
   CHARACTER 09 — ZOMBIEMAN
========================================================= */

export const ZOMBIEMAN =
  createTournamentCharacter({

    id:
      "onePunchMan-zombieman",

    verseId:
      "onePunchMan",

    name:
      "Zombieman",

    aliases: [
      "Zombieman",
      "Zombieman — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      69,

    description:
      "Zombieman is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-zombieman-standard",

        name:
          "Zombieman",

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
          "One Punch Man combat training",
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
          "onePunchMan-zombieman-peak",

        name:
          "Zombieman — Peak State",

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
   CHARACTER 10 — DRIVE KNIGHT
========================================================= */

export const DRIVE_KNIGHT =
  createTournamentCharacter({

    id:
      "onePunchMan-drive-knight",

    verseId:
      "onePunchMan",

    name:
      "Drive Knight",

    aliases: [
      "Drive Knight",
      "Drive Knight — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      70,

    description:
      "Drive Knight is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-drive-knight-standard",

        name:
          "Drive Knight",

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
          "One Punch Man combat training",
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
          "onePunchMan-drive-knight-peak",

        name:
          "Drive Knight — Peak State",

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
   CHARACTER 11 — METAL KNIGHT
========================================================= */

export const METAL_KNIGHT =
  createTournamentCharacter({

    id:
      "onePunchMan-metal-knight",

    verseId:
      "onePunchMan",

    name:
      "Metal Knight",

    aliases: [
      "Metal Knight",
      "Metal Knight — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      71,

    description:
      "Metal Knight is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-metal-knight-standard",

        name:
          "Metal Knight",

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
          "One Punch Man combat training",
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
          "onePunchMan-metal-knight-peak",

        name:
          "Metal Knight — Peak State",

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
   CHARACTER 12 — FLASHY FLASH
========================================================= */

export const FLASHY_FLASH =
  createTournamentCharacter({

    id:
      "onePunchMan-flashy-flash",

    verseId:
      "onePunchMan",

    name:
      "Flashy Flash",

    aliases: [
      "Flashy Flash",
      "Flashy Flash — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      72,

    description:
      "Flashy Flash is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-flashy-flash-standard",

        name:
          "Flashy Flash",

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
          "One Punch Man combat training",
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
          "onePunchMan-flashy-flash-peak",

        name:
          "Flashy Flash — Peak State",

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
   CHARACTER 13 — SUPERALLOY DARKSHINE
========================================================= */

export const SUPERALLOY_DARKSHINE =
  createTournamentCharacter({

    id:
      "onePunchMan-superalloy-darkshine",

    verseId:
      "onePunchMan",

    name:
      "Superalloy Darkshine",

    aliases: [
      "Superalloy Darkshine",
      "Superalloy Darkshine — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      73,

    description:
      "Superalloy Darkshine is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-superalloy-darkshine-standard",

        name:
          "Superalloy Darkshine",

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
          "One Punch Man combat training",
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
          "onePunchMan-superalloy-darkshine-peak",

        name:
          "Superalloy Darkshine — Peak State",

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
   CHARACTER 14 — PIG GOD
========================================================= */

export const PIG_GOD =
  createTournamentCharacter({

    id:
      "onePunchMan-pig-god",

    verseId:
      "onePunchMan",

    name:
      "Pig God",

    aliases: [
      "Pig God",
      "Pig God — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      74,

    description:
      "Pig God is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-pig-god-standard",

        name:
          "Pig God",

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
          "One Punch Man combat training",
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
          "onePunchMan-pig-god-peak",

        name:
          "Pig God — Peak State",

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
   CHARACTER 15 — WATCHDOG MAN
========================================================= */

export const WATCHDOG_MAN =
  createTournamentCharacter({

    id:
      "onePunchMan-watchdog-man",

    verseId:
      "onePunchMan",

    name:
      "Watchdog Man",

    aliases: [
      "Watchdog Man",
      "Watchdog Man — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      75,

    description:
      "Watchdog Man is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-watchdog-man-standard",

        name:
          "Watchdog Man",

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
          "One Punch Man combat training",
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
          "onePunchMan-watchdog-man-peak",

        name:
          "Watchdog Man — Peak State",

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
   CHARACTER 16 — GAROU
========================================================= */

export const GAROU =
  createTournamentCharacter({

    id:
      "onePunchMan-garou",

    verseId:
      "onePunchMan",

    name:
      "Garou",

    aliases: [
      "Garou",
      "Cosmic Garou",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      76,

    description:
      "Garou is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-garou-standard",

        name:
          "Garou",

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
          "One Punch Man combat training",
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
          "onePunchMan-garou-peak",

        name:
          "Cosmic Garou",

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
   CHARACTER 17 — BOROS
========================================================= */

export const BOROS =
  createTournamentCharacter({

    id:
      "onePunchMan-boros",

    verseId:
      "onePunchMan",

    name:
      "Boros",

    aliases: [
      "Boros",
      "Boros — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      77,

    description:
      "Boros is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-boros-standard",

        name:
          "Boros",

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
          "One Punch Man combat training",
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
          "onePunchMan-boros-peak",

        name:
          "Boros — Peak State",

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
   CHARACTER 18 — PSYKOS
========================================================= */

export const PSYKOS =
  createTournamentCharacter({

    id:
      "onePunchMan-psykos",

    verseId:
      "onePunchMan",

    name:
      "Psykos",

    aliases: [
      "Psykos",
      "Psykos — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      78,

    description:
      "Psykos is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-psykos-standard",

        name:
          "Psykos",

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
          "One Punch Man combat training",
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
          "onePunchMan-psykos-peak",

        name:
          "Psykos — Peak State",

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
   CHARACTER 19 — OROCHI
========================================================= */

export const OROCHI =
  createTournamentCharacter({

    id:
      "onePunchMan-orochi",

    verseId:
      "onePunchMan",

    name:
      "Orochi",

    aliases: [
      "Orochi",
      "Orochi — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      79,

    description:
      "Orochi is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-orochi-standard",

        name:
          "Orochi",

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
          "One Punch Man combat training",
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
          "onePunchMan-orochi-peak",

        name:
          "Orochi — Peak State",

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
   CHARACTER 20 — FUHRER UGLY
========================================================= */

export const FUHRER_UGLY =
  createTournamentCharacter({

    id:
      "onePunchMan-fuhrer-ugly",

    verseId:
      "onePunchMan",

    name:
      "Fuhrer Ugly",

    aliases: [
      "Fuhrer Ugly",
      "Fuhrer Ugly — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      80,

    description:
      "Fuhrer Ugly is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-fuhrer-ugly-standard",

        name:
          "Fuhrer Ugly",

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
          "One Punch Man combat training",
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
          "onePunchMan-fuhrer-ugly-peak",

        name:
          "Fuhrer Ugly — Peak State",

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
   CHARACTER 21 — GOUKETSU
========================================================= */

export const GOUKETSU =
  createTournamentCharacter({

    id:
      "onePunchMan-gouketsu",

    verseId:
      "onePunchMan",

    name:
      "Gouketsu",

    aliases: [
      "Gouketsu",
      "Gouketsu — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      81,

    description:
      "Gouketsu is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-gouketsu-standard",

        name:
          "Gouketsu",

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
          "One Punch Man combat training",
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
          "onePunchMan-gouketsu-peak",

        name:
          "Gouketsu — Peak State",

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
   CHARACTER 22 — EVIL NATURAL WATER
========================================================= */

export const EVIL_NATURAL_WATER =
  createTournamentCharacter({

    id:
      "onePunchMan-evil-natural-water",

    verseId:
      "onePunchMan",

    name:
      "Evil Natural Water",

    aliases: [
      "Evil Natural Water",
      "Evil Natural Water — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      82,

    description:
      "Evil Natural Water is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-evil-natural-water-standard",

        name:
          "Evil Natural Water",

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
          "One Punch Man combat training",
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
          "onePunchMan-evil-natural-water-peak",

        name:
          "Evil Natural Water — Peak State",

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
   CHARACTER 23 — HOMELESS EMPEROR
========================================================= */

export const HOMELESS_EMPEROR =
  createTournamentCharacter({

    id:
      "onePunchMan-homeless-emperor",

    verseId:
      "onePunchMan",

    name:
      "Homeless Emperor",

    aliases: [
      "Homeless Emperor",
      "Homeless Emperor — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      83,

    description:
      "Homeless Emperor is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-homeless-emperor-standard",

        name:
          "Homeless Emperor",

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
          "One Punch Man combat training",
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
          "onePunchMan-homeless-emperor-peak",

        name:
          "Homeless Emperor — Peak State",

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
   CHARACTER 24 — NYAN
========================================================= */

export const NYAN =
  createTournamentCharacter({

    id:
      "onePunchMan-nyan",

    verseId:
      "onePunchMan",

    name:
      "Nyan",

    aliases: [
      "Nyan",
      "Nyan — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      84,

    description:
      "Nyan is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-nyan-standard",

        name:
          "Nyan",

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
          "One Punch Man combat training",
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
          "onePunchMan-nyan-peak",

        name:
          "Nyan — Peak State",

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
   CHARACTER 25 — PLATINUM SPERM
========================================================= */

export const PLATINUM_SPERM =
  createTournamentCharacter({

    id:
      "onePunchMan-platinum-sperm",

    verseId:
      "onePunchMan",

    name:
      "Platinum Sperm",

    aliases: [
      "Platinum Sperm",
      "Platinum Sperm — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      85,

    description:
      "Platinum Sperm is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-platinum-sperm-standard",

        name:
          "Platinum Sperm",

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
          "One Punch Man combat training",
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
          "onePunchMan-platinum-sperm-peak",

        name:
          "Platinum Sperm — Peak State",

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
   CHARACTER 26 — GOLDEN SPERM
========================================================= */

export const GOLDEN_SPERM =
  createTournamentCharacter({

    id:
      "onePunchMan-golden-sperm",

    verseId:
      "onePunchMan",

    name:
      "Golden Sperm",

    aliases: [
      "Golden Sperm",
      "Golden Sperm — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      86,

    description:
      "Golden Sperm is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-golden-sperm-standard",

        name:
          "Golden Sperm",

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
          "One Punch Man combat training",
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
          "onePunchMan-golden-sperm-peak",

        name:
          "Golden Sperm — Peak State",

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
   CHARACTER 27 — CARNAGE KABUTO
========================================================= */

export const CARNAGE_KABUTO =
  createTournamentCharacter({

    id:
      "onePunchMan-carnage-kabuto",

    verseId:
      "onePunchMan",

    name:
      "Carnage Kabuto",

    aliases: [
      "Carnage Kabuto",
      "Carnage Kabuto — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      87,

    description:
      "Carnage Kabuto is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-carnage-kabuto-standard",

        name:
          "Carnage Kabuto",

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
          "One Punch Man combat training",
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
          "onePunchMan-carnage-kabuto-peak",

        name:
          "Carnage Kabuto — Peak State",

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
   CHARACTER 28 — DEEP SEA KING
========================================================= */

export const DEEP_SEA_KING =
  createTournamentCharacter({

    id:
      "onePunchMan-deep-sea-king",

    verseId:
      "onePunchMan",

    name:
      "Deep Sea King",

    aliases: [
      "Deep Sea King",
      "Deep Sea King — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      88,

    description:
      "Deep Sea King is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-deep-sea-king-standard",

        name:
          "Deep Sea King",

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
          "One Punch Man combat training",
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
          "onePunchMan-deep-sea-king-peak",

        name:
          "Deep Sea King — Peak State",

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
   CHARACTER 29 — MOSQUITO GIRL
========================================================= */

export const MOSQUITO_GIRL =
  createTournamentCharacter({

    id:
      "onePunchMan-mosquito-girl",

    verseId:
      "onePunchMan",

    name:
      "Mosquito Girl",

    aliases: [
      "Mosquito Girl",
      "Mosquito Girl — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      89,

    description:
      "Mosquito Girl is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-mosquito-girl-standard",

        name:
          "Mosquito Girl",

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
          "One Punch Man combat training",
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
          "onePunchMan-mosquito-girl-peak",

        name:
          "Mosquito Girl — Peak State",

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
   CHARACTER 30 — SPEED-O-SOUND SONIC
========================================================= */

export const SPEED_O_SOUND_SONIC =
  createTournamentCharacter({

    id:
      "onePunchMan-speed-o-sound-sonic",

    verseId:
      "onePunchMan",

    name:
      "Speed-o-Sound Sonic",

    aliases: [
      "Speed-o-Sound Sonic",
      "Speed-o-Sound Sonic — Peak State",
    ],

    tags: [
      "One Punch Man",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      90,

    description:
      "Speed-o-Sound Sonic is a major tournament entry from One Punch Man. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "onePunchMan-speed-o-sound-sonic-standard",

        name:
          "Speed-o-Sound Sonic",

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
          "One Punch Man combat training",
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
          "onePunchMan-speed-o-sound-sonic-peak",

        name:
          "Speed-o-Sound Sonic — Peak State",

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

export const ONE_PUNCH_MAN_CHARACTERS = [

  SAITAMA,
  GENOS,
  TATSUMAKI,
  BANG,
  BOMB,
  ATOMIC_SAMURAI,
  CHILD_EMPEROR,
  KING,
  ZOMBIEMAN,
  DRIVE_KNIGHT,
  METAL_KNIGHT,
  FLASHY_FLASH,
  SUPERALLOY_DARKSHINE,
  PIG_GOD,
  WATCHDOG_MAN,
  GAROU,
  BOROS,
  PSYKOS,
  OROCHI,
  FUHRER_UGLY,
  GOUKETSU,
  EVIL_NATURAL_WATER,
  HOMELESS_EMPEROR,
  NYAN,
  PLATINUM_SPERM,
  GOLDEN_SPERM,
  CARNAGE_KABUTO,
  DEEP_SEA_KING,
  MOSQUITO_GIRL,
  SPEED_O_SOUND_SONIC,
];
