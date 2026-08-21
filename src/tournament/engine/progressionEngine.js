import {
  runTournamentBattle,
} from "./tournamentBattleEngine";

const cloneTournament = (tournament) =>
  JSON.parse(
    JSON.stringify(tournament)
  );

const isCharacterReference = (entry) =>
  entry?.type === "character" &&
  Boolean(entry.characterId);

function getAllMainMatches(tournament) {
  return tournament.mainBracket.rounds.flatMap(
    (round) => round.matches
  );
}

function getMatchById(
  tournament,
  matchId
) {
  const playInMatch =
    tournament.playInMatches.find(
      (match) => match.id === matchId
    );

  if (playInMatch) {
    return playInMatch;
  }

  return (
    getAllMainMatches(tournament).find(
      (match) => match.id === matchId
    ) || null
  );
}

function getForm(
  character,
  formId
) {
  return (
    character?.forms?.find(
      (form) => form.id === formId
    ) || null
  );
}

function createWinnerReference(
  reference
) {
  return {
    type: "character",
    characterId: reference.characterId,
    formId: reference.formId,
  };
}

function replaceWinnerReferences(
  tournament,
  completedMatchId,
  winnerReference
) {
  // Update main bracket slot entries if a play-in match completed
  if (tournament.mainBracket?.slots) {
    tournament.mainBracket.slots.forEach((slot) => {
      if (
        slot.entry?.type === "winner-of-match" &&
        slot.entry.sourceMatchId === completedMatchId
      ) {
        slot.entry = createWinnerReference(winnerReference);
      }
    });
  }

  // Update match entries in main bracket rounds
  tournament.mainBracket.rounds.forEach(
    (round) => {
      round.matches.forEach((match) => {
        ["left", "right"].forEach((side) => {
          if (
            match[side]?.type ===
              "winner-of-match" &&
            match[side].sourceMatchId ===
              completedMatchId
          ) {
            match[side] =
              createWinnerReference(
                winnerReference
              );
          }
        });
      });
    }
  );
}

function arePlayInsComplete(tournament) {
  return tournament.playInMatches.every(
    (match) =>
      match.status === "completed"
  );
}

function unlockAvailableMainMatches(
  tournament
) {
  if (
    tournament.playInMatches.length > 0 &&
    !arePlayInsComplete(tournament)
  ) {
    return;
  }

  tournament.mainBracket.rounds.forEach(
    (round) => {
      round.matches.forEach((match) => {
        if (
          match.status !== "locked"
        ) {
          return;
        }

        if (
          isCharacterReference(match.left) &&
          isCharacterReference(match.right)
        ) {
          match.status = "ready";
        }
      });
    }
  );
}

function isGrandFinal(
  tournament,
  matchId
) {
  const rounds =
    tournament.mainBracket.rounds;

  const finalRound =
    rounds[rounds.length - 1];

  return (
    finalRound?.matches?.[0]?.id ===
    matchId
  );
}

export function initializeGrandTournament(
  tournament
) {
  const nextTournament =
    cloneTournament(tournament);

  if (
    nextTournament.playInMatches.length > 0
  ) {
    nextTournament.playInMatches.forEach(
      (match) => {
        match.status = "ready";
      }
    );
  } else {
    unlockAvailableMainMatches(
      nextTournament
    );
  }

  return nextTournament;
}

export function getReadyTournamentMatches(
  tournament
) {
  if (!tournament) {
    return [];
  }

  return [
    ...tournament.playInMatches,
    ...getAllMainMatches(tournament),
  ].filter(
    (match) =>
      match.status === "ready"
  );
}

export function getTournamentProgress(
  tournament
) {
  if (!tournament) {
    return {
      completedMatches: 0,
      totalMatches: 0,
      percentage: 0,
    };
  }

  const allMatches = [
    ...tournament.playInMatches,
    ...getAllMainMatches(tournament),
  ];

  const completedMatches =
    allMatches.filter(
      (match) =>
        match.status === "completed"
    ).length;

  const totalMatches =
    tournament.format.totalMatchCount;

  return {
    completedMatches,
    totalMatches,

    percentage:
      totalMatches > 0
        ? Math.round(
            (completedMatches /
              totalMatches) *
              100
          )
        : 0,
  };
}

export function completeTournamentMatch({
  tournament,
  matchId,
  getCharacterById,
}) {
  if (
    !tournament ||
    typeof getCharacterById !== "function"
  ) {
    return {
      success: false,
      error:
        "Tournament and character lookup are required.",
    };
  }

  const nextTournament =
    cloneTournament(tournament);

  const match = getMatchById(
    nextTournament,
    matchId
  );

  if (!match) {
    return {
      success: false,
      error: `Tournament match not found: ${matchId}`,
    };
  }

  if (match.status !== "ready") {
    return {
      success: false,
      error:
        "This tournament match is not ready yet.",
    };
  }

  if (
    !isCharacterReference(match.left) ||
    !isCharacterReference(match.right)
  ) {
    return {
      success: false,
      error:
        "Both tournament entrants must be known before this match can begin.",
    };
  }

  const leftCharacter =
    getCharacterById(
      match.left.characterId
    );

  const rightCharacter =
    getCharacterById(
      match.right.characterId
    );

  const leftForm = getForm(
    leftCharacter,
    match.left.formId
  );

  const rightForm = getForm(
    rightCharacter,
    match.right.formId
  );

  const battle =
    runTournamentBattle({
      leftCharacter,
      rightCharacter,
      leftForm,
      rightForm,

      battleMode:
        nextTournament.config
          .battleMode,
    });

  if (!battle.success) {
    return battle;
  }

  const winnerReference =
    battle.winner === "left"
      ? createWinnerReference(
          match.left
        )
      : createWinnerReference(
          match.right
        );

  const loserReference =
    battle.winner === "left"
      ? createWinnerReference(
          match.right
        )
      : createWinnerReference(
          match.left
        );

  match.status = "completed";
  match.winner = winnerReference;

  match.result = {
    winnerId:
      winnerReference.characterId,

    winnerFormId:
      winnerReference.formId,

    loserId:
      loserReference.characterId,

    loserFormId:
      loserReference.formId,

    leftScore:
      battle.left.score,

    rightScore:
      battle.right.score,

    leftProbability:
      battle.left.probability,

    rightProbability:
      battle.right.probability,

    summary: battle.summary,

    statComparisons:
      battle.statComparisons,
  };

  nextTournament.matchHistory.push({
    matchId: match.id,
    roundId: match.roundId,
    roundName: match.roundName,

    winnerId:
      winnerReference.characterId,

    loserId:
      loserReference.characterId,

    completedAt:
      new Date().toISOString(),
  });

  nextTournament.eliminations.push({
    characterId:
      loserReference.characterId,

    eliminatedBy:
      winnerReference.characterId,

    matchId: match.id,
    roundId: match.roundId,
    roundName: match.roundName,
  });

  replaceWinnerReferences(
    nextTournament,
    match.id,
    winnerReference
  );

  if (
    isGrandFinal(
      nextTournament,
      match.id
    )
  ) {
    nextTournament.status =
      "completed";

    nextTournament.champion =
      winnerReference;
  } else {
    unlockAvailableMainMatches(
      nextTournament
    );
  }

  return {
    success: true,

    tournament: nextTournament,
    match,
    battle,
  };
}