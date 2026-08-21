/*
  Anime Arena — Grand Tournament
  Dragon Ball Expanded Tournament Database
  30 CHARACTERS — NARUTO.JS-STYLE EXPANDED STANDARD
  Numerical values are Anime Arena balancing values, not official canon stats.
*/

import {
  createTournamentCharacter,
  createTournamentForm,
} from "../databaseSchema";

/* =========================================================
   CHARACTER 01 — GOKU
========================================================= */

export const GOKU = createTournamentCharacter({
  id: "dragon-ball-goku",
  verseId: "dragon-ball",
  name: "Goku",
  aliases: [
    "Base Goku",
    "Super Saiyan Blue Goku",
    "Ultra Instinct Goku",
  ],
  tags: [
    "Saiyan",
    "Ki",
    "Ultra Instinct",
    "Super Saiyan",
  ],
  seedRating: 80,
  description: "Earth’s greatest martial artist whose transformations and Ultra Instinct reach cosmic levels.",
  specialTraits: [
    "Saiyan",
    "Ki",
    "Ultra Instinct",
    "Super Saiyan",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-goku-1",
      name: "Base Goku",
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
        "Saiyan techniques",
        "Ki techniques",
        "Ultra Instinct techniques",
        "Super Saiyan techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Ki",
        "Ultra Instinct",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-goku-2",
      name: "Super Saiyan Blue Goku",
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
        "Saiyan techniques",
        "Ki techniques",
        "Ultra Instinct techniques",
        "Super Saiyan techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Ki",
        "Ultra Instinct",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-goku-3",
      name: "Ultra Instinct Goku",
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
        "Saiyan techniques",
        "Ki techniques",
        "Ultra Instinct techniques",
        "Super Saiyan techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Ki",
        "Ultra Instinct",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 02 — VEGETA
========================================================= */

export const VEGETA = createTournamentCharacter({
  id: "dragon-ball-vegeta",
  verseId: "dragon-ball",
  name: "Vegeta",
  aliases: [
    "Base Vegeta",
    "Ultra Ego Vegeta",
    "Super Saiyan Blue Vegeta",
  ],
  tags: [
    "Saiyan",
    "Ki",
    "Ultra Ego",
    "Prince",
  ],
  seedRating: 85,
  description: "A proud Saiyan prince whose Ultra Ego grows through battle.",
  specialTraits: [
    "Saiyan",
    "Ki",
    "Ultra Ego",
    "Prince",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-vegeta-1",
      name: "Base Vegeta",
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
        "Saiyan techniques",
        "Ki techniques",
        "Ultra Ego techniques",
        "Prince techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Ki",
        "Ultra Ego",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-vegeta-2",
      name: "Ultra Ego Vegeta",
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
        "Saiyan techniques",
        "Ki techniques",
        "Ultra Ego techniques",
        "Prince techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Ki",
        "Ultra Ego",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-vegeta-3",
      name: "Super Saiyan Blue Vegeta",
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
        "Saiyan techniques",
        "Ki techniques",
        "Ultra Ego techniques",
        "Prince techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Ki",
        "Ultra Ego",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 03 — GOHAN
========================================================= */

export const GOHAN = createTournamentCharacter({
  id: "dragon-ball-gohan",
  verseId: "dragon-ball",
  name: "Gohan",
  aliases: [
    "Teen Gohan",
    "Ultimate Gohan",
    "Beast Gohan",
  ],
  tags: [
    "Saiyan-Human",
    "Potential Unleashed",
    "Beast",
  ],
  seedRating: 90,
  description: "A hybrid Saiyan whose hidden potential creates absurd power.",
  specialTraits: [
    "Saiyan-Human",
    "Potential Unleashed",
    "Beast",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-gohan-1",
      name: "Teen Gohan",
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
        "Saiyan-Human techniques",
        "Potential Unleashed techniques",
        "Beast techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan-Human",
        "Potential Unleashed",
        "Beast",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-gohan-2",
      name: "Ultimate Gohan",
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
        "Saiyan-Human techniques",
        "Potential Unleashed techniques",
        "Beast techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan-Human",
        "Potential Unleashed",
        "Beast",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-gohan-3",
      name: "Beast Gohan",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 93,
        realPower: 93,
        hax: 71,
        speed: 86,
        durability: 77,
        intelligence: 83,
        attack: 94,
        defense: 77,
        stamina: 90,
        versatility: 86,
      },
      abilities: [
        "Saiyan-Human techniques",
        "Potential Unleashed techniques",
        "Beast techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan-Human",
        "Potential Unleashed",
        "Beast",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 04 — PICCOLO
========================================================= */

export const PICCOLO = createTournamentCharacter({
  id: "dragon-ball-piccolo",
  verseId: "dragon-ball",
  name: "Piccolo",
  aliases: [
    "Namek Piccolo",
    "Orange Piccolo",
  ],
  tags: [
    "Namekian",
    "Regeneration",
    "Orange",
    "Potential",
  ],
  seedRating: 95,
  description: "A Namekian whose Orange transformation vastly increases power.",
  specialTraits: [
    "Namekian",
    "Regeneration",
    "Orange",
    "Potential",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-piccolo-1",
      name: "Namek Piccolo",
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
        "Namekian techniques",
        "Regeneration techniques",
        "Orange techniques",
        "Potential techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Namekian",
        "Regeneration",
        "Orange",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-piccolo-2",
      name: "Orange Piccolo",
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
        "Namekian techniques",
        "Regeneration techniques",
        "Orange techniques",
        "Potential techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Namekian",
        "Regeneration",
        "Orange",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 05 — FRIEZA
========================================================= */

export const FRIEZA = createTournamentCharacter({
  id: "dragon-ball-frieza",
  verseId: "dragon-ball",
  name: "Frieza",
  aliases: [
    "Final Form Frieza",
    "Golden Frieza",
    "Black Frieza",
  ],
  tags: [
    "Frieza Race",
    "Transformation",
    "Ki",
  ],
  seedRating: 100,
  description: "A mutant tyrant with extreme transformations.",
  specialTraits: [
    "Frieza Race",
    "Transformation",
    "Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-frieza-1",
      name: "Final Form Frieza",
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
        "Frieza Race techniques",
        "Transformation techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Frieza Race",
        "Transformation",
        "Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-frieza-2",
      name: "Golden Frieza",
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
        "Frieza Race techniques",
        "Transformation techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Frieza Race",
        "Transformation",
        "Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-frieza-3",
      name: "Black Frieza",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 75,
        speed: 94,
        durability: 83,
        intelligence: 91,
        attack: 100,
        defense: 85,
        stamina: 100,
        versatility: 94,
      },
      abilities: [
        "Frieza Race techniques",
        "Transformation techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Frieza Race",
        "Transformation",
        "Ki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 06 — BROLY
========================================================= */

export const BROLY = createTournamentCharacter({
  id: "dragon-ball-broly",
  verseId: "dragon-ball",
  name: "Broly",
  aliases: [
    "Wrathful Broly",
    "Super Saiyan Broly",
    "Full Power Broly",
  ],
  tags: [
    "Saiyan",
    "Berserker",
    "Legendary",
  ],
  seedRating: 75,
  description: "A mutant Saiyan whose power continuously rises.",
  specialTraits: [
    "Saiyan",
    "Berserker",
    "Legendary",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-broly-1",
      name: "Wrathful Broly",
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
        "Saiyan techniques",
        "Berserker techniques",
        "Legendary techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Berserker",
        "Legendary",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-broly-2",
      name: "Super Saiyan Broly",
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
        "Saiyan techniques",
        "Berserker techniques",
        "Legendary techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Berserker",
        "Legendary",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-broly-3",
      name: "Full Power Broly",
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
        "Saiyan techniques",
        "Berserker techniques",
        "Legendary techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Berserker",
        "Legendary",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 07 — BEERUS
========================================================= */

export const BEERUS = createTournamentCharacter({
  id: "dragon-ball-beerus",
  verseId: "dragon-ball",
  name: "Beerus",
  aliases: [
    "Beerus",
    "God of Destruction Beerus",
  ],
  tags: [
    "God of Destruction",
    "Hakai",
    "Ultra Instinct",
  ],
  seedRating: 80,
  description: "A God of Destruction with overwhelming destructive power.",
  specialTraits: [
    "God of Destruction",
    "Hakai",
    "Ultra Instinct",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-beerus-1",
      name: "Beerus",
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
        "God of Destruction techniques",
        "Hakai techniques",
        "Ultra Instinct techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "God of Destruction",
        "Hakai",
        "Ultra Instinct",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-beerus-2",
      name: "God of Destruction Beerus",
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
        "God of Destruction techniques",
        "Hakai techniques",
        "Ultra Instinct techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "God of Destruction",
        "Hakai",
        "Ultra Instinct",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 08 — WHIS
========================================================= */

export const WHIS = createTournamentCharacter({
  id: "dragon-ball-whis",
  verseId: "dragon-ball",
  name: "Whis",
  aliases: [
    "Whis",
    "Combat Whis",
  ],
  tags: [
    "Angel",
    "Ultra Instinct",
    "Time Rewind",
  ],
  seedRating: 85,
  description: "An Angel whose combat ability vastly exceeds most gods.",
  specialTraits: [
    "Angel",
    "Ultra Instinct",
    "Time Rewind",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-whis-1",
      name: "Whis",
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
        "Angel techniques",
        "Ultra Instinct techniques",
        "Time Rewind techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Angel",
        "Ultra Instinct",
        "Time Rewind",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-whis-2",
      name: "Combat Whis",
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
        "Angel techniques",
        "Ultra Instinct techniques",
        "Time Rewind techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Angel",
        "Ultra Instinct",
        "Time Rewind",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 09 — JIREN
========================================================= */

export const JIREN = createTournamentCharacter({
  id: "dragon-ball-jiren",
  verseId: "dragon-ball",
  name: "Jiren",
  aliases: [
    "Jiren",
    "Full Power Jiren",
  ],
  tags: [
    "Pride Trooper",
    "Ki",
    "Power",
  ],
  seedRating: 90,
  description: "A mortal whose raw power rivals Gods of Destruction.",
  specialTraits: [
    "Pride Trooper",
    "Ki",
    "Power",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-jiren-1",
      name: "Jiren",
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
        "Pride Trooper techniques",
        "Ki techniques",
        "Power techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Pride Trooper",
        "Ki",
        "Power",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-jiren-2",
      name: "Full Power Jiren",
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
        "Pride Trooper techniques",
        "Ki techniques",
        "Power techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Pride Trooper",
        "Ki",
        "Power",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 10 — HIT
========================================================= */

export const HIT = createTournamentCharacter({
  id: "dragon-ball-hit",
  verseId: "dragon-ball",
  name: "Hit",
  aliases: [
    "Assassin Hit",
    "Time Skip Hit",
  ],
  tags: [
    "Time Skip",
    "Assassin",
    "Ki",
  ],
  seedRating: 95,
  description: "An assassin who manipulates time intervals for precision attacks.",
  specialTraits: [
    "Time Skip",
    "Assassin",
    "Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-hit-1",
      name: "Assassin Hit",
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
        "Time Skip techniques",
        "Assassin techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Time Skip",
        "Assassin",
        "Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-hit-2",
      name: "Time Skip Hit",
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
        "Time Skip techniques",
        "Assassin techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Time Skip",
        "Assassin",
        "Ki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 11 — GOGETA
========================================================= */

export const GOGETA = createTournamentCharacter({
  id: "dragon-ball-gogeta",
  verseId: "dragon-ball",
  name: "Gogeta",
  aliases: [
    "Super Saiyan Gogeta",
    "Blue Gogeta",
  ],
  tags: [
    "Fusion",
    "Saiyan",
    "Ki",
  ],
  seedRating: 100,
  description: "A fusion with overwhelming combined power.",
  specialTraits: [
    "Fusion",
    "Saiyan",
    "Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-gogeta-1",
      name: "Super Saiyan Gogeta",
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
        "Fusion techniques",
        "Saiyan techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fusion",
        "Saiyan",
        "Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-gogeta-2",
      name: "Blue Gogeta",
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
        "Fusion techniques",
        "Saiyan techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fusion",
        "Saiyan",
        "Ki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 12 — VEGITO
========================================================= */

export const VEGITO = createTournamentCharacter({
  id: "dragon-ball-vegito",
  verseId: "dragon-ball",
  name: "Vegito",
  aliases: [
    "Super Saiyan Vegito",
    "Blue Vegito",
  ],
  tags: [
    "Fusion",
    "Saiyan",
    "Potara",
    "Ki",
  ],
  seedRating: 75,
  description: "Potara fusion with immense combined abilities.",
  specialTraits: [
    "Fusion",
    "Saiyan",
    "Potara",
    "Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-vegito-1",
      name: "Super Saiyan Vegito",
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
        "Fusion techniques",
        "Saiyan techniques",
        "Potara techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fusion",
        "Saiyan",
        "Potara",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-vegito-2",
      name: "Blue Vegito",
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
        "Fusion techniques",
        "Saiyan techniques",
        "Potara techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fusion",
        "Saiyan",
        "Potara",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 13 — GOTENKS
========================================================= */

export const GOTENKS = createTournamentCharacter({
  id: "dragon-ball-gotenks",
  verseId: "dragon-ball",
  name: "Gotenks",
  aliases: [
    "Base Gotenks",
    "Super Saiyan 3 Gotenks",
  ],
  tags: [
    "Fusion",
    "Saiyan",
    "Super Saiyan 3",
  ],
  seedRating: 80,
  description: "A fusion with extreme speed and eccentric techniques.",
  specialTraits: [
    "Fusion",
    "Saiyan",
    "Super Saiyan 3",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-gotenks-1",
      name: "Base Gotenks",
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
        "Fusion techniques",
        "Saiyan techniques",
        "Super Saiyan 3 techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fusion",
        "Saiyan",
        "Super Saiyan 3",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-gotenks-2",
      name: "Super Saiyan 3 Gotenks",
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
        "Fusion techniques",
        "Saiyan techniques",
        "Super Saiyan 3 techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Fusion",
        "Saiyan",
        "Super Saiyan 3",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 14 — TRUNKS
========================================================= */

export const TRUNKS = createTournamentCharacter({
  id: "dragon-ball-trunks",
  verseId: "dragon-ball",
  name: "Trunks",
  aliases: [
    "Future Trunks",
    "Super Saiyan Rage Trunks",
  ],
  tags: [
    "Saiyan-Human",
    "Sword",
    "Future",
  ],
  seedRating: 85,
  description: "A future warrior with explosive transformations.",
  specialTraits: [
    "Saiyan-Human",
    "Sword",
    "Future",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-trunks-1",
      name: "Future Trunks",
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
        "Saiyan-Human techniques",
        "Sword techniques",
        "Future techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan-Human",
        "Sword",
        "Future",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-trunks-2",
      name: "Super Saiyan Rage Trunks",
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
        "Saiyan-Human techniques",
        "Sword techniques",
        "Future techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan-Human",
        "Sword",
        "Future",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 15 — ANDROID 17
========================================================= */

export const ANDROID_17 = createTournamentCharacter({
  id: "dragon-ball-android-17",
  verseId: "dragon-ball",
  name: "Android 17",
  aliases: [
    "Android 17",
    "Tournament Android 17",
  ],
  tags: [
    "Android",
    "Infinite Energy",
    "Barrier",
  ],
  seedRating: 90,
  description: "An android with infinite stamina and barriers.",
  specialTraits: [
    "Android",
    "Infinite Energy",
    "Barrier",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-android-17-1",
      name: "Android 17",
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
        "Android techniques",
        "Infinite Energy techniques",
        "Barrier techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Android",
        "Infinite Energy",
        "Barrier",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-android-17-2",
      name: "Tournament Android 17",
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
        "Android techniques",
        "Infinite Energy techniques",
        "Barrier techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Android",
        "Infinite Energy",
        "Barrier",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 16 — ANDROID 18
========================================================= */

export const ANDROID_18 = createTournamentCharacter({
  id: "dragon-ball-android-18",
  verseId: "dragon-ball",
  name: "Android 18",
  aliases: [
    "Android 18",
    "Tournament Android 18",
  ],
  tags: [
    "Android",
    "Infinite Energy",
    "Flight",
  ],
  seedRating: 95,
  description: "An android with infinite stamina and strong combat ability.",
  specialTraits: [
    "Android",
    "Infinite Energy",
    "Flight",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-android-18-1",
      name: "Android 18",
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
        "Android techniques",
        "Infinite Energy techniques",
        "Flight techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Android",
        "Infinite Energy",
        "Flight",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-android-18-2",
      name: "Tournament Android 18",
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
        "Android techniques",
        "Infinite Energy techniques",
        "Flight techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Android",
        "Infinite Energy",
        "Flight",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 17 — CELL
========================================================= */

export const CELL = createTournamentCharacter({
  id: "dragon-ball-cell",
  verseId: "dragon-ball",
  name: "Cell",
  aliases: [
    "Imperfect Cell",
    "Perfect Cell",
    "Super Perfect Cell",
  ],
  tags: [
    "Bio-Android",
    "Regeneration",
    "Saiyan Cells",
  ],
  seedRating: 100,
  description: "A bio-android combining traits of elite warriors.",
  specialTraits: [
    "Bio-Android",
    "Regeneration",
    "Saiyan Cells",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-cell-1",
      name: "Imperfect Cell",
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
        "Bio-Android techniques",
        "Regeneration techniques",
        "Saiyan Cells techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Bio-Android",
        "Regeneration",
        "Saiyan Cells",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-cell-2",
      name: "Perfect Cell",
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
        "Bio-Android techniques",
        "Regeneration techniques",
        "Saiyan Cells techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Bio-Android",
        "Regeneration",
        "Saiyan Cells",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-cell-3",
      name: "Super Perfect Cell",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 99,
        speed: 100,
        durability: 83,
        intelligence: 100,
        attack: 100,
        defense: 93,
        stamina: 80,
        versatility: 100,
      },
      abilities: [
        "Bio-Android techniques",
        "Regeneration techniques",
        "Saiyan Cells techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Bio-Android",
        "Regeneration",
        "Saiyan Cells",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 18 — MAJIN BUU
========================================================= */

export const MAJIN_BUU = createTournamentCharacter({
  id: "dragon-ball-majin-buu",
  verseId: "dragon-ball",
  name: "Majin Buu",
  aliases: [
    "Fat Buu",
    "Super Buu",
    "Kid Buu",
  ],
  tags: [
    "Majin",
    "Regeneration",
    "Magic",
  ],
  seedRating: 75,
  description: "A magical lifeform with absurd regeneration.",
  specialTraits: [
    "Majin",
    "Regeneration",
    "Magic",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-majin-buu-1",
      name: "Fat Buu",
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
        "Majin techniques",
        "Regeneration techniques",
        "Magic techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Majin",
        "Regeneration",
        "Magic",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-majin-buu-2",
      name: "Super Buu",
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
        "Majin techniques",
        "Regeneration techniques",
        "Magic techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Majin",
        "Regeneration",
        "Magic",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-majin-buu-3",
      name: "Kid Buu",
      rank: 3,
      tier: "mythic",
      tournamentEligible: true,
      stats: {
        relativePower: 100,
        realPower: 100,
        hax: 100,
        speed: 100,
        durability: 86,
        intelligence: 71,
        attack: 100,
        defense: 97,
        stamina: 85,
        versatility: 100,
      },
      abilities: [
        "Majin techniques",
        "Regeneration techniques",
        "Magic techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Majin",
        "Regeneration",
        "Magic",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 19 — GOTEN
========================================================= */

export const GOTEN = createTournamentCharacter({
  id: "dragon-ball-goten",
  verseId: "dragon-ball",
  name: "Goten",
  aliases: [
    "Kid Goten",
    "Super Saiyan Goten",
  ],
  tags: [
    "Saiyan",
    "Super Saiyan",
    "Fusion",
  ],
  seedRating: 80,
  description: "A gifted young Saiyan.",
  specialTraits: [
    "Saiyan",
    "Super Saiyan",
    "Fusion",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-goten-1",
      name: "Kid Goten",
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
        "Saiyan techniques",
        "Super Saiyan techniques",
        "Fusion techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Super Saiyan",
        "Fusion",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-goten-2",
      name: "Super Saiyan Goten",
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
        "Saiyan techniques",
        "Super Saiyan techniques",
        "Fusion techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Super Saiyan",
        "Fusion",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 20 — TRUNKS KID
========================================================= */

export const TRUNKS_KID = createTournamentCharacter({
  id: "dragon-ball-trunks-kid",
  verseId: "dragon-ball",
  name: "Trunks Kid",
  aliases: [
    "Kid Trunks",
    "Super Saiyan Trunks",
  ],
  tags: [
    "Saiyan",
    "Super Saiyan",
    "Fusion",
  ],
  seedRating: 85,
  description: "A prodigious young Saiyan.",
  specialTraits: [
    "Saiyan",
    "Super Saiyan",
    "Fusion",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-trunks-kid-1",
      name: "Kid Trunks",
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
        "Saiyan techniques",
        "Super Saiyan techniques",
        "Fusion techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Super Saiyan",
        "Fusion",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-trunks-kid-2",
      name: "Super Saiyan Trunks",
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
        "Saiyan techniques",
        "Super Saiyan techniques",
        "Fusion techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan",
        "Super Saiyan",
        "Fusion",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 21 — TIEN
========================================================= */

export const TIEN = createTournamentCharacter({
  id: "dragon-ball-tien",
  verseId: "dragon-ball",
  name: "Tien",
  aliases: [
    "Tien",
    "Shin Kikoho Tien",
  ],
  tags: [
    "Human",
    "Tri-Beam",
    "Ki",
  ],
  seedRating: 90,
  description: "A dedicated martial artist with powerful energy techniques.",
  specialTraits: [
    "Human",
    "Tri-Beam",
    "Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-tien-1",
      name: "Tien",
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
        "Human techniques",
        "Tri-Beam techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Tri-Beam",
        "Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-tien-2",
      name: "Shin Kikoho Tien",
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
        "Human techniques",
        "Tri-Beam techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Tri-Beam",
        "Ki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 22 — KRILLIN
========================================================= */

export const KRILLIN = createTournamentCharacter({
  id: "dragon-ball-krillin",
  verseId: "dragon-ball",
  name: "Krillin",
  aliases: [
    "Krillin",
    "Destructo Disc Krillin",
  ],
  tags: [
    "Human",
    "Ki",
    "Destructo Disc",
  ],
  seedRating: 95,
  description: "A highly technical human martial artist.",
  specialTraits: [
    "Human",
    "Ki",
    "Destructo Disc",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-krillin-1",
      name: "Krillin",
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
        "Human techniques",
        "Ki techniques",
        "Destructo Disc techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Ki",
        "Destructo Disc",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-krillin-2",
      name: "Destructo Disc Krillin",
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
        "Human techniques",
        "Ki techniques",
        "Destructo Disc techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Ki",
        "Destructo Disc",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 23 — YAMCHA
========================================================= */

export const YAMCHA = createTournamentCharacter({
  id: "dragon-ball-yamcha",
  verseId: "dragon-ball",
  name: "Yamcha",
  aliases: [
    "Yamcha",
    "Wolf Fang Fist Yamcha",
  ],
  tags: [
    "Human",
    "Ki",
    "Martial Artist",
  ],
  seedRating: 100,
  description: "A veteran Earth fighter.",
  specialTraits: [
    "Human",
    "Ki",
    "Martial Artist",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-yamcha-1",
      name: "Yamcha",
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
        "Human techniques",
        "Ki techniques",
        "Martial Artist techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Ki",
        "Martial Artist",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-yamcha-2",
      name: "Wolf Fang Fist Yamcha",
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
        "Human techniques",
        "Ki techniques",
        "Martial Artist techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Ki",
        "Martial Artist",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 24 — MASTER ROSHI
========================================================= */

export const MASTER_ROSHI = createTournamentCharacter({
  id: "dragon-ball-master-roshi",
  verseId: "dragon-ball",
  name: "Master Roshi",
  aliases: [
    "Roshi",
    "Max Power Roshi",
  ],
  tags: [
    "Human",
    "Kamehameha",
    "Martial Arts",
  ],
  seedRating: 75,
  description: "An ancient master capable of drawing out huge power.",
  specialTraits: [
    "Human",
    "Kamehameha",
    "Martial Arts",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-master-roshi-1",
      name: "Roshi",
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
        "Human techniques",
        "Kamehameha techniques",
        "Martial Arts techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Kamehameha",
        "Martial Arts",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-master-roshi-2",
      name: "Max Power Roshi",
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
        "Human techniques",
        "Kamehameha techniques",
        "Martial Arts techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Human",
        "Kamehameha",
        "Martial Arts",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 25 — DEMON KING PICCOLO
========================================================= */

export const DEMON_KING_PICCOLO = createTournamentCharacter({
  id: "dragon-ball-demon-king-piccolo",
  verseId: "dragon-ball",
  name: "Demon King Piccolo",
  aliases: [
    "Piccolo Daimao",
    "Demon King Piccolo",
  ],
  tags: [
    "Namekian",
    "Regeneration",
    "Ki",
  ],
  seedRating: 80,
  description: "A dangerous older incarnation with demon-style techniques.",
  specialTraits: [
    "Namekian",
    "Regeneration",
    "Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-demon-king-piccolo-1",
      name: "Piccolo Daimao",
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
        "Namekian techniques",
        "Regeneration techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Namekian",
        "Regeneration",
        "Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-demon-king-piccolo-2",
      name: "Demon King Piccolo",
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
        "Namekian techniques",
        "Regeneration techniques",
        "Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Namekian",
        "Regeneration",
        "Ki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 26 — ZAMASU
========================================================= */

export const ZAMASU = createTournamentCharacter({
  id: "dragon-ball-zamasu",
  verseId: "dragon-ball",
  name: "Zamasu",
  aliases: [
    "Zamasu",
    "Fused Zamasu",
  ],
  tags: [
    "Kai",
    "Immortal",
    "God Ki",
  ],
  seedRating: 85,
  description: "A divine being whose fusion creates immense godly power.",
  specialTraits: [
    "Kai",
    "Immortal",
    "God Ki",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-zamasu-1",
      name: "Zamasu",
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
        "Kai techniques",
        "Immortal techniques",
        "God Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Kai",
        "Immortal",
        "God Ki",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-zamasu-2",
      name: "Fused Zamasu",
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
        "Kai techniques",
        "Immortal techniques",
        "God Ki techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Kai",
        "Immortal",
        "God Ki",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 27 — GOKU BLACK
========================================================= */

export const GOKU_BLACK = createTournamentCharacter({
  id: "dragon-ball-goku-black",
  verseId: "dragon-ball",
  name: "Goku Black",
  aliases: [
    "Goku Black",
    "Super Saiyan Rosé Goku Black",
  ],
  tags: [
    "Saiyan Body",
    "Kai",
    "Rosé",
  ],
  seedRating: 90,
  description: "Zamasu in Goku’s body with escalating power.",
  specialTraits: [
    "Saiyan Body",
    "Kai",
    "Rosé",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-goku-black-1",
      name: "Goku Black",
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
        "Saiyan Body techniques",
        "Kai techniques",
        "Rosé techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan Body",
        "Kai",
        "Rosé",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-goku-black-2",
      name: "Super Saiyan Rosé Goku Black",
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
        "Saiyan Body techniques",
        "Kai techniques",
        "Rosé techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Saiyan Body",
        "Kai",
        "Rosé",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 28 — GRANOLAH
========================================================= */

export const GRANOLAH = createTournamentCharacter({
  id: "dragon-ball-granolah",
  verseId: "dragon-ball",
  name: "Granolah",
  aliases: [
    "Base Granolah",
    "Full Power Granolah",
  ],
  tags: [
    "Cerelian",
    "Wish",
    "Sniper",
  ],
  seedRating: 95,
  description: "A wish-enhanced warrior with extreme precision.",
  specialTraits: [
    "Cerelian",
    "Wish",
    "Sniper",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-granolah-1",
      name: "Base Granolah",
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
        "Cerelian techniques",
        "Wish techniques",
        "Sniper techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cerelian",
        "Wish",
        "Sniper",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-granolah-2",
      name: "Full Power Granolah",
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
        "Cerelian techniques",
        "Wish techniques",
        "Sniper techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Cerelian",
        "Wish",
        "Sniper",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 29 — GAS
========================================================= */

export const GAS = createTournamentCharacter({
  id: "dragon-ball-gas",
  verseId: "dragon-ball",
  name: "Gas",
  aliases: [
    "Gas",
    "Full Power Gas",
  ],
  tags: [
    "Heeter",
    "Wish",
    "Weapons",
  ],
  seedRating: 100,
  description: "A wish-enhanced Heeter with manifested weapons and speed.",
  specialTraits: [
    "Heeter",
    "Wish",
    "Weapons",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-gas-1",
      name: "Gas",
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
        "Heeter techniques",
        "Wish techniques",
        "Weapons techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Heeter",
        "Wish",
        "Weapons",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-gas-2",
      name: "Full Power Gas",
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
        "Heeter techniques",
        "Wish techniques",
        "Weapons techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Heeter",
        "Wish",
        "Weapons",
      ],
    }),
  ],
});

/* =========================================================
   CHARACTER 30 — ZENO
========================================================= */

export const ZENO = createTournamentCharacter({
  id: "dragon-ball-zeno",
  verseId: "dragon-ball",
  name: "Zeno",
  aliases: [
    "Zeno",
    "Future Zeno",
  ],
  tags: [
    "Omni-King",
    "Erasure",
    "Cosmic",
  ],
  seedRating: 75,
  description: "The supreme ruler capable of universal-scale erasure.",
  specialTraits: [
    "Omni-King",
    "Erasure",
    "Cosmic",
  ],
  forms: [
    createTournamentForm({
      id: "dragon-ball-zeno-1",
      name: "Zeno",
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
        "Omni-King techniques",
        "Erasure techniques",
        "Cosmic techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Omni-King",
        "Erasure",
        "Cosmic",
      ],
    }),
    createTournamentForm({
      id: "dragon-ball-zeno-2",
      name: "Future Zeno",
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
        "Omni-King techniques",
        "Erasure techniques",
        "Cosmic techniques",
      ],
      weaknesses: [
        "Matchup-dependent limitations",
        "High-output states can increase resource demand",
      ],
      specialTraits: [
        "Omni-King",
        "Erasure",
        "Cosmic",
      ],
    }),
  ],
});

/* =========================================================
   FINAL DATABASE EXPORT — EXACTLY 30 CHARACTERS
========================================================= */
export const DRAGON_BALL_CHARACTERS = [
  GOKU,
  VEGETA,
  GOHAN,
  PICCOLO,
  FRIEZA,
  BROLY,
  BEERUS,
  WHIS,
  JIREN,
  HIT,
  GOGETA,
  VEGITO,
  GOTENKS,
  TRUNKS,
  ANDROID_17,
  ANDROID_18,
  CELL,
  MAJIN_BUU,
  GOTEN,
  TRUNKS_KID,
  TIEN,
  KRILLIN,
  YAMCHA,
  MASTER_ROSHI,
  DEMON_KING_PICCOLO,
  ZAMASU,
  GOKU_BLACK,
  GRANOLAH,
  GAS,
  ZENO,
];
