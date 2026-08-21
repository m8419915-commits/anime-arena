/*
  Anime Arena — Grand Tournament

  JoJo's Bizarre Adventure Tournament Database

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
   CHARACTER 01 — JONATHAN JOESTAR
========================================================= */

export const JONATHAN_JOESTAR =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-jonathan-joestar",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Jonathan Joestar",

    aliases: [
      "Jonathan Joestar",
      "Jonathan Joestar — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      61,

    description:
      "Jonathan Joestar is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-jonathan-joestar-standard",

        name:
          "Jonathan Joestar",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-jonathan-joestar-peak",

        name:
          "Jonathan Joestar — Peak State",

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
   CHARACTER 02 — JOSEPH JOESTAR
========================================================= */

export const JOSEPH_JOESTAR =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-joseph-joestar",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Joseph Joestar",

    aliases: [
      "Joseph Joestar",
      "Joseph Joestar — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      62,

    description:
      "Joseph Joestar is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-joseph-joestar-standard",

        name:
          "Joseph Joestar",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-joseph-joestar-peak",

        name:
          "Joseph Joestar — Peak State",

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
   CHARACTER 03 — JOTARO KUJO
========================================================= */

export const JOTARO_KUJO =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-jotaro-kujo",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Jotaro Kujo",

    aliases: [
      "Jotaro Kujo",
      "Star Platinum: The World",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      63,

    description:
      "Jotaro Kujo is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-jotaro-kujo-standard",

        name:
          "Jotaro Kujo",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-jotaro-kujo-peak",

        name:
          "Star Platinum: The World",

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
   CHARACTER 04 — JOSUKE HIGASHIKATA
========================================================= */

export const JOSUKE_HIGASHIKATA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-josuke-higashikata",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Josuke Higashikata",

    aliases: [
      "Josuke Higashikata",
      "Josuke Higashikata — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      64,

    description:
      "Josuke Higashikata is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-josuke-higashikata-standard",

        name:
          "Josuke Higashikata",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-josuke-higashikata-peak",

        name:
          "Josuke Higashikata — Peak State",

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
   CHARACTER 05 — GIORNO GIOVANNA
========================================================= */

export const GIORNO_GIOVANNA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-giorno-giovanna",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Giorno Giovanna",

    aliases: [
      "Giorno Giovanna",
      "Gold Experience Requiem",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      65,

    description:
      "Giorno Giovanna is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-giorno-giovanna-standard",

        name:
          "Giorno Giovanna",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-giorno-giovanna-peak",

        name:
          "Gold Experience Requiem",

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
   CHARACTER 06 — JOLYNE CUJOH
========================================================= */

export const JOLYNE_CUJOH =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-jolyne-cujoh",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Jolyne Cujoh",

    aliases: [
      "Jolyne Cujoh",
      "Jolyne Cujoh — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      66,

    description:
      "Jolyne Cujoh is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-jolyne-cujoh-standard",

        name:
          "Jolyne Cujoh",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-jolyne-cujoh-peak",

        name:
          "Jolyne Cujoh — Peak State",

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
   CHARACTER 07 — JOHNNY JOESTAR
========================================================= */

export const JOHNNY_JOESTAR =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-johnny-joestar",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Johnny Joestar",

    aliases: [
      "Johnny Joestar",
      "Johnny Joestar — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      67,

    description:
      "Johnny Joestar is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-johnny-joestar-standard",

        name:
          "Johnny Joestar",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-johnny-joestar-peak",

        name:
          "Johnny Joestar — Peak State",

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
   CHARACTER 08 — GAPPY HIGASHIKATA
========================================================= */

export const GAPPY_HIGASHIKATA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-gappy-higashikata",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Gappy Higashikata",

    aliases: [
      "Gappy Higashikata",
      "Gappy Higashikata — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      68,

    description:
      "Gappy Higashikata is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-gappy-higashikata-standard",

        name:
          "Gappy Higashikata",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-gappy-higashikata-peak",

        name:
          "Gappy Higashikata — Peak State",

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
   CHARACTER 09 — DIO BRANDO
========================================================= */

export const DIO_BRANDO =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-dio-brando",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Dio Brando",

    aliases: [
      "Dio Brando",
      "Dio Brando — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      69,

    description:
      "Dio Brando is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-dio-brando-standard",

        name:
          "Dio Brando",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-dio-brando-peak",

        name:
          "Dio Brando — Peak State",

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
   CHARACTER 10 — DIO
========================================================= */

export const DIO =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-dio",

    verseId:
      "jojosBizarreAdventure",

    name:
      "DIO",

    aliases: [
      "DIO",
      "DIO — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      70,

    description:
      "DIO is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-dio-standard",

        name:
          "DIO",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-dio-peak",

        name:
          "DIO — Peak State",

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
   CHARACTER 11 — ENRICO PUCCI
========================================================= */

export const ENRICO_PUCCI =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-enrico-pucci",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Enrico Pucci",

    aliases: [
      "Enrico Pucci",
      "Enrico Pucci — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      71,

    description:
      "Enrico Pucci is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-enrico-pucci-standard",

        name:
          "Enrico Pucci",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-enrico-pucci-peak",

        name:
          "Enrico Pucci — Peak State",

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
   CHARACTER 12 — DIAVOLO
========================================================= */

export const DIAVOLO =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-diavolo",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Diavolo",

    aliases: [
      "Diavolo",
      "Diavolo — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      72,

    description:
      "Diavolo is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-diavolo-standard",

        name:
          "Diavolo",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-diavolo-peak",

        name:
          "Diavolo — Peak State",

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
   CHARACTER 13 — KARS
========================================================= */

export const KARS =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-kars",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Kars",

    aliases: [
      "Kars",
      "Kars — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      73,

    description:
      "Kars is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-kars-standard",

        name:
          "Kars",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-kars-peak",

        name:
          "Kars — Peak State",

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
   CHARACTER 14 — ESIDISI
========================================================= */

export const ESIDISI =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-esidisi",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Esidisi",

    aliases: [
      "Esidisi",
      "Esidisi — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      74,

    description:
      "Esidisi is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-esidisi-standard",

        name:
          "Esidisi",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-esidisi-peak",

        name:
          "Esidisi — Peak State",

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
   CHARACTER 15 — WAMUU
========================================================= */

export const WAMUU =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-wamuu",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Wamuu",

    aliases: [
      "Wamuu",
      "Wamuu — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      75,

    description:
      "Wamuu is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-wamuu-standard",

        name:
          "Wamuu",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-wamuu-peak",

        name:
          "Wamuu — Peak State",

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
   CHARACTER 16 — CAESAR ZEPPELI
========================================================= */

export const CAESAR_ZEPPELI =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-caesar-zeppeli",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Caesar Zeppeli",

    aliases: [
      "Caesar Zeppeli",
      "Caesar Zeppeli — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      76,

    description:
      "Caesar Zeppeli is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-caesar-zeppeli-standard",

        name:
          "Caesar Zeppeli",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-caesar-zeppeli-peak",

        name:
          "Caesar Zeppeli — Peak State",

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
   CHARACTER 17 — BRUNO BUCCIARATI
========================================================= */

export const BRUNO_BUCCIARATI =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-bruno-bucciarati",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Bruno Bucciarati",

    aliases: [
      "Bruno Bucciarati",
      "Bruno Bucciarati — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      77,

    description:
      "Bruno Bucciarati is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-bruno-bucciarati-standard",

        name:
          "Bruno Bucciarati",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-bruno-bucciarati-peak",

        name:
          "Bruno Bucciarati — Peak State",

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
   CHARACTER 18 — LEONE ABBACCHIO
========================================================= */

export const LEONE_ABBACCHIO =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-leone-abbacchio",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Leone Abbacchio",

    aliases: [
      "Leone Abbacchio",
      "Leone Abbacchio — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      78,

    description:
      "Leone Abbacchio is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-leone-abbacchio-standard",

        name:
          "Leone Abbacchio",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-leone-abbacchio-peak",

        name:
          "Leone Abbacchio — Peak State",

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
   CHARACTER 19 — GUIDO MISTA
========================================================= */

export const GUIDO_MISTA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-guido-mista",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Guido Mista",

    aliases: [
      "Guido Mista",
      "Guido Mista — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      79,

    description:
      "Guido Mista is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-guido-mista-standard",

        name:
          "Guido Mista",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-guido-mista-peak",

        name:
          "Guido Mista — Peak State",

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
   CHARACTER 20 — NARANCIA GHIRGA
========================================================= */

export const NARANCIA_GHIRGA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-narancia-ghirga",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Narancia Ghirga",

    aliases: [
      "Narancia Ghirga",
      "Narancia Ghirga — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      80,

    description:
      "Narancia Ghirga is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-narancia-ghirga-standard",

        name:
          "Narancia Ghirga",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-narancia-ghirga-peak",

        name:
          "Narancia Ghirga — Peak State",

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
   CHARACTER 21 — WEATHER REPORT
========================================================= */

export const WEATHER_REPORT =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-weather-report",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Weather Report",

    aliases: [
      "Weather Report",
      "Weather Report — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      81,

    description:
      "Weather Report is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-weather-report-standard",

        name:
          "Weather Report",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-weather-report-peak",

        name:
          "Weather Report — Peak State",

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
   CHARACTER 22 — FOO FIGHTERS
========================================================= */

export const FOO_FIGHTERS =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-foo-fighters",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Foo Fighters",

    aliases: [
      "Foo Fighters",
      "Foo Fighters — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      82,

    description:
      "Foo Fighters is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-foo-fighters-standard",

        name:
          "Foo Fighters",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-foo-fighters-peak",

        name:
          "Foo Fighters — Peak State",

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
   CHARACTER 23 — YOSHIKAGE KIRA
========================================================= */

export const YOSHIKAGE_KIRA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-yoshikage-kira",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Yoshikage Kira",

    aliases: [
      "Yoshikage Kira",
      "Yoshikage Kira — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      83,

    description:
      "Yoshikage Kira is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-yoshikage-kira-standard",

        name:
          "Yoshikage Kira",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-yoshikage-kira-peak",

        name:
          "Yoshikage Kira — Peak State",

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
   CHARACTER 24 — FUNNY VALENTINE
========================================================= */

export const FUNNY_VALENTINE =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-funny-valentine",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Funny Valentine",

    aliases: [
      "Funny Valentine",
      "Funny Valentine — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      84,

    description:
      "Funny Valentine is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-funny-valentine-standard",

        name:
          "Funny Valentine",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-funny-valentine-peak",

        name:
          "Funny Valentine — Peak State",

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
   CHARACTER 25 — DIEGO BRANDO
========================================================= */

export const DIEGO_BRANDO =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-diego-brando",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Diego Brando",

    aliases: [
      "Diego Brando",
      "Diego Brando — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      85,

    description:
      "Diego Brando is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-diego-brando-standard",

        name:
          "Diego Brando",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-diego-brando-peak",

        name:
          "Diego Brando — Peak State",

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
   CHARACTER 26 — TOORU
========================================================= */

export const TOORU =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-tooru",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Tooru",

    aliases: [
      "Tooru",
      "Tooru — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      86,

    description:
      "Tooru is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-tooru-standard",

        name:
          "Tooru",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-tooru-peak",

        name:
          "Tooru — Peak State",

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
   CHARACTER 27 — ROHAN KISHIBE
========================================================= */

export const ROHAN_KISHIBE =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-rohan-kishibe",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Rohan Kishibe",

    aliases: [
      "Rohan Kishibe",
      "Rohan Kishibe — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      87,

    description:
      "Rohan Kishibe is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-rohan-kishibe-standard",

        name:
          "Rohan Kishibe",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-rohan-kishibe-peak",

        name:
          "Rohan Kishibe — Peak State",

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
   CHARACTER 28 — POLNAREFF
========================================================= */

export const POLNAREFF =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-polnareff",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Polnareff",

    aliases: [
      "Polnareff",
      "Polnareff — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      88,

    description:
      "Polnareff is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-polnareff-standard",

        name:
          "Polnareff",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-polnareff-peak",

        name:
          "Polnareff — Peak State",

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
   CHARACTER 29 — OKUYASU NIJIMURA
========================================================= */

export const OKUYASU_NIJIMURA =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-okuyasu-nijimura",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Okuyasu Nijimura",

    aliases: [
      "Okuyasu Nijimura",
      "Okuyasu Nijimura — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      89,

    description:
      "Okuyasu Nijimura is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-okuyasu-nijimura-standard",

        name:
          "Okuyasu Nijimura",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-okuyasu-nijimura-peak",

        name:
          "Okuyasu Nijimura — Peak State",

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
   CHARACTER 30 — KOICHI HIROSE
========================================================= */

export const KOICHI_HIROSE =
  createTournamentCharacter({

    id:
      "jojosBizarreAdventure-koichi-hirose",

    verseId:
      "jojosBizarreAdventure",

    name:
      "Koichi Hirose",

    aliases: [
      "Koichi Hirose",
      "Koichi Hirose — Peak State",
    ],

    tags: [
      "JoJo's Bizarre Adventure",
      "Combatant",
      "Expanded Entry",
      "Tournament Character",
    ],

    seedRating:
      90,

    description:
      "Koichi Hirose is a major tournament entry from JoJo's Bizarre Adventure. This expanded record gives the tournament engine complete character, form, stat, ability, weakness and special-trait data.",

    specialTraits: [
      "Character-specific combat profile",
      "Canon-relevant abilities represented by tournament states",
      "Expanded tournament metadata",
    ],

    forms: [

      createTournamentForm({

        id:
          "jojosBizarreAdventure-koichi-hirose-standard",

        name:
          "Koichi Hirose",

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
          "JoJo's Bizarre Adventure combat training",
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
          "jojosBizarreAdventure-koichi-hirose-peak",

        name:
          "Koichi Hirose — Peak State",

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

export const JOJOS_BIZARRE_ADVENTURE_CHARACTERS = [

  JONATHAN_JOESTAR,
  JOSEPH_JOESTAR,
  JOTARO_KUJO,
  JOSUKE_HIGASHIKATA,
  GIORNO_GIOVANNA,
  JOLYNE_CUJOH,
  JOHNNY_JOESTAR,
  GAPPY_HIGASHIKATA,
  DIO_BRANDO,
  DIO,
  ENRICO_PUCCI,
  DIAVOLO,
  KARS,
  ESIDISI,
  WAMUU,
  CAESAR_ZEPPELI,
  BRUNO_BUCCIARATI,
  LEONE_ABBACCHIO,
  GUIDO_MISTA,
  NARANCIA_GHIRGA,
  WEATHER_REPORT,
  FOO_FIGHTERS,
  YOSHIKAGE_KIRA,
  FUNNY_VALENTINE,
  DIEGO_BRANDO,
  TOORU,
  ROHAN_KISHIBE,
  POLNAREFF,
  OKUYASU_NIJIMURA,
  KOICHI_HIROSE,
];
