/*
  Anime Arena — Grand Tournament
  Auction Engine — v11

  CURRENT SYSTEM
  ─────────────────────────────────────────────
  • ₹1,00,000 starting budget per player
  • Full 930-character database supported
  • Random auction pool order
  • Normal bidding
  • Quick bidding
  • Passing
  • Selling
  • Democratic skip support
  • Roster Lock
  • Automatic budget lock
  • Final Buy Window groundwork
  • Complete auction history
  • Sold / unsold tracking
  • Character objects remain untouched
  • Forms / tags / artwork / IntelDatabase data preserved
*/

const clone = (value) =>
  JSON.parse(JSON.stringify(value));

const number = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed)
    ? parsed
    : fallback;
};

const getId = (value) =>
  String(value ?? "").trim();

/* =========================================================
   CONFIGURATION
========================================================= */

export const AUCTION_CONFIG = {
  DEFAULT_STARTING_BUDGET: 100000,
  DEFAULT_STARTING_BID: 100,

  /*
    Below this amount a player cannot realistically
    participate in another normal auction.
  */
  ROSTER_LOCK_MIN_BUDGET: 1000,

  /*
    Maximum number of skip votes required.
    Actual requirement is calculated dynamically:
    majority of active players.
  */
  SKIP_MAJORITY_RULE: true,
};

export const ROSTER_LOCK_STATUS = {
  ACTIVE: "active",
  MANUAL_LOCKED: "manual_locked",
  BUDGET_LOCKED: "budget_locked",
};

const shuffle = (items) => {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
};

/* =========================================================
   PLAYER CREATION
========================================================= */

function createInitialPlayer(
  player,
  startingBudget
) {
  return {
    id: getId(player.id),

    name: String(
      player.name ||
        player.id ||
        "Player"
    ).trim(),

    budget:
      number(player.budget) ||
      number(
        startingBudget,
        AUCTION_CONFIG.DEFAULT_STARTING_BUDGET
      ),

    spent: 0,

    /*
      IMPORTANT:
      We preserve the existing roster if one exists.
    */
    roster: Array.isArray(player.roster)
      ? [...player.roster]
      : [],

    charactersWon: 0,
    auctionWins: 0,
    auctionLosses: 0,

    /* ROSTER LOCK */
    rosterLocked: false,
    rosterLockReason: null,
    rosterLockedAt: null,

    /* FINAL BUY */
    finalBuyUsed: false,
  };
}

/* =========================================================
   CREATE AUCTION
========================================================= */

export function createAuctionState({
  players = [],
  characters = [],
  startingBudget =
    AUCTION_CONFIG.DEFAULT_STARTING_BUDGET,
  startingBid =
    AUCTION_CONFIG.DEFAULT_STARTING_BID,
} = {}) {
  const pList =
    Array.isArray(players) &&
    players.length
      ? players
      : [
          {
            id: "player-1",
            name: "Player 1",
          },
          {
            id: "player-2",
            name: "Player 2",
          },
        ];

  /*
    IMPORTANT:
    We do NOT transform or rebuild characters here.

    Your complete character objects remain intact:
      characterId
      forms
      formId
      tags
      stats
      artwork
      achievements
      intel data
      canon information
      verse information
      etc.
  */

  const cList = Array.isArray(characters)
    ? characters.filter(Boolean)
    : [];

  const shuffledPool = shuffle(cList);

  const safeBudget = number(
    startingBudget,
    AUCTION_CONFIG.DEFAULT_STARTING_BUDGET
  );

  const safeBid = number(
    startingBid,
    AUCTION_CONFIG.DEFAULT_STARTING_BID
  );

  const playerState = pList.map((player) =>
    createInitialPlayer(
      player,
      safeBudget
    )
  );

  return {
    success: true,

    auction: {
      status: "active",

      startingBudget: safeBudget,
      defaultStartingBid: safeBid,

      /*
        MASTER DATABASE
        All characters remain available here.
      */
      characters: shuffledPool,

      /*
        Characters not yet auctioned.
      */
      remainingCharacters: [
        ...shuffledPool,
      ],

      currentCharacter: null,
      currentCharacterIndex: -1,

      currentBid: safeBid,
      highestBidderId: null,

      passedPlayerIds: [],

      /*
        DEMOCRATIC SKIP
      */
      skipVotes: [],

      /*
        PLAYERS
      */
      players: playerState,

      /*
        HISTORY
      */
      auctionHistory: [],

      soldCharacters: [],
      unsoldCharacters: [],

      totalCharacters:
        shuffledPool.length,

      completedCharacters: 0,

      currentAuctionNumber: 0,

      /*
        ROSTER LOCK SYSTEM
      */
      rosterLockPhase: false,

      /*
        FINAL BUY WINDOW
      */
      finalBuyWindow: false,
      finalBuyPlayerId: null,
      finalBuyUsed: false,

      /*
        FUTURE DISTRIBUTION PHASE
      */
      distributionPhase: false,
      distributionComplete: false,

      /*
        Useful UI state
      */
      lastAction: null,
      lastActionAt: null,
    },
  };
}

