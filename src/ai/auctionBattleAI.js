/* =========================================================
   ANIME ARENA — AUCTION BATTLE AI
   PHASE 9 — EVIDENCE-LOCKED GEMINI ADJUDICATOR

   Responsibilities
   ---------------------------------------------------------
   • Consume deterministic Auction Battle evidence
   • Evaluate player-selected role assignments
   • Evaluate strategic blunders
   • Evaluate purchases + prices
   • Evaluate team composition
   • Ask Gemini for interpretation only
   • Never allow Gemini to invent missing facts
   • Validate Gemini JSON
   • Provide deterministic fallback if Gemini fails

   IMPORTANT
   ---------------------------------------------------------
   Deterministic engine = evidence
   Gemini = interpretation

   Gemini must NEVER invent:
   • abilities
   • feats
   • statistics
   • forms
   • roles
   • prices
   • purchases
   • matchup outcomes
========================================================= */

import {
  simulateAuctionBattle,
  createAuctionBattleDossier,
  calculateRoleEfficiency,
  getNaturalRole,
  getAssignedRole,
  calculateTeamStatistics,
  getCharacterStats,
} from "../engine/auctionBattleEngine";


/* =========================================================
   GENERIC HELPERS
========================================================= */

function safeNumber(value, fallback = 0) {
  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : fallback;
}


function clamp(value, min = 0, max = 100) {
  return Math.max(
    min,
    Math.min(
      max,
      safeNumber(value)
    )
  );
}


