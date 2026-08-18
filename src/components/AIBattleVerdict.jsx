import React, {
  useState
} from 'react';

import {
  Brain,
  Sparkles,
  LoaderCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import {
  askGemini
} from '../api/gemini';


/* =========================================================
   SAFE VALUE
========================================================= */

const safe = (
  value
) => {
  const number =
    Number(value);

  return Number.isFinite(
    number
  )
    ? number
    : 0;
};


/* =========================================================
   BUILD BATTLE CONTEXT
========================================================= */

const buildBattleContext = ({
  left,
  right,
  result,
  rule,
  mode = 'Anime Battle'
}) => {
  const leftName =
    left?.name ||
    'Fighter A';

  const rightName =
    right?.name ||
    'Fighter B';

  const winner =
    result?.winner ===
    'left'
      ? leftName
      : result?.winner ===
        'right'
        ? rightName
        : 'Draw';


  return `
ANIME ARENA — ${mode}

BATTLE RULE:
${rule || 'Standard'}

FIGHTER A:
Name: ${leftName}
Verse: ${left?.verse || left?.anime || 'Unknown'}
Form: ${left?.form || 'Base Form'}

Power: ${safe(left?.power)}
Hax: ${safe(left?.hax)}
Speed: ${safe(left?.speed)}
Defense: ${safe(left?.defense)}
Durability: ${safe(left?.durability)}
Battle IQ: ${safe(left?.battleIQ)}
Skill: ${safe(left?.skill)}
Experience: ${safe(left?.experience)}
Versatility: ${safe(left?.versatility)}
Stamina: ${safe(left?.stamina)}
Regeneration: ${safe(left?.regeneration)}

Tags:
${Array.isArray(left?.tags)
  ? left.tags.join(', ')
  : 'None'}

FIGHTER B:
Name: ${rightName}
Verse: ${right?.verse || right?.anime || 'Unknown'}
Form: ${right?.form || 'Base Form'}

Power: ${safe(right?.power)}
Hax: ${safe(right?.hax)}
Speed: ${safe(right?.speed)}
Defense: ${safe(right?.defense)}
Durability: ${safe(right?.durability)}
Battle IQ: ${safe(right?.battleIQ)}
Skill: ${safe(right?.skill)}
Experience: ${safe(right?.experience)}
Versatility: ${safe(right?.versatility)}
Stamina: ${safe(right?.stamina)}
Regeneration: ${safe(right?.regeneration)}

Tags:
${Array.isArray(right?.tags)
  ? right.tags.join(', ')
  : 'None'}

BATTLE ENGINE RESULT:
Winner: ${winner}

Left Score: ${safe(result?.leftScore)}
Right Score: ${safe(result?.rightScore)}

Battle Engine Explanation:
${result?.explanation || 'No explanation supplied.'}

Category Scores:
${JSON.stringify(
  result?.categoryScores ||
  null
)}

Category Winners:
${JSON.stringify(
  result?.categoryWinners ||
  null
)}
`.trim();
};


/* =========================================================
   COMPONENT
========================================================= */

export default function AIBattleVerdict({
  left,
  right,
  result,
  rule = 'Standard',
  mode = 'Anime Battle'
}) {
  const [
    open,
    setOpen
  ] =
    useState(false);


  const [
    loading,
    setLoading
  ] =
    useState(false);


  const [
    answer,
    setAnswer
  ] =
    useState('');


  const [
    error,
    setError
  ] =
    useState('');


  const [
    used,
    setUsed
  ] =
    useState(false);


  const requestVerdict =
    async () => {
      if (
        loading ||
        !left ||
        !right ||
        !result
      ) {
        return;
      }

      setOpen(true);
      setLoading(true);
      setError('');
      setAnswer('');

      try {
        const context =
          buildBattleContext({
            left,
            right,
            result,
            rule,
            mode
          });


        const text =
          await askGemini({
            system: `
You are the official Anime Arena Battle Tactician.

The Battle Engine has already decided the official result.

Your job is NOT to replace that result.

Your job is to explain it intelligently.

Use this structure:

1. Verdict
2. Decisive advantages
3. Why the loser struggled
4. Practical win condition for the loser
5. Difficulty rating

Rules:
- Respect the supplied Battle Engine winner.
- Do not invent statistics that were not supplied.
- Do not pretend the numerical engine is perfect.
- Distinguish game-system calculations from your own tactical reasoning.
- Be practical and concise.
- Anime knowledge may be used to explain abilities, but do not fabricate abilities.
- If the supplied data is insufficient for a canon claim, say so.
`,

            prompt: `
Give a deep but readable tactical explanation
for this Anime Arena battle.

Do NOT change the official Battle Engine winner.

Explain why the winner has the more reliable path
to victory under the stated battle rules.

Also explain the loser's realistic win condition.

Finish with:

Difficulty:
Low / Moderate / High / Extreme

Confidence:
Low / Moderate / High

Keep the answer under roughly 500 words.
`,

            context
          });


        setAnswer(
          text
        );

        setUsed(
          true
        );

      } catch (
        requestError
      ) {
        setError(
          requestError?.message ||
          'Unable to get the Gemini verdict.'
        );

      } finally {
        setLoading(
          false
        );
      }
    };


  if (
    !left ||
    !right ||
    !result
  ) {
    return null;
  }


  return (
    <section className="mt-6 rounded-[2rem] border border-red-900/50 bg-gradient-to-br from-red-950/20 via-black to-neutral-950 overflow-hidden">

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="p-5 border-b border-neutral-900">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="relative">

              <div className="absolute inset-0 bg-red-600 rounded-xl blur-md opacity-30" />

              <div className="relative w-11 h-11 rounded-xl bg-red-600 text-black flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>

            </div>


            <div>

              <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
                Gemini Analysis
              </div>

              <h3 className="text-lg font-black mt-1">
                AI Battle Verdict
              </h3>

              <p className="text-[9px] text-neutral-600 mt-1">
                Explains the official Battle Engine result.
              </p>

            </div>

          </div>


          <button
            onClick={() => {
              if (
                !open
              ) {
                requestVerdict();
              } else {
                setOpen(
                  false
                );
              }
            }}
            className="rounded-xl bg-red-600 hover:bg-red-500 text-black px-4 py-3 text-xs font-black"
          >

            {open ? (
              <>
                <ChevronUp className="w-4 h-4 inline-block mr-1" />
                Hide Verdict
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 inline-block mr-1" />
                {used
                  ? 'View AI Verdict'
                  : 'Get AI Verdict'}
              </>
            )}

          </button>

        </div>

      </div>


      {/* ===================================================
          BODY
      =================================================== */}

      {open && (
        <div className="p-5">

          {loading && (
            <div className="rounded-2xl border border-red-900/40 bg-black p-6 text-center">

              <LoaderCircle className="w-7 h-7 text-red-400 animate-spin mx-auto" />

              <div className="text-sm font-black mt-4">
                Tactician is analyzing the matchup...
              </div>

              <p className="text-[9px] text-neutral-600 mt-2">
                The official winner remains determined by the Battle Engine.
              </p>

            </div>
          )}


          {error && (
            <div className="rounded-2xl border border-red-900 bg-red-950/30 p-5">

              <div className="flex items-center gap-2 text-red-400">

                <AlertTriangle className="w-4 h-4" />

                <span className="text-xs font-black">
                  Gemini Analysis Failed
                </span>

              </div>

              <p className="text-[9px] text-neutral-500 mt-2 leading-5">
                {
                  error
                }
              </p>

              <button
                onClick={
                  requestVerdict
                }
                className="mt-4 rounded-xl bg-red-600 text-black px-4 py-2 text-xs font-black"
              >
                Try Again
              </button>

            </div>
          )}


          {answer && !loading && !error && (
            <div className="rounded-2xl border border-red-900/40 bg-black p-5">

              <div className="flex items-center gap-2 text-red-400 text-[8px] uppercase tracking-[0.25em] font-black">

                <Brain className="w-4 h-4" />

                Tactical Briefing

              </div>


              <div className="mt-5 text-sm text-neutral-200 leading-7 whitespace-pre-wrap">
                {
                  answer
                }
              </div>


              <div className="mt-5 pt-4 border-t border-neutral-900">

                <div className="text-[8px] text-neutral-700 leading-4">
                  Gemini explains the Battle Engine result.
                  It does not control elimination or the official winner.
                </div>

              </div>

            </div>
          )}

        </div>
      )}

    </section>
  );
}