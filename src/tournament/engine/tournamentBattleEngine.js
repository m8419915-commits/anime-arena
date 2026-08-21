import {
  analyzeBattle,
  BATTLE_MODES,
} from "../../engine/battleEngine";

const STAT_KEYS = [
  "relativePower",
  "realPower",
  "hax",
  "speed",
  "durability",
  "attack",
  "defense",
  "intelligence",
  "stamina",
  "versatility",
];

const STAT_LABELS = {
  relativePower: "Raw Power",
  realPower: "Destructive Scale",
  hax: "Hax",
  speed: "Speed",
  durability: "Durability",
  attack: "Attack",
  defense: "Defense",
  intelligence: "Battle IQ",
  stamina: "Stamina",
  versatility: "Versatility",
};

const BATTLE_WEIGHTS = {
  standard: {
    relativePower: 0.24,
    realPower: 0.16,
    hax: 0.15,
    speed: 0.1,
    durability: 0.1,
    attack: 0.07,
    defense: 0.05,
    intelligence: 0.05,
    stamina: 0.04,
    versatility: 0.04,
  },

  equalStats: {
    relativePower: 0.03,
    realPower: 0.02,
    hax: 0.22,
    speed: 0.15,
    durability: 0.09,
    attack: 0.1,
    defense: 0.08,
    intelligence: 0.14,
    stamina: 0.06,
    versatility: 0.11,
  },

  fullArsenal: {
    relativePower: 0.15,
    realPower: 0.1,
    hax: 0.25,
    speed: 0.1,
    durability: 0.07,
    attack: 0.05,
    defense: 0.04,
    intelligence: 0.08,
    stamina: 0.04,
    versatility: 0.12,
  },

  noHax: {
    relativePower: 0.28,
    realPower: 0.18,
    hax: 0.01,
    speed: 0.12,
    durability: 0.1,
    attack: 0.1,
    defense: 0.07,
    intelligence: 0.07,
    stamina: 0.04,
    versatility: 0.03,
  },

  pureCombat: {
    relativePower: 0.27,
    realPower: 0.16,
    hax: 0.04,
    speed: 0.14,
    durability: 0.12,
    attack: 0.12,
    defense: 0.07,
    intelligence: 0.04,
    stamina: 0.02,
    versatility: 0.02,
  },

  speedEqualized: {
    relativePower: 0.23,
    realPower: 0.15,
    hax: 0.14,
    speed: 0.02,
    durability: 0.12,
    attack: 0.1,
    defense: 0.07,
    intelligence: 0.07,
    stamina: 0.05,
    versatility: 0.05,
  },

  haxBattle: {
    relativePower: 0.1,
    realPower: 0.06,
    hax: 0.35,
    speed: 0.1,
    durability: 0.06,
    attack: 0.04,
    defense: 0.04,
    intelligence: 0.1,
    stamina: 0.03,
    versatility: 0.12,
  },
};

const number = (value) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : 0;
};

const clamp = (
  value,
  min = 0,
  max = 100
) =>
  Math.max(
    min,
    Math.min(max, number(value))
  );

const getStats = (form) =>
  form?.stats || {};

const getStat = (
  form,
  statId
) =>
  clamp(
    getStats(form)[statId]
  );

const getWeights = (battleMode) =>
  BATTLE_WEIGHTS[battleMode] ||
  BATTLE_WEIGHTS.standard;

/*
  Converts our new form format to the safe format
  understood by the existing battle engine.
*/
function createLegacyFighter(
  character,
  selectedForm
) {
  const stats = getStats(selectedForm);

  const tags = [
    ...(character.tags || []),
    ...(selectedForm.abilities || []),
    selectedForm.name,
  ]
    .map((tag) => String(tag).trim())
    .filter(Boolean);

  const legacyForm = {
    id: selectedForm.id,
    name: selectedForm.name,
    img:
      selectedForm.artwork?.battle ||
      selectedForm.artwork?.card ||
      "",

    /*
      Existing battleEngine normalizes these high values.
      New database stats remain clean 0–100 values.
    */
    relPower:
      clamp(stats.relativePower) * 1000,

    realPower:
      clamp(stats.realPower) * 1700,

    hax:
      clamp(stats.hax),
  };

  return {
    id: character.id,
    name: character.name,
    tags,
    forms: [legacyForm],
  };
}

function getDirectScore(
  form,
  battleMode
) {
  const weights =
    getWeights(battleMode);

  return STAT_KEYS.reduce(
    (total, statId) =>
      total +
      getStat(form, statId) *
        weights[statId],
    0
  );
}

function buildStatComparison(
  leftForm,
  rightForm
) {
  return STAT_KEYS.map((statId) => {
    const left = getStat(
      leftForm,
      statId
    );

    const right = getStat(
      rightForm,
      statId
    );

    return {
      id: statId,
      label: STAT_LABELS[statId],
      left,
      right,

      winner:
        left === right
          ? "tie"
          : left > right
            ? "left"
            : "right",
    };
  });
}

