/*
  Anime Arena — Grand Tournament
  Character Distribution Engine

  FINAL DISTRIBUTION MODES:

  1. Auction
  2. Random
  3. Custom

  Supports:
  - 2–8 players
  - Uneven character counts
  - Even distribution
  - Auction budgets
  - Custom assignment
  - Duplicate protection
  - Distribution validation

  Gemini is NOT responsible for character ownership.
  Players or the random system determine ownership.
*/

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;

const DISTRIBUTION_MODES = {
  AUCTION: "auction",
  RANDOM: "random",
  CUSTOM: "custom",
};

/* ---------------------------------------------------------
   BASIC HELPERS
--------------------------------------------------------- */

const text = (value) =>
  String(value ?? "").trim();

const number = (value, fallback = 0) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
};

const clone = (value) =>
  JSON.parse(JSON.stringify(value));

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

/* ---------------------------------------------------------
   VALIDATION
--------------------------------------------------------- */

export function validatePlayers(players) {
  const errors = [];

  if (!Array.isArray(players)) {
    return {
      valid: false,
      errors: ["Players must be an array."],
    };
  }

  if (players.length < MIN_PLAYERS) {
    errors.push(
      `At least ${MIN_PLAYERS} players are required.`
    );
  }

  if (players.length > MAX_PLAYERS) {
    errors.push(
      `Maximum ${MAX_PLAYERS} players are supported.`
    );
  }

  const ids = new Set();

  players.forEach((player, index) => {
    const id = text(player?.id);

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

export function validateCharacters(
  characters
) {
  const errors = [];
  const ids = new Set();

  if (!Array.isArray(characters)) {
    return {
      valid: false,
      errors: [
        "Characters must be an array.",
      ],
    };
  }

  characters.forEach((character, index) => {
    const id = text(character?.id);

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
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/* ---------------------------------------------------------
   DISTRIBUTION SIZE
--------------------------------------------------------- */

/*
  Example:

  930 / 3

  P1 = 310
  P2 = 310
  P3 = 310

  930 / 4

  P1 = 233
  P2 = 233
  P3 = 232
  P4 = 232
*/

export function calculateRosterTargets(
  characterCount,
  playerCount
) {
  const safeCharacterCount =
    number(characterCount);

  const safePlayerCount =
    number(playerCount);

  if (
    safeCharacterCount < 0 ||
    safePlayerCount < 1
  ) {
    return [];
  }

  const baseSize = Math.floor(
    safeCharacterCount /
      safePlayerCount
  );

  const remainder =
    safeCharacterCount %
    safePlayerCount;

  return Array.from(
    {
      length: safePlayerCount,
    },
    (_, index) =>
      baseSize +
      (index < remainder ? 1 : 0)
  );
}

/*
  Creates:

  {
    p1: 310,
    p2: 310,
    p3: 310
  }
*/

export function createRosterTargets(
  players,
  characterCount
) {
  const targets =
    calculateRosterTargets(
      characterCount,
      players.length
    );

  return Object.fromEntries(
    players.map(
      (player, index) => [
        player.id,
        targets[index],
      ]
    )
  );
}

/* ---------------------------------------------------------
   EMPTY ROSTERS
--------------------------------------------------------- */

export function createEmptyRosters(
  players
) {
  return Object.fromEntries(
    players.map((player) => [
      player.id,
      [],
    ])
  );
}

/* ---------------------------------------------------------
   RANDOM DISTRIBUTION
--------------------------------------------------------- */

/*
  Random distribution is completely automatic.

  Every character is shuffled first.

  Then characters are assigned while respecting
  the calculated roster targets.

  No character can appear twice.
*/

export function distributeRandomly({
  characters,
  players,
  balanced = true,
}) {
  const characterValidation =
    validateCharacters(characters);

  if (!characterValidation.valid) {
    return {
      success: false,
      errors:
        characterValidation.errors,
    };
  }

  const playerValidation =
    validatePlayers(players);

  if (!playerValidation.valid) {
    return {
      success: false,
      errors:
        playerValidation.errors,
    };
  }

  const shuffledCharacters =
    shuffle(characters);

  const targets =
    createRosterTargets(
      players,
      characters.length
    );

  const rosters =
    createEmptyRosters(players);

  let characterIndex = 0;

  players.forEach((player) => {
    const target =
      targets[player.id];

    for (
      let index = 0;
      index < target;
      index += 1
    ) {
      const character =
        shuffledCharacters[
          characterIndex
        ];

      if (character) {
        rosters[player.id].push(
          character
        );
      }

      characterIndex += 1;
    }
  });

  return {
    success: true,

    mode:
      DISTRIBUTION_MODES.RANDOM,

    balanced,

    rosters,

    rosterTargets: targets,

    remainingCharacters:
      shuffledCharacters.slice(
        characterIndex
      ),

    distributionOrder:
      shuffledCharacters.map(
        (character) => character.id
      ),
  };
}

/* ---------------------------------------------------------
   CUSTOM DISTRIBUTION
--------------------------------------------------------- */

/*
  Custom mode expects assignments like:

  {
    "goku": "player-1",
    "naruto": "player-2",
    "ichigo": "player-3"
  }

  Unassigned characters remain available.

  This lets us later build a visual UI where the
  player manually moves characters between rosters.
*/

export function distributeCustom({
  characters,
  players,
  assignments = {},
}) {
  const characterValidation =
    validateCharacters(characters);

  if (!characterValidation.valid) {
    return {
      success: false,
      errors:
        characterValidation.errors,
    };
  }

  const playerValidation =
    validatePlayers(players);

  if (!playerValidation.valid) {
    return {
      success: false,
      errors:
        playerValidation.errors,
    };
  }

  const playerIds = new Set(
    players.map(
      (player) => player.id
    )
  );

  const characterIds = new Set(
    characters.map(
      (character) => character.id
    )
  );

  const rosters =
    createEmptyRosters(players);

  const assignedCharacters =
    new Set();

  const errors = [];

  Object.entries(assignments).forEach(
    ([characterId, playerId]) => {
      if (
        !characterIds.has(characterId)
      ) {
        errors.push(
          `Unknown character: ${characterId}`
        );

        return;
      }

      if (
        !playerIds.has(playerId)
      ) {
        errors.push(
          `Unknown player: ${playerId}`
        );

        return;
      }

      if (
        assignedCharacters.has(
          characterId
        )
      ) {
        errors.push(
          `Character already assigned: ${characterId}`
        );

        return;
      }

      const character =
        characters.find(
          (item) =>
            item.id === characterId
        );

      rosters[playerId].push(
        character
      );

      assignedCharacters.add(
        characterId
      );
    }
  );

  if (errors.length) {
    return {
      success: false,
      errors,
    };
  }

  const unassigned =
    characters.filter(
      (character) =>
        !assignedCharacters.has(
          character.id
        )
    );

  return {
    success: true,

    mode:
      DISTRIBUTION_MODES.CUSTOM,

    rosters,

    assignedCount:
      assignedCharacters.size,

    unassignedCount:
      unassigned.length,

    unassignedCharacters:
      unassigned,
  };
}

/* ---------------------------------------------------------
   AUCTION
--------------------------------------------------------- */

/*
  Auction philosophy:

  The ENGINE manages:
  - budgets
  - current character
  - current bid
  - highest bidder
  - ownership
  - roster targets

  PLAYERS manage:
  - whether to bid
  - how much to bid
  - whether to pass

  Gemini does not own or distribute characters.
*/

export function createAuctionState({
  characters,
  players,
  startingBudget = 5000,
}) {
  const characterValidation =
    validateCharacters(characters);

  if (!characterValidation.valid) {
    return {
      success: false,
      errors:
        characterValidation.errors,
    };
  }

  const playerValidation =
    validatePlayers(players);

  if (!playerValidation.valid) {
    return {
      success: false,
      errors:
        playerValidation.errors,
    };
  }

  const safeBudget =
    number(startingBudget);

  if (safeBudget <= 0) {
    return {
      success: false,
      errors: [
        "Starting budget must be greater than zero.",
      ],
    };
  }

  const shuffledPool =
    shuffle(characters);

  const rosters =
    createEmptyRosters(players);

  const budgets =
    Object.fromEntries(
      players.map((player) => [
        player.id,
        safeBudget,
      ])
    );

  const rosterTargets =
    createRosterTargets(
      players,
      characters.length
    );

  return {
    success: true,

    mode:
      DISTRIBUTION_MODES.AUCTION,

    status: "active",

    pool:
      shuffledPool,

    currentCharacter:
      shuffledPool[0] || null,

    currentCharacterIndex: 0,

    budgets,

    startingBudget: safeBudget,

    rosters,

    rosterTargets,

    currentBid: 0,

    highestBidder: null,

    passedPlayers: [],

    auctionHistory: [],

    soldCharacters: 0,

    unsoldCharacters: [],

    finished: false,
  };
}

/* ---------------------------------------------------------
   AUCTION — BID
--------------------------------------------------------- */

export function placeAuctionBid({
  auction,
  playerId,
  amount,
}) {
  if (!auction) {
    return {
      success: false,
      error: "Auction does not exist.",
    };
  }

  if (auction.finished) {
    return {
      success: false,
      error: "Auction has already finished.",
    };
  }

  if (!auction.currentCharacter) {
    return {
      success: false,
      error:
        "There is no active character.",
    };
  }

  if (!auction.budgets[playerId]) {
    return {
      success: false,
      error:
        "Player is not part of this auction.",
    };
  }

  const bid =
    number(amount);

  if (bid <= auction.currentBid) {
    return {
      success: false,
      error:
        `Bid must be greater than current bid of ${auction.currentBid}.`,
    };
  }

  if (
    bid >
    auction.budgets[playerId]
  ) {
    return {
      success: false,
      error:
        "Player does not have enough budget.",
    };
  }

  const nextAuction =
    clone(auction);

  nextAuction.currentBid = bid;

  nextAuction.highestBidder =
    playerId;

  nextAuction.passedPlayers =
    nextAuction.passedPlayers.filter(
      (id) =>
        id !== playerId
    );

  return {
    success: true,

    auction: nextAuction,
  };
}

/* ---------------------------------------------------------
   AUCTION — PASS
--------------------------------------------------------- */

export function passAuction({
  auction,
  playerId,
}) {
  if (!auction) {
    return {
      success: false,
      error: "Auction does not exist.",
    };
  }

  if (auction.finished) {
    return {
      success: false,
      error: "Auction has finished.",
    };
  }

  const nextAuction =
    clone(auction);

  if (
    !nextAuction.passedPlayers.includes(
      playerId
    )
  ) {
    nextAuction.passedPlayers.push(
      playerId
    );
  }

  return {
    success: true,

    auction: nextAuction,
  };
}

/* ---------------------------------------------------------
   AUCTION — SELL
--------------------------------------------------------- */

/*
  Called when the auction timer ends or the host
  presses SELL.

  The highest bidder receives the character.
*/

export function sellAuctionCharacter({
  auction,
}) {
  if (!auction) {
    return {
      success: false,
      error: "Auction does not exist.",
    };
  }

  if (auction.finished) {
    return {
      success: false,
      error: "Auction has finished.",
    };
  }

  const nextAuction =
    clone(auction);

  const character =
    nextAuction.currentCharacter;

  if (!character) {
    return {
      success: false,
      error:
        "No character is currently being auctioned.",
    };
  }

  /*
    Nobody bid.
    Character becomes unsold and can later be
    returned to the pool.
  */
  if (!nextAuction.highestBidder) {
    nextAuction.unsoldCharacters.push(
      character
    );

    advanceAuctionCharacter(
      nextAuction
    );

    return {
      success: true,

      auction: nextAuction,

      sold: false,

      character,
    };
  }

  const winnerId =
    nextAuction.highestBidder;

  const price =
    nextAuction.currentBid;

  if (
    nextAuction.budgets[winnerId] <
    price
  ) {
    return {
      success: false,
      error:
        "Winner no longer has enough budget.",
    };
  }

  /*
    Deduct money.
  */
  nextAuction.budgets[
    winnerId
  ] -= price;

  /*
    Give character to winner.
  */
  nextAuction.rosters[
    winnerId
  ].push(character);

  nextAuction.soldCharacters += 1;

  nextAuction.auctionHistory.push({
    characterId:
      character.id,

    characterName:
      character.name,

    winnerId,

    price,

    soldAt:
      new Date().toISOString(),
  });

  advanceAuctionCharacter(
    nextAuction
  );

  return {
    success: true,

    auction: nextAuction,

    sold: true,

    winnerId,

    price,

    character,
  };
}

/* ---------------------------------------------------------
   AUCTION — ADVANCE
--------------------------------------------------------- */

function advanceAuctionCharacter(
  auction
) {
  auction.currentCharacterIndex += 1;

  auction.currentBid = 0;

  auction.highestBidder = null;

  auction.passedPlayers = [];

  /*
    We don't necessarily auction all 930 characters.

    The auction ends when every player's target roster
    has been filled.
  */
  const allTargetsReached =
    Object.entries(
      auction.rosterTargets
    ).every(
      ([playerId, target]) =>
        auction.rosters[playerId]
          .length >= target
    );

  if (allTargetsReached) {
    auction.currentCharacter = null;
    auction.finished = true;
    auction.status = "completed";

    return;
  }

  /*
    Find the next character that hasn't been sold.
  */
  let nextCharacter = null;
  let nextIndex =
    auction.currentCharacterIndex;

  while (
    nextIndex <
    auction.pool.length
  ) {
    const candidate =
      auction.pool[nextIndex];

    const alreadySold =
      auction.auctionHistory.some(
        (item) =>
          item.characterId ===
          candidate.id
      );

    if (!alreadySold) {
      nextCharacter = candidate;
      break;
    }

    nextIndex += 1;
  }

  /*
    If the main pool is exhausted but there are
    unsold characters, reuse the unsold pool.
  */
  if (!nextCharacter) {
    if (
      auction.unsoldCharacters.length
    ) {
      auction.pool = shuffle(
        auction.unsoldCharacters
      );

      auction.unsoldCharacters = [];

      auction.currentCharacterIndex = 0;

      auction.currentCharacter =
        auction.pool[0] || null;

      return;
    }

    auction.currentCharacter = null;

    auction.finished = true;

    auction.status = "completed";

    return;
  }

  auction.currentCharacterIndex =
    nextIndex;

  auction.currentCharacter =
    nextCharacter;
}

/* ---------------------------------------------------------
   AUCTION — QUICK BID
--------------------------------------------------------- */

export function quickBidAuction({
  auction,
  playerId,
  increment = 100,
}) {
  if (!auction) {
    return {
      success: false,
      error: "Auction does not exist.",
    };
  }

  const safeIncrement =
    Math.max(
      1,
      number(increment, 100)
    );

  const newBid =
    auction.currentBid +
    safeIncrement;

  return placeAuctionBid({
    auction,
    playerId,
    amount: newBid,
  });
}

/* ---------------------------------------------------------
   DISTRIBUTION VALIDATION
--------------------------------------------------------- */

export function validateDistribution({
  rosters,
  characters,
  players,
}) {
  const errors = [];

  const characterIds = new Set(
    characters.map(
      (character) => character.id
    )
  );

  const ownership = new Map();

  players.forEach((player) => {
    const roster =
      rosters[player.id] || [];

    roster.forEach((character) => {
      if (
        !characterIds.has(
          character.id
        )
      ) {
        errors.push(
          `${character.id} does not exist in the tournament database.`
        );
      }

      if (
        ownership.has(character.id)
      ) {
        errors.push(
          `Character ${character.id} is owned by multiple players.`
        );
      }

      ownership.set(
        character.id,
        player.id
      );
    });
  });

  return {
    valid: errors.length === 0,

    errors,

    assignedCharacters:
      ownership.size,

    unassignedCharacters:
      characters.length -
      ownership.size,

    ownership:
      Object.fromEntries(
        ownership
      ),
  };
}

/* ---------------------------------------------------------
   FINAL DISTRIBUTION SNAPSHOT
--------------------------------------------------------- */

export function createDistributionSnapshot({
  mode,
  players,
  characters,
  rosters,
}) {
  const validation =
    validateDistribution({
      rosters,
      characters,
      players,
    });

  return {
    mode,

    createdAt:
      new Date().toISOString(),

    playerCount:
      players.length,

    characterCount:
      characters.length,

    rosters: clone(rosters),

    validation,
  };
}

/* ---------------------------------------------------------
   PUBLIC API
--------------------------------------------------------- */

export {
  DISTRIBUTION_MODES,
};