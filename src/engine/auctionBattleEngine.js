/* =========================================================
   ANIME ARENA — AUCTION BATTLE ENGINE
   PHASE 8 — ADVANCED DETERMINISTIC BATTLE ENGINE

   Responsibilities
   ---------------------------------------------------------
   • Normalize auction characters
   • Natural role vs assigned role analysis
   • Character-specific role suitability
   • Player decision quality
   • Role efficiency
   • Team composition
   • Synergy / coverage / balance
   • Character-vs-character matchups
   • Counter detection
   • Strategic mistake detection
   • Team battle simulation
   • Win probability
   • Gemini-ready battle dossier

   IMPORTANT
   ---------------------------------------------------------
   The PLAYER chooses the role.
   The engine evaluates that choice.
   Gemini interprets the evidence.

   Gemini must NOT invent facts.
========================================================= */


/* =========================================================
   CONSTANTS
========================================================= */

export const ROLE_OPTIONS = [
  "Tank",
  "DPS",
  "Speed",
  "Hax",
  "Support",
  "IQ",
  "Versatility",
  "Finisher",
];


export const ROLE_COMPATIBILITY = {
  Tank: {
    Tank: 1.00,
    DPS: 0.82,
    Speed: 0.60,
    Hax: 0.68,
    Support: 0.45,
    IQ: 0.62,
    Versatility: 0.78,
    Finisher: 0.80,
  },

  DPS: {
    Tank: 0.78,
    DPS: 1.00,
    Speed: 0.90,
    Hax: 0.86,
    Support: 0.58,
    IQ: 0.70,
    Versatility: 0.84,
    Finisher: 0.94,
  },

  Speed: {
    Tank: 0.62,
    DPS: 0.92,
    Speed: 1.00,
    Hax: 0.88,
    Support: 0.64,
    IQ: 0.76,
    Versatility: 0.88,
    Finisher: 0.91,
  },

  Hax: {
    Tank: 0.70,
    DPS: 0.88,
    Speed: 0.90,
    Hax: 1.00,
    Support: 0.66,
    IQ: 0.92,
    Versatility: 0.94,
    Finisher: 0.84,
  },

  Support: {
    Tank: 0.86,
    DPS: 0.72,
    Speed: 0.68,
    Hax: 0.74,
    Support: 1.00,
    IQ: 0.88,
    Versatility: 0.84,
    Finisher: 0.58,
  },

  IQ: {
    Tank: 0.78,
    DPS: 0.82,
    Speed: 0.80,
    Hax: 0.94,
    Support: 0.92,
    IQ: 1.00,
    Versatility: 0.94,
    Finisher: 0.70,
  },

  Versatility: {
    Tank: 0.88,
    DPS: 0.90,
    Speed: 0.89,
    Hax: 0.95,
    Support: 0.86,
    IQ: 0.94,
    Versatility: 1.00,
    Finisher: 0.88,
  },

  Finisher: {
    Tank: 0.82,
    DPS: 0.95,
    Speed: 0.92,
    Hax: 0.84,
    Support: 0.58,
    IQ: 0.68,
    Versatility: 0.88,
    Finisher: 1.00,
  },
};


/* =========================================================
   GENERIC HELPERS
========================================================= */

export function clamp(
  value,
  min = 0,
  max = 100
) {
  const n = Number(value);

  if (!Number.isFinite(n)) {
    return min;
  }

  return Math.max(
    min,
    Math.min(
      max,
      n
    )
  );
}


export function safeNumber(
  value,
  fallback = 0
) {
  const n = Number(value);

  return Number.isFinite(n)
    ? n
    : fallback;
}


export function normalizeText(
  value
) {
  return String(
    value || ""
  )
    .trim()
    .toLowerCase();
}


export function average(
  values
) {
  if (
    !Array.isArray(values) ||
    !values.length
  ) {
    return 0;
  }

  return (
    values.reduce(
      (
        sum,
        value
      ) =>
        sum +
        safeNumber(value),
      0
    ) /
    values.length
  );
}


function round(
  value,
  digits = 2
) {
  const multiplier =
    10 ** digits;

  return (
    Math.round(
      safeNumber(value) *
        multiplier
    ) /
    multiplier
  );
}


/* =========================================================
   ROLE NORMALIZATION
========================================================= */

export function normalizeRole(
  role
) {
  const text =
    normalizeText(role);

  if (!text) {
    return "Versatility";
  }

  if (
    text.includes("tank") ||
    text.includes("defense") ||
    text.includes("defender") ||
    text.includes("guardian")
  ) {
    return "Tank";
  }

  if (
    text.includes("dps") ||
    text.includes("attack") ||
    text.includes("damage") ||
    text.includes("striker")
  ) {
    return "DPS";
  }

  if (
    text.includes("speed") ||
    text.includes("assassin") ||
    text.includes("speedster")
  ) {
    return "Speed";
  }

  if (
    text.includes("hax") ||
    text.includes("ability") ||
    text.includes("reality") ||
    text.includes("manipulator")
  ) {
    return "Hax";
  }

  if (
    text.includes("support") ||
    text.includes("heal") ||
    text.includes("medic") ||
    text.includes("clerk")
  ) {
    return "Support";
  }

  if (
    text === "iq" ||
    text.includes("iq") ||
    text.includes("intelligence") ||
    text.includes("strategist") ||
    text.includes("tactician")
  ) {
    return "IQ";
  }

  if (
    text.includes("finish") ||
    text.includes("execution") ||
    text.includes("finisher")
  ) {
    return "Finisher";
  }

  if (
    text.includes("versat") ||
    text.includes("all-round")
  ) {
    return "Versatility";
  }

  return "Versatility";
}


/* =========================================================
   CHARACTER ROLE
========================================================= */

export function getNaturalRole(
  character
) {
  return normalizeRole(
    character?.naturalRole ||
      character?.originalRole ||
      character?.role ||
      character?.primaryRole ||
      character?.traits?.role ||
      character?.type ||
      character?.class
  );
}


export function getAssignedRole(
  character
) {
  return normalizeRole(
    character?.assignedRole ||
      character?.auctionRole ||
      character?.slotRole ||
      character?.teamRole ||
      getNaturalRole(character)
  );
}


/* =========================================================
   STAT EXTRACTION
========================================================= */

function getStat(
  character,
  keys,
  fallback = 0
) {
  for (const key of keys) {

    const direct =
      character?.[key];

    if (
      direct !==
        undefined &&
      direct !==
        null
    ) {
      return safeNumber(
        direct,
        fallback
      );
    }

    const statValue =
      character?.stats?.[key];

    if (
      statValue !==
        undefined &&
      statValue !==
        null
    ) {
      return safeNumber(
        statValue,
        fallback
      );
    }

    const formValue =
      character?.form?.[key];

    if (
      formValue !==
        undefined &&
      formValue !==
        null
    ) {
      return safeNumber(
        formValue,
        fallback
      );
    }
  }

  return fallback;
}