/* =========================================================
   PLAYER HELPERS
========================================================= */

export function getAuctionPlayer(
  auction,
  playerId
) {
  if (
    !auction ||
    !Array.isArray(auction.players)
  ) {
    return null;
  }

  return (
    auction.players.find(
      (player) =>
        String(player.id) ===
        getId(playerId)
    ) || null
  );
}

export function getActivePlayers(auction) {
  if (
    !auction ||
    !Array.isArray(auction.players)
  ) {
    return [];
  }

  return auction.players.filter(
    (player) =>
      !player.rosterLocked
  );
}

export function getPlayerLockStatus(
  auction,
  playerId
) {
  const player = getAuctionPlayer(
    auction,
    playerId
  );

  if (!player) {
    return {
      locked: false,
      status: ROSTER_LOCK_STATUS.ACTIVE,
    };
  }

  if (player.rosterLocked) {
    return {
      locked: true,
      status:
        player.rosterLockReason ||
        ROSTER_LOCK_STATUS.MANUAL_LOCKED,
    };
  }

  if (
    number(player.budget) <
    AUCTION_CONFIG.ROSTER_LOCK_MIN_BUDGET
  ) {
    return {
      locked: true,
      status:
        ROSTER_LOCK_STATUS.BUDGET_LOCKED,
    };
  }

  return {
    locked: false,
    status: ROSTER_LOCK_STATUS.ACTIVE,
  };
}

/* =========================================================
   AUTOMATIC BUDGET LOCK
========================================================= */

export function autoLockPlayersByBudget(
  auction
) {
  if (
    !auction ||
    !Array.isArray(auction.players)
  ) {
    return {
      success: false,
      error: "Invalid auction state.",
    };
  }

  const next = clone(auction);

  next.players = next.players.map(
    (player) => {
      if (
        !player.rosterLocked &&
        number(player.budget) <
          AUCTION_CONFIG.ROSTER_LOCK_MIN_BUDGET
      ) {
        return {
          ...player,

          rosterLocked: true,

          rosterLockReason:
            ROSTER_LOCK_STATUS.BUDGET_LOCKED,

          rosterLockedAt: Date.now(),
        };
      }

      return player;
    }
  );

  const allLocked =
    next.players.length > 0 &&
    next.players.every(
      (player) =>
        player.rosterLocked
    );

  if (allLocked) {
    next.rosterLockPhase = true;
  }

  return {
    success: true,
    auction: next,
    allLocked,
  };
}

/* =========================================================
   MANUAL ROSTER LOCK
========================================================= */

export function lockPlayerRoster(
  auction,
  playerId
) {
  if (
    !auction ||
    auction.status !== "active"
  ) {
    return {
      success: false,
      error: "Auction is not active.",
    };
  }

  if (auction.finalBuyWindow) {
    return {
      success: false,
      error:
        "The auction is currently in the Final Buy Window.",
    };
  }

  const player = getAuctionPlayer(
    auction,
    playerId
  );

  if (!player) {
    return {
      success: false,
      error: "Player not found.",
    };
  }

  if (player.rosterLocked) {
    return {
      success: false,
      error:
        `${player.name}'s roster is already locked.`,
    };
  }

  const next = clone(auction);

  const target = getAuctionPlayer(
    next,
    playerId
  );

  target.rosterLocked = true;

  target.rosterLockReason =
    ROSTER_LOCK_STATUS.MANUAL_LOCKED;

  target.rosterLockedAt =
    Date.now();

  next.auctionHistory.push({
    type: "roster_lock",

    playerId: target.id,

    playerName: target.name,

    budgetRemaining:
      target.budget,

    rosterSize:
      target.roster?.length || 0,
  });

  next.lastAction =
    `${target.name} locked their roster.`;

  next.lastActionAt =
    Date.now();

  const allLocked =
    next.players.length > 0 &&
    next.players.every(
      (p) => p.rosterLocked
    );

  if (allLocked) {
    next.rosterLockPhase = true;
  }

  return {
    success: true,
    auction: next,
    allLocked,
  };
}

