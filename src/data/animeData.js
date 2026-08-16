/*
  ============================================================
  ANIME DRAFT ARENA — COMPLETE VERSE DATABASE
  ============================================================

  20 Verses
  20 Characters per Verse
  5 Forms per Character

  Total:
  400 Characters
  2,000 Forms

  Image strategy:
  DiceBear seeded SVG avatars are used so images load reliably
  without depending on anime-site hotlink protection.
  ============================================================
*/

const FORM_POWER_MULTIPLIERS = [
  0.58,
  0.78,
  0.94,
  1.08,
  1.20
];

const FORM_NAMES = [
  "Base Form",
  "Awakened Form",
  "Advanced Form",
  "Peak Form",
  "Ultimate Form"
];

const makeImage = (verse, character, form) =>
  `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${encodeURIComponent(
    `${verse}-${character}-${form}`
  )}`;

const safeId = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

const makeForms = ({
  verse,
  character,
  formNames,
  baseRelative,
  baseReal,
  baseHax
}) => {
  return formNames.map((name, index) => {
    const multiplier =
      FORM_POWER_MULTIPLIERS[index] || 1;

    return {
      name,
      img: makeImage(
        verse,
        character,
        name
      ),
      relPower: Math.round(
        baseRelative * multiplier
      ),
      realPower: Math.round(
        baseReal * multiplier
      ),
      hax: Math.min(
        100,
        Math.round(
          baseHax +
            index * 3
        )
      )
    };
  });
};

const makeCharacter = ({
  verse,
  name,
  tags = [],
  forms = FORM_NAMES,
  tier = 70
}) => {
  const relativeBase =
    62000 +
    tier * 420;

  const realBase =
    50000 +
    tier * 1100;

  const haxBase =
    Math.min(
      94,
      52 +
        Math.round(tier / 5)
    );

  return {
    id: `${safeId(verse)}_${safeId(name)}`,
    name,
    tags: [
      verse,
      ...tags
    ],
    forms: makeForms({
      verse,
      character: name,
      formNames: forms,
      baseRelative: relativeBase,
      baseReal: realBase,
      baseHax: haxBase
    })
  };
};

const makeVerse = (
  verse,
  characters
) =>
  characters.map(
    (character, index) =>
      makeCharacter({
        verse,
        ...character,
        tier:
          character.tier ??
          55 + index * 2
      })
  );

/* ============================================================
   FORM NAME HELPERS
   ============================================================ */

const forms = (
  a,
  b,
  c,
  d,
  e
) => [a, b, c, d, e];

/* ============================================================
   ANIME VERSES
   ============================================================ */

