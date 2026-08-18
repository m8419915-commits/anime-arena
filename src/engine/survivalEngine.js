/*
=============================================================
 ANIME ARENA — SURVIVAL ENGINE
=============================================================

 Connects the Grand Tournament to the existing Battle Engine.

 It supports whichever battle export your current
 battleEngine.js actually provides.

 Priority:
 1. judgeBattle
 2. quickBattle
 3. analyzeBattle
 4. internal safe fallback

 The tournament therefore does NOT depend on one specific
 Battle Engine export name.
=============================================================
*/

import * as BattleEngine from './battleEngine';


/* =========================================================
   HELPERS
========================================================= */

const number = (value, fallback = 0) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};


const clamp = (
  value,
  min = 0,
  max = 100
) =>
  Math.max(
    min,
    Math.min(
      max,
      number(value)
    )
  );


const getFormValue = (
  form,
  character,
  key,
  fallback = 0
) =>
  number(
    form?.[key] ??
    character?.[key] ??
    character?.stats?.[key] ??
    fallback
  );


const getStrongestForm = (
  character
) => {
  const forms = Array.isArray(
    character?.forms
  )
    ? character.forms
    : [];

  if (!forms.length) {
    return null;
  }

  return [...forms].sort(
    (a, b) =>
      number(b?.relPower) -
      number(a?.relPower)
  )[0];
};


const prepareCharacter = (
  character,
  form
) => {
  const selectedForm =
    form ||
    getStrongestForm(
      character
    );

  return {
    ...character,

    power:
      getFormValue(
        selectedForm,
        character,
        'relPower'
      ) ||
      getFormValue(
        selectedForm,
        character,
        'realPower'
      ),

    attack:
      getFormValue(
        selectedForm,
        character,
        'relPower'
      ),

    hax:
      getFormValue(
        selectedForm,
        character,
        'hax'
      ),

    speed:
      getFormValue(
        selectedForm,
        character,
        'speed'
      ),

    defense:
      getFormValue(
        selectedForm,
        character,
        'defense'
      ),

    durability:
      getFormValue(
        selectedForm,
        character,
        'durability',
        getFormValue(
          selectedForm,
          character,
          'defense'
        )
      ),

    battleIQ:
      getFormValue(
        selectedForm,
        character,
        'battleIQ'
      ),

    intelligence:
      getFormValue(
        selectedForm,
        character,
        'intelligence'
      ),

    skill:
      getFormValue(
        selectedForm,
        character,
        'skill'
      ),

    experience:
      getFormValue(
        selectedForm,
        character,
        'experience'
      ),

    versatility:
      getFormValue(
        selectedForm,
        character,
        'versatility'
      ),

    stamina:
      getFormValue(
        selectedForm,
        character,
        'stamina'
      ),

    regeneration:
      getFormValue(
        selectedForm,
        character,
        'regeneration'
      ),

    form:
      selectedForm?.name ||
      character?.form ||
      'Base Form',

    tags:
      character?.tags || []
  };
};


/* =========================================================
   FALLBACK BATTLE
========================================================= */

