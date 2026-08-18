/*
=============================================================
 ANIME ARENA — CHARACTER SURVIVAL TOURNAMENT ENGINE
=============================================================

 CORE RULE

 A character can be MANUALLY SELECTED only once per game.

 Once selected:
 - it enters the match
 - it is added to usedCharacters
 - it can NEVER be selected manually again

 If it wins:
 - it remains the current survivor
 - it automatically advances to the next match
 - it does NOT return to the selection pool

 If it loses:
 - it is permanently eliminated

 Therefore:

 400 characters
      ↓
 Current Survivor vs NEW CHARACTER
      ↓
 Winner survives
      ↓
 NEW CHARACTER is selected
      ↓
 repeat
      ↓
 last surviving character
      ↓
 OFFICIAL CHAMPION

=============================================================
*/

export const TOURNAMENT_CONFIG = {
  minPlayers: 2,
  maxPlayers: 8,
  maxPoolSize: 400
};


/* =========================================================
   HELPERS
========================================================= */

const safeNumber = (value) => {
  const n = Number(value);

  return Number.isFinite(n)
    ? n
    : 0;
};


const normalizeText = (value) =>
  String(value || '')
    .trim()
    .toLowerCase();


export const getCharacterKey = (character) => {
  if (
    character?.id !== undefined &&
    character?.id !== null
  ) {
    return String(character.id);
  }

  return [
    normalizeText(character?.verse),
    normalizeText(character?.anime),
    normalizeText(character?.name)
  ].join('::');
};


const shuffle = (array) => {
  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [result[i], result[j]] =
      [result[j], result[i]];
  }

  return result;
};


/* =========================================================
   CHARACTER POWER FOR BALANCED SEEDING ONLY
========================================================= */

const getStrongestForm = (
  character
) => {
  const forms = Array.isArray(
    character?.forms
  )
    ? character.forms
    : [];

  if (!forms.length) {
    return null;
  }

  return [...forms].sort(
    (a, b) =>
      safeNumber(
        b?.relPower
      ) -
      safeNumber(
        a?.relPower
      )
  )[0];
};


const getSeedPower = (
  character
) => {
  const form =
    getStrongestForm(
      character
    );

  return (
    safeNumber(
      form?.relPower
    ) *
      0.72 +
    safeNumber(
      form?.realPower
    ) *
      0.18 +
    safeNumber(
      form?.hax
    ) *
      450
  );
};


/* =========================================================
   PHASE DEFINITIONS
========================================================= */

export const PHASES = {
  intel: {
    id: 'intel',
    name: 'Intel Phase',
    shortName: 'INTEL',
    description:
      'Translucent fighter cards, free intel and optional clues.',
    translucent: true,
    identificationPoints: true,
    battlePredictionPoints: 5
  },

  standard: {
    id: 'standard',
    name: 'Standard Card Phase',
    shortName: 'STANDARD',
    description:
      'Fighters are fully visible. The blind system is permanently disabled.',
    translucent: false,
    identificationPoints: false,
    battlePredictionPoints: 3
  },

  elite: {
    id: 'elite',
    name: 'Elite Phase',
    shortName: 'ELITE',
    description:
      'The surviving character faces a new challenger from the unused pool.',
    translucent: false,
    identificationPoints: false,
    battlePredictionPoints: 2
  },

  finalFour: {
    id: 'finalFour',
    name: 'Final Four',
    shortName: 'FINAL FOUR',
    description:
      'Only four characters remain capable of becoming the champion.',
    translucent: false,
    identificationPoints: false,
    battlePredictionPoints: 1
  },

  semifinal: {
    id: 'semifinal',
    name: 'Semifinal',
    shortName: 'SEMIFINAL',
    description:
      'The tournament is entering its decisive stage.',
    translucent: false,
    identificationPoints: false,
    battlePredictionPoints: 1
  },

  final: {
    id: 'final',
    name: 'Grand Final',
    shortName: 'FINAL',
    description:
      'The last surviving challenger faces the current survivor.',
    translucent: false,
    identificationPoints: false,
    battlePredictionPoints: 0
  },

  champion: {
    id: 'champion',
    name: 'Champion',
    shortName: 'CHAMPION',
    description:
      'Only one character remains.',
    translucent: false,
    identificationPoints: false,
    battlePredictionPoints: 0
  }
};