/* =========================================================
   START NEXT AUCTION
========================================================= */

export function startNextAuction(
  auction
) {
  if (!auction) {
    return {
      success: false,
      error: "Auction state is missing.",
    };
  }

  /*
    First automatically lock players who
    no longer have enough money.
  */
  let working = auction;

  const budgetLock =
    autoLockPlayersByBudget(
      working
    );

  if (budgetLock.success) {
    working =
      budgetLock.auction;
  }

  const next = clone(working);

  /*
    If roster-lock phase has already begun,
    don't start another normal auction.
  */
  if (next.rosterLockPhase) {
    next.status = "roster_lock";

    return {
      success: true,
      auction: next,
      completed: true,
      rosterLockPhase: true,
    };
  }

  if (
    !Array.isArray(
      next.remainingCharacters
    )
  ) {
    next.remainingCharacters =
      Array.isArray(next.characters)
        ? [...next.characters]
        : [];
  }

  /*
    No characters left.
  */
  if (
    next.remainingCharacters.length === 0
  ) {
    next.status = "completed";

    next.currentCharacter = null;

    return {
      success: true,
      auction: next,
      completed: true,
    };
  }

  /*
    Select randomised next character.
  */
  const character =
    next.remainingCharacters.shift();

  next.currentCharacter =
    character;

  next.currentCharacterIndex =
    next.completedCharacters;

  next.currentBid =
    next.defaultStartingBid ||
    AUCTION_CONFIG.DEFAULT_STARTING_BID;

  next.highestBidderId = null;

  next.passedPlayerIds = [];

  next.skipVotes = [];

  next.currentAuctionNumber =
    (next.currentAuctionNumber || 0) +
    1;

  next.status = "active";

  next.lastAction =
    `LOT #${next.currentAuctionNumber} opened.`;

  next.lastActionAt =
    Date.now();

  return {
    success: true,
    auction: next,
    completed: false,
  };
}

/* =========================================================
   ACTIVE BIDDERS
========================================================= */

export function getActiveBidders(
  auction
) {
  if (
    !auction ||
    !Array.isArray(auction.players)
  ) {
    return [];
  }

  const passed =
    Array.isArray(
      auction.passedPlayerIds
    )
      ? auction.passedPlayerIds
      : [];

  return auction.players.filter(
    (player) =>
      !player.rosterLocked &&
      !passed.includes(player.id)
  );
}

/* =========================================================
   BID VALIDATION
========================================================= */

export function canPlayerBid(
  auction,
  playerId,
  bidAmount
) {
  const player =
    getAuctionPlayer(
      auction,
      playerId
    );

  if (!player) {
    return {
      valid: false,
      error: "Player not found.",
    };
  }

  if (player.rosterLocked) {
    return {
      valid: false,
      error:
        `${player.name}'s roster is locked.`,
    };
  }

  const bid = number(bidAmount);

  if (bid <= 0) {
    return {
      valid: false,
      error:
        "Bid must be greater than zero.",
    };
  }

  if (
    bid <=
    number(auction.currentBid)
  ) {
    return {
      valid: false,
      error:
        `Bid must be higher than ₹${number(
          auction.currentBid
        )}.`,
    };
  }

  if (bid > player.budget) {
    return {
      valid: false,
      error:
        `${player.name} cannot afford ₹${bid}.`,
    };
  }

  if (
    auction.passedPlayerIds?.includes(
      player.id
    )
  ) {
    return {
      valid: false,
      error:
        `${player.name} already passed on this character.`,
    };
  }

  return {
    valid: true,
  };
}

/* =========================================================
   PLACE BID
========================================================= */