const fallbackBattle = (
  left,
  right
) => {
  const L = {
    power: number(left.power),
    speed: number(left.speed),
    hax: number(left.hax),
    defense: number(left.defense),
    durability: number(left.durability),
    battleIQ: number(left.battleIQ),
    skill: number(left.skill),
    experience: number(left.experience),
    versatility: number(left.versatility),
    stamina: number(left.stamina),
    regeneration: number(left.regeneration)
  };

  const R = {
    power: number(right.power),
    speed: number(right.speed),
    hax: number(right.hax),
    defense: number(right.defense),
    durability: number(right.durability),
    battleIQ: number(right.battleIQ),
    skill: number(right.skill),
    experience: number(right.experience),
    versatility: number(right.versatility),
    stamina: number(right.stamina),
    regeneration: number(right.regeneration)
  };


  const weights = {
    power: 1.25,
    speed: 1.0,
    hax: 1.35,
    defense: 0.9,
    durability: 0.9,
    battleIQ: 1.0,
    skill: 1.0,
    experience: 0.7,
    versatility: 1.0,
    stamina: 0.75,
    regeneration: 0.75
  };


  const leftScore =
    L.power * weights.power +
    L.speed * weights.speed +
    L.hax * weights.hax +
    L.defense * weights.defense +
    L.durability * weights.durability +
    L.battleIQ * weights.battleIQ +
    L.skill * weights.skill +
    L.experience * weights.experience +
    L.versatility * weights.versatility +
    L.stamina * weights.stamina +
    L.regeneration * weights.regeneration;


  const rightScore =
    R.power * weights.power +
    R.speed * weights.speed +
    R.hax * weights.hax +
    R.defense * weights.defense +
    R.durability * weights.durability +
    R.battleIQ * weights.battleIQ +
    R.skill * weights.skill +
    R.experience * weights.experience +
    R.versatility * weights.versatility +
    R.stamina * weights.stamina +
    R.regeneration * weights.regeneration;


  let winner = 'draw';

  if (leftScore > rightScore) {
    winner = 'left';
  } else if (
    rightScore > leftScore
  ) {
    winner = 'right';
  }


  return {
    winner,
    leftScore,
    rightScore,

    probability:
      leftScore + rightScore > 0
        ? Math.round(
            (
              Math.max(
                leftScore,
                rightScore
              ) /
              (
                leftScore +
                rightScore
              )
            ) *
              100
          )
        : 50,

    explanation:
      winner === 'left'
        ? `${left.name} has the stronger combined tactical profile in this matchup.`
        : winner === 'right'
          ? `${right.name} has the stronger combined tactical profile in this matchup.`
          : 'The matchup is extremely close.'
  };
};


/* =========================================================
   NORMALIZE RESULT
========================================================= */

const normalizeResult = (
  result,
  left,
  right
) => {
  if (!result) {
    return {
      winner: 'draw',
      leftScore: 0,
      rightScore: 0,
      explanation:
        'No battle result was returned.'
    };
  }


  let winner =
    result?.winner;


  if (
    winner !== 'left' &&
    winner !== 'right' &&
    winner !== 'draw'
  ) {
    const winnerName =
      String(
        result?.winnerCharacter?.name ||
        result?.winningCharacter?.name ||
        ''
      )
        .trim()
        .toLowerCase();

    if (
      winnerName ===
      String(left?.name || '')
        .trim()
        .toLowerCase()
    ) {
      winner = 'left';
    } else if (
      winnerName ===
      String(right?.name || '')
        .trim()
        .toLowerCase()
    ) {
      winner = 'right';
    } else {
      winner = 'draw';
    }
  }


  return {
    ...result,

    winner,

    leftScore:
      number(
        result?.leftScore
      ),

    rightScore:
      number(
        result?.rightScore
      ),

    probability:
      number(
        result?.probability,
        50
      ),

    explanation:
      result?.explanation ||
      'The Tactical Battle Engine completed the matchup.'
  };
};


/* =========================================================
   TIE BREAK
========================================================= */

const resolveDraw = (
  left,
  right,
  leftForm,
  rightForm
) => {
  const checks = [
    [
      'relPower',
      1
    ],
    [
      'realPower',
      1
    ],
    [
      'hax',
      1
    ],
    [
      'speed',
      1
    ]
  ];

  for (
    const [key] of checks
  ) {
    const L =
      number(
        leftForm?.[key] ??
        left?.[key]
      );

    const R =
      number(
        rightForm?.[key] ??
        right?.[key]
      );

    if (L > R) {
      return 'left';
    }

    if (R > L) {
      return 'right';
    }
  }


  /*
    Final deterministic fallback.
    This ensures the survival tournament can never
    get stuck indefinitely on a draw.
  */

  return (
    String(
      left?.name || ''
    )
      .toLowerCase()
      .localeCompare(
        String(
          right?.name || ''
        )
          .toLowerCase()
      ) <= 0
      ? 'left'
      : 'right'
  );
};