export function getCharacterStats(
  character
) {
  if (!character) {
    return {
      power: 0,
      pnr: 0,
      hax: 0,
      speed: 0,
      defense: 0,
      stamina: 0,
      versatility: 0,
      battleIQ: 0,
      experience: 0,
      support: 0,
      control: 0,
    };
  }

  const pnr =
    getStat(
      character,
      [
        "PNR",
        "pnr",
        "powerRating",
        "powerLevel",
        "power",
        "realPower",
        "relPower",
      ]
    );

  const power =
    getStat(
      character,
      [
        "power",
        "powerLevel",
        "realPower",
        "relPower",
        "PNR",
        "pnr",
      ]
    );

  const hax =
    getStat(
      character,
      [
        "hax",
        "HAX",
      ]
    );

  const speed =
    getStat(
      character,
      [
        "speed",
        "SPD",
      ]
    );

  const defense =
    getStat(
      character,
      [
        "defense",
        "defence",
        "DEF",
      ]
    );

  const stamina =
    getStat(
      character,
      [
        "stamina",
        "endurance",
      ]
    );

  const versatility =
    getStat(
      character,
      [
        "versatility",
        "flexibility",
      ]
    );

  const battleIQ =
    getStat(
      character,
      [
        "battleIQ",
        "battleIq",
        "iq",
        "intelligence",
      ]
    );

  const experience =
    getStat(
      character,
      [
        "experience",
        "combatExperience",
      ]
    );

  const support =
    getStat(
      character,
      [
        "support",
        "supportPower",
      ]
    );

  const control =
    getStat(
      character,
      [
        "control",
        "crowdControl",
      ]
    );


  /*
    Restrained derived values.
  */

  const normalizedPower =
    clamp(
      power / 10,
      0,
      100
    );

  const normalizedHax =
    clamp(
      hax,
      0,
      100
    );

  const derivedSpeed =
    speed > 0
      ? clamp(speed)
      : clamp(
          48 +
            normalizedPower *
              0.18 +
            normalizedHax *
              0.12
        );

  const derivedDefense =
    defense > 0
      ? clamp(defense)
      : clamp(
          44 +
            normalizedPower *
              0.22
        );

  const derivedStamina =
    stamina > 0
      ? clamp(stamina)
      : clamp(
          45 +
            normalizedPower *
              0.18
        );

  const derivedVersatility =
    versatility > 0
      ? clamp(versatility)
      : clamp(
          45 +
            normalizedHax *
              0.25
        );

  const derivedBattleIQ =
    battleIQ > 0
      ? clamp(battleIQ)
      : clamp(
          46 +
            normalizedHax *
              0.16 +
            derivedVersatility *
              0.20
        );

  const derivedExperience =
    experience > 0
      ? clamp(experience)
      : clamp(
          45 +
            derivedBattleIQ *
              0.25
        );

  const derivedSupport =
    support > 0
      ? clamp(support)
      : clamp(
          25 +
            derivedVersatility *
              0.35 +
            derivedBattleIQ *
              0.20
        );

  const derivedControl =
    control > 0
      ? clamp(control)
      : clamp(
          normalizedHax *
            0.70 +
            derivedBattleIQ *
              0.20
        );

  return {
    power,
    pnr,
    hax: normalizedHax,
    speed: derivedSpeed,
    defense: derivedDefense,
    stamina: derivedStamina,
    versatility: derivedVersatility,
    battleIQ: derivedBattleIQ,
    experience: derivedExperience,
    support: derivedSupport,
    control: derivedControl,
  };
}


/* =========================================================
   ROLE PROFILE
========================================================= */

export function getRoleProfile(
  character
) {
  const stats =
    getCharacterStats(
      character
    );

  const naturalRole =
    getNaturalRole(
      character
    );

  const scores = {

    Tank:
      stats.defense * 0.42 +
      stats.stamina * 0.28 +
      stats.power * 0.18 +
      stats.control * 0.12,

    DPS:
      stats.power * 0.48 +
      stats.speed * 0.20 +
      stats.hax * 0.18 +
      stats.battleIQ * 0.14,

    Speed:
      stats.speed * 0.52 +
      stats.battleIQ * 0.16 +
      stats.power * 0.14 +
      stats.hax * 0.18,

    Hax:
      stats.hax * 0.50 +
      stats.control * 0.20 +
      stats.battleIQ * 0.18 +
      stats.versatility * 0.12,

    Support:
      stats.support * 0.38 +
      stats.control * 0.20 +
      stats.battleIQ * 0.20 +
      stats.defense * 0.12 +
      stats.versatility * 0.10,

    IQ:
      stats.battleIQ * 0.44 +
      stats.experience * 0.22 +
      stats.versatility * 0.20 +
      stats.control * 0.14,

    Versatility:
      stats.versatility * 0.42 +
      stats.hax * 0.18 +
      stats.battleIQ * 0.16 +
      stats.speed * 0.12 +
      stats.defense * 0.12,

    Finisher:
      stats.power * 0.38 +
      stats.hax * 0.22 +
      stats.speed * 0.20 +
      stats.battleIQ * 0.10 +
      stats.versatility * 0.10,
  };


  if (
    ROLE_OPTIONS.includes(
      naturalRole
    )
  ) {
    scores[naturalRole] =
      safeNumber(
        scores[naturalRole]
      ) +
      12;
  }


  const ranked =
    ROLE_OPTIONS
      .map(
        (role) => ({
          role,
          score:
            clamp(
              scores[role]
            ),
        })
      )
      .sort(
        (a, b) =>
          b.score -
          a.score
      );


  return {
    naturalRole,

    scores:
      Object.fromEntries(
        ranked.map(
          (item) => [
            item.role,
            round(
              item.score
            ),
          ]
        )
      ),

    ranked,

    bestComputedRole:
      ranked[0]?.role ||
      naturalRole,
  };
}


/* =========================================================
   ROLE COMPATIBILITY
========================================================= */

export function getRoleCompatibility(
  naturalRole,
  assignedRole
) {
  const natural =
    normalizeRole(
      naturalRole
    );

  const assigned =
    normalizeRole(
      assignedRole
    );

  if (
    natural ===
    assigned
  ) {
    return {
      score: 100,
      tier: "PERFECT",
      penalty: 0,
      label:
        "Natural role preserved",
    };
  }

  const raw =
    ROLE_COMPATIBILITY[
      natural
    ]?.[
      assigned
    ];

  const score =
    clamp(
      safeNumber(
        raw,
        0.50
      ) * 100
    );

  let tier =
    "NEUTRAL";

  if (
    score >= 85
  ) {
    tier =
      "STRONG";
  } else if (
    score >= 70
  ) {
    tier =
      "GOOD";
  } else if (
    score >= 50
  ) {
    tier =
      "NEUTRAL";
  } else if (
    score >= 30
  ) {
    tier =
      "POOR";
  } else {
    tier =
      "CATASTROPHIC";
  }

  return {
    score:
      round(score),

    tier,

    penalty:
      round(
        100 - score
      ),

    label:
      `${natural} → ${assigned}`,
  };
}


/* =========================================================
   CHARACTER ROLE SUITABILITY
========================================================= */

export function calculateRoleSuitability(
  character
) {
  const stats =
    getCharacterStats(
      character
    );

  const naturalRole =
    getNaturalRole(
      character
    );

  const scores = {

    Tank:
      stats.defense * 0.42 +
      stats.stamina * 0.28 +
      stats.power * 0.16 +
      stats.control * 0.14,

    DPS:
      stats.power * 0.48 +
      stats.speed * 0.20 +
      stats.hax * 0.18 +
      stats.battleIQ * 0.14,

    Speed:
      stats.speed * 0.52 +
      stats.battleIQ * 0.18 +
      stats.power * 0.14 +
      stats.hax * 0.16,

    Hax:
      stats.hax * 0.50 +
      stats.control * 0.22 +
      stats.battleIQ * 0.18 +
      stats.versatility * 0.10,

    Support:
      stats.support * 0.46 +
      stats.control * 0.20 +
      stats.battleIQ * 0.18 +
      stats.versatility * 0.10 +
      stats.defense * 0.06,

    IQ:
      stats.battleIQ * 0.48 +
      stats.experience * 0.22 +
      stats.versatility * 0.18 +
      stats.control * 0.12,

    Versatility:
      stats.versatility * 0.42 +
      stats.hax * 0.18 +
      stats.battleIQ * 0.16 +
      stats.speed * 0.12 +
      stats.defense * 0.12,

    Finisher:
      stats.power * 0.40 +
      stats.hax * 0.22 +
      stats.speed * 0.18 +
      stats.battleIQ * 0.10 +
      stats.versatility * 0.10,
  };


  /*
    Natural role receives a modest
    evidence bonus, but does not
    override the statistics.
  */

  if (
    ROLE_OPTIONS.includes(
      naturalRole
    )
  ) {
    scores[naturalRole] =
      safeNumber(
        scores[naturalRole]
      ) +
      10;
  }


  const result =
    Object.fromEntries(
      ROLE_OPTIONS.map(
        (role) => [
          role,
          round(
            clamp(
              scores[role]
            )
          ),
        ]
      )
    );


  const ranked =
    ROLE_OPTIONS
      .map(
        (role) => ({
          role,
          score:
            result[role],
        })
      )
      .sort(
        (a, b) =>
          b.score -
          a.score
      );


  return {
    scores: result,

    ranked,

    bestRole:
      ranked[0]?.role ||
      naturalRole,

    bestScore:
      round(
        ranked[0]?.score ||
        0
      ),

    assignedScore:
      round(
        result[
          getAssignedRole(
            character
          )
        ] || 0
      ),

    naturalScore:
      round(
        result[
          naturalRole
        ] || 0
      ),
  };
}


