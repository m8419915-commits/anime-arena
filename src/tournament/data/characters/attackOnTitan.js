/*
  Anime Arena — Grand Tournament

  Attack on Titan Tournament Database

  30 CHARACTERS

  DATABASE STANDARD:
  Naruto.js-style expanded structure.

  Each character contains:
    - id
    - verseId
    - name
    - aliases
    - tags
    - seedRating
    - description
    - forms

  Each form contains:
    - id
    - name
    - rank
    - tier
    - isBase
    - tournamentEligible
    - stats
    - abilities
    - weaknesses
    - special traits

  Numerical values are Anime Arena balancing values.
  They are NOT official canon power levels.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";


/* =========================================================
   CHARACTER 01 — EREN YEAGER
========================================================= */

export const EREN_YEAGER =
  createTournamentCharacter({

    id:
      "attack-on-titan-eren-yeager",

    verseId:
      "attack-on-titan",

    name:
      "Eren Yeager",

    aliases: [
      "Eren",
      "Attack Titan",
      "Founding Titan",
      "War Hammer Titan",
    ],

    tags: [
      "Eldian",
      "Titan Shifter",
      "Attack Titan",
      "Founding Titan",
      "War Hammer Titan",
      "Paths",
      "Coordinate",
    ],

    seedRating:
      100,

    description:
      "Eren Yeager becomes the inheritor of the Attack Titan and later gains access to the Founding Titan and War Hammer Titan. His combat profile combines regeneration, hardening, future-memory interaction, War Hammer weapon creation and massive Founding Titan abilities.",

    specialTraits: [
      "Titan shifter",
      "Royal-blood access through Zeke",
      "Paths connection",
      "Future-memory interaction",
      "Multiple Titan powers",
    ],

    forms: [

      createTournamentForm({

        id:
          "eren-human-pre-timeskip",

        name:
          "Human Eren",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            45,

          realPower:
            45,

          hax:
            25,

          speed:
            62,

          durability:
            52,

          intelligence:
            72,

          attack:
            54,

          defense:
            49,

          stamina:
            67,

          versatility:
            61,
        },

        abilities: [
          "ODM Gear",
          "Swordsmanship",
          "Military training",
          "Titan transformation access",
        ],

        weaknesses: [
          "Human durability",
          "Limited early combat experience",
        ],

        specialTraits: [
          "Titan shifter",
          "Strong regeneration when transformed",
        ],

      }),

      createTournamentForm({

        id:
          "eren-attack-titan-early",

        name:
          "Attack Titan — Early",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            69,

          realPower:
            69,

          hax:
            39,

          speed:
            73,

          durability:
            84,

          intelligence:
            74,

          attack:
            82,

          defense:
            78,

          stamina:
            86,

          versatility:
            69,
        },

        abilities: [
          "Attack Titan",
          "Titan regeneration",
          "Titan strength",
          "Hardening potential",
          "Titan combat",
        ],

        weaknesses: [
          "Early transformation control",
          "Limited Titan combat experience",
        ],

        specialTraits: [
          "Nine Titans inheritance",
          "Regeneration",
        ],

      }),

      createTournamentForm({

        id:
          "eren-attack-titan-late",

        name:
          "Attack Titan — Liberio",

        rank:
          3,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            88,

          realPower:
            88,

          hax:
            63,

          speed:
            84,

          durability:
            92,

          intelligence:
            91,

          attack:
            96,

          defense:
            90,

          stamina:
            95,

          versatility:
            84,
        },

        abilities: [
          "Attack Titan",
          "Advanced hardening",
          "Titan regeneration",
          "Combat adaptation",
          "Experienced Titan combat",
        ],

        weaknesses: [
          "Human nape remains critical",
        ],

        specialTraits: [
          "Veteran Titan combatant",
          "Exceptional determination",
        ],

      }),

      createTournamentForm({

        id:
          "eren-war-hammer",

        name:
          "Attack + War Hammer",

        rank:
          4,

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
            94,

          speed:
            87,

          durability:
            96,

          intelligence:
            94,

          attack:
            100,

          defense:
            98,

          stamina:
            95,

          versatility:
            100,
        },

        abilities: [
          "War Hammer Titan",
          "Weapon creation",
          "Titan hardening",
          "Remote Titan operation",
          "Crystalized protection",
        ],

        weaknesses: [
          "War Hammer power has high energy demands",
          "Human operator remains vulnerable",
        ],

        specialTraits: [
          "Can create weapons from hardened Titan material",
          "Can operate Titan through remote connection",
        ],

      }),

      createTournamentForm({

        id:
          "eren-founding-titan",

        name:
          "Founding Titan",

        rank:
          5,

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
            100,

          speed:
            61,

          durability:
            100,

          intelligence:
            98,

          attack:
            100,

          defense:
            100,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Founding Titan",
          "Paths",
          "Titan control",
          "Eldian biological manipulation",
          "Memory manipulation potential",
          "Massive Titan command",
        ],

        weaknesses: [
          "Full Founding Titan functionality has specific access conditions",
          "Sunlight is irrelevant to Titans but human-body vulnerabilities remain context dependent",
        ],

        specialTraits: [
          "Coordinate",
          "Royal blood interaction",
          "Paths network",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 02 — MIKASA ACKERMAN
========================================================= */

export const MIKASA_ACKERMAN =
  createTournamentCharacter({

    id:
      "attack-on-titan-mikasa-ackerman",

    verseId:
      "attack-on-titan",

    name:
      "Mikasa Ackerman",

    aliases: [
      "Mikasa",
      "Ackerman",
      "Elite Scout",
    ],

    tags: [
      "Ackerman",
      "Scout Regiment",
      "ODM Gear",
      "Elite Soldier",
      "Swordsmanship",
    ],

    seedRating:
      96,

    description:
      "Mikasa is one of the most naturally gifted soldiers in the Scout Regiment. Her Ackerman lineage gives her exceptional reflexes, physical ability, reaction speed and close-range combat performance.",

    specialTraits: [
      "Ackerman bloodline",
      "Combat instinct",
      "Exceptional reflexes",
      "ODM mastery",
    ],

    forms: [

      createTournamentForm({

        id:
          "mikasa-cadet",

        name:
          "Cadet Mikasa",

        rank:
          1,

        tier:
          "advanced",

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
            18,

          speed:
            86,

          durability:
            62,

          intelligence:
            83,

          attack:
            81,

          defense:
            68,

          stamina:
            78,

          versatility:
            76,
        },

        abilities: [
          "ODM Gear",
          "Swordsmanship",
          "Ackerman physical enhancement",
        ],

        weaknesses: [
          "Human durability",
        ],

        specialTraits: [
          "Exceptional physical potential",
        ],

      }),

      createTournamentForm({

        id:
          "mikasa-prime",

        name:
          "Prime Mikasa",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            78,

          realPower:
            78,

          hax:
            26,

          speed:
            99,

          durability:
            74,

          intelligence:
            94,

          attack:
            96,

          defense:
            81,

          stamina:
            92,

          versatility:
            87,
        },

        abilities: [
          "Ackerman instinct",
          "ODM Gear mastery",
          "Dual-blade combat",
          "Extreme aerial maneuverability",
          "Precision killing",
        ],

        weaknesses: [
          "Still human",
        ],

        specialTraits: [
          "Near-instant combat reaction",
          "Elite Anti-Titan specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 03 — LEVI ACKERMAN
========================================================= */

export const LEVI_ACKERMAN =
  createTournamentCharacter({

    id:
      "attack-on-titan-levi-ackerman",

    verseId:
      "attack-on-titan",

    name:
      "Levi Ackerman",

    aliases: [
      "Captain Levi",
      "Humanity's Strongest Soldier",
    ],

    tags: [
      "Ackerman",
      "Scout Regiment",
      "ODM Gear",
      "Captain",
      "Elite Soldier",
    ],

    seedRating:
      100,

    description:
      "Levi is regarded as Humanity's Strongest Soldier. His Ackerman abilities, extraordinary movement, tactical intelligence and unmatched ODM combat technique make him one of the strongest human combatants in the setting.",

    specialTraits: [
      "Ackerman bloodline",
      "Combat awakening",
      "Exceptional reaction speed",
      "Veteran battlefield experience",
    ],

    forms: [

      createTournamentForm({

        id:
          "levi-standard",

        name:
          "Captain Levi",

        rank:
          1,

        tier:
          "mythic",

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
            24,

          speed:
            100,

          durability:
            73,

          intelligence:
            99,

          attack:
            100,

          defense:
            83,

          stamina:
            88,

          versatility:
            96,
        },

        abilities: [
          "ODM Gear mastery",
          "Ackerman combat instinct",
          "Dual-blade swordsmanship",
          "Extreme aerial maneuvering",
          "Thunder Spear combat",
        ],

        weaknesses: [
          "Human body",
          "Major injuries can significantly affect mobility",
        ],

        specialTraits: [
          "Humanity's Strongest Soldier",
          "Extreme combat precision",
        ],

      }),

      createTournamentForm({

        id:
          "levi-beast-battle",

        name:
          "Levi — Beast Titan Battle State",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            88,

          realPower:
            88,

          hax:
            34,

          speed:
            100,

          durability:
            69,

          intelligence:
            100,

          attack:
            100,

          defense:
            77,

          stamina:
            84,

          versatility:
            98,
        },

        abilities: [
          "ODM aerial assault",
          "Thunder Spears",
          "Ackerman strength",
          "Precision targeting",
          "Anti-Titan combat",
        ],

        weaknesses: [
          "Severe accumulated injuries",
        ],

        specialTraits: [
          "Specialized Titan assassination",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 04 — ARMIN ARLERT
========================================================= */

export const ARMIN_ARLERT =
  createTournamentCharacter({

    id:
      "attack-on-titan-armin-arlert",

    verseId:
      "attack-on-titan",

    name:
      "Armin Arlert",

    aliases: [
      "Commander Armin",
      "Colossal Titan",
    ],

    tags: [
      "Strategist",
      "Scout Regiment",
      "Commander",
      "Colossal Titan",
    ],

    seedRating:
      97,

    description:
      "Armin is one of the greatest strategic minds in the series. After inheriting the Colossal Titan, his strategic intelligence is combined with enormous transformation power and battlefield-scale destruction.",

    specialTraits: [
      "Exceptional strategic intelligence",
      "Colossal Titan",
      "Commander",
      "High tactical adaptability",
    ],

    forms: [

      createTournamentForm({

        id:
          "armin-human",

        name:
          "Strategist Armin",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            38,

          realPower:
            38,

          hax:
            28,

          speed:
            48,

          durability:
            43,

          intelligence:
            100,

          attack:
            30,

          defense:
            39,

          stamina:
            57,

          versatility:
            96,
        },

        abilities: [
          "Strategic planning",
          "Battlefield analysis",
          "Leadership",
          "Reconnaissance",
        ],

        weaknesses: [
          "Low direct physical power",
        ],

        specialTraits: [
          "Extreme battle IQ",
        ],

      }),

      createTournamentForm({

        id:
          "armin-colossal",

        name:
          "Colossal Titan Armin",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            98,

          realPower:
            98,

          hax:
            85,

          speed:
            54,

          durability:
            100,

          intelligence:
            100,

          attack:
            100,

          defense:
            100,

          stamina:
            89,

          versatility:
            95,
        },

        abilities: [
          "Colossal Titan",
          "Massive transformation explosion",
          "Steam generation",
          "Gigantic physical strength",
          "Titan regeneration",
        ],

        weaknesses: [
          "Very high energy consumption",
          "Limited mobility compared with smaller Titans",
        ],

        specialTraits: [
          "Battlefield-scale destruction",
          "Commander-level tactical use of Titan power",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 05 — REINER BRAUN
========================================================= */

export const REINER_BRAUN =
  createTournamentCharacter({

    id:
      "attack-on-titan-reiner-braun",

    verseId:
      "attack-on-titan",

    name:
      "Reiner Braun",

    aliases: [
      "Armored Titan",
      "Warrior Reiner",
    ],

    tags: [
      "Warrior",
      "Armored Titan",
      "Marley",
      "Titan Shifter",
    ],

    seedRating:
      94,

    description:
      "Reiner is a veteran Marleyan Warrior and the inheritor of the Armored Titan. His defining advantages are durability, hardened armor, endurance and repeated battlefield experience.",

    specialTraits: [
      "Armored Titan",
      "Warrior training",
      "Extreme durability",
      "High pain tolerance",
    ],

    forms: [

      createTournamentForm({

        id:
          "reiner-human",

        name:
          "Warrior Reiner",

        rank:
          1,

        tier:
          "advanced",

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
            17,

          speed:
            59,

          durability:
            68,

          intelligence:
            76,

          attack:
            69,

          defense:
            71,

          stamina:
            82,

          versatility:
            58,
        },

        abilities: [
          "Marleyan Warrior training",
          "Hand-to-hand combat",
          "Military tactics",
        ],

        weaknesses: [
          "Human durability",
          "Psychological instability",
        ],

        specialTraits: [
          "Elite Warrior",
        ],

      }),

      createTournamentForm({

        id:
          "reiner-armored",

        name:
          "Armored Titan",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            88,

          realPower:
            88,

          hax:
            38,

          speed:
            66,

          durability:
            100,

          intelligence:
            78,

          attack:
            93,

          defense:
            100,

          stamina:
            98,

          versatility:
            70,
        },

        abilities: [
          "Armored Titan",
          "Titan hardening",
          "Armored plating",
          "Titan regeneration",
          "Powerful charges",
        ],

        weaknesses: [
          "Armor limits mobility",
          "Specialized weapons can penetrate hardened areas",
        ],

        specialTraits: [
          "Primary defensive Titan",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 06 — ANNIE LEONHART
========================================================= */

export const ANNIE_LEONHART =
  createTournamentCharacter({

    id:
      "attack-on-titan-annie-leonhart",

    verseId:
      "attack-on-titan",

    name:
      "Annie Leonhart",

    aliases: [
      "Female Titan",
      "Warrior Annie",
    ],

    tags: [
      "Warrior",
      "Female Titan",
      "Marley",
      "Martial Artist",
    ],

    seedRating:
      94,

    description:
      "Annie is an elite Marleyan Warrior with exceptional martial arts ability and the versatile Female Titan, which can harden, call Pure Titans and specialize in adaptive close combat.",

    specialTraits: [
      "Elite martial artist",
      "Female Titan",
      "Titan hardening",
      "Warrior training",
    ],

    forms: [

      createTournamentForm({

        id:
          "annie-human",

        name:
          "Warrior Annie",

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
            59,

          realPower:
            59,

          hax:
            21,

          speed:
            79,

          durability:
            64,

          intelligence:
            92,

          attack:
            82,

          defense:
            70,

          stamina:
            82,

          versatility:
            75,
        },

        abilities: [
          "Martial arts",
          "Warrior combat training",
          "ODM combat",
          "Titan transformation",
        ],

        weaknesses: [
          "Human durability",
        ],

        specialTraits: [
          "Exceptional hand-to-hand technique",
        ],

      }),

      createTournamentForm({

        id:
          "annie-female-titan",

        name:
          "Female Titan",

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
            48,

          speed:
            82,

          durability:
            89,

          intelligence:
            94,

          attack:
            94,

          defense:
            88,

          stamina:
            94,

          versatility:
            94,
        },

        abilities: [
          "Female Titan",
          "Titan hardening",
          "Martial-arts-based Titan combat",
          "Titan attraction scream",
          "Regeneration",
        ],

        weaknesses: [
          "Titan transformation stamina",
        ],

        specialTraits: [
          "Highly versatile Nine Titan ability",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 07 — ZEKE YEAGER
========================================================= */

export const ZEKE_YEAGER =
  createTournamentCharacter({

    id:
      "attack-on-titan-zeke-yeager",

    verseId:
      "attack-on-titan",

    name:
      "Zeke Yeager",

    aliases: [
      "Beast Titan",
      "Warrior Zeke",
    ],

    tags: [
      "Yeager",
      "Beast Titan",
      "Royal Blood",
      "Warrior",
      "Marley",
    ],

    seedRating:
      97,

    description:
      "Zeke is the Beast Titan inheritor and possesses royal blood. His throwing ability, Titan control and strategic intelligence make him one of the most dangerous ranged Titan users.",

    specialTraits: [
      "Royal blood",
      "Beast Titan",
      "Titan control",
      "Exceptional throwing ability",
    ],

    forms: [

      createTournamentForm({

        id:
          "zeke-human",

        name:
          "Human Zeke",

        rank:
          1,

        tier:
          "advanced",

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
            43,

          speed:
            59,

          durability:
            57,

          intelligence:
            98,

          attack:
            69,

          defense:
            61,

          stamina:
            73,

          versatility:
            78,
        },

        abilities: [
          "Warrior training",
          "Military strategy",
          "Royal blood",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Strategic genius",
        ],

      }),

      createTournamentForm({

        id:
          "zeke-beast",

        name:
          "Beast Titan",

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
            82,

          speed:
            77,

          durability:
            91,

          intelligence:
            100,

          attack:
            100,

          defense:
            85,

          stamina:
            97,

          versatility:
            96,
        },

        abilities: [
          "Beast Titan",
          "Extreme long-range throwing",
          "Royal Titan control",
          "Titan spinal-fluid effects",
          "Titan regeneration",
        ],

        weaknesses: [
          "Close-range combat is less specialized",
        ],

        specialTraits: [
          "Royal-blood Beast Titan",
          "Artillery-class Titan",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 08 — BERTOLT HOOVER
========================================================= */

export const BERTOLT_HOOVER =
  createTournamentCharacter({

    id:
      "attack-on-titan-bertolt-hoover",

    verseId:
      "attack-on-titan",

    name:
      "Bertolt Hoover",

    aliases: [
      "Colossal Titan",
      "Warrior Bertolt",
    ],

    tags: [
      "Warrior",
      "Colossal Titan",
      "Marley",
      "Titan Shifter",
    ],

    seedRating:
      93,

    description:
      "Bertolt was the original Colossal Titan holder before Armin inherited the power. His Titan possessed enormous destructive scale and extraordinary transformation output.",

    specialTraits: [
      "Colossal Titan",
      "Warrior training",
      "Massive transformation explosion",
    ],

    forms: [

      createTournamentForm({

        id:
          "bertolt-human",

        name:
          "Human Bertolt",

        rank:
          1,

        tier:
          "advanced",

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
            22,

          speed:
            47,

          durability:
            47,

          intelligence:
            81,

          attack:
            39,

          defense:
            42,

          stamina:
            60,

          versatility:
            54,
        },

        abilities: [
          "Warrior training",
          "Military combat",
          "Titan transformation",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Calm battlefield personality",
        ],

      }),

      createTournamentForm({

        id:
          "bertolt-colossal",

        name:
          "Colossal Titan Bertolt",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            98,

          realPower:
            98,

          hax:
            88,

          speed:
            51,

          durability:
            100,

          intelligence:
            84,

          attack:
            100,

          defense:
            100,

          stamina:
            88,

          versatility:
            87,
        },

        abilities: [
          "Colossal Titan",
          "Transformation explosion",
          "Steam generation",
          "Gigantic physical strength",
          "Titan regeneration",
        ],

        weaknesses: [
          "Extreme energy consumption",
          "Slow movement",
        ],

        specialTraits: [
          "Massive transformation blast",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 09 — PIECK FINGER
========================================================= */

export const PIECK_FINGER =
  createTournamentCharacter({

    id:
      "attack-on-titan-pieck-finger",

    verseId:
      "attack-on-titan",

    name:
      "Pieck Finger",

    aliases: [
      "Cart Titan",
      "Warrior Pieck",
    ],

    tags: [
      "Warrior",
      "Cart Titan",
      "Marley",
      "Reconnaissance",
      "Support",
    ],

    seedRating:
      93,

    description:
      "Pieck is a highly intelligent Warrior whose Cart Titan provides exceptional endurance, mobility, reconnaissance and repeated transformation capability.",

    specialTraits: [
      "Exceptional endurance",
      "Strategic intelligence",
      "Cart Titan",
    ],

    forms: [

      createTournamentForm({

        id:
          "pieck-human",

        name:
          "Human Pieck",

        rank:
          1,

        tier:
          "advanced",

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
            17,

          speed:
            55,

          durability:
            53,

          intelligence:
            97,

          attack:
            49,

          defense:
            50,

          stamina:
            78,

          versatility:
            83,
        },

        abilities: [
          "Warrior training",
          "Reconnaissance",
          "Strategic planning",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Extremely strong battlefield awareness",
        ],

      }),

      createTournamentForm({

        id:
          "pieck-cart",

        name:
          "Cart Titan",

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
            42,

          speed:
            79,

          durability:
            77,

          intelligence:
            100,

          attack:
            77,

          defense:
            75,

          stamina:
            100,

          versatility:
            98,
        },

        abilities: [
          "Cart Titan",
          "Extreme endurance",
          "Four-legged mobility",
          "Repeated transformation",
          "Weapon platform operation",
        ],

        weaknesses: [
          "Lower raw destructive power",
        ],

        specialTraits: [
          "Best endurance among major Titan forms",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 10 — PORCO GALLIARD
========================================================= */

export const PORCO_GALLIARD =
  createTournamentCharacter({

    id:
      "attack-on-titan-porco-galliard",

    verseId:
      "attack-on-titan",

    name:
      "Porco Galliard",

    aliases: [
      "Jaw Titan",
      "Warrior Porco",
    ],

    tags: [
      "Warrior",
      "Jaw Titan",
      "Marley",
      "Agility",
    ],

    seedRating:
      91,

    description:
      "Porco is the Jaw Titan inheritor before Falco and excels in speed, agility, climbing and high-damage bite attacks.",

    specialTraits: [
      "Jaw Titan",
      "Extreme agility",
      "High offensive pressure",
    ],

    forms: [

      createTournamentForm({

        id:
          "porco-human",

        name:
          "Human Porco",

        rank:
          1,

        tier:
          "advanced",

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
            14,

          speed:
            72,

          durability:
            54,

          intelligence:
            78,

          attack:
            72,

          defense:
            58,

          stamina:
            77,

          versatility:
            64,
        },

        abilities: [
          "Warrior training",
          "Close-range combat",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Aggressive close combatant",
        ],

      }),

      createTournamentForm({

        id:
          "porco-jaw",

        name:
          "Jaw Titan Porco",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            88,

          realPower:
            88,

          hax:
            49,

          speed:
            100,

          durability:
            76,

          intelligence:
            82,

          attack:
            100,

          defense:
            71,

          stamina:
            89,

          versatility:
            89,
        },

        abilities: [
          "Jaw Titan",
          "Extremely powerful jaws",
          "Titan claws",
          "Extreme mobility",
          "Titan regeneration",
        ],

        weaknesses: [
          "Lower durability than Armored or War Hammer Titans",
        ],

        specialTraits: [
          "High-speed Titan attacker",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 11 — FALCO GRICE
========================================================= */

export const FALCO_GRICE =
  createTournamentCharacter({

    id:
      "attack-on-titan-falco-grice",

    verseId:
      "attack-on-titan",

    name:
      "Falco Grice",

    aliases: [
      "Jaw Titan",
      "Flying Titan",
      "Warrior Candidate",
    ],

    tags: [
      "Warrior Candidate",
      "Jaw Titan",
      "Flying Titan",
      "Marley",
    ],

    seedRating:
      93,

    description:
      "Falco inherits the Jaw Titan and develops an unusual flying form influenced by the Beast Titan's spinal fluid, giving him exceptional aerial mobility.",

    specialTraits: [
      "Jaw Titan",
      "Flying Titan",
      "Aerial mobility",
    ],

    forms: [

      createTournamentForm({

        id:
          "falco-human",

        name:
          "Warrior Candidate Falco",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            45,

          realPower:
            45,

          hax:
            18,

          speed:
            62,

          durability:
            47,

          intelligence:
            86,

          attack:
            48,

          defense:
            49,

          stamina:
            67,

          versatility:
            64,
        },

        abilities: [
          "Warrior training",
          "Military combat",
        ],

        weaknesses: [
          "Limited experience",
        ],

        specialTraits: [
          "Strong natural empathy",
        ],

      }),

      createTournamentForm({

        id:
          "falco-jaw",

        name:
          "Jaw Titan Falco",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            81,

          realPower:
            81,

          hax:
            47,

          speed:
            97,

          durability:
            72,

          intelligence:
            90,

          attack:
            91,

          defense:
            69,

          stamina:
            90,

          versatility:
            84,
        },

        abilities: [
          "Jaw Titan",
          "Titan claws",
          "Extreme mobility",
          "Titan regeneration",
        ],

        weaknesses: [
          "Lower durability than large Titan forms",
        ],

        specialTraits: [
          "Aerial evolution potential",
        ],

      }),

      createTournamentForm({

        id:
          "falco-flying",

        name:
          "Flying Jaw Titan",

        rank:
          3,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            95,

          realPower:
            95,

          hax:
            68,

          speed:
            100,

          durability:
            82,

          intelligence:
            94,

          attack:
            96,

          defense:
            78,

          stamina:
            94,

          versatility:
            100,
        },

        abilities: [
          "Flying Titan",
          "Jaw Titan",
          "Aerial combat",
          "Titan regeneration",
          "Extreme speed",
        ],

        weaknesses: [
          "Less armored than heavy Titans",
        ],

        specialTraits: [
          "Full aerial mobility",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 12 — Ymir
========================================================= */

export const YMIR =
  createTournamentCharacter({

    id:
      "attack-on-titan-ymir",

    verseId:
      "attack-on-titan",

    name:
      "Ymir",

    aliases: [
      "Jaw Titan",
      "Scout Ymir",
    ],

    tags: [
      "Jaw Titan",
      "Scout Regiment",
      "Warrior",
      "Agility",
    ],

    seedRating:
      86,

    description:
      "Ymir's Jaw Titan form specializes in speed, climbing, surprise attacks and agile close combat.",

    specialTraits: [
      "Jaw Titan",
      "Exceptional mobility",
    ],

    forms: [

      createTournamentForm({

        id:
          "ymir-human",

        name:
          "Human Ymir",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            48,

          realPower:
            48,

          hax:
            13,

          speed:
            72,

          durability:
            54,

          intelligence:
            86,

          attack:
            66,

          defense:
            57,

          stamina:
            76,

          versatility:
            68,
        },

        abilities: [
          "ODM Gear",
          "Close combat",
          "Scout training",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Highly independent combat style",
        ],

      }),

      createTournamentForm({

        id:
          "ymir-jaw",

        name:
          "Jaw Titan Ymir",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            79,

          realPower:
            79,

          hax:
            37,

          speed:
            96,

          durability:
            70,

          intelligence:
            88,

          attack:
            90,

          defense:
            67,

          stamina:
            84,

          versatility:
            84,
        },

        abilities: [
          "Jaw Titan",
          "Extreme climbing",
          "Fast movement",
          "Titan regeneration",
        ],

        weaknesses: [
          "Low overall durability",
        ],

        specialTraits: [
          "Stealth-oriented Titan fighter",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 13 — HANGE ZOE
========================================================= */

export const HANGE_ZOE =
  createTournamentCharacter({

    id:
      "attack-on-titan-hange-zoe",

    verseId:
      "attack-on-titan",

    name:
      "Hange Zoe",

    aliases: [
      "Commander Hange",
      "Titan Researcher",
    ],

    tags: [
      "Scout Regiment",
      "Commander",
      "Scientist",
      "Researcher",
      "ODM Gear",
    ],

    seedRating:
      88,

    description:
      "Hange is an exceptionally intelligent researcher and commander whose deep Titan knowledge gives them strong analytical and tactical advantages.",

    specialTraits: [
      "Scientific genius",
      "Titan researcher",
      "Commander",
    ],

    forms: [

      createTournamentForm({

        id:
          "hange-standard",

        name:
          "Commander Hange",

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
            20,

          speed:
            67,

          durability:
            56,

          intelligence:
            100,

          attack:
            69,

          defense:
            62,

          stamina:
            74,

          versatility:
            98,
        },

        abilities: [
          "ODM Gear",
          "Titan analysis",
          "Scientific research",
          "Battlefield strategy",
        ],

        weaknesses: [
          "Human durability",
        ],

        specialTraits: [
          "Extremely high Battle IQ",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 14 — ERWIN SMITH
========================================================= */

export const ERWIN_SMITH =
  createTournamentCharacter({

    id:
      "attack-on-titan-erwin-smith",

    verseId:
      "attack-on-titan",

    name:
      "Erwin Smith",

    aliases: [
      "Commander Erwin",
      "Scout Commander",
    ],

    tags: [
      "Scout Regiment",
      "Commander",
      "Strategist",
      "Leadership",
      "ODM Gear",
    ],

    seedRating:
      92,

    description:
      "Erwin is one of the greatest military strategists in the series. His leadership, risk assessment and ability to motivate soldiers produce exceptional battlefield value.",

    specialTraits: [
      "Exceptional commander",
      "Strategic genius",
      "Leadership",
    ],

    forms: [

      createTournamentForm({

        id:
          "erwin-commander",

        name:
          "Commander Erwin",

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
            17,

          speed:
            52,

          durability:
            55,

          intelligence:
            100,

          attack:
            62,

          defense:
            61,

          stamina:
            69,

          versatility:
            100,
        },

        abilities: [
          "Military strategy",
          "Leadership",
          "ODM Gear",
          "Psychological warfare",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "High-risk tactical planning",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 15 — JEAN KIRSTEIN
========================================================= */

export const JEAN_KIRSTEIN =
  createTournamentCharacter({

    id:
      "attack-on-titan-jean-kirstein",

    verseId:
      "attack-on-titan",

    name:
      "Jean Kirstein",

    aliases: [
      "Scout Jean",
      "Field Commander",
    ],

    tags: [
      "Scout Regiment",
      "ODM Gear",
      "Leader",
      "Strategist",
    ],

    seedRating:
      80,

    description:
      "Jean develops from a self-preserving cadet into a highly dependable Scout soldier and battlefield leader.",

    specialTraits: [
      "Strong tactical judgment",
      "Leadership potential",
    ],

    forms: [

      createTournamentForm({

        id:
          "jean-cadet",

        name:
          "Cadet Jean",

        rank:
          1,

        tier:
          "advanced",

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
            10,

          speed:
            54,

          durability:
            45,

          intelligence:
            73,

          attack:
            46,

          defense:
            50,

          stamina:
            62,

          versatility:
            61,
        },

        abilities: [
          "ODM Gear",
          "Swordsmanship",
          "Military training",
        ],

        weaknesses: [
          "Limited early combat experience",
        ],

        specialTraits: [
          "Practical thinker",
        ],

      }),

      createTournamentForm({

        id:
          "jean-veteran",

        name:
          "Veteran Jean",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            59,

          realPower:
            59,

          hax:
            16,

          speed:
            72,

          durability:
            61,

          intelligence:
            91,

          attack:
            76,

          defense:
            70,

          stamina:
            79,

          versatility:
            84,
        },

        abilities: [
          "ODM Gear mastery",
          "Swordsmanship",
          "Leadership",
          "Firearm combat",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Reliable battlefield decision-making",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 16 — CONNIE SPRINGER
========================================================= */

export const CONNIE_SPRINGER =
  createTournamentCharacter({

    id:
      "attack-on-titan-connie-springer",

    verseId:
      "attack-on-titan",

    name:
      "Connie Springer",

    aliases: [
      "Scout Connie",
    ],

    tags: [
      "Scout Regiment",
      "ODM Gear",
      "Soldier",
      "Agility",
    ],

    seedRating:
      74,

    description:
      "Connie is a fast and agile Scout soldier with strong ODM movement and increasing battlefield experience.",

    specialTraits: [
      "Agility",
      "Scout experience",
    ],

    forms: [

      createTournamentForm({

        id:
          "connie-cadet",

        name:
          "Cadet Connie",

        rank:
          1,

        tier:
          "advanced",

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
            8,

          speed:
            69,

          durability:
            46,

          intelligence:
            63,

          attack:
            56,

          defense:
            47,

          stamina:
            66,

          versatility:
            60,
        },

        abilities: [
          "ODM Gear",
          "Agility",
          "Military training",
        ],

        weaknesses: [
          "Lower raw strength",
        ],

        specialTraits: [
          "High mobility",
        ],

      }),

      createTournamentForm({

        id:
          "connie-veteran",

        name:
          "Veteran Connie",

        rank:
          2,

        tier:
          "advanced",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            49,

          realPower:
            49,

          hax:
            11,

          speed:
            79,

          durability:
            57,

          intelligence:
            71,

          attack:
            69,

          defense:
            59,

          stamina:
            78,

          versatility:
            69,
        },

        abilities: [
          "ODM Gear mastery",
          "Swordsmanship",
          "Firearm combat",
        ],

        weaknesses: [
          "No supernatural transformation",
        ],

        specialTraits: [
          "Fast and dependable support soldier",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 17 — SASHA BRAUS
========================================================= */

export const SASHA_BRAUS =
  createTournamentCharacter({

    id:
      "attack-on-titan-sasha-braus",

    verseId:
      "attack-on-titan",

    name:
      "Sasha Braus",

    aliases: [
      "Potato Girl",
      "Potato Girl of the Scouts",
    ],

    tags: [
      "Scout Regiment",
      "Marksman",
      "Hunter",
      "ODM Gear",
      "Archery",
    ],

    seedRating:
      78,

    description:
      "Sasha combines Scout combat training with exceptional natural hunting instincts and outstanding marksmanship.",

    specialTraits: [
      "Hunter instincts",
      "Exceptional accuracy",
    ],

    forms: [

      createTournamentForm({

        id:
          "sasha-cadet",

        name:
          "Cadet Sasha",

        rank:
          1,

        tier:
          "advanced",

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
            8,

          speed:
            57,

          durability:
            44,

          intelligence:
            75,

          attack:
            75,

          defense:
            41,

          stamina:
            61,

          versatility:
            68,
        },

        abilities: [
          "Archery",
          "Hunting",
          "Military training",
        ],

        weaknesses: [
          "Limited close-range specialization",
        ],

        specialTraits: [
          "Natural survival instincts",
        ],

      }),

      createTournamentForm({

        id:
          "sasha-veteran",

        name:
          "Veteran Sasha",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            52,

          realPower:
            52,

          hax:
            11,

          speed:
            73,

          durability:
            53,

          intelligence:
            84,

          attack:
            95,

          defense:
            54,

          stamina:
            75,

          versatility:
            82,
        },

        abilities: [
          "Elite marksmanship",
          "ODM Gear",
          "Rifle combat",
          "Close combat",
        ],

        weaknesses: [
          "Human durability",
        ],

        specialTraits: [
          "Outstanding ranged accuracy",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 18 — HISTORIA REISS
========================================================= */

export const HISTORIA_REISS =
  createTournamentCharacter({

    id:
      "attack-on-titan-historia-reiss",

    verseId:
      "attack-on-titan",

    name:
      "Historia Reiss",

    aliases: [
      "Krista Lenz",
      "Queen Historia",
    ],

    tags: [
      "Royal Blood",
      "Reiss Family",
      "Queen",
      "Paradis",
    ],

    seedRating:
      67,

    description:
      "Historia is the true heir of the Reiss family and Queen of Paradis. Her greatest tournament value is strategic and lineage-based rather than direct combat power.",

    specialTraits: [
      "Royal blood",
      "Reiss lineage",
      "Queen of Paradis",
    ],

    forms: [

      createTournamentForm({

        id:
          "historia-krista",

        name:
          "Krista Lenz",

        rank:
          1,

        tier:
          "standard",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            30,

          realPower:
            30,

          hax:
            22,

          speed:
            41,

          durability:
            37,

          intelligence:
            76,

          attack:
            27,

          defense:
            34,

          stamina:
            48,

          versatility:
            48,
        },

        abilities: [
          "Military training",
          "ODM Gear",
        ],

        weaknesses: [
          "Low combat power",
        ],

        specialTraits: [
          "Hidden royal identity",
        ],

      }),

      createTournamentForm({

        id:
          "historia-queen",

        name:
          "Queen Historia",

        rank:
          2,

        tier:
          "advanced",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            34,

          realPower:
            34,

          hax:
            35,

          speed:
            44,

          durability:
            39,

          intelligence:
            84,

          attack:
            31,

          defense:
            41,

          stamina:
            52,

          versatility:
            65,
        },

        abilities: [
          "Royal lineage",
          "Leadership",
          "Political authority",
        ],

        weaknesses: [
          "Very limited direct combat",
        ],

        specialTraits: [
          "Royal blood",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 19 — HANGE / OTHER SUPPORT CHARACTER
   YMIR OF THE SCOUT REGIMENT IS ALREADY INCLUDED
========================================================= */


/* =========================================================
   CHARACTER 19 — KENNY ACKERMAN
========================================================= */

export const KENNY_ACKERMAN =
  createTournamentCharacter({

    id:
      "attack-on-titan-kenny-ackerman",

    verseId:
      "attack-on-titan",

    name:
      "Kenny Ackerman",

    aliases: [
      "Kenny the Ripper",
      "Anti-Personnel Squad Commander",
    ],

    tags: [
      "Ackerman",
      "Anti-Personnel",
      "Guns",
      "Assassin",
      "Leader",
    ],

    seedRating:
      91,

    description:
      "Kenny Ackerman is a legendary assassin and anti-personnel fighter. His Ackerman abilities combine with firearms, mobility and extreme combat experience.",

    specialTraits: [
      "Ackerman lineage",
      "Assassin",
      "Elite firearms user",
    ],

    forms: [

      createTournamentForm({

        id:
          "kenny-ripper",

        name:
          "Kenny the Ripper",

        rank:
          1,

        tier:
          "mythic",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            73,

          realPower:
            73,

          hax:
            22,

          speed:
            96,

          durability:
            67,

          intelligence:
            96,

          attack:
            98,

          defense:
            73,

          stamina:
            84,

          versatility:
            97,
        },

        abilities: [
          "Ackerman combat instinct",
          "Anti-personnel firearms",
          "ODM movement",
          "Knife combat",
        ],

        weaknesses: [
          "Human durability",
        ],

        specialTraits: [
          "Elite human assassin",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 20 — LARA TYBUR
========================================================= */

export const LARA_TYBUR =
  createTournamentCharacter({

    id:
      "attack-on-titan-lara-tybur",

    verseId:
      "attack-on-titan",

    name:
      "Lara Tybur",

    aliases: [
      "War Hammer Titan",
      "Tybur Family Warrior",
    ],

    tags: [
      "War Hammer Titan",
      "Tybur",
      "Marley",
      "Hardening",
      "Weapon Creation",
    ],

    seedRating:
      96,

    description:
      "Lara Tybur is the War Hammer Titan holder during the Liberio battle. Her Titan can generate weapons and hardened structures and control the Titan body from a remote crystalized position.",

    specialTraits: [
      "War Hammer Titan",
      "Weapon creation",
      "Remote Titan operation",
    ],

    forms: [

      createTournamentForm({

        id:
          "lara-human",

        name:
          "Human Lara Tybur",

        rank:
          1,

        tier:
          "advanced",

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
            12,

          speed:
            47,

          durability:
            44,

          intelligence:
            83,

          attack:
            38,

          defense:
            42,

          stamina:
            56,

          versatility:
            53,
        },

        abilities: [
          "Tybur political influence",
          "Titan inheritance",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Hidden Titan operator",
        ],

      }),

      createTournamentForm({

        id:
          "lara-war-hammer",

        name:
          "War Hammer Titan",

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
            99,

          speed:
            78,

          durability:
            95,

          intelligence:
            91,

          attack:
            100,

          defense:
            97,

          stamina:
            91,

          versatility:
            100,
        },

        abilities: [
          "Weapon creation",
          "War Hammer Titan",
          "Titan hardening",
          "Remote control",
          "Crystal protection",
          "Ground spike creation",
        ],

        weaknesses: [
          "Remote operator can be located",
          "Large-scale constructs consume Titan resources",
        ],

        specialTraits: [
          "Most versatile weapon-generating Titan",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 21 — FLOCH FORSTER
========================================================= */

export const FLOCH_FORSTER =
  createTournamentCharacter({

    id:
      "attack-on-titan-floch-forster",

    verseId:
      "attack-on-titan",

    name:
      "Floch Forster",

    aliases: [
      "Yeagerist Leader",
      "Floch",
    ],

    tags: [
      "Yeagerist",
      "Soldier",
      "Leadership",
      "Firearms",
    ],

    seedRating:
      73,

    description:
      "Floch becomes one of the leading figures of the Yeagerists and demonstrates strong survival instincts, aggression and political leadership.",

    specialTraits: [
      "Yeagerist leadership",
      "Strong survival instinct",
    ],

    forms: [

      createTournamentForm({

        id:
          "floch-scout",

        name:
          "Scout Floch",

        rank:
          1,

        tier:
          "advanced",

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
            9,

          speed:
            55,

          durability:
            51,

          intelligence:
            73,

          attack:
            67,

          defense:
            53,

          stamina:
            69,

          versatility:
            58,
        },

        abilities: [
          "ODM Gear",
          "Military combat",
          "Firearms",
        ],

        weaknesses: [
          "No Titan powers",
        ],

        specialTraits: [
          "Determined survivor",
        ],

      }),

      createTournamentForm({

        id:
          "floch-yeagerist",

        name:
          "Yeagerist Commander Floch",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            48,

          realPower:
            48,

          hax:
            14,

          speed:
            61,

          durability:
            57,

          intelligence:
            80,

          attack:
            78,

          defense:
            59,

          stamina:
            74,

          versatility:
            69,
        },

        abilities: [
          "Firearms",
          "Military leadership",
          "Political influence",
          "ODM Gear",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Strong ideological conviction",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 22 — YELENA
========================================================= */

export const YELENA =
  createTournamentCharacter({

    id:
      "attack-on-titan-yelena",

    verseId:
      "attack-on-titan",

    name:
      "Yelena",

    aliases: [
      "Anti-Marley Volunteer Commander",
      "Yeagerist Ally",
    ],

    tags: [
      "Volunteers",
      "Zeke Loyalist",
      "Strategist",
      "Marley",
    ],

    seedRating:
      69,

    description:
      "Yelena is a highly devoted follower of Zeke and a strategically important organizer of the anti-Marley volunteers.",

    specialTraits: [
      "Strategic organizer",
      "Zeke loyalist",
    ],

    forms: [

      createTournamentForm({

        id:
          "yelena-standard",

        name:
          "Yelena",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            28,

          realPower:
            28,

          hax:
            10,

          speed:
            40,

          durability:
            38,

          intelligence:
            88,

          attack:
            26,

          defense:
            33,

          stamina:
            47,

          versatility:
            67,
        },

        abilities: [
          "Strategic planning",
          "Military organization",
          "Firearm knowledge",
        ],

        weaknesses: [
          "Low direct combat ability",
        ],

        specialTraits: [
          "Extremely loyal strategist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 23 — MAGATH
========================================================= */

export const MAGATH =
  createTournamentCharacter({

    id:
      "attack-on-titan-theo-magath",

    verseId:
      "attack-on-titan",

    name:
      "Theo Magath",

    aliases: [
      "General Magath",
      "Marleyan Commander",
    ],

    tags: [
      "Marley",
      "General",
      "Warrior Command",
      "Artillery",
      "Strategist",
    ],

    seedRating:
      87,

    description:
      "Theo Magath is a veteran Marleyan commander and artillery specialist with enormous military experience and strong strategic instincts.",

    specialTraits: [
      "Artillery specialist",
      "Veteran commander",
      "Warrior command",
    ],

    forms: [

      createTournamentForm({

        id:
          "magath-general",

        name:
          "General Magath",

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
            12,

          speed:
            49,

          durability:
            59,

          intelligence:
            98,

          attack:
            85,

          defense:
            62,

          stamina:
            78,

          versatility:
            93,
        },

        abilities: [
          "Anti-Titan artillery",
          "Firearms",
          "Military strategy",
          "Warrior command",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Extremely experienced commander",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 24 — ONYANKOPON
========================================================= */

export const ONYANKOPON =
  createTournamentCharacter({

    id:
      "attack-on-titan-onyankopon",

    verseId:
      "attack-on-titan",

    name:
      "Onyankopon",

    aliases: [
      "Pilot",
      "Volunteer Soldier",
    ],

    tags: [
      "Marley Volunteers",
      "Pilot",
      "Air Force",
      "Support",
    ],

    seedRating:
      72,

    description:
      "Onyankopon is an experienced pilot and technical support specialist who provides crucial aerial mobility and battlefield transportation.",

    specialTraits: [
      "Expert pilot",
      "Technical knowledge",
      "Aerial support",
    ],

    forms: [

      createTournamentForm({

        id:
          "onyankopon-pilot",

        name:
          "Pilot Onyankopon",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            38,

          realPower:
            38,

          hax:
            18,

          speed:
            67,

          durability:
            41,

          intelligence:
            92,

          attack:
            69,

          defense:
            44,

          stamina:
            60,

          versatility:
            94,
        },

        abilities: [
          "Aircraft piloting",
          "Aerial reconnaissance",
          "Technical support",
          "Firearms",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "High-value transport specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 25 — GABI BRAUN
========================================================= */

export const GABI_BRAUN =
  createTournamentCharacter({

    id:
      "attack-on-titan-gabi-braun",

    verseId:
      "attack-on-titan",

    name:
      "Gabi Braun",

    aliases: [
      "Warrior Candidate Gabi",
      "Marksman Gabi",
    ],

    tags: [
      "Warrior Candidate",
      "Marley",
      "Marksman",
      "Rifle",
    ],

    seedRating:
      82,

    description:
      "Gabi is an exceptionally talented Warrior candidate with excellent marksmanship, courage and battlefield instincts.",

    specialTraits: [
      "Exceptional marksman",
      "Warrior candidate",
    ],

    forms: [

      createTournamentForm({

        id:
          "gabi-candidate",

        name:
          "Warrior Candidate Gabi",

        rank:
          1,

        tier:
          "advanced",

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
            9,

          speed:
            63,

          durability:
            45,

          intelligence:
            86,

          attack:
            94,

          defense:
            45,

          stamina:
            61,

          versatility:
            70,
        },

        abilities: [
          "Anti-Titan rifle",
          "Exceptional marksmanship",
          "Military training",
        ],

        weaknesses: [
          "No Titan transformation",
        ],

        specialTraits: [
          "Extreme confidence under pressure",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 26 — MARCO BODT
========================================================= */

export const MARCO_BODT =
  createTournamentCharacter({

    id:
      "attack-on-titan-marco-bodt",

    verseId:
      "attack-on-titan",

    name:
      "Marco Bodt",

    tags: [
      "Training Corps",
      "Military",
      "Leadership",
      "ODM Gear",
    ],

    seedRating:
      63,

    description:
      "Marco is a talented and compassionate cadet with strong leadership potential and good tactical instincts.",

    specialTraits: [
      "Leadership potential",
      "Dependable soldier",
    ],

    forms: [

      createTournamentForm({

        id:
          "marco-cadet",

        name:
          "Cadet Marco",

        rank:
          1,

        tier:
          "standard",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            33,

          realPower:
            33,

          hax:
            7,

          speed:
            43,

          durability:
            38,

          intelligence:
            72,

          attack:
            42,

          defense:
            39,

          stamina:
            50,

          versatility:
            52,
        },

        abilities: [
          "ODM Gear training",
          "Military strategy",
          "Leadership",
        ],

        weaknesses: [
          "Limited combat experience",
        ],

        specialTraits: [
          "Strong squad leadership potential",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 27 — PETRA RAL
========================================================= */

export const PETRA_RAL =
  createTournamentCharacter({

    id:
      "attack-on-titan-petra-ral",

    verseId:
      "attack-on-titan",

    name:
      "Petra Ral",

    aliases: [
      "Levi Squad Member",
      "Special Operations Soldier",
    ],

    tags: [
      "Scout Regiment",
      "Levi Squad",
      "ODM Gear",
      "Elite Soldier",
    ],

    seedRating:
      82,

    description:
      "Petra is an experienced member of Levi's Special Operations Squad and demonstrates excellent ODM Gear and anti-Titan combat ability.",

    specialTraits: [
      "Levi Squad veteran",
      "Elite ODM user",
    ],

    forms: [

      createTournamentForm({

        id:
          "petra-special-ops",

        name:
          "Special Operations Petra",

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
            55,

          realPower:
            55,

          hax:
            10,

          speed:
            84,

          durability:
            57,

          intelligence:
            88,

          attack:
            86,

          defense:
            62,

          stamina:
            76,

          versatility:
            79,
        },

        abilities: [
          "ODM Gear mastery",
          "Swordsmanship",
          "Squad coordination",
          "Anti-Titan combat",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Elite Special Operations soldier",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 28 — MOBLIT BERNER
========================================================= */

export const MOBLIT_BERNER =
  createTournamentCharacter({

    id:
      "attack-on-titan-moblit-berner",

    verseId:
      "attack-on-titan",

    name:
      "Moblit Berner",

    aliases: [
      "Hange's Assistant",
      "Scout Support Soldier",
    ],

    tags: [
      "Scout Regiment",
      "Hange Squad",
      "Support",
      "ODM Gear",
    ],

    seedRating:
      69,

    description:
      "Moblit is Hange's dependable assistant and a capable Scout soldier who repeatedly provides support in dangerous situations.",

    specialTraits: [
      "Support specialist",
      "Hange's trusted assistant",
    ],

    forms: [

      createTournamentForm({

        id:
          "moblit-standard",

        name:
          "Scout Moblit",

        rank:
          1,

        tier:
          "advanced",

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
            9,

          speed:
            53,

          durability:
            45,

          intelligence:
            89,

          attack:
            47,

          defense:
            45,

          stamina:
            59,

          versatility:
            72,
        },

        abilities: [
          "ODM Gear",
          "Reconnaissance",
          "Scientific support",
          "Battlefield logistics",
        ],

        weaknesses: [
          "Limited direct offensive power",
        ],

        specialTraits: [
          "Reliable support soldier",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 29 — NICCOLO
========================================================= */

export const NICCOLO =
  createTournamentCharacter({

    id:
      "attack-on-titan-niccolo",

    verseId:
      "attack-on-titan",

    name:
      "Niccolo",

    aliases: [
      "Marleyan Chef",
      "Anti-Marley Volunteer",
    ],

    tags: [
      "Marley",
      "Volunteer",
      "Chef",
      "Support",
    ],

    seedRating:
      58,

    description:
      "Niccolo is a Marleyan chef who becomes closely connected to the anti-Marley volunteers and the Eldian characters. His tournament value is primarily support and resource based.",

    specialTraits: [
      "Support specialist",
      "Marleyan background",
    ],

    forms: [

      createTournamentForm({

        id:
          "niccolo-standard",

        name:
          "Niccolo",

        rank:
          1,

        tier:
          "standard",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            24,

          realPower:
            24,

          hax:
            4,

          speed:
            31,

          durability:
            35,

          intelligence:
            62,

          attack:
            20,

          defense:
            30,

          stamina:
            42,

          versatility:
            55,
        },

        abilities: [
          "Culinary expertise",
          "Resource management",
          "Social intelligence",
        ],

        weaknesses: [
          "Very low direct combat ability",
        ],

        specialTraits: [
          "Non-combat support specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 30 — LOBOV
========================================================= */

export const LOBOV =
  createTournamentCharacter({

    id:
      "attack-on-titan-lobov",

    verseId:
      "attack-on-titan",

    name:
      "Lobov",

    aliases: [
      "Scout Officer",
      "Military Commander",
    ],

    tags: [
      "Scout Regiment",
      "Officer",
      "ODM Gear",
      "Firearms",
    ],

    seedRating:
      66,

    description:
      "Lobov is a senior Scout officer who participates in the later conflict and possesses standard military and ODM training.",

    specialTraits: [
      "Senior officer",
      "Scout experience",
    ],

    forms: [

      createTournamentForm({

        id:
          "lobov-officer",

        name:
          "Scout Officer Lobov",

        rank:
          1,

        tier:
          "advanced",

        isBase:
          true,

        tournamentEligible:
          true,

        stats: {

          relativePower:
            35,

          realPower:
            35,

          hax:
            8,

          speed:
            50,

          durability:
            43,

          intelligence:
            76,

          attack:
            46,

          defense:
            43,

          stamina:
            57,

          versatility:
            61,
        },

        abilities: [
          "ODM Gear",
          "Firearms",
          "Military command",
          "Scout operations",
        ],

        weaknesses: [
          "No Titan transformation",
        ],

        specialTraits: [
          "Senior field officer",
        ],

      }),

    ],
  });


/* =========================================================
   FINAL DATABASE EXPORT
   EXACTLY 30 CHARACTERS
========================================================= */

export const ATTACK_ON_TITAN_CHARACTERS = [

  EREN_YEAGER,

  MIKASA_ACKERMAN,

  LEVI_ACKERMAN,

  ARMIN_ARLERT,

  REINER_BRAUN,

  ANNIE_LEONHART,

  ZEKE_YEAGER,

  BERTOLT_HOOVER,

  PIECK_FINGER,

  PORCO_GALLIARD,

  FALCO_GRICE,

  YMIR,

  HANGE_ZOE,

  ERWIN_SMITH,

  JEAN_KIRSTEIN,

  CONNIE_SPRINGER,

  SASHA_BRAUS,

  HISTORIA_REISS,

  KENNY_ACKERMAN,

  LARA_TYBUR,

  FLOCH_FORSTER,

  YELENA,

  MAGATH,

  ONYANKOPON,

  GABI_BRAUN,

  MARCO_BODT,

  PETRA_RAL,

  MOBLIT_BERNER,

  NICCOLO,

  LOBOV,

];