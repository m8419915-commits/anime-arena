/*
  Anime Arena — Grand Tournament
  Tournament Database Engine API

  This file is the ENGINE-FACING API.

  UI/game systems should preferably import database helpers
  from here instead of directly reaching into data files.
*/

import {
  getTournamentCharacter as getCharacterFromDatabase,

  getAllTournamentCharacters as getAllCharactersFromDatabase,

  getTournamentCharactersByVerse as getCharactersByVerseFromDatabase,

  getTournamentForm as getFormFromDatabase,

  getEligibleTournamentForms as getEligibleFormsFromDatabase,

  getTournamentDatabaseStats,

  RAW_TOURNAMENT_CHARACTERS,

  TOURNAMENT_CHARACTERS,

  TOURNAMENT_DATABASE,

  TOURNAMENT_DATABASE_VALIDATION,
} from "../data/tournamentDatabase";

/* =========================================================
   CHARACTER
========================================================= */

export function getTournamentCharacter(
  characterId
) {
  return getCharacterFromDatabase(
    characterId
  );
}

/* =========================================================
   ALL CHARACTERS
========================================================= */

export function getAllTournamentCharacters() {
  return getAllCharactersFromDatabase();
}

/* =========================================================
   RAW CHARACTERS
========================================================= */

/*
  Normally the game should NOT use this.

  This exists for:
  - diagnostics
  - validation dashboards
  - developer tools
  - duplicate inspection
*/

export function getRawTournamentCharacters() {
  return [
    ...RAW_TOURNAMENT_CHARACTERS,
  ];
}

/* =========================================================
   CHARACTERS BY VERSE
========================================================= */

export function getTournamentCharactersByVerse(
  verseId
) {
  return getCharactersByVerseFromDatabase(
    verseId
  );
}

/* =========================================================
   FORM
========================================================= */

export function getTournamentForm(
  character,
  formId
) {
  return getFormFromDatabase(
    character,
    formId
  );
}

/* =========================================================
   ELIGIBLE FORMS
========================================================= */

export function getEligibleTournamentForms(
  character
) {
  return getEligibleFormsFromDatabase(
    character
  );
}

/* =========================================================
   DATABASE
========================================================= */

export function getTournamentDatabase() {
  return TOURNAMENT_DATABASE;
}

/* =========================================================
   VALIDATION
========================================================= */

export function getTournamentDatabaseValidation() {
  return TOURNAMENT_DATABASE_VALIDATION;
}

/* =========================================================
   STATS
========================================================= */

export {
  getTournamentDatabaseStats,
};

/* =========================================================
   DIRECT EXPORTS
========================================================= */

export {
  TOURNAMENT_CHARACTERS,
  TOURNAMENT_DATABASE,
  TOURNAMENT_DATABASE_VALIDATION,
};