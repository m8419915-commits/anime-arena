import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import AIBattleVerdict from '../components/AIBattleVerdict';

import {
  ArrowLeft,
  Swords,
  Search,
  Trophy,
  Brain,
  Zap,
  Sparkles,
  RotateCcw,
  Target,
  Crown,
  BarChart3,
  Activity,
  CircleDot,
  Crosshair,
  Flame,
  Scale
} from 'lucide-react';

import {
  analyzeBattle,
  getForms,
  getDefaultForm,
  BATTLE_MODES
} from '../engine/battleEngine';


/* =========================================================
   HELPERS
========================================================= */

const safeNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : 0;
};


const getCharacterId = (character) =>
  character?.id ??
  character?.name ??
  `${character?.verse || 'unknown'}-${
    character?.name || Math.random()
  }`;


const getImage = (
  character,
  form
) =>
  form?.img ||
  form?.image ||
  character?.image ||
  character?.img ||
  character?.imageUrl ||
  character?.poster ||
  null;


const formatCategory = (
  value = ''
) =>
  String(value)
    .replace(
      /([A-Z])/g,
      ' $1'
    )
    .replace(
      /^./,
      (char) =>
        char.toUpperCase()
    )
    .trim();


const flattenCharacters = (
  animeVerses = {}
) =>
  Object.entries(
    animeVerses
  ).flatMap(
    ([verseName, characters]) => {
      if (
        !Array.isArray(
          characters
        )
      ) {
        return [];
      }

      return characters
        .filter(Boolean)
        .map(
          (character) => ({
            ...character,

            verse:
              character.verse ||
              character.anime ||
              verseName
          })
        );
    }
  );


const getFormDisplayName = (
  form
) => {
  if (
    typeof form ===
    'string'
  ) {
    return form;
  }

  return (
    form?.name ||
    'Unknown Form'
  );
};


const getHaxTypes = (
  summary,
  side
) => {
  const values =
    side === 'left'
      ? summary?.leftHaxTypes
      : summary?.rightHaxTypes;

  return Array.isArray(
    values
  )
    ? values
    : [];
};


/* =========================================================
   ANALYSIS STEPS
========================================================= */