/* =========================================================
   ROLE EFFICIENCY
========================================================= */

export function calculateRoleEfficiency(
  character
) {
  const naturalRole =
    getNaturalRole(
      character
    );

  const assignedRole =
    getAssignedRole(
      character
    );

  const compatibility =
    getRoleCompatibility(
      naturalRole,
      assignedRole
    );

  const stats =
    getCharacterStats(
      character
    );

  const suitability =
    calculateRoleSuitability(
      character
    );


  /*
    Raw combat value.
  */

  const rawCombat =
    stats.power * 0.34 +
    stats.hax * 0.18 +
    stats.speed * 0.12 +
    stats.defense * 0.12 +
    stats.versatility * 0.10 +
    stats.battleIQ * 0.14;


  const assignedSuitability =
    safeNumber(
      suitability.assignedScore
    );

  const naturalSuitability =
    safeNumber(
      suitability.naturalScore
    );


  /*
    Player decision quality.

    Compatibility:
      55%

    Actual role suitability:
      45%
  */

  const decisionQuality =
    clamp(
      compatibility.score *
        0.55 +
      assignedSuitability *
        0.45
    );


  /*
    Efficiency should never erase
    the character completely.
  */

  const efficiencyMultiplier =
    0.35 +
    decisionQuality /
      100 *
      0.65;

  const effectiveValue =
    rawCombat *
    efficiencyMultiplier;


  let decisionGrade =
    "ACCEPTABLE";

  if (
    decisionQuality >=
    90
  ) {
    decisionGrade =
      "EXCELLENT";
  } else if (
    decisionQuality >=
    80
  ) {
    decisionGrade =
      "STRONG";
  } else if (
    decisionQuality >=
    65
  ) {
    decisionGrade =
      "ACCEPTABLE";
  } else if (
    decisionQuality >=
    50
  ) {
    decisionGrade =
      "QUESTIONABLE";
  } else if (
    decisionQuality >=
    35
  ) {
    decisionGrade =
      "POOR";
  } else {
    decisionGrade =
      "BLUNDER";
  }


  return {

    naturalRole,

    assignedRole,

    compatibility,

    roleSuitability:
      suitability.scores,

    bestComputedRole:
      suitability.bestRole,

    bestComputedScore:
      suitability.bestScore,

    naturalSuitability:
      naturalSuitability,

    assignedSuitability:
      assignedSuitability,

    decisionQuality:
      round(
        decisionQuality
      ),

    decisionGrade,

    rawCombat:
      round(
        rawCombat
      ),

    efficiencyMultiplier:
      round(
        efficiencyMultiplier,
        3
      ),

    effectiveValue:
      round(
        effectiveValue
      ),
  };
}


/* =========================================================
   TEXT / COUNTER HELPERS
========================================================= */

function getCharacterText(
  character
) {
  return normalizeText(
    [
      character?.name,
      character?.form,
      character?.verse,
      character?.role,
      character?.naturalRole,
      character?.assignedRole,

      ...(
        Array.isArray(
          character?.tags
        )
          ? character.tags
          : []
      ),

      ...(
        Array.isArray(
          character?.abilities
        )
          ? character.abilities
          : []
      ),
    ].join(" ")
  );
}


function containsAny(
  text,
  terms
) {
  return terms.some(
    (term) =>
      text.includes(
        term
      )
  );
}


/* =========================================================
   COUNTERS
========================================================= */

export function detectCounters(
  attacker,
  defender
) {
  if (
    !attacker ||
    !defender
  ) {
    return {
      score: 0,
      reasons: [],
    };
  }

  const attackerText =
    getCharacterText(
      attacker
    );

  const defenderText =
    getCharacterText(
      defender
    );

  const reasons = [];
  let score = 0;

  const counterPairs = [

    {
      attack: [
        "sealing",
        "seal",
      ],

      defend: [
        "regeneration",
        "regen",
        "immortal",
      ],

      bonus: 9,

      reason:
        "sealing can restrict regeneration or recovery",
    },

    {
      attack: [
        "anti-magic",
      ],

      defend: [
        "magic",
        "mage",
      ],

      bonus: 10,

      reason:
        "anti-magic directly interferes with magic-based offense",
    },

    {
      attack: [
        "quincy",
      ],

      defend: [
        "shinigami",
      ],

      bonus: 5,

      reason:
        "spiritual-type interaction creates a matchup edge",
    },

    {
      attack: [
        "time",
        "time stop",
        "time manipulation",
      ],

      defend: [
        "speed",
        "faster",
      ],

      bonus: 6,

      reason:
        "time manipulation can bypass conventional speed advantages",
    },

    {
      attack: [
        "mind control",
        "mental",
        "illusion",
      ],

      defend: [
        "speedster",
        "fighter",
      ],

      bonus: 5,

      reason:
        "mental control can negate pure physical initiative",
    },

    {
      attack: [
        "dimension",
        "spatial",
        "reality",
      ],

      defend: [
        "physical",
        "close range",
      ],

      bonus: 6,

      reason:
        "spatial control can deny conventional engagement",
    },

    {
      attack: [
        "barrier",
        "shield",
      ],

      defend: [
        "glass cannon",
        "fragile",
      ],

      bonus: 4,

      reason:
        "defensive control reduces burst-damage reliability",
    },

    {
      attack: [
        "speed",
        "instant",
        "teleport",
        "shunpo",
      ],

      defend: [
        "slow",
        "tank",
      ],

      bonus: 3,

      reason:
        "initiative can exploit slower defensive characters",
    },
  ];


  counterPairs.forEach(
    (
      pair
    ) => {

      const attackMatch =
        containsAny(
          attackerText,
          pair.attack
        );

      const defendMatch =
        containsAny(
          defenderText,
          pair.defend
        );

      if (
        attackMatch &&
        defendMatch
      ) {
        score +=
          pair.bonus;

        reasons.push(
          pair.reason
        );
      }
    }
  );


  const attackerStats =
    getCharacterStats(
      attacker
    );

  const defenderStats =
    getCharacterStats(
      defender
    );


  if (
    attackerStats.hax >
      defenderStats.control +
        18
  ) {
    score += 5;

    reasons.push(
      "superior hax relative to the opponent's control resistance"
    );
  }


  return {

    score:
      round(
        clamp(
          score,
          -25,
          25
        )
      ),

    reasons,
  };
}


/* =========================================================
   CHARACTER COMBAT SCORE
========================================================= */

