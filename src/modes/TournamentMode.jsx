import React, {
  useState
} from 'react';

import {
  ArrowLeft,
  Trophy,
  Users,
  Sparkles,
  Swords,
  Play,
  CheckCircle2,
  Eye,
  Crown,
  Brain,
  BookOpen,
  X,
  ChevronRight,
  Lightbulb,
  BarChart3,
  RotateCcw
} from 'lucide-react';

import {
  createTournament,
  getTournamentSummary,
  getNextChallengerPlayer,
  getSelectableCharacters,
  recordMatch,
  clearPhaseTransition,
  getPlayerLeaderboard
} from '../engine/tournamentEngine';

import {
  createRevealState,
  revealPaidClue,
  fullyRevealCharacter,
  scoreCharacterGuess
} from '../engine/blindTournamentEngine';

import {
  askGemini
} from '../api/gemini';

import {
  runSurvivalBattle
} from '../engine/survivalEngine';

import BlindReveal from '../components/BlindReveal';


/* =========================================================
   POOL OPTIONS
========================================================= */

const POOL_OPTIONS = [
  [400, '400 Characters', 'Complete tournament'],
  [256, '256 Characters', 'Large tournament'],
  [128, '128 Characters', 'Medium tournament'],
  [64, '64 Characters', 'Fast testing']
];


/* =========================================================
   RULEBOOK DATA
========================================================= */

const RULES = [
  {
    icon: '🏆',
    title: 'THE MISSION',
    subtitle: 'ONE SURVIVOR',
    text:
      'The official Character Champion is the last surviving character. Every challenger that enters a match becomes permanently used and cannot be drawn again as a new challenger.'
  },

  {
    icon: '🎭',
    title: 'INTEL PHASE',
    subtitle: '400 → 64',
    text:
      'The Arena randomly assigns the new challenger. The challenger is shown through Translucent Vision. Players can identify the character and use the clue system. Optional clue usage reduces recognition rewards.'
  },

  {
    icon: '🃏',
    title: 'VISIBLE CARD PHASE',
    subtitle: '64 → 16',
    text:
      'Translucent Vision disappears permanently. Character cards become fully visible. The current survivor automatically continues while the Arena randomly assigns the next unused challenger.'
  },

  {
    icon: '🔥',
    title: 'ELITE PHASE',
    subtitle: '16 → 8',
    text:
      'The field shrinks quickly. Cards remain fully visible and battle prediction rewards become smaller.'
  },

  {
    icon: '💀',
    title: 'FINAL FOUR',
    subtitle: '8 → 4',
    text:
      'Only four living characters remain capable of becoming the official Character Champion.'
  },

  {
    icon: '⚔️',
    title: 'SEMIFINAL',
    subtitle: '4 → 2',
    text:
      'The current survivor faces a randomly assigned challenger. Player points are now almost completely passive.'
  },

  {
    icon: '👑',
    title: 'GRAND FINAL',
    subtitle: '2 → 1',
    text:
      'The final challenger faces the current survivor. Intelligence Points cannot influence the official battle result.'
  },

  {
    icon: '🧠',
    title: 'INTELLIGENCE SCORE',
    subtitle: 'PLAYER COMPETITION',
    text:
      'Players earn points through character recognition and battle predictions. The player with the highest accumulated score becomes the Intelligence Champion.'
  },

  {
    icon: '🔒',
    title: 'NO REUSE RULE',
    subtitle: 'IMPORTANT',
    text:
      'Once a character enters a match, that character is permanently removed from the challenger pool. A winning character can continue only because it is the automatic current survivor.'
  },

  {
    icon: '👥',
    title: '2–8 PLAYERS',
    subtitle: 'ROTATING TURNS',
    text:
      'The player turn rotates from match to match. The player controls the turn, but the Arena randomly selects the challenger.'
  },

  {
    icon: '👑',
    title: 'TWO CHAMPIONS',
    subtitle: 'TWO COMPETITIONS',
    text:
      'Character Champion = final surviving character. Intelligence Champion = player with the highest accumulated score.'
  }
];


/* =========================================================
   IMAGE HELPER
========================================================= */

function getCharacterImage(
  character
) {
  const forms =
    Array.isArray(
      character?.forms
    )
      ? character.forms
      : [];

  const strongest =
    [...forms].sort(
      (a, b) =>
        Number(
          b?.relPower || 0
        ) -
        Number(
          a?.relPower || 0
        )
    )[0];

  return (
    strongest?.img ||
    strongest?.image ||
    character?.image ||
    character?.img ||
    character?.imageUrl ||
    null
  );
}


/* =========================================================
   BEST FORM
========================================================= */

function getBestForm(
  character,
  formMode
) {
  const forms =
    Array.isArray(
      character?.forms
    )
      ? character.forms
      : [];

  if (
    !forms.length
  ) {
    return {
      name:
        character?.form ||
        'Base Form',

      relPower:
        character?.power ||
        character?.stats?.power ||
        0,

      realPower:
        character?.realPower ||
        character?.power ||
        0,

      hax:
        character?.hax ||
        character?.stats?.hax ||
        0
    };
  }

  if (
    formMode ===
    'random'
  ) {
    return (
      forms[
        Math.floor(
          Math.random() *
          forms.length
        )
      ] ||
      forms[0]
    );
  }

  return [...forms].sort(
    (a, b) =>
      Number(
        b?.relPower || 0
      ) -
      Number(
        a?.relPower || 0
      )
  )[0];
}


/* =========================================================
   RULEBOOK
========================================================= */