export function placeAuctionBid({
  auction,
  playerId,
  bidAmount,
}) {
  if (
    !auction ||
    auction.status !== "active"
  ) {
    return {
      success: false,
      error: "Auction is not active.",
    };
  }

  if (!auction.currentCharacter) {
    return {
      success: false,
      error:
        "No character is currently on the block.",
    };
  }

  const validation =
    canPlayerBid(
      auction,
      playerId,
      bidAmount
    );

  if (!validation.valid) {
    return {
      success: false,
      error: validation.error,
    };
  }

  const next = clone(auction);

  next.currentBid =
    number(bidAmount);

  next.highestBidderId =
    getId(playerId);

  if (
    Array.isArray(
      next.passedPlayerIds
    )
  ) {
    next.passedPlayerIds =
      next.passedPlayerIds.filter(
        (id) =>
          id !== getId(playerId)
      );
  }

  /*
    Any previous skip votes are cancelled
    because bidding has resumed.
  */
  next.skipVotes = [];

  const bidder =
    getAuctionPlayer(
      next,
      playerId
    );

  next.lastAction =
    `${bidder?.name || "Player"} bid ₹${number(
      bidAmount
    ).toLocaleString("en-IN")}.`;

  next.lastActionAt =
    Date.now();

  return {
    success: true,
    auction: next,
  };
}

/* =========================================================
   QUICK BID
========================================================= */

export function quickBid({
  auction,
  playerId,
  increment = 100,
}) {
  const nextBid =
    number(auction.currentBid) +
    number(
      increment,
      100
    );

  return placeAuctionBid({
    auction,
    playerId,
    bidAmount: nextBid,
  });
}

/* =========================================================
   PASS
========================================================= */

export function passAuction({
  auction,
  playerId,
}) {
  if (
    !auction ||
    auction.status !== "active"
  ) {
    return {
      success: false,
      error: "Auction is not active.",
    };
  }

  const player =
    getAuctionPlayer(
      auction,
      playerId
    );

  if (!player) {
    return {
      success: false,
      error: "Player not found.",
    };
  }

  if (player.rosterLocked) {
    return {
      success: false,
      error:
        `${player.name}'s roster is locked.`,
    };
  }

  const next = clone(auction);

  if (
    !Array.isArray(
      next.passedPlayerIds
    )
  ) {
    next.passedPlayerIds = [];
  }

  if (
    !next.passedPlayerIds.includes(
      player.id
    )
  ) {
    next.passedPlayerIds.push(
      player.id
    );
  }

  /*
    A pass cancels that player's skip vote.
  */
  next.skipVotes =
    Array.isArray(next.skipVotes)
      ? next.skipVotes.filter(
          (id) =>
            id !== player.id
        )
      : [];

  const activeBidders =
    getActiveBidders(next);

  /*
    Everyone passes and nobody bid.
  */
  if (
    activeBidders.length === 0 &&
    !next.highestBidderId
  ) {
    return finishAuction({
      auction: next,
      sold: false,
    });
  }

  /*
    Only one active bidder remains
    after everyone else passed.
  */
  if (
    activeBidders.length <= 1 &&
    next.highestBidderId
  ) {
    return finishAuction({
      auction: next,
      sold: true,
    });
  }

  next.lastAction =
    `${player.name} passed.`;

  next.lastActionAt =
    Date.now();

  return {
    success: true,
    auction: next,
  };
}

/* =========================================================
   DEMOCRATIC SKIP
========================================================= */

export function getSkipVoteRequirement(
  auction
) {
  const players =
    Array.isArray(
      auction?.players
    )
      ? auction.players
      : [];

  const activePlayers =
    players.filter(
      (player) =>
        !player.rosterLocked
    );

  if (
    activePlayers.length === 0
  ) {
    return 1;
  }

  /*
    Strict majority:
    3 players → 2 votes
    4 players → 3 votes
    5 players → 3 votes
  */
  return Math.floor(
    activePlayers.length / 2
  ) + 1;
}

export function voteSkipAuction(
  auction,
  playerId
) {
  if (
    !auction ||
    auction.status !== "active"
  ) {
    return {
      success: false,
      error: "Auction is not active.",
    };
  }

  if (auction.highestBidderId) {
    return {
      success: false,
      error:
        "A bid already exists. This character cannot be skipped.",
    };
  }

  const player =
    getAuctionPlayer(
      auction,
      playerId
    );

  if (!player) {
    return {
      success: false,
      error: "Player not found.",
    };
  }

  if (player.rosterLocked) {
    return {
      success: false,
      error:
        `${player.name}'s roster is locked.`,
    };
  }

  const next = clone(auction);

  if (
    !Array.isArray(
      next.skipVotes
    )
  ) {
    next.skipVotes = [];
  }

  if (
    next.skipVotes.includes(
      player.id
    )
  ) {
    return {
      success: false,
      error:
        `${player.name} has already voted to skip.`,
    };
  }

  next.skipVotes.push(
    player.id
  );

  const required =
    getSkipVoteRequirement(next);

  const approved =
    next.skipVotes.length >=
    required;

  next.lastAction =
    `${player.name} voted to skip (${next.skipVotes.length}/${required}).`;

  next.lastActionAt =
    Date.now();

  if (approved) {
    const result =
      finishAuction({
        auction: next,
        sold: false,
      });

    if (result.success) {
      result.auction.lastAction =
        "Democratic skip approved — character skipped.";
    }

    return result;
  }

  return {
    success: true,
    auction: next,
    skipped: false,
    votes: next.skipVotes.length,
    requiredVotes: required,
  };
}

