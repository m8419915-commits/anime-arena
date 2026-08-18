/* =========================================================
   ANIME ARENA — AUCTION ENGINE
   Step 3C — Core Auction System

   UI stays inside AuctionMode.jsx.
   Gemini AI stays outside this engine.

   This file handles:
   - Auction setup
   - Budgets
   - Players
   - Role slots
   - Bidding
   - Passing
   - Character ownership
   - Team validation
   - Final team statistics
========================================================= */


/* =========================================================
   CONSTANTS
========================================================= */

export const MIN_BUDGET = 500;
export const MAX_BUDGET = 50000;

export const DEFAULT_BUDGET = 10000;

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 8;

export const MIN_TOTAL_SLOTS = 3;
export const MAX_TOTAL_SLOTS = 12;


/* =========================================================
   RARITY
========================================================= */

export const RARITIES = [
  "Common",
  "Rare",
  "Epic",
  "Legendary",
  "Mythic"
];


export const RARITY_MULTIPLIERS = {
  Common: 0.85,
  Rare: 1.0,
  Epic: 1.2,
  Legendary: 1.45,
  Mythic: 1.8
};


/* =========================================================
   HELPERS
========================================================= */

export function clamp(value, min, max) {
  return Math.max(
    min,
    Math.min(max, value)
  );
}


export function safeNumber(
  value,
  fallback = 0
) {
  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : fallback;
}


export function normalizeName(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}


/* =========================================================
   CHARACTER ID
========================================================= */

export function getAuctionCharacterId(
  character,
  index = 0
) {
  if (!character) {
    return `unknown-${index}`;
  }

  return String(
    character.id ??
    character.characterId ??
    character._id ??
    `${character.verse || "anime"}-${character.name || "character"}-${index}`
  );
}


/* =========================================================
   RARITY DETECTION
========================================================= */

export function getCharacterRarity(
  character
) {
  if (!character) {
    return "Common";
  }

  const rarity =
    character.rarity ??
    character.form?.rarity ??
    character.meta?.rarity;

  if (
    rarity &&
    RARITIES.includes(rarity)
  ) {
    return rarity;
  }

  const power =
    safeNumber(
      character.relPower ??
      character.realPower ??
      character.power ??
      character.stats?.power
    );

  if (power >= 95) return "Mythic";
  if (power >= 85) return "Legendary";
  if (power >= 70) return "Epic";
  if (power >= 50) return "Rare";

  return "Common";
}


/* =========================================================
   BASE AUCTION VALUE
========================================================= */

export function calculateBaseValue(
  character
) {
  if (!character) {
    return 100;
  }

  const power =
    safeNumber(
      character.relPower ??
      character.realPower ??
      character.power ??
      character.stats?.power
    );

  const hax =
    safeNumber(
      character.hax ??
      character.stats?.hax
    );

  const rarity =
    getCharacterRarity(
      character
    );

  const rarityMultiplier =
    RARITY_MULTIPLIERS[
      rarity
    ] || 1;

  /*
    Power is the main factor.
    Hax slightly increases market value.
  */

  const rawValue =
    (
      power * 80 +
      hax * 40
    ) *
    rarityMultiplier;

  return Math.max(
    100,
    Math.round(
      rawValue / 100
    ) * 100
  );
}


/* =========================================================
   AUCTION SETUP
========================================================= */

export function createAuctionPlayer({
  id,
  name,
  budget = DEFAULT_BUDGET,
  totalSlots = 6,
  roleSlots = {}
}) {
  const safeBudget =
    clamp(
      safeNumber(
        budget,
        DEFAULT_BUDGET
      ),
      MIN_BUDGET,
      MAX_BUDGET
    );

  return {
    id:
      id ??
      `player-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`,

    name:
      name ||
      "Player",

    startingBudget:
      safeBudget,

    budget:
      safeBudget,

    totalSlots:
      Math.max(
        MIN_TOTAL_SLOTS,
        Math.min(
          MAX_TOTAL_SLOTS,
          safeNumber(
            totalSlots,
            6
          )
        )
      ),

    roleSlots: {
      ...roleSlots
    },

    team: [],

    totalSpent: 0,

    wins: 0
  };
}


