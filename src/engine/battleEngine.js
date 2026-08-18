/*
=============================================================
 ANIME ARENA — MASTER BATTLE ENGINE
=============================================================

 PURPOSE
 -------
 Shared battle intelligence for:

   ⚔️ Anime Battle
   🏆 Character Tournament
   💀 Survival / Gauntlet
   🎴 Draft Matchups
   🔮 Future Battle Modes

 REAL DATABASE STRUCTURE
 -----------------------
 character
 ├── id
 ├── name
 ├── tags[]
 └── forms[]
      ├── name
      ├── img
      ├── relPower
      ├── realPower
      └── hax


 BATTLE PHILOSOPHY
 -----------------
 The judge does NOT simply ask:

     "Who has the bigger number?"

 It evaluates:

   1. Direct form power
   2. Hax
   3. Speed
   4. Defense
   5. Durability
   6. Battle IQ
   7. Skill
   8. Experience
   9. Versatility
  10. Stamina
  11. Regeneration
  12. Win conditions
  13. Hax interaction
  14. Counterplay
  15. Practical power gap
  16. Matchup reliability

 IMPORTANT
 ---------
 Derived categories are model estimates based on the
 available Anime Arena database. They are NOT official
 canon numerical statistics.

 The engine is deterministic:
 same inputs + same rules = same result.
=============================================================
*/


/* =========================================================
   BASIC HELPERS
========================================================= */

const clamp = (
  value,
  min = 0,
  max = 100
) => {
  const number = Number(value) || 0;

  return Math.max(
    min,
    Math.min(
      max,
      number
    )
  );
};


const safeNumber = (value) => {
  const number =
    Number(value);

  return Number.isFinite(
    number
  )
    ? number
    : 0;
};


const normalizeText = (
  value
) =>
  String(
    value || ''
  )
    .trim()
    .toLowerCase();


const normalizeTags = (
  character
) => {
  if (
    !Array.isArray(
      character?.tags
    )
  ) {
    return [];
  }

  return character.tags.map(
    normalizeText
  );
};


/* =========================================================
   FORM SYSTEM
========================================================= */

/*
  Returns every form in the existing character database.
*/

export const getForms = (
  character
) => {
  if (
    !Array.isArray(
      character?.forms
    )
  ) {
    return [];
  }

  return character.forms;
};


/*
  Returns the strongest listed form.

  Battle Mode can override this by passing
  a specific selected form.
*/

export const getDefaultForm = (
  character
) => {
  const forms =
    getForms(
      character
    );

  if (
    !forms.length
  ) {
    return {
      name: 'Unknown Form',
      img: null,
      relPower: 0,
      realPower: 0,
      hax: 0
    };
  }

  return [...forms].sort(
    (a, b) =>
      safeNumber(
        b.relPower
      ) -
      safeNumber(
        a.relPower
      )
  )[0];
};


/* =========================================================
   BATTLE CONDITIONS
========================================================= */

export const BATTLE_MODES = {

  standard: {
    id: 'standard',
    name: 'Standard',
    description:
      'Normal tactical battle using power, combat ability, hax, matchup and practical win conditions.',
    icon: '⚔️'
  },

  equalStats: {
    id: 'equalStats',
    name: 'Equal Stats',
    description:
      'Major raw power differences are neutralized so abilities, skill and matchup matter more.',
    icon: '⚖️'
  },

  fullArsenal: {
    id: 'fullArsenal',
    name: 'Full Arsenal',
    description:
      'All detected abilities, hax and win conditions receive full consideration.',
    icon: '🔥'
  },

  noHax: {
    id: 'noHax',
    name: 'No Hax',
    description:
      'Special hax advantages are heavily suppressed.',
    icon: '🚫'
  },

  pureCombat: {
    id: 'pureCombat',
    name: 'Pure Combat',
    description:
      'Physical power, speed, skill and Battle IQ dominate.',
    icon: '👊'
  },

  speedEqualized: {
    id: 'speedEqualized',
    name: 'Speed Equalized',
    description:
      'Speed differences are neutralized.',
    icon: '⚡'
  },

  haxBattle: {
    id: 'haxBattle',
    name: 'Hax Battle',
    description:
      'Hax, matchup interactions and reliable win conditions receive major priority.',
    icon: '🌀'
  }

};


/* =========================================================
   SIGNAL DATABASE
========================================================= */