/* =========================================================
   FINISH AUCTION
========================================================= */

export function finishAuction({
  auction,
  sold,
}) {
  const next = clone(auction);

  const character =
    next.currentCharacter;

  if (!character) {
    return {
      success: false,
      error:
        "No active character to finish.",
    };
  }

  if (
    !Array.isArray(
      next.soldCharacters
    )
  ) {
    next.soldCharacters = [];
  }

  if (
    !Array.isArray(
      next.unsoldCharacters
    )
  ) {
    next.unsoldCharacters = [];
  }

  if (
    !Array.isArray(
      next.auctionHistory
    )
  ) {
    next.auctionHistory = [];
  }

  if (
    sold &&
    next.highestBidderId
  ) {
    const winner =
      getAuctionPlayer(
        next,
        next.highestBidderId
      );

    if (!winner) {
      return {
        success: false,
        error:
          "Auction winner could not be found.",
      };
    }

    if (winner.rosterLocked) {
      return {
        success: false,
        error:
          `${winner.name}'s roster is locked.`,
      };
    }

    const price =
      number(next.currentBid);

    if (
      price > winner.budget
    ) {
      return {
        success: false,
        error:
          `${winner.name} cannot afford this bid.`,
      };
    }

    winner.budget =
      Math.max(
        0,
        winner.budget - price
      );

    winner.spent =
      (winner.spent || 0) +
      price;

    /*
      Preserve the COMPLETE character object.
    */
    winner.roster.push(
      character
    );

    winner.charactersWon =
      (winner.charactersWon || 0) +
      1;

    winner.auctionWins =
      (winner.auctionWins || 0) +
      1;

    next.soldCharacters.push({
      characterId:
        character.characterId ||
        character.id ||
        null,

      characterName:
        character.name ||
        character.canonName ||
        "Character",

      playerId:
        winner.id,

      playerName:
        winner.name,

      price,
    });

    next.auctionHistory.push({
      type: "auction_result",

      auctionNumber:
        next.currentAuctionNumber,

      characterId:
        character.characterId ||
        character.id ||
        null,

      characterName:
        character.name ||
        character.canonName ||
        "Character",

      result: "sold",

      winnerId:
        winner.id,

      finalBid:
        price,
    });

    next.lastAction =
      `${winner.name} won ${character.name || "the character"} for ₹${price.toLocaleString(
        "en-IN"
      )}.`;
  } else {
    next.unsoldCharacters.push(
      character
    );

    next.auctionHistory.push({
      type: "auction_result",

      auctionNumber:
        next.currentAuctionNumber,

      characterId:
        character.characterId ||
        character.id ||
        null,

      characterName:
        character.name ||
        character.canonName ||
        "Character",

      result: "unsold",

      winnerId: null,

      finalBid: 0,
    });

    next.lastAction =
      `${character.name || "Character"} was skipped / unsold.`;
  }

  next.completedCharacters =
    (next.completedCharacters || 0) +
    1;

  next.currentCharacter =
    null;

  next.highestBidderId =
    null;

  next.currentBid =
    next.defaultStartingBid ||
    AUCTION_CONFIG.DEFAULT_STARTING_BID;

  next.passedPlayerIds = [];

  next.skipVotes = [];

  /*
    Automatically lock players who have
    fallen below the minimum viable budget.
  */
  const budgetLock =
    autoLockPlayersByBudget(next);

  if (budgetLock.success) {
    Object.assign(
      next,
      budgetLock.auction
    );
  }

  /*
    End condition #1:
    All characters have actually been auctioned.
  */
  if (
    next.completedCharacters >=
      next.totalCharacters ||
    next.remainingCharacters.length === 0
  ) {
    next.status = "completed";

    return {
      success: true,
      auction: next,
      completed: true,
    };
  }

  /*
    End condition #2:
    Everybody manually/budget locked.
  */
  const allLocked =
    next.players.length > 0 &&
    next.players.every(
      (player) =>
        player.rosterLocked
    );

  if (allLocked) {
    next.rosterLockPhase = true;
    next.status = "roster_lock";

    return {
      success: true,
      auction: next,
      completed: true,
      rosterLockPhase: true,
    };
  }

  return {
    success: true,
    auction: next,
  };
}

