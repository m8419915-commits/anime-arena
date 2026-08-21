/*
  Anime Arena — Grand Tournament

  Bleach Tournament Database

  30 CHARACTERS

  IMPORTANT:
  One character = ONE tournament entrant.

  Forms are NOT separate characters.

  Every tournament-eligible form contains explicit:
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
    - abilities
    - weaknesses

  Numerical values are Anime Arena balancing values,
  NOT official canon numerical power levels.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";


/* =========================================================
   CHARACTER 01 — ICHIGO KUROSAKI
========================================================= */

export const ICHIGO = createTournamentCharacter({
  id: "bleach-ichigo",
  verseId: "bleach",

  name: "Ichigo Kurosaki",

  aliases: [
    "Substitute Soul Reaper",
    "Kurosaki Ichigo",
  ],

  tags: [
    "Shinigami",
    "Hollow",
    "Quincy",
    "Fullbring",
  ],

  seedRating: 100,

  description:
    "Hybrid Soul Reaper whose Shinigami, Hollow and Quincy heritage gives him an exceptionally versatile combat profile.",

  forms: [

    createTournamentForm({
      id: "ichigo-human",
      name: "Human",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 34,
        realPower: 34,
        hax: 12,
        speed: 31,
        durability: 38,
        intelligence: 66,
        attack: 29,
        defense: 34,
        stamina: 58,
        versatility: 42,
      },

      abilities: [
        "Human physical ability",
        "High spiritual sensitivity",
      ],

      weaknesses: [
        "Cannot access Soul Reaper abilities in this state",
      ],
    }),

    createTournamentForm({
      id: "ichigo-shikai",
      name: "Shikai",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 82,
        realPower: 82,
        hax: 38,
        speed: 89,
        durability: 79,
        intelligence: 75,
        attack: 88,
        defense: 76,
        stamina: 91,
        versatility: 78,
      },

      abilities: [
        "Zangetsu",
        "Getsuga Tensho",
        "Shunpo",
        "High spiritual pressure",
      ],

      weaknesses: [
        "Lower output than Bankai states",
      ],
    }),

    createTournamentForm({
      id: "ichigo-bankai",
      name: "Bankai — Tensa Zangetsu",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 92,
        realPower: 92,
        hax: 45,
        speed: 98,
        durability: 88,
        intelligence: 78,
        attack: 97,
        defense: 85,
        stamina: 89,
        versatility: 84,
      },

      abilities: [
        "Tensa Zangetsu",
        "Extreme speed",
        "Getsuga Tensho",
        "Enhanced physical combat",
      ],

      weaknesses: [
        "High spiritual output",
      ],
    }),

    createTournamentForm({
      id: "ichigo-hollow-mask",
      name: "Hollow Mask",
      rank: 4,
      tier: "legendary",

      stats: {
        relativePower: 95,
        realPower: 95,
        hax: 57,
        speed: 100,
        durability: 91,
        intelligence: 74,
        attack: 100,
        defense: 89,
        stamina: 86,
        versatility: 88,
      },

      abilities: [
        "Hollowfication",
        "Enhanced Getsuga",
        "High-speed regeneration",
        "Mask amplification",
      ],

      weaknesses: [
        "Limited mask duration in earlier mastery stages",
      ],
    }),

    createTournamentForm({
      id: "ichigo-true-shikai",
      name: "True Shikai",
      rank: 5,
      tier: "mythic",

      stats: {
        relativePower: 98,
        realPower: 98,
        hax: 67,
        speed: 99,
        durability: 95,
        intelligence: 83,
        attack: 100,
        defense: 94,
        stamina: 94,
        versatility: 96,
      },

      abilities: [
        "Dual Zangetsu",
        "Quincy power",
        "Hollow power",
        "Getsuga Tensho",
      ],

      weaknesses: [
        "Still below his highest combined peak",
      ],
    }),

    createTournamentForm({
      id: "ichigo-true-bankai",
      name: "True Bankai",
      rank: 6,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 72,
        speed: 100,
        durability: 99,
        intelligence: 85,
        attack: 100,
        defense: 98,
        stamina: 96,
        versatility: 100,
      },

      abilities: [
        "True Bankai",
        "Hybrid Shinigami power",
        "Quincy power",
        "Hollow power",
        "Extreme Getsuga output",
      ],

      weaknesses: [
        "Extremely high spiritual output",
      ],
    }),

    createTournamentForm({
      id: "ichigo-horn-of-salvation",
      name: "Horn of Salvation",
      rank: 7,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 81,
        speed: 100,
        durability: 100,
        intelligence: 84,
        attack: 100,
        defense: 100,
        stamina: 93,
        versatility: 100,
      },

      abilities: [
        "Hollow transformation",
        "Enhanced Cero",
        "Extreme Getsuga",
        "Hybrid spiritual power",
      ],

      weaknesses: [
        "Extreme combat state",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 02 — SOSUKE AIZEN
========================================================= */

export const AIZEN = createTournamentCharacter({
  id: "bleach-aizen",
  verseId: "bleach",

  name: "Sosuke Aizen",

  aliases: [
    "Aizen",
    "Former Captain Aizen",
  ],

  tags: [
    "Shinigami",
    "Kyoka Suigetsu",
    "Hogyoku",
    "Illusion",
  ],

  seedRating: 100,

  description:
    "Master strategist and transcendent spiritual combatant whose Kyoka Suigetsu and Hogyoku create overwhelming tactical advantages.",

  forms: [

    createTournamentForm({
      id: "aizen-base",
      name: "Base Aizen",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 88,
        realPower: 88,
        hax: 91,
        speed: 91,
        durability: 84,
        intelligence: 100,
        attack: 90,
        defense: 87,
        stamina: 93,
        versatility: 100,
      },

      abilities: [
        "Kyoka Suigetsu",
        "Kidō mastery",
        "Genius intellect",
        "Extreme Reiatsu",
      ],

      weaknesses: [
        "No physical transformation in this state",
      ],
    }),

    createTournamentForm({
      id: "aizen-hogyoku",
      name: "Hogyoku Fusion",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 97,
        realPower: 97,
        hax: 97,
        speed: 96,
        durability: 97,
        intelligence: 100,
        attack: 99,
        defense: 96,
        stamina: 100,
        versatility: 100,
      },

      abilities: [
        "Hogyoku evolution",
        "Kyoka Suigetsu",
        "High-speed regeneration",
        "Transcendent Reiatsu",
      ],

      weaknesses: [
        "Extremely difficult to permanently stop",
      ],
    }),

    createTournamentForm({
      id: "aizen-monster",
      name: "Monster Aizen",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 100,
        speed: 99,
        durability: 100,
        intelligence: 100,
        attack: 100,
        defense: 100,
        stamina: 100,
        versatility: 100,
      },

      abilities: [
        "Hogyoku transformation",
        "Regeneration",
        "Massive spiritual pressure",
        "Kyoka Suigetsu",
      ],

      weaknesses: [
        "Overconfidence",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 03 — YHWACH
========================================================= */

export const YHWACH = createTournamentCharacter({
  id: "bleach-yhwach",
  verseId: "bleach",

  name: "Yhwach",

  aliases: [
    "Father of the Quincy",
    "The Almighty",
  ],

  tags: [
    "Quincy",
    "The Almighty",
    "Wandenreich",
    "Soul King",
  ],

  seedRating: 100,

  description:
    "Quincy emperor possessing The Almighty and access to overwhelming future-altering power.",

  forms: [

    createTournamentForm({
      id: "yhwach-base",
      name: "Base",
      rank: 1,
      tier: "legendary",
      isBase: true,

      stats: {
        relativePower: 96,
        realPower: 96,
        hax: 95,
        speed: 93,
        durability: 97,
        intelligence: 100,
        attack: 98,
        defense: 95,
        stamina: 100,
        versatility: 98,
      },

      abilities: [
        "Quincy Blut",
        "Spiritual weaponry",
        "Soul absorption",
        "High-level Reiatsu",
      ],

      weaknesses: [
        "Below Almighty-enhanced state",
      ],
    }),

    createTournamentForm({
      id: "yhwach-almighty",
      name: "The Almighty",
      rank: 2,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 100,
        speed: 100,
        durability: 100,
        intelligence: 100,
        attack: 100,
        defense: 100,
        stamina: 100,
        versatility: 100,
      },

      abilities: [
        "The Almighty",
        "Future perception",
        "Future alteration",
        "Power absorption",
      ],

      weaknesses: [
        "Requires access to Almighty state",
      ],
    }),

    createTournamentForm({
      id: "yhwach-soul-king-power",
      name: "Soul King Power State",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 100,
        speed: 100,
        durability: 100,
        intelligence: 100,
        attack: 100,
        defense: 100,
        stamina: 100,
        versatility: 100,
      },

      abilities: [
        "Soul King power",
        "The Almighty",
        "Massive spiritual authority",
        "Future manipulation",
      ],

      weaknesses: [
        "Only available under specific peak conditions",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 04 — URYU ISHIDA
========================================================= */

export const URYU = createTournamentCharacter({
  id: "bleach-uryu",
  verseId: "bleach",

  name: "Uryu Ishida",

  aliases: [
    "Uryu",
    "Quincy Archer",
  ],

  tags: [
    "Quincy",
    "Sternritter",
    "Antithesis",
  ],

  seedRating: 94,

  description:
    "Elite Quincy whose Antithesis and ranged combat create powerful reversal-based win conditions.",

  forms: [

    createTournamentForm({
      id: "uryu-base",
      name: "Quincy",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 62,
        realPower: 62,
        hax: 47,
        speed: 72,
        durability: 59,
        intelligence: 95,
        attack: 73,
        defense: 61,
        stamina: 73,
        versatility: 89,
      },

      abilities: [
        "Quincy bow",
        "Heilig Pfeil",
        "Quincy techniques",
      ],

      weaknesses: [
        "Lower physical durability",
      ],
    }),

    createTournamentForm({
      id: "uryu-letz-stil",
      name: "Letz Stil",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 76,
        realPower: 76,
        hax: 51,
        speed: 86,
        durability: 65,
        intelligence: 96,
        attack: 92,
        defense: 67,
        stamina: 45,
        versatility: 87,
      },

      abilities: [
        "Letz Stil",
        "Massive Quincy power",
        "Extreme ranged output",
      ],

      weaknesses: [
        "Temporary state",
      ],
    }),

    createTournamentForm({
      id: "uryu-antithesis",
      name: "Antithesis",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 94,
        realPower: 94,
        hax: 98,
        speed: 88,
        durability: 72,
        intelligence: 100,
        attack: 94,
        defense: 72,
        stamina: 86,
        versatility: 100,
      },

      abilities: [
        "Antithesis",
        "Quincy techniques",
        "Advanced ranged combat",
        "Reversal of conditions between targets",
      ],

      weaknesses: [
        "Requires appropriate conditions for maximum reversal value",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 05 — RUKIA KUCHIKI
========================================================= */

export const RUKIA = createTournamentCharacter({
  id: "bleach-rukia",
  verseId: "bleach",

  name: "Rukia Kuchiki",

  aliases: [
    "Rukia",
  ],

  tags: [
    "Shinigami",
    "ice",
    "Sode no Shirayuki",
  ],

  seedRating: 87,

  description:
    "Shinigami captain-class fighter whose ice Zanpakuto provides powerful temperature manipulation.",

  forms: [

    createTournamentForm({
      id: "rukia-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 62,
        realPower: 62,
        hax: 53,
        speed: 70,
        durability: 61,
        intelligence: 84,
        attack: 65,
        defense: 65,
        stamina: 72,
        versatility: 81,
      },

      abilities: [
        "Shunpo",
        "Kidō",
        "Zanpakuto combat",
      ],

      weaknesses: [
        "Lower output before Shikai",
      ],
    }),

    createTournamentForm({
      id: "rukia-shikai",
      name: "Sode no Shirayuki — Shikai",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 77,
        realPower: 77,
        hax: 78,
        speed: 81,
        durability: 67,
        intelligence: 88,
        attack: 83,
        defense: 70,
        stamina: 76,
        versatility: 93,
      },

      abilities: [
        "Temperature manipulation",
        "Ice attacks",
        "Three-step dance techniques",
      ],

      weaknesses: [
        "Extreme temperature control can affect Rukia herself",
      ],
    }),

    createTournamentForm({
      id: "rukia-bankai",
      name: "Hakka no Togame — Bankai",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 94,
        realPower: 94,
        hax: 96,
        speed: 84,
        durability: 80,
        intelligence: 90,
        attack: 98,
        defense: 82,
        stamina: 61,
        versatility: 94,
      },

      abilities: [
        "Absolute-zero style ice power",
        "Massive freezing field",
        "Bankai amplification",
      ],

      weaknesses: [
        "Extremely dangerous to the user",
        "Requires careful temperature control",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 06 — RENJI ABARAI
========================================================= */

export const RENJI = createTournamentCharacter({
  id: "bleach-renji",
  verseId: "bleach",

  name: "Renji Abarai",

  tags: [
    "Shinigami",
    "Zabimaru",
    "Bankai",
  ],

  seedRating: 87,

  description:
    "Lieutenant and later captain-class combatant possessing an increasingly powerful Zabimaru.",

  forms: [

    createTournamentForm({
      id: "renji-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 59,
        realPower: 59,
        hax: 29,
        speed: 66,
        durability: 77,
        intelligence: 69,
        attack: 73,
        defense: 72,
        stamina: 84,
        versatility: 70,
      },

      abilities: [
        "Zanpakuto combat",
        "Shunpo",
        "Kidō basics",
      ],

      weaknesses: [
        "Lower output before Shikai",
      ],
    }),

    createTournamentForm({
      id: "renji-shikai",
      name: "Zabimaru — Shikai",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 73,
        realPower: 73,
        hax: 38,
        speed: 76,
        durability: 82,
        intelligence: 71,
        attack: 86,
        defense: 78,
        stamina: 86,
        versatility: 79,
      },

      abilities: [
        "Zabimaru",
        "Extendable blade",
        "Ranged sword attacks",
      ],

      weaknesses: [
        "Battle style is relatively direct",
      ],
    }),

    createTournamentForm({
      id: "renji-true-bankai",
      name: "Soo Zabimaru — True Bankai",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 52,
        speed: 85,
        durability: 91,
        intelligence: 75,
        attack: 97,
        defense: 88,
        stamina: 91,
        versatility: 84,
      },

      abilities: [
        "True Bankai",
        "Enhanced Zabimaru",
        "High physical power",
      ],

      weaknesses: [
        "Primarily close-range combat",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 07 — BYAKUYA KUCHIKI
========================================================= */

export const BYAKUYA = createTournamentCharacter({
  id: "bleach-byakuya",
  verseId: "bleach",

  name: "Byakuya Kuchiki",

  aliases: [
    "Captain Kuchiki",
  ],

  tags: [
    "Captain",
    "Senbonzakura",
    "Bankai",
  ],

  seedRating: 95,

  description:
    "Captain of the Kuchiki Clan whose Senbonzakura provides immense ranged control and precision.",

  forms: [

    createTournamentForm({
      id: "byakuya-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 72,
        realPower: 72,
        hax: 49,
        speed: 79,
        durability: 74,
        intelligence: 94,
        attack: 78,
        defense: 77,
        stamina: 82,
        versatility: 90,
      },

      abilities: [
        "Shunpo",
        "Kidō mastery",
        "Zanpakuto mastery",
      ],

      weaknesses: [
        "Lower area control without Shikai",
      ],
    }),

    createTournamentForm({
      id: "byakuya-shikai",
      name: "Senbonzakura — Shikai",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 82,
        realPower: 82,
        hax: 73,
        speed: 90,
        durability: 78,
        intelligence: 95,
        attack: 88,
        defense: 81,
        stamina: 88,
        versatility: 95,
      },

      abilities: [
        "Senbonzakura",
        "Blade fragmentation",
        "Massive ranged control",
      ],

      weaknesses: [
        "Requires concentration for precision",
      ],
    }),

    createTournamentForm({
      id: "byakuya-bankai",
      name: "Senbonzakura Kageyoshi",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 95,
        realPower: 95,
        hax: 91,
        speed: 98,
        durability: 88,
        intelligence: 97,
        attack: 99,
        defense: 91,
        stamina: 94,
        versatility: 100,
      },

      abilities: [
        "Bankai",
        "Millions of spiritual blades",
        "Massive area control",
        "Senkei",
        "Gokei",
      ],

      weaknesses: [
        "High spiritual energy requirements",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 08 — KENPACHI ZARAKI
========================================================= */

export const KENPACHI = createTournamentCharacter({
  id: "bleach-kenpachi",
  verseId: "bleach",

  name: "Kenpachi Zaraki",

  aliases: [
    "Zaraki",
    "Kenpachi",
  ],

  tags: [
    "Captain",
    "Kenpachi",
    "raw power",
  ],

  seedRating: 98,

  description:
    "Captain whose immense spiritual pressure, physical strength and Bankai create overwhelming close-range power.",

  forms: [

    createTournamentForm({
      id: "kenpachi-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 88,
        realPower: 88,
        hax: 22,
        speed: 78,
        durability: 98,
        intelligence: 52,
        attack: 97,
        defense: 92,
        stamina: 100,
        versatility: 56,
      },

      abilities: [
        "Immense Reiatsu",
        "Extreme strength",
        "Swordsmanship",
        "Pain tolerance",
      ],

      weaknesses: [
        "Relatively low tactical complexity",
      ],
    }),

    createTournamentForm({
      id: "kenpachi-nozarashi",
      name: "Nozarashi — Shikai",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 96,
        realPower: 96,
        hax: 37,
        speed: 87,
        durability: 100,
        intelligence: 55,
        attack: 100,
        defense: 94,
        stamina: 98,
        versatility: 61,
      },

      abilities: [
        "Nozarashi",
        "Extreme cutting power",
        "Massive strength",
      ],

      weaknesses: [
        "Direct combat specialist",
      ],
    }),

    createTournamentForm({
      id: "kenpachi-bankai",
      name: "Bankai",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 42,
        speed: 96,
        durability: 100,
        intelligence: 45,
        attack: 100,
        defense: 97,
        stamina: 94,
        versatility: 63,
      },

      abilities: [
        "Bankai",
        "Extreme physical amplification",
        "Overwhelming cutting power",
      ],

      weaknesses: [
        "Massive strain on the body",
        "Loss of fine control",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 09 — TOSHIRO HITSUGAYA
========================================================= */

export const TOSHIRO = createTournamentCharacter({
  id: "bleach-toshiro",
  verseId: "bleach",

  name: "Toshiro Hitsugaya",

  tags: [
    "Captain",
    "ice",
    "Hyorinmaru",
  ],

  seedRating: 94,

  description:
    "Prodigy Captain wielding the strongest ice-type Zanpakuto in Soul Society.",

  forms: [

    createTournamentForm({
      id: "toshiro-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 68,
        realPower: 68,
        hax: 51,
        speed: 78,
        durability: 65,
        intelligence: 95,
        attack: 71,
        defense: 68,
        stamina: 78,
        versatility: 89,
      },

      abilities: [
        "Shunpo",
        "Kidō",
        "Hyorinmaru mastery",
      ],

      weaknesses: [
        "Young age limits prolonged mastery",
      ],
    }),

    createTournamentForm({
      id: "toshiro-shikai",
      name: "Hyorinmaru — Shikai",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 79,
        realPower: 79,
        hax: 80,
        speed: 83,
        durability: 69,
        intelligence: 97,
        attack: 87,
        defense: 76,
        stamina: 84,
        versatility: 96,
      },

      abilities: [
        "Ice manipulation",
        "Water manipulation",
        "Freezing techniques",
      ],

      weaknesses: [
        "Requires environmental setup for some techniques",
      ],
    }),

    createTournamentForm({
      id: "toshiro-bankai",
      name: "Daiguren Hyorinmaru",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 91,
        speed: 88,
        durability: 86,
        intelligence: 98,
        attack: 94,
        defense: 87,
        stamina: 84,
        versatility: 100,
      },

      abilities: [
        "Bankai",
        "Massive ice manipulation",
        "Freezing battlefield control",
      ],

      weaknesses: [
        "Requires sufficient maturation for maximum output",
      ],
    }),

    createTournamentForm({
      id: "toshiro-adult-bankai",
      name: "Mature Bankai",
      rank: 4,
      tier: "mythic",

      stats: {
        relativePower: 98,
        realPower: 98,
        hax: 99,
        speed: 95,
        durability: 93,
        intelligence: 99,
        attack: 100,
        defense: 94,
        stamina: 91,
        versatility: 100,
      },

      abilities: [
        "Complete Daiguren Hyorinmaru",
        "Absolute freezing",
        "Advanced battlefield control",
        "Temperature manipulation",
      ],

      weaknesses: [
        "Peak state is time-sensitive",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 10 — SHUNSUI KYORAKU
========================================================= */

export const SHUNSUI = createTournamentCharacter({
  id: "bleach-shunsui",
  verseId: "bleach",

  name: "Shunsui Kyoraku",

  tags: [
    "Captain",
    "Katen Kyokotsu",
    "game-based abilities",
  ],

  seedRating: 96,

  description:
    "Captain whose Zanpakuto turns combat into dangerous games and whose Bankai creates devastating staged effects.",

  forms: [

    createTournamentForm({
      id: "shunsui-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 72,
        realPower: 72,
        hax: 74,
        speed: 77,
        durability: 75,
        intelligence: 99,
        attack: 79,
        defense: 75,
        stamina: 88,
        versatility: 100,
      },

      abilities: [
        "Shunpo",
        "Kidō",
        "Swordsmanship",
        "Tactical genius",
      ],

      weaknesses: [
        "Often reluctant to fight seriously",
      ],
    }),

    createTournamentForm({
      id: "shunsui-shikai",
      name: "Katen Kyokotsu",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 88,
        realPower: 88,
        hax: 94,
        speed: 84,
        durability: 80,
        intelligence: 100,
        attack: 91,
        defense: 81,
        stamina: 90,
        versatility: 100,
      },

      abilities: [
        "Game-based reality effects",
        "Shadow manipulation",
        "Color and rule mechanics",
      ],

      weaknesses: [
        "Rules can affect Shunsui as well",
      ],
    }),

    createTournamentForm({
      id: "shunsui-bankai",
      name: "Katen Kyokotsu: Karamatsu Shinju",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 97,
        realPower: 97,
        hax: 100,
        speed: 87,
        durability: 88,
        intelligence: 100,
        attack: 100,
        defense: 91,
        stamina: 72,
        versatility: 100,
      },

      abilities: [
        "Bankai",
        "Layered stage effects",
        "Life-draining tragedy mechanics",
        "Massive area influence",
      ],

      weaknesses: [
        "Difficult to use safely around allies",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 11 — KISUKE URAHARA
========================================================= */

export const URAHARA = createTournamentCharacter({
  id: "bleach-urahara",
  verseId: "bleach",

  name: "Kisuke Urahara",

  aliases: [
    "Former Captain Urahara",
  ],

  tags: [
    "Shinigami",
    "scientist",
    "Benihime",
    "Bankai",
  ],

  seedRating: 97,

  description:
    "Former Captain and genius inventor whose versatility, Kidō and adaptive Bankai make him one of the best tactical fighters.",

  forms: [

    createTournamentForm({
      id: "urahara-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 72,
        realPower: 72,
        hax: 77,
        speed: 84,
        durability: 68,
        intelligence: 100,
        attack: 72,
        defense: 74,
        stamina: 81,
        versatility: 100,
      },

      abilities: [
        "Kidō mastery",
        "Scientific genius",
        "Swordsmanship",
        "Benihime",
      ],

      weaknesses: [
        "Lower raw physical output than power specialists",
      ],
    }),

    createTournamentForm({
      id: "urahara-shikai",
      name: "Benihime",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 83,
        realPower: 83,
        hax: 86,
        speed: 88,
        durability: 72,
        intelligence: 100,
        attack: 88,
        defense: 81,
        stamina: 86,
        versatility: 100,
      },

      abilities: [
        "Energy shields",
        "Blood-red attacks",
        "Kidō integration",
      ],

      weaknesses: [
        "Complex techniques require concentration",
      ],
    }),

    createTournamentForm({
      id: "urahara-bankai",
      name: "Kannonbiraki Benihime Aratame",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 96,
        realPower: 96,
        hax: 100,
        speed: 93,
        durability: 85,
        intelligence: 100,
        attack: 97,
        defense: 94,
        stamina: 86,
        versatility: 100,
      },

      abilities: [
        "Structural reconstruction",
        "Regeneration",
        "Body modification",
        "Bankai",
      ],

      weaknesses: [
        "Requires tactical setup",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 12 — YORUICHI SHIHOIN
========================================================= */

export const YORUICHI = createTournamentCharacter({
  id: "bleach-yoruichi",
  verseId: "bleach",

  name: "Yoruichi Shihoin",

  aliases: [
    "Flash Goddess",
  ],

  tags: [
    "Shunko",
    "Hoho",
    "Former Captain",
  ],

  seedRating: 96,

  description:
    "Former Captain and master of hand-to-hand combat and high-speed movement.",

  forms: [

    createTournamentForm({
      id: "yoruichi-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 74,
        realPower: 74,
        hax: 39,
        speed: 99,
        durability: 71,
        intelligence: 93,
        attack: 82,
        defense: 73,
        stamina: 93,
        versatility: 92,
      },

      abilities: [
        "Mastered Shunpo",
        "Hand-to-hand combat",
        "Flash Step",
      ],

      weaknesses: [
        "Limited ranged attacks in base",
      ],
    }),

    createTournamentForm({
      id: "yoruichi-shunko",
      name: "Shunko",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 65,
        speed: 100,
        durability: 87,
        intelligence: 94,
        attack: 96,
        defense: 86,
        stamina: 89,
        versatility: 97,
      },

      abilities: [
        "Shunko",
        "Lightning manipulation",
        "High-speed combat",
      ],

      weaknesses: [
        "Requires continuous high-output combat",
      ],
    }),

    createTournamentForm({
      id: "yoruichi-raijin-senkei",
      name: "Raijin Senkei",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 98,
        realPower: 98,
        hax: 90,
        speed: 100,
        durability: 93,
        intelligence: 95,
        attack: 100,
        defense: 91,
        stamina: 83,
        versatility: 98,
      },

      abilities: [
        "Thunder God transformation",
        "Massive electrical output",
        "Extreme speed",
      ],

      weaknesses: [
        "Shorter peak duration",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 13 — GENRYUSAI YAMAMOTO
========================================================= */

export const YAMAMOTO = createTournamentCharacter({
  id: "bleach-yamamoto",
  verseId: "bleach",

  name: "Genryusai Shigekuni Yamamoto",

  aliases: [
    "Captain-Commander",
    "Yamamoto-Genryusai",
  ],

  tags: [
    "Captain-Commander",
    "fire",
    "Ryujin Jakka",
  ],

  seedRating: 100,

  description:
    "Legendary Captain-Commander wielding one of the most destructive Zanpakuto in Soul Society.",

  forms: [

    createTournamentForm({
      id: "yamamoto-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 83,
        realPower: 83,
        hax: 57,
        speed: 86,
        durability: 88,
        intelligence: 97,
        attack: 91,
        defense: 88,
        stamina: 95,
        versatility: 91,
      },

      abilities: [
        "Extreme Reiatsu",
        "Hakuda",
        "Kidō",
        "Zanpakuto mastery",
      ],

      weaknesses: [
        "Limited by age only compared with younger fighters",
      ],
    }),

    createTournamentForm({
      id: "yamamoto-shikai",
      name: "Ryujin Jakka",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 96,
        realPower: 96,
        hax: 90,
        speed: 93,
        durability: 94,
        intelligence: 98,
        attack: 100,
        defense: 94,
        stamina: 96,
        versatility: 98,
      },

      abilities: [
        "Extreme fire manipulation",
        "Incineration",
        "Massive area destruction",
      ],

      weaknesses: [
        "Enormous spiritual heat",
      ],
    }),

    createTournamentForm({
      id: "yamamoto-bankai",
      name: "Zanka no Tachi",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 100,
        speed: 98,
        durability: 100,
        intelligence: 100,
        attack: 100,
        defense: 100,
        stamina: 82,
        versatility: 100,
      },

      abilities: [
        "Zanka no Tachi",
        "Extreme heat concentration",
        "Corpse summoning",
        "East/West/North/South techniques",
      ],

      weaknesses: [
        "Extreme environmental danger",
        "Cannot safely maintain peak output indefinitely",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 14 — MAYURI KUROTSUCHI
========================================================= */

export const MAYURI = createTournamentCharacter({
  id: "bleach-mayuri",
  verseId: "bleach",

  name: "Mayuri Kurotsuchi",

  aliases: [
    "Captain Kurotsuchi",
  ],

  tags: [
    "Captain",
    "scientist",
    "experiments",
  ],

  seedRating: 89,

  description:
    "Mad scientist Captain whose poisons, modifications and adaptive technology make him an extreme tactical specialist.",

  forms: [

    createTournamentForm({
      id: "mayuri-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 59,
        realPower: 59,
        hax: 80,
        speed: 63,
        durability: 72,
        intelligence: 100,
        attack: 66,
        defense: 70,
        stamina: 81,
        versatility: 100,
      },

      abilities: [
        "Poison science",
        "Body modifications",
        "Hidden equipment",
        "Scientific analysis",
      ],

      weaknesses: [
        "Lower direct combat output",
      ],
    }),

    createTournamentForm({
      id: "mayuri-bankai",
      name: "Konjiki Ashisogi Jizo",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 79,
        realPower: 79,
        hax: 93,
        speed: 64,
        durability: 83,
        intelligence: 100,
        attack: 87,
        defense: 81,
        stamina: 85,
        versatility: 100,
      },

      abilities: [
        "Poison-based Bankai",
        "Biological experimentation",
        "Adaptive modifications",
      ],

      weaknesses: [
        "Large setup requirement",
      ],
    }),

    createTournamentForm({
      id: "mayuri-modified-bankai",
      name: "Modified Bankai",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 90,
        realPower: 90,
        hax: 98,
        speed: 68,
        durability: 89,
        intelligence: 100,
        attack: 94,
        defense: 88,
        stamina: 88,
        versatility: 100,
      },

      abilities: [
        "Adaptive Bankai",
        "Biological countermeasures",
        "Instant experimentation",
      ],

      weaknesses: [
        "Requires preparation knowledge",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 15 — ISSHIN KUROSAKI
========================================================= */

export const ISSHIN = createTournamentCharacter({
  id: "bleach-isshin",
  verseId: "bleach",

  name: "Isshin Kurosaki",

  aliases: [
    "Isshin Shiba",
  ],

  tags: [
    "Shinigami",
    "Former Captain",
    "fire",
  ],

  seedRating: 89,

  description:
    "Former Captain and Ichigo's father with powerful Shinigami abilities and fire-based Zanpakuto attacks.",

  forms: [

    createTournamentForm({
      id: "isshin-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 69,
        realPower: 69,
        hax: 31,
        speed: 74,
        durability: 76,
        intelligence: 85,
        attack: 78,
        defense: 76,
        stamina: 86,
        versatility: 71,
      },

      abilities: [
        "Shunpo",
        "Hakuda",
        "Zanpakuto combat",
      ],

      weaknesses: [
        "Below highest captain-tier peaks",
      ],
    }),

    createTournamentForm({
      id: "isshin-engetsu",
      name: "Engetsu",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 87,
        realPower: 87,
        hax: 46,
        speed: 84,
        durability: 84,
        intelligence: 88,
        attack: 94,
        defense: 83,
        stamina: 89,
        versatility: 81,
      },

      abilities: [
        "Engetsu",
        "Fire-based Getsuga",
        "High-level Reiatsu",
      ],

      weaknesses: [
        "Limited demonstrated form variety",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 16 — GRIMMJOW
========================================================= */

export const GRIMMJOW = createTournamentCharacter({
  id: "bleach-grimmjow",
  verseId: "bleach",

  name: "Grimmjow Jaegerjaquez",

  aliases: [
    "Sixth Espada",
  ],

  tags: [
    "Arrancar",
    "Espada",
    "Pantera",
  ],

  seedRating: 90,

  description:
    "Aggressive Espada with exceptional speed, physical power and Panther-based Resurreccion.",

  forms: [

    createTournamentForm({
      id: "grimmjow-base",
      name: "Base Arrancar",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 69,
        realPower: 69,
        hax: 28,
        speed: 85,
        durability: 79,
        intelligence: 67,
        attack: 82,
        defense: 73,
        stamina: 91,
        versatility: 65,
      },

      abilities: [
        "Sonido",
        "Hierro",
        "Cero",
        "High-speed combat",
      ],

      weaknesses: [
        "Reckless personality",
      ],
    }),

    createTournamentForm({
      id: "grimmjow-pantera",
      name: "Pantera",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 88,
        realPower: 88,
        hax: 36,
        speed: 96,
        durability: 91,
        intelligence: 68,
        attack: 96,
        defense: 86,
        stamina: 94,
        versatility: 73,
      },

      abilities: [
        "Pantera Resurreccion",
        "Desgarron",
        "Extreme speed",
        "Cero",
      ],

      weaknesses: [
        "Aggressive fighting style",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 17 — ULQUIORRA
========================================================= */

export const ULQUIORRA = createTournamentCharacter({
  id: "bleach-ulquiorra",
  verseId: "bleach",

  name: "Ulquiorra Cifer",

  aliases: [
    "Fourth Espada",
  ],

  tags: [
    "Arrancar",
    "Espada",
    "regeneration",
  ],

  seedRating: 95,

  description:
    "Espada possessing high-speed regeneration, exceptional ranged power and a rare second-stage Resurreccion.",

  forms: [

    createTournamentForm({
      id: "ulquiorra-base",
      name: "Base Arrancar",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 78,
        realPower: 78,
        hax: 44,
        speed: 89,
        durability: 86,
        intelligence: 90,
        attack: 91,
        defense: 84,
        stamina: 94,
        versatility: 83,
      },

      abilities: [
        "Sonido",
        "Cero",
        "High-speed regeneration",
        "Hierro",
      ],

      weaknesses: [
        "Below Segunda Etapa",
      ],
    }),

    createTournamentForm({
      id: "ulquiorra-murcielago",
      name: "Murcielago",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 93,
        realPower: 93,
        hax: 57,
        speed: 96,
        durability: 94,
        intelligence: 91,
        attack: 99,
        defense: 92,
        stamina: 97,
        versatility: 89,
      },

      abilities: [
        "Resurreccion",
        "Lanza del Relampago",
        "Cero Oscuras",
        "Regeneration",
      ],

      weaknesses: [
        "No direct major weakness other than scaling",
      ],
    }),

    createTournamentForm({
      id: "ulquiorra-segunda-etapa",
      name: "Segunda Etapa",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 99,
        realPower: 99,
        hax: 74,
        speed: 100,
        durability: 100,
        intelligence: 92,
        attack: 100,
        defense: 97,
        stamina: 100,
        versatility: 96,
      },

      abilities: [
        "Segunda Etapa",
        "Extreme regeneration",
        "Lanza del Relampago",
        "Cero Oscuras",
        "Massive spiritual pressure",
      ],

      weaknesses: [
        "Highly specialized transformation",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 18 — COYOTE STARRK
========================================================= */

export const STARRK = createTournamentCharacter({
  id: "bleach-starrk",
  verseId: "bleach",

  name: "Coyote Starrk",

  aliases: [
    "Primera Espada",
  ],

  tags: [
    "Espada",
    "Cero",
    "wolves",
  ],

  seedRating: 92,

  description:
    "Primera Espada with exceptional ranged output, spiritual guns and wolf-based techniques.",

  forms: [

    createTournamentForm({
      id: "starrk-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 80,
        realPower: 80,
        hax: 40,
        speed: 82,
        durability: 80,
        intelligence: 89,
        attack: 91,
        defense: 78,
        stamina: 92,
        versatility: 92,
      },

      abilities: [
        "Cero",
        "Sonido",
        "High spiritual power",
      ],

      weaknesses: [
        "Relatively low motivation",
      ],
    }),

    createTournamentForm({
      id: "starrk-los-lobos",
      name: "Los Lobos",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 94,
        realPower: 94,
        hax: 67,
        speed: 93,
        durability: 88,
        intelligence: 91,
        attack: 99,
        defense: 84,
        stamina: 94,
        versatility: 99,
      },

      abilities: [
        "Dual spiritual guns",
        "Cero Metralleta",
        "Los Lobos",
        "Explosive wolves",
      ],

      weaknesses: [
        "Prefers relaxed combat style",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 19 — TIER HARRIBEL
========================================================= */

export const HARRIBEL = createTournamentCharacter({
  id: "bleach-harribel",
  verseId: "bleach",

  name: "Tier Harribel",

  aliases: [
    "Tres Espada",
  ],

  tags: [
    "Espada",
    "water",
    "Arrancar",
  ],

  seedRating: 89,

  description:
    "Espada with powerful water-based techniques and high physical durability.",

  forms: [

    createTournamentForm({
      id: "harribel-base",
      name: "Base Arrancar",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 70,
        realPower: 70,
        hax: 52,
        speed: 72,
        durability: 84,
        intelligence: 84,
        attack: 80,
        defense: 84,
        stamina: 91,
        versatility: 77,
      },

      abilities: [
        "Cero",
        "Sonido",
        "Hierro",
      ],

      weaknesses: [
        "Below Resurreccion",
      ],
    }),

    createTournamentForm({
      id: "harribel-tiburon",
      name: "Tiburón",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 88,
        realPower: 88,
        hax: 76,
        speed: 81,
        durability: 94,
        intelligence: 87,
        attack: 95,
        defense: 92,
        stamina: 96,
        versatility: 91,
      },

      abilities: [
        "Water manipulation",
        "Resurreccion",
        "Cascada",
        "High-density water attacks",
      ],

      weaknesses: [
        "Water techniques benefit from available moisture",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 20 — GIN ICHIMARU
========================================================= */

export const GIN = createTournamentCharacter({
  id: "bleach-gin",
  verseId: "bleach",

  name: "Gin Ichimaru",

  aliases: [
    "Captain Gin Ichimaru",
  ],

  tags: [
    "Shinigami",
    "Captain",
    "speed",
    "poison",
  ],

  seedRating: 93,

  description:
    "Former Captain whose deceptively fast Zanpakuto and hidden lethal mechanism make him extremely dangerous.",

  forms: [

    createTournamentForm({
      id: "gin-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 68,
        realPower: 68,
        hax: 52,
        speed: 96,
        durability: 64,
        intelligence: 97,
        attack: 78,
        defense: 70,
        stamina: 79,
        versatility: 84,
      },

      abilities: [
        "Shunpo",
        "Swordsmanship",
        "Extreme speed",
      ],

      weaknesses: [
        "Lower durability",
      ],
    }),

    createTournamentForm({
      id: "gin-shikai",
      name: "Shinsō",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 80,
        realPower: 80,
        hax: 79,
        speed: 100,
        durability: 67,
        intelligence: 98,
        attack: 94,
        defense: 73,
        stamina: 81,
        versatility: 92,
      },

      abilities: [
        "Extreme blade extension",
        "Extreme speed",
        "Precision assassination",
      ],

      weaknesses: [
        "Requires precise timing",
      ],
    }),

    createTournamentForm({
      id: "gin-bankai",
      name: "Kamishini no Yari",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 94,
        realPower: 94,
        hax: 95,
        speed: 100,
        durability: 72,
        intelligence: 99,
        attack: 100,
        defense: 77,
        stamina: 87,
        versatility: 95,
      },

      abilities: [
        "Extreme extension speed",
        "Poison mechanism",
        "Assassination technique",
      ],

      weaknesses: [
        "Low defensive margin",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 21 — SHINJI HIRAKO
========================================================= */

export const SHINJI = createTournamentCharacter({
  id: "bleach-shinji",
  verseId: "bleach",

  name: "Shinji Hirako",

  tags: [
    "Visored",
    "Captain",
    "Sakanade",
  ],

  seedRating: 88,

  description:
    "Visored Captain whose reversal-based Zanpakuto and Bankai create severe perception and battlefield confusion.",

  forms: [

    createTournamentForm({
      id: "shinji-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 65,
        realPower: 65,
        hax: 58,
        speed: 78,
        durability: 70,
        intelligence: 90,
        attack: 74,
        defense: 72,
        stamina: 82,
        versatility: 90,
      },

      abilities: [
        "Shunpo",
        "Zanpakuto",
        "Hollow mask",
      ],

      weaknesses: [
        "Limited direct raw power",
      ],
    }),

    createTournamentForm({
      id: "shinji-sakanade",
      name: "Sakanade",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 82,
        realPower: 82,
        hax: 93,
        speed: 85,
        durability: 74,
        intelligence: 95,
        attack: 87,
        defense: 77,
        stamina: 86,
        versatility: 96,
      },

      abilities: [
        "Sense reversal",
        "Perception manipulation",
        "Sakanade",
      ],

      weaknesses: [
        "Can be countered by non-visual sensory methods",
      ],
    }),

    createTournamentForm({
      id: "shinji-bankai",
      name: "Sakashima Yokoshima Happofusagari",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 100,
        speed: 86,
        durability: 82,
        intelligence: 96,
        attack: 93,
        defense: 83,
        stamina: 79,
        versatility: 100,
      },

      abilities: [
        "Mass perception manipulation",
        "Enemy allegiance reversal",
        "Bankai",
      ],

      weaknesses: [
        "Dangerous to use around allies",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 22 — SOI FON
========================================================= */

export const SOI_FON = createTournamentCharacter({
  id: "bleach-soifon",
  verseId: "bleach",

  name: "Soi Fon",

  aliases: [
    "Captain Soi Fon",
  ],

  tags: [
    "Captain",
    "assassin",
    "Shunko",
  ],

  seedRating: 87,

  description:
    "Stealth-force Captain specializing in assassination, speed and poison-based Zanpakuto effects.",

  forms: [

    createTournamentForm({
      id: "soifon-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 62,
        realPower: 62,
        hax: 46,
        speed: 97,
        durability: 61,
        intelligence: 92,
        attack: 76,
        defense: 64,
        stamina: 80,
        versatility: 82,
      },

      abilities: [
        "Stealth Force",
        "Extreme Shunpo",
        "Hakuda",
      ],

      weaknesses: [
        "Lower raw durability",
      ],
    }),

    createTournamentForm({
      id: "soifon-shikai",
      name: "Suzumebachi",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 75,
        realPower: 75,
        hax: 87,
        speed: 100,
        durability: 64,
        intelligence: 94,
        attack: 88,
        defense: 67,
        stamina: 82,
        versatility: 91,
      },

      abilities: [
        "Two-hit kill technique",
        "Shunpo",
        "Assassination",
      ],

      weaknesses: [
        "Requires repeated contact",
      ],
    }),

    createTournamentForm({
      id: "soifon-bankai",
      name: "Jakuhō Raikōben",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 63,
        speed: 85,
        durability: 70,
        intelligence: 95,
        attack: 99,
        defense: 71,
        stamina: 68,
        versatility: 79,
      },

      abilities: [
        "Massive missile attack",
        "Long-range explosive power",
        "Bankai",
      ],

      weaknesses: [
        "Reduced stealth",
        "Heavy weapon limits agility",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 23 — JUGRAM HASCHWALTH
========================================================= */

export const JUGRAM = createTournamentCharacter({
  id: "bleach-jugram",
  verseId: "bleach",

  name: "Jugram Haschwalth",

  aliases: [
    "Grandmaster",
  ],

  tags: [
    "Quincy",
    "Sternritter",
    "The Balance",
  ],

  seedRating: 97,

  description:
    "Yhwach's right-hand man whose Balance can redirect misfortune and damage.",

  forms: [

    createTournamentForm({
      id: "jugram-base",
      name: "Base",
      rank: 1,
      tier: "legendary",
      isBase: true,

      stats: {
        relativePower: 90,
        realPower: 90,
        hax: 88,
        speed: 84,
        durability: 89,
        intelligence: 98,
        attack: 91,
        defense: 88,
        stamina: 94,
        versatility: 95,
      },

      abilities: [
        "Quincy powers",
        "The Balance",
        "Shield manipulation",
      ],

      weaknesses: [
        "Some effects depend on incoming fortune/misfortune",
      ],
    }),

    createTournamentForm({
      id: "jugram-balance",
      name: "The Balance",
      rank: 2,
      tier: "mythic",

      stats: {
        relativePower: 98,
        realPower: 98,
        hax: 100,
        speed: 92,
        durability: 97,
        intelligence: 100,
        attack: 99,
        defense: 100,
        stamina: 100,
        versatility: 100,
      },

      abilities: [
        "The Balance",
        "Damage redistribution",
        "Fortune reversal",
        "Quincy defense",
      ],

      weaknesses: [
        "Rule-based ability interactions",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 24 — ASKIN NAKK LE VAAR
========================================================= */

export const ASKIN = createTournamentCharacter({
  id: "bleach-askin",
  verseId: "bleach",

  name: "Askin Nakk Le Vaar",

  aliases: [
    "The Deathdealing",
  ],

  tags: [
    "Quincy",
    "Sternritter",
    "Deathdealing",
  ],

  seedRating: 94,

  description:
    "Quincy whose Deathdealing manipulates lethal doses of substances and spiritual energy.",

  forms: [

    createTournamentForm({
      id: "askin-base",
      name: "Base",
      rank: 1,
      tier: "legendary",
      isBase: true,

      stats: {
        relativePower: 82,
        realPower: 82,
        hax: 92,
        speed: 79,
        durability: 73,
        intelligence: 98,
        attack: 76,
        defense: 72,
        stamina: 83,
        versatility: 97,
      },

      abilities: [
        "Deathdealing",
        "Reishi manipulation",
        "Lethal dose manipulation",
      ],

      weaknesses: [
        "Requires analysis of target properties",
      ],
    }),

    createTournamentForm({
      id: "askin-vollstandig",
      name: "Vollstandig",
      rank: 2,
      tier: "mythic",

      stats: {
        relativePower: 94,
        realPower: 94,
        hax: 100,
        speed: 91,
        durability: 81,
        intelligence: 100,
        attack: 92,
        defense: 83,
        stamina: 91,
        versatility: 100,
      },

      abilities: [
        "Vollstandig",
        "Deathdealing",
        "Gift Ball Deluxe",
        "Area manipulation",
      ],

      weaknesses: [
        "Complex ability interactions",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 25 — GERARD VALKYRIE
========================================================= */

export const GERARD = createTournamentCharacter({
  id: "bleach-gerard",
  verseId: "bleach",

  name: "Gerard Valkyrie",

  aliases: [
    "The Miracle",
  ],

  tags: [
    "Quincy",
    "Sternritter",
    "The Miracle",
  ],

  seedRating: 99,

  description:
    "Elite Sternritter whose Miracle transforms improbable situations into overwhelming power and regeneration.",

  forms: [

    createTournamentForm({
      id: "gerard-base",
      name: "Base",
      rank: 1,
      tier: "legendary",
      isBase: true,

      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 94,
        speed: 79,
        durability: 100,
        intelligence: 73,
        attack: 93,
        defense: 100,
        stamina: 100,
        versatility: 90,
      },

      abilities: [
        "The Miracle",
        "Extreme durability",
        "Reiatsu manipulation",
      ],

      weaknesses: [
        "Highly tied to Miracle mechanics",
      ],
    }),

    createTournamentForm({
      id: "gerard-miracle",
      name: "The Miracle",
      rank: 2,
      tier: "mythic",

      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 100,
        speed: 91,
        durability: 100,
        intelligence: 77,
        attack: 100,
        defense: 100,
        stamina: 100,
        versatility: 100,
      },

      abilities: [
        "Miracle amplification",
        "Massive regeneration",
        "Size growth",
        "Extreme durability",
      ],

      weaknesses: [
        "Power is linked to miracle-based conditions",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 26 — LILLE BARRO
========================================================= */

export const LILLE = createTournamentCharacter({
  id: "bleach-lille",
  verseId: "bleach",

  name: "Lille Barro",

  aliases: [
    "The X-Axis",
  ],

  tags: [
    "Quincy",
    "Sternritter",
    "X-Axis",
  ],

  seedRating: 98,

  description:
    "Elite Quincy sniper whose X-Axis ignores conventional durability and creates devastating ranged attacks.",

  forms: [

    createTournamentForm({
      id: "lille-base",
      name: "Base",
      rank: 1,
      tier: "legendary",
      isBase: true,

      stats: {
        relativePower: 90,
        realPower: 90,
        hax: 94,
        speed: 87,
        durability: 78,
        intelligence: 96,
        attack: 97,
        defense: 76,
        stamina: 91,
        versatility: 92,
      },

      abilities: [
        "X-Axis",
        "Quincy sniper attacks",
        "Phasing",
      ],

      weaknesses: [
        "Primarily ranged specialization",
      ],
    }),

    createTournamentForm({
      id: "lille-vollstandig",
      name: "Vollstandig",
      rank: 2,
      tier: "mythic",

      stats: {
        relativePower: 99,
        realPower: 99,
        hax: 100,
        speed: 94,
        durability: 95,
        intelligence: 100,
        attack: 100,
        defense: 94,
        stamina: 98,
        versatility: 100,
      },

      abilities: [
        "Enhanced X-Axis",
        "Phasing",
        "Multiple-eye attacks",
        "Extreme ranged precision",
      ],

      weaknesses: [
        "Still specializes in ranged combat",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 27 — RETSU UNOHANA
========================================================= */

export const UNOHANA = createTournamentCharacter({
  id: "bleach-unohana",
  verseId: "bleach",

  name: "Retsu Unohana",

  aliases: [
    "Yachiru Unohana",
    "First Kenpachi",
  ],

  tags: [
    "Captain",
    "healer",
    "Kenpachi",
  ],

  seedRating: 93,

  description:
    "Former Kenpachi and master healer whose true combat identity reveals extreme swordsmanship and killing ability.",

  forms: [

    createTournamentForm({
      id: "unohana-retsu",
      name: "Retsu Unohana",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 72,
        realPower: 72,
        hax: 45,
        speed: 76,
        durability: 79,
        intelligence: 97,
        attack: 83,
        defense: 84,
        stamina: 92,
        versatility: 91,
      },

      abilities: [
        "Healing",
        "Kidō",
        "Master swordsmanship",
      ],

      weaknesses: [
        "Suppresses her true combat instincts",
      ],
    }),

    createTournamentForm({
      id: "unohana-yachiru",
      name: "Yachiru Unohana",
      rank: 2,
      tier: "legendary",

      stats: {
        relativePower: 94,
        realPower: 94,
        hax: 53,
        speed: 94,
        durability: 96,
        intelligence: 99,
        attack: 100,
        defense: 94,
        stamina: 99,
        versatility: 92,
      },

      abilities: [
        "First Kenpachi combat ability",
        "Master swordsmanship",
        "Extreme healing",
      ],

      weaknesses: [
        "Focused on close combat",
      ],
    }),

    createTournamentForm({
      id: "unohana-bankai",
      name: "Minazuki — Bankai",
      rank: 3,
      tier: "mythic",

      stats: {
        relativePower: 99,
        realPower: 99,
        hax: 74,
        speed: 96,
        durability: 100,
        intelligence: 100,
        attack: 100,
        defense: 98,
        stamina: 100,
        versatility: 94,
      },

      abilities: [
        "Minazuki",
        "Acidic blood-like Bankai effects",
        "Extreme regeneration",
        "First Kenpachi swordsmanship",
      ],

      weaknesses: [
        "Close-range specialization",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 28 — CHAD
========================================================= */

export const CHAD = createTournamentCharacter({
  id: "bleach-chad",
  verseId: "bleach",

  name: "Sado Yasutora",

  aliases: [
    "Chad",
  ],

  tags: [
    "Fullbringer",
    "Bringer Light",
    "close combat",
  ],

  seedRating: 79,

  description:
    "Fullbringer with immense physical strength and armored manifestation abilities.",

  forms: [

    createTournamentForm({
      id: "chad-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 58,
        realPower: 58,
        hax: 36,
        speed: 62,
        durability: 78,
        intelligence: 63,
        attack: 72,
        defense: 75,
        stamina: 87,
        versatility: 57,
      },

      abilities: [
        "Bringer Light",
        "Enhanced strength",
        "Fullbring",
      ],

      weaknesses: [
        "Limited high-tier hax",
      ],
    }),

    createTournamentForm({
      id: "chad-brazo-izquierda",
      name: "Brazo Izquierda del Diablo",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 71,
        realPower: 71,
        hax: 44,
        speed: 67,
        durability: 88,
        intelligence: 66,
        attack: 87,
        defense: 83,
        stamina: 90,
        versatility: 62,
      },

      abilities: [
        "Armored Fullbring",
        "Heavy close-range attacks",
      ],

      weaknesses: [
        "Close-range specialist",
      ],
    }),

    createTournamentForm({
      id: "chad-arm-both",
      name: "Full Fullbring State",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 84,
        realPower: 84,
        hax: 52,
        speed: 71,
        durability: 94,
        intelligence: 69,
        attack: 94,
        defense: 91,
        stamina: 95,
        versatility: 68,
      },

      abilities: [
        "Fullbring enhancement",
        "Armored limbs",
        "Extreme physical strength",
      ],

      weaknesses: [
        "Limited ranged utility",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 29 — HACHIGEN USHODA
========================================================= */

export const HACHIGEN = createTournamentCharacter({
  id: "bleach-hachigen",
  verseId: "bleach",

  name: "Hachigen Ushoda",

  aliases: [
    "Hachi",
  ],

  tags: [
    "Visored",
    "barrier",
    "Kidō",
  ],

  seedRating: 79,

  description:
    "Visored barrier specialist with exceptional defensive Kidō and spatial containment techniques.",

  forms: [

    createTournamentForm({
      id: "hachigen-base",
      name: "Base",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 53,
        realPower: 53,
        hax: 79,
        speed: 52,
        durability: 68,
        intelligence: 96,
        attack: 48,
        defense: 95,
        stamina: 81,
        versatility: 93,
      },

      abilities: [
        "Barrier Kidō",
        "Spatial containment",
        "Healing techniques",
      ],

      weaknesses: [
        "Low direct offensive power",
      ],
    }),

  ],
});


/* =========================================================
   CHARACTER 30 — NELLIEL
========================================================= */

export const NEL = createTournamentCharacter({
  id: "bleach-nelliel",
  verseId: "bleach",

  name: "Nelliel Tu Odelschwanck",

  aliases: [
    "Nel",
    "Former Espada",
  ],

  tags: [
    "Arrancar",
    "Espada",
    "lance",
  ],

  seedRating: 86,

  description:
    "Former Espada whose mature Arrancar state and Resurreccion provide strong offensive and defensive options.",

  forms: [

    createTournamentForm({
      id: "nelliel-child",
      name: "Child Form",
      rank: 1,
      tier: "standard",
      isBase: true,

      stats: {
        relativePower: 42,
        realPower: 42,
        hax: 28,
        speed: 48,
        durability: 47,
        intelligence: 81,
        attack: 39,
        defense: 43,
        stamina: 51,
        versatility: 53,
      },

      abilities: [
        "Spiritual sensing",
        "High-speed movement",
      ],

      weaknesses: [
        "Suppressed physical ability",
      ],
    }),

    createTournamentForm({
      id: "nelliel-adult",
      name: "Adult Form",
      rank: 2,
      tier: "advanced",

      stats: {
        relativePower: 72,
        realPower: 72,
        hax: 35,
        speed: 82,
        durability: 83,
        intelligence: 88,
        attack: 86,
        defense: 80,
        stamina: 91,
        versatility: 72,
      },

      abilities: [
        "Spear combat",
        "Cero",
        "Sonido",
      ],

      weaknesses: [
        "Limited duration after reverting from child form",
      ],
    }),

    createTournamentForm({
      id: "nelliel-resurreccion",
      name: "Gamuza",
      rank: 3,
      tier: "legendary",

      stats: {
        relativePower: 89,
        realPower: 89,
        hax: 51,
        speed: 90,
        durability: 92,
        intelligence: 91,
        attack: 96,
        defense: 89,
        stamina: 94,
        versatility: 81,
      },

      abilities: [
        "Gamuza",
        "Cero Doble",
        "Lance combat",
        "High-speed mobility",
      ],

      weaknesses: [
        "Requires mature form access",
      ],
    }),

  ],
});


/* =========================================================
   FINAL DATABASE EXPORT
========================================================= */

export const BLEACH_CHARACTERS = [
  ICHIGO,
  AIZEN,
  YHWACH,
  URYU,
  RUKIA,
  RENJI,
  BYAKUYA,
  KENPACHI,
  TOSHIRO,
  SHUNSUI,
  URAHARA,
  YORUICHI,
  YAMAMOTO,
  MAYURI,
  ISSHIN,
  GRIMMJOW,
  ULQUIORRA,
  STARRK,
  HARRIBEL,
  GIN,
  SHINJI,
  SOI_FON,
  JUGRAM,
  ASKIN,
  GERARD,
  LILLE,
  UNOHANA,
  CHAD,
  HACHIGEN,
  NEL,
];