const SIGNALS = {

  speed: [
    'speed',
    'fast',
    'faster',
    'speedster',
    'flash',
    'lightning',
    'teleport',
    'teleportation',
    'shunpo',
    'sonido',
    'instant',
    'minato',
    'killua',
    'goku',
    'vegeta',
    'ichigo',
    'gojo',
    'yoriichi',
    'zenitsu'
  ],

  defense: [
    'armor',
    'barrier',
    'shield',
    'defense',
    'guardian',
    'tank',
    'susanoo',
    'limitless',
    'six eyes',
    'ultra instinct',
    'ultra ego',
    'jinchuriki',
    'immortal',
    'regeneration',
    'regen'
  ],

  intelligence: [
    'genius',
    'strategist',
    'mastermind',
    'scientist',
    'intellect',
    'smart',
    'tactician'
  ],

  skill: [
    'swordsman',
    'sword',
    'assassin',
    'martial artist',
    'martial arts',
    'master',
    'expert',
    'shinobi',
    'samurai',
    'captain',
    'warrior'
  ],

  hax: [
    'hax',
    'reality',
    'time',
    'space',
    'dimension',
    'mind',
    'illusion',
    'genjutsu',
    'fate',
    'causality',
    'sealing',
    'nullification',
    'adaptation',
    'immortality',
    'regeneration',
    'death',
    'curse',
    'domain',
    'limitless',
    'infinity',
    'almighty',
    'rinnegan',
    'sharingan',
    'six eyes'
  ],

  regeneration: [
    'regeneration',
    'regen',
    'healing',
    'immortal',
    'immortality'
  ],

  experience: [
    'captain',
    'commander',
    'veteran',
    'master',
    'warrior',
    'assassin',
    'shinobi',
    'samurai',
    'demon',
    'ancient',
    'immortal'
  ]

};


const countSignals = (
  text,
  signalList
) =>
  signalList.filter(
    (signal) =>
      text.includes(
        signal
      )
  ).length;


/* =========================================================
   HAX TYPES
========================================================= */

const HAX_TYPES = {

  reality: [
    'reality',
    'reality warping',
    'reality manipulation'
  ],

  time: [
    'time',
    'time stop',
    'time manipulation',
    'time travel'
  ],

  space: [
    'space',
    'spatial',
    'dimension',
    'teleport'
  ],

  mind: [
    'mind',
    'mind control',
    'genjutsu',
    'illusion'
  ],

  fate: [
    'fate',
    'precognition',
    'future sight',
    'almighty'
  ],

  sealing: [
    'seal',
    'sealing'
  ],

  nullification: [
    'nullification',
    'power nullification',
    'ability nullification'
  ],

  durabilityNegation: [
    'durability negation',
    'durability bypass',
    'ignore durability'
  ],

  adaptation: [
    'adaptation',
    'adaptive'
  ],

  instantKill: [
    'instant kill',
    'instant death',
    'death manipulation'
  ],

  regeneration: [
    'regeneration',
    'regen',
    'healing'
  ],

  immortality: [
    'immortality',
    'immortal'
  ]

};


/*
  Finds special ability classes from:

  Character name
  Form name
  Character tags
*/

const getHaxTypes = (
  character,
  form
) => {

  const text = [
    character?.name,
    form?.name,
    ...(character?.tags || [])
  ]
    .join(' ')
    .toLowerCase();

  return Object.entries(
    HAX_TYPES
  )
    .filter(
      ([, signals]) =>
        signals.some(
          (signal) =>
            text.includes(
              signal
            )
        )
    )
    .map(
      ([type]) =>
        type
    );
};


/* =========================================================
   DIRECT FORM DATA
========================================================= */

const getPowerScale = (
  form
) => {

  const relative =
    safeNumber(
      form?.relPower
    );

  const real =
    safeNumber(
      form?.realPower
    );

  /*
    The current database generally uses
    high raw values such as 60,000–100,000+.

    We normalize those into 0–100 for
    tactical comparisons while retaining
    the original values separately.
  */

  const normalizedPower =
    clamp(
      (
        relative /
        100000
      ) *
        100
    );

  const normalizedRealPower =
    clamp(
      (
        real /
        170000
      ) *
        100
    );

  const hax =
    clamp(
      safeNumber(
        form?.hax
      )
    );

  return {

    relative,

    real,

    power:
      normalizedPower,

    realPower:
      normalizedRealPower,

    hax

  };
};


/* =========================================================
   BATTLE PROFILE
========================================================= */