export function calculateCharacterCombatScore(
  character
) {
  const stats =
    getCharacterStats(
      character
    );

  const role =
    getAssignedRole(
      character
    );

  const roleBonus =
    {
      Tank:
        stats.defense *
          0.12 +
        stats.stamina *
          0.08,

      DPS:
        stats.power *
          0.12 +
        stats.speed *
          0.06,

      Speed:
        stats.speed *
          0.12 +
        stats.battleIQ *
          0.05,

      Hax:
        stats.hax *
          0.14 +
        stats.control *
          0.06,

      Support:
        stats.support *
          0.10 +
        stats.control *
          0.04,

      IQ:
        stats.battleIQ *
          0.12 +
        stats.experience *
          0.05,

      Versatility:
        stats.versatility *
          0.10 +
        stats.battleIQ *
          0.05,

      Finisher:
        stats.power *
          0.10 +
        stats.hax *
          0.06,
    }[
      role
    ] || 0;


  return round(
    stats.power * 0.36 +
      stats.hax * 0.18 +
      stats.speed * 0.12 +
      stats.defense * 0.10 +
      stats.stamina * 0.06 +
      stats.versatility * 0.08 +
      stats.battleIQ * 0.10 +
      roleBonus
  );
}


/* =========================================================
   CHARACTER MATCHUP
========================================================= */

export function simulateCharacterMatchup(
  left,
  right
) {
  if (
    !left ||
    !right
  ) {
    return {
      winner:
        "DRAW",

      leftProbability:
        50,

      rightProbability:
        50,

      margin:
        0,

      leftScore:
        0,

      rightScore:
        0,

      counters: {
        left: [],
        right: [],
      },

      tacticalReasons: [],
    };
  }


  const leftStats =
    getCharacterStats(
      left
    );

  const rightStats =
    getCharacterStats(
      right
    );


  const leftRole =
    getAssignedRole(
      left
    );

  const rightRole =
    getAssignedRole(
      right
    );


  const leftRoleCompat =
    getRoleCompatibility(
      getNaturalRole(left),
      leftRole
    );

  const rightRoleCompat =
    getRoleCompatibility(
      getNaturalRole(right),
      rightRole
    );


  const leftCombat =
    calculateCharacterCombatScore(
      left
    );

  const rightCombat =
    calculateCharacterCombatScore(
      right
    );


  const leftCounter =
    detectCounters(
      left,
      right
    );

  const rightCounter =
    detectCounters(
      right,
      left
    );


  const leftEffective =
    leftCombat *
    (
      0.55 +
      leftRoleCompat.score /
        100 *
        0.45
    );

  const rightEffective =
    rightCombat *
    (
      0.55 +
      rightRoleCompat.score /
        100 *
        0.45
    );


  const leftScore =
    leftEffective +
    leftCounter.score;

  const rightScore =
    rightEffective +
    rightCounter.score;


  const difference =
    leftScore -
    rightScore;


  const absoluteDifference =
    Math.abs(
      difference
    );


  const leftProbability =
    clamp(
      50 +
        difference *
          2.25,
      5,
      95
    );

  const rightProbability =
    clamp(
      100 -
        leftProbability,
      5,
      95
    );


  let winner =
    "DRAW";

  if (
    absoluteDifference >=
    2
  ) {
    winner =
      difference > 0
        ? "LEFT"
        : "RIGHT";
  }


  const tacticalReasons =
    [];


  if (
    leftStats.power >
    rightStats.power + 8
  ) {
    tacticalReasons.push(
      `${left.name || "Left fighter"} has the stronger raw power profile`
    );
  }

  if (
    rightStats.power >
    leftStats.power + 8
  ) {
    tacticalReasons.push(
      `${right.name || "Right fighter"} has the stronger raw power profile`
    );
  }


  if (
    leftStats.speed >
    rightStats.speed + 8
  ) {
    tacticalReasons.push(
      `${left.name || "Left fighter"} has the initiative advantage`
    );
  }

  if (
    rightStats.speed >
    leftStats.speed + 8
  ) {
    tacticalReasons.push(
      `${right.name || "Right fighter"} has the initiative advantage`
    );
  }


  if (
    leftCounter.reasons.length
  ) {
    tacticalReasons.push(
      ...leftCounter.reasons
    );
  }

  if (
    rightCounter.reasons.length
  ) {
    tacticalReasons.push(
      ...rightCounter.reasons
    );
  }


  if (
    leftRoleCompat.score <
    60
  ) {
    tacticalReasons.push(
      `${left.name || "Left fighter"} suffers from poor role assignment efficiency`
    );
  }

  if (
    rightRoleCompat.score <
    60
  ) {
    tacticalReasons.push(
      `${right.name || "Right fighter"} suffers from poor role assignment efficiency`
    );
  }


  return {

    left: {
      ...left,

      role:
        leftRole,

      naturalRole:
        getNaturalRole(left),

      stats:
        leftStats,

      combatScore:
        round(
          leftCombat
        ),

      effectiveScore:
        round(
          leftEffective
        ),

      roleCompatibility:
        leftRoleCompat.score,

      roleDecision:
        calculateRoleEfficiency(
          left
        ),
    },


    right: {
      ...right,

      role:
        rightRole,

      naturalRole:
        getNaturalRole(right),

      stats:
        rightStats,

      combatScore:
        round(
          rightCombat
        ),

      effectiveScore:
        round(
          rightEffective
        ),

      roleCompatibility:
        rightRoleCompat.score,

      roleDecision:
        calculateRoleEfficiency(
          right
        ),
    },


    winner,

    leftScore:
      round(
        leftScore
      ),

    rightScore:
      round(
        rightScore
      ),

    leftProbability:
      round(
        leftProbability
      ),

    rightProbability:
      round(
        rightProbability
      ),

    margin:
      round(
        absoluteDifference
      ),

    counters: {
      left:
        leftCounter.reasons,

      right:
        rightCounter.reasons,
    },

    tacticalReasons:
      [
        ...new Set(
          tacticalReasons
        ),
      ].slice(
        0,
        8
      ),
  };
}


/* =========================================================
   TEAM ROLE DISTRIBUTION
========================================================= */

export function calculateRoleDistribution(
  team
) {
  const distribution =
    Object.fromEntries(
      ROLE_OPTIONS.map(
        (role) => [
          role,
          0,
        ]
      )
    );


  (
    team || []
  ).forEach(
    (
      character
    ) => {

      const role =
        getAssignedRole(
          character
        );

      if (
        distribution[
          role
        ] !==
        undefined
      ) {
        distribution[
          role
        ]++;
      }

    }
  );


  return distribution;
}


/* =========================================================
   TEAM ROLE EFFICIENCY
========================================================= */

export function calculateTeamRoleEfficiency(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return {
      average: 0,
      total: 0,
      breakdown: [],
    };
  }


  const breakdown =
    team.map(
      (
        character
      ) => {

        const analysis =
          calculateRoleEfficiency(
            character
          );


        return {

          character:
            character.name ||
            "Unknown",

          characterId:
            character.id ||
            character.auctionId ||
            null,

          naturalRole:
            analysis.naturalRole,

          assignedRole:
            analysis.assignedRole,

          compatibility:
            analysis
              .compatibility
              .score,

          compatibilityTier:
            analysis
              .compatibility
              .tier,

          roleSuitability:
            analysis
              .roleSuitability,

          bestComputedRole:
            analysis
              .bestComputedRole,

          bestComputedScore:
            analysis
              .bestComputedScore,

          assignedSuitability:
            analysis
              .assignedSuitability,

          decisionQuality:
            analysis
              .decisionQuality,

          decisionGrade:
            analysis
              .decisionGrade,

          effectiveValue:
            analysis
              .effectiveValue,

          rawCombat:
            analysis
              .rawCombat,
        };
      }
    );


  return {

    average:
      round(
        average(
          breakdown.map(
            (
              item
            ) =>
              item.decisionQuality
          )
        )
      ),

    total:
      round(
        breakdown.reduce(
          (
            sum,
            item
          ) =>
            sum +
            item.effectiveValue,
          0
        )
      ),

    breakdown,
  };
}