/* =========================================================
   ROLE SLOT VALIDATION
========================================================= */

/*
  Maximum one-third of total confirmed slots
  can belong to one role.

  Example:
  6 slots -> max 2 of one role
  9 slots -> max 3
  12 slots -> max 4
*/

export function getMaximumRoleSlots(
  totalSlots
) {
  const slots =
    Math.max(
      MIN_TOTAL_SLOTS,
      safeNumber(
        totalSlots,
        6
      )
    );

  return Math.max(
    1,
    Math.floor(
      slots / 3
    )
  );
}


export function validateRoleSlots(
  roleSlots,
  totalSlots
) {
  const maxPerRole =
    getMaximumRoleSlots(
      totalSlots
    );

  const roles =
    Object.entries(
      roleSlots || {}
    );

  const errors = [];

  roles.forEach(
    ([role, count]) => {
      if (
        safeNumber(count) >
        maxPerRole
      ) {
        errors.push(
          `${role} can have at most ${maxPerRole} slot(s).`
        );
      }

      if (
        safeNumber(count) < 0
      ) {
        errors.push(
          `${role} cannot have a negative slot count.`
        );
      }
    }
  );

  const usedSlots =
    roles.reduce(
      (sum, [, count]) =>
        sum +
        safeNumber(count),
      0
    );

  if (
    usedSlots >
    totalSlots
  ) {
    errors.push(
      "Role slots cannot exceed the total team slots."
    );
  }

  return {
    valid:
      errors.length === 0,

    errors,

    maxPerRole,

    usedSlots,

    remainingSlots:
      Math.max(
        0,
        totalSlots -
          usedSlots
      )
  };
}


/* =========================================================
   AUCTION STATE
========================================================= */

export function createAuctionState({
  players = [],
  budget = DEFAULT_BUDGET,
  totalSlots = 6,
  characters = [],
  auctionSettings = {}
} = {}) {
  const normalizedPlayers =
    players.length
      ? players.map(
          (player, index) =>
            createAuctionPlayer({
              id:
                player.id ??
                `player-${index + 1}`,

              name:
                player.name ??
                `Player ${index + 1}`,

              budget:
                player.budget ??
                budget,

              totalSlots:
                player.totalSlots ??
                totalSlots,

              roleSlots:
                player.roleSlots ??
                {}
            })
        )
      : [
          createAuctionPlayer({
            id: "player-1",
            name: "Player 1",
            budget,
            totalSlots
          }),

          createAuctionPlayer({
            id: "player-2",
            name: "Player 2",
            budget,
            totalSlots
          })
        ];

  return {
    players:
      normalizedPlayers,

    characters:
      characters.map(
        (character, index) => ({
          ...character,

          auctionId:
            getAuctionCharacterId(
              character,
              index
            ),

          auctionRarity:
            getCharacterRarity(
              character
            ),

          baseValue:
            calculateBaseValue(
              character
            )
        })
      ),

    soldCharacterIds: [],

    currentCharacter: null,

    currentBid: 0,

    highestBidderId: null,

    bidHistory: [],

    passedPlayerIds: [],

    auctionIndex: 0,

    status: "ready",

    settings: {
      startingBudget:
        budget,

      totalSlots,

      maxBidEnabled:
        auctionSettings.maxBidEnabled ??
        true,

      allowZeroBid:
        auctionSettings.allowZeroBid ??
        false,

      rarityDensity:
        auctionSettings.rarityDensity ??
        "balanced",

      ...auctionSettings
    }
  };
}


/* =========================================================
   PLAYER LOOKUP
========================================================= */

export function findPlayer(
  state,
  playerId
) {
  return state?.players?.find(
    player =>
      player.id === playerId
  );
}


/* =========================================================
   CHARACTER LOOKUP
========================================================= */