/* =========================================================
   RUN BATTLE
========================================================= */

export const runSurvivalBattle = ({
  leftCharacter,
  rightCharacter,
  leftForm,
  rightForm
}) => {
  if (
    !leftCharacter ||
    !rightCharacter
  ) {
    return {
      success: false,
      winner: 'draw',
      error:
        'Both fighters are required.'
    };
  }


  const left =
    prepareCharacter(
      leftCharacter,
      leftForm
    );

  const right =
    prepareCharacter(
      rightCharacter,
      rightForm
    );


  let result = null;
  let engineUsed =
    'internal fallback';


  /*
    1. judgeBattle
  */

  if (
    typeof BattleEngine.judgeBattle ===
    'function'
  ) {
    try {
      result =
        BattleEngine.judgeBattle(
          left,
          right
        );

      engineUsed =
        'judgeBattle';
    } catch {
      result = null;
    }
  }


  /*
    2. quickBattle
  */

  if (
    !result &&
    typeof BattleEngine.quickBattle ===
      'function'
  ) {
    try {
      result =
        BattleEngine.quickBattle(
          left,
          right
        );

      engineUsed =
        'quickBattle';
    } catch {
      result = null;
    }
  }


  /*
    3. analyzeBattle
  */

  if (
    !result &&
    typeof BattleEngine.analyzeBattle ===
      'function'
  ) {
    try {
      result =
        BattleEngine.analyzeBattle(
          left,
          right
        );

      engineUsed =
        'analyzeBattle';
    } catch {
      result = null;
    }
  }


  /*
    4. Internal fallback.
  */

  if (!result) {
    result =
      fallbackBattle(
        left,
        right
      );

    engineUsed =
      'internal fallback';
  }


  result =
    normalizeResult(
      result,
      left,
      right
    );


  let winner =
    result.winner;


  /*
    Survival tournaments cannot leave a
    completed match unresolved.
  */

  if (
    winner === 'draw'
  ) {
    winner =
      resolveDraw(
        left,
        right,
        leftForm,
        rightForm
      );
  }


  const winnerCharacter =
    winner === 'left'
      ? leftCharacter
      : rightCharacter;

  const loserCharacter =
    winner === 'left'
      ? rightCharacter
      : leftCharacter;


  return {
    success: true,

    winner,

    winnerCharacter,

    loserCharacter,

    leftCharacter,

    rightCharacter,

    leftForm,

    rightForm,

    leftScore:
      result.leftScore,

    rightScore:
      result.rightScore,

    probability:
      result.probability,

    explanation:
      result.explanation,

    categoryScores:
      result.categoryScores ||
      null,

    categoryWinners:
      result.categoryWinners ||
      [],

    engineUsed,

    rawResult:
      result
  };
};


/* =========================================================
   EXPORT SAFE STAT BUILDER
========================================================= */

export const getSurvivalStats = (
  character,
  form = null
) => {
  const prepared =
    prepareCharacter(
      character,
      form
    );

  return {
    power:
      number(
        prepared.power
      ),

    speed:
      number(
        prepared.speed
      ),

    hax:
      number(
        prepared.hax
      ),

    defense:
      number(
        prepared.defense
      ),

    durability:
      number(
        prepared.durability
      ),

    battleIQ:
      number(
        prepared.battleIQ
      ),

    versatility:
      number(
        prepared.versatility
      )
  };
};


/* =========================================================
   SAFE PROBABILITY
========================================================= */

export const getSurvivalProbability = (
  leftScore,
  rightScore
) => {
  const left =
    Math.max(
      0,
      number(leftScore)
    );

  const right =
    Math.max(
      0,
      number(rightScore)
    );

  const total =
    left + right;

  if (!total) {
    return {
      left: 50,
      right: 50
    };
  }

  const leftProbability =
    clamp(
      (
        left /
        total
      ) *
        100,
      1,
      99
    );

  return {
    left:
      Math.round(
        leftProbability
      ),

    right:
      100 -
      Math.round(
        leftProbability
      )
  };
};