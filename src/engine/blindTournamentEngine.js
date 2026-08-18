/*
=============================================================
 ANIME ARENA — INTEL / CLUE ENGINE
=============================================================

 Intel Phase:
 400 → 64

 3 free clues
 5 optional clues

 Optional clue:
 - reduces the maximum character-recognition reward

 Character recognition is forgiving:
 - Full name
 - Meaningful first/last name
 - Reversed name order
 - Known alternate database name

 The game rewards character knowledge,
 not exact database formatting.

=============================================================
*/


/* =========================================================
   CONSTANTS
========================================================= */

export const FREE_HINT_COUNT = 3;
export const OPTIONAL_HINT_COUNT = 5;
export const BASE_CHARACTER_POINTS = 10;


/* =========================================================
   HELPERS
========================================================= */

const normalizeText = (
  value
) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(
      /\s+/g,
      ' '
    );


const safeNumber = (
  value
) => {
  const number =
    Number(value);

  return Number.isFinite(
    number
  )
    ? number
    : 0;
};


/* =========================================================
   CHARACTER KEY
========================================================= */

export const getRevealCharacterKey = (
  character
) => {
  if (
    character?.id !==
      undefined &&
    character?.id !==
      null
  ) {
    return String(
      character.id
    );
  }

  return [
    normalizeText(
      character?.verse
    ),
    normalizeText(
      character?.anime
    ),
    normalizeText(
      character?.name
    )
  ].join('::');
};


/* =========================================================
   FORM HELPERS
========================================================= */

const getForms = (
  character
) =>
  Array.isArray(
    character?.forms
  )
    ? character.forms
    : [];


const getStrongestForm = (
  character
) => {
  const forms =
    getForms(
      character
    );

  if (
    !forms.length
  ) {
    return null;
  }

  return [
    ...forms
  ].sort(
    (a, b) =>
      safeNumber(
        b?.relPower
      ) -
      safeNumber(
        a?.relPower
      )
  )[0];
};


/* =========================================================
   TAGS
========================================================= */

const getTags = (
  character
) =>
  [
    ...(Array.isArray(
      character?.tags
    )
      ? character.tags
      : []),

    ...(Array.isArray(
      character?.abilities
    )
      ? character.abilities
      : []),

    ...(Array.isArray(
      character?.haxTags
    )
      ? character.haxTags
      : [])
  ]
    .filter(Boolean)
    .map(
      (tag) =>
        String(tag)
    );


/* =========================================================
   VERSE
========================================================= */

const getVerse = (
  character
) =>
  character?.verse ||
  character?.anime ||
  character?.series ||
  character?.universe ||
  null;


/* =========================================================
   HINT GENERATION
========================================================= */