export function findCharacter(
  state,
  characterId
) {
  return state?.characters?.find(
    character =>
      character.auctionId ===
      characterId
  );
}


/* =========================================================
   AVAILABLE CHARACTERS
========================================================= */

export function getAvailableCharacters(
  state
) {
  const sold =
    new Set(
      state?.soldCharacterIds || []
    );

  return (
    state?.characters || []
  ).filter(
    character =>
      !sold.has(
        character.auctionId
      )
  );
}


/* =========================================================
   START CHARACTER AUCTION
========================================================= */

export function startCharacterAuction(
  state,
  character
) {
  if (!character) {
    return {
      ...state,
      currentCharacter: null,
      status: "finished"
    };
  }

  const characterId =
    character.auctionId ??
    getAuctionCharacterId(
      character
    );

  const available =
    getAvailableCharacters(
      state
    );

  const exists =
    available.some(
      item =>
        item.auctionId ===
        characterId
    );

  if (!exists) {
    return state;
  }

  const baseValue =
    safeNumber(
      character.baseValue,
      calculateBaseValue(
        character
      )
    );

  return {
    ...state,

    currentCharacter: {
      ...character,

      auctionId:
        characterId,

      baseValue,

      auctionRarity:
        getCharacterRarity(
          character
        )
    },

    currentBid: 0,

    highestBidderId: null,

    bidHistory: [],

    passedPlayerIds: [],

    status: "bidding"
  };
}


/* =========================================================
   MINIMUM BID
========================================================= */

export function getMinimumBid(
  state
) {
  const current =
    safeNumber(
      state?.currentBid
    );

  if (current <= 0) {
    return Math.max(
      100,
      safeNumber(
        state?.currentCharacter
          ?.baseValue,
        100
      )
    );
  }

  /*
    Bid increases by at least
    5% of the current bid,
    with a minimum increment of 100.
  */

  return (
    current +
    Math.max(
      100,
      Math.ceil(
        current * 0.05
      )
    )
  );
}


/* =========================================================
   MAXIMUM AFFORDABLE BID
========================================================= */

export function getMaximumAffordableBid(
  player
) {
  if (!player) {
    return 0;
  }

  const remainingSlots =
    Math.max(
      0,
      safeNumber(
        player.totalSlots
      ) -
        (player.team?.length || 0)
    );

  if (
    remainingSlots <= 0
  ) {
    return 0;
  }

  /*
    Player should not spend everything
    if they still need more characters.

    Reserve enough money for
    one minimum bid for every
    remaining slot.
  */

  const reserve =
    Math.max(
      0,
      (remainingSlots - 1) *
        100
    );

  return Math.max(
    0,
    player.budget -
      reserve
  );
}


/* =========================================================
   CAN PLAYER BID?
========================================================= */

export function canPlayerBid(
  state,
  playerId,
  amount
) {
  if (
    !state ||
    state.status !==
      "bidding"
  ) {
    return {
      valid: false,
      reason:
        "Auction is not currently accepting bids."
    };
  }

  const player =
    findPlayer(
      state,
      playerId
    );

  if (!player) {
    return {
      valid: false,
      reason:
        "Player not found."
    };
  }

  if (
    state.passedPlayerIds?.includes(
      playerId
    )
  ) {
    return {
      valid: false,
      reason:
        "This player has already passed."
    };
  }

  if (
    player.team.length >=
    player.totalSlots
  ) {
    return {
      valid: false,
      reason:
        "This player's team is already full."
    };
  }

  const bid =
    safeNumber(
      amount
    );

  const minimum =
    getMinimumBid(
      state
    );

  if (
    bid < minimum
  ) {
    return {
      valid: false,
      reason:
        `Minimum bid is ${minimum}.`
    };
  }

  const maximum =
    getMaximumAffordableBid(
      player
    );

  if (
    bid > maximum
  ) {
    return {
      valid: false,
      reason:
        `Maximum affordable bid is ${maximum}.`
    };
  }

  return {
    valid: true,
    reason: ""
  };
}


