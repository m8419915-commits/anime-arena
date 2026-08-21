import React, { useMemo, useState } from "react";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;

const DISTRIBUTION_MODES = [
  {
    id: "auction",
    icon: "🔨",
    name: "Grand Auction",
    description:
      "Fight for characters with your budget. Every purchase changes your strategy.",
    accent: "red",
  },
  {
    id: "random",
    icon: "🎲",
    name: "Random War",
    description:
      "Let fate distribute all 930 characters between the players automatically.",
    accent: "violet",
  },
];

const DEFAULT_NAMES = [
  "Player 1",
  "Player 2",
  "Player 3",
  "Player 4",
  "Player 5",
  "Player 6",
  "Player 7",
  "Player 8",
];

export default function DistributionLobby({
  totalCharacters = 930,
  onStart,
  onBack,
}) {
  const [playerCount, setPlayerCount] = useState(3);

  const [playerNames, setPlayerNames] = useState(
    DEFAULT_NAMES.slice(0, 3)
  );

  const [distributionMode, setDistributionMode] =
    useState("auction");

  const players = useMemo(
    () =>
      Array.from(
        { length: playerCount },
        (_, index) => ({
          id: `player-${index + 1}`,
          name:
            playerNames[index] ||
            `Player ${index + 1}`,
        })
      ),
    [playerCount, playerNames]
  );

  const averageCharacters = Math.floor(
    totalCharacters / playerCount
  );

  function changePlayerCount(count) {
    setPlayerCount(count);

    setPlayerNames((current) => {
      const next = [...current];

      while (next.length < count) {
        next.push(DEFAULT_NAMES[next.length]);
      }

      return next.slice(0, count);
    });
  }

  function updatePlayerName(index, value) {
    setPlayerNames((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });
  }

  function handleStart() {
    const cleanedPlayers = players.map(
      (player, index) => ({
        ...player,
        name:
          player.name.trim() ||
          `Player ${index + 1}`,
      })
    );

    onStart?.({
      playerCount,
      players: cleanedPlayers,
      distributionMode,
      totalCharacters,
    });
  }

  return (
    <div className="tournament-shell min-h-screen bg-[#050507] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">

        {/* HERO */}

        <header className="mb-10 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Anime Arena
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Grand Tournament
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500 md:text-base">
            930 characters. Your friends. One champion.
            <br />
            First, build your roster.
          </p>

        </header>

        {/* POOL */}

        <section className="tournament-glass mb-8 rounded-[2rem] p-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                Character Pool
              </p>

              <div className="mt-2 flex items-baseline gap-3">

                <span className="text-5xl font-black md:text-6xl">
                  {totalCharacters}
                </span>

                <span className="font-bold text-zinc-500">
                  entrants
                </span>

              </div>

              <p className="mt-2 text-xs text-zinc-600">
                The entire tournament starts from these
                characters.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-2 md:w-80">

              <div className="rounded-2xl bg-black/40 p-4">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
                  Players
                </p>
                <p className="mt-1 text-2xl font-black">
                  {playerCount}
                </p>
              </div>

              <div className="rounded-2xl bg-black/40 p-4">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
                  Avg. Pool
                </p>
                <p className="mt-1 text-2xl font-black text-red-400">
                  {averageCharacters}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* PLAYERS */}

        <section className="mb-10">

          <div className="mb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
              Step 01
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Who is playing?
            </h2>

            <p className="mt-1 text-sm text-zinc-600">
              Choose 2–8 players.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">

            {Array.from(
              {
                length:
                  MAX_PLAYERS -
                  MIN_PLAYERS +
                  1,
              },
              (_, index) => {
                const count =
                  MIN_PLAYERS + index;

                const selected =
                  playerCount === count;

                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() =>
                      changePlayerCount(count)
                    }
                    className={[
                      "rounded-2xl border py-4 text-lg font-black transition-all",
                      selected
                        ? "border-red-500 bg-red-500 text-white shadow-lg shadow-red-500/20"
                        : "border-white/10 bg-white/[0.03] text-zinc-500 hover:bg-white/[0.07] hover:text-white",
                    ].join(" ")}
                  >
                    {count}
                  </button>
                );
              }
            )}

          </div>

        </section>

        {/* NAMES */}

        <section className="mb-10">

          <div className="mb-4">

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
              Step 02
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Name your contenders
            </h2>

          </div>

          <div className="grid gap-3 md:grid-cols-2">

            {players.map((player, index) => (
              <div
                key={player.id}
                className="tournament-glass rounded-2xl p-3"
              >

                <label className="mb-2 block text-[9px] font-black uppercase tracking-widest text-zinc-600">
                  Player {index + 1}
                </label>

                <input
                  value={
                    playerNames[index] || ""
                  }
                  onChange={(event) =>
                    updatePlayerName(
                      index,
                      event.target.value
                    )
                  }
                  maxLength={20}
                  placeholder={`Player ${
                    index + 1
                  }`}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-bold text-white outline-none transition focus:border-red-500"
                />

              </div>
            ))}

          </div>

        </section>

        {/* DISTRIBUTION */}

        <section className="mb-10">

          <div className="mb-5">

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
              Step 03
            </p>

            <h2 className="mt-1 text-2xl font-black">
              How will you claim the 930?
            </h2>

            <p className="mt-1 text-sm text-zinc-600">
              Choose exactly one distribution system.
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {DISTRIBUTION_MODES.map((mode) => {

              const selected =
                distributionMode === mode.id;

              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() =>
                    setDistributionMode(mode.id)
                  }
                  className={[
                    "group relative overflow-hidden rounded-[2rem] border p-6 text-left transition-all duration-300",
                    selected
                      ? "border-red-500 bg-red-500/[0.10] shadow-2xl shadow-red-500/10"
                      : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]",
                  ].join(" ")}
                >

                  {selected && (
                    <div className="absolute right-5 top-5 rounded-full bg-red-500 px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                      Selected
                    </div>
                  )}

                  <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
                    {mode.icon}
                  </div>

                  <h3 className="text-2xl font-black">
                    {mode.name}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                    {mode.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-600">

                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        selected
                          ? "bg-red-500"
                          : "bg-zinc-700",
                      ].join(" ")}
                    />

                    {mode.id === "auction"
                      ? "Player controlled"
                      : "Fate controlled"}

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* FOOTER ACTIONS */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-black text-zinc-500 transition hover:bg-white/[0.07] hover:text-white"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={handleStart}
            className="group rounded-2xl bg-red-500 px-8 py-4 font-black text-white shadow-xl shadow-red-500/20 transition hover:bg-red-400 hover:shadow-red-500/30"
          >
            Continue to{" "}
            {distributionMode === "auction"
              ? "Auction"
              : "Random Distribution"}
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

      </div>
    </div>
  );
}