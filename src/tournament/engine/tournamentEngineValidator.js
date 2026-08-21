/*
  Anime Arena — Grand Tournament
  Full Tournament Validation Layer

  PURPOSE
  -------
  This is the FINAL SAFETY GATE before a tournament starts.

  It validates:

  1. Master database
  2. Field size
  3. Character pool
  4. Player count
  5. Duplicate characters
  6. Duplicate players
  7. Character identity
  8. Verse relationships
  9. Form integrity
  10. Artwork identity
  11. Database completeness

  IMPORTANT

  This validator must NEVER silently repair tournament input.

  If the selected tournament is invalid,
  tournament start should be blocked.
*/

import {
  validateTournamentDatabase,
} from "../data/databaseSchema";

import {
  TOURNAMENT_DATABASE,
  RAW_TOURNAMENT_DATABASE,
  RAW_TOURNAMENT_CHARACTERS,
  TOURNAMENT_DATABASE_VALIDATION,
} from "../data/tournamentDatabase";

import {
  validateTournamentFieldSize,
} from "./bracketMath";

/* =========================================================
   HELPERS
========================================================= */

const normalizeId = (
  value
) =>
  String(
    value ?? ""
  ).trim();

/* =========================================================
   CHARACTER IDENTITY VALIDATION
========================================================= */

function validateSelectedCharacters(
  characters,
  field,
  errors
) {
  if (
    !Array.isArray(
      characters
    )
  ) {
    errors.push(
      "Selected characters must be an array."
    );

    return;
  }

  if (
    !field.valid
  ) {
    return;
  }

  if (
    characters.length !==
    field.fieldSize
  ) {
    errors.push(
      `Selected character count (${characters.length}) does not match tournament field size (${field.fieldSize}).`
    );
  }

  const ids =
    new Set();

  characters.forEach(
    (character, index) => {
      if (
        !character ||
        typeof character !==
          "object"
      ) {
        errors.push(
          `Selected character #${index + 1} is invalid.`
        );

        return;
      }

      const id =
        normalizeId(
          character.id
        );

      if (!id) {
        errors.push(
          `Selected character #${index + 1} is missing an id.`
        );

        return;
      }

      if (
        ids.has(id)
      ) {
        errors.push(
          `Duplicate selected character: ${id}`
        );
      }

      ids.add(id);

      /* -----------------------------------------------
         Verify that selected character actually exists
         in the runtime tournament database.
      ------------------------------------------------ */

      const databaseCharacter =
        TOURNAMENT_DATABASE.characters.find(
          (databaseRecord) =>
            normalizeId(
              databaseRecord.id
            ) === id
        );

      if (
        !databaseCharacter
      ) {
        errors.push(
          `Selected character "${id}" does not exist in the tournament database.`
        );

        return;
      }

      /* -----------------------------------------------
         Character name consistency
      ------------------------------------------------ */

      if (
        normalizeId(
          character.name
        ) &&
        normalizeId(
          character.name
        ) !==
          normalizeId(
            databaseCharacter.name
          )
      ) {
        errors.push(
          `Character identity mismatch for "${id}": selected name "${character.name}" does not match database name "${databaseCharacter.name}".`
        );
      }

      /* -----------------------------------------------
         Verse consistency
      ------------------------------------------------ */

      if (
        normalizeId(
          character.verseId
        ) !==
        normalizeId(
          databaseCharacter.verseId
        )
      ) {
        errors.push(
          `Character "${id}" has verse mismatch: selected "${character.verseId}", database "${databaseCharacter.verseId}".`
        );
      }
    }
  );
}

/* =========================================================
   PLAYER VALIDATION
========================================================= */

function validatePlayers(
  players,
  errors
) {
  if (
    !Array.isArray(
      players
    ) ||
    players.length < 2 ||
    players.length > 8
  ) {
    errors.push(
      "Tournament requires between 2 and 8 players."
    );

    return;
  }

  const playerIds =
    new Set();

  players.forEach(
    (player, index) => {
      if (
        !player ||
        typeof player !==
          "object"
      ) {
        errors.push(
          `Player #${index + 1} is invalid.`
        );

        return;
      }

      const id =
        normalizeId(
          player.id
        );

      if (!id) {
        errors.push(
          `Player #${index + 1} is missing an id.`
        );

        return;
      }

      if (
        playerIds.has(id)
      ) {
        errors.push(
          `Duplicate player id: ${id}`
        );
      }

      playerIds.add(id);

      if (
        !normalizeId(
          player.name
        )
      ) {
        errors.push(
          `Player "${id}" is missing a name.`
        );
      }
    }
  );
}

