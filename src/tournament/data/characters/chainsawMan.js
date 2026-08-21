/*
  Anime Arena — Grand Tournament

  Chainsaw Man Tournament Database

  30 CHARACTERS

  EXPANDED DATABASE STANDARD

  Every character contains:

    - id
    - verseId
    - name
    - aliases
    - tags
    - seedRating
    - description
    - specialTraits
    - forms

  Every form contains:

    - id
    - name
    - rank
    - tier
    - isBase
    - tournamentEligible
    - stats
    - abilities
    - weaknesses
    - specialTraits

  Numerical values are Anime Arena balancing values.
  They are NOT official canon numerical power levels.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";


/* =========================================================
   CHARACTER 01 — DENJI
========================================================= */

export const DENJI =
  createTournamentCharacter({

    id:
      "chainsaw-man-denji",

    verseId:
      "chainsaw-man",

    name:
      "Denji",

    aliases: [
      "Chainsaw Man",
      "Chainsaw Devil Hybrid",
      "Chainsaw Boy",
    ],

    tags: [
      "Devil Hunter",
      "Chainsaw Devil",
      "Hybrid",
      "Blood Regeneration",
      "Chainsaw",
    ],

    seedRating:
      100,

    description:
      "Denji is the protagonist of Chainsaw Man and becomes the Chainsaw Devil hybrid after merging with Pochita. His fighting style combines brutal close combat, chainsaw weaponry, regeneration and increasingly powerful Devil transformations.",

    specialTraits: [
      "Pochita contract",
      "Devil hybrid",
      "Regeneration",
      "Chainsaw manifestation",
    ],

    forms: [

      createTournamentForm({

        id:
          "denji-human",

        name:
          "Human Denji",

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
            40,

          realPower:
            40,

          hax:
            18,

          speed:
            57,

          durability:
            49,

          intelligence:
            44,

          attack:
            49,

          defense:
            43,

          stamina:
            68,

          versatility:
            55,
        },

        abilities: [
          "Improvised combat",
          "Physical endurance",
          "Pain tolerance",
          "Devil Hunter experience",
        ],

        weaknesses: [
          "Normal human durability",
          "Limited formal combat training",
        ],

        specialTraits: [
          "Extremely high pain tolerance",
          "Unpredictable fighting style",
        ],

      }),

      createTournamentForm({

        id:
          "denji-hybrid",

        name:
          "Chainsaw Man Hybrid",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            82,

          realPower:
            82,

          hax:
            80,

          speed:
            88,

          durability:
            95,

          intelligence:
            58,

          attack:
            96,

          defense:
            90,

          stamina:
            100,

          versatility:
            88,
        },

        abilities: [
          "Chainsaw transformation",
          "Chainsaw arms",
          "Chainsaw head",
          "Devil regeneration",
          "Blood-powered recovery",
          "Extreme physical strength",
        ],

        weaknesses: [
          "Blood loss can reduce performance",
          "Reckless decision-making",
        ],

        specialTraits: [
          "Hybrid regeneration",
          "Extremely aggressive offense",
        ],

      }),

      createTournamentForm({

        id:
          "denji-black-chainsaw",

        name:
          "Black Chainsaw Man",

        rank:
          3,

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
            97,

          speed:
            99,

          durability:
            100,

          intelligence:
            67,

          attack:
            100,

          defense:
            99,

          stamina:
            100,

          versatility:
            99,
        },

        abilities: [
          "Advanced Chainsaw Devil power",
          "Extreme regeneration",
          "Multiple chainsaw manifestations",
          "High-speed chainsaw attacks",
          "Extreme physical strength",
        ],

        weaknesses: [
          "Peak state depends on Pochita's power",
        ],

        specialTraits: [
          "High-level Devil transformation",
          "Extremely difficult to permanently defeat",
        ],

      }),

      createTournamentForm({

        id:
          "denji-hero-of-hell",

        name:
          "Hero of Hell Chainsaw Man",

        rank:
          4,

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
            100,

          durability:
            100,

          intelligence:
            88,

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
          "True Chainsaw Devil power",
          "Devil erasure",
          "Extreme regeneration",
          "Chainsaw weapon generation",
          "Hell-level combat ability",
        ],

        weaknesses: [
          "Represents the Chainsaw Devil's peak state rather than normal Denji",
        ],

        specialTraits: [
          "Conceptual erasure potential",
          "Extreme Devil physiology",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 02 — MAKIMA
========================================================= */

export const MAKIMA =
  createTournamentCharacter({

    id:
      "chainsaw-man-makima",

    verseId:
      "chainsaw-man",

    name:
      "Makima",

    aliases: [
      "Control Devil",
      "Public Safety Makima",
      "Control",
    ],

    tags: [
      "Control Devil",
      "Horseman",
      "Contracts",
      "Manipulation",
      "Public Safety",
    ],

    seedRating:
      100,

    description:
      "Makima is the Control Devil, a Horseman whose manipulation, contracts, supernatural perception and control abilities make her one of the most dangerous characters in the setting.",

    specialTraits: [
      "Control Devil",
      "Horseman",
      "Contract network",
      "Exceptional manipulation",
    ],

    forms: [

      createTournamentForm({

        id:
          "makima-public-safety",

        name:
          "Public Safety Makima",

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
            92,

          realPower:
            92,

          hax:
            100,

          speed:
            92,

          durability:
            98,

          intelligence:
            100,

          attack:
            95,

          defense:
            99,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Control Devil",
          "Remote force attacks",
          "Contract manipulation",
          "Animal control",
          "Psychological manipulation",
        ],

        weaknesses: [
          "Certain abilities depend on contracts and circumstances",
        ],

        specialTraits: [
          "Extremely high mental warfare",
          "Remote combat capability",
        ],

      }),

      createTournamentForm({

        id:
          "makima-full-control",

        name:
          "Full Control Devil",

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
            100,

          speed:
            97,

          durability:
            100,

          intelligence:
            100,

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
          "Domination",
          "Control of perceived inferiors",
          "Remote attacks",
          "Contract-based survivability",
          "Supernatural perception",
        ],

        weaknesses: [
          "Control can depend on how the target perceives her",
        ],

        specialTraits: [
          "Extreme hax",
          "High survivability through contracts",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 03 — POWER
========================================================= */

export const POWER =
  createTournamentCharacter({

    id:
      "chainsaw-man-power",

    verseId:
      "chainsaw-man",

    name:
      "Power",

    aliases: [
      "Blood Fiend",
      "Blood Devil Fiend",
    ],

    tags: [
      "Fiend",
      "Blood Devil",
      "Blood Weapons",
      "Public Safety",
    ],

    seedRating:
      88,

    description:
      "Power is the Blood Fiend and one of the principal Devil Hunters associated with Denji. She can manipulate blood into weapons and gains significantly more power from blood-rich states.",

    specialTraits: [
      "Blood manipulation",
      "Fiend physiology",
      "Blood weapon generation",
    ],

    forms: [

      createTournamentForm({

        id:
          "power-fiend",

        name:
          "Blood Fiend Power",

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
            74,

          speed:
            64,

          durability:
            67,

          intelligence:
            50,

          attack:
            80,

          defense:
            60,

          stamina:
            72,

          versatility:
            83,
        },

        abilities: [
          "Blood manipulation",
          "Blood weapons",
          "Blood spear",
          "Blood hammer",
          "Blood projectile attacks",
        ],

        weaknesses: [
          "Blood supply affects performance",
          "Impulsive behavior",
        ],

        specialTraits: [
          "Excellent weapon creation",
        ],

      }),

      createTournamentForm({

        id:
          "power-blood-devil",

        name:
          "Blood Devil Power",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            94,

          realPower:
            94,

          hax:
            96,

          speed:
            84,

          durability:
            93,

          intelligence:
            63,

          attack:
            100,

          defense:
            85,

          stamina:
            96,

          versatility:
            98,
        },

        abilities: [
          "Blood Devil power",
          "Mass blood weapons",
          "Blood manipulation",
          "Extreme physical amplification",
          "Advanced blood regeneration",
        ],

        weaknesses: [
          "Peak performance depends on blood and specific circumstances",
        ],

        specialTraits: [
          "High-level Blood Devil state",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 04 — AKI HAYAKAWA
========================================================= */

export const AKI =
  createTournamentCharacter({

    id:
      "chainsaw-man-aki-hayakawa",

    verseId:
      "chainsaw-man",

    name:
      "Aki Hayakawa",

    aliases: [
      "Public Safety Devil Hunter",
      "Future Devil User",
      "Fox Devil Contractor",
    ],

    tags: [
      "Public Safety",
      "Devil Hunter",
      "Fox Devil",
      "Future Devil",
      "Curse Devil",
      "Sword",
    ],

    seedRating:
      85,

    description:
      "Aki is a disciplined Public Safety Devil Hunter who relies on swordsmanship, several Devil contracts, strategic thinking and predictive combat information.",

    specialTraits: [
      "Future Devil contract",
      "Fox Devil contract",
      "Curse Devil contract",
      "Elite swordsmanship",
    ],

    forms: [

      createTournamentForm({

        id:
          "aki-standard",

        name:
          "Public Safety Aki",

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
            57,

          realPower:
            57,

          hax:
            64,

          speed:
            67,

          durability:
            54,

          intelligence:
            92,

          attack:
            78,

          defense:
            57,

          stamina:
            71,

          versatility:
            81,
        },

        abilities: [
          "Swordsmanship",
          "Fox Devil contract",
          "Curse Devil contract",
          "Future Devil contract",
        ],

        weaknesses: [
          "Contracts have costs",
          "Human durability",
        ],

        specialTraits: [
          "Disciplined tactical fighter",
        ],

      }),

      createTournamentForm({

        id:
          "aki-future-sight",

        name:
          "Future Devil Aki",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            72,

          realPower:
            72,

          hax:
            90,

          speed:
            79,

          durability:
            58,

          intelligence:
            96,

          attack:
            85,

          defense:
            61,

          stamina:
            69,

          versatility:
            92,
        },

        abilities: [
          "Future sight",
          "Fox Devil",
          "Curse Devil",
          "Sword combat",
        ],

        weaknesses: [
          "Contract conditions",
          "Human body",
        ],

        specialTraits: [
          "Predictive combat advantage",
        ],

      }),

      createTournamentForm({

        id:
          "aki-gun-fiend",

        name:
          "Gun Fiend Aki",

        rank:
          3,

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
            92,

          speed:
            95,

          durability:
            90,

          intelligence:
            45,

          attack:
            100,

          defense:
            85,

          stamina:
            91,

          versatility:
            87,
        },

        abilities: [
          "Gun Devil power",
          "Massive ranged attacks",
          "Extreme projectile speed",
          "Devil physical enhancement",
        ],

        weaknesses: [
          "No longer functions as normal human Aki",
        ],

        specialTraits: [
          "Extreme long-range offensive profile",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 05 — KISHIBE
========================================================= */

export const KISHIBE =
  createTournamentCharacter({

    id:
      "chainsaw-man-kishibe",

    verseId:
      "chainsaw-man",

    name:
      "Kishibe",

    aliases: [
      "Veteran Devil Hunter",
      "Public Safety Captain",
    ],

    tags: [
      "Public Safety",
      "Devil Hunter",
      "Veteran",
      "Contracts",
      "Hand-to-Hand",
    ],

    seedRating:
      90,

    description:
      "Kishibe is one of the strongest human Devil Hunters and one of Public Safety's most experienced veterans. His hand-to-hand skill, knife work, physical ability and battle IQ make him exceptionally dangerous.",

    specialTraits: [
      "Veteran Devil Hunter",
      "High battle IQ",
      "Multiple Devil contracts",
    ],

    forms: [

      createTournamentForm({

        id:
          "kishibe-prime",

        name:
          "Prime Kishibe",

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
            63,

          speed:
            91,

          durability:
            83,

          intelligence:
            100,

          attack:
            96,

          defense:
            80,

          stamina:
            90,

          versatility:
            93,
        },

        abilities: [
          "Master hand-to-hand combat",
          "Knife mastery",
          "Devil contracts",
          "Improvised weapons",
          "Combat experience",
        ],

        weaknesses: [
          "Still human",
        ],

        specialTraits: [
          "Extremely high combat IQ",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 06 — QUANXI
========================================================= */

export const QUANXI =
  createTournamentCharacter({

    id:
      "chainsaw-man-quanxi",

    verseId:
      "chainsaw-man",

    name:
      "Quanxi",

    aliases: [
      "First Devil Hunter",
      "Bow Hybrid",
      "Quanxi the Fiend Hunter",
    ],

    tags: [
      "Hybrid",
      "Bow Devil",
      "Devil Hunter",
      "Speed",
      "Swordsmanship",
    ],

    seedRating:
      99,

    description:
      "Quanxi is one of the most dangerous human Devil Hunters and a hybrid with extraordinary speed, swordsmanship, regeneration and overwhelming close-range skill.",

    specialTraits: [
      "First Devil Hunter",
      "Bow Devil hybrid",
      "Extreme speed",
      "Hybrid regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "quanxi-human",

        name:
          "Human Quanxi",

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
            79,

          realPower:
            79,

          hax:
            44,

          speed:
            100,

          durability:
            77,

          intelligence:
            98,

          attack:
            99,

          defense:
            71,

          stamina:
            93,

          versatility:
            87,
        },

        abilities: [
          "Master swordsmanship",
          "Elite close combat",
          "Devil hunting experience",
          "Extreme speed",
        ],

        weaknesses: [
          "Human form lacks hybrid regeneration",
        ],

        specialTraits: [
          "One of the strongest human fighters",
        ],

      }),

      createTournamentForm({

        id:
          "quanxi-hybrid",

        name:
          "Bow Devil Hybrid",

        rank:
          2,

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
            82,

          speed:
            100,

          durability:
            98,

          intelligence:
            99,

          attack:
            100,

          defense:
            92,

          stamina:
            100,

          versatility:
            96,
        },

        abilities: [
          "Bow Devil transformation",
          "Extreme regeneration",
          "High-speed movement",
          "Powerful ranged arrows",
          "Hybrid resurrection",
        ],

        weaknesses: [
          "Transformation conditions",
        ],

        specialTraits: [
          "Extreme mobility",
          "Hybrid survivability",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 07 — REZE
========================================================= */

export const REZE =
  createTournamentCharacter({

    id:
      "chainsaw-man-reze",

    verseId:
      "chainsaw-man",

    name:
      "Reze",

    aliases: [
      "Bomb Girl",
      "Bomb Devil Hybrid",
    ],

    tags: [
      "Hybrid",
      "Bomb Devil",
      "Soviet Agent",
      "Explosions",
      "Mobility",
    ],

    seedRating:
      95,

    description:
      "Reze is the Bomb Devil hybrid and an elite combatant who combines espionage training with explosive transformations, regeneration and high-speed movement.",

    specialTraits: [
      "Bomb Devil hybrid",
      "Elite assassin",
      "Explosive regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "reze-human",

        name:
          "Human Reze",

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
            32,

          speed:
            83,

          durability:
            59,

          intelligence:
            95,

          attack:
            63,

          defense:
            53,

          stamina:
            72,

          versatility:
            77,
        },

        abilities: [
          "Espionage",
          "Martial arts",
          "Assassination training",
        ],

        weaknesses: [
          "Human durability",
        ],

        specialTraits: [
          "Elite undercover agent",
        ],

      }),

      createTournamentForm({

        id:
          "reze-bomb-hybrid",

        name:
          "Bomb Devil Hybrid",

        rank:
          2,

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
            92,

          speed:
            97,

          durability:
            97,

          intelligence:
            95,

          attack:
            100,

          defense:
            91,

          stamina:
            99,

          versatility:
            94,
        },

        abilities: [
          "Bomb transformation",
          "Explosive attacks",
          "Aerial movement",
          "Hybrid regeneration",
          "Explosive body attacks",
        ],

        weaknesses: [
          "Large-scale explosions can reduce precision",
        ],

        specialTraits: [
          "High mobility explosive fighter",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 08 — KATANA MAN
========================================================= */

export const KATANA_MAN =
  createTournamentCharacter({

    id:
      "chainsaw-man-katana-man",

    verseId:
      "chainsaw-man",

    name:
      "Katana Man",

    aliases: [
      "Samurai Sword",
      "Katana Devil Hybrid",
    ],

    tags: [
      "Hybrid",
      "Katana Devil",
      "Sword",
      "Yakuza",
    ],

    seedRating:
      90,

    description:
      "Katana Man is a Devil hybrid whose fighting style focuses on extremely fast sword-draw attacks, regeneration and explosive movement.",

    specialTraits: [
      "Katana Devil hybrid",
      "High-speed sword draw",
      "Hybrid regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "katana-man-human",

        name:
          "Human Katana Man",

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
            21,

          speed:
            68,

          durability:
            50,

          intelligence:
            71,

          attack:
            66,

          defense:
            47,

          stamina:
            60,

          versatility:
            53,
        },

        abilities: [
          "Swordsmanship",
          "Yakuza combat training",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Fast sword-draw technique",
        ],

      }),

      createTournamentForm({

        id:
          "katana-man-hybrid",

        name:
          "Katana Hybrid",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            84,

          realPower:
            84,

          hax:
            68,

          speed:
            98,

          durability:
            91,

          intelligence:
            74,

          attack:
            98,

          defense:
            83,

          stamina:
            93,

          versatility:
            78,
        },

        abilities: [
          "Katana transformation",
          "High-speed sword draw",
          "Hybrid regeneration",
          "Burst movement",
        ],

        weaknesses: [
          "Linear burst attacks can be anticipated",
        ],

        specialTraits: [
          "Extreme slash acceleration",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 09 — ANGEL DEVIL
========================================================= */

export const ANGEL_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-angel-devil",

    verseId:
      "chainsaw-man",

    name:
      "Angel Devil",

    aliases: [
      "Angel",
      "Angel Devil",
    ],

    tags: [
      "Devil",
      "Life Drain",
      "Weapons",
      "Public Safety",
    ],

    seedRating:
      92,

    description:
      "The Angel Devil can drain lifespan through touch and convert stolen lifespan into powerful supernatural weapons.",

    specialTraits: [
      "Lifespan manipulation",
      "Weapon creation",
      "Devil physiology",
    ],

    forms: [

      createTournamentForm({

        id:
          "angel-devil",

        name:
          "Angel Devil",

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
            66,

          realPower:
            66,

          hax:
            99,

          speed:
            73,

          durability:
            69,

          intelligence:
            92,

          attack:
            88,

          defense:
            72,

          stamina:
            88,

          versatility:
            96,
        },

        abilities: [
          "Lifespan drain",
          "Weapon creation",
          "Devil regeneration",
          "Supernatural touch",
        ],

        weaknesses: [
          "Touch-based conditions for maximum lifespan drain",
        ],

        specialTraits: [
          "Extremely dangerous hax specialist",
        ],

      }),

      createTournamentForm({

        id:
          "angel-full-power",

        name:
          "Angel Devil — High Lifespan Arsenal",

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
            100,

          speed:
            84,

          durability:
            80,

          intelligence:
            95,

          attack:
            100,

          defense:
            84,

          stamina:
            94,

          versatility:
            100,
        },

        abilities: [
          "High-level lifespan weapons",
          "Life drain",
          "Devil weapons",
          "Regeneration",
        ],

        weaknesses: [
          "Weapon strength depends on lifespan available",
        ],

        specialTraits: [
          "Resource-to-power conversion",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 10 — AKANE SAWATARI
========================================================= */

export const AKANE_SAWATARI =
  createTournamentCharacter({

    id:
      "chainsaw-man-akane-sawatari",

    verseId:
      "chainsaw-man",

    name:
      "Akane Sawatari",

    aliases: [
      "Snake Devil Contractor",
    ],

    tags: [
      "Contractor",
      "Snake Devil",
      "Ghost Devil",
      "Assassin",
    ],

    seedRating:
      80,

    description:
      "Akane Sawatari is a Devil contractor who can summon dangerous supernatural entities, particularly through the Snake Devil and Ghost Devil contracts.",

    specialTraits: [
      "Snake Devil contract",
      "Ghost Devil contract",
      "Assassin",
    ],

    forms: [

      createTournamentForm({

        id:
          "akane-contractor",

        name:
          "Snake Devil Contractor",

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
            86,

          speed:
            59,

          durability:
            52,

          intelligence:
            85,

          attack:
            83,

          defense:
            48,

          stamina:
            61,

          versatility:
            86,
        },

        abilities: [
          "Snake Devil contract",
          "Ghost Devil contract",
          "Devil summoning",
        ],

        weaknesses: [
          "Contract costs",
          "Human body",
        ],

        specialTraits: [
          "Summoning-based fighter",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 11 — SANTA CLAUS
========================================================= */

export const SANTA_CLAUS =
  createTournamentCharacter({

    id:
      "chainsaw-man-santa-claus",

    verseId:
      "chainsaw-man",

    name:
      "Santa Claus",

    aliases: [
      "Doll Devil Contractor",
      "Doll Master",
    ],

    tags: [
      "Doll Devil",
      "Contractor",
      "Hive Mind",
      "Darkness Devil",
    ],

    seedRating:
      98,

    description:
      "Santa Claus is an extremely dangerous Doll Devil contractor capable of converting humans into dolls, creating a distributed network of bodies and gaining further supernatural power through Darkness Devil influence.",

    specialTraits: [
      "Doll Devil",
      "Hive mind",
      "Mass conversion",
      "Darkness Devil contract",
    ],

    forms: [

      createTournamentForm({

        id:
          "santa-doll",

        name:
          "Doll Devil Santa Claus",

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
            77,

          realPower:
            77,

          hax:
            100,

          speed:
            61,

          durability:
            80,

          intelligence:
            99,

          attack:
            93,

          defense:
            88,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Doll creation",
          "Human conversion",
          "Hive-mind control",
          "Remote combat bodies",
        ],

        weaknesses: [
          "Complex conditions",
        ],

        specialTraits: [
          "Distributed combat network",
        ],

      }),

      createTournamentForm({

        id:
          "santa-darkness",

        name:
          "Darkness-Enhanced Santa Claus",

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
            100,

          speed:
            86,

          durability:
            97,

          intelligence:
            100,

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
          "Darkness Devil empowerment",
          "Doll network",
          "Extreme regeneration",
          "Darkness-based supernatural attacks",
        ],

        weaknesses: [
          "Peak state depends on external Devil empowerment",
        ],

        specialTraits: [
          "Extreme hax and survivability",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 12 — DARKNESS DEVIL
========================================================= */

export const DARKNESS_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-darkness-devil",

    verseId:
      "chainsaw-man",

    name:
      "Darkness Devil",

    aliases: [
      "Primal Fear Devil",
    ],

    tags: [
      "Primal Fear",
      "Darkness",
      "Devil",
      "Primal Devil",
    ],

    seedRating:
      100,

    description:
      "The Darkness Devil is a Primal Fear Devil embodying humanity's fear of darkness. Its supernatural abilities, physical dominance and seemingly effortless attacks make it one of the setting's most overwhelming entities.",

    specialTraits: [
      "Primal Fear",
      "Darkness manipulation",
      "Extreme regeneration",
      "Primal Devil",
    ],

    forms: [

      createTournamentForm({

        id:
          "darkness-devil",

        name:
          "Darkness Devil",

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
            100,

          realPower:
            100,

          hax:
            100,

          speed:
            100,

          durability:
            100,

          intelligence:
            99,

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
          "Darkness manipulation",
          "Primal Fear power",
          "Invisible supernatural attacks",
          "Limb severing",
          "Fear amplification",
          "Extreme regeneration",
        ],

        weaknesses: [
          "No conventional weakness is clearly established",
        ],

        specialTraits: [
          "Primal Devil",
          "Extreme battlefield suppression",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 13 — GUN DEVIL
========================================================= */

export const GUN_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-gun-devil",

    verseId:
      "chainsaw-man",

    name:
      "Gun Devil",

    aliases: [
      "Gun Devil",
      "Gun Demon",
    ],

    tags: [
      "Devil",
      "Gun",
      "Fear",
      "Ranged Destruction",
    ],

    seedRating:
      100,

    description:
      "The Gun Devil embodies fear of firearms and possesses devastating ranged attacks capable of killing large numbers of people almost instantly.",

    specialTraits: [
      "Extreme ranged attack",
      "Devil physiology",
      "Fear amplification",
    ],

    forms: [

      createTournamentForm({

        id:
          "gun-devil-fragment",

        name:
          "Gun Devil Fragment",

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
            89,

          realPower:
            89,

          hax:
            91,

          speed:
            100,

          durability:
            84,

          intelligence:
            69,

          attack:
            100,

          defense:
            80,

          stamina:
            95,

          versatility:
            85,
        },

        abilities: [
          "Supernatural bullets",
          "Extreme ranged attacks",
          "Area destruction",
          "Devil regeneration",
        ],

        weaknesses: [
          "Fragmented state is weaker than full conceptual peak",
        ],

        specialTraits: [
          "Extremely high projectile speed",
        ],

      }),

      createTournamentForm({

        id:
          "gun-devil-full",

        name:
          "Full Gun Devil",

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
            99,

          speed:
            100,

          durability:
            97,

          intelligence:
            83,

          attack:
            100,

          defense:
            98,

          stamina:
            100,

          versatility:
            98,
        },

        abilities: [
          "Mass supernatural firearm attacks",
          "Extreme range",
          "Large-area destruction",
          "Devil regeneration",
        ],

        weaknesses: [
          "Extremely destructive rather than precise",
        ],

        specialTraits: [
          "Long-range devastation specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 14 — COSMO
========================================================= */

export const COSMO =
  createTournamentCharacter({

    id:
      "chainsaw-man-cosmo",

    verseId:
      "chainsaw-man",

    name:
      "Cosmo",

    aliases: [
      "Cosmos Fiend",
    ],

    tags: [
      "Fiend",
      "Cosmos Devil",
      "Halloween",
      "Knowledge",
    ],

    seedRating:
      91,

    description:
      "Cosmo possesses a unique ability associated with infinite knowledge and can overwhelm targets with overwhelming amounts of information.",

    specialTraits: [
      "Cosmos Devil",
      "Information overload",
      "Mental hax",
    ],

    forms: [

      createTournamentForm({

        id:
          "cosmo-standard",

        name:
          "Cosmos Fiend",

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
            62,

          realPower:
            62,

          hax:
            100,

          speed:
            52,

          durability:
            47,

          intelligence:
            100,

          attack:
            59,

          defense:
            55,

          stamina:
            71,

          versatility:
            96,
        },

        abilities: [
          "Halloween",
          "Information overload",
          "Cosmic knowledge",
          "Mental incapacitation",
        ],

        weaknesses: [
          "Relatively fragile physical body",
        ],

        specialTraits: [
          "Extreme mental hax",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 15 — BEAM
========================================================= */

export const BEAM =
  createTournamentCharacter({

    id:
      "chainsaw-man-beam",

    verseId:
      "chainsaw-man",

    name:
      "Beam",

    aliases: [
      "Shark Fiend",
      "Chainsaw Man Fanatic",
    ],

    tags: [
      "Fiend",
      "Shark Devil",
      "Swimming",
      "Regeneration",
    ],

    seedRating:
      85,

    description:
      "Beam is the Shark Fiend, capable of moving through solid surfaces and swimming through terrain. He combines unusual mobility with strong physical attacks and regeneration.",

    specialTraits: [
      "Shark Devil",
      "Surface swimming",
      "Fiend regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "beam-standard",

        name:
          "Shark Fiend Beam",

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
            69,

          realPower:
            69,

          hax:
            69,

          speed:
            85,

          durability:
            80,

          intelligence:
            53,

          attack:
            90,

          defense:
            75,

          stamina:
            93,

          versatility:
            86,
        },

        abilities: [
          "Shark transformation",
          "Surface swimming",
          "Underground movement",
          "Regeneration",
        ],

        weaknesses: [
          "Aggressive and predictable behavior",
        ],

        specialTraits: [
          "Excellent surprise attacker",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 16 — VIOLENCE FIEND
========================================================= */

export const VIOLENCE_FIEND =
  createTournamentCharacter({

    id:
      "chainsaw-man-violence-fiend",

    verseId:
      "chainsaw-man",

    name:
      "Violence Fiend",

    aliases: [
      "Galgali",
      "Violence",
    ],

    tags: [
      "Fiend",
      "Violence Devil",
      "Physical Power",
      "Poison Mask",
    ],

    seedRating:
      89,

    description:
      "The Violence Fiend possesses tremendous physical strength and martial arts ability. His mask suppresses part of his enormous power.",

    specialTraits: [
      "Extreme physical strength",
      "Fiend regeneration",
      "Poison suppression mask",
    ],

    forms: [

      createTournamentForm({

        id:
          "violence-suppressed",

        name:
          "Suppressed Violence Fiend",

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
            76,

          realPower:
            76,

          hax:
            56,

          speed:
            80,

          durability:
            90,

          intelligence:
            69,

          attack:
            97,

          defense:
            87,

          stamina:
            95,

          versatility:
            70,
        },

        abilities: [
          "Extreme strength",
          "Martial arts",
          "Fiend regeneration",
          "Poison suppression",
        ],

        weaknesses: [
          "Mask suppresses power",
        ],

        specialTraits: [
          "Huge physical strength despite suppression",
        ],

      }),

      createTournamentForm({

        id:
          "violence-unleashed",

        name:
          "Unleashed Violence Fiend",

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
            69,

          speed:
            92,

          durability:
            100,

          intelligence:
            74,

          attack:
            100,

          defense:
            97,

          stamina:
            100,

          versatility:
            77,
        },

        abilities: [
          "Full Violence Devil power",
          "Extreme strength",
          "Shockwave-like strikes",
          "Fiend regeneration",
        ],

        weaknesses: [
          "Extreme aggression reduces tactical control",
        ],

        specialTraits: [
          "Pure physical powerhouse",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 17 — FUTURE DEVIL
========================================================= */

export const FUTURE_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-future-devil",

    verseId:
      "chainsaw-man",

    name:
      "Future Devil",

    aliases: [
      "Future Devil",
    ],

    tags: [
      "Devil",
      "Future Sight",
      "Prediction",
      "Contract",
    ],

    seedRating:
      94,

    description:
      "The Future Devil possesses predictive abilities that allow users of its contract to perceive future events, making it an exceptional information and counter-specialist.",

    specialTraits: [
      "Future sight",
      "Predictive information",
      "Contract enhancement",
    ],

    forms: [

      createTournamentForm({

        id:
          "future-devil",

        name:
          "Future Devil",

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
            56,

          realPower:
            56,

          hax:
            100,

          speed:
            62,

          durability:
            49,

          intelligence:
            100,

          attack:
            40,

          defense:
            56,

          stamina:
            79,

          versatility:
            93,
        },

        abilities: [
          "Future sight",
          "Prediction",
          "Contract enhancement",
          "Strategic information",
        ],

        weaknesses: [
          "Limited direct destructive power",
        ],

        specialTraits: [
          "Information-based hax specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 18 — GHOST DEVIL
========================================================= */

export const GHOST_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-ghost-devil",

    verseId:
      "chainsaw-man",

    name:
      "Ghost Devil",

    aliases: [
      "Ghost",
      "Ghost Devil",
    ],

    tags: [
      "Devil",
      "Ghost",
      "Invisible Arms",
      "Fear",
    ],

    seedRating:
      91,

    description:
      "The Ghost Devil possesses multiple invisible arms and can use its supernatural body to overwhelm opponents through hard-to-detect physical attacks.",

    specialTraits: [
      "Invisible arms",
      "Ghost-like body",
      "Devil regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "ghost-devil",

        name:
          "Ghost Devil",

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
            94,

          speed:
            73,

          durability:
            76,

          intelligence:
            74,

          attack:
            94,

          defense:
            81,

          stamina:
            90,

          versatility:
            85,
        },

        abilities: [
          "Invisible arms",
          "Supernatural physical attacks",
          "Ghost manifestation",
          "Devil regeneration",
        ],

        weaknesses: [
          "Can be affected by specialized supernatural interactions",
        ],

        specialTraits: [
          "Hard-to-detect physical offense",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 19 — FOX DEVIL
========================================================= */

export const FOX_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-fox-devil",

    verseId:
      "chainsaw-man",

    name:
      "Fox Devil",

    aliases: [
      "Fox Devil",
    ],

    tags: [
      "Devil",
      "Fox",
      "Contract",
      "Summoning",
    ],

    seedRating:
      83,

    description:
      "The Fox Devil is a large Devil that can be summoned through contracts and possesses an extremely powerful bite and supernatural body.",

    specialTraits: [
      "Summoning",
      "Contract",
      "Devil regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "fox-devil",

        name:
          "Fox Devil",

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
            73,

          realPower:
            73,

          hax:
            88,

          speed:
            70,

          durability:
            85,

          intelligence:
            48,

          attack:
            96,

          defense:
            83,

          stamina:
            88,

          versatility:
            70,
        },

        abilities: [
          "Summoning",
          "Supernatural bite",
          "Large physical attacks",
          "Devil regeneration",
        ],

        weaknesses: [
          "Contract conditions",
          "Can refuse certain targets",
        ],

        specialTraits: [
          "Large single-target finisher",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 20 — PRINCI
========================================================= */

export const PRINCI =
  createTournamentCharacter({

    id:
      "chainsaw-man-princi",

    verseId:
      "chainsaw-man",

    name:
      "Princi",

    aliases: [
      "Spider Devil",
    ],

    tags: [
      "Devil",
      "Spider",
      "Teleportation",
      "Public Safety",
    ],

    seedRating:
      89,

    description:
      "The Spider Devil specializes in movement through surfaces and surprise attacks, making it highly effective for infiltration and battlefield repositioning.",

    specialTraits: [
      "Spider Devil",
      "Surface travel",
      "Teleportation-like emergence",
    ],

    forms: [

      createTournamentForm({

        id:
          "princi-spider",

        name:
          "Spider Devil",

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
            94,

          speed:
            85,

          durability:
            65,

          intelligence:
            83,

          attack:
            74,

          defense:
            69,

          stamina:
            81,

          versatility:
            97,
        },

        abilities: [
          "Spider body",
          "Surface emergence",
          "Rapid movement",
          "Devil regeneration",
        ],

        weaknesses: [
          "Lower direct destruction",
        ],

        specialTraits: [
          "High mobility and surprise attacks",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 21 — TYPHOON DEVIL
========================================================= */

export const TYPHOON_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-typhoon-devil",

    verseId:
      "chainsaw-man",

    name:
      "Typhoon Devil",

    aliases: [
      "Typhoon Devil",
    ],

    tags: [
      "Devil",
      "Storm",
      "Wind",
      "Area Destruction",
    ],

    seedRating:
      91,

    description:
      "The Typhoon Devil specializes in storm-scale attacks, high-speed wind and large-area destructive effects.",

    specialTraits: [
      "Weather-like destruction",
      "Large-scale area attacks",
    ],

    forms: [

      createTournamentForm({

        id:
          "typhoon-devil",

        name:
          "Typhoon Devil",

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
            89,

          realPower:
            89,

          hax:
            92,

          speed:
            77,

          durability:
            94,

          intelligence:
            62,

          attack:
            98,

          defense:
            91,

          stamina:
            96,

          versatility:
            93,
        },

        abilities: [
          "Storm creation",
          "Extreme wind",
          "Debris manipulation",
          "Large-area destruction",
        ],

        weaknesses: [
          "Large body provides a sizeable target",
        ],

        specialTraits: [
          "Area-damage specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 22 — BAT DEVIL
========================================================= */

export const BAT_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-bat-devil",

    verseId:
      "chainsaw-man",

    name:
      "Bat Devil",

    aliases: [
      "Bat Devil",
    ],

    tags: [
      "Devil",
      "Bat",
      "Flight",
      "Predator",
    ],

    seedRating:
      79,

    description:
      "The Bat Devil is a large predatory Devil possessing flight, strong physical attacks and supernatural durability.",

    specialTraits: [
      "Flight",
      "Predatory combat",
      "Devil regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "bat-devil",

        name:
          "Bat Devil",

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
            72,

          realPower:
            72,

          hax:
            51,

          speed:
            81,

          durability:
            82,

          intelligence:
            39,

          attack:
            89,

          defense:
            76,

          stamina:
            84,

          versatility:
            59,
        },

        abilities: [
          "Flight",
          "Supernatural bite",
          "Enhanced strength",
          "Devil regeneration",
        ],

        weaknesses: [
          "Low tactical intelligence",
        ],

        specialTraits: [
          "Fast aerial predator",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 23 — ETERNITY DEVIL
========================================================= */

export const ETERNITY_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-eternity-devil",

    verseId:
      "chainsaw-man",

    name:
      "Eternity Devil",

    aliases: [
      "Infinity-like Devil",
    ],

    tags: [
      "Devil",
      "Space",
      "Regeneration",
      "Trapping",
    ],

    seedRating:
      94,

    description:
      "The Eternity Devil can generate a seemingly endless spatial environment, trapping targets and making conventional escape extremely difficult.",

    specialTraits: [
      "Spatial manipulation",
      "Infinite-space-like trapping",
      "Extreme regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "eternity-devil",

        name:
          "Eternity Devil",

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
            86,

          realPower:
            86,

          hax:
            100,

          speed:
            55,

          durability:
            91,

          intelligence:
            88,

          attack:
            91,

          defense:
            97,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Spatial trapping",
          "Environmental manipulation",
          "Extreme regeneration",
          "Endless-space-like battlefield",
        ],

        weaknesses: [
          "Its psychological warfare can be challenged through sustained pressure",
        ],

        specialTraits: [
          "Battlefield control specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 24 — CURSE DEVIL
========================================================= */

export const CURSE_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-curse-devil",

    verseId:
      "chainsaw-man",

    name:
      "Curse Devil",

    aliases: [
      "Curse Devil",
    ],

    tags: [
      "Devil",
      "Curse",
      "Contract",
      "Death Attack",
    ],

    seedRating:
      91,

    description:
      "The Curse Devil provides extremely lethal curse-based attacks and is often accessed through contracts requiring specific conditions.",

    specialTraits: [
      "Curse",
      "Lethal contract attack",
    ],

    forms: [

      createTournamentForm({

        id:
          "curse-devil",

        name:
          "Curse Devil",

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
            80,

          realPower:
            80,

          hax:
            99,

          speed:
            58,

          durability:
            75,

          intelligence:
            68,

          attack:
            100,

          defense:
            69,

          stamina:
            84,

          versatility:
            83,
        },

        abilities: [
          "Curse activation",
          "Contract-based lethal attacks",
          "Supernatural weapon manifestation",
        ],

        weaknesses: [
          "Contract conditions",
        ],

        specialTraits: [
          "High single-target hax",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 25 — ZOMBIE DEVIL
========================================================= */

export const ZOMBIE_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-zombie-devil",

    verseId:
      "chainsaw-man",

    name:
      "Zombie Devil",

    aliases: [
      "Zombie Devil",
    ],

    tags: [
      "Devil",
      "Zombie",
      "Undead",
      "Summoning",
    ],

    seedRating:
      76,

    description:
      "The Zombie Devil can create zombie bodies and convert humans into undead servants, allowing it to overwhelm enemies through numbers.",

    specialTraits: [
      "Zombie creation",
      "Mass conversion",
    ],

    forms: [

      createTournamentForm({

        id:
          "zombie-devil",

        name:
          "Zombie Devil",

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
            82,

          speed:
            45,

          durability:
            67,

          intelligence:
            45,

          attack:
            67,

          defense:
            59,

          stamina:
            87,

          versatility:
            90,
        },

        abilities: [
          "Zombie creation",
          "Mass conversion",
          "Devil regeneration",
        ],

        weaknesses: [
          "Low direct combat sophistication",
        ],

        specialTraits: [
          "Numbers-based pressure",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 26 — FAMINE DEVIL
========================================================= */

export const FAMINE_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-famine-devil",

    verseId:
      "chainsaw-man",

    name:
      "Famine Devil",

    aliases: [
      "Fami",
      "Famine",
    ],

    tags: [
      "Horseman",
      "Famine Devil",
      "Manipulation",
      "Starvation",
    ],

    seedRating:
      100,

    description:
      "Famine Devil is one of the Four Horsemen and possesses powers centered around deprivation, weakened states and manipulation of beings affected by famine or starvation.",

    specialTraits: [
      "Horseman",
      "Famine manipulation",
      "Strategic manipulation",
    ],

    forms: [

      createTournamentForm({

        id:
          "fami-standard",

        name:
          "Fami",

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
            87,

          realPower:
            87,

          hax:
            100,

          speed:
            74,

          durability:
            86,

          intelligence:
            100,

          attack:
            84,

          defense:
            92,

          stamina:
            98,

          versatility:
            100,
        },

        abilities: [
          "Famine manipulation",
          "Horseman abilities",
          "Starvation-related control",
          "Devil manipulation",
          "Long-term planning",
        ],

        weaknesses: [
          "Full extent of abilities is not completely quantified",
        ],

        specialTraits: [
          "Strategic hax specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 27 — YORU
========================================================= */

export const YORU =
  createTournamentCharacter({

    id:
      "chainsaw-man-yoru",

    verseId:
      "chainsaw-man",

    name:
      "Yoru",

    aliases: [
      "War Devil",
      "War",
    ],

    tags: [
      "Horseman",
      "War Devil",
      "Weapon Creation",
      "Asa Mitaka",
    ],

    seedRating:
      100,

    description:
      "Yoru is the War Devil and one of the Four Horsemen. Her abilities revolve around converting emotionally significant possessions and relationships into weapons.",

    specialTraits: [
      "War Devil",
      "Horseman",
      "Weapon creation",
      "Concept-linked power",
    ],

    forms: [

      createTournamentForm({

        id:
          "yoru-weakened",

        name:
          "Weakened War Devil",

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
            80,

          realPower:
            80,

          hax:
            97,

          speed:
            70,

          durability:
            74,

          intelligence:
            97,

          attack:
            89,

          defense:
            76,

          stamina:
            92,

          versatility:
            98,
        },

        abilities: [
          "Weapon creation",
          "War Devil transformation",
          "Weapon transformation",
          "Host manipulation",
        ],

        weaknesses: [
          "Power is affected by humanity's fear of war",
          "Current state is weakened compared with historical potential",
        ],

        specialTraits: [
          "Concept-dependent scaling",
        ],

      }),

      createTournamentForm({

        id:
          "yoru-restored",

        name:
          "Restored War Devil",

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
            100,

          speed:
            89,

          durability:
            95,

          intelligence:
            100,

          attack:
            100,

          defense:
            96,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Advanced weapon creation",
          "War-based amplification",
          "Horseman powers",
          "Concept-linked weapons",
        ],

        weaknesses: [
          "Strength depends on conceptual fear and circumstances",
        ],

        specialTraits: [
          "Extremely high conceptual versatility",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 28 — ASA MITAKA
========================================================= */

export const ASA_MITAKA =
  createTournamentCharacter({

    id:
      "chainsaw-man-asa-mitaka",

    verseId:
      "chainsaw-man",

    name:
      "Asa Mitaka",

    aliases: [
      "War Devil Host",
      "Asa",
    ],

    tags: [
      "Human",
      "War Devil",
      "Weapon Creation",
      "Host",
    ],

    seedRating:
      94,

    description:
      "Asa is the human host of Yoru, allowing her to access War Devil powers while retaining her own intelligence, emotional perspective and strategic thinking.",

    specialTraits: [
      "War Devil host",
      "Weapon creation",
      "High intelligence",
    ],

    forms: [

      createTournamentForm({

        id:
          "asa-human",

        name:
          "Human Asa",

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
            31,

          speed:
            39,

          durability:
            36,

          intelligence:
            91,

          attack:
            27,

          defense:
            36,

          stamina:
            49,

          versatility:
            60,
        },

        abilities: [
          "High intelligence",
          "Improvised weapon use",
          "Strategic thinking",
        ],

        weaknesses: [
          "Low physical combat ability",
        ],

        specialTraits: [
          "High analytical intelligence",
        ],

      }),

      createTournamentForm({

        id:
          "asa-yoru",

        name:
          "Asa + Yoru",

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
            63,

          durability:
            68,

          intelligence:
            97,

          attack:
            95,

          defense:
            74,

          stamina:
            92,

          versatility:
            100,
        },

        abilities: [
          "War Devil weapon creation",
          "Possession-based weapon transformation",
          "Horseman powers",
          "Enhanced strategic awareness",
        ],

        weaknesses: [
          "Weapon strength depends on emotional attachment",
          "Human host remains physically vulnerable",
        ],

        specialTraits: [
          "Emotion-powered weapon scaling",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 29 — BAT DEVIL VARIANT / LEECH DEVIL
========================================================= */

export const LEECH_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-leech-devil",

    verseId:
      "chainsaw-man",

    name:
      "Leech Devil",

    aliases: [
      "Leech Devil",
    ],

    tags: [
      "Devil",
      "Leech",
      "Blood",
      "Predator",
    ],

    seedRating:
      74,

    description:
      "The Leech Devil possesses a large predatory body and blood-related attacks, functioning primarily as a physical threat.",

    specialTraits: [
      "Blood consumption",
      "Devil regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "leech-devil",

        name:
          "Leech Devil",

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
            55,

          realPower:
            55,

          hax:
            45,

          speed:
            50,

          durability:
            73,

          intelligence:
            44,

          attack:
            68,

          defense:
            64,

          stamina:
            75,

          versatility:
            48,
        },

        abilities: [
          "Blood consumption",
          "Large physical body",
          "Devil regeneration",
        ],

        weaknesses: [
          "Limited tactical versatility",
        ],

        specialTraits: [
          "Physical predator",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 30 — BAT DEVIL'S RELATED LARGE DEVIL SLOT
========================================================= */

export const MOLD_DEVIL =
  createTournamentCharacter({

    id:
      "chainsaw-man-mold-devil",

    verseId:
      "chainsaw-man",

    name:
      "Mold Devil",

    aliases: [
      "Mold Devil",
    ],

    tags: [
      "Devil",
      "Mold",
      "Environmental",
      "Contract",
    ],

    seedRating:
      70,

    description:
      "The Mold Devil represents a more environmental and indirect threat profile, relying on supernatural contamination and contract-based utility rather than overwhelming direct strength.",

    specialTraits: [
      "Environmental manipulation",
      "Indirect attack profile",
    ],

    forms: [

      createTournamentForm({

        id:
          "mold-devil",

        name:
          "Mold Devil",

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
            49,

          realPower:
            49,

          hax:
            71,

          speed:
            45,

          durability:
            51,

          intelligence:
            61,

          attack:
            52,

          defense:
            45,

          stamina:
            73,

          versatility:
            70,
        },

        abilities: [
          "Mold manifestation",
          "Environmental contamination",
          "Indirect supernatural attacks",
        ],

        weaknesses: [
          "Low direct physical power",
        ],

        specialTraits: [
          "Environmental specialist",
        ],

      }),

    ],
  });


/* =========================================================
   FINAL DATABASE EXPORT
   EXACTLY 30 CHARACTERS
========================================================= */

export const CHAINSAW_MAN_CHARACTERS = [

  DENJI,

  MAKIMA,

  POWER,

  AKI,

  KISHIBE,

  QUANXI,

  REZE,

  KATANA_MAN,

  ANGEL_DEVIL,

  AKANE_SAWATARI,

  SANTA_CLAUS,

  DARKNESS_DEVIL,

  GUN_DEVIL,

  COSMO,

  BEAM,

  VIOLENCE_FIEND,

  FUTURE_DEVIL,

  GHOST_DEVIL,

  FOX_DEVIL,

  PRINCI,

  TYPHOON_DEVIL,

  BAT_DEVIL,

  ETERNITY_DEVIL,

  CURSE_DEVIL,

  ZOMBIE_DEVIL,

  FAMINE_DEVIL,

  YORU,

  ASA_MITAKA,

  LEECH_DEVIL,

  MOLD_DEVIL,

];