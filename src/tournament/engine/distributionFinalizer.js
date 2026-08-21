/*
  Anime Arena — Grand Tournament

  Distribution Finalizer

  Converts Auction / Random results into one
  permanent distribution snapshot.

  After finalization, ownership is considered locked.
*/

import {
  validateOwnership,
} from "./rosterEngine";

function clone(value) {
  return JSON.parse(
    JSON.stringify(value)
  );
}

export function finalizeDistribution({
  mode,
  players = [],
  characterIds = [],
  ownership = {},
  metadata = {},
}) {
  if (
    !Array.isArray(players) ||
    players.length < 2 ||
    players.length > 8
  ) {
    return {
      success: false,
      error:
        "Distribution requires 2 to 8 players.",
    };
  }

  if (
    !Array.isArray(characterIds) ||
    characterIds.length === 0
  ) {
    return {
      success: false,
      error:
        "Character pool cannot be empty.",
    };
  }

  const validation =
    validateOwnership({
      characterIds,
      players,
      ownership,
    });

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  if (
    validation.ownedCharacters !==
    characterIds.length
  ) {
    return {
      success: false,
      error:
        "Every tournament character must have an owner before finalization.",
    };
  }

  const rosterCounts =
    players.map((player) => ({
      playerId: player.id,
      playerName: player.name,

      characterCount:
        characterIds.filter(
          (characterId) =>
            ownership[characterId] ===
            player.id
        ).length,
    }));

  return {
    success: true,

    distribution: {
      id:
        `distribution-${Date.now()}`,

      mode,

      status: "finalized",

      finalizedAt:
        new Date().toISOString(),

      totalCharacters:
        characterIds.length,

      playerCount:
        players.length,

      ownership: clone(
        ownership
      ),

      rosterCounts,

      metadata: clone(
        metadata
      ),
    },
  };
}

/*
  Useful when the UI wants to display the
  distribution result before starting the tournament.
*/
export function getDistributionSummary({
  players = [],
  characterIds = [],
  ownership = {},
}) {
  return {
    totalCharacters:
      characterIds.length,

    assignedCharacters:
      characterIds.filter(
        (characterId) =>
          Boolean(
            ownership[characterId]
          )
      ).length,

    remainingCharacters:
      characterIds.filter(
        (characterId) =>
          !ownership[characterId]
      ).length,

    players: players.map(
      (player) => ({
        playerId: player.id,
        playerName: player.name,

        characterCount:
          characterIds.filter(
            (characterId) =>
              ownership[characterId] ===
              player.id
          ).length,
      })
    ),
  };
}

/*
  Prevents accidental modification of a finalized
  distribution object by returning a fresh frozen
  snapshot for consumers.
*/
export function createLockedDistribution(
  distribution
) {
  if (
    !distribution ||
    distribution.status !==
      "finalized"
  ) {
    return {
      success: false,
      error:
        "Only finalized distributions can be locked.",
    };
  }

  return {
    success: true,

    distribution: Object.freeze(
      clone(distribution)
    ),
  };
}