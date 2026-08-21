/*
  Anime Arena — Grand Tournament

  Demon Slayer Tournament Database

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
   CHARACTER 01 — TANJIRO KAMADO
========================================================= */

export const TANJIRO =
  createTournamentCharacter({

    id:
      "demon-slayer-tanjiro-kamado",

    verseId:
      "demon-slayer",

    name:
      "Tanjiro Kamado",

    aliases: [
      "Sun Breathing User",
      "Hinokami Kagura User",
      "Demon Slayer",
    ],

    tags: [
      "Demon Slayer Corps",
      "Water Breathing",
      "Sun Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Red Blade",
    ],

    seedRating:
      100,

    description:
      "Tanjiro is an exceptionally adaptable Demon Slayer whose Water Breathing evolves into Hinokami Kagura and ultimately Sun Breathing. His heightened smell, mark, transparent world, selfless state and red Nichirin blade push his peak combat ability to extreme levels.",

    specialTraits: [
      "Water Breathing",
      "Sun Breathing",
      "Demon Slayer Mark",
      "Enhanced smell",
      "Transparent World",
      "Selfless State",
    ],

    forms: [

      createTournamentForm({

        id:
          "tanjiro-water",

        name:
          "Water Breathing Tanjiro",

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
            31,

          speed:
            68,

          durability:
            60,

          intelligence:
            83,

          attack:
            68,

          defense:
            73,

          stamina:
            79,

          versatility:
            84,
        },

        abilities: [
          "Water Breathing",
          "Total Concentration Breathing",
          "Enhanced smell",
          "Nichirin swordsmanship",
        ],

        weaknesses: [
          "Early stamina limitations",
        ],

        specialTraits: [
          "Exceptional sensory perception",
        ],

      }),

      createTournamentForm({

        id:
          "tanjiro-hinokami",

        name:
          "Hinokami Kagura",

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
            53,

          speed:
            89,

          durability:
            72,

          intelligence:
            88,

          attack:
            92,

          defense:
            71,

          stamina:
            85,

          versatility:
            91,
        },

        abilities: [
          "Hinokami Kagura",
          "Sun Breathing foundation",
          "High-output sword attacks",
          "Enhanced perception",
        ],

        weaknesses: [
          "Initially causes severe physical strain",
        ],

        specialTraits: [
          "High burst damage",
          "Sun Breathing adaptation",
        ],

      }),

      createTournamentForm({

        id:
          "tanjiro-mark",

        name:
          "Demon Slayer Mark Tanjiro",

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
            73,

          speed:
            98,

          durability:
            89,

          intelligence:
            95,

          attack:
            100,

          defense:
            87,

          stamina:
            93,

          versatility:
            97,
        },

        abilities: [
          "Demon Slayer Mark",
          "Hinokami Kagura",
          "Red Nichirin Blade",
          "Enhanced reflexes",
          "See-Through World",
        ],

        weaknesses: [
          "Extreme physical strain",
        ],

        specialTraits: [
          "High-level marked swordsman",
        ],

      }),

      createTournamentForm({

        id:
          "tanjiro-complete-sun",

        name:
          "Complete Sun Breathing Tanjiro",

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
            84,

          speed:
            100,

          durability:
            95,

          intelligence:
            100,

          attack:
            100,

          defense:
            94,

          stamina:
            97,

          versatility:
            100,
        },

        abilities: [
          "Sun Breathing",
          "Demon Slayer Mark",
          "Transparent World",
          "Selfless State",
          "Red Nichirin Blade",
          "Continuous Sun Breathing",
        ],

        weaknesses: [
          "Extreme human physiological strain",
        ],

        specialTraits: [
          "Peak human swordsmanship profile",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 02 — NEZUKO KAMADO
========================================================= */

export const NEZUKO =
  createTournamentCharacter({

    id:
      "demon-slayer-nezuko-kamado",

    verseId:
      "demon-slayer",

    name:
      "Nezuko Kamado",

    aliases: [
      "Demon Nezuko",
      "Blood Demon Art User",
      "Sun-Resistant Demon",
    ],

    tags: [
      "Demon",
      "Blood Demon Art",
      "Regeneration",
      "Explosive Blood",
      "Sun Resistance",
    ],

    seedRating:
      97,

    description:
      "Nezuko is a unique demon who refuses to consume humans and develops exceptional regenerative ability, physical strength, explosive Blood Demon Art and eventually sunlight resistance.",

    specialTraits: [
      "Demon regeneration",
      "Explosive Blood",
      "Sun resistance",
      "Physical amplification",
    ],

    forms: [

      createTournamentForm({

        id:
          "nezuko-standard",

        name:
          "Standard Demon Nezuko",

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
            65,

          speed:
            72,

          durability:
            93,

          intelligence:
            45,

          attack:
            83,

          defense:
            87,

          stamina:
            100,

          versatility:
            81,
        },

        abilities: [
          "Demon regeneration",
          "Enhanced strength",
          "Explosive Blood",
          "Demon transformation",
        ],

        weaknesses: [
          "Instinct-driven behavior",
        ],

        specialTraits: [
          "Exceptional demon resilience",
        ],

      }),

      createTournamentForm({

        id:
          "nezuko-awakened",

        name:
          "Awakened Nezuko",

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
            89,

          speed:
            95,

          durability:
            100,

          intelligence:
            48,

          attack:
            100,

          defense:
            98,

          stamina:
            100,

          versatility:
            93,
        },

        abilities: [
          "Advanced regeneration",
          "Explosive Blood",
          "Physical amplification",
          "Advanced demon transformation",
        ],

        weaknesses: [
          "Mental stability",
        ],

        specialTraits: [
          "Extreme demon physiology",
        ],

      }),

      createTournamentForm({

        id:
          "nezuko-sun-resistant",

        name:
          "Sun-Resistant Nezuko",

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
            96,

          speed:
            97,

          durability:
            100,

          intelligence:
            51,

          attack:
            100,

          defense:
            100,

          stamina:
            100,

          versatility:
            98,
        },

        abilities: [
          "Sunlight resistance",
          "Advanced Blood Demon Art",
          "Extreme regeneration",
          "Enhanced physical ability",
        ],

        weaknesses: [
          "Specialized anti-demon attacks",
        ],

        specialTraits: [
          "Unique immunity profile",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 03 — YORIICHI TSUGIKUNI
========================================================= */

export const YORIICHI =
  createTournamentCharacter({

    id:
      "demon-slayer-yoriichi-tsugikuni",

    verseId:
      "demon-slayer",

    name:
      "Yoriichi Tsugikuni",

    aliases: [
      "Strongest Demon Slayer",
      "Sun Breathing Founder",
      "Legendary Swordsman",
    ],

    tags: [
      "Sun Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Selfless State",
      "Red Blade",
    ],

    seedRating:
      100,

    description:
      "Yoriichi is the legendary founder of Sun Breathing and the most naturally gifted Demon Slayer in history. His speed, perception, technique and combat precision are unmatched among ordinary humans.",

    specialTraits: [
      "Sun Breathing founder",
      "Demon Slayer Mark from birth",
      "Transparent World",
      "Selfless State",
      "Red Nichirin Blade",
    ],

    forms: [

      createTournamentForm({

        id:
          "yoriichi-prime",

        name:
          "Prime Yoriichi",

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
            95,

          speed:
            100,

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
          "Sun Breathing",
          "Demon Slayer Mark",
          "Transparent World",
          "Selfless State",
          "Red Nichirin Blade",
          "Master-level swordsmanship",
        ],

        weaknesses: [
          "Extremely few conventional weaknesses",
        ],

        specialTraits: [
          "Highest human combat ceiling",
        ],

      }),

      createTournamentForm({

        id:
          "yoriichi-older",

        name:
          "Older Yoriichi",

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
            94,

          speed:
            99,

          durability:
            98,

          intelligence:
            100,

          attack:
            100,

          defense:
            98,

          stamina:
            93,

          versatility:
            100,
        },

        abilities: [
          "Sun Breathing",
          "Transparent World",
          "Red Blade",
          "Master swordsmanship",
        ],

        weaknesses: [
          "Age-related physical decline",
        ],

        specialTraits: [
          "Still vastly above normal swordsmen",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 04 — MUZAN KIBUTSUJI
========================================================= */

export const MUZAN =
  createTournamentCharacter({

    id:
      "demon-slayer-muzan-kibutsuji",

    verseId:
      "demon-slayer",

    name:
      "Muzan Kibutsuji",

    aliases: [
      "Demon King",
      "First Demon",
      "Progenitor of Demons",
    ],

    tags: [
      "Demon",
      "Demon King",
      "Regeneration",
      "Biological Manipulation",
      "Blood Demon Art",
    ],

    seedRating:
      100,

    description:
      "Muzan is the progenitor of all demons and possesses overwhelming physical strength, speed, regeneration, cellular manipulation, poisonous attacks and multiple biological weapons.",

    specialTraits: [
      "Demon progenitor",
      "Extreme regeneration",
      "Biological manipulation",
      "Multiple organs and vital structures",
    ],

    forms: [

      createTournamentForm({

        id:
          "muzan-standard",

        name:
          "Normal Muzan",

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
            99,

          realPower:
            99,

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
          "Extreme regeneration",
          "Biological manipulation",
          "Tentacle attacks",
          "Poison",
          "Shockwave attacks",
          "Body splitting",
        ],

        weaknesses: [
          "Sunlight",
          "Specialized demon-slaying weapons",
        ],

        specialTraits: [
          "Multiple vital organs",
          "Extreme regeneration",
        ],

      }),

      createTournamentForm({

        id:
          "muzan-final-battle",

        name:
          "Muzan Final Battle State",

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
          "Extreme cellular regeneration",
          "Massive attack appendages",
          "Poison",
          "Body manipulation",
          "Multiple simultaneous attacks",
        ],

        weaknesses: [
          "Sunlight",
          "Accumulated damage and anti-demon tactics",
        ],

        specialTraits: [
          "Peak demon physiology",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 05 — KOKUSHIBO
========================================================= */

export const KOKUSHIBO =
  createTournamentCharacter({

    id:
      "demon-slayer-kokushibo",

    verseId:
      "demon-slayer",

    name:
      "Kokushibo",

    aliases: [
      "Upper Rank One",
      "Michikatsu Tsugikuni",
      "Moon Breathing Demon",
    ],

    tags: [
      "Upper Moon One",
      "Moon Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Demon",
    ],

    seedRating:
      100,

    description:
      "Kokushibo is Upper Rank One and the former human Michikatsu Tsugikuni. His Moon Breathing combines elite swordsmanship with demonic regeneration, immense speed and constantly expanding blade attacks.",

    specialTraits: [
      "Moon Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Extreme regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "kokushibo-human",

        name:
          "Michikatsu",

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
            39,

          speed:
            85,

          durability:
            66,

          intelligence:
            97,

          attack:
            91,

          defense:
            72,

          stamina:
            82,

          versatility:
            84,
        },

        abilities: [
          "Moon Breathing",
          "Master swordsmanship",
          "Demon Slayer Mark",
        ],

        weaknesses: [
          "Human mortality",
        ],

        specialTraits: [
          "Brother of Yoriichi",
        ],

      }),

      createTournamentForm({

        id:
          "kokushibo-upper-one",

        name:
          "Upper Rank One Kokushibo",

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
          "Moon Breathing",
          "Extreme regeneration",
          "Multiple blades",
          "Moon-shaped attacks",
          "Transparent World",
          "Demon Slayer Mark",
        ],

        weaknesses: [
          "Sunlight",
          "Nichirin weapons",
          "Extreme external pressure",
        ],

        specialTraits: [
          "Highest-ranking Upper Moon",
        ],

      }),

      createTournamentForm({

        id:
          "kokushibo-mutated",

        name:
          "Mutated Kokushibo",

        rank:
          3,

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
            97,

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
          "Massive blade growth",
          "Enhanced demonic body",
          "Moon Breathing",
          "Extreme regeneration",
        ],

        weaknesses: [
          "Altered body becomes more monstrous and less stable",
        ],

        specialTraits: [
          "Extreme physical mutation",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 06 — DOMA
========================================================= */

export const DOMA =
  createTournamentCharacter({

    id:
      "demon-slayer-doma",

    verseId:
      "demon-slayer",

    name:
      "Doma",

    aliases: [
      "Upper Rank Two",
      "Ice Demon",
    ],

    tags: [
      "Upper Moon Two",
      "Ice",
      "Blood Demon Art",
      "Demon",
      "Regeneration",
    ],

    seedRating:
      99,

    description:
      "Doma is Upper Rank Two and an exceptionally versatile Blood Demon Art user. His ice techniques can create clones, frozen mist, massive structures and battlefield-wide environmental hazards.",

    specialTraits: [
      "Ice Blood Demon Art",
      "Extreme regeneration",
      "High battlefield control",
    ],

    forms: [

      createTournamentForm({

        id:
          "doma-base",

        name:
          "Upper Rank Two Doma",

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
            98,

          realPower:
            98,

          hax:
            100,

          speed:
            97,

          durability:
            99,

          intelligence:
            97,

          attack:
            99,

          defense:
            99,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "Ice Blood Demon Art",
          "Frozen mist",
          "Ice clones",
          "Cryokinetic constructs",
          "Extreme regeneration",
        ],

        weaknesses: [
          "Sunlight",
          "Nichirin decapitation",
        ],

        specialTraits: [
          "High-area battlefield control",
        ],

      }),

      createTournamentForm({

        id:
          "doma-buddha",

        name:
          "Ice Buddha Doma",

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
            96,

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
          "Massive ice Buddha",
          "Cryokinetic battlefield control",
          "Cold mist",
          "Ice clones",
          "Extreme regeneration",
        ],

        weaknesses: [
          "Sunlight and Nichirin weapons",
        ],

        specialTraits: [
          "Massive area denial",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 07 — AKAZA
========================================================= */

export const AKAZA =
  createTournamentCharacter({

    id:
      "demon-slayer-akaza",

    verseId:
      "demon-slayer",

    name:
      "Akaza",

    aliases: [
      "Upper Rank Three",
      "Hakuji",
      "Destructive Death User",
    ],

    tags: [
      "Upper Moon Three",
      "Destructive Death",
      "Martial Arts",
      "Compass Needle",
      "Demon",
    ],

    seedRating:
      99,

    description:
      "Akaza is one of the greatest close-range combatants in the Demon Slayer setting. His martial arts, Compass Needle, regeneration and destructive shockwaves provide both direct power and combat prediction.",

    specialTraits: [
      "Destructive Death",
      "Compass Needle",
      "Extreme regeneration",
      "Martial arts mastery",
    ],

    forms: [

      createTournamentForm({

        id:
          "akaza-base",

        name:
          "Upper Rank Three Akaza",

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
            98,

          realPower:
            98,

          hax:
            96,

          speed:
            100,

          durability:
            100,

          intelligence:
            98,

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
          "Destructive Death",
          "Compass Needle",
          "Shockwave attacks",
          "Extreme regeneration",
          "Combat prediction",
        ],

        weaknesses: [
          "Sunlight",
          "Specific psychological limitations",
        ],

        specialTraits: [
          "Exceptional martial artist",
        ],

      }),

      createTournamentForm({

        id:
          "akaza-awakened",

        name:
          "Awakened Akaza",

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
          "Compass Needle",
          "Annihilation Type",
          "Extreme regeneration",
          "Combat adaptation",
        ],

        weaknesses: [
          "Sunlight",
        ],

        specialTraits: [
          "Extremely high close-range prediction",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 08 — GYUTARO
========================================================= */

export const GYUTARO =
  createTournamentCharacter({

    id:
      "demon-slayer-gyutaro",

    verseId:
      "demon-slayer",

    name:
      "Gyutaro",

    aliases: [
      "Upper Rank Six",
      "Blood Sickle Demon",
    ],

    tags: [
      "Upper Moon Six",
      "Blood Demon Art",
      "Poison",
      "Sickle",
      "Demon",
    ],

    seedRating:
      94,

    description:
      "Gyutaro is an extremely dangerous close-range demon who combines curved blood sickles, poison, regeneration and unpredictable movement.",

    specialTraits: [
      "Poisoned blood",
      "Blood sickles",
      "Extreme regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "gyutaro-base",

        name:
          "Upper Rank Six Gyutaro",

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
            94,

          speed:
            92,

          durability:
            89,

          intelligence:
            90,

          attack:
            96,

          defense:
            86,

          stamina:
            97,

          versatility:
            94,
        },

        abilities: [
          "Blood sickles",
          "Poison",
          "Blood Demon Art",
          "Extreme regeneration",
        ],

        weaknesses: [
          "Linked fate conditions with Daki",
          "Sunlight",
        ],

        specialTraits: [
          "Extremely lethal poison",
        ],

      }),

      createTournamentForm({

        id:
          "gyutaro-enraged",

        name:
          "Enraged Gyutaro",

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
            99,

          speed:
            98,

          durability:
            97,

          intelligence:
            92,

          attack:
            100,

          defense:
            94,

          stamina:
            100,

          versatility:
            98,
        },

        abilities: [
          "Rotating blood slashes",
          "Poisoned blood",
          "Extreme regeneration",
          "Mass ranged attacks",
        ],

        weaknesses: [
          "Nichirin decapitation",
          "Sunlight",
        ],

        specialTraits: [
          "Mass ranged blood attacks",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 09 — DAKI
========================================================= */

export const DAKI =
  createTournamentCharacter({

    id:
      "demon-slayer-daki",

    verseId:
      "demon-slayer",

    name:
      "Daki",

    aliases: [
      "Upper Rank Six",
      "Oiran Demon",
    ],

    tags: [
      "Upper Moon Six",
      "Obi",
      "Blood Demon Art",
      "Regeneration",
    ],

    seedRating:
      89,

    description:
      "Daki uses supernatural obi sashes as offensive weapons, bindings and defensive constructs. Her Blood Demon Art provides excellent range and battlefield control.",

    specialTraits: [
      "Obi manipulation",
      "Blood Demon Art",
      "Regeneration",
    ],

    forms: [

      createTournamentForm({

        id:
          "daki-standard",

        name:
          "Daki",

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
            88,

          speed:
            84,

          durability:
            82,

          intelligence:
            59,

          attack:
            88,

          defense:
            89,

          stamina:
            91,

          versatility:
            93,
        },

        abilities: [
          "Obi manipulation",
          "Binding attacks",
          "Long-range sashes",
          "Regeneration",
        ],

        weaknesses: [
          "Overconfidence",
          "Lower raw combat level than top Upper Moons",
        ],

        specialTraits: [
          "Excellent battlefield control",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 10 — HANTENGU
========================================================= */

export const HANTENGU =
  createTournamentCharacter({

    id:
      "demon-slayer-hantengu",

    verseId:
      "demon-slayer",

    name:
      "Hantengu",

    aliases: [
      "Upper Rank Four",
      "Emotion Demon",
      "Zohakuten",
    ],

    tags: [
      "Upper Moon Four",
      "Emotion Clones",
      "Blood Demon Art",
      "Zohakuten",
      "Regeneration",
    ],

    seedRating:
      99,

    description:
      "Hantengu's Blood Demon Art divides his emotions into powerful bodies. The resulting battlefield can contain multiple high-level opponents while the true body remains hidden.",

    specialTraits: [
      "Emotion splitting",
      "Hidden true body",
      "Multiple combat forms",
    ],

    forms: [

      createTournamentForm({

        id:
          "hantengu-original",

        name:
          "Original Hantengu",

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
            97,

          speed:
            65,

          durability:
            71,

          intelligence:
            76,

          attack:
            63,

          defense:
            80,

          stamina:
            98,

          versatility:
            100,
        },

        abilities: [
          "Emotion splitting",
          "Blood Demon Art",
          "Regeneration",
          "Hidden true body",
        ],

        weaknesses: [
          "Original body is physically small",
        ],

        specialTraits: [
          "Extreme survivability through concealment",
        ],

      }),

      createTournamentForm({

        id:
          "hantengu-zohakuten",

        name:
          "Zohakuten",

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
            94,

          durability:
            99,

          intelligence:
            93,

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
          "Wood Dragon creation",
          "Emotion clone powers",
          "Lightning",
          "Sound and vibration attacks",
          "Large-scale battlefield control",
        ],

        weaknesses: [
          "True body must ultimately be defeated",
        ],

        specialTraits: [
          "Multi-angle area control",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 11 — GYOKKO
========================================================= */

export const GYOKKO =
  createTournamentCharacter({

    id:
      "demon-slayer-gyokko",

    verseId:
      "demon-slayer",

    name:
      "Gyokko",

    aliases: [
      "Upper Rank Five",
      "Pot Demon",
      "True Form Gyokko",
    ],

    tags: [
      "Upper Moon Five",
      "Pot",
      "Fish",
      "Blood Demon Art",
      "Regeneration",
    ],

    seedRating:
      92,

    description:
      "Gyokko is Upper Rank Five and specializes in magical pots, fish-like creations, teleportation, water-based attacks and grotesque transformations.",

    specialTraits: [
      "Pot teleportation",
      "Fish summons",
      "True transformation",
    ],

    forms: [

      createTournamentForm({

        id:
          "gyokko-standard",

        name:
          "Upper Rank Five Gyokko",

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
            82,

          realPower:
            82,

          hax:
            94,

          speed:
            80,

          durability:
            83,

          intelligence:
            86,

          attack:
            87,

          defense:
            89,

          stamina:
            94,

          versatility:
            97,
        },

        abilities: [
          "Pot teleportation",
          "Fish summons",
          "Water attacks",
          "Blood Demon Art",
        ],

        weaknesses: [
          "Overconfidence",
        ],

        specialTraits: [
          "Highly unusual battlefield manipulation",
        ],

      }),

      createTournamentForm({

        id:
          "gyokko-true",

        name:
          "True Form Gyokko",

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
            98,

          speed:
            96,

          durability:
            100,

          intelligence:
            91,

          attack:
            99,

          defense:
            98,

          stamina:
            100,

          versatility:
            100,
        },

        abilities: [
          "True demon body",
          "Extreme physical speed",
          "Fish and water attacks",
          "Regeneration",
        ],

        weaknesses: [
          "Nichirin decapitation",
        ],

        specialTraits: [
          "Enhanced physical durability",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 12 — KAIGAKU
========================================================= */

export const KAIGAKU =
  createTournamentCharacter({

    id:
      "demon-slayer-kaigaku",

    verseId:
      "demon-slayer",

    name:
      "Kaigaku",

    aliases: [
      "Upper Rank Six",
      "Thunder Breathing Demon",
    ],

    tags: [
      "Upper Moon Six",
      "Thunder Breathing",
      "Demon",
      "Lightning",
    ],

    seedRating:
      91,

    description:
      "Kaigaku combines Thunder Breathing swordsmanship with demonic physiology, creating corrupted lightning attacks and regeneration.",

    specialTraits: [
      "Thunder Breathing",
      "Demon enhancement",
      "Lightning attacks",
    ],

    forms: [

      createTournamentForm({

        id:
          "kaigaku-human",

        name:
          "Human Kaigaku",

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
            62,

          realPower:
            62,

          hax:
            35,

          speed:
            80,

          durability:
            56,

          intelligence:
            84,

          attack:
            75,

          defense:
            54,

          stamina:
            70,

          versatility:
            76,
        },

        abilities: [
          "Thunder Breathing",
          "Swordsmanship",
          "Demon Slayer training",
        ],

        weaknesses: [
          "Human body",
        ],

        specialTraits: [
          "Strong Thunder Breathing fundamentals",
        ],

      }),

      createTournamentForm({

        id:
          "kaigaku-demon",

        name:
          "Demon Kaigaku",

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
            82,

          speed:
            96,

          durability:
            89,

          intelligence:
            88,

          attack:
            96,

          defense:
            81,

          stamina:
            97,

          versatility:
            93,
        },

        abilities: [
          "Demon regeneration",
          "Corrupted Thunder Breathing",
          "Lightning attacks",
          "Enhanced physical power",
        ],

        weaknesses: [
          "Incomplete mastery compared with older Upper Moons",
        ],

        specialTraits: [
          "Demonic Thunder Breathing",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 13 — GENYA SHINAZUGAWA
========================================================= */

export const GENYA =
  createTournamentCharacter({

    id:
      "demon-slayer-genya-shinazugawa",

    verseId:
      "demon-slayer",

    name:
      "Genya Shinazugawa",

    aliases: [
      "Demon-Eating Slayer",
      "Gun User",
    ],

    tags: [
      "Demon Slayer Corps",
      "Demon Consumption",
      "Nichirin Gun",
      "Regeneration",
    ],

    seedRating:
      88,

    description:
      "Genya cannot use conventional Breathing Styles effectively, but his unique ability to gain temporary demonic properties from consumed demon flesh gives him exceptional versatility.",

    specialTraits: [
      "Demon consumption",
      "Nichirin firearm",
      "Temporary demonization",
    ],

    forms: [

      createTournamentForm({

        id:
          "genya-standard",

        name:
          "Standard Genya",

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
            50,

          speed:
            57,

          durability:
            68,

          intelligence:
            71,

          attack:
            81,

          defense:
            67,

          stamina:
            85,

          versatility:
            71,
        },

        abilities: [
          "Nichirin shotgun",
          "Physical strength",
          "Demon Slayer training",
        ],

        weaknesses: [
          "Cannot properly use standard Breathing Styles",
        ],

        specialTraits: [
          "Firearm-based Slayer",
        ],

      }),

      createTournamentForm({

        id:
          "genya-demonized",

        name:
          "Demonized Genya",

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
            74,

          speed:
            71,

          durability:
            94,

          intelligence:
            69,

          attack:
            90,

          defense:
            91,

          stamina:
            99,

          versatility:
            88,
        },

        abilities: [
          "Demon consumption",
          "Regeneration",
          "Enhanced strength",
          "Demonic traits",
          "Nichirin firearm",
        ],

        weaknesses: [
          "Temporary state",
          "Depends on consumed demon tissue",
        ],

        specialTraits: [
          "Hybrid human-demon physiology",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 14 — GYOMEI HIMEJIMA
========================================================= */

export const GYOMEI =
  createTournamentCharacter({

    id:
      "demon-slayer-gyomei-himejima",

    verseId:
      "demon-slayer",

    name:
      "Gyomei Himejima",

    aliases: [
      "Stone Hashira",
      "Strongest Hashira",
    ],

    tags: [
      "Hashira",
      "Stone Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Flail",
    ],

    seedRating:
      100,

    description:
      "Gyomei is widely regarded as the strongest active Hashira. His immense physical strength, Stone Breathing, chained flail-and-axe weapon and exceptional perception make him one of humanity's greatest fighters.",

    specialTraits: [
      "Stone Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Exceptional physical strength",
    ],

    forms: [

      createTournamentForm({

        id:
          "gyomei-base",

        name:
          "Stone Hashira Gyomei",

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
            49,

          speed:
            92,

          durability:
            98,

          intelligence:
            95,

          attack:
            99,

          defense:
            96,

          stamina:
            97,

          versatility:
            91,
        },

        abilities: [
          "Stone Breathing",
          "Flail and axe mastery",
          "Exceptional physical strength",
          "Enhanced hearing",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Strongest active Hashira",
        ],

      }),

      createTournamentForm({

        id:
          "gyomei-mark",

        name:
          "Marked Gyomei",

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
            69,

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
            98,
        },

        abilities: [
          "Demon Slayer Mark",
          "Stone Breathing",
          "Enhanced perception",
          "Red weapon",
        ],

        weaknesses: [
          "Mark puts significant strain on the body",
        ],

        specialTraits: [
          "Extreme physical amplification",
        ],

      }),

      createTournamentForm({

        id:
          "gyomei-transparent",

        name:
          "Transparent World Gyomei",

        rank:
          3,

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
            80,

          speed:
            100,

          durability:
            100,

          intelligence:
            100,

          attack:
            100,

          defense:
            100,

          stamina:
            98,

          versatility:
            100,
        },

        abilities: [
          "Transparent World",
          "Demon Slayer Mark",
          "Stone Breathing",
          "Red weapon",
          "Extreme combat perception",
        ],

        weaknesses: [
          "Human lifespan and physiology",
        ],

        specialTraits: [
          "Top-tier human perception",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 15 — SANEMI SHINAZUGAWA
========================================================= */

export const SANEMI =
  createTournamentCharacter({

    id:
      "demon-slayer-sanemi-shinazugawa",

    verseId:
      "demon-slayer",

    name:
      "Sanemi Shinazugawa",

    aliases: [
      "Wind Hashira",
      "Marechi User",
    ],

    tags: [
      "Hashira",
      "Wind Breathing",
      "Demon Slayer Mark",
      "Marechi",
      "Extreme Stamina",
    ],

    seedRating:
      99,

    description:
      "Sanemi is the Wind Hashira and one of the most physically aggressive Demon Slayers. His extreme stamina, speed, durability, Wind Breathing and Marechi blood make him particularly effective against demons.",

    specialTraits: [
      "Wind Breathing",
      "Marechi blood",
      "Demon Slayer Mark",
      "Extreme pain tolerance",
    ],

    forms: [

      createTournamentForm({

        id:
          "sanemi-base",

        name:
          "Wind Hashira Sanemi",

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
            85,

          realPower:
            85,

          hax:
            53,

          speed:
            97,

          durability:
            93,

          intelligence:
            92,

          attack:
            98,

          defense:
            88,

          stamina:
            100,

          versatility:
            93,
        },

        abilities: [
          "Wind Breathing",
          "Marechi blood",
          "Elite swordsmanship",
          "Extreme endurance",
        ],

        weaknesses: [
          "Aggressive attack patterns",
        ],

        specialTraits: [
          "Extremely high stamina",
        ],

      }),

      createTournamentForm({

        id:
          "sanemi-mark",

        name:
          "Marked Sanemi",

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
            73,

          speed:
            100,

          durability:
            99,

          intelligence:
            97,

          attack:
            100,

          defense:
            95,

          stamina:
            100,

          versatility:
            98,
        },

        abilities: [
          "Demon Slayer Mark",
          "Wind Breathing",
          "Marechi",
          "Red Nichirin Blade",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Top-tier Hashira endurance",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 16 — MUICHIRO TOKITO
========================================================= */

export const MUICHIRO =
  createTournamentCharacter({

    id:
      "demon-slayer-muichiro-tokito",

    verseId:
      "demon-slayer",

    name:
      "Muichiro Tokito",

    aliases: [
      "Mist Hashira",
      "Prodigy Swordsman",
    ],

    tags: [
      "Hashira",
      "Mist Breathing",
      "Demon Slayer Mark",
      "Transparent World",
    ],

    seedRating:
      97,

    description:
      "Muichiro is a natural prodigy whose exceptional swordsmanship allows him to reach marked and transparent-world states at an unusually young age.",

    specialTraits: [
      "Mist Breathing",
      "Demon Slayer Mark",
      "Transparent World",
      "Prodigious talent",
    ],

    forms: [

      createTournamentForm({

        id:
          "muichiro-base",

        name:
          "Mist Hashira Muichiro",

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
            48,

          speed:
            95,

          durability:
            70,

          intelligence:
            95,

          attack:
            92,

          defense:
            79,

          stamina:
            82,

          versatility:
            90,
        },

        abilities: [
          "Mist Breathing",
          "Elite swordsmanship",
          "Exceptional natural talent",
        ],

        weaknesses: [
          "Young body",
        ],

        specialTraits: [
          "Natural combat prodigy",
        ],

      }),

      createTournamentForm({

        id:
          "muichiro-mark",

        name:
          "Marked Muichiro",

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
            69,

          speed:
            100,

          durability:
            84,

          intelligence:
            98,

          attack:
            100,

          defense:
            89,

          stamina:
            91,

          versatility:
            98,
        },

        abilities: [
          "Demon Slayer Mark",
          "Mist Breathing",
          "Red Nichirin Blade",
          "Extreme speed",
        ],

        weaknesses: [
          "Young physical frame",
        ],

        specialTraits: [
          "Extremely fast marked fighter",
        ],

      }),

      createTournamentForm({

        id:
          "muichiro-transparent",

        name:
          "Transparent World Muichiro",

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
            80,

          speed:
            100,

          durability:
            86,

          intelligence:
            100,

          attack:
            100,

          defense:
            94,

          stamina:
            92,

          versatility:
            100,
        },

        abilities: [
          "Transparent World",
          "Demon Slayer Mark",
          "Mist Breathing",
          "Red Blade",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Exceptional combat perception",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 17 — MITSURI KANROJI
========================================================= */

export const MITSURI =
  createTournamentCharacter({

    id:
      "demon-slayer-mitsuri-kanroji",

    verseId:
      "demon-slayer",

    name:
      "Mitsuri Kanroji",

    aliases: [
      "Love Hashira",
    ],

    tags: [
      "Hashira",
      "Love Breathing",
      "Demon Slayer Mark",
      "Flexible Sword",
      "Physical Strength",
    ],

    seedRating:
      96,

    description:
      "Mitsuri possesses unusual muscular density and tremendous flexibility, allowing her to wield a highly flexible Nichirin sword at extreme speeds.",

    specialTraits: [
      "Love Breathing",
      "Abnormal muscular density",
      "Flexible sword",
      "Demon Slayer Mark",
    ],

    forms: [

      createTournamentForm({

        id:
          "mitsuri-base",

        name:
          "Love Hashira Mitsuri",

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
            41,

          speed:
            96,

          durability:
            86,

          intelligence:
            82,

          attack:
            95,

          defense:
            80,

          stamina:
            93,

          versatility:
            94,
        },

        abilities: [
          "Love Breathing",
          "Extreme flexibility",
          "Abnormal muscular density",
          "Flexible Nichirin blade",
        ],

        weaknesses: [
          "Specialized weapon requires unique handling",
        ],

        specialTraits: [
          "Unusual attack angles",
        ],

      }),

      createTournamentForm({

        id:
          "mitsuri-mark",

        name:
          "Marked Mitsuri",

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
            61,

          speed:
            100,

          durability:
            97,

          intelligence:
            89,

          attack:
            100,

          defense:
            94,

          stamina:
            99,

          versatility:
            98,
        },

        abilities: [
          "Demon Slayer Mark",
          "Love Breathing",
          "Extreme physical strength",
          "Flexible sword attacks",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Extremely high attack frequency",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 18 — TENGEN UZUI
========================================================= */

export const TENGEN =
  createTournamentCharacter({

    id:
      "demon-slayer-tengen-uzui",

    verseId:
      "demon-slayer",

    name:
      "Tengen Uzui",

    aliases: [
      "Sound Hashira",
      "Shinobi Hashira",
    ],

    tags: [
      "Hashira",
      "Sound Breathing",
      "Shinobi",
      "Dual Blades",
      "Explosives",
      "Musical Score",
    ],

    seedRating:
      94,

    description:
      "Tengen combines Sound Breathing with shinobi training, dual Nichirin cleavers, explosives and Musical Score, allowing him to analyze enemy attack patterns.",

    specialTraits: [
      "Sound Breathing",
      "Shinobi training",
      "Musical Score",
      "Explosive weapons",
    ],

    forms: [

      createTournamentForm({

        id:
          "tengen-base",

        name:
          "Sound Hashira Tengen",

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
            61,

          speed:
            96,

          durability:
            89,

          intelligence:
            92,

          attack:
            95,

          defense:
            85,

          stamina:
            98,

          versatility:
            95,
        },

        abilities: [
          "Sound Breathing",
          "Shinobi training",
          "Explosive beads",
          "Dual Nichirin cleavers",
        ],

        weaknesses: [
          "No Demon Slayer Mark shown",
        ],

        specialTraits: [
          "Very high physical strength",
        ],

      }),

      createTournamentForm({

        id:
          "tengen-musical-score",

        name:
          "Musical Score Tengen",

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
            83,

          speed:
            100,

          durability:
            92,

          intelligence:
            100,

          attack:
            100,

          defense:
            89,

          stamina:
            93,

          versatility:
            100,
        },

        abilities: [
          "Musical Score",
          "Sound Breathing",
          "Explosive weapons",
          "Combat rhythm analysis",
        ],

        weaknesses: [
          "Musical Score takes time to develop",
        ],

        specialTraits: [
          "Pattern-analysis combat system",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 19 — SHINOBU KOCHO
========================================================= */

export const SHINOBU =
  createTournamentCharacter({

    id:
      "demon-slayer-shinobu-kocho",

    verseId:
      "demon-slayer",

    name:
      "Shinobu Kocho",

    aliases: [
      "Insect Hashira",
      "Poison Specialist",
    ],

    tags: [
      "Hashira",
      "Insect Breathing",
      "Poison",
      "Medical Expert",
      "Speed",
    ],

    seedRating:
      93,

    description:
      "Shinobu is an exceptionally fast Hashira who specializes in poison-based demon assassination rather than traditional decapitation. Her medical expertise and chemical knowledge greatly increase her tactical value.",

    specialTraits: [
      "Insect Breathing",
      "Wisteria poison",
      "Medical expertise",
      "Extreme speed",
    ],

    forms: [

      createTournamentForm({

        id:
          "shinobu-base",

        name:
          "Insect Hashira Shinobu",

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
            71,

          realPower:
            71,

          hax:
            92,

          speed:
            100,

          durability:
            53,

          intelligence:
            100,

          attack:
            93,

          defense:
            59,

          stamina:
            77,

          versatility:
            95,
        },

        abilities: [
          "Insect Breathing",
          "Wisteria poison",
          "Medical knowledge",
          "Extreme thrusting speed",
        ],

        weaknesses: [
          "Low physical strength",
          "Cannot rely on conventional decapitation",
        ],

        specialTraits: [
          "Poison-based anti-demon specialist",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 20 — GIYU TOMIOKA
========================================================= */

export const GIYU =
  createTournamentCharacter({

    id:
      "demon-slayer-giyu-tomioka",

    verseId:
      "demon-slayer",

    name:
      "Giyu Tomioka",

    aliases: [
      "Water Hashira",
      "Dead Calm User",
    ],

    tags: [
      "Hashira",
      "Water Breathing",
      "Dead Calm",
      "Demon Slayer Mark",
    ],

    seedRating:
      98,

    description:
      "Giyu is the Water Hashira and a highly disciplined swordsman whose Water Breathing and Dead Calm provide an exceptional combination of offense, defense and precision.",

    specialTraits: [
      "Water Breathing",
      "Dead Calm",
      "Demon Slayer Mark",
      "Red Nichirin Blade",
    ],

    forms: [

      createTournamentForm({

        id:
          "giyu-base",

        name:
          "Water Hashira Giyu",

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
            81,

          realPower:
            81,

          hax:
            48,

          speed:
            94,

          durability:
            87,

          intelligence:
            97,

          attack:
            93,

          defense:
            98,

          stamina:
            92,

          versatility:
            97,
        },

        abilities: [
          "Water Breathing",
          "Dead Calm",
          "Elite swordsmanship",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Extremely strong defensive specialist",
        ],

      }),

      createTournamentForm({

        id:
          "giyu-mark",

        name:
          "Marked Giyu",

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
            68,

          speed:
            100,

          durability:
            97,

          intelligence:
            100,

          attack:
            100,

          defense:
            100,

          stamina:
            98,

          versatility:
            100,
        },

        abilities: [
          "Demon Slayer Mark",
          "Water Breathing",
          "Dead Calm",
          "Red Nichirin Blade",
        ],

        weaknesses: [
          "Mark strains the human body",
        ],

        specialTraits: [
          "Near-perfect defensive balance",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 21 — KYOJURO RENGOKU
========================================================= */

export const RENGOKU =
  createTournamentCharacter({

    id:
      "demon-slayer-kyojuro-rengoku",

    verseId:
      "demon-slayer",

    name:
      "Kyojuro Rengoku",

    aliases: [
      "Flame Hashira",
    ],

    tags: [
      "Hashira",
      "Flame Breathing",
      "Swordsmanship",
      "Stamina",
    ],

    seedRating:
      97,

    description:
      "Kyojuro Rengoku is the Flame Hashira, a physically powerful and highly disciplined swordsman with extraordinary stamina, courage and offensive ability.",

    specialTraits: [
      "Flame Breathing",
      "Extreme stamina",
      "Elite swordsmanship",
    ],

    forms: [

      createTournamentForm({

        id:
          "rengoku-prime",

        name:
          "Flame Hashira Rengoku",

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
            85,

          realPower:
            85,

          hax:
            32,

          speed:
            92,

          durability:
            96,

          intelligence:
            91,

          attack:
            100,

          defense:
            90,

          stamina:
            100,

          versatility:
            91,
        },

        abilities: [
          "Flame Breathing",
          "Elite swordsmanship",
          "Extreme endurance",
          "High pain tolerance",
        ],

        weaknesses: [
          "No demonstrated Demon Slayer Mark",
        ],

        specialTraits: [
          "Exceptional willpower",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 22 — OBANAI IGURO
========================================================= */

export const OBANAI =
  createTournamentCharacter({

    id:
      "demon-slayer-obanai-iguro",

    verseId:
      "demon-slayer",

    name:
      "Obanai Iguro",

    aliases: [
      "Serpent Hashira",
      "Kaburamaru's Master",
    ],

    tags: [
      "Hashira",
      "Serpent Breathing",
      "Demon Slayer Mark",
      "Kaburamaru",
      "Flexible Sword",
    ],

    seedRating:
      97,

    description:
      "Obanai is a highly technical swordsman whose Serpent Breathing creates unpredictable trajectories. His mark, red blade and Kaburamaru greatly increase his precision.",

    specialTraits: [
      "Serpent Breathing",
      "Demon Slayer Mark",
      "Kaburamaru",
      "Red Nichirin Blade",
    ],

    forms: [

      createTournamentForm({

        id:
          "obanai-base",

        name:
          "Serpent Hashira Obanai",

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
            54,

          speed:
            93,

          durability:
            72,

          intelligence:
            99,

          attack:
            95,

          defense:
            84,

          stamina:
            89,

          versatility:
            97,
        },

        abilities: [
          "Serpent Breathing",
          "Flexible Nichirin sword",
          "Kaburamaru",
          "Elite swordsmanship",
        ],

        weaknesses: [
          "Lower raw strength than Gyomei",
        ],

        specialTraits: [
          "Extreme attack-angle unpredictability",
        ],

      }),

      createTournamentForm({

        id:
          "obanai-mark",

        name:
          "Marked Obanai",

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
            75,

          speed:
            100,

          durability:
            88,

          intelligence:
            100,

          attack:
            100,

          defense:
            94,

          stamina:
            95,

          versatility:
            100,
        },

        abilities: [
          "Demon Slayer Mark",
          "Serpent Breathing",
          "Red Nichirin Blade",
          "Kaburamaru targeting",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Extreme precision fighter",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 23 — KANAO TSUYURI
========================================================= */

export const KANAO =
  createTournamentCharacter({

    id:
      "demon-slayer-kanao-tsuyuri",

    verseId:
      "demon-slayer",

    name:
      "Kanao Tsuyuri",

    aliases: [
      "Flower Breathing User",
      "Tsuguko",
    ],

    tags: [
      "Demon Slayer Corps",
      "Flower Breathing",
      "Enhanced Vision",
      "Tsuguko",
    ],

    seedRating:
      90,

    description:
      "Kanao is an extremely talented Flower Breathing swordswoman trained by Kanae and Shinobu. Her visual perception and final Flower Breathing technique make her a dangerous precision fighter.",

    specialTraits: [
      "Flower Breathing",
      "Enhanced eyesight",
      "Tsuguko",
    ],

    forms: [

      createTournamentForm({

        id:
          "kanao-standard",

        name:
          "Flower Breathing Kanao",

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
            39,

          speed:
            84,

          durability:
            58,

          intelligence:
            95,

          attack:
            86,

          defense:
            74,

          stamina:
            77,

          versatility:
            84,
        },

        abilities: [
          "Flower Breathing",
          "Enhanced vision",
          "Elite swordsmanship",
        ],

        weaknesses: [
          "Extreme visual technique strains the eyes",
        ],

        specialTraits: [
          "Precision combat",
        ],

      }),

      createTournamentForm({

        id:
          "kanao-final-form",

        name:
          "Equinoctial Vermilion Eye",

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
            69,

          speed:
            99,

          durability:
            63,

          intelligence:
            100,

          attack:
            100,

          defense:
            82,

          stamina:
            68,

          versatility:
            94,
        },

        abilities: [
          "Flower Breathing final form",
          "Extreme visual perception",
          "High-speed reactions",
          "Precision swordsmanship",
        ],

        weaknesses: [
          "Severe eye strain",
        ],

        specialTraits: [
          "Near-perfect short-term visual analysis",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 24 — INOSUKE HASHIBIRA
========================================================= */

export const INOSUKE =
  createTournamentCharacter({

    id:
      "demon-slayer-inosuke-hashibira",

    verseId:
      "demon-slayer",

    name:
      "Inosuke Hashibira",

    aliases: [
      "Beast Breathing User",
      "Boar Head",
    ],

    tags: [
      "Demon Slayer Corps",
      "Beast Breathing",
      "Dual Blades",
      "Enhanced Touch",
      "Flexible Body",
    ],

    seedRating:
      89,

    description:
      "Inosuke uses Beast Breathing with dual serrated Nichirin swords, extreme flexibility, enhanced touch perception and instinctive battlefield adaptation.",

    specialTraits: [
      "Beast Breathing",
      "Extreme flexibility",
      "Enhanced touch",
      "Dual blades",
    ],

    forms: [

      createTournamentForm({

        id:
          "inosuke-base",

        name:
          "Beast Breathing Inosuke",

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
            31,

          speed:
            84,

          durability:
            76,

          intelligence:
            61,

          attack:
            89,

          defense:
            66,

          stamina:
            92,

          versatility:
            87,
        },

        abilities: [
          "Beast Breathing",
          "Dual serrated blades",
          "Enhanced touch perception",
          "Extreme flexibility",
        ],

        weaknesses: [
          "Reckless behavior",
        ],

        specialTraits: [
          "Unorthodox combat movement",
        ],

      }),

      createTournamentForm({

        id:
          "inosuke-peak",

        name:
          "Peak Inosuke",

        rank:
          2,

        tier:
          "mythic",

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
            94,

          durability:
            87,

          intelligence:
            68,

          attack:
            97,

          defense:
            75,

          stamina:
            100,

          versatility:
            94,
        },

        abilities: [
          "Beast Breathing",
          "Spatial awareness",
          "Body manipulation",
          "Extreme pain tolerance",
        ],

        weaknesses: [
          "Lower technical refinement than elite Hashira",
        ],

        specialTraits: [
          "Extremely unpredictable movement",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 25 — ZENITSU AGATSUMA
========================================================= */

export const ZENITSU =
  createTournamentCharacter({

    id:
      "demon-slayer-zenitsu-agatsuma",

    verseId:
      "demon-slayer",

    name:
      "Zenitsu Agatsuma",

    aliases: [
      "Thunder Breathing User",
      "Thunderclap and Flash",
      "Godlike Speed User",
    ],

    tags: [
      "Demon Slayer Corps",
      "Thunder Breathing",
      "Speed",
      "Sixfold",
      "Seventh Form",
    ],

    seedRating:
      93,

    description:
      "Zenitsu specializes in Thunder Breathing and possesses extraordinary burst acceleration. His unconscious fighting state and later Seventh Form dramatically increase his offensive speed.",

    specialTraits: [
      "Thunder Breathing",
      "Extreme burst speed",
      "Enhanced hearing",
      "Seventh Form",
    ],

    forms: [

      createTournamentForm({

        id:
          "zenitsu-standard",

        name:
          "Thunder Breathing Zenitsu",

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
            59,

          realPower:
            59,

          hax:
            24,

          speed:
            97,

          durability:
            50,

          intelligence:
            65,

          attack:
            81,

          defense:
            52,

          stamina:
            73,

          versatility:
            57,
        },

        abilities: [
          "Thunder Breathing",
          "Enhanced hearing",
          "Thunderclap and Flash",
        ],

        weaknesses: [
          "Fear can affect conscious fighting",
        ],

        specialTraits: [
          "Exceptional acceleration",
        ],

      }),

      createTournamentForm({

        id:
          "zenitsu-sixfold",

        name:
          "Thunderclap and Flash — Sixfold",

        rank:
          2,

        tier:
          "legendary",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            85,

          realPower:
            85,

          hax:
            42,

          speed:
            100,

          durability:
            61,

          intelligence:
            71,

          attack:
            98,

          defense:
            56,

          stamina:
            71,

          versatility:
            66,
        },

        abilities: [
          "Thunderclap and Flash",
          "Multiple acceleration bursts",
          "High-speed sword draw",
        ],

        weaknesses: [
          "High physical strain",
        ],

        specialTraits: [
          "Burst-speed specialist",
        ],

      }),

      createTournamentForm({

        id:
          "zenitsu-seventh",

        name:
          "Seventh Form — Honoikazuchi no Kami",

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
            59,

          speed:
            100,

          durability:
            68,

          intelligence:
            78,

          attack:
            100,

          defense:
            66,

          stamina:
            78,

          versatility:
            77,
        },

        abilities: [
          "Seventh Form",
          "Honoikazuchi no Kami",
          "Extreme acceleration",
          "Precision finishing strike",
        ],

        weaknesses: [
          "Extremely specialized technique",
        ],

        specialTraits: [
          "Highest single-burst Thunder Breathing output",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 26 — KANAE KOCHO
========================================================= */

export const KANAE =
  createTournamentCharacter({

    id:
      "demon-slayer-kanae-kocho",

    verseId:
      "demon-slayer",

    name:
      "Kanae Kocho",

    aliases: [
      "Former Flower Hashira",
      "Kanae",
    ],

    tags: [
      "Former Hashira",
      "Flower Breathing",
      "Swordsmanship",
      "Demon Slayer Corps",
    ],

    seedRating:
      92,

    description:
      "Kanae Kocho was the former Flower Hashira and an elite swordswoman whose skill influenced the techniques of Kanao and the Butterfly Estate.",

    specialTraits: [
      "Flower Breathing",
      "Former Hashira",
      "Mentor",
    ],

    forms: [

      createTournamentForm({

        id:
          "kanae-prime",

        name:
          "Prime Kanae",

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
            36,

          speed:
            89,

          durability:
            75,

          intelligence:
            94,

          attack:
            91,

          defense:
            82,

          stamina:
            88,

          versatility:
            92,
        },

        abilities: [
          "Flower Breathing",
          "Hashira swordsmanship",
          "Precision combat",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Former elite Hashira",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 27 — SAKONJI UROKODAKI
========================================================= */

export const UROKODAKI =
  createTournamentCharacter({

    id:
      "demon-slayer-sakonji-urokodaki",

    verseId:
      "demon-slayer",

    name:
      "Sakonji Urokodaki",

    aliases: [
      "Former Water Hashira",
      "Water Breathing Master",
    ],

    tags: [
      "Former Hashira",
      "Water Breathing",
      "Trainer",
      "Demon Slayer Corps",
    ],

    seedRating:
      91,

    description:
      "Urokodaki is the former Water Hashira and one of the greatest technical trainers in the Corps. His swordsmanship, tactics and experience remain extremely valuable.",

    specialTraits: [
      "Water Breathing Master",
      "Former Hashira",
      "Trainer",
    ],

    forms: [

      createTournamentForm({

        id:
          "urokodaki-prime",

        name:
          "Prime Urokodaki",

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
            31,

          speed:
            82,

          durability:
            76,

          intelligence:
            99,

          attack:
            89,

          defense:
            93,

          stamina:
            89,

          versatility:
            96,
        },

        abilities: [
          "Water Breathing",
          "Master swordsmanship",
          "Demon Slayer training",
          "Battle strategy",
        ],

        weaknesses: [
          "Age in present timeline",
        ],

        specialTraits: [
          "Highly experienced swordsman",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 28 — SABITO
========================================================= */

export const SABITO =
  createTournamentCharacter({

    id:
      "demon-slayer-sabito",

    verseId:
      "demon-slayer",

    name:
      "Sabito",

    aliases: [
      "Fox Mask Swordsman",
      "Urokodaki Student",
    ],

    tags: [
      "Water Breathing",
      "Demon Slayer Corps",
      "Swordsmanship",
      "Final Selection",
    ],

    seedRating:
      83,

    description:
      "Sabito was an exceptionally talented student of Urokodaki whose natural swordsmanship allowed him to defeat numerous demons during training and preparation.",

    specialTraits: [
      "Water Breathing",
      "Exceptional natural skill",
      "Mentor student lineage",
    ],

    forms: [

      createTournamentForm({

        id:
          "sabito-prime",

        name:
          "Prime Sabito",

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
            66,

          realPower:
            66,

          hax:
            25,

          speed:
            81,

          durability:
            59,

          intelligence:
            86,

          attack:
            83,

          defense:
            71,

          stamina:
            75,

          versatility:
            81,
        },

        abilities: [
          "Water Breathing",
          "Swordsmanship",
          "Demon Slayer training",
        ],

        weaknesses: [
          "Human physiology",
        ],

        specialTraits: [
          "Highly gifted young swordsman",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 29 — YUSHIRO
========================================================= */

export const YUSHIRO =
  createTournamentCharacter({

    id:
      "demon-slayer-yushiro",

    verseId:
      "demon-slayer",

    name:
      "Yushiro",

    aliases: [
      "Tamayo's Assistant",
      "Paper Talisman User",
    ],

    tags: [
      "Demon",
      "Blood Demon Art",
      "Talismans",
      "Perception",
      "Support",
    ],

    seedRating:
      85,

    description:
      "Yushiro is a demon created by Tamayo whose Blood Demon Art manipulates perception and information through paper talismans. He is primarily a support and control specialist.",

    specialTraits: [
      "Perception manipulation",
      "Talismans",
      "Demon physiology",
      "Support specialist",
    ],

    forms: [

      createTournamentForm({

        id:
          "yushiro-standard",

        name:
          "Demon Yushiro",

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
            94,

          speed:
            58,

          durability:
            68,

          intelligence:
            98,

          attack:
            46,

          defense:
            76,

          stamina:
            90,

          versatility:
            98,
        },

        abilities: [
          "Blood Demon Art",
          "Perception manipulation",
          "Talismans",
          "Remote surveillance",
          "Demon regeneration",
        ],

        weaknesses: [
          "Low direct destructive power",
        ],

        specialTraits: [
          "Exceptional information support",
        ],

      }),

      createTournamentForm({

        id:
          "yushiro-battlefield",

        name:
          "Battlefield Yushiro",

        rank:
          2,

        tier:
          "mythic",

        tournamentEligible:
          true,

        stats: {

          relativePower:
            74,

          realPower:
            74,

          hax:
            100,

          speed:
            67,

          durability:
            80,

          intelligence:
            100,

          attack:
            58,

          defense:
            89,

          stamina:
            97,

          versatility:
            100,
        },

        abilities: [
          "Advanced perception manipulation",
          "Remote surveillance",
          "Talismans",
          "Demon regeneration",
          "Battlefield information control",
        ],

        weaknesses: [
          "Still primarily a control/support fighter",
        ],

        specialTraits: [
          "Extreme information advantage",
        ],

      }),

    ],
  });


/* =========================================================
   CHARACTER 30 — MURATA
========================================================= */

export const MURATA =
  createTournamentCharacter({

    id:
      "demon-slayer-murata",

    verseId:
      "demon-slayer",

    name:
      "Murata",

    aliases: [
      "Demon Slayer Corps Member",
      "Water Breathing User",
    ],

    tags: [
      "Demon Slayer Corps",
      "Water Breathing",
      "Swordsmanship",
      "Support",
    ],

    seedRating:
      70,

    description:
      "Murata is a reliable Demon Slayer Corps member representing a competent but non-Hashira swordsman. His value comes from experience, reliability and standard Water Breathing combat.",

    specialTraits: [
      "Water Breathing",
      "Reliable soldier",
      "Corps experience",
    ],

    forms: [

      createTournamentForm({

        id:
          "murata-standard",

        name:
          "Demon Slayer Murata",

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
            39,

          realPower:
            39,

          hax:
            16,

          speed:
            55,

          durability:
            48,

          intelligence:
            74,

          attack:
            45,

          defense:
            51,

          stamina:
            60,

          versatility:
            58,
        },

        abilities: [
          "Water Breathing",
          "Nichirin swordsmanship",
          "Demon Slayer training",
        ],

        weaknesses: [
          "Far below Hashira-level combat",
        ],

        specialTraits: [
          "Reliable support fighter",
        ],

      }),

    ],
  });


/* =========================================================
   FINAL DATABASE EXPORT
   EXACTLY 30 CHARACTERS
========================================================= */

export const DEMON_SLAYER_CHARACTERS = [

  TANJIRO,

  NEZUKO,

  YORIICHI,

  MUZAN,

  KOKUSHIBO,

  DOMA,

  AKAZA,

  GYUTARO,

  DAKI,

  HANTENGU,

  GYOKKO,

  KAIGAKU,

  GENYA,

  GYOMEI,

  SANEMI,

  MUICHIRO,

  MITSURI,

  TENGEN,

  SHINOBU,

  GIYU,

  RENGOKU,

  OBANAI,

  KANAO,

  INOSUKE,

  ZENITSU,

  KANAE,

  UROKODAKI,

  SABITO,

  YUSHIRO,

  MURATA,

];