function safeString(value, fallback = "") {
  if (
    value === null ||
    value === undefined
  ) {
    return fallback;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  return fallback;
}


function cleanText(value, fallback = "") {
  const text = safeString(
    value,
    fallback
  ).trim();

  return text || fallback;
}


function normalizeArray(value) {
  return Array.isArray(value)
    ? value
    : [];
}


function uniqueStrings(values) {
  return [
    ...new Set(
      normalizeArray(values)
        .map((value) =>
          cleanText(value)
        )
        .filter(Boolean)
    ),
  ];
}


/* =========================================================
   JSON EXTRACTION
========================================================= */

function parseGeminiJSON(raw) {
  if (!raw) {
    return null;
  }

  if (
    typeof raw === "object" &&
    !Array.isArray(raw)
  ) {
    return raw;
  }

  const text = String(
    raw
  ).trim();

  if (!text) {
    return null;
  }

  const codeBlock =
    text.match(
      /```(?:json)?\s*([\s\S]*?)```/i
    );

  const candidate =
    codeBlock?.[1]?.trim() ||
    text;

  try {
    return JSON.parse(
      candidate
    );
  } catch {
    /* continue */
  }

  const first =
    candidate.indexOf("{");

  const last =
    candidate.lastIndexOf("}");

  if (
    first === -1 ||
    last === -1 ||
    last <= first
  ) {
    return null;
  }

  try {
    return JSON.parse(
      candidate.slice(
        first,
        last + 1
      )
    );
  } catch {
    return null;
  }
}


/* =========================================================
   PLAYER / TEAM NORMALIZATION
========================================================= */

function normalizePlayer(
  player,
  fallbackIndex = 0
) {
  return {
    ...player,

    id:
      player?.id ??
      `player-${fallbackIndex + 1}`,

    name:
      cleanText(
        player?.name,
        `Player ${fallbackIndex + 1}`
      ),

    team:
      Array.isArray(
        player?.team
      )
        ? player.team
        : [],
  };
}


function getPlayerName(
  player,
  fallback = "Unknown Player"
) {
  return cleanText(
    player?.name,
    fallback
  );
}


/* =========================================================
   PURCHASE EVIDENCE
========================================================= */

function buildPurchaseEvidence(
  player
) {
  const team = Array.isArray(
    player?.team
  )
    ? player.team
    : [];

  return team.map(
    (character) => {
      const roleAnalysis =
        calculateRoleEfficiency(
          character
        );

      const stats =
        getCharacterStats(
          character
        );

      const naturalRole =
        roleAnalysis.naturalRole ||
        getNaturalRole(
          character
        );

      const assignedRole =
        roleAnalysis.assignedRole ||
        getAssignedRole(
          character
        );

      const purchasePrice =
        safeNumber(
          character?.boughtFor ??
            character?.purchasePrice,
          0
        );

      return {
        character:
          cleanText(
            character?.name,
            "Unknown Character"
          ),

        verse:
          cleanText(
            character?.verse,
            "Unknown Verse"
          ),

        rarity:
          cleanText(
            character?.rarity,
            "Unknown"
          ),

        purchasePrice,

        naturalRole,

        assignedRole,

        roleCompatibility:
          safeNumber(
            roleAnalysis
              ?.compatibility
              ?.score,
            0
          ),

        compatibilityTier:
          cleanText(
            roleAnalysis
              ?.compatibility
              ?.tier,
            "UNKNOWN"
          ),

        effectiveValue:
          safeNumber(
            roleAnalysis?.effectiveValue,
            0
          ),

        rawCombat:
          safeNumber(
            roleAnalysis?.rawCombat,
            0
          ),

        power:
          safeNumber(
            stats?.power,
            0
          ),

        hax:
          safeNumber(
            stats?.hax,
            0
          ),

        roleAssignedByPlayer:
          character?.roleAssignedByPlayer === true,
      };
    }
  );
}


/* =========================================================
   ROLE DECISION EVIDENCE
========================================================= */

function buildRoleAssignments(
  player
) {
  const team = Array.isArray(
    player?.team
  )
    ? player.team
    : [];

  return team.map(
    (character) => {
      const analysis =
        calculateRoleEfficiency(
          character
        );

      const naturalRole =
        analysis.naturalRole ||
        getNaturalRole(
          character
        );

      const assignedRole =
        analysis.assignedRole ||
        getAssignedRole(
          character
        );

      const compatibility =
        clamp(
          analysis
            ?.compatibility
            ?.score
        );

      let assessment =
        "NEUTRAL";

      if (
        compatibility >=
        90
      ) {
        assessment =
          "EXCELLENT";
      } else if (
        compatibility >=
        80
      ) {
        assessment =
          "STRONG";
      } else if (
        compatibility >=
        65
      ) {
        assessment =
          "ACCEPTABLE";
      } else if (
        compatibility >=
        50
      ) {
        assessment =
          "QUESTIONABLE";
      } else {
        assessment =
          "POOR";
      }

      return {
        character:
          cleanText(
            character?.name,
            "Unknown Character"
          ),

        player:
          getPlayerName(player),

        naturalRole,

        assignedRole,

        compatibility,

        tier:
          cleanText(
            analysis
              ?.compatibility
              ?.tier,
            "UNKNOWN"
          ),

        assessment,
      };
    }
  );
}


/* =========================================================
   STRATEGIC BLUNDERS
========================================================= */

function buildStrategicMistakes(
  teamStats,
  player
) {
  const playerName =
    getPlayerName(player);

  return normalizeArray(
    teamStats?.strategicBlunders
  ).map(
    (mistake) => ({
      player:
        playerName,

      character:
        cleanText(
          mistake?.character,
          ""
        ),

      type:
        cleanText(
          mistake?.type,
          "Strategic Mistake"
        ),

      severity:
        clamp(
          mistake?.severity,
          0,
          10
        ),

      role:
        cleanText(
          mistake?.role,
          ""
        ),

      count:
        safeNumber(
          mistake?.count,
          0
        ),

      naturalRole:
        cleanText(
          mistake?.naturalRole,
          ""
        ),

      assignedRole:
        cleanText(
          mistake?.assignedRole,
          ""
        ),

      explanation:
        cleanText(
          mistake?.explanation,
          "The deterministic engine detected a strategic issue."
        ),
    })
  );
}


/* =========================================================
   BATTLE EVIDENCE PACKAGE
========================================================= */

function buildEvidence(
  leftPlayer,
  rightPlayer
) {
  const battle =
    simulateAuctionBattle(
      leftPlayer,
      rightPlayer
    );

  const dossier =
    createAuctionBattleDossier(
      battle
    );

  const leftTeamStats =
    calculateTeamStatistics(
      leftPlayer
    );

  const rightTeamStats =
    calculateTeamStatistics(
      rightPlayer
    );

  const leftPurchases =
    buildPurchaseEvidence(
      leftPlayer
    );

  const rightPurchases =
    buildPurchaseEvidence(
      rightPlayer
    );

  const leftRoleAssignments =
    buildRoleAssignments(
      leftPlayer
    );

  const rightRoleAssignments =
    buildRoleAssignments(
      rightPlayer
    );

  const leftMistakes =
    buildStrategicMistakes(
      leftTeamStats,
      leftPlayer
    );

  const rightMistakes =
    buildStrategicMistakes(
      rightTeamStats,
      rightPlayer
    );

  return {
    battle,

    dossier,

    players: {
      left: {
        id:
          leftPlayer?.id,

        name:
          getPlayerName(
            leftPlayer,
            "Player 1"
          ),
      },

      right: {
        id:
          rightPlayer?.id,

        name:
          getPlayerName(
            rightPlayer,
            "Player 2"
          ),
      },
    },

    purchases: {
      left:
        leftPurchases,

      right:
        rightPurchases,
    },

    roleAssignments: {
      left:
        leftRoleAssignments,

      right:
        rightRoleAssignments,
    },

    strategicMistakes: {
      left:
        leftMistakes,

      right:
        rightMistakes,
    },

    teamStats: {
      left:
        leftTeamStats,

      right:
        rightTeamStats,
    },
  };
}


/* =========================================================
   GEMINI PROMPT
========================================================= */

function buildGeminiPrompt(
  evidence
) {
  const leftName =
    evidence.players.left.name;

  const rightName =
    evidence.players.right.name;

  return `
You are the senior strategic judge for ANIME ARENA.

You are judging an auction-created team battle.

IMPORTANT:
The deterministic engine has already produced the evidence.

Your job is NOT to recalculate facts from fictional knowledge.
Your job is to INTERPRET the supplied evidence.

You MUST use ONLY the information inside the evidence JSON.

NEVER invent:
- abilities
- feats
- statistics
- transformations
- powers
- roles
- prices
- matchup outcomes
- player actions
- team members
- historical facts

A player's role assignment is intentional.

Example:
If a player bought Goku and selected Support, DO NOT automatically say it is wrong.
Judge the decision from the supplied evidence:
- natural role
- assigned role
- compatibility
- team composition
- existing role distribution
- tactical score
- synergy
- coverage
- matchup evidence
- strategic mistakes

A creative role conversion may be good when the evidence supports it.

A bad role assignment should be criticized when the evidence indicates poor compatibility or strategic inefficiency.

Also judge AUCTION DECISIONS:
- price paid
- effective value
- role fit
- contribution to roster
- whether the purchase solved a team weakness
- whether the purchase created redundancy
- whether the purchase appears overpriced relative to supplied evidence

Do not invent an external market price.
Only discuss "steal", "fair", or "overpay" using supplied deterministic evidence.

Compare:
${leftName}
VS
${rightName}

Return ONLY valid JSON.

Required JSON structure:

{
  "winner": "${leftName}" or "${rightName}" or "DRAW",
  "confidence": 0,
  "verdict": "2-4 sentence final tactical judgment.",
  "summary": "Concise executive summary.",
  "decisiveFactors": [
    "factor",
    "factor",
    "factor"
  ],
  "biggestStrategicMistake": {
    "player": "player name",
    "type": "mistake type",
    "explanation": "why it mattered"
  },
  "roleAssignments": [
    {
      "character": "character name",
      "player": "player name",
      "naturalRole": "role",
      "assignedRole": "role",
      "compatibility": 0,
      "assessment": "EXCELLENT"
    }
  ],
  "strategicMistakes": [
    {
      "player": "player name",
      "character": "character name",
      "type": "mistake type",
      "severity": 0,
      "explanation": "reason"
    }
  ],
  "keyMatchups": [
    {
      "winner": "player name or DRAW",
      "reason": "evidence-based reason"
    }
  ],
  "recommendations": [
    "lesson",
    "lesson"
  ],
  "purchaseVerdicts": [
    {
      "player": "player name",
      "character": "character name",
      "purchaseVerdict": "STEAL",
      "reason": "evidence-based reason",
      "grade": "A"
    }
  ],
  "aiInterpretation": "Detailed strategic interpretation."
}

Allowed purchaseVerdict values:
STEAL
FAIR
OVERPAY
DISASTER

Allowed grade values:
S+
S
A+
A
A-
B+
B
B-
C
D
F

Evidence JSON:

${JSON.stringify(
  evidence,
  null,
  2
)}
`;
}


/* =========================================================
   GEMINI RESPONSE NORMALIZATION
========================================================= */

function normalizeRoleAssignments(
  raw,
  evidence
) {
  const fallback = [
    ...evidence.roleAssignments.left,
    ...evidence.roleAssignments.right,
  ];

  const supplied =
    normalizeArray(
      raw?.roleAssignments
    );

  const source =
    supplied.length
      ? supplied
      : fallback;

  return source.map(
    (item) => ({
      character:
        cleanText(
          item?.character,
          "Unknown Character"
        ),

      player:
        cleanText(
          item?.player,
          "Unknown Player"
        ),

      naturalRole:
        cleanText(
          item?.naturalRole,
          "Unknown"
        ),

      assignedRole:
        cleanText(
          item?.assignedRole,
          "Unknown"
        ),

      compatibility:
        clamp(
          item?.compatibility
        ),

      assessment:
        cleanText(
          item?.assessment,
          "NEUTRAL"
        ),
    })
  );
}


function normalizeMistakes(
  raw,
  evidence
) {
  const fallback = [
    ...evidence.strategicMistakes.left,
    ...evidence.strategicMistakes.right,
  ];

  const supplied =
    normalizeArray(
      raw?.strategicMistakes
    );

  const source =
    supplied.length
      ? supplied
      : fallback;

  return source.map(
    (item) => ({
      player:
        cleanText(
          item?.player,
          "Unknown Player"
        ),

      character:
        cleanText(
          item?.character,
          ""
        ),

      type:
        cleanText(
          item?.type,
          "Strategic Mistake"
        ),

      severity:
        clamp(
          item?.severity,
          0,
          10
        ),

      explanation:
        cleanText(
          item?.explanation,
          "Strategic issue detected."
        ),
    })
  );
}


function normalizeKeyMatchups(
  raw,
  evidence
) {
  const supplied =
    normalizeArray(
      raw?.keyMatchups
    );

  const fallback =
    normalizeArray(
      evidence.battle?.keyMatchups
    );

  const source =
    supplied.length
      ? supplied
      : fallback;

  return source.map(
    (item) => ({
      winner:
        cleanText(
          item?.winner,
          "DRAW"
        ),

      reason:
        cleanText(
          item?.reason,
          "The deterministic matchup evidence was close."
        ),
    })
  );
}


function normalizeRecommendations(
  raw
) {
  return uniqueStrings(
    raw?.recommendations
  );
}


function normalizeDecisiveFactors(
  raw,
  evidence
) {
  const supplied =
    uniqueStrings(
      raw?.decisiveFactors
    );

  if (
    supplied.length
  ) {
    return supplied.slice(
      0,
      8
    );
  }

  return [
    ...normalizeArray(
      evidence.battle
        ?.strategicObservations
    ),
    `Role efficiency: ${Math.round(
      evidence.teamStats.left
        ?.roleEfficiency?.average || 0
    )}% vs ${Math.round(
      evidence.teamStats.right
        ?.roleEfficiency?.average || 0
    )}%`,
    `Team synergy: ${Math.round(
      evidence.teamStats.left
        ?.synergy || 0
    )} vs ${Math.round(
      evidence.teamStats.right
        ?.synergy || 0
    )}`,
  ].filter(Boolean).slice(
    0,
    6
  );
}


function normalizePurchaseVerdicts(
  raw,
  evidence
) {
  const supplied =
    normalizeArray(
      raw?.purchaseVerdicts
    );

  if (
    supplied.length
  ) {
    return supplied.map(
      (item) => ({
        player:
          cleanText(
            item?.player,
            "Unknown Player"
          ),

        character:
          cleanText(
            item?.character,
            "Unknown Character"
          ),

        purchaseVerdict:
          [
            "STEAL",
            "FAIR",
            "OVERPAY",
            "DISASTER",
          ].includes(
            item?.purchaseVerdict
          )
            ? item.purchaseVerdict
            : "FAIR",

        reason:
          cleanText(
            item?.reason,
            "Decision interpreted from supplied evidence."
          ),

        grade:
          cleanText(
            item?.grade,
            "B"
          ),
      })
    );
  }

  return [
    ...evidence.purchases.left.map(
      (item) => ({
        player:
          evidence.players.left.name,

        character:
          item.character,

        purchaseVerdict:
          "FAIR",

        reason:
          "No separate AI purchase classification was available; deterministic purchase evidence is retained.",

        grade:
          "B",
      })
    ),

    ...evidence.purchases.right.map(
      (item) => ({
        player:
          evidence.players.right.name,

        character:
          item.character,

        purchaseVerdict:
          "FAIR",

        reason:
          "No separate AI purchase classification was available; deterministic purchase evidence is retained.",

        grade:
          "B",
      })
    ),
  ];
}


/* =========================================================
   DETERMINISTIC FALLBACK
========================================================= */

function buildFallbackVerdict(
  evidence
) {
  const left =
    evidence.battle
      ?.players
      ?.left;

  const right =
    evidence.battle
      ?.players
      ?.right;

  const winnerId =
    evidence.battle?.winnerId;

  let winner =
    "DRAW";

  if (
    winnerId ===
    left?.id
  ) {
    winner =
      evidence.players.left.name;
  } else if (
    winnerId ===
    right?.id
  ) {
    winner =
      evidence.players.right.name;
  }

  const leftRole =
    safeNumber(
      evidence.teamStats.left
        ?.roleEfficiency?.average
    );

  const rightRole =
    safeNumber(
      evidence.teamStats.right
        ?.roleEfficiency?.average
    );

  const leftSynergy =
    safeNumber(
      evidence.teamStats.left
        ?.synergy
    );

  const rightSynergy =
    safeNumber(
      evidence.teamStats.right
        ?.synergy
    );

  const leftScore =
    safeNumber(
      evidence.teamStats.left
        ?.tacticalScore
    );

  const rightScore =
    safeNumber(
      evidence.teamStats.right
        ?.tacticalScore
    );

  const mistakes = [
    ...evidence.strategicMistakes.left,
    ...evidence.strategicMistakes.right,
  ].sort(
    (a, b) =>
      safeNumber(
        b.severity
      ) -
      safeNumber(
        a.severity
      )
  );

  const biggest =
    mistakes[0] || null;

  let verdictText =
    "The deterministic battle engine produced a draw.";

  if (
    winner !== "DRAW"
  ) {
    verdictText =
      `${winner} wins the deterministic tactical evaluation based on team score, role efficiency, synergy, coverage, and matchup evidence.`;
  }

  return {
    success: true,

    source:
      "deterministic-fallback",

    winner,

    confidence:
      clamp(
        Math.max(
          55,
          100 -
            Math.abs(
              leftScore -
                rightScore
            ) *
              1.5
        )
      ),

    verdict:
      verdictText,

    summary:
      `${evidence.players.left.name}: tactical ${Math.round(leftScore)}, role efficiency ${Math.round(leftRole)}%, synergy ${Math.round(leftSynergy)}%. ${evidence.players.right.name}: tactical ${Math.round(rightScore)}, role efficiency ${Math.round(rightRole)}%, synergy ${Math.round(rightSynergy)}%.`,

    decisiveFactors:
      normalizeDecisiveFactors(
        {},
        evidence
      ),

    biggestStrategicMistake:
      biggest
        ? {
            player:
              biggest.player,
            type:
              biggest.type,
            explanation:
              biggest.explanation,
          }
        : null,

    roleAssignments:
      normalizeRoleAssignments(
        {},
        evidence
      ),

    strategicMistakes:
      normalizeMistakes(
        {},
        evidence
      ),

    keyMatchups:
      normalizeKeyMatchups(
        {},
        evidence
      ),

    recommendations: [
      "Use the strongest role assignment supported by the player's roster constraints.",
      "Avoid severe role mismatches and unnecessary redundancy.",
    ],

    purchaseVerdicts:
      normalizePurchaseVerdicts(
        {},
        evidence
      ),

    aiInterpretation:
      "No external AI interpretation was available. The displayed verdict is based entirely on deterministic evidence.",

    evidence,
  };
}


/* =========================================================
   PUBLIC API
========================================================= */

export async function adjudicateAuctionBattle(
  leftPlayerInput,
  rightPlayerInput,
  requestGemini
) {
  const leftPlayer =
    normalizePlayer(
      leftPlayerInput,
      0
    );

  const rightPlayer =
    normalizePlayer(
      rightPlayerInput,
      1
    );

  const evidence =
    buildEvidence(
      leftPlayer,
      rightPlayer
    );

  /*
    If Gemini is not available,
    never break the game.
  */

  if (
    typeof requestGemini !==
    "function"
  ) {
    return buildFallbackVerdict(
      evidence
    );
  }

  const prompt =
    buildGeminiPrompt(
      evidence
    );

  try {
    const raw =
      await requestGemini(
        prompt
      );

    const parsed =
      parseGeminiJSON(
        raw
      );

    if (
      !parsed ||
      typeof parsed !==
        "object"
    ) {
      throw new Error(
        "Gemini returned invalid JSON."
      );
    }

    const allowedWinnerNames = [
      evidence.players.left.name,
      evidence.players.right.name,
      "DRAW",
    ];

    const winnerCandidate =
      cleanText(
        parsed.winner,
        "DRAW"
      );

    const winner =
      allowedWinnerNames.includes(
        winnerCandidate
      )
        ? winnerCandidate
        : "DRAW";

    const mistakes =
      normalizeMistakes(
        parsed,
        evidence
      );

    const biggestMistake =
      parsed.biggestStrategicMistake
        ?.player
        ? {
            player:
              cleanText(
                parsed
                  .biggestStrategicMistake
                  .player,
                "Unknown Player"
              ),

            type:
              cleanText(
                parsed
                  .biggestStrategicMistake
                  .type,
                "Strategic Mistake"
              ),

            explanation:
              cleanText(
                parsed
                  .biggestStrategicMistake
                  .explanation,
                "Strategic issue detected."
              ),
          }
        : mistakes[0]
        ? {
            player:
              mistakes[0].player,

            type:
              mistakes[0].type,

            explanation:
              mistakes[0].explanation,
          }
        : null;

    return {
      success: true,

      source:
        "gemini",

      winner,

      confidence:
        clamp(
          parsed.confidence
        ),

      verdict:
        cleanText(
          parsed.verdict,
          `${winner} was favored by the supplied deterministic evidence.`
        ),

      summary:
        cleanText(
          parsed.summary,
          "Gemini interpreted the deterministic battle evidence."
        ),

      decisiveFactors:
        normalizeDecisiveFactors(
          parsed,
          evidence
        ),

      biggestStrategicMistake:
        biggestMistake,

      roleAssignments:
        normalizeRoleAssignments(
          parsed,
          evidence
        ),

      strategicMistakes:
        mistakes,

      keyMatchups:
        normalizeKeyMatchups(
          parsed,
          evidence
        ),

      recommendations:
        normalizeRecommendations(
          parsed
        ),

      purchaseVerdicts:
        normalizePurchaseVerdicts(
          parsed,
          evidence
        ),

      aiInterpretation:
        cleanText(
          parsed.aiInterpretation,
          parsed.verdict ||
            parsed.summary ||
            "Gemini provided an evidence-based interpretation."
        ),

      evidence,
    };
  } catch (error) {
    console.error(
      "Gemini adjudication failed:",
      error
    );

    return {
      ...buildFallbackVerdict(
        evidence
      ),

      geminiError:
        cleanText(
          error?.message,
          "Gemini adjudication failed."
        ),
    };
  }
}


/* =========================================================
   OPTIONAL DIRECT EVIDENCE API
========================================================= */

export function buildAuctionBattleEvidence(
  leftPlayer,
  rightPlayer
) {
  const left =
    normalizePlayer(
      leftPlayer,
      0
    );

  const right =
    normalizePlayer(
      rightPlayer,
      1
    );

  return buildEvidence(
    left,
    right
  );
}


export default {
  adjudicateAuctionBattle,
  buildAuctionBattleEvidence,
};