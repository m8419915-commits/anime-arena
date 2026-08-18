import React from "react";

import {
  Brain,
  Crown,
  AlertTriangle,
  Target,
  Shield,
  Zap,
  Lightbulb,
  Swords,
  CheckCircle2,
  XCircle,
  Minus,
  BarChart3,
} from "lucide-react";


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


/*
  React cannot render raw objects.

  Gemini / the battle engine may return:
  
  {
    type,
    severity,
    role,
    count,
    explanation
  }

  This helper safely converts ANY
  supported value into readable text.
*/

function renderSafeText(
  value
) {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  if (
    typeof value ===
      "string" ||
    typeof value ===
      "number"
  ) {
    return String(value);
  }

  if (
    typeof value ===
    "boolean"
  ) {
    return value
      ? "Yes"
      : "No";
  }

  if (
    Array.isArray(value)
  ) {
    return value
      .map(
        (item) =>
          renderSafeText(
            item
          )
      )
      .filter(Boolean)
      .join(" • ");
  }

  if (
    typeof value ===
    "object"
  ) {
    /*
      Prefer human-readable fields
      when available.
    */

    if (
      typeof value.explanation ===
      "string"
    ) {
      return value.explanation;
    }

    if (
      typeof value.reason ===
      "string"
    ) {
      return value.reason;
    }

    if (
      typeof value.text ===
      "string"
    ) {
      return value.text;
    }

    if (
      typeof value.summary ===
      "string"
    ) {
      return value.summary;
    }

    return Object.entries(
      value
    )
      .map(
        ([
          key,
          item,
        ]) => {
          const text =
            renderSafeText(
              item
            );

          if (!text) {
            return "";
          }

          return `${key}: ${text}`;
        }
      )
      .filter(Boolean)
      .join(" • ");
  }

  return String(value);
}


function getConfidenceLabel(
  confidence
) {
  const value =
    clamp(
      confidence
    );

  if (
    value >= 85
  ) {
    return "Very High";
  }

  if (
    value >= 70
  ) {
    return "High";
  }

  if (
    value >= 55
  ) {
    return "Moderate";
  }

  return "Low";
}


/* =========================================================
   CONFIDENCE RING
========================================================= */

