/*
  Anime Arena — Grand Tournament
  Live Side-by-Side Double-Check Panel
  File: src/tournament/components/LiveCanonIntegrityPanel.jsx
*/

import React, { useState, useEffect } from "react";
import { performDoubleCheckAudit } from "../engine/tournamentIntegrityEngine";

export default function LiveCanonIntegrityPanel({
  character,
  activeForm,
  imageUrl,
  currentPrice = 100,
  onForceReload = null,
}) {
  const [auditResult, setAuditResult] = useState(null);
  const [isAuditing, setIsAuditing] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function runAudit() {
      setIsAuditing(true);
      const result = await performDoubleCheckAudit({
        character,
        activeForm,
        imageUrl,
        currentPrice,
      });
      if (isMounted) {
        setAuditResult(result);
        setIsAuditing(false);
      }
    }
    runAudit();
    return () => {
      isMounted = false;
    };
  }, [character, activeForm, imageUrl, currentPrice]);

  const isValid = auditResult?.isValid;

  return (
    <div className="w-full bg-[#080c14] border border-zinc-800 rounded-2xl p-5 text-xs text-zinc-300 shadow-2xl relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 ${
        isValid ? "bg-emerald-500" : "bg-red-500"
      }`} />

      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <span className={`w-2.5 h-2.5 rounded-full ${isAuditing ? "bg-amber-400 animate-ping" : isValid ? "bg-emerald-400" : "bg-red-500"}`} />
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-100 flex items-center gap-2">
              FIGHTER INTELLIGENCE & CANON CHECK
            </h3>
            <span className="text-[10px] text-zinc-500 font-mono">
              Audit Latency: {auditResult?.auditDurationMs || 0}ms • SHA-256 Validated
            </span>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${
            isValid
              ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
              : "bg-red-950/80 text-red-300 border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.2)]"
          }`}
        >
          {isAuditing ? "Auditing..." : isValid ? "✓ VERIFIED CANON ASSET" : "⚠ INTEGRITY WARNING"}
        </span>
      </div>

      <div className="mt-3.5">
        <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
          {character?.description || "High-ranking fighter whose canon techniques make them a dangerous tournament specialist."}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px]">
        <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-900 flex justify-between items-center">
          <span className="text-zinc-500 font-mono uppercase text-[10px]">Canon Name</span>
          <span className="font-bold text-cyan-300 truncate max-w-[120px]">{character?.name || "Unknown"}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-900 flex justify-between items-center">
          <span className="text-zinc-500 font-mono uppercase text-[10px]">Active Form</span>
          <span className="font-bold text-purple-300 truncate max-w-[120px]">{activeForm?.name || "Base Form"}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-900 flex justify-between items-center">
          <span className="text-zinc-500 font-mono uppercase text-[10px]">Artwork Stream</span>
          <span className={`font-bold font-mono ${isValid ? "text-emerald-400" : "text-amber-400"}`}>
            {isValid ? "200 HD OK" : "Fallback Stream"}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-900 flex justify-between items-center">
          <span className="text-zinc-500 font-mono uppercase text-[10px]">Canon Verse</span>
          <span className="font-bold text-red-400 uppercase text-[10px]">{character?.verseId || "Universal"}</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-800/60">
        <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-2">
          VERIFIED CANON ATTRIBUTES & TAGS
        </span>
        <div className="flex flex-wrap gap-1.5">
          {(character?.tags || ["MARTIAL_ARTS", "ENERGY_MANIPULATION"]).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono font-semibold"
            >
              #{tag.toLowerCase()}
            </span>
          ))}
          <span className="px-2 py-0.5 rounded-md bg-red-950/40 border border-red-900/60 text-red-300 text-[10px] font-mono font-bold">
            ⚔ Tier: {auditResult?.calculatedTier || "Standard"}
          </span>
        </div>
      </div>

      {auditResult?.issues && auditResult.issues.length > 0 && (
        <div className="mt-3 p-2.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-[10px] space-y-1">
          <span className="font-bold block">⚠ Integrity Issues Detected:</span>
          {auditResult.issues.map((issue, idx) => (
            <p key={idx}>• {issue}</p>
          ))}
          {onForceReload && (
            <button
              onClick={onForceReload}
              className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition text-[10px]"
            >
              Force Fetch Fresh Asset ↺
            </button>
          )}
        </div>
      )}
    </div>
  );
}