/*
  Anime Arena — Grand Tournament

  Code Geass Tournament Database

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
   CHARACTER 01 — LELOUCH LAMPEROUGE
========================================================= */

export const LELOUCH_LAMPEROUGE =
  createTournamentCharacter({

    id:
      "codeGeass-lelouch-lamperouge",

    verseId:
      "codeGeass",

    name:
      "Lelouch Lamperouge",

    aliases: [
      "Lelouch",
      "Geass Lelouch",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      61,

    description:
      "Lelouch Lamperouge is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-lelouch-lamperouge-standard",

        name:
          "Lelouch",

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
          "Code Geass combat training",
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
          "codeGeass-lelouch-lamperouge-peak",

        name:
          "Geass Lelouch",

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
   CHARACTER 02 — SUZAKU KURURUGI
========================================================= */

export const SUZAKU_KURURUGI =
  createTournamentCharacter({

    id:
      "codeGeass-suzaku-kururugi",

    verseId:
      "codeGeass",

    name:
      "Suzaku Kururugi",

    aliases: [
      "Suzaku Kururugi",
      "Suzaku Kururugi — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      62,

    description:
      "Suzaku Kururugi is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-suzaku-kururugi-standard",

        name:
          "Suzaku Kururugi",

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
          "Code Geass combat training",
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
          "codeGeass-suzaku-kururugi-peak",

        name:
          "Suzaku Kururugi — Peak State",

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
   CHARACTER 03 — C.C.
========================================================= */

export const C_C =
  createTournamentCharacter({

    id:
      "codeGeass-c-c",

    verseId:
      "codeGeass",

    name:
      "C.C.",

    aliases: [
      "C.C.",
      "C.C. — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      63,

    description:
      "C.C. is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-c-c-standard",

        name:
          "C.C.",

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
          "Code Geass combat training",
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
          "codeGeass-c-c-peak",

        name:
          "C.C. — Peak State",

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
   CHARACTER 04 — KALLEN STADTFELD
========================================================= */

export const KALLEN_STADTFELD =
  createTournamentCharacter({

    id:
      "codeGeass-kallen-stadtfeld",

    verseId:
      "codeGeass",

    name:
      "Kallen Stadtfeld",

    aliases: [
      "Kallen Stadtfeld",
      "Kallen Stadtfeld — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      64,

    description:
      "Kallen Stadtfeld is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-kallen-stadtfeld-standard",

        name:
          "Kallen Stadtfeld",

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
          "Code Geass combat training",
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
          "codeGeass-kallen-stadtfeld-peak",

        name:
          "Kallen Stadtfeld — Peak State",

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
   CHARACTER 05 — SCHNEIZEL EL BRITANNIA
========================================================= */

export const SCHNEIZEL_EL_BRITANNIA =
  createTournamentCharacter({

    id:
      "codeGeass-schneizel-el-britannia",

    verseId:
      "codeGeass",

    name:
      "Schneizel el Britannia",

    aliases: [
      "Schneizel el Britannia",
      "Schneizel el Britannia — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      65,

    description:
      "Schneizel el Britannia is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-schneizel-el-britannia-standard",

        name:
          "Schneizel el Britannia",

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
          "Code Geass combat training",
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
          "codeGeass-schneizel-el-britannia-peak",

        name:
          "Schneizel el Britannia — Peak State",

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
   CHARACTER 06 — CHARLES ZI BRITANNIA
========================================================= */

export const CHARLES_ZI_BRITANNIA =
  createTournamentCharacter({

    id:
      "codeGeass-charles-zi-britannia",

    verseId:
      "codeGeass",

    name:
      "Charles zi Britannia",

    aliases: [
      "Charles zi Britannia",
      "Charles zi Britannia — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      66,

    description:
      "Charles zi Britannia is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-charles-zi-britannia-standard",

        name:
          "Charles zi Britannia",

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
          "Code Geass combat training",
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
          "codeGeass-charles-zi-britannia-peak",

        name:
          "Charles zi Britannia — Peak State",

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
   CHARACTER 07 — MARIANNE VI BRITANNIA
========================================================= */

export const MARIANNE_VI_BRITANNIA =
  createTournamentCharacter({

    id:
      "codeGeass-marianne-vi-britannia",

    verseId:
      "codeGeass",

    name:
      "Marianne vi Britannia",

    aliases: [
      "Marianne vi Britannia",
      "Marianne vi Britannia — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      67,

    description:
      "Marianne vi Britannia is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-marianne-vi-britannia-standard",

        name:
          "Marianne vi Britannia",

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
          "Code Geass combat training",
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
          "codeGeass-marianne-vi-britannia-peak",

        name:
          "Marianne vi Britannia — Peak State",

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
   CHARACTER 08 — SHIRLEY FENETTE
========================================================= */

export const SHIRLEY_FENETTE =
  createTournamentCharacter({

    id:
      "codeGeass-shirley-fenette",

    verseId:
      "codeGeass",

    name:
      "Shirley Fenette",

    aliases: [
      "Shirley Fenette",
      "Shirley Fenette — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      68,

    description:
      "Shirley Fenette is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-shirley-fenette-standard",

        name:
          "Shirley Fenette",

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
          "Code Geass combat training",
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
          "codeGeass-shirley-fenette-peak",

        name:
          "Shirley Fenette — Peak State",

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
   CHARACTER 09 — RIVALZ CARDEMONDE
========================================================= */

export const RIVALZ_CARDEMONDE =
  createTournamentCharacter({

    id:
      "codeGeass-rivalz-cardemonde",

    verseId:
      "codeGeass",

    name:
      "Rivalz Cardemonde",

    aliases: [
      "Rivalz Cardemonde",
      "Rivalz Cardemonde — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      69,

    description:
      "Rivalz Cardemonde is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-rivalz-cardemonde-standard",

        name:
          "Rivalz Cardemonde",

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
          "Code Geass combat training",
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
          "codeGeass-rivalz-cardemonde-peak",

        name:
          "Rivalz Cardemonde — Peak State",

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
   CHARACTER 10 — NUNNALLY VI BRITANNIA
========================================================= */

export const NUNNALLY_VI_BRITANNIA =
  createTournamentCharacter({

    id:
      "codeGeass-nunnally-vi-britannia",

    verseId:
      "codeGeass",

    name:
      "Nunnally vi Britannia",

    aliases: [
      "Nunnally vi Britannia",
      "Nunnally vi Britannia — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      70,

    description:
      "Nunnally vi Britannia is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-nunnally-vi-britannia-standard",

        name:
          "Nunnally vi Britannia",

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
          "Code Geass combat training",
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
          "codeGeass-nunnally-vi-britannia-peak",

        name:
          "Nunnally vi Britannia — Peak State",

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
   CHARACTER 11 — CORNELIA LI BRITANNIA
========================================================= */

export const CORNELIA_LI_BRITANNIA =
  createTournamentCharacter({

    id:
      "codeGeass-cornelia-li-britannia",

    verseId:
      "codeGeass",

    name:
      "Cornelia li Britannia",

    aliases: [
      "Cornelia li Britannia",
      "Cornelia li Britannia — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      71,

    description:
      "Cornelia li Britannia is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-cornelia-li-britannia-standard",

        name:
          "Cornelia li Britannia",

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
          "Code Geass combat training",
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
          "codeGeass-cornelia-li-britannia-peak",

        name:
          "Cornelia li Britannia — Peak State",

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
   CHARACTER 12 — EUPHEMIA LI BRITANNIA
========================================================= */

export const EUPHEMIA_LI_BRITANNIA =
  createTournamentCharacter({

    id:
      "codeGeass-euphemia-li-britannia",

    verseId:
      "codeGeass",

    name:
      "Euphemia li Britannia",

    aliases: [
      "Euphemia li Britannia",
      "Euphemia li Britannia — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      72,

    description:
      "Euphemia li Britannia is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-euphemia-li-britannia-standard",

        name:
          "Euphemia li Britannia",

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
          "Code Geass combat training",
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
          "codeGeass-euphemia-li-britannia-peak",

        name:
          "Euphemia li Britannia — Peak State",

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
   CHARACTER 13 — GINO WEINBERG
========================================================= */

export const GINO_WEINBERG =
  createTournamentCharacter({

    id:
      "codeGeass-gino-weinberg",

    verseId:
      "codeGeass",

    name:
      "Gino Weinberg",

    aliases: [
      "Gino Weinberg",
      "Gino Weinberg — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      73,

    description:
      "Gino Weinberg is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-gino-weinberg-standard",

        name:
          "Gino Weinberg",

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
          "Code Geass combat training",
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
          "codeGeass-gino-weinberg-peak",

        name:
          "Gino Weinberg — Peak State",

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
   CHARACTER 14 — ANYA ALSTREIM
========================================================= */

export const ANYA_ALSTREIM =
  createTournamentCharacter({

    id:
      "codeGeass-anya-alstreim",

    verseId:
      "codeGeass",

    name:
      "Anya Alstreim",

    aliases: [
      "Anya Alstreim",
      "Anya Alstreim — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      74,

    description:
      "Anya Alstreim is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-anya-alstreim-standard",

        name:
          "Anya Alstreim",

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
          "Code Geass combat training",
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
          "codeGeass-anya-alstreim-peak",

        name:
          "Anya Alstreim — Peak State",

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
   CHARACTER 15 — JEREMIAH GOTTWALD
========================================================= */

export const JEREMIAH_GOTTWALD =
  createTournamentCharacter({

    id:
      "codeGeass-jeremiah-gottwald",

    verseId:
      "codeGeass",

    name:
      "Jeremiah Gottwald",

    aliases: [
      "Jeremiah Gottwald",
      "Jeremiah Gottwald — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      75,

    description:
      "Jeremiah Gottwald is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-jeremiah-gottwald-standard",

        name:
          "Jeremiah Gottwald",

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
          "Code Geass combat training",
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
          "codeGeass-jeremiah-gottwald-peak",

        name:
          "Jeremiah Gottwald — Peak State",

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
   CHARACTER 16 — ROLO LAMPEROUGE
========================================================= */

export const ROLO_LAMPEROUGE =
  createTournamentCharacter({

    id:
      "codeGeass-rolo-lamperouge",

    verseId:
      "codeGeass",

    name:
      "Rolo Lamperouge",

    aliases: [
      "Rolo Lamperouge",
      "Rolo Lamperouge — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      76,

    description:
      "Rolo Lamperouge is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-rolo-lamperouge-standard",

        name:
          "Rolo Lamperouge",

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
          "Code Geass combat training",
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
          "codeGeass-rolo-lamperouge-peak",

        name:
          "Rolo Lamperouge — Peak State",

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
   CHARACTER 17 — V.V.
========================================================= */

export const V_V =
  createTournamentCharacter({

    id:
      "codeGeass-v-v",

    verseId:
      "codeGeass",

    name:
      "V.V.",

    aliases: [
      "V.V.",
      "V.V. — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      77,

    description:
      "V.V. is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-v-v-standard",

        name:
          "V.V.",

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
          "Code Geass combat training",
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
          "codeGeass-v-v-peak",

        name:
          "V.V. — Peak State",

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
   CHARACTER 18 — BISMARCK WALDSTEIN
========================================================= */

export const BISMARCK_WALDSTEIN =
  createTournamentCharacter({

    id:
      "codeGeass-bismarck-waldstein",

    verseId:
      "codeGeass",

    name:
      "Bismarck Waldstein",

    aliases: [
      "Bismarck Waldstein",
      "Bismarck Waldstein — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      78,

    description:
      "Bismarck Waldstein is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-bismarck-waldstein-standard",

        name:
          "Bismarck Waldstein",

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
          "Code Geass combat training",
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
          "codeGeass-bismarck-waldstein-peak",

        name:
          "Bismarck Waldstein — Peak State",

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
   CHARACTER 19 — GILBERT G.P. GUILFORD
========================================================= */

export const GILBERT_G_P_GUILFORD =
  createTournamentCharacter({

    id:
      "codeGeass-gilbert-g-p-guilford",

    verseId:
      "codeGeass",

    name:
      "Gilbert G.P. Guilford",

    aliases: [
      "Gilbert G.P. Guilford",
      "Gilbert G.P. Guilford — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      79,

    description:
      "Gilbert G.P. Guilford is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-gilbert-g-p-guilford-standard",

        name:
          "Gilbert G.P. Guilford",

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
          "Code Geass combat training",
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
          "codeGeass-gilbert-g-p-guilford-peak",

        name:
          "Gilbert G.P. Guilford — Peak State",

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
   CHARACTER 20 — KANAME OHGI
========================================================= */

export const KANAME_OHGI =
  createTournamentCharacter({

    id:
      "codeGeass-kaname-ohgi",

    verseId:
      "codeGeass",

    name:
      "Kaname Ohgi",

    aliases: [
      "Kaname Ohgi",
      "Kaname Ohgi — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      80,

    description:
      "Kaname Ohgi is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-kaname-ohgi-standard",

        name:
          "Kaname Ohgi",

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
          "Code Geass combat training",
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
          "codeGeass-kaname-ohgi-peak",

        name:
          "Kaname Ohgi — Peak State",

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
   CHARACTER 21 — VILLETTA NU
========================================================= */

export const VILLETTA_NU =
  createTournamentCharacter({

    id:
      "codeGeass-villetta-nu",

    verseId:
      "codeGeass",

    name:
      "Villetta Nu",

    aliases: [
      "Villetta Nu",
      "Villetta Nu — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      81,

    description:
      "Villetta Nu is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-villetta-nu-standard",

        name:
          "Villetta Nu",

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
          "Code Geass combat training",
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
          "codeGeass-villetta-nu-peak",

        name:
          "Villetta Nu — Peak State",

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
   CHARACTER 22 — TOUDOU KYOSHIRO
========================================================= */

export const TOUDOU_KYOSHIRO =
  createTournamentCharacter({

    id:
      "codeGeass-toudou-kyoshiro",

    verseId:
      "codeGeass",

    name:
      "Toudou Kyoshiro",

    aliases: [
      "Toudou Kyoshiro",
      "Toudou Kyoshiro — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      82,

    description:
      "Toudou Kyoshiro is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-toudou-kyoshiro-standard",

        name:
          "Toudou Kyoshiro",

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
          "Code Geass combat training",
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
          "codeGeass-toudou-kyoshiro-peak",

        name:
          "Toudou Kyoshiro — Peak State",

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
   CHARACTER 23 — RAKSHATA CHAWLA
========================================================= */

export const RAKSHATA_CHAWLA =
  createTournamentCharacter({

    id:
      "codeGeass-rakshata-chawla",

    verseId:
      "codeGeass",

    name:
      "Rakshata Chawla",

    aliases: [
      "Rakshata Chawla",
      "Rakshata Chawla — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      83,

    description:
      "Rakshata Chawla is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-rakshata-chawla-standard",

        name:
          "Rakshata Chawla",

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
          "Code Geass combat training",
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
          "codeGeass-rakshata-chawla-peak",

        name:
          "Rakshata Chawla — Peak State",

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
   CHARACTER 24 — LLOYD ASPLUND
========================================================= */

export const LLOYD_ASPLUND =
  createTournamentCharacter({

    id:
      "codeGeass-lloyd-asplund",

    verseId:
      "codeGeass",

    name:
      "Lloyd Asplund",

    aliases: [
      "Lloyd Asplund",
      "Lloyd Asplund — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      84,

    description:
      "Lloyd Asplund is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-lloyd-asplund-standard",

        name:
          "Lloyd Asplund",

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
          "Code Geass combat training",
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
          "codeGeass-lloyd-asplund-peak",

        name:
          "Lloyd Asplund — Peak State",

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
   CHARACTER 25 — CECILE CROOMY
========================================================= */

export const CECILE_CROOMY =
  createTournamentCharacter({

    id:
      "codeGeass-cecile-croomy",

    verseId:
      "codeGeass",

    name:
      "Cecile Croomy",

    aliases: [
      "Cecile Croomy",
      "Cecile Croomy — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      85,

    description:
      "Cecile Croomy is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-cecile-croomy-standard",

        name:
          "Cecile Croomy",

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
          "Code Geass combat training",
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
          "codeGeass-cecile-croomy-peak",

        name:
          "Cecile Croomy — Peak State",

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
   CHARACTER 26 — XINGKE
========================================================= */

export const XINGKE =
  createTournamentCharacter({

    id:
      "codeGeass-xingke",

    verseId:
      "codeGeass",

    name:
      "Xingke",

    aliases: [
      "Xingke",
      "Xingke — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      86,

    description:
      "Xingke is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-xingke-standard",

        name:
          "Xingke",

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
          "Code Geass combat training",
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
          "codeGeass-xingke-peak",

        name:
          "Xingke — Peak State",

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
   CHARACTER 27 — LI XINGKE
========================================================= */

export const LI_XINGKE =
  createTournamentCharacter({

    id:
      "codeGeass-li-xingke",

    verseId:
      "codeGeass",

    name:
      "Li Xingke",

    aliases: [
      "Li Xingke",
      "Li Xingke — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      87,

    description:
      "Li Xingke is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-li-xingke-standard",

        name:
          "Li Xingke",

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
          "Code Geass combat training",
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
          "codeGeass-li-xingke-peak",

        name:
          "Li Xingke — Peak State",

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
   CHARACTER 28 — MAO
========================================================= */

export const MAO =
  createTournamentCharacter({

    id:
      "codeGeass-mao",

    verseId:
      "codeGeass",

    name:
      "Mao",

    aliases: [
      "Mao",
      "Mao — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      88,

    description:
      "Mao is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-mao-standard",

        name:
          "Mao",

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
          "Code Geass combat training",
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
          "codeGeass-mao-peak",

        name:
          "Mao — Peak State",

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
   CHARACTER 29 — DARLTON
========================================================= */

export const DARLTON =
  createTournamentCharacter({

    id:
      "codeGeass-darlton",

    verseId:
      "codeGeass",

    name:
      "Darlton",

    aliases: [
      "Darlton",
      "Darlton — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      89,

    description:
      "Darlton is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-darlton-standard",

        name:
          "Darlton",

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
          "Code Geass combat training",
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
          "codeGeass-darlton-peak",

        name:
          "Darlton — Peak State",

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
   CHARACTER 30 — DAMOCLES PILOT
========================================================= */

export const DAMOCLES_PILOT =
  createTournamentCharacter({

    id:
      "codeGeass-damocles-pilot",

    verseId:
      "codeGeass",

    name:
      "Damocles Pilot",

    aliases: [
      "Damocles Pilot",
      "Damocles Pilot — Peak State",
    ],

    tags: [
      "Code Geass",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      90,

    description:
      "Damocles Pilot is a major tournament entry from Code Geass. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "codeGeass-damocles-pilot-standard",

        name:
          "Damocles Pilot",

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
          "Code Geass combat training",
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
          "codeGeass-damocles-pilot-peak",

        name:
          "Damocles Pilot — Peak State",

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

export const CODE_GEASS_CHARACTERS = [

  LELOUCH_LAMPEROUGE,
  SUZAKU_KURURUGI,
  C_C,
  KALLEN_STADTFELD,
  SCHNEIZEL_EL_BRITANNIA,
  CHARLES_ZI_BRITANNIA,
  MARIANNE_VI_BRITANNIA,
  SHIRLEY_FENETTE,
  RIVALZ_CARDEMONDE,
  NUNNALLY_VI_BRITANNIA,
  CORNELIA_LI_BRITANNIA,
  EUPHEMIA_LI_BRITANNIA,
  GINO_WEINBERG,
  ANYA_ALSTREIM,
  JEREMIAH_GOTTWALD,
  ROLO_LAMPEROUGE,
  V_V,
  BISMARCK_WALDSTEIN,
  GILBERT_G_P_GUILFORD,
  KANAME_OHGI,
  VILLETTA_NU,
  TOUDOU_KYOSHIRO,
  RAKSHATA_CHAWLA,
  LLOYD_ASPLUND,
  CECILE_CROOMY,
  XINGKE,
  LI_XINGKE,
  MAO,
  DARLTON,
  DAMOCLES_PILOT,
];
