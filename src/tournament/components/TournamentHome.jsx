import React from "react";

export default function TournamentHome({
  totalCharacters = 930,
  onStart,
  onBack,
}) {
  return (
    <div className="min-h-screen bg-[#07070a] text-white px-4 py-8 md:px-8">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-12 text-center">

          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-red-500">
            Anime Arena
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-7xl">
            Grand Tournament
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Build your roster, survive the bracket,
            vote on every battle, and crown the ultimate
            anime champion.
          </p>

        </div>

        {/* HERO CARD */}

        <section className="mb-8 overflow-hidden rounded-[2rem] border border-red-500/20 bg-red-500/[0.06] p-6 md:p-10">

          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">

            <div>

              <p className="text-xs font-black uppercase tracking-widest text-red-400">
                Tournament Pool
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                {totalCharacters.toLocaleString()}
              </h2>

              <p className="mt-2 text-lg font-bold text-zinc-300">
                Characters enter the arena.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                First build your personal roster.
                Then the tournament engine creates the
                bracket, locks forms, runs battles and
                lets the players decide who advances.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {[
                ["👥", "2–8", "Players"],
                ["🔨", "3", "Distribution Modes"],
                ["⚔️", "930", "Characters"],
                ["🏆", "1", "Champion"],
              ].map(
                ([icon, value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-black/30 p-5"
                  >

                    <div className="text-2xl">
                      {icon}
                    </div>

                    <p className="mt-3 text-2xl font-black">
                      {value}
                    </p>

                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-600">
                      {label}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}

        <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">

          <div className="mb-6">

            <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
              How it works
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Four stages. One champion.
            </h2>

          </div>

          <div className="grid gap-3 md:grid-cols-4">

            {[
              [
                "01",
                "Build Rosters",
                "Players claim characters.",
              ],
              [
                "02",
                "Seed",
                "Characters are placed into the bracket.",
              ],
              [
                "03",
                "Battle",
                "Characters fight through the tournament.",
              ],
              [
                "04",
                "Vote",
                "Players decide who advances.",
              ],
            ].map(
              ([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >

                  <span className="text-xs font-black text-red-500">
                    {number}
                  </span>

                  <h3 className="mt-3 font-black">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {description}
                  </p>

                </div>
              )
            )}

          </div>

        </section>

        {/* PLAYER CONTROL */}

        <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Player Control
              </p>

              <h2 className="mt-2 text-xl font-black">
                Gemini recommends. Players decide.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Gemini can analyse a matchup and announce
                which character it believes should win.
                The official tournament result is decided
                by the participating players' vote.
              </p>

            </div>

            <div className="shrink-0 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-center">

              <p className="text-2xl">
                🤖
              </p>

              <p className="mt-1 text-xs font-black uppercase tracking-widest text-red-400">
                Gemini Assist
              </p>

            </div>

          </div>

        </section>

        {/* ACTIONS */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-zinc-300 transition hover:bg-white/[0.08]"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={onStart}
            className="rounded-2xl bg-red-500 px-8 py-4 font-black text-white shadow-xl shadow-red-500/20 transition hover:bg-red-400"
          >
            Build Your Roster →
          </button>

        </div>

      </div>

    </div>
  );
}