const number = (value, fallback = 0) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
};

const getCharacterId = (character) =>
  String(
    character?.id ??
    character?.characterId ??
    ""
  ).trim();

export function validatePlayerCount(
  players
) {
  const errors = [];

  if (!Array.isArray(players)) {
    return {
      valid: false,
      errors: ["Players must be an array."],
    };
  }

  if (
    players.length < 2 ||
    players.length > 8
  ) {
    errors.push(
      "Tournament requires between 2 and 8 players."
    );
  }

  const ids = new Set();

  players.forEach((player, index) => {
    const id = String(
      player?.id ?? ""
    ).trim();

    if (!id) {
      errors.push(
        `Player ${index + 1} has no id.`
      );
    }

    if (ids.has(id)) {
      errors.push(
        `Duplicate player id: ${id}`
      );
    }

    ids.add(id);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateCharacterPool(
  characters
) {
  const errors = [];
  const ids = new Set();

  if (!Array.isArray(characters)) {
    return {
      valid: false,
      errors: [
        "Character pool must be an array.",
      ],
    };
  }

  characters.forEach(
    (character, index) => {
      const id =
        getCharacterId(character);

      if (!id) {
        errors.push(
          `Character ${index + 1} has no id.`
        );

        return;
      }

      if (ids.has(id)) {
        errors.push(
          `Duplicate character id: ${id}`
        );
      }

      ids.add(id);
    }
  );

  return {
    valid: errors.length === 0,
    errors,
    characterCount: characters.length,
  };
}

/*
  Verifies that every character belongs to
  exactly ONE player.
*/
export function validateDistribution({
  characters = [],
  players = [],
  assignments = {},
}) {
  const errors = [];

  const playerValidation =
    validatePlayerCount(players);

  errors.push(
    ...playerValidation.errors
  );

  const characterValidation =
    validateCharacterPool(characters);

  errors.push(
    ...characterValidation.errors
  );

  const knownCharacterIds =
    new Set(
      characters.map(
        getCharacterId
      )
    );

  const assignedCharacters =
    new Map();

  players.forEach((player) => {
    const playerId = String(
      player?.id ?? ""
    ).trim();

    const playerCharacters =
      Array.isArray(
        assignments[playerId]
      )
        ? assignments[playerId]
        : [];

    playerCharacters.forEach(
      (character) => {
        const characterId =
          getCharacterId(character);

        if (!knownCharacterIds.has(
          characterId
        )) {
          errors.push(
            `Unknown character assigned: ${characterId}`
          );

          return;
        }

        if (
          assignedCharacters.has(
            characterId
          )
        ) {
          errors.push(
            `Character ${characterId} is assigned to multiple players.`
          );

          return;
        }

        assignedCharacters.set(
          characterId,
          playerId
        );
      }
    );
  });

  const unassignedCharacters =
    characters.filter(
      (character) =>
        !assignedCharacters.has(
          getCharacterId(character)
        )
    );

  return {
    valid:
      errors.length === 0 &&
      unassignedCharacters.length === 0,

    errors,

    assignedCount:
      assignedCharacters.size,

    unassignedCount:
      unassignedCharacters.length,

    unassignedCharacterIds:
      unassignedCharacters.map(
        getCharacterId
      ),
  };
}

/*
  Basic balance information.

  IMPORTANT:
  This does NOT force equal rosters.

  Auction and custom distribution may
  intentionally create different roster sizes.
*/
export function getDistributionSummary({
  players = [],
  assignments = {},
}) {
  const totalCharacters =
    Object.values(assignments)
      .reduce(
        (total, roster) =>
          total +
          (Array.isArray(roster)
            ? roster.length
            : 0),
        0
      );

  return {
    totalCharacters,

    players: players.map(
      (player) => {
        const playerId =
          String(
            player?.id ?? ""
          ).trim();

        const roster =
          Array.isArray(
            assignments[playerId]
          )
            ? assignments[playerId]
            : [];

        return {
          playerId,

          playerName:
            player?.name ||
            playerId,

          characterCount:
            roster.length,
        };
      }
    ),
  };
}

export function getRosterLimits({
  totalCharacters,
  playerCount,
}) {
  const total =
    number(totalCharacters);

  const count =
    number(playerCount);

  if (
    total <= 0 ||
    count < 2
  ) {
    return null;
  }

  return {
    theoreticalMinimum:
      Math.floor(
        total / count
      ),

    theoreticalMaximum:
      Math.ceil(
        total / count
      ),

    average:
      total / count,
  };
}