/* =========================================================
   TEAM CORE STATS
========================================================= */

export function calculateTeamCoreStats(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return {
      power: 0,
      pnr: 0,
      hax: 0,
      speed: 0,
      defense: 0,
      stamina: 0,
      versatility: 0,
      battleIQ: 0,
      experience: 0,
      support: 0,
      control: 0,
    };
  }


  const stats =
    team.map(
      getCharacterStats
    );


  return {

    power:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.power
          )
        )
      ),

    pnr:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.pnr
          )
        )
      ),

    hax:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.hax
          )
        )
      ),

    speed:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.speed
          )
        )
      ),

    defense:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.defense
          )
        )
      ),

    stamina:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.stamina
          )
        )
      ),

    versatility:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.versatility
          )
        )
      ),

    battleIQ:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.battleIQ
          )
        )
      ),

    experience:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.experience
          )
        )
      ),

    support:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.support
          )
        )
      ),

    control:
      round(
        average(
          stats.map(
            (
              s
            ) =>
              s.control
          )
        )
      ),
  };
}


/* =========================================================
   TEAM SYNERGY
========================================================= */

export function calculateTeamSynergy(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return 0;
  }


  const roleDistribution =
    calculateRoleDistribution(
      team
    );


  const activeRoles =
    ROLE_OPTIONS.filter(
      (
        role
      ) =>
        roleDistribution[
          role
        ] > 0
    );


  const diversityScore =
    clamp(
      (
        activeRoles.length /
        ROLE_OPTIONS.length
      ) *
        100
    );


  const roleEfficiency =
    calculateTeamRoleEfficiency(
      team
    ).average;


  const naturalRoles =
    new Set(
      team.map(
        getNaturalRole
      )
    ).size;


  const naturalDiversity =
    clamp(
      (
        naturalRoles /
        ROLE_OPTIONS.length
      ) *
        100
    );


  const duplicatePenalty =
    Object.values(
      roleDistribution
    ).reduce(
      (
        total,
        count
      ) => {

        if (
          count <=
          1
        ) {
          return total;
        }

        return (
          total +
          (
            count - 1
          ) *
            2.5
        );
      },
      0
    );


  return round(
    clamp(
      diversityScore *
        0.34 +
      roleEfficiency *
        0.38 +
      naturalDiversity *
        0.28 -
      duplicatePenalty
    )
  );
}


/* =========================================================
   TEAM COVERAGE
========================================================= */

export function calculateTeamCoverage(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return 0;
  }


  const stats =
    calculateTeamCoreStats(
      team
    );


  const roles =
    calculateRoleDistribution(
      team
    );


  const roleCount =
    Object.values(
      roles
    ).filter(
      (
        value
      ) =>
        value > 0
    ).length;


  const statisticalCoverage =
    clamp(
      stats.versatility *
        0.30 +
      stats.hax *
        0.18 +
      stats.speed *
        0.15 +
      stats.defense *
        0.15 +
      stats.support *
        0.10 +
      stats.control *
        0.12
    );


  const roleCoverage =
    clamp(
      (
        roleCount /
        ROLE_OPTIONS.length
      ) *
        100
    );


  return round(
    statisticalCoverage *
      0.72 +
    roleCoverage *
      0.28
  );
}


/* =========================================================
   TEAM BALANCE
========================================================= */

export function calculateTeamBalance(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return 0;
  }


  const stats =
    calculateTeamCoreStats(
      team
    );


  const dimensions = [
    stats.power,
    stats.hax,
    stats.speed,
    stats.defense,
    stats.stamina,
    stats.versatility,
    stats.battleIQ,
  ];


  const valid =
    dimensions.filter(
      (
        value
      ) =>
        safeNumber(value) >
        0
    );


  if (
    !valid.length
  ) {
    return 0;
  }


  const mean =
    average(
      valid
    );


  const deviation =
    average(
      valid.map(
        (
          value
        ) =>
          Math.abs(
            value -
            mean
          )
      )
    );


  return round(
    clamp(
      100 -
        deviation *
          0.85
    )
  );
}


/* =========================================================
   TEAM COMBAT POWER
========================================================= */

export function calculateTeamCombatPower(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return 0;
  }

  return round(
    average(
      team.map(
        calculateCharacterCombatScore
      )
    )
  );
}


/* =========================================================
   STRATEGIC BLUNDERS
========================================================= */

export function detectStrategicBlunders(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return [];
  }


  const mistakes = [];


  /*
    -------------------------------------------------------
    1. PLAYER ROLE DECISION
    -------------------------------------------------------
  */

  team.forEach(
    (
      character
    ) => {

      const analysis =
        calculateRoleEfficiency(
          character
        );


      if (
        analysis.decisionQuality <
        35
      ) {

        mistakes.push({

          type:
            "ROLE_DECISION_BLUNDER",

          severity:
            10,

          character:
            character.name ||
            "Unknown",

          naturalRole:
            analysis.naturalRole,

          assignedRole:
            analysis.assignedRole,

          compatibility:
            analysis.compatibility
              .score,

          assignedSuitability:
            analysis.assignedSuitability,

          bestComputedRole:
            analysis.bestComputedRole,

          decisionQuality:
            analysis.decisionQuality,

          decisionGrade:
            analysis.decisionGrade,

          explanation:
            `${character.name || "This character"} was deliberately assigned to ${analysis.assignedRole}, but the supplied evidence strongly favors ${analysis.bestComputedRole}. This is a major player decision error.`,
        });

        return;
      }


      if (
        analysis.decisionQuality <
        50
      ) {

        mistakes.push({

          type:
            "QUESTIONABLE_ROLE_DECISION",

          severity:
            6,

          character:
            character.name ||
            "Unknown",

          naturalRole:
            analysis.naturalRole,

          assignedRole:
            analysis.assignedRole,

          compatibility:
            analysis.compatibility
              .score,

          assignedSuitability:
            analysis.assignedSuitability,

          bestComputedRole:
            analysis.bestComputedRole,

          decisionQuality:
            analysis.decisionQuality,

          decisionGrade:
            analysis.decisionGrade,

          explanation:
            `${character.name || "This character"} was placed in ${analysis.assignedRole}, but the supplied role evidence favors ${analysis.bestComputedRole}. The decision is strategically questionable.`,
        });

      }


      /*
        Legacy role mismatch signals.
      */

      if (
        analysis.compatibility
          .tier ===
        "CATASTROPHIC" &&
        analysis.decisionQuality >=
          50
      ) {

        mistakes.push({

          type:
            "CATASTROPHIC_ROLE_MISMATCH",

          severity:
            10,

          character:
            character.name ||
            "Unknown",

          naturalRole:
            analysis.naturalRole,

          assignedRole:
            analysis.assignedRole,

          compatibility:
            analysis.compatibility
              .score,

          explanation:
            `${character.name || "This character"} was assigned as ${analysis.assignedRole} despite a natural ${analysis.naturalRole} profile, causing severe role inefficiency.`,
        });

      } else if (
        analysis.compatibility
          .tier ===
        "POOR" &&
        analysis.decisionQuality >=
          50
      ) {

        mistakes.push({

          type:
            "POOR_ROLE_ASSIGNMENT",

          severity:
            7,

          character:
            character.name ||
            "Unknown",

          naturalRole:
            analysis.naturalRole,

          assignedRole:
            analysis.assignedRole,

          compatibility:
            analysis.compatibility
              .score,

          explanation:
            `${character.name || "This character"} was assigned to ${analysis.assignedRole} even though the stronger natural role profile is ${analysis.naturalRole}.`,
        });

      }

    }
  );


  /*
    -------------------------------------------------------
    2. EXTREME ROLE CONCENTRATION
    -------------------------------------------------------
  */

  const roleDistribution =
    calculateRoleDistribution(
      team
    );


  const roleCounts =
    Object.values(
      roleDistribution
    );


  const maxRoleCount =
    roleCounts.length
      ? Math.max(
          ...roleCounts
        )
      : 0;


  const concentratedRole =
    Object.entries(
      roleDistribution
    ).find(
      (
        [, count]
      ) =>
        count ===
        maxRoleCount
    );


  if (
    team.length >=
      4 &&
    maxRoleCount >=
      Math.ceil(
        team.length *
          0.50
      )
  ) {

    mistakes.push({

      type:
        "ROLE_CONCENTRATION",

      severity:
        6,

      role:
        concentratedRole?.[0],

      count:
        maxRoleCount,

      explanation:
        `The team is heavily concentrated in ${concentratedRole?.[0] || "one role"}, reducing functional diversity and matchup flexibility.`,
    });

  }


  /*
    -------------------------------------------------------
    3. MISSING SUPPORT
    -------------------------------------------------------
  */

  if (
    team.length >=
      5 &&
    roleDistribution.Support ===
      0
  ) {

    mistakes.push({

      type:
        "NO_SUPPORT_ROLE",

      severity:
        4,

      explanation:
        "The team has no explicit Support assignment, which can reduce recovery, utility, or tactical flexibility.",
    });

  }


  /*
    -------------------------------------------------------
    4. MISSING FRONTLINE
    -------------------------------------------------------
  */

  if (
    team.length >=
      6 &&
    roleDistribution.Tank ===
      0 &&
    roleDistribution.Versatility ===
      0
  ) {

    mistakes.push({

      type:
        "NO_FRONTLINE",

      severity:
        5,

      explanation:
        "The team lacks a clear frontline role, which can make it vulnerable to sustained pressure.",
    });

  }


  /*
    -------------------------------------------------------
    5. NATURAL ROLE REDUNDANCY
    -------------------------------------------------------
  */

  const naturalRoleCounts =
    {};

  team.forEach(
    (
      character
    ) => {

      const role =
        getNaturalRole(
          character
        );

      naturalRoleCounts[
        role
      ] =
        (
          naturalRoleCounts[
            role
          ] || 0
        ) +
        1;

    }
  );


  const repeatedNaturalRole =
    Object.entries(
      naturalRoleCounts
    ).find(
      (
        [, count]
      ) =>
        count >=
        Math.ceil(
          team.length *
            0.60
        )
    );


  if (
    repeatedNaturalRole
  ) {

    mistakes.push({

      type:
        "NATURAL_ROLE_REDUNDANCY",

      severity:
        4,

      role:
        repeatedNaturalRole[0],

      count:
        repeatedNaturalRole[1],

      explanation:
        `A large portion of the roster naturally performs the same role (${repeatedNaturalRole[0]}), increasing redundancy.`,
    });

  }


  return mistakes.sort(
    (
      a,
      b
    ) =>
      safeNumber(
        b.severity
      ) -
      safeNumber(
        a.severity
      )
  );
}


