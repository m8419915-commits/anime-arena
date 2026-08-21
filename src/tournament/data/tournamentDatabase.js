/*
  Anime Arena — Grand Tournament
  Master Tournament Database Loader

  RESPONSIBILITIES
  ----------------
  - Automatically load every character module
  - Preserve raw database for validation
  - Detect duplicate character IDs BEFORE deduplication
  - Build a safe unique runtime database
  - Expose lookup helpers
  - Expose database statistics
*/

import {
  validateTournamentDatabase,
} from "./databaseSchema";

import {
  TOURNAMENT_VERSES as VERSE_CATALOG,
} from "./tournamentVerses";

/* =========================================================
   AUTOMATIC CHARACTER MODULE LOADER
========================================================= */

/*
  Every .js file inside:

  src/tournament/data/characters/

  is automatically included.

  Example:

  characters/
    naruto.js
    onePiece.js
    bleach.js
    dragonBall.js

  No manual master import is required.
*/

const CHARACTER_MODULES =
  import.meta.glob(
    "./characters/*.js",
    {
      eager: true,
    }
  );

/* =========================================================
   MODULE EXTRACTION
========================================================= */

function getCharacterArrayFromModule(
  moduleObject
) {
  if (
    !moduleObject ||
    typeof moduleObject !==
      "object"
  ) {
    return [];
  }

  const characters = [];

  Object.values(
    moduleObject
  ).forEach(
    (exportedValue) => {
      if (
        Array.isArray(
          exportedValue
        )
      ) {
        characters.push(
          ...exportedValue
        );
      }
    }
  );

  return characters.filter(
    (character) =>
      character &&
      typeof character ===
        "object" &&
      character.id &&
      character.name
  );
}

/* =========================================================
   LOAD MODULES
========================================================= */

export const LOADED_CHARACTER_MODULES =
  Object.entries(
    CHARACTER_MODULES
  ).map(
    ([filePath, moduleObject]) => ({
      filePath,

      characters:
        getCharacterArrayFromModule(
          moduleObject
        ),
    })
  );

/* =========================================================
   RAW CHARACTER DATABASE
========================================================= */

/*
  IMPORTANT:

  NEVER deduplicate before validation.

  Otherwise:

    Naruto #1
    Naruto #2 (same id)

  becomes:

    Naruto #1

  and the validator never discovers the corruption.

  RAW database therefore preserves everything exactly as
  loaded.
*/

export const RAW_TOURNAMENT_CHARACTERS =
  LOADED_CHARACTER_MODULES.flatMap(
    ({
      characters,
    }) =>
      characters
  );

/* =========================================================
   RAW DATABASE
========================================================= */

export const RAW_TOURNAMENT_DATABASE = {
  verses:
    VERSE_CATALOG,

  characters:
    RAW_TOURNAMENT_CHARACTERS,
};

/* =========================================================
   VALIDATE RAW DATABASE
========================================================= */

export const TOURNAMENT_DATABASE_VALIDATION =
  validateTournamentDatabase(
    RAW_TOURNAMENT_DATABASE,
    {
      expectComplete: false,
      strictArtwork: false,
      strict: false,
    }
  );

/* =========================================================
   DUPLICATE ANALYSIS
========================================================= */

const UNIQUE_CHARACTER_MAP =
  new Map();

const DUPLICATE_CHARACTER_IDS =
  new Set();

RAW_TOURNAMENT_CHARACTERS.forEach(
  (character) => {
    const id =
      String(
        character.id
      );

    if (
      UNIQUE_CHARACTER_MAP.has(
        id
      )
    ) {
      DUPLICATE_CHARACTER_IDS.add(
        id
      );

      return;
    }

    UNIQUE_CHARACTER_MAP.set(
      id,
      character
    );
  }
);

/* =========================================================
   SAFE UNIQUE RUNTIME DATABASE
========================================================= */

export const UNIQUE_TOURNAMENT_CHARACTERS =
  Array.from(
    UNIQUE_CHARACTER_MAP.values()
  );

/*
  This is the database the game itself should use.

  It contains only one copy of each character ID.

  Validation, however, operates on the RAW database above.
*/

export const TOURNAMENT_CHARACTERS =
  UNIQUE_TOURNAMENT_CHARACTERS;

/* =========================================================
   MASTER DATABASE
========================================================= */

export const TOURNAMENT_DATABASE = {
  verses:
    VERSE_CATALOG,

  characters:
    UNIQUE_TOURNAMENT_CHARACTERS,
};

/* =========================================================
   CHARACTER LOOKUP
========================================================= */

export function getTournamentCharacter(
  characterId
) {
  if (
    characterId ===
      undefined ||
    characterId === null
  ) {
    return null;
  }

  const normalizedId =
    String(
      characterId
    );

  return (
    UNIQUE_TOURNAMENT_CHARACTERS.find(
      (character) =>
        String(
          character.id
        ) === normalizedId
    ) || null
  );
}

/* =========================================================
   ALL CHARACTERS
========================================================= */