/* =========================================================
   PLACE BID
========================================================= */

export function placeBid(
  state,
  playerId,
  amount
) {
  const validation =
    canPlayerBid(
      state,
      playerId,
      amount
    );

  if (!validation.valid) {
    return {
      state,
      success: false,
      error:
        validation.reason
    };
  }

  const bid =
    safeNumber(
      amount
    );

  const player =
    findPlayer(
      state,
      playerId
    );

  const historyEntry = {
    playerId,
    playerName:
      player.name,
    amount: bid,
    timestamp:
      Date.now()
  };

  return {
    state: {
      ...state,

      currentBid:
        bid,

      highestBidderId:
        playerId,

      bidHistory: [
        ...(state.bidHistory || []),
        historyEntry
      ]
    },

    success: true,
    error: null
  };
}


/* =========================================================
   PASS
========================================================= */

export function passAuction(
  state,
  playerId
) {
  if (
    state.status !==
    "bidding"
  ) {
    return {
      state,
      success: false,
      error:
        "Auction is not active."
    };
  }

  const player =
    findPlayer(
      state,
      playerId
    );

  if (!player) {
    return {
      state,
      success: false,
      error:
        "Player not found."
    };
  }

  if (
    state.passedPlayerIds?.includes(
      playerId
    )
  ) {
    return {
      state,
      success: false,
      error:
        "Player has already passed."
    };
  }

  return {
    state: {
      ...state,

      passedPlayerIds: [
        ...(state.passedPlayerIds || []),
        playerId
      ]
    },

    success: true,
    error: null
  };
}


/* =========================================================
   ACTIVE BIDDERS
========================================================= */

export function getActiveBidders(
  state
) {
  return (
    state?.players || []
  ).filter(
    player =>
      !(
        state?.passedPlayerIds ||
        []
      ).includes(player.id) &&
      player.team.length <
        player.totalSlots
  );
}


/* =========================================================
   AUCTION STATUS
========================================================= */

export function getAuctionStatus(
  state
) {
  const active =
    getActiveBidders(
      state
    );

  const highestBidder =
    state.highestBidderId;

  /*
    If nobody has bid yet,
    auction continues while
    at least two players are active.
  */

  if (
    !highestBidder &&
    active.length <= 1
  ) {
    return "awaiting-start";
  }

  /*
    Once exactly one active bidder
    remains after someone has bid,
    that player can win.
  */

  if (
    highestBidder &&
    active.length <= 1
  ) {
    return "ready-to-sell";
  }

  return "bidding";
}


/* =========================================================
   SELL CHARACTER
========================================================= */

export function sellCurrentCharacter(
  state
) {
  const character =
    state.currentCharacter;

  const winnerId =
    state.highestBidderId;

  if (
    !character ||
    !winnerId
  ) {
    return {
      state,
      success: false,
      error:
        "There is no valid winning bid."
    };
  }

  const winnerIndex =
    state.players.findIndex(
      player =>
        player.id ===
        winnerId
    );

  if (
    winnerIndex === -1
  ) {
    return {
      state,
      success: false,
      error:
        "Winning player not found."
    };
  }

  const winner =
    state.players[
      winnerIndex
    ];

  if (
    winner.team.length >=
    winner.totalSlots
  ) {
    return {
      state,
      success: false,
      error:
        "Winning player's team is full."
    };
  }

  const price =
    safeNumber(
      state.currentBid
    );

  if (
    price > winner.budget
  ) {
    return {
      state,
      success: false,
      error:
        "Winning player cannot afford this bid."
    };
  }

  const purchasedCharacter = {
    ...character,

    purchasePrice:
      price,

    purchasedBy:
      winnerId,

    purchasedAt:
      Date.now()
  };

  const updatedPlayers =
    state.players.map(
      player => {
        if (
          player.id !==
          winnerId
        ) {
          return player;
        }

        return {
          ...player,

          budget:
            player.budget -
            price,

          totalSpent:
            player.totalSpent +
            price,

          wins:
            player.wins + 1,

          team: [
            ...player.team,
            purchasedCharacter
          ]
        };
      }
    );

  return {
    state: {
      ...state,

      players:
        updatedPlayers,

      soldCharacterIds: [
        ...(state.soldCharacterIds || []),
        character.auctionId
      ],

      currentCharacter:
        null,

      currentBid:
        0,

      highestBidderId:
        null,

      bidHistory: [],

      passedPlayerIds: [],

      auctionIndex:
        state.auctionIndex + 1,

      status:
        "ready"
    },

    success: true,
    error: null,

    winner: winnerId,

    price,

    character:
      purchasedCharacter
  };
}


