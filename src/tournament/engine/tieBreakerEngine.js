/*
  Anime Arena — Grand Tournament
  Tie Breaker Engine

  IMPORTANT:
  Gemini NEVER automatically decides a tie.

  The players still have authority.

  Tie-break sequence:

  1. Normal vote
  2. If tied → sudden-death vote
  3. If STILL tied → one final rotating deciding vote
  4. If somehow still tied → random coin flip is available
     ONLY as an emergency fallback chosen by the rules.
*/

const clone = (value) =>
  JSON.parse(JSON.stringify(value));

export function createTieBreaker({
  session,
  players = [],
}) {
  if (!session) {
    return {
      success: false,
      error: "Voting session is required.",
    };
  }

  if (!Array.isArray(players) || !players.length) {
    return {
      success: false,
      error: "Players are required.",
    };
  }

  return {
    success: true,

    tieBreaker: {
      matchId: session.matchId,

      stage: 1,

      status: "active",

      players: players.map((player) => ({
        id: player.id,
        name: player.name,
      })),

      votes: {},

      leftVotes: 0,
      rightVotes: 0,

      winner: null,
    },
  };
}

export function castTieBreakerVote({
  tieBreaker,
  playerId,
  voteFor,
}) {
  if (!tieBreaker) {
    return {
      success: false,
      error: "Tie-breaker not found.",
    };
  }

  if (tieBreaker.status !== "active") {
    return {
      success: false,
      error: "Tie-breaker is already closed.",
    };
  }

  if (
    voteFor !== "left" &&
    voteFor !== "right"
  ) {
    return {
      success: false,
      error:
        'Vote must be "left" or "right".',
    };
  }

  if (tieBreaker.votes[playerId]) {
    return {
      success: false,
      error: "Player has already voted.",
    };
  }

  const next = clone(tieBreaker);

  next.votes[playerId] = {
    playerId,
    voteFor,
  };

  if (voteFor === "left") {
    next.leftVotes += 1;
  } else {
    next.rightVotes += 1;
  }

  return {
    success: true,
    tieBreaker: next,
  };
}

export function resolveTieBreaker({
  tieBreaker,
}) {
  if (!tieBreaker) {
    return {
      success: false,
      error: "Tie-breaker not found.",
    };
  }

  if (
    tieBreaker.leftVotes ===
    tieBreaker.rightVotes
  ) {
    return {
      success: false,

      status: "tie",

      requiresNextStage: true,

      tieBreaker,
    };
  }

  const winner =
    tieBreaker.leftVotes >
    tieBreaker.rightVotes
      ? "left"
      : "right";

  const next = clone(tieBreaker);

  next.status = "completed";
  next.winner = winner;

  return {
    success: true,

    status: "winner-decided",

    winner,

    tieBreaker: next,
  };
}

/*
  Emergency fallback.

  This should be extremely rare.
*/
export function resolveFinalTieByRandom() {
  const winner =
    Math.random() < 0.5
      ? "left"
      : "right";

  return {
    success: true,

    status: "random-decider",

    winner,
  };
}