function ConfidenceRing({
  value,
}) {
  const confidence =
    clamp(value);

  const circumference =
    251.2;

  const offset =
    circumference -
    (
      circumference *
      confidence
    ) /
      100;

  return (
    <div className="relative w-24 h-24 shrink-0">

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full -rotate-90"
      >

        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-neutral-800"
        />

        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={
            circumference
          }
          strokeDashoffset={
            offset
          }
          className="text-red-500 transition-all duration-700"
        />

      </svg>


      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <span className="text-xl font-black">
          {Math.round(
            confidence
          )}
          %
        </span>

        <span className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
          Confidence
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   FACTOR CARD
========================================================= */

function FactorCard({
  index,
  text,
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4">

      <div className="flex items-start gap-3">

        <div className="w-7 h-7 rounded-lg bg-red-950 border border-red-900 flex items-center justify-center text-[10px] font-black text-red-400 shrink-0">
          {index + 1}
        </div>


        <p className="text-xs text-neutral-300 leading-6">
          {renderSafeText(
            text
          )}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   ROLE DECISION CARD
========================================================= */

function RoleDecisionCard({
  item,
}) {
  const safeItem =
    item &&
    typeof item ===
      "object"
      ? item
      : {};

  const compatibility =
    clamp(
      safeItem.compatibility
    );


  let tone =
    "border-neutral-800 bg-neutral-950";

  let icon =
    <Minus className="w-4 h-4 text-neutral-500" />;


  if (
    compatibility >=
    85
  ) {
    tone =
      "border-green-800 bg-green-950/20";

    icon =
      <CheckCircle2 className="w-4 h-4 text-green-400" />;
  } else if (
    compatibility >=
    70
  ) {
    tone =
      "border-blue-800 bg-blue-950/20";

    icon =
      <CheckCircle2 className="w-4 h-4 text-blue-400" />;
  } else if (
    compatibility >=
    50
  ) {
    tone =
      "border-yellow-800 bg-yellow-950/20";

    icon =
      <AlertTriangle className="w-4 h-4 text-yellow-400" />;
  } else {
    tone =
      "border-red-800 bg-red-950/20";

    icon =
      <XCircle className="w-4 h-4 text-red-400" />;
  }


  return (
    <div
      className={`rounded-2xl border p-4 ${tone}`}
    >

      <div className="flex items-center justify-between gap-3">

        <div className="min-w-0">

          <div className="font-black text-sm truncate">
            {renderSafeText(
              safeItem.character ||
                "Unknown Character"
            )}
          </div>

          <div className="text-[9px] text-neutral-600 mt-1">
            {renderSafeText(
              safeItem.player ||
                ""
            )}
          </div>

        </div>

        {icon}

      </div>


      <div className="grid grid-cols-2 gap-2 mt-4">

        <div className="rounded-xl bg-black/40 p-3">

          <div className="text-[8px] uppercase tracking-widest text-neutral-600">
            Natural
          </div>

          <div className="text-xs font-black mt-1">
            {renderSafeText(
              safeItem.naturalRole ||
                "Unknown"
            )}
          </div>

        </div>


        <div className="rounded-xl bg-black/40 p-3">

          <div className="text-[8px] uppercase tracking-widest text-neutral-600">
            Assigned
          </div>

          <div className="text-xs font-black mt-1">
            {renderSafeText(
              safeItem.assignedRole ||
                "Unknown"
            )}
          </div>

        </div>

      </div>


      <div className="mt-3">

        <div className="flex justify-between text-[9px] mb-1">

          <span className="text-neutral-600 uppercase tracking-widest">
            Compatibility
          </span>

          <span className="font-black">
            {Math.round(
              compatibility
            )}
            %
          </span>

        </div>


        <div className="h-1.5 rounded-full bg-black/60 overflow-hidden">

          <div
            className={`h-full ${
              compatibility >=
              85
                ? "bg-green-500"
                : compatibility >=
                  70
                ? "bg-blue-500"
                : compatibility >=
                  50
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{
              width:
                `${compatibility}%`,
            }}
          />

        </div>

      </div>


      <div className="text-[9px] mt-2 uppercase tracking-widest font-black opacity-70">
        {renderSafeText(
          safeItem.assessment ||
            "Neutral"
        )}
      </div>

    </div>
  );
}


/* =========================================================
   MISTAKE CARD
========================================================= */

function MistakeCard({
  mistake,
}) {
  const safeMistake =
    mistake &&
    typeof mistake ===
      "object"
      ? mistake
      : {
          explanation:
            mistake,
        };


  const severity =
    clamp(
      safeMistake.severity,
      0,
      10
    );


  return (
    <div className="rounded-2xl border border-orange-900/50 bg-orange-950/10 p-4">

      <div className="flex items-start gap-3">

        <div className="p-2 rounded-xl bg-orange-950 border border-orange-900 shrink-0">
          <AlertTriangle className="w-4 h-4 text-orange-400" />
        </div>


        <div className="flex-1">

          <div className="flex flex-wrap items-center justify-between gap-2">

            <div>

              <div className="text-xs font-black">
                {renderSafeText(
                  safeMistake.player ||
                    "Unknown Player"
                )}
              </div>

              <div className="text-[9px] text-orange-400 uppercase tracking-widest mt-1 font-black">
                {renderSafeText(
                  safeMistake.type ||
                    "Strategic Mistake"
                )}
              </div>

            </div>


            {safeMistake.severity !==
              undefined && (
              <div className="text-[10px] font-black text-orange-400">
                {Math.round(
                  severity
                )}
                /10
              </div>
            )}

          </div>


          {safeMistake.role && (
            <div className="text-[9px] text-neutral-600 mt-2">
              Role involved:{" "}
              <span className="text-neutral-400 font-bold">
                {renderSafeText(
                  safeMistake.role
                )}
              </span>
            </div>
          )}


          {safeMistake.count !==
            undefined && (
            <div className="text-[9px] text-neutral-600 mt-1">
              Occurrences:{" "}
              <span className="text-neutral-400 font-bold">
                {renderSafeText(
                  safeMistake.count
                )}
              </span>
            </div>
          )}


          <p className="text-xs text-neutral-400 leading-6 mt-3">
            {renderSafeText(
              safeMistake.explanation ||
                safeMistake.reason ||
                safeMistake.text ||
                safeMistake
            )}
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   KEY MATCHUP CARD
========================================================= */

function KeyMatchupCard({
  matchup,
}) {
  const safeMatchup =
    matchup &&
    typeof matchup ===
      "object"
      ? matchup
      : {
          reason:
            matchup,
        };


  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">

      <div className="flex items-start gap-4">

        <div className="w-8 h-8 rounded-lg bg-red-950 border border-red-900 flex items-center justify-center shrink-0">
          <Swords className="w-4 h-4 text-red-400" />
        </div>


        <div className="flex-1 min-w-0">

          <div className="text-sm font-black">
            {renderSafeText(
              safeMatchup.winner ||
                safeMatchup.result ||
                "DRAW"
            )}
          </div>


          <div className="text-[10px] text-neutral-600 mt-1">
            {renderSafeText(
              safeMatchup.role ||
                safeMatchup.matchup ||
                ""
            )}
          </div>


          <p className="text-xs text-neutral-400 leading-6 mt-2">
            {renderSafeText(
              safeMatchup.reason ||
                safeMatchup.explanation ||
                safeMatchup
            )}
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   RECOMMENDATION CARD
========================================================= */

function RecommendationCard({
  recommendation,
  index,
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 flex items-start gap-3">

      <div className="w-7 h-7 rounded-lg bg-yellow-950 border border-yellow-900 flex items-center justify-center shrink-0">

        <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />

      </div>


      <div className="flex-1">

        <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
          Lesson {index + 1}
        </div>

        <p className="text-xs text-neutral-300 leading-6 mt-1">
          {renderSafeText(
            recommendation
          )}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AuctionAIAnalysis({
  verdict,
  battle = null,
  compact = false,
}) {
  if (!verdict) {
    return null;
  }


  const confidence =
    clamp(
      verdict.confidence
    );


  const isDraw =
    String(
      verdict.winner ||
        ""
    ).toUpperCase() ===
    "DRAW";


  const isGemini =
    verdict.source ===
    "gemini";


  const mistakes =
    Array.isArray(
      verdict.strategicMistakes
    )
      ? verdict.strategicMistakes
      : [];


  const roleAssignments =
    Array.isArray(
      verdict.roleAssignments
    )
      ? verdict.roleAssignments
      : [];


  const factors =
    Array.isArray(
      verdict.decisiveFactors
    )
      ? verdict.decisiveFactors
      : [];


  const recommendations =
    Array.isArray(
      verdict.recommendations
    )
      ? verdict.recommendations
      : [];


  const keyMatchups =
    Array.isArray(
      verdict.keyMatchups
    )
      ? verdict.keyMatchups
      : [];


  /* =======================================================
     COMPACT
  ======================================================= */

  if (
    compact
  ) {
    return (
      <section className="rounded-2xl border border-red-900/60 bg-black/80 p-5">

        <div className="flex items-start gap-4">

          <div className="p-3 rounded-xl bg-red-600 shrink-0">

            <Brain className="w-5 h-5 text-black" />

          </div>


          <div className="flex-1 min-w-0">

            <div className="text-[9px] text-red-400 font-black uppercase tracking-widest">
              AI Verdict
            </div>


            <div className="flex flex-wrap items-center justify-between gap-2 mt-1">

              <h3 className="text-xl font-black truncate">

                {isDraw
                  ? "DRAW"
                  : renderSafeText(
                      verdict.winner
                    )}

              </h3>


              <span className="text-xs font-black text-red-400">

                {Math.round(
                  confidence
                )}
                %

              </span>

            </div>


            <p className="text-xs text-neutral-400 leading-6 mt-3">

              {renderSafeText(
                verdict.summary ||
                  verdict.verdict
              )}

            </p>

          </div>

        </div>

      </section>
    );
  }


  /* =======================================================
     FULL JUDGE CONSOLE
  ======================================================= */

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-red-900/60 bg-gradient-to-br from-red-950/20 via-black to-neutral-950 shadow-2xl">

      {/* BACKGROUND */}

      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />


      <div className="relative z-10 p-5 md:p-7">


        {/* =================================================
           HEADER
        ================================================= */}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

          <div className="flex items-start gap-4">

            <div className="p-4 rounded-2xl bg-red-600 shadow-lg shadow-red-600/20">

              <Brain className="w-7 h-7 text-black" />

            </div>


            <div>

              <div className="text-[9px] text-red-400 font-black uppercase tracking-[0.3em]">
                Anime Arena
              </div>


              <h2 className="text-2xl md:text-3xl font-black uppercase mt-1">
                AI Judge Console
              </h2>


              <div className="flex flex-wrap items-center gap-2 mt-2">

                <span
                  className={`px-2.5 py-1 rounded-full border text-[9px] font-black uppercase ${
                    isGemini
                      ? "border-purple-800 bg-purple-950/40 text-purple-300"
                      : "border-neutral-700 bg-neutral-900 text-neutral-400"
                  }`}
                >
                  {isGemini
                    ? "Gemini Adjudication"
                    : "Deterministic Fallback"}
                </span>


                <span className="px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-[9px] font-black uppercase text-neutral-500">
                  Evidence Locked
                </span>

              </div>

            </div>

          </div>


          <div className="flex items-center gap-4">

            <ConfidenceRing
              value={
                confidence
              }
            />


            <div>

              <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
                Confidence Level
              </div>


              <div className="text-xl font-black mt-1">
                {getConfidenceLabel(
                  confidence
                )}
              </div>


              <div className="text-[10px] text-neutral-600 mt-1">
                Based on supplied battle evidence
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
           FINAL ADJUDICATION
        ================================================= */}

        <div className="mt-7 rounded-3xl border border-yellow-800/70 bg-yellow-950/10 p-5 md:p-6">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

            <div>

              <div className="flex items-center gap-2 text-yellow-400 text-[9px] font-black uppercase tracking-[0.25em]">

                <Crown className="w-4 h-4" />

                Final Adjudication

              </div>


              <div className="text-4xl md:text-5xl font-black mt-2">

                {isDraw
                  ? "DRAW"
                  : renderSafeText(
                      verdict.winner ||
                        "Unknown"
                    )}

              </div>

            </div>


            <div className="max-w-2xl">

              <p className="text-sm text-neutral-300 leading-7">

                {renderSafeText(
                  verdict.verdict ||
                    verdict.summary ||
                    "No final verdict was provided."
                )}

              </p>

            </div>

          </div>

        </div>


        {/* =================================================
           SUMMARY
        ================================================= */}

        {(
          verdict.summary
        ) && (

          <div className="mt-5 rounded-2xl border border-neutral-800 bg-black/60 p-5">

            <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest">

              <BarChart3 className="w-4 h-4" />

              Executive Summary

            </div>


            <p className="text-sm text-neutral-300 leading-7 mt-3">

              {renderSafeText(
                verdict.summary
              )}

            </p>

          </div>

        )}


        {/* =================================================
           DECISIVE FACTORS
        ================================================= */}

        {factors.length > 0 && (

          <div className="mt-7">

            <div className="flex items-center gap-2 mb-4">

              <Target className="w-5 h-5 text-red-500" />

              <h3 className="text-xl font-black">
                Decisive Factors
              </h3>

            </div>


            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">

              {factors.map(
                (
                  factor,
                  index
                ) => (

                  <FactorCard
                    key={
                      `factor-${index}`
                    }
                    index={
                      index
                    }
                    text={
                      factor
                    }
                  />

                )
              )}

            </div>

          </div>

        )}


        {/* =================================================
           BIGGEST STRATEGIC MISTAKE
        ================================================= */}

        {verdict.biggestStrategicMistake && (

          <div className="mt-7 rounded-3xl border border-red-900/60 bg-red-950/15 p-5">

            <div className="flex items-start gap-4">

              <div className="p-3 rounded-xl bg-red-950 border border-red-800 shrink-0">

                <AlertTriangle className="w-5 h-5 text-red-400" />

              </div>


              <div className="flex-1">

                <div className="text-[9px] text-red-400 uppercase tracking-[0.2em] font-black">
                  Biggest Strategic Blunder
                </div>


                <div className="text-xl font-black mt-1">
                  {renderSafeText(
                    verdict
                      .biggestStrategicMistake
                      ?.player ||
                      "Unknown Player"
                  )}
                </div>


                {verdict
                  .biggestStrategicMistake
                  ?.type && (

                  <div className="text-[10px] text-red-400 uppercase tracking-widest mt-2 font-black">

                    {renderSafeText(
                      verdict
                        .biggestStrategicMistake
                        .type
                    )}

                  </div>

                )}


                <p className="text-sm text-neutral-300 leading-7 mt-3">

                  {renderSafeText(
                    verdict
                      .biggestStrategicMistake
                      ?.explanation ||
                      verdict
                        .biggestStrategicMistake
                        ?.reason ||
                      verdict
                        .biggestStrategicMistake
                  )}

                </p>

              </div>

            </div>

          </div>

        )}


        {/* =================================================
           ROLE ASSIGNMENT AUDIT
        ================================================= */}

        {roleAssignments.length > 0 && (

          <div className="mt-7">

            <div className="flex items-center gap-2 mb-4">

              <Shield className="w-5 h-5 text-red-500" />

              <div>

                <h3 className="text-xl font-black">
                  Role Assignment Audit
                </h3>

                <p className="text-[10px] text-neutral-600 mt-1">
                  Natural role vs player's actual decision
                </p>

              </div>

            </div>


            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">

              {roleAssignments.map(
                (
                  item,
                  index
                ) => (

                  <RoleDecisionCard
                    key={
                      `role-${index}`
                    }
                    item={
                      item
                    }
                  />

                )
              )}

            </div>

          </div>

        )}


        {/* =================================================
           STRATEGIC MISTAKES
        ================================================= */}

        {mistakes.length > 0 && (

          <div className="mt-7">

            <div className="flex items-center gap-2 mb-4">

              <AlertTriangle className="w-5 h-5 text-orange-400" />

              <div>

                <h3 className="text-xl font-black">
                  Strategic Mistake Report
                </h3>

                <p className="text-[10px] text-neutral-600 mt-1">
                  Engine-detected decisions interpreted by AI
                </p>

              </div>

            </div>


            <div className="space-y-3">

              {mistakes.map(
                (
                  mistake,
                  index
                ) => (

                  <MistakeCard
                    key={
                      `mistake-${index}`
                    }
                    mistake={
                      mistake
                    }
                  />

                )
              )}

            </div>

          </div>

        )}


        {/* =================================================
           KEY MATCHUPS
        ================================================= */}

        {keyMatchups.length > 0 && (

          <div className="mt-7">

            <div className="flex items-center gap-2 mb-4">

              <Swords className="w-5 h-5 text-red-500" />

              <h3 className="text-xl font-black">
                Decisive Matchups
              </h3>

            </div>


            <div className="space-y-3">

              {keyMatchups.map(
                (
                  matchup,
                  index
                ) => (

                  <KeyMatchupCard
                    key={
                      `matchup-${index}`
                    }
                    matchup={
                      matchup
                    }
                  />

                )
              )}

            </div>

          </div>

        )}


        {/* =================================================
           RECOMMENDATIONS
        ================================================= */}

        {recommendations.length > 0 && (

          <div className="mt-7">

            <div className="flex items-center gap-2 mb-4">

              <Lightbulb className="w-5 h-5 text-yellow-400" />

              <div>

                <h3 className="text-xl font-black">
                  Tactical Lessons
                </h3>

                <p className="text-[10px] text-neutral-600 mt-1">
                  How the player could improve
                </p>

              </div>

            </div>


            <div className="grid md:grid-cols-2 gap-3">

              {recommendations.map(
                (
                  recommendation,
                  index
                ) => (

                  <RecommendationCard
                    key={
                      `recommendation-${index}`
                    }
                    recommendation={
                      recommendation
                    }
                    index={
                      index
                    }
                  />

                )
              )}

            </div>

          </div>

        )}


        {/* =================================================
           AI INTERPRETATION
        ================================================= */}

        {verdict.aiInterpretation && (

          <div className="mt-7 rounded-3xl border border-purple-900/50 bg-purple-950/10 p-5">

            <div className="flex items-center gap-2 text-purple-300 text-xs font-black uppercase tracking-widest">

              <Brain className="w-4 h-4" />

              Deep AI Interpretation

            </div>


            <p className="text-sm text-neutral-300 leading-7 mt-3">

              {renderSafeText(
                verdict.aiInterpretation
              )}

            </p>

          </div>

        )}


        {/* =================================================
           ENGINE EVIDENCE
        ================================================= */}

        <div className="mt-7 pt-5 border-t border-neutral-800">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

            <div className="flex items-center gap-2 text-[9px] text-neutral-600 uppercase tracking-widest font-black">

              <Zap className="w-3.5 h-3.5" />

              Deterministic Engine Evidence
              →
              AI Interpretation

            </div>


            <div className="text-[9px] text-neutral-700">

              {isGemini
                ? "Gemini response validated"
                : "Gemini unavailable — deterministic fallback active"}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}