/* =========================================================
   UNSOLD CHARACTER
========================================================= */

export function unsoldCurrentCharacter(
  state
) {
  if (
    !state.currentCharacter
  ) {
    return state;
  }

  return {
    ...state,

    currentCharacter:
      null,

    currentBid:
      0,

    highestBidderId:
      null,

    bidHistory: [],

    passedPlayerIds: [],

    auctionIndex:
      state.auctionIndex + 1,

    status:
      "ready"
  };
}


/* =========================================================
   TEAM ROLE ASSIGNMENT
========================================================= */

export function assignCharacterRole(
  player,
  characterId,
  role
) {
  if (!player) {
    return {
      success: false,
      error:
        "Player not found."
    };
  }

  const characterIndex =
    player.team.findIndex(
      character =>
        character.auctionId ===
        characterId
    );

  if (
    characterIndex === -1
  ) {
    return {
      success: false,
      error:
        "Character is not on this team."
    };
  }

  const currentRole =
    player.team[
      characterIndex
    ]?.assignedRole;

  const nextRole =
    String(
      role || ""
    ).trim();

  if (!nextRole) {
    return {
      success: false,
      error:
        "Role cannot be empty."
    };
  }

  const roleSlots = {
    ...(player.roleSlots || {})
  };

  const maxPerRole =
    getMaximumRoleSlots(
      player.totalSlots
    );

  const currentCount =
    player.team.filter(
      character =>
        character.assignedRole ===
        nextRole
    ).length;

  /*
    If the character already has
    this role, don't count itself twice.
  */

  const adjustedCount =
    currentRole === nextRole
      ? currentCount - 1
      : currentCount;

  if (
    adjustedCount >=
    maxPerRole
  ) {
    return {
      success: false,
      error:
        `${nextRole} cannot exceed ${maxPerRole} slots.`
    };
  }

  const updatedTeam =
    player.team.map(
      (character, index) =>
        index === characterIndex
          ? {
              ...character,
              assignedRole:
                nextRole
            }
          : character
    );

  return {
    success: true,
    player: {
      ...player,
      team:
        updatedTeam
    }
  };
}


/* =========================================================
   TEAM STATISTICS
========================================================= */