const ANALYSIS_STEPS = [
  'Locking combat forms...',
  'Comparing direct power...',
  'Analyzing speed and defense...',
  'Evaluating hax interactions...',
  'Checking win conditions...',
  'Testing practical viability...',
  'Calculating Tactical Judge verdict...'
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BattleMode({
  animeVerses = {},
  onBack
}) {
  /* -------------------------------------------------------
     DATABASE
  ------------------------------------------------------- */

  const characters = useMemo(
    () =>
      flattenCharacters(
        animeVerses
      ),
    [animeVerses]
  );


  const verses = useMemo(
    () => [
      'All',
      ...Object.keys(
        animeVerses
      )
    ],
    [animeVerses]
  );


  /* -------------------------------------------------------
     FIGHTERS
  ------------------------------------------------------- */

  const [leftCharacter, setLeftCharacter] =
    useState(null);

  const [rightCharacter, setRightCharacter] =
    useState(null);

  const [leftForm, setLeftForm] =
    useState(null);

  const [rightForm, setRightForm] =
    useState(null);


  /* -------------------------------------------------------
     SEARCH
  ------------------------------------------------------- */

  const [leftSearch, setLeftSearch] =
    useState('');

  const [rightSearch, setRightSearch] =
    useState('');

  const [leftVerse, setLeftVerse] =
    useState('All');

  const [rightVerse, setRightVerse] =
    useState('All');


  /* -------------------------------------------------------
     DROPDOWNS
  ------------------------------------------------------- */

  const [showLeftList, setShowLeftList] =
    useState(false);

  const [showRightList, setShowRightList] =
    useState(false);


  /* -------------------------------------------------------
     BATTLE
  ------------------------------------------------------- */

  const [battleResult, setBattleResult] =
    useState(null);

  const [battleMode, setBattleMode] =
    useState('standard');


  /* -------------------------------------------------------
     CINEMATIC ANALYSIS
  ------------------------------------------------------- */

  const [battleStage, setBattleStage] =
    useState('ready');

  const [analysisStep, setAnalysisStep] =
    useState(0);

  const [pendingResult, setPendingResult] =
    useState(null);


  /* =======================================================
     ANALYSIS ANIMATION
  ======================================================= */

  useEffect(() => {
    if (
      battleStage !==
      'analyzing'
    ) {
      return;
    }

    setAnalysisStep(0);

    const stepTimer =
      window.setInterval(() => {
        setAnalysisStep(
          (previous) =>
            Math.min(
              previous + 1,
              ANALYSIS_STEPS.length - 1
            )
        );
      }, 380);

    const finishTimer =
      window.setTimeout(() => {
        setBattleResult(
          pendingResult
        );

        setBattleStage(
          'result'
        );

        window.setTimeout(() => {
          document
            .getElementById(
              'battle-result'
            )
            ?.scrollIntoView({
              behavior:
                'smooth',
              block:
                'start'
            });
        }, 120);
      }, 3000);

    return () => {
      window.clearInterval(
        stepTimer
      );

      window.clearTimeout(
        finishTimer
      );
    };
  }, [
    battleStage,
    pendingResult
  ]);


  /* =======================================================
     FILTERED CHARACTERS
  ======================================================= */

  const leftOptions =
    useMemo(() => {
      const query =
        leftSearch
          .toLowerCase()
          .trim();

      return characters
        .filter(
          (character) => {
            const verseMatch =
              leftVerse ===
                'All' ||
              character.verse ===
                leftVerse;

            const nameMatch =
              !query ||
              String(
                character.name ||
                  ''
              )
                .toLowerCase()
                .includes(
                  query
                );

            return (
              verseMatch &&
              nameMatch
            );
          }
        )
        .slice(
          0,
          30
        );
    }, [
      characters,
      leftSearch,
      leftVerse
    ]);


  const rightOptions =
    useMemo(() => {
      const query =
        rightSearch
          .toLowerCase()
          .trim();

      return characters
        .filter(
          (character) => {
            const verseMatch =
              rightVerse ===
                'All' ||
              character.verse ===
                rightVerse;

            const nameMatch =
              !query ||
              String(
                character.name ||
                  ''
              )
                .toLowerCase()
                .includes(
                  query
                );

            return (
              verseMatch &&
              nameMatch
            );
          }
        )
        .slice(
          0,
          30
        );
    }, [
      characters,
      rightSearch,
      rightVerse
    ]);


  /* =======================================================
     SELECT CHARACTER
  ======================================================= */

  const selectCharacter = (
    side,
    character
  ) => {
    const defaultForm =
      getDefaultForm(
        character
      );

    if (
      side ===
      'left'
    ) {
      setLeftCharacter(
        character
      );

      setLeftForm(
        defaultForm
      );

      setShowLeftList(
        false
      );
    } else {
      setRightCharacter(
        character
      );

      setRightForm(
        defaultForm
      );

      setShowRightList(
        false
      );
    }

    setBattleResult(
      null
    );

    setBattleStage(
      'ready'
    );
  };


  /* =======================================================
     START BATTLE
  ======================================================= */

  const startBattle = () => {
    if (
      !leftCharacter ||
      !rightCharacter ||
      !leftForm ||
      !rightForm
    ) {
      return;
    }

    const result =
      analyzeBattle(
        leftCharacter,
        rightCharacter,
        leftForm,
        rightForm,
        {
          mode:
            battleMode
        }
      );

    setBattleResult(
      null
    );

    setPendingResult(
      result
    );

    setAnalysisStep(
      0
    );

    setBattleStage(
      'analyzing'
    );

    window.scrollTo({
      top: 0,
      behavior:
        'smooth'
    });
  };


  /* =======================================================
     RESET
  ======================================================= */

  const resetBattle = () => {
    setLeftCharacter(
      null
    );

    setRightCharacter(
      null
    );

    setLeftForm(
      null
    );

    setRightForm(
      null
    );

    setLeftSearch(
      ''
    );

    setRightSearch(
      ''
    );

    setLeftVerse(
      'All'
    );

    setRightVerse(
      'All'
    );

    setShowLeftList(
      false
    );

    setShowRightList(
      false
    );

    setBattleResult(
      null
    );

    setBattleMode(
      'standard'
    );

    setBattleStage(
      'ready'
    );

    setAnalysisStep(
      0
    );

    setPendingResult(
      null
    );

    window.scrollTo({
      top: 0,
      behavior:
        'smooth'
    });
  };


  /* =======================================================
     FIGHTER CARD
  ======================================================= */

  const FighterCard = ({
    side,
    character,
    form,
    search,
    setSearch,
    verse,
    setVerse,
    options,
    open,
    setOpen
  }) => {
    const isLeft =
      side ===
      'left';

    const forms =
      character
        ? getForms(
            character
          )
        : [];

    const image =
      getImage(
        character,
        form
      );

    return (
      <div className="relative">

        <div
          className={`relative overflow-hidden rounded-[2rem] border bg-black/80 backdrop-blur-xl transition-all duration-300 ${
            isLeft
              ? 'border-red-900/70 hover:border-red-500 shadow-red-950/20'
              : 'border-blue-900/70 hover:border-blue-500 shadow-blue-950/20'
          } shadow-2xl`}
        >

          {/* TOP ENERGY */}

          <div
            className={`absolute inset-x-0 top-0 h-28 blur-3xl opacity-30 ${
              isLeft
                ? 'bg-red-600'
                : 'bg-blue-600'
            }`}
          />

          <div className="relative p-5">

            {/* LABEL */}

            <div className="flex items-center justify-between">

              <div
                className={`text-[10px] uppercase tracking-[0.28em] font-black ${
                  isLeft
                    ? 'text-red-400'
                    : 'text-blue-400'
                }`}
              >
                {isLeft
                  ? 'Fighter A'
                  : 'Fighter B'}
              </div>

              <div className="text-[10px] text-neutral-600 font-black">
                {character
                  ? character.verse
                  : 'SELECT'}
              </div>

            </div>


            {character ? (
              <>

                {/* ARTWORK */}

                <div className="relative mt-4 h-[320px] sm:h-[390px] overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950">

                  {image ? (
                    <img
                      src={image}
                      alt={
                        character.name
                      }
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex flex-col items-center justify-center ${
                        isLeft
                          ? 'bg-red-950/20'
                          : 'bg-blue-950/20'
                      }`}
                    >
                      <CircleDot className="w-14 h-14 text-neutral-700" />

                      <span className="text-xs text-neutral-500 mt-3">
                        Artwork unavailable
                      </span>

                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">

                    <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-black">
                      {form?.name ||
                        'Unknown Form'}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black mt-1">
                      {
                        character.name
                      }
                    </h2>

                  </div>

                  <div
                    className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-[9px] font-black border backdrop-blur-md ${
                      isLeft
                        ? 'bg-red-950/80 border-red-700 text-red-300'
                        : 'bg-blue-950/80 border-blue-700 text-blue-300'
                    }`}
                  >
                    FORM READY
                  </div>

                </div>


                {/* FORM SELECTOR */}

                <div className="mt-4">

                  <div className="text-[9px] uppercase tracking-[0.25em] text-neutral-600 font-black">
                    Battle Form
                  </div>

                  <select
                    value={
                      form?.name ||
                      ''
                    }
                    onChange={(
                      event
                    ) => {

                      const selected =
                        forms.find(
                          (item) =>
                            item.name ===
                            event
                              .target
                              .value
                        );

                      if (
                        isLeft
                      ) {
                        setLeftForm(
                          selected ||
                            forms[0]
                        );
                      } else {
                        setRightForm(
                          selected ||
                            forms[0]
                        );
                      }

                      setBattleResult(
                        null
                      );

                      setBattleStage(
                        'ready'
                      );
                    }}
                    className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-3 text-sm font-bold outline-none focus:border-red-500"
                  >

                    {forms.map(
                      (
                        item,
                        index
                      ) => (
                        <option
                          key={`${item.name}-${index}`}
                          value={
                            item.name
                          }
                        >
                          {item.name}
                        </option>
                      )
                    )}

                  </select>

                </div>


                {/* DIRECT DATA */}

                <div className="grid grid-cols-2 gap-3 mt-3">

                  <div className="rounded-2xl bg-neutral-950 border border-neutral-900 p-4">

                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-600 font-black">

                      <Zap className="w-3 h-3" />

                      Relative Power

                    </div>

                    <div
                      className={`text-xl font-black mt-2 ${
                        isLeft
                          ? 'text-red-400'
                          : 'text-blue-400'
                      }`}
                    >
                      {safeNumber(
                        form?.relPower
                      ).toLocaleString()}
                    </div>

                  </div>


                  <div className="rounded-2xl bg-neutral-950 border border-neutral-900 p-4">

                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-600 font-black">

                      <Sparkles className="w-3 h-3" />

                      Hax

                    </div>

                    <div
                      className={`text-xl font-black mt-2 ${
                        isLeft
                          ? 'text-red-400'
                          : 'text-blue-400'
                      }`}
                    >
                      {safeNumber(
                        form?.hax
                      )}

                      <span className="text-xs text-neutral-600">
                        /100
                      </span>
                    </div>

                  </div>

                </div>


                {/* CHANGE */}

                <button
                  onClick={() =>
                    setOpen(
                      !open
                    )
                  }
                  className="w-full mt-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 py-3 text-xs font-black transition"
                >
                  Change Fighter
                </button>

              </>
            ) : (

              <button
                onClick={() =>
                  setOpen(
                    true
                  )
                }
                className={`w-full mt-4 h-[500px] rounded-[1.5rem] border border-dashed flex flex-col items-center justify-center transition ${
                  isLeft
                    ? 'border-red-900/60 hover:bg-red-950/20'
                    : 'border-blue-900/60 hover:bg-blue-950/20'
                }`}
              >

                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                    isLeft
                      ? 'bg-red-950 text-red-500'
                      : 'bg-blue-950 text-blue-500'
                  }`}
                >
                  <Search className="w-8 h-8" />
                </div>

                <div className="text-xl font-black mt-5">
                  Choose Fighter
                </div>

                <div className="text-xs text-neutral-500 mt-2">
                  Search your anime database
                </div>

              </button>

            )}

          </div>

        </div>


        {/* SEARCH PANEL */}

        {open && (
          <div className="absolute z-50 left-0 right-0 mt-3 rounded-2xl bg-black border border-neutral-800 shadow-2xl p-3">

            <div className="flex gap-2">

              <div className="relative flex-1">

                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />

                <input
                  value={
                    search
                  }
                  onChange={(
                    event
                  ) =>
                    setSearch(
                      event.target.value
                    )
                  }
                  placeholder="Search character..."
                  autoFocus
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3 py-3 text-sm outline-none focus:border-red-500"
                />

              </div>


              <select
                value={
                  verse
                }
                onChange={(
                  event
                ) =>
                  setVerse(
                    event.target.value
                  )
                }
                className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 text-xs max-w-[150px]"
              >

                {verses.map(
                  (item) => (
                    <option
                      key={item}
                      value={
                        item
                      }
                    >
                      {item}
                    </option>
                  )
                )}

              </select>

            </div>


            <div className="max-h-64 overflow-y-auto mt-2 space-y-1">

              {options.length ? (
                options.map(
                  (item) => (
                    <button
                      key={getCharacterId(
                        item
                      )}
                      onClick={() =>
                        selectCharacter(
                          side,
                          item
                        )
                      }
                      className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-900 text-left"
                    >

                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">

                        {getImage(
                          item,
                          getDefaultForm(
                            item
                          )
                        ) ? (
                          <img
                            src={getImage(
                              item,
                              getDefaultForm(
                                item
                              )
                            )}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Swords className="w-4 h-4 text-neutral-700" />
                          </div>
                        )}

                      </div>


                      <div className="min-w-0">

                        <div className="text-sm font-black truncate">
                          {
                            item.name
                          }
                        </div>

                        <div className="text-[10px] text-neutral-500 truncate">
                          {
                            item.verse
                          }
                        </div>

                      </div>

                    </button>
                  )
                )
              ) : (
                <div className="text-center py-8 text-xs text-neutral-500">
                  No characters found.
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    );
  };


  /* =======================================================
     BATTLE CONDITIONS
  ======================================================= */

  const BattleConditions = () => (
    <section className="mt-8 rounded-[2rem] border border-red-900/40 bg-black/80 backdrop-blur-xl p-5 md:p-6 shadow-2xl shadow-red-950/10">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>

          <div className="flex items-center gap-2">

            <Scale className="w-5 h-5 text-red-500" />

            <h3 className="font-black text-lg">
              Battle Conditions
            </h3>

          </div>

          <p className="text-xs text-neutral-500 mt-1">
            Choose how the Tactical Judge evaluates the fight.
          </p>

        </div>


        <div className="text-[9px] text-red-400 uppercase tracking-widest font-black">

          {
            BATTLE_MODES[
              battleMode
            ]?.name
          }

        </div>

      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mt-5">

        {Object.values(
          BATTLE_MODES
        ).map(
          (mode) => {

            const selected =
              battleMode ===
              mode.id;

            return (
              <button
                key={
                  mode.id
                }
                onClick={() => {

                  setBattleMode(
                    mode.id
                  );

                  setBattleResult(
                    null
                  );

                  setBattleStage(
                    'ready'
                  );

                }}
                className={`group relative overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 ${
                  selected
                    ? 'bg-red-950/70 border-red-500 shadow-lg shadow-red-900/30 -translate-y-0.5'
                    : 'bg-neutral-950 border-neutral-800 hover:border-red-900 hover:bg-red-950/20'
                }`}
              >

                <div className="text-xl">
                  {
                    mode.icon
                  }
                </div>

                <div
                  className={`text-[10px] font-black mt-2 ${
                    selected
                      ? 'text-red-300'
                      : 'text-neutral-400'
                  }`}
                >
                  {
                    mode.name
                  }
                </div>

                {selected && (
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500" />
                )}

              </button>
            );
          }
        )}

      </div>


      <div className="mt-4 rounded-xl bg-neutral-950 border border-neutral-900 px-4 py-3 text-xs text-neutral-500">
        {
          BATTLE_MODES[
            battleMode
          ]?.description
        }
      </div>

    </section>
  );


  /* =======================================================
     ANALYSIS OVERLAY
  ======================================================= */

  const AnalysisOverlay = () => {

    if (
      battleStage !==
      'analyzing'
    ) {
      return null;
    }

    const progress =
      (
        (analysisStep + 1) /
        ANALYSIS_STEPS.length
      ) *
      100;

    return (
      <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">

        <div className="w-full max-w-4xl">

          {/* ENERGY CORE */}

          <div className="relative flex items-center justify-center h-44 md:h-56">

            <div className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full border border-red-600/20 animate-ping" />

            <div className="absolute w-32 h-32 md:w-44 md:h-44 rounded-full border border-red-500/30 animate-spin" />

            <div className="absolute w-24 h-24 rounded-full bg-red-600/20 blur-2xl animate-pulse" />

            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-red-500 bg-black flex items-center justify-center shadow-2xl shadow-red-600/50">

              <Swords className="w-8 h-8 md:w-10 md:h-10 text-red-500 animate-pulse" />

            </div>

          </div>


          {/* FIGHTERS */}

          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-center mt-4">

            <div className="animate-pulse min-w-0">

              <div className="text-[10px] uppercase tracking-[0.3em] text-red-500 font-black">
                Fighter A
              </div>

              <div className="text-2xl md:text-4xl font-black mt-2 truncate">
                {
                  leftCharacter?.name
                }
              </div>

              <div className="text-xs text-neutral-600 mt-1 truncate">
                {
                  leftForm?.name
                }
              </div>

            </div>


            <div className="text-red-600 font-black text-lg md:text-xl">
              VS
            </div>


            <div className="animate-pulse min-w-0">

              <div className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-black">
                Fighter B
              </div>

              <div className="text-2xl md:text-4xl font-black mt-2 truncate">
                {
                  rightCharacter?.name
                }
              </div>

              <div className="text-xs text-neutral-600 mt-1 truncate">
                {
                  rightForm?.name
                }
              </div>

            </div>

          </div>


          {/* ANALYZER */}

          <div className="mt-10 max-w-xl mx-auto">

            <div className="text-center">

              <div className="text-[10px] uppercase tracking-[0.35em] text-red-500 font-black">
                Tactical Judge
              </div>

              <div className="text-lg md:text-xl font-black mt-2">
                {
                  ANALYSIS_STEPS[
                    analysisStep
                  ]
                }
              </div>

            </div>


            {/* PROGRESS */}

            <div className="mt-5 h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">

              <div
                className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-300 transition-all duration-300"
                style={{
                  width: `${progress}%`
                }}
              />

            </div>


            {/* SCANS */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">

              {[
                'POWER',
                'HAX',
                'MATCHUP',
                'PRACTICALITY'
              ].map(
                (
                  item,
                  index
                ) => {

                  const active =
                    analysisStep >=
                    index + 1;

                  return (
                    <div
                      key={
                        item
                      }
                      className={`rounded-xl border p-3 text-center text-[9px] font-black tracking-widest transition-all duration-300 ${
                        active
                          ? 'border-red-700 bg-red-950/40 text-red-300'
                          : 'border-neutral-900 bg-neutral-950 text-neutral-700'
                      }`}
                    >
                      {active
                        ? '✓ '
                        : ''}

                      {
                        item
                      }

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </div>
    );
  };


  /* =======================================================
     RESULT PANEL
  ======================================================= */

  const ResultPanel = () => {

    if (
      !battleResult ||
      battleStage !==
        'result'
    ) {
      return null;
    }


    const {
      winner,
      left,
      right,
      leftForm:
        resultLeftForm,
      rightForm:
        resultRightForm,
      leftScore,
      rightScore,
      leftProbability,
      rightProbability,
      confidence,
      categoryWinners = [],
      explanation,
      practicalVerdict,
      matchupSummary = {},
      limitations,
      leftProfile = {},
      rightProfile = {},
      modeName
    } = battleResult;


    const winnerName =
      winner ===
      'left'
        ? left
        : winner ===
          'right'
          ? right
          : 'DRAW';


    const leftHaxTypes =
      getHaxTypes(
        matchupSummary,
        'left'
      );

    const rightHaxTypes =
      getHaxTypes(
        matchupSummary,
        'right'
      );


    const profileRows = [
      ['Power', 'power'],
      ['Speed', 'speed'],
      ['Hax', 'hax'],
      ['Intelligence', 'intelligence'],
      ['Battle IQ', 'battleIQ'],
      ['Attack Power', 'attackPower'],
      ['Defense', 'defense'],
      ['Durability', 'durability'],
      ['Versatility', 'versatility'],
      ['Experience', 'experience'],
      ['Skill', 'skill'],
      ['Regeneration', 'regeneration'],
      ['Stamina', 'stamina'],
      ['Win Conditions', 'winConditions'],
      ['Legacy', 'legacy']
    ];


    /*
      Build the richer AI objects from the exact data
      already produced by Battle Engine.
    */

    const aiLeft = {
      name:
        left,

      verse:
        leftProfile?.verse ||
        leftProfile?.anime ||
        leftCharacter?.verse ||
        leftCharacter?.anime ||
        'Unknown',

      form:
        getFormDisplayName(
          resultLeftForm
        ),

      ...leftProfile,

      ...(leftProfile?.derived ||
        {})
    };


    const aiRight = {
      name:
        right,

      verse:
        rightProfile?.verse ||
        rightProfile?.anime ||
        rightCharacter?.verse ||
        rightCharacter?.anime ||
        'Unknown',

      form:
        getFormDisplayName(
          resultRightForm
        ),

      ...rightProfile,

      ...(rightProfile?.derived ||
        {})
    };


    /*
      AI receives the complete actual Battle Engine
      result instead of an invented/reconstructed result.
    */

    const aiResult = {
      winner,

      left,
      right,

      leftScore,
      rightScore,

      leftProbability,
      rightProbability,

      probability:
        winner === 'left'
          ? leftProbability
          : winner === 'right'
            ? rightProbability
            : 50,

      confidence,

      categoryWinners,

      explanation,

      practicalVerdict,

      matchupSummary,

      limitations,

      modeName
    };


    return (
      <section
        id="battle-result"
        className="mt-10 animate-[fadeIn_0.6s_ease-out]"
      >

        {/* RESULT HERO */}

        <div className="rounded-[2rem] border border-red-900/60 bg-black/90 overflow-hidden shadow-2xl shadow-red-950/20">

          <div className="relative bg-gradient-to-r from-red-950/80 via-black to-blue-950/80 p-7 md:p-10 text-center">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_55%)] pointer-events-none" />

            <div className="relative">

              <div className="inline-flex items-center gap-2 rounded-full border border-red-800 bg-red-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-red-300">

                <Trophy className="w-4 h-4" />

                {modeName} Verdict

              </div>


              <h2 className="text-4xl md:text-6xl font-black mt-5">
                {winnerName}
              </h2>


              <p className="text-sm text-neutral-500 mt-2">

                {left}
                {' — '}
                {getFormDisplayName(
                  resultLeftForm
                )}

                <span className="mx-2 text-red-500">
                  VS
                </span>

                {right}
                {' — '}
                {getFormDisplayName(
                  resultRightForm
                )}

              </p>


              {/* PROBABILITY */}

              <div className="max-w-2xl mx-auto mt-8">

                <div className="flex justify-between text-xs font-black mb-2">

                  <span className="text-red-400">
                    {left}{' '}
                    {leftProbability}%
                  </span>

                  <span className="text-blue-400">
                    {right}{' '}
                    {rightProbability}%
                  </span>

                </div>


                <div className="h-4 overflow-hidden rounded-full bg-blue-950 border border-neutral-800">

                  <div
                    className="h-full bg-gradient-to-r from-red-700 to-red-400 transition-all duration-1000"
                    style={{
                      width: `${leftProbability}%`
                    }}
                  />

                </div>


                <div className="flex justify-between mt-2 text-xs text-neutral-600 font-bold">

                  <span>
                    Score{' '}
                    {Math.round(
                      leftScore
                    )}
                  </span>

                  <span>
                    Score{' '}
                    {Math.round(
                      rightScore
                    )}
                  </span>

                </div>

              </div>


              <div className="inline-flex items-center gap-2 mt-5 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs text-neutral-400">

                <Activity className="w-4 h-4 text-red-500" />

                Confidence

                <span className="font-black text-white">
                  {confidence}%
                </span>

              </div>

            </div>

          </div>


          {/* WHY RESULT */}

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-4 p-5 md:p-7">

            <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-5">

              <div className="flex items-center gap-2">

                <Brain className="w-5 h-5 text-red-500" />

                <h3 className="text-lg font-black">
                  Why this result?
                </h3>

              </div>


              <p className="text-sm text-neutral-300 leading-7 mt-4">
                {explanation}
              </p>


              <div className="mt-5 rounded-2xl border border-red-950 bg-red-950/20 p-4">

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-400 font-black">

                  <Crosshair className="w-4 h-4" />

                  Practical Verdict

                </div>


                <p className="text-xs text-neutral-400 leading-6 mt-2">
                  {practicalVerdict}
                </p>

              </div>

            </div>


            {/* HAX PROFILE */}

            <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-5">

              <div className="flex items-center gap-2">

                <Sparkles className="w-5 h-5 text-red-500" />

                <h3 className="text-lg font-black">
                  Hax Profile
                </h3>

              </div>


              <div className="mt-4 space-y-4">

                <div>

                  <div className="text-[10px] font-black uppercase tracking-widest text-red-400">
                    {left}
                  </div>


                  <div className="flex flex-wrap gap-2 mt-2">

                    {leftHaxTypes.length ? (
                      leftHaxTypes.map(
                        (
                          type
                        ) => (
                          <span
                            key={
                              type
                            }
                            className="rounded-full border border-red-900 bg-red-950/50 px-2.5 py-1 text-[9px] font-black text-red-300"
                          >
                            {formatCategory(
                              type
                            )}
                          </span>
                        )
                      )
                    ) : (
                      <span className="text-[10px] text-neutral-600">
                        No special type detected
                      </span>
                    )}

                  </div>

                </div>


                <div className="border-t border-neutral-900 pt-4">

                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                    {right}
                  </div>


                  <div className="flex flex-wrap gap-2 mt-2">

                    {rightHaxTypes.length ? (
                      rightHaxTypes.map(
                        (
                          type
                        ) => (
                          <span
                            key={
                              type
                            }
                            className="rounded-full border border-blue-900 bg-blue-950/50 px-2.5 py-1 text-[9px] font-black text-blue-300"
                          >
                            {formatCategory(
                              type
                            )}
                          </span>
                        )
                      )
                    ) : (
                      <span className="text-[10px] text-neutral-600">
                        No special type detected
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* TACTICAL PROFILE */}

          <div className="p-5 md:p-7 border-t border-neutral-900">

            <div className="flex items-center gap-2 mb-5">

              <BarChart3 className="w-5 h-5 text-red-500" />

              <h3 className="text-lg font-black">
                Tactical Profile
              </h3>

            </div>


            <div className="space-y-3">

              {profileRows.map(
                ([label, key]) => {

                  const leftValue =
                    safeNumber(
                      leftProfile
                        ?.derived
                        ?.[key]
                    );

                  const rightValue =
                    safeNumber(
                      rightProfile
                        ?.derived
                        ?.[key]
                    );

                  const total =
                    leftValue +
                    rightValue;

                  const leftWidth =
                    total
                      ? (
                          leftValue /
                          total
                        ) *
                        100
                      : 50;


                  return (
                    <div
                      key={key}
                      className="rounded-2xl border border-neutral-900 bg-neutral-950 p-3"
                    >

                      <div className="grid grid-cols-[55px_1fr_55px] items-center gap-3">

                        <div className="text-red-400 text-sm font-black">
                          {Math.round(
                            leftValue
                          )}
                        </div>


                        <div>

                          <div className="text-[10px] uppercase tracking-widest text-neutral-500 text-center font-black">
                            {label}
                          </div>


                          <div className="mt-2 h-2 rounded-full overflow-hidden bg-blue-950">

                            <div
                              className="h-full bg-red-600 transition-all duration-700"
                              style={{
                                width: `${leftWidth}%`
                              }}
                            />

                          </div>

                        </div>


                        <div className="text-blue-400 text-sm font-black text-right">
                          {Math.round(
                            rightValue
                          )}
                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>


          {/* CATEGORY ADVANTAGES */}

          <div className="p-5 md:p-7 border-t border-neutral-900">

            <div className="flex items-center gap-2 mb-5">

              <Target className="w-5 h-5 text-red-500" />

              <h3 className="text-lg font-black">
                Category Advantages
              </h3>

            </div>


            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">

              {categoryWinners.map(
                (item) => (
                  <div
                    key={
                      item.category
                    }
                    className="rounded-2xl border border-neutral-900 bg-neutral-950 p-4"
                  >

                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-black">
                      {formatCategory(
                        item.category
                      )}
                    </div>


                    <div
                      className={`mt-2 text-sm font-black ${
                        item.winner ===
                        'left'
                          ? 'text-red-400'
                          : item.winner ===
                            'right'
                            ? 'text-blue-400'
                            : 'text-neutral-500'
                      }`}
                    >
                      {item.winner ===
                      'left'
                        ? `${left} Advantage`
                        : item.winner ===
                          'right'
                          ? `${right} Advantage`
                          : 'Even'}
                    </div>

                  </div>
                )
              )}

            </div>

          </div>


          {/* LIMITATION */}

          <div className="p-5 border-t border-neutral-900">

            <div className="text-[10px] text-neutral-600 leading-5">
              {limitations}
            </div>

          </div>


          {/* =================================================
              GEMINI AI VERDICT
          ================================================= */}

          <div className="p-5 md:p-7 border-t border-red-950/60">

            <AIBattleVerdict
              left={
                aiLeft
              }

              right={
                aiRight
              }

              result={
                aiResult
              }

              rule={
                modeName ||
                BATTLE_MODES[
                  battleMode
                ]?.name ||
                'Standard'
              }

              mode="Anime Battle"
            />

          </div>


          {/* ACTIONS */}

          <div className="p-5 border-t border-neutral-900 flex flex-col sm:flex-row gap-3">

            <button
              onClick={
                resetBattle
              }
              className="flex-1 rounded-2xl bg-red-600 hover:bg-red-500 py-4 text-black font-black flex items-center justify-center gap-2 transition hover:scale-[1.01]"
            >

              <RotateCcw className="w-4 h-4" />

              New Battle

            </button>


            <button
              onClick={() => {
                setBattleResult(
                  null
                );

                setBattleStage(
                  'ready'
                );
              }}
              className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 py-4 font-black transition"
            >

              Change Fighters

            </button>

          </div>

        </div>

      </section>
    );
  };


  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-10">

        {/* BACK */}

        <button
          onClick={
            onBack ||
            resetBattle
          }
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-white transition"
        >

          <ArrowLeft className="w-4 h-4" />

          Back to Game Hub

        </button>


        {/* HERO */}

        <section className="text-center max-w-4xl mx-auto mt-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-red-800 bg-red-950/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-red-300">

            <Swords className="w-4 h-4" />

            Anime Battle Arena

          </div>


          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-5">

            Choose.

            <span className="text-red-500">
              {' '}Clash.
            </span>

            {' '}Decide.

          </h1>


          <p className="max-w-2xl mx-auto text-sm md:text-base text-neutral-400 mt-4 leading-7">

            Choose two characters, select their exact
            forms and define the rules before the Tactical
            Judge decides the fight.

          </p>

        </section>


        {/* FIGHTERS */}

        <section className="grid lg:grid-cols-[1fr_100px_1fr] gap-5 lg:gap-3 items-center mt-10">

          <FighterCard
            side="left"
            character={
              leftCharacter
            }
            form={
              leftForm
            }
            search={
              leftSearch
            }
            setSearch={
              setLeftSearch
            }
            verse={
              leftVerse
            }
            setVerse={
              setLeftVerse
            }
            options={
              leftOptions
            }
            open={
              showLeftList
            }
            setOpen={
              setShowLeftList
            }
          />


          {/* VS */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-red-600/30 blur-2xl animate-pulse" />

              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-red-600 bg-black flex items-center justify-center shadow-2xl shadow-red-600/20">

                <span className="text-xl md:text-2xl font-black italic text-red-500">
                  VS
                </span>

              </div>

            </div>

          </div>


          <FighterCard
            side="right"
            character={
              rightCharacter
            }
            form={
              rightForm
            }
            search={
              rightSearch
            }
            setSearch={
              setRightSearch
            }
            verse={
              rightVerse
            }
            setVerse={
              setRightVerse
            }
            options={
              rightOptions
            }
            open={
              showRightList
            }
            setOpen={
              setShowRightList
            }
          />

        </section>


        {/* CONDITIONS */}

        <BattleConditions />


        {/* ENGAGE */}

        <section className="mt-8 flex flex-col items-center">

          <button
            onClick={
              startBattle
            }
            disabled={
              !leftCharacter ||
              !rightCharacter ||
              !leftForm ||
              !rightForm ||
              battleStage ===
                'analyzing'
            }
            className="group relative overflow-hidden rounded-2xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-600 px-12 md:px-16 py-5 text-black font-black uppercase tracking-[0.2em] shadow-2xl shadow-red-600/30 disabled:shadow-none transition-all duration-300 hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >

            <span className="relative z-10 flex items-center gap-3">

              <Swords className="w-5 h-5" />

              ENGAGE

              <Flame className="w-5 h-5" />

            </span>


            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20 skew-x-12" />

          </button>


          <div className="flex items-center gap-2 text-[9px] text-neutral-600 uppercase tracking-widest mt-3">

            <CircleDot className="w-3 h-3" />

            {BATTLE_MODES[
              battleMode
            ]?.name}

            <CircleDot className="w-3 h-3" />

          </div>

        </section>


        {/* RESULT */}

        <ResultPanel />

      </main>


      {/* ANALYSIS OVERLAY */}

      <AnalysisOverlay />

    </>
  );
}