function Rulebook({
  open,
  onClose,
  tournament = null,
  summary = null,
  leaderboard = []
}) {
  const [
    activeRule,
    setActiveRule
  ] = useState(0);

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

  if (!open) {
    return null;
  }

  const rule =
    RULES[
      activeRule
    ] ||
    RULES[0];

  const askCodex = async (
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

    const leaderboardText =
      leaderboard?.length
        ? leaderboard
            .map(
              (
                player,
                index
              ) =>
                `${index + 1}. ${
                  player?.name ||
                  'Player'
                } — ${
                  Number(
                    player?.score || 0
                  )
                } points`
            )
            .join('\n')
        : 'No player scores available.';

    const context = `
ANIME ARENA GRAND TOURNAMENT

Current Phase:
${
  summary?.phase?.name ||
  tournament?.phase?.name ||
  'Tournament not started'
}

Current Survivor:
${
  summary?.currentSurvivor?.name ||
  tournament?.currentSurvivor?.name ||
  'None'
}

Characters Remaining:
${
  Number(
    summary?.remaining || 0
  )
}

Used Characters:
${
  Number(
    summary?.usedCharacters || 0
  )
}

Eliminated Characters:
${
  Number(
    summary?.eliminated || 0
  )
}

Unused Characters:
${
  Number(
    summary?.unusedCharacters || 0
  )
}

Progress:
${
  Number(
    summary?.progress || 0
  )
}%

PLAYER INTELLIGENCE LEADERBOARD:

${leaderboardText}
`.trim();

    try {
      const response =
        await askGemini({
          system: `
You are the official Anime Arena Rulebook AI.

The supplied RULES data is authoritative.

Never invent or change a game rule.

Official facts:
- The final surviving character is the Character Champion.
- The highest scoring player is the Intelligence Champion.
- The Arena randomly assigns every new challenger.
- A character that enters a match becomes permanently unavailable as a new challenger.
- A winner continues as the automatic current survivor.
- Intelligence Points do not determine the official battle winner.
- Intel clues can reduce recognition rewards.
- Later phases use fully visible cards.

If something is not defined by the supplied rules, say so rather than inventing a mechanic.

Explain things clearly for players.
`.trim(),

          prompt: `
Player question:

"${finalQuestion}"

Selected rule:

${rule.title}
${rule.subtitle}

Official text:

${rule.text}

Explain the player's question using the official rule.
Give a simple example when useful.
Keep the answer under 350 words.
`.trim(),

          context
        });

      setAnswer(
        response ||
        'The Codex returned no answer.'
      );

    } catch (
      requestError
    ) {
      setError(
        requestError?.message ||
        'The AI Codex could not answer right now.'
      );

    } finally {
      setLoading(
        false
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">

      <div className="w-full max-w-7xl max-h-[94vh] overflow-hidden rounded-[2rem] border border-red-900/60 bg-neutral-950 shadow-2xl">

        <div className="p-5 border-b border-neutral-900 flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-red-600 text-black flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>

            <div>
              <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
                ANIME ARENA CODEX
              </div>

              <h2 className="text-xl font-black">
                Grand Tournament Rulebook
              </h2>

              <p className="text-[8px] text-neutral-600 mt-1">
                Official rules + Gemini Rulebook Assistant
              </p>
            </div>

          </div>

          <button
            onClick={
              onClose
            }
            className="rounded-xl bg-neutral-900 hover:bg-red-950 p-2"
          >
            <X className="w-5 h-5" />
          </button>

        </div>


        <div className="flex flex-col lg:flex-row max-h-[calc(94vh-90px)]">

          <div className="lg:w-72 p-3 border-b lg:border-b-0 lg:border-r border-neutral-900 overflow-y-auto">

            {RULES.map(
              (
                item,
                index
              ) => (
                <button
                  key={
                    item.title
                  }
                  onClick={() =>
                    setActiveRule(
                      index
                    )
                  }
                  className={`w-full text-left rounded-xl p-3 mb-1 transition ${
                    activeRule ===
                    index
                      ? 'bg-red-950/50 border border-red-800'
                      : 'hover:bg-neutral-900 border border-transparent'
                  }`}
                >

                  <div className="flex gap-3">

                    <span className="text-lg">
                      {item.icon}
                    </span>

                    <div className="min-w-0">

                      <div className="text-[10px] font-black truncate">
                        {item.title}
                      </div>

                      <div className="text-[8px] text-neutral-600 mt-1">
                        {item.subtitle}
                      </div>

                    </div>

                  </div>

                </button>
              )
            )}

          </div>


          <div className="flex-1 overflow-y-auto p-6 md:p-8">

            <div className="grid xl:grid-cols-[1fr_0.9fr] gap-6">

              <div>

                <div className="text-6xl">
                  {rule.icon}
                </div>

                <div className="text-[9px] uppercase tracking-[0.3em] text-red-400 font-black mt-5">
                  {rule.subtitle}
                </div>

                <h3 className="text-4xl md:text-5xl font-black mt-2">
                  {rule.title}
                </h3>

                <div className="mt-6 rounded-[1.5rem] border border-neutral-800 bg-black p-6">

                  <div className="flex items-center gap-2 text-yellow-400 text-[8px] uppercase tracking-widest font-black">
                    <Crown className="w-4 h-4" />
                    Official Rule
                  </div>

                  <p className="text-sm md:text-base text-neutral-300 leading-8 mt-4">
                    {rule.text}
                  </p>

                </div>


                <div className="mt-6">

                  <div className="text-[8px] uppercase tracking-[0.25em] text-neutral-600 font-black">
                    Ask About This Rule
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">

                    <button
                      type="button"
                      disabled={
                        loading
                      }
                      onClick={() =>
                        askCodex(
                          `Explain ${rule.title} in simple words.`
                        )
                      }
                      className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
                    >
                      Explain simply
                    </button>

                    <button
                      type="button"
                      disabled={
                        loading
                      }
                      onClick={() =>
                        askCodex(
                          `Give me a practical example of ${rule.title}.`
                        )
                      }
                      className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
                    >
                      Give an example
                    </button>

                    <button
                      type="button"
                      disabled={
                        loading
                      }
                      onClick={() =>
                        askCodex(
                          `What is the most important thing players should remember about ${rule.title}?`
                        )
                      }
                      className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
                    >
                      Important detail
                    </button>

                  </div>

                </div>

              </div>


              <div className="rounded-[2rem] border border-red-900/50 bg-gradient-to-br from-red-950/30 via-black to-neutral-950 p-5 h-fit">

                <div className="flex items-start gap-3">

                  <div className="w-11 h-11 rounded-xl bg-red-600 text-black flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>

                  <div>

                    <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
                      Gemini Codex
                    </div>

                    <h3 className="text-xl font-black mt-1">
                      Ask The Rulebook
                    </h3>

                    <p className="text-[9px] text-neutral-600 mt-1">
                      Ask anything about the current tournament rules.
                    </p>

                  </div>

                </div>


                <div className="flex flex-col gap-2 mt-5">

                  <textarea
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
                          'Enter' &&
                        !event.shiftKey
                      ) {
                        event.preventDefault();
                        askCodex();
                      }
                    }}
                    rows={4}
                    placeholder="Ask the Codex..."
                    className="w-full resize-none bg-black border border-neutral-800 focus:border-red-500 rounded-xl px-4 py-3 text-xs outline-none"
                  />

                  <button
                    type="button"
                    disabled={
                      loading ||
                      !question.trim()
                    }
                    onClick={() =>
                      askCodex()
                    }
                    className="rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-600 py-3 text-xs font-black text-black"
                  >
                    {loading
                      ? 'Codex is thinking...'
                      : 'Ask Gemini'}
                  </button>

                </div>


                {loading && (
                  <div className="mt-4 rounded-2xl border border-red-900/40 bg-black p-5 text-center">

                    <div className="w-8 h-8 mx-auto rounded-full border-2 border-red-900 border-t-red-400 animate-spin" />

                    <div className="text-xs font-black mt-3">
                      Consulting the Codex...
                    </div>

                    <div className="text-[9px] text-neutral-600 mt-1">
                      Checking your question against the official rules.
                    </div>

                  </div>
                )}


                {error && (
                  <div className="mt-4 rounded-2xl border border-red-900 bg-red-950/30 p-4">

                    <div className="flex items-center gap-2 text-red-400 text-xs font-black">

                      <Lightbulb className="w-4 h-4" />

                      Codex Error

                    </div>

                    <p className="text-[9px] text-neutral-500 mt-2">
                      {error}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        askCodex()
                      }
                      className="mt-3 rounded-xl bg-red-600 px-4 py-2 text-[9px] font-black text-black"
                    >
                      Try Again
                    </button>

                  </div>
                )}


                {answer &&
                  !loading && (
                    <div className="mt-4 rounded-2xl border border-red-900/50 bg-black p-5">

                      <div className="flex items-center gap-2 text-red-400 text-[8px] uppercase tracking-[0.25em] font-black">
                        <Sparkles className="w-4 h-4" />
                        Codex Answer
                      </div>

                      <div className="text-sm text-neutral-200 leading-7 whitespace-pre-wrap mt-4">
                        {answer}
                      </div>

                      <div className="mt-4 pt-4 border-t border-neutral-900 text-[8px] text-neutral-700">
                        The official Rulebook remains authoritative. Gemini explains it but does not modify it.
                      </div>

                    </div>
                  )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SURVIVOR CARD
========================================================= */

function SurvivorCard({
  character
}) {
  const image =
    getCharacterImage(
      character
    );

  return (
    <div className="rounded-[2rem] border border-yellow-800/50 bg-gradient-to-b from-yellow-950/20 to-black overflow-hidden">

      <div className="p-4">

        <div className="flex items-center justify-between">

          <div>

            <div className="text-[8px] uppercase tracking-[0.3em] text-yellow-400 font-black">
              CURRENT SURVIVOR
            </div>

            <div className="text-[9px] text-neutral-600 mt-1">
              Carries automatically
            </div>

          </div>

          <Crown className="w-6 h-6 text-yellow-400" />

        </div>


        <div className="text-2xl font-black mt-3">
          {character?.name}
        </div>


        <div className="relative h-[320px] rounded-2xl overflow-hidden border border-yellow-900/40 mt-4">

          {image ? (
            <img
              src={
                image
              }
              alt={
                character?.name
              }
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Eye className="w-14 h-14 text-neutral-800" />
            </div>
          )}

        </div>


        <div className="text-[9px] text-yellow-500 font-black uppercase tracking-widest mt-3">
          This character continues automatically if it wins.
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   LEADERBOARD
========================================================= */

function Leaderboard({
  players
}) {
  if (
    !players?.length
  ) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-red-900/40 bg-black/80 p-5">

      <div className="flex items-center gap-2 mb-4">

        <Brain className="w-5 h-5 text-red-500" />

        <div>

          <h3 className="text-lg font-black">
            Intelligence Championship
          </h3>

          <p className="text-[8px] text-neutral-600 mt-1">
            Separate from the official character championship.
          </p>

        </div>

      </div>


      <div className="space-y-2">

        {players.map(
          (
            player
          ) => (
            <div
              key={
                player.id
              }
              className="rounded-xl border border-neutral-900 bg-neutral-950 p-3"
            >

              <div className="flex items-center gap-3">

                <div className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-[9px] font-black text-yellow-400">
                  {player.rank}
                </div>

                <div className="flex-1">

                  <div className="text-xs font-black">
                    {player.name}
                  </div>

                  <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden mt-2">

                    <div
                      className="h-full bg-gradient-to-r from-red-700 to-orange-400"
                      style={{
                        width:
                          `${player.leadPercent}%`
                      }}
                    />

                  </div>

                </div>

                <div className="text-right">

                  <div className="text-sm font-black text-red-400">
                    {player.score} pts
                  </div>

                  <div className="text-[8px] text-neutral-600">
                    {player.leadPercent}% lead
                  </div>

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}


/* =========================================================
   GEMINI AI TACTICIAN
========================================================= */

function Tactician({
  summary,
  leaderboard,
  tournament
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


  const askGeminiQuestion = async (
    customQuestion = null
  ) => {
    const finalQuestion =
      (
        customQuestion !== null
          ? customQuestion
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

    setAnswer(
      ''
    );

    setError(
      ''
    );


    const leader =
      leaderboard?.[0] ||
      null;

    const currentPhase =
      summary?.phase ||
      null;

    const survivor =
      summary?.currentSurvivor ||
      null;


    const recentMatches =
      Array.isArray(
        tournament?.matchHistory
      )
        ? tournament.matchHistory
            .slice(-8)
            .map(
              (match) =>
                `Match ${
                  match?.matchNumber ||
                  '?'
                }: ${
                  match?.survivorBefore?.name ||
                  'Unknown'
                } vs ${
                  match?.challenger?.name ||
                  'Unknown'
                } -> ${
                  match?.winner?.name ||
                  'Unknown'
                }`
            )
            .join('\n')
        : 'No completed matches yet.';


    const playerScores =
      Array.isArray(
        leaderboard
      )
        ? leaderboard
            .map(
              (player) =>
                `${
                  player?.name ||
                  'Player'
                }: ${
                  Number(
                    player?.score ||
                    0
                  )
                } points`
            )
            .join('\n')
        : 'No player scores yet.';


    const context = `
ANIME ARENA GRAND TOURNAMENT

Current phase:
${
  currentPhase?.name ||
  'Unknown'
}

Phase description:
${
  currentPhase?.description ||
  'Unknown'
}

Characters remaining:
${
  Number(
    summary?.remaining ||
    0
  )
}

Unused characters:
${
  Number(
    summary?.unusedCharacters ||
    0
  )
}

Used characters:
${
  Number(
    summary?.usedCharacters ||
    0
  )
}

Eliminated characters:
${
  Number(
    summary?.eliminated ||
    0
  )
}

Completed battles:
${
  Number(
    summary?.completedBattles ||
    0
  )
}

Battles remaining:
${
  Number(
    summary?.battlesRemaining ||
    0
  )
}

Progress:
${
  Number(
    summary?.progress ||
    0
  )
}%

Current survivor:
${
  survivor?.name ||
  'None'
}

Official champion:
${
  summary?.champion?.name ||
  'Not decided'
}

Current Intelligence leader:
${
  leader?.name ||
  'No leader yet'
}

Current leader score:
${
  Number(
    leader?.score ||
    0
  )
}

PLAYER SCORES:

${playerScores}

RECENT MATCHES:

${recentMatches}
`.trim();


    try {
      const response =
        await askGemini({
          system: `
You are the official Anime Arena Grand Tournament AI Tactician.

Use the supplied tournament state as authoritative.

Rules:
- The final surviving character is the Character Champion.
- The highest scoring player is the Intelligence Champion.
- The Arena randomly assigns every new challenger.
- Used characters cannot return as new challengers.
- A winning character automatically continues as the current survivor.
- Intelligence Points do not decide the official battle result.
- Never invent players, characters, scores, matches or rules.
- Separate actual tournament facts from tactical opinion.
- Keep answers engaging and concise.
`.trim(),

          prompt: finalQuestion,

          context
        });

      setAnswer(
        response ||
        'No answer returned.'
      );

    } catch (
      requestError
    ) {
      setError(
        requestError?.message ||
        'Gemini could not answer right now.'
      );

    } finally {
      setLoading(
        false
      );
    }
  };


  return (
    <section className="mt-8 rounded-[2rem] border border-red-900/50 bg-gradient-to-br from-red-950/30 via-black to-neutral-950 p-5 shadow-2xl">

      <div className="flex items-start gap-3">

        <div className="w-11 h-11 rounded-xl bg-red-600 text-black flex items-center justify-center">
          <Brain className="w-5 h-5" />
        </div>

        <div>

          <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
            Gemini Tactical Chamber
          </div>

          <h3 className="text-xl font-black mt-1">
            AI Tactician
          </h3>

          <p className="text-[9px] text-neutral-600 mt-1">
            Real Gemini analysis of the live tournament.
          </p>

        </div>

      </div>


      <div className="flex flex-wrap gap-2 mt-5">

        <button
          type="button"
          disabled={
            loading
          }
          onClick={() =>
            askGeminiQuestion(
              'Who is currently winning the Intelligence Championship?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Who is winning?
        </button>


        <button
          type="button"
          disabled={
            loading
          }
          onClick={() =>
            askGeminiQuestion(
              'Who is the current survivor?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Who is the survivor?
        </button>


        <button
          type="button"
          disabled={
            loading
          }
          onClick={() =>
            askGeminiQuestion(
              'Explain how Intelligence Points work in this tournament.'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          How do points work?
        </button>


        <button
          type="button"
          disabled={
            loading
          }
          onClick={() =>
            askGeminiQuestion(
              'Can a character that has already entered a match be drawn again?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Can a character return?
        </button>


        <button
          type="button"
          disabled={
            loading
          }
          onClick={() =>
            askGeminiQuestion(
              'What phase is the tournament currently in?'
            )
          }
          className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white disabled:opacity-40"
        >
          Current phase?
        </button>

      </div>


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
              askGeminiQuestion();
            }
          }}
          placeholder="Ask the Tactician..."
          className="flex-1 bg-black border border-neutral-800 focus:border-red-500 rounded-xl px-4 py-3 text-xs outline-none"
        />


        <button
          type="button"
          disabled={
            loading ||
            !question.trim()
          }
          onClick={() =>
            askGeminiQuestion()
          }
          className="rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-600 px-5 py-3 text-xs font-black text-black"
        >
          {loading
            ? 'Thinking...'
            : 'Ask Gemini'}
        </button>

      </div>


      {loading && (
        <div className="mt-4 rounded-2xl border border-red-900/40 bg-black p-5 text-center">

          <div className="w-8 h-8 mx-auto rounded-full border-2 border-red-900 border-t-red-400 animate-spin" />

          <div className="text-xs font-black mt-3">
            Tactician is analyzing...
          </div>

          <div className="text-[9px] text-neutral-600 mt-1">
            Reading the current tournament state.
          </div>

        </div>
      )}


      {error && (
        <div className="mt-4 rounded-2xl border border-red-900 bg-red-950/30 p-4">

          <div className="text-xs font-black text-red-400">
            AI Connection Problem
          </div>

          <p className="text-[9px] text-neutral-500 mt-2">
            {error}
          </p>

          <button
            type="button"
            onClick={() =>
              askGeminiQuestion()
            }
            className="mt-3 rounded-xl bg-red-600 px-4 py-2 text-[9px] font-black text-black"
          >
            Try Again
          </button>

        </div>
      )}


      {answer &&
        !loading && (
          <div className="mt-4 rounded-2xl border border-red-900/50 bg-black p-5">

            <div className="flex items-center gap-2 text-red-400 text-[8px] uppercase tracking-[0.25em] font-black">
              <Sparkles className="w-4 h-4" />
              Gemini Tactical Briefing
            </div>

            <div className="text-sm text-neutral-200 leading-7 mt-4 whitespace-pre-wrap">
              {answer}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-900 text-[8px] text-neutral-700">
              Gemini provides analysis only. The tournament engine remains authoritative.
            </div>

          </div>
        )}

    </section>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TournamentMode({
  onBack,
  onStartTournament,
  characterPool = []
}) {
  const [
    players,
    setPlayers
  ] = useState([
    {
      id: 'player-1',
      name: 'Player 1'
    },

    {
      id: 'player-2',
      name: 'Player 2'
    },

    {
      id: 'player-3',
      name: 'Player 3'
    }
  ]);


  const [
    poolSize,
    setPoolSize
  ] = useState(
    Math.min(
      400,
      Math.max(
        2,
        characterPool.length
      )
    )
  );


  const [
    formMode,
    setFormMode
  ] = useState(
    'peak'
  );


  const [
    battleRule,
    setBattleRule
  ] = useState(
    'standard'
  );


  const [
    seedingMode,
    setSeedingMode
  ] = useState(
    'random'
  );


  const [
    tournament,
    setTournament
  ] = useState(null);


  const [
    stage,
    setStage
  ] = useState(
    'selection'
  );


  const [
    selectedChallenger,
    setSelectedChallenger
  ] = useState(null);


  const [
    revealState,
    setRevealState
  ] = useState(null);


  const [
    predictions,
    setPredictions
  ] = useState({});


  const [
    battleResult,
    setBattleResult
  ] = useState(null);


  const [
    error,
    setError
  ] = useState('');


  const [
    rulebookOpen,
    setRulebookOpen
  ] = useState(false);


  const [
    transition,
    setTransition
  ] = useState(null);


  const summary =
    getTournamentSummary(
      tournament
    );


  const leaderboard =
    getPlayerLeaderboard(
      tournament?.players ||
      []
    );


  const challengerPlayer =
    tournament
      ? getNextChallengerPlayer(
          tournament.players,
          tournament.matchNumber + 1
        )
      : null;


  const selectable =
    tournament
      ? getSelectableCharacters(
          tournament
        )
      : [];


  /* =======================================================
     PLAYER SETUP
  ======================================================= */

  const addPlayer = () => {
    if (
      players.length >= 8
    ) {
      return;
    }

    setPlayers(
      (current) => [
        ...current,
        {
          id:
            `player-${Date.now()}`,
          name:
            `Player ${
              current.length + 1
            }`
        }
      ]
    );
  };


  const removePlayer = () => {
    if (
      players.length <= 2
    ) {
      return;
    }

    setPlayers(
      (current) =>
        current.slice(
          0,
          -1
        )
    );
  };


  const renamePlayer = (
    id,
    name
  ) => {
    setPlayers(
      (current) =>
        current.map(
          (
            player
          ) =>
            player.id ===
            id
              ? {
                  ...player,
                  name
                }
              : player
        )
    );
  };


  /* =======================================================
     START
  ======================================================= */

  const startTournament = () => {
    setError('');

    const actualPool =
      Math.min(
        poolSize,
        characterPool.length
      );


    if (
      actualPool < 2
    ) {
      setError(
        'At least two characters are required.'
      );
      return;
    }


    const result =
      createTournament({
        characters:
          characterPool,

        players,

        poolSize:
          actualPool,

        seedingMode,

        formMode,

        battleRule
      });


    if (
      !result?.success
    ) {
      setError(
        result?.error ||
        'Tournament could not start.'
      );
      return;
    }


    setTournament(
      result
    );

    setStage(
      'selection'
    );

    if (
      typeof onStartTournament ===
      'function'
    ) {
      onStartTournament(
        result
      );
    }
  };


  /* =======================================================
     RESET MATCH
  ======================================================= */

  const resetMatch = () => {
    setSelectedChallenger(
      null
    );

    setRevealState(
      null
    );

    setPredictions(
      {}
    );

    setBattleResult(
      null
    );

    setStage(
      'selection'
    );
  };


  /* =======================================================
     RANDOM CHALLENGER
  ======================================================= */

  const drawRandomChallenger = () => {
    if (
      !tournament
    ) {
      return;
    }


    const pool =
      getSelectableCharacters(
        tournament
      );


    if (
      !pool.length
    ) {
      setError(
        'No unused characters remain for the next challenger.'
      );

      return;
    }


    const randomIndex =
      Math.floor(
        Math.random() *
        pool.length
      );


    const challenger =
      pool[
        randomIndex
      ];


    if (
      !challenger
    ) {
      setError(
        'The Arena could not select a challenger.'
      );

      return;
    }


    setError('');

    setSelectedChallenger(
      challenger
    );


    setRevealState(
      createRevealState(
        challenger,
        challengerPlayer
      )
    );


    const nextPredictions =
      {};


    tournament.players.forEach(
      (
        player
      ) => {
        nextPredictions[
          player.id
        ] = {
          opponentGuess:
            '',
          winner:
            ''
        };
      }
    );


    setPredictions(
      nextPredictions
    );


    if (
      tournament.phase.id ===
      'intel'
    ) {
      setStage(
        'intel'
      );
    } else {
      setStage(
        'visible'
      );
    }
  };


  /* =======================================================
     CLUE
  ======================================================= */

  const revealClue = (
    hintId
  ) => {
    if (
      tournament.phase.id !==
      'intel'
    ) {
      return;
    }


    setRevealState(
      (
        current
      ) =>
        revealPaidClue(
          current,
          hintId
        )
    );
  };


  /* =======================================================
     PREDICTION
  ======================================================= */

  const updatePrediction = (
    playerId,
    field,
    value
  ) => {
    setPredictions(
      (
        current
      ) => ({
        ...current,

        [playerId]: {
          ...(
            current[
              playerId
            ] ||
            {}
          ),

          [field]:
            value
        }
      })
    );
  };


  /* =======================================================
     REVEAL + INTEL SCORING
  ======================================================= */

  const revealCharacters = () => {
    if (
      !revealState ||
      !selectedChallenger
    ) {
      return;
    }


    const nextPlayers =
      tournament.players.map(
        (
          player
        ) => {
          const prediction =
            predictions[
              player.id
            ] ||
            {};


          if (
            player.id !==
            challengerPlayer?.id
          ) {
            return player;
          }


          const scored =
            scoreCharacterGuess({
              answer:
                prediction.opponentGuess,

              character:
                selectedChallenger,

              cluesUsed:
                revealState
                  ?.revealedPaidHints
                  ?.length ||
                0
            });


          return {
            ...player,

            score:
              Number(
                player.score ||
                0
              ) +
              Number(
                scored.points ||
                0
              ),

            characterGuesses:
              Number(
                player.characterGuesses ||
                0
              ) +
              1,

            correctCharacterGuesses:
              Number(
                player.correctCharacterGuesses ||
                0
              ) +
              (
                scored.correct
                  ? 1
                  : 0
              ),

            cluesUsed:
              Number(
                player.cluesUsed ||
                0
              ) +
              (
                revealState
                  ?.revealedPaidHints
                  ?.length ||
                0
              )
          };
        }
      );


    setTournament(
      (
        current
      ) => ({
        ...current,

        players:
          nextPlayers
      })
    );


    setRevealState(
      fullyRevealCharacter(
        revealState
      )
    );


    setStage(
      'visible'
    );
  };


  /* =======================================================
     BATTLE
  ======================================================= */

  const startBattle = () => {
    if (
      !tournament?.currentSurvivor ||
      !selectedChallenger
    ) {
      setError(
        'A current survivor and a challenger are required.'
      );

      return;
    }


    const survivorForm =
      getBestForm(
        tournament.currentSurvivor,
        formMode
      );


    const challengerForm =
      getBestForm(
        selectedChallenger,
        formMode
      );


    const result =
      runSurvivalBattle({
        leftCharacter:
          tournament.currentSurvivor,

        rightCharacter:
          selectedChallenger,

        leftForm:
          survivorForm,

        rightForm:
          challengerForm
      });


    if (
      !result?.success
    ) {
      setError(
        result?.error ||
        'The battle could not be completed.'
      );

      return;
    }


    const predictionPoints =
      Number(
        tournament
          ?.phase
          ?.battlePredictionPoints ||
        0
      );


    const nextPlayers =
      tournament.players.map(
        (
          player
        ) => {
          const prediction =
            predictions[
              player.id
            ];


          if (
            !prediction?.winner
          ) {
            return player;
          }


          const correct =
            prediction.winner ===
            result.winner;


          return {
            ...player,

            score:
              Number(
                player.score ||
                0
              ) +
              (
                correct
                  ? predictionPoints
                  : 0
              ),

            battlePredictions:
              Number(
                player.battlePredictions ||
                0
              ) +
              1,

            correctBattlePredictions:
              Number(
                player.correctBattlePredictions ||
                0
              ) +
              (
                correct
                  ? 1
                  : 0
              )
          };
        }
      );


    setTournament(
      (
        current
      ) => ({
        ...current,

        players:
          nextPlayers
      })
    );


    setBattleResult(
      result
    );


    setStage(
      'battle-result'
    );
  };


  /* =======================================================
     FINISH BATTLE
  ======================================================= */

  const finishBattle = () => {
    if (
      !tournament ||
      !battleResult
    ) {
      return;
    }


    const updated =
      recordMatch(
        tournament,
        {
          challenger:
            selectedChallenger,

          survivor:
            tournament.currentSurvivor,

          winnerCharacter:
            battleResult.winnerCharacter,

          loserCharacter:
            battleResult.loserCharacter,

          result:
            battleResult,

          player:
            challengerPlayer
        }
      );


    if (
      updated ===
      tournament
    ) {
      setError(
        'The match could not be recorded. The character may already have been used.'
      );

      return;
    }


    setTournament(
      updated
    );


    if (
      updated.status ===
      'completed'
    ) {
      resetMatch();
      return;
    }


    if (
      updated.transition
    ) {
      setTransition(
        updated.transition
      );

      setSelectedChallenger(
        null
      );

      setRevealState(
        null
      );

      setPredictions(
        {}
      );

      setBattleResult(
        null
      );

      setStage(
        'transition'
      );

      return;
    }


    resetMatch();
  };


  /* =======================================================
     CONTINUE PHASE
  ======================================================= */

  const continuePhase =
    () => {
      setTournament(
        (
          current
        ) =>
          clearPhaseTransition(
            current
          )
      );

      setTransition(
        null
      );

      setStage(
        'selection'
      );
    };


  /* =======================================================
     SETUP SCREEN
  ======================================================= */

  if (
    !tournament
  ) {
    return (
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">

        <button
          onClick={
            onBack
          }
          className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Game Hub
        </button>


        <section className="max-w-4xl mx-auto text-center mt-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-red-800 bg-red-950/60 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-red-300 font-black">

            <Trophy className="w-4 h-4" />

            Anime Arena Grand Tournament

          </div>


          <h1 className="text-5xl md:text-7xl font-black mt-5">

            LAST

            <span className="text-red-500">
              {' '}ONE
            </span>

            {' '}STANDING

          </h1>


          <p className="text-sm text-neutral-400 leading-7 max-w-2xl mx-auto mt-5">
            1v1 survival from the first challenger to the Grand Final.
            The Arena randomly selects every new challenger.
          </p>


          <button
            onClick={() =>
              setRulebookOpen(
                true
              )
            }
            className="mt-6 rounded-2xl border border-red-900 bg-black/70 px-6 py-3 text-xs font-black"
          >

            <BookOpen className="w-4 h-4 inline-block mr-2" />

            Open Tournament Codex

          </button>

        </section>


        {/* PLAYER LOBBY */}

        <section className="mt-10 rounded-[2rem] border border-red-900/40 bg-black/80 p-5">

          <div className="flex items-center justify-between gap-3">

            <div>

              <div className="flex items-center gap-2">

                <Users className="w-5 h-5 text-red-500" />

                <h2 className="text-xl font-black">
                  Player Lobby
                </h2>

              </div>

              <p className="text-[9px] text-neutral-600 mt-1">
                2–8 players. Challenger turns rotate automatically.
              </p>

            </div>


            <div className="flex gap-2">

              <button
                onClick={
                  removePlayer
                }
                disabled={
                  players.length <= 2
                }
                className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs font-black disabled:opacity-30"
              >
                − Remove
              </button>


              <button
                onClick={
                  addPlayer
                }
                disabled={
                  players.length >= 8
                }
                className="rounded-xl bg-red-600 px-4 py-2 text-xs font-black text-black disabled:opacity-30"
              >
                + Add Player
              </button>

            </div>

          </div>


          <div className="grid md:grid-cols-2 gap-3 mt-5">

            {players.map(
              (
                player,
                index
              ) => (
                <div
                  key={
                    player.id
                  }
                  className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-3"
                >

                  <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-900 flex items-center justify-center text-xs font-black text-red-400">
                    P{index + 1}
                  </div>

                  <input
                    value={
                      player.name
                    }
                    onChange={(
                      event
                    ) =>
                      renamePlayer(
                        player.id,
                        event.target.value
                      )
                    }
                    className="flex-1 bg-black border border-neutral-800 focus:border-red-500 rounded-xl px-3 py-3 text-xs font-black outline-none"
                  />

                </div>
              )
            )}

          </div>

        </section>


        {/* CHARACTER POOL */}

        <section className="mt-5 rounded-[2rem] border border-neutral-800 bg-black/80 p-5">

          <div className="flex items-center gap-2">

            <Sparkles className="w-5 h-5 text-red-500" />

            <h2 className="text-xl font-black">
              Character Pool
            </h2>

          </div>


          <p className="text-[9px] text-neutral-600 mt-2">
            Loaded:
            {' '}
            {
              characterPool.length
            }
            {' '}characters
          </p>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">

            {POOL_OPTIONS.map(
              (
                option
              ) => {

                const unavailable =
                  characterPool.length <
                  option[0];

                const selected =
                  poolSize ===
                  option[0];

                return (
                  <button
                    key={
                      option[0]
                    }
                    disabled={
                      unavailable
                    }
                    onClick={() =>
                      setPoolSize(
                        option[0]
                      )
                    }
                    className={`rounded-2xl border p-4 text-left ${
                      selected
                        ? 'border-red-500 bg-red-950/50'
                        : unavailable
                          ? 'border-neutral-900 opacity-30'
                          : 'border-neutral-800 bg-neutral-950'
                    }`}
                  >

                    <div className="font-black">
                      {option[1]}
                    </div>

                    <div className="text-[8px] text-neutral-600 mt-2">
                      {option[2]}
                    </div>

                  </button>
                );
              }
            )}

          </div>

        </section>


        {/* SETTINGS */}

        <section className="grid lg:grid-cols-3 gap-4 mt-5">

          <Settings
            title="Seeding"
            icon="🎲"
          >

            <button
              onClick={() =>
                setSeedingMode(
                  'random'
                )
              }
              className={`w-full rounded-xl border py-3 text-xs font-black ${
                seedingMode ===
                'random'
                  ? 'border-red-500 bg-red-950/40'
                  : 'border-neutral-800'
              }`}
            >
              Random
            </button>


            <button
              onClick={() =>
                setSeedingMode(
                  'balanced'
                )
              }
              className={`w-full rounded-xl border py-3 text-xs font-black mt-2 ${
                seedingMode ===
                'balanced'
                  ? 'border-red-500 bg-red-950/40'
                  : 'border-neutral-800'
              }`}
            >
              Balanced
            </button>

          </Settings>


          <Settings
            title="Forms"
            icon="👑"
          >

            <button
              onClick={() =>
                setFormMode(
                  'peak'
                )
              }
              className={`w-full rounded-xl border py-3 text-xs font-black ${
                formMode ===
                'peak'
                  ? 'border-red-500 bg-red-950/40'
                  : 'border-neutral-800'
              }`}
            >
              Peak Form
            </button>


            <button
              onClick={() =>
                setFormMode(
                  'random'
                )
              }
              className={`w-full rounded-xl border py-3 text-xs font-black mt-2 ${
                formMode ===
                'random'
                  ? 'border-red-500 bg-red-950/40'
                  : 'border-neutral-800'
              }`}
            >
              Random Form
            </button>

          </Settings>


          <Settings
            title="Battle Rule"
            icon="⚔️"
          >

            <select
              value={
                battleRule
              }
              onChange={(
                event
              ) =>
                setBattleRule(
                  event.target.value
                )
              }
              className="w-full bg-black border border-neutral-800 rounded-xl px-3 py-3 text-xs font-black"
            >

              <option value="standard">
                ⚔️ Standard
              </option>

              <option value="equalStats">
                ⚖️ Equal Stats
              </option>

              <option value="fullArsenal">
                🔥 Full Arsenal
              </option>

              <option value="noHax">
                🚫 No Hax
              </option>

              <option value="pureCombat">
                👊 Pure Combat
              </option>

              <option value="speedEqualized">
                ⚡ Speed Equalized
              </option>

              <option value="haxBattle">
                🌀 Hax Battle
              </option>

            </select>

          </Settings>

        </section>


        {error && (
          <div className="mt-5 rounded-2xl border border-red-800 bg-red-950/50 p-4 text-xs text-red-300">
            {error}
          </div>
        )}


        <button
          onClick={
            startTournament
          }
          className="w-full mt-7 rounded-2xl bg-red-600 hover:bg-red-500 py-5 text-black font-black uppercase tracking-[0.2em]"
        >

          <Play className="w-5 h-5 inline-block mr-2" />

          Enter The Arena

        </button>


        <Rulebook
          open={
            rulebookOpen
          }
          onClose={() =>
            setRulebookOpen(
              false
            )
          }
          tournament={
            tournament
          }
          summary={
            summary
          }
          leaderboard={
            leaderboard
          }
        />

      </main>
    );
  }


  /* =======================================================
     OFFICIAL CHAMPION
  ======================================================= */

  if (
    tournament.status ===
      'completed' &&
    tournament.champion
  ) {
    const leader =
      leaderboard[0];


    return (
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-10">

        <section className="rounded-[2rem] border border-yellow-700/50 bg-black/90 p-8 md:p-12 text-center">

          <Crown className="w-16 h-16 text-yellow-400 mx-auto" />

          <div className="text-[9px] uppercase tracking-[0.3em] text-yellow-400 font-black mt-5">
            OFFICIAL CHARACTER CHAMPION
          </div>

          <h1 className="text-5xl md:text-7xl font-black mt-3">
            {
              tournament
                .champion
                .name
            }
          </h1>

          <p className="text-sm text-neutral-500 mt-3">
            The last surviving character.
          </p>


          <div className="grid md:grid-cols-2 gap-4 mt-10">

            <div className="rounded-2xl border border-yellow-800/50 bg-yellow-950/10 p-6">

              <Crown className="w-8 h-8 text-yellow-400 mx-auto" />

              <div className="text-[8px] uppercase tracking-widest text-yellow-400 font-black mt-4">
                Character Champion
              </div>

              <div className="text-xl font-black mt-2">
                {
                  tournament
                    .champion
                    .name
                }
              </div>

            </div>


            <div className="rounded-2xl border border-red-800/50 bg-red-950/10 p-6">

              <Brain className="w-8 h-8 text-red-400 mx-auto" />

              <div className="text-[8px] uppercase tracking-widest text-red-400 font-black mt-4">
                Intelligence Champion
              </div>

              <div className="text-xl font-black mt-2">
                {
                  leader?.name ||
                  '—'
                }
              </div>

              <div className="text-[9px] text-neutral-600 mt-1">
                {
                  leader?.score ||
                  0
                }
                {' '}points
              </div>

            </div>

          </div>


          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <button
              onClick={() =>
                setRulebookOpen(
                  true
                )
              }
              className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-950 py-4 text-xs font-black"
            >

              <BookOpen className="w-4 h-4 inline-block mr-2" />

              Tournament Codex

            </button>


            <button
              onClick={() => {
                setTournament(
                  null
                );

                resetMatch();
              }}
              className="flex-1 rounded-2xl bg-red-600 hover:bg-red-500 py-4 text-xs font-black text-black"
            >

              <RotateCcw className="w-4 h-4 inline-block mr-2" />

              New Tournament

            </button>

          </div>

        </section>


        <Rulebook
          open={
            rulebookOpen
          }
          onClose={() =>
            setRulebookOpen(
              false
            )
          }
          tournament={
            tournament
          }
          summary={
            summary
          }
          leaderboard={
            leaderboard
          }
        />

      </main>
    );
  }


  /* =======================================================
     LIVE TOURNAMENT
  ======================================================= */

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">

      {/* HEADER */}

      <div className="flex flex-wrap items-center justify-between gap-3">

        <button
          onClick={
            onBack
          }
          className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-white"
        >

          <ArrowLeft className="w-4 h-4" />

          Back to Game Hub

        </button>


        <div className="flex items-center gap-2">

          <span className="rounded-full border border-red-900 bg-red-950/50 px-3 py-1.5 text-[8px] font-black text-red-400">
            {
              tournament
                .phase
                .shortName
            }
          </span>

          <span className="rounded-full border border-yellow-900 bg-yellow-950/30 px-3 py-1.5 text-[8px] font-black text-yellow-400">
            Survivor:
            {' '}
            {
              tournament
                .currentSurvivor
                ?.name
            }
          </span>

          <button
            onClick={() =>
              setRulebookOpen(
                true
              )
            }
            className="rounded-full border border-neutral-800 bg-black px-3 py-1.5 text-[8px] font-black"
          >
            Rules
          </button>

        </div>

      </div>


      {/* STATUS */}

      <section className="mt-6 rounded-[2rem] border border-red-900/50 bg-black/90 p-5">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

          <div>

            <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
              {
                tournament
                  .phase
                  .name
              }
            </div>

            <h1 className="text-4xl md:text-6xl font-black mt-2">

              {
                summary.remaining
              }

              <span className="text-red-500">
                {' '}Living
              </span>

            </h1>

            <p className="text-[10px] text-neutral-600 mt-2">
              Used:
              {' '}
              {
                summary.usedCharacters
              }
              {' '}•
              {' '}Unused:
              {' '}
              {
                summary.unusedCharacters
              }
            </p>

          </div>


          <div className="grid grid-cols-3 gap-2">

            <MiniStat
              label="Battles"
              value={
                summary.completedBattles
              }
            />

            <MiniStat
              label="To Go"
              value={
                summary.battlesRemaining
              }
            />

            <MiniStat
              label="Progress"
              value={
                `${summary.progress}%`
              }
            />

          </div>

        </div>


        <div className="h-3 bg-neutral-900 rounded-full overflow-hidden mt-5">

          <div
            className="h-full bg-gradient-to-r from-red-700 to-orange-400"
            style={{
              width:
                `${summary.progress}%`
            }}
          />

        </div>

      </section>


      {/* LEADERBOARD */}

      <div className="mt-5">

        <Leaderboard
          players={
            leaderboard
          }
        />

      </div>


      {/* ===================================================
          RANDOM DRAW SELECTION
      =================================================== */}

      {stage ===
        'selection' && (
        <section className="mt-6">

          <div className="text-center mb-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-900 bg-yellow-950/20 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-yellow-400 font-black">

              <Crown className="w-4 h-4" />

              CURRENT SURVIVOR

            </div>

            <h2 className="text-3xl md:text-5xl font-black mt-4">
              {
                tournament
                  .currentSurvivor
                  ?.name
              }
            </h2>

            <p className="text-xs text-neutral-600 mt-2 max-w-xl mx-auto">
              {
                challengerPlayer?.name ||
                'Player'
              }
              {' '}controls the turn.
              The Arena randomly draws the NEW challenger.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-5">

            <SurvivorCard
              character={
                tournament
                  .currentSurvivor
              }
            />


            <section className="rounded-[2rem] border border-red-900/50 bg-black/85 p-6 flex flex-col justify-center text-center">

              <div className="w-20 h-20 mx-auto rounded-3xl bg-red-950 border border-red-800 flex items-center justify-center">

                <Sparkles className="w-9 h-9 text-red-400" />

              </div>


              <div className="text-[9px] uppercase tracking-[0.3em] text-red-400 font-black mt-5">
                ARENA RANDOM DRAW
              </div>


              <h3 className="text-2xl font-black mt-2">
                The Arena Chooses
              </h3>


              <p className="text-xs text-neutral-500 leading-6 mt-3 max-w-md mx-auto">
                The next challenger is randomly selected
                from the unused character pool.
                No player can manually choose the character.
              </p>


              <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-4 mt-5">

                <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
                  Challenger Turn
                </div>

                <div className="text-sm font-black text-white mt-2">
                  {
                    challengerPlayer?.name ||
                    'Next Player'
                  }
                </div>

                <div className="text-[9px] text-neutral-600 mt-1">
                  Turn rotates • Character is random
                </div>

              </div>


              <button
                onClick={
                  drawRandomChallenger
                }
                disabled={
                  !selectable.length
                }
                className="w-full mt-5 rounded-2xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-600 py-5 text-black font-black uppercase tracking-[0.2em]"
              >

                <Sparkles className="w-5 h-5 inline-block mr-2" />

                Draw Random Challenger

              </button>


              <p className="text-[9px] text-neutral-600 mt-3">
                {
                  selectable.length
                }
                {' '}unused characters are eligible.
              </p>

            </section>

          </div>

        </section>
      )}


      {/* ===================================================
          INTEL PHASE
      =================================================== */}

      {stage ===
        'intel' && (
        <section className="mt-6">

          <div className="text-center mb-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-900 bg-red-950/20 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-red-400 font-black">

              <Eye className="w-4 h-4" />

              Intel Phase

            </div>


            <h2 className="text-3xl md:text-5xl font-black mt-4">
              Who Dares Challenge The Survivor?
            </h2>


            <p className="text-xs text-neutral-600 max-w-xl mx-auto mt-2">
              The current survivor is known.
              The Arena-selected NEW challenger is the mystery.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-5">

            <SurvivorCard
              character={
                tournament
                  .currentSurvivor
              }
            />


            <BlindReveal
              side="right"
              revealState={
                revealState
              }
              intelPhase
              translucent
              onRevealPaidClue={
                revealClue
              }
            />

          </div>


          {/* PREDICTIONS */}

          <section className="mt-5 rounded-[2rem] border border-yellow-900/40 bg-yellow-950/10 p-5">

            <div className="flex items-center gap-2">

              <Brain className="w-5 h-5 text-yellow-400" />

              <h3 className="text-lg font-black">
                Knowledge Lock-In
              </h3>

            </div>


            <div className="grid md:grid-cols-2 gap-3 mt-4">

              {
                tournament
                  .players
                  .map(
                    (
                      player
                    ) => {
                      const prediction =
                        predictions[
                          player.id
                        ] ||
                        {};


                      if (
                        player.id ===
                        challengerPlayer?.id
                      ) {
                        return (
                          <div
                            key={
                              player.id
                            }
                            className="rounded-2xl border border-neutral-800 bg-black p-4"
                          >

                            <div className="text-[8px] uppercase tracking-widest text-red-400 font-black">
                              {
                                player.name
                              }
                            </div>

                            <div className="text-xs font-black mt-2">
                              Identify the NEW challenger
                            </div>

                            <input
                              value={
                                prediction
                                  .opponentGuess ||
                                ''
                              }
                              onChange={(
                                event
                              ) =>
                                updatePrediction(
                                  player.id,
                                  'opponentGuess',
                                  event.target.value
                                )
                              }
                              placeholder="Character name..."
                              className="w-full mt-3 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-3 text-xs outline-none"
                            />

                          </div>
                        );
                      }


                      return (
                        <div
                          key={
                            player.id
                          }
                          className="rounded-2xl border border-neutral-800 bg-black p-4"
                        >

                          <div className="text-[8px] uppercase tracking-widest text-neutral-500 font-black">
                            {
                              player.name
                            }
                          </div>


                          <div className="text-xs font-black mt-2">
                            Predict the battle winner
                          </div>


                          <div className="grid grid-cols-2 gap-2 mt-3">

                            <button
                              onClick={() =>
                                updatePrediction(
                                  player.id,
                                  'winner',
                                  'left'
                                )
                              }
                              className={`rounded-xl border py-3 text-[9px] font-black ${
                                prediction
                                  .winner ===
                                'left'
                                  ? 'border-yellow-500 bg-yellow-950/30'
                                  : 'border-neutral-800 bg-neutral-950'
                              }`}
                            >
                              SURVIVOR
                            </button>


                            <button
                              onClick={() =>
                                updatePrediction(
                                  player.id,
                                  'winner',
                                  'right'
                                )
                              }
                              className={`rounded-xl border py-3 text-[9px] font-black ${
                                prediction
                                  .winner ===
                                'right'
                                  ? 'border-red-500 bg-red-950/40'
                                  : 'border-neutral-800 bg-neutral-950'
                              }`}
                            >
                              CHALLENGER
                            </button>

                          </div>

                        </div>
                      );
                    }
                  )
              }

            </div>


            <button
              onClick={
                revealCharacters
              }
              className="w-full mt-5 rounded-2xl bg-red-600 hover:bg-red-500 py-5 text-black font-black uppercase tracking-[0.2em]"
            >

              <Eye className="w-5 h-5 inline-block mr-2" />

              Reveal Challenger

            </button>

          </section>

        </section>
      )}


      {/* ===================================================
          VISIBLE BATTLE
      =================================================== */}

      {stage ===
        'visible' && (
        <section className="mt-6">

          <div className="text-center mb-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-green-950/20 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-green-400 font-black">

              <CheckCircle2 className="w-4 h-4" />

              FIGHTERS REVEALED

            </div>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              BATTLE READY
            </h2>

          </div>


          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-5 items-center">

            <SurvivorCard
              character={
                tournament
                  .currentSurvivor
              }
            />


            <div className="w-20 h-20 rounded-full border-2 border-red-600 bg-black flex items-center justify-center mx-auto">

              <span className="text-red-500 font-black italic">
                VS
              </span>

            </div>


            <div className="rounded-[2rem] border border-red-900/50 bg-black/90 overflow-hidden">

              <div className="p-4">

                <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
                  NEW CHALLENGER
                </div>

                <div className="text-[9px] text-neutral-600 mt-1">
                  {
                    challengerPlayer?.name
                  }
                </div>

                <div className="text-2xl font-black mt-2">
                  {
                    selectedChallenger
                      ?.name
                  }
                </div>


                <div className="relative h-[320px] rounded-2xl overflow-hidden border border-neutral-900 mt-4">

                  {
                    getCharacterImage(
                      selectedChallenger
                    ) ? (
                      <img
                        src={
                          getCharacterImage(
                            selectedChallenger
                          )
                        }
                        alt={
                          selectedChallenger
                            ?.name
                        }
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Eye className="w-14 h-14 text-neutral-800" />
                      </div>
                    )
                  }

                </div>

              </div>

            </div>

          </div>


          <button
            onClick={
              startBattle
            }
            className="w-full mt-6 rounded-2xl bg-red-600 hover:bg-red-500 py-5 text-black font-black uppercase tracking-[0.2em]"
          >

            <Swords className="w-5 h-5 inline-block mr-2" />

            ENGAGE BATTLE

          </button>

        </section>
      )}


      {/* ===================================================
          BATTLE RESULT
      =================================================== */}

      {stage ===
        'battle-result' &&
        battleResult && (
        <section className="mt-8">

          <div className="rounded-[2rem] border border-red-900/50 bg-black/90 p-6 md:p-8">

            <div className="text-center">

              <div className="text-[8px] uppercase tracking-[0.3em] text-red-400 font-black">
                SURVIVAL RESULT
              </div>


              <h2 className="text-4xl md:text-6xl font-black mt-3">
                {
                  battleResult
                    .winnerCharacter
                    ?.name
                }
              </h2>


              <p className="text-sm text-neutral-500 mt-2">
                survives.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-4 mt-7">

              <ResultCard
                character={
                  tournament
                    .currentSurvivor
                }
                form={
                  battleResult
                    .leftForm
                }
                score={
                  battleResult
                    .leftScore
                }
                winner={
                  battleResult
                    .winner ===
                  'left'
                }
              />


              <ResultCard
                character={
                  selectedChallenger
                }
                form={
                  battleResult
                    .rightForm
                }
                score={
                  battleResult
                    .rightScore
                }
                winner={
                  battleResult
                    .winner ===
                  'right'
                }
              />

            </div>


            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 mt-5">

              <div className="text-[8px] uppercase tracking-widest text-red-400 font-black">
                Tactical Verdict
              </div>

              <p className="text-sm text-neutral-300 leading-7 mt-3">
                {
                  battleResult
                    .explanation
                }
              </p>

            </div>


            <button
              onClick={
                finishBattle
              }
              className="w-full mt-5 rounded-2xl bg-red-600 hover:bg-red-500 py-5 text-black font-black uppercase tracking-[0.2em]"
            >

              <Trophy className="w-5 h-5 inline-block mr-2" />

              Confirm Result

            </button>

          </div>

        </section>
      )}


      {/* ===================================================
          PHASE TRANSITION
      =================================================== */}

      {stage ===
        'transition' &&
        transition && (
        <PhaseTransition
          transition={
            transition
          }
          onContinue={
            continuePhase
          }
          onRules={() =>
            setRulebookOpen(
              true
            )
          }
        />
      )}


      {/* AI TACTICIAN */}

      <Tactician
        summary={
          summary
        }
        leaderboard={
          leaderboard
        }
        tournament={
          tournament
        }
      />


      {/* ===================================================
          HISTORY
      =================================================== */}

      {
        tournament
          .matchHistory
          .length > 0 && (
          <section className="mt-8">

            <div className="flex items-center gap-2 mb-4">

              <BarChart3 className="w-5 h-5 text-red-500" />

              <h2 className="text-xl font-black">
                Survival History
              </h2>

            </div>


            <div className="space-y-2">

              {
                tournament
                  .matchHistory
                  .slice(-8)
                  .reverse()
                  .map(
                    (
                      match
                    ) => (
                      <div
                        key={
                          match.id
                        }
                        className="rounded-2xl border border-neutral-900 bg-black/70 p-4"
                      >

                        <div className="text-[8px] uppercase tracking-widest text-neutral-600">
                          Match {
                            match.matchNumber
                          }
                        </div>


                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">

                          <div>

                            <div className="text-sm font-black">

                              {
                                match
                                  .survivorBefore
                                  ?.name
                              }

                              {' '}

                              <span className="text-red-500">
                                VS
                              </span>

                              {' '}

                              {
                                match
                                  .challenger
                                  ?.name
                              }

                            </div>

                          </div>


                          <div className="text-right">

                            <div className="text-xs text-green-400 font-black">
                              {
                                match
                                  .winner
                                  ?.name
                              }
                            </div>

                            <div className="text-[8px] text-neutral-700 mt-1">
                              survives
                            </div>

                          </div>

                        </div>

                      </div>
                    )
                  )
              }

            </div>

          </section>
        )
      }


      <Rulebook
        open={
          rulebookOpen
        }
        onClose={() =>
          setRulebookOpen(
            false
          )
        }
        tournament={
          tournament
        }
        summary={
          summary
        }
        leaderboard={
          leaderboard
        }
      />

    </main>
  );
}


/* =========================================================
   SETTINGS
========================================================= */

function Settings({
  title,
  icon,
  children
}) {
  return (
    <div className="rounded-[2rem] border border-neutral-800 bg-black/80 p-5">

      <div className="flex items-center gap-2 mb-4">

        <span className="text-lg">
          {icon}
        </span>

        <h3 className="font-black">
          {title}
        </h3>

      </div>

      {children}

    </div>
  );
}


/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({
  label,
  value
}) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3">

      <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
        {label}
      </div>

      <div className="text-lg font-black mt-1">
        {value}
      </div>

    </div>
  );
}


/* =========================================================
   RESULT CARD
========================================================= */

function ResultCard({
  character,
  form,
  score,
  winner
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        winner
          ? 'border-green-700 bg-green-950/20'
          : 'border-neutral-800 bg-neutral-950'
      }`}
    >

      <div className="flex items-center justify-between">

        <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
          {
            winner
              ? 'SURVIVES'
              : 'ELIMINATED'
          }
        </div>

        {
          winner && (
            <Crown className="w-5 h-5 text-yellow-400" />
          )
        }

      </div>


      <div className="text-2xl font-black mt-2">
        {
          character?.name
        }
      </div>


      <div className="text-[9px] text-red-400 mt-1">
        {
          form?.name ||
          'Base Form'
        }
      </div>


      <div className="text-lg font-black mt-5">
        Score:{' '}
        {
          Math.round(
            Number(
              score ||
              0
            )
          )
        }
      </div>

    </div>
  );
}


/* =========================================================
   PHASE TRANSITION
========================================================= */

function PhaseTransition({
  transition,
  onContinue,
  onRules
}) {
  const next =
    transition?.to;

  if (!next) {
    return null;
  }


  const icon =
    next.id === 'standard'
      ? '🃏'
      : next.id === 'elite'
        ? '🔥'
        : next.id === 'finalFour'
          ? '💀'
          : next.id === 'semifinal'
            ? '⚔️'
            : next.id === 'final'
              ? '👑'
              : '🏆';


  return (
    <div className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">

      <div className="max-w-2xl w-full rounded-[2rem] border border-red-900/60 bg-neutral-950 p-8 text-center">

        <div className="text-6xl">
          {icon}
        </div>


        <div className="text-[9px] uppercase tracking-[0.3em] text-red-400 font-black mt-5">
          PHASE COMPLETE
        </div>


        <h2 className="text-4xl md:text-5xl font-black mt-2">
          {
            next.name
          }
        </h2>


        <p className="text-sm text-neutral-400 leading-7 mt-4">
          {
            next.description
          }
        </p>


        <div className="grid grid-cols-2 gap-3 mt-7">

          <div className="rounded-2xl border border-neutral-900 bg-black p-4">

            <div className="text-[8px] uppercase tracking-widest text-neutral-600">
              Characters Alive
            </div>

            <div className="text-2xl font-black mt-2">
              {
                transition.remaining
              }
            </div>

          </div>


          <div className="rounded-2xl border border-neutral-900 bg-black p-4">

            <div className="text-[8px] uppercase tracking-widest text-neutral-600">
              Next Phase
            </div>

            <div className="text-sm font-black text-red-400 mt-2">
              {
                next.shortName
              }
            </div>

          </div>

        </div>


        <div className="grid sm:grid-cols-2 gap-3 mt-7">

          <button
            onClick={
              onRules
            }
            className="rounded-xl border border-neutral-800 bg-black py-4 text-xs font-black"
          >

            <BookOpen className="w-4 h-4 inline-block mr-2" />

            Phase Rules

          </button>


          <button
            onClick={
              onContinue
            }
            className="rounded-xl bg-red-600 hover:bg-red-500 py-4 text-xs font-black text-black"
          >

            Continue

            <ChevronRight className="w-4 h-4 inline-block ml-2" />

          </button>

        </div>

      </div>

    </div>
  );
}