/* =========================================================
   PHASE CALCULATION

   IMPORTANT:
   We now base this on the number of UNUSED characters
   remaining PLUS the current survivor.
========================================================= */

export const getPhaseForRemaining = (
  remainingCharacters
) => {
  if (
    remainingCharacters <= 1
  ) {
    return PHASES.champion;
  }

  if (
    remainingCharacters <= 2
  ) {
    return PHASES.final;
  }

  if (
    remainingCharacters <= 4
  ) {
    return PHASES.finalFour;
  }

  if (
    remainingCharacters <= 8
  ) {
    return PHASES.elite;
  }

  if (
    remainingCharacters <= 16
  ) {
    return PHASES.standard;
  }

  return PHASES.intel;
};


/* =========================================================
   PLAYER ROTATION
========================================================= */

export const getNextChallengerPlayer = (
  players,
  matchNumber
) => {
  if (
    !Array.isArray(players) ||
    players.length === 0
  ) {
    return null;
  }

  /*
    The player rotation decides who gets to choose
    the NEW challenger.

    Match 1 -> Player 1
    Match 2 -> Player 2
    Match 3 -> Player 3
    etc.
  */

  const index =
    (
      matchNumber - 1
    ) %
    players.length;

  return players[index];
};


/* =========================================================
   POOL VALIDATION
========================================================= */

export const validateTournamentPool = (
  characters
) => {
  const errors = [];
  const warnings = [];

  if (
    !Array.isArray(
      characters
    )
  ) {
    return {
      valid: false,
      errors: [
        'Character pool is not an array.'
      ],
      warnings: [],
      inputCount: 0,
      uniqueCount: 0,
      duplicateCount: 0
    };
  }

  if (
    characters.length < 2
  ) {
    errors.push(
      'At least two characters are required.'
    );
  }

  const seen = new Set();
  let duplicates = 0;

  characters.forEach(
    (character) => {
      const key =
        getCharacterKey(
          character
        );

      if (
        seen.has(key)
      ) {
        duplicates += 1;
      }

      seen.add(key);
    }
  );

  if (
    duplicates > 0
  ) {
    warnings.push(
      `${duplicates} duplicate entries will be removed.`
    );
  }

  return {
    valid:
      errors.length === 0,

    errors,
    warnings,

    inputCount:
      characters.length,

    uniqueCount:
      seen.size,

    duplicateCount:
      duplicates
  };
};


/* =========================================================
   SANITIZE
========================================================= */

export const sanitizeTournamentPool = (
  characters
) => {
  if (
    !Array.isArray(
      characters
    )
  ) {
    return [];
  }

  const seen = new Set();
  const result = [];

  characters.forEach(
    (character) => {
      if (
        !character?.name
      ) {
        return;
      }

      const key =
        getCharacterKey(
          character
        );

      if (
        seen.has(key)
      ) {
        return;
      }

      seen.add(key);

      result.push({
        ...character,

        tournamentKey:
          key,

        tournamentPower:
          getSeedPower(
            character
          )
      });
    }
  );

  return result;
};


/* =========================================================
   SEED
========================================================= */

export const seedCharacters = (
  characters,
  mode = 'random'
) => {
  if (
    mode !== 'balanced'
  ) {
    return shuffle(
      characters
    );
  }

  const sorted =
    [...characters].sort(
      (a, b) =>
        b.tournamentPower -
        a.tournamentPower
    );

  const bands = [
    [],
    [],
    [],
    []
  ];

  sorted.forEach(
    (
      character,
      index
    ) => {
      const ratio =
        index /
        Math.max(
          1,
          sorted.length
        );

      if (
        ratio < 0.25
      ) {
        bands[0].push(
          character
        );
      } else if (
        ratio < 0.50
      ) {
        bands[1].push(
          character
        );
      } else if (
        ratio < 0.75
      ) {
        bands[2].push(
          character
        );
      } else {
        bands[3].push(
          character
        );
      }
    }
  );

  bands.forEach(
    (
      band,
      index
    ) => {
      bands[index] =
        shuffle(band);
    }
  );

  const result = [];

  while (
    bands.some(
      (band) =>
        band.length > 0
    )
  ) {
    bands.forEach(
      (band) => {
        if (
          band.length
        ) {
          result.push(
            band.shift()
          );
        }
      }
    );
  }

  return result;
};


