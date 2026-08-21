/*
  Anime Arena — Grand Tournament
  Naruto Expanded Tournament Database
  30 CHARACTERS — NARUTO.JS-STYLE EXPANDED STANDARD
  Numerical values are Anime Arena balancing values, not official canon stats.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";

/* =========================================================
   CHARACTER 01 — NARUTO UZUMAKI
========================================================= */

export const NARUTO_UZUMAKI = createTournamentCharacter({
  id: "naruto-naruto-uzumaki",
  verseId: "naruto",
  name: "Naruto Uzumaki",
  aliases: [
    "Academy Naruto",
    "Sage Mode",
    "Six Paths Sage Mode",
  ],
  tags: [
    "Uzumaki",
    "Jinchuriki",
    "Sage",
    "Six Paths",
  ],
  seedRating: 80,
  description: "A shinobi whose shadow clones, tailed-beast chakra and Six Paths powers create extreme versatility.",
  specialTraits: [
    "Uzumaki",
    "Jinchuriki",
    "Sage",
    "Six Paths",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-naruto-uzumaki-1",
      name: "Academy Naruto",
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
        "Uzumaki techniques",
        "Jinchuriki techniques",
        "Sage techniques",
        "Six Paths techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uzumaki",
        "Jinchuriki",
        "Sage",
      ],
    }),
    createTournamentForm({
      id: "naruto-naruto-uzumaki-2",
      name: "Sage Mode",
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
        "Uzumaki techniques",
        "Jinchuriki techniques",
        "Sage techniques",
        "Six Paths techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uzumaki",
        "Jinchuriki",
        "Sage",
      ],
    }),
    createTournamentForm({
      id: "naruto-naruto-uzumaki-3",
      name: "Six Paths Sage Mode",
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
        "Uzumaki techniques",
        "Jinchuriki techniques",
        "Sage techniques",
        "Six Paths techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uzumaki",
        "Jinchuriki",
        "Sage",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 02 — SASUKE UCHIHA
========================================================= */

export const SASUKE_UCHIHA = createTournamentCharacter({
  id: "naruto-sasuke-uchiha",
  verseId: "naruto",
  name: "Sasuke Uchiha",
  aliases: [
    "Hebi Sasuke",
    "EMS Sasuke",
    "Rinnegan Sasuke",
  ],
  tags: [
    "Uchiha",
    "Sharingan",
    "Rinnegan",
    "Amenotejikara",
  ],
  seedRating: 85,
  description: "An Uchiha prodigy whose ocular powers, space-time techniques and Susanoo create elite combat control.",
  specialTraits: [
    "Uchiha",
    "Sharingan",
    "Rinnegan",
    "Amenotejikara",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-sasuke-uchiha-1",
      name: "Hebi Sasuke",
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
        "Uchiha techniques",
        "Sharingan techniques",
        "Rinnegan techniques",
        "Amenotejikara techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Sharingan",
        "Rinnegan",
      ],
    }),
    createTournamentForm({
      id: "naruto-sasuke-uchiha-2",
      name: "EMS Sasuke",
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
        "Uchiha techniques",
        "Sharingan techniques",
        "Rinnegan techniques",
        "Amenotejikara techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Sharingan",
        "Rinnegan",
      ],
    }),
    createTournamentForm({
      id: "naruto-sasuke-uchiha-3",
      name: "Rinnegan Sasuke",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 89,
        realPower: 89,
        hax: 69,
        speed: 82,
        durability: 74,
        intelligence: 79,
        attack: 90,
        defense: 73,
        stamina: 85,
        versatility: 82,
      },
      abilities: [
        "Uchiha techniques",
        "Sharingan techniques",
        "Rinnegan techniques",
        "Amenotejikara techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Sharingan",
        "Rinnegan",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 03 — SAKURA HARUNO
========================================================= */

export const SAKURA_HARUNO = createTournamentCharacter({
  id: "naruto-sakura-haruno",
  verseId: "naruto",
  name: "Sakura Haruno",
  aliases: [
    "Medical Ninja Sakura",
    "Byakugo Sakura",
  ],
  tags: [
    "Medical",
    "Byakugo",
    "Super Strength",
    "Healing",
  ],
  seedRating: 90,
  description: "A top medical ninja with monstrous chakra-enhanced strength and regeneration.",
  specialTraits: [
    "Medical",
    "Byakugo",
    "Super Strength",
    "Healing",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-sakura-haruno-1",
      name: "Medical Ninja Sakura",
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
        "Medical techniques",
        "Byakugo techniques",
        "Super Strength techniques",
        "Healing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Medical",
        "Byakugo",
        "Super Strength",
      ],
    }),
    createTournamentForm({
      id: "naruto-sakura-haruno-2",
      name: "Byakugo Sakura",
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
        "Medical techniques",
        "Byakugo techniques",
        "Super Strength techniques",
        "Healing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Medical",
        "Byakugo",
        "Super Strength",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 04 — KAKASHI HATAKE
========================================================= */

export const KAKASHI_HATAKE = createTournamentCharacter({
  id: "naruto-kakashi-hatake",
  verseId: "naruto",
  name: "Kakashi Hatake",
  aliases: [
    "Jonin Kakashi",
    "Mangekyo Kakashi",
  ],
  tags: [
    "Copy Ninja",
    "Sharingan",
    "Kamui",
    "Lightning",
  ],
  seedRating: 95,
  description: "A tactical genius with broad ninjutsu knowledge and deadly Kamui.",
  specialTraits: [
    "Copy Ninja",
    "Sharingan",
    "Kamui",
    "Lightning",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-kakashi-hatake-1",
      name: "Jonin Kakashi",
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
        "Copy Ninja techniques",
        "Sharingan techniques",
        "Kamui techniques",
        "Lightning techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Copy Ninja",
        "Sharingan",
        "Kamui",
      ],
    }),
    createTournamentForm({
      id: "naruto-kakashi-hatake-2",
      name: "Mangekyo Kakashi",
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
        "Copy Ninja techniques",
        "Sharingan techniques",
        "Kamui techniques",
        "Lightning techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Copy Ninja",
        "Sharingan",
        "Kamui",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 05 — ITACHI UCHIHA
========================================================= */

export const ITACHI_UCHIHA = createTournamentCharacter({
  id: "naruto-itachi-uchiha",
  verseId: "naruto",
  name: "Itachi Uchiha",
  aliases: [
    "Akatsuki Itachi",
    "Edo Itachi",
  ],
  tags: [
    "Uchiha",
    "Mangekyo",
    "Genjutsu",
    "Amaterasu",
  ],
  seedRating: 100,
  description: "A master of genjutsu, Amaterasu and Susanoo.",
  specialTraits: [
    "Uchiha",
    "Mangekyo",
    "Genjutsu",
    "Amaterasu",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-itachi-uchiha-1",
      name: "Akatsuki Itachi",
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
        "Uchiha techniques",
        "Mangekyo techniques",
        "Genjutsu techniques",
        "Amaterasu techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Mangekyo",
        "Genjutsu",
      ],
    }),
    createTournamentForm({
      id: "naruto-itachi-uchiha-2",
      name: "Edo Itachi",
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
        "Uchiha techniques",
        "Mangekyo techniques",
        "Genjutsu techniques",
        "Amaterasu techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Mangekyo",
        "Genjutsu",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 06 — MADARA UCHIHA
========================================================= */

export const MADARA_UCHIHA = createTournamentCharacter({
  id: "naruto-madara-uchiha",
  verseId: "naruto",
  name: "Madara Uchiha",
  aliases: [
    "EMS Madara",
    "Edo Madara",
    "Ten Tails Jinchuriki",
  ],
  tags: [
    "Uchiha",
    "Rinnegan",
    "Ten Tails",
    "Six Paths",
  ],
  seedRating: 75,
  description: "A legendary Uchiha whose peak forms combine overwhelming chakra and Six Paths powers.",
  specialTraits: [
    "Uchiha",
    "Rinnegan",
    "Ten Tails",
    "Six Paths",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-madara-uchiha-1",
      name: "EMS Madara",
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
        "Uchiha techniques",
        "Rinnegan techniques",
        "Ten Tails techniques",
        "Six Paths techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Rinnegan",
        "Ten Tails",
      ],
    }),
    createTournamentForm({
      id: "naruto-madara-uchiha-2",
      name: "Edo Madara",
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
        "Uchiha techniques",
        "Rinnegan techniques",
        "Ten Tails techniques",
        "Six Paths techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Rinnegan",
        "Ten Tails",
      ],
    }),
    createTournamentForm({
      id: "naruto-madara-uchiha-3",
      name: "Ten Tails Jinchuriki",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 77,
        speed: 98,
        durability: 86,
        intelligence: 95,
        attack: 100,
        defense: 89,
        stamina: 100,
        versatility: 98,
      },
      abilities: [
        "Uchiha techniques",
        "Rinnegan techniques",
        "Ten Tails techniques",
        "Six Paths techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Rinnegan",
        "Ten Tails",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 07 — HASHIRAMA SENJU
========================================================= */

export const HASHIRAMA_SENJU = createTournamentCharacter({
  id: "naruto-hashirama-senju",
  verseId: "naruto",
  name: "Hashirama Senju",
  aliases: [
    "Sage Hashirama",
    "Sage Art Hashirama",
  ],
  tags: [
    "Senju",
    "Wood Release",
    "Sage",
    "Healing",
  ],
  seedRating: 80,
  description: "The First Hokage and master of Wood Release and Sage Mode.",
  specialTraits: [
    "Senju",
    "Wood Release",
    "Sage",
    "Healing",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-hashirama-senju-1",
      name: "Sage Hashirama",
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
        "Senju techniques",
        "Wood Release techniques",
        "Sage techniques",
        "Healing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Senju",
        "Wood Release",
        "Sage",
      ],
    }),
    createTournamentForm({
      id: "naruto-hashirama-senju-2",
      name: "Sage Art Hashirama",
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
        "Senju techniques",
        "Wood Release techniques",
        "Sage techniques",
        "Healing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Senju",
        "Wood Release",
        "Sage",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 08 — MINATO NAMIKAZE
========================================================= */

export const MINATO_NAMIKAZE = createTournamentCharacter({
  id: "naruto-minato-namikaze",
  verseId: "naruto",
  name: "Minato Namikaze",
  aliases: [
    "Fourth Hokage",
    "KCM Minato",
  ],
  tags: [
    "Flying Raijin",
    "Hokage",
    "KCM",
    "Sealing",
  ],
  seedRating: 85,
  description: "The Yellow Flash whose teleportation and sealing define high-speed combat.",
  specialTraits: [
    "Flying Raijin",
    "Hokage",
    "KCM",
    "Sealing",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-minato-namikaze-1",
      name: "Fourth Hokage",
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
        "Flying Raijin techniques",
        "Hokage techniques",
        "KCM techniques",
        "Sealing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Flying Raijin",
        "Hokage",
        "KCM",
      ],
    }),
    createTournamentForm({
      id: "naruto-minato-namikaze-2",
      name: "KCM Minato",
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
        "Flying Raijin techniques",
        "Hokage techniques",
        "KCM techniques",
        "Sealing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Flying Raijin",
        "Hokage",
        "KCM",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 09 — TOBIRAMA SENJU
========================================================= */

export const TOBIRAMA_SENJU = createTournamentCharacter({
  id: "naruto-tobirama-senju",
  verseId: "naruto",
  name: "Tobirama Senju",
  aliases: [
    "Second Hokage",
    "War Tobirama",
  ],
  tags: [
    "Water Release",
    "Flying Raijin",
    "Edo Tensei",
    "Tactical",
  ],
  seedRating: 90,
  description: "An inventor and tactician with teleportation, water mastery and forbidden techniques.",
  specialTraits: [
    "Water Release",
    "Flying Raijin",
    "Edo Tensei",
    "Tactical",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-tobirama-senju-1",
      name: "Second Hokage",
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
        "Water Release techniques",
        "Flying Raijin techniques",
        "Edo Tensei techniques",
        "Tactical techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Water Release",
        "Flying Raijin",
        "Edo Tensei",
      ],
    }),
    createTournamentForm({
      id: "naruto-tobirama-senju-2",
      name: "War Tobirama",
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
        "Water Release techniques",
        "Flying Raijin techniques",
        "Edo Tensei techniques",
        "Tactical techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Water Release",
        "Flying Raijin",
        "Edo Tensei",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 10 — HIRUZEN SARUTOBI
========================================================= */

export const HIRUZEN_SARUTOBI = createTournamentCharacter({
  id: "naruto-hiruzen-sarutobi",
  verseId: "naruto",
  name: "Hiruzen Sarutobi",
  aliases: [
    "Prime Hiruzen",
    "Third Hokage",
  ],
  tags: [
    "Hokage",
    "Five Natures",
    "Enma",
    "Sealing",
  ],
  seedRating: 95,
  description: "A master of many elemental and sealing arts.",
  specialTraits: [
    "Hokage",
    "Five Natures",
    "Enma",
    "Sealing",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-hiruzen-sarutobi-1",
      name: "Prime Hiruzen",
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
        "Hokage techniques",
        "Five Natures techniques",
        "Enma techniques",
        "Sealing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Hokage",
        "Five Natures",
        "Enma",
      ],
    }),
    createTournamentForm({
      id: "naruto-hiruzen-sarutobi-2",
      name: "Third Hokage",
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
        "Hokage techniques",
        "Five Natures techniques",
        "Enma techniques",
        "Sealing techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Hokage",
        "Five Natures",
        "Enma",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 11 — JIRAIYA
========================================================= */

export const JIRAIYA = createTournamentCharacter({
  id: "naruto-jiraiya",
  verseId: "naruto",
  name: "Jiraiya",
  aliases: [
    "Sannin Jiraiya",
    "Sage Mode Jiraiya",
  ],
  tags: [
    "Sannin",
    "Toad",
    "Sage",
    "Summoning",
  ],
  seedRating: 100,
  description: "A legendary Sannin with toad summons and Sage Mode.",
  specialTraits: [
    "Sannin",
    "Toad",
    "Sage",
    "Summoning",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-jiraiya-1",
      name: "Sannin Jiraiya",
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
        "Sannin techniques",
        "Toad techniques",
        "Sage techniques",
        "Summoning techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sannin",
        "Toad",
        "Sage",
      ],
    }),
    createTournamentForm({
      id: "naruto-jiraiya-2",
      name: "Sage Mode Jiraiya",
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
        "Sannin techniques",
        "Toad techniques",
        "Sage techniques",
        "Summoning techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sannin",
        "Toad",
        "Sage",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 12 — TSUNADE
========================================================= */

export const TSUNADE = createTournamentCharacter({
  id: "naruto-tsunade",
  verseId: "naruto",
  name: "Tsunade",
  aliases: [
    "Fifth Hokage",
    "Byakugo Tsunade",
  ],
  tags: [
    "Sannin",
    "Medical",
    "Byakugo",
    "Strength",
  ],
  seedRating: 75,
  description: "A legendary healer with Hundred Healings and monstrous strength.",
  specialTraits: [
    "Sannin",
    "Medical",
    "Byakugo",
    "Strength",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-tsunade-1",
      name: "Fifth Hokage",
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
        "Sannin techniques",
        "Medical techniques",
        "Byakugo techniques",
        "Strength techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sannin",
        "Medical",
        "Byakugo",
      ],
    }),
    createTournamentForm({
      id: "naruto-tsunade-2",
      name: "Byakugo Tsunade",
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
        "Sannin techniques",
        "Medical techniques",
        "Byakugo techniques",
        "Strength techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sannin",
        "Medical",
        "Byakugo",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 13 — OROCHIMARU
========================================================= */

export const OROCHIMARU = createTournamentCharacter({
  id: "naruto-orochimaru",
  verseId: "naruto",
  name: "Orochimaru",
  aliases: [
    "Orochimaru",
    "White Snake Orochimaru",
  ],
  tags: [
    "Snake",
    "Immortality",
    "Sealing",
    "Regeneration",
  ],
  seedRating: 80,
  description: "A forbidden-technique specialist obsessed with immortality.",
  specialTraits: [
    "Snake",
    "Immortality",
    "Sealing",
    "Regeneration",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-orochimaru-1",
      name: "Orochimaru",
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
        "Snake techniques",
        "Immortality techniques",
        "Sealing techniques",
        "Regeneration techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Snake",
        "Immortality",
        "Sealing",
      ],
    }),
    createTournamentForm({
      id: "naruto-orochimaru-2",
      name: "White Snake Orochimaru",
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
        "Snake techniques",
        "Immortality techniques",
        "Sealing techniques",
        "Regeneration techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Snake",
        "Immortality",
        "Sealing",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 14 — NAGATO
========================================================= */

export const NAGATO = createTournamentCharacter({
  id: "naruto-nagato",
  verseId: "naruto",
  name: "Nagato",
  aliases: [
    "Pain Nagato",
    "Six Paths Nagato",
  ],
  tags: [
    "Rinnegan",
    "Six Paths",
    "Gravity",
    "Summoning",
  ],
  seedRating: 85,
  description: "A Rinnegan wielder behind the Six Paths of Pain.",
  specialTraits: [
    "Rinnegan",
    "Six Paths",
    "Gravity",
    "Summoning",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-nagato-1",
      name: "Pain Nagato",
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
        "Rinnegan techniques",
        "Six Paths techniques",
        "Gravity techniques",
        "Summoning techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Rinnegan",
        "Six Paths",
        "Gravity",
      ],
    }),
    createTournamentForm({
      id: "naruto-nagato-2",
      name: "Six Paths Nagato",
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
        "Rinnegan techniques",
        "Six Paths techniques",
        "Gravity techniques",
        "Summoning techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Rinnegan",
        "Six Paths",
        "Gravity",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 15 — OBITO UCHIHA
========================================================= */

export const OBITO_UCHIHA = createTournamentCharacter({
  id: "naruto-obito-uchiha",
  verseId: "naruto",
  name: "Obito Uchiha",
  aliases: [
    "Masked Obito",
    "Ten Tails Obito",
  ],
  tags: [
    "Uchiha",
    "Kamui",
    "Ten Tails",
    "Sharingan",
  ],
  seedRating: 90,
  description: "A space-time specialist whose Kamui and later Ten Tails power are devastating.",
  specialTraits: [
    "Uchiha",
    "Kamui",
    "Ten Tails",
    "Sharingan",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-obito-uchiha-1",
      name: "Masked Obito",
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
        "Uchiha techniques",
        "Kamui techniques",
        "Ten Tails techniques",
        "Sharingan techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Kamui",
        "Ten Tails",
      ],
    }),
    createTournamentForm({
      id: "naruto-obito-uchiha-2",
      name: "Ten Tails Obito",
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
        "Uchiha techniques",
        "Kamui techniques",
        "Ten Tails techniques",
        "Sharingan techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Uchiha",
        "Kamui",
        "Ten Tails",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 16 — MIGHT GUY
========================================================= */

export const MIGHT_GUY = createTournamentCharacter({
  id: "naruto-might-guy",
  verseId: "naruto",
  name: "Might Guy",
  aliases: [
    "Eight Gates Guy",
    "Night Guy",
  ],
  tags: [
    "Taijutsu",
    "Eight Gates",
    "Speed",
    "Strength",
  ],
  seedRating: 95,
  description: "The ultimate taijutsu specialist whose Eight Gates unlock extreme physical power.",
  specialTraits: [
    "Taijutsu",
    "Eight Gates",
    "Speed",
    "Strength",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-might-guy-1",
      name: "Eight Gates Guy",
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
        "Taijutsu techniques",
        "Eight Gates techniques",
        "Speed techniques",
        "Strength techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Taijutsu",
        "Eight Gates",
        "Speed",
      ],
    }),
    createTournamentForm({
      id: "naruto-might-guy-2",
      name: "Night Guy",
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
        "Taijutsu techniques",
        "Eight Gates techniques",
        "Speed techniques",
        "Strength techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Taijutsu",
        "Eight Gates",
        "Speed",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 17 — ROCK LEE
========================================================= */

export const ROCK_LEE = createTournamentCharacter({
  id: "naruto-rock-lee",
  verseId: "naruto",
  name: "Rock Lee",
  aliases: [
    "Chunin Lee",
    "Eight Gates Lee",
  ],
  tags: [
    "Taijutsu",
    "Eight Gates",
    "Speed",
  ],
  seedRating: 100,
  description: "A pure taijutsu specialist built around speed and relentless offense.",
  specialTraits: [
    "Taijutsu",
    "Eight Gates",
    "Speed",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-rock-lee-1",
      name: "Chunin Lee",
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
        "Taijutsu techniques",
        "Eight Gates techniques",
        "Speed techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Taijutsu",
        "Eight Gates",
        "Speed",
      ],
    }),
    createTournamentForm({
      id: "naruto-rock-lee-2",
      name: "Eight Gates Lee",
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
        "Taijutsu techniques",
        "Eight Gates techniques",
        "Speed techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Taijutsu",
        "Eight Gates",
        "Speed",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 18 — SHIKAMARU NARA
========================================================= */

export const SHIKAMARU_NARA = createTournamentCharacter({
  id: "naruto-shikamaru-nara",
  verseId: "naruto",
  name: "Shikamaru Nara",
  aliases: [
    "Chunin Shikamaru",
    "War Shikamaru",
  ],
  tags: [
    "Shadow Imitation",
    "IQ",
    "Strategy",
    "Binding",
  ],
  seedRating: 75,
  description: "A strategic genius whose shadow techniques provide control.",
  specialTraits: [
    "Shadow Imitation",
    "IQ",
    "Strategy",
    "Binding",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-shikamaru-nara-1",
      name: "Chunin Shikamaru",
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
        "Shadow Imitation techniques",
        "IQ techniques",
        "Strategy techniques",
        "Binding techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Shadow Imitation",
        "IQ",
        "Strategy",
      ],
    }),
    createTournamentForm({
      id: "naruto-shikamaru-nara-2",
      name: "War Shikamaru",
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
        "Shadow Imitation techniques",
        "IQ techniques",
        "Strategy techniques",
        "Binding techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Shadow Imitation",
        "IQ",
        "Strategy",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 19 — GAARA
========================================================= */

export const GAARA = createTournamentCharacter({
  id: "naruto-gaara",
  verseId: "naruto",
  name: "Gaara",
  aliases: [
    "Kazekage Gaara",
    "War Gaara",
  ],
  tags: [
    "Sand",
    "Kazekage",
    "Defense",
    "Magnet Release",
  ],
  seedRating: 80,
  description: "A sand-manipulating Kage with exceptional defense and control.",
  specialTraits: [
    "Sand",
    "Kazekage",
    "Defense",
    "Magnet Release",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-gaara-1",
      name: "Kazekage Gaara",
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
        "Kazekage techniques",
        "Defense techniques",
        "Magnet Release techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sand",
        "Kazekage",
        "Defense",
      ],
    }),
    createTournamentForm({
      id: "naruto-gaara-2",
      name: "War Gaara",
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
        "Kazekage techniques",
        "Defense techniques",
        "Magnet Release techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sand",
        "Kazekage",
        "Defense",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 20 — KILLER B
========================================================= */

export const KILLER_B = createTournamentCharacter({
  id: "naruto-killer-b",
  verseId: "naruto",
  name: "Killer B",
  aliases: [
    "Eight Tails B",
    "Eight Tails Cloak B",
  ],
  tags: [
    "Jinchuriki",
    "Eight Tails",
    "Lightning",
    "Sword",
  ],
  seedRating: 85,
  description: "A perfect jinchuriki combining tailed-beast chakra with swordsmanship.",
  specialTraits: [
    "Jinchuriki",
    "Eight Tails",
    "Lightning",
    "Sword",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-killer-b-1",
      name: "Eight Tails B",
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
        "Jinchuriki techniques",
        "Eight Tails techniques",
        "Lightning techniques",
        "Sword techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Jinchuriki",
        "Eight Tails",
        "Lightning",
      ],
    }),
    createTournamentForm({
      id: "naruto-killer-b-2",
      name: "Eight Tails Cloak B",
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
        "Jinchuriki techniques",
        "Eight Tails techniques",
        "Lightning techniques",
        "Sword techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Jinchuriki",
        "Eight Tails",
        "Lightning",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 21 — NEJI HYUGA
========================================================= */

export const NEJI_HYUGA = createTournamentCharacter({
  id: "naruto-neji-hyuga",
  verseId: "naruto",
  name: "Neji Hyuga",
  aliases: [
    "Genin Neji",
    "War Neji",
  ],
  tags: [
    "Byakugan",
    "Gentle Fist",
    "Rotation",
  ],
  seedRating: 90,
  description: "A prodigious Hyuga with precise chakra-point attacks.",
  specialTraits: [
    "Byakugan",
    "Gentle Fist",
    "Rotation",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-neji-hyuga-1",
      name: "Genin Neji",
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
        "Byakugan techniques",
        "Gentle Fist techniques",
        "Rotation techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Byakugan",
        "Gentle Fist",
        "Rotation",
      ],
    }),
    createTournamentForm({
      id: "naruto-neji-hyuga-2",
      name: "War Neji",
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
        "Byakugan techniques",
        "Gentle Fist techniques",
        "Rotation techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Byakugan",
        "Gentle Fist",
        "Rotation",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 22 — HINATA HYUGA
========================================================= */

export const HINATA_HYUGA = createTournamentCharacter({
  id: "naruto-hinata-hyuga",
  verseId: "naruto",
  name: "Hinata Hyuga",
  aliases: [
    "Part I Hinata",
    "War Hinata",
  ],
  tags: [
    "Byakugan",
    "Gentle Fist",
    "Hyuga",
  ],
  seedRating: 95,
  description: "A skilled Hyuga specializing in precision close combat.",
  specialTraits: [
    "Byakugan",
    "Gentle Fist",
    "Hyuga",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-hinata-hyuga-1",
      name: "Part I Hinata",
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
        "Byakugan techniques",
        "Gentle Fist techniques",
        "Hyuga techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Byakugan",
        "Gentle Fist",
        "Hyuga",
      ],
    }),
    createTournamentForm({
      id: "naruto-hinata-hyuga-2",
      name: "War Hinata",
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
        "Byakugan techniques",
        "Gentle Fist techniques",
        "Hyuga techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Byakugan",
        "Gentle Fist",
        "Hyuga",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 23 — KISAME HOSHIGAKI
========================================================= */

export const KISAME_HOSHIGAKI = createTournamentCharacter({
  id: "naruto-kisame-hoshigaki",
  verseId: "naruto",
  name: "Kisame Hoshigaki",
  aliases: [
    "Kisame",
    "Samehada Kisame",
  ],
  tags: [
    "Shark",
    "Samehada",
    "Water Release",
    "Akatsuki",
  ],
  seedRating: 100,
  description: "A massive chakra pool user with Samehada and Water Release.",
  specialTraits: [
    "Shark",
    "Samehada",
    "Water Release",
    "Akatsuki",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-kisame-hoshigaki-1",
      name: "Kisame",
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
        "Shark techniques",
        "Samehada techniques",
        "Water Release techniques",
        "Akatsuki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Shark",
        "Samehada",
        "Water Release",
      ],
    }),
    createTournamentForm({
      id: "naruto-kisame-hoshigaki-2",
      name: "Samehada Kisame",
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
        "Shark techniques",
        "Samehada techniques",
        "Water Release techniques",
        "Akatsuki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Shark",
        "Samehada",
        "Water Release",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 24 — DEIDARA
========================================================= */

export const DEIDARA = createTournamentCharacter({
  id: "naruto-deidara",
  verseId: "naruto",
  name: "Deidara",
  aliases: [
    "Deidara",
    "C0 Deidara",
  ],
  tags: [
    "Explosive Clay",
    "Akatsuki",
    "C4",
    "C0",
  ],
  seedRating: 75,
  description: "An explosive-art specialist with aerial and microscopic bomb techniques.",
  specialTraits: [
    "Explosive Clay",
    "Akatsuki",
    "C4",
    "C0",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-deidara-1",
      name: "Deidara",
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
        "Explosive Clay techniques",
        "Akatsuki techniques",
        "C4 techniques",
        "C0 techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Explosive Clay",
        "Akatsuki",
        "C4",
      ],
    }),
    createTournamentForm({
      id: "naruto-deidara-2",
      name: "C0 Deidara",
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
        "Explosive Clay techniques",
        "Akatsuki techniques",
        "C4 techniques",
        "C0 techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Explosive Clay",
        "Akatsuki",
        "C4",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 25 — SASORI
========================================================= */

export const SASORI = createTournamentCharacter({
  id: "naruto-sasori",
  verseId: "naruto",
  name: "Sasori",
  aliases: [
    "Human Sasori",
    "Puppet Sasori",
  ],
  tags: [
    "Puppetry",
    "Poison",
    "Akatsuki",
    "Hundred Puppets",
  ],
  seedRating: 80,
  description: "A puppet master whose body core controls lethal puppets.",
  specialTraits: [
    "Puppetry",
    "Poison",
    "Akatsuki",
    "Hundred Puppets",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-sasori-1",
      name: "Human Sasori",
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
        "Puppetry techniques",
        "Poison techniques",
        "Akatsuki techniques",
        "Hundred Puppets techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Puppetry",
        "Poison",
        "Akatsuki",
      ],
    }),
    createTournamentForm({
      id: "naruto-sasori-2",
      name: "Puppet Sasori",
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
        "Puppetry techniques",
        "Poison techniques",
        "Akatsuki techniques",
        "Hundred Puppets techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Puppetry",
        "Poison",
        "Akatsuki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 26 — KAKUZU
========================================================= */

export const KAKUZU = createTournamentCharacter({
  id: "naruto-kakuzu",
  verseId: "naruto",
  name: "Kakuzu",
  aliases: [
    "Normal Kakuzu",
    "Five Hearts Kakuzu",
  ],
  tags: [
    "Earth Grudge Fear",
    "Akatsuki",
    "Multiple Hearts",
  ],
  seedRating: 85,
  description: "A durable fighter with multiple hearts and elemental masks.",
  specialTraits: [
    "Earth Grudge Fear",
    "Akatsuki",
    "Multiple Hearts",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-kakuzu-1",
      name: "Normal Kakuzu",
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
        "Earth Grudge Fear techniques",
        "Akatsuki techniques",
        "Multiple Hearts techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Earth Grudge Fear",
        "Akatsuki",
        "Multiple Hearts",
      ],
    }),
    createTournamentForm({
      id: "naruto-kakuzu-2",
      name: "Five Hearts Kakuzu",
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
        "Earth Grudge Fear techniques",
        "Akatsuki techniques",
        "Multiple Hearts techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Earth Grudge Fear",
        "Akatsuki",
        "Multiple Hearts",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 27 — KONAN
========================================================= */

export const KONAN = createTournamentCharacter({
  id: "naruto-konan",
  verseId: "naruto",
  name: "Konan",
  aliases: [
    "Konan",
    "600 Billion Explosive Tags",
  ],
  tags: [
    "Paper",
    "Akatsuki",
    "Explosives",
    "Flight",
  ],
  seedRating: 90,
  description: "A paper manipulator with traps, flight and explosive preparation.",
  specialTraits: [
    "Paper",
    "Akatsuki",
    "Explosives",
    "Flight",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-konan-1",
      name: "Konan",
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
        "Paper techniques",
        "Akatsuki techniques",
        "Explosives techniques",
        "Flight techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Paper",
        "Akatsuki",
        "Explosives",
      ],
    }),
    createTournamentForm({
      id: "naruto-konan-2",
      name: "600 Billion Explosive Tags",
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
        "Paper techniques",
        "Akatsuki techniques",
        "Explosives techniques",
        "Flight techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Paper",
        "Akatsuki",
        "Explosives",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 28 — TEMARI
========================================================= */

export const TEMARI = createTournamentCharacter({
  id: "naruto-temari",
  verseId: "naruto",
  name: "Temari",
  aliases: [
    "Genin Temari",
    "War Temari",
  ],
  tags: [
    "Wind Release",
    "Fan",
    "Ranged",
  ],
  seedRating: 95,
  description: "A powerful Wind Release user specializing in ranged control.",
  specialTraits: [
    "Wind Release",
    "Fan",
    "Ranged",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-temari-1",
      name: "Genin Temari",
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
        "Wind Release techniques",
        "Fan techniques",
        "Ranged techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Wind Release",
        "Fan",
        "Ranged",
      ],
    }),
    createTournamentForm({
      id: "naruto-temari-2",
      name: "War Temari",
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
        "Wind Release techniques",
        "Fan techniques",
        "Ranged techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Wind Release",
        "Fan",
        "Ranged",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 29 — KABUTO YAKUSHI
========================================================= */

export const KABUTO_YAKUSHI = createTournamentCharacter({
  id: "naruto-kabuto-yakushi",
  verseId: "naruto",
  name: "Kabuto Yakushi",
  aliases: [
    "Kabuto",
    "Sage Kabuto",
  ],
  tags: [
    "Sage",
    "Medical",
    "Regeneration",
    "Snake",
  ],
  seedRating: 100,
  description: "A modified shinobi whose Sage Mode grants sensory and physical upgrades.",
  specialTraits: [
    "Sage",
    "Medical",
    "Regeneration",
    "Snake",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-kabuto-yakushi-1",
      name: "Kabuto",
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
        "Sage techniques",
        "Medical techniques",
        "Regeneration techniques",
        "Snake techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sage",
        "Medical",
        "Regeneration",
      ],
    }),
    createTournamentForm({
      id: "naruto-kabuto-yakushi-2",
      name: "Sage Kabuto",
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
        "Sage techniques",
        "Medical techniques",
        "Regeneration techniques",
        "Snake techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Sage",
        "Medical",
        "Regeneration",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 30 — KAGUYA OTSUTSUKI
========================================================= */

export const KAGUYA_OTSUTSUKI = createTournamentCharacter({
  id: "naruto-kaguya-otsutsuki",
  verseId: "naruto",
  name: "Kaguya Otsutsuki",
  aliases: [
    "Kaguya",
    "Ten Tails Kaguya",
  ],
  tags: [
    "Otsutsuki",
    "Rinne Sharingan",
    "Dimension",
    "Ten Tails",
  ],
  seedRating: 75,
  description: "A primordial chakra being with dimensional travel and reality-scale power.",
  specialTraits: [
    "Otsutsuki",
    "Rinne Sharingan",
    "Dimension",
    "Ten Tails",
  ],
  forms: [
    createTournamentForm({
      id: "naruto-kaguya-otsutsuki-1",
      name: "Kaguya",
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
        "Otsutsuki techniques",
        "Rinne Sharingan techniques",
        "Dimension techniques",
        "Ten Tails techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Otsutsuki",
        "Rinne Sharingan",
        "Dimension",
      ],
    }),
    createTournamentForm({
      id: "naruto-kaguya-otsutsuki-2",
      name: "Ten Tails Kaguya",
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
        "Otsutsuki techniques",
        "Rinne Sharingan techniques",
        "Dimension techniques",
        "Ten Tails techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Otsutsuki",
        "Rinne Sharingan",
        "Dimension",
      ],
    }),
  ],
});

/* =========================================================
   FINAL DATABASE EXPORT — EXACTLY 30 CHARACTERS
========================================================= */
export const NARUTO_CHARACTERS = [
  NARUTO_UZUMAKI,
  SASUKE_UCHIHA,
  SAKURA_HARUNO,
  KAKASHI_HATAKE,
  ITACHI_UCHIHA,
  MADARA_UCHIHA,
  HASHIRAMA_SENJU,
  MINATO_NAMIKAZE,
  TOBIRAMA_SENJU,
  HIRUZEN_SARUTOBI,
  JIRAIYA,
  TSUNADE,
  OROCHIMARU,
  NAGATO,
  OBITO_UCHIHA,
  MIGHT_GUY,
  ROCK_LEE,
  SHIKAMARU_NARA,
  GAARA,
  KILLER_B,
  NEJI_HYUGA,
  HINATA_HYUGA,
  KISAME_HOSHIGAKI,
  DEIDARA,
  SASORI,
  KAKUZU,
  KONAN,
  TEMARI,
  KABUTO_YAKUSHI,
  KAGUYA_OTSUTSUKI,
];
