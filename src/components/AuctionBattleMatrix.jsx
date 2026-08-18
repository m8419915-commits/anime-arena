import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Crosshair,
  Shield,
  Swords,
  Target,
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

function getWinnerLabel(matchup) {
  if (matchup?.winner === "LEFT") {
    return matchup.left?.name || "Left";
  }

  if (matchup?.winner === "RIGHT") {
    return matchup.right?.name || "Right";
  }

  return "Contested";
}

function getEdgeClass(
  leftProbability,
  rightProbability
) {
  if (
    Math.abs(
      Number(leftProbability || 0) -
        Number(rightProbability || 0)
    ) < 5
  ) {
    return "text-yellow-400";
  }

  return Number(leftProbability || 0) >
    Number(rightProbability || 0)
    ? "text-white"
    : "text-neutral-400";
}

function MatchupCharacter({
  character,
  probability,
  favored,
}) {
  const image = getImage(character);

  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        favored
          ? "border-white/20 bg-white/[0.03]"
          : "border-neutral-800 bg-black/60"
      }`}
    >
      <div className="flex items-center gap-3">

        <div className="w-14 h-14 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0">
          {image ? (
            <img
              src={image}
              alt={character?.name || "Character"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Swords className="w-6 h-6 text-neutral-700" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">

          <div className="font-black text-sm truncate">
            {character?.name || "Unknown"}
          </div>

          <div className="text-[9px] text-neutral-600 uppercase tracking-widest mt-1 truncate">
            {character?.verse || "Unknown Verse"}
          </div>

          <div className="flex items-center gap-2 mt-2">

            <span className="px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[9px] text-neutral-400 font-black">
              {character?.role || "Versatility"}
            </span>

            <span
              className={`text-[10px] font-black ${getEdgeClass(
                probability,
                100 - Number(probability || 0)
              )}`}
            >
              {Number(probability || 0).toFixed(1)}%
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  label,
  left,
  right,
}) {
  const leftValue = Number(left || 0);
  const rightValue = Number(right || 0);

  return (
    <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">

      <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
        {label}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">

        <div
          className={
            leftValue > rightValue
              ? "font-black text-white"
              : "font-black text-neutral-500"
          }
        >
          {leftValue.toFixed(0)}
        </div>

        <div
          className={
            rightValue > leftValue
              ? "font-black text-white text-right"
              : "font-black text-neutral-500 text-right"
          }
        >
          {rightValue.toFixed(0)}
        </div>

      </div>
    </div>
  );
}

function MatrixRow({
  matchup,
  index,
  expanded,
  onToggle,
}) {
  const leftProbability = Number(
    matchup?.leftProbability || 0
  );

  const rightProbability = Number(
    matchup?.rightProbability || 0
  );

  const contested =
    Math.abs(
      leftProbability -
        rightProbability
    ) < 5;

  const winnerLabel =
    getWinnerLabel(matchup);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-black/60 overflow-hidden">

      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-4 hover:bg-white/[0.02] transition"
      >

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">

          <div className="min-w-0">
            <div className="font-black text-sm truncate">
              {matchup?.left?.name ||
                "Unknown"}
            </div>

            <div className="text-[9px] text-neutral-600 mt-1">
              {matchup?.left?.role ||
                "Versatility"}{" "}
              •{" "}
              {leftProbability.toFixed(1)}%
            </div>
          </div>

          <div className="flex flex-col items-center">

            <div
              className={`text-[9px] font-black uppercase tracking-widest ${
                contested
                  ? "text-yellow-400"
                  : "text-neutral-600"
              }`}
            >
              {contested
                ? "CONTESTED"
                : `#${index + 1}`}
            </div>

            <div className="text-[10px] text-neutral-700 font-black mt-1">
              VS
            </div>
          </div>

          <div className="min-w-0 text-right">
            <div className="font-black text-sm truncate">
              {matchup?.right?.name ||
                "Unknown"}
            </div>

            <div className="text-[9px] text-neutral-600 mt-1">
              {matchup?.right?.role ||
                "Versatility"}{" "}
              •{" "}
              {rightProbability.toFixed(1)}%
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">

          <div className="h-2 rounded-full bg-neutral-900 overflow-hidden">
            <div
              className="h-full rounded-full bg-white transition-all duration-700"
              style={{
                width: `${clamp(
                  leftProbability
                )}%`,
              }}
            />
          </div>

          <div className="h-2 rounded-full bg-neutral-900 overflow-hidden">
            <div
              className="h-full rounded-full bg-neutral-500 transition-all duration-700"
              style={{
                width: `${clamp(
                  rightProbability
                )}%`,
              }}
            />
          </div>

        </div>

        <div className="flex items-center justify-between mt-3">

          <span
            className={`text-[9px] uppercase tracking-widest font-black ${
              leftProbability >
              rightProbability
                ? "text-white"
                : "text-neutral-600"
            }`}
          >
            {leftProbability >
            rightProbability
              ? "Edge"
              : ""}
          </span>

          <span className="text-[9px] text-neutral-700 uppercase tracking-widest font-black">
            {winnerLabel}
          </span>

          <span
            className={`text-[9px] uppercase tracking-widest font-black ${
              rightProbability >
              leftProbability
                ? "text-white"
                : "text-neutral-600"
            }`}
          >
            {rightProbability >
            leftProbability
              ? "Edge"
              : ""}
          </span>

        </div>

      </button>


      {expanded && (
        <div className="border-t border-neutral-800 p-4 space-y-4">

          <div className="grid md:grid-cols-2 gap-3">

            <MatchupCharacter
              character={
                matchup.left
              }
              probability={
                leftProbability
              }
              favored={
                leftProbability >
                rightProbability
              }
            />

            <MatchupCharacter
              character={
                matchup.right
              }
              probability={
                rightProbability
              }
              favored={
                rightProbability >
                leftProbability
              }
            />

          </div>


          <div className="grid md:grid-cols-4 gap-3">

            <MiniStat
              label="Power"
              left={
                matchup.left?.power
              }
              right={
                matchup.right?.power
              }
            />

            <MiniStat
              label="Hax"
              left={
                matchup.left?.hax
              }
              right={
                matchup.right?.hax
              }
            />

            <MiniStat
              label="Speed"
              left={
                matchup.left?.speed
              }
              right={
                matchup.right?.speed
              }
            />

            <MiniStat
              label="Defense"
              left={
                matchup.left?.defense
              }
              right={
                matchup.right?.defense
              }
            />

          </div>


          <div className="grid md:grid-cols-2 gap-3">

            <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4">

              <div className="flex items-center gap-2 text-[9px] text-red-400 uppercase tracking-widest font-black">
                <Target className="w-3.5 h-3.5" />
                Role Advantage
              </div>

              <div className="mt-3 text-sm font-black">
                {Number(
                  matchup?.roleAdvantage
                    ?.left || 0
                ) > 0
                  ? `${matchup.left?.name} has the role advantage`
                  : Number(
                      matchup?.roleAdvantage
                        ?.left || 0
                    ) < 0
                  ? `${matchup.right?.name} has the role advantage`
                  : "No major role advantage"}
              </div>

            </div>


            <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4">

              <div className="flex items-center gap-2 text-[9px] text-yellow-400 uppercase tracking-widest font-black">
                <Crosshair className="w-3.5 h-3.5" />
                Battle Read
              </div>

              <div className="mt-3 text-sm font-black">
                {contested
                  ? "Highly contested matchup"
                  : leftProbability >
                    rightProbability
                  ? `${matchup.left?.name} has the stronger projected edge`
                  : `${matchup.right?.name} has the stronger projected edge`}
              </div>

            </div>

          </div>


          <div className="rounded-xl bg-red-950/10 border border-red-900/30 p-4">

            <div className="flex items-center gap-2 text-[9px] text-red-400 uppercase tracking-widest font-black">
              <Shield className="w-3.5 h-3.5" />
              Tactical Interpretation
            </div>

            <p className="text-xs text-neutral-400 leading-6 mt-3">
              {contested
                ? `${matchup.left?.name || "The first fighter"} and ${
                    matchup.right?.name ||
                    "the second fighter"
                  } are close enough that role interactions and tactical execution could determine the result.`
                : leftProbability >
                  rightProbability
                ? `${matchup.left?.name || "The first fighter"} has the stronger projected matchup through the combined combat model and role interaction.`
                : `${matchup.right?.name || "The second fighter"} has the stronger projected matchup through the combined combat model and role interaction.`}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default function AuctionBattleMatrix({
  battle,
  limit = 20,
}) {
  const [showAll, setShowAll] =
    useState(false);

  const [
    expandedIndex,
    setExpandedIndex,
  ] = useState(null);

  const matrix = useMemo(() => {
    if (
      !Array.isArray(
        battle?.matchupMatrix
      )
    ) {
      return [];
    }

    const copy = [
      ...battle.matchupMatrix,
    ];

    return copy.sort(
      (a, b) => {
        const aClose =
          Math.abs(
            Number(
              a.leftProbability || 0
            ) - 50
          );

        const bClose =
          Math.abs(
            Number(
              b.leftProbability || 0
            ) - 50
          );

        return aClose - bClose;
      }
    );
  }, [
    battle?.matchupMatrix,
  ]);

  if (!battle) {
    return null;
  }

  if (!matrix.length) {
    return (
      <section className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-6">
        <div className="flex items-center gap-2 text-neutral-500">
          <Swords className="w-4 h-4" />
          No matchup matrix available.
        </div>
      </section>
    );
  }

  const visibleMatrix = showAll
    ? matrix
    : matrix.slice(
        0,
        Math.min(limit, matrix.length)
      );

  const contestedCount =
    matrix.filter(
      matchup =>
        Math.abs(
          Number(
            matchup.leftProbability ||
              0
          ) -
            Number(
              matchup.rightProbability ||
                0
            )
        ) < 5
    ).length;

  const dominantCount =
    matrix.filter(
      matchup =>
        Math.abs(
          Number(
            matchup.leftProbability ||
              0
          ) -
            Number(
              matchup.rightProbability ||
                0
            )
        ) >= 25
    ).length;

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 p-5 md:p-7">

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-red-500/[0.03] via-transparent to-transparent" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">

          <div>

            <div className="flex items-center gap-2 text-red-400 text-[10px] uppercase tracking-[0.25em] font-black">
              <Crosshair className="w-4 h-4" />
              Tactical Matrix
            </div>

            <h2 className="text-2xl md:text-3xl font-black uppercase mt-2">
              Character
              <span className="text-red-500">
                {" "}Matchups
              </span>
            </h2>

            <p className="text-xs text-neutral-500 mt-2 max-w-2xl leading-5">
              Every available character pairing is evaluated
              through the deterministic combat model.
            </p>

          </div>


          {/* SUMMARY */}
          <div className="grid grid-cols-3 gap-2">

            <div className="rounded-xl border border-neutral-800 bg-black/70 px-3 py-2 text-center">
              <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                Pairings
              </div>

              <div className="font-black text-sm mt-1">
                {matrix.length}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/70 px-3 py-2 text-center">
              <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                Contested
              </div>

              <div className="font-black text-sm text-yellow-400 mt-1">
                {contestedCount}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/70 px-3 py-2 text-center">
              <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                Dominant
              </div>

              <div className="font-black text-sm text-red-400 mt-1">
                {dominantCount}
              </div>
            </div>

          </div>

        </div>


        {/* LEGEND */}
        <div className="flex flex-wrap gap-2 mt-6">

          <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-neutral-800 text-[9px] text-neutral-500 uppercase tracking-widest font-black flex items-center gap-2">
            <Zap className="w-3 h-3" />
            Projected edge
          </div>

          <div className="px-3 py-2 rounded-xl bg-yellow-950/20 border border-yellow-900/30 text-[9px] text-yellow-500 uppercase tracking-widest font-black">
            Contested &lt; 5%
          </div>

          <div className="px-3 py-2 rounded-xl bg-red-950/20 border border-red-900/30 text-[9px] text-red-400 uppercase tracking-widest font-black">
            Large advantage ≥ 25%
          </div>

        </div>


        {/* MATRIX */}
        <div className="space-y-3 mt-6">

          {visibleMatrix.map(
            (matchup, index) => (
              <MatrixRow
                key={`${matchup.left?.id || "left"}-${matchup.right?.id || "right"}-${index}`}
                matchup={matchup}
                index={index}
                expanded={
                  expandedIndex ===
                  index
                }
                onToggle={() =>
                  setExpandedIndex(
                    expandedIndex ===
                      index
                      ? null
                      : index
                  )
                }
              />
            )
          )}

        </div>


        {/* MORE */}
        {matrix.length > limit && (
          <button
            type="button"
            onClick={() =>
              setShowAll(
                value => !value
              )
            }
            className="w-full mt-5 py-3 rounded-xl border border-neutral-800 bg-black/60 hover:bg-neutral-900 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show All {matrix.length} Matchups
              </>
            )}
          </button>
        )}

      </div>
    </section>
  );
}