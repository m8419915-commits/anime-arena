/*
  Anime Arena — Grand Tournament

  Black Clover Tournament Database

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

  Stats:

    - relativePower
    - realPower
    - hax
    - speed
    - durability
    - intelligence
    - attack
    - defense
    - stamina
    - versatility

  Numerical values are Anime Arena balancing values.
  They are NOT official canon numerical power levels.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";


/* =========================================================
   CHARACTER 01 — ASTA
========================================================= */

export const ASTA =
  createTournamentCharacter({

    id:
      "black-clover-asta",

    verseId:
      "black-clover",

    name:
      "Asta",

    aliases: [
      "Anti-Magic Swordsman",
      "Black Bull Asta",
      "Devil Union Asta",
    ],

    tags: [
      "Black Bulls",
      "Anti-Magic",
      "Liebe",
      "Swordsmanship",
      "Devil Union",
      "Zetten",
      "Magicless",
    ],

    seedRating:
      100,

    description:
      "Asta is a magicless swordsman whose anti-magic directly counters magical power. His physical strength, demon swords, black forms, Devil Union, Zetten and advanced anti-magic techniques make him one of the strongest combatants in the Black Clover world.",

    specialTraits: [
      "Magicless body",
      "Anti-Magic user",
      "Liebe contract",
      "Devil Union",
      "Zetten",
    ],

    forms: [

      createTournamentForm({

        id:
          "asta-early",

        name:
          "Early Asta",

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
            50,

          realPower:
            50,

          hax:
            78,

          speed:
            70,

          durability:
            72,

          intelligence:
            61,

          attack:
            78,

          defense:
            68,

          stamina:
            90,

          versatility:
            74,
        },

        abilities: [
          "Anti-Magic",
          "Demon-Slayer Sword",
          "Demon-Dweller Sword",
          "Ki sensing",
          "Extreme physical strength",
        ],

        weaknesses: [
          "Limited early anti-magic control",
          "Short effective range",
        ],

        specialTraits: [
          "Magic nullification",
          "Strong physical conditioning",
        ],

      }),

      createTournamentForm({

        id:
          "asta-black-form",

        name:
          "Black Asta",

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
            92,

          speed:
            89,

          durability:
            84,

          intelligence:
            70,

          attack:
            93,

          defense:
            80,

          stamina:
            91,

          versatility:
            90,
        },

        abilities: [
          "Black Asta",
          "Anti-Magic reinforcement",
          "Demon-Slayer Sword",
          "Demon-Dweller Sword",
          "Demon-Destroyer Sword",
        ],

        weaknesses: [
          "Form duration",
          "High physical strain",
        ],

        specialTraits: [
          "Anti-Magic aura",
          "Enhanced mobility",
        ],

      }),

      createTournamentForm({

        id:
          "asta-devil-union",

        name:
          "Devil Union Asta",

        rank:
          3,

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
            100,

          durability:
            95,

          intelligence:
            82,

          attack:
            100,

          defense:
            93,

          stamina:
            90,

          versatility:
            99,
        },

        abilities: [
          "Devil Union",
          "Liebe synchronization",
          "Anti-Magic amplification",
          "Demon-Slayer Sword",
          "Demon-Destroyer Sword",
          "Demon-Slasher Katana",
        ],

        weaknesses: [
          "Union time limitation",
          "High physical and anti-magic expenditure",
        ],

        specialTraits: [
          "Complete anti-magic synchronization",
          "Magic erasure",
        ],

      }),

      createTournamentForm({

        id:
          "asta-zetten",

        name:
          "Devil Union + Zetten",

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
            97,

          intelligence:
            88,

          attack:
            100,

          defense:
            95,

          stamina:
            92,

          versatility:
            100,
        },

        abilities: [
          "Zetten",
          "Devil Union",
          "Anti-Magic",
          "Ki",
          "Demon-Slasher Katana",
          "Extreme anti-magic output",
        ],

        weaknesses: [
          "Extremely demanding peak state",
          "Requires exceptional timing and control",
        ],

        specialTraits: [
          "High-efficiency anti-magic release",
          "Advanced close-range countering",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 02 — YUNO
========================================================= */

export const YUNO =
  createTournamentCharacter({

    id:
      "black-clover-yuno",

    verseId:
      "black-clover",

    name:
      "Yuno",

    aliases: [
      "Wind Magic Prodigy",
      "Golden Dawn Vice Captain",
      "Star Magic User",
    ],

    tags: [
      "Golden Dawn",
      "Wind Magic",
      "Star Magic",
      "Sylph",
      "Spirit Dive",
      "Mana Zone",
    ],

    seedRating:
      100,

    description:
      "Yuno is an extraordinary magic prodigy who masters Wind Magic, gains the wind spirit Sylph and later acquires Star Magic. His speed, teleportation, mana control and battlefield versatility place him among the strongest mages.",

    specialTraits: [
      "Wind Magic",
      "Star Magic",
      "Sylph",
      "Mana Zone",
      "Exceptional mana control",
    ],

    forms: [

      createTournamentForm({

        id:
          "yuno-wind",

        name:
          "Wind Magic Yuno",

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
            65,

          speed:
            94,

          durability:
            68,

          intelligence:
            95,

          attack:
            85,

          defense:
            80,

          stamina:
            82,

          versatility:
            93,
        },

        abilities: [
          "Wind Magic",
          "Mana Zone",
          "Spirit Magic",
          "Sylph",
          "Spirit of Zephyr",
        ],

        weaknesses: [
          "Advanced spells consume significant mana",
        ],

        specialTraits: [
          "Natural mana prodigy",
          "High-speed aerial combat",
        ],

      }),

      createTournamentForm({

        id:
          "yuno-spirit-dive",

        name:
          "Spirit Dive Yuno",

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
            81,

          speed:
            99,

          durability:
            82,

          intelligence:
            98,

          attack:
            96,

          defense:
            91,

          stamina:
            91,

          versatility:
            97,
        },

        abilities: [
          "Spirit Dive",
          "Sylph synchronization",
          "Mana Zone",
          "Wind Spirit Magic",
          "High-speed movement",
        ],

        weaknesses: [
          "Spirit synchronization demands concentration",
        ],

        specialTraits: [
          "Spirit-enhanced combat",
          "Extreme aerial mobility",
        ],

      }),

      createTournamentForm({

        id:
          "yuno-star-magic",

        name:
          "Star Magic Yuno",

        rank:
          3,

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
            99,

          speed:
            100,

          durability:
            88,

          intelligence:
            100,

          attack:
            100,

          defense:
            93,

          stamina:
            94,

          versatility:
            100,
        },

        abilities: [
          "Star Magic",
          "Conjunction",
          "Teleportation",
          "Neverland",
          "Mana Zone",
          "Star-based battlefield control",
        ],

        weaknesses: [
          "Complex star formations require concentration",
        ],

        specialTraits: [
          "Spatial repositioning",
          "Massive battlefield control",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 03 — NOELLE SILVA
========================================================= */

export const NOELLE_SILVA =
  createTournamentCharacter({

    id:
      "black-clover-noelle-silva",

    verseId:
      "black-clover",

    name:
      "Noelle Silva",

    aliases: [
      "Sea Dragon",
      "Valkyrie",
      "Silva Princess",
    ],

    tags: [
      "Silva Family",
      "Royal",
      "Water Magic",
      "Valkyrie Dress",
      "Saint Stage",
    ],

    seedRating:
      98,

    description:
      "Noelle is a royal mage who evolves from unstable Water Magic into a powerful high-speed armored fighter. Her Valkyrie Dress, Saint Stage and advanced water techniques provide offense, defense and mobility.",

    specialTraits: [
      "Royal mana",
      "Water Magic",
      "Valkyrie Dress",
      "Sea Dragon",
      "Saint Stage",
    ],

    forms: [

      createTournamentForm({

        id:
          "noelle-early",

        name:
          "Early Water Magic Noelle",

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
            52,

          speed:
            65,

          durability:
            70,

          intelligence:
            76,

          attack:
            73,

          defense:
            79,

          stamina:
            77,

          versatility:
            80,
        },

        abilities: [
          "Water Magic",
          "Sea Dragon's Roar",
          "Large mana reserves",
          "Protective water spells",
        ],

        weaknesses: [
          "Early mana control was unstable",
        ],

        specialTraits: [
          "Exceptional magical reserves",
        ],

      }),

      createTournamentForm({

        id:
          "noelle-valkyrie",

        name:
          "Valkyrie Dress",

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
            74,

          speed:
            94,

          durability:
            88,

          intelligence:
            87,

          attack:
            93,

          defense:
            92,

          stamina:
            87,

          versatility:
            92,
        },

        abilities: [
          "Valkyrie Dress",
          "Water Armor",
          "Sea Dragon's Roar",
          "High-speed flight",
          "Water manipulation",
        ],

        weaknesses: [
          "High mana expenditure",
        ],

        specialTraits: [
          "Mobile magical armor",
          "High-speed aerial combat",
        ],

      }),

      createTournamentForm({

        id:
          "noelle-saint-valkyrie",

        name:
          "Saint Valkyrie Dress",

        rank:
          3,

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
            100,

          durability:
            96,

          intelligence:
            93,

          attack:
            100,

          defense:
            99,

          stamina:
            93,

          versatility:
            99,
        },

        abilities: [
          "Saint Stage",
          "Saint Valkyrie Dress",
          "Water Magic",
          "Devil-slaying power",
          "Advanced mana control",
        ],

        weaknesses: [
          "Peak state requires advanced synchronization",
        ],

        specialTraits: [
          "Saint-level anti-devil compatibility",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 04 — YAMI SUKEHIRO
========================================================= */

export const YAMI =
  createTournamentCharacter({

    id:
      "black-clover-yami-sukehiro",

    verseId:
      "black-clover",

    name:
      "Yami Sukehiro",

    aliases: [
      "Captain Yami",
      "Dark Magic Captain",
      "Black Bulls Captain",
    ],

    tags: [
      "Black Bulls",
      "Dark Magic",
      "Ki",
      "Captain",
      "Mana Zone",
      "Dimension Slash",
    ],

    seedRating:
      98,

    description:
      "Yami Sukehiro is the captain of the Black Bulls and an elite Dark Magic user. His Ki sensing, Dark Magic, Dimension Slash, Black Moon and extreme physical combat ability make him one of the most versatile captains.",

    specialTraits: [
      "Dark Magic",
      "Ki",
      "Mana Zone",
      "Dimension Slash",
      "Captain",
    ],

    forms: [

      createTournamentForm({

        id:
          "yami-standard",

        name:
          "Captain Yami",

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
            80,

          realPower:
            80,

          hax:
            85,

          speed:
            84,

          durability:
            89,

          intelligence:
            95,

          attack:
            97,

          defense:
            88,

          stamina:
            93,

          versatility:
            94,
        },

        abilities: [
          "Dark Magic",
          "Ki sensing",
          "Dark Cloaked Slash",
          "Black Moon",
          "Mana Zone",
        ],

        weaknesses: [
          "Advanced techniques are physically demanding",
        ],

        specialTraits: [
          "Extremely dangerous close-range fighter",
        ],

      }),

      createTournamentForm({

        id:
          "yami-death-thrust",

        name:
          "Death Thrust",

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
            98,

          speed:
            92,

          durability:
            91,

          intelligence:
            98,

          attack:
            100,

          defense:
            89,

          stamina:
            86,

          versatility:
            97,
        },

        abilities: [
          "Death Thrust",
          "Dark Magic",
          "Ki sensing",
          "Black Moon",
          "High-density Dark Magic",
        ],

        weaknesses: [
          "Highly concentrated attack",
          "Heavy mana consumption",
        ],

        specialTraits: [
          "Extremely high single-target damage",
        ],

      }),

      createTournamentForm({

        id:
          "yami-equinoctial",

        name:
          "Yami — Advanced Dark Magic",

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
            100,

          speed:
            95,

          durability:
            94,

          intelligence:
            99,

          attack:
            100,

          defense:
            97,

          stamina:
            89,

          versatility:
            100,
        },

        abilities: [
          "Black Moon",
          "Dimension Slash",
          "Equinox",
          "Dark Magic",
          "Mana Zone",
          "Ki",
        ],

        weaknesses: [
          "Extremely high stamina demand",
        ],

        specialTraits: [
          "Spatial cutting",
          "Magic zone suppression",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 05 — JULIUS NOVACHRONO
========================================================= */

export const JULIUS =
  createTournamentCharacter({

    id:
      "black-clover-julius-novachrono",

    verseId:
      "black-clover",

    name:
      "Julius Novachrono",

    aliases: [
      "Wizard King",
      "Time Magic Master",
    ],

    tags: [
      "Wizard King",
      "Time Magic",
      "Mana Zone",
      "Prediction",
    ],

    seedRating:
      100,

    description:
      "Julius Novachrono is the former Wizard King and one of the most dangerous Time Magic users in the series. His ability to manipulate, accelerate, store and interact with time gives him extraordinary battlefield control.",

    specialTraits: [
      "Time Magic",
      "Wizard King",
      "Mana Zone",
      "Exceptional magical intelligence",
    ],

    forms: [

      createTournamentForm({

        id:
          "julius-wizard-king",

        name:
          "Wizard King Julius",

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
            97,

          realPower:
            97,

          hax:
            100,

          speed:
            100,

          durability:
            78,

          intelligence:
            100,

          attack:
            91,

          defense:
            95,

          stamina:
            94,

          versatility:
            100,
        },

        abilities: [
          "Time Magic",
          "Time storage",
          "Time acceleration",
          "Time capture",
          "Mana Zone",
        ],

        weaknesses: [
          "Physical durability is not his main advantage",
        ],

        specialTraits: [
          "Extreme temporal hax",
          "High-speed time manipulation",
        ],

      }),

      createTournamentForm({

        id:
          "julius-peak-time",

        name:
          "Peak Time Magic Julius",

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
            100,

          speed:
            100,

          durability:
            84,

          intelligence:
            100,

          attack:
            98,

          defense:
            98,

          stamina:
            96,

          versatility:
            100,
        },

        abilities: [
          "Advanced Time Magic",
          "Future interaction",
          "Temporal acceleration",
          "Time restoration",
        ],

        weaknesses: [
          "Extreme magical complexity",
        ],

        specialTraits: [
          "Temporal battlefield dominance",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 06 — MEREOLEONA VERMILLION
========================================================= */

export const MEREOLEONA =
  createTournamentCharacter({

    id:
      "black-clover-mereoleona-vermillion",

    verseId:
      "black-clover",

    name:
      "Mereoleona Vermillion",

    aliases: [
      "Lioness",
      "Hellfire Incarnate",
      "Crimson Lioness",
    ],

    tags: [
      "Fire Magic",
      "Crimson Lion",
      "Mana Zone",
      "Royal",
      "Close Combat",
    ],

    seedRating:
      99,

    description:
      "Mereoleona is one of the strongest close-range fighters in Black Clover. Her Fire Magic, Mana Zone, monstrous physical ability and Hellfire Incarnate state allow her to overwhelm opponents through relentless offense.",

    specialTraits: [
      "Fire Magic",
      "Mana Zone",
      "Extreme physical ability",
      "Battle instinct",
    ],

    forms: [

      createTournamentForm({

        id:
          "mereoleona-base",

        name:
          "Mereoleona Vermillion",

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
            74,

          speed:
            97,

          durability:
            97,

          intelligence:
            91,

          attack:
            98,

          defense:
            91,

          stamina:
            99,

          versatility:
            91,
        },

        abilities: [
          "Fire Magic",
          "Mana Zone",
          "Calidus Brachium",
          "Extreme close combat",
        ],

        weaknesses: [
          "Close-range focus",
        ],

        specialTraits: [
          "Exceptional battle instinct",
          "Huge stamina reserves",
        ],

      }),

      createTournamentForm({

        id:
          "mereoleona-hellfire",

        name:
          "Hellfire Incarnate",

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
            95,

          speed:
            100,

          durability:
            100,

          intelligence:
            95,

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
          "Hellfire Incarnate",
          "Fire Magic",
          "Mana Zone",
          "Calidus Brachium Barrage",
          "Extreme physical enhancement",
        ],

        weaknesses: [
          "Extreme high-output state",
        ],

        specialTraits: [
          "Continuous self-amplification",
          "Extreme heat output",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 07 — NOZEL SILVA
========================================================= */

export const NOZEL =
  createTournamentCharacter({

    id:
      "black-clover-nozel-silva",

    verseId:
      "black-clover",

    name:
      "Nozel Silva",

    aliases: [
      "Silver Eagles Captain",
      "Mercury Magic Master",
    ],

    tags: [
      "Silver Eagles",
      "Mercury Magic",
      "Royal",
      "Captain",
      "Mana Zone",
    ],

    seedRating:
      96,

    description:
      "Nozel Silva is the captain of the Silver Eagles and a highly precise Mercury Magic user. His magic provides offense, defense, mobility and battlefield control.",

    specialTraits: [
      "Mercury Magic",
      "Royal mana",
      "Captain",
      "Mana Zone",
    ],

    forms: [

      createTournamentForm({

        id:
          "nozel-standard",

        name:
          "Captain Nozel",

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
            75,

          speed:
            87,

          durability:
            88,

          intelligence:
            96,

          attack:
            91,

          defense:
            94,

          stamina:
            88,

          versatility:
            98,
        },

        abilities: [
          "Mercury Magic",
          "Mercury armor",
          "Mercury weapons",
          "Mana Zone",
          "Precision control",
        ],

        weaknesses: [
          "Complex constructs require concentration",
        ],

        specialTraits: [
          "Highly precise spell control",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 08 — FUEGOLEON VERMILLION
========================================================= */

export const FUEGOLEON =
  createTournamentCharacter({

    id:
      "black-clover-fuegoleon-vermillion",

    verseId:
      "black-clover",

    name:
      "Fuegoleon Vermillion",

    aliases: [
      "Crimson Lion Captain",
      "Salamander User",
    ],

    tags: [
      "Fire Magic",
      "Crimson Lions",
      "Royal",
      "Captain",
      "Salamander",
    ],

    seedRating:
      96,

    description:
      "Fuegoleon is a Crimson Lion captain and powerful Fire Magic user. After gaining Salamander, his offensive output, mobility and magical reserves rise dramatically.",

    specialTraits: [
      "Fire Magic",
      "Salamander",
      "Royal mana",
      "Captain",
    ],

    forms: [

      createTournamentForm({

        id:
          "fuegoleon-standard",

        name:
          "Captain Fuegoleon",

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
            65,

          speed:
            79,

          durability:
            85,

          intelligence:
            96,

          attack:
            93,

          defense:
            87,

          stamina:
            91,

          versatility:
            89,
        },

        abilities: [
          "Fire Magic",
          "Mana Zone",
          "Large-scale flame spells",
        ],

        weaknesses: [
          "High-output attacks consume mana",
        ],

        specialTraits: [
          "Calm tactical leader",
        ],

      }),

      createTournamentForm({

        id:
          "fuegoleon-salamander",

        name:
          "Salamander Fuegoleon",

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
            89,

          speed:
            91,

          durability:
            95,

          intelligence:
            98,

          attack:
            100,

          defense:
            95,

          stamina:
            95,

          versatility:
            98,
        },

        abilities: [
          "Salamander",
          "Fire Spirit power",
          "Mana Zone",
          "Massive Fire Magic",
        ],

        weaknesses: [
          "Spirit synchronization demands concentration",
        ],

        specialTraits: [
          "Spirit-boosted Fire Magic",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 09 — WILLIAM VANGEANCE
========================================================= */

export const WILLIAM =
  createTournamentCharacter({

    id:
      "black-clover-william-vangeance",

    verseId:
      "black-clover",

    name:
      "William Vangeance",

    aliases: [
      "Golden Dawn Captain",
      "World Tree Mage",
    ],

    tags: [
      "Golden Dawn",
      "World Tree Magic",
      "Captain",
      "Healing",
      "Support",
    ],

    seedRating:
      95,

    description:
      "William Vangeance is the captain of the Golden Dawn and a master of World Tree Magic, specializing in enormous battlefield effects, support, healing and magical control.",

    specialTraits: [
      "World Tree Magic",
      "Captain",
      "Support specialist",
      "Healing",
    ],

    forms: [

      createTournamentForm({

        id:
          "william-standard",

        name:
          "Captain William",

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
            88,

          speed:
            69,

          durability:
            79,

          intelligence:
            99,

          attack:
            84,

          defense:
            88,

          stamina:
            92,

          versatility:
            100,
        },

        abilities: [
          "World Tree Magic",
          "Mana Zone",
          "Healing",
          "Binding trees",
          "Massive battlefield support",
        ],

        weaknesses: [
          "Less specialized for direct melee fighting",
        ],

        specialTraits: [
          "Large-scale support magic",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 10 — CHARLOTTE ROSELEI
========================================================= */

export const CHARLOTTE =
  createTournamentCharacter({

    id:
      "black-clover-charlotte-roselei",

    verseId:
      "black-clover",

    name:
      "Charlotte Roselei",

    aliases: [
      "Blue Rose Captain",
      "Briar Magic Captain",
    ],

    tags: [
      "Blue Rose",
      "Briar Magic",
      "Captain",
      "Curse",
    ],

    seedRating:
      94,

    description:
      "Charlotte is the captain of the Blue Rose Knights and uses Briar Magic for binding, defense, offense and large-scale battlefield control.",

    specialTraits: [
      "Briar Magic",
      "Captain",
      "Curse resistance",
    ],

    forms: [

      createTournamentForm({

        id:
          "charlotte-standard",

        name:
          "Captain Charlotte",

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
            82,

          speed:
            84,

          durability:
            79,

          intelligence:
            94,

          attack:
            88,

          defense:
            86,

          stamina:
            86,

          versatility:
            96,
        },

        abilities: [
          "Briar Magic",
          "Mana Zone",
          "Binding briars",
          "Offensive briar attacks",
        ],

        weaknesses: [
          "Advanced spells demand concentration",
        ],

        specialTraits: [
          "Strong anti-curse affinity",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 11 — JACK THE RIPPER
========================================================= */

export const JACK =
  createTournamentCharacter({

    id:
      "black-clover-jack-the-ripper",

    verseId:
      "black-clover",

    name:
      "Jack the Ripper",

    aliases: [
      "Green Mantis Captain",
      "Cutting Magic Captain",
    ],

    tags: [
      "Green Mantis",
      "Cutting Magic",
      "Captain",
      "Adaptation",
    ],

    seedRating:
      95,

    description:
      "Jack the Ripper uses Cutting Magic whose properties can adapt to different opponents and defenses, making him particularly dangerous in prolonged battles.",

    specialTraits: [
      "Adaptive Cutting Magic",
      "Captain",
      "Close combat",
    ],

    forms: [

      createTournamentForm({

        id:
          "jack-standard",

        name:
          "Captain Jack",

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
            80,

          realPower:
            80,

          hax:
            91,

          speed:
            87,

          durability:
            78,

          intelligence:
            85,

          attack:
            99,

          defense:
            74,

          stamina:
            91,

          versatility:
            95,
        },

        abilities: [
          "Cutting Magic",
          "Adaptive slashes",
          "Mana Zone",
          "Close-range blade creation",
        ],

        weaknesses: [
          "Primarily offensive fighting style",
        ],

        specialTraits: [
          "Adapts attacks to enemy defenses",
        ],

      }),

      createTournamentForm({

        id:
          "jack-advanced",

        name:
          "Advanced Adaptive Cutting",

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
            100,

          speed:
            93,

          durability:
            83,

          intelligence:
            91,

          attack:
            100,

          defense:
            78,

          stamina:
            94,

          versatility:
            100,
        },

        abilities: [
          "Adaptive Cutting Magic",
          "Mana Zone",
          "Extreme cutting output",
          "Defense adaptation",
        ],

        weaknesses: [
          "Requires exposure to properly adapt",
        ],

        specialTraits: [
          "Counter-specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 12 — DOROTHY UNSWORTH
========================================================= */

export const DOROTHY =
  createTournamentCharacter({

    id:
      "black-clover-dorothy-unsworth",

    verseId:
      "black-clover",

    name:
      "Dorothy Unsworth",

    aliases: [
      "Coral Peacocks Captain",
      "Dream Magic Captain",
    ],

    tags: [
      "Coral Peacocks",
      "Dream Magic",
      "Glamour World",
      "Captain",
    ],

    seedRating:
      96,

    description:
      "Dorothy's Dream Magic creates Glamour World, an extremely versatile magical space where she can recreate and manipulate magical constructs.",

    specialTraits: [
      "Dream Magic",
      "Glamour World",
      "Captain",
      "Reality-like battlefield manipulation",
    ],

    forms: [

      createTournamentForm({

        id:
          "dorothy-standard",

        name:
          "Captain Dorothy",

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
            96,

          speed:
            66,

          durability:
            74,

          intelligence:
            95,

          attack:
            82,

          defense:
            83,

          stamina:
            86,

          versatility:
            100,
        },

        abilities: [
          "Dream Magic",
          "Glamour World",
          "Magic recreation",
          "Battlefield manipulation",
        ],

        weaknesses: [
          "Complex battlefield requires concentration",
        ],

        specialTraits: [
          "Extremely high hax versatility",
        ],

      }),

      createTournamentForm({

        id:
          "dorothy-glamour-world",

        name:
          "Glamour World",

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
            100,

          speed:
            72,

          durability:
            82,

          intelligence:
            100,

          attack:
            100,

          defense:
            95,

          stamina:
            89,

          versatility:
            100,
        },

        abilities: [
          "Dream reality manipulation",
          "Magic recreation",
          "Battlefield transformation",
          "Construct generation",
        ],

        weaknesses: [
          "Requires maintaining Glamour World",
        ],

        specialTraits: [
          "Near-limitless magical creativity within her domain",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 13 — RILL BOISMORTIER
========================================================= */

export const RILL =
  createTournamentCharacter({

    id:
      "black-clover-rill-boismortier",

    verseId:
      "black-clover",

    name:
      "Rill Boismortier",

    aliases: [
      "Azure Deer Captain",
      "Painting Magic Prodigy",
    ],

    tags: [
      "Azure Deer",
      "Painting Magic",
      "Captain",
      "Creation",
    ],

    seedRating:
      93,

    description:
      "Rill is a young captain who can create an enormous variety of magical effects through Painting Magic.",

    specialTraits: [
      "Painting Magic",
      "Creative magic generation",
      "Captain",
    ],

    forms: [

      createTournamentForm({

        id:
          "rill-standard",

        name:
          "Captain Rill",

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
            94,

          speed:
            70,

          durability:
            71,

          intelligence:
            90,

          attack:
            91,

          defense:
            76,

          stamina:
            84,

          versatility:
            100,
        },

        abilities: [
          "Painting Magic",
          "Element creation",
          "Creature creation",
          "Battlefield support",
        ],

        weaknesses: [
          "Output is influenced by creativity and emotional state",
        ],

        specialTraits: [
          "Extremely broad magical expression",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 14 — FINRAL ROULACASE
========================================================= */

export const FINRAL =
  createTournamentCharacter({

    id:
      "black-clover-finral-roulacase",

    verseId:
      "black-clover",

    name:
      "Finral Roulacase",

    aliases: [
      "Spatial Magic User",
      "Black Bulls Vice Support",
    ],

    tags: [
      "Black Bulls",
      "Spatial Magic",
      "Teleportation",
      "Support",
    ],

    seedRating:
      89,

    description:
      "Finral specializes in Spatial Magic and is one of the Black Bulls' most important support fighters. His portals provide teleportation, repositioning and battlefield manipulation.",

    specialTraits: [
      "Spatial Magic",
      "Teleportation",
      "Support",
    ],

    forms: [

      createTournamentForm({

        id:
          "finral-standard",

        name:
          "Spatial Magic Finral",

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
            97,

          speed:
            78,

          durability:
            48,

          intelligence:
            95,

          attack:
            41,

          defense:
            69,

          stamina:
            76,

          versatility:
            100,
        },

        abilities: [
          "Spatial Magic",
          "Teleportation portals",
          "Dimensional repositioning",
          "Battlefield support",
        ],

        weaknesses: [
          "Low direct destructive power",
        ],

        specialTraits: [
          "Elite teleportation specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 15 — VANESSA ENOTECA
========================================================= */

export const VANESSA =
  createTournamentCharacter({

    id:
      "black-clover-vanessa-enoteca",

    verseId:
      "black-clover",

    name:
      "Vanessa Enoteca",

    aliases: [
      "Red Thread of Fate",
      "Black Bulls Witch",
    ],

    tags: [
      "Black Bulls",
      "Thread Magic",
      "Red Thread of Fate",
      "Witch",
    ],

    seedRating:
      92,

    description:
      "Vanessa's Thread Magic becomes extraordinarily powerful when combined with Rouge, her Red Thread of Fate, allowing her to alter outcomes and protect allies from otherwise fatal attacks.",

    specialTraits: [
      "Thread Magic",
      "Rouge",
      "Fate manipulation",
      "Witch",
    ],

    forms: [

      createTournamentForm({

        id:
          "vanessa-thread",

        name:
          "Thread Magic Vanessa",

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
            99,

          speed:
            58,

          durability:
            50,

          intelligence:
            92,

          attack:
            44,

          defense:
            92,

          stamina:
            69,

          versatility:
            98,
        },

        abilities: [
          "Thread Magic",
          "Red Thread of Fate",
          "Rouge",
          "Fate alteration",
        ],

        weaknesses: [
          "Best defensive applications require protecting allies",
        ],

        specialTraits: [
          "Extremely high defensive hax",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 16 — LANGRIS VAUDE
========================================================= */

export const LANGRIS =
  createTournamentCharacter({

    id:
      "black-clover-langris-vaude",

    verseId:
      "black-clover",

    name:
      "Langris Vaude",

    aliases: [
      "Spatial Magic Prodigy",
      "Golden Dawn Vice Captain",
    ],

    tags: [
      "Golden Dawn",
      "Spatial Magic",
      "Spatial Erasure",
      "Vice Captain",
    ],

    seedRating:
      94,

    description:
      "Langris is a prodigious Spatial Magic user whose erasure-based attacks can bypass conventional physical durability and create extremely dangerous defensive zones.",

    specialTraits: [
      "Spatial erasure",
      "Teleportation",
      "Golden Dawn",
    ],

    forms: [

      createTournamentForm({

        id:
          "langris-standard",

        name:
          "Spatial Erasure Langris",

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
            74,

          realPower:
            74,

          hax:
            99,

          speed:
            88,

          durability:
            63,

          intelligence:
            94,

          attack:
            100,

          defense:
            72,

          stamina:
            83,

          versatility:
            94,
        },

        abilities: [
          "Spatial Magic",
          "Spatial erasure",
          "Spatial bubbles",
          "Mana Zone",
        ],

        weaknesses: [
          "High-output spatial attacks require significant concentration",
        ],

        specialTraits: [
          "Defense-bypassing spatial offense",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 17 — ZORA IDEALE
========================================================= */

export const ZORA =
  createTournamentCharacter({

    id:
      "black-clover-zora-ideale",

    verseId:
      "black-clover",

    name:
      "Zora Ideale",

    aliases: [
      "Trap Magic Specialist",
      "Black Bull Zora",
    ],

    tags: [
      "Black Bulls",
      "Ash Magic",
      "Trap Magic",
      "Counter",
      "Tactician",
    ],

    seedRating:
      89,

    description:
      "Zora is an intelligent trap specialist who can create spells that counter or amplify enemy magic, making preparation and tactical positioning his biggest strengths.",

    specialTraits: [
      "Trap Magic",
      "Counter specialist",
      "High battle IQ",
    ],

    forms: [

      createTournamentForm({

        id:
          "zora-trap",

        name:
          "Trap Magic Zora",

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
            97,

          speed:
            68,

          durability:
            61,

          intelligence:
            100,

          attack:
            88,

          defense:
            78,

          stamina:
            75,

          versatility:
            98,
        },

        abilities: [
          "Ash Magic",
          "Trap Magic",
          "Counter traps",
          "Mana absorption traps",
        ],

        weaknesses: [
          "Strongest traps benefit from preparation",
        ],

        specialTraits: [
          "Exceptional counter specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 18 — LUCK VOLTIA
========================================================= */

export const LUCK =
  createTournamentCharacter({

    id:
      "black-clover-luck-voltia",

    verseId:
      "black-clover",

    name:
      "Luck Voltia",

    aliases: [
      "Lightning Maniac",
      "Black Bulls Lightning Fighter",
    ],

    tags: [
      "Black Bulls",
      "Lightning Magic",
      "Speed",
      "Mana Zone",
    ],

    seedRating:
      92,

    description:
      "Luck is an extremely fast Lightning Magic fighter who specializes in close-range combat, rapid movement and relentless pressure.",

    specialTraits: [
      "Lightning Magic",
      "Extreme speed",
      "Battle instinct",
    ],

    forms: [

      createTournamentForm({

        id:
          "luck-standard",

        name:
          "Lightning Magic Luck",

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
            62,

          speed:
            99,

          durability:
            67,

          intelligence:
            82,

          attack:
            90,

          defense:
            69,

          stamina:
            93,

          versatility:
            82,
        },

        abilities: [
          "Lightning Magic",
          "Mana Zone",
          "High-speed movement",
          "Lightning armor",
        ],

        weaknesses: [
          "Close-range specialization",
        ],

        specialTraits: [
          "Extremely high acceleration",
        ],

      }),

      createTournamentForm({

        id:
          "luck-true-lightning",

        name:
          "True Lightning Luck",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            91,

          realPower:
            91,

          hax:
            84,

          speed:
            100,

          durability:
            84,

          intelligence:
            87,

          attack:
            99,

          defense:
            82,

          stamina:
            96,

          versatility:
            91,
        },

        abilities: [
          "Advanced Lightning Magic",
          "Mana Zone",
          "Lightning armor",
          "Extreme close-range speed",
        ],

        weaknesses: [
          "Heavy close-combat orientation",
        ],

        specialTraits: [
          "High-speed offensive specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 19 — MAGNA SWING
========================================================= */

export const MAGNA =
  createTournamentCharacter({

    id:
      "black-clover-magna-swing",

    verseId:
      "black-clover",

    name:
      "Magna Swing",

    aliases: [
      "Black Bull Fire Mage",
      "Soul Chain Fighter",
    ],

    tags: [
      "Black Bulls",
      "Fire Magic",
      "Soul Chain",
      "Equalization",
    ],

    seedRating:
      88,

    description:
      "Magna is a resourceful Fire Magic user who compensates for limited mana through clever techniques, culminating in Soul Chain Death Match.",

    specialTraits: [
      "Fire Magic",
      "Soul Chain",
      "High tactical creativity",
    ],

    forms: [

      createTournamentForm({

        id:
          "magna-fire",

        name:
          "Fire Magic Magna",

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
            53,

          realPower:
            53,

          hax:
            56,

          speed:
            63,

          durability:
            69,

          intelligence:
            88,

          attack:
            79,

          defense:
            64,

          stamina:
            75,

          versatility:
            76,
        },

        abilities: [
          "Fire Magic",
          "Baseball-inspired combat",
          "Explosive fire techniques",
        ],

        weaknesses: [
          "Limited mana reserves",
        ],

        specialTraits: [
          "Resource-efficient fighter",
        ],

      }),

      createTournamentForm({

        id:
          "magna-soul-chain",

        name:
          "Soul Chain Death Match",

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
            100,

          speed:
            68,

          durability:
            88,

          intelligence:
            96,

          attack:
            89,

          defense:
            91,

          stamina:
            93,

          versatility:
            88,
        },

        abilities: [
          "Soul Chain Death Match",
          "Mana equalization",
          "Fire Magic",
          "Close combat",
        ],

        weaknesses: [
          "Most effective in one-on-one battles",
        ],

        specialTraits: [
          "Can neutralize huge resource gaps",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 20 — CHARMY PAPPITSON
========================================================= */

export const CHARMY =
  createTournamentCharacter({

    id:
      "black-clover-charmy-pappitson",

    verseId:
      "black-clover",

    name:
      "Charmy Pappitson",

    aliases: [
      "Black Bulls Sheep Mage",
      "Dwarf Hybrid",
    ],

    tags: [
      "Black Bulls",
      "Cotton Magic",
      "Food Magic",
      "Dwarf",
      "Mana Recovery",
    ],

    seedRating:
      95,

    description:
      "Charmy possesses Cotton Magic and Food Magic, allowing recovery and support. Her dwarf hybrid state gives her enormous physical strength and mana-related abilities.",

    specialTraits: [
      "Dwarf lineage",
      "Cotton Magic",
      "Food Magic",
      "Mana recovery",
    ],

    forms: [

      createTournamentForm({

        id:
          "charmy-base",

        name:
          "Cotton Magic Charmy",

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
            74,

          speed:
            47,

          durability:
            72,

          intelligence:
            59,

          attack:
            41,

          defense:
            77,

          stamina:
            88,

          versatility:
            88,
        },

        abilities: [
          "Cotton Magic",
          "Food creation",
          "Mana restoration",
          "Support magic",
        ],

        weaknesses: [
          "Base form has modest direct offense",
        ],

        specialTraits: [
          "Exceptional support capability",
        ],

      }),

      createTournamentForm({

        id:
          "charmy-dwarf",

        name:
          "Dwarf Hybrid Charmy",

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
            95,

          speed:
            80,

          durability:
            99,

          intelligence:
            72,

          attack:
            100,

          defense:
            100,

          stamina:
            100,

          versatility:
            97,
        },

        abilities: [
          "Dwarf power",
          "Food Magic",
          "Mana absorption",
          "Extreme physical strength",
        ],

        weaknesses: [
          "Transformation is situational",
        ],

        specialTraits: [
          "Exceptional mana recovery",
          "Hybrid physical amplification",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 21 — GAUCHE ADLAI
========================================================= */

export const GAUCHE =
  createTournamentCharacter({

    id:
      "black-clover-gauche-adlai",

    verseId:
      "black-clover",

    name:
      "Gauche Adlai",

    aliases: [
      "Mirror Magic User",
      "Black Bulls Gauche",
    ],

    tags: [
      "Black Bulls",
      "Mirror Magic",
      "Copies",
      "Support",
    ],

    seedRating:
      85,

    description:
      "Gauche uses Mirror Magic to create reflections, duplicate attacks and coordinate multiple magical constructs.",

    specialTraits: [
      "Mirror Magic",
      "Clone support",
    ],

    forms: [

      createTournamentForm({

        id:
          "gauche-mirror",

        name:
          "Mirror Magic Gauche",

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
            87,

          speed:
            63,

          durability:
            51,

          intelligence:
            91,

          attack:
            81,

          defense:
            63,

          stamina:
            73,

          versatility:
            93,
        },

        abilities: [
          "Mirror Magic",
          "Mirror Brigade",
          "Reflection",
          "Duplicate spells",
        ],

        weaknesses: [
          "Physical durability is comparatively low",
        ],

        specialTraits: [
          "Multi-target magical support",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 22 — GREY
========================================================= */

export const GREY =
  createTournamentCharacter({

    id:
      "black-clover-grey",

    verseId:
      "black-clover",

    name:
      "Grey",

    aliases: [
      "Transformation Magic User",
      "Black Bulls Grey",
    ],

    tags: [
      "Black Bulls",
      "Transformation Magic",
      "Matter Alteration",
      "Support",
    ],

    seedRating:
      82,

    description:
      "Grey's unusual Transformation Magic allows her to alter forms and later demonstrates much broader potential over magical and physical properties.",

    specialTraits: [
      "Transformation Magic",
      "Matter alteration potential",
      "Support magic",
    ],

    forms: [

      createTournamentForm({

        id:
          "grey-transformation",

        name:
          "Transformation Magic Grey",

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
            94,

          speed:
            43,

          durability:
            49,

          intelligence:
            82,

          attack:
            35,

          defense:
            67,

          stamina:
            62,

          versatility:
            100,
        },

        abilities: [
          "Transformation Magic",
          "Appearance alteration",
          "Matter-related transformations",
        ],

        weaknesses: [
          "Low direct attack power",
        ],

        specialTraits: [
          "Extreme utility",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 23 — SECRE SWALLOWTAIL
========================================================= */

export const SECRE =
  createTournamentCharacter({

    id:
      "black-clover-secre-swallowtail",

    verseId:
      "black-clover",

    name:
      "Secre Swallowtail",

    aliases: [
      "Nero",
      "Royal Attendant",
      "Sealing Magic User",
    ],

    tags: [
      "Black Bulls",
      "Sealing Magic",
      "Nero",
      "Arcane Stage",
      "Support",
    ],

    seedRating:
      89,

    description:
      "Secre Swallowtail is an ancient sealing mage who served the royal family. Her sealing abilities provide exceptional utility, restoration, containment and magical interaction.",

    specialTraits: [
      "Sealing Magic",
      "Ancient mage",
      "Arcane Stage",
      "Nero bird form",
    ],

    forms: [

      createTournamentForm({

        id:
          "secre-nero",

        name:
          "Nero",

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
            30,

          realPower:
            30,

          hax:
            84,

          speed:
            55,

          durability:
            27,

          intelligence:
            90,

          attack:
            18,

          defense:
            35,

          stamina:
            43,

          versatility:
            92,
        },

        abilities: [
          "Sealing Magic",
          "Bird transformation",
          "Scouting",
          "Magical sensing",
        ],

        weaknesses: [
          "Very low direct combat power",
        ],

        specialTraits: [
          "Long-term sealing specialist",
        ],

      }),

      createTournamentForm({

        id:
          "secre-human",

        name:
          "Human Secre",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            61,

          realPower:
            61,

          hax:
            97,

          speed:
            59,

          durability:
            53,

          intelligence:
            97,

          attack:
            46,

          defense:
            76,

          stamina:
            69,

          versatility:
            99,
        },

        abilities: [
          "Advanced Sealing Magic",
          "Arcane Stage",
          "Anti-curse applications",
          "Magical restoration",
        ],

        weaknesses: [
          "Not specialized for direct destructive combat",
        ],

        specialTraits: [
          "Extreme utility against magical constructs",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 24 — SALLY
========================================================= */

export const SALLY =
  createTournamentCharacter({

    id:
      "black-clover-sally",

    verseId:
      "black-clover",

    name:
      "Sally",

    aliases: [
      "Diamond Kingdom Scientist",
      "Body Magic Researcher",
    ],

    tags: [
      "Diamond Kingdom",
      "Biology Magic",
      "Research",
      "Science",
    ],

    seedRating:
      76,

    description:
      "Sally is a highly intelligent researcher whose magical experimentation and Biology Magic provide unusual battlefield applications.",

    specialTraits: [
      "Scientific genius",
      "Experimental magic",
      "Biology Magic",
    ],

    forms: [

      createTournamentForm({

        id:
          "sally-standard",

        name:
          "Sally",

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
            83,

          speed:
            45,

          durability:
            52,

          intelligence:
            100,

          attack:
            58,

          defense:
            49,

          stamina:
            60,

          versatility:
            96,
        },

        abilities: [
          "Biology Magic",
          "Scientific experimentation",
          "Body modification",
        ],

        weaknesses: [
          "Low direct combat specialization",
        ],

        specialTraits: [
          "Experimental combat science",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 25 — MARS
========================================================= */

export const MARS =
  createTournamentCharacter({

    id:
      "black-clover-mars",

    verseId:
      "black-clover",

    name:
      "Mars",

    aliases: [
      "Diamond Kingdom Mage",
      "Crystal Mage",
    ],

    tags: [
      "Diamond Kingdom",
      "Crystal Magic",
      "Enhanced Body",
      "Healing",
    ],

    seedRating:
      86,

    description:
      "Mars is an enhanced Diamond Kingdom mage who uses Crystal Magic and has been modified through magical experiments, providing high durability and physical strength.",

    specialTraits: [
      "Crystal Magic",
      "Enhanced body",
      "Regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "mars-crystal",

        name:
          "Crystal Magic Mars",

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
            55,

          speed:
            60,

          durability:
            88,

          intelligence:
            71,

          attack:
            78,

          defense:
            91,

          stamina:
            90,

          versatility:
            80,
        },

        abilities: [
          "Crystal Magic",
          "Crystal armor",
          "Enhanced physical strength",
          "Healing",
        ],

        weaknesses: [
          "Less tactical variety than captain-level mages",
        ],

        specialTraits: [
          "Very high durability",
        ],

      }),

      createTournamentForm({

        id:
          "mars-enhanced",

        name:
          "Enhanced Mars",

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
            71,

          speed:
            72,

          durability:
            98,

          intelligence:
            77,

          attack:
            93,

          defense:
            99,

          stamina:
            96,

          versatility:
            89,
        },

        abilities: [
          "Crystal Magic",
          "Enhanced body",
          "Regeneration",
          "Combined magic",
        ],

        weaknesses: [
          "Heavy body can reduce agility",
        ],

        specialTraits: [
          "Tank-style mage",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 26 — LADROS
========================================================= */

export const LADROS =
  createTournamentCharacter({

    id:
      "black-clover-ladros",

    verseId:
      "black-clover",

    name:
      "Ladros",

    aliases: [
      "Diamond Kingdom Mage",
      "Magic Absorption User",
    ],

    tags: [
      "Diamond Kingdom",
      "Magic Absorption",
      "Projectile",
      "Enhanced Body",
    ],

    seedRating:
      83,

    description:
      "Ladros can absorb magical energy and release it as powerful projectile attacks, giving him strong potential against magic-heavy opponents.",

    specialTraits: [
      "Magic absorption",
      "Energy storage",
      "Ranged offense",
    ],

    forms: [

      createTournamentForm({

        id:
          "ladros-standard",

        name:
          "Ladros",

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
            90,

          speed:
            56,

          durability:
            68,

          intelligence:
            67,

          attack:
            75,

          defense:
            64,

          stamina:
            84,

          versatility:
            77,
        },

        abilities: [
          "Magic absorption",
          "Energy storage",
          "Energy release",
        ],

        weaknesses: [
          "Performance depends on available magic to absorb",
        ],

        specialTraits: [
          "Anti-magic-resource fighter",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 27 — WITCH QUEEN
========================================================= */

export const WITCH_QUEEN =
  createTournamentCharacter({

    id:
      "black-clover-witch-queen",

    verseId:
      "black-clover",

    name:
      "Witch Queen",

    aliases: [
      "Queen of the Witches Forest",
      "Blood Magic Master",
    ],

    tags: [
      "Witches Forest",
      "Blood Magic",
      "Manipulation",
      "Healing",
    ],

    seedRating:
      91,

    description:
      "The Witch Queen is an ancient Blood Magic user capable of manipulating blood, controlling bodies, healing and creating highly dangerous magical effects.",

    specialTraits: [
      "Blood Magic",
      "Mind and body manipulation",
      "Ancient magical knowledge",
    ],

    forms: [

      createTournamentForm({

        id:
          "witch-queen",

        name:
          "Witch Queen",

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
            74,

          realPower:
            74,

          hax:
            98,

          speed:
            60,

          durability:
            76,

          intelligence:
            99,

          attack:
            84,

          defense:
            83,

          stamina:
            92,

          versatility:
            99,
        },

        abilities: [
          "Blood Magic",
          "Blood manipulation",
          "Body control",
          "Healing",
          "Mind manipulation",
        ],

        weaknesses: [
          "Older physical body",
        ],

        specialTraits: [
          "Advanced manipulation magic",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 28 — RADES SPIRITO
========================================================= */

export const RADES =
  createTournamentCharacter({

    id:
      "black-clover-rades",

    verseId:
      "black-clover",

    name:
      "Rades Spirito",

    aliases: [
      "Corpse Magic User",
      "Eye of the Midnight Sun Member",
    ],

    tags: [
      "Corpse Magic",
      "Zombie",
      "Reanimation",
      "Eye of the Midnight Sun",
    ],

    seedRating:
      78,

    description:
      "Rades uses Corpse Magic to revive and control corpses, creating numbers-based combat and reanimation support.",

    specialTraits: [
      "Corpse Magic",
      "Reanimation",
      "Army creation",
    ],

    forms: [

      createTournamentForm({

        id:
          "rades-corpse",

        name:
          "Corpse Magic Rades",

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
            54,

          realPower:
            54,

          hax:
            89,

          speed:
            45,

          durability:
            62,

          intelligence:
            77,

          attack:
            58,

          defense:
            56,

          stamina:
            86,

          versatility:
            95,
        },

        abilities: [
          "Corpse Magic",
          "Zombie creation",
          "Mass reanimation",
        ],

        weaknesses: [
          "Requires available corpses",
        ],

        specialTraits: [
          "Numbers-based battlefield control",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 29 — PATRY
========================================================= */

export const PATRY =
  createTournamentCharacter({

    id:
      "black-clover-patry",

    verseId:
      "black-clover",

    name:
      "Patry",

    aliases: [
      "Patolli",
      "Elf Leader",
      "Light Magic User",
    ],

    tags: [
      "Elf",
      "Light Magic",
      "Eye of the Midnight Sun",
      "Leader",
      "Mana Zone",
    ],

    seedRating:
      98,

    description:
      "Patry is an extremely fast Light Magic user whose enormous magical speed, elf mana and advanced offensive techniques make him one of the setting's elite fighters.",

    specialTraits: [
      "Light Magic",
      "Elf",
      "Extreme speed",
      "Mana Zone",
    ],

    forms: [

      createTournamentForm({

        id:
          "patry-light",

        name:
          "Patry",

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
            88,

          realPower:
            88,

          hax:
            94,

          speed:
            100,

          durability:
            78,

          intelligence:
            95,

          attack:
            99,

          defense:
            82,

          stamina:
            90,

          versatility:
            98,
        },

        abilities: [
          "Light Magic",
          "Light-speed movement",
          "Mana Zone",
          "Light swords",
          "Massive ranged attacks",
        ],

        weaknesses: [
          "Strong anti-magic counters",
        ],

        specialTraits: [
          "One of the fastest magic users",
        ],

      }),

      createTournamentForm({

        id:
          "patry-demon-light",

        name:
          "Demon Light Magic Patry",

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
            100,

          durability:
            87,

          intelligence:
            98,

          attack:
            100,

          defense:
            92,

          stamina:
            94,

          versatility:
            100,
        },

        abilities: [
          "Demon Light Magic",
          "Light Magic",
          "High-speed spellcasting",
          "Massive magical output",
        ],

        weaknesses: [
          "Extreme transformation condition",
        ],

        specialTraits: [
          "Demon-enhanced Light Magic",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 30 — LICHT
========================================================= */

export const LICHT =
  createTournamentCharacter({

    id:
      "black-clover-licht",

    verseId:
      "black-clover",

    name:
      "Licht",

    aliases: [
      "Elf Leader",
      "Sword Magic Master",
      "Legendary Elf",
    ],

    tags: [
      "Elf",
      "Sword Magic",
      "Four Swords",
      "Leader",
      "Ancient Mage",
    ],

    seedRating:
      100,

    description:
      "Licht is the legendary leader of the elves and the original wielder associated with the four great swords. His enormous mana, swordsmanship and physical ability make him one of the strongest historical figures in the world.",

    specialTraits: [
      "Sword Magic",
      "Elf leader",
      "Immense mana",
      "Four swords",
      "Ancient combat experience",
    ],

    forms: [

      createTournamentForm({

        id:
          "licht-base",

        name:
          "Licht",

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
            95,

          realPower:
            95,

          hax:
            90,

          speed:
            98,

          durability:
            95,

          intelligence:
            99,

          attack:
            100,

          defense:
            94,

          stamina:
            98,

          versatility:
            98,
        },

        abilities: [
          "Sword Magic",
          "Four sword mastery",
          "Immense mana",
          "High-speed sword attacks",
          "Massive magical output",
        ],

        weaknesses: [
          "Historical peak condition differs from later weakened states",
        ],

        specialTraits: [
          "Legendary elf swordsman",
        ],

      }),

      createTournamentForm({

        id:
          "licht-full-power",

        name:
          "Full Power Licht",

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
            98,

          speed:
            100,

          durability:
            100,

          intelligence:
            100,

          attack:
            100,

          defense:
            99,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Ultimate Sword Magic",
          "Four sword mastery",
          "Extreme mana output",
          "High-speed sword projection",
          "Massive magical attacks",
        ],

        weaknesses: [
          "Peak ancient-era state is extremely difficult to sustain",
        ],

        specialTraits: [
          "Legendary historical peak",
        ],

      }),

    ],
  });


/* =========================================================
   FINAL DATABASE EXPORT
   EXACTLY 30 CHARACTERS
========================================================= */

export const BLACK_CLOVER_CHARACTERS = [

  ASTA,

  YUNO,

  NOELLE_SILVA,

  YAMI,

  JULIUS,

  MEREOLEONA,

  NOZEL,

  FUEGOLEON,

  WILLIAM,

  CHARLOTTE,

  JACK,

  DOROTHY,

  RILL,

  FINRAL,

  VANESSA,

  LANGRIS,

  ZORA,

  LUCK,

  MAGNA,

  CHARMY,

  GAUCHE,

  GREY,

  SECRE,

  SALLY,

  MARS,

  LADROS,

  WITCH_QUEEN,

  RADES,

  PATRY,

  LICHT,

];