export function calculateAuctionTeamStats(
  player
) {
  if (!player) {
    return {
      power: 0,
      hax: 0,
      speed: 0,
      defense: 0,
      versatility: 0,
      battleIQ: 0,
      synergy: 0,
      total: 0
    };
  }

  const team =
    player.team || [];

  if (!team.length) {
    return {
      power: 0,
      hax: 0,
      speed: 0,
      defense: 0,
      versatility: 0,
      battleIQ: 0,
      synergy: 0,
      total: 0
    };
  }

  const getStat =
    (character, key) =>
      safeNumber(
        character?.[key] ??
        character?.stats?.[key] ??
        character?.form?.[key]
      );

  const power =
    averageTeamStat(
      team,
      character =>
        getStat(
          character,
          "power"
        )
    );

  const hax =
    averageTeamStat(
      team,
      character =>
        getStat(
          character,
          "hax"
        )
    );

  const speed =
    averageTeamStat(
      team,
      character =>
        getStat(
          character,
          "speed"
        )
    );

  const defense =
    averageTeamStat(
      team,
      character =>
        getStat(
          character,
          "defense"
        )
    );

  const versatility =
    averageTeamStat(
      team,
      character =>
        getStat(
          character,
          "versatility"
        )
    );

  const battleIQ =
    averageTeamStat(
      team,
      character =>
        getStat(
          character,
          "battleIQ"
        )
    );

  /*
    Basic role diversity.

    More unique roles =
    better theoretical synergy.
  */

  const roles =
    team
      .map(
        character =>
          character.assignedRole
      )
      .filter(Boolean);

  const uniqueRoles =
    new Set(roles).size;

  const synergy =
    team.length
      ? clamp(
          (
            uniqueRoles /
            team.length
          ) * 100,
          0,
          100
        )
      : 0;

  const total =
    power * 1.3 +
    hax * 1.35 +
    speed +
    defense * 0.9 +
    versatility +
    battleIQ +
    synergy * 0.5;

  return {
    power:
      Math.round(
        power * 100
      ) / 100,

    hax:
      Math.round(
        hax * 100
      ) / 100,

    speed:
      Math.round(
        speed * 100
      ) / 100,

    defense:
      Math.round(
        defense * 100
      ) / 100,

    versatility:
      Math.round(
        versatility * 100
      ) / 100,

    battleIQ:
      Math.round(
        battleIQ * 100
      ) / 100,

    synergy:
      Math.round(
        synergy * 100
      ) / 100,

    total:
      Math.round(
        total * 100
      ) / 100
  };
}


/* =========================================================
   AVERAGE TEAM STAT
========================================================= */

function averageTeamStat(
  team,
  getter
) {
  if (!team.length) {
    return 0;
  }

  const values =
    team.map(
      character =>
        safeNumber(
          getter(character)
        )
    );

  return (
    values.reduce(
      (sum, value) =>
        sum + value,
      0
    ) /
    values.length
  );
}


/* =========================================================
   AUCTION TEAM VALUE
========================================================= */

export function calculateTeamMarketValue(
  player
) {
  return (
    player?.team || []
  ).reduce(
    (total, character) =>
      total +
      safeNumber(
        character.purchasePrice,
        character.baseValue || 0
      ),
    0
  );
}


/* =========================================================
   AUCTION EFFICIENCY
========================================================= */

export function calculateAuctionEfficiency(
  player
) {
  if (!player) {
    return 0;
  }

  const spent =
    safeNumber(
      player.totalSpent
    );

  const stats =
    calculateAuctionTeamStats(
      player
    );

  if (
    spent <= 0
  ) {
    return 0;
  }

  /*
    Higher team power per money
    = better auction efficiency.
  */

  return Math.round(
    (
      stats.total /
      spent
    ) * 100000
  ) / 100;
}


/* =========================================================
   FINAL AUCTION SCORE
========================================================= */

export function calculateFinalAuctionScore(
  player
) {
  if (!player) {
    return 0;
  }

  const stats =
    calculateAuctionTeamStats(
      player
    );

  const efficiency =
    calculateAuctionEfficiency(
      player
    );

  const remainingBudget =
    safeNumber(
      player.budget
    );

  /*
    Final score values:
    - Combat quality
    - Team synergy
    - Budget discipline
    - Auction efficiency
  */

  const score =
    stats.total +
    stats.synergy * 0.35 +
    efficiency * 0.25 +
    remainingBudget /
      1000;

  return Math.round(
    score * 100
  ) / 100;
}


/* =========================================================
   FINAL LEADERBOARD
========================================================= */

export function createAuctionLeaderboard(
  state
) {
  return (
    state?.players || []
  )
    .map(
      player => {
        const stats =
          calculateAuctionTeamStats(
            player
          );

        return {
          playerId:
            player.id,

          playerName:
            player.name,

          teamSize:
            player.team.length,

          budget:
            player.budget,

          spent:
            player.totalSpent,

          stats,

          efficiency:
            calculateAuctionEfficiency(
              player
            ),

          finalScore:
            calculateFinalAuctionScore(
              player
            )
        };
      }
    )
    .sort(
      (a, b) =>
        b.finalScore -
        a.finalScore
    )
    .map(
      (player, index) => ({
        ...player,
        rank:
          index + 1
      })
    );
}


