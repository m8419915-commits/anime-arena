/*
  Anime Arena — Grand Tournament
  Database Schema, Normalizer & Validator

  RESPONSIBILITIES
  ----------------
  - Normalize tournament characters/forms
  - Protect character ↔ form relationships
  - Validate stats
  - Validate IDs
  - Validate artwork identity
  - Detect duplicate IDs
  - Detect broken verse relationships
  - Detect malformed tournament records
  - Provide strict and development validation
*/

import {
  TOURNAMENT_DATABASE_CONFIG,
} from "./tournamentConfig";

/* =========================================================
   DEFAULTS
========================================================= */

const DEFAULT_FORM_STATS = {
  relativePower: 50,
  realPower: 50,
  hax: 20,
  speed: 50,
  durability: 50,
  intelligence: 50,
  attack: 50,
  defense: 50,
  stamina: 60,
  versatility: 50,
};

const STAT_KEYS = Object.keys(
  DEFAULT_FORM_STATS
);

const VALID_TIERS = new Set([
  "standard",
  "advanced",
  "legendary",
  "mythic",
]);

const VALID_ARTWORK_KINDS = new Set([
  "card",
  "portrait",
  "battle",
]);

const VALID_ARTWORK_SOURCES = new Set([
  "local",
  "remote",
  "generated",
  "fallback",
  "unknown",
]);

/* =========================================================
   BASIC HELPERS
========================================================= */

export const text = (value) =>
  String(value ?? "").trim();

export const normalizeId = (value) =>
  text(value);

export const number = (
  value,
  fallback = 0
) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
};

export const clamp = (
  value,
  min = 0,
  max = 100
) => {
  const parsed = number(
    value,
    min
  );

  return Math.min(
    max,
    Math.max(min, parsed)
  );
};

const cleanArray = (value) =>
  Array.isArray(value)
    ? value
        .map(text)
        .filter(Boolean)
    : [];

