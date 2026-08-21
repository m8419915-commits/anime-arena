import {
  createEventFormat,
  isPowerOfTwo,
} from "./bracketMath";

const number = (value) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : 0;
};

const getCharacterId = (character) =>
  String(character?.id ?? "").trim();

const getSeedRating = (character) =>
  number(character?.seedRating);

function shuffle(items) {
  const result = [...items];

  for (
    let index = result.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex = Math.floor(
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

function rankCharacters(characters) {
  return characters
    .map((character, index) => ({
      character,
      index,
    }))
    .sort((left, right) => {
      const ratingDifference =
        getSeedRating(right.character) -
        getSeedRating(left.character);

      if (ratingDifference !== 0) {
        return ratingDifference;
      }

      return left.index - right.index;
    })
    .map((item) => item.character);
}

function applyCustomSeedOrder(
  characters,
  customSeedOrder = []
) {
  const byId = new Map(
    characters.map((character) => [
      getCharacterId(character),
      character,
    ])
  );

  const chosenIds = new Set();

  const manuallyOrdered =
    customSeedOrder
      .map((characterId) =>
        byId.get(String(characterId))
      )
      .filter((character) => {
        const id = getCharacterId(character);

        if (!id || chosenIds.has(id)) {
          return false;
        }

        chosenIds.add(id);

        return true;
      });

  const remaining = rankCharacters(
    characters.filter(
      (character) =>
        !chosenIds.has(
          getCharacterId(character)
        )
    )
  );

  return [
    ...manuallyOrdered,
    ...remaining,
  ];
}

export function validateTournamentEntrants(
  characters
) {
  const errors = [];
  const ids = new Set();

  if (!Array.isArray(characters)) {
    return {
      valid: false,
      errors: [
        "Tournament characters must be an array.",
      ],
    };
  }

  characters.forEach((character, index) => {
    const id = getCharacterId(character);

    if (!id) {
      errors.push(
        `Entrant ${index + 1} has no character id.`
      );
      return;
    }

    if (ids.has(id)) {
      errors.push(
        `Duplicate tournament entrant: ${id}`
      );
    }

    ids.add(id);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/*
  Generates a standard balanced seed order.

  8-character example:
  1 vs 8
  4 vs 5
  2 vs 7
  3 vs 6
*/
export function createSeedOrder(bracketSize) {
  if (!isPowerOfTwo(bracketSize)) {
    throw new Error(
      "Bracket size must be a power of two."
    );
  }

  if (bracketSize === 1) {
    return [1];
  }

  let order = [1, 2];

  while (order.length < bracketSize) {
    const expandedSize =
      order.length * 2;

    order = order.flatMap((seed) => [
      seed,
      expandedSize + 1 - seed,
    ]);
  }

  return order;
}

export function seedTournamentCharacters({
  characters,
  seedingMode = "ranked",
  customSeedOrder = [],
}) {
  const validation =
    validateTournamentEntrants(characters);

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  let orderedCharacters;

  if (seedingMode === "random") {
    orderedCharacters = shuffle(characters);
  } else if (seedingMode === "custom") {
    orderedCharacters =
      applyCustomSeedOrder(
        characters,
        customSeedOrder
      );
  } else {
    orderedCharacters =
      rankCharacters(characters);
  }

  return {
    success: true,

    seedingMode,

    seededCharacters:
      orderedCharacters.map(
        (character, index) => ({
          ...character,
          tournamentSeed: index + 1,
        })
      ),
  };
}

function createPlayInMatches(
  seededCharacters,
  playInPlan
) {
  if (!playInPlan.required) {
    return [];
  }

  const playInEntrants =
    seededCharacters.slice(
      playInPlan.byeCount
    );

  return Array.from(
    {
      length:
        playInPlan.playInMatchCount,
    },
    (_, index) => {
      const left =
        playInEntrants[index];

      const right =
        playInEntrants[
          playInEntrants.length - 1 - index
        ];

      return {
        id: `play-in-${index + 1}`,
        order: index + 1,
        roundName: "Opening Gate",

        left,
        right,

        winner: null,

        /*
          The winner occupies this provisional
          seed in the main bracket.
        */
        advancesAsSeed:
          playInPlan.byeCount +
          index +
          1,
      };
    }
  );
}

function createMainBracketSlots({
  seededCharacters,
  playInPlan,
}) {
  const seedOrder =
    createSeedOrder(
      playInPlan.mainBracketSize
    );

  const directEntrants =
    seededCharacters.slice(
      0,
      playInPlan.byeCount
    );

  const directEntrantBySeed =
    new Map(
      directEntrants.map(
        (character) => [
          character.tournamentSeed,
          character,
        ]
      )
    );

  const playInByProvisionalSeed =
    new Map(
      Array.from(
        {
          length:
            playInPlan.playInMatchCount,
        },
        (_, index) => {
          const provisionalSeed =
            playInPlan.byeCount +
            index +
            1;

          return [
            provisionalSeed,
            {
              type: "play-in-winner",
              sourceMatchId:
                `play-in-${index + 1}`,
            },
          ];
        }
      )
    );

  return seedOrder.map(
    (provisionalSeed, slotIndex) => {
      const directCharacter =
        directEntrantBySeed.get(
          provisionalSeed
        );

      return {
        id: `main-slot-${slotIndex + 1}`,
        slotIndex,
        provisionalSeed,

        entry:
          directCharacter
            ? {
                type: "character",
                character: directCharacter,
              }
            : playInByProvisionalSeed.get(
                provisionalSeed
              ),
      };
    }
  );
}

/*
  Creates the actual opening structure for the event.
  Results are added later by the progression engine.
*/
export function createTournamentSeeding({
  characters,
  seedingMode = "ranked",
  customSeedOrder = [],
}) {
  const format =
    createEventFormat(characters?.length);

  if (!format.success) {
    return format;
  }

  const seeded =
    seedTournamentCharacters({
      characters,
      seedingMode,
      customSeedOrder,
    });

  if (!seeded.success) {
    return seeded;
  }

  const playInMatches =
    createPlayInMatches(
      seeded.seededCharacters,
      format.playIn
    );

  const mainBracketSlots =
    createMainBracketSlots({
      seededCharacters:
        seeded.seededCharacters,
      playInPlan: format.playIn,
    });

  return {
    success: true,

    format,
    seedingMode,

    seededCharacters:
      seeded.seededCharacters,

    playInMatches,

    mainBracket: {
      size: format.mainBracketSize,

      seedOrder:
        createSeedOrder(
          format.mainBracketSize
        ),

      slots: mainBracketSlots,
    },
  };
}