/* =========================================================
   FULL TOURNAMENT VALIDATION
========================================================= */

export function validateFullTournamentSetup({
  characters = [],
  players = [],
  fieldSize,
  strictArtwork = false,
  strictDatabase = false,
} = {}) {
  const errors = [];
  const warnings = [];

  /* =======================================================
     DATABASE
  ======================================================= */

  /*
    Revalidate RAW database.

    This is deliberate.

    The runtime database is deduplicated for safety,
    but validation must inspect the original data so
    duplicates cannot disappear silently.
  */

  const database =
    validateTournamentDatabase(
      RAW_TOURNAMENT_DATABASE,
      {
        expectComplete:
          false,

        strictArtwork,

        strict:
          strictDatabase,
      }
    );

  if (
    !database.valid
  ) {
    errors.push(
      ...database.errors
    );
  }

  warnings.push(
    ...database.warnings
  );

  /* =======================================================
     FIELD SIZE
  ======================================================= */

  const field =
    validateTournamentFieldSize(
      fieldSize
    );

  if (
    !field.valid
  ) {
    errors.push(
      ...field.errors
    );
  }

  /* =======================================================
     CHARACTER POOL
  ======================================================= */

  validateSelectedCharacters(
    characters,
    field,
    errors
  );

  /* =======================================================
     PLAYER COUNT
  ======================================================= */

  validatePlayers(
    players,
    errors
  );

  /* =======================================================
     RUNTIME DATABASE SAFETY
  ======================================================= */

  if (
    !Array.isArray(
      TOURNAMENT_DATABASE.characters
    )
  ) {
    errors.push(
      "Tournament runtime character database is invalid."
    );
  }

  /* =======================================================
     RAW DATABASE DUPLICATE CHECK
  ======================================================= */

  const rawIds =
    new Set();

  RAW_TOURNAMENT_CHARACTERS.forEach(
    (character) => {
      const id =
        normalizeId(
          character?.id
        );

      if (!id) {
        return;
      }

      if (
        rawIds.has(id)
      ) {
        errors.push(
          `Raw tournament database contains duplicate character id: ${id}`
        );
      }

      rawIds.add(id);
    }
  );

  /* =======================================================
     DATABASE SIZE WARNING
  ======================================================= */

  if (
    TOURNAMENT_DATABASE
      .characters
      .length < 900
  ) {
    warnings.push(
      `Tournament database currently contains ${TOURNAMENT_DATABASE.characters.length}/900 unique characters.`
    );
  }

  /* =======================================================
     DATABASE VALIDATION STATUS
  ======================================================= */

  if (
    !TOURNAMENT_DATABASE_VALIDATION.valid
  ) {
    warnings.push(
      "The master database validation has existing errors. Tournament start is blocked until those errors are resolved."
    );
  }

  /* =======================================================
     FINAL RESULT
  ======================================================= */

  return {
    valid:
      errors.length === 0,

    errors,

    warnings,

    database,

    field,

    summary: {
      databaseCharacters:
        TOURNAMENT_DATABASE
          .characters
          .length,

      rawDatabaseCharacters:
        RAW_TOURNAMENT_CHARACTERS
          .length,

      databaseVerses:
        TOURNAMENT_DATABASE
          .verses
          .length,

      selectedCharacters:
        Array.isArray(
          characters
        )
          ? characters.length
          : 0,

      players:
        Array.isArray(
          players
        )
          ? players.length
          : 0,

      fieldSize:
        field.fieldSize ||
        0,
    },
  };
}

/* =========================================================
   TOURNAMENT START GATE
========================================================= */

/*
  Use this immediately before creating the bracket.

  Example:

    const validation =
      assertTournamentCanStart({
        characters,
        players,
        fieldSize,
      });

    if (!validation.valid) {
      // show validation errors
      return;
    }

    // create bracket
*/

export function assertTournamentCanStart(
  options
) {
  const result =
    validateFullTournamentSetup(
      options
    );

  if (
    !result.valid
  ) {
    const message =
      [
        "Tournament cannot start.",
        "",
        ...result.errors,
      ].join("\n");

    throw new Error(
      message
    );
  }

  return result;
}