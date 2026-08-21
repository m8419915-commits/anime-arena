/*
  Anime Arena — Grand Tournament
  Jujutsu Kaisen Expanded Tournament Database
  30 CHARACTERS — NARUTO.JS-STYLE EXPANDED STANDARD
  Numerical values are Anime Arena balancing values, not official canon stats.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";

/* =========================================================
   CHARACTER 01 — YUJI ITADORI
========================================================= */

export const YUJI_ITADORI = createTournamentCharacter({
  id: "jujutsu-kaisen-yuji-itadori",
  verseId: "jujutsu-kaisen",
  name: "Yuji Itadori",
  aliases: [
    "Yuji",
    "Awakened Yuji",
  ],
  tags: [
    "Jujutsu",
    "Black Flash",
    "Blood",
    "Sukuna Vessel",
  ],
  seedRating: 80,
  description: "A physically exceptional sorcerer with extreme close combat and cursed-energy growth.",
  specialTraits: [
    "Jujutsu",
    "Black Flash",
    "Blood",
    "Sukuna Vessel",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-yuji-itadori-1",
      name: "Yuji",
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
        "Jujutsu techniques",
        "Black Flash techniques",
        "Blood techniques",
        "Sukuna Vessel techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Jujutsu",
        "Black Flash",
        "Blood",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-yuji-itadori-2",
      name: "Awakened Yuji",
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
        "Jujutsu techniques",
        "Black Flash techniques",
        "Blood techniques",
        "Sukuna Vessel techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Jujutsu",
        "Black Flash",
        "Blood",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 02 — SATORU GOJO
========================================================= */

export const SATORU_GOJO = createTournamentCharacter({
  id: "jujutsu-kaisen-satoru-gojo",
  verseId: "jujutsu-kaisen",
  name: "Satoru Gojo",
  aliases: [
    "Teen Gojo",
    "Awakened Gojo",
    "Adult Gojo",
  ],
  tags: [
    "Six Eyes",
    "Limitless",
    "Infinity",
    "Domain",
  ],
  seedRating: 85,
  description: "The strongest modern sorcerer with Six Eyes, Limitless and Unlimited Void.",
  specialTraits: [
    "Six Eyes",
    "Limitless",
    "Infinity",
    "Domain",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-satoru-gojo-1",
      name: "Teen Gojo",
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
        "Six Eyes techniques",
        "Limitless techniques",
        "Infinity techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Six Eyes",
        "Limitless",
        "Infinity",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-satoru-gojo-2",
      name: "Awakened Gojo",
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
        "Six Eyes techniques",
        "Limitless techniques",
        "Infinity techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Six Eyes",
        "Limitless",
        "Infinity",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-satoru-gojo-3",
      name: "Adult Gojo",
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
        "Six Eyes techniques",
        "Limitless techniques",
        "Infinity techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Six Eyes",
        "Limitless",
        "Infinity",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 03 — MEGUMI FUSHIGURO
========================================================= */

export const MEGUMI_FUSHIGURO = createTournamentCharacter({
  id: "jujutsu-kaisen-megumi-fushiguro",
  verseId: "jujutsu-kaisen",
  name: "Megumi Fushiguro",
  aliases: [
    "Megumi",
    "Chimera Shadow Garden",
  ],
  tags: [
    "Ten Shadows",
    "Shikigami",
    "Domain",
  ],
  seedRating: 90,
  description: "A Ten Shadows user with versatile shikigami.",
  specialTraits: [
    "Ten Shadows",
    "Shikigami",
    "Domain",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-megumi-fushiguro-1",
      name: "Megumi",
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
        "Ten Shadows techniques",
        "Shikigami techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ten Shadows",
        "Shikigami",
        "Domain",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-megumi-fushiguro-2",
      name: "Chimera Shadow Garden",
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
        "Ten Shadows techniques",
        "Shikigami techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ten Shadows",
        "Shikigami",
        "Domain",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 04 — NOBARA KUGISAKI
========================================================= */

export const NOBARA_KUGISAKI = createTournamentCharacter({
  id: "jujutsu-kaisen-nobara-kugisaki",
  verseId: "jujutsu-kaisen",
  name: "Nobara Kugisaki",
  aliases: [
    "Nobara",
    "Resonance Nobara",
  ],
  tags: [
    "Straw Doll",
    "Resonance",
    "Hairpin",
  ],
  seedRating: 95,
  description: "A technique specialist who attacks linked targets through Resonance.",
  specialTraits: [
    "Straw Doll",
    "Resonance",
    "Hairpin",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-nobara-kugisaki-1",
      name: "Nobara",
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
        "Straw Doll techniques",
        "Resonance techniques",
        "Hairpin techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Straw Doll",
        "Resonance",
        "Hairpin",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-nobara-kugisaki-2",
      name: "Resonance Nobara",
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
        "Straw Doll techniques",
        "Resonance techniques",
        "Hairpin techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Straw Doll",
        "Resonance",
        "Hairpin",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 05 — YUTA OKKOTSU
========================================================= */

export const YUTA_OKKOTSU = createTournamentCharacter({
  id: "jujutsu-kaisen-yuta-okkotsu",
  verseId: "jujutsu-kaisen",
  name: "Yuta Okkotsu",
  aliases: [
    "JJK 0 Yuta",
    "Current Yuta",
  ],
  tags: [
    "Copy",
    "Rika",
    "Domain",
    "RCT",
  ],
  seedRating: 100,
  description: "A special-grade sorcerer with Copy, Rika and enormous cursed energy.",
  specialTraits: [
    "Copy",
    "Rika",
    "Domain",
    "RCT",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-yuta-okkotsu-1",
      name: "JJK 0 Yuta",
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
        "Copy techniques",
        "Rika techniques",
        "Domain techniques",
        "RCT techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Copy",
        "Rika",
        "Domain",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-yuta-okkotsu-2",
      name: "Current Yuta",
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
        "Copy techniques",
        "Rika techniques",
        "Domain techniques",
        "RCT techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Copy",
        "Rika",
        "Domain",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 06 — SUGURU GETO
========================================================= */

export const SUGURU_GETO = createTournamentCharacter({
  id: "jujutsu-kaisen-suguru-geto",
  verseId: "jujutsu-kaisen",
  name: "Suguru Geto",
  aliases: [
    "Student Geto",
    "Curse Spirit Manipulation Geto",
  ],
  tags: [
    "Cursed Spirit Manipulation",
    "Special Grade",
    "Uzumaki",
  ],
  seedRating: 75,
  description: "A special-grade sorcerer who controls cursed spirits.",
  specialTraits: [
    "Cursed Spirit Manipulation",
    "Special Grade",
    "Uzumaki",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-suguru-geto-1",
      name: "Student Geto",
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
        "Cursed Spirit Manipulation techniques",
        "Special Grade techniques",
        "Uzumaki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cursed Spirit Manipulation",
        "Special Grade",
        "Uzumaki",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-suguru-geto-2",
      name: "Curse Spirit Manipulation Geto",
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
        "Cursed Spirit Manipulation techniques",
        "Special Grade techniques",
        "Uzumaki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cursed Spirit Manipulation",
        "Special Grade",
        "Uzumaki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 07 — KENJAKU
========================================================= */

export const KENJAKU = createTournamentCharacter({
  id: "jujutsu-kaisen-kenjaku",
  verseId: "jujutsu-kaisen",
  name: "Kenjaku",
  aliases: [
    "Geto Body Kenjaku",
    "Ancient Kenjaku",
  ],
  tags: [
    "Body Hop",
    "Cursed Spirit Manipulation",
    "Barrier",
  ],
  seedRating: 80,
  description: "An ancient body-hopping sorcerer with immense planning and technique synergy.",
  specialTraits: [
    "Body Hop",
    "Cursed Spirit Manipulation",
    "Barrier",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-kenjaku-1",
      name: "Geto Body Kenjaku",
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
        "Body Hop techniques",
        "Cursed Spirit Manipulation techniques",
        "Barrier techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Body Hop",
        "Cursed Spirit Manipulation",
        "Barrier",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-kenjaku-2",
      name: "Ancient Kenjaku",
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
        "Body Hop techniques",
        "Cursed Spirit Manipulation techniques",
        "Barrier techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Body Hop",
        "Cursed Spirit Manipulation",
        "Barrier",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 08 — RYOMEN SUKUNA
========================================================= */

export const RYOMEN_SUKUNA = createTournamentCharacter({
  id: "jujutsu-kaisen-ryomen-sukuna",
  verseId: "jujutsu-kaisen",
  name: "Ryomen Sukuna",
  aliases: [
    "Fingers Sukuna",
    "Heian Sukuna",
    "True Sukuna",
  ],
  tags: [
    "King of Curses",
    "Shrine",
    "Domain",
    "RCT",
  ],
  seedRating: 85,
  description: "The King of Curses with Shrine and Malevolent Shrine.",
  specialTraits: [
    "King of Curses",
    "Shrine",
    "Domain",
    "RCT",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-ryomen-sukuna-1",
      name: "Fingers Sukuna",
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
        "King of Curses techniques",
        "Shrine techniques",
        "Domain techniques",
        "RCT techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "King of Curses",
        "Shrine",
        "Domain",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-ryomen-sukuna-2",
      name: "Heian Sukuna",
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
        "King of Curses techniques",
        "Shrine techniques",
        "Domain techniques",
        "RCT techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "King of Curses",
        "Shrine",
        "Domain",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-ryomen-sukuna-3",
      name: "True Sukuna",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 81,
        speed: 100,
        durability: 92,
        intelligence: 100,
        attack: 100,
        defense: 97,
        stamina: 75,
        versatility: 100,
      },
      abilities: [
        "King of Curses techniques",
        "Shrine techniques",
        "Domain techniques",
        "RCT techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "King of Curses",
        "Shrine",
        "Domain",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 09 — MAKI ZENIN
========================================================= */

export const MAKI_ZENIN = createTournamentCharacter({
  id: "jujutsu-kaisen-maki-zenin",
  verseId: "jujutsu-kaisen",
  name: "Maki Zenin",
  aliases: [
    "Awakened Maki",
    "Heavenly Restriction Maki",
  ],
  tags: [
    "Heavenly Restriction",
    "Physical",
    "Split Soul Katana",
  ],
  seedRating: 90,
  description: "A zero-cursed-energy physical monster with extreme speed.",
  specialTraits: [
    "Heavenly Restriction",
    "Physical",
    "Split Soul Katana",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-maki-zenin-1",
      name: "Awakened Maki",
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
        "Heavenly Restriction techniques",
        "Physical techniques",
        "Split Soul Katana techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Heavenly Restriction",
        "Physical",
        "Split Soul Katana",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-maki-zenin-2",
      name: "Heavenly Restriction Maki",
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
        "Heavenly Restriction techniques",
        "Physical techniques",
        "Split Soul Katana techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Heavenly Restriction",
        "Physical",
        "Split Soul Katana",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 10 — TOJI FUSHIGURO
========================================================= */

export const TOJI_FUSHIGURO = createTournamentCharacter({
  id: "jujutsu-kaisen-toji-fushiguro",
  verseId: "jujutsu-kaisen",
  name: "Toji Fushiguro",
  aliases: [
    "Toji",
    "Sorcerer Killer",
  ],
  tags: [
    "Heavenly Restriction",
    "Inventory Curse",
    "Weapons",
  ],
  seedRating: 95,
  description: "An assassin with overwhelming physical stats and specialized weapons.",
  specialTraits: [
    "Heavenly Restriction",
    "Inventory Curse",
    "Weapons",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-toji-fushiguro-1",
      name: "Toji",
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
        "Heavenly Restriction techniques",
        "Inventory Curse techniques",
        "Weapons techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Heavenly Restriction",
        "Inventory Curse",
        "Weapons",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-toji-fushiguro-2",
      name: "Sorcerer Killer",
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
        "Heavenly Restriction techniques",
        "Inventory Curse techniques",
        "Weapons techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Heavenly Restriction",
        "Inventory Curse",
        "Weapons",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 11 — MAHITO
========================================================= */

export const MAHITO = createTournamentCharacter({
  id: "jujutsu-kaisen-mahito",
  verseId: "jujutsu-kaisen",
  name: "Mahito",
  aliases: [
    "Mahito",
    "Instant Spirit Body",
  ],
  tags: [
    "Idle Transfiguration",
    "Soul",
    "Domain",
  ],
  seedRating: 100,
  description: "A curse who manipulates souls directly.",
  specialTraits: [
    "Idle Transfiguration",
    "Soul",
    "Domain",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-mahito-1",
      name: "Mahito",
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
        "Idle Transfiguration techniques",
        "Soul techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Idle Transfiguration",
        "Soul",
        "Domain",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-mahito-2",
      name: "Instant Spirit Body",
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
        "Idle Transfiguration techniques",
        "Soul techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Idle Transfiguration",
        "Soul",
        "Domain",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 12 — JOGO
========================================================= */

export const JOGO = createTournamentCharacter({
  id: "jujutsu-kaisen-jogo",
  verseId: "jujutsu-kaisen",
  name: "Jogo",
  aliases: [
    "Jogo",
    "Domain Jogo",
  ],
  tags: [
    "Disaster Curse",
    "Volcano",
    "Domain",
  ],
  seedRating: 75,
  description: "A volcanic curse with huge firepower.",
  specialTraits: [
    "Disaster Curse",
    "Volcano",
    "Domain",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-jogo-1",
      name: "Jogo",
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
        "Disaster Curse techniques",
        "Volcano techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Disaster Curse",
        "Volcano",
        "Domain",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-jogo-2",
      name: "Domain Jogo",
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
        "Disaster Curse techniques",
        "Volcano techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Disaster Curse",
        "Volcano",
        "Domain",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 13 — HANAMI
========================================================= */

export const HANAMI = createTournamentCharacter({
  id: "jujutsu-kaisen-hanami",
  verseId: "jujutsu-kaisen",
  name: "Hanami",
  aliases: [
    "Hanami",
    "Full Power Hanami",
  ],
  tags: [
    "Disaster Curse",
    "Plants",
    "Defense",
  ],
  seedRating: 80,
  description: "A durable plant-based curse.",
  specialTraits: [
    "Disaster Curse",
    "Plants",
    "Defense",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-hanami-1",
      name: "Hanami",
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
        "Disaster Curse techniques",
        "Plants techniques",
        "Defense techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Disaster Curse",
        "Plants",
        "Defense",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-hanami-2",
      name: "Full Power Hanami",
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
        "Disaster Curse techniques",
        "Plants techniques",
        "Defense techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Disaster Curse",
        "Plants",
        "Defense",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 14 — DAGON
========================================================= */

export const DAGON = createTournamentCharacter({
  id: "jujutsu-kaisen-dagon",
  verseId: "jujutsu-kaisen",
  name: "Dagon",
  aliases: [
    "Dagon",
    "Domain Dagon",
  ],
  tags: [
    "Disaster Curse",
    "Water",
    "Shikigami",
    "Domain",
  ],
  seedRating: 85,
  description: "A powerful water curse with domain expansion.",
  specialTraits: [
    "Disaster Curse",
    "Water",
    "Shikigami",
    "Domain",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-dagon-1",
      name: "Dagon",
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
        "Disaster Curse techniques",
        "Water techniques",
        "Shikigami techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Disaster Curse",
        "Water",
        "Shikigami",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-dagon-2",
      name: "Domain Dagon",
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
        "Disaster Curse techniques",
        "Water techniques",
        "Shikigami techniques",
        "Domain techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Disaster Curse",
        "Water",
        "Shikigami",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 15 — CHOSO
========================================================= */

export const CHOSO = createTournamentCharacter({
  id: "jujutsu-kaisen-choso",
  verseId: "jujutsu-kaisen",
  name: "Choso",
  aliases: [
    "Choso",
    "Awakened Choso",
  ],
  tags: [
    "Blood Manipulation",
    "Death Painting",
    "Poison",
  ],
  seedRating: 90,
  description: "A Blood Manipulation user with piercing attacks and poison.",
  specialTraits: [
    "Blood Manipulation",
    "Death Painting",
    "Poison",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-choso-1",
      name: "Choso",
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
        "Blood Manipulation techniques",
        "Death Painting techniques",
        "Poison techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Blood Manipulation",
        "Death Painting",
        "Poison",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-choso-2",
      name: "Awakened Choso",
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
        "Blood Manipulation techniques",
        "Death Painting techniques",
        "Poison techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Blood Manipulation",
        "Death Painting",
        "Poison",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 16 — NAOYA ZENIN
========================================================= */

export const NAOYA_ZENIN = createTournamentCharacter({
  id: "jujutsu-kaisen-naoya-zenin",
  verseId: "jujutsu-kaisen",
  name: "Naoya Zenin",
  aliases: [
    "Human Naoya",
    "Cursed Naoya",
  ],
  tags: [
    "Projection Sorcery",
    "Speed",
    "Curse",
  ],
  seedRating: 95,
  description: "A speed-focused Projection Sorcery user.",
  specialTraits: [
    "Projection Sorcery",
    "Speed",
    "Curse",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-naoya-zenin-1",
      name: "Human Naoya",
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
        "Projection Sorcery techniques",
        "Speed techniques",
        "Curse techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Projection Sorcery",
        "Speed",
        "Curse",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-naoya-zenin-2",
      name: "Cursed Naoya",
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
        "Projection Sorcery techniques",
        "Speed techniques",
        "Curse techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Projection Sorcery",
        "Speed",
        "Curse",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 17 — KENTO NANAMI
========================================================= */

export const KENTO_NANAMI = createTournamentCharacter({
  id: "jujutsu-kaisen-kento-nanami",
  verseId: "jujutsu-kaisen",
  name: "Kento Nanami",
  aliases: [
    "Nanami",
    "Overtime Nanami",
  ],
  tags: [
    "Ratio Technique",
    "Black Flash",
    "Overtime",
  ],
  seedRating: 100,
  description: "A precise Grade 1 sorcerer who exploits weak points.",
  specialTraits: [
    "Ratio Technique",
    "Black Flash",
    "Overtime",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-kento-nanami-1",
      name: "Nanami",
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
        "Ratio Technique techniques",
        "Black Flash techniques",
        "Overtime techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ratio Technique",
        "Black Flash",
        "Overtime",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-kento-nanami-2",
      name: "Overtime Nanami",
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
        "Ratio Technique techniques",
        "Black Flash techniques",
        "Overtime techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ratio Technique",
        "Black Flash",
        "Overtime",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 18 — AOI TODO
========================================================= */

export const AOI_TODO = createTournamentCharacter({
  id: "jujutsu-kaisen-aoi-todo",
  verseId: "jujutsu-kaisen",
  name: "Aoi Todo",
  aliases: [
    "Todo",
    "Boogie Woogie Todo",
  ],
  tags: [
    "Boogie Woogie",
    "Black Flash",
    "Physical",
  ],
  seedRating: 75,
  description: "A close-range fighter who can swap positions.",
  specialTraits: [
    "Boogie Woogie",
    "Black Flash",
    "Physical",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-aoi-todo-1",
      name: "Todo",
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
        "Boogie Woogie techniques",
        "Black Flash techniques",
        "Physical techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Boogie Woogie",
        "Black Flash",
        "Physical",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-aoi-todo-2",
      name: "Boogie Woogie Todo",
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
        "Boogie Woogie techniques",
        "Black Flash techniques",
        "Physical techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Boogie Woogie",
        "Black Flash",
        "Physical",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 19 — MEI MEI
========================================================= */

export const MEI_MEI = createTournamentCharacter({
  id: "jujutsu-kaisen-mei-mei",
  verseId: "jujutsu-kaisen",
  name: "Mei Mei",
  aliases: [
    "Mei Mei",
    "Bird Strike Mei Mei",
  ],
  tags: [
    "Bird Manipulation",
    "Crow",
    "Grade 1",
  ],
  seedRating: 80,
  description: "A strategic sorcerer specializing in lethal crow attacks.",
  specialTraits: [
    "Bird Manipulation",
    "Crow",
    "Grade 1",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-mei-mei-1",
      name: "Mei Mei",
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
        "Bird Manipulation techniques",
        "Crow techniques",
        "Grade 1 techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Bird Manipulation",
        "Crow",
        "Grade 1",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-mei-mei-2",
      name: "Bird Strike Mei Mei",
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
        "Bird Manipulation techniques",
        "Crow techniques",
        "Grade 1 techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Bird Manipulation",
        "Crow",
        "Grade 1",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 20 — KUSAKABE
========================================================= */

export const KUSAKABE = createTournamentCharacter({
  id: "jujutsu-kaisen-kusakabe",
  verseId: "jujutsu-kaisen",
  name: "Kusakabe",
  aliases: [
    "Kusakabe",
    "Simple Domain Kusakabe",
  ],
  tags: [
    "New Shadow Style",
    "Simple Domain",
    "Sword",
  ],
  seedRating: 85,
  description: "A defensive swordsman with exceptional technique.",
  specialTraits: [
    "New Shadow Style",
    "Simple Domain",
    "Sword",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-kusakabe-1",
      name: "Kusakabe",
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
        "New Shadow Style techniques",
        "Simple Domain techniques",
        "Sword techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "New Shadow Style",
        "Simple Domain",
        "Sword",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-kusakabe-2",
      name: "Simple Domain Kusakabe",
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
        "New Shadow Style techniques",
        "Simple Domain techniques",
        "Sword techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "New Shadow Style",
        "Simple Domain",
        "Sword",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 21 — TOGE INUMAKI
========================================================= */

export const TOGE_INUMAKI = createTournamentCharacter({
  id: "jujutsu-kaisen-toge-inumaki",
  verseId: "jujutsu-kaisen",
  name: "Toge Inumaki",
  aliases: [
    "Inumaki",
    "Cursed Speech Inumaki",
  ],
  tags: [
    "Cursed Speech",
    "Support",
    "Rice Ball",
  ],
  seedRating: 90,
  description: "A Cursed Speech specialist.",
  specialTraits: [
    "Cursed Speech",
    "Support",
    "Rice Ball",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-toge-inumaki-1",
      name: "Inumaki",
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
        "Cursed Speech techniques",
        "Support techniques",
        "Rice Ball techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cursed Speech",
        "Support",
        "Rice Ball",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-toge-inumaki-2",
      name: "Cursed Speech Inumaki",
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
        "Cursed Speech techniques",
        "Support techniques",
        "Rice Ball techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cursed Speech",
        "Support",
        "Rice Ball",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 22 — PANDA
========================================================= */

export const PANDA = createTournamentCharacter({
  id: "jujutsu-kaisen-panda",
  verseId: "jujutsu-kaisen",
  name: "Panda",
  aliases: [
    "Panda",
    "Core Shift Panda",
  ],
  tags: [
    "Cursed Corpse",
    "Three Cores",
    "Physical",
  ],
  seedRating: 95,
  description: "A sentient cursed corpse with multiple combat cores.",
  specialTraits: [
    "Cursed Corpse",
    "Three Cores",
    "Physical",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-panda-1",
      name: "Panda",
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
        "Cursed Corpse techniques",
        "Three Cores techniques",
        "Physical techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cursed Corpse",
        "Three Cores",
        "Physical",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-panda-2",
      name: "Core Shift Panda",
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
        "Cursed Corpse techniques",
        "Three Cores techniques",
        "Physical techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cursed Corpse",
        "Three Cores",
        "Physical",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 23 — KINJI HAKARI
========================================================= */

export const KINJI_HAKARI = createTournamentCharacter({
  id: "jujutsu-kaisen-kinji-hakari",
  verseId: "jujutsu-kaisen",
  name: "Kinji Hakari",
  aliases: [
    "Hakari",
    "Jackpot Hakari",
  ],
  tags: [
    "Idle Death Gamble",
    "Domain",
    "Immortality",
  ],
  seedRating: 100,
  description: "A domain specialist with jackpot regeneration.",
  specialTraits: [
    "Idle Death Gamble",
    "Domain",
    "Immortality",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-kinji-hakari-1",
      name: "Hakari",
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
        "Idle Death Gamble techniques",
        "Domain techniques",
        "Immortality techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Idle Death Gamble",
        "Domain",
        "Immortality",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-kinji-hakari-2",
      name: "Jackpot Hakari",
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
        "Idle Death Gamble techniques",
        "Domain techniques",
        "Immortality techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Idle Death Gamble",
        "Domain",
        "Immortality",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 24 — KIRARA HOSHI
========================================================= */

export const KIRARA_HOSHI = createTournamentCharacter({
  id: "jujutsu-kaisen-kirara-hoshi",
  verseId: "jujutsu-kaisen",
  name: "Kirara Hoshi",
  aliases: [
    "Kirara",
    "Love Rendezvous",
  ],
  tags: [
    "Spatial",
    "Star",
    "Barrier",
  ],
  seedRating: 75,
  description: "A technical spatial-rule specialist.",
  specialTraits: [
    "Spatial",
    "Star",
    "Barrier",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-kirara-hoshi-1",
      name: "Kirara",
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
        "Spatial techniques",
        "Star techniques",
        "Barrier techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Spatial",
        "Star",
        "Barrier",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-kirara-hoshi-2",
      name: "Love Rendezvous",
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
        "Spatial techniques",
        "Star techniques",
        "Barrier techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Spatial",
        "Star",
        "Barrier",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 25 — HAJIME KASHIMO
========================================================= */

export const HAJIME_KASHIMO = createTournamentCharacter({
  id: "jujutsu-kaisen-hajime-kashimo",
  verseId: "jujutsu-kaisen",
  name: "Hajime Kashimo",
  aliases: [
    "Kashimo",
    "Mythical Beast Amber",
  ],
  tags: [
    "Lightning",
    "Cursed Energy Trait",
    "Mythical Beast",
  ],
  seedRating: 80,
  description: "An ancient fighter with lightning-based cursed energy.",
  specialTraits: [
    "Lightning",
    "Cursed Energy Trait",
    "Mythical Beast",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-hajime-kashimo-1",
      name: "Kashimo",
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
        "Lightning techniques",
        "Cursed Energy Trait techniques",
        "Mythical Beast techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Lightning",
        "Cursed Energy Trait",
        "Mythical Beast",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-hajime-kashimo-2",
      name: "Mythical Beast Amber",
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
        "Lightning techniques",
        "Cursed Energy Trait techniques",
        "Mythical Beast techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Lightning",
        "Cursed Energy Trait",
        "Mythical Beast",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 26 — URAUME
========================================================= */

export const URAUME = createTournamentCharacter({
  id: "jujutsu-kaisen-uraume",
  verseId: "jujutsu-kaisen",
  name: "Uraume",
  aliases: [
    "Uraume",
    "Ice Formation Uraume",
  ],
  tags: [
    "Ice Formation",
    "Sukuna Ally",
    "Frozen",
  ],
  seedRating: 85,
  description: "A dangerous ice technique user.",
  specialTraits: [
    "Ice Formation",
    "Sukuna Ally",
    "Frozen",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-uraume-1",
      name: "Uraume",
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
        "Ice Formation techniques",
        "Sukuna Ally techniques",
        "Frozen techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ice Formation",
        "Sukuna Ally",
        "Frozen",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-uraume-2",
      name: "Ice Formation Uraume",
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
        "Ice Formation techniques",
        "Sukuna Ally techniques",
        "Frozen techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Ice Formation",
        "Sukuna Ally",
        "Frozen",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 27 — NAOBITO ZENIN
========================================================= */

export const NAOBITO_ZENIN = createTournamentCharacter({
  id: "jujutsu-kaisen-naobito-zenin",
  verseId: "jujutsu-kaisen",
  name: "Naobito Zenin",
  aliases: [
    "Naobito",
    "Projection Sorcery Naobito",
  ],
  tags: [
    "Projection Sorcery",
    "Speed",
    "Clan Head",
  ],
  seedRating: 90,
  description: "A master of Projection Sorcery.",
  specialTraits: [
    "Projection Sorcery",
    "Speed",
    "Clan Head",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-naobito-zenin-1",
      name: "Naobito",
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
        "Projection Sorcery techniques",
        "Speed techniques",
        "Clan Head techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Projection Sorcery",
        "Speed",
        "Clan Head",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-naobito-zenin-2",
      name: "Projection Sorcery Naobito",
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
        "Projection Sorcery techniques",
        "Speed techniques",
        "Clan Head techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Projection Sorcery",
        "Speed",
        "Clan Head",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 28 — MAI ZENIN
========================================================= */

export const MAI_ZENIN = createTournamentCharacter({
  id: "jujutsu-kaisen-mai-zenin",
  verseId: "jujutsu-kaisen",
  name: "Mai Zenin",
  aliases: [
    "Mai",
    "Construction Mai",
  ],
  tags: [
    "Construction",
    "Gun",
    "Zenin",
  ],
  seedRating: 95,
  description: "A Construction user with limited but precise creation.",
  specialTraits: [
    "Construction",
    "Gun",
    "Zenin",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-mai-zenin-1",
      name: "Mai",
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
        "Construction techniques",
        "Gun techniques",
        "Zenin techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Construction",
        "Gun",
        "Zenin",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-mai-zenin-2",
      name: "Construction Mai",
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
        "Construction techniques",
        "Gun techniques",
        "Zenin techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Construction",
        "Gun",
        "Zenin",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 29 — KOKICHI MUTA
========================================================= */

export const KOKICHI_MUTA = createTournamentCharacter({
  id: "jujutsu-kaisen-kokichi-muta",
  verseId: "jujutsu-kaisen",
  name: "Kokichi Muta",
  aliases: [
    "Mechamaru",
    "Ultimate Mechamaru",
  ],
  tags: [
    "Puppet Manipulation",
    "Simple Domain",
    "Long Range",
  ],
  seedRating: 100,
  description: "A remote puppet specialist.",
  specialTraits: [
    "Puppet Manipulation",
    "Simple Domain",
    "Long Range",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-kokichi-muta-1",
      name: "Mechamaru",
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
        "Puppet Manipulation techniques",
        "Simple Domain techniques",
        "Long Range techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Puppet Manipulation",
        "Simple Domain",
        "Long Range",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-kokichi-muta-2",
      name: "Ultimate Mechamaru",
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
        "Puppet Manipulation techniques",
        "Simple Domain techniques",
        "Long Range techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Puppet Manipulation",
        "Simple Domain",
        "Long Range",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 30 — YUKI TSUKUMO
========================================================= */

export const YUKI_TSUKUMO = createTournamentCharacter({
  id: "jujutsu-kaisen-yuki-tsukumo",
  verseId: "jujutsu-kaisen",
  name: "Yuki Tsukumo",
  aliases: [
    "Yuki",
    "Star Rage Yuki",
  ],
  tags: [
    "Star Rage",
    "Special Grade",
    "Garuda",
  ],
  seedRating: 75,
  description: "A special-grade sorcerer with virtual-mass attacks.",
  specialTraits: [
    "Star Rage",
    "Special Grade",
    "Garuda",
  ],
  forms: [
    createTournamentForm({
      id: "jujutsu-kaisen-yuki-tsukumo-1",
      name: "Yuki",
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
        "Star Rage techniques",
        "Special Grade techniques",
        "Garuda techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Star Rage",
        "Special Grade",
        "Garuda",
      ],
    }),
    createTournamentForm({
      id: "jujutsu-kaisen-yuki-tsukumo-2",
      name: "Star Rage Yuki",
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
        "Star Rage techniques",
        "Special Grade techniques",
        "Garuda techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Star Rage",
        "Special Grade",
        "Garuda",
      ],
    }),
  ],
});

/* =========================================================
   FINAL DATABASE EXPORT — EXACTLY 30 CHARACTERS
========================================================= */
export const JUJUTSU_KAISEN_CHARACTERS = [
  YUJI_ITADORI,
  SATORU_GOJO,
  MEGUMI_FUSHIGURO,
  NOBARA_KUGISAKI,
  YUTA_OKKOTSU,
  SUGURU_GETO,
  KENJAKU,
  RYOMEN_SUKUNA,
  MAKI_ZENIN,
  TOJI_FUSHIGURO,
  MAHITO,
  JOGO,
  HANAMI,
  DAGON,
  CHOSO,
  NAOYA_ZENIN,
  KENTO_NANAMI,
  AOI_TODO,
  MEI_MEI,
  KUSAKABE,
  TOGE_INUMAKI,
  PANDA,
  KINJI_HAKARI,
  KIRARA_HOSHI,
  HAJIME_KASHIMO,
  URAUME,
  NAOBITO_ZENIN,
  MAI_ZENIN,
  KOKICHI_MUTA,
  YUKI_TSUKUMO,
];
