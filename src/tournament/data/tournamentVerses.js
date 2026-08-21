import {
  createTournamentVerse,
} from "./databaseSchema";

const verse = (
  id,
  name,
  shortName,
  accentColor
) =>
  createTournamentVerse({
    id,
    name,
    shortName,
    accentColor,
  });

export const TOURNAMENT_VERSES = [
  verse(
    "dragon-ball",
    "Dragon Ball",
    "Dragon Ball",
    "#f59e0b"
  ),

  verse(
    "naruto",
    "Naruto",
    "Naruto",
    "#f97316"
  ),

  verse(
    "one-piece",
    "One Piece",
    "One Piece",
    "#ef4444"
  ),

  verse(
    "bleach",
    "Bleach",
    "Bleach",
    "#f8fafc"
  ),

  verse(
    "jujutsu-kaisen",
    "Jujutsu Kaisen",
    "JJK",
    "#8b5cf6"
  ),

  verse(
    "solo-leveling",
    "Solo Leveling",
    "Solo Leveling",
    "#6366f1"
  ),

  verse(
    "demon-slayer",
    "Demon Slayer",
    "Demon Slayer",
    "#22c55e"
  ),

  verse(
    "hunter-x-hunter",
    "Hunter x Hunter",
    "HxH",
    "#84cc16"
  ),

  verse(
    "attack-on-titan",
    "Attack on Titan",
    "AoT",
    "#a16207"
  ),

  verse(
    "my-hero-academia",
    "My Hero Academia",
    "MHA",
    "#eab308"
  ),

  verse(
    "black-clover",
    "Black Clover",
    "Black Clover",
    "#16a34a"
  ),

  verse(
    "fate-series",
    "Fate Series",
    "Fate",
    "#2563eb"
  ),

  verse(
    "fullmetal-alchemist",
    "Fullmetal Alchemist",
    "FMA",
    "#dc2626"
  ),

  verse(
    "jojos-bizarre-adventure",
    "JoJo's Bizarre Adventure",
    "JoJo",
    "#ec4899"
  ),

  verse(
    "chainsaw-man",
    "Chainsaw Man",
    "Chainsaw Man",
    "#ef4444"
  ),

  verse(
    "one-punch-man",
    "One Punch Man",
    "OPM",
    "#facc15"
  ),

  verse(
    "fairy-tail",
    "Fairy Tail",
    "Fairy Tail",
    "#fb7185"
  ),

  verse(
    "mob-psycho-100",
    "Mob Psycho 100",
    "Mob Psycho",
    "#a855f7"
  ),

  verse(
    "overlord",
    "Overlord",
    "Overlord",
    "#7c3aed"
  ),

  verse(
    "death-note",
    "Death Note",
    "Death Note",
    "#64748b"
  ),

  verse(
    "neon-genesis-evangelion",
    "Neon Genesis Evangelion",
    "Evangelion",
    "#14b8a6"
  ),

  verse(
    "code-geass",
    "Code Geass",
    "Code Geass",
    "#dc2626"
  ),

  verse(
    "yu-yu-hakusho",
    "Yu Yu Hakusho",
    "Yu Yu Hakusho",
    "#06b6d4"
  ),

  verse(
    "berserk",
    "Berserk",
    "Berserk",
    "#991b1b"
  ),

  verse(
    "frieren",
    "Frieren: Beyond Journey's End",
    "Frieren",
    "#60a5fa"
  ),

  verse(
    "re-zero",
    "Re:Zero",
    "Re:Zero",
    "#ec4899"
  ),

  verse(
    "ghost-in-the-shell-sac",
    "Ghost in the Shell: Stand Alone Complex",
    "Ghost in the Shell",
    "#0ea5e9"
  ),

  verse(
    "trigun",
    "Trigun",
    "Trigun",
    "#f97316"
  ),

  verse(
    "cyberpunk-edgerunners",
    "Cyberpunk: Edgerunners",
    "Cyberpunk",
    "#facc15"
  ),

  verse(
    "vinland-saga",
    "Vinland Saga",
    "Vinland Saga",
    "#92400e"
  ),

  verse(
    "invincible",
    "Invincible",
    "Invincible",
    "#eab308"
  ),
    // === Extra verse IDs used by the current character files ===
  verse(
    "hunterXHunter",
    "Hunter x Hunter",
    "HxH",
    "#84cc16"
  ),
  verse(
    "myHeroAcademia",
    "My Hero Academia",
    "MHA",
    "#eab308"
  ),
  verse(
    "onePunchMan",
    "One Punch Man",
    "OPM",
    "#facc15"
  ),
  verse(
    "mobPsycho100",
    "Mob Psycho 100",
    "Mob Psycho",
    "#a855f7"
  ),
  verse(
    "fairyTail",
    "Fairy Tail",
    "Fairy Tail",
    "#fb7185"
  ),
  verse(
    "fullmetalAlchemist",
    "Fullmetal Alchemist",
    "FMA",
    "#dc2626"
  ),
  verse(
    "sevenDeadlySins",
    "Seven Deadly Sins",
    "7DS",
    "#16a34a"
  ),
  verse(
    "tokyoGhoul",
    "Tokyo Ghoul",
    "Tokyo Ghoul",
    "#64748b"
  ),
  verse(
    "jojosBizarreAdventure",
    "JoJo's Bizarre Adventure",
    "JoJo",
    "#ec4899"
  ),
  verse(
    "fate",
    "Fate Series",
    "Fate",
    "#2563eb"
  ),
  verse(
    "soloLeveling",
    "Solo Leveling",
    "Solo Leveling",
    "#6366f1"
  ),
  verse(
    "dragonQuest",
    "Dragon Quest",
    "Dragon Quest",
    "#0ea5e9"
  ),
  verse(
    "vinlandSaga",
    "Vinland Saga",
    "Vinland Saga",
    "#92400e"
  ),
  verse(
    "codeGeass",
    "Code Geass",
    "Code Geass",
    "#dc2626"
  ),
  verse(
    "swordArtOnline",
    "Sword Art Online",
    "SAO",
    "#06b6d4"
  ),
  verse(
    "vagabond",
    "Vagabond",
    "Vagabond",
    "#a16207"
  ),
  verse(
    "drStone",
    "Dr. Stone",
    "Dr. Stone",
    "#22c55e"
  ),
  verse(
    "fireForce",
    "Fire Force",
    "Fire Force",
    "#ef4444"
  ),
  verse(
    "boruto",
    "Boruto",
    "Boruto",
    "#f97316"
  ),
  verse(
    "thatTimeIGotReincarnatedAsASlime",
    "That Time I Got Reincarnated as a Slime",
    "Slime",
    "#14b8a6"
  ),
];