export const ANIME_VERSES = {

  /* ==========================================================
     1. DRAGON BALL
     ========================================================== */

  "Dragon Ball": makeVerse(
    "Dragon Ball",
    [
      {
        name: "Son Goku",
        tags: ["Saiyan", "God Ki"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Super Saiyan 3",
          "Super Saiyan Blue",
          "Ultra Instinct"
        ),
        tier: 100
      },
      {
        name: "Vegeta",
        tags: ["Saiyan", "Royal"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Super Saiyan Blue",
          "Blue Evolution",
          "Ultra Ego"
        ),
        tier: 99
      },
      {
        name: "Gohan",
        tags: ["Half Saiyan", "Potential"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Ultimate",
          "Super Saiyan 2",
          "Beast"
        ),
        tier: 97
      },
      {
        name: "Piccolo",
        tags: ["Namekian", "Regeneration"],
        forms: forms(
          "Base",
          "Potential Unleashed",
          "Orange Piccolo",
          "Orange Giant",
          "Peak Namekian"
        ),
        tier: 90
      },
      {
        name: "Frieza",
        tags: ["Frost Demon", "Transformation"],
        forms: forms(
          "First Form",
          "Final Form",
          "Golden Frieza",
          "Full Power",
          "Black Frieza"
        ),
        tier: 98
      },
      {
        name: "Broly",
        tags: ["Legendary Saiyan", "Berserker"],
        forms: forms(
          "Base",
          "Wrathful",
          "Super Saiyan",
          "Full Power Super Saiyan",
          "Legendary Super Saiyan"
        ),
        tier: 98
      },
      {
        name: "Beerus",
        tags: ["God of Destruction", "Hakai"],
        forms: forms(
          "Suppressed",
          "Serious",
          "God Power",
          "Hakai Mastery",
          "Full Destruction"
        ),
        tier: 100
      },
      {
        name: "Whis",
        tags: ["Angel", "Ultra Instinct"],
        forms: forms(
          "Casual",
          "Combat",
          "Angel Power",
          "Ultra Instinct",
          "Angel Mastery"
        ),
        tier: 100
      },
      {
        name: "Jiren",
        tags: ["Pride Trooper", "Power"],
        forms: forms(
          "Base",
          "Full Power",
          "Limit Break",
          "Maximum Power",
          "Full Strength"
        ),
        tier: 96
      },
      {
        name: "Hit",
        tags: ["Assassin", "Time Skip"],
        forms: forms(
          "Base",
          "Time Skip",
          "Improved Time Skip",
          "Full Power",
          "Time Prison"
        ),
        tier: 92
      },
      {
        name: "Gogeta",
        tags: ["Fusion", "Saiyan"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Super Saiyan 3",
          "Super Saiyan Blue",
          "Blue Full Power"
        ),
        tier: 100
      },
      {
        name: "Vegito",
        tags: ["Potara", "Fusion"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Super Saiyan 2",
          "Super Saiyan Blue",
          "Blue Full Power"
        ),
        tier: 100
      },
      {
        name: "Majin Buu",
        tags: ["Majin", "Regeneration"],
        forms: forms(
          "Fat Buu",
          "Evil Buu",
          "Super Buu",
          "Buutenks",
          "Kid Buu"
        ),
        tier: 89
      },
      {
        name: "Cell",
        tags: ["Android", "Regeneration"],
        forms: forms(
          "Imperfect Cell",
          "Semi-Perfect Cell",
          "Perfect Cell",
          "Super Perfect Cell",
          "Peak Cell"
        ),
        tier: 86
      },
      {
        name: "Future Trunks",
        tags: ["Saiyan", "Sword"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Super Saiyan 2",
          "Rage",
          "Future Warrior"
        ),
        tier: 88
      },
      {
        name: "Gotenks",
        tags: ["Fusion", "Saiyan"],
        forms: forms(
          "Base",
          "Super Saiyan",
          "Super Saiyan 2",
          "Super Saiyan 3",
          "Ultimate Fusion"
        ),
        tier: 87
      },
      {
        name: "Bardock",
        tags: ["Saiyan", "Warrior"],
        forms: forms(
          "Base",
          "Great Ape",
          "Super Saiyan",
          "Super Saiyan God",
          "Peak Bardock"
        ),
        tier: 82
      },
      {
        name: "Tien Shinhan",
        tags: ["Human", "Martial Artist"],
        forms: forms(
          "Base",
          "Four Witches",
          "Tri-Beam",
          "Neo Tri-Beam",
          "Peak Tien"
        ),
        tier: 70
      },
      {
        name: "Krillin",
        tags: ["Human", "Destructo Disc"],
        forms: forms(
          "Base",
          "Training",
          "Potential",
          "Full Battle",
          "Peak Krillin"
        ),
        tier: 68
      },
      {
        name: "Android 17",
        tags: ["Android", "Barrier"],
        forms: forms(
          "Base",
          "Tournament",
          "Barrier Mastery",
          "Full Energy",
          "Peak Android"
        ),
        tier: 83
      }
    ]
  ),

  /* ==========================================================
     2. NARUTO
     ========================================================== */

  "Naruto": makeVerse(
    "Naruto",
    [
      {
        name: "Naruto Uzumaki",
        tags: ["Jinchuriki", "Hokage"],
        forms: forms(
          "Base",
          "Sage Mode",
          "KCM",
          "Six Paths Sage Mode",
          "Baryon Mode"
        ),
        tier: 100
      },
      {
        name: "Sasuke Uchiha",
        tags: ["Uchiha", "Rinnegan"],
        forms: forms(
          "Base",
          "Sharingan",
          "Mangekyo",
          "Eternal Mangekyo",
          "Rinnegan Susanoo"
        ),
        tier: 98
      },
      {
        name: "Madara Uchiha",
        tags: ["Uchiha", "Ten Tails"],
        forms: forms(
          "Base",
          "Eternal Mangekyo",
          "Perfect Susanoo",
          "Rinnegan",
          "Ten Tails Jinchuriki"
        ),
        tier: 100
      },
      {
        name: "Hashirama Senju",
        tags: ["Wood Release", "Hokage"],
        forms: forms(
          "Base",
          "Sage Mode",
          "Wood Sage",
          "True Several Thousand Hands",
          "Prime Hashirama"
        ),
        tier: 97
      },
      {
        name: "Minato Namikaze",
        tags: ["Flying Raijin", "Hokage"],
        forms: forms(
          "Base",
          "Flying Raijin",
          "Sage Mode",
          "KCM",
          "KCM Sage"
        ),
        tier: 96
      },
      {
        name: "Itachi Uchiha",
        tags: ["Genjutsu", "Susanoo"],
        forms: forms(
          "Base",
          "Sharingan",
          "Mangekyo",
          "Susanoo",
          "Yata Mirror Susanoo"
        ),
        tier: 90
      },
      {
        name: "Kakashi Hatake",
        tags: ["Copy Ninja", "Kamui"],
        forms: forms(
          "Base",
          "Sharingan",
          "Mangekyo",
          "Double Mangekyo",
          "Perfect Susanoo"
        ),
        tier: 91
      },
      {
        name: "Might Guy",
        tags: ["Taijutsu", "Eight Gates"],
        forms: forms(
          "Base",
          "Sixth Gate",
          "Seventh Gate",
          "Eighth Gate",
          "Night Guy"
        ),
        tier: 94
      },
      {
        name: "Obito Uchiha",
        tags: ["Kamui", "Uchiha"],
        forms: forms(
          "Base",
          "Mangekyo",
          "Masked Man",
          "Ten Tails",
          "Six Paths Obito"
        ),
        tier: 96
      },
      {
        name: "Nagato",
        tags: ["Rinnegan", "Six Paths"],
        forms: forms(
          "Base",
          "Rinnegan",
          "Six Paths",
          "Full Power",
          "Nagato Prime"
        ),
        tier: 92
      },
      {
        name: "Orochimaru",
        tags: ["Sannin", "Regeneration"],
        forms: forms(
          "Base",
          "Curse Mark",
          "White Snake",
          "Reanimation",
          "Peak Orochimaru"
        ),
        tier: 84
      },
      {
        name: "Jiraiya",
        tags: ["Sannin", "Toad Sage"],
        forms: forms(
          "Base",
          "Toad Summoning",
          "Sage Mode",
          "Perfect Sage",
          "Peak Jiraiya"
        ),
        tier: 87
      },
      {
        name: "Tsunade",
        tags: ["Sannin", "Medical"],
        forms: forms(
          "Base",
          "Chakra Release",
          "100 Healings",
          "Byakugou",
          "Peak Tsunade"
        ),
        tier: 83
      },
      {
        name: "Gaara",
        tags: ["Sand", "Kazekage"],
        forms: forms(
          "Base",
          "Sand Armor",
          "Kazekage",
          "Full Shukaku",
          "Peak Gaara"
        ),
        tier: 80
      },
      {
        name: "Killer B",
        tags: ["Eight Tails", "Jinchuriki"],
        forms: forms(
          "Base",
          "Lightning Armor",
          "Version 1",
          "Version 2",
          "Full Gyuki"
        ),
        tier: 85
      },
      {
        name: "Shikamaru Nara",
        tags: ["Shadow", "Strategist"],
        forms: forms(
          "Base",
          "Shadow Possession",
          "Shadow Sewing",
          "Strategist Mode",
          "Peak Tactician"
        ),
        tier: 72
      },
      {
        name: "Rock Lee",
        tags: ["Taijutsu", "Gates"],
        forms: forms(
          "Base",
          "Weights Removed",
          "Fifth Gate",
          "Sixth Gate",
          "Peak Lee"
        ),
        tier: 77
      },
      {
        name: "Neji Hyuga",
        tags: ["Byakugan", "Gentle Fist"],
        forms: forms(
          "Base",
          "Byakugan",
          "Rotation",
          "64 Palms",
          "Peak Neji"
        ),
        tier: 76
      },
      {
        name: "Kabuto Yakushi",
        tags: ["Sage", "Reanimation"],
        forms: forms(
          "Base",
          "Snake Mode",
          "Edo Tensei",
          "Sage Mode",
          "Dragon Sage"
        ),
        tier: 85
      },
      {
        name: "Kaguya Otsutsuki",
        tags: ["Otsutsuki", "Dimension"],
        forms: forms(
          "Base",
          "Chakra Fruit",
          "Rinne Sharingan",
          "Ten Tails",
          "Peak Kaguya"
        ),
        tier: 100
      }
    ]
  ),

  /* ==========================================================
     3. ONE PIECE
     ========================================================== */

  "One Piece": makeVerse(
    "One Piece",
    [
      {
        name: "Monkey D. Luffy",
        tags: ["Nika", "Haki"],
        forms: forms(
          "Base",
          "Gear Second",
          "Gear Fourth",
          "Gear Fifth",
          "Gear 5 Awakened"
        ),
        tier: 100
      },
      {
        name: "Roronoa Zoro",
        tags: ["Swordsman", "Haki"],
        forms: forms(
          "Three Sword Style",
          "Asura",
          "Enma",
          "King of Hell",
          "Peak Zoro"
        ),
        tier: 96
      },
      {
        name: "Sanji",
        tags: ["Genetics", "Speed"],
        forms: forms(
          "Base",
          "Diable Jambe",
          "Raid Suit",
          "Ifrit Jambe",
          "Peak Sanji"
        ),
        tier: 94
      },
      {
        name: "Shanks",
        tags: ["Conqueror Haki", "Yonko"],
        forms: forms(
          "Base",
          "Armament Haki",
          "Observation Haki",
          "Conqueror Haki",
          "Peak Shanks"
        ),
        tier: 99
      },
      {
        name: "Kaido",
        tags: ["Yonko", "Dragon"],
        forms: forms(
          "Base",
          "Hybrid",
          "Dragon",
          "Flame Dragon",
          "Peak Kaido"
        ),
        tier: 99
      },
      {
        name: "Big Mom",
        tags: ["Yonko", "Soul"],
        forms: forms(
          "Base",
          "Napoleon",
          "Soul Amp",
          "Awakened",
          "Peak Big Mom"
        ),
        tier: 96
      },
      {
        name: "Blackbeard",
        tags: ["Darkness", "Yonko"],
        forms: forms(
          "Darkness",
          "Quake",
          "Dual Devil Fruit",
          "Yonko",
          "Peak Blackbeard"
        ),
        tier: 98
      },
      {
        name: "Whitebeard",
        tags: ["Quake", "Yonko"],
        forms: forms(
          "Prime",
          "Armament",
          "Conqueror",
          "Gura Gura",
          "Prime Whitebeard"
        ),
        tier: 100
      },
      {
        name: "Gol D. Roger",
        tags: ["Pirate King", "Haki"],
        forms: forms(
          "Base",
          "Armament",
          "Conqueror",
          "Divine Power",
          "Prime Roger"
        ),
        tier: 100
      },
      {
        name: "Dracule Mihawk",
        tags: ["Swordsman", "Black Blade"],
        forms: forms(
          "Base",
          "Yoru",
          "Advanced Haki",
          "Black Blade Mastery",
          "Peak Mihawk"
        ),
        tier: 98
      },
      {
        name: "Monkey D. Garp",
        tags: ["Marine", "Haki"],
        forms: forms(
          "Base",
          "Galaxy Impact",
          "Armament",
          "Conqueror",
          "Prime Garp"
        ),
        tier: 99
      },
      {
        name: "Trafalgar Law",
        tags: ["Ope Ope", "Awakening"],
        forms: forms(
          "Base",
          "Room",
          "Awakening",
          "K-Room",
          "Peak Law"
        ),
        tier: 93
      },
      {
        name: "Eustass Kid",
        tags: ["Magnetism", "Awakening"],
        forms: forms(
          "Base",
          "Metal Arms",
          "Assign",
          "Damned Punk",
          "Peak Kid"
        ),
        tier: 90
      },
      {
        name: "Doflamingo",
        tags: ["String", "Awakening"],
        forms: forms(
          "Base",
          "Parasite",
          "Awakening",
          "Overheat",
          "Peak Doflamingo"
        ),
        tier: 86
      },
      {
        name: "Charlotte Katakuri",
        tags: ["Mochi", "Future Sight"],
        forms: forms(
          "Base",
          "Mochi",
          "Future Sight",
          "Awakening",
          "Peak Katakuri"
        ),
        tier: 91
      },
      {
        name: "Marco",
        tags: ["Phoenix", "Regeneration"],
        forms: forms(
          "Base",
          "Phoenix",
          "Full Phoenix",
          "Blue Flame",
          "Peak Marco"
        ),
        tier: 88
      },
      {
        name: "Akainu",
        tags: ["Magma", "Fleet Admiral"],
        forms: forms(
          "Base",
          "Magma",
          "Full Magma",
          "Advanced Haki",
          "Peak Akainu"
        ),
        tier: 95
      },
      {
        name: "Aokiji",
        tags: ["Ice", "Haki"],
        forms: forms(
          "Base",
          "Ice",
          "Ice Age",
          "Awakened Ice",
          "Peak Aokiji"
        ),
        tier: 94
      },
      {
        name: "Kizaru",
        tags: ["Light", "Admiral"],
        forms: forms(
          "Base",
          "Light",
          "Light Barrage",
          "Awakened Light",
          "Peak Kizaru"
        ),
        tier: 94
      },
      {
        name: "Silvers Rayleigh",
        tags: ["Dark King", "Haki"],
        forms: forms(
          "Base",
          "Armament",
          "Observation",
          "Conqueror",
          "Prime Rayleigh"
        ),
        tier: 96
      }
    ]
  ),

  /* ==========================================================
     4. BLEACH
     ========================================================== */

  Bleach: makeVerse(
    "Bleach",
    [
      {
        name: "Ichigo Kurosaki",
        tags: ["Shinigami", "Quincy"],
        forms: forms(
          "Base",
          "Shikai",
          "Bankai",
          "True Shikai",
          "True Bankai / Horn"
        ),
        tier: 100
      },
      {
        name: "Sosuke Aizen",
        tags: ["Hogyoku", "Kyoka Suigetsu"],
        forms: forms(
          "Captain",
          "Shikai",
          "Hogyoku",
          "Transcendent",
          "Peak Aizen"
        ),
        tier: 100
      },
      {
        name: "Yhwach",
        tags: ["Quincy King", "Almighty"],
        forms: forms(
          "Base",
          "Sankt Altar",
          "Almighty",
          "Soul King",
          "Peak Yhwach"
        ),
        tier: 100
      },
      {
        name: "Genryusai Yamamoto",
        tags: ["Bankai", "Captain"],
        forms: forms(
          "Shikai",
          "Bankai",
          "Zanka no Tachi",
          "East",
          "South"
        ),
        tier: 98
      },
      {
        name: "Kenpachi Zaraki",
        tags: ["Nozarashi", "Berserker"],
        forms: forms(
          "Base",
          "Eye Patch Off",
          "Shikai",
          "Bankai",
          "Berserk Bankai"
        ),
        tier: 97
      },
      {
        name: "Byakuya Kuchiki",
        tags: ["Senbonzakura", "Captain"],
        forms: forms(
          "Base",
          "Shikai",
          "Bankai",
          "Senbonzakura Kageyoshi",
          "True Bankai"
        ),
        tier: 91
      },
      {
        name: "Toshiro Hitsugaya",
        tags: ["Ice", "Hyorinmaru"],
        forms: forms(
          "Shikai",
          "Bankai",
          "Mature Bankai",
          "Completed Daiguren",
          "Adult Toshiro"
        ),
        tier: 92
      },
      {
        name: "Shunsui Kyoraku",
        tags: ["Katen Kyokotsu", "Captain"],
        forms: forms(
          "Shikai",
          "Bankai",
          "Karamatsu",
          "Takaoni",
          "Peak Shunsui"
        ),
        tier: 94
      },
      {
        name: "Kisuke Urahara",
        tags: ["Scientist", "Benihime"],
        forms: forms(
          "Shikai",
          "Bankai",
          "Kannonbiraki",
          "Prep Mastery",
          "Peak Urahara"
        ),
        tier: 92
      },
      {
        name: "Yoruichi Shihoin",
        tags: ["Shunko", "Speed"],
        forms: forms(
          "Base",
          "Shunko",
          "Raijin Senkei",
          "Thunder Cat",
          "Peak Yoruichi"
        ),
        tier: 91
      },
      {
        name: "Rukia Kuchiki",
        tags: ["Ice", "Bankai"],
        forms: forms(
          "Base",
          "Shikai",
          "Hakka no Togame",
          "Bankai",
          "Absolute Zero"
        ),
        tier: 87
      },
      {
        name: "Renji Abarai",
        tags: ["Zabimaru", "Bankai"],
        forms: forms(
          "Base",
          "Shikai",
          "Bankai",
          "True Zabimaru",
          "Soo Zabimaru"
        ),
        tier: 84
      },
      {
        name: "Ulquiorra Cifer",
        tags: ["Espada", "Resurreccion"],
        forms: forms(
          "Base",
          "Murcielago",
          "Resurreccion",
          "Segunda Etapa",
          "Segunda Etapa Peak"
        ),
        tier: 90
      },
      {
        name: "Grimmjow",
        tags: ["Espada", "Panther"],
        forms: forms(
          "Base",
          "Pantera",
          "Resurreccion",
          "Full Resurreccion",
          "Peak Grimmjow"
        ),
        tier: 85
      },
      {
        name: "Coyote Starrk",
        tags: ["Espada", "Guns"],
        forms: forms(
          "Base",
          "Los Lobos",
          "Resurreccion",
          "Cero Metralleta",
          "Peak Starrk"
        ),
        tier: 88
      },
      {
        name: "Baraggan Louisenbairn",
        tags: ["Respira", "Espada"],
        forms: forms(
          "Base",
          "Arrogante",
          "Respira",
          "Aging Aura",
          "Peak Baraggan"
        ),
        tier: 89
      },
      {
        name: "Mayuri Kurotsuchi",
        tags: ["Scientist", "Poisons"],
        forms: forms(
          "Base",
          "Mod Soul",
          "Bankai",
          "Modified Bankai",
          "Peak Mayuri"
        ),
        tier: 84
      },
      {
        name: "Jugram Haschwalth",
        tags: ["Balance", "Sternritter"],
        forms: forms(
          "Base",
          "The Balance",
          "Holy Selection",
          "Almighty Link",
          "Peak Jugram"
        ),
        tier: 95
      },
      {
        name: "Uryu Ishida",
        tags: ["Quincy", "Antithesis"],
        forms: forms(
          "Base",
          "Quincy Bow",
          "Vollstandig",
          "Antithesis",
          "Peak Uryu"
        ),
        tier: 89
      },
      {
        name: "Gremmy Thoumeaux",
        tags: ["Visionary", "Sternritter"],
        forms: forms(
          "Base",
          "Visionary",
          "Meteor",
          "Multiple Gremmy",
          "Peak Gremmy"
        ),
        tier: 96
      }
    ]
  ),

  /* ==========================================================
     5. JUJUTSU KAISEN
     ========================================================== */

  "Jujutsu Kaisen": makeVerse(
    "Jujutsu Kaisen",
    [
      {
        name: "Satoru Gojo",
        tags: ["Limitless", "Six Eyes"],
        forms: forms(
          "Base",
          "Infinity",
          "Red",
          "Purple",
          "Unlimited Void"
        ),
        tier: 100
      },
      {
        name: "Ryomen Sukuna",
        tags: ["King of Curses", "Shrine"],
        forms: forms(
          "Base",
          "Finger Power",
          "Megumi Vessel",
          "True Form",
          "Malevolent Shrine"
        ),
        tier: 100
      },
      {
        name: "Yuji Itadori",
        tags: ["Divergent Fist", "Black Flash"],
        forms: forms(
          "Base",
          "Black Flash",
          "Awakened",
          "Blood Manipulation",
          "Peak Yuji"
        ),
        tier: 91
      },
      {
        name: "Yuta Okkotsu",
        tags: ["Rika", "Copy"],
        forms: forms(
          "Base",
          "Rika",
          "Full Rika",
          "Domain",
          "Peak Yuta"
        ),
        tier: 94
      },
      {
        name: "Megumi Fushiguro",
        tags: ["Ten Shadows", "Shikigami"],
        forms: forms(
          "Base",
          "Ten Shadows",
          "Domain",
          "Mahoraga",
          "Peak Megumi"
        ),
        tier: 89
      },
      {
        name: "Maki Zenin",
        tags: ["Heavenly Restriction", "Weapons"],
        forms: forms(
          "Base",
          "Awakened",
          "Playful Cloud",
          "Split Soul Katana",
          "Peak Maki"
        ),
        tier: 90
      },
      {
        name: "Toji Fushiguro",
        tags: ["Heavenly Restriction", "Assassin"],
        forms: forms(
          "Base",
          "Inventory Curse",
          "Cursed Weapons",
          "Awakened Toji",
          "Peak Toji"
        ),
        tier: 92
      },
      {
        name: "Kenjaku",
        tags: ["Body Swap", "Curses"],
        forms: forms(
          "Base",
          "Cursed Spirit Manipulation",
          "Maximum Uzumaki",
          "Anti-Gravity",
          "Peak Kenjaku"
        ),
        tier: 94
      },
      {
        name: "Mahito",
        tags: ["Idle Transfiguration", "Curse"],
        forms: forms(
          "Base",
          "Transfiguration",
          "Instant Spirit Body",
          "Domain",
          "Self Embodiment"
        ),
        tier: 88
      },
      {
        name: "Jogo",
        tags: ["Volcano", "Curse"],
        forms: forms(
          "Base",
          "Maximum Meteor",
          "Domain",
          "Volcanic",
          "Peak Jogo"
        ),
        tier: 80
      },
      {
        name: "Hanami",
        tags: ["Nature", "Curse"],
        forms: forms(
          "Base",
          "Cursed Buds",
          "Wood",
          "Domain",
          "Peak Hanami"
        ),
        tier: 78
      },
      {
        name: "Dagon",
        tags: ["Ocean", "Curse"],
        forms: forms(
          "Base",
          "Cursed Womb",
          "Domain",
          "Death Swarm",
          "Peak Dagon"
        ),
        tier: 79
      },
      {
        name: "Choso",
        tags: ["Blood", "Death Painting"],
        forms: forms(
          "Base",
          "Piercing Blood",
          "Flowing Red Scale",
          "Supernova",
          "Peak Choso"
        ),
        tier: 82
      },
      {
        name: "Aoi Todo",
        tags: ["Boogie Woogie", "Black Flash"],
        forms: forms(
          "Base",
          "Boogie Woogie",
          "Black Flash",
          "Vibraslap",
          "Peak Todo"
        ),
        tier: 83
      },
      {
        name: "Kento Nanami",
        tags: ["Ratio", "Black Flash"],
        forms: forms(
          "Base",
          "Ratio Technique",
          "Overtime",
          "Black Flash",
          "Peak Nanami"
        ),
        tier: 76
      },
      {
        name: "Kinji Hakari",
        tags: ["Jackpot", "Domain"],
        forms: forms(
          "Base",
          "Domain",
          "Jackpot",
          "Immortal Jackpot",
          "Peak Hakari"
        ),
        tier: 90
      },
      {
        name: "Toge Inumaki",
        tags: ["Cursed Speech", "Support"],
        forms: forms(
          "Base",
          "Cursed Speech",
          "Enhanced Speech",
          "Maximum Output",
          "Peak Inumaki"
        ),
        tier: 70
      },
      {
        name: "Panda",
        tags: ["Cursed Corpse", "Three Cores"],
        forms: forms(
          "Base",
          "Gorilla Core",
          "Panda Core",
          "Triceratops Core",
          "Peak Panda"
        ),
        tier: 68
      },
      {
        name: "Naobito Zenin",
        tags: ["Projection Sorcery", "Speed"],
        forms: forms(
          "Base",
          "Projection",
          "Speed Burst",
          "Maximum Projection",
          "Peak Naobito"
        ),
        tier: 81
      },
      {
        name: "Uraume",
        tags: ["Ice", "Curse User"],
        forms: forms(
          "Base",
          "Ice Formation",
          "Icefall",
          "Maximum Frost",
          "Peak Uraume"
        ),
        tier: 86
      }
    ]
  ),

  /* ==========================================================
     6. SOLO LEVELING
     ========================================================== */

  "Solo Leveling": makeVerse(
    "Solo Leveling",
    [
      { name: "Sung Jin-Woo", tags: ["Shadow Monarch"], forms: forms("Hunter", "Shadow", "Monarch", "True Monarch", "Peak Jin-Woo"), tier: 100 },
      { name: "Cha Hae-In", tags: ["Swordsman", "Hunter"], forms: forms("Base", "Sword Aura", "Awakened", "Enhanced", "Peak Hae-In"), tier: 86 },
      { name: "Thomas Andre", tags: ["National Level", "Tank"], forms: forms("Base", "Transformation", "Ruler's Authority", "Full Power", "Peak Thomas"), tier: 95 },
      { name: "Liu Zhigang", tags: ["National Level", "Sword"], forms: forms("Base", "Sword Aura", "Awakened", "Full Power", "Peak Liu"), tier: 93 },
      { name: "Go Gun-Hee", tags: ["Hunter", "Ruler"], forms: forms("Base", "Awakened", "Ruler Power", "Full Ruler", "Peak Gun-Hee"), tier: 88 },
      { name: "Beru", tags: ["Shadow", "Ant King"], forms: forms("Ant", "Beru", "Shadow Beru", "Elite Beru", "Peak Beru"), tier: 91 },
      { name: "Igris", tags: ["Shadow", "Knight"], forms: forms("Knight", "Red Knight", "Shadow Knight", "Elite", "Commander Igris"), tier: 87 },
      { name: "Bellion", tags: ["Shadow", "Grand Marshal"], forms: forms("Base", "Shadow Marshal", "Grand Marshal", "Full Power", "Peak Bellion"), tier: 94 },
      { name: "Ashborn", tags: ["Shadow Monarch", "Ruler"], forms: forms("Ruler", "Shadow", "Monarch", "Awakened", "Peak Ashborn"), tier: 100 },
      { name: "Antares", tags: ["Dragon Emperor", "Destruction"], forms: forms("Base", "Dragon", "Emperor", "Destruction", "Peak Antares"), tier: 100 },
      { name: "Baran", tags: ["Dragon", "Monarch"], forms: forms("Humanoid", "Dragon", "Lightning", "Monarch", "Peak Baran"), tier: 93 },
      { name: "Hockwan", tags: ["Monarch", "Beast"], forms: forms("Base", "Beast", "Awakened", "Monarch", "Peak Hockwan"), tier: 90 },
      { name: "Legia", tags: ["Monarch", "Frost"], forms: forms("Base", "Frozen", "Monarch", "Awakened", "Peak Legia"), tier: 91 },
      { name: "Querehsha", tags: ["Monarch", "Insect"], forms: forms("Base", "Insect", "Monarch", "Awakened", "Peak Querehsha"), tier: 90 },
      { name: "Rakan", tags: ["Monarch", "Beast"], forms: forms("Base", "Beast", "King", "Monarch", "Peak Rakan"), tier: 94 },
      { name: "Sillad", tags: ["Monarch", "Ice"], forms: forms("Base", "Ice", "Monarch", "Awakened", "Peak Sillad"), tier: 91 },
      { name: "Yogumunt", tags: ["Monarch", "Dragon"], forms: forms("Base", "Dragon", "Monarch", "Awakened", "Peak Yogumunt"), tier: 90 },
      { name: "Christopher Reed", tags: ["National Level", "Ruler"], forms: forms("Base", "Awakened", "Ruler", "Full Power", "Peak Christopher"), tier: 92 },
      { name: "Siddharth Bachchan", tags: ["National Level", "Hunter"], forms: forms("Base", "Awakened", "National Power", "Full Power", "Peak Siddharth"), tier: 91 },
      { name: "Baek Yoonho", tags: ["Hunter", "Beast"], forms: forms("Base", "Beast", "Transformation", "Full Beast", "Peak Baek"), tier: 84 }
    ]
  ),

  /* ==========================================================
     7. DEMON SLAYER
     ========================================================== */

  "Demon Slayer": makeVerse(
    "Demon Slayer",
    [
      { name: "Tanjiro Kamado", tags: ["Sun Breathing", "Demon Slayer"], forms: forms("Base", "Water Breathing", "Hinokami Kagura", "Sun Breathing", "Peak Tanjiro"), tier: 96 },
      { name: "Nezuko Kamado", tags: ["Demon", "Regeneration"], forms: forms("Base", "Demon", "Awakened", "Berserk", "Peak Nezuko"), tier: 87 },
      { name: "Zenitsu Agatsuma", tags: ["Thunder", "Speed"], forms: forms("Base", "First Form", "Six Fold", "Godspeed", "Peak Zenitsu"), tier: 88 },
      { name: "Inosuke Hashibira", tags: ["Beast Breathing", "Dual Blades"], forms: forms("Base", "Beast", "Enhanced Senses", "Wild Rage", "Peak Inosuke"), tier: 83 },
      { name: "Giyu Tomioka", tags: ["Water Hashira", "Dead Calm"], forms: forms("Base", "Water Breathing", "Dead Calm", "Marked", "Peak Giyu"), tier: 90 },
      { name: "Kyojuro Rengoku", tags: ["Flame Hashira", "Spirit"], forms: forms("Base", "Flame Breathing", "Full Flame", "Marked", "Peak Rengoku"), tier: 90 },
      { name: "Tengen Uzui", tags: ["Sound Hashira", "Explosives"], forms: forms("Base", "Twin Blades", "Musical Score", "Awakened", "Peak Tengen"), tier: 86 },
      { name: "Shinobu Kocho", tags: ["Insect Hashira", "Poison"], forms: forms("Base", "Poison", "Enhanced Poison", "Final Technique", "Peak Shinobu"), tier: 82 },
      { name: "Muichiro Tokito", tags: ["Mist Hashira", "Marked"], forms: forms("Base", "Mist", "Mark", "Transparent World", "Peak Muichiro"), tier: 92 },
      { name: "Mitsuri Kanroji", tags: ["Love Hashira", "Flexibility"], forms: forms("Base", "Love Breathing", "Mark", "Awakened", "Peak Mitsuri"), tier: 89 },
      { name: "Sanemi Shinazugawa", tags: ["Wind Hashira", "Marechi"], forms: forms("Base", "Wind Breathing", "Mark", "Awakened", "Peak Sanemi"), tier: 93 },
      { name: "Gyomei Himejima", tags: ["Stone Hashira", "Weapon"], forms: forms("Base", "Stone Breathing", "Mark", "Transparent World", "Peak Gyomei"), tier: 97 },
      { name: "Obanai Iguro", tags: ["Serpent Hashira", "Kaburamaru"], forms: forms("Base", "Serpent Breathing", "Mark", "See-Through World", "Peak Obanai"), tier: 90 },
      { name: "Kanao Tsuyuri", tags: ["Flower Breathing", "Eyes"], forms: forms("Base", "Flower Breathing", "Final Form", "Enhanced Eyes", "Peak Kanao"), tier: 80 },
      { name: "Yoriichi Tsugikuni", tags: ["Sun Breathing", "Legend"], forms: forms("Base", "Sun Breathing", "Mark", "Transparent World", "Peak Yoriichi"), tier: 100 },
      { name: "Muzan Kibutsuji", tags: ["Demon", "Regeneration"], forms: forms("Base", "Demon", "Flesh Manipulation", "Explosive Form", "Peak Muzan"), tier: 100 },
      { name: "Kokushibo", tags: ["Upper Moon", "Moon Breathing"], forms: forms("Base", "Moon Breathing", "Demon", "Six Eyes", "Peak Kokushibo"), tier: 98 },
      { name: "Doma", tags: ["Upper Moon", "Ice"], forms: forms("Base", "Ice", "Lotus", "Buddha", "Peak Doma"), tier: 94 },
      { name: "Akaza", tags: ["Upper Moon", "Martial Arts"], forms: forms("Base", "Compass Needle", "Destructive Death", "Annihilation", "Peak Akaza"), tier: 93 },
      { name: "Hantengu", tags: ["Upper Moon", "Emotion"], forms: forms("Base", "Emotion Clones", "Sekido", "Zohakuten", "Peak Hantengu"), tier: 89 }
    ]
  ),

  /* ==========================================================
     8. HUNTER X HUNTER
     ========================================================== */

  "Hunter x Hunter": makeVerse(
    "Hunter x Hunter",
    [
      { name: "Gon Freecss", tags: ["Nen", "Enhancer"], forms: forms("Base", "Jajanken", "Nen", "Rage", "Adult Gon"), tier: 96 },
      { name: "Killua Zoldyck", tags: ["Nen", "Godspeed"], forms: forms("Base", "Lightning", "Godspeed", "Whirlwind", "Peak Killua"), tier: 91 },
      { name: "Kurapika", tags: ["Scarlet Eyes", "Chains"], forms: forms("Base", "Scarlet Eyes", "Chain Jail", "Emperor Time", "Peak Kurapika"), tier: 88 },
      { name: "Hisoka", tags: ["Bungee Gum", "Trickster"], forms: forms("Base", "Bungee Gum", "Texture Surprise", "Post Mortem", "Peak Hisoka"), tier: 90 },
      { name: "Chrollo Lucilfer", tags: ["Skill Hunter", "Leader"], forms: forms("Base", "Bandit's Secret", "Double Face", "Bookmark", "Peak Chrollo"), tier: 94 },
      { name: "Meruem", tags: ["Chimera Ant", "King"], forms: forms("Base", "King", "Aura", "Post Rose", "Peak Meruem"), tier: 100 },
      { name: "Isaac Netero", tags: ["100-Type", "Hunter"], forms: forms("Prime Netero", "Meditation", "Hyakushiki", "Zero Hand", "Peak Netero"), tier: 98 },
      { name: "Neferpitou", tags: ["Royal Guard", "Nen"], forms: forms("Base", "Terpsichora", "Doctor Blythe", "Post Mortem", "Peak Pitou"), tier: 95 },
      { name: "Shaiapouf", tags: ["Royal Guard", "Manipulation"], forms: forms("Base", "Scale", "Cocoon", "Spiritual Message", "Peak Pouf"), tier: 91 },
      { name: "Menthuthuyoupi", tags: ["Royal Guard", "Mutation"], forms: forms("Base", "Rage Blast", "Mutation", "Full Rage", "Peak Youpi"), tier: 94 },
      { name: "Feitan Portor", tags: ["Phantom Troupe", "Pain Packer"], forms: forms("Base", "Sword", "Pain Packer", "Rising Sun", "Peak Feitan"), tier: 84 },
      { name: "Illumi Zoldyck", tags: ["Needle", "Manipulation"], forms: forms("Base", "Needles", "Body Control", "Crow Form", "Peak Illumi"), tier: 86 },
      { name: "Silva Zoldyck", tags: ["Assassin", "Nen"], forms: forms("Base", "Transmutation", "Orb Attack", "Full Power", "Peak Silva"), tier: 91 },
      { name: "Zeno Zoldyck", tags: ["Dragon Dive", "Assassin"], forms: forms("Base", "Dragon Head", "Dragon Dive", "En", "Peak Zeno"), tier: 90 },
      { name: "Biscuit Krueger", tags: ["Nen", "Enhancer"], forms: forms("Base", "Real Form", "Training", "Full Aura", "Peak Biscuit"), tier: 82 },
      { name: "Razor", tags: ["Emission", "Game Master"], forms: forms("Base", "Nen", "14 Devils", "Full Power", "Peak Razor"), tier: 84 },
      { name: "Ging Freecss", tags: ["Hunter", "Nen Genius"], forms: forms("Base", "Nen", "Copy", "Adaptive", "Peak Ging"), tier: 92 },
      { name: "Kite", tags: ["Crazy Slots", "Hunter"], forms: forms("Base", "Crazy Slots", "Scythe", "Pistol", "Peak Kite"), tier: 82 },
      { name: "Morel Mackernasey", tags: ["Smoke", "Strategist"], forms: forms("Base", "Smoke", "Deep Purple", "Smoky Jail", "Peak Morel"), tier: 82 },
      { name: "Knuckle Bine", tags: ["Hakoware", "Hunter"], forms: forms("Base", "Potclean", "APR", "Judgment", "Peak Knuckle"), tier: 79 }
    ]
  ),

  /* ==========================================================
     9. ATTACK ON TITAN
     ========================================================== */

  "Attack on Titan": makeVerse(
    "Attack on Titan",
    [
      { name: "Eren Yeager", tags: ["Founding Titan", "Attack Titan"], forms: forms("Human", "Attack Titan", "War Hammer", "Founding Titan", "Rumbling"), tier: 98 },
      { name: "Mikasa Ackerman", tags: ["Ackerman", "Soldier"], forms: forms("Base", "ODM", "Thunder Spears", "Awakened", "Peak Mikasa"), tier: 90 },
      { name: "Levi Ackerman", tags: ["Ackerman", "Captain"], forms: forms("Base", "ODM", "Awakened", "Beast Slayer", "Peak Levi"), tier: 94 },
      { name: "Armin Arlert", tags: ["Colossal Titan", "Strategist"], forms: forms("Human", "Colossal Titan", "Transformation", "Steam Burst", "Peak Armin"), tier: 89 },
      { name: "Reiner Braun", tags: ["Armored Titan", "Warrior"], forms: forms("Human", "Armored Titan", "Hardened", "Full Armor", "Peak Reiner"), tier: 86 },
      { name: "Annie Leonhart", tags: ["Female Titan", "Martial Arts"], forms: forms("Human", "Female Titan", "Hardened", "Awakened Titan", "Peak Annie"), tier: 87 },
      { name: "Zeke Yeager", tags: ["Beast Titan", "Royal Blood"], forms: forms("Human", "Beast Titan", "Rock Throw", "Royal Command", "Peak Zeke"), tier: 90 },
      { name: "Erwin Smith", tags: ["Commander", "Strategy"], forms: forms("Base", "Commander", "Leadership", "Battle Plan", "Peak Erwin"), tier: 70 },
      { name: "Hange Zoe", tags: ["Researcher", "Commander"], forms: forms("Base", "ODM", "Commander", "Battle Strategist", "Peak Hange"), tier: 72 },
      { name: "Jean Kirstein", tags: ["Soldier", "Strategy"], forms: forms("Base", "ODM", "Thunder Spears", "Commander", "Peak Jean"), tier: 71 },
      { name: "Sasha Blouse", tags: ["Archer", "Soldier"], forms: forms("Base", "Bow", "Sniper", "Hunter", "Peak Sasha"), tier: 66 },
      { name: "Connie Springer", tags: ["Soldier", "ODM"], forms: forms("Base", "ODM", "Scout", "Battle", "Peak Connie"), tier: 63 },
      { name: "Historia Reiss", tags: ["Royal Blood", "Queen"], forms: forms("Base", "Queen", "Royal Blood", "Leadership", "Peak Historia"), tier: 60 },
      { name: "Porco Galliard", tags: ["Jaw Titan", "Warrior"], forms: forms("Human", "Jaw Titan", "Claws", "Full Jaw", "Peak Porco"), tier: 80 },
      { name: "Pieck Finger", tags: ["Cart Titan", "Warrior"], forms: forms("Human", "Cart Titan", "Mounted", "War Machine", "Peak Pieck"), tier: 79 },
      { name: "Bertholdt Hoover", tags: ["Colossal Titan", "Warrior"], forms: forms("Human", "Colossal Titan", "Steam", "Nuclear Transformation", "Peak Bertholdt"), tier: 90 },
      { name: "Ymir Fritz", tags: ["Founder", "Titan"], forms: forms("Human", "Founder", "Paths", "Titan Creation", "Peak Ymir"), tier: 100 },
      { name: "Kenny Ackerman", tags: ["Ackerman", "Guns"], forms: forms("Base", "Guns", "ODM", "Combat Mode", "Peak Kenny"), tier: 78 },
      { name: "Grisha Yeager", tags: ["Attack Titan", "Eren's Father"], forms: forms("Human", "Attack Titan", "Founding Transfer", "Awakened Titan", "Peak Grisha"), tier: 80 },
      { name: "Falco Grice", tags: ["Jaw Titan", "Flying"], forms: forms("Human", "Jaw Titan", "Falcon", "Flying Titan", "Peak Falco"), tier: 78 }
    ]
  ),

  /* ==========================================================
     10. MY HERO ACADEMIA
     ========================================================== */

  "My Hero Academia": makeVerse(
    "My Hero Academia",
    [
      { name: "Izuku Midoriya", tags: ["One For All", "Quirks"], forms: forms("Base", "20%", "45%", "100%", "Gearshift Full Cowling"), tier: 98 },
      { name: "Katsuki Bakugo", tags: ["Explosion", "Speed"], forms: forms("Base", "Full Cowl", "Cluster", "Howitzer", "Peak Bakugo"), tier: 94 },
      { name: "Shoto Todoroki", tags: ["Half-Cold", "Half-Hot"], forms: forms("Base", "Ice", "Fire", "Phosphor", "Peak Shoto"), tier: 91 },
      { name: "All Might", tags: ["One For All", "Symbol"], forms: forms("Base", "Buff", "Prime", "United States", "Prime All Might"), tier: 100 },
      { name: "Endeavor", tags: ["Hellflame", "Pro Hero"], forms: forms("Base", "Hellflame", "Prominence Burn", "Flashfire", "Peak Endeavor"), tier: 91 },
      { name: "Shigaraki Tomura", tags: ["Decay", "All For One"], forms: forms("Base", "Awakened", "Decay", "All For One", "Peak Shigaraki"), tier: 99 },
      { name: "All For One", tags: ["Quirk Theft", "Villain"], forms: forms("Base", "Quirk Theft", "Armored", "Prime", "Peak AFO"), tier: 99 },
      { name: "Hawks", tags: ["Fierce Wings", "Speed"], forms: forms("Base", "Wings", "Full Wings", "Awakened", "Peak Hawks"), tier: 86 },
      { name: "Mirko", tags: ["Rabbit", "Strength"], forms: forms("Base", "Kick", "Awakened", "Full Strength", "Peak Mirko"), tier: 87 },
      { name: "Best Jeanist", tags: ["Fiber Master", "Support"], forms: forms("Base", "Fiber", "Full Control", "Fiber Prison", "Peak Jeanist"), tier: 82 },
      { name: "Eraser Head", tags: ["Erasure", "Teacher"], forms: forms("Base", "Erasure", "Combat Goggles", "Capture Weapon", "Peak Aizawa"), tier: 83 },
      { name: "Mirio Togata", tags: ["Permeation", "Speed"], forms: forms("Base", "Permeation", "Full Permeation", "Phantom Menace", "Peak Mirio"), tier: 87 },
      { name: "Tamaki Amajiki", tags: ["Manifest", "Hybrid"], forms: forms("Base", "Manifest", "Tentacle", "Centaur", "Peak Tamaki"), tier: 81 },
      { name: "Nejire Hado", tags: ["Wave Motion", "Energy"], forms: forms("Base", "Wave Motion", "Spiral", "Full Output", "Peak Nejire"), tier: 84 },
      { name: "Dabi", tags: ["Blueflame", "Villain"], forms: forms("Base", "Blue Flame", "Cremation", "Overdrive", "Peak Dabi"), tier: 86 },
      { name: "Himiko Toga", tags: ["Transform", "Blood"], forms: forms("Base", "Transform", "Double", "Sad Man's Parade", "Peak Toga"), tier: 79 },
      { name: "Twice", tags: ["Double", "Sad Man's Parade"], forms: forms("Base", "Double", "Clone Army", "Sad Man's Parade", "Peak Twice"), tier: 89 },
      { name: "Overhaul", tags: ["Reconstruction", "Quirk"], forms: forms("Base", "Overhaul", "Fusion", "Full Body", "Peak Overhaul"), tier: 88 },
      { name: "Stain", tags: ["Bloodcurdle", "Assassin"], forms: forms("Base", "Bloodcurdle", "Katana", "Awakened", "Peak Stain"), tier: 80 },
      { name: "Gentle Criminal", tags: ["Elasticity", "Criminal"], forms: forms("Base", "Elasticity", "Air Walls", "La Brava Boost", "Peak Gentle"), tier: 74 }
    ]
  ),

  /* ==========================================================
     11. BLACK CLOVER
     ========================================================== */

  "Black Clover": makeVerse(
    "Black Clover",
    [
      { name: "Asta", tags: ["Anti-Magic", "Devil Union"], forms: forms("Base", "Black Asta", "Black Divider", "Devil Union", "True Devil Union"), tier: 98 },
      { name: "Yuno Grinberryall", tags: ["Wind", "Star Magic"], forms: forms("Base", "Spirit Dive", "Star Magic", "Neverland", "Peak Yuno"), tier: 97 },
      { name: "Noelle Silva", tags: ["Water", "Valkyrie"], forms: forms("Base", "Valkyrie Dress", "Saint Stage", "Sea Dragon", "Peak Noelle"), tier: 91 },
      { name: "Yami Sukehiro", tags: ["Dark Magic", "Captain"], forms: forms("Base", "Black Moon", "Dark Cloaked", "Dimension Slash", "Peak Yami"), tier: 94 },
      { name: "Julius Novachrono", tags: ["Time Magic", "Wizard King"], forms: forms("Base", "Time Magic", "Chrono", "Full Time Power", "Peak Julius"), tier: 99 },
      { name: "Mereoleona Vermillion", tags: ["Fire", "Mana Zone"], forms: forms("Base", "Mana Zone", "Calidus Brachium", "Hellfire Incarnate", "Peak Mereoleona"), tier: 95 },
      { name: "Fuegoleon Vermillion", tags: ["Fire", "Spirit"], forms: forms("Base", "Salamander", "Spirit Dive", "Full Spirit", "Peak Fuegoleon"), tier: 91 },
      { name: "Nozel Silva", tags: ["Mercury", "Captain"], forms: forms("Base", "Mercury", "Silver Rain", "Mercury Eagle", "Peak Nozel"), tier: 89 },
      { name: "William Vangeance", tags: ["World Tree", "Captain"], forms: forms("Base", "World Tree", "Healing", "Mana Zone", "Peak William"), tier: 87 },
      { name: "Jack the Ripper", tags: ["Slash", "Captain"], forms: forms("Base", "Slash Magic", "Death Scythe", "Dimension Slash", "Peak Jack"), tier: 86 },
      { name: "Charlotte Roselei", tags: ["Briar", "Captain"], forms: forms("Base", "Briar", "Blue Briar", "Mana Zone", "Peak Charlotte"), tier: 84 },
      { name: "Luck Voltia", tags: ["Lightning", "Speed"], forms: forms("Base", "Lightning", "Rune", "Ultimate Lightning", "Peak Luck"), tier: 86 },
      { name: "Magna Swing", tags: ["Fire", "Soul Chain"], forms: forms("Base", "Fire", "Soul Chain", "Soul Chain Deathmatch", "Peak Magna"), tier: 80 },
      { name: "Vanessa Enoteca", tags: ["Thread", "Fate"], forms: forms("Base", "Red Thread", "Cat Rouge", "Fate Manipulation", "Peak Vanessa"), tier: 83 },
      { name: "Finral Roulacase", tags: ["Spatial", "Support"], forms: forms("Base", "Portal", "Spatial Magic", "Mana Zone", "Peak Finral"), tier: 78 },
      { name: "Nacht Faust", tags: ["Shadow", "Devils"], forms: forms("Base", "Shadow", "Devil Union", "Multiple Devils", "Peak Nacht"), tier: 92 },
      { name: "Zenon Zogratis", tags: ["Bone", "Devil"], forms: forms("Base", "Bone Magic", "Devil Possession", "80%", "Peak Zenon"), tier: 93 },
      { name: "Dante Zogratis", tags: ["Gravity", "Devil"], forms: forms("Base", "Gravity", "Devil Possession", "100%", "Peak Dante"), tier: 95 },
      { name: "Vanica Zogratis", tags: ["Blood", "Devil"], forms: forms("Base", "Blood", "Megicula", "100%", "Peak Vanica"), tier: 91 },
      { name: "Lucius Zogratis", tags: ["Soul", "Time"], forms: forms("Base", "Soul Magic", "Time Magic", "Paladin", "Peak Lucius"), tier: 100 }
    ]
  ),

  /* ==========================================================
     12. FATE SERIES
     ========================================================== */

  "Fate Series": makeVerse(
    "Fate Series",
    [
      { name: "Artoria Pendragon", tags: ["Saber", "Excalibur"], forms: forms("Saber", "Mana Burst", "Invisible Air", "Excalibur", "Avalon Saber"), tier: 97 },
      { name: "Gilgamesh", tags: ["Archer", "Gate of Babylon"], forms: forms("Base", "Gate of Babylon", "Ea", "Enuma Elish", "Full Gilgamesh"), tier: 100 },
      { name: "EMIYA", tags: ["Archer", "Unlimited Blade Works"], forms: forms("Base", "Projection", "Trace", "Unlimited Blade Works", "Full EMIYA"), tier: 89 },
      { name: "Cu Chulainn", tags: ["Lancer", "Gae Bolg"], forms: forms("Base", "Gae Bolg", "Battle Continuation", "Rune", "Peak Cu"), tier: 87 },
      { name: "Ishtar", tags: ["Archer", "Goddess"], forms: forms("Base", "Goddess", "An Gal Ta Ki", "Maanna", "Peak Ishtar"), tier: 94 },
      { name: "Karna", tags: ["Lancer", "Divinity"], forms: forms("Base", "Armor", "Brahmastra", "Vasavi Shakti", "Peak Karna"), tier: 98 },
      { name: "Arjuna Alter", tags: ["Archer", "Divine"], forms: forms("Base", "Divine", "Cosmic", "Mahapralaya", "Peak Arjuna Alter"), tier: 100 },
      { name: "Mordred", tags: ["Saber", "Clarent"], forms: forms("Base", "Mana Burst", "Clarent", "Full Armor", "Peak Mordred"), tier: 90 },
      { name: "Jeanne d'Arc", tags: ["Ruler", "Holy"], forms: forms("Base", "Command", "Banner", "Luminosite", "Peak Jeanne"), tier: 88 },
      { name: "Jeanne Alter", tags: ["Avenger", "Dragon"], forms: forms("Base", "Dragon", "La Grondement", "Avenger", "Peak Jalter"), tier: 92 },
      { name: "Ozymandias", tags: ["Rider", "Pharaoh"], forms: forms("Base", "Temple", "Sphinx", "Duat", "Peak Ozymandias"), tier: 93 },
      { name: "Merlin", tags: ["Caster", "Magecraft"], forms: forms("Base", "Magecraft", "Illusion", "Garden of Avalon", "Peak Merlin"), tier: 95 },
      { name: "Medea", tags: ["Caster", "Magic"], forms: forms("Base", "Rune", "High Thaumaturgy", "Rule Breaker", "Peak Medea"), tier: 82 },
      { name: "Heracles", tags: ["Berserker", "God Hand"], forms: forms("Base", "Berserker", "God Hand", "Madness Enhancement", "Peak Heracles"), tier: 94 },
      { name: "Medusa", tags: ["Rider", "Mystic Eyes"], forms: forms("Base", "Rider", "Mystic Eyes", "Bellerophon", "Gorgon"), tier: 88 },
      { name: "King Hassan", tags: ["Assassin", "Death"], forms: forms("Base", "Azrael", "Death Aura", "Grand Assassin", "Peak King Hassan"), tier: 96 },
      { name: "Scathach", tags: ["Lancer", "Spear"], forms: forms("Base", "Gae Bolg", "Rune", "Divine Spear", "Peak Scathach"), tier: 91 },
      { name: "Nero Claudius", tags: ["Saber", "Imperial Privilege"], forms: forms("Base", "Saber", "Aestus", "Laus", "Peak Nero"), tier: 84 },
      { name: "Morgan", tags: ["Berserker", "Fairy"], forms: forms("Base", "Fairy Magic", "Beryl", "Avalon", "Peak Morgan"), tier: 99 },
      { name: "Space Ishtar", tags: ["Avenger", "Goddess"], forms: forms("Base", "Archer", "Goddess", "Universe", "Peak Space Ishtar"), tier: 100 }
    ]
  ),

  /* ==========================================================
     13. FULLMETAL ALCHEMIST
     ========================================================== */

  "Fullmetal Alchemist": makeVerse(
    "Fullmetal Alchemist",
    [
      { name: "Edward Elric", tags: ["Alchemy", "State Alchemist"], forms: forms("Base", "Weapon Alchemy", "Automail", "Advanced Alchemy", "Peak Edward"), tier: 87 },
      { name: "Alphonse Elric", tags: ["Alchemy", "Armor"], forms: forms("Armor", "Soul Bound", "Alchemy", "Philosopher Boost", "Peak Alphonse"), tier: 85 },
      { name: "Roy Mustang", tags: ["Flame Alchemy", "Colonel"], forms: forms("Base", "Flame", "Precision Flame", "Inferno", "Peak Mustang"), tier: 89 },
      { name: "Riza Hawkeye", tags: ["Marksman", "Support"], forms: forms("Base", "Pistol", "Dual Pistols", "Sniper", "Peak Riza"), tier: 70 },
      { name: "Scar", tags: ["Destruction", "Alchemy"], forms: forms("Base", "Right Arm", "Left Arm", "Reconstruction", "Peak Scar"), tier: 85 },
      { name: "King Bradley", tags: ["Wrath", "Ultimate Eye"], forms: forms("Human", "Ultimate Eye", "Wrath", "Dual Sword", "Peak Bradley"), tier: 94 },
      { name: "Father", tags: ["Homunculus", "Philosopher Stone"], forms: forms("Base", "Homunculus", "God Power", "Truth", "Peak Father"), tier: 100 },
      { name: "Pride", tags: ["Shadow", "Homunculus"], forms: forms("Base", "Shadow", "Night", "Eater", "Peak Pride"), tier: 91 },
      { name: "Greed", tags: ["Ultimate Shield", "Homunculus"], forms: forms("Base", "Shield", "Ultimate Shield", "Ling Greed", "Peak Greed"), tier: 87 },
      { name: "Envy", tags: ["Shapeshift", "Homunculus"], forms: forms("Base", "Transform", "Serpent", "Giant Form", "Peak Envy"), tier: 79 },
      { name: "Lust", tags: ["Ultimate Spear", "Homunculus"], forms: forms("Base", "Spear", "Ultimate Spear", "Burning", "Peak Lust"), tier: 77 },
      { name: "Gluttony", tags: ["Devour", "Homunculus"], forms: forms("Base", "Gluttony", "False Gate", "Predator", "Peak Gluttony"), tier: 74 },
      { name: "Sloth", tags: ["Strength", "Homunculus"], forms: forms("Base", "Speed", "Strength", "Berserk", "Peak Sloth"), tier: 83 },
      { name: "Wrath", tags: ["Ultimate Eye", "Homunculus"], forms: forms("Base", "Eye", "Wrath", "Ultimate Eye", "Peak Wrath"), tier: 94 },
      { name: "Van Hohenheim", tags: ["Philosopher Stone", "Alchemy"], forms: forms("Base", "Soul", "Alchemy", "Philosopher Stone", "Peak Hohenheim"), tier: 96 },
      { name: "Olivier Mira Armstrong", tags: ["General", "Sword"], forms: forms("Base", "Sword", "General", "Fortress", "Peak Olivier"), tier: 72 },
      { name: "Alex Louis Armstrong", tags: ["Alchemy", "Strength"], forms: forms("Base", "Strong Arm", "Alchemy", "Stone Fist", "Peak Armstrong"), tier: 76 },
      { name: "Izumi Curtis", tags: ["Alchemy", "Martial Artist"], forms: forms("Base", "Alchemy", "Martial", "Advanced Alchemy", "Peak Izumi"), tier: 82 },
      { name: "Ling Yao", tags: ["Greed", "Sword"], forms: forms("Base", "Sword", "Greed", "Ultimate Shield", "Peak Ling"), tier: 84 },
      { name: "Kimblee", tags: ["Explosion", "Alchemy"], forms: forms("Base", "Explosion", "Alchemy", "Composite Bomb", "Peak Kimblee"), tier: 79 }
    ]
  ),

  /* ==========================================================
     14. JOJO
     ========================================================== */

  "JoJo's Bizarre Adventure": makeVerse(
    "JoJo's Bizarre Adventure",
    [
      { name: "Jotaro Kujo", tags: ["Star Platinum", "Time Stop"], forms: forms("Base", "Star Platinum", "The World", "Time Stop", "Peak Jotaro"), tier: 98 },
      { name: "DIO", tags: ["The World", "Vampire"], forms: forms("Vampire", "The World", "Time Stop", "Awakened", "Peak DIO"), tier: 99 },
      { name: "Giorno Giovanna", tags: ["Gold Experience", "GER"], forms: forms("Base", "Gold Experience", "Requiem", "GER", "Peak Giorno"), tier: 100 },
      { name: "Josuke Higashikata", tags: ["Crazy Diamond", "Healing"], forms: forms("Base", "Crazy Diamond", "Restoration", "Rage", "Peak Josuke"), tier: 88 },
      { name: "Joseph Joestar", tags: ["Hamon", "Strategy"], forms: forms("Base", "Hamon", "Hermit Purple", "Battle Strategy", "Peak Joseph"), tier: 80 },
      { name: "Jonathan Joestar", tags: ["Hamon", "Strength"], forms: forms("Base", "Hamon", "Sunlight Yellow", "Overdrive", "Peak Jonathan"), tier: 83 },
      { name: "Jolyne Cujoh", tags: ["Stone Free", "String"], forms: forms("Base", "Stone Free", "Mobius", "String Combat", "Peak Jolyne"), tier: 85 },
      { name: "Johnny Joestar", tags: ["Tusk", "Spin"], forms: forms("Base", "Tusk Act 1", "Act 2", "Act 3", "Act 4"), tier: 98 },
      { name: "Funny Valentine", tags: ["D4C", "Dimension"], forms: forms("Base", "D4C", "Love Train", "Dimension Shift", "Peak Valentine"), tier: 99 },
      { name: "Enrico Pucci", tags: ["Whitesnake", "Time"], forms: forms("Whitesnake", "C-Moon", "Made in Heaven", "Time Acceleration", "Peak Pucci"), tier: 99 },
      { name: "Yoshikage Kira", tags: ["Killer Queen", "Bomb"], forms: forms("Base", "Killer Queen", "Sheer Heart Attack", "Bites the Dust", "Peak Kira"), tier: 91 },
      { name: "Diavolo", tags: ["King Crimson", "Time"], forms: forms("Base", "Epitaph", "King Crimson", "Time Erasure", "Peak Diavolo"), tier: 94 },
      { name: "Bruno Bucciarati", tags: ["Sticky Fingers", "Zipper"], forms: forms("Base", "Sticky Fingers", "Zipper", "Awakened", "Peak Bruno"), tier: 86 },
      { name: "Rohan Kishibe", tags: ["Heaven's Door", "Writer"], forms: forms("Base", "Heaven's Door", "Rewrite", "Command", "Peak Rohan"), tier: 92 },
      { name: "Polnareff", tags: ["Silver Chariot", "Sword"], forms: forms("Base", "Silver Chariot", "Armor Off", "Requiem", "Peak Polnareff"), tier: 87 },
      { name: "Kakyoin", tags: ["Hierophant Green", "Emerald"], forms: forms("Base", "Hierophant Green", "Emerald Splash", "Barrier", "Peak Kakyoin"), tier: 82 },
      { name: "Okuyasu Nijimura", tags: ["The Hand", "Space"], forms: forms("Base", "The Hand", "Erase Space", "Rage", "Peak Okuyasu"), tier: 84 },
      { name: "Mista", tags: ["Sex Pistols", "Gun"], forms: forms("Base", "Sex Pistols", "Number Six", "Enhanced Bullets", "Peak Mista"), tier: 79 },
      { name: "Gyro Zeppeli", tags: ["Spin", "Steel Ball"], forms: forms("Base", "Spin", "Scan", "Golden Spin", "Peak Gyro"), tier: 93 },
      { name: "Joshu Higashikata", tags: ["Nut King Call", "Stand"], forms: forms("Base", "Nut King", "Glue", "Awakened", "Peak Joshu"), tier: 72 }
    ]
  ),

  /* ==========================================================
     15. CHAINSAW MAN
     ========================================================== */

  "Chainsaw Man": makeVerse(
    "Chainsaw Man",
    [
      { name: "Denji", tags: ["Chainsaw Devil", "Hybrid"], forms: forms("Human", "Hybrid", "Chainsaw Man", "Black Chainsaw", "Hero of Hell"), tier: 98 },
      { name: "Makima", tags: ["Control Devil", "Domination"], forms: forms("Human", "Control", "Contract", "Dominance", "Peak Makima"), tier: 99 },
      { name: "Aki Hayakawa", tags: ["Devil Hunter", "Sword"], forms: forms("Human", "Curse", "Future Devil", "Fox Devil", "Peak Aki"), tier: 82 },
      { name: "Power", tags: ["Blood Devil", "Fiend"], forms: forms("Fiend", "Blood", "Weapons", "Full Blood", "Peak Power"), tier: 87 },
      { name: "Kishibe", tags: ["Devil Hunter", "Veteran"], forms: forms("Base", "Knife", "Contracts", "Full Hunter", "Peak Kishibe"), tier: 88 },
      { name: "Reze", tags: ["Bomb Devil", "Hybrid"], forms: forms("Human", "Hybrid", "Bomb", "Torpedo", "Peak Reze"), tier: 91 },
      { name: "Quanxi", tags: ["Crossbow Devil", "Hybrid"], forms: forms("Human", "Hybrid", "Bow", "Quanxi Full", "Peak Quanxi"), tier: 95 },
      { name: "Hirofumi Yoshida", tags: ["Octopus Devil", "Hunter"], forms: forms("Base", "Octopus", "Tentacles", "Combat", "Peak Yoshida"), tier: 84 },
      { name: "Katana Man", tags: ["Katana Devil", "Hybrid"], forms: forms("Human", "Hybrid", "Katana", "Draw Slash", "Peak Katana Man"), tier: 84 },
      { name: "Gun Devil", tags: ["Gun", "Devil"], forms: forms("Fragment", "Devil", "Gun Form", "Massacre", "Peak Gun Devil"), tier: 99 },
      { name: "Darkness Devil", tags: ["Darkness", "Primal Fear"], forms: forms("Base", "Darkness", "Abyss", "Primal", "Peak Darkness"), tier: 100 },
      { name: "War Devil", tags: ["War", "Devil"], forms: forms("Base", "War", "Weapons", "Nuclear", "Peak Yoru"), tier: 99 },
      { name: "Famine Devil", tags: ["Famine", "Devil"], forms: forms("Base", "Famine", "Starvation", "Primal", "Peak Fami"), tier: 96 },
      { name: "Angel Devil", tags: ["Angel", "Weapons"], forms: forms("Base", "Angel", "Weapon Creation", "Life Drain", "Peak Angel"), tier: 87 },
      { name: "Beam", tags: ["Shark Devil", "Fiend"], forms: forms("Human", "Shark", "Fiend", "Full Shark", "Peak Beam"), tier: 78 },
      { name: "Violence Fiend", tags: ["Violence", "Fiend"], forms: forms("Base", "Mask", "Strength", "Full Violence", "Peak Violence"), tier: 82 },
      { name: "Cosmo", tags: ["Halloween", "Cosmos"], forms: forms("Base", "Halloween", "Cosmos", "Knowledge", "Peak Cosmo"), tier: 88 },
      { name: "Santa Claus", tags: ["Doll Devil", "Contracts"], forms: forms("Human", "Dolls", "Darkness", "Contract", "Peak Santa"), tier: 92 },
      { name: "Hell Devil", tags: ["Hell", "Devil"], forms: forms("Base", "Hell", "Summon", "Fire", "Peak Hell Devil"), tier: 95 },
      { name: "Future Devil", tags: ["Future", "Devil"], forms: forms("Base", "Future", "Vision", "Prediction", "Peak Future Devil"), tier: 90 }
    ]
  ),

  /* ==========================================================
     16. ONE PUNCH MAN
     ========================================================== */

  "One Punch Man": makeVerse(
    "One Punch Man",
    [
      { name: "Saitama", tags: ["Hero", "Limitless"], forms: forms("Base", "Serious", "Serious Series", "Serious Punch", "Peak Saitama"), tier: 100 },
      { name: "Garou", tags: ["Martial Artist", "Cosmic"], forms: forms("Human", "Monster", "Awakened", "Cosmic", "Cosmic Garou"), tier: 100 },
      { name: "Boros", tags: ["Alien", "Regeneration"], forms: forms("Base", "Armored", "Released", "Meteoric Burst", "Peak Boros"), tier: 98 },
      { name: "Tatsumaki", tags: ["Esper", "Psychic"], forms: forms("Base", "Psychic", "Barrier", "Full Power", "Peak Tatsumaki"), tier: 98 },
      { name: "Genos", tags: ["Cyborg", "Incineration"], forms: forms("Base", "Upgraded", "Full Arms", "10-Second Mode", "Peak Genos"), tier: 88 },
      { name: "Bang", tags: ["Water Stream", "Martial Arts"], forms: forms("Base", "Water Stream", "Whirlwind", "Abandonment", "Peak Bang"), tier: 91 },
      { name: "Atomic Samurai", tags: ["Sword", "Speed"], forms: forms("Base", "Atomic Slash", "Sun Blade", "Moon Blade", "Peak Atomic Samurai"), tier: 88 },
      { name: "Flashy Flash", tags: ["Speed", "Sword"], forms: forms("Base", "Flash", "Speed of Sound", "Extreme Speed", "Peak Flashy Flash"), tier: 91 },
      { name: "Metal Knight", tags: ["Robots", "Arsenal"], forms: forms("Drone", "Robot", "Heavy Arsenal", "Army", "Peak Metal Knight"), tier: 90 },
      { name: "Superalloy Darkshine", tags: ["Muscle", "Durability"], forms: forms("Base", "Shiny", "Superalloy", "Full Muscle", "Peak Darkshine"), tier: 86 },
      { name: "Watchdog Man", tags: ["Hero", "Animal"], forms: forms("Base", "Dog", "Rage", "Combat", "Peak Watchdog"), tier: 85 },
      { name: "Child Emperor", tags: ["Genius", "Technology"], forms: forms("Base", "Gadgets", "Brave Giant", "Full Arsenal", "Peak Child Emperor"), tier: 84 },
      { name: "Drive Knight", tags: ["Cyborg", "Adaptation"], forms: forms("Base", "Tank", "Jet", "Dragon Mode", "Peak Drive Knight"), tier: 85 },
      { name: "Zombie Man", tags: ["Regeneration", "Immortal"], forms: forms("Base", "Weapons", "Regeneration", "Endurance", "Peak Zombieman"), tier: 80 },
      { name: "Amai Mask", tags: ["Hero", "Monster"], forms: forms("Human", "Beautiful Hero", "Monster", "Awakened Monster", "Peak Amai"), tier: 91 },
      { name: "Speed-o'-Sound Sonic", tags: ["Speed", "Ninja"], forms: forms("Base", "Ninja", "Genos Rival", "Ultimate Speed", "Peak Sonic"), tier: 83 },
      { name: "Deep Sea King", tags: ["Monster", "Water"], forms: forms("Base", "Hydrated", "Full Water", "Monster", "Peak Sea King"), tier: 78 },
      { name: "Elder Centipede", tags: ["Monster", "Armor"], forms: forms("Base", "Armor", "Regeneration", "Rage", "Peak Centipede"), tier: 87 },
      { name: "Homeless Emperor", tags: ["Energy", "Monster"], forms: forms("Base", "Energy", "Orb Barrage", "Full Power", "Peak Emperor"), tier: 84 },
      { name: "Psykos", tags: ["Esper", "Monster"], forms: forms("Base", "Esper", "Awakened", "Orochi Fusion", "Peak Psykos"), tier: 94 }
    ]
  ),

  /* ==========================================================
     17. FAIRY TAIL
     ========================================================== */

  "Fairy Tail": makeVerse(
    "Fairy Tail",
    [
      { name: "Natsu Dragneel", tags: ["Dragon Slayer", "Fire"], forms: forms("Base", "Flame", "Lightning Flame", "Fire Dragon King", "E.N.D."), tier: 98 },
      { name: "Erza Scarlet", tags: ["Requip", "Sword"], forms: forms("Base", "Armor", "Heaven's Wheel", "Nakagami", "Peak Erza"), tier: 94 },
      { name: "Gray Fullbuster", tags: ["Ice Devil Slayer", "Ice"], forms: forms("Base", "Ice Make", "Devil Slayer", "Devil Force", "Peak Gray"), tier: 91 },
      { name: "Lucy Heartfilia", tags: ["Celestial", "Keys"], forms: forms("Base", "Celestial Spirits", "Star Dress", "Star Dress Mix", "Peak Lucy"), tier: 88 },
      { name: "Wendy Marvell", tags: ["Sky Dragon Slayer", "Enchantment"], forms: forms("Base", "Sky Dragon", "Dragon Force", "Enchantments", "Peak Wendy"), tier: 90 },
      { name: "Gajeel Redfox", tags: ["Iron Dragon Slayer", "Iron"], forms: forms("Base", "Iron", "Iron Shadow", "Dragon Force", "Peak Gajeel"), tier: 89 },
      { name: "Laxus Dreyar", tags: ["Lightning Dragon Slayer", "Lightning"], forms: forms("Base", "Lightning", "Dragon Slayer", "Red Lightning", "Peak Laxus"), tier: 95 },
      { name: "Mira Jane Strauss", tags: ["Take Over", "Demon"], forms: forms("Base", "Satan Soul", "Demon", "Alegria", "Peak Mirajane"), tier: 91 },
      { name: "Gildarts Clive", tags: ["Crash Magic", "Strongest"], forms: forms("Base", "Crash", "Full Crash", "Magic Armor", "Peak Gildarts"), tier: 97 },
      { name: "Jellal Fernandes", tags: ["Meteor", "Magic"], forms: forms("Base", "Meteor", "Dark Magic", "Sema", "Peak Jellal"), tier: 93 },
      { name: "Makarov Dreyar", tags: ["Titan", "Guild Master"], forms: forms("Base", "Giant", "Fairy Law", "Full Power", "Peak Makarov"), tier: 91 },
      { name: "Zeref Dragneel", tags: ["Black Wizard", "Immortality"], forms: forms("Base", "Death Magic", "Fairy Heart", "Black Wizard", "Peak Zeref"), tier: 100 },
      { name: "Acnologia", tags: ["Dragon King", "Magic"], forms: forms("Human", "Dragon", "Black Dragon", "Dragon King", "Peak Acnologia"), tier: 100 },
      { name: "Mavis Vermillion", tags: ["Fairy Glitter", "Strategist"], forms: forms("Base", "Illusion", "Law", "Fairy Glitter", "Peak Mavis"), tier: 94 },
      { name: "Irene Belserion", tags: ["Enchantress", "Dragon"], forms: forms("Human", "Enchantment", "Dragon", "Universe One", "Peak Irene"), tier: 97 },
      { name: "August", tags: ["Copy Magic", "Wizard"], forms: forms("Base", "Copy", "Arc Magic", "Full Power", "Peak August"), tier: 98 },
      { name: "Brandish", tags: ["Command T", "Spriggan"], forms: forms("Base", "Command", "Size Manipulation", "Full Power", "Peak Brandish"), tier: 94 },
      { name: "Ultear Milkovich", tags: ["Time Magic", "Ice"], forms: forms("Base", "Ice", "Time", "Arc of Time", "Peak Ultear"), tier: 88 },
      { name: "Sting Eucliffe", tags: ["White Dragon Slayer", "Light"], forms: forms("Base", "White Dragon", "Rogue Fusion", "Dragon Force", "Peak Sting"), tier: 87 },
      { name: "Rogue Cheney", tags: ["Shadow Dragon Slayer", "Shadow"], forms: forms("Base", "Shadow Dragon", "Shadow Drive", "Dragon Force", "Peak Rogue"), tier: 85 }
    ]
  ),

  /* ==========================================================
     18. MOB PSYCHO 100
     ========================================================== */

  "Mob Psycho 100": makeVerse(
    "Mob Psycho 100",
    [
      { name: "Shigeo Kageyama", tags: ["Esper", "Psychic"], forms: forms("Normal", "100%", "???", "Rage", "1000%"), tier: 100 },
      { name: "Toichiro Suzuki", tags: ["Esper", "Energy"], forms: forms("Base", "Psychic", "100%", "Energy Release", "Peak Toichiro"), tier: 96 },
      { name: "Teruki Hanazawa", tags: ["Esper", "Psychic"], forms: forms("Base", "Hair Power", "Awakened", "100%", "Peak Teru"), tier: 84 },
      { name: "Ritsu Kageyama", tags: ["Esper", "Psychic"], forms: forms("Base", "Psychic", "Awakened", "100%", "Peak Ritsu"), tier: 80 },
      { name: "Sho Suzuki", tags: ["Esper", "Teleport"], forms: forms("Base", "Psychic", "Teleport", "100%", "Peak Sho"), tier: 83 },
      { name: "Dimple", tags: ["Spirit", "Possession"], forms: forms("Spirit", "Evil Spirit", "Divine Tree", "God Dimple", "Peak Dimple"), tier: 88 },
      { name: "Keiji Mogami", tags: ["Spirit", "Psychic"], forms: forms("Human", "Spirit", "Psychic", "Demon", "Peak Mogami"), tier: 91 },
      { name: "Ryo Shimazaki", tags: ["Teleport", "Esper"], forms: forms("Base", "Teleport", "Clairvoyance", "Psychic", "Peak Shimazaki"), tier: 89 },
      { name: "Serizawa", tags: ["Esper", "Umbrella"], forms: forms("Base", "Umbrella", "Psychic", "Overdrive", "Peak Serizawa"), tier: 88 },
      { name: "Hiroshi Shimizaki", tags: ["Esper", "Speed"], forms: forms("Base", "Teleport", "Speed", "Awakened", "Peak Hiroshi"), tier: 75 },
      { name: "Katsuya Serizawa", tags: ["Psychic", "Umbrella"], forms: forms("Base", "Umbrella", "Psychic", "Full Power", "Peak Katsuya"), tier: 86 },
      { name: "Matsuo", tags: ["Esper", "Spirit"], forms: forms("Base", "Psychic", "Spirit", "Awakened", "Peak Matsuo"), tier: 71 },
      { name: "Musashi", tags: ["Bodybuilder", "Spirit"], forms: forms("Base", "Strength", "Awakened", "Club Leader", "Peak Musashi"), tier: 68 },
      { name: "Tome Kurata", tags: ["Telepathy", "Club"], forms: forms("Base", "Telepathy", "Awakened", "Spirit", "Peak Tome"), tier: 65 },
      { name: "Ishiguro", tags: ["Esper", "Psychic"], forms: forms("Base", "Psychic", "Shield", "Full Power", "Peak Ishiguro"), tier: 70 },
      { name: "Mukai", tags: ["Esper", "Psychic"], forms: forms("Base", "Psychic", "Barrier", "Awakened", "Peak Mukai"), tier: 72 },
      { name: "Koyama", tags: ["Esper", "Psychic"], forms: forms("Base", "Psychic", "Barrier", "Boosted", "Peak Koyama"), tier: 74 },
      { name: "Matsuo's Spirits", tags: ["Spirit", "Summoning"], forms: forms("Basic", "Summoned", "Multiple", "Mass Spirit", "Peak Spirits"), tier: 69 },
      { name: "Ekubo", tags: ["Spirit", "Possession"], forms: forms("Base", "Possession", "Spirit", "Awakened", "Peak Ekubo"), tier: 78 },
      { name: "Psycho Helmet", tags: ["Divine Tree", "Psychic"], forms: forms("Base", "Helmet", "Tree Power", "God Tree", "Peak Psycho Helmet"), tier: 94 }
    ]
  ),

  /* ==========================================================
     19. OVERLORD
     ========================================================== */

  Overlord: makeVerse(
    "Overlord",
    [
      { name: "Ainz Ooal Gown", tags: ["Overlord", "Undead"], forms: forms("Base", "Magic Caster", "Perfect Warrior", "Super Tier", "Goal of All Life is Death"), tier: 100 },
      { name: "Shalltear Bloodfallen", tags: ["Vampire", "Floor Guardian"], forms: forms("Base", "Lance", "Blood Frenzy", "Valkyrie", "Peak Shalltear"), tier: 97 },
      { name: "Albedo", tags: ["Guardian", "Tank"], forms: forms("Base", "Armor", "Black Guard", "Full Armor", "Peak Albedo"), tier: 92 },
      { name: "Demiurge", tags: ["Guardian", "Demon"], forms: forms("Base", "Demon", "Command", "Pandemonium", "Peak Demiurge"), tier: 94 },
      { name: "Cocytus", tags: ["Guardian", "Warrior"], forms: forms("Base", "Warrior", "Weapons", "Full Frost", "Peak Cocytus"), tier: 91 },
      { name: "Sebas Tian", tags: ["Dragon", "Guardian"], forms: forms("Human", "Martial", "True Form", "Dragon Power", "Peak Sebas"), tier: 93 },
      { name: "Aura Bella Fiora", tags: ["Beast Tamer", "Guardian"], forms: forms("Base", "Whip", "Beast", "Taming Army", "Peak Aura"), tier: 87 },
      { name: "Mare Bello Fiore", tags: ["Druid", "Guardian"], forms: forms("Base", "Nature", "Earth Magic", "Catastrophe", "Peak Mare"), tier: 94 },
      { name: "Pandora's Actor", tags: ["Doppelganger", "Guardian"], forms: forms("Base", "Doppelganger", "Transformation", "Emulation", "Peak Pandora"), tier: 89 },
      { name: "Narberal Gamma", tags: ["Pleiiades", "Lightning"], forms: forms("Base", "Magic", "Lightning", "Chain Dragon", "Peak Narberal"), tier: 82 },
      { name: "Yuri Alpha", tags: ["Pleiiades", "Monk"], forms: forms("Base", "Martial", "Monk", "Enhanced", "Peak Yuri"), tier: 80 },
      { name: "Lupusregina Beta", tags: ["Pleiiades", "Werewolf"], forms: forms("Human", "Werewolf", "Berserk", "Full Wolf", "Peak Lupusregina"), tier: 79 },
      { name: "Solution Epsilon", tags: ["Slime", "Assassin"], forms: forms("Human", "Slime", "Acid", "Assimilation", "Peak Solution"), tier: 78 },
      { name: "Entoma Vasilissa Zeta", tags: ["Insect", "Pleiiades"], forms: forms("Base", "Insect", "Spider", "Full Insect", "Peak Entoma"), tier: 77 },
      { name: "CZ2128 Delta", tags: ["Machine", "Pleiiades"], forms: forms("Base", "Guns", "Sniper", "Full Arsenal", "Peak CZ"), tier: 75 },
      { name: "Evileye", tags: ["Vampire", "Magic"], forms: forms("Base", "Vampire", "Magic", "Meteor", "Peak Evileye"), tier: 85 },
      { name: "Gazef Stronoff", tags: ["Warrior", "King's Guard"], forms: forms("Base", "Warrior", "Martial", "Razor Edge", "Peak Gazef"), tier: 72 },
      { name: "Brain Unglaus", tags: ["Sword", "Warrior"], forms: forms("Base", "Sword", "Nail Clipper", "God Slaying", "Peak Brain"), tier: 73 },
      { name: "Fluder Paradyne", tags: ["Archmage", "Magic"], forms: forms("Base", "Magic", "High Tier", "Arcane", "Peak Fluder"), tier: 86 },
      { name: "Touch Me", tags: ["World Champion", "Warrior"], forms: forms("Base", "World Item", "Champion", "Full Defense", "Peak Touch Me"), tier: 99 }
    ]
  ),

  /* ==========================================================
     20. DEATH NOTE
     ========================================================== */

  "Death Note": makeVerse(
    "Death Note",
    [
      { name: "Light Yagami", tags: ["Kira", "Death Note"], forms: forms("Student", "Kira", "Second Kira", "Perfect Kira", "Peak Light"), tier: 95 },
      { name: "L Lawliet", tags: ["Detective", "Genius"], forms: forms("Normal", "Investigator", "Deduction", "Trap Master", "Peak L"), tier: 95 },
      { name: "Near", tags: ["Detective", "Strategy"], forms: forms("Normal", "Investigator", "Deduction", "Strategist", "Peak Near"), tier: 89 },
      { name: "Mello", tags: ["Detective", "Mafia"], forms: forms("Normal", "Leader", "Mafia", "Tactician", "Peak Mello"), tier: 86 },
      { name: "Misa Amane", tags: ["Second Kira", "Shinigami Eyes"], forms: forms("Normal", "Kira", "Eyes", "Second Kira", "Peak Misa"), tier: 82 },
      { name: "Ryuk", tags: ["Shinigami", "Death Note"], forms: forms("Base", "Shinigami", "Death Note", "Shinigami Eyes", "Peak Ryuk"), tier: 99 },
      { name: "Rem", tags: ["Shinigami", "Death Note"], forms: forms("Base", "Shinigami", "Death Note", "Human Protection", "Peak Rem"), tier: 97 },
      { name: "Sidoh", tags: ["Shinigami", "Death Note"], forms: forms("Base", "Shinigami", "Death Note", "Eyes", "Peak Sidoh"), tier: 91 },
      { name: "Teru Mikami", tags: ["Kira", "Death Note"], forms: forms("Normal", "Kira", "Justice", "X-Kira", "Peak Mikami"), tier: 86 },
      { name: "Soichiro Yagami", tags: ["Police", "Investigator"], forms: forms("Officer", "Commander", "Task Force", "Investigator", "Peak Soichiro"), tier: 72 },
      { name: "Naomi Misora", tags: ["Investigator", "Genius"], forms: forms("Normal", "Investigator", "Deduction", "Countermeasure", "Peak Naomi"), tier: 85 },
      { name: "Watari", tags: ["Support", "Inventor"], forms: forms("Normal", "Support", "HQ", "Resource Mastery", "Peak Watari"), tier: 78 },
      { name: "Touta Matsuda", tags: ["Police", "Marksman"], forms: forms("Normal", "Officer", "Task Force", "Marksman", "Peak Matsuda"), tier: 70 },
      { name: "Hirokazu Ukita", tags: ["Police", "Investigator"], forms: forms("Normal", "Officer", "Task Force", "Investigator", "Peak Ukita"), tier: 66 },
      { name: "Shuichi Aizawa", tags: ["Police", "Investigator"], forms: forms("Normal", "Officer", "Investigator", "Task Force", "Peak Aizawa"), tier: 71 },
      { name: "Kanzo Mogi", tags: ["Police", "Investigator"], forms: forms("Normal", "Officer", "Investigator", "Combat", "Peak Mogi"), tier: 69 },
      { name: "Raye Penber", tags: ["FBI", "Investigator"], forms: forms("Normal", "FBI", "Investigator", "Surveillance", "Peak Raye"), tier: 68 },
      { name: "Kyosuke Higuchi", tags: ["Yotsuba Kira", "Death Note"], forms: forms("Normal", "Kira", "Business", "Death Note", "Peak Higuchi"), tier: 74 },
      { name: "Hitoshi Demegawa", tags: ["Media", "Kira"], forms: forms("Normal", "Media", "Propaganda", "Kira Support", "Peak Demegawa"), tier: 62 },
      { name: "Kiyomi Takada", tags: ["Kira", "Spokesperson"], forms: forms("Normal", "Spokesperson", "Kira Support", "Influence", "Peak Takada"), tier: 72 }
    ]
  )

};

