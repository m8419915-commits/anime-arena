/*
  Anime Arena — Grand Tournament
  Database Utility Layer

  The tournament engine should use these helpers
  instead of directly manipulating the database.
*/

import {
  TOURNAMENT_DATABASE,
} from "./tournamentDatabase";

export function getAllTournamentCharacters() {
  return [
    ...TOURNAMENT_DATABASE.characters,
  ];
}

export function getAllTournamentVerses() {
  return [
    ...TOURNAMENT_DATABASE.verses,
  ];
}

export function getTournamentCharacterById(
  characterId
) {
  return (
    TOURNAMENT_DATABASE.characters.find(
      (character) =>
        character.id === characterId
    ) || null
  );
}

export function getTournamentVerseById(
  verseId
) {
  return (
    TOURNAMENT_DATABASE.verses.find(
      (verse) =>
        verse.id === verseId
    ) || null
  );
}

export function getCharactersForVerse(
  verseId
) {
  return TOURNAMENT_DATABASE.characters.filter(
    (character) =>
      character.verseId === verseId
  );
}

export function getCharacterCount() {
  return (
    TOURNAMENT_DATABASE.characters.length
  );
}

export function getVerseCount() {
  return (
    TOURNAMENT_DATABASE.verses.length
  );
}

export function searchTournamentCharacters(
  query
) {
  const normalized =
    String(query ?? "")
      .trim()
      .toLowerCase();

  if (!normalized) {
    return [];
  }

  return TOURNAMENT_DATABASE.characters.filter(
    (character) => {
      const name =
        character.name
          ?.toLowerCase() || "";

      const aliases =
        character.aliases
          ?.join(" ")
          .toLowerCase() || "";

      return (
        name.includes(normalized) ||
        aliases.includes(normalized)
      );
    }
  );
}