import {
  FORM_RULESETS,
} from "../data/tournamentConfig";

const number = (value) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : 0;
};

export function getEligibleForms(character) {
  if (!Array.isArray(character?.forms)) {
    return [];
  }

  return character.forms.filter(
    (form) =>
      form.tournamentEligible !== false
  );
}

export function getBaseForm(character) {
  return (
    getEligibleForms(character).find(
      (form) => form.isBase
    ) || null
  );
}

export function getFormById(
  character,
  formId
) {
  if (!formId) {
    return null;
  }

  return (
    getEligibleForms(character).find(
      (form) => form.id === formId
    ) || null
  );
}

/*
  Used only to compare forms of the SAME character.
  It is not a claim of official canon power.
*/
export function getFormCombatRating(form) {
  if (!form) {
    return 0;
  }

  const stats = form.stats || {};

  return (
    number(stats.relativePower) * 0.25 +
    number(stats.realPower) * 0.2 +
    number(stats.hax) * 0.15 +
    number(stats.speed) * 0.1 +
    number(stats.durability) * 0.1 +
    number(stats.attack) * 0.07 +
    number(stats.defense) * 0.05 +
    number(stats.intelligence) * 0.04 +
    number(stats.stamina) * 0.02 +
    number(stats.versatility) * 0.02
  );
}

export function getPeakForm(character) {
  const eligibleForms =
    getEligibleForms(character);

  if (!eligibleForms.length) {
    return null;
  }

  return [...eligibleForms].sort(
    (left, right) => {
      const ratingDifference =
        getFormCombatRating(right) -
        getFormCombatRating(left);

      if (ratingDifference !== 0) {
        return ratingDifference;
      }

      return number(right.rank) - number(left.rank);
    }
  )[0];
}

/*
  Resolves one official tournament form for one entrant.
*/
export function resolveTournamentForm({
  character,
  formRulesetId = "peak",
  selectedFormId = null,
}) {
  if (!character) {
    return {
      success: false,
      error: "Character is required.",
    };
  }

  if (!FORM_RULESETS[formRulesetId]) {
    return {
      success: false,
      error: `Unknown form ruleset: ${formRulesetId}`,
    };
  }

  let form = null;
  let source = "";

  if (formRulesetId === "baseOnly") {
    form = getBaseForm(character);
    source = "base-form-rule";
  }

  if (formRulesetId === "peak") {
    form = getPeakForm(character);
    source = "peak-form-rule";
  }

  if (
    formRulesetId === "locked" ||
    formRulesetId === "custom"
  ) {
    form = getFormById(
      character,
      selectedFormId
    );

    source = "manual-form-selection";

    if (!form) {
      return {
        success: false,
        error: `${character.name} needs a selected tournament form.`,
      };
    }
  }

  if (!form) {
    return {
      success: false,
      error: `${character.name} has no eligible form for this event.`,
    };
  }

  return {
    success: true,
    characterId: character.id,
    form,
    source,
    combatRating:
      getFormCombatRating(form),
  };
}

/*
  Resolves all official forms before an event begins.
  The resulting map is saved with the tournament so forms
  cannot change halfway through the bracket.
*/
export function resolveTournamentForms({
  characters,
  formRulesetId = "peak",
  selectedFormIds = {},
}) {
  const results = [];
  const errors = [];

  if (!Array.isArray(characters)) {
    return {
      success: false,
      errors: [
        "Tournament characters must be an array.",
      ],
      formsByCharacterId: {},
    };
  }

  characters.forEach((character) => {
    const result = resolveTournamentForm({
      character,
      formRulesetId,

      selectedFormId:
        selectedFormIds[character.id] ||
        null,
    });

    if (!result.success) {
      errors.push(result.error);
      return;
    }

    results.push(result);
  });

  return {
    success: errors.length === 0,
    errors,

    formsByCharacterId:
      Object.fromEntries(
        results.map((result) => [
          result.characterId,
          result.form,
        ])
      ),

    results,
  };
}