export const generateRevealHints = (
  character
) => {
  const forms =
    getForms(
      character
    );

  const strongest =
    getStrongestForm(
      character
    );

  const tags =
    getTags(
      character
    );

  const verse =
    getVerse(
      character
    );

  const power =
    safeNumber(
      strongest?.relPower
    );

  const hax =
    safeNumber(
      strongest?.hax
    );

  const hints = [];


  /* =======================================================
     FREE HINT 1
  ======================================================= */

  hints.push({
    id: 'free-1',
    type: 'free',
    label: 'UNIVERSE',

    text:
      verse
        ? `This character belongs to the ${verse} universe.`
        : 'This character has a distinctive anime identity.'
  });


  /* =======================================================
     FREE HINT 2
  ======================================================= */

  hints.push({
    id: 'free-2',
    type: 'free',
    label: 'FORM PROFILE',

    text:
      forms.length >= 3
        ? 'This character has several recorded forms or transformations.'
        : 'This character has a recognizable combat profile.'
  });


  /* =======================================================
     FREE HINT 3
  ======================================================= */

  hints.push({
    id: 'free-3',
    type: 'free',
    label: 'TRAIT',

    text:
      tags.length
        ? `Associated with ${tags
            .slice(
              0,
              2
            )
            .join(
              ' and '
            )}.`
        : 'This character has a distinctive battle or story identity.'
  });


  /* =======================================================
     PAID HINT 1
  ======================================================= */

  hints.push({
    id: 'paid-1',
    type: 'paid',
    label: 'POWER',

    text:
      power >= 90000
        ? 'This character has an extremely high-end power profile.'
        : power >= 60000
          ? 'This character has a high-end power profile.'
          : power >= 30000
            ? 'This character has a strong combat profile.'
            : 'This character is not defined purely by raw power.'
  });


  /* =======================================================
     PAID HINT 2
  ======================================================= */

  hints.push({
    id: 'paid-2',
    type: 'paid',
    label: 'ABILITY',

    text:
      hax >= 80
        ? 'This character has an exceptionally strong special-ability profile.'
        : hax >= 55
          ? 'This character has several meaningful special abilities.'
          : hax >= 30
            ? 'This character possesses notable special abilities.'
            : 'This character does not heavily depend on extreme hax.'
  });


  /* =======================================================
     PAID HINT 3
  ======================================================= */

  hints.push({
    id: 'paid-3',
    type: 'paid',
    label: 'FORM COUNT',

    text:
      `The database records ${forms.length} form${
        forms.length === 1
          ? ''
          : 's'
      } for this character.`
  });


  /* =======================================================
     PAID HINT 4
  ======================================================= */

  hints.push({
    id: 'paid-4',
    type: 'paid',
    label: 'COMBAT STYLE',

    text:
      power > hax * 900
        ? 'This character leans heavily toward raw combat output.'
        : 'This character has strengths that are not explained by raw power alone.'
  });


  /* =======================================================
     PAID HINT 5
  ======================================================= */

  hints.push({
    id: 'paid-5',
    type: 'paid',
    label: 'FINAL INTEL',

    text:
      tags.length > 2
        ? `Known associated traits include ${tags
            .slice(
              0,
              3
            )
            .join(
              ', '
            )}.`
        : 'This character has a distinct combination of power, abilities and forms.'
  });


  return hints;
};


/* =========================================================
   CREATE REVEAL STATE
========================================================= */

export const createRevealState = (
  character,
  selector
) => ({
  character,

  characterKey:
    getRevealCharacterKey(
      character
    ),

  selector,

  hints:
    generateRevealHints(
      character
    ),

  revealedPaidHints:
    [],

  fullyRevealed:
    false
});


/* =========================================================
   OPTIONAL HINTS
========================================================= */

export const getOptionalHints = (
  revealState
) =>
  revealState?.hints?.filter(
    (hint) =>
      hint.type ===
      'paid'
  ) || [];


/* =========================================================
   REVEAL PAID CLUE
========================================================= */

export const revealPaidClue = (
  revealState,
  hintId
) => {
  if (
    !revealState
  ) {
    return revealState;
  }

  const exists =
    revealState.hints.some(
      (hint) =>
        hint.id ===
          hintId &&
        hint.type ===
          'paid'
    );

  if (
    !exists
  ) {
    return revealState;
  }

  if (
    revealState.revealedPaidHints.includes(
      hintId
    )
  ) {
    return revealState;
  }

  if (
    revealState.revealedPaidHints
      .length >=
    OPTIONAL_HINT_COUNT
  ) {
    return revealState;
  }

  return {
    ...revealState,

    revealedPaidHints:
      [
        ...revealState.revealedPaidHints,
        hintId
      ]
  };
};


/* =========================================================
   FULL REVEAL
========================================================= */

export const fullyRevealCharacter = (
  revealState
) => {
  if (
    !revealState
  ) {
    return revealState;
  }

  return {
    ...revealState,

    fullyRevealed:
      true,

    revealedPaidHints:
      getOptionalHints(
        revealState
      ).map(
        (hint) =>
          hint.id
      )
  };
};


/* =========================================================
   CHARACTER GUESS POINTS
========================================================= */