export const buildBattleProfile = (
  character,
  form = getDefaultForm(
    character
  )
) => {

  const tags =
    normalizeTags(
      character
    );

  const text = [
    character?.name,
    form?.name,
    ...tags
  ]
    .join(' ')
    .toLowerCase();

  const power =
    getPowerScale(
      form
    );

  const speedSignals =
    countSignals(
      text,
      SIGNALS.speed
    );

  const defenseSignals =
    countSignals(
      text,
      SIGNALS.defense
    );

  const intelligenceSignals =
    countSignals(
      text,
      SIGNALS.intelligence
    );

  const skillSignals =
    countSignals(
      text,
      SIGNALS.skill
    );

  const regenerationSignals =
    countSignals(
      text,
      SIGNALS.regeneration
    );

  const experienceSignals =
    countSignals(
      text,
      SIGNALS.experience
    );

  const haxSignals =
    countSignals(
      text,
      SIGNALS.hax
    );

  const haxTypes =
    getHaxTypes(
      character,
      form
    );


  /* -------------------------------------------------------
     DERIVED SPEED
  ------------------------------------------------------- */

  const speed =
    clamp(
      50 +
        speedSignals * 7 +
        power.hax * 0.14 +
        power.power * 0.10
    );


  /* -------------------------------------------------------
     DERIVED DEFENSE
  ------------------------------------------------------- */

  const defense =
    clamp(
      48 +
        defenseSignals * 7 +
        power.power * 0.16 +
        power.hax * 0.10
    );


  /* -------------------------------------------------------
     DURABILITY
  ------------------------------------------------------- */

  const durability =
    clamp(
      46 +
        defenseSignals * 6 +
        power.power * 0.22 +
        regenerationSignals * 5
    );


  /* -------------------------------------------------------
     INTELLIGENCE
  ------------------------------------------------------- */

  const intelligence =
    clamp(
      52 +
        intelligenceSignals * 8
    );


  /* -------------------------------------------------------
     BATTLE IQ
  ------------------------------------------------------- */

  const battleIQ =
    clamp(
      50 +
        intelligenceSignals * 7 +
        skillSignals * 3 +
        Math.min(
          power.hax,
          35
        ) *
          0.18
    );


  /* -------------------------------------------------------
     SKILL
  ------------------------------------------------------- */

  const skill =
    clamp(
      50 +
        skillSignals * 7 +
        battleIQ * 0.12
    );


  /* -------------------------------------------------------
     EXPERIENCE
  ------------------------------------------------------- */

  const experience =
    clamp(
      48 +
        experienceSignals * 7 +
        skillSignals * 2
    );


  /* -------------------------------------------------------
     VERSATILITY
  ------------------------------------------------------- */

  const versatility =
    clamp(
      45 +
        haxSignals * 5 +
        haxTypes.length * 4 +
        skillSignals * 2
    );


  /* -------------------------------------------------------
     REGENERATION
  ------------------------------------------------------- */

  const regeneration =
    clamp(
      40 +
        regenerationSignals * 14 +
        power.hax * 0.18
    );


  /* -------------------------------------------------------
     STAMINA
  ------------------------------------------------------- */

  const stamina =
    clamp(
      50 +
        power.power * 0.18 +
        durability * 0.20 +
        regeneration * 0.10
    );


  /* -------------------------------------------------------
     WIN CONDITIONS
  ------------------------------------------------------- */

  const winConditions =
    clamp(
      35 +
        haxTypes.length * 7 +
        versatility * 0.20 +
        power.hax * 0.16
    );


  /* -------------------------------------------------------
     LEGACY / PROFILE STRENGTH
  ------------------------------------------------------- */

  const legacy =
    clamp(
      45 +
        power.power * 0.25 +
        experience * 0.25
    );


  return {

    name:
      character?.name ||
      'Unknown',

    verse:
      character?.verse ||
      'Unknown',

    form:
      form?.name ||
      'Unknown Form',

    direct: {

      relativePower:
        power.relative,

      realPower:
        power.real,

      hax:
        power.hax

    },

    derived: {

      power:
        power.power,

      speed,

      hax:
        power.hax,

      intelligence,

      battleIQ,

      attackPower:
        clamp(
          power.power * 0.75 +
          skill * 0.25
        ),

      defense,

      durability,

      versatility,

      experience,

      skill,

      regeneration,

      stamina,

      winConditions,

      legacy

    },

    tags,

    haxTypes

  };
};


/* =========================================================
   HAX ADVANTAGE
========================================================= */

export const calculateHaxAdvantage = (
  attacker,
  defender,
  mode = 'standard'
) => {

  if (
    !attacker ||
    !defender
  ) {
    return 0;
  }

  /*
    No-Hax means no special matchup bonus.
  */

  if (
    mode ===
    'noHax'
  ) {
    return 0;
  }

  let advantage = 0;

  const attackerHax =
    attacker
      .derived
      .hax;

  const defenderHax =
    defender
      .derived
      .hax;

  const attackerTypes =
    attacker
      .haxTypes;

  const defenderTypes =
    defender
      .haxTypes;


  /* Raw hax difference */

  if (
    attackerHax >
    defenderHax
  ) {

    advantage +=
      Math.min(
        12,
        (
          attackerHax -
          defenderHax
        ) *
          0.25
      );

  }


  /* Time */

  if (
    attackerTypes.includes(
      'time'
    ) &&
    !defenderTypes.includes(
      'time'
    )
  ) {
    advantage += 5;
  }


  /* Mind */

  if (
    attackerTypes.includes(
      'mind'
    ) &&
    !defenderTypes.includes(
      'mind'
    )
  ) {
    advantage += 5;
  }


  /* Fate */

  if (
    attackerTypes.includes(
      'fate'
    ) &&
    !defenderTypes.includes(
      'fate'
    )
  ) {
    advantage += 6;
  }


  /* Reality */

  if (
    attackerTypes.includes(
      'reality'
    )
  ) {
    advantage += 5;
  }


  /* Sealing */

  if (
    attackerTypes.includes(
      'sealing'
    ) &&
    !defenderTypes.includes(
      'immortality'
    )
  ) {
    advantage += 4;
  }


  /* Power nullification */

  if (
    attackerTypes.includes(
      'nullification'
    ) &&
    defenderHax >
      0
  ) {
    advantage += 6;
  }


  /* Adaptation */

  if (
    attackerTypes.includes(
      'adaptation'
    )
  ) {
    advantage += 4;
  }


  /* Durability bypass */

  if (
    attackerTypes.includes(
      'durabilityNegation'
    )
  ) {
    advantage += 5;
  }


  /* Instant kill */

  if (
    attackerTypes.includes(
      'instantKill'
    ) &&
    defender
      .derived
      .durability <
      attackerHax
  ) {
    advantage += 8;
  }


  /* Special modes */

  if (
    mode ===
    'haxBattle'
  ) {
    advantage *=
      1.7;
  }

  if (
    mode ===
    'fullArsenal'
  ) {
    advantage *=
      1.2;
  }


  return clamp(
    advantage,
    0,
    40
  );
};