/* =========================================================
   AUCTION COMPLETION CHECK
========================================================= */

export function isAuctionComplete(
  state
) {
  if (!state) {
    return false;
  }

  const players =
    state.players || [];

  if (!players.length) {
    return false;
  }

  /*
    Auction is complete when
    every player has filled
    their team slots.
  */

  return players.every(
    player =>
      player.team.length >=
      player.totalSlots
  );
}


/* =========================================================
   FORCE FINISH CHECK
========================================================= */

export function getAuctionPhase(
  state
) {
  if (
    isAuctionComplete(
      state
    )
  ) {
    return "complete";
  }

  if (
    state?.status ===
    "bidding"
  ) {
    return "bidding";
  }

  if (
    state?.status ===
    "ready-to-sell"
  ) {
    return "ready-to-sell";
  }

  return "ready";
}


/* =========================================================
   EXPORT SNAPSHOT
========================================================= */

export function createAuctionSnapshot(
  state
) {
  return {
    phase:
      getAuctionPhase(
        state
      ),

    auctionIndex:
      state?.auctionIndex || 0,

    players:
      (state?.players || []).map(
        player => ({
          id: player.id,
          name: player.name,
          budget: player.budget,
          startingBudget:
            player.startingBudget,
          totalSpent:
            player.totalSpent,
          totalSlots:
            player.totalSlots,
          teamSize:
            player.team.length,
          team:
            player.team
        })
      ),

    currentCharacter:
      state?.currentCharacter,

    currentBid:
      state?.currentBid || 0,

    highestBidderId:
      state?.highestBidderId,

    soldCharacterIds:
      state?.soldCharacterIds || []
  };
}

/* =========================================================
   ROLE-AWARE AUCTION POOL GENERATOR
========================================================= */

