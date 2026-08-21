import {
  TOURNAMENT_DATABASE_CONFIG,
  TOURNAMENT_STATUS,
} from "../data/tournamentConfig";

import {
  resolveTournamentForms,
} from "./formEngine";

import {
  createTournamentSeeding,
} from "./seedingEngine";

let eventCounter = 0;

function createEventId() {
  eventCounter += 1;

  return `grand-tournament-${Date.now()}-${eventCounter}`;
}

function createCharacterReference(
  character,
  formsByCharacterId
) {
  if (!character) {
    return null;
  }

  return {
    type: "character",
    characterId: character.id,
    formId:
      formsByCharacterId[
        character.id
      ]?.id || null,
  };
}

function createEntryReference(
  entry,
  formsByCharacterId
) {
  if (!entry) {
    return null;
  }

  if (entry.type === "character") {
    return createCharacterReference(
      entry.character,
      formsByCharacterId
    );
  }

  if (entry.type === "play-in-winner") {
    return {
      type: "winner-of-match",
      sourceMatchId:
        entry.sourceMatchId,
    };
  }

  return null;
}

function createPlayInMatches(
  playInMatches,
  formsByCharacterId
) {
  return playInMatches.map((match) => ({
    id: match.id,
    order: match.order,
    roundId: "opening-gate",
    roundName: match.roundName,
    status: "pending",

    left: createCharacterReference(
      match.left,
      formsByCharacterId
    ),

    right: createCharacterReference(
      match.right,
      formsByCharacterId
    ),

    winner: null,
    result: null,

    advancesAsSeed:
      match.advancesAsSeed,
  }));
}

function createMainBracketRounds(
  format,
  mainBracket,
  formsByCharacterId
) {
  return format.rounds.map(
    (round, roundIndex) => {
      const matches = [];

      for (
        let matchIndex = 0;
        matchIndex < round.matchCount;
        matchIndex += 1
      ) {
        const matchId =
          `${round.id}-match-${matchIndex + 1}`;

        let left = null;
        let right = null;

        /*
          Round one uses the actual seeded slots.
        */
        if (roundIndex === 0) {
          const leftSlot =
            mainBracket.slots[
              matchIndex * 2
            ];

          const rightSlot =
            mainBracket.slots[
              matchIndex * 2 + 1
            ];

          left = createEntryReference(
            leftSlot?.entry,
            formsByCharacterId
          );

          right = createEntryReference(
            rightSlot?.entry,
            formsByCharacterId
          );
        } else {
          /*
            Later rounds wait for two earlier winners.
          */
          const previousRound =
            format.rounds[
              roundIndex - 1
            ];

          left = {
            type: "winner-of-match",

            sourceMatchId:
              `${previousRound.id}-match-${matchIndex * 2 + 1}`,
          };

          right = {
            type: "winner-of-match",

            sourceMatchId:
              `${previousRound.id}-match-${matchIndex * 2 + 2}`,
          };
        }

        matches.push({
          id: matchId,

          roundId: round.id,
          roundNumber: round.number,
          roundName: round.name,
          order: matchIndex + 1,

          status: "locked",

          left,
          right,

          winner: null,
          result: null,
        });
      }

      return {
        ...round,
        matches,
      };
    }
  );
}

/*
  Creates a complete event but does not simulate
  a battle yet.
*/
export function createGrandTournament({
  id = null,
  name = "",
  characters = [],
  formRulesetId = "peak",
  selectedFormIds = {},
  seedingMode = "ranked",
  customSeedOrder = [],
  battleMode = "standard",
}) {
  const formResolution =
    resolveTournamentForms({
      characters,
      formRulesetId,
      selectedFormIds,
    });

  if (!formResolution.success) {
    return {
      success: false,
      errors: formResolution.errors,
    };
  }

  const seeding =
    createTournamentSeeding({
      characters,
      seedingMode,
      customSeedOrder,
    });

  if (!seeding.success) {
    return {
      success: false,
      errors:
        seeding.errors || [
          "Tournament seeding failed.",
        ],
    };
  }

  const formsByCharacterId =
    formResolution.formsByCharacterId;

  const playInMatches =
    createPlayInMatches(
      seeding.playInMatches,
      formsByCharacterId
    );

  const mainRounds =
    createMainBracketRounds(
      seeding.format,
      seeding.mainBracket,
      formsByCharacterId
    );

  const fieldSize =
    seeding.seededCharacters.length;

  return {
    success: true,

    tournament: {
      id: id || createEventId(),

      name:
        String(name).trim() ||
        `${fieldSize}-Character Grand Tournament`,

      status:
        TOURNAMENT_STATUS.active,

      createdAt:
        new Date().toISOString(),

      databaseVersion:
        TOURNAMENT_DATABASE_CONFIG.version,

      config: {
        fieldSize,
        formRulesetId,
        seedingMode,
        battleMode,
      },

      format: seeding.format,

      /*
        Only references are saved, not duplicate
        copies of every full character profile.
      */
      entrants:
        seeding.seededCharacters.map(
          (character) => ({
            characterId: character.id,
            seed:
              character.tournamentSeed,
            formId:
              formsByCharacterId[
                character.id
              ]?.id || null,
          })
        ),

      playInMatches,

      mainBracket: {
        size:
          seeding.mainBracket.size,

        slots:
          seeding.mainBracket.slots.map(
            (slot) => ({
              id: slot.id,
              slotIndex: slot.slotIndex,
              provisionalSeed:
                slot.provisionalSeed,

              entry:
                createEntryReference(
                  slot.entry,
                  formsByCharacterId
                ),
            })
          ),

        rounds: mainRounds,
      },

      matchHistory: [],
      eliminations: [],
      champion: null,
    },
  };
}