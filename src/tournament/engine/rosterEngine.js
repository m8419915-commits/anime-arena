/*
  Anime Arena — Grand Tournament
  Roster / Ownership Engine

  This file converts distribution results into permanent
  player-owned tournament rosters.

  It does NOT decide battle winners.
*/

const clone = (value) =>
  JSON.parse(JSON.stringify(value));

function getPlayerById(players, playerId) {
  return players.find(
    (player) => player.id === playerId
  ) || null;
}

function createEmptyRoster(player) {
  return {
    playerId: player.id,
    playerName: player.name,
    characters: [],
    totalCharacters: 0,
  };
}

/*
  Creates one clean ownership state from the
  distribution result.
*/
export function createRosterState({
  players = [],
  ownedCharacters = {},
}) {
  const rosters = {};

  players.forEach((player) => {
    rosters[player.id] =
      createEmptyRoster(player);
  });

  Object.entries(ownedCharacters).forEach(
    ([characterId, playerId]) => {
      const player =
        getPlayerById(
          players,
          playerId
        );

      if (!player) {
        return;
      }

      rosters[playerId].characters.push(
        characterId
      );
    }
  );

  Object.values(rosters).forEach(
    (roster) => {
      roster.totalCharacters =
        roster.characters.length;
    }
  );

  return rosters;
}

/*
  Returns the owner of one character.
*/
export function getCharacterOwner(
  ownership,
  characterId
) {
  return (
    ownership?.[characterId] ||
    null
  );
}

/*
  Gives a character to a player.

  Used by both Auction and Random Distribution.
*/
export function assignCharacterToPlayer({
  ownership,
  characterId,
  playerId,
}) {
  const nextOwnership = {
    ...ownership,
  };

  if (
    nextOwnership[characterId] &&
    nextOwnership[characterId] !== playerId
  ) {
    return {
      success: false,
      error:
        "This character already belongs to another player.",
    };
  }

  nextOwnership[characterId] =
    playerId;

  return {
    success: true,
    ownership: nextOwnership,
  };
}

/*
  Removes a character from ownership.
*/
export function removeCharacterFromPlayer({
  ownership,
  characterId,
}) {
  const nextOwnership = {
    ...ownership,
  };

  delete nextOwnership[characterId];

  return {
    success: true,
    ownership: nextOwnership,
  };
}

/*
  Rebuilds all player rosters from ownership.
  This prevents roster data from becoming inconsistent.
*/
export function rebuildRosters({
  players = [],
  ownership = {},
}) {
  return createRosterState({
    players,
    ownedCharacters: ownership,
  });
}

/*
  Gives useful statistics to the UI.
*/
export function getRosterStatistics({
  players = [],
  ownership = {},
  totalCharacters = 0,
}) {
  const rosters =
    rebuildRosters({
      players,
      ownership,
    });

  const ownedCount =
    Object.keys(ownership).length;

  return {
    totalCharacters,
    ownedCharacters: ownedCount,

    remainingCharacters:
      Math.max(
        totalCharacters - ownedCount,
        0
      ),

    players: players.map(
      (player) => ({
        playerId: player.id,
        playerName: player.name,

        characterCount:
          rosters[player.id]
            ?.totalCharacters || 0,
      })
    ),
  };
}

/*
  Checks whether every character has exactly
  one owner.
*/
export function validateOwnership({
  characterIds = [],
  players = [],
  ownership = {},
}) {
  const errors = [];

  const playerIds = new Set(
    players.map(
      (player) => player.id
    )
  );

  const characterIdSet =
    new Set(characterIds);

  Object.entries(
    ownership
  ).forEach(
    ([characterId, playerId]) => {
      if (
        !characterIdSet.has(
          characterId
        )
      ) {
        errors.push(
          `Unknown character: ${characterId}`
        );
      }

      if (
        !playerIds.has(playerId)
      ) {
        errors.push(
          `Unknown player: ${playerId}`
        );
      }
    }
  );

  return {
    valid: errors.length === 0,
    errors,

    ownedCharacters:
      Object.keys(ownership).length,

    unownedCharacters:
      characterIds.filter(
        (characterId) =>
          !ownership[characterId]
      ),
  };
}

/*
  Creates the final distribution snapshot.

  This snapshot can later be saved with the tournament.
*/
export function createDistributionSnapshot({
  mode,
  players,
  ownership,
  totalCharacters,
}) {
  const rosters =
    rebuildRosters({
      players,
      ownership,
    });

  return {
    mode,

    completedAt:
      new Date().toISOString(),

    totalCharacters,

    ownership: clone(
      ownership
    ),

    rosters: clone(
      rosters
    ),
  };
}