/* =========================================================
   CATEGORY WEIGHTS
========================================================= */

const BASE_WEIGHTS = {

  power: 1.00,

  speed: 0.90,

  hax: 1.20,

  intelligence: 0.55,

  battleIQ: 0.90,

  attackPower: 0.90,

  defense: 0.80,

  durability: 0.85,

  versatility: 0.85,

  experience: 0.55,

  skill: 0.80,

  regeneration: 0.50,

  stamina: 0.65,

  winConditions: 1.20,

  legacy: 0.35

};


/* =========================================================
   MODE WEIGHTS
========================================================= */

const getModeWeights = (
  mode
) => {

  const weights = {
    ...BASE_WEIGHTS
  };


  switch (
    mode
  ) {

    case 'equalStats':

      weights.power *=
        0.15;

      weights.attackPower *=
        0.35;

      weights.speed *=
        0.70;

      weights.defense *=
        0.70;

      weights.durability *=
        0.70;

      break;


    case 'fullArsenal':

      weights.hax *=
        1.35;

      weights.versatility *=
        1.20;

      weights.winConditions *=
        1.35;

      break;


    case 'noHax':

      weights.hax =
        0.05;

      weights.winConditions *=
        0.50;

      weights.versatility *=
        0.75;

      weights.regeneration *=
        0.35;

      break;


    case 'pureCombat':

      weights.power *=
        1.20;

      weights.speed *=
        1.25;

      weights.attackPower *=
        1.30;

      weights.skill *=
        1.45;

      weights.battleIQ *=
        1.35;

      weights.hax =
        0.10;

      weights.winConditions *=
        0.40;

      break;


    case 'speedEqualized':

      weights.speed =
        0.05;

      weights.battleIQ *=
        1.10;

      weights.skill *=
        1.10;

      break;


    case 'haxBattle':

      weights.power *=
        0.45;

      weights.attackPower *=
        0.45;

      weights.hax *=
        1.75;

      weights.versatility *=
        1.25;

      weights.winConditions *=
        1.70;

      break;


    default:
      break;

  }

  return weights;
};


/* =========================================================
   CATEGORY SCORES
========================================================= */

const buildCategoryScores = (
  leftProfile,
  rightProfile,
  mode
) => {

  const left =
    leftProfile.derived;

  const right =
    rightProfile.derived;


  /* Speed Equalized */

  let leftSpeed =
    left.speed;

  let rightSpeed =
    right.speed;

  if (
    mode ===
    'speedEqualized'
  ) {

    const averageSpeed =
      (
        leftSpeed +
        rightSpeed
      ) / 2;

    leftSpeed =
      averageSpeed;

    rightSpeed =
      averageSpeed;

  }


  /* Equal Stats */

  let leftPower =
    left.power;

  let rightPower =
    right.power;

  if (
    mode ===
    'equalStats'
  ) {

    const averagePower =
      (
        leftPower +
        rightPower
      ) / 2;

    leftPower =
      averagePower;

    rightPower =
      averagePower;

  }


  /* Hax */

  let leftHax =
    left.hax +
    calculateHaxAdvantage(
      leftProfile,
      rightProfile,
      mode
    );

  let rightHax =
    right.hax +
    calculateHaxAdvantage(
      rightProfile,
      leftProfile,
      mode
    );


  if (
    mode ===
    'noHax'
  ) {

    leftHax = 0;
    rightHax = 0;

  }


  return {

    power: {
      left:
        leftPower,
      right:
        rightPower
    },

    speed: {
      left:
        leftSpeed,
      right:
        rightSpeed
    },

    hax: {
      left:
        leftHax,
      right:
        rightHax
    },

    intelligence: {
      left:
        left.intelligence,
      right:
        right.intelligence
    },

    battleIQ: {
      left:
        left.battleIQ,
      right:
        right.battleIQ
    },

    attackPower: {
      left:
        left.attackPower,
      right:
        right.attackPower
    },

    defense: {
      left:
        left.defense,
      right:
        right.defense
    },

    durability: {
      left:
        left.durability,
      right:
        right.durability
    },

    versatility: {
      left:
        left.versatility,
      right:
        right.versatility
    },

    experience: {
      left:
        left.experience,
      right:
        right.experience
    },

    skill: {
      left:
        left.skill,
      right:
        right.skill
    },

    regeneration: {
      left:
        left.regeneration,
      right:
        right.regeneration
    },

    stamina: {
      left:
        left.stamina,
      right:
        right.stamina
    },

    winConditions: {
      left:
        left.winConditions,
      right:
        right.winConditions
    },

    legacy: {
      left:
        left.legacy,
      right:
        right.legacy
    }

  };
};


/* =========================================================
   CATEGORY WINNERS
========================================================= */

