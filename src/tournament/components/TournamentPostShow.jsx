import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { tournamentAudio } from "../audio/tournamentAudio";
import { getTournamentCharacter } from "../engine/tournamentDatabase";
import TournamentCard from "./TournamentCard";

export default function TournamentPostShow({
  tournament,
  players = [],
  onRestart,
  onBack,
}) {
  const [tab, setTab] = useState("broadcast");

  useEffect(() => {
    tournamentAudio.playChampion();
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.4 },
    });
  }, []);

  const championId = tournament?.champion?.characterId;
  const championChar = championId ? getTournamentCharacter(championId) : null;
  const championForm = championChar?.forms?.find((f) => f.id === tournament?.champion?.formId) || championChar?.forms?.[0];

  // Calculate manager standings
  const managerRankings = players.map((p) => {
    const wins = tournament?.matchHistory?.filter((m) =>
      p.roster?.some((c) => c.id === m.winnerId)
    ).length || 0;

    const losses = tournament?.eliminations?.filter((e) =>
      p.roster?.some((c) => c.id === e.characterId)
    ).length || 0;

    return {
      ...p,
      wins,
      losses,
      points: wins * 100,
    };
  }).sort((a, b) => b.points - a.points);

  return (
    <div className="min-h-screen bg-[#050507] text-white px-4 py-8 md:px-8 font-sans">
      <div className="mx-auto max-w-[1500px]">

        {/* GALA HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
            👑 Grand Tournament Post-Show Gala
          </div>
          <h1 className="mt-3 text-4xl font-black md:text-7xl">
            HALL OF LEGENDS
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            The championship has concluded. Gemini delivers the official tournament retrospective.
          </p>
        </div>

        {/* CHAMPION PODIUM */}
        <div className="mb-12 overflow-hidden rounded-[2.5rem] border border-yellow-500/40 bg-gradient-to-b from-yellow-950/40 via-black to-[#050507] p-8 md:p-12 shadow-2xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <TournamentCard character={championChar} form={championForm} isWinner={true} />
            </div>

            <div className="space-y-4">
              <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-black uppercase text-yellow-300 border border-yellow-500/30">
                Official Grand Champion
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                {championChar?.name || "Champion"}
              </h2>
              <p className="text-lg text-yellow-300/80 font-bold">
                Form: {championForm?.name} • {championChar?.verseId}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Surviving through the entire single-elimination field, overcoming tactical matchups and claiming the crown!
              </p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-3">
          <button
            type="button"
            onClick={() => setTab("broadcast")}
            className={`rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              tab === "broadcast"
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "bg-white/5 text-zinc-400 hover:bg-white/10"
            }`}
          >
            🎙️ Gemini Anchor Desk
          </button>

          <button
            type="button"
            onClick={() => setTab("standings")}
            className={`rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              tab === "standings"
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "bg-white/5 text-zinc-400 hover:bg-white/10"
            }`}
          >
            🏆 Manager Standings
          </button>
        </div>

        {/* TAB 1: GEMINI ANCHOR REPORT */}
        {tab === "broadcast" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <h3 className="text-xl font-black text-red-400">🔥 Tournament Retrospective</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                "What an electrifying championship! Across all rounds, we saw raw power collide with high-level hax. {championChar?.name} proved that tactical adaptability in {championForm?.name} was unbeatable in the late bracket."
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <h4 className="font-black text-base text-yellow-400">⚡ Steals of the Tournament</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Fighters who far exceeded their seeding and punched above their weight in the early and middle rounds.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <h4 className="font-black text-base text-red-400">💀 Major Blunders & Upsets</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Top-seeded juggernauts eliminated unexpectedly due to tactical mismatches and decisive player votes!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MANAGER STANDINGS */}
        {tab === "standings" && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-xl font-black mb-4">Manager Leaderboard</h3>
            <div className="space-y-3">
              {managerRankings.map((m, idx) => (
                <div key={m.id} className="flex items-center justify-between rounded-2xl bg-black/40 p-4 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 font-black text-yellow-300 text-sm">
                      #{idx + 1}
                    </span>
                    <div>
                      <p className="font-black text-sm">{m.name}</p>
                      <p className="text-[10px] text-zinc-500 font-bold">
                        {m.wins} Wins • {m.losses} Knockouts
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-black text-emerald-400">{m.points} PTS</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER ACTIONS */}
        <div className="mt-10 flex justify-between border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-xs font-black text-zinc-400 hover:text-white"
          >
            ← Back to Hub
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="rounded-2xl bg-red-600 px-8 py-3.5 text-xs font-black uppercase text-white shadow-xl shadow-red-600/30 hover:bg-red-500"
          >
            Start New Grand Tournament 🔄
          </button>
        </div>
      </div>
    </div>
  );
}