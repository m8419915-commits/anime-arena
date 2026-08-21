/*
  Anime Arena — Grand Tournament
  One Piece Expanded Tournament Database
  30 CHARACTERS — NARUTO.JS-STYLE EXPANDED STANDARD
  Numerical values are Anime Arena balancing values, not official canon stats.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";

/* =========================================================
   CHARACTER 01 — MONKEY D. LUFFY
========================================================= */

export const MONKEY_D_LUFFY = createTournamentCharacter({
  id: "one-piece-monkey-d-luffy",
  verseId: "one-piece",
  name: "Monkey D. Luffy",
  aliases: [
    "Pre-Timeskip Luffy",
    "Gear Fourth Luffy",
    "Gear Fifth Luffy",
  ],
  tags: [
    "Straw Hat",
    "Haki",
    "Nika",
    "Conqueror",
  ],
  seedRating: 80,
  description: "A pirate captain whose awakening and Haki push him to the highest tier.",
  specialTraits: [
    "Straw Hat",
    "Haki",
    "Nika",
    "Conqueror",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-monkey-d-luffy-1",
      name: "Pre-Timeskip Luffy",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 49,
        realPower: 49,
        hax: 37,
        speed: 54,
        durability: 51,
        intelligence: 59,
        attack: 56,
        defense: 49,
        stamina: 60,
        versatility: 54,
      },
      abilities: [
        "Straw Hat techniques",
        "Haki techniques",
        "Nika techniques",
        "Conqueror techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Straw Hat",
        "Haki",
        "Nika",
      ],
    }),
    createTournamentForm({
      id: "one-piece-monkey-d-luffy-2",
      name: "Gear Fourth Luffy",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 67,
        realPower: 67,
        hax: 52,
        speed: 66,
        durability: 61,
        intelligence: 67,
        attack: 71,
        defense: 59,
        stamina: 70,
        versatility: 66,
      },
      abilities: [
        "Straw Hat techniques",
        "Haki techniques",
        "Nika techniques",
        "Conqueror techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Straw Hat",
        "Haki",
        "Nika",
      ],
    }),
    createTournamentForm({
      id: "one-piece-monkey-d-luffy-3",
      name: "Gear Fifth Luffy",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 85,
        realPower: 85,
        hax: 67,
        speed: 78,
        durability: 71,
        intelligence: 75,
        attack: 86,
        defense: 69,
        stamina: 80,
        versatility: 78,
      },
      abilities: [
        "Straw Hat techniques",
        "Haki techniques",
        "Nika techniques",
        "Conqueror techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Straw Hat",
        "Haki",
        "Nika",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 02 — RORONOA ZORO
========================================================= */

export const RORONOA_ZORO = createTournamentCharacter({
  id: "one-piece-roronoa-zoro",
  verseId: "one-piece",
  name: "Roronoa Zoro",
  aliases: [
    "Pre-Timeskip Zoro",
    "King of Hell Zoro",
  ],
  tags: [
    "Swordsman",
    "Haki",
    "Enma",
    "Conqueror",
  ],
  seedRating: 85,
  description: "A master swordsman with supreme cutting power.",
  specialTraits: [
    "Swordsman",
    "Haki",
    "Enma",
    "Conqueror",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-roronoa-zoro-1",
      name: "Pre-Timeskip Zoro",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 53,
        realPower: 53,
        hax: 39,
        speed: 58,
        durability: 54,
        intelligence: 63,
        attack: 60,
        defense: 53,
        stamina: 65,
        versatility: 58,
      },
      abilities: [
        "Swordsman techniques",
        "Haki techniques",
        "Enma techniques",
        "Conqueror techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Swordsman",
        "Haki",
        "Enma",
      ],
    }),
    createTournamentForm({
      id: "one-piece-roronoa-zoro-2",
      name: "King of Hell Zoro",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 71,
        realPower: 71,
        hax: 54,
        speed: 70,
        durability: 64,
        intelligence: 71,
        attack: 75,
        defense: 63,
        stamina: 75,
        versatility: 70,
      },
      abilities: [
        "Swordsman techniques",
        "Haki techniques",
        "Enma techniques",
        "Conqueror techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Swordsman",
        "Haki",
        "Enma",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 03 — SANJI
========================================================= */

export const SANJI = createTournamentCharacter({
  id: "one-piece-sanji",
  verseId: "one-piece",
  name: "Sanji",
  aliases: [
    "Raid Suit Sanji",
    "Awakened Sanji",
  ],
  tags: [
    "Genetics",
    "Ifrit Jambe",
    "Speed",
    "Observation",
  ],
  seedRating: 90,
  description: "A genetically enhanced fighter with extreme speed and durability.",
  specialTraits: [
    "Genetics",
    "Ifrit Jambe",
    "Speed",
    "Observation",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-sanji-1",
      name: "Raid Suit Sanji",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 57,
        realPower: 57,
        hax: 41,
        speed: 62,
        durability: 57,
        intelligence: 67,
        attack: 64,
        defense: 57,
        stamina: 70,
        versatility: 62,
      },
      abilities: [
        "Genetics techniques",
        "Ifrit Jambe techniques",
        "Speed techniques",
        "Observation techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Genetics",
        "Ifrit Jambe",
        "Speed",
      ],
    }),
    createTournamentForm({
      id: "one-piece-sanji-2",
      name: "Awakened Sanji",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 75,
        realPower: 75,
        hax: 56,
        speed: 74,
        durability: 67,
        intelligence: 75,
        attack: 79,
        defense: 67,
        stamina: 80,
        versatility: 74,
      },
      abilities: [
        "Genetics techniques",
        "Ifrit Jambe techniques",
        "Speed techniques",
        "Observation techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Genetics",
        "Ifrit Jambe",
        "Speed",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 04 — SHANKS
========================================================= */

export const SHANKS = createTournamentCharacter({
  id: "one-piece-shanks",
  verseId: "one-piece",
  name: "Shanks",
  aliases: [
    "Young Shanks",
    "Yonko Shanks",
  ],
  tags: [
    "Yonko",
    "Conqueror Haki",
    "Swordsmanship",
  ],
  seedRating: 95,
  description: "A Yonko whose supreme Haki defines elite combat.",
  specialTraits: [
    "Yonko",
    "Conqueror Haki",
    "Swordsmanship",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-shanks-1",
      name: "Young Shanks",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 61,
        realPower: 61,
        hax: 43,
        speed: 66,
        durability: 60,
        intelligence: 71,
        attack: 68,
        defense: 61,
        stamina: 75,
        versatility: 66,
      },
      abilities: [
        "Yonko techniques",
        "Conqueror Haki techniques",
        "Swordsmanship techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Conqueror Haki",
        "Swordsmanship",
      ],
    }),
    createTournamentForm({
      id: "one-piece-shanks-2",
      name: "Yonko Shanks",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 79,
        realPower: 79,
        hax: 58,
        speed: 78,
        durability: 70,
        intelligence: 79,
        attack: 83,
        defense: 71,
        stamina: 85,
        versatility: 78,
      },
      abilities: [
        "Yonko techniques",
        "Conqueror Haki techniques",
        "Swordsmanship techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Conqueror Haki",
        "Swordsmanship",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 05 — MARSHALL D. TEACH
========================================================= */

export const MARSHALL_D_TEACH = createTournamentCharacter({
  id: "one-piece-marshall-d-teach",
  verseId: "one-piece",
  name: "Marshall D. Teach",
  aliases: [
    "Blackbeard",
    "Two Devil Fruits Blackbeard",
  ],
  tags: [
    "Yonko",
    "Yami Yami",
    "Gura Gura",
    "Devil Fruits",
  ],
  seedRating: 100,
  description: "A Yonko wielding darkness and quake powers.",
  specialTraits: [
    "Yonko",
    "Yami Yami",
    "Gura Gura",
    "Devil Fruits",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-marshall-d-teach-1",
      name: "Blackbeard",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 65,
        realPower: 65,
        hax: 45,
        speed: 70,
        durability: 63,
        intelligence: 75,
        attack: 72,
        defense: 65,
        stamina: 80,
        versatility: 70,
      },
      abilities: [
        "Yonko techniques",
        "Yami Yami techniques",
        "Gura Gura techniques",
        "Devil Fruits techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Yami Yami",
        "Gura Gura",
      ],
    }),
    createTournamentForm({
      id: "one-piece-marshall-d-teach-2",
      name: "Two Devil Fruits Blackbeard",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 83,
        realPower: 83,
        hax: 60,
        speed: 82,
        durability: 73,
        intelligence: 83,
        attack: 87,
        defense: 75,
        stamina: 90,
        versatility: 82,
      },
      abilities: [
        "Yonko techniques",
        "Yami Yami techniques",
        "Gura Gura techniques",
        "Devil Fruits techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Yami Yami",
        "Gura Gura",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 06 — KAIDO
========================================================= */

export const KAIDO = createTournamentCharacter({
  id: "one-piece-kaido",
  verseId: "one-piece",
  name: "Kaido",
  aliases: [
    "Base Kaido",
    "Hybrid Kaido",
  ],
  tags: [
    "Yonko",
    "Mythical Zoan",
    "Conqueror Haki",
    "Dragon",
  ],
  seedRating: 75,
  description: "A mythical dragon with enormous durability and Haki.",
  specialTraits: [
    "Yonko",
    "Mythical Zoan",
    "Conqueror Haki",
    "Dragon",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-kaido-1",
      name: "Base Kaido",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 69,
        realPower: 69,
        hax: 47,
        speed: 74,
        durability: 66,
        intelligence: 79,
        attack: 76,
        defense: 69,
        stamina: 85,
        versatility: 74,
      },
      abilities: [
        "Yonko techniques",
        "Mythical Zoan techniques",
        "Conqueror Haki techniques",
        "Dragon techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Mythical Zoan",
        "Conqueror Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-kaido-2",
      name: "Hybrid Kaido",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 87,
        realPower: 87,
        hax: 62,
        speed: 86,
        durability: 76,
        intelligence: 87,
        attack: 91,
        defense: 79,
        stamina: 95,
        versatility: 86,
      },
      abilities: [
        "Yonko techniques",
        "Mythical Zoan techniques",
        "Conqueror Haki techniques",
        "Dragon techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Mythical Zoan",
        "Conqueror Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 07 — BIG MOM
========================================================= */

export const BIG_MOM = createTournamentCharacter({
  id: "one-piece-big-mom",
  verseId: "one-piece",
  name: "Big Mom",
  aliases: [
    "Charlotte Linlin",
    "Mother Mode Big Mom",
  ],
  tags: [
    "Yonko",
    "Soul-Soul",
    "Conqueror Haki",
    "Homies",
  ],
  seedRating: 80,
  description: "A monstrous Emperor controlling souls and homies.",
  specialTraits: [
    "Yonko",
    "Soul-Soul",
    "Conqueror Haki",
    "Homies",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-big-mom-1",
      name: "Charlotte Linlin",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 73,
        realPower: 73,
        hax: 49,
        speed: 78,
        durability: 69,
        intelligence: 83,
        attack: 80,
        defense: 73,
        stamina: 90,
        versatility: 78,
      },
      abilities: [
        "Yonko techniques",
        "Soul-Soul techniques",
        "Conqueror Haki techniques",
        "Homies techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Soul-Soul",
        "Conqueror Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-big-mom-2",
      name: "Mother Mode Big Mom",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 64,
        speed: 90,
        durability: 79,
        intelligence: 91,
        attack: 95,
        defense: 83,
        stamina: 100,
        versatility: 90,
      },
      abilities: [
        "Yonko techniques",
        "Soul-Soul techniques",
        "Conqueror Haki techniques",
        "Homies techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Soul-Soul",
        "Conqueror Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 08 — GOL D. ROGER
========================================================= */

export const GOL_D_ROGER = createTournamentCharacter({
  id: "one-piece-gol-d-roger",
  verseId: "one-piece",
  name: "Gol D. Roger",
  aliases: [
    "Roger",
    "Pirate King Roger",
  ],
  tags: [
    "Pirate King",
    "Conqueror Haki",
    "Swordsmanship",
  ],
  seedRating: 85,
  description: "The Pirate King and supreme Haki master of the old era.",
  specialTraits: [
    "Pirate King",
    "Conqueror Haki",
    "Swordsmanship",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-gol-d-roger-1",
      name: "Roger",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 77,
        realPower: 77,
        hax: 51,
        speed: 82,
        durability: 72,
        intelligence: 87,
        attack: 84,
        defense: 77,
        stamina: 55,
        versatility: 82,
      },
      abilities: [
        "Pirate King techniques",
        "Conqueror Haki techniques",
        "Swordsmanship techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Pirate King",
        "Conqueror Haki",
        "Swordsmanship",
      ],
    }),
    createTournamentForm({
      id: "one-piece-gol-d-roger-2",
      name: "Pirate King Roger",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 95,
        realPower: 95,
        hax: 66,
        speed: 94,
        durability: 82,
        intelligence: 95,
        attack: 99,
        defense: 87,
        stamina: 65,
        versatility: 94,
      },
      abilities: [
        "Pirate King techniques",
        "Conqueror Haki techniques",
        "Swordsmanship techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Pirate King",
        "Conqueror Haki",
        "Swordsmanship",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 09 — WHITEBEARD
========================================================= */

export const WHITEBEARD = createTournamentCharacter({
  id: "one-piece-whitebeard",
  verseId: "one-piece",
  name: "Whitebeard",
  aliases: [
    "Prime Whitebeard",
    "Old Whitebeard",
  ],
  tags: [
    "Yonko",
    "Gura Gura",
    "Conqueror Haki",
  ],
  seedRating: 90,
  description: "A legendary quake user with monstrous physical power.",
  specialTraits: [
    "Yonko",
    "Gura Gura",
    "Conqueror Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-whitebeard-1",
      name: "Prime Whitebeard",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 81,
        realPower: 81,
        hax: 53,
        speed: 86,
        durability: 75,
        intelligence: 55,
        attack: 88,
        defense: 81,
        stamina: 60,
        versatility: 86,
      },
      abilities: [
        "Yonko techniques",
        "Gura Gura techniques",
        "Conqueror Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Gura Gura",
        "Conqueror Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-whitebeard-2",
      name: "Old Whitebeard",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 99,
        realPower: 99,
        hax: 68,
        speed: 98,
        durability: 85,
        intelligence: 63,
        attack: 100,
        defense: 91,
        stamina: 70,
        versatility: 98,
      },
      abilities: [
        "Yonko techniques",
        "Gura Gura techniques",
        "Conqueror Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Yonko",
        "Gura Gura",
        "Conqueror Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 10 — DRACULE MIHAWK
========================================================= */

export const DRACULE_MIHAWK = createTournamentCharacter({
  id: "one-piece-dracule-mihawk",
  verseId: "one-piece",
  name: "Dracule Mihawk",
  aliases: [
    "Mihawk",
    "Worlds Strongest Swordsman",
  ],
  tags: [
    "Swordsman",
    "Black Blade",
    "Observation Haki",
  ],
  seedRating: 95,
  description: "The world’s strongest swordsman.",
  specialTraits: [
    "Swordsman",
    "Black Blade",
    "Observation Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-dracule-mihawk-1",
      name: "Mihawk",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 45,
        realPower: 45,
        hax: 55,
        speed: 50,
        durability: 78,
        intelligence: 59,
        attack: 92,
        defense: 45,
        stamina: 65,
        versatility: 50,
      },
      abilities: [
        "Swordsman techniques",
        "Black Blade techniques",
        "Observation Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Swordsman",
        "Black Blade",
        "Observation Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-dracule-mihawk-2",
      name: "Worlds Strongest Swordsman",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 63,
        realPower: 63,
        hax: 70,
        speed: 62,
        durability: 88,
        intelligence: 67,
        attack: 100,
        defense: 55,
        stamina: 75,
        versatility: 62,
      },
      abilities: [
        "Swordsman techniques",
        "Black Blade techniques",
        "Observation Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Swordsman",
        "Black Blade",
        "Observation Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 11 — AKAINU
========================================================= */

export const AKAINU = createTournamentCharacter({
  id: "one-piece-akainu",
  verseId: "one-piece",
  name: "Akainu",
  aliases: [
    "Sakazuki",
    "Fleet Admiral Akainu",
  ],
  tags: [
    "Magma",
    "Admiral",
    "Haki",
  ],
  seedRating: 100,
  description: "A magma Logia with extreme offense and endurance.",
  specialTraits: [
    "Magma",
    "Admiral",
    "Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-akainu-1",
      name: "Sakazuki",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 49,
        realPower: 49,
        hax: 57,
        speed: 54,
        durability: 81,
        intelligence: 63,
        attack: 52,
        defense: 49,
        stamina: 70,
        versatility: 54,
      },
      abilities: [
        "Magma techniques",
        "Admiral techniques",
        "Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Magma",
        "Admiral",
        "Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-akainu-2",
      name: "Fleet Admiral Akainu",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 67,
        realPower: 67,
        hax: 72,
        speed: 66,
        durability: 91,
        intelligence: 71,
        attack: 67,
        defense: 59,
        stamina: 80,
        versatility: 66,
      },
      abilities: [
        "Magma techniques",
        "Admiral techniques",
        "Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Magma",
        "Admiral",
        "Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 12 — AOKIJI
========================================================= */

export const AOKIJI = createTournamentCharacter({
  id: "one-piece-aokiji",
  verseId: "one-piece",
  name: "Aokiji",
  aliases: [
    "Kuzan",
    "Ice Admiral",
  ],
  tags: [
    "Ice",
    "Logia",
    "Admiral",
  ],
  seedRating: 75,
  description: "An ice Logia with enormous battlefield control.",
  specialTraits: [
    "Ice",
    "Logia",
    "Admiral",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-aokiji-1",
      name: "Kuzan",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 53,
        realPower: 53,
        hax: 59,
        speed: 58,
        durability: 48,
        intelligence: 67,
        attack: 56,
        defense: 53,
        stamina: 75,
        versatility: 58,
      },
      abilities: [
        "Ice techniques",
        "Logia techniques",
        "Admiral techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ice",
        "Logia",
        "Admiral",
      ],
    }),
    createTournamentForm({
      id: "one-piece-aokiji-2",
      name: "Ice Admiral",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 71,
        realPower: 71,
        hax: 74,
        speed: 70,
        durability: 58,
        intelligence: 75,
        attack: 71,
        defense: 63,
        stamina: 85,
        versatility: 70,
      },
      abilities: [
        "Ice techniques",
        "Logia techniques",
        "Admiral techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ice",
        "Logia",
        "Admiral",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 13 — KIZARU
========================================================= */

export const KIZARU = createTournamentCharacter({
  id: "one-piece-kizaru",
  verseId: "one-piece",
  name: "Kizaru",
  aliases: [
    "Borsalino",
    "Light Admiral",
  ],
  tags: [
    "Light",
    "Logia",
    "Admiral",
  ],
  seedRating: 80,
  description: "A light Logia capable of extreme speed.",
  specialTraits: [
    "Light",
    "Logia",
    "Admiral",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-kizaru-1",
      name: "Borsalino",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 57,
        realPower: 57,
        hax: 61,
        speed: 62,
        durability: 51,
        intelligence: 71,
        attack: 60,
        defense: 57,
        stamina: 80,
        versatility: 62,
      },
      abilities: [
        "Light techniques",
        "Logia techniques",
        "Admiral techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Light",
        "Logia",
        "Admiral",
      ],
    }),
    createTournamentForm({
      id: "one-piece-kizaru-2",
      name: "Light Admiral",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 75,
        realPower: 75,
        hax: 76,
        speed: 74,
        durability: 61,
        intelligence: 79,
        attack: 75,
        defense: 67,
        stamina: 90,
        versatility: 74,
      },
      abilities: [
        "Light techniques",
        "Logia techniques",
        "Admiral techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Light",
        "Logia",
        "Admiral",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 14 — FUJITORA
========================================================= */

export const FUJITORA = createTournamentCharacter({
  id: "one-piece-fujitora",
  verseId: "one-piece",
  name: "Fujitora",
  aliases: [
    "Issho",
    "Gravity Admiral",
  ],
  tags: [
    "Gravity",
    "Admiral",
    "Observation Haki",
  ],
  seedRating: 85,
  description: "An Admiral whose gravity manipulation controls huge areas.",
  specialTraits: [
    "Gravity",
    "Admiral",
    "Observation Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-fujitora-1",
      name: "Issho",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 61,
        realPower: 61,
        hax: 63,
        speed: 66,
        durability: 54,
        intelligence: 75,
        attack: 64,
        defense: 61,
        stamina: 85,
        versatility: 66,
      },
      abilities: [
        "Gravity techniques",
        "Admiral techniques",
        "Observation Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Gravity",
        "Admiral",
        "Observation Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-fujitora-2",
      name: "Gravity Admiral",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 79,
        realPower: 79,
        hax: 78,
        speed: 78,
        durability: 64,
        intelligence: 83,
        attack: 79,
        defense: 71,
        stamina: 95,
        versatility: 78,
      },
      abilities: [
        "Gravity techniques",
        "Admiral techniques",
        "Observation Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Gravity",
        "Admiral",
        "Observation Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 15 — TRAFALGAR LAW
========================================================= */

export const TRAFALGAR_LAW = createTournamentCharacter({
  id: "one-piece-trafalgar-law",
  verseId: "one-piece",
  name: "Trafalgar Law",
  aliases: [
    "Dressrosa Law",
    "Awakening Law",
  ],
  tags: [
    "Ope Ope",
    "Awakening",
    "Supernova",
  ],
  seedRating: 90,
  description: "A spatial surgeon with devastating awakening techniques.",
  specialTraits: [
    "Ope Ope",
    "Awakening",
    "Supernova",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-trafalgar-law-1",
      name: "Dressrosa Law",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 65,
        realPower: 65,
        hax: 65,
        speed: 70,
        durability: 57,
        intelligence: 79,
        attack: 68,
        defense: 65,
        stamina: 90,
        versatility: 70,
      },
      abilities: [
        "Ope Ope techniques",
        "Awakening techniques",
        "Supernova techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ope Ope",
        "Awakening",
        "Supernova",
      ],
    }),
    createTournamentForm({
      id: "one-piece-trafalgar-law-2",
      name: "Awakening Law",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 83,
        realPower: 83,
        hax: 80,
        speed: 82,
        durability: 67,
        intelligence: 87,
        attack: 83,
        defense: 75,
        stamina: 100,
        versatility: 82,
      },
      abilities: [
        "Ope Ope techniques",
        "Awakening techniques",
        "Supernova techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ope Ope",
        "Awakening",
        "Supernova",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 16 — EUSTASS KID
========================================================= */

export const EUSTASS_KID = createTournamentCharacter({
  id: "one-piece-eustass-kid",
  verseId: "one-piece",
  name: "Eustass Kid",
  aliases: [
    "Kid",
    "Awakening Kid",
  ],
  tags: [
    "Magnetism",
    "Awakening",
    "Supernova",
  ],
  seedRating: 95,
  description: "A magnetic fighter creating enormous metal attacks.",
  specialTraits: [
    "Magnetism",
    "Awakening",
    "Supernova",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-eustass-kid-1",
      name: "Kid",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 69,
        realPower: 69,
        hax: 67,
        speed: 74,
        durability: 60,
        intelligence: 83,
        attack: 72,
        defense: 69,
        stamina: 55,
        versatility: 74,
      },
      abilities: [
        "Magnetism techniques",
        "Awakening techniques",
        "Supernova techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Magnetism",
        "Awakening",
        "Supernova",
      ],
    }),
    createTournamentForm({
      id: "one-piece-eustass-kid-2",
      name: "Awakening Kid",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 87,
        realPower: 87,
        hax: 82,
        speed: 86,
        durability: 70,
        intelligence: 91,
        attack: 87,
        defense: 79,
        stamina: 65,
        versatility: 86,
      },
      abilities: [
        "Magnetism techniques",
        "Awakening techniques",
        "Supernova techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Magnetism",
        "Awakening",
        "Supernova",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 17 — BOA HANCOCK
========================================================= */

export const BOA_HANCOCK = createTournamentCharacter({
  id: "one-piece-boa-hancock",
  verseId: "one-piece",
  name: "Boa Hancock",
  aliases: [
    "Pirate Empress",
    "Mero Mero Hancock",
  ],
  tags: [
    "Mero Mero",
    "Conqueror Haki",
    "Kuja",
  ],
  seedRating: 100,
  description: "A petrification specialist with strong Haki.",
  specialTraits: [
    "Mero Mero",
    "Conqueror Haki",
    "Kuja",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-boa-hancock-1",
      name: "Pirate Empress",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 73,
        realPower: 73,
        hax: 69,
        speed: 78,
        durability: 63,
        intelligence: 87,
        attack: 76,
        defense: 73,
        stamina: 60,
        versatility: 78,
      },
      abilities: [
        "Mero Mero techniques",
        "Conqueror Haki techniques",
        "Kuja techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Mero Mero",
        "Conqueror Haki",
        "Kuja",
      ],
    }),
    createTournamentForm({
      id: "one-piece-boa-hancock-2",
      name: "Mero Mero Hancock",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 84,
        speed: 90,
        durability: 73,
        intelligence: 95,
        attack: 91,
        defense: 83,
        stamina: 70,
        versatility: 90,
      },
      abilities: [
        "Mero Mero techniques",
        "Conqueror Haki techniques",
        "Kuja techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Mero Mero",
        "Conqueror Haki",
        "Kuja",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 18 — DONQUIXOTE DOFLAMINGO
========================================================= */

export const DONQUIXOTE_DOFLAMINGO = createTournamentCharacter({
  id: "one-piece-donquixote-doflamingo",
  verseId: "one-piece",
  name: "Donquixote Doflamingo",
  aliases: [
    "Doffy",
    "Awakened Dofflamingo",
  ],
  tags: [
    "String",
    "Awakening",
    "Conqueror Haki",
  ],
  seedRating: 75,
  description: "A string manipulator with awakening.",
  specialTraits: [
    "String",
    "Awakening",
    "Conqueror Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-donquixote-doflamingo-1",
      name: "Doffy",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 77,
        realPower: 77,
        hax: 71,
        speed: 82,
        durability: 66,
        intelligence: 55,
        attack: 80,
        defense: 77,
        stamina: 65,
        versatility: 82,
      },
      abilities: [
        "String techniques",
        "Awakening techniques",
        "Conqueror Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "String",
        "Awakening",
        "Conqueror Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-donquixote-doflamingo-2",
      name: "Awakened Dofflamingo",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 95,
        realPower: 95,
        hax: 86,
        speed: 94,
        durability: 76,
        intelligence: 63,
        attack: 95,
        defense: 87,
        stamina: 75,
        versatility: 94,
      },
      abilities: [
        "String techniques",
        "Awakening techniques",
        "Conqueror Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "String",
        "Awakening",
        "Conqueror Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 19 — CROCODILE
========================================================= */

export const CROCODILE = createTournamentCharacter({
  id: "one-piece-crocodile",
  verseId: "one-piece",
  name: "Crocodile",
  aliases: [
    "Alabasta Crocodile",
    "Post-War Crocodile",
  ],
  tags: [
    "Sand",
    "Logia",
    "Haki",
  ],
  seedRating: 80,
  description: "A sand Logia with dehydration and battlefield control.",
  specialTraits: [
    "Sand",
    "Logia",
    "Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-crocodile-1",
      name: "Alabasta Crocodile",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 81,
        realPower: 81,
        hax: 73,
        speed: 86,
        durability: 69,
        intelligence: 59,
        attack: 84,
        defense: 81,
        stamina: 70,
        versatility: 86,
      },
      abilities: [
        "Sand techniques",
        "Logia techniques",
        "Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sand",
        "Logia",
        "Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-crocodile-2",
      name: "Post-War Crocodile",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 99,
        realPower: 99,
        hax: 88,
        speed: 98,
        durability: 79,
        intelligence: 67,
        attack: 99,
        defense: 91,
        stamina: 80,
        versatility: 98,
      },
      abilities: [
        "Sand techniques",
        "Logia techniques",
        "Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sand",
        "Logia",
        "Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 20 — ENEL
========================================================= */

export const ENEL = createTournamentCharacter({
  id: "one-piece-enel",
  verseId: "one-piece",
  name: "Enel",
  aliases: [
    "God Enel",
    "Lightning Enel",
  ],
  tags: [
    "Rumble Rumble",
    "Lightning",
    "Mantra",
  ],
  seedRating: 85,
  description: "A lightning Logia with enormous range.",
  specialTraits: [
    "Rumble Rumble",
    "Lightning",
    "Mantra",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-enel-1",
      name: "God Enel",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 45,
        realPower: 45,
        hax: 75,
        speed: 50,
        durability: 72,
        intelligence: 63,
        attack: 88,
        defense: 45,
        stamina: 75,
        versatility: 50,
      },
      abilities: [
        "Rumble Rumble techniques",
        "Lightning techniques",
        "Mantra techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Rumble Rumble",
        "Lightning",
        "Mantra",
      ],
    }),
    createTournamentForm({
      id: "one-piece-enel-2",
      name: "Lightning Enel",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 63,
        realPower: 63,
        hax: 90,
        speed: 62,
        durability: 82,
        intelligence: 71,
        attack: 100,
        defense: 55,
        stamina: 85,
        versatility: 62,
      },
      abilities: [
        "Rumble Rumble techniques",
        "Lightning techniques",
        "Mantra techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Rumble Rumble",
        "Lightning",
        "Mantra",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 21 — ROB LUCCI
========================================================= */

export const ROB_LUCCI = createTournamentCharacter({
  id: "one-piece-rob-lucci",
  verseId: "one-piece",
  name: "Rob Lucci",
  aliases: [
    "CP9 Lucci",
    "Awakened Lucci",
  ],
  tags: [
    "Zoan",
    "Rokushiki",
    "Haki",
    "Awakening",
  ],
  seedRating: 90,
  description: "An elite assassin with awakened Zoan power.",
  specialTraits: [
    "Zoan",
    "Rokushiki",
    "Haki",
    "Awakening",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-rob-lucci-1",
      name: "CP9 Lucci",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 49,
        realPower: 49,
        hax: 77,
        speed: 54,
        durability: 75,
        intelligence: 67,
        attack: 92,
        defense: 49,
        stamina: 80,
        versatility: 54,
      },
      abilities: [
        "Zoan techniques",
        "Rokushiki techniques",
        "Haki techniques",
        "Awakening techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Zoan",
        "Rokushiki",
        "Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-rob-lucci-2",
      name: "Awakened Lucci",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 67,
        realPower: 67,
        hax: 92,
        speed: 66,
        durability: 85,
        intelligence: 75,
        attack: 100,
        defense: 59,
        stamina: 90,
        versatility: 66,
      },
      abilities: [
        "Zoan techniques",
        "Rokushiki techniques",
        "Haki techniques",
        "Awakening techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Zoan",
        "Rokushiki",
        "Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 22 — KATAKURI
========================================================= */

export const KATAKURI = createTournamentCharacter({
  id: "one-piece-katakuri",
  verseId: "one-piece",
  name: "Katakuri",
  aliases: [
    "Sweet Commander Katakuri",
    "Future Sight Katakuri",
  ],
  tags: [
    "Mochi",
    "Future Sight",
    "Conqueror Haki",
  ],
  seedRating: 95,
  description: "A future-sight user with awakened Mochi.",
  specialTraits: [
    "Mochi",
    "Future Sight",
    "Conqueror Haki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-katakuri-1",
      name: "Sweet Commander Katakuri",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 53,
        realPower: 53,
        hax: 79,
        speed: 58,
        durability: 78,
        intelligence: 71,
        attack: 52,
        defense: 53,
        stamina: 85,
        versatility: 58,
      },
      abilities: [
        "Mochi techniques",
        "Future Sight techniques",
        "Conqueror Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Mochi",
        "Future Sight",
        "Conqueror Haki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-katakuri-2",
      name: "Future Sight Katakuri",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 71,
        realPower: 71,
        hax: 94,
        speed: 70,
        durability: 88,
        intelligence: 79,
        attack: 67,
        defense: 63,
        stamina: 95,
        versatility: 70,
      },
      abilities: [
        "Mochi techniques",
        "Future Sight techniques",
        "Conqueror Haki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Mochi",
        "Future Sight",
        "Conqueror Haki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 23 — MARCO
========================================================= */

export const MARCO = createTournamentCharacter({
  id: "one-piece-marco",
  verseId: "one-piece",
  name: "Marco",
  aliases: [
    "Phoenix Marco",
    "Regen Marco",
  ],
  tags: [
    "Phoenix Zoan",
    "Regeneration",
    "Whitebeard",
  ],
  seedRating: 100,
  description: "A mythical Phoenix with extreme regeneration.",
  specialTraits: [
    "Phoenix Zoan",
    "Regeneration",
    "Whitebeard",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-marco-1",
      name: "Phoenix Marco",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 57,
        realPower: 57,
        hax: 81,
        speed: 62,
        durability: 81,
        intelligence: 75,
        attack: 56,
        defense: 57,
        stamina: 90,
        versatility: 62,
      },
      abilities: [
        "Phoenix Zoan techniques",
        "Regeneration techniques",
        "Whitebeard techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Phoenix Zoan",
        "Regeneration",
        "Whitebeard",
      ],
    }),
    createTournamentForm({
      id: "one-piece-marco-2",
      name: "Regen Marco",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 75,
        realPower: 75,
        hax: 96,
        speed: 74,
        durability: 91,
        intelligence: 83,
        attack: 71,
        defense: 67,
        stamina: 100,
        versatility: 74,
      },
      abilities: [
        "Phoenix Zoan techniques",
        "Regeneration techniques",
        "Whitebeard techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Phoenix Zoan",
        "Regeneration",
        "Whitebeard",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 24 — YAMATO
========================================================= */

export const YAMATO = createTournamentCharacter({
  id: "one-piece-yamato",
  verseId: "one-piece",
  name: "Yamato",
  aliases: [
    "Yamato",
    "Hybrid Yamato",
  ],
  tags: [
    "Mythical Zoan",
    "Haki",
    "Ice",
  ],
  seedRating: 75,
  description: "A mythical Zoan user with advanced Haki.",
  specialTraits: [
    "Mythical Zoan",
    "Haki",
    "Ice",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-yamato-1",
      name: "Yamato",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 61,
        realPower: 61,
        hax: 83,
        speed: 66,
        durability: 48,
        intelligence: 79,
        attack: 60,
        defense: 61,
        stamina: 55,
        versatility: 66,
      },
      abilities: [
        "Mythical Zoan techniques",
        "Haki techniques",
        "Ice techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Mythical Zoan",
        "Haki",
        "Ice",
      ],
    }),
    createTournamentForm({
      id: "one-piece-yamato-2",
      name: "Hybrid Yamato",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 79,
        realPower: 79,
        hax: 98,
        speed: 78,
        durability: 58,
        intelligence: 87,
        attack: 75,
        defense: 71,
        stamina: 65,
        versatility: 78,
      },
      abilities: [
        "Mythical Zoan techniques",
        "Haki techniques",
        "Ice techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Mythical Zoan",
        "Haki",
        "Ice",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 25 — JINBE
========================================================= */

export const JINBE = createTournamentCharacter({
  id: "one-piece-jinbe",
  verseId: "one-piece",
  name: "Jinbe",
  aliases: [
    "Warlord Jinbe",
    "Fish-Man Karate Jinbe",
  ],
  tags: [
    "Fish-Man Karate",
    "Haki",
    "Warlord",
  ],
  seedRating: 80,
  description: "A powerful martial artist and defender.",
  specialTraits: [
    "Fish-Man Karate",
    "Haki",
    "Warlord",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-jinbe-1",
      name: "Warlord Jinbe",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 65,
        realPower: 65,
        hax: 85,
        speed: 70,
        durability: 51,
        intelligence: 83,
        attack: 64,
        defense: 65,
        stamina: 60,
        versatility: 70,
      },
      abilities: [
        "Fish-Man Karate techniques",
        "Haki techniques",
        "Warlord techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fish-Man Karate",
        "Haki",
        "Warlord",
      ],
    }),
    createTournamentForm({
      id: "one-piece-jinbe-2",
      name: "Fish-Man Karate Jinbe",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 83,
        realPower: 83,
        hax: 100,
        speed: 82,
        durability: 61,
        intelligence: 91,
        attack: 79,
        defense: 75,
        stamina: 70,
        versatility: 82,
      },
      abilities: [
        "Fish-Man Karate techniques",
        "Haki techniques",
        "Warlord techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fish-Man Karate",
        "Haki",
        "Warlord",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 26 — KOBY
========================================================= */

export const KOBY = createTournamentCharacter({
  id: "one-piece-koby",
  verseId: "one-piece",
  name: "Koby",
  aliases: [
    "Marine Koby",
    "Honesty Impact Koby",
  ],
  tags: [
    "Observation Haki",
    "Marine",
    "Rokushiki",
  ],
  seedRating: 85,
  description: "A rapidly developing Marine fighter.",
  specialTraits: [
    "Observation Haki",
    "Marine",
    "Rokushiki",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-koby-1",
      name: "Marine Koby",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 69,
        realPower: 69,
        hax: 87,
        speed: 74,
        durability: 54,
        intelligence: 87,
        attack: 68,
        defense: 69,
        stamina: 65,
        versatility: 74,
      },
      abilities: [
        "Observation Haki techniques",
        "Marine techniques",
        "Rokushiki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Observation Haki",
        "Marine",
        "Rokushiki",
      ],
    }),
    createTournamentForm({
      id: "one-piece-koby-2",
      name: "Honesty Impact Koby",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 87,
        realPower: 87,
        hax: 100,
        speed: 86,
        durability: 64,
        intelligence: 95,
        attack: 83,
        defense: 79,
        stamina: 75,
        versatility: 86,
      },
      abilities: [
        "Observation Haki techniques",
        "Marine techniques",
        "Rokushiki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Observation Haki",
        "Marine",
        "Rokushiki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 27 — GARP
========================================================= */

export const GARP = createTournamentCharacter({
  id: "one-piece-garp",
  verseId: "one-piece",
  name: "Garp",
  aliases: [
    "Vice Admiral Garp",
    "Prime Garp",
  ],
  tags: [
    "Marine",
    "Conqueror Haki",
    "Galaxy Impact",
  ],
  seedRating: 90,
  description: "A legendary Marine hero with monstrous physical power.",
  specialTraits: [
    "Marine",
    "Conqueror Haki",
    "Galaxy Impact",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-garp-1",
      name: "Vice Admiral Garp",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 73,
        realPower: 73,
        hax: 89,
        speed: 78,
        durability: 57,
        intelligence: 55,
        attack: 72,
        defense: 73,
        stamina: 70,
        versatility: 78,
      },
      abilities: [
        "Marine techniques",
        "Conqueror Haki techniques",
        "Galaxy Impact techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Marine",
        "Conqueror Haki",
        "Galaxy Impact",
      ],
    }),
    createTournamentForm({
      id: "one-piece-garp-2",
      name: "Prime Garp",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 91,
        realPower: 91,
        hax: 100,
        speed: 90,
        durability: 67,
        intelligence: 63,
        attack: 87,
        defense: 83,
        stamina: 80,
        versatility: 90,
      },
      abilities: [
        "Marine techniques",
        "Conqueror Haki techniques",
        "Galaxy Impact techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Marine",
        "Conqueror Haki",
        "Galaxy Impact",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 28 — SILVERS RAYLEIGH
========================================================= */

export const SILVERS_RAYLEIGH = createTournamentCharacter({
  id: "one-piece-silvers-rayleigh",
  verseId: "one-piece",
  name: "Silvers Rayleigh",
  aliases: [
    "Dark King Rayleigh",
    "Prime Rayleigh",
  ],
  tags: [
    "Haki",
    "Swordsmanship",
    "Roger Pirates",
  ],
  seedRating: 95,
  description: "Roger’s right-hand man and Haki master.",
  specialTraits: [
    "Haki",
    "Swordsmanship",
    "Roger Pirates",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-silvers-rayleigh-1",
      name: "Dark King Rayleigh",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 77,
        realPower: 77,
        hax: 91,
        speed: 82,
        durability: 60,
        intelligence: 59,
        attack: 76,
        defense: 77,
        stamina: 75,
        versatility: 82,
      },
      abilities: [
        "Haki techniques",
        "Swordsmanship techniques",
        "Roger Pirates techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Haki",
        "Swordsmanship",
        "Roger Pirates",
      ],
    }),
    createTournamentForm({
      id: "one-piece-silvers-rayleigh-2",
      name: "Prime Rayleigh",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 95,
        realPower: 95,
        hax: 100,
        speed: 94,
        durability: 70,
        intelligence: 67,
        attack: 91,
        defense: 87,
        stamina: 85,
        versatility: 94,
      },
      abilities: [
        "Haki techniques",
        "Swordsmanship techniques",
        "Roger Pirates techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Haki",
        "Swordsmanship",
        "Roger Pirates",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 29 — IMU
========================================================= */

export const IMU = createTournamentCharacter({
  id: "one-piece-imu",
  verseId: "one-piece",
  name: "Imu",
  aliases: [
    "Imu-sama",
    "Empty Throne Ruler",
  ],
  tags: [
    "World Government",
    "Mystery",
    "Hax",
  ],
  seedRating: 100,
  description: "The hidden ruler whose complete combat powers remain mysterious.",
  specialTraits: [
    "World Government",
    "Mystery",
    "Hax",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-imu-1",
      name: "Imu-sama",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 81,
        realPower: 81,
        hax: 93,
        speed: 86,
        durability: 63,
        intelligence: 63,
        attack: 80,
        defense: 81,
        stamina: 80,
        versatility: 86,
      },
      abilities: [
        "World Government techniques",
        "Mystery techniques",
        "Hax techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "World Government",
        "Mystery",
        "Hax",
      ],
    }),
    createTournamentForm({
      id: "one-piece-imu-2",
      name: "Empty Throne Ruler",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 99,
        realPower: 99,
        hax: 100,
        speed: 98,
        durability: 73,
        intelligence: 71,
        attack: 95,
        defense: 91,
        stamina: 90,
        versatility: 98,
      },
      abilities: [
        "World Government techniques",
        "Mystery techniques",
        "Hax techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "World Government",
        "Mystery",
        "Hax",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 30 — BOA SANDERSONIA
========================================================= */

export const BOA_SANDERSONIA = createTournamentCharacter({
  id: "one-piece-boa-sandersonia",
  verseId: "one-piece",
  name: "Boa Sandersonia",
  aliases: [
    "Sandersonia",
    "Kuja Warrior",
  ],
  tags: [
    "Kuja",
    "Haki",
    "Snake",
  ],
  seedRating: 75,
  description: "A Kuja warrior with serpent traits and Haki.",
  specialTraits: [
    "Kuja",
    "Haki",
    "Snake",
  ],
  forms: [
    createTournamentForm({
      id: "one-piece-boa-sandersonia-1",
      name: "Sandersonia",
      rank: 1,
      tier: "advanced",
      isBase: true,
      tournamentEligible: true,
      stats: {
        relativePower: 45,
        realPower: 45,
        hax: 95,
        speed: 50,
        durability: 66,
        intelligence: 67,
        attack: 84,
        defense: 45,
        stamina: 85,
        versatility: 50,
      },
      abilities: [
        "Kuja techniques",
        "Haki techniques",
        "Snake techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Kuja",
        "Haki",
        "Snake",
      ],
    }),
    createTournamentForm({
      id: "one-piece-boa-sandersonia-2",
      name: "Kuja Warrior",
      rank: 2,
      tier: "legendary",
      tournamentEligible: true,
      stats: {
        relativePower: 63,
        realPower: 63,
        hax: 100,
        speed: 62,
        durability: 76,
        intelligence: 75,
        attack: 99,
        defense: 55,
        stamina: 95,
        versatility: 62,
      },
      abilities: [
        "Kuja techniques",
        "Haki techniques",
        "Snake techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Kuja",
        "Haki",
        "Snake",
      ],
    }),
  ],
});

/* =========================================================
   FINAL DATABASE EXPORT — EXACTLY 30 CHARACTERS
========================================================= */
export const ONE_PIECE_CHARACTERS = [
  MONKEY_D_LUFFY,
  RORONOA_ZORO,
  SANJI,
  SHANKS,
  MARSHALL_D_TEACH,
  KAIDO,
  BIG_MOM,
  GOL_D_ROGER,
  WHITEBEARD,
  DRACULE_MIHAWK,
  AKAINU,
  AOKIJI,
  KIZARU,
  FUJITORA,
  TRAFALGAR_LAW,
  EUSTASS_KID,
  BOA_HANCOCK,
  DONQUIXOTE_DOFLAMINGO,
  CROCODILE,
  ENEL,
  ROB_LUCCI,
  KATAKURI,
  MARCO,
  YAMATO,
  JINBE,
  KOBY,
  GARP,
  SILVERS_RAYLEIGH,
  IMU,
  BOA_SANDERSONIA,
];