export const createSlug = (value) =>
  text(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* =========================================================
   ARTWORK IDENTITY
========================================================= */

/*
  IMPORTANT

  An image URL alone does NOT prove that the image belongs
  to the correct character.

  Therefore tournament artwork can carry identity metadata:

  artwork: {
    card: "...",
    portrait: "...",
    battle: "...",

    identity: {
      characterId: "naruto-uzumaki",
      formId: "naruto-uzumaki-six-paths",
      verified: true,
      source: "remote"
    }
  }

  The validator can then verify that the artwork claims to
  belong to the same character/form that owns it.
*/

const normalizeArtworkIdentity = (
  identity = {},
  {
    characterId = "",
    formId = "",
  } = {}
) => {
  const normalizedCharacterId =
    normalizeId(
      identity?.characterId
    ) || characterId;

  const normalizedFormId =
    normalizeId(
      identity?.formId
    ) || formId;

  const source =
    text(identity?.source).toLowerCase();

  return {
    characterId:
      normalizedCharacterId,

    formId:
      normalizedFormId,

    verified:
      identity?.verified === true,

    source:
      VALID_ARTWORK_SOURCES.has(
        source
      )
        ? source
        : "unknown",
  };
};

/* =========================================================
   ARTWORK NORMALIZER
========================================================= */

export const normalizeArtwork = (
  artwork = {},
  {
    includeBattle = false,
    characterId = "",
    formId = "",
  } = {}
) => {
  const result = {
    card: text(
      artwork?.card
    ),

    portrait: text(
      artwork?.portrait
    ),

    identity:
      normalizeArtworkIdentity(
        artwork?.identity,
        {
          characterId,
          formId,
        }
      ),
  };

  if (includeBattle) {
    result.battle = text(
      artwork?.battle
    );
  }

  return result;
};

/* =========================================================
   STAT NORMALIZER
========================================================= */

export const normalizeStats = (
  stats = {}
) => {
  const normalized = {};

  STAT_KEYS.forEach(
    (key) => {
      normalized[key] = clamp(
        stats?.[key],
        0,
        100
      );
    }
  );

  return normalized;
};

/* =========================================================
   FORM CREATOR
========================================================= */

export function createTournamentForm({
  id,
  name,
  rank = 1,
  tier = "standard",
  isBase = false,
  tournamentEligible = true,
  stats = {},
  abilities = [],
  weaknesses = [],
  specialTraits = [],
  artwork = {},
  characterId = "",
} = {}) {
  const formName = text(name);

  const formId =
    normalizeId(id) ||
    createSlug(formName);

  if (!formId || !formName) {
    throw new Error(
      "Tournament form needs both an id and a name."
    );
  }

  const normalizedTier =
    text(tier).toLowerCase() ||
    "standard";

  return {
    id: formId,

    name: formName,

    rank: Math.max(
      1,
      Math.floor(
        number(rank, 1)
      )
    ),

    tier:
      VALID_TIERS.has(
        normalizedTier
      )
        ? normalizedTier
        : "standard",

    isBase:
      Boolean(isBase),

    tournamentEligible:
      tournamentEligible !== false,

    stats:
      normalizeStats(stats),

    abilities:
      cleanArray(abilities),

    weaknesses:
      cleanArray(weaknesses),

    specialTraits:
      cleanArray(
        specialTraits
      ),

    artwork:
      normalizeArtwork(
        artwork,
        {
          includeBattle: true,
          characterId,
          formId,
        }
      ),
  };
}

/* =========================================================
   CHARACTER CREATOR
========================================================= */

export function createTournamentCharacter({
  id,
  verseId,
  name,
  aliases = [],
  tags = [],
  seedRating = 70,
  forms = [],
  description = "",
  specialTraits = [],
  artwork = {},
} = {}) {
  const normalizedVerseId =
    normalizeId(verseId);

  const characterName =
    text(name);

  const characterId =
    normalizeId(id) ||
    createSlug(
      `${normalizedVerseId}-${characterName}`
    );

  if (
    !characterId ||
    !normalizedVerseId ||
    !characterName
  ) {
    throw new Error(
      "Tournament character needs id, verseId, and name."
    );
  }

  const normalizedForms = (
    Array.isArray(forms)
      ? forms
      : []
  ).map(
    (form) =>
      createTournamentForm({
        ...form,
        characterId,
      })
  );

  if (!normalizedForms.length) {
    throw new Error(
      `${characterName} needs at least one form.`
    );
  }

  /* -------------------------------------------------------
     FORM ID UNIQUENESS
  ------------------------------------------------------- */

  const formIds = new Set();

  normalizedForms.forEach(
    (form) => {
      if (
        formIds.has(form.id)
      ) {
        throw new Error(
          `Duplicate form id "${form.id}" inside character "${characterName}".`
        );
      }

      formIds.add(form.id);
    }
  );

  /* -------------------------------------------------------
     BASE FORM NORMALIZATION
  ------------------------------------------------------- */

  const baseForms =
    normalizedForms.filter(
      (form) => form.isBase
    );

  if (
    baseForms.length === 0
  ) {
    normalizedForms[0].isBase =
      true;
  }

  if (
    baseForms.length > 1
  ) {
    let foundFirst = false;

    normalizedForms.forEach(
      (form) => {
        if (form.isBase) {
          if (!foundFirst) {
            foundFirst = true;
          } else {
            form.isBase =
              false;
          }
        }
      }
    );
  }

  /* -------------------------------------------------------
     FORM RANK NORMALIZATION
  ------------------------------------------------------- */

  normalizedForms.forEach(
    (form, index) => {
      if (
        !Number.isFinite(
          form.rank
        ) ||
        form.rank < 1
      ) {
        form.rank =
          index + 1;
      }
    }
  );

  return {
    id: characterId,

    verseId:
      normalizedVerseId,

    name:
      characterName,

    aliases:
      cleanArray(aliases),

    tags:
      cleanArray(tags),

    seedRating:
      clamp(
        seedRating,
        0,
        100
      ),

    description:
      text(description),

    specialTraits:
      cleanArray(
        specialTraits
      ),

    artwork:
      normalizeArtwork(
        artwork,
        {
          includeBattle: false,
          characterId,
        }
      ),

    forms:
      normalizedForms,
  };
}

/* =========================================================
   VERSE CREATOR
========================================================= */

export function createTournamentVerse({
  id,
  name,
  shortName = "",
  accentColor = "#ff2d2d",
  artwork = {},
} = {}) {
  const verseId =
    normalizeId(id) ||
    createSlug(name);

  const verseName =
    text(name);

  if (!verseId || !verseName) {
    throw new Error(
      "Tournament verse needs both an id and a name."
    );
  }

  return {
    id: verseId,

    name: verseName,

    shortName:
      text(shortName) ||
      verseName,

    accentColor:
      text(accentColor) ||
      "#ff2d2d",

    artwork: {
      banner:
        text(
          artwork?.banner
        ),

      logo:
        text(
          artwork?.logo
        ),
    },
  };
}

/* =========================================================
   ARTWORK VALIDATOR
========================================================= */

function validateArtwork(
  artwork,
  {
    characterId,
    formId = "",
    characterName,
    formName = "",
    isForm = false,
  }
) {
  const errors = [];
  const warnings = [];

  if (
    artwork === undefined ||
    artwork === null
  ) {
    warnings.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: artwork is missing.`
    );

    return {
      errors,
      warnings,
    };
  }

  if (
    typeof artwork !== "object" ||
    Array.isArray(artwork)
  ) {
    errors.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: artwork must be an object.`
    );

    return {
      errors,
      warnings,
    };
  }

  const identity =
    artwork.identity;

  if (
    identity === undefined ||
    identity === null
  ) {
    warnings.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: artwork has no identity metadata.`
    );

    return {
      errors,
      warnings,
    };
  }

  if (
    typeof identity !== "object" ||
    Array.isArray(identity)
  ) {
    errors.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: artwork.identity must be an object.`
    );

    return {
      errors,
      warnings,
    };
  }

  const artworkCharacterId =
    normalizeId(
      identity.characterId
    );

  if (
    artworkCharacterId &&
    artworkCharacterId !==
      normalizeId(characterId)
  ) {
    errors.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: artwork characterId "${artworkCharacterId}" does not match "${characterId}".`
    );
  }

  if (isForm) {
    const artworkFormId =
      normalizeId(
        identity.formId
      );

    if (
      artworkFormId &&
      artworkFormId !==
        normalizeId(formId)
    ) {
      errors.push(
        `${characterName} → ${formName}: artwork formId "${artworkFormId}" does not match "${formId}".`
      );
    }

    if (
      !artworkFormId
    ) {
      warnings.push(
        `${characterName} → ${formName}: artwork has no formId identity.`
      );
    }
  }

  if (
    identity.verified !==
    true
  ) {
    warnings.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: artwork is not marked verified.`
    );
  }

  const source =
    text(
      identity.source
    ).toLowerCase();

  if (
    !VALID_ARTWORK_SOURCES.has(
      source
    )
  ) {
    warnings.push(
      `${characterName}${formName ? ` → ${formName}` : ""}: unknown artwork source "${identity.source}".`
    );
  }

  return {
    errors,
    warnings,
  };
}