const getCategoryWinners = (
  categoryScores
) =>
  Object.entries(
    categoryScores
  ).map(
    ([category, scores]) => {

      const left =
        safeNumber(
          scores.left
        );

      const right =
        safeNumber(
          scores.right
        );

      let winner =
        'tie';

      if (
        left >
        right
      ) {
        winner =
          'left';
      }
      else if (
        right >
        left
      ) {
        winner =
          'right';
      }

      return {

        category,

        left,

        right,

        winner,

        difference:
          Math.abs(
            left -
            right
          )

      };

    }
  );


/* =========================================================
   WEIGHTED SCORE
========================================================= */

const weightedScore = (
  scores,
  side,
  weights
) =>
  Object.entries(
    scores
  ).reduce(
    (
      total,
      [category, value]
    ) =>
      total +
      safeNumber(
        value?.[side]
      ) *
        (
          weights[
            category
          ] || 1
        ),
    0
  );


/* =========================================================
   PRACTICAL POWER GAP
========================================================= */

/*
  This is the major realism layer.

  Example:

  2× gap   = meaningful
  10× gap  = severe
  100× gap = extreme

  A power gap is NOT automatically an instant win.

  Hax/counters can still rescue an underdog.
*/

const calculatePracticalGap = (
  leftProfile,
  rightProfile,
  mode
) => {

  if (
    mode ===
    'equalStats'
  ) {
    return {

      leftPenalty: 0,

      rightPenalty: 0,

      gapRatio: 1,

      gapSeverity: 0

    };
  }


  const leftPower =
    Math.max(
      1,
      safeNumber(
        leftProfile
          ?.direct
          ?.relativePower
      )
    );

  const rightPower =
    Math.max(
      1,
      safeNumber(
        rightProfile
          ?.direct
          ?.relativePower
      )
    );


  const stronger =
    Math.max(
      leftPower,
      rightPower
    );

  const weaker =
    Math.min(
      leftPower,
      rightPower
    );


  const ratio =
    weaker /
    stronger;


  const gapSeverity =
    Math.max(
      0,
      -Math.log10(
        ratio
      )
    );


  let leftPenalty =
    0;

  let rightPenalty =
    0;


  /* Moderate gap */

  if (
    gapSeverity >=
    0.30
  ) {

    if (
      leftPower <
      rightPower
    ) {
      leftPenalty +=
        6;
    } else {
      rightPenalty +=
        6;
    }

  }


  /* 2×+ */

  if (
    gapSeverity >=
    0.50
  ) {

    if (
      leftPower <
      rightPower
    ) {
      leftPenalty +=
        10;
    } else {
      rightPenalty +=
        10;
    }

  }


  /* 10×+ */

  if (
    gapSeverity >=
    1
  ) {

    if (
      leftPower <
      rightPower
    ) {
      leftPenalty +=
        18;
    } else {
      rightPenalty +=
        18;
    }

  }


  /* 30×+ */

  if (
    gapSeverity >=
    1.5
  ) {

    if (
      leftPower <
      rightPower
    ) {
      leftPenalty +=
        28;
    } else {
      rightPenalty +=
        28;
    }

  }


  /* 100×+ */

  if (
    gapSeverity >=
    2
  ) {

    if (
      leftPower <
      rightPower
    ) {
      leftPenalty +=
        40;
    } else {
      rightPenalty +=
        40;
    }

  }


  /* 300×+ */

  if (
    gapSeverity >=
    2.5
  ) {

    if (
      leftPower <
      rightPower
    ) {
      leftPenalty +=
        55;
    } else {
      rightPenalty +=
        55;
    }

  }


  return {

    leftPenalty,

    rightPenalty,

    gapRatio:
      ratio,

    gapSeverity

  };

};


/* =========================================================
   COUNTERPLAY
========================================================= */

const calculateCounterplay = (
  profile,
  opponent
) => {

  if (
    !profile ||
    !opponent
  ) {
    return 0;
  }

  const hax =
    profile
      .derived
      .hax;

  const winConditions =
    profile
      .derived
      .winConditions;

  const versatility =
    profile
      .derived
      .versatility;

  const attackerTypes =
    profile
      .haxTypes;

  const defenderTypes =
    opponent
      .haxTypes;


  let bonus = 0;


  /*
    Direct defensive bypass.
  */

  if (
    attackerTypes.includes(
      'reality'
    )
  ) {
    bonus +=
      16;
  }


  if (
    attackerTypes.includes(
      'durabilityNegation'
    )
  ) {
    bonus +=
      16;
  }


  if (
    attackerTypes.includes(
      'instantKill'
    )
  ) {
    bonus +=
      15;
  }


  if (
    attackerTypes.includes(
      'sealing'
    ) &&
    !defenderTypes.includes(
      'immortality'
    )
  ) {
    bonus +=
      10;
  }


  if (
    attackerTypes.includes(
      'nullification'
    ) &&
    opponent
      .derived
      .hax >
      50
  ) {
    bonus +=
      12;
  }


  if (
    attackerTypes.includes(
      'adaptation'
    )
  ) {
    bonus +=
      9;
  }


  /*
    General counterplay.
  */

  bonus +=
    hax *
    0.12;

  bonus +=
    winConditions *
    0.18;

  bonus +=
    versatility *
    0.08;


  return clamp(
    bonus,
    0,
    55
  );
};