/* =========================================================
   SELL CURRENT CHARACTER
========================================================= */

export function sellCurrentCharacter(
  auction
) {
  if (!auction) {
    return {
      success: false,
      error: "Auction state is missing.",
    };
  }

  if (!auction.highestBidderId) {
    return {
      success: false,
      error:
        "Nobody has placed a bid on this character yet.",
    };
  }

  return finishAuction({
    auction,
    sold: true,
  });
}

/* =========================================================
   AUCTION SUMMARY
========================================================= */

export function getAuctionSummary(
  auction
) {
  if (!auction) {
    return {
      status: "idle",

      totalCharacters: 0,

      completedCharacters: 0,

      remainingCharacters: 0,

      soldCharacters: 0,

      unsoldCharacters: 0,

      lockedPlayers: 0,

      activePlayers: 0,

      finalBuyWindow: false,

      rosterLockPhase: false,

      players: [],
    };
  }

  const players =
    Array.isArray(
      auction.players
    )
      ? auction.players
      : [];

  return {
    status:
      auction.status,

    totalCharacters:
      auction.totalCharacters || 0,

    completedCharacters:
      auction.completedCharacters || 0,

    remainingCharacters:
      auction.remainingCharacters
        ?.length || 0,

    soldCharacters:
      auction.soldCharacters
        ?.length || 0,

    unsoldCharacters:
      auction.unsoldCharacters
        ?.length || 0,

    lockedPlayers:
      players.filter(
        (player) =>
          player.rosterLocked
      ).length,

    activePlayers:
      players.filter(
        (player) =>
          !player.rosterLocked
      ).length,

    finalBuyWindow:
      Boolean(
        auction.finalBuyWindow
      ),

    rosterLockPhase:
      Boolean(
        auction.rosterLockPhase
      ),

    skipVotes:
      auction.skipVotes?.length ||
      0,

    skipVotesRequired:
      getSkipVoteRequirement(
        auction
      ),

    players:
      players.map(
        (player) => ({
          id: player.id,

          name: player.name,

          budget: player.budget,

          spent: player.spent,

          characters:
            player.roster?.length ||
            0,

          rosterLocked:
            Boolean(
              player.rosterLocked
            ),

          rosterLockReason:
            player.rosterLockReason ||
            null,
        })
      ),
  };
}

/* =========================================================
   LIVE AUCTION INFORMATION
========================================================= */

export function getLiveAuctionInfo(
  auction
) {
  if (!auction) {
    return null;
  }

  const character =
    auction.currentCharacter;

  const highestBidder =
    auction.highestBidderId
      ? getAuctionPlayer(
          auction,
          auction.highestBidderId
        )
      : null;

  const activeBidders =
    getActiveBidders(
      auction
    );

  return {
    auctionNumber:
      auction.currentAuctionNumber ||
      0,

    characterId:
      character?.characterId ||
      character?.id ||
      null,

    characterName:
      character?.name ||
      character?.canonName ||
      "Unknown",

    currentBid:
      number(
        auction.currentBid
      ),

    highestBidderId:
      auction.highestBidderId ||
      null,

    highestBidderName:
      highestBidder?.name ||
      null,

    activeBidderCount:
      activeBidders.length,

    activeBidderNames:
      activeBidders.map(
        (player) =>
          player.name
      ),

    passedPlayerIds:
      auction.passedPlayerIds ||
      [],

    skipVotes:
      auction.skipVotes || [],

    skipVotesRequired:
      getSkipVoteRequirement(
        auction
      ),

    completed:
      auction.completedCharacters ||
      0,

    total:
      auction.totalCharacters ||
      0,

    remaining:
      auction.remainingCharacters
        ?.length || 0,

    lastAction:
      auction.lastAction ||
      null,
  };
}