export function createAuctionPool(
  characters = [],
  {
    rarities = RARITIES,
    slots = 6,
    players = [],
    poolSize = 50,
    roleDistributions = {},
    roleOptions = [],
  } = {}
) {
  if (!Array.isArray(characters) || !characters.length) {
    return [];
  }

  const selectedRarities =
    Array.isArray(rarities) && rarities.length
      ? rarities
      : RARITIES;

  const normalizedPoolSize = Math.max(
    1,
    Math.floor(
      safeNumber(poolSize, 50)
    )
  );

  /*
    Total characters required to theoretically
    fill every player's roster.
  */
  const totalRequiredSlots =
    Math.max(
      1,
      (players?.length || 1) *
        Math.max(
          1,
          Math.floor(
            safeNumber(slots, 6)
          )
        )
    );

  /*
    A pool smaller than the total number of
    roster slots can never fully complete the
    auction.
  */
  const targetSize = Math.max(
    normalizedPoolSize,
    totalRequiredSlots
  );

  const normalizeRole = (role) => {
    if (!role) return "Versatility";

    const value =
      String(role)
        .trim()
        .toLowerCase();

    if (
      value.includes("tank") ||
      value.includes("defense")
    ) {
      return "Tank";
    }

    if (
      value.includes("dps") ||
      value.includes("attack") ||
      value.includes("damage")
    ) {
      return "DPS";
    }

    if (value.includes("speed")) {
      return "Speed";
    }

    if (
      value.includes("hax") ||
      value.includes("ability")
    ) {
      return "Hax";
    }

    if (
      value.includes("support") ||
      value.includes("heal")
    ) {
      return "Support";
    }

    if (
      value.includes("iq") ||
      value.includes("intelligence") ||
      value.includes("battle iq")
    ) {
      return "IQ";
    }

    if (
      value.includes("finisher") ||
      value.includes("execution")
    ) {
      return "Finisher";
    }

    return "Versatility";
  };

  const getRole = (character) =>
    normalizeRole(
      character?.role ||
        character?.primaryRole ||
        character?.type ||
        character?.class ||
        character?.traits?.role
    );

  /*
    Remove accidental duplicate character/forms.
  */
  const unique = [];
  const seen = new Set();

  for (const character of characters) {
    if (!character) continue;

    const id = String(
      character.id ??
        character.auctionId ??
        character.characterId ??
        `${character.verse || ""}-${character.name || ""}`
    );

    if (seen.has(id)) continue;

    seen.add(id);

    unique.push({
      ...character,
      auctionId:
        character.auctionId ||
        getAuctionCharacterId(character),
      auctionRarity:
        getCharacterRarity(character),
      baseValue:
        calculateBaseValue(character),
      auctionRole:
        getRole(character),
    });
  }

  /*
    Only selected rarities are allowed.
  */
  const rarityFiltered =
    unique.filter((character) =>
      selectedRarities.includes(
        getCharacterRarity(character)
      )
    );

  /*
    Calculate the total demand for every role.
    Example:
    3 players × 3 Tank = 9 Tank candidates minimum.
  */
  const roleDemand = {};

  (players || []).forEach((player) => {
    const distribution =
      roleDistributions?.[player.id] ||
      player.roleSlots ||
      {};

    Object.entries(distribution).forEach(
      ([role, count]) => {
        const numericCount =
          Math.max(
            0,
            Math.floor(
              safeNumber(count)
            )
          );

        if (numericCount > 0) {
          roleDemand[role] =
            (roleDemand[role] || 0) +
            numericCount;
        }
      }
    );
  });

  /*
    Build role buckets.
  */
  const roleBuckets = {};

  Object.keys(roleDemand).forEach(
    (role) => {
      roleBuckets[role] =
        rarityFiltered
          .filter(
            (character) =>
              getRole(character) === role
          )
          .sort(
            () =>
              Math.random() - 0.5
          );
    }
  );

  /*
    Reserve required role candidates first.
  */
  const selected = [];
  const selectedIds = new Set();

  Object.entries(roleDemand).forEach(
    ([role, demand]) => {
      const bucket =
        roleBuckets[role] || [];

      const take =
        Math.min(
          demand,
          bucket.length
        );

      for (let i = 0; i < take; i++) {
        const character =
          bucket[i];

        const id =
          character.auctionId;

        if (selectedIds.has(id)) {
          continue;
        }

        selected.push(character);
        selectedIds.add(id);
      }
    }
  );

  /*
    Fill the remaining pool randomly.
  */
  const remaining =
    rarityFiltered
      .filter(
        (character) =>
          !selectedIds.has(
            character.auctionId
          )
      )
      .sort(
        () =>
          Math.random() - 0.5
      );

  for (
    const character of remaining
  ) {
    if (
      selected.length >=
      targetSize
    ) {
      break;
    }

    selected.push(character);
    selectedIds.add(
      character.auctionId
    );
  }

  /*
    Shuffle final pool.
  */
  return selected
    .slice(0, targetSize)
    .sort(
      () =>
        Math.random() - 0.5
    );
}


/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {
  createAuctionState,

  createAuctionPlayer,

  startCharacterAuction,

  placeBid,

  passAuction,

  sellCurrentCharacter,

  unsoldCurrentCharacter,

  assignCharacterRole,

  calculateAuctionTeamStats,

  calculateTeamMarketValue,

  calculateAuctionEfficiency,

  calculateFinalAuctionScore,

  createAuctionLeaderboard,

  createAuctionSnapshot,

  getAvailableCharacters,

  getMinimumBid,

  getMaximumAffordableBid,

  getAuctionStatus,

  getAuctionPhase,

  isAuctionComplete,

  validateRoleSlots,

  getMaximumRoleSlots,

  getCharacterRarity,

  calculateBaseValue,

  createAuctionPool,
};