/* =========================================================
   PRACTICAL PROBABILITY
========================================================= */

const calculatePracticalProbability = ({
  leftScore,
  rightScore,
  leftProfile,
  rightProfile,
  practicalGap,
  mode
}) => {

  const scoreRatio =
    leftScore /
    Math.max(
      1,
      rightScore
    );


  const logarithmicDifference =
    Math.log(
      Math.max(
        0.01,
        scoreRatio
      )
    );


  /*
    Base probability.

    Soft curve = small score differences stay
    relatively close.
  */

  let leftProbability =
    50 +
    Math.tanh(
      logarithmicDifference
    ) *
      45;


  const leftCounterplay =
    calculateCounterplay(
      leftProfile,
      rightProfile
    );

  const rightCounterplay =
    calculateCounterplay(
      rightProfile,
      leftProfile
    );


  const leftMajorCounter =
    leftCounterplay >
    rightCounterplay +
      10;

  const rightMajorCounter =
    rightCounterplay >
    leftCounterplay +
      10;


  /* -------------------------------------------------------
     EXTREME POWER GAP
  ------------------------------------------------------- */

  if (
    practicalGap.gapRatio <
    0.10
  ) {

    /*
      Left is weaker.
    */

    if (
      leftScore <
        rightScore &&
      !leftMajorCounter
    ) {

      leftProbability =
        Math.min(
          leftProbability,
          15
        );

    }


    /*
      Right is weaker.
    */

    if (
      rightScore <
        leftScore &&
      !rightMajorCounter
    ) {

      leftProbability =
        Math.max(
          leftProbability,
          85
        );

    }

  }


  /* 30×+ */

  if (
    practicalGap.gapRatio <
    0.03
  ) {

    if (
      leftScore <
        rightScore &&
      !leftMajorCounter
    ) {

      leftProbability =
        Math.min(
          leftProbability,
          7
        );

    }


    if (
      rightScore <
        leftScore &&
      !rightMajorCounter
    ) {

      leftProbability =
        Math.max(
          leftProbability,
          93
        );

    }

  }


  /* 100×+ */

  if (
    practicalGap.gapRatio <
    0.01
  ) {

    if (
      leftScore <
        rightScore &&
      !leftMajorCounter
    ) {

      leftProbability =
        Math.min(
          leftProbability,
          3
        );

    }


    if (
      rightScore <
        leftScore &&
      !rightMajorCounter
    ) {

      leftProbability =
        Math.max(
          leftProbability,
          97
        );

    }

  }


  /* -------------------------------------------------------
     HAX BATTLE
  ------------------------------------------------------- */

  if (
    mode ===
      'haxBattle' &&
    practicalGap.gapRatio <
      0.10
  ) {

    leftProbability =
      clamp(
        leftProbability +
          (
            leftCounterplay -
            rightCounterplay
          ) *
            0.20,
        5,
        95
      );

  }


  /* -------------------------------------------------------
     FULL ARSENAL
  ------------------------------------------------------- */

  if (
    mode ===
      'fullArsenal' &&
    practicalGap.gapRatio <
      0.10
  ) {

    leftProbability =
      clamp(
        leftProbability +
          (
            leftCounterplay -
            rightCounterplay
          ) *
            0.14,
        5,
        95
      );

  }


  /* -------------------------------------------------------
     PURE COMBAT
  ------------------------------------------------------- */

  if (
    mode ===
      'pureCombat' &&
    practicalGap.gapRatio <
      0.05
  ) {

    if (
      leftScore <
      rightScore
    ) {

      leftProbability =
        Math.min(
          leftProbability,
          5
        );

    } else {

      leftProbability =
        Math.max(
          leftProbability,
          95
        );

    }

  }


  leftProbability =
    clamp(
      leftProbability,
      1,
      99
    );


  const rightProbability =
    100 -
    leftProbability;


  const confidence =
    clamp(
      Math.abs(
        leftProbability -
        50
      ) *
        2
    );


  return {

    leftProbability:
      Math.round(
        leftProbability
      ),

    rightProbability:
      Math.round(
        rightProbability
      ),

    confidence:
      Math.round(
        confidence
      ),

    leftCounterplay,

    rightCounterplay

  };

};


/* =========================================================
   REASONING
========================================================= */

