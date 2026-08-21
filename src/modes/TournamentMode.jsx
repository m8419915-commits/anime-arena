/*
  Anime Arena — Grand Tournament
  Master Tournament Controller Router
  File: src/modes/TournamentMode.jsx
*/

import React, { useMemo, useState } from "react";

import { TOURNAMENT_CHARACTERS } from "../tournament/data/tournamentDatabase";
import { createGrandTournament } from "../tournament/engine/eventFactory";

import TournamentHome from "../tournament/components/TournamentHome";
import TournamentMatch from "../tournament/components/TournamentMatch";
import DistributionLobby from "../tournament/components/DistributionLobby";
import DistributionResults from "../tournament/components/DistributionResults";
import AuctionRoom from "../tournament/components/AuctionRoom";

import { createRandomDistribution } from "../tournament/engine/randomDistributionEngine";

const TOTAL_CHARACTERS = 930;

const SCREENS = {
  HOME: "home",
  DISTRIBUTION: "distribution",
  AUCTION: "auction",
  RANDOM: "random",
  CUSTOM: "custom",
  RESULTS: "results",
  SETUP: "setup",
  MATCH: "match",
};

function createEmptyTournamentState() {
  return {
    players: [],
    distributionMode: null,
    totalCharacters: TOTAL_CHARACTERS,
    distributionComplete: false,
    rostersLocked: false,
    tournament: null,
    tournamentConfig: {
      fieldSize: 512,
      formRule: "peak",
      seedingMode: "ranked",
      battleMode: "standard",
      setupComplete: false,
    },
    lastMatchResult: null,
  };
}

function normalizePlayers(players = []) {
  return players.map((player, index) => ({
    id: player.id || `player-${index + 1}`,
    name: String(player.name || `Player ${index + 1}`).trim(),
    budget: Number(player.budget) || 100000,
    spent: Number(player.spent) || 0,
    roster: Array.isArray(player.roster) ? player.roster : [],
  }));
}

