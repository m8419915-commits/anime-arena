/*
  Anime Arena — Grand Tournament
  Beerus-Style Featured Card Component
  File: src/tournament/components/TournamentCard.jsx
*/

import React, { useState, useEffect } from "react";
import { resolveCharacterArtwork } from "../data/tournamentImageResolver";
import {
  createCharacterId,
  isFormOwnedByCharacter,
} from "../data/tournamentCharacterIdentity";
import {
  getArtworkIdentity,
  normalizeCharacterForms,
} from "../data/characterIdentity";

export default function TournamentCard({
  character,
  activeForm = null,
  customImageUrl = null,
  size = "normal",
  showStats = true,
  onClick = null,
}) {
  const [resolvedImg, setResolvedImg] = useState(customImageUrl || "");
  const [isImgError, setIsImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const normalizedCharacter =
  normalizeCharacterForms(character);

const normalizedCharacterId =
  createCharacterId(character);

const requestedForm =
  activeForm ||
  character?.forms?.[0] ||
  null;

const formObj =
  requestedForm &&
  isFormOwnedByCharacter(
    {
      ...character,
      characterId: normalizedCharacterId,
    },
    requestedForm
  )
    ? requestedForm
    : character?.forms?.[0] || null;

const formIndex =
  normalizedCharacter?.forms?.findIndex(
    (form) =>
      form === formObj ||
      form?.formId === formObj?.formId ||
      form?.id === formObj?.id
  ) ?? 0;

const artworkIdentity =
  getArtworkIdentity(
    normalizedCharacter,
    formObj,
    formIndex >= 0 ? formIndex : 0
  );
  const formName =
  artworkIdentity.formName || "Base";

const charName =
  artworkIdentity.characterName ||
  "Fighter";

const verseName =
  artworkIdentity.verseId ||
  "ANIME";

  const stats = formObj?.stats || character?.stats || {};
  const basePwr = Number(stats.realPower || stats.relativePower || stats.pwr || 65);
  const formattedPwr = (basePwr * 1000).toLocaleString();
  const hax = Number(stats.hax || 60);
  const spd = Number(stats.speed || stats.spd || 60);
  const dur = Number(stats.durability || stats.dur || 60);

  const rarity = character?.tier || (basePwr >= 90 ? "Mythic" : basePwr >= 75 ? "Legendary" : basePwr >= 55 ? "Epic" : "Standard");

  useEffect(() => {
    let isCancelled = false;
    async function loadArt() {
      setIsLoading(true);
      setIsImgError(false);
      if (customImageUrl) {
        setResolvedImg(customImageUrl);
        setIsLoading(false);
        return;
      }
      const url = await resolveCharacterArtwork(character, formObj);
      if (!isCancelled) {
        setResolvedImg(url);
        setIsLoading(false);
      }
    }
    loadArt();
    return () => {
      isCancelled = true;
    };
  }, [character, formObj, customImageUrl]);

  const getRarityStyles = () => {
    switch (rarity) {
      case "Mythic":
        return {
          border: "border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.3)]",
          badge: "bg-red-950/80 border-red-500/50 text-red-200",
        };
      case "Legendary":
        return {
          border: "border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.25)]",
          badge: "bg-purple-950/80 border-purple-500/50 text-purple-200",
        };
      case "Epic":
        return {
          border: "border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]",
          badge: "bg-purple-900/60 border-purple-400/40 text-purple-200",
        };
      default:
        return {
          border: "border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
          badge: "bg-cyan-950/70 border-cyan-500/40 text-cyan-200",
        };
    }
  };

  const styles = getRarityStyles();

  const sizeClasses = {
    small: "w-[185px] h-[270px]",
    normal: "w-[300px] h-[430px]",
    large: "w-[340px] h-[480px]",
  }[size] || "w-[300px] h-[430px]";

  const tags =
  Array.isArray(character?.tags)
    ? character.tags
    : [];
  return (
    <div
      onClick={onClick}
      className={`relative ${sizeClasses} rounded-2xl overflow-hidden bg-[#07090e] border ${styles.border} flex flex-col justify-between select-none transition-all duration-300 ${
        onClick ? "cursor-pointer hover:scale-[1.02] hover:-translate-y-1" : ""
      }`}
    >
      <div className="absolute inset-0 z-0">
        {!isImgError && resolvedImg ? (
          <img
            src={resolvedImg}
            alt={`${charName} - ${formName}`}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105 ${
              isLoading ? "opacity-30 blur-sm" : "opacity-100 blur-0"
            }`}
            onError={() => setIsImgError(true)}
            loading="eager"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-600">
            <span className="text-4xl mb-1">⚔️</span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Asset Offline</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#04060a] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#04060a]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 flex items-center justify-between p-3">
        <span className="px-2.5 py-0.5 text-[9px] font-black tracking-wider uppercase rounded-full bg-red-600 text-white backdrop-blur-md shadow-md border border-red-400/40 truncate max-w-[110px]">
          {verseName.replace(/_/g, " ")}
        </span>
        <span className={`px-2.5 py-0.5 text-[9px] font-extrabold tracking-wide rounded-full border backdrop-blur-md ${styles.badge}`}>
          {rarity}
        </span>
      </div>

      <div className="relative z-10 p-3.5 bg-gradient-to-t from-[#04060a] via-[#04060a]/95 to-transparent pt-6">
        <div className="flex justify-between items-end mb-1.5">
          <div className="max-w-[70%]">
            <h2 className="text-xl font-black italic tracking-wide text-white uppercase truncate drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {charName}
            </h2>
            <p className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase truncate">
              ⚡ {formName}
            </p>
          </div>
          <div className="text-right">
            <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-semibold">PWR</span>
            <span className="text-lg font-black text-white font-mono tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              {formattedPwr}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider rounded bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 backdrop-blur-sm"
            >
              {tag.replace(/_/g, " ")}
            </span>
          ))}
        </div>

        {showStats && (
          <div className="grid grid-cols-4 gap-1 pt-1.5 border-t border-zinc-800/80 text-center">
            <div className="bg-black/60 rounded py-0.5 border border-zinc-800/50">
              <span className="block text-[7px] uppercase font-mono text-zinc-400">PWR</span>
              <span className="text-[10px] font-bold text-red-400">{basePwr}</span>
            </div>
            <div className="bg-black/60 rounded py-0.5 border border-zinc-800/50">
              <span className="block text-[7px] uppercase font-mono text-zinc-400">HAX</span>
              <span className="text-[10px] font-bold text-purple-400">{hax}</span>
            </div>
            <div className="bg-black/60 rounded py-0.5 border border-zinc-800/50">
              <span className="block text-[7px] uppercase font-mono text-zinc-400">SPD</span>
              <span className="text-[10px] font-bold text-cyan-400">{spd}</span>
            </div>
            <div className="bg-black/60 rounded py-0.5 border border-zinc-800/50">
              <span className="block text-[7px] uppercase font-mono text-zinc-400">DUR</span>
              <span className="text-[10px] font-bold text-emerald-400">{dur}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}