const generateReasoning = ({
  leftProfile,
  rightProfile,
  winner,
  categoryWinners,
  mode,
  practicalGap,
  leftCounterplay,
  rightCounterplay
}) => {

  if (
    winner ===
    'tie'
  ) {

    return `${leftProfile.name} and ${rightProfile.name} remain extremely close under the ${BATTLE_MODES[mode]?.name || 'Standard'} rules. Their available advantages largely cancel out, so the Tactical Judge does not force a winner.`;

  }


  const winning =
    winner ===
    'left'
      ? leftProfile
      : rightProfile;


  const losing =
    winner ===
    'left'
      ? rightProfile
      : leftProfile;


  const winningCounter =
    winner ===
    'left'
      ? leftCounterplay
      : rightCounterplay;


  const losingCounter =
    winner ===
    'left'
      ? rightCounterplay
      : leftCounterplay;


  const advantages =
    categoryWinners
      .filter(
        (item) =>
          item.winner ===
          winner
      )
      .sort(
        (a, b) =>
          b.difference -
          a.difference
      )
      .slice(
        0,
        4
      )
      .map(
        (item) =>
          item.category
      );


  let powerGapText;

  if (
    practicalGap.gapRatio <
    0.01
  ) {

    powerGapText =
      'The direct form-power gap is extreme and heavily affects practical viability.';

  } else if (
    practicalGap.gapRatio <
    0.03
  ) {

    powerGapText =
      'The direct form-power gap is enormous, creating a major practical disadvantage for the weaker form.';

  } else if (
    practicalGap.gapRatio <
    0.10
  ) {

    powerGapText =
      'There is a substantial direct form-power gap, so the weaker fighter needs meaningful counterplay to overcome it.';

  } else {

    powerGapText =
      'The direct form-power difference is not by itself decisive.';

  }


  let counterText;

  if (
    winningCounter >
    losingCounter +
      10
  ) {

    counterText =
      `${winning.name} also has the stronger detected counterplay and win-condition profile.`;

  } else if (
    losingCounter >
    winningCounter +
      10
  ) {

    counterText =
      `${losing.name} has stronger theoretical counterplay despite the overall disadvantage.`;

  } else {

    counterText =
      'Neither side has a dramatically superior detected counterplay profile.';

  }


  return `${winning.name} is favored under ${BATTLE_MODES[mode]?.name || 'Standard'} rules. The strongest category advantages are ${advantages.length ? advantages.join(', ') : 'overall balance'}. ${powerGapText} ${counterText} The engine considers not only who has higher numbers, but whether the weaker fighter can realistically damage, survive and execute a winning strategy against the stronger form.`;

};


/* =========================================================
   PRACTICAL VERDICT
========================================================= */

const generatePracticalVerdict = ({
  leftProfile,
  rightProfile,
  winner,
  leftProbability,
  practicalGap,
  mode
}) => {

  if (
    winner ===
    'tie'
  ) {

    return `Under ${BATTLE_MODES[mode]?.name || 'Standard'} rules, the matchup is too close for a confident practical winner.`;

  }


  const winning =
    winner ===
    'left'
      ? leftProfile
      : rightProfile;


  const losing =
    winner ===
    'left'
      ? rightProfile
      : leftProfile;


  const weakerProbability =
    winner ===
    'left'
      ? 100 -
        leftProbability
      : leftProbability;


  if (
    practicalGap.gapRatio <
    0.01
  ) {

    return `${winning.name} is overwhelmingly favored in practical terms. ${losing.name} would need an unusually strong and specifically applicable counter or win condition to overcome the extreme form-power gap. Estimated underdog chance: ${Math.round(weakerProbability)}%.`;

  }


  if (
    practicalGap.gapRatio <
    0.03
  ) {

    return `${winning.name} has an overwhelming practical advantage. ${losing.name} is not automatically unable to win, but the current data does not show enough counterplay to make the matchup close.`;

  }


  if (
    practicalGap.gapRatio <
    0.10
  ) {

    return `${winning.name} has a major practical advantage because of the form-power gap. ${losing.name} needs meaningful hax, counters or exceptional matchup conditions to turn the fight around.`;

  }


  return `${winning.name} has the more reliable overall path to victory under the selected ${BATTLE_MODES[mode]?.name || 'Standard'} rules.`;

};


/* =========================================================
   MAIN BATTLE FUNCTION
========================================================= */

