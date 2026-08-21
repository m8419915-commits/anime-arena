import {
  TOURNAMENT_DATABASE_CONFIG,
} from "../data/tournamentConfig";

const REGION_NAMES = [
  "Crimson Region",
  "Solar Region",
  "Azure Region",
  "Violet Region",
];

const number = (value) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : 0;
};

export function isPowerOfTwo(value) {
  const safeValue = number(value);

  return (
    safeValue > 0 &&
    (safeValue & (safeValue - 1)) === 0
  );
}

export function validateTournamentFieldSize(
  fieldSize
) {
  const safeFieldSize = number(fieldSize);
  const errors = [];

  if (!Number.isInteger(safeFieldSize)) {
    errors.push(
      "Tournament field size must be a whole number."
    );
  }

  if (
    safeFieldSize <
    TOURNAMENT_DATABASE_CONFIG.minimumFieldSize
  ) {
    errors.push(
      `Tournament needs at least ${TOURNAMENT_DATABASE_CONFIG.minimumFieldSize} characters.`
    );
  }

  if (
    safeFieldSize >
    TOURNAMENT_DATABASE_CONFIG.maximumFieldSize
  ) {
    errors.push(
      `Tournament can contain at most ${TOURNAMENT_DATABASE_CONFIG.maximumFieldSize} characters.`
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    fieldSize: safeFieldSize,
  };
}

/*
  Example:
  600 characters → 512-character main bracket
  930 characters → 512-character main bracket
*/
export function getMainBracketSize(
  fieldSize
) {
  const validation =
    validateTournamentFieldSize(fieldSize);

  if (!validation.valid) {
    return 0;
  }

  let bracketSize = 1;

  while (
    bracketSize * 2 <=
    validation.fieldSize
  ) {
    bracketSize *= 2;
  }

  return bracketSize;
}

/*
  Characters above the main-bracket count compete in
  opening play-ins. Higher seeds receive byes.
*/
export function getPlayInPlan(fieldSize) {
  const mainBracketSize =
    getMainBracketSize(fieldSize);

  if (!mainBracketSize) {
    return null;
  }

  const safeFieldSize = number(fieldSize);
  const playInMatchCount =
    safeFieldSize - mainBracketSize;

  const playInParticipantCount =
    playInMatchCount * 2;

  const byeCount =
    safeFieldSize -
    playInParticipantCount;

  return {
    required: playInMatchCount > 0,

    fieldSize: safeFieldSize,
    mainBracketSize,

    playInMatchCount,
    playInParticipantCount,

    /*
      Highest seeds automatically enter the main bracket.
    */
    byeCount,
    byeSeedCount: byeCount,

    advancingFromPlayIns:
      playInMatchCount,
  };
}

function getRoundName(entrants) {
  if (entrants === 2) {
    return "Grand Final";
  }

  if (entrants === 4) {
    return "Semi-finals";
  }

  if (entrants === 8) {
    return "Quarter-finals";
  }

  return `Round of ${entrants}`;
}

export function getMainRoundPlan(
  mainBracketSize
) {
  const rounds = [];
  let entrants = mainBracketSize;
  let roundNumber = 1;

  while (entrants >= 2) {
    rounds.push({
      id: `round-${roundNumber}`,
      number: roundNumber,
      name: getRoundName(entrants),
      entrants,
      matchCount: entrants / 2,
    });

    entrants /= 2;
    roundNumber += 1;
  }

  return rounds;
}

export function getRegionPlan(
  mainBracketSize
) {
  let regionCount = 1;

  if (mainBracketSize >= 64) {
    regionCount = 4;
  } else if (mainBracketSize >= 32) {
    regionCount = 2;
  }

  const charactersPerRegion =
    mainBracketSize / regionCount;

  return Array.from(
    {
      length: regionCount,
    },
    (_, index) => ({
      id: `region-${index + 1}`,
      name:
        REGION_NAMES[index] ||
        `Region ${index + 1}`,
      order: index + 1,
      charactersPerRegion,
    })
  );
}

/*
  Creates the mathematical shape of one event.
  No character data is needed yet.
*/
export function createEventFormat(fieldSize) {
  const validation =
    validateTournamentFieldSize(fieldSize);

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  const mainBracketSize =
    getMainBracketSize(fieldSize);

  return {
    success: true,

    fieldSize: validation.fieldSize,

    playIn:
      getPlayInPlan(
        validation.fieldSize
      ),

    mainBracketSize,

    regions:
      getRegionPlan(
        mainBracketSize
      ),

    rounds:
      getMainRoundPlan(
        mainBracketSize
      ),

    /*
      Every complete single-elimination tournament
      requires exactly entrants minus one results.
    */
    totalMatchCount:
      validation.fieldSize - 1,
  };
}