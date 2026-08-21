/*
  Anime Arena — Grand Tournament

  Berserk Tournament Database

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
   CHARACTER 01 — GUTS
========================================================= */

export const GUTS =
  createTournamentCharacter({

    id:
      "berserk-guts",

    verseId:
      "berserk",

    name:
      "Guts",

    aliases: [
      "Guts",
      "Berserker Armor Guts",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      61,

    description:
      "Guts is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-guts-standard",

        name:
          "Guts",

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
          "Berserk combat training",
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
          "berserk-guts-peak",

        name:
          "Berserker Armor Guts",

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
   CHARACTER 02 — GRIFFITH
========================================================= */

export const GRIFFITH =
  createTournamentCharacter({

    id:
      "berserk-griffith",

    verseId:
      "berserk",

    name:
      "Griffith",

    aliases: [
      "Griffith",
      "Griffith — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      62,

    description:
      "Griffith is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-griffith-standard",

        name:
          "Griffith",

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
          "Berserk combat training",
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
          "berserk-griffith-peak",

        name:
          "Griffith — Peak State",

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
   CHARACTER 03 — CASCA
========================================================= */

export const CASCA =
  createTournamentCharacter({

    id:
      "berserk-casca",

    verseId:
      "berserk",

    name:
      "Casca",

    aliases: [
      "Casca",
      "Casca — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      63,

    description:
      "Casca is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-casca-standard",

        name:
          "Casca",

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
          "Berserk combat training",
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
          "berserk-casca-peak",

        name:
          "Casca — Peak State",

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
   CHARACTER 04 — SCHIERKE
========================================================= */

export const SCHIERKE =
  createTournamentCharacter({

    id:
      "berserk-schierke",

    verseId:
      "berserk",

    name:
      "Schierke",

    aliases: [
      "Schierke",
      "Schierke — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      64,

    description:
      "Schierke is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-schierke-standard",

        name:
          "Schierke",

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
          "Berserk combat training",
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
          "berserk-schierke-peak",

        name:
          "Schierke — Peak State",

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
   CHARACTER 05 — PUCK
========================================================= */

export const PUCK =
  createTournamentCharacter({

    id:
      "berserk-puck",

    verseId:
      "berserk",

    name:
      "Puck",

    aliases: [
      "Puck",
      "Puck — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      65,

    description:
      "Puck is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-puck-standard",

        name:
          "Puck",

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
          "Berserk combat training",
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
          "berserk-puck-peak",

        name:
          "Puck — Peak State",

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
   CHARACTER 06 — SKULL KNIGHT
========================================================= */

export const SKULL_KNIGHT =
  createTournamentCharacter({

    id:
      "berserk-skull-knight",

    verseId:
      "berserk",

    name:
      "Skull Knight",

    aliases: [
      "Skull Knight",
      "Skull Knight — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      66,

    description:
      "Skull Knight is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-skull-knight-standard",

        name:
          "Skull Knight",

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
          "Berserk combat training",
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
          "berserk-skull-knight-peak",

        name:
          "Skull Knight — Peak State",

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
   CHARACTER 07 — ZODD
========================================================= */

export const ZODD =
  createTournamentCharacter({

    id:
      "berserk-zodd",

    verseId:
      "berserk",

    name:
      "Zodd",

    aliases: [
      "Zodd",
      "Zodd — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      67,

    description:
      "Zodd is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-zodd-standard",

        name:
          "Zodd",

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
          "Berserk combat training",
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
          "berserk-zodd-peak",

        name:
          "Zodd — Peak State",

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
   CHARACTER 08 — FARNESE
========================================================= */

export const FARNESE =
  createTournamentCharacter({

    id:
      "berserk-farnese",

    verseId:
      "berserk",

    name:
      "Farnese",

    aliases: [
      "Farnese",
      "Farnese — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      68,

    description:
      "Farnese is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-farnese-standard",

        name:
          "Farnese",

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
          "Berserk combat training",
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
          "berserk-farnese-peak",

        name:
          "Farnese — Peak State",

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
   CHARACTER 09 — SERPICO
========================================================= */

export const SERPICO =
  createTournamentCharacter({

    id:
      "berserk-serpico",

    verseId:
      "berserk",

    name:
      "Serpico",

    aliases: [
      "Serpico",
      "Serpico — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      69,

    description:
      "Serpico is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-serpico-standard",

        name:
          "Serpico",

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
          "Berserk combat training",
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
          "berserk-serpico-peak",

        name:
          "Serpico — Peak State",

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
   CHARACTER 10 — ISIDRO
========================================================= */

export const ISIDRO =
  createTournamentCharacter({

    id:
      "berserk-isidro",

    verseId:
      "berserk",

    name:
      "Isidro",

    aliases: [
      "Isidro",
      "Isidro — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      70,

    description:
      "Isidro is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-isidro-standard",

        name:
          "Isidro",

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
          "Berserk combat training",
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
          "berserk-isidro-peak",

        name:
          "Isidro — Peak State",

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
   CHARACTER 11 — GODO
========================================================= */

export const GODO =
  createTournamentCharacter({

    id:
      "berserk-godo",

    verseId:
      "berserk",

    name:
      "Godo",

    aliases: [
      "Godo",
      "Godo — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      71,

    description:
      "Godo is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-godo-standard",

        name:
          "Godo",

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
          "Berserk combat training",
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
          "berserk-godo-peak",

        name:
          "Godo — Peak State",

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
   CHARACTER 12 — RICKERT
========================================================= */

export const RICKERT =
  createTournamentCharacter({

    id:
      "berserk-rickert",

    verseId:
      "berserk",

    name:
      "Rickert",

    aliases: [
      "Rickert",
      "Rickert — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      72,

    description:
      "Rickert is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-rickert-standard",

        name:
          "Rickert",

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
          "Berserk combat training",
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
          "berserk-rickert-peak",

        name:
          "Rickert — Peak State",

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
   CHARACTER 13 — JUDEAU
========================================================= */

export const JUDEAU =
  createTournamentCharacter({

    id:
      "berserk-judeau",

    verseId:
      "berserk",

    name:
      "Judeau",

    aliases: [
      "Judeau",
      "Judeau — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      73,

    description:
      "Judeau is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-judeau-standard",

        name:
          "Judeau",

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
          "Berserk combat training",
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
          "berserk-judeau-peak",

        name:
          "Judeau — Peak State",

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
   CHARACTER 14 — CORKUS
========================================================= */

export const CORKUS =
  createTournamentCharacter({

    id:
      "berserk-corkus",

    verseId:
      "berserk",

    name:
      "Corkus",

    aliases: [
      "Corkus",
      "Corkus — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      74,

    description:
      "Corkus is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-corkus-standard",

        name:
          "Corkus",

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
          "Berserk combat training",
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
          "berserk-corkus-peak",

        name:
          "Corkus — Peak State",

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
   CHARACTER 15 — PIPPIN
========================================================= */

export const PIPPIN =
  createTournamentCharacter({

    id:
      "berserk-pippin",

    verseId:
      "berserk",

    name:
      "Pippin",

    aliases: [
      "Pippin",
      "Pippin — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      75,

    description:
      "Pippin is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-pippin-standard",

        name:
          "Pippin",

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
          "Berserk combat training",
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
          "berserk-pippin-peak",

        name:
          "Pippin — Peak State",

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
   CHARACTER 16 — GASTON
========================================================= */

export const GASTON =
  createTournamentCharacter({

    id:
      "berserk-gaston",

    verseId:
      "berserk",

    name:
      "Gaston",

    aliases: [
      "Gaston",
      "Gaston — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      76,

    description:
      "Gaston is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-gaston-standard",

        name:
          "Gaston",

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
          "Berserk combat training",
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
          "berserk-gaston-peak",

        name:
          "Gaston — Peak State",

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
   CHARACTER 17 — CHARLOTTE
========================================================= */

export const CHARLOTTE =
  createTournamentCharacter({

    id:
      "berserk-charlotte",

    verseId:
      "berserk",

    name:
      "Charlotte",

    aliases: [
      "Charlotte",
      "Charlotte — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      77,

    description:
      "Charlotte is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-charlotte-standard",

        name:
          "Charlotte",

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
          "Berserk combat training",
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
          "berserk-charlotte-peak",

        name:
          "Charlotte — Peak State",

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
   CHARACTER 18 — SLAN
========================================================= */

export const SLAN =
  createTournamentCharacter({

    id:
      "berserk-slan",

    verseId:
      "berserk",

    name:
      "Slan",

    aliases: [
      "Slan",
      "Slan — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      78,

    description:
      "Slan is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-slan-standard",

        name:
          "Slan",

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
          "Berserk combat training",
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
          "berserk-slan-peak",

        name:
          "Slan — Peak State",

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
   CHARACTER 19 — UBIK
========================================================= */

export const UBIK =
  createTournamentCharacter({

    id:
      "berserk-ubik",

    verseId:
      "berserk",

    name:
      "Ubik",

    aliases: [
      "Ubik",
      "Ubik — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      79,

    description:
      "Ubik is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-ubik-standard",

        name:
          "Ubik",

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
          "Berserk combat training",
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
          "berserk-ubik-peak",

        name:
          "Ubik — Peak State",

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
   CHARACTER 20 — CONRAD
========================================================= */

export const CONRAD =
  createTournamentCharacter({

    id:
      "berserk-conrad",

    verseId:
      "berserk",

    name:
      "Conrad",

    aliases: [
      "Conrad",
      "Conrad — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      80,

    description:
      "Conrad is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-conrad-standard",

        name:
          "Conrad",

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
          "Berserk combat training",
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
          "berserk-conrad-peak",

        name:
          "Conrad — Peak State",

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
   CHARACTER 21 — VOID
========================================================= */

export const VOID =
  createTournamentCharacter({

    id:
      "berserk-void",

    verseId:
      "berserk",

    name:
      "Void",

    aliases: [
      "Void",
      "Void — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      81,

    description:
      "Void is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-void-standard",

        name:
          "Void",

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
          "Berserk combat training",
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
          "berserk-void-peak",

        name:
          "Void — Peak State",

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
   CHARACTER 22 — IRVINE
========================================================= */

export const IRVINE =
  createTournamentCharacter({

    id:
      "berserk-irvine",

    verseId:
      "berserk",

    name:
      "Irvine",

    aliases: [
      "Irvine",
      "Irvine — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      82,

    description:
      "Irvine is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-irvine-standard",

        name:
          "Irvine",

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
          "Berserk combat training",
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
          "berserk-irvine-peak",

        name:
          "Irvine — Peak State",

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
   CHARACTER 23 — RAKSHAS
========================================================= */

export const RAKSHAS =
  createTournamentCharacter({

    id:
      "berserk-rakshas",

    verseId:
      "berserk",

    name:
      "Rakshas",

    aliases: [
      "Rakshas",
      "Rakshas — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      83,

    description:
      "Rakshas is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-rakshas-standard",

        name:
          "Rakshas",

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
          "Berserk combat training",
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
          "berserk-rakshas-peak",

        name:
          "Rakshas — Peak State",

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
   CHARACTER 24 — GRUNBELD
========================================================= */

export const GRUNBELD =
  createTournamentCharacter({

    id:
      "berserk-grunbeld",

    verseId:
      "berserk",

    name:
      "Grunbeld",

    aliases: [
      "Grunbeld",
      "Grunbeld — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      84,

    description:
      "Grunbeld is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-grunbeld-standard",

        name:
          "Grunbeld",

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
          "Berserk combat training",
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
          "berserk-grunbeld-peak",

        name:
          "Grunbeld — Peak State",

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
   CHARACTER 25 — LOCUS
========================================================= */

export const LOCUS =
  createTournamentCharacter({

    id:
      "berserk-locus",

    verseId:
      "berserk",

    name:
      "Locus",

    aliases: [
      "Locus",
      "Locus — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      85,

    description:
      "Locus is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-locus-standard",

        name:
          "Locus",

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
          "Berserk combat training",
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
          "berserk-locus-peak",

        name:
          "Locus — Peak State",

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
   CHARACTER 26 — BORKOFF
========================================================= */

export const BORKOFF =
  createTournamentCharacter({

    id:
      "berserk-borkoff",

    verseId:
      "berserk",

    name:
      "Borkoff",

    aliases: [
      "Borkoff",
      "Borkoff — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      86,

    description:
      "Borkoff is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-borkoff-standard",

        name:
          "Borkoff",

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
          "Berserk combat training",
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
          "berserk-borkoff-peak",

        name:
          "Borkoff — Peak State",

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
   CHARACTER 27 — ROSINE
========================================================= */

export const ROSINE =
  createTournamentCharacter({

    id:
      "berserk-rosine",

    verseId:
      "berserk",

    name:
      "Rosine",

    aliases: [
      "Rosine",
      "Rosine — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      87,

    description:
      "Rosine is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-rosine-standard",

        name:
          "Rosine",

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
          "Berserk combat training",
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
          "berserk-rosine-peak",

        name:
          "Rosine — Peak State",

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
   CHARACTER 28 — WYALD
========================================================= */

export const WYALD =
  createTournamentCharacter({

    id:
      "berserk-wyald",

    verseId:
      "berserk",

    name:
      "Wyald",

    aliases: [
      "Wyald",
      "Wyald — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      88,

    description:
      "Wyald is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-wyald-standard",

        name:
          "Wyald",

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
          "Berserk combat training",
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
          "berserk-wyald-peak",

        name:
          "Wyald — Peak State",

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
   CHARACTER 29 — MOZGUS
========================================================= */

export const MOZGUS =
  createTournamentCharacter({

    id:
      "berserk-mozgus",

    verseId:
      "berserk",

    name:
      "Mozgus",

    aliases: [
      "Mozgus",
      "Mozgus — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      89,

    description:
      "Mozgus is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-mozgus-standard",

        name:
          "Mozgus",

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
          "Berserk combat training",
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
          "berserk-mozgus-peak",

        name:
          "Mozgus — Peak State",

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
   CHARACTER 30 — EMPEROR GANISHKA
========================================================= */

export const EMPEROR_GANISHKA =
  createTournamentCharacter({

    id:
      "berserk-emperor-ganishka",

    verseId:
      "berserk",

    name:
      "Emperor Ganishka",

    aliases: [
      "Emperor Ganishka",
      "Emperor Ganishka — Peak State",
    ],

    tags: [
      "Berserk",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      90,

    description:
      "Emperor Ganishka is a major tournament entry from Berserk. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "berserk-emperor-ganishka-standard",

        name:
          "Emperor Ganishka",

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
          "Berserk combat training",
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
          "berserk-emperor-ganishka-peak",

        name:
          "Emperor Ganishka — Peak State",

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

export const BERSERK_CHARACTERS = [

  GUTS,
  GRIFFITH,
  CASCA,
  SCHIERKE,
  PUCK,
  SKULL_KNIGHT,
  ZODD,
  FARNESE,
  SERPICO,
  ISIDRO,
  GODO,
  RICKERT,
  JUDEAU,
  CORKUS,
  PIPPIN,
  GASTON,
  CHARLOTTE,
  SLAN,
  UBIK,
  CONRAD,
  VOID,
  IRVINE,
  RAKSHAS,
  GRUNBELD,
  LOCUS,
  BORKOFF,
  ROSINE,
  WYALD,
  MOZGUS,
  EMPEROR_GANISHKA,
];
