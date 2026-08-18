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


const safe = (
  value
) => {
  const n = Number(value);
  return Number.isFinite(n)
    ? n
    : 0;
};


export default function AITournamentVerdict({
  tournament,
  summary,
  leaderboard = [],
  battleResult = null
}) {
  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    answer,
    setAnswer
  ] = useState('');

  const [
    error,
    setError
  ] = useState('');


  const analyzeTournament =
    async () => {
      if (
        !tournament ||
        loading
      ) {
        return;
      }

      setLoading(true);
      setError('');
      setAnswer('');

      try {
        const context = `
ANIME ARENA GRAND TOURNAMENT

CURRENT PHASE:
${summary?.phase?.name || tournament?.phase?.name || 'Unknown'}

PHASE DESCRIPTION:
${summary?.phase?.description || tournament?.phase?.description || 'Unknown'}

CHARACTERS CURRENTLY ALIVE:
${summary?.remaining ?? 0}

UNUSED CHARACTERS:
${summary?.unusedCharacters ?? tournament?.unusedCharacters?.length ?? 0}

USED CHARACTERS:
${summary?.usedCharacters ?? tournament?.usedCharacters?.length ?? 0}

ELIMINATED CHARACTERS:
${summary?.eliminated ?? tournament?.eliminatedCharacters?.length ?? 0}

CURRENT SURVIVOR:
${summary?.currentSurvivor?.name || tournament?.currentSurvivor?.name || 'None'}

CURRENT BATTLE:
${battleResult
  ? `
Winner:
${battleResult.winnerCharacter?.name || 'Unknown'}

Explanation:
${battleResult.explanation || 'None'}

Left Score:
${safe(battleResult.leftScore)}

Right Score:
${safe(battleResult.rightScore)}
`
  : 'No battle currently recorded.'}

PLAYER INTELLIGENCE LEADERBOARD:
${leaderboard
  .map(
    (player, index) =>
      `${index + 1}. ${player.name}: ${safe(player.score)} points (${safe(player.leadPercent)}%)`
  )
  .join('\n') || 'No scores yet.'}

RECENT MATCH HISTORY:
${(tournament?.matchHistory || [])
  .slice(-8)
  .map(
    (match) =>
      `Match ${match.matchNumber}: ${match.survivorBefore?.name || 'Unknown'} vs ${match.challenger?.name || 'Unknown'} → Winner: ${match.winner?.name || 'Unknown'}`
  )
  .join('\n') || 'No completed matches.'}
`.trim();


        const text =
          await askGemini({
            system: `
You are the official Anime Arena Grand Tournament AI Tactician.

The tournament engine is authoritative.

Your job is to analyze the CURRENT tournament state, not invent a different result.

Rules:
- The last surviving character is the official Character Champion.
- Intelligence Champion is the player with the most points.
- Used characters cannot be manually selected again.
- A winning character continues automatically as the Current Survivor.
- Intelligence points never revive eliminated characters.
- Do not invent characters, scores or matches.
- Clearly separate official tournament status from your tactical opinion.
- Be concise but insightful.
`,
            prompt: `
Analyze the current Anime Arena tournament.

Give a useful tactical briefing with these sections:

1. Current Situation
2. Biggest Threat
3. Current Survivor Assessment
4. Intelligence Championship
5. What Players Should Watch Next

If a recent battle exists, explain why its result matters.

Keep the answer under 500 words.
`,
            context
          });

        setAnswer(
          text
        );

      } catch (
        requestError
      ) {
        setError(
          requestError?.message ||
          'Tournament AI request failed.'
        );

      } finally {
        setLoading(
          false
        );
      }
    };


  return (
    <section className="mt-6 rounded-[2rem] border border-red-900/50 bg-gradient-to-br from-red-950/25 via-black to-neutral-950 overflow-hidden">

      <div className="p-5">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="relative">

              <div className="absolute inset-0 bg-red-600 blur-md opacity-30 rounded-xl" />

              <div className="relative w-11 h-11 rounded-xl bg-red-600 text-black flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>

            </div>

            <div>

              <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
                Grand Tournament AI
              </div>

              <h3 className="text-lg font-black mt-1">
                AI Tournament Tactician
              </h3>

              <p className="text-[9px] text-neutral-600 mt-1">
                Gemini reads the actual tournament state.
              </p>

            </div>

          </div>

          <button
            onClick={
              analyzeTournament
            }
            disabled={
              loading
            }
            className="rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-600 px-5 py-3 text-xs font-black text-black"
          >

            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 inline-block mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 inline-block mr-2" />
                Analyze Tournament
              </>
            )}

          </button>

        </div>


        {error && (
          <div className="mt-4 rounded-2xl border border-red-900 bg-red-950/30 p-4">

            <div className="flex items-center gap-2 text-red-400 text-xs font-black">

              <AlertTriangle className="w-4 h-4" />

              AI Analysis Failed

            </div>

            <p className="text-[9px] text-neutral-500 mt-2">
              {error}
            </p>

          </div>
        )}


        {loading && (
          <div className="mt-5 rounded-2xl border border-red-900/40 bg-black p-6 text-center">

            <LoaderCircle className="w-7 h-7 text-red-400 animate-spin mx-auto" />

            <div className="text-sm font-black mt-3">
              Tactician is reading the tournament...
            </div>

            <p className="text-[9px] text-neutral-600 mt-2">
              Survivor, eliminations, player scores and recent battles are being analyzed.
            </p>

          </div>
        )}


        {answer && !loading && (
          <div className="mt-5 rounded-2xl border border-red-900/40 bg-black p-5">

            <div className="flex items-center gap-2 text-red-400 text-[8px] uppercase tracking-[0.25em] font-black">

              <Brain className="w-4 h-4" />

              Tactical Briefing

            </div>

            <div className="text-sm text-neutral-200 leading-7 whitespace-pre-wrap mt-4">
              {answer}
            </div>

          </div>
        )}

      </div>

    </section>
  );
}