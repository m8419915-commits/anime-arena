import React, { useState } from "react";

export default function TournamentSetup({
  initialSettings = {},
  onContinue,
  onBack,
}) {
  const [tournamentName, setTournamentName] =
    useState(
      initialSettings.name ||
        "Anime Arena: Grand Tournament"
    );

  const [formRuleset, setFormRuleset] =
    useState(
      initialSettings.formRuleset ||
        "peak"
    );

  const [seedingMode, setSeedingMode] =
    useState(
      initialSettings.seedingMode ||
        "ranked"
    );

  const [battleMode, setBattleMode] =
    useState(
      initialSettings.battleMode ||
        "standard"
    );

  function handleContinue() {
    onContinue?.({
      name:
        tournamentName.trim() ||
        "Anime Arena: Grand Tournament",

      formRuleset,

      seedingMode,

      battleMode,

      totalCharacters: 930,
    });
  }

  return (
    <div className="tournament-shell min-h-screen bg-[#050507] text-white">

      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">

        <header className="mb-10">

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
            Event Forge
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Configure the battlefield.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
            These rules are locked when the tournament
            begins. They cannot secretly change halfway
            through the championship.
          </p>

        </header>

        {/* NAME */}

        <section className="tournament-glass mb-5 rounded-[2rem] p-6">

          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
            Tournament Name
          </p>

          <input
            value={tournamentName}
            onChange={(event) =>
              setTournamentName(
                event.target.value
              )
            }
            maxLength={60}
            className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-lg font-black outline-none focus:border-red-500"
          />

        </section>

        {/* FORM RULES */}

        <SettingGroup
          number="01"
          title="Character Forms"
          description="Which version of each character enters the tournament?"
        >

          <Choice
            selected={formRuleset === "peak"}
            onClick={() =>
              setFormRuleset("peak")
            }
            icon="🔥"
            title="Peak Forms"
            text="Every character uses their strongest eligible form."
          />

          <Choice
            selected={
              formRuleset === "locked"
            }
            onClick={() =>
              setFormRuleset("locked")
            }
            icon="🔒"
            title="Locked Forms"
            text="Choose and lock a form before the tournament."
          />

          <Choice
            selected={
              formRuleset === "baseOnly"
            }
            onClick={() =>
              setFormRuleset("baseOnly")
            }
            icon="⚔️"
            title="Base Forms"
            text="Everyone starts from their base form."
          />

        </SettingGroup>

        {/* SEEDING */}

        <SettingGroup
          number="02"
          title="Seeding"
          description="Seeding decides where characters enter the bracket."
        >

          <Choice
            selected={
              seedingMode === "ranked"
            }
            onClick={() =>
              setSeedingMode("ranked")
            }
            icon="🏆"
            title="Power Seeding"
            text="Higher tournament ratings receive stronger seeds."
          />

          <Choice
            selected={
              seedingMode === "random"
            }
            onClick={() =>
              setSeedingMode("random")
            }
            icon="🎲"
            title="Random Draw"
            text="Characters receive completely random seeds."
          />

          <Choice
            selected={
              seedingMode === "custom"
            }
            onClick={() =>
              setSeedingMode("custom")
            }
            icon="🧠"
            title="Custom Seeding"
            text="Adjust the ranking manually before starting."
          />

        </SettingGroup>

        {/* BATTLE */}

        <SettingGroup
          number="03"
          title="Battle Rules"
          description="The battle engine calculates the matchup. Gemini will later provide the human-readable analysis."
        >

          <Choice
            selected={
              battleMode === "standard"
            }
            onClick={() =>
              setBattleMode("standard")
            }
            icon="⚔️"
            title="Standard Battle"
            text="Normal tournament combat calculation."
          />

          <Choice
            selected={
              battleMode === "tactical"
            }
            onClick={() =>
              setBattleMode("tactical")
            }
            icon="🧠"
            title="Tactical Battle"
            text="Places more emphasis on abilities, matchup and strategy."
          />

        </SettingGroup>

        {/* SUMMARY */}

        <div className="mb-6 rounded-[2rem] border border-red-500/20 bg-red-500/[0.04] p-6">

          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
            Locked Event Preview
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <Summary
              label="Pool"
              value="930"
            />

            <Summary
              label="Forms"
              value={
                formRuleset === "peak"
                  ? "Peak"
                  : formRuleset ===
                    "baseOnly"
                  ? "Base"
                  : "Locked"
              }
            />

            <Summary
              label="Seeding"
              value={
                seedingMode === "ranked"
                  ? "Ranked"
                  : seedingMode ===
                    "random"
                  ? "Random"
                  : "Custom"
              }
            />

          </div>

        </div>

        {/* ACTIONS */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-black text-zinc-500 hover:bg-white/[0.07] hover:text-white"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="rounded-2xl bg-red-500 px-8 py-4 font-black shadow-xl shadow-red-500/20 transition hover:bg-red-400"
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
}

function SettingGroup({
  number,
  title,
  description,
  children,
}) {
  return (
    <section className="mb-5 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 md:p-6">

      <div className="mb-5">

        <span className="text-[9px] font-black tracking-[0.3em] text-red-500">
          {number}
        </span>

        <h2 className="mt-1 text-xl font-black">
          {title}
        </h2>

        <p className="mt-1 text-xs text-zinc-600">
          {description}
        </p>

      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {children}
      </div>

    </section>
  );
}

function Choice({
  selected,
  onClick,
  icon,
  title,
  text,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-2xl border p-4 text-left transition-all",
        selected
          ? "border-red-500 bg-red-500/10"
          : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.04]",
      ].join(" ")}
    >

      <div className="text-2xl">
        {icon}
      </div>

      <h3 className="mt-3 font-black">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-zinc-600">
        {text}
      </p>

      {selected && (
        <div className="mt-3 text-[9px] font-black uppercase tracking-widest text-red-400">
          Selected
        </div>
      )}

    </button>
  );
}

function Summary({
  label,
  value,
}) {
  return (
    <div className="rounded-2xl bg-black/30 p-4">

      <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
        {label}
      </p>

      <p className="mt-1 font-black">
        {value}
      </p>

    </div>
  );
}