export const getCharacterGuessPoints = (
  correct,
  cluesUsed = 0
) => {
  if (
    !correct
  ) {
    return 0;
  }

  const safeClues =
    Math.max(
      0,
      Math.min(
        OPTIONAL_HINT_COUNT,
        safeNumber(
          cluesUsed
        )
      )
    );

  return Math.max(
    1,
    BASE_CHARACTER_POINTS -
      safeClues
  );
};


/* =========================================================
   BUILD POSSIBLE NAMES
========================================================= */

const getPossibleNames = (
  character
) => {
  return [
    character?.name,
    character?.nativeName,
    character?.native,
    character?.japaneseName,
    character?.romajiName,
    character?.englishName,
    character?.alias
  ]
    .filter(Boolean)
    .map(
      normalizeText
    );
};


/* =========================================================
   MEANINGFUL NAME PART
========================================================= */

const isMeaningfulNamePart = (
  part
) => {
  /*
    Ignore extremely short fragments.

    This prevents:
      "go"
      "ken"
      "zen"

    from accidentally counting as full knowledge.

    Four or more characters is our safe threshold.
  */

  return (
    part.length >= 4
  );
};


/* =========================================================
   CHARACTER ANSWER MATCHING
========================================================= */

/*
  Examples accepted:

  Kento Nanami
  → kento nanami ✅

  Nanami
  → nanami ✅

  Nanami Kento
  → nanami kento ✅

  Zenitsu Agatsuma
  → zenitsu ✅

  Agatsuma
  → agatsuma ✅

  Roronoa Zoro
  → zoro ✅

  Monkey D. Luffy
  → luffy ✅

  Too-short fragments:

  Ken
  → ❌

  Zen
  → ❌

  Go
  → ❌
*/

export const answerMatchesCharacter = (
  answer,
  character
) => {
  const guess =
    normalizeText(
      answer
    );

  if (
    !guess
  ) {
    return false;
  }

  const possibleNames =
    getPossibleNames(
      character
    );


  /* =======================================================
     1. EXACT FULL NAME
  ======================================================= */

  if (
    possibleNames.includes(
      guess
    )
  ) {
    return true;
  }


  /* =======================================================
     2. SINGLE MEANINGFUL NAME COMPONENT
  ======================================================= */

  for (
    const fullName of possibleNames
  ) {
    const parts =
      fullName
        .split(/\s+/)
        .filter(
          isMeaningfulNamePart
        );

    if (
      parts.includes(
        guess
      )
    ) {
      return true;
    }
  }


  /* =======================================================
     3. REVERSED MULTI-WORD NAME
     
     Example:
       Kento Nanami
       Nanami Kento
  ======================================================= */

  const guessWords =
    guess
      .split(/\s+/)
      .filter(Boolean);

  if (
    guessWords.length >= 2
  ) {
    for (
      const fullName of possibleNames
    ) {
      const nameWords =
        fullName
          .split(/\s+/)
          .filter(Boolean);

      if (
        guessWords.length !==
        nameWords.length
      ) {
        continue;
      }

      const sameWords =
        guessWords.every(
          (word) =>
            nameWords.includes(
              word
            )
        );

      if (
        sameWords
      ) {
        return true;
      }
    }
  }


  /* =======================================================
     4. WORD-BASED MATCH
     
     Allows a meaningful single word even if the
     database stores extra formatting.
  ======================================================= */

  if (
    guessWords.length === 1 &&
    isMeaningfulNamePart(
      guessWords[0]
    )
  ) {
    for (
      const fullName of possibleNames
    ) {
      const parts =
        fullName
          .split(/\s+/)
          .filter(
            isMeaningfulNamePart
          );

      if (
        parts.includes(
          guessWords[0]
        )
      ) {
        return true;
      }
    }
  }


  return false;
};


/* =========================================================
   SCORE CHARACTER GUESS
========================================================= */

export const scoreCharacterGuess = ({
  answer,
  character,
  cluesUsed = 0
}) => {
  const correct =
    answerMatchesCharacter(
      answer,
      character
    );

  return {
    correct,

    points:
      getCharacterGuessPoints(
        correct,
        cluesUsed
      )
  };
};