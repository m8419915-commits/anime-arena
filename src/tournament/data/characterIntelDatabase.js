/*
  Anime Arena — Character Intelligence & Canon Feats Database
  Provides instant summary of skills, achievements, and verse lore for any of the 930 fighters.
*/

export function getCharacterIntel(character) {
  if (!character) return null;

  const verse = String(character.verseId || "").toLowerCase();
  const name = character.name || "Fighter";
  const forms = Array.isArray(character.forms) ? character.forms : [];
  const primaryForm = forms[0];
  const peakForm = forms[forms.length - 1] || primaryForm;

  // Extract all unique abilities from all forms
  const allAbilities = Array.from(
    new Set(forms.flatMap((f) => f.abilities || []))
  );

  // Extract all unique tags
  const tags = character.tags || [];

  // Generate tactical summary based on verse & character attributes
  let summary = character.description || `${name} is an elite combatant from ${character.verseId}.`;
  let combatRole = "Balanced Fighter";
  let achievements = [
    `Ranked #${character.seedRating || 75} in the Grand Multiverse Seed Matrix`,
    `Possesses ${forms.length} distinct combat transformation states`,
  ];

  if (character.seedRating >= 95) {
    combatRole = "God-Tier Juggernaut";
    achievements.unshift("Recognized as a planetary / multiverse apex threat");
  } else if (character.seedRating >= 85) {
    combatRole = "Special-Grade Apex";
    achievements.unshift("Defeated top-tier commanders in their home verse");
  } else if (character.seedRating >= 75) {
    combatRole = "High-Tier Tactician";
    achievements.unshift("Proven track record in high-stakes tactical combat");
  } else {
    combatRole = "Specialist Contender";
  }

  // Verse-specific canon highlights
  if (verse.includes("dragon-ball")) {
    achievements.push("Mastered high-density Ki manipulation & explosive blast projection");
  } else if (verse.includes("naruto") || verse.includes("boruto")) {
    achievements.push("Expert in Chakra reinforcement, Ninjutsu & battlefield substitution");
  } else if (verse.includes("one-piece")) {
    achievements.push("Commands specialized Devil Fruit mastery & high-level Haki");
  } else if (verse.includes("bleach")) {
    achievements.push("Wields high spiritual pressure & advanced Zanpakuto release states");
  } else if (verse.includes("jujutsu")) {
    achievements.push("Commands deadly cursed energy & domain-level spatial techniques");
  } else if (verse.includes("attack-on-titan")) {
    achievements.push("Hardened veteran of the Titan wars with elite combat reflexes");
  } else if (verse.includes("black-clover")) {
    achievements.push("Wields rare grimoire-bound magical attributes with high versatility");
  } else if (verse.includes("chainsaw")) {
    achievements.push("Survives lethal encounters through supernatural Devil regeneration");
  } else if (verse.includes("demon-slayer")) {
    achievements.push("Master of Total Concentration Breathing and precision Nichirin strikes");
  }

  return {
    characterName: name,
    verseId: character.verseId,
    combatRole,
    summary,
    keySkills: allAbilities.length ? allAbilities.slice(0, 5) : tags.slice(0, 4),
    achievements: achievements.slice(0, 3),
    peakFormName: peakForm?.name || "Base Form",
    totalForms: forms.length,
    basePower: primaryForm?.stats?.realPower || 50,
    peakPower: peakForm?.stats?.realPower || 85,
  };
}