export const analyzeBattle = (
  leftCharacter,
  rightCharacter,
  leftForm = null,
  rightForm = null,
  options = {}
) => {

  const mode =
    BATTLE_MODES[
      options.mode
    ]
      ? options.mode
      : 'standard';


  const resolvedLeftForm =
    leftForm ||
    getDefaultForm(
      leftCharacter
    );


  const resolvedRightForm =
    rightForm ||
    getDefaultForm(
      rightCharacter
    );


  const leftProfile =
    buildBattleProfile(
      leftCharacter,
      resolvedLeftForm
    );


  const rightProfile =
    buildBattleProfile(
      rightCharacter,
      resolvedRightForm
    );


  const categoryScores =
    buildCategoryScores(
      leftProfile,
      rightProfile,
      mode
    );


  const categoryWinners =
    getCategoryWinners(
      categoryScores
    );


  const weights =
    getModeWeights(
      mode
    );


  const baseLeftScore =
    weightedScore(
      categoryScores,
      'left',
      weights
    );


  const baseRightScore =
    weightedScore(
      categoryScores,
      'right',
      weights
    );


  /* -------------------------------------------------------
     PRACTICALITY
  ------------------------------------------------------- */

  const practicalGap =
    calculatePracticalGap(
      leftProfile,
      rightProfile,
      mode
    );


  let leftScore =
    baseLeftScore -
    practicalGap.leftPenalty;


  let rightScore =
    baseRightScore -
    practicalGap.rightPenalty;


  /*
    Counterplay recovery.

    An underdog can recover part of the practical
    penalty if they have meaningful hax or win conditions.
  */

  const leftCounterplay =
    calculateCounterplay(
      leftProfile,
      rightProfile
    );


  const rightCounterplay =
    calculateCounterplay(
      rightProfile,
      leftProfile
    );


  if (
    leftScore <
      baseLeftScore &&
    leftCounterplay >
      rightCounterplay
  ) {

    leftScore +=
      Math.min(
        practicalGap
          .leftPenalty *
          0.55,

        leftCounterplay *
          0.20
      );

  }


  if (
    rightScore <
      baseRightScore &&
    rightCounterplay >
      leftCounterplay
  ) {

    rightScore +=
      Math.min(
        practicalGap
          .rightPenalty *
          0.55,

        rightCounterplay *
          0.20
      );

  }


  leftScore =
    Math.max(
      0,
      leftScore
    );


  rightScore =
    Math.max(
      0,
      rightScore
    );


  /* -------------------------------------------------------
     WINNER
  ------------------------------------------------------- */

  let winner =
    'tie';


  if (
    leftScore >
    rightScore
  ) {

    winner =
      'left';

  }
  else if (
    rightScore >
    leftScore
  ) {

    winner =
      'right';

  }


  /* -------------------------------------------------------
     PROBABILITY
  ------------------------------------------------------- */

  const probability =
    calculatePracticalProbability({
      leftScore,
      rightScore,
      leftProfile,
      rightProfile,
      practicalGap,
      mode
    });


  /* -------------------------------------------------------
     EXPLANATION
  ------------------------------------------------------- */

  const explanation =
    generateReasoning({
      leftProfile,
      rightProfile,
      winner,
      categoryWinners,
      mode,
      practicalGap,
      leftCounterplay,
      rightCounterplay
    });


  const practicalVerdict =
    generatePracticalVerdict({
      leftProfile,
      rightProfile,
      winner,
      leftProbability:
        probability.leftProbability,
      practicalGap,
      mode
    });


  /* -------------------------------------------------------
     FINAL OBJECT
  ------------------------------------------------------- */

  return {

    /* Battle mode */

    mode,

    modeName:
      BATTLE_MODES[
        mode
      ].name,


    /* Fighters */

    winner,

    left:
      leftProfile.name,

    right:
      rightProfile.name,


    /* Forms */

    leftForm:
      leftProfile.form,

    rightForm:
      rightProfile.form,


    /* Scores */

    leftScore:
      Math.round(
        leftScore *
        100
      ) / 100,

    rightScore:
      Math.round(
        rightScore *
        100
      ) / 100,


    /* Probabilities */

    leftProbability:
      probability
        .leftProbability,

    rightProbability:
      probability
        .rightProbability,

    confidence:
      probability
        .confidence,


    /* Profiles */

    leftProfile,

    rightProfile,


    /* Tactical data */

    categoryScores,

    categoryWinners,

    categories:
      Object.fromEntries(
        categoryWinners.map(
          (item) => [
            item.category,
            item.winner
          ]
        )
      ),


    /* Intelligence */

    explanation,

    practicalVerdict,


    /* Practicality */

    practicalGap: {

      ratio:
        practicalGap
          .gapRatio,

      severity:
        practicalGap
          .gapSeverity,

      leftPenalty:
        practicalGap
          .leftPenalty,

      rightPenalty:
        practicalGap
          .rightPenalty

    },


    /* Counterplay */

    counterplay: {

      left:
        leftCounterplay,

      right:
        rightCounterplay

    },


    /* Useful compact matchup data */

    matchupSummary: {

      leftHaxTypes:
        leftProfile
          .haxTypes,

      rightHaxTypes:
        rightProfile
          .haxTypes,

      leftRelativePower:
        leftProfile
          .direct
          .relativePower,

      rightRelativePower:
        rightProfile
          .direct
          .relativePower,

      leftRealPower:
        leftProfile
          .direct
          .realPower,

      rightRealPower:
        rightProfile
          .direct
          .realPower,

      leftHax:
        leftProfile
          .direct
          .hax,

      rightHax:
        rightProfile
          .direct
          .hax

    },


    /* Honest limitation */

    limitations:
      'Derived tactical categories are model estimates based on the current database. They are not official canon numerical statistics.'

  };

};


/* =========================================================
   SIMPLE WINNER HELPER
========================================================= */

export const getBattleWinner = (
  leftCharacter,
  rightCharacter,
  leftForm = null,
  rightForm = null,
  options = {}
) => {

  const result =
    analyzeBattle(
      leftCharacter,
      rightCharacter,
      leftForm,
      rightForm,
      options
    );


  if (
    result.winner ===
    'left'
  ) {

    return {

      character:
        leftCharacter,

      form:
        leftForm ||
        getDefaultForm(
          leftCharacter
        ),

      result

    };

  }


  if (
    result.winner ===
    'right'
  ) {

    return {

      character:
        rightCharacter,

      form:
        rightForm ||
        getDefaultForm(
          rightCharacter
        ),

      result

    };

  }


  return {

    character: null,

    form: null,

    result

  };

};