export function getAllTournamentCharacters() {
  return [
    ...UNIQUE_TOURNAMENT_CHARACTERS,
  ];
}

/* =========================================================
   CHARACTERS BY VERSE
========================================================= */

export function getTournamentCharactersByVerse(
  verseId
) {
  if (!verseId) {
    return [];
  }

  const normalizedVerseId =
    String(
      verseId
    );

  return UNIQUE_TOURNAMENT_CHARACTERS.filter(
    (character) =>
      String(
        character.verseId
      ) === normalizedVerseId
  );
}

/* =========================================================
   FORM LOOKUP
========================================================= */

export function getTournamentForm(
  character,
  formId
) {
  if (
    !character ||
    !Array.isArray(
      character.forms
    )
  ) {
    return null;
  }

  if (
    formId === undefined ||
    formId === null
  ) {
    return null;
  }

  const normalizedFormId =
    String(
      formId
    );

  return (
    character.forms.find(
      (form) =>
        String(
          form.id
        ) === normalizedFormId
    ) || null
  );
}

/* =========================================================
   ELIGIBLE FORMS
========================================================= */

export function getEligibleTournamentForms(
  character
) {
  if (
    !character ||
    !Array.isArray(
      character.forms
    )
  ) {
    return [];
  }

  return character.forms.filter(
    (form) =>
      form?.tournamentEligible !==
      false
  );
}

/* =========================================================
   DATABASE STATS
========================================================= */

export function getTournamentDatabaseStats() {
  const rawCharacters =
    RAW_TOURNAMENT_CHARACTERS;

  const uniqueCharacters =
    UNIQUE_TOURNAMENT_CHARACTERS;

  const totalForms =
    uniqueCharacters.reduce(
      (
        total,
        character
      ) =>
        total +
        (
          Array.isArray(
            character.forms
          )
            ? character.forms.length
            : 0
        ),
      0
    );

  const tournamentEligibleForms =
    uniqueCharacters.reduce(
      (
        total,
        character
      ) =>
        total +
        (
          Array.isArray(
            character.forms
          )
            ? character.forms.filter(
                (form) =>
                  form.tournamentEligible !==
                  false
              ).length
            : 0
        ),
      0
    );

  const charactersByVerse =
    {};

  uniqueCharacters.forEach(
    (character) => {
      const verse =
        character.verseId ||
        "unknown";

      charactersByVerse[
        verse
      ] =
        (
          charactersByVerse[
            verse
          ] || 0
        ) + 1;
    }
  );

  return {
    rawCharacters:
      rawCharacters.length,

    totalCharacters:
      uniqueCharacters.length,

    duplicateCharacterIds:
      Array.from(
        DUPLICATE_CHARACTER_IDS
      ),

    duplicateCharacterCount:
      DUPLICATE_CHARACTER_IDS.size,

    totalForms,

    tournamentEligibleForms,

    totalVerses:
      Array.isArray(
        VERSE_CATALOG
      )
        ? VERSE_CATALOG.length
        : Object.keys(
            VERSE_CATALOG || {}
          ).length,

    charactersByVerse,

    loadedCharacterModules:
      LOADED_CHARACTER_MODULES.map(
        (module) => ({
          file:
            module.filePath,

          characters:
            module.characters.length,
        })
      ),

    validation:
      TOURNAMENT_DATABASE_VALIDATION,
  };
}

/* =========================================================
   DATABASE CHECK
========================================================= */

const DATABASE_STATS =
  getTournamentDatabaseStats();

console.log(
  "🏆 GRAND TOURNAMENT DATABASE CHECK",
  DATABASE_STATS
);

/* =========================================================
   HARD WARNINGS
========================================================= */

if (
  DATABASE_STATS.rawCharacters ===
  0
) {
  console.error(
    "❌ TOURNAMENT DATABASE IS EMPTY."
  );
}

if (
  DATABASE_STATS.duplicateCharacterCount >
  0
) {
  console.error(
    "❌ DUPLICATE CHARACTER IDS DETECTED:",
    DATABASE_STATS
      .duplicateCharacterIds
  );
}

if (
  DATABASE_STATS.totalCharacters <
  900
) {
  console.warn(
    `⚠️ TOURNAMENT DATABASE ONLY LOADED ${DATABASE_STATS.totalCharacters} UNIQUE CHARACTERS.`
  );
}

if (
  DATABASE_STATS.totalCharacters >=
  900
) {
  console.log(
    `✅ FULL TOURNAMENT CHARACTER DATABASE LOADED: ${DATABASE_STATS.totalCharacters}`
  );
}

if (
  !TOURNAMENT_DATABASE_VALIDATION.valid
) {
  console.error(
    "❌ TOURNAMENT DATABASE VALIDATION FAILED.",
    TOURNAMENT_DATABASE_VALIDATION.errors
  );
}

if (
  TOURNAMENT_DATABASE_VALIDATION
    .warnings.length
) {
  console.warn(
    "⚠️ TOURNAMENT DATABASE WARNINGS:",
    TOURNAMENT_DATABASE_VALIDATION.warnings
  );
}