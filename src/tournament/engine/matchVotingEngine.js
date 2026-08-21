/*
  Anime Arena — Grand Tournament
  Match Voting Engine

  IMPORTANT:
  Gemini may analyze/recommend a winner,
  but players always make the final decision.

  Player votes = official tournament result.
*/

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;

/* --------------------------------------------------
   BASIC HELPERS
-------------------------------------------------- */

const text = (value) =>
  String(value ?? "").trim();

const normalizePlayerId = (value) =>
  text(value);

const normalizeCharacterId = (value) =>
  text(value);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

/* --------------------------------------------------
   PLAYER VALIDATION
-------------------------------------------------- */

export function validateVotingPlayers(players) {
  const errors = [];

  if (!Array.isArray(players)) {
    return {
      valid: false,
      errors: ["Players must be an array."],
    };
  }

  if (
    players.length < MIN_PLAYERS ||
    players.length > MAX_PLAYERS
  ) {
    errors.push(
      `Tournament voting requires ${MIN_PLAYERS} to ${MAX_PLAYERS} players.`
    );
  }

  const playerIds = new Set();

  players.forEach((player, index) => {
    const id = normalizePlayerId(player?.id);

    if (!id) {
      errors.push(
        `Player ${index + 1} has no valid id.`
      );
      return;
    }

    if (playerIds.has(id)) {
      errors.push(
        `Duplicate player id: ${id}`
      );
    }

    playerIds.add(id);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/* --------------------------------------------------
   CREATE MATCH VOTE SESSION
-------------------------------------------------- */

/*
  Creates the voting state for ONE tournament match.

  Example:

  Goku vs Naruto

  Players:
  P1
  P2
  P3

  Everyone gets exactly one vote.
*/

export function createMatchVotingSession({
  matchId,
  left,
  right,
  players = [],
  geminiAnalysis = null,
}) {
  const validation =
    validateVotingPlayers(players);

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  const leftId =
    normalizeCharacterId(left?.characterId);

  const rightId =
    normalizeCharacterId(right?.characterId);

  if (!leftId || !rightId) {
    return {
      success: false,
      errors: [
        "Both match participants need valid character ids.",
      ],
    };
  }

  if (leftId === rightId) {
    return {
      success: false,
      errors: [
        "A character cannot fight itself.",
      ],
    };
  }

  return {
    success: true,

    session: {
      matchId: text(matchId),

      left: clone(left),
      right: clone(right),

      /*
        Gemini is commentary/analysis only.
        It does NOT control winner.
      */
      geminiAnalysis:
        geminiAnalysis
          ? clone(geminiAnalysis)
          : null,

      votes: {},

      voteCount: {
        [leftId]: 0,
        [rightId]: 0,
      },

      requiredVotes: players.length,

      status: "voting",

      winner: null,
      loser: null,

      completedAt: null,
    },
  };
}

/* --------------------------------------------------
   CHECK EXISTING VOTE
-------------------------------------------------- */

export function hasPlayerVoted(
  session,
  playerId
) {
  const id =
    normalizePlayerId(playerId);

  return Boolean(
    session?.votes?.[id]
  );
}

/* --------------------------------------------------
   CAST VOTE
-------------------------------------------------- */

/*
  One player = one vote.

  voteFor must be either:

  left
  OR
  right
*/

export function castMatchVote({
  session,
  playerId,
  voteFor,
}) {
  if (!session) {
    return {
      success: false,
      error: "Voting session not found.",
    };
  }

  if (session.status !== "voting") {
    return {
      success: false,
      error:
        "Voting for this match is already closed.",
    };
  }

  const normalizedPlayerId =
    normalizePlayerId(playerId);

  if (!normalizedPlayerId) {
    return {
      success: false,
      error: "Invalid player id.",
    };
  }

  if (hasPlayerVoted(
    session,
    normalizedPlayerId
  )) {
    return {
      success: false,
      error:
        "This player has already voted.",
    };
  }

  if (
    voteFor !== "left" &&
    voteFor !== "right"
  ) {
    return {
      success: false,
      error:
        'Vote must be either "left" or "right".',
    };
  }

  const characterId =
    voteFor === "left"
      ? session.left.characterId
      : session.right.characterId;

  const nextSession =
    clone(session);

  nextSession.votes[
    normalizedPlayerId
  ] = {
    playerId: normalizedPlayerId,
    voteFor,
    characterId,
    votedAt:
      new Date().toISOString(),
  };

  nextSession.voteCount[
    characterId
  ] += 1;

  return {
    success: true,

    session: nextSession,

    vote: nextSession.votes[
      normalizedPlayerId
    ],
  };
}

/* --------------------------------------------------
   VOTE STATUS
-------------------------------------------------- */

export function getVotingStatus(
  session
) {
  if (!session) {
    return {
      totalVotes: 0,
      requiredVotes: 0,
      remainingVotes: 0,
      completed: false,
    };
  }

  const totalVotes =
    Object.keys(
      session.votes || {}
    ).length;

  const requiredVotes =
    session.requiredVotes || 0;

  return {
    totalVotes,
    requiredVotes,

    remainingVotes: Math.max(
      requiredVotes - totalVotes,
      0
    ),

    completed:
      totalVotes >= requiredVotes,
  };
}

/* --------------------------------------------------
   CHECK VOTE RESULT
-------------------------------------------------- */

export function calculateVoteResult(
  session
) {
  if (!session) {
    return {
      success: false,
      error: "Voting session not found.",
    };
  }

  const leftId =
    session.left.characterId;

  const rightId =
    session.right.characterId;

  const leftVotes =
    Number(
      session.voteCount?.[leftId] || 0
    );

  const rightVotes =
    Number(
      session.voteCount?.[rightId] || 0
    );

  const totalVotes =
    leftVotes + rightVotes;

  /*
    Voting cannot finish until every player
    has voted.
  */
  if (
    totalVotes <
    session.requiredVotes
  ) {
    return {
      success: false,

      incomplete: true,

      error:
        "Waiting for all players to vote.",

      leftVotes,
      rightVotes,
      totalVotes,

      remainingVotes:
        session.requiredVotes -
        totalVotes,
    };
  }

  /*
    Normal winner.
  */
  if (leftVotes > rightVotes) {
    return {
      success: true,
      status: "winner-decided",

      winnerSide: "left",
      winnerId: leftId,

      loserSide: "right",
      loserId: rightId,

      leftVotes,
      rightVotes,
      totalVotes,
    };
  }

  if (rightVotes > leftVotes) {
    return {
      success: true,
      status: "winner-decided",

      winnerSide: "right",
      winnerId: rightId,

      loserSide: "left",
      loserId: leftId,

      leftVotes,
      rightVotes,
      totalVotes,
    };
  }

  /*
    IMPORTANT:
    A tie is NOT decided by Gemini.
  */
  return {
    success: true,

    status: "tie",

    winnerSide: null,
    winnerId: null,

    loserSide: null,
    loserId: null,

    leftVotes,
    rightVotes,
    totalVotes,
  };
}

/* --------------------------------------------------
   TIE DETECTION
-------------------------------------------------- */

export function isVotingTie(session) {
  const result =
    calculateVoteResult(session);

  return (
    result.success &&
    result.status === "tie"
  );
}

/* --------------------------------------------------
   CLOSE MATCH
-------------------------------------------------- */

/*
  This function ONLY closes a match when there
  is a clear winner.

  Ties remain unresolved.

  We will create a separate tie-break system
  afterward.
*/

export function finalizeMatchVote(
  session
) {
  const result =
    calculateVoteResult(session);

  if (!result.success) {
    return result;
  }

  if (result.status === "tie") {
    return {
      success: false,

      status: "tie",

      requiresTieBreaker: true,

      session: clone(session),

      result,
    };
  }

  const nextSession =
    clone(session);

  nextSession.status =
    "completed";

  nextSession.winner = {
    characterId:
      result.winnerId,

    side:
      result.winnerSide,
  };

  nextSession.loser = {
    characterId:
      result.loserId,

    side:
      result.loserSide,
  };

  nextSession.completedAt =
    new Date().toISOString();

  return {
    success: true,

    session: nextSession,

    result,
  };
}

/* --------------------------------------------------
   GEMINI RESULT — INFORMATION ONLY
-------------------------------------------------- */

/*
  Gemini can say:

  "Goku should win"

  or

  "Naruto has the better win condition"

  But this function NEVER changes the official
  tournament winner.
*/

export function attachGeminiAnalysis({
  session,
  analysis,
}) {
  if (!session) {
    return {
      success: false,
      error: "Voting session not found.",
    };
  }

  const nextSession =
    clone(session);

  nextSession.geminiAnalysis =
    analysis
      ? clone(analysis)
      : null;

  return {
    success: true,
    session: nextSession,
  };
}

/* --------------------------------------------------
   PUBLIC VOTE SUMMARY
-------------------------------------------------- */

/*
  This is what the UI can display.

  Example:

  Goku       ████████  2
  Naruto     ████      1
*/

export function getVoteSummary(
  session
) {
  if (!session) {
    return null;
  }

  const leftId =
    session.left.characterId;

  const rightId =
    session.right.characterId;

  const leftVotes =
    Number(
      session.voteCount?.[leftId] || 0
    );

  const rightVotes =
    Number(
      session.voteCount?.[rightId] || 0
    );

  const totalVotes =
    leftVotes + rightVotes;

  return {
    left: {
      characterId: leftId,
      votes: leftVotes,

      percentage:
        totalVotes > 0
          ? Math.round(
              (leftVotes /
                totalVotes) *
                100
            )
          : 0,
    },

    right: {
      characterId: rightId,
      votes: rightVotes,

      percentage:
        totalVotes > 0
          ? Math.round(
              (rightVotes /
                totalVotes) *
                100
            )
          : 0,
    },

    totalVotes,

    requiredVotes:
      session.requiredVotes,

    remainingVotes:
      Math.max(
        session.requiredVotes -
          totalVotes,
        0
      ),
  };
}
/* --------------------------------------------------
   COMPATIBILITY HELPER
-------------------------------------------------- */

/*
  TournamentMatch.jsx currently uses createMatchVote().

  This helper converts the UI vote object into the
  official voting result format.

  IMPORTANT:
  Player votes remain the official authority.
  Gemini/AI does NOT decide the winner.
*/

export function createMatchVote({
  matchId,
  votes = {},
  officialWinner,
}) {
  const voteEntries = Object.entries(votes);

  if (!voteEntries.length) {
    return {
      success: false,
      error: "No votes were submitted.",
    };
  }

  if (
    officialWinner !== "left" &&
    officialWinner !== "right"
  ) {
    return {
      success: false,
      error: "Invalid official winner.",
    };
  }

  const leftVotes = voteEntries.filter(
    ([, vote]) => vote === "left"
  ).length;

  const rightVotes = voteEntries.filter(
    ([, vote]) => vote === "right"
  ).length;

  if (
    leftVotes === rightVotes
  ) {
    return {
      success: false,
      status: "tie",
      requiresTieBreaker: true,
      error: "The vote is tied.",
    };
  }

  const calculatedWinner =
    leftVotes > rightVotes
      ? "left"
      : "right";

  /*
    Safety check:
    UI-provided winner must match the actual
    player vote count.
  */

  if (
    calculatedWinner !== officialWinner
  ) {
    return {
      success: false,
      error:
        "Official winner does not match the player vote count.",
    };
  }

  return {
    success: true,

    matchId,

    officialWinner,

    leftVotes,

    rightVotes,

    totalVotes:
      leftVotes + rightVotes,

    votes: {
      ...votes,
    },

    status: "winner-decided",

    finalizedAt:
      new Date().toISOString(),
  };
}