/* =========================================================
   CREATE TOURNAMENT
========================================================= */

export const createTournament = ({
  characters,
  players = [],
  poolSize = 400,
  seedingMode = 'random',
  formMode = 'peak',
  battleRule = 'standard'
}) => {
  const validation =
    validateTournamentPool(
      characters
    );

  if (
    !validation.valid
  ) {
    return {
      success: false,

      error:
        validation.errors.join(
          ' '
        ),

      validation
    };
  }

  const cleaned =
    sanitizeTournamentPool(
      characters
    );

  const requested =
    Math.min(
      400,
      Math.max(
        2,
        safeNumber(
          poolSize
        )
      )
    );

  const selected =
    cleaned.length >
    requested
      ? shuffle(
          cleaned
        ).slice(
          0,
          requested
        )
      : [...cleaned];

  const seeded =
    seedCharacters(
      selected,
      seedingMode
    );

  /*
    The FIRST character is the initial survivor.

    It has been used immediately and can never be
    manually selected again.
  */

  const initialSurvivor =
    seeded[0];

  const unusedCharacters =
    seeded.slice(1);

  const phase =
    getPhaseForRemaining(
      seeded.length
    );

  return {
    success: true,

    validation,

    config: {
      poolSize:
        seeded.length,

      seedingMode,
      formMode,
      battleRule,

      tournamentType:
        'character-survival'
    },


    players:
      players.map(
        (
          player,
          index
        ) => ({
          id:
            player.id ||
            `player-${index + 1}`,

          name:
            player.name ||
            `Player ${index + 1}`,

          score: 0,

          characterGuesses: 0,

          correctCharacterGuesses:
            0,

          battlePredictions: 0,

          correctBattlePredictions:
            0,

          upsetPredictions: 0,

          correctUpsetPredictions:
            0,

          cluesUsed: 0,

          matchesParticipated:
            0
        })
      ),


    /*
      Current champion/survivor.
    */

    currentSurvivor:
      initialSurvivor,


    /*
      Characters that have already appeared
      in a real match or as the initial survivor.

      NEVER SELECTABLE AGAIN.
    */

    usedCharacters:
      initialSurvivor
        ? [initialSurvivor]
        : [],


    /*
      Characters still eligible to become
      NEW challengers.
    */

    unusedCharacters,


    /*
      Characters eliminated from the tournament.
    */

    eliminatedCharacters:
      [],


    champion:
      null,


    matchHistory:
      [],


    currentMatch:
      null,


    matchNumber:
      0,


    /*
      For N characters there are exactly N-1 battles.
    */

    totalBattles:
      Math.max(
        0,
        seeded.length - 1
      ),


    phase,


    status:
      seeded.length === 1
        ? 'completed'
        : 'active',


    transition:
      null
  };
};


/* =========================================================
   RECORD MATCH
========================================================= */

export const recordMatch = (
  tournament,
  {
    challenger,
    survivor,
    winnerCharacter,
    loserCharacter,
    result,
    player
  }
) => {
  if (
    !tournament ||
    !challenger ||
    !survivor ||
    !winnerCharacter ||
    !loserCharacter
  ) {
    return tournament;
  }

  const challengerKey =
    getCharacterKey(
      challenger
    );

  const survivorKey =
    getCharacterKey(
      survivor
    );

  const loserKey =
    getCharacterKey(
      loserCharacter
    );

  const alreadyUsed =
    tournament.usedCharacters.some(
      (character) =>
        getCharacterKey(
          character
        ) ===
        challengerKey
    );

  /*
    A challenger must NEVER have appeared before.
  */

  if (
    alreadyUsed
  ) {
    return tournament;
  }

  /*
    The survivor must be the current survivor.
  */

  if (
    getCharacterKey(
      tournament.currentSurvivor
    ) !==
    survivorKey
  ) {
    return tournament;
  }


  const previousPhase =
    tournament.phase;


  const newUnused =
    tournament.unusedCharacters.filter(
      (character) =>
        getCharacterKey(
          character
        ) !==
        challengerKey
    );


  const newUsed = [
    ...tournament.usedCharacters,
    challenger
  ];


  const remainingPossible =
    newUnused.length +
    1;


  let nextSurvivor =
    winnerCharacter;


  const eliminated =
    [
      ...tournament.eliminatedCharacters,
      loserCharacter
    ];


  const matchNumber =
    tournament.matchNumber +
    1;


  const nextPhase =
    getPhaseForRemaining(
      remainingPossible
    );


  const match = {
    id:
      `match-${matchNumber}`,

    matchNumber,

    phaseId:
      previousPhase.id,

    phaseName:
      previousPhase.name,

    survivorBefore:
      survivor,

    challenger,

    winner:
      winnerCharacter,

    loser:
      loserCharacter,

    player:
      player || null,

    result:
      result || null,

    completedAt:
      Date.now()
  };


  /*
    If there are no unused characters left,
    the winner is the official champion.
  */

  const completed =
    newUnused.length === 0;


  const champion =
    completed
      ? nextSurvivor
      : null;


  const finalPhase =
    completed
      ? PHASES.champion
      : nextPhase;


  /*
    Transition only when the PHASE actually changes.
  */

  const phaseChanged =
    previousPhase.id !==
    finalPhase.id;


  return {
    ...tournament,

    currentSurvivor:
      nextSurvivor,

    usedCharacters:
      newUsed,

    unusedCharacters:
      newUnused,

    eliminatedCharacters:
      eliminated,

    champion,

    matchHistory: [
      ...tournament.matchHistory,
      match
    ],

    currentMatch:
      match,

    matchNumber,

    phase:
      finalPhase,

    status:
      completed
        ? 'completed'
        : 'active',

    transition:
      phaseChanged
        ? {
            from:
              previousPhase,

            to:
              finalPhase,

            matchNumber,

            remaining:
              remainingPossible
          }
        : null
  };
};


/* =========================================================
   CLEAR TRANSITION
========================================================= */

export const clearPhaseTransition = (
  tournament
) => {
  if (!tournament) {
    return tournament;
  }

  return {
    ...tournament,
    transition: null
  };
};


/* =========================================================
   SUMMARY
========================================================= */

export const getTournamentSummary = (
  tournament
) => {
  if (!tournament) {
    return null;
  }

  const unused =
    tournament
      .unusedCharacters
      .length;


  /*
    Current survivor counts as the one living
    character still in the championship.
  */

  const remaining =
    unused + 1;


  const completed =
    tournament
      .matchHistory
      .length;


  return {
    remaining,

    unusedCharacters:
      unused,

    usedCharacters:
      tournament
        .usedCharacters
        .length,

    eliminated:
      tournament
        .eliminatedCharacters
        .length,

    completedBattles:
      completed,

    totalBattles:
      tournament.totalBattles,

    battlesRemaining:
      Math.max(
        0,
        tournament.totalBattles -
          completed
      ),

    progress:
      tournament.totalBattles > 0
        ? Math.round(
            (
              completed /
              tournament.totalBattles
            ) *
            100
          )
        : 100,

    phase:
      tournament.phase,

    currentSurvivor:
      tournament.currentSurvivor,

    champion:
      tournament.champion,

    status:
      tournament.status
  };
};


/* =========================================================
   PLAYER LEADERBOARD
========================================================= */

export const getPlayerLeaderboard = (
  players
) => {
  const list =
    Array.isArray(players)
      ? players
      : [];

  const highest =
    Math.max(
      0,
      ...list.map(
        (player) =>
          safeNumber(
            player.score
          )
      )
    );

  const total =
    list.reduce(
      (
        sum,
        player
      ) =>
        sum +
        safeNumber(
          player.score
        ),
      0
    );


  return [...list]
    .sort(
      (a, b) =>
        safeNumber(
          b.score
        ) -
        safeNumber(
          a.score
        )
    )
    .map(
      (
        player,
        index
      ) => ({
        ...player,

        rank:
          index + 1,

        leadPercent:
          highest > 0
            ? Math.round(
                (
                  safeNumber(
                    player.score
                  ) /
                  highest
                ) *
                100
              )
            : 0,

        scoreShare:
          total > 0
            ? Math.round(
                (
                  safeNumber(
                    player.score
                  ) /
                  total
                ) *
                100
              )
            : 0
      })
    );
};


/* =========================================================
   GET SELECTABLE CHALLENGERS
========================================================= */

export const getSelectableCharacters = (
  tournament
) => {
  if (!tournament) {
    return [];
  }

  return [
    ...tournament.unusedCharacters
  ];
};