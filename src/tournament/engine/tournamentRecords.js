/*
  Anime Arena — Grand Tournament
  Records & Statistics Engine
*/

function allMatches(tournament) {
  return [
    ...(tournament?.playInMatches || []),

    ...(tournament?.mainBracket?.rounds || [])
      .flatMap(
        (round) => round.matches
      ),
  ];
}

export function calculateTournamentRecords(
  tournament
) {
  if (!tournament) {
    return null;
  }

  const matches =
    allMatches(tournament);

  const completed =
    matches.filter(
      (match) =>
        match.status === "completed"
    );

  const wins = {};
  const losses = {};

  completed.forEach((match) => {
    const winner =
      match.result?.winnerId;

    const loser =
      match.result?.loserId;

    if (winner) {
      wins[winner] =
        (wins[winner] || 0) + 1;
    }

    if (loser) {
      losses[loser] =
        (losses[loser] || 0) + 1;
    }
  });

  const biggestUpsets =
    completed
      .filter(
        (match) =>
          match.result?.upset === true
      )
      .map((match) => ({
        matchId: match.id,

        winner:
          match.result.winnerId,

        loser:
          match.result.loserId,
      }));

  return {
    totalMatches:
      matches.length,

    completedMatches:
      completed.length,

    remainingMatches:
      matches.length -
      completed.length,

    wins,

    losses,

    biggestUpsets,

    champion:
      tournament.champion || null,
  };
}

export function getCharacterWinCount(
  tournament,
  characterId
) {
  const records =
    calculateTournamentRecords(
      tournament
    );

  return (
    records?.wins?.[characterId] || 0
  );
}

export function getCharacterLossCount(
  tournament,
  characterId
) {
  const records =
    calculateTournamentRecords(
      tournament
    );

  return (
    records?.losses?.[characterId] || 0
  );
}