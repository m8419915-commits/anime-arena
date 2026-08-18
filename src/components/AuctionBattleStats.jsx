import React from "react";

function clamp(value, min = 0, max = 100) {
  const n = Number(value);
  return Math.max(min, Math.min(max, Number.isFinite(n) ? n : 0));
}

function formatNumber(value) {
  return Number(value || 0).toFixed(1);
}

function StatBar({
  label,
  leftValue,
  rightValue,
}) {
  const left = clamp(leftValue);
  const right = clamp(rightValue);

  const leftWins = left > right;
  const rightWins = right > left;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
        <span
          className={
            leftWins
              ? "text-white"
              : "text-neutral-500"
          }
        >
          {formatNumber(left)}
        </span>

        <span className="text-neutral-600">
          {label}
        </span>

        <span
          className={
            rightWins
              ? "text-white"
              : "text-neutral-500"
          }
        >
          {formatNumber(right)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="h-2 rounded-full bg-neutral-900 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-700"
            style={{
              width: `${left}%`,
            }}
          />
        </div>

        <div className="h-2 rounded-full bg-neutral-900 overflow-hidden">
          <div
            className="h-full bg-neutral-400 rounded-full transition-all duration-700"
            style={{
              width: `${right}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  leftValue,
  rightValue,
  suffix = "",
}) {
  const left = Number(leftValue || 0);
  const right = Number(rightValue || 0);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">
      <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black mb-3">
        {label}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-xl font-black text-white">
            {left.toFixed(1)}
            {suffix}
          </div>

          <div className="text-[9px] text-neutral-600 uppercase mt-1">
            {left > right
              ? "Advantage"
              : left === right
              ? "Even"
              : ""}
          </div>
        </div>

        <div className="text-right">
          <div className="text-xl font-black text-neutral-300">
            {right.toFixed(1)}
            {suffix}
          </div>

          <div className="text-[9px] text-neutral-600 uppercase mt-1">
            {right > left
              ? "Advantage"
              : right === left
              ? "Even"
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuctionBattleStats({
  battle,
}) {
  if (!battle) {
    return (
      <section className="rounded-3xl border border-neutral-800 bg-black/70 p-6">
        <div className="text-sm text-neutral-500">
          Battle statistics unavailable.
        </div>
      </section>
    );
  }

  const teamIds = Object.keys(
    battle.teams || {}
  );

  const leftId = teamIds[0];
  const rightId = teamIds[1];

  const leftTeam =
    battle.teams?.[leftId];

  const rightTeam =
    battle.teams?.[rightId];

  if (!leftTeam || !rightTeam) {
    return (
      <section className="rounded-3xl border border-neutral-800 bg-black/70 p-6">
        <div className="text-sm text-red-400 font-bold">
          Two complete teams are required.
        </div>
      </section>
    );
  }

  const leftStats =
    leftTeam.averages || {};

  const rightStats =
    rightTeam.averages || {};

  const probability =
    battle.probability || {};

  const leftProbability =
    Number(
      probability[leftId] || 0
    );

  const rightProbability =
    Number(
      probability[rightId] || 0
    );

  const leftAdvantage =
    Number(
      leftTeam.threatLevel || 0
    );

  const rightAdvantage =
    Number(
      rightTeam.threatLevel || 0
    );

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 p-5 md:p-7">

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-red-400 font-black">
              Tactical Analysis
            </div>

            <h2 className="text-2xl md:text-3xl font-black uppercase mt-2">
              Battle Statistics
            </h2>

            <p className="text-xs text-neutral-500 mt-2">
              Deterministic combat engine analysis
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl border border-neutral-800 bg-black/70 text-[10px] text-neutral-500 font-black uppercase tracking-widest">
            Engine v2
          </div>
        </div>


        {/* PLAYER HEADERS */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-7">

          <div className="rounded-2xl border border-neutral-800 bg-black/70 p-4">
            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
              Team A
            </div>

            <div className="text-xl font-black mt-1 truncate">
              {leftTeam.playerName}
            </div>
          </div>

          <div className="text-xs font-black text-neutral-700">
            VS
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-black/70 p-4 text-right">
            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
              Team B
            </div>

            <div className="text-xl font-black mt-1 truncate">
              {rightTeam.playerName}
            </div>
          </div>

        </div>


        {/* WIN PROBABILITY */}
        <div className="grid md:grid-cols-2 gap-3 mb-6">

          <div className="rounded-2xl border border-neutral-800 bg-black/70 p-5">
            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
              Win Probability
            </div>

            <div className="flex items-end justify-between mt-2">
              <div className="text-4xl font-black">
                {leftProbability.toFixed(1)}%
              </div>

              <div className="text-[10px] text-neutral-600 uppercase">
                {leftProbability >
                rightProbability
                  ? "Leading"
                  : leftProbability <
                    rightProbability
                  ? "Underdog"
                  : "Even"}
              </div>
            </div>

            <div className="h-3 bg-neutral-900 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-1000"
                style={{
                  width: `${clamp(
                    leftProbability
                  )}%`,
                }}
              />
            </div>
          </div>


          <div className="rounded-2xl border border-neutral-800 bg-black/70 p-5">
            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
              Win Probability
            </div>

            <div className="flex items-end justify-between mt-2">
              <div className="text-4xl font-black text-neutral-300">
                {rightProbability.toFixed(1)}%
              </div>

              <div className="text-[10px] text-neutral-600 uppercase">
                {rightProbability >
                leftProbability
                  ? "Leading"
                  : rightProbability <
                    leftProbability
                  ? "Underdog"
                  : "Even"}
              </div>
            </div>

            <div className="h-3 bg-neutral-900 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-neutral-400 rounded-full transition-all duration-1000"
                style={{
                  width: `${clamp(
                    rightProbability
                  )}%`,
                }}
              />
            </div>
          </div>

        </div>


        {/* CORE COMPARISON */}
        <div className="space-y-5">

          <StatBar
            label="Power"
            leftValue={leftStats.power}
            rightValue={rightStats.power}
          />

          <StatBar
            label="Hax"
            leftValue={leftStats.hax}
            rightValue={rightStats.hax}
          />

          <StatBar
            label="Speed"
            leftValue={leftStats.speed}
            rightValue={rightStats.speed}
          />

          <StatBar
            label="Defense"
            leftValue={leftStats.defense}
            rightValue={rightStats.defense}
          />

          <StatBar
            label="Battle IQ"
            leftValue={leftStats.battleIQ}
            rightValue={rightStats.battleIQ}
          />

          <StatBar
            label="Versatility"
            leftValue={leftStats.versatility}
            rightValue={rightStats.versatility}
          />

          <StatBar
            label="Stamina"
            leftValue={leftStats.stamina}
            rightValue={rightStats.stamina}
          />

        </div>


        {/* TEAM METRICS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-7">

          <MetricCard
            label="Threat Level"
            leftValue={leftAdvantage}
            rightValue={rightAdvantage}
          />

          <MetricCard
            label="Synergy"
            leftValue={leftTeam.synergy}
            rightValue={rightTeam.synergy}
          />

          <MetricCard
            label="Role Coverage"
            leftValue={leftTeam.roleCoverage}
            rightValue={rightTeam.roleCoverage}
          />

          <MetricCard
            label="Balance"
            leftValue={leftTeam.balance}
            rightValue={rightTeam.balance}
          />

        </div>


        {/* ROLE DISTRIBUTION */}
        <div className="grid md:grid-cols-2 gap-4 mt-7">

          <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">

            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black mb-3">
              {leftTeam.playerName} — Role Structure
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(
                leftTeam.roleDistribution || {}
              ).map(
                ([role, count]) => (
                  <div
                    key={role}
                    className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800"
                  >
                    <span className="text-[10px] text-neutral-500">
                      {role}
                    </span>

                    <span className="ml-2 text-xs font-black">
                      {count}
                    </span>
                  </div>
                )
              )}
            </div>

          </div>


          <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">

            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black mb-3">
              {rightTeam.playerName} — Role Structure
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(
                rightTeam.roleDistribution || {}
              ).map(
                ([role, count]) => (
                  <div
                    key={role}
                    className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800"
                  >
                    <span className="text-[10px] text-neutral-500">
                      {role}
                    </span>

                    <span className="ml-2 text-xs font-black">
                      {count}
                    </span>
                  </div>
                )
              )}
            </div>

          </div>

        </div>


        {/* STRONGEST / WEAKEST */}
        <div className="grid md:grid-cols-2 gap-4 mt-7">

          <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">

            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
              Strongest Fighter
            </div>

            <div className="mt-3 font-black text-lg">
              {leftTeam.strongestCharacter?.name ||
                "Unknown"}
            </div>

            <div className="text-[10px] text-neutral-600 mt-1">
              {leftTeam.strongestCharacter?.verse ||
                "Unknown"}{" "}
              •{" "}
              {leftTeam.strongestCharacter?.role ||
                "Versatility"}
            </div>

          </div>


          <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">

            <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
              Strongest Fighter
            </div>

            <div className="mt-3 font-black text-lg">
              {rightTeam.strongestCharacter?.name ||
                "Unknown"}
            </div>

            <div className="text-[10px] text-neutral-600 mt-1">
              {rightTeam.strongestCharacter?.verse ||
                "Unknown"}{" "}
              •{" "}
              {rightTeam.strongestCharacter?.role ||
                "Versatility"}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}