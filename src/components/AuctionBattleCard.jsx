import React from "react";
import {
  Crown,
  Shield,
  Sparkles,
  Swords,
  Zap,
} from "lucide-react";

function clamp(value, min = 0, max = 100) {
  const n = Number(value);
  return Math.max(
    min,
    Math.min(max, Number.isFinite(n) ? n : 0)
  );
}

function getImage(character) {
  return (
    character?.image ||
    character?.imageUrl ||
    character?.img ||
    ""
  );
}

function CharacterMiniCard({
  character,
  side,
  highlighted = false,
}) {
  if (!character) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">
        <div className="h-24 rounded-xl bg-neutral-900 flex items-center justify-center">
          <Swords className="w-8 h-8 text-neutral-700" />
        </div>
      </div>
    );
  }

  const image = getImage(character);

  return (
    <div
      className={`rounded-2xl border p-3 transition ${
        highlighted
          ? "border-yellow-500 bg-yellow-950/20"
          : "border-neutral-800 bg-black/60"
      }`}
    >
      <div className="flex gap-3 items-center">

        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0">
          {image ? (
            <img
              src={image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Swords className="w-7 h-7 text-neutral-700" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-center justify-between gap-2">
            <div className="font-black text-sm truncate">
              {character.name}
            </div>

            {highlighted && (
              <Crown className="w-4 h-4 text-yellow-400 shrink-0" />
            )}
          </div>

          <div className="text-[9px] text-neutral-600 uppercase tracking-widest mt-1">
            {character.verse || "Unknown Verse"}
          </div>

          <div className="flex items-center gap-2 mt-2">

            <span className="px-2 py-1 rounded-lg bg-neutral-900 text-[9px] text-neutral-400 font-black">
              {character.role || "Versatility"}
            </span>

            <span className="text-[9px] text-neutral-600">
              PWR {Number(character.power || 0).toFixed(0)}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

function ProbabilityRing({
  value,
  label,
  favored = false,
}) {
  const percentage = clamp(value);

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(
            ${favored ? "#ffffff" : "#737373"} ${percentage * 3.6}deg,
            #171717 ${percentage * 3.6}deg
          )`,
        }}
      />

      <div className="absolute inset-[6px] rounded-full bg-neutral-950 flex flex-col items-center justify-center">
        <div className="text-2xl md:text-3xl font-black">
          {percentage.toFixed(1)}%
        </div>

        <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black mt-1">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function AuctionBattleCard({
  battle,
  onAnalyze,
  analyzing = false,
}) {
  if (!battle) {
    return (
      <section className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-6">
        <div className="text-center text-neutral-500">
          No battle data available.
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
      <section className="rounded-[2rem] border border-red-900/50 bg-red-950/10 p-6">
        <div className="text-center text-red-400 font-bold">
          Two valid teams are required for battle.
        </div>
      </section>
    );
  }

  const probabilities =
    battle.probability || {};

  const leftProbability = Number(
    probabilities[leftId] || 0
  );

  const rightProbability = Number(
    probabilities[rightId] || 0
  );

  const leftFavored =
    leftProbability >
    rightProbability;

  const rightFavored =
    rightProbability >
    leftProbability;

  const strongestLeft =
    leftTeam.strongestCharacter;

  const strongestRight =
    rightTeam.strongestCharacter;

  const keyMatchup =
    battle.keyMatchups?.[0];

  const battleTier =
    battle.battleTier ||
    "TACTICAL";

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-950 shadow-2xl">

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_50%)]" />

      <div className="relative z-10 p-5 md:p-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          <div>
            <div className="flex items-center gap-2 text-red-400 text-[10px] uppercase tracking-[0.25em] font-black">
              <Swords className="w-4 h-4" />
              Auction Battle
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase mt-3">
              Final
              <span className="text-red-500">
                {" "}Showdown
              </span>
            </h2>
          </div>

          <div className="px-4 py-2 rounded-xl border border-neutral-800 bg-black/70">
            <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
              Battle Classification
            </div>

            <div className="text-xs font-black mt-1">
              {battleTier.replaceAll(
                "_",
                " "
              )}
            </div>
          </div>

        </div>


        {/* VERSUS AREA */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-5 mt-8">

          {/* LEFT TEAM */}
          <div
            className={`rounded-[2rem] border p-5 md:p-6 transition ${
              leftFavored
                ? "border-white/30 bg-white/[0.03]"
                : "border-neutral-800 bg-black/60"
            }`}
          >

            <div className="flex items-center justify-between">

              <div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
                  Player A
                </div>

                <div className="text-2xl font-black mt-1 truncate">
                  {leftTeam.playerName}
                </div>
              </div>

              {leftFavored && (
                <Crown className="w-6 h-6 text-yellow-400" />
              )}

            </div>

            <div className="flex justify-center mt-6">
              <ProbabilityRing
                value={leftProbability}
                label="Win chance"
                favored={leftFavored}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">

              <div className="rounded-xl bg-black/70 border border-neutral-800 p-3 text-center">
                <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                  Threat
                </div>
                <div className="font-black mt-1">
                  {Number(
                    leftTeam.threatLevel || 0
                  ).toFixed(1)}
                </div>
              </div>

              <div className="rounded-xl bg-black/70 border border-neutral-800 p-3 text-center">
                <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                  Synergy
                </div>
                <div className="font-black mt-1">
                  {Number(
                    leftTeam.synergy || 0
                  ).toFixed(1)}
                </div>
              </div>

              <div className="rounded-xl bg-black/70 border border-neutral-800 p-3 text-center">
                <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                  Roles
                </div>
                <div className="font-black mt-1">
                  {
                    Object.keys(
                      leftTeam.roleDistribution || {}
                    ).length
                  }
                </div>
              </div>

            </div>
          </div>


          {/* CENTER */}
          <div className="flex flex-col items-center">

            <div className="w-16 h-16 rounded-full border border-neutral-700 bg-black flex items-center justify-center shadow-xl">
              <Swords className="w-7 h-7 text-red-500" />
            </div>

            <div className="text-[10px] tracking-[0.3em] font-black text-neutral-700 mt-3">
              VS
            </div>

            <div className="flex items-center gap-2 mt-4 text-[9px] text-neutral-600 uppercase tracking-widest">
              <Zap className="w-3 h-3" />
              Tactical Simulation
            </div>

          </div>


          {/* RIGHT TEAM */}
          <div
            className={`rounded-[2rem] border p-5 md:p-6 transition ${
              rightFavored
                ? "border-white/30 bg-white/[0.03]"
                : "border-neutral-800 bg-black/60"
            }`}
          >

            <div className="flex items-center justify-between">

              <div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
                  Player B
                </div>

                <div className="text-2xl font-black mt-1 truncate">
                  {rightTeam.playerName}
                </div>
              </div>

              {rightFavored && (
                <Crown className="w-6 h-6 text-yellow-400" />
              )}

            </div>

            <div className="flex justify-center mt-6">
              <ProbabilityRing
                value={rightProbability}
                label="Win chance"
                favored={rightFavored}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">

              <div className="rounded-xl bg-black/70 border border-neutral-800 p-3 text-center">
                <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                  Threat
                </div>
                <div className="font-black mt-1">
                  {Number(
                    rightTeam.threatLevel || 0
                  ).toFixed(1)}
                </div>
              </div>

              <div className="rounded-xl bg-black/70 border border-neutral-800 p-3 text-center">
                <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                  Synergy
                </div>
                <div className="font-black mt-1">
                  {Number(
                    rightTeam.synergy || 0
                  ).toFixed(1)}
                </div>
              </div>

              <div className="rounded-xl bg-black/70 border border-neutral-800 p-3 text-center">
                <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                  Roles
                </div>
                <div className="font-black mt-1">
                  {
                    Object.keys(
                      rightTeam.roleDistribution || {}
                    ).length
                  }
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* WIN PROBABILITY BAR */}
        <div className="mt-6">

          <div className="h-4 rounded-full bg-neutral-900 overflow-hidden flex">

            <div
              className="bg-white transition-all duration-1000"
              style={{
                width: `${clamp(
                  leftProbability
                )}%`,
              }}
            />

            <div
              className="bg-neutral-500 transition-all duration-1000"
              style={{
                width: `${clamp(
                  rightProbability
                )}%`,
              }}
            />

          </div>

          <div className="flex justify-between mt-2 text-[9px] uppercase tracking-widest font-black">
            <span className="text-neutral-400">
              {leftTeam.playerName}
            </span>

            <span className="text-neutral-600">
              Engine prediction
            </span>

            <span className="text-neutral-500">
              {rightTeam.playerName}
            </span>
          </div>

        </div>


        {/* KEY FIGHTERS */}
        <div className="grid md:grid-cols-2 gap-4 mt-7">

          <CharacterMiniCard
            character={
              strongestLeft
            }
            side="left"
            highlighted={
              leftFavored
            }
          />

          <CharacterMiniCard
            character={
              strongestRight
            }
            side="right"
            highlighted={
              rightFavored
            }
          />

        </div>


        {/* KEY MATCHUP */}
        {keyMatchup && (
          <div className="mt-6 rounded-2xl border border-red-900/40 bg-red-950/10 p-5">

            <div className="flex items-center gap-2 text-red-400 text-[9px] uppercase tracking-widest font-black">
              <Shield className="w-4 h-4" />
              Key Matchup
            </div>

            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 mt-4">

              <div>
                <div className="font-black text-lg">
                  {keyMatchup.left?.name ||
                    "Unknown"}
                </div>

                <div className="text-[9px] text-neutral-600 mt-1">
                  {keyMatchup.left?.role ||
                    "Versatility"}{" "}
                  •{" "}
                  {Number(
                    keyMatchup.leftProbability ||
                      0
                  ).toFixed(1)}
                  %
                </div>
              </div>

              <div className="text-[10px] font-black text-neutral-700">
                VS
              </div>

              <div className="md:text-right">
                <div className="font-black text-lg">
                  {keyMatchup.right?.name ||
                    "Unknown"}
                </div>

                <div className="text-[9px] text-neutral-600 mt-1">
                  {keyMatchup.right?.role ||
                    "Versatility"}{" "}
                  •{" "}
                  {Number(
                    keyMatchup.rightProbability ||
                      0
                  ).toFixed(1)}
                  %
                </div>
              </div>

            </div>

          </div>
        )}


        {/* ANALYZE BUTTON */}
        {typeof onAnalyze === "function" && (
          <button
            onClick={onAnalyze}
            disabled={analyzing}
            className="w-full mt-7 py-4 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed text-black font-black uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition"
          >
            <Sparkles className="w-5 h-5" />

            {analyzing
              ? "Gemini Is Adjudicating..."
              : "Request Gemini Verdict"}
          </button>
        )}

      </div>
    </section>
  );
}