/* =========================================================
   TEAM STATISTICS
========================================================= */

export function calculateTeamStatistics(
  player
) {
  const team =
    Array.isArray(
      player
    )
      ? player
      : player?.team ||
        [];


  const core =
    calculateTeamCoreStats(
      team
    );

  const roleDistribution =
    calculateRoleDistribution(
      team
    );

  const roleEfficiency =
    calculateTeamRoleEfficiency(
      team
    );

  const synergy =
    calculateTeamSynergy(
      team
    );

  const coverage =
    calculateTeamCoverage(
      team
    );

  const balance =
    calculateTeamBalance(
      team
    );

  const combatPower =
    calculateTeamCombatPower(
      team
    );

  const strategicBlunders =
    detectStrategicBlunders(
      team
    );


  const rolePenalty =
    clamp(
      100 -
        roleEfficiency.average
    );


  const tacticalScore =
    combatPower *
      0.34 +

    core.hax *
      0.09 +

    core.speed *
      0.07 +

    core.defense *
      0.07 +

    core.versatility *
      0.07 +

    core.battleIQ *
      0.07 +

    synergy *
      0.11 +

    coverage *
      0.09 +

    balance *
      0.09;


  const mistakePenalty =
    strategicBlunders.reduce(
      (
        total,
        mistake
      ) =>
        total +
        safeNumber(
          mistake.severity
        ) *
          1.15,
      0
    );


  const finalTacticalScore =
    clamp(
      tacticalScore -
        mistakePenalty,
      0,
      100
    );


  return {

    teamSize:
      team.length,

    core,

    roleDistribution,

    combatPower:
      round(
        combatPower
      ),

    roleEfficiency,

    synergy:
      round(
        synergy
      ),

    coverage:
      round(
        coverage
      ),

    balance:
      round(
        balance
      ),

    rolePenalty:
      round(
        rolePenalty
      ),

    strategicBlunders,

    tacticalScore:
      round(
        finalTacticalScore
      ),
  };
}


/* =========================================================
   STRONGEST CHARACTER
========================================================= */

export function getStrongestCharacter(
  team
) {
  if (
    !Array.isArray(team) ||
    !team.length
  ) {
    return null;
  }

  return [
    ...team,
  ].sort(
    (
      a,
      b
    ) =>
      calculateCharacterCombatScore(
        b
      ) -
      calculateCharacterCombatScore(
        a
      )
  )[0] || null;
}


/* =========================================================
   MATCHUP MATRIX
========================================================= */

export function buildMatchupMatrix(
  leftTeam,
  rightTeam
) {
  if (
    !Array.isArray(
      leftTeam
    ) ||
    !Array.isArray(
      rightTeam
    )
  ) {
    return [];
  }


  const matchups = [];

  const usedRight =
    new Set();


  /*
    First compare assigned-role mirrors.
  */

  leftTeam.forEach(
    (
      left
    ) => {

      const leftRole =
        getAssignedRole(
          left
        );


      const sameRoleIndex =
        rightTeam.findIndex(
          (
            right,
            index
          ) =>
            !usedRight.has(
              index
            ) &&
            getAssignedRole(
              right
            ) ===
              leftRole
        );


      if (
        sameRoleIndex >=
        0
      ) {

        const right =
          rightTeam[
            sameRoleIndex
          ];

        usedRight.add(
          sameRoleIndex
        );


        const matchup =
          simulateCharacterMatchup(
            left,
            right
          );


        matchups.push({

          ...matchup,

          matchupType:
            "ROLE_MIRROR",

          leftRole,

          rightRole:
            getAssignedRole(
              right
            ),
        });

      }

    }
  );


  /*
    Remaining characters:
    pair with the closest tactical opponent.
  */

  const remainingLeft =
    leftTeam.filter(
      (
        character
      ) =>
        !matchups.some(
          (
            match
          ) =>
            match.left?.id ===
            character?.id
        )
    );


  const remainingRight =
    rightTeam.filter(
      (
        character,
        index
      ) =>
        !usedRight.has(
          index
        )
    );


  remainingLeft.forEach(
    (
      left
    ) => {

      if (
        !remainingRight.length
      ) {
        return;
      }


      let best =
        null;


      remainingRight.forEach(
        (
          right,
          index
        ) => {

          const matchup =
            simulateCharacterMatchup(
              left,
              right
            );


          const closeness =
            Math.abs(
              safeNumber(
                matchup.leftProbability
              ) -
              50
            );


          if (
            !best ||
            closeness <
              best.closeness
          ) {
            best = {
              matchup,
              closeness,
              index,
            };
          }

        }
      );


      if (
        best
      ) {

        const opponent =
          remainingRight[
            best.index
          ];


        matchups.push({

          ...best.matchup,

          matchupType:
            "TACTICAL",

          leftRole:
            getAssignedRole(
              left
            ),

          rightRole:
            getAssignedRole(
              opponent
            ),

        });


        remainingRight.splice(
          best.index,
          1
        );

      }

    }
  );


  return matchups;
}