/* ============================================================
   EXPANDED ROLES
   ============================================================ */

export const EXPANDED_ROLES = [
  {
    id: "captain",
    name: "Captain",
    icon: "👑",
    powerMult: 1.25,
    haxMult: 1.10
  },
  {
    id: "vice_captain",
    name: "Vice Captain",
    icon: "🎖️",
    powerMult: 1.15,
    haxMult: 1.05
  },
  {
    id: "vanguard",
    name: "Vanguard",
    icon: "⚔️",
    powerMult: 1.20,
    haxMult: 1.00
  },
  {
    id: "support_1",
    name: "Support 1",
    icon: "💊",
    powerMult: 1.00,
    haxMult: 1.15
  },
  {
    id: "support_2",
    name: "Support 2",
    icon: "🧩",
    powerMult: 1.00,
    haxMult: 1.15
  },
  {
    id: "support_3",
    name: "Support 3",
    icon: "🛡️",
    powerMult: 1.05,
    haxMult: 1.10
  },
  {
    id: "support_4",
    name: "Support 4",
    icon: "🔮",
    powerMult: 1.00,
    haxMult: 1.20
  },
  {
    id: "tank",
    name: "Tank",
    icon: "💪",
    powerMult: 1.30,
    haxMult: 0.90
  },
  {
    id: "healer",
    name: "Healer",
    icon: "💉",
    powerMult: 0.80,
    haxMult: 1.30
  },
  {
    id: "speedster",
    name: "Speedster",
    icon: "⚡",
    powerMult: 1.10,
    haxMult: 1.25
  },
  {
    id: "hax",
    name: "Hax Specialist",
    icon: "🌀",
    powerMult: 0.90,
    haxMult: 1.40
  },
  {
    id: "glass_cannon",
    name: "Glass Cannon",
    icon: "💥",
    powerMult: 1.40,
    haxMult: 0.80
  },
  {
    id: "strategist",
    name: "Strategist",
    icon: "🧠",
    powerMult: 1.00,
    haxMult: 1.35
  },
  {
    id: "boss",
    name: "Final Boss",
    icon: "🔥",
    powerMult: 1.35,
    haxMult: 1.20
  },
  {
    id: "traitor",
    name: "Wildcard",
    icon: "🃏",
    powerMult: 1.10,
    haxMult: 1.10
  },
  {
    id: "tactician",
    name: "Tactician",
    icon: "📐",
    powerMult: 1.05,
    haxMult: 1.25
  },
  {
    id: "enforcer",
    name: "Enforcer",
    icon: "🔨",
    powerMult: 1.25,
    haxMult: 0.95
  },
  {
    id: "defender",
    name: "Defender",
    icon: "🔰",
    powerMult: 1.15,
    haxMult: 1.10
  },
  {
    id: "anchor",
    name: "Team Anchor",
    icon: "⚓",
    powerMult: 1.20,
    haxMult: 1.05
  },
  {
    id: "finisher",
    name: "Finisher",
    icon: "🎯",
    powerMult: 1.30,
    haxMult: 1.15
  }
];

