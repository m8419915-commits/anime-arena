/*
  Anime Arena — Grand Tournament

  Random Distribution Engine

  Distributes the complete tournament character pool
  between participating players.

  This engine only decides OWNERSHIP.
  It does not decide battle winners.
*/

function clone(value) {
  return JSON.parse(
    JSON.stringify(value)
  );
}

function shuffle(items) {
  const result = [...items];

  for (
    let index = result.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex =
      Math.floor(
        Math.random() * (index + 1)
      );

    [
      result[index],
      result[randomIndex],
    ] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

function getCharacterId(character) {
  return String(
    character?.id ?? ""
  ).trim();
}

function validatePlayers(players) {
  if (!Array.isArray(players)) {
    return {
      valid: false,
      error:
        "Players must be an array.",
    };
  }

  if (
    players.length < 2 ||
    players.length > 8
  ) {
    return {
      valid: false,
      error:
        "Tournament supports 2 to 8 players.",
    };
  }

  const ids = new Set();

  for (const player of players) {
    if (!player?.id) {
      return {
        valid: false,
        error:
          "Every player needs an id.",
      };
    }

    if (ids.has(player.id)) {
      return {
        valid: false,
        error:
          `Duplicate player id: ${player.id}`,
      };
    }

    ids.add(player.id);
  }

  return {
    valid: true,
  };
}

function validateCharacters(characters) {
  if (!Array.isArray(characters)) {
    return {
      valid: false,
      error:
        "Characters must be an array.",
    };
  }

  const ids = new Set();

  for (const character of characters) {
    const id =
      getCharacterId(character);

    if (!id) {
      return {
        valid: false,
        error:
          "Every character needs an id.",
      };
    }

    if (ids.has(id)) {
      return {
        valid: false,
        error:
          `Duplicate character id: ${id}`,
      };
    }

    ids.add(id);
  }

  return {
    valid: true,
  };
}

/*
  Equal distribution.

  Example:

  930 characters / 3 players

  P1 → 310
  P2 → 310
  P3 → 310

  For numbers that don't divide perfectly,
  the difference will never exceed 1.
*/
function createEqualDistribution({
  characters,
  players,
}) {
  const ownership = {};

  const shuffled =
    shuffle(characters);

  shuffled.forEach(
    (character, index) => {
      const player =
        players[
          index % players.length
        ];

      ownership[
        getCharacterId(character)
      ] = player.id;
    }
  );

  return ownership;
}

/*
  Fully random distribution.

  Every character independently receives
  a random player.

  This can create uneven rosters.
*/
function createFullyRandomDistribution({
  characters,
  players,
}) {
  const ownership = {};

  characters.forEach(
    (character) => {
      const randomPlayer =
        players[
          Math.floor(
            Math.random() *
              players.length
          )
        ];

      ownership[
        getCharacterId(character)
      ] = randomPlayer.id;
    }
  );

  return ownership;
}

/*
  Custom target distribution.

  Example:

  P1 → 400
  P2 → 300
  P3 → 230

  Total must equal the number of characters.
*/
function createTargetDistribution({
  characters,
  players,
  targetCounts,
}) {
  if (
    !targetCounts ||
    typeof targetCounts !==
      "object"
  ) {
    return {
      success: false,
      error:
        "Target counts are required.",
    };
  }

  const totalTarget =
    players.reduce(
      (total, player) =>
        total +
        Number(
          targetCounts[player.id] || 0
        ),
      0
    );

  if (
    totalTarget !==
    characters.length
  ) {
    return {
      success: false,
      error:
        `Target counts must total ${characters.length}.`,
    };
  }

  for (const player of players) {
    const count = Number(
      targetCounts[player.id] || 0
    );

    if (
      !Number.isInteger(count) ||
      count < 0
    ) {
      return {
        success: false,
        error:
          `Invalid target count for ${player.name}.`,
      };
    }
  }

  const shuffled =
    shuffle(characters);

  const ownership = {};

  let cursor = 0;

  players.forEach(
    (player) => {
      const count = Number(
        targetCounts[player.id] || 0
      );

      for (
        let index = 0;
        index < count;
        index += 1
      ) {
        const character =
          shuffled[cursor];

        ownership[
          getCharacterId(character)
        ] = player.id;

        cursor += 1;
      }
    }
  );

  return {
    success: true,
    ownership,
  };
}

/*
  Main random distribution function.
*/
export function createRandomDistribution({
  characters = [],
  players = [],
  distributionMode = "equal",
  targetCounts = {},
}) {
  const playerValidation =
    validatePlayers(players);

  if (!playerValidation.valid) {
    return {
      success: false,
      error:
        playerValidation.error,
    };
  }

  const characterValidation =
    validateCharacters(
      characters
    );

  if (!characterValidation.valid) {
    return {
      success: false,
      error:
        characterValidation.error,
    };
  }

  if (
    characters.length === 0
  ) {
    return {
      success: false,
      error:
        "Character pool is empty.",
    };
  }

  let ownership;

  if (
    distributionMode ===
    "equal"
  ) {
    ownership =
      createEqualDistribution({
        characters,
        players,
      });
  } else if (
    distributionMode ===
    "random"
  ) {
    ownership =
      createFullyRandomDistribution({
        characters,
        players,
      });
  } else if (
    distributionMode ===
    "custom"
  ) {
    const result =
      createTargetDistribution({
        characters,
        players,
        targetCounts,
      });

    if (!result.success) {
      return result;
    }

    ownership =
      result.ownership;
  } else {
    return {
      success: false,
      error:
        `Unknown distribution mode: ${distributionMode}`,
    };
  }

  const distributedPlayers =
  players.map(
    (player) => ({
      ...clone(player),

      roster:
        characters.filter(
          (character) =>
            ownership[
              getCharacterId(
                character
              )
            ] === player.id
        ),
    })
  );

return {
  success: true,

  mode:
    distributionMode,

  totalCharacters:
    characters.length,

  ownership:
    clone(ownership),

  players:
    distributedPlayers,

  distributionSummary:
    players.map(
      (player) => ({
        playerId:
          player.id,

        playerName:
          player.name,

        characterCount:
          Object.values(
            ownership
          ).filter(
            (ownerId) =>
              ownerId ===
              player.id
          ).length,
      })
    ),
};
}

/*
  Convenience helper for the default
  "fair random" option shown to players.
*/
export function createFairRandomDistribution({
  characters = [],
  players = [],
}) {
  return createRandomDistribution({
    characters,
    players,
    distributionMode:
      "equal",
  });
}

/*
  Convenience helper for completely chaotic
  random ownership.
*/
export function createChaoticRandomDistribution({
  characters = [],
  players = [],
}) {
  return createRandomDistribution({
    characters,
    players,
    distributionMode:
      "random",
  });
}