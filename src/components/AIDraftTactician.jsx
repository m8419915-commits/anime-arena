import React, {
  useState
} from 'react';

import {
  Brain,
  Sparkles,
  LoaderCircle,
  AlertTriangle
} from 'lucide-react';

import {
  askGemini
} from '../api/gemini';


export default function AIDraftTactician({
  playerNames = [],
  teams = {},
  selectedRoles = [],
  activePlayerName = '',
  availableCards = [],
  liveOdds = []
}) {
  const [
    question,
    setQuestion
  ] = useState('');

  const [
    answer,
    setAnswer
  ] = useState('');

  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    error,
    setError
  ] = useState('');


  const buildTeamText =
    () =>
      playerNames
        .map((player) => {
          const team =
            teams?.[player] ||
            {};

          const picks =
            selectedRoles
              .map((role) => {
                const card =
                  team?.[role.id];

                if (!card) {
                  return `${role.name}: Empty`;
                }

                return (
                  `${role.name}: ${card.name}` +
                  ` | Form: ${card.form || 'Unknown'}` +
                  ` | Power: ${Number(
                    card.power || 0
                  )}`
                );
              })
              .join('\n');

          return `
PLAYER: ${player}
${picks}
          `.trim();
        })
        .join('\n\n');


  const buildOddsText =
    liveOdds
      .map(
        (item) =>
          `${item.player}: ${item.odds}%`
      )
      .join('\n') ||
    'No live odds available.';


  const ask = async (
    preset = null
  ) => {
    const finalQuestion =
      (
        preset !== null
          ? preset
          : question
      ).trim();

    if (
      !finalQuestion ||
      loading
    ) {
      return;
    }


    setQuestion(
      finalQuestion
    );

    setLoading(
      true
    );

    setAnswer('');

    setError('');


    const context = `
ANIME ARENA — LIVE ANIME DRAFT

ACTIVE PLAYER:
${activePlayerName || 'Unknown'}

AVAILABLE CHARACTERS:
${availableCards.length}

AVAILABLE ROLES:
${selectedRoles
  .map(
    (role) =>
      `${role.name} (${role.id})`
  )
  .join(', ')}

PLAYER TEAMS:

${buildTeamText}

CURRENT LIVE TACTICAL ODDS:

${buildOddsText}
`.trim();


    try {
      const result =
        await askGemini({
          system: `
You are the official Anime Arena Draft AI Tactician.

You analyze the REAL current draft state supplied to you.

Important rules:
- Do not invent drafted characters.
- Do not invent player scores.
- Do not change the game's actual draft rules.
- Treat supplied team data as authoritative.
- A character already drafted should be treated as unavailable.
- Analyze roles, power, balance, synergy, coverage and remaining options.
- Give practical advice.
- Do not automatically reveal hidden information unless it is already supplied.
- Distinguish facts from tactical opinion.
- Keep answers engaging and concise.
          `.trim(),

          prompt: `
Answer this draft question:

"${finalQuestion}"

Use the current draft state.

When useful, discuss:
- team strength,
- role balance,
- synergy,
- weaknesses,
- best next pick,
- value of the active player's turn,
- possible counter-picks,
- and the live tactical odds.

Do not make up information.
          `.trim(),

          context
        });


      setAnswer(
        result ||
        'No answer returned.'
      );

    } catch (
      requestError
    ) {
      setError(
        requestError?.message ||
        'Gemini could not analyze the draft.'
      );

    } finally {
      setLoading(
        false
      );
    }
  };


  return (
    <section className="mt-8 rounded-[2rem] border border-red-900/50 bg-gradient-to-br from-red-950/30 via-black to-neutral-950 p-5 shadow-2xl shadow-red-950/10">

      {/* HEADER */}

      <div className="flex items-start gap-3">

        <div className="relative">

          <div className="absolute inset-0 rounded-xl bg-red-600 blur-md opacity-30" />

          <div className="relative w-11 h-11 rounded-xl bg-red-600 text-black flex items-center justify-center">

            <Brain className="w-5 h-5" />

          </div>

        </div>


        <div>

          <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
            Gemini Draft Chamber
          </div>

          <h3 className="text-xl font-black mt-1">
            Draft AI Tactician
          </h3>

          <p className="text-[9px] text-neutral-600 mt-1">
            Gemini analyzes the actual live draft.
          </p>

        </div>

      </div>


      {/* QUICK QUESTIONS */}

      <div className="flex flex-wrap gap-2 mt-5">

        <button
          type="button"
          disabled={loading}
          onClick={() =>
            ask(
              'Which player currently has the strongest team and why?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Strongest Team?
        </button>


        <button
          type="button"
          disabled={loading}
          onClick={() =>
            ask(
              'Which team currently has the weakest role balance?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Weakest Team?
        </button>


        <button
          type="button"
          disabled={loading}
          onClick={() =>
            ask(
              'What should the active player prioritize with the next draft pick?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Best Next Pick?
        </button>


        <button
          type="button"
          disabled={loading}
          onClick={() =>
            ask(
              'Who has the best chance of winning this draft right now?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Who Is Winning?
        </button>

      </div>


      {/* INPUT */}

      <div className="flex flex-col md:flex-row gap-2 mt-4">

        <input
          value={
            question
          }
          onChange={(event) =>
            setQuestion(
              event.target.value
            )
          }
          onKeyDown={(event) => {
            if (
              event.key ===
              'Enter'
            ) {
              event.preventDefault();
              ask();
            }
          }}
          placeholder="Ask the Draft Tactician..."
          className="flex-1 bg-black border border-neutral-800 focus:border-red-500 rounded-xl px-4 py-3 text-xs outline-none"
        />


        <button
          type="button"
          disabled={
            loading ||
            !question.trim()
          }
          onClick={() =>
            ask()
          }
          className="rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-600 px-5 py-3 text-xs font-black text-black"
        >
          {loading
            ? 'Thinking...'
            : 'Ask Gemini'}
        </button>

      </div>


      {/* LOADING */}

      {loading && (
        <div className="mt-4 rounded-2xl border border-red-900/40 bg-black p-5 text-center">

          <LoaderCircle className="w-7 h-7 mx-auto text-red-400 animate-spin" />

          <div className="text-xs font-black mt-3">
            Tactician is analyzing the draft...
          </div>

          <div className="text-[9px] text-neutral-600 mt-1">
            Reading teams, roles and available picks.
          </div>

        </div>
      )}


      {/* ERROR */}

      {error && (
        <div className="mt-4 rounded-2xl border border-red-900 bg-red-950/30 p-4">

          <div className="flex items-center gap-2 text-red-400 text-xs font-black">

            <AlertTriangle className="w-4 h-4" />

            Draft AI Error

          </div>

          <p className="text-[9px] text-neutral-500 mt-2">
            {error}
          </p>

        </div>
      )}


      {/* ANSWER */}

      {answer &&
        !loading && (
          <div className="mt-4 rounded-2xl border border-red-900/50 bg-black p-5">

            <div className="flex items-center gap-2 text-red-400 text-[8px] uppercase tracking-[0.25em] font-black">

              <Sparkles className="w-4 h-4" />

              Gemini Draft Briefing

            </div>


            <div className="text-sm text-neutral-200 leading-7 mt-4 whitespace-pre-wrap">
              {answer}
            </div>


            <div className="mt-4 pt-4 border-t border-neutral-900 text-[8px] text-neutral-700">
              Gemini provides tactical analysis. The Draft Engine remains authoritative.
            </div>

          </div>
        )}

    </section>
  );
}