/* =========================================================
   DATABASE VALIDATION
========================================================= */

export function validateTournamentDatabase(
  {
    verses = [],
    characters = [],
  } = {},
  {
    expectComplete = false,
    strictArtwork = false,
    strict = false,
  } = {}
) {
  const errors = [];
  const warnings = [];

  const verseIds =
    new Set();

  const characterIds =
    new Set();

  const formIds =
    new Set();

  /* =======================================================
     TYPE VALIDATION
  ======================================================= */

  if (!Array.isArray(verses)) {
    errors.push(
      "Tournament verses must be an array."
    );
  }

  if (!Array.isArray(characters)) {
    errors.push(
      "Tournament characters must be an array."
    );
  }

  const safeVerses =
    Array.isArray(verses)
      ? verses
      : [];

  const safeCharacters =
    Array.isArray(characters)
      ? characters
      : [];

  /* =======================================================
     VERSES
  ======================================================= */

  safeVerses.forEach(
    (verse, index) => {
      const id =
        normalizeId(
          verse?.id
        );

      if (!id) {
        errors.push(
          `Verse #${index + 1} is missing an id.`
        );

        return;
      }

      if (
        verseIds.has(id)
      ) {
        errors.push(
          `Duplicate verse id: ${id}`
        );
      }

      verseIds.add(id);

      if (!text(verse.name)) {
        errors.push(
          `Verse "${id}" is missing a name.`
        );
      }
    }
  );

  /* =======================================================
     CHARACTERS
  ======================================================= */

  safeCharacters.forEach(
    (character, index) => {
      const characterId =
        normalizeId(
          character?.id
        );

      const characterName =
        text(
          character?.name
        ) ||
        `Character #${index + 1}`;

      if (!characterId) {
        errors.push(
          `Character #${index + 1} is missing an id.`
        );

        return;
      }

      /* ---------------------------------------------------
         CHARACTER ID
      --------------------------------------------------- */

      if (
        characterIds.has(
          characterId
        )
      ) {
        errors.push(
          `Duplicate character id: ${characterId}`
        );
      }

      characterIds.add(
        characterId
      );

      /* ---------------------------------------------------
         NAME
      --------------------------------------------------- */

      if (
        !text(character.name)
      ) {
        errors.push(
          `Character "${characterId}" is missing a name.`
        );
      }

      /* ---------------------------------------------------
         VERSE
      --------------------------------------------------- */

      const characterVerseId =
        normalizeId(
          character.verseId
        );

      if (
        !verseIds.has(
          characterVerseId
        )
      ) {
        errors.push(
          `${characterName} uses an unknown verse: ${character.verseId}`
        );
      }

      /* ---------------------------------------------------
         CHARACTER ARTWORK
      --------------------------------------------------- */

      const characterArtwork =
        validateArtwork(
          character.artwork,
          {
            characterId,
            characterName,
            isForm: false,
          }
        );

      errors.push(
        ...characterArtwork.errors
      );

      warnings.push(
        ...characterArtwork.warnings
      );

      /* ---------------------------------------------------
         FORMS
      --------------------------------------------------- */

      if (
        !Array.isArray(
          character.forms
        ) ||
        character.forms.length === 0
      ) {
        errors.push(
          `${characterName} has no forms.`
        );

        return;
      }

      const localFormIds =
        new Set();

      let baseCount = 0;

      character.forms.forEach(
        (form, formIndex) => {
          const formId =
            normalizeId(
              form?.id
            );

          const formName =
            text(
              form?.name
            ) ||
            `Form #${formIndex + 1}`;

          if (!formId) {
            errors.push(
              `${characterName}: form #${formIndex + 1} is missing an id.`
            );

            return;
          }

          /* -----------------------------------------------
             GLOBAL FORM ID
          ------------------------------------------------ */

          if (
            formIds.has(formId)
          ) {
            errors.push(
              `Duplicate form id detected: ${formId}`
            );
          }

          formIds.add(
            formId
          );

          /* -----------------------------------------------
             LOCAL FORM ID
          ------------------------------------------------ */

          if (
            localFormIds.has(
              formId
            )
          ) {
            errors.push(
              `${characterName}: duplicate form id "${formId}".`
            );
          }

          localFormIds.add(
            formId
          );

          /* -----------------------------------------------
             NAME
          ------------------------------------------------ */

          if (
            !text(form.name)
          ) {
            errors.push(
              `${characterName}: form ${formId} is missing a name.`
            );
          }

          /* -----------------------------------------------
             PARENT RELATIONSHIP
          ------------------------------------------------ */

          if (
            form.characterId !==
              undefined &&
            normalizeId(
              form.characterId
            ) !== characterId
          ) {
            errors.push(
              `${characterName} → ${formName}: form characterId "${form.characterId}" does not belong to character "${characterId}".`
            );
          }

          /* -----------------------------------------------
             BASE FORM
          ------------------------------------------------ */

          if (form.isBase) {
            baseCount++;
          }

          /* -----------------------------------------------
             STATS
          ------------------------------------------------ */

          if (!form.stats) {
            errors.push(
              `${characterName} → ${formName}: missing stats.`
            );
          } else {
            STAT_KEYS.forEach(
              (stat) => {
                const value =
                  form.stats[stat];

                if (
                  !Number.isFinite(
                    Number(value)
                  )
                ) {
                  errors.push(
                    `${characterName} → ${formName}: invalid ${stat} stat.`
                  );
                }

                if (
                  Number(value) < 0 ||
                  Number(value) > 100
                ) {
                  errors.push(
                    `${characterName} → ${formName}: ${stat} must be 0-100.`
                  );
                }
              }
            );
          }

          /* -----------------------------------------------
             RANK
          ------------------------------------------------ */

          if (
            !Number.isInteger(
              form.rank
            ) ||
            form.rank < 1
          ) {
            errors.push(
              `${characterName} → ${formName}: invalid form rank.`
            );
          }

          /* -----------------------------------------------
             TIER
          ------------------------------------------------ */

          if (
            !VALID_TIERS.has(
              String(
                form.tier
              ).toLowerCase()
            )
          ) {
            warnings.push(
              `${characterName} → ${formName}: unknown tier "${form.tier}".`
            );
          }

          /* -----------------------------------------------
             ARTWORK
          ------------------------------------------------ */

          const formArtwork =
            validateArtwork(
              form.artwork,
              {
                characterId,
                formId,
                characterName,
                formName,
                isForm: true,
              }
            );

          if (
            strictArtwork
          ) {
            errors.push(
              ...formArtwork.errors
            );

            if (
              formArtwork.warnings
                .length
            ) {
              errors.push(
                ...formArtwork.warnings.map(
                  (warning) =>
                    `[STRICT ARTWORK] ${warning}`
                )
              );
            }
          } else {
            errors.push(
              ...formArtwork.errors
            );

            warnings.push(
              ...formArtwork.warnings
            );
          }

          /* -----------------------------------------------
             ARTWORK FILE PRESENCE
          ------------------------------------------------ */

          const imageFields = [
            "card",
            "portrait",
          ];

          if (
            form.artwork
          ) {
            imageFields.forEach(
              (field) => {
                if (
                  !text(
                    form.artwork[field]
                  )
                ) {
                  warnings.push(
                    `${characterName} → ${formName}: missing ${field} artwork.`
                  );
                }
              }
            );
          }
        }
      );

      /* ---------------------------------------------------
         BASE COUNT
      --------------------------------------------------- */

      if (
        baseCount === 0
      ) {
        errors.push(
          `${characterName}: no base form exists.`
        );
      }

      if (
        baseCount > 1
      ) {
        errors.push(
          `${characterName}: multiple base forms detected.`
        );
      }
    }
  );

  /* =======================================================
     COMPLETENESS
  ======================================================= */

  if (expectComplete) {
    if (
      safeVerses.length !==
      TOURNAMENT_DATABASE_CONFIG.verseCount
    ) {
      errors.push(
        `Expected ${TOURNAMENT_DATABASE_CONFIG.verseCount} verses, found ${safeVerses.length}.`
      );
    }

    if (
      safeCharacters.length !==
      TOURNAMENT_DATABASE_CONFIG.totalBaseCharacters
    ) {
      errors.push(
        `Expected ${TOURNAMENT_DATABASE_CONFIG.totalBaseCharacters} characters, found ${safeCharacters.length}.`
      );
    }
  }

  /* =======================================================
     STRICT MODE
  ======================================================= */

  if (strict && warnings.length) {
    errors.push(
      ...warnings.map(
        (warning) =>
          `[STRICT] ${warning}`
      )
    );
  }

  /* =======================================================
     SUMMARY
  ======================================================= */

  const totalForms =
    safeCharacters.reduce(
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
    safeCharacters.reduce(
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

  return {
    valid:
      errors.length === 0,

    errors,

    warnings,

    summary: {
      verses:
        safeVerses.length,

      characters:
        safeCharacters.length,

      forms:
        totalForms,

      tournamentEligibleForms,
    },
  };
}

/* =========================================================
   SINGLE CHARACTER VALIDATOR
========================================================= */

export function validateTournamentCharacter(
  character
) {
  return validateTournamentDatabase(
    {
      verses: [
        {
          id:
            character?.verseId,
          name:
            "Validation Verse",
        },
      ],
      characters: [
        character,
      ],
    },
    {
      strictArtwork: false,
    }
  );
}

/* =========================================================
   SINGLE FORM VALIDATOR
========================================================= */

export function validateTournamentForm(
  form
) {
  const errors = [];

  if (!form?.id) {
    errors.push(
      "Form is missing id."
    );
  }

  if (!form?.name) {
    errors.push(
      "Form is missing name."
    );
  }

  if (!form?.stats) {
    errors.push(
      "Form is missing stats."
    );
  }

  if (form?.stats) {
    STAT_KEYS.forEach(
      (stat) => {
        const value =
          Number(
            form.stats[stat]
          );

        if (
          !Number.isFinite(value)
        ) {
          errors.push(
            `Invalid ${stat} stat.`
          );
        } else if (
          value < 0 ||
          value > 100
        ) {
          errors.push(
            `${stat} must be between 0 and 100.`
          );
        }
      }
    );
  }

  return {
    valid:
      errors.length === 0,

    errors,
  };
}

/* =========================================================
   DATABASE SUMMARY
========================================================= */

export function getTournamentDatabaseSummary(
  {
    verses = [],
    characters = [],
  } = {}
) {
  const safeCharacters =
    Array.isArray(characters)
      ? characters
      : [];

  const forms =
    safeCharacters.reduce(
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

  const eligibleForms =
    safeCharacters.reduce(
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

  return {
    verses:
      Array.isArray(verses)
        ? verses.length
        : 0,

    characters:
      safeCharacters.length,

    forms,

    eligibleForms,
  };
}

/* =========================================================
   EXPORTED CONSTANTS
========================================================= */

export {
  DEFAULT_FORM_STATS,
  STAT_KEYS,
  VALID_TIERS,
  VALID_ARTWORK_KINDS,
  VALID_ARTWORK_SOURCES,
};