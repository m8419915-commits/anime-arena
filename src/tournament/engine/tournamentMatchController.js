import {
  completeTournamentMatch,
  getReadyTournamentMatches,
} from "./progressionEngine";

import {
  getTournamentCharacter,
} from "./tournamentDatabase";


/*
  Tournament Match Controller

  UI should talk to this file instead of
  directly manipulating tournament state.
*/


export function getNextReadyMatch(
  tournament
) {

  const matches =
    getReadyTournamentMatches(
      tournament
    );

  return matches[0] || null;
}


export function getReadyMatches(
  tournament
) {

  return getReadyTournamentMatches(
    tournament
  );
}


/*
  Executes one official match.

  Gemini/battle logic happens inside
  tournamentBattleEngine.

  The player-facing vote layer can
  later override the AI recommendation
  through matchVotingEngine.
*/
export function executeTournamentMatch({
  tournament,
  matchId,
}) {

  if (!tournament) {
    return {
      success: false,
      error:
        "Tournament is missing.",
    };
  }

  if (!matchId) {
    return {
      success: false,
      error:
        "Match ID is required.",
    };
  }

  return completeTournamentMatch({
    tournament,
    matchId,

    getCharacterById:
      getTournamentCharacter,
  });
}


/*
  Returns a clean UI snapshot of
  the current tournament state.
*/
export function getMatchControllerState(
  tournament
) {

  if (!tournament) {
    return {
      tournamentActive: false,
      nextMatch: null,
      readyMatches: [],
      champion: null,
    };
  }

  const readyMatches =
    getReadyMatches(
      tournament
    );

  return {
    tournamentActive:
      tournament.status ===
      "active",

    nextMatch:
      readyMatches[0] || null,

    readyMatches,

    champion:
      tournament.champion || null,
  };
}