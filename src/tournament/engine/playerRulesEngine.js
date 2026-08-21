/*
  Anime Arena — Grand Tournament
  Player & Roster Rules Engine

  Supports:
  - 2–8 players
  - Equal / near-equal roster targets
  - Auction budgets
  - Minimum / maximum roster sizes
  - Auction turn order
  - Distribution validation
*/

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;

const DEFAULT_STARTING_BUDGET = 5000;

const MIN_STARTING_BUDGET = 100;
const MAX_STARTING_BUDGET = 1_000_000;

/* ---------------------------------------------------------
   HELPERS
--------------------------------------------------------- */

const text = (value) =>
  String(value ?? "").trim();

const number = (
  value,
  fallback = 0
) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
};

/* ---------------------------------------------------------
   PLAYER VALIDATION
--------------------------------------------------------- */

export function validatePlayerCount(
  playerCount
) {
  const count = number(playerCount);

  const errors = [];

  if (!Number.isInteger(count)) {
    errors.push(
      "Player count must be a whole number."
    );
  }

  if (count < MIN_PLAYERS) {
    errors.push(
      `At least ${MIN_PLAYERS} players are required.`
    );
  }

  if (count > MAX_PLAYERS) {
    errors.push(
      `Maximum ${MAX_PLAYERS} players are supported.`
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    playerCount: count,
  };
}

/* ---------------------------------------------------------
   CREATE PLAYERS
--------------------------------------------------------- */

export function createTournamentPlayers({
  playerCount,
  names = [],
}) {
  const validation =
    validatePlayerCount(
      playerCount
    );

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  const players =
    Array.from(
      {
        length: validation.playerCount,
      },
      (_, index) => {
        const suppliedName =
          text(names[index]);

        return {
          id: `player-${index + 1}`,

          name:
            suppliedName ||
            `Player ${index + 1}`,

          order: index + 1,

          active: true,
        };
      }
    );

  return {
    success: true,
    players,
  };
}

/* ---------------------------------------------------------
   ROSTER TARGETS
--------------------------------------------------------- */

/*
  Example:

  930 / 3

  P1 = 310
  P2 = 310
  P3 = 310

  930 / 8

  P1 = 117
  P2 = 117
  P3 = 116
  P4 = 116
  P5 = 116
  P6 = 116
  P7 = 116
  P8 = 116
*/

export function calculatePlayerRosterTargets({
  characterCount,
  players,
}) {
  if (!Array.isArray(players)) {
    return {};
  }

  const safeCharacterCount =
    Math.max(
      0,
      number(characterCount)
    );

  const baseSize =
    Math.floor(
      safeCharacterCount /
        players.length
    );

  const remainder =
    safeCharacterCount %
    players.length;

  return Object.fromEntries(
    players.map(
      (player, index) => [
        player.id,

        baseSize +
          (index < remainder
            ? 1
            : 0),
      ]
    )
  );
}

/* ---------------------------------------------------------
   ROSTER RULES
--------------------------------------------------------- */

export function createRosterRules({
  characterCount,
  players,
}) {
  const targets =
    calculatePlayerRosterTargets({
      characterCount,
      players,
    });

  const targetValues =
    Object.values(targets);

  const minimumTarget =
    targetValues.length
      ? Math.min(...targetValues)
      : 0;

  const maximumTarget =
    targetValues.length
      ? Math.max(...targetValues)
      : 0;

  return {
    characterCount,

    playerCount:
      players.length,

    targets,

    minimumRosterSize:
      minimumTarget,

    maximumRosterSize:
      maximumTarget,

    balanced:
      maximumTarget -
        minimumTarget <=
      1,
  };
}

/* ---------------------------------------------------------
   STARTING BUDGET
--------------------------------------------------------- */

export function validateStartingBudget(
  budget
) {
  const safeBudget =
    number(budget);

  const errors = [];

  if (
    safeBudget <
    MIN_STARTING_BUDGET
  ) {
    errors.push(
      `Starting budget must be at least ${MIN_STARTING_BUDGET}.`
    );
  }

  if (
    safeBudget >
    MAX_STARTING_BUDGET
  ) {
    errors.push(
      `Starting budget cannot exceed ${MAX_STARTING_BUDGET}.`
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    budget: safeBudget,
  };
}

/* ---------------------------------------------------------
   AUCTION BUDGET SETUP
--------------------------------------------------------- */

export function createAuctionPlayerState({
  players,
  startingBudget = DEFAULT_STARTING_BUDGET,
}) {
  const validation =
    validateStartingBudget(
      startingBudget
    );

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  const state =
    Object.fromEntries(
      players.map((player) => [
        player.id,
        {
          playerId: player.id,

          budget:
            validation.budget,

          spent: 0,

          charactersWon: 0,

          active: true,
        },
      ])
    );

  return {
    success: true,

    startingBudget:
      validation.budget,

    players: state,
  };
}

/* ---------------------------------------------------------
   AUCTION TURN ORDER
--------------------------------------------------------- */

export function createAuctionTurnOrder(
  players
) {
  return players.map(
    (player) => player.id
  );
}

/*
  Rotates the auction starting player.

  Example:

  Round 1:
  P1 → P2 → P3

  Round 2:
  P2 → P3 → P1

  Round 3:
  P3 → P1 → P2
*/

export function rotateAuctionTurnOrder({
  players,
  roundNumber = 1,
}) {
  if (!Array.isArray(players)) {
    return [];
  }

  if (!players.length) {
    return [];
  }

  const rotation =
    (number(roundNumber, 1) - 1) %
    players.length;

  return [
    ...players.slice(rotation),
    ...players.slice(0, rotation),
  ].map(
    (player) => player.id
  );
}

/* ---------------------------------------------------------
   AUCTION ELIGIBILITY
--------------------------------------------------------- */

export function getEligibleAuctionPlayers({
  players,
  budgets,
  currentBid,
  rosterCounts,
  rosterTargets,
}) {
  return players.filter(
    (player) => {
      const budget =
        number(
          budgets?.[player.id]
        );

      const rosterCount =
        number(
          rosterCounts?.[player.id]
        );

      const rosterTarget =
        number(
          rosterTargets?.[player.id]
        );

      /*
        A player who has reached their target
        should no longer participate.
      */
      if (
        rosterCount >=
        rosterTarget
      ) {
        return false;
      }

      /*
        Player must be able to beat the
        current bid.
      */
      if (
        budget <=
        number(currentBid)
      ) {
        return false;
      }

      return true;
    }
  );
}

/* ---------------------------------------------------------
   ROSTER COUNT
--------------------------------------------------------- */

export function calculateRosterCounts(
  rosters,
  players
) {
  return Object.fromEntries(
    players.map((player) => [
      player.id,

      Array.isArray(
        rosters?.[player.id]
      )
        ? rosters[player.id].length
        : 0,
    ])
  );
}

/* ---------------------------------------------------------
   DISTRIBUTION COMPLETION
--------------------------------------------------------- */

export function isDistributionComplete({
  rosters,
  players,
  rosterTargets,
}) {
  if (!Array.isArray(players)) {
    return false;
  }

  return players.every(
    (player) => {
      const count =
        Array.isArray(
          rosters?.[player.id]
        )
          ? rosters[player.id].length
          : 0;

      const target =
        number(
          rosterTargets?.[
            player.id
          ]
        );

      return count >= target;
    }
  );
}

/* ---------------------------------------------------------
   DISTRIBUTION SUMMARY
--------------------------------------------------------- */

export function getDistributionSummary({
  players,
  rosters,
  rosterTargets,
  budgets = {},
}) {
  return players.map(
    (player) => {
      const roster =
        rosters?.[player.id] || [];

      const target =
        number(
          rosterTargets?.[
            player.id
          ]
        );

      return {
        playerId:
          player.id,

        playerName:
          player.name,

        characters:
          roster.length,

        target,

        remaining:
          Math.max(
            0,
            target -
              roster.length
          ),

        progress:
          target > 0
            ? Math.round(
                (roster.length /
                  target) *
                  100
              )
            : 100,

        budget:
          budgets?.[
            player.id
          ] ?? null,
      };
    }
  );
}

/* ---------------------------------------------------------
   COMPLETE PLAYER RULESET
--------------------------------------------------------- */

export function createPlayerRules({
  characterCount,
  players,
  startingBudget = DEFAULT_STARTING_BUDGET,
}) {
  const playerValidation =
    validatePlayerCount(
      players.length
    );

  if (!playerValidation.valid) {
    return {
      success: false,
      errors:
        playerValidation.errors,
    };
  }

  const budgetValidation =
    validateStartingBudget(
      startingBudget
    );

  if (!budgetValidation.valid) {
    return {
      success: false,
      errors:
        budgetValidation.errors,
    };
  }

  const rosterRules =
    createRosterRules({
      characterCount,
      players,
    });

  const auctionPlayers =
    createAuctionPlayerState({
      players,
      startingBudget:
        budgetValidation.budget,
    });

  if (!auctionPlayers.success) {
    return auctionPlayers;
  }

  return {
    success: true,

    playerCount:
      players.length,

    rosterRules,

    auction: {
      startingBudget:
        budgetValidation.budget,

      playerState:
        auctionPlayers.players,

      initialTurnOrder:
        createAuctionTurnOrder(
          players
        ),

      roundOneTurnOrder:
        rotateAuctionTurnOrder({
          players,
          roundNumber: 1,
        }),
    },
  };
}