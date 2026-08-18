import React, {
  useMemo,
  useState,
} from "react";

import {
  ArrowLeft,
  Brain,
  Crown,
  Trophy,
  Swords,
  Target,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";

import {
  runAuctionChampionship,
  createChampionshipDossier,
} from "../engine/auctionChampionshipEngine";

import AuctionAIAnalysis from "../components/AuctionAIAnalysis";
import AuctionBattleCard from "../components/AuctionBattleCard";
import AuctionBattleStats from "../components/AuctionBattleStats";
import AuctionBattleMatrix from "../components/AuctionBattleMatrix";

import {
  adjudicateAuctionBattle,
} from "../ai/auctionBattleAI";

import {
  createAuctionBattleDossier,
} from "../engine/auctionBattleEngine";

import * as GeminiAPI from "../api/gemini";


/* =========================================================
   HELPERS
========================================================= */

function safeNumber(
  value,
  fallback = 0
) {
  const n = Number(value);

  return Number.isFinite(n)
    ? n
    : fallback;
}


function clamp(
  value,
  min = 0,
  max = 100
) {
  return Math.max(
    min,
    Math.min(
      max,
      safeNumber(value)
    )
  );
}


function normalizePlayers(
  players
) {
  return (
    Array.isArray(players)
      ? players
      : []
  ).map(
    (player, index) => ({
      ...player,

      id:
        player?.id ??
        `player-${index + 1}`,

      name:
        player?.name ||
        `Player ${index + 1}`,

      team:
        Array.isArray(
          player?.team
        )
          ? player.team
          : [],
    })
  );
}


/* =========================================================
   GEMINI ADAPTER
========================================================= */

async function requestGemini(
  prompt
) {
  const candidates = [
    GeminiAPI.askGemini,
    GeminiAPI.generateGeminiResponse,
    GeminiAPI.generateContent,
    GeminiAPI.callGemini,
    GeminiAPI.requestGemini,
    GeminiAPI.askAI,
    GeminiAPI.default,
  ];

  const fn =
    candidates.find(
      (candidate) =>
        typeof candidate ===
        "function"
    );

  if (!fn) {
    console.warn(
      "No Gemini function is exported from src/api/gemini.js"
    );

    return null;
  }

  try {
    return await fn(
      prompt
    );
  } catch (
    firstError
  ) {
    try {
      return await fn({
        prompt,
      });
    } catch (
      secondError
    ) {
      console.error(
        "Gemini adapter error:",
        secondError ||
          firstError
      );

      return null;
    }
  }
}


/* =========================================================
   GEMINI JSON PARSER
========================================================= */

function parseGeminiJSON(
  raw
) {
  if (
    raw &&
    typeof raw ===
      "object"
  ) {
    return raw;
  }

  const text =
    String(
      raw || ""
    ).trim();

  if (!text) {
    return null;
  }

  const codeBlock =
    text.match(
      /```(?:json)?\s*([\s\S]*?)```/i
    );

  const candidate =
    codeBlock?.[1] ||
    text;

  try {
    return JSON.parse(
      candidate
    );
  } catch {
    const first =
      candidate.indexOf(
        "{"
      );

    const last =
      candidate.lastIndexOf(
        "}"
      );

    if (
      first !== -1 &&
      last > first
    ) {
      try {
        return JSON.parse(
          candidate.slice(
            first,
            last + 1
          )
        );
      } catch {
        return null;
      }
    }
  }

  return null;
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AuctionBattle({
  players = [],
  onBack,
}) {
  const normalizedPlayers =
    useMemo(
      () =>
        normalizePlayers(
          players
        ),
      [players]
    );


  /* =======================================================
     CHAMPIONSHIP
  ======================================================= */

  const championshipResult =
    useMemo(
      () =>
        runAuctionChampionship(
          normalizedPlayers
        ),
      [normalizedPlayers]
    );

  const championship =
    championshipResult?.championship ||
    null;


  /* =======================================================
     STATE
  ======================================================= */

  const [
    selectedBattle,
    setSelectedBattle,
  ] = useState(null);

  const [
    selectedBattleAI,
    setSelectedBattleAI,
  ] = useState(null);

  const [
    aiLoading,
    setAiLoading,
  ] = useState(false);

  const [
    championshipAI,
    setChampionshipAI,
  ] = useState(null);

  const [
    championshipAILoading,
    setChampionshipAILoading,
  ] = useState(false);


  /* =======================================================
     BATTLES
  ======================================================= */

  const leagueBattles =
    championship?.league
      ?.battles ||
    [];

  const semifinalMatches =
    championship?.semifinals
      ?.matches ||
    [];

  const finalMatch =
    championship?.final ||
    null;


  /* =======================================================
     SELECTED BATTLE
  ======================================================= */

  const battleForDisplay =
    useMemo(
      () => {
        if (
          selectedBattle
        ) {
          return selectedBattle;
        }

        if (
          leagueBattles.length
        ) {
          return leagueBattles[0];
        }

        return null;
      },
      [
        selectedBattle,
        leagueBattles,
      ]
    );


  /* =======================================================
     ANALYZE BATTLE
  ======================================================= */

  async function analyzeBattle(
    battle
  ) {
    if (!battle) {
      return;
    }

    setSelectedBattle(
      battle
    );

    setSelectedBattleAI(
      null
    );

    setAiLoading(
      true
    );

    try {
      const leftId =
        battle.players
          ?.left?.id;

      const rightId =
        battle.players
          ?.right?.id;

      const leftPlayer =
        normalizedPlayers.find(
          (player) =>
            player.id ===
            leftId
        );

      const rightPlayer =
        normalizedPlayers.find(
          (player) =>
            player.id ===
            rightId
        );

      if (
        !leftPlayer ||
        !rightPlayer
      ) {
        throw new Error(
          "Battle participants could not be found."
        );
      }


      /*
        IMPORTANT:

        The deterministic engine already
        contains the player-selected roles,
        role efficiency, strategic blunders,
        team statistics and matchup evidence.

        We package that evidence explicitly
        before asking Gemini to interpret it.
      */

      const battleDossier =
        createAuctionBattleDossier(
          battle
        );


      /*
        Support both the old and new
        adjudicator signatures.

        New preferred form:

        adjudicateAuctionBattle(
          leftPlayer,
          rightPlayer,
          requestGemini,
          battleDossier
        )
      */

      let verdict;

      try {
        verdict =
          await adjudicateAuctionBattle(
            leftPlayer,
            rightPlayer,
            requestGemini,
            battleDossier
          );
      } catch (
        firstError
      ) {
        console.warn(
          "Primary battle adjudicator call failed, retrying legacy signature:",
          firstError
        );

        verdict =
          await adjudicateAuctionBattle(
            leftPlayer,
            rightPlayer,
            requestGemini
          );
      }


      setSelectedBattleAI(
        verdict || {
          success: false,
          source: "fallback",
          winner: "DRAW",
          confidence: 0,
          verdict:
            "The battle engine completed, but no AI verdict was returned.",
          summary:
            "No Gemini adjudication was available.",
          decisiveFactors: [],
          strategicMistakes: [],
          roleAssignments: [],
          keyMatchups: [],
          recommendations: [],
        }
      );
    } catch (
      error
    ) {
      console.error(
        "Auction Battle AI error:",
        error
      );

      setSelectedBattleAI({
        success: false,

        source:
          "error",

        winner:
          "DRAW",

        confidence:
          0,

        verdict:
          "The tactical engine completed the battle, but AI adjudication was unavailable.",

        summary:
          error?.message ||
          "Gemini analysis failed.",

        decisiveFactors: [],

        strategicMistakes: [],

        roleAssignments: [],

        keyMatchups: [],

        recommendations: [],
      });
    } finally {
      setAiLoading(
        false
      );
    }
  }


  /* =======================================================
     CHAMPIONSHIP AI
  ======================================================= */

  async function analyzeChampionship() {
    if (
      !championship
    ) {
      return;
    }

    setChampionshipAILoading(
      true
    );

    try {
      const dossier =
        createChampionshipDossier(
          championshipResult
        );

      const prompt = `
You are the final championship adjudicator for Anime Arena.

Use ONLY the supplied championship dossier.

CRITICAL RULES:

1. Players chose the roles of their purchased characters.
2. Never change or invent a player's role assignment.
3. Never invent abilities, feats, forms, statistics, matchup results or events.
4. Treat the deterministic engine as the evidence source.
5. Gemini's job is interpretation, not simulation.
6. A poor role assignment can count as a strategic mistake.
7. A strong role assignment can count as a strategic advantage.
8. Consider purchase decisions, assigned roles, team composition, matchup performance and consistency.
9. Do not declare someone champion merely because they have the strongest individual character.
10. Evaluate the complete championship performance.

Evaluate:

- league consistency
- head-to-head results
- semifinal performance
- final performance
- role efficiency
- player role decisions
- strategic mistakes
- team synergy
- team coverage
- team balance
- matchup quality
- consistency under pressure
- efficient use of purchased characters

Return ONLY valid JSON:

{
  "champion": "PLAYER NAME",
  "confidence": 0,
  "summary": "why the champion deserves the title",
  "decisiveFactors": [
    "factor 1",
    "factor 2",
    "factor 3"
  ],
  "biggestChampionshipMistake": {
    "player": "PLAYER NAME",
    "explanation": "reason"
  },
  "bestStrategicPlayer": "PLAYER NAME",
  "underdog": "PLAYER NAME",
  "finalStatement": "final adjudication"
}

Championship dossier:

${JSON.stringify(
  dossier,
  null,
  2
)}
`;

      const raw =
        await requestGemini(
          prompt
        );

      const parsed =
        parseGeminiJSON(
          raw
        );

      if (
        !parsed
      ) {
        throw new Error(
          "Gemini returned an invalid championship response."
        );
      }

      setChampionshipAI({
        success: true,

        source:
          "gemini",

        champion:
          parsed.champion ||
          championship.champion
            ?.name ||
          "Unknown",

        confidence:
          clamp(
            parsed.confidence
          ),

        summary:
          parsed.summary ||
          "",

        decisiveFactors:
          Array.isArray(
            parsed.decisiveFactors
          )
            ? parsed.decisiveFactors
            : [],

        biggestChampionshipMistake:
          parsed.biggestChampionshipMistake ||
          null,

        bestStrategicPlayer:
          parsed.bestStrategicPlayer ||
          null,

        underdog:
          parsed.underdog ||
          null,

        finalStatement:
          parsed.finalStatement ||
          "",
      });
    } catch (
      error
    ) {
      console.error(
        "Championship AI error:",
        error
      );

      setChampionshipAI({
        success: false,

        source:
          "deterministic-fallback",

        champion:
          championship
            ?.champion
            ?.name ||
          "Unknown",

        confidence:
          100,

        summary:
          "The deterministic championship engine determined the winner from league performance, knockout results, tactical performance, role efficiency and team evidence.",

        decisiveFactors: [
          "Championship bracket result",
          "League performance",
          "Tactical team performance",
          "Role efficiency",
        ],

        biggestChampionshipMistake:
          null,

        bestStrategicPlayer:
          championship
            ?.leaderboard?.[0]
            ?.playerName ||
          null,

        underdog:
          championship
            ?.leaderboard?.[
              championship
                ?.leaderboard
                ?.length - 1
            ]
            ?.playerName ||
          null,

        finalStatement:
          `${championship?.champion?.name || "The winning player"} is the deterministic Auction Championship winner.`,
      });
    } finally {
      setChampionshipAILoading(
        false
      );
    }
  }


  /* =======================================================
     INVALID STATE
  ======================================================= */

  if (
    !championshipResult?.success ||
    !championship
  ) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white p-6">
        <div className="max-w-4xl mx-auto">

          <button
            type="button"
            onClick={
              onBack
            }
            className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-bold mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="rounded-3xl border border-red-900 bg-black/80 p-8">

            <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />

            <h1 className="text-2xl font-black">
              Auction Battle Cannot Start
            </h1>

            <div className="mt-4 space-y-2 text-sm text-neutral-400">

              {(
                championshipResult?.errors ||
                [
                  "Unknown championship error.",
                ]
              ).map(
                (
                  error,
                  index
                ) => (
                  <div
                    key={index}
                  >
                    • {String(error)}
                  </div>
                )
              )}

            </div>
          </div>
        </div>
      </main>
    );
  }


  /* =======================================================
     CHAMPION
  ======================================================= */

  const champion =
    championship.champion;


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">

        {/* =================================================
           HEADER
        ================================================= */}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

          <div>

            <button
              type="button"
              onClick={
                onBack
              }
              className="flex items-center gap-2 text-neutral-500 hover:text-white text-xs font-black uppercase tracking-widest mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Auction
            </button>

            <div className="flex items-center gap-3">

              <div className="p-3 rounded-2xl bg-red-600">
                <Swords className="w-7 h-7 text-black" />
              </div>

              <div>

                <div className="text-xs text-red-400 font-black uppercase tracking-[0.25em]">
                  Auction Battle
                </div>

                <h1 className="text-3xl md:text-5xl font-black uppercase">
                  Championship
                </h1>

              </div>

            </div>

            <p className="text-sm text-neutral-500 mt-3">
              {championship.format?.name ||
                "Multi-stage Auction Championship"}
            </p>

          </div>


          <div className="flex flex-wrap gap-2">

            <button
              type="button"
              onClick={
                analyzeChampionship
              }
              disabled={
                championshipAILoading
              }
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-40 text-black font-black text-sm flex items-center gap-2"
            >
              <Brain className="w-4 h-4" />

              {championshipAILoading
                ? "AI Judging..."
                : "Gemini Championship Verdict"}

            </button>

          </div>

        </div>


        {/* =================================================
           CHAMPION HERO
        ================================================= */}

        {champion && (
          <section className="relative overflow-hidden rounded-[2rem] border border-yellow-700 bg-gradient-to-br from-yellow-950/40 via-black to-red-950/30 p-6 md:p-8 mb-8">

            <div className="absolute top-0 right-0 opacity-10">
              <Crown className="w-56 h-56" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">

              <div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-700 bg-yellow-950/50 text-yellow-300 text-[10px] font-black uppercase tracking-[0.25em]">

                  <Trophy className="w-4 h-4" />

                  Auction Champion

                </div>

                <h2 className="text-5xl md:text-7xl font-black mt-5">
                  {champion.name}
                </h2>

                <p className="text-neutral-400 mt-3 max-w-2xl">
                  The championship bracket has been resolved using the deterministic Auction Battle Engine.
                </p>

              </div>

              <div className="rounded-3xl border border-yellow-800 bg-black/60 p-5 min-w-[210px]">

                <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
                  Champion
                </div>

                <div className="text-2xl font-black text-yellow-300 mt-1">
                  {champion.name}
                </div>

                <div className="text-xs text-neutral-500 mt-3">
                  Championship complete
                </div>

              </div>

            </div>

          </section>
        )}


        {/* =================================================
           GEMINI CHAMPIONSHIP VERDICT
        ================================================= */}

        {championshipAI && (
          <section className="rounded-3xl border border-red-900/60 bg-black/70 p-6 mb-8">

            <div className="flex items-start gap-4">

              <div className="p-3 rounded-xl bg-red-600">
                <Brain className="w-6 h-6 text-black" />
              </div>

              <div className="flex-1">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>

                    <div className="text-[10px] text-red-400 font-black uppercase tracking-widest">
                      Gemini Adjudication
                    </div>

                    <h2 className="text-2xl font-black mt-1">
                      {championshipAI.champion}
                    </h2>

                  </div>

                  <div className="px-3 py-2 rounded-xl border border-red-800 bg-red-950/30 text-red-300 text-xs font-black">
                    {Math.round(
                      championshipAI.confidence
                    )}% Confidence
                  </div>

                </div>

                <p className="text-sm text-neutral-300 leading-7 mt-4">
                  {championshipAI.summary}
                </p>

                {championshipAI.decisiveFactors?.length > 0 && (
                  <div className="mt-5 grid md:grid-cols-3 gap-3">

                    {championshipAI.decisiveFactors.map(
                      (
                        factor,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                          className="rounded-xl bg-neutral-950 border border-neutral-800 p-4"
                        >

                          <div className="text-[9px] uppercase text-neutral-600 font-black">
                            Factor {index + 1}
                          </div>

                          <div className="text-xs font-bold text-neutral-300 mt-2">
                            {String(factor)}
                          </div>

                        </div>
                      )
                    )}

                  </div>
                )}

                {championshipAI.bestStrategicPlayer && (
                  <div className="mt-5 rounded-2xl border border-green-900 bg-green-950/10 p-4">

                    <div className="text-[9px] text-green-400 uppercase tracking-widest font-black">
                      Best Strategic Player
                    </div>

                    <div className="text-sm font-black mt-1">
                      {championshipAI.bestStrategicPlayer}
                    </div>

                  </div>
                )}

                {championshipAI.underdog && (
                  <div className="mt-3 rounded-2xl border border-blue-900 bg-blue-950/10 p-4">

                    <div className="text-[9px] text-blue-400 uppercase tracking-widest font-black">
                      Underdog
                    </div>

                    <div className="text-sm font-black mt-1">
                      {championshipAI.underdog}
                    </div>

                  </div>
                )}

                {championshipAI.biggestChampionshipMistake && (
                  <div className="mt-5 rounded-2xl border border-red-900 bg-red-950/20 p-4">

                    <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest">

                      <AlertTriangle className="w-4 h-4" />

                      Biggest Championship Mistake

                    </div>

                    <div className="text-sm font-black mt-2">

                      {
                        championshipAI
                          .biggestChampionshipMistake
                          .player
                      }

                    </div>

                    <p className="text-xs text-neutral-400 mt-2 leading-6">

                      {
                        championshipAI
                          .biggestChampionshipMistake
                          .explanation
                      }

                    </p>

                  </div>
                )}

                {championshipAI.finalStatement && (
                  <div className="mt-5 pt-5 border-t border-neutral-800">

                    <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
                      Final Judge Statement
                    </div>

                    <p className="text-sm text-neutral-200 mt-2 leading-7">
                      {championshipAI.finalStatement}
                    </p>

                  </div>
                )}

              </div>

            </div>

          </section>
        )}


        {/* =================================================
           LEADERBOARD
        ================================================= */}

        <section className="mb-8">

          <div className="flex items-center gap-2 mb-4">

            <Trophy className="w-5 h-5 text-yellow-400" />

            <h2 className="text-xl font-black">
              Championship Leaderboard
            </h2>

          </div>

          <div className="space-y-3">

            {(
              championship
                .leaderboard ||
              []
            ).map(
              (
                player,
                index
              ) => (
                <div
                  key={
                    player.playerId
                  }
                  className={`rounded-2xl border p-4 ${
                    index === 0
                      ? "border-yellow-700 bg-yellow-950/20"
                      : "border-neutral-800 bg-black/70"
                  }`}
                >

                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">

                    <div className="flex items-center gap-4 min-w-[250px]">

                      <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-black">

                        {player.rank ||
                          player.championshipRank ||
                          index + 1}

                      </div>

                      <div>

                        <div className="font-black">
                          {player.playerName}
                        </div>

                        <div className="text-[10px] text-neutral-600">
                          League Rank #
                          {player.leagueRank || "—"}
                        </div>

                      </div>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 flex-1">

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          Points
                        </div>

                        <div className="font-black mt-1">
                          {player.points}
                        </div>

                      </div>

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          W
                        </div>

                        <div className="font-black mt-1 text-green-400">
                          {player.wins}
                        </div>

                      </div>

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          L
                        </div>

                        <div className="font-black mt-1 text-red-400">
                          {player.losses}
                        </div>

                      </div>

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          Tactical
                        </div>

                        <div className="font-black mt-1">
                          {Math.round(
                            safeNumber(
                              player.tacticalScore
                            )
                          )}
                        </div>

                      </div>

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          Roles
                        </div>

                        <div className="font-black mt-1">
                          {Math.round(
                            safeNumber(
                              player.roleEfficiency
                            )
                          )}
                        </div>

                      </div>

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          Synergy
                        </div>

                        <div className="font-black mt-1">
                          {Math.round(
                            safeNumber(
                              player.synergy
                            )
                          )}
                        </div>

                      </div>

                      <div className="bg-neutral-950 rounded-xl p-3">

                        <div className="text-[9px] text-neutral-600 uppercase">
                          Errors
                        </div>

                        <div className="font-black mt-1 text-orange-400">
                          {player.strategicBlunders}
                        </div>

                      </div>

                    </div>

                    <div className="text-right min-w-[110px]">

                      <div className="text-[9px] text-neutral-600 uppercase">
                        Championship
                      </div>

                      <div className="text-2xl font-black text-red-400">
                        {Math.round(
                          safeNumber(
                            player.championshipScore
                          )
                        )}
                      </div>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </section>


        {/* =================================================
           LEAGUE BATTLES
        ================================================= */}

        {leagueBattles.length > 0 && (
          <section className="mb-8">

            <div className="flex items-center gap-2 mb-4">

              <Swords className="w-5 h-5 text-red-500" />

              <h2 className="text-xl font-black">
                League Battles
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-3">

              {leagueBattles.map(
                (
                  battle,
                  index
                ) => {

                  const leftName =
                    battle.players
                      ?.left
                      ?.name ||
                    "Player 1";

                  const rightName =
                    battle.players
                      ?.right
                      ?.name ||
                    "Player 2";

                  const leftId =
                    battle.players
                      ?.left
                      ?.id;

                  const rightId =
                    battle.players
                      ?.right
                      ?.id;

                  const leftProbability =
                    safeNumber(
                      battle.probability?.[
                        leftId
                      ],
                      50
                    );

                  const rightProbability =
                    safeNumber(
                      battle.probability?.[
                        rightId
                      ],
                      50
                    );

                  return (
                    <button
                      type="button"
                      key={
                        `${leftId}-${rightId}-${index}`
                      }
                      onClick={() =>
                        analyzeBattle(
                          battle
                        )
                      }
                      className="text-left rounded-2xl border border-neutral-800 bg-black/70 hover:border-red-700 p-4 transition"
                    >

                      <div className="flex items-center justify-between">

                        <div className="text-[9px] text-neutral-600 uppercase tracking-widest">
                          Battle {index + 1}
                        </div>

                        <span className="text-[9px] text-red-400 font-black">
                          {String(
                            battle.battleTier ||
                              "BATTLE"
                          ).replaceAll(
                            "_",
                            " "
                          )}
                        </span>

                      </div>

                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-4">

                        <div>

                          <div className="font-black">
                            {leftName}
                          </div>

                          <div className="text-xs text-neutral-500 mt-1">
                            {Math.round(
                              leftProbability
                            )}%
                          </div>

                        </div>

                        <div className="text-xs text-neutral-700 font-black">
                          VS
                        </div>

                        <div className="text-right">

                          <div className="font-black">
                            {rightName}
                          </div>

                          <div className="text-xs text-neutral-500 mt-1">
                            {Math.round(
                              rightProbability
                            )}%
                          </div>

                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-4">

                        <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600"
                            style={{
                              width:
                                `${clamp(
                                  leftProbability
                                )}%`,
                            }}
                          />
                        </div>

                        <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-neutral-600"
                            style={{
                              width:
                                `${clamp(
                                  rightProbability
                                )}%`,
                            }}
                          />
                        </div>

                      </div>

                      <div className="text-[10px] text-neutral-600 mt-3">
                        Click to open full tactical analysis
                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </section>
        )}


        {/* =================================================
           SEMIFINALS
        ================================================= */}

        {semifinalMatches.length > 0 && (
          <section className="mb-8">

            <div className="flex items-center gap-2 mb-4">

              <Target className="w-5 h-5 text-orange-400" />

              <h2 className="text-xl font-black">
                Semifinals
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-4">

              {semifinalMatches.map(
                (
                  match
                ) => {

                  const battle =
                    match?.battle;

                  const left =
                    match?.playerA;

                  const right =
                    match?.playerB;

                  return (
                    <button
                      type="button"
                      key={
                        match.id
                      }
                      disabled={!battle}
                      onClick={() =>
                        battle &&
                        analyzeBattle(
                          battle
                        )
                      }
                      className="text-left rounded-2xl border border-orange-900/50 bg-orange-950/10 hover:border-orange-500 disabled:opacity-40 p-5"
                    >

                      <div className="text-[9px] text-orange-400 uppercase tracking-widest font-black">
                        Semifinal {match.slot}
                      </div>

                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-4">

                        <div>
                          <div className="font-black">
                            {left?.name ||
                              "Player A"}
                          </div>
                        </div>

                        <div className="text-xs font-black text-neutral-700">
                          VS
                        </div>

                        <div className="text-right">

                          <div className="font-black">
                            {right?.name ||
                              "Player B"}
                          </div>

                        </div>

                      </div>

                      <div className="mt-4 text-sm font-black text-yellow-400">
                        Winner:{" "}
                        {match.winner?.name ||
                          "Pending"}
                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </section>
        )}


        {/* =================================================
           FINAL
        ================================================= */}

        {finalMatch && (
          <section className="mb-8">

            <div className="flex items-center gap-2 mb-4">

              <Crown className="w-5 h-5 text-yellow-400" />

              <h2 className="text-xl font-black">
                Grand Final
              </h2>

            </div>

            <button
              type="button"
              disabled={
                !finalMatch.battle
              }
              onClick={() =>
                finalMatch.battle &&
                analyzeBattle(
                  finalMatch.battle
                )
              }
              className="w-full text-left rounded-3xl border border-yellow-700 bg-yellow-950/10 hover:border-yellow-500 disabled:opacity-40 p-6"
            >

              <div className="text-[10px] text-yellow-400 uppercase tracking-[0.25em] font-black">
                Championship Final
              </div>

              <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 mt-6">

                <div className="rounded-2xl border border-neutral-800 bg-black/60 p-5">

                  <div className="text-[10px] text-neutral-600 uppercase">
                    Finalist
                  </div>

                  <div className="text-2xl font-black mt-2">
                    {
                      finalMatch
                        .playerA
                        ?.name ||
                      "Player A"
                    }
                  </div>

                </div>

                <div className="text-center">

                  <div className="text-sm font-black text-neutral-600">
                    VS
                  </div>

                  <div className="mt-2 text-yellow-400 font-black">
                    {finalMatch.winner?.name ||
                      "Completed"}
                  </div>

                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black/60 p-5 md:text-right">

                  <div className="text-[10px] text-neutral-600 uppercase">
                    Finalist
                  </div>

                  <div className="text-2xl font-black mt-2">
                    {
                      finalMatch
                        .playerB
                        ?.name ||
                      "Player B"
                    }
                  </div>

                </div>

              </div>

            </button>

          </section>
        )}


        {/* =================================================
           SELECTED BATTLE ANALYSIS
        ================================================= */}

        {battleForDisplay && (
          <section className="mb-8">

            <div className="flex items-center gap-2 mb-5">

              <Swords className="w-5 h-5 text-red-500" />

              <div>

                <h2 className="text-xl font-black">
                  Tactical Battle Analysis
                </h2>

                <p className="text-[10px] text-neutral-600 mt-1">
                  Deterministic engine evidence + Gemini interpretation
                </p>

              </div>

            </div>


            <AuctionBattleCard
              battle={
                battleForDisplay
              }
              players={
                normalizedPlayers
              }
            />


            <div className="mt-5">

              <AuctionBattleStats
                battle={
                  battleForDisplay
                }

              />

            </div>


            <div className="mt-5">

              <AuctionBattleMatrix
                battle={
                  battleForDisplay
                }

              />

            </div>


            <div className="mt-5 flex justify-end">

              <button
                type="button"
                onClick={() =>
                  analyzeBattle(
                    battleForDisplay
                  )
                }
                disabled={
                  aiLoading
                }
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-40 text-black font-black text-sm flex items-center gap-2"
              >

                <Brain className="w-4 h-4" />

                {aiLoading
                  ? "AI Analyzing..."
                  : "Run Gemini Tactical Verdict"}

              </button>

            </div>

          </section>
        )}


        {/* =================================================
           AI BATTLE VERDICT
        ================================================= */}

        {selectedBattleAI && (
          <div className="mb-8">

            <AuctionAIAnalysis
              verdict={
                selectedBattleAI
              }
              battle={
                battleForDisplay
              }

            />

          </div>
        )}


        {/* =================================================
           RESET / BACK
        ================================================= */}

        <div className="flex flex-col sm:flex-row gap-3 pb-10">

          <button
            type="button"
            onClick={
              onBack
            }
            className="flex-1 py-4 rounded-2xl border border-neutral-800 bg-black/70 hover:border-red-700 font-black flex items-center justify-center gap-2"
          >

            <ArrowLeft className="w-4 h-4" />

            Back to Auction

          </button>

          <button
            type="button"
            onClick={() => {

              setSelectedBattle(
                null
              );

              setSelectedBattleAI(
                null
              );

              setChampionshipAI(
                null
              );

            }}
            className="flex-1 py-4 rounded-2xl border border-neutral-800 bg-black/70 hover:border-red-700 font-black flex items-center justify-center gap-2"
          >

            <RotateCcw className="w-4 h-4" />

            Clear Analysis

          </button>

        </div>

      </div>

    </main>
  );
}