/* =========================================================
   KEY MATCHUPS
========================================================= */

export function getKeyMatchups(
  matrix,
  limit = 5
) {
  if (
    !Array.isArray(
      matrix
    )
  ) {
    return [];
  }


  return [
    ...matrix,
  ]
    .sort(
      (
        a,
        b
      ) => {

        const aCloseness =
          Math.abs(
            safeNumber(
              a.leftProbability
            ) -
            50
          );

        const bCloseness =
          Math.abs(
            safeNumber(
              b.leftProbability
            ) -
            50
          );


        if (
          aCloseness !==
          bCloseness
        ) {
          return (
            aCloseness -
            bCloseness
          );
        }


        return (
          safeNumber(
            b.margin
          ) -
          safeNumber(
            a.margin
          )
        );
      }
    )
    .slice(
      0,
      limit
    );
}


/* =========================================================
   TEAM BATTLE
========================================================= */

export function simulateAuctionBattle(
  leftPlayer,
  rightPlayer
) {
  const leftTeam =
    Array.isArray(
      leftPlayer
    )
      ? leftPlayer
      : leftPlayer?.team ||
        [];


  const rightTeam =
    Array.isArray(
      rightPlayer
    )
      ? rightPlayer
      : rightPlayer?.team ||
        [];


  const leftStats =
    calculateTeamStatistics(
      leftTeam
    );

  const rightStats =
    calculateTeamStatistics(
      rightTeam
    );


  const matchupMatrix =
    buildMatchupMatrix(
      leftTeam,
      rightTeam
    );


  const keyMatchups =
    getKeyMatchups(
      matchupMatrix,
      5
    );


  const strongestLeft =
    getStrongestCharacter(
      leftTeam
    );

  const strongestRight =
    getStrongestCharacter(
      rightTeam
    );


  let leftMatchupScore =
    0;

  let rightMatchupScore =
    0;


  matchupMatrix.forEach(
    (
      matchup
    ) => {

      leftMatchupScore +=
        safeNumber(
          matchup.leftProbability
        );

      rightMatchupScore +=
        safeNumber(
          matchup.rightProbability
        );

    }
  );


  if (
    matchupMatrix.length
  ) {

    leftMatchupScore /=
      matchupMatrix.length;

    rightMatchupScore /=
      matchupMatrix.length;

  } else {

    leftMatchupScore =
      50;

    rightMatchupScore =
      50;
  }


  const leftRaw =
    leftStats.tacticalScore *
      0.58 +

    leftMatchupScore *
      0.26 +

    leftStats.synergy *
      0.08 +

    leftStats.coverage *
      0.08;


  const rightRaw =
    rightStats.tacticalScore *
      0.58 +

    rightMatchupScore *
      0.26 +

    rightStats.synergy *
      0.08 +

    rightStats.coverage *
      0.08;


  const rawDifference =
    leftRaw -
    rightRaw;


  const leftProbability =
    clamp(
      50 +
        rawDifference *
          1.55,
      3,
      97
    );


  const rightProbability =
    clamp(
      100 -
        leftProbability,
      3,
      97
    );


  let winnerId =
    "DRAW";


  if (
    Math.abs(
      rawDifference
    ) >=
    2
  ) {
    winnerId =
      leftRaw >
      rightRaw
        ? leftPlayer?.id
        : rightPlayer?.id;
  }


  const probabilityGap =
    Math.abs(
      leftProbability -
      rightProbability
    );


  let battleTier =
    "HIGHLY_CONTESTED";


  if (
    probabilityGap >=
    40
  ) {
    battleTier =
      "DOMINANT";
  } else if (
    probabilityGap >=
    25
  ) {
    battleTier =
      "CLEAR_ADVANTAGE";
  } else if (
    probabilityGap >=
    12
  ) {
    battleTier =
      "MODERATE_ADVANTAGE";
  }


  const strategicObservations =
    [];


  if (
    leftStats.roleEfficiency
      .average <
    65
  ) {
    strategicObservations.push(
      `${leftPlayer?.name || "Left team"} has inefficient player role decisions.`
    );
  }


  if (
    rightStats.roleEfficiency
      .average <
    65
  ) {
    strategicObservations.push(
      `${rightPlayer?.name || "Right team"} has inefficient player role decisions.`
    );
  }


  if (
    leftStats.synergy >
      rightStats.synergy +
        8
  ) {
    strategicObservations.push(
      `${leftPlayer?.name || "Left team"} has substantially better team synergy.`
    );
  }


  if (
    rightStats.synergy >
      leftStats.synergy +
        8
  ) {
    strategicObservations.push(
      `${rightPlayer?.name || "Right team"} has substantially better team synergy.`
    );
  }


  if (
    leftStats.coverage >
      rightStats.coverage +
        8
  ) {
    strategicObservations.push(
      `${leftPlayer?.name || "Left team"} has broader tactical coverage.`
    );
  }


  if (
    rightStats.coverage >
      leftStats.coverage +
        8
  ) {
    strategicObservations.push(
      `${rightPlayer?.name || "Right team"} has broader tactical coverage.`
    );
  }


  const leftBlunders =
    leftStats
      .strategicBlunders;

  const rightBlunders =
    rightStats
      .strategicBlunders;


  if (
    leftBlunders.length >
    rightBlunders.length
  ) {
    strategicObservations.push(
      `${leftPlayer?.name || "Left team"} committed more detected strategic mistakes.`
    );
  }


  if (
    rightBlunders.length >
    leftBlunders.length
  ) {
    strategicObservations.push(
      `${rightPlayer?.name || "Right team"} committed more detected strategic mistakes.`
    );
  }


  return {

    players: {

      left: {
        id:
          leftPlayer?.id,

        name:
          leftPlayer?.name ||
          "Player 1",
      },

      right: {
        id:
          rightPlayer?.id,

        name:
          rightPlayer?.name ||
          "Player 2",
      },

    },


    teams: {

      [leftPlayer?.id]: {

        playerId:
          leftPlayer?.id,

        playerName:
          leftPlayer?.name ||
          "Player 1",

        characters:
          leftTeam,

        stats:
          leftStats,

        threatLevel:
          round(
            leftStats
              .tacticalScore
          ),

        synergy:
          leftStats
            .synergy,

        roleDistribution:
          leftStats
            .roleDistribution,

        strongestCharacter:
          strongestLeft,

        strategicBlunders:
          leftStats
            .strategicBlunders,
      },


      [rightPlayer?.id]: {

        playerId:
          rightPlayer?.id,

        playerName:
          rightPlayer?.name ||
          "Player 2",

        characters:
          rightTeam,

        stats:
          rightStats,

        threatLevel:
          round(
            rightStats
              .tacticalScore
          ),

        synergy:
          rightStats
            .synergy,

        roleDistribution:
          rightStats
            .roleDistribution,

        strongestCharacter:
          strongestRight,

        strategicBlunders:
          rightStats
            .strategicBlunders,
      },

    },


    probability: {

      [leftPlayer?.id]:
        round(
          leftProbability
        ),

      [rightPlayer?.id]:
        round(
          rightProbability
        ),

    },


    score: {

      [leftPlayer?.id]:
        round(
          leftRaw
        ),

      [rightPlayer?.id]:
        round(
          rightRaw
        ),

    },


    winnerId,

    battleTier,


    leftTeamStats:
      leftStats,

    rightTeamStats:
      rightStats,


    matchupMatrix,

    keyMatchups,


    strategicObservations:
      [
        ...new Set(
          strategicObservations
        ),
      ],


    battleSummary: {

      leftMatchupScore:
        round(
          leftMatchupScore
        ),

      rightMatchupScore:
        round(
          rightMatchupScore
        ),

      probabilityGap:
        round(
          probabilityGap
        ),

    },


    /*
      COMPLETE DETERMINISTIC
      AI EVIDENCE PACKAGE
    */

    aiEvidence: {

      winnerId,

      players: {

        left:
          leftPlayer?.name ||
          "Player 1",

        right:
          rightPlayer?.name ||
          "Player 2",

      },


      teamStats: {

        left:
          leftStats,

        right:
          rightStats,

      },


      naturalVsAssigned: {

        left:
          leftStats
            .roleEfficiency
            .breakdown,

        right:
          rightStats
            .roleEfficiency
            .breakdown,

      },


      strategicBlunders: {

        left:
          leftStats
            .strategicBlunders,

        right:
          rightStats
            .strategicBlunders,

      },


      matchupMatrix,

      keyMatchups,


      probability: {

        left:
          round(
            leftProbability
          ),

        right:
          round(
            rightProbability
          ),

      },


      battleTier,


      observations:
        [
          ...new Set(
            strategicObservations
          ),
        ],

    },

  };
}


