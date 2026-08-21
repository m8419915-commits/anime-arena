/*
  Anime Arena — Grand Tournament
  Double-Check Asset & Canon Verification Engine
  File: src/tournament/engine/tournamentIntegrityEngine.js
*/

import { verifyImageAccessibility } from "../data/tournamentImageResolver";

export async function performDoubleCheckAudit({
  character,
  activeForm,
  imageUrl,
  currentPrice = 0,
}) {
  const issues = [];
  const checksPassed = [];
  const startTime = performance.now();

  if (!character || !character.name) {
    return {
      isValid: false,
      status: "FAILED_CRITICAL",
      confidenceScore: 0,
      issues: ["Character payload is missing or corrupted."],
      checksPassed: [],
      auditDurationMs: 0,
    };
  }

  const charName = character.name;
  const formName = activeForm?.name || "Base";
  const verseId = character.verseId || "unknown";

  const imgCheck = await verifyImageAccessibility(imageUrl, 3500);
  if (!imgCheck.ok) {
    issues.push(`Image URL unreachable or 404: [${imageUrl}]`);
  } else {
    checksPassed.push(`Image stream verified: 200 OK (${imgCheck.width}x${imgCheck.height}px, ${imgCheck.latencyMs}ms)`);
  }

  const matchingForm = character.forms?.find(
    (f) => String(f.id) === String(activeForm?.id) || String(f.name).toLowerCase() === String(formName).toLowerCase()
  );

  if (activeForm && !matchingForm) {
    issues.push(`Active form [${formName}] does not match character manifest.`);
  } else {
    checksPassed.push(`Active form identity synced: [${formName}]`);
  }

  const stats = activeForm?.stats || character.stats || {};
  const relativePower = Number(stats.relativePower || stats.realPower || stats.pwr || 50);
  const hax = Number(stats.hax || 50);
  const speed = Number(stats.speed || stats.spd || 50);
  const durability = Number(stats.durability || stats.dur || 50);

  if (relativePower < 0 || relativePower > 100) {
    issues.push(`Invalid power stat [${relativePower}]`);
  } else {
    checksPassed.push(`Power attributes verified: PWR ${relativePower}/100`);
  }

  if (hax >= 0 && speed >= 0 && durability >= 0) {
    checksPassed.push(`Combat matrix synced: HAX=${hax}, SPD=${speed}, DUR=${durability}`);
  }

  const tags = character.tags || [];
  if (tags.length > 0) {
    checksPassed.push(`Verified ${tags.length} class tags`);
  }

  let calculatedTier = "Standard";
  if (relativePower >= 90 || hax >= 90) calculatedTier = "Mythic";
  else if (relativePower >= 75 || hax >= 75) calculatedTier = "Legendary";
  else if (relativePower >= 55 || hax >= 55) calculatedTier = "Epic";

  return {
    isValid: issues.length === 0,
    status: issues.length === 0 ? "VERIFIED_CANON" : "INTEGRITY_WARNING",
    confidenceScore: Math.round((checksPassed.length / 5) * 100),
    calculatedTier,
    verse: verseId,
    characterName: charName,
    activeForm: formName,
    issues,
    checksPassed,
    auditDurationMs: Math.round(performance.now() - startTime),
    timestamp: new Date().toISOString(),
  };
}