export default function TournamentMode({ onBack }) {
  const [screen, setScreen] = useState(SCREENS.HOME);
  const [tournamentState, setTournamentState] = useState(createEmptyTournamentState);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [error, setError] = useState("");

  const characterPool = useMemo(() => TOURNAMENT_CHARACTERS, []);

  function clearError() {
    setError("");
  }

  function openTournamentMatch(match) {
    clearError();
    if (!match) {
      setError("Tournament match could not be opened.");
      return;
    }
    setSelectedMatch(match);
    setScreen(SCREENS.MATCH);
  }

  function handleMatchBack() {
    setSelectedMatch(null);
    setScreen(SCREENS.SETUP);
  }

  function resetTournament() {
    setTournamentState(createEmptyTournamentState());
    setSelectedMatch(null);
    setScreen(SCREENS.HOME);
    clearError();
  }

  function handleStartTournament() {
    clearError();
    setScreen(SCREENS.DISTRIBUTION);
  }

  function handleDistributionStart({ players, distributionMode, totalCharacters }) {
    clearError();
    const normalized = normalizePlayers(players);
    const total = Number(totalCharacters) || TOTAL_CHARACTERS;

    setTournamentState((current) => ({
      ...current,
      players: normalized,
      distributionMode,
      totalCharacters: total,
      distributionComplete: false,
      rostersLocked: false,
    }));

    if (distributionMode === "auction") {
      setScreen(SCREENS.AUCTION);
      return;
    }

    if (distributionMode === "random") {
      handleRandomDistribution(normalized, total);
      return;
    }

    if (distributionMode === "custom") {
      setScreen(SCREENS.CUSTOM);
      return;
    }

    setError("Unknown distribution mode.");
  }

  function handleRandomDistribution(players, totalCharacters) {
    clearError();

    if (!characterPool.length) {
      setError("The Grand Tournament database currently has no loaded characters.");
      return;
    }

    const requestedTotal = Number(totalCharacters) || TOTAL_CHARACTERS;
    const eventCharacters = characterPool.slice(0, requestedTotal);

    const result = createRandomDistribution({
      characters: eventCharacters,
      players,
      distributionMode: "equal",
      totalCharacters: requestedTotal,
    });

    if (!result?.success) {
      setError(result?.error || "Random distribution failed.");
      return;
    }

    const playersWithRosters = players.map((player) => ({
      ...player,
      roster: eventCharacters.filter(
        (character) => result.ownership?.[character.id] === player.id
      ),
    }));

    setTournamentState((current) => ({
      ...current,
      players: normalizePlayers(playersWithRosters),
      distributionMode: "random",
      totalCharacters: requestedTotal,
      distributionComplete: true,
      rostersLocked: false,
    }));

    setScreen(SCREENS.RESULTS);
  }

  function handleAuctionComplete(auction) {
    clearError();
    const players = normalizePlayers(auction?.players || []);

    setTournamentState((current) => ({
      ...current,
      players,
      distributionMode: "auction",
      distributionComplete: true,
    }));

    setScreen(SCREENS.RESULTS);
  }

  function handleRosterConfirmation({ players, distributionMode, totalCharacters }) {
    clearError();

    setTournamentState((current) => ({
      ...current,
      players: normalizePlayers(players),
      distributionMode,
      totalCharacters: Number(totalCharacters) || TOTAL_CHARACTERS,
      distributionComplete: true,
      rostersLocked: true,
    }));

    setScreen(SCREENS.SETUP);
  }

  function handleCreateTournamentBracket() {
    const currentConfig = tournamentState.tournamentConfig || {};

    if (!currentConfig.fieldSize) {
      setError("Choose a tournament field size.");
      return;
    }

    const allCharacters = tournamentState.players
      .flatMap((player) => (Array.isArray(player.roster) ? player.roster : []))
      .filter((character) => character && character.id);

    if (allCharacters.length < currentConfig.fieldSize) {
      setError(`Not enough fighters. Required: ${currentConfig.fieldSize}, Available: ${allCharacters.length}`);
      return;
    }

    const selectedCharacters = allCharacters.slice(0, currentConfig.fieldSize);

    const formRulesetId =
      currentConfig.formRule === "best"
        ? "peak"
        : currentConfig.formRule === "locked"
        ? "locked"
        : "peak";

    const engineSeedingMode =
      currentConfig.seedingMode === "power" ? "ranked" : "random";

    const result = createGrandTournament({
      name: `${currentConfig.fieldSize}-Character Grand Tournament`,
      characters: selectedCharacters,
      formRulesetId,
      seedingMode: engineSeedingMode,
      battleMode: "standard",
    });

    if (!result.success) {
      setError(result.errors?.[0] || "Failed to create the tournament bracket.");
      return;
    }

    setTournamentState((current) => ({
      ...current,
      tournament: result.tournament,
      tournamentConfig: {
        ...currentConfig,
        setupComplete: true,
      },
    }));

    setError(`✅ Tournament created! ${result.tournament.format.fieldSize} entrants • Main bracket: ${result.tournament.mainBracket.size}`);
  }

  function renderTournamentSetup() {
    const totalRosterCharacters = tournamentState.players.reduce(
      (total, player) => total + player.roster.length,
      0
    );

    const maxFieldSize = Math.min(totalRosterCharacters, 512);
    const fieldOptions = [32, 64, 128, 256, 512].filter((size) => size <= maxFieldSize);
    const defaultFieldSize = fieldOptions.length ? fieldOptions[fieldOptions.length - 1] : 0;
    const config = tournamentState.tournamentConfig || {};

    return (
      <div className="min-h-screen bg-[#05070c] px-4 py-8 text-white md:px-8 select-none">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
              ANIME ARENA
            </p>
            <h1 className="mt-2 text-4xl font-black md:text-5xl uppercase tracking-wide">
              Tournament Setup
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
              Rosters are locked. Configure the official Grand Tournament field and seeding parameters.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-950/50 px-5 py-4 text-sm font-bold text-red-300">
              {error}
            </div>
          )}

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-[#080c14] p-6 shadow-xl">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-600">PLAYERS</p>
              <p className="mt-2 text-4xl font-black font-mono text-cyan-400">{tournamentState.players.length}</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-[#080c14] p-6 shadow-xl">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-600">AVAILABLE FIGHTERS</p>
              <p className="mt-2 text-4xl font-black font-mono text-emerald-400">{totalRosterCharacters}</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-[#080c14] p-6 shadow-xl">
              <p className="text-xs font-black uppercase tracking-widest text-red-500">DISTRIBUTION</p>
              <p className="mt-2 text-2xl font-black capitalize text-white">{tournamentState.distributionMode || "Random"}</p>
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#080c14] p-6 md:p-8 shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">01 — TOURNAMENT FIELD</p>
            <h2 className="mt-2 text-2xl font-black">Choose Tournament Size</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
              {fieldOptions.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() =>
                    setTournamentState((current) => ({
                      ...current,
                      tournamentConfig: {
                        ...(current.tournamentConfig || {}),
                        fieldSize: size,
                      },
                    }))
                  }
                  className={`rounded-2xl border px-4 py-5 text-center transition cursor-pointer ${
                    config.fieldSize === size
                      ? "border-red-500 bg-red-950/30 text-white shadow-lg shadow-red-950/50"
                      : "border-zinc-800 bg-black/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="block text-3xl font-black font-mono">{size}</span>
                  <span className="mt-1 block text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    ENTRANTS
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-3xl border border-zinc-800 bg-[#080c14] p-6 md:p-8 shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">02 — FORM RULES</p>
            <h2 className="mt-2 text-2xl font-black">Character Form Rules</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { id: "locked", title: "Locked Form", description: "Use the exact form selected for the event." },
                { id: "best", title: "Best Form", description: "Fighters enter in their highest combat state." },
                { id: "random", title: "Random Form", description: "Randomly select an eligible canon state." },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    setTournamentState((current) => ({
                      ...current,
                      tournamentConfig: {
                        ...(current.tournamentConfig || {}),
                        formRule: option.id,
                      },
                    }))
                  }
                  className={`rounded-2xl border p-5 text-left transition cursor-pointer ${
                    config.formRule === option.id
                      ? "border-red-500 bg-red-950/30 text-white"
                      : "border-zinc-800 bg-black/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <h3 className="font-black text-sm text-white">{option.title}</h3>
                  <p className="mt-1.5 text-xs text-zinc-500">{option.description}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-3xl border border-zinc-800 bg-[#080c14] p-6 md:p-8 shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">03 — SEEDING</p>
            <h2 className="mt-2 text-2xl font-black">Bracket Seeding</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  setTournamentState((current) => ({
                    ...current,
                    tournamentConfig: {
                      ...(current.tournamentConfig || {}),
                      seedingMode: "random",
                    },
                  }))
                }
                className={`rounded-2xl border p-5 text-left transition cursor-pointer ${
                  config.seedingMode === "random"
                    ? "border-red-500 bg-red-950/30 text-white"
                    : "border-zinc-800 bg-black/40 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                <h3 className="font-black text-sm text-white">🎲 Random Seeding</h3>
                <p className="mt-1 text-xs text-zinc-500">Shuffle all fighters randomly into bracket positions.</p>
              </button>

              <button
                type="button"
                onClick={() =>
                  setTournamentState((current) => ({
                    ...current,
                    tournamentConfig: {
                      ...(current.tournamentConfig || {}),
                      seedingMode: "power",
                    },
                  }))
                }
                className={`rounded-2xl border p-5 text-left transition cursor-pointer ${
                  config.seedingMode === "power"
                    ? "border-red-500 bg-red-950/30 text-white"
                    : "border-zinc-800 bg-black/40 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                <h3 className="font-black text-sm text-white">⚡ Power Seeding</h3>
                <p className="mt-1 text-xs text-zinc-500">Place stronger rated fighters into top seed positions.</p>
              </button>
            </div>
          </section>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => setScreen(SCREENS.RESULTS)}
              className="rounded-xl border border-zinc-800 bg-[#080c14] px-6 py-4 font-black text-xs uppercase tracking-wider text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              ← Review Rosters
            </button>

            <button
              type="button"
              onClick={handleCreateTournamentBracket}
              className="rounded-xl bg-red-600 px-8 py-4 font-black text-xs uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition hover:bg-red-500 active:scale-95 cursor-pointer"
            >
              Create Tournament Bracket →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === SCREENS.HOME) {
    return <TournamentHome totalCharacters={TOTAL_CHARACTERS} onStart={handleStartTournament} onBack={onBack} />;
  }

  if (screen === SCREENS.DISTRIBUTION) {
    return (
      <div>
        {error && (
          <div className="fixed left-1/2 top-4 z-50 w-[min(90%,600px)] -translate-x-1/2 rounded-2xl border border-red-500/30 bg-red-950/90 px-5 py-4 text-sm font-bold text-red-300 shadow-2xl">
            {error}
          </div>
        )}
        <DistributionLobby totalCharacters={TOTAL_CHARACTERS} onStart={handleDistributionStart} onBack={resetTournament} />
      </div>
    );
  }

  if (screen === SCREENS.AUCTION) {
    return (
      <AuctionRoom
        initialAuction={{
          players: tournamentState.players,
          characters: characterPool,
          totalCharacters: tournamentState.totalCharacters,
        }}
        onComplete={handleAuctionComplete}
        onBack={() => setScreen(SCREENS.DISTRIBUTION)}
      />
    );
  }

  if (screen === SCREENS.RESULTS) {
    return (
      <div>
        {error && (
          <div className="fixed left-1/2 top-4 z-50 w-[min(90%,600px)] -translate-x-1/2 rounded-2xl border border-red-500/30 bg-red-950/90 px-5 py-4 text-sm font-bold text-red-300 shadow-2xl">
            {error}
          </div>
        )}
        <DistributionResults
          players={tournamentState.players}
          totalCharacters={tournamentState.totalCharacters}
          distributionMode={tournamentState.distributionMode}
          onConfirm={handleRosterConfirmation}
          onBack={() => setScreen(SCREENS.DISTRIBUTION)}
        />
      </div>
    );
  }

  if (screen === SCREENS.SETUP) {
    return renderTournamentSetup();
  }

  if (screen === SCREENS.MATCH) {
    return (
      <TournamentMatch
        tournament={tournamentState.tournament}
        match={selectedMatch}
        players={tournamentState.players}
        onTournamentUpdate={({ matchId, officialWinner, votes, voteResult, battle }) => {
          setTournamentState((current) => ({
            ...current,
            lastMatchResult: { matchId, officialWinner, votes, voteResult, battle },
          }));
          setSelectedMatch(null);
          setScreen(SCREENS.SETUP);
        }}
        onBack={handleMatchBack}
      />
    );
  }

  return null;
}