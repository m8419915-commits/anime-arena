/*
  Anime Arena — Grand Tournament
  Local Tournament Save System

  Uses localStorage only.
  No paid database required.
*/

const STORAGE_KEY =
  "anime-arena-grand-tournament";

const SAVED_EVENTS_KEY =
  "anime-arena-grand-tournament-history";

const clone = (value) =>
  JSON.parse(JSON.stringify(value));

export function saveTournament(
  tournament
) {
  if (!tournament?.id) {
    return {
      success: false,
      error:
        "Cannot save tournament without an id.",
    };
  }

  try {
    const payload = {
      savedAt:
        new Date().toISOString(),

      tournament:
        clone(tournament),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(payload)
    );

    return {
      success: true,
      savedAt: payload.savedAt,
    };
  } catch (error) {
    return {
      success: false,
      error:
        "Unable to save tournament locally.",
    };
  }
}

export function loadTournament() {
  try {
    const raw =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!raw) {
      return {
        success: true,
        tournament: null,
      };
    }

    const payload =
      JSON.parse(raw);

    return {
      success: true,

      tournament:
        payload.tournament || null,

      savedAt:
        payload.savedAt || null,
    };
  } catch {
    return {
      success: false,
      error:
        "Saved tournament data is corrupted.",
    };
  }
}

export function deleteActiveTournament() {
  try {
    localStorage.removeItem(
      STORAGE_KEY
    );

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error:
        "Unable to delete tournament save.",
    };
  }
}

/*
  Completed tournaments are stored separately
  as tournament history.
*/

export function archiveTournament(
  tournament
) {
  if (!tournament?.id) {
    return {
      success: false,
      error:
        "Cannot archive invalid tournament.",
    };
  }

  try {
    const existingRaw =
      localStorage.getItem(
        SAVED_EVENTS_KEY
      );

    const existing =
      existingRaw
        ? JSON.parse(existingRaw)
        : [];

    const filtered =
      existing.filter(
        (event) =>
          event.id !== tournament.id
      );

    filtered.unshift({
      ...clone(tournament),

      archivedAt:
        new Date().toISOString(),
    });

    localStorage.setItem(
      SAVED_EVENTS_KEY,
      JSON.stringify(filtered)
    );

    return {
      success: true,
      totalArchived:
        filtered.length,
    };
  } catch {
    return {
      success: false,
      error:
        "Unable to archive tournament.",
    };
  }
}

export function loadTournamentHistory() {
  try {
    const raw =
      localStorage.getItem(
        SAVED_EVENTS_KEY
      );

    if (!raw) {
      return {
        success: true,
        tournaments: [],
      };
    }

    return {
      success: true,

      tournaments:
        JSON.parse(raw),
    };
  } catch {
    return {
      success: false,
      error:
        "Tournament history could not be loaded.",
    };
  }
}

export function deleteTournamentHistory() {
  try {
    localStorage.removeItem(
      SAVED_EVENTS_KEY
    );

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error:
        "Unable to clear tournament history.",
    };
  }
}