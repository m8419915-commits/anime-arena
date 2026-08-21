/*
  Anime Arena — Grand Tournament
  Distribution Results & Roster Lock Screen
  File: src/tournament/components/DistributionResults.jsx
*/

import React, { useMemo, useState } from "react";
import TournamentCard from "./TournamentCard";

function getRoster(player) {
  return Array.isArray(player?.roster) ? player.roster : [];
}

export default function DistributionResults({
  players = [],
  totalCharacters = 930,
  distributionMode = "auction",
  onConfirm,
  onBack,
}) {
  const [selectedPlayerId, setSelectedPlayerId] = useState(players[0]?.id || "");
  const [isRosterOpen, setIsRosterOpen] = useState(false);

  const selectedPlayer =
    players.find((player) => player.id === selectedPlayerId) || players[0];

  const selectedRoster = getRoster(selectedPlayer);

  const totalDistributed = useMemo(
    () =>
      players.reduce(
        (total, player) => total + getRoster(player).length,
        0
      ),
    [players]
  );

  const modeName =
    {
      auction: "Grand Auction",
      random: "Random War",
      custom: "Custom",
    }[distributionMode] || "Distribution";

  const remaining = Math.max(0, totalCharacters - totalDistributed);

  function handleConfirm() {
    if (!players.length) return;

    onConfirm?.({
      players,
      totalCharacters,
      totalDistributed,
      remaining,
      distributionMode,
      locked: true,
    });
  }

  return (
    <div className="min-h-screen bg-[#05070c] px-4 py-8 text-white md:px-8 select-none">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <header className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
            ANIME ARENA
          </p>

          <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-black md:text-5xl uppercase tracking-wide">
                Rosters Finalized
              </h1>
              <p className="mt-2 text-sm text-zinc-400">
                Distribution method:{" "}
                <span className="font-black text-red-400">
                  {modeName}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#080c14] px-5 py-4 shadow-xl">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Fighters Distributed
              </p>
              <p className="mt-1 text-2xl font-black font-mono text-white">
                {totalDistributed.toLocaleString()}
                <span className="text-zinc-600">
                  {" / "}
                  {totalCharacters.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </header>

        {/* STATUS CARDS */}
        <section className="mb-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#080c14] p-5 shadow-lg">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Contenders
            </p>
            <p className="mt-2 text-3xl font-black font-mono text-cyan-400">
              {players.length}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#080c14] p-5 shadow-lg">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Distributed
            </p>
            <p className="mt-2 text-3xl font-black font-mono text-emerald-400">
              {totalDistributed.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#080c14] p-5 shadow-lg">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Unclaimed
            </p>
            <p className={`mt-2 text-3xl font-black font-mono ${remaining === 0 ? "text-zinc-600" : "text-amber-400"}`}>
              {remaining.toLocaleString()}
            </p>
          </div>
        </section>

        {/* PLAYER TABS */}
        <section className="mb-6">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Player Squads
            </p>
            <h2 className="mt-1 text-xl font-black">
              Select a squad to inspect
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {players.map((player) => {
              const roster = getRoster(player);
              const isSelected = (selectedPlayer?.id || players[0]?.id) === player.id;

              return (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => {
                    setSelectedPlayerId(player.id);
                    setIsRosterOpen(false);
                  }}
                  className={`rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-red-500 bg-red-950/30 shadow-lg shadow-red-950/40"
                      : "border-zinc-800 bg-[#080c14] hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-sm text-white truncate">
                      {player.name}
                    </h3>
                    <span className="rounded-lg bg-black/60 px-2.5 py-1 text-xs font-mono font-black text-red-400 border border-zinc-800">
                      {roster.length}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-zinc-500 font-mono">
                    Squad Target: {Math.floor(totalCharacters / players.length)}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* SQUAD INSPECTOR */}
        <section className="mb-8 rounded-3xl border border-zinc-800 bg-[#080c14] p-5 md:p-6 shadow-2xl">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-zinc-800/80 pb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-red-400">
                ACTIVE SQUAD
              </p>
              <h2 className="mt-0.5 text-2xl font-black text-white">
                {selectedPlayer?.name || "Player"}
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                {selectedRoster.length} verified fighters ready for tournament
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsRosterOpen((prev) => !prev)}
              className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-zinc-800 active:scale-95 shadow-md"
            >
              <span>{isRosterOpen ? "▼" : "▶"}</span>
              <span>{isRosterOpen ? "Hide Fighters" : "Inspect Fighters"}</span>
            </button>
          </div>

          {!isRosterOpen && (
            <div className="rounded-2xl border border-dashed border-zinc-800/80 bg-black/40 p-8 text-center">
              <span className="text-4xl block mb-2">📦</span>
              <p className="font-black text-sm text-zinc-300">
                Squad Cards Collapsed
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Click <strong className="text-white">“Inspect Fighters”</strong> above to preview all {selectedRoster.length} cards with images and stats.
              </p>
            </div>
          )}

          {isRosterOpen && (
            <div>
              {selectedRoster.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-zinc-800 bg-black/30 p-10 text-center">
                  <span className="text-4xl block mb-2">📭</span>
                  <p className="font-black text-zinc-400">No fighters assigned to this squad yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {selectedRoster.map((character, index) => (
                    <TournamentCard
                      key={character.id || `${selectedPlayer?.id}-${index}`}
                      character={character}
                      activeForm={character.forms?.[0] || null}
                      size="small"
                      showStats={true}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* LOCK NOTICE */}
        <section className="mb-8 rounded-2xl border border-yellow-500/20 bg-yellow-950/20 p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <h3 className="font-black text-xs text-yellow-300 uppercase tracking-wide">
                Roster Lock In Effect
              </h3>
              <p className="text-[11px] text-zinc-400">
                Proceeding will freeze character ownership. These rosters will form the official tournament bracket.
              </p>
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl border border-zinc-800 bg-[#080c14] px-6 py-3.5 text-xs font-black text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            ← Back
          </button>

          <button
            type="button"
            disabled={!players.length}
            onClick={handleConfirm}
            className="rounded-xl bg-red-600 px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition hover:bg-red-500 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Lock Rosters & Continue →
          </button>
        </div>

      </div>
    </div>
  );
}