/* =========================================================
   BATTLE DOSSIER
========================================================= */

export function createAuctionBattleDossier(
  battle
) {
  if (!battle) {
    return null;
  }


  const teamEntries =
    Object.entries(
      battle.teams ||
      {}
    );


  return {

    version:
      "auction-battle-v3-role-decision",

    players:
      battle.players,

    winnerId:
      battle.winnerId,

    battleTier:
      battle.battleTier,

    probability:
      battle.probability,

    score:
      battle.score,


    teamStats:
      Object.fromEntries(
        teamEntries.map(
          (
            [
              playerId,
              team,
            ]
          ) => [

            playerId,

            {
              playerName:
                team.playerName,

              threatLevel:
                team.threatLevel,

              synergy:
                team.synergy,

              roleDistribution:
                team.roleDistribution,

              stats:
                team.stats,

              strongestCharacter:
                team
                  .strongestCharacter
                  ?.name ||
                null,
            },

          ]
        )
      ),


    roleAssignments:
      Object.fromEntries(
        teamEntries.map(
          (
            [
              playerId,
              team,
            ]
          ) => [

            playerId,

            (
              team
                .stats
                ?.roleEfficiency
                ?.breakdown ||
              []
            ).map(
              (
                item
              ) => ({

                character:
                  item.character,

                naturalRole:
                  item.naturalRole,

                assignedRole:
                  item.assignedRole,

                compatibility:
                  item.compatibility,

                tier:
                  item.compatibilityTier,

                bestComputedRole:
                  item.bestComputedRole,

                bestComputedScore:
                  item.bestComputedScore,

                assignedSuitability:
                  item.assignedSuitability,

                decisionQuality:
                  item.decisionQuality,

                decisionGrade:
                  item.decisionGrade,

                roleSuitability:
                  item.roleSuitability,

              })
            ),

          ]
        )
      ),


    strategicBlunders:
      Object.fromEntries(
        teamEntries.map(
          (
            [
              playerId,
              team,
            ]
          ) => [

            playerId,

            team
              .strategicBlunders ||
            [],

          ]
        )
      ),


    matchupMatrix:
      battle.matchupMatrix ||
      [],


    keyMatchups:
      battle.keyMatchups ||
      [],


    strategicObservations:
      battle
        .strategicObservations ||
      [],


    rawEvidence:
      battle.aiEvidence ||
      null,

  };
}


/* =========================================================
   MULTI-TEAM BATTLE
========================================================= */

export function simulateAllPairings(
  players
) {
  if (
    !Array.isArray(players) ||
    players.length <
      2
  ) {
    return [];
  }


  const battles = [];


  for (
    let i = 0;
    i < players.length;
    i++
  ) {

    for (
      let j = i + 1;
      j < players.length;
      j++
    ) {

      battles.push(
        simulateAuctionBattle(
          players[i],
          players[j]
        )
      );

    }

  }


  return battles;
}


/* =========================================================
   PAIRWISE STANDINGS
========================================================= */

export function calculatePairwiseStandings(
  players
) {
  const validPlayers =
    Array.isArray(players)
      ? players
      : [];


  const standings =
    validPlayers.map(
      (
        player
      ) => {

        const stats =
          calculateTeamStatistics(
            player
          );


        return {

          playerId:
            player.id,

          playerName:
            player.name,

          wins:
            0,

          losses:
            0,

          draws:
            0,

          points:
            0,

          scored:
            0,

          conceded:
            0,

          tacticalScore:
            stats.tacticalScore,

          roleEfficiency:
            stats
              .roleEfficiency
              .average,

          strategicBlunders:
            stats
              .strategicBlunders
              .length,

        };

      }
    );


  const byId =
    new Map(
      standings.map(
        (
          item
        ) => [
          item.playerId,
          item,
        ]
      )
    );


  const battles =
    simulateAllPairings(
      validPlayers
    );


  battles.forEach(
    (
      battle
    ) => {

      const [
        firstId,
        secondId,
      ] =
        Object.keys(
          battle.probability ||
          {}
        );


      const left =
        byId.get(
          firstId
        );

      const right =
        byId.get(
          secondId
        );


      if (
        !left ||
        !right
      ) {
        return;
      }


      const leftProbability =
        safeNumber(
          battle
            .probability[
              firstId
            ]
        );


      const rightProbability =
        safeNumber(
          battle
            .probability[
              secondId
            ]
        );


      left.scored +=
        leftProbability;

      left.conceded +=
        rightProbability;


      right.scored +=
        rightProbability;

      right.conceded +=
        leftProbability;


      if (
        battle.winnerId ===
        "DRAW"
      ) {

        left.draws++;
        right.draws++;

        left.points += 1;
        right.points += 1;

        return;
      }


      if (
        battle.winnerId ===
        firstId
      ) {

        left.wins++;
        right.losses++;

        left.points += 3;

      } else if (
        battle.winnerId ===
        secondId
      ) {

        right.wins++;
        left.losses++;

        right.points += 3;

      }

    }
  );


  return standings
    .sort(
      (
        a,
        b
      ) => {

        if (
          b.points !==
          a.points
        ) {
          return (
            b.points -
            a.points
          );
        }


        if (
          b.wins !==
          a.wins
        ) {
          return (
            b.wins -
            a.wins
          );
        }


        if (
          b.tacticalScore !==
          a.tacticalScore
        ) {
          return (
            b.tacticalScore -
            a.tacticalScore
          );
        }


        return (
          b.roleEfficiency -
          a.roleEfficiency
        );

      }
    )
    .map(
      (
        item,
        index
      ) => ({

        ...item,

        rank:
          index + 1,

      })
    );
}


/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {

  ROLE_OPTIONS,

  ROLE_COMPATIBILITY,

  clamp,

  safeNumber,

  normalizeText,

  average,

  normalizeRole,

  getNaturalRole,

  getAssignedRole,

  getCharacterStats,

  getRoleProfile,

  getRoleCompatibility,

  calculateRoleSuitability,

  calculateRoleEfficiency,

  detectCounters,

  calculateCharacterCombatScore,

  simulateCharacterMatchup,

  calculateRoleDistribution,

  calculateTeamRoleEfficiency,

  calculateTeamCoreStats,

  calculateTeamSynergy,

  calculateTeamCoverage,

  calculateTeamBalance,

  calculateTeamCombatPower,

  detectStrategicBlunders,

  calculateTeamStatistics,

  getStrongestCharacter,

  buildMatchupMatrix,

  getKeyMatchups,

  simulateAuctionBattle,

  createAuctionBattleDossier,

  simulateAllPairings,

  calculatePairwiseStandings,

};