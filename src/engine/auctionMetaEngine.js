/* =========================================================
   ANIME ARENA — AUCTION META ENGINE
   ---------------------------------------------------------
   Competitive / replayability layer.

   Responsibilities:
   • Purchase evaluation
   • Role compatibility
   • Market value
   • Strategic scoring
   • Auction moments
   • Achievements
   • Streaks
   • Rivalry statistics
   • Player grades
   • Final Gemini evidence packet

   IMPORTANT:
   This engine NEVER changes ownership or role assignment.
   It only evaluates decisions already made by the player.
========================================================= */

const ROLE_OPTIONS = [
  "Tank",
  "DPS",
  "Speed",
  "Hax",
  "Support",
  "IQ",
  "Versatility",
  "Finisher",
];

/* =========================================================
   BASIC HELPERS
========================================================= */

function num(value, fallback = 0) {
  const n = Number(value);

  return Number.isFinite(n)
    ? n
    : fallback;
}

function clamp(value, min = 0, max = 100) {
  return Math.max(
    min,
    Math.min(
      max,
      num(value)
    )
  );
}

function normalizeRole(role) {
  if (!role) {
    return "Versatility";
  }

  const value =
    String(role)
      .toLowerCase()
      .trim();

  if (
    value.includes("tank") ||
    value.includes("defense") ||
    value.includes("defender")
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

  if (
    value.includes("speed") ||
    value.includes("assassin")
  ) {
    return "Speed";
  }

  if (
    value.includes("hax") ||
    value.includes("ability") ||
    value.includes("reality")
  ) {
    return "Hax";
  }

  if (
    value.includes("support") ||
    value.includes("heal") ||
    value.includes("medic")
  ) {
    return "Support";
  }

  if (
    value.includes("iq") ||
    value.includes("intelligence") ||
    value.includes("strateg")
  ) {
    return "IQ";
  }

  if (
    value.includes("finish") ||
    value.includes("execution")
  ) {
    return "Finisher";
  }

  if (
    value.includes("versat") ||
    value.includes("hybrid")
  ) {
    return "Versatility";
  }

  return "Versatility";
}

/* =========================================================
   ROLE COMPATIBILITY
========================================================= */

const ROLE_COMPATIBILITY = {
  Tank: {
    Tank: 100,
    Support: 74,
    DPS: 58,
    Speed: 45,
    Hax: 62,
    IQ: 55,
    Versatility: 70,
    Finisher: 48,
  },

  DPS: {
    Tank: 50,
    Support: 64,
    DPS: 100,
    Speed: 82,
    Hax: 78,
    IQ: 65,
    Versatility: 76,
    Finisher: 92,
  },

  Speed: {
    Tank: 42,
    Support: 66,
    DPS: 90,
    Speed: 100,
    Hax: 84,
    IQ: 70,
    Versatility: 82,
    Finisher: 88,
  },

  Hax: {
    Tank: 55,
    Support: 70,
    DPS: 78,
    Speed: 82,
    Hax: 100,
    IQ: 92,
    Versatility: 94,
    Finisher: 74,
  },

  Support: {
    Tank: 86,
    Support: 100,
    DPS: 56,
    Speed: 64,
    Hax: 72,
    IQ: 80,
    Versatility: 81,
    Finisher: 38,
  },

  IQ: {
    Tank: 72,
    Support: 84,
    DPS: 68,
    Speed: 71,
    Hax: 91,
    IQ: 100,
    Versatility: 90,
    Finisher: 59,
  },

  Versatility: {
    Tank: 82,
    Support: 80,
    DPS: 83,
    Speed: 84,
    Hax: 95,
    IQ: 92,
    Versatility: 100,
    Finisher: 81,
  },

  Finisher: {
    Tank: 44,
    Support: 35,
    DPS: 93,
    Speed: 87,
    Hax: 81,
    IQ: 58,
    Versatility: 78,
    Finisher: 100,
  },
};

/* =========================================================
   ROLE FIT
========================================================= */

export function getRoleCompatibility(
  naturalRole,
  assignedRole
) {
  const natural =
    normalizeRole(naturalRole);

  const assigned =
    normalizeRole(assignedRole);

  return (
    ROLE_COMPATIBILITY[natural]?.[assigned] ??
    50
  );
}

/* =========================================================
   MARKET VALUE
========================================================= */

export function estimateMarketValue({
  character,
  auctionHistory = [],
  poolSize = 0,
}) {
  const power =
    Math.max(
      0,
      num(
        character?.power ??
        character?.powerLevel ??
        character?.PNR ??
        character?.realPower ??
        character?.relPower
      )
    );

  const hax =
    clamp(
      character?.hax,
      0,
      100
    );

  const rarity =
    String(
      character?.rarity ||
      "Common"
    ).toLowerCase();

  const rarityMultiplier =
    rarity.includes("mythic")
      ? 1.90
      : rarity.includes("legendary")
      ? 1.55
      : rarity.includes("epic")
      ? 1.28
      : rarity.includes("rare")
      ? 1.10
      : 0.85;

  const historicalPrices =
    auctionHistory
      .filter(
        (item) =>
          item?.character &&
          item?.price > 0
      )
      .map(
        (item) =>
          num(item.price)
      );

  const historicalAverage =
    historicalPrices.length
      ? historicalPrices.reduce(
          (a, b) =>
            a + b,
          0
        ) /
        historicalPrices.length
      : 0;

  /*
    Normalize power into a practical auction-credit
    range. This is intentionally not the final battle score.
  */
  const powerBase =
    Math.sqrt(
      Math.max(
        0,
        power
      )
    ) * 6;

  const haxBase =
    hax * 9;

  const historyAdjustment =
    historicalAverage > 0
      ? historicalAverage * 0.18
      : 0;

  const poolAdjustment =
    poolSize > 0
      ? Math.max(
          0,
          40 -
            poolSize * 0.04
        )
      : 0;

  const marketValue =
    (
      powerBase +
      haxBase +
      historyAdjustment +
      poolAdjustment
    ) *
    rarityMultiplier;

  return Math.max(
    50,
    Math.round(
      marketValue
    )
  );
}

/* =========================================================
   PRICE EFFICIENCY
========================================================= */

function getPriceEfficiency(
  purchasePrice,
  marketValue
) {
  const price =
    Math.max(
      1,
      num(
        purchasePrice
      )
    );

  const value =
    Math.max(
      1,
      num(
        marketValue
      )
    );

  return clamp(
    100 -
      ((price - value) /
        value) *
        100
  );
}

/* =========================================================
   TEAM BALANCE
========================================================= */

function getTeamRoleBalance(
  team = [],
  roleDistributions = {},
  playerId
) {
  if (!team.length) {
    return 50;
  }

  const counts =
    {};

  ROLE_OPTIONS.forEach(
    (role) => {
      counts[role] =
        team.filter(
          (character) =>
            normalizeRole(
              character?.assignedRole
            ) ===
            role
        ).length;
    }
  );

  const distribution =
    roleDistributions?.[
      playerId
    ] || {};

  let usedSlots = 0;

  let balanceScore = 0;

  ROLE_OPTIONS.forEach(
    (role) => {
      const target =
        num(
          distribution[role]
        );

      const used =
        counts[role];

      usedSlots +=
        target;

      if (target <= 0) {
        return;
      }

      const ratio =
        Math.min(
          1,
          used /
            target
        );

      balanceScore +=
        ratio * 100;
    }
  );

  if (!usedSlots) {
    return 50;
  }

  return clamp(
    balanceScore /
      ROLE_OPTIONS.filter(
        (role) =>
          num(
            distribution[role]
          ) >
          0
      ).length
  );
}

/* =========================================================
   PURCHASE ANALYSIS
========================================================= */

export function analyzePurchaseDecision({
  player,
  character,
  purchasePrice,
  assignedRole,
  roleDistributions,
  auctionHistory = [],
  poolSize = 0,
}) {
  const naturalRole =
    normalizeRole(
      character?.naturalRole ||
      character?.auctionRole ||
      character?.role
    );

  const chosenRole =
    normalizeRole(
      assignedRole
    );

  const roleCompatibility =
    getRoleCompatibility(
      naturalRole,
      chosenRole
    );

  const marketValue =
    estimateMarketValue({
      character,
      auctionHistory,
      poolSize,
    });

  const priceEfficiency =
    getPriceEfficiency(
      purchasePrice,
      marketValue
    );

  const team =
    player?.team || [];

  const roleBalance =
    getTeamRoleBalance(
      [
        ...team,
        character,
      ],
      roleDistributions,
      player?.id
    );

  const rarity =
    String(
      character?.rarity ||
      "Common"
    ).toLowerCase();

  const power =
    num(
      character?.power ??
      character?.powerLevel ??
      character?.PNR ??
      character?.realPower ??
      character?.relPower
    );

  const hax =
    clamp(
      character?.hax,
      0,
      100
    );

  const tacticalValue =
    clamp(
      power / 1000,
      0,
      100
    ) * 0.55 +
    hax * 0.45;

  const roleScore =
    roleCompatibility;

  let strategicScore =
    roleScore * 0.35 +
    priceEfficiency * 0.30 +
    roleBalance * 0.20 +
    tacticalValue * 0.15;

  /*
    Severe mismatch penalty.
  */
  if (
    roleCompatibility <
    45
  ) {
    strategicScore -=
      15;
  }

  if (
    roleCompatibility <
    30
  ) {
    strategicScore -=
      12;
  }

  strategicScore =
    clamp(
      strategicScore
    );

  let marketVerdict =
    "FAIR";

  if (
    priceEfficiency >=
      25 &&
    roleCompatibility >=
      80
  ) {
    marketVerdict =
      "STEAL";
  } else if (
    priceEfficiency >=
      15 &&
    roleCompatibility >=
      65
  ) {
    marketVerdict =
      "VALUE";
  } else if (
    priceEfficiency < -40
  ) {
    marketVerdict =
      "OVERPAY";
  }

  if (
    roleCompatibility <
    45
  ) {
    marketVerdict =
      "DISASTER";
  }

  if (
    priceEfficiency < -65 &&
    roleCompatibility < 55
  ) {
    marketVerdict =
      "CATASTROPHIC";
  }

  let grade =
    "C";

  if (
    strategicScore >=
    92
  ) {
    grade = "S+";
  } else if (
    strategicScore >=
    85
  ) {
    grade = "S";
  } else if (
    strategicScore >=
    78
  ) {
    grade = "A";
  } else if (
    strategicScore >=
    70
  ) {
    grade = "B";
  } else if (
    strategicScore >=
    60
  ) {
    grade = "C";
  } else if (
    strategicScore >=
    45
  ) {
    grade = "D";
  } else {
    grade = "F";
  }

  const explanation =
    roleCompatibility <
    45
      ? `${character?.name || "This character"} was placed into ${chosenRole}, while its natural tactical identity is ${naturalRole}. The decision creates a significant role-efficiency problem.`
      : marketVerdict ===
        "STEAL"
      ? `${character?.name || "This character"} was acquired below its estimated market value and placed into a highly compatible role.`
      : marketVerdict ===
        "OVERPAY"
      ? `${character?.name || "This character"} was purchased above its estimated market value, reducing the team's budget efficiency.`
      : `The purchase has reasonable tactical value and a generally workable role fit.`;

  return {
    playerId:
      player?.id ??
      null,

    playerName:
      player?.name ||
      "Unknown Player",

    character:
      character?.name ||
      "Unknown Character",

    characterId:
      character?.id ??
      null,

    naturalRole,

    assignedRole:
      chosenRole,

    purchasePrice:
      num(
        purchasePrice
      ),

    marketValue,

    roleCompatibility,

    priceEfficiency,

    roleBalance,

    strategicScore,

    grade,

    marketVerdict,

    rarity:
      rarity || "common",

    explanation,

    timestamp:
      Date.now(),
  };
}

/* =========================================================
   AUCTION MOMENTS
========================================================= */

export function generateAuctionMoment(
  analysis
) {
  if (!analysis) {
    return null;
  }

  if (
    analysis.marketVerdict ===
    "CATASTROPHIC"
  ) {
    return {
      icon: "💀",
      title:
        "CATASTROPHIC OVERPAY",
      message:
        `${analysis.playerName} just combined a terrible price with a poor role decision.`,
      tone:
        "red",
    };
  }

  if (
    analysis.marketVerdict ===
    "DISASTER"
  ) {
    return {
      icon: "🚨",
      title:
        "ROLE DISASTER",
      message:
        `${analysis.playerName} may have wasted ${analysis.character}'s potential by assigning it to ${analysis.assignedRole}.`,
      tone:
        "orange",
    };
  }

  if (
    analysis.marketVerdict ===
    "STEAL"
  ) {
    return {
      icon: "🔥",
      title:
        "AUCTION STEAL",
      message:
        `${analysis.playerName} landed ${analysis.character} at exceptional value.`,
      tone:
        "green",
    };
  }

  if (
    analysis.marketVerdict ===
    "OVERPAY"
  ) {
    return {
      icon: "💸",
      title:
        "MEGA OVERPAY",
      message:
        `${analysis.playerName} paid heavily above estimated market value.`,
      tone:
        "orange",
    };
  }

  if (
    analysis.grade ===
    "S+" ||
    analysis.grade ===
    "S"
  ) {
    return {
      icon: "🧠",
      title:
        "MASTERCLASS",
      message:
        `${analysis.playerName} made a highly efficient strategic purchase.`,
      tone:
        "purple",
    };
  }

  return {
    icon: "⚡",
    title:
      "AUCTION DECISION",
    message:
      `${analysis.playerName} committed ${analysis.character} to ${analysis.assignedRole}.`,
    tone:
      "yellow",
  };
}

/* =========================================================
   ACHIEVEMENTS
========================================================= */

export function calculateAchievements({
  player,
  analyses = [],
}) {
  const playerAnalyses =
    analyses.filter(
      (item) =>
        item.playerId ===
        player?.id
    );

  const achievements =
    [];

  const steals =
    playerAnalyses.filter(
      (item) =>
        item.marketVerdict ===
        "STEAL"
    );

  const disasters =
    playerAnalyses.filter(
      (item) =>
        item.marketVerdict ===
          "DISASTER" ||
        item.marketVerdict ===
          "CATASTROPHIC"
    );

  const overpays =
    playerAnalyses.filter(
      (item) =>
        item.marketVerdict ===
        "OVERPAY"
    );

  const masterclasses =
    playerAnalyses.filter(
      (item) =>
        item.grade ===
          "S+" ||
        item.grade ===
          "S"
    );

  if (
    steals.length >=
    1
  ) {
    achievements.push({
      id:
        "first-steal",
      title:
        "Market Sniper",
      description:
        "Won an auction below estimated market value.",
      icon:
        "🎯",
    });
  }

  if (
    steals.length >=
    3
  ) {
    achievements.push({
      id:
        "three-steals",
      title:
        "Auction Predator",
      description:
        "Collected three or more major bargains.",
      icon:
        "🦈",
    });
  }

  if (
    masterclasses.length >=
    3
  ) {
    achievements.push({
      id:
        "mastermind",
      title:
        "Mastermind",
      description:
        "Made three S-tier decisions.",
      icon:
        "🧠",
    });
  }

  if (
    disasters.length >=
    1
  ) {
    achievements.push({
      id:
        "blunder",
      title:
        "Strategic Blunder",
      description:
        "Made a critically poor role decision.",
      icon:
        "💀",
    });
  }

  if (
    overpays.length >=
    2
  ) {
    achievements.push({
      id:
        "spender",
      title:
        "Wallet Burner",
      description:
        "Overpaid for multiple characters.",
      icon:
        "💸",
    });
  }

  if (
    playerAnalyses.length >=
    5 &&
    disasters.length ===
      0
  ) {
    achievements.push({
      id:
        "clean-draft",
      title:
        "Clean Draft",
      description:
        "Completed five or more purchases without a major strategic disaster.",
      icon:
        "🛡️",
    });
  }

  return achievements;
}

/* =========================================================
   PLAYER COMPETITIVE PROFILE
========================================================= */

export function buildCompetitiveProfile({
  player,
  analyses = [],
  team = [],
}) {
  const playerAnalyses =
    analyses.filter(
      (item) =>
        item.playerId ===
        player?.id
    );

  if (
    !player
  ) {
    return null;
  }

  const totalSpent =
    team.reduce(
      (sum, character) =>
        sum +
        num(
          character?.boughtFor
        ),
      0
    );

  const averageDecisionScore =
    playerAnalyses.length
      ? playerAnalyses.reduce(
          (sum, item) =>
            sum +
            num(
              item.strategicScore
            ),
          0
        ) /
        playerAnalyses.length
      : 0;

  const steals =
    playerAnalyses.filter(
      (item) =>
        item.marketVerdict ===
        "STEAL"
    ).length;

  const overpays =
    playerAnalyses.filter(
      (item) =>
        item.marketVerdict ===
        "OVERPAY"
    ).length;

  const disasters =
    playerAnalyses.filter(
      (item) =>
        item.marketVerdict ===
          "DISASTER" ||
        item.marketVerdict ===
          "CATASTROPHIC"
    ).length;

  const clutchBuys =
    playerAnalyses.filter(
      (item) =>
        item.grade ===
          "S+" &&
        item.priceEfficiency >=
          20
    ).length;

  let performanceGrade =
    "C";

  if (
    averageDecisionScore >=
    92
  ) {
    performanceGrade =
      "S+";
  } else if (
    averageDecisionScore >=
    85
  ) {
    performanceGrade =
      "S";
  } else if (
    averageDecisionScore >=
    78
  ) {
    performanceGrade =
      "A";
  } else if (
    averageDecisionScore >=
    68
  ) {
    performanceGrade =
      "B";
  } else if (
    averageDecisionScore >=
    55
  ) {
    performanceGrade =
      "C";
  } else if (
    averageDecisionScore >=
    40
  ) {
    performanceGrade =
      "D";
  } else {
    performanceGrade =
      "F";
  }

  return {
    playerId:
      player.id,

    playerName:
      player.name,

    purchases:
      playerAnalyses.length,

    totalSpent,

    steals,

    overpays,

    disasters,

    clutchBuys,

    averageDecisionScore,

    performanceGrade,

    achievements:
      calculateAchievements({
        player,
        analyses,
      }),
  };
}

/* =========================================================
   RIVALRY MATRIX
========================================================= */

export function buildRivalryMatrix({
  players = [],
  analyses = [],
}) {
  return players.map(
    (player) => {
      const own =
        analyses.filter(
          (item) =>
            item.playerId ===
            player.id
        );

      const ownAverage =
        own.length
          ? own.reduce(
              (sum, item) =>
                sum +
                num(
                  item.strategicScore
                ),
              0
            ) /
            own.length
          : 0;

      return {
        playerId:
          player.id,

        playerName:
          player.name,

        strategicScore:
          Math.round(
            ownAverage
          ),

        steals:
          own.filter(
            (item) =>
              item.marketVerdict ===
              "STEAL"
          ).length,

        mistakes:
          own.filter(
            (item) =>
              item.marketVerdict ===
                "DISASTER" ||
              item.marketVerdict ===
                "CATASTROPHIC"
          ).length,
      };
    }
  );
}

/* =========================================================
   RANDOMIZED NON-CHEATING EVENT
   ========================================================= */

export function generateCompetitiveEvent({
  players = [],
  analyses = [],
}) {
  if (
    !players.length
  ) {
    return null;
  }

  const random =
    Math.random();

  if (
    random <
    0.20
  ) {
    return {
      type:
        "MARKET_ALERT",

      title:
        "MARKET ALERT",

      message:
        "The auction market is becoming aggressive. Expect stronger bidding pressure.",
      icon:
        "📈",
    };
  }

  if (
    random <
    0.40
  ) {
    return {
      type:
        "RIVALRY",

      title:
        "RIVALRY HEAT",

      message:
        "Two players are emerging as the auction's tactical leaders.",
      icon:
        "⚔️",
    };
  }

  if (
    random <
    0.60 &&
    analyses.length
  ) {
    return {
      type:
        "WATCHLIST",

      title:
        "DRAFT WATCHLIST",

      message:
        "One player's recent decisions deserve attention from the other managers.",
      icon:
        "👁️",
    };
  }

  if (
    random <
    0.80
  ) {
    return {
      type:
        "PRESSURE",

      title:
        "PRESSURE ROUND",

      message:
        "Budget discipline matters more now. Every purchase can affect the final ranking.",
      icon:
        "🔥",
    };
  }

  return {
    type:
      "SCOUTING",

    title:
      "SCOUTING REPORT",

    message:
      "Strong managers are adapting their role assignments instead of simply chasing raw power.",
    icon:
      "🧠",
  };
}

/* =========================================================
   FINAL GEMINI PACKET
========================================================= */

export function buildGeminiEvidencePacket({
  players = [],
  teams = {},
  analyses = [],
  auctionHistory = [],
}) {
  const profiles =
    players.map(
      (player) =>
        buildCompetitiveProfile({
          player,
          analyses,
          team:
            teams?.[
              player.id
            ] || [],
        })
    );

  const rankedProfiles =
    [...profiles].sort(
      (a, b) =>
        b.averageDecisionScore -
        a.averageDecisionScore
    );

  return {
    version:
      "auction-meta-v2",

    players:
      rankedProfiles,

    purchases:
      analyses,

    auctionHistory,

    finalEvidence: {
      totalPurchases:
        analyses.length,

      totalAuctionEvents:
        auctionHistory.length,

      bestPurchase:
        analyses.length
          ? [
              ...analyses,
            ].sort(
              (a, b) =>
                b.strategicScore -
                a.strategicScore
            )[0]
          : null,

      worstPurchase:
        analyses.length
          ? [
              ...analyses,
            ].sort(
              (a, b) =>
                a.strategicScore -
                b.strategicScore
            )[0]
          : null,
    },

    instructions: {
      winnerRule:
        "Do not choose a winner using raw power alone. Evaluate auction efficiency, role assignment quality, budget discipline, team construction, battle evidence, and strategic mistakes.",

      roleRule:
        "Treat assignedRole as the player's deliberate decision. Never assume the game assigned it.",

      mistakeRule:
        "Penalize severe natural-role vs assigned-role mismatches when they materially weaken team construction.",

      honestyRule:
        "Do not invent feats, abilities, purchases, battles, or decisions absent from the supplied evidence.",
    },
  };
}

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {
  getRoleCompatibility,
  estimateMarketValue,
  analyzePurchaseDecision,
  generateAuctionMoment,
  calculateAchievements,
  buildCompetitiveProfile,
  buildRivalryMatrix,
  generateCompetitiveEvent,
  buildGeminiEvidencePacket,
};