/* ============================================================
   DEVELOPMENT VALIDATION
   This intentionally throws a clear error if the database is
   accidentally damaged later.
   ============================================================ */

const EXPECTED_VERSE_COUNT = 20;
const EXPECTED_CHARACTERS_PER_VERSE = 20;
const EXPECTED_FORMS_PER_CHARACTER = 5;

const verseNames =
  Object.keys(ANIME_VERSES);

if (
  verseNames.length !==
  EXPECTED_VERSE_COUNT
) {
  throw new Error(
    `Anime database error: expected ${EXPECTED_VERSE_COUNT} verses, found ${verseNames.length}.`
  );
}

verseNames.forEach((verse) => {
  const roster =
    ANIME_VERSES[verse];

  if (
    roster.length !==
    EXPECTED_CHARACTERS_PER_VERSE
  ) {
    throw new Error(
      `${verse}: expected ${EXPECTED_CHARACTERS_PER_VERSE} characters, found ${roster.length}.`
    );
  }

  roster.forEach((character) => {
    if (
      !character.forms ||
      character.forms.length !==
        EXPECTED_FORMS_PER_CHARACTER
    ) {
      throw new Error(
        `${verse} / ${character.name}: expected ${EXPECTED_FORMS_PER_CHARACTER} forms.`
      );
    }

    character.forms.forEach(
      (form) => {
        if (
          !form.name ||
          !form.img ||
          !Number.isFinite(
            form.relPower
          ) ||
          !Number.isFinite(
            form.realPower
          ) ||
          !Number.isFinite(
            form.hax
          )
        ) {
          throw new Error(
            `${verse} / ${character.name} / ${form.name || "Unknown form"} has invalid form data.`
          );
        }
      }
    );
  });
});