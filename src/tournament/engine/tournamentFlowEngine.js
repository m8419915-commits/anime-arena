import {
  createGrandTournament,
} from "./eventFactory";

import {
  initializeGrandTournament,
} from "./progressionEngine";

import {
  finalizeDistribution,
} from "./distributionFinalizer";

import {
  validateDistribution,
} from "./distributionValidator";

import {
  getTournamentProgress,
} from "./progressionEngine";


/*
  Grand Tournament Flow Engine

  This file is the bridge between:

  Distribution
      ↓
  Final Rosters
      ↓
  Tournament Event
      ↓
  Bracket Progression

  It does NOT modify the live app.
*/


export function validateFinalRosters({
  players = [],
  totalCharacters = 930,
}) {

  if (!Array.isArray(players)) {
    return {
      success: false,
      errors: [
        "Player roster data is missing.",
      ],
    };
  }

  if (!players.length) {
    return {
      success: false,
      errors: [
        "No players were found.",
      ],
    };
  }

  const ownedCharacters = players.flatMap(
    (player) =>
      Array.isArray(player.roster)
        ? player.roster
        : []
  );

  const characterIds =
    ownedCharacters
      .map(
        (character) =>
          character?.id
      )
      .filter(Boolean);

  const uniqueIds =
    new Set(characterIds);

  const errors = [];

  if (
    characterIds.length !==
    uniqueIds.size
  ) {
    errors.push(
      "A character appears in more than one roster."
    );
  }

  if (
    characterIds.length === 0
  ) {
    errors.push(
      "No characters were assigned."
    );
  }

  if (
    characterIds.length >
    totalCharacters
  ) {
    errors.push(
      "Roster count exceeds the tournament character pool."
    );
  }

  return {
    success:
      errors.length === 0,

    errors,

    totalAssigned:
      characterIds.length,

    uniqueCharacters:
      uniqueIds.size,
  };
}


/*
  Collects all characters owned by players.

  The tournament engine needs the actual
  character records, not just player names.
*/
export function collectTournamentCharacters({
  players = [],
}) {

  const characters = [];

  players.forEach(
    (player) => {

      if (
        !Array.isArray(
          player.roster
        )
      ) {
        return;
      }

      player.roster.forEach(
        (character) => {

          if (!character?.id) {
            return;
          }

          characters.push(
            character
          );
        }
      );
    }
  );

  return characters;
}


/*
  Creates the tournament from the
  finalized distribution.
*/
export function buildTournamentFromDistribution({
  players = [],
  tournamentName = "",
  formRulesetId = "peak",
  seedingMode = "ranked",
  customSeedOrder = [],
  battleMode = "standard",
}) {

  const validation =
    validateFinalRosters({
      players,
    });

  if (!validation.success) {
    return {
      success: false,
      errors:
        validation.errors,
    };
  }

  const characters =
    collectTournamentCharacters({
      players,
    });

  const event =
    createGrandTournament({
      name:
        tournamentName,

      characters,

      formRulesetId,

      selectedFormIds: {},

      seedingMode,

      customSeedOrder,

      battleMode,
    });

  if (!event.success) {
    return event;
  }

  const initialized =
    initializeGrandTournament(
      event.tournament
    );

  return {
    success: true,

    tournament:
      initialized,

    players,

    source: {
      type: "distribution",
      totalCharacters:
        characters.length,
    },

    progress:
      getTournamentProgress(
        initialized
      ),
  };
}


/*
  Convenience helper for the UI.
*/
export function getTournamentStartSummary(
  tournament
) {

  if (!tournament) {
    return {
      fieldSize: 0,
      totalMatches: 0,
      readyMatches: 0,
      completedMatches: 0,
      percentage: 0,
    };
  }

  const progress =
    getTournamentProgress(
      tournament
    );

  const allMatches = [
    ...tournament.playInMatches,
    ...tournament.mainBracket.rounds.flatMap(
      (round) =>
        round.matches
    ),
  ];

  return {
    fieldSize:
      tournament.config
        ?.fieldSize || 0,

    totalMatches:
      progress.totalMatches,

    readyMatches:
      allMatches.filter(
        (match) =>
          match.status === "ready"
      ).length,

    completedMatches:
      progress.completedMatches,

    percentage:
      progress.percentage,
  };
}