function resolveTie({
  leftCharacter,
  rightCharacter,
  legacyResult,
}) {
  if (
    legacyResult?.winner === "left" ||
    legacyResult?.winner === "right"
  ) {
    return legacyResult.winner;
  }

  const leftSeed =
    number(
      leftCharacter.tournamentSeed
    );

  const rightSeed =
    number(
      rightCharacter.tournamentSeed
    );

  if (
    leftSeed > 0 &&
    rightSeed > 0 &&
    leftSeed !== rightSeed
  ) {
    return leftSeed < rightSeed
      ? "left"
      : "right";
  }

  return String(leftCharacter.id) <
    String(rightCharacter.id)
    ? "left"
    : "right";
}

/*
  Official Grand Tournament battle resolver.

  - New database stats: 70% influence
  - Existing Battle Engine’s tactical analysis: 30% influence
  - No Gemini result generation
  - No randomness
*/
export function runTournamentBattle({
  leftCharacter,
  rightCharacter,
  leftForm,
  rightForm,
  battleMode = "standard",
}) {
  if (
    !leftCharacter ||
    !rightCharacter ||
    !leftForm ||
    !rightForm
  ) {
    return {
      success: false,
      error:
        "Both characters and their official forms are required.",
    };
  }

  const safeBattleMode =
    BATTLE_MODES[battleMode]
      ? battleMode
      : "standard";

  const legacyLeft =
    createLegacyFighter(
      leftCharacter,
      leftForm
    );

  const legacyRight =
    createLegacyFighter(
      rightCharacter,
      rightForm
    );

  const legacyResult = analyzeBattle(
    legacyLeft,
    legacyRight,
    legacyLeft.forms[0],
    legacyRight.forms[0],
    {
      mode: safeBattleMode,
    }
  );

  const directLeftScore =
    getDirectScore(
      leftForm,
      safeBattleMode
    );

  const directRightScore =
    getDirectScore(
      rightForm,
      safeBattleMode
    );

  const finalLeftScore =
    directLeftScore * 0.7 +
    number(legacyResult.leftScore) * 0.3;

  const finalRightScore =
    directRightScore * 0.7 +
    number(legacyResult.rightScore) * 0.3;

  let winner = "tie";

  if (finalLeftScore > finalRightScore) {
    winner = "left";
  }

  if (finalRightScore > finalLeftScore) {
    winner = "right";
  }

  if (winner === "tie") {
    winner = resolveTie({
      leftCharacter,
      rightCharacter,
      legacyResult,
    });
  }

  const scoreDifference =
    finalLeftScore -
    finalRightScore;

  const directProbability =
    clamp(
      50 + scoreDifference * 1.25,
      5,
      95
    );

  const legacyProbability =
    clamp(
      legacyResult.leftProbability,
      5,
      95
    );

  const leftProbability = Math.round(
    directProbability * 0.7 +
      legacyProbability * 0.3
  );

  const comparisons =
    buildStatComparison(
      leftForm,
      rightForm
    );

  const winnerName =
    winner === "left"
      ? leftCharacter.name
      : rightCharacter.name;

  const winningEdges = comparisons
    .filter(
      (comparison) =>
        comparison.winner === winner
    )
    .sort(
      (left, right) => {
        const leftGap = Math.abs(
          left.left - left.right
        );

        const rightGap = Math.abs(
          right.left - right.right
        );

        return rightGap - leftGap;
      }
    )
    .slice(0, 3)
    .map(
      (comparison) =>
        comparison.label
    );

  return {
    success: true,

    battleMode: safeBattleMode,
    battleModeName:
      BATTLE_MODES[safeBattleMode].name,

    winner,
    loser:
      winner === "left"
        ? "right"
        : "left",

    winnerCharacter:
      winner === "left"
        ? leftCharacter
        : rightCharacter,

    loserCharacter:
      winner === "left"
        ? rightCharacter
        : leftCharacter,

    winnerForm:
      winner === "left"
        ? leftForm
        : rightForm,

    loserForm:
      winner === "left"
        ? rightForm
        : leftForm,

    left: {
      character: leftCharacter,
      form: leftForm,
      score: Math.round(
        finalLeftScore * 100
      ) / 100,
      probability: leftProbability,
    },

    right: {
      character: rightCharacter,
      form: rightForm,
      score: Math.round(
        finalRightScore * 100
      ) / 100,
      probability:
        100 - leftProbability,
    },

    directScores: {
      left: Math.round(
        directLeftScore * 100
      ) / 100,

      right: Math.round(
        directRightScore * 100
      ) / 100,
    },

    statComparisons: comparisons,

    summary:
      winningEdges.length
        ? `${winnerName} secured the official result through ${winningEdges.join(", ")}.`
        : `${winnerName} secured the official result after the tournament tiebreaker.`,

    legacyAnalysis: legacyResult,
  };
}