import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  ANIME_VERSES,
  EXPANDED_ROLES
} from './data/animeData';

import GameHub from './components/GameHub';
import BattleMode from './modes/BattleMode';
import TournamentMode from './modes/TournamentMode';
import AuctionMode from './modes/AuctionMode';
import AITactician from './components/AITactician';

import confetti from 'canvas-confetti';

import AIDraftTactician from './components/AIDraftTactician';

import {
  Swords,
  RotateCcw,
  Trophy,
  Users,
  ChevronRight,
  Zap,
  Scale,
  Globe,
  Sparkles,
  CheckSquare,
  Square,
  BookOpen,
  Brain,
  X,
  Crown,
  Crosshair,
  BarChart3,
  Lightbulb,
  MessageCircle,
  ArrowLeft,
  Flame,
  Bot,
  ImageOff,
  Shuffle,
  Wand2,
  Shield
} from 'lucide-react';


/* =========================================================
   BASIC HELPERS
========================================================= */

const clamp = (
  value,
  min = 0,
  max = 100
) =>
  Math.max(
    min,
    Math.min(
      max,
      Number(value) || 0
    )
  );


const average = (
  values
) => {
  if (!values.length) {
    return 0;
  }

  return (
    values.reduce(
      (a, b) =>
        a + b,
      0
    ) /
    values.length
  );
};


const normalizeName = (
  value
) =>
  String(
    value || ''
  )
    .trim()
    .toLowerCase();


/* =========================================================
   FORM RARITY
========================================================= */

const getFormRarity = (
  formName,
  formIndex
) => {
  const text =
    String(
      formName || ''
    ).toLowerCase();

  if (
    /ultra instinct|baryon|gear fifth|gear 5|true bankai|horn of|heian|black frieza|beast|devil union|perfect|cosmic|peak|full power|final form|goal of all life|hero of hell|founder|dragon emperor/.test(
      text
    )
  ) {
    return {
      name: 'MYTHIC',
      icon: '🔴',
      className:
        'bg-red-950 border-red-600 text-red-300'
    };
  }


  if (
    /ultimate|awakened|bankai|domain|berserk|monarch|dragon|perfect|100%|full power|mature|completed|prime|awakened titan/.test(
      text
    )
  ) {
    return {
      name: 'LEGENDARY',
      icon: '🟠',
      className:
        'bg-orange-950 border-orange-600 text-orange-300'
    };
  }


  if (
    /advanced|mastery|sage|shikai|second|third|rage|released|awakening|transformation|spirit|super|hybrid/.test(
      text
    )
  ) {
    return {
      name: 'EPIC',
      icon: '🟣',
      className:
        'bg-purple-950 border-purple-600 text-purple-300'
    };
  }


  if (
    /enhanced|powered|powered-up|evolved|stage|form 2|level 2/.test(
      text
    ) ||
    formIndex === 1
  ) {
    return {
      name: 'RARE',
      icon: '🔵',
      className:
        'bg-blue-950 border-blue-600 text-blue-300'
    };
  }


  return {
    name: 'COMMON',
    icon: '⚪',
    className:
      'bg-neutral-900 border-neutral-700 text-neutral-300'
  };
};


/* =========================================================
   ROLE PRESETS
========================================================= */

const ROLE_NAME_PRESETS = {
  Default: {
    captain: ['Captain', '👑'],
    vice_captain: ['Vice Captain', '🎖️'],
    vanguard: ['Vanguard', '⚔️'],
    support_1: ['Support 1', '💊'],
    support_2: ['Support 2', '🧩'],
    support_3: ['Support 3', '🛡️'],
    support_4: ['Support 4', '🔮'],
    tank: ['Tank', '💪'],
    healer: ['Healer', '💉'],
    speedster: ['Speedster', '⚡'],
    hax: ['Hax Specialist', '🌀'],
    glass_cannon: ['Glass Cannon', '💥'],
    strategist: ['Strategist', '🧠'],
    boss: ['Final Boss', '🔥'],
    traitor: ['Wildcard', '🃏'],
    tactician: ['Tactician', '📐'],
    enforcer: ['Enforcer', '🔨'],
    defender: ['Defender', '🔰'],
    anchor: ['Team Anchor', '⚓'],
    finisher: ['Finisher', '🎯']
  },

  Shonen: {
    captain: ['King', '👑'],
    vice_captain: ['Right Hand', '🎖️'],
    vanguard: ['Berserker', '⚔️'],
    support_1: ['Medic', '💊'],
    support_2: ['Trickster', '🧩'],
    support_3: ['Guardian', '🛡️'],
    support_4: ['Oracle', '🔮'],
    tank: ['Juggernaut', '💪'],
    healer: ['Lifeline', '💉'],
    speedster: ['Flash', '⚡'],
    hax: ['Reality Breaker', '🌀'],
    glass_cannon: ['Destroyer', '💥'],
    strategist: ['Mastermind', '🧠'],
    boss: ['Demon King', '🔥'],
    traitor: ['Wildcard', '🃏'],
    tactician: ['War Chief', '📐'],
    enforcer: ['Executioner', '🔨'],
    defender: ['Shield Lord', '🔰'],
    anchor: ['Pillar', '⚓'],
    finisher: ['Executioner', '🎯']
  },

  Dark: {
    captain: ['Overlord', '👑'],
    vice_captain: ['Dark Hand', '🎖️'],
    vanguard: ['Blood Knight', '⚔️'],
    support_1: ['Plague Doctor', '💊'],
    support_2: ['Manipulator', '🧩'],
    support_3: ['Dark Guard', '🛡️'],
    support_4: ['Oracle', '🔮'],
    tank: ['Juggernaut', '💪'],
    healer: ['Soul Binder', '💉'],
    speedster: ['Phantom', '⚡'],
    hax: ['Reality Eater', '🌀'],
    glass_cannon: ['Death Bringer', '💥'],
    strategist: ['Grand Schemer', '🧠'],
    boss: ['Abyss Lord', '🔥'],
    traitor: ['Chaos Agent', '🃏'],
    tactician: ['Dark Tactician', '📐'],
    enforcer: ['Executioner', '🔨'],
    defender: ['Dread Wall', '🔰'],
    anchor: ['Black Anchor', '⚓'],
    finisher: ['Soul Reaper', '🎯']
  },

  RPG: {
    captain: ['Guild Master', '👑'],
    vice_captain: ['Champion', '🎖️'],
    vanguard: ['Berserker', '⚔️'],
    support_1: ['Cleric', '💊'],
    support_2: ['Rogue', '🧩'],
    support_3: ['Guardian', '🛡️'],
    support_4: ['Mage', '🔮'],
    tank: ['Paladin', '💪'],
    healer: ['White Mage', '💉'],
    speedster: ['Assassin', '⚡'],
    hax: ['Archmage', '🌀'],
    glass_cannon: ['DPS', '💥'],
    strategist: ['Battle Sage', '🧠'],
    boss: ['Raid Boss', '🔥'],
    traitor: ['Dark Knight', '🃏'],
    tactician: ['Commander', '📐'],
    enforcer: ['Executioner', '🔨'],
    defender: ['Guardian', '🔰'],
    anchor: ['Main Tank', '⚓'],
    finisher: ['Final Strike', '🎯']
  }
};


/* =========================================================
   IMAGE CACHE
========================================================= */

const IMAGE_CACHE_KEY =
  'anime_draft_arena_character_images_v3';


const getStoredImages = () => {
  try {
    const raw =
      localStorage.getItem(
        IMAGE_CACHE_KEY
      );

    return raw
      ? JSON.parse(raw)
      : {};
  } catch {
    return {};
  }
};


const saveStoredImage = (
  characterName,
  imageUrl
) => {
  try {
    const cache =
      getStoredImages();

    cache[
      normalizeName(
        characterName
      )
    ] = imageUrl;

    localStorage.setItem(
      IMAGE_CACHE_KEY,
      JSON.stringify(
        cache
      )
    );
  } catch {
    /* Storage failure ignored. */
  }
};


const testImage = (
  url
) =>
  new Promise(
    (resolve) => {
      if (!url) {
        resolve(false);
        return;
      }

      const image =
        new Image();

      image.onload =
        () =>
          resolve(true);

      image.onerror =
        () =>
          resolve(false);

      image.src = url;
    }
  );


/* =========================================================
   ANILIST IMAGE SEARCH
========================================================= */

const ANILIST_QUERY = `
  query ($search: String) {
    Character(search: $search) {
      id
      name {
        full
        native
      }
      image {
        large
        medium
      }
    }
  }
`;


const searchAniList =
  async (
    characterName
  ) => {
    try {
      const response =
        await fetch(
          'https://graphql.anilist.co',
          {
            method:
              'POST',

            headers: {
              'Content-Type':
                'application/json',

              Accept:
                'application/json'
            },

            body:
              JSON.stringify({
                query:
                  ANILIST_QUERY,

                variables: {
                  search:
                    characterName
                }
              })
          }
        );

      if (
        !response.ok
      ) {
        throw new Error(
          `AniList HTTP ${response.status}`
        );
      }

      const json =
        await response.json();

      return (
        json?.data
          ?.Character
          ?.image?.large ||
        json?.data
          ?.Character
          ?.image?.medium ||
        null
      );
    } catch (
      error
    ) {
      console.warn(
        'AniList image search failed:',
        characterName,
        error
      );

      return null;
    }
  };


/* =========================================================
   JIKAN IMAGE SEARCH
========================================================= */

const searchJikan =
  async (
    characterName
  ) => {
    try {
      const url =
        `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(
          characterName
        )}&limit=5`;

      const response =
        await fetch(
          url
        );

      if (
        !response.ok
      ) {
        throw new Error(
          `Jikan HTTP ${response.status}`
        );
      }

      const json =
        await response.json();

      const results =
        json?.data ||
        [];

      if (
        !results.length
      ) {
        return null;
      }

      const exact =
        results.find(
          (item) =>
            normalizeName(
              item?.name
            ) ===
            normalizeName(
              characterName
            )
        );

      return (
        exact?.images?.jpg
          ?.image_url ||
        results[0]?.images
          ?.jpg?.image_url ||
        null
      );
    } catch (
      error
    ) {
      console.warn(
        'Jikan image search failed:',
        characterName,
        error
      );

      return null;
    }
  };


/* =========================================================
   IMAGE RESOLVER
========================================================= */

const resolveCharacterImage =
  async (
    characterName
  ) => {
    const normalized =
      normalizeName(
        characterName
      );

    const stored =
      getStoredImages();

    if (
      stored[
        normalized
      ]
    ) {
      const works =
        await testImage(
          stored[
            normalized
          ]
        );

      if (works) {
        return stored[
          normalized
        ];
      }
    }

    const searchNames = [
      characterName,

      String(
        characterName ||
          ''
      )
        .replace(
          /\([^)]*\)/g,
          ''
        )
        .trim()
    ];

    for (
      const searchName of
      searchNames
    ) {
      if (
        !searchName
      ) {
        continue;
      }

      for (
        let attempt = 0;
        attempt < 2;
        attempt++
      ) {
        const image =
          await searchAniList(
            searchName
          );

        if (
          image &&
          (await testImage(
            image
          ))
        ) {
          saveStoredImage(
            characterName,
            image
          );

          return image;
        }

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              700
            )
        );
      }
    }

    const jikan =
      await searchJikan(
        characterName
      );

    if (
      jikan &&
      (await testImage(
        jikan
      ))
    ) {
      saveStoredImage(
        characterName,
        jikan
      );

      return jikan;
    }

    return null;
  };


/* =========================================================
   DRAFT TACTICAL TRAITS
========================================================= */

const getCharacterTraits = (
  card
) => {
  const text =
    `${card?.name || ''} ${
      card?.form || ''
    } ${(card?.tags || []).join(' ')}`
      .toLowerCase();

  const speedSignals = [
    'speed',
    'flash',
    'light',
    'instant',
    'teleport',
    'shunpo',
    'faster',
    'minato',
    'gojo',
    'goku',
    'vegeta',
    'ichigo',
    'killua',
    'lightning'
  ];

  const defenseSignals = [
    'armor',
    'defense',
    'barrier',
    'immortal',
    'regeneration',
    'regen',
    'susanoo',
    'ultra instinct',
    'ultra ego',
    'six eyes',
    'limitless',
    'jinchuriki',
    'tank',
    'shield',
    'guardian'
  ];

  const versatilitySignals = [
    'hax',
    'rinnegan',
    'sharingan',
    'six eyes',
    'limitless',
    'quincy',
    'shinigami',
    'magic',
    'curse',
    'devil',
    'stand',
    'domain',
    'alchemy',
    'nen',
    'dimension',
    'time',
    'teleport',
    'spatial',
    'control'
  ];

  const speedHits =
    speedSignals.filter(
      (word) =>
        text.includes(
          word
        )
    ).length;

  const defenseHits =
    defenseSignals.filter(
      (word) =>
        text.includes(
          word
        )
    ).length;

  const versatilityHits =
    versatilitySignals.filter(
      (word) =>
        text.includes(
          word
        )
    ).length;

  const power =
    clamp(
      (
        Number(
          card?.power
        ) || 0
      ) / 1000
    );

  const hax =
    clamp(
      card?.hax
    );

  const speed =
    clamp(
      52 +
        speedHits * 8 +
        hax * 0.18 +
        power * 0.18
    );

  const defense =
    clamp(
      48 +
        defenseHits * 9 +
        power * 0.16 +
        hax * 0.10
    );

  const versatility =
    clamp(
      50 +
        versatilityHits * 8 +
        hax * 0.25
    );

  const battleIQ =
    clamp(
      55 +
        hax * 0.18 +
        versatility * 0.18
    );

  return {
    power,
    hax,
    speed,
    defense,
    versatility,
    battleIQ
  };
};


/* =========================================================
   DRAFT COUNTER LOGIC
========================================================= */

const getCounterBonus = (
  attacker,
  defender
) => {
  if (
    !attacker ||
    !defender
  ) {
    return 0;
  }

  const aText =
    `${attacker.name} ${
      attacker.form
    } ${(attacker.tags || []).join(' ')}`
      .toLowerCase();

  const dText =
    `${defender.name} ${
      defender.form
    } ${(defender.tags || []).join(' ')}`
      .toLowerCase();

  let bonus = 0;

  const counters = [
    ['anti-magic', 'magic'],
    ['quincy', 'shinigami'],
    ['jinchuriki', 'chakra'],
    ['teleport', 'range'],
    ['dimension', 'physical'],
    ['sealing', 'regeneration'],
    ['time', 'speed'],
    ['control', 'mind']
  ];

  counters.forEach(
    ([a, d]) => {
      if (
        aText.includes(a) &&
        dText.includes(d)
      ) {
        bonus += 4;
      }
    }
  );

  if (
    aText.includes('rinnegan') ||
    aText.includes('sharingan') ||
    aText.includes('six eyes') ||
    aText.includes('limitless') ||
    aText.includes('almighty')
  ) {
    bonus += 3;
  }

  return bonus;
};


/* =========================================================
   DRAFT MATCHUP JUDGE
========================================================= */

const judgeMatchup = (
  left,
  right,
  role
) => {
  if (
    !left ||
    !right
  ) {
    return {
      winner: 'draw',
      leftScore: 0,
      rightScore: 0,
      margin: 0,
      explanation:
        'Incomplete matchup.'
    };
  }

  const L =
    getCharacterTraits(
      left
    );

  const R =
    getCharacterTraits(
      right
    );

  const rolePower =
    role?.powerMult ||
    1;

  const roleHax =
    role?.haxMult ||
    1;

  const leftScore =
    L.power *
      rolePower *
      0.34 +
    L.hax *
      roleHax *
      0.22 +
    L.speed *
      0.14 +
    L.defense *
      0.10 +
    L.versatility *
      0.10 +
    L.battleIQ *
      0.10 +
    getCounterBonus(
      left,
      right
    );

  const rightScore =
    R.power *
      rolePower *
      0.34 +
    R.hax *
      roleHax *
      0.22 +
    R.speed *
      0.14 +
    R.defense *
      0.10 +
    R.versatility *
      0.10 +
    R.battleIQ *
      0.10 +
    getCounterBonus(
      right,
      left
    );

  const diff =
    Math.abs(
      leftScore -
        rightScore
    );

  let winner =
    'draw';

  if (
    diff >= 2.5
  ) {
    winner =
      leftScore >
      rightScore
        ? 'left'
        : 'right';
  }

  if (
    winner ===
    'draw'
  ) {
    return {
      winner,
      leftScore,
      rightScore,
      margin: diff,

      explanation:
        `${left.name} and ${right.name} are extremely close in this ${
          role?.name ||
          'role'
        } matchup. Their strengths largely cancel each other out.`,

      leftStats: L,
      rightStats: R
    };
  }

  const winnerCard =
    winner ===
    'left'
      ? left
      : right;

  const loserCard =
    winner ===
    'left'
      ? right
      : left;

  const winnerStats =
    winner ===
    'left'
      ? L
      : R;

  const loserStats =
    winner ===
    'left'
      ? R
      : L;

  const reasons = [];

  if (
    winnerStats.power >
    loserStats.power + 5
  ) {
    reasons.push(
      'higher combat output'
    );
  }

  if (
    winnerStats.speed >
    loserStats.speed + 5
  ) {
    reasons.push(
      'better speed and initiative'
    );
  }

  if (
    winnerStats.hax >
    loserStats.hax + 5
  ) {
    reasons.push(
      'stronger special abilities'
    );
  }

  if (
    winnerStats.defense >
    loserStats.defense + 5
  ) {
    reasons.push(
      'better defense'
    );
  }

  if (
    winnerStats.versatility >
    loserStats.versatility + 5
  ) {
    reasons.push(
      'greater versatility'
    );
  }

  if (
    winnerStats.battleIQ >
    loserStats.battleIQ + 5
  ) {
    reasons.push(
      'better tactical decision-making'
    );
  }

  if (
    !reasons.length
  ) {
    reasons.push(
      'a small advantage across several categories'
    );
  }

  return {
    winner,
    leftScore,
    rightScore,
    margin: diff,

    explanation:
      `${winnerCard.name} defeats ${loserCard.name} in the ${
        role?.name ||
        'role'
      } matchup because of ${reasons
        .slice(0, 3)
        .join(', ')}. ${
        loserCard.name
      } still has viable win conditions, but the winning side has the more reliable path to victory.`,

    leftStats: L,
    rightStats: R
  };
};


/* =========================================================
   DRAFT TEAM ANALYSIS
========================================================= */

const analyzeTeam = (
  player,
  team,
  selectedRoles
) => {
  const cards =
    selectedRoles
      .map(
        (role) => ({
          role,

          card:
            team?.[
              role.id
            ]
        })
      )
      .filter(
        (item) =>
          item.card
      );

  if (
    !cards.length
  ) {
    return {
      player,
      power: 0,
      hax: 0,
      speed: 0,
      defense: 0,
      versatility: 0,
      synergy: 0,
      coverage: 0,
      balance: 0,
      total: 0,
      cards: []
    };
  }

  const stats =
    cards.map(
      ({
        card
      }) =>
        getCharacterTraits(
          card
        )
    );

  const power =
    average(
      stats.map(
        (s) =>
          s.power
      )
    );

  const hax =
    average(
      stats.map(
        (s) =>
          s.hax
      )
    );

  const speed =
    average(
      stats.map(
        (s) =>
          s.speed
      )
    );

  const defense =
    average(
      stats.map(
        (s) =>
          s.defense
      )
    );

  const versatility =
    average(
      stats.map(
        (s) =>
          s.versatility
      )
    );

  const battleIQ =
    average(
      stats.map(
        (s) =>
          s.battleIQ
      )
    );

  const tagCount =
    {};

  cards.forEach(
    ({ card }) => {
      (
        card.tags ||
        []
      ).forEach(
        (tag) => {
          const key =
            String(
              tag
            ).toLowerCase();

          tagCount[key] =
            (
              tagCount[key] ||
              0
            ) + 1;
        }
      );
    }
  );

  const repeatedTags =
    Object.values(
      tagCount
    ).filter(
      (n) =>
        n >= 2
    ).length;

  const uniqueTags =
    Object.keys(
      tagCount
    ).length;

  const roleCoverage =
    new Set(
      cards.map(
        ({ role }) =>
          role.id
      )
    ).size;

  const synergy =
    clamp(
      52 +
        roleCoverage * 3 +
        repeatedTags * 3 +
        Math.min(
          uniqueTags,
          8
        ) *
          2 +
        battleIQ *
          0.18
    );

  const coverage =
    clamp(
      48 +
        versatility * 0.30 +
        speed * 0.15 +
        hax * 0.18 +
        roleCoverage * 2
    );

  const balance =
    clamp(
      45 +
        Math.min(
          power,
          defense
        ) *
          0.25 +
        Math.min(
          speed,
          versatility
        ) *
          0.18 +
        synergy *
          0.16
    );

  const total =
    power * 0.25 +
    hax * 0.16 +
    speed * 0.12 +
    defense * 0.12 +
    versatility * 0.12 +
    synergy * 0.12 +
    coverage * 0.06 +
    balance * 0.05;

  return {
    player,
    power,
    hax,
    speed,
    defense,
    versatility,
    synergy,
    coverage,
    balance,
    total,
    cards
  };
};


/* =========================================================
   APP
========================================================= */

export default function App() {

  /* =======================================================
     SCREEN / NAVIGATION
  ======================================================= */

  const [
    screen,
    setScreen
  ] =
    useState(
      () =>
        window.history.state?.screen ||
        'gamehub'
    );


  const navigateTo = (
    nextScreen
  ) => {
    window.history.pushState(
      {
        screen:
          nextScreen
      },
      '',
      window.location.pathname
    );

    setScreen(
      nextScreen
    );
  };


  useEffect(
    () => {
      const handlePopState =
        (event) => {
          const previousScreen =
            event
              .state
              ?.screen ||
            'gamehub';

          setScreen(
            previousScreen
          );
        };

      window.addEventListener(
        'popstate',
        handlePopState
      );

      if (
        !window.history.state
          ?.screen
      ) {
        window.history.replaceState(
          {
            screen:
              'gamehub'
          },
          '',
          window.location.pathname
        );
      }

      return () => {
        window.removeEventListener(
          'popstate',
          handlePopState
        );
      };
    },
    []
  );


  /* =======================================================
     DRAFT STATE
  ======================================================= */

  const [
    selectedVerses,
    setSelectedVerses
  ] =
    useState(
      Object.keys(
        ANIME_VERSES
      )
    );

  const [
    powerMode,
    setPowerMode
  ] =
    useState(
      'relative'
    );

  const [
    playerNames,
    setPlayerNames
  ] =
    useState([
      'Player 1',
      'Player 2',
      'Player 3'
    ]);

  const [
    roleCount,
    setRoleCount
  ] =
    useState(6);

  const [
    customRoleNames,
    setCustomRoleNames
  ] =
    useState({});

  const [
    customRoleIcons,
    setCustomRoleIcons
  ] =
    useState({});


  const selectedRoles =
    useMemo(
      () =>
        EXPANDED_ROLES
          .slice(
            0,
            roleCount
          )
          .map(
            (role) => ({
              ...role,

              name:
                customRoleNames[
                  role.id
                ] ||
                role.name,

              icon:
                customRoleIcons[
                  role.id
                ] ||
                role.icon
            })
          ),
      [
        roleCount,
        customRoleNames,
        customRoleIcons
      ]
    );


  const [
    maxPasses,
    setMaxPasses
  ] =
    useState(3);

  const [
    playerPasses,
    setPlayerPasses
  ] =
    useState({});

  const [
    teams,
    setTeams
  ] =
    useState({});

  const [
    currentTurnIndex,
    setCurrentTurnIndex
  ] =
    useState(0);

  const [
    drawnCard,
    setDrawnCard
  ] =
    useState(null);

  const [
    drawnFormIndex,
    setDrawnFormIndex
  ] =
    useState(0);

  const [
    usedCardIds,
    setUsedCardIds
  ] =
    useState([]);

  const [
    realImages,
    setRealImages
  ] =
    useState(
      getStoredImages()
    );

  const [
    imageLoading,
    setImageLoading
  ] =
    useState(false);

  const [
    imageFailed,
    setImageFailed
  ] =
    useState(false);

  const [
    aiVerdict,
    setAiVerdict
  ] =
    useState(null);

  const [
    showHelp,
    setShowHelp
  ] =
    useState(false);

  const [
    helpTab,
    setHelpTab
  ] =
    useState('basics');

  const [
    lossQuestion,
    setLossQuestion
  ] =
    useState('');

  const [
    lossAnswer,
    setLossAnswer
  ] =
    useState('');


  const activePlayerName =
    playerNames[
      currentTurnIndex
    ];


  /* =======================================================
     ROLE HELPERS
  ======================================================= */

  const updateRoleName = (
    roleId,
    value
  ) => {
    setCustomRoleNames(
      (previous) => ({
        ...previous,

        [roleId]:
          value
      })
    );
  };


  const updateRoleIcon = (
    roleId,
    value
  ) => {
    setCustomRoleIcons(
      (previous) => ({
        ...previous,

        [roleId]:
          value
      })
    );
  };


  const applyRolePreset = (
    presetName
  ) => {
    const preset =
      ROLE_NAME_PRESETS[
        presetName
      ];

    if (!preset) {
      return;
    }

    const names =
      {};

    const icons =
      {};

    Object.entries(
      preset
    ).forEach(
      ([
        roleId,
        values
      ]) => {
        names[
          roleId
        ] =
          values[0];

        icons[
          roleId
        ] =
          values[1];
      }
    );

    setCustomRoleNames(
      names
    );

    setCustomRoleIcons(
      icons
    );
  };


  const randomizeRoleNames =
    () => {
      const allPresets =
        Object.keys(
          ROLE_NAME_PRESETS
        );

      const randomPreset =
        allPresets[
          Math.floor(
            Math.random() *
              allPresets.length
          )
        ];

      applyRolePreset(
        randomPreset
      );
    };


  const resetRoleNames =
    () => {
      setCustomRoleNames(
        {}
      );

      setCustomRoleIcons(
        {}
      );
    };


  /* =======================================================
     DRAFT IMAGE LOADING
  ======================================================= */

  useEffect(
    () => {
      let cancelled =
        false;

      const loadArtwork =
        async () => {
          if (
            !drawnCard
          ) {
            return;
          }

          const key =
            normalizeName(
              drawnCard.name
            );

          if (
            realImages[key]
          ) {
            setImageFailed(
              false
            );

            return;
          }

          setImageLoading(
            true
          );

          setImageFailed(
            false
          );

          const image =
            await resolveCharacterImage(
              drawnCard.name
            );

          if (
            cancelled
          ) {
            return;
          }

          if (image) {
            setRealImages(
              (previous) => ({
                ...previous,
                [key]:
                  image
              })
            );

            setImageFailed(
              false
            );
          } else {
            setImageFailed(
              true
            );
          }

          setImageLoading(
            false
          );
        };

      loadArtwork();

      return () => {
        cancelled =
          true;
      };
    },
    [
      drawnCard
    ]
  );


  /* =======================================================
     PLAYER HANDLING
  ======================================================= */

  const handleNameChange = (
    index,
    value
  ) => {
    const updated =
      [
        ...playerNames
      ];

    updated[index] =
      value;

    setPlayerNames(
      updated
    );
  };


  const handleAddPlayer =
    () => {
      if (
        playerNames.length >=
        8
      ) {
        return;
      }

      setPlayerNames([
        ...playerNames,

        `Player ${
          playerNames.length +
          1
        }`
      ]);
    };


  const handleRemovePlayer =
    () => {
      if (
        playerNames.length <=
        2
      ) {
        return;
      }

      setPlayerNames(
        playerNames.slice(
          0,
          -1
        )
      );
    };


  /* =======================================================
     VERSES
  ======================================================= */

  const toggleVerse = (
    verse
  ) => {
    if (
      selectedVerses.includes(
        verse
      )
    ) {
      if (
        selectedVerses.length >
        1
      ) {
        setSelectedVerses(
          selectedVerses.filter(
            (item) =>
              item !==
              verse
          )
        );
      }
    } else {
      setSelectedVerses(
        [
          ...selectedVerses,
          verse
        ]
      );
    }
  };


  const toggleSelectAllVerses =
    () => {
      const all =
        Object.keys(
          ANIME_VERSES
        );

      if (
        selectedVerses.length ===
        all.length
      ) {
        setSelectedVerses(
          [
            all[0]
          ]
        );
      } else {
        setSelectedVerses(
          all
        );
      }
    };


  /* =======================================================
     START DRAFT
  ======================================================= */

  const startDraft = () => {
    const newTeams =
      {};

    const newPasses =
      {};

    playerNames.forEach(
      (player) => {
        newTeams[player] =
          {};

        newPasses[player] =
          maxPasses;
      }
    );

    setTeams(
      newTeams
    );

    setPlayerPasses(
      newPasses
    );

    setCurrentTurnIndex(
      0
    );

    setDrawnCard(
      null
    );

    setUsedCardIds(
      []
    );

    setAiVerdict(
      null
    );

    setLossQuestion(
      ''
    );

    setLossAnswer(
      ''
    );

    setScreen(
      'draft'
    );
  };


  /* =======================================================
     DRAFT POOL
  ======================================================= */

  const activeVersePool =
    useMemo(
      () =>
        selectedVerses.flatMap(
          (verse) =>
            ANIME_VERSES[
              verse
            ] || []
        ),
      [
        selectedVerses
      ]
    );


  const availableCards =
    useMemo(
      () =>
        activeVersePool.filter(
          (card) =>
            !usedCardIds.includes(
              card.id
            )
        ),
      [
        activeVersePool,
        usedCardIds
      ]
    );


  /* =======================================================
     DRAW CARD
  ======================================================= */

  const drawCard = () => {
    if (
      !availableCards.length
    ) {
      alert(
        'No unused characters remain in the selected pool.'
      );

      return;
    }

    const randomCard =
      availableCards[
        Math.floor(
          Math.random() *
            availableCards.length
        )
      ];

    const randomFormIndex =
      Math.floor(
        Math.random() *
          randomCard.forms.length
      );

    setDrawnCard(
      randomCard
    );

    setDrawnFormIndex(
      randomFormIndex
    );

    setImageFailed(
      false
    );
  };


  /* =======================================================
     NEXT TURN
  ======================================================= */

  const nextTurn = (
    latestTeams
  ) => {
    const finished =
      playerNames.every(
        (player) =>
          Object.keys(
            latestTeams[
              player
            ] || {}
          ).length >=
          selectedRoles.length
      );

    if (
      finished
    ) {
      calculateWinner(
        latestTeams
      );

      return;
    }

    setCurrentTurnIndex(
      (previous) =>
        (
          previous +
          1
        ) %
        playerNames.length
    );
  };


  /* =======================================================
     ASSIGN CARD
  ======================================================= */

  const assignCardToRole = (
    role
  ) => {
    if (
      !drawnCard
    ) {
      return;
    }

    const form =
      drawnCard.forms[
        drawnFormIndex
      ];

    if (
      !form
    ) {
      return;
    }

    const activePlayer =
      playerNames[
        currentTurnIndex
      ];

    const realImage =
      realImages[
        normalizeName(
          drawnCard.name
        )
      ] ||
      null;

    const basePower =
      powerMode ===
      'relative'
        ? form.relPower
        : form.realPower;

    const updatedTeams =
      {
        ...teams,

        [activePlayer]:
          {
            ...teams[
              activePlayer
            ],

            [role.id]:
              {
                id:
                  `${drawnCard.id}_${role.id}`,

                name:
                  drawnCard.name,

                form:
                  form.name,

                img:
                  realImage,

                power:
                  Math.round(
                    basePower *
                      role.powerMult
                  ),

                hax:
                  Math.round(
                    form.hax *
                      role.haxMult
                  ),

                tags:
                  drawnCard.tags ||
                  [],

                verse:
                  selectedVerses.find(
                    (verse) =>
                      (
                        ANIME_VERSES[
                          verse
                        ] ||
                        []
                      ).some(
                        (
                          card
                        ) =>
                          card.id ===
                          drawnCard.id
                      )
                  ) ||
                  'Unknown',

                formRarity:
                  getFormRarity(
                    form.name,
                    drawnFormIndex
                  ).name
              }
          }
      };


    setTeams(
      updatedTeams
    );


    setUsedCardIds(
      (previous) =>
        previous.includes(
          drawnCard.id
        )
          ? previous
          : [
              ...previous,
              drawnCard.id
            ]
    );


    setDrawnCard(
      null
    );

    nextTurn(
      updatedTeams
    );
  };


  /* =======================================================
     PASS
  ======================================================= */

  const handlePass =
    () => {
      const remaining =
        playerPasses[
          activePlayerName
        ] || 0;

      if (
        remaining <=
        0
      ) {
        return;
      }

      setPlayerPasses(
        {
          ...playerPasses,

          [activePlayerName]:
            remaining -
            1
        }
      );


      if (
        drawnCard
      ) {
        setUsedCardIds(
          (previous) =>
            previous.includes(
              drawnCard.id
            )
              ? previous
              : [
                  ...previous,
                  drawnCard.id
                ]
        );
      }


      setDrawnCard(
        null
      );

      nextTurn(
        teams
      );
    };


  /* =======================================================
     LIVE ODDS
  ======================================================= */

  const getPlayerScore = (
    player,
    currentTeams = teams
  ) => {
    const team =
      currentTeams[
        player
      ] || {};

    return Object.values(
      team
    ).reduce(
      (
        score,
        card
      ) =>
        score +
        Number(
          card.power ||
            0
        ) +
        Number(
          card.hax ||
            0
        ) *
          500,
      0
    );
  };


  const liveOdds =
    useMemo(
      () => {
        const scores =
          playerNames.map(
            (player) =>
              getPlayerScore(
                player
              )
          );

        const total =
          scores.reduce(
            (
              a,
              b
            ) =>
              a + b,
            0
          );

        if (
          !total
        ) {
          return playerNames.map(
            (player) => ({
              player,

              odds:
                Math.round(
                  100 /
                    playerNames.length
                )
            })
          );
        }

        return playerNames.map(
          (
            player,
            index
          ) => ({
            player,

            odds:
              Math.round(
                (
                  scores[
                    index
                  ] /
                  total
                ) *
                  100
              )
          })
        );
      },
      [
        playerNames,
        teams
      ]
    );


  /* =======================================================
     FINAL TEAM WINNER
  ======================================================= */

  const calculateWinner = (
    finalTeams
  ) => {

    const analyses =
      playerNames.map(
        (player) =>
          analyzeTeam(
            player,
            finalTeams[
              player
            ],
            selectedRoles
          )
      );


    const ranked =
      [
        ...analyses
      ].sort(
        (a, b) =>
          b.total -
          a.total
      );


    const winner =
      ranked[0];


    if (
      !winner
    ) {
      return;
    }


    const matchupRows =
      [];


    selectedRoles.forEach(
      (role) => {
        const cards =
          playerNames
            .map(
              (player) => ({
                player,

                card:
                  finalTeams[
                    player
                  ]?.[
                    role.id
                  ]
              })
            )
            .filter(
              (item) =>
                item.card
            );


        if (
          cards.length <
          2
        ) {
          return;
        }


        const first =
          cards[0];


        for (
          let index = 1;
          index <
          cards.length;
          index++
        ) {
          const second =
            cards[index];

          const result =
            judgeMatchup(
              first.card,
              second.card,
              role
            );

          matchupRows.push(
            {
              role,

              leftPlayer:
                first.player,

              leftCard:
                first.card,

              rightPlayer:
                second.player,

              rightCard:
                second.card,

              ...result
            }
          );
        }
      }
    );


    const second =
      ranked[1] ||
      null;


    const margin =
      second
        ? winner.total -
          second.total
        : winner.total;


    const probability =
      second
        ? clamp(
            50 +
              margin *
                2.2
          )
        : 100;


    const reasons =
      [];


    if (
      winner.power >
      (
        second?.power ||
        0
      ) + 5
    ) {
      reasons.push(
        'stronger combat output'
      );
    }


    if (
      winner.hax >
      (
        second?.hax ||
        0
      ) + 5
    ) {
      reasons.push(
        'stronger hax'
      );
    }


    if (
      winner.speed >
      (
        second?.speed ||
        0
      ) + 5
    ) {
      reasons.push(
        'better speed'
      );
    }


    if (
      winner.defense >
      (
        second?.defense ||
        0
      ) + 5
    ) {
      reasons.push(
        'better defense'
      );
    }


    if (
      winner.synergy >
      (
        second?.synergy ||
        0
      ) + 5
    ) {
      reasons.push(
        'stronger synergy'
      );
    }


    if (
      winner.coverage >
      (
        second?.coverage ||
        0
      ) + 5
    ) {
      reasons.push(
        'better matchup coverage'
      );
    }


    if (
      !reasons.length
    ) {
      reasons.push(
        'better overall balance'
      );
    }


    const explanation =
      `${winner.player} wins because the team was stronger across multiple tactical categories, not simply because of one power number. The biggest advantages were ${reasons
        .slice(0, 4)
        .join(
          ', '
        )}.`;


    setAiVerdict(
      {
        winner:
          winner.player,

        winnerScore:
          winner.total,

        winnerProbability:
          probability,

        ranked,

        matchupRows,

        explanation
      }
    );


    setScreen(
      'winner'
    );


    confetti({
      particleCount:
        220,

      spread:
        100,

      origin: {
        y:
          0.45
      }
    });
  };


  /* =======================================================
     LOSS ANALYZER
  ======================================================= */

  const analyzeLoss =
    (
      questionOverride =
        null
    ) => {

      if (
        !aiVerdict
      ) {
        return;
      }


      const question =
        (
          questionOverride ??
          lossQuestion
        )
          .toLowerCase()
          .trim();


      const winner =
        aiVerdict.ranked[0];


      const loser =
        aiVerdict.ranked.find(
          (team) =>
            normalizeName(
              team.player
            ) !==
            normalizeName(
              winner.player
            )
        );


      if (
        !loser
      ) {
        setLossAnswer(
          'There is not enough opponent data to analyze the loss.'
        );

        return;
      }


      const weakest =
        [
          [
            'Power',
            loser.power
          ],
          [
            'Hax',
            loser.hax
          ],
          [
            'Speed',
            loser.speed
          ],
          [
            'Defense',
            loser.defense
          ],
          [
            'Versatility',
            loser.versatility
          ],
          [
            'Synergy',
            loser.synergy
          ],
          [
            'Coverage',
            loser.coverage
          ],
          [
            'Balance',
            loser.balance
          ]
        ].sort(
          (a, b) =>
            a[1] -
            b[1]
        )[0];


      const lostMatchups =
        aiVerdict.matchupRows.filter(
          (match) => {
            const loserLeft =
              match.leftPlayer ===
              loser.player;

            return loserLeft
              ? match.winner ===
                'right'
              : match.winner ===
                'left';
          }
        );


      if (
        question.includes(
          'matchup'
        ) ||
        question.includes(
          'character'
        ) ||
        question.includes(
          'who'
        )
      ) {

        if (
          lostMatchups.length
        ) {
          const match =
            lostMatchups[0];

          const opponent =
            match.leftPlayer ===
            loser.player
              ? match.rightCard
                  .name
              : match.leftCard
                  .name;

          setLossAnswer(
            `Your biggest matchup problem was the ${match.role.name} slot. ${opponent} gained the advantage because ${match.explanation.toLowerCase()}`
          );
        } else {
          setLossAnswer(
            'No single matchup completely decided the game. The loss came mainly from the overall team composition.'
          );
        }

        return;
      }


      if (
        question.includes(
          'draft'
        ) ||
        question.includes(
          'mistake'
        ) ||
        question.includes(
          'better'
        )
      ) {
        setLossAnswer(
          `Your weakest team category was ${weakest[0]}. A stronger draft would try to cover that weakness instead of simply stacking more of the strengths you already had.`
        );

        return;
      }


      setLossAnswer(
        `${loser.player} lost because the opponent had the stronger combined tactical profile. The weakest category was ${weakest[0]}, while the winning team had the more reliable balance of combat output, abilities, defense and matchup coverage.`
      );
    };


  /* =======================================================
     HELP CONTENT
  ======================================================= */

  const helpSections =
    {
      basics: {
        title:
          'How the game works',

        content: [
          'Players take turns drawing exactly one random anime character.',
          'A random form is immediately locked to that character.',
          'The player cannot select, change or reroll the form.',
          'The player decides only whether to draft that character or pass it.',
          'A drafted or passed character leaves the tournament pool permanently.',
          'The game continues until every player has filled every role.',
          'The final judge compares both role-to-role battles and the complete teams.'
        ]
      },

      rarity: {
        title:
          'Form rarity',

        content: [
          '⚪ Common — ordinary/base forms.',
          '🔵 Rare — stronger or upgraded forms.',
          '🟣 Epic — advanced combat forms.',
          '🟠 Legendary — major transformations and high-end states.',
          '🔴 Mythic — exceptional peak, final, god-tier or signature forms.',
          'Rarity is a fun visual indicator and does not itself decide the winner.'
        ]
      },

      roles: {
        title:
          'Role Forge',

        content: [
          'You can rename roles to make your tournament more fun.',
          'You can also change the role emoji.',
          'Renaming a role does NOT change its hidden mechanics.',
          'For example, Tank can be renamed Berserker while keeping the same Tank power and hax multipliers.',
          'Custom role names are shown throughout the draft and final verdict.',
          'Presets and random role names are available for quick setup.'
        ]
      },

      draft: {
        title:
          'Draft rules',

        content: [
          '2 to 8 players can participate.',
          'Every player receives the same number of roles.',
          'A character can only be drafted once during the tournament.',
          'The form is randomly selected when that character appears.',
          'Passing consumes one pass.',
          'A passed character is removed from the pool.',
          'No player can reroll or manually select a different form.'
        ]
      },

      images: {
        title:
          'Character artwork',

        content: [
          'The app first checks its local image cache.',
          'If the image is not cached, it tries AniList.',
          'If AniList fails, it tries Jikan/MyAnimeList.',
          'Successful artwork is saved in the browser for future draws.',
          'If both services fail, the character remains fully playable and the app shows an artwork-unavailable state instead of a random unrelated image.'
        ]
      },

      power: {
        title:
          'Power system',

        content: [
          'Verse Relative mode is designed for fair cross-verse competition.',
          'Cross-Verse Realism uses the realPower values from the database.',
          'Power is only one part of the final result.',
          'Speed, hax, defense, versatility, synergy, role fit and counters also affect the verdict.'
        ]
      },

      verdict: {
        title:
          'Final verdict',

        content: [
          'First the game compares matching roles.',
          'Each matchup uses several tactical categories.',
          'Second the complete teams are compared together.',
          'A team may still win overall even after losing one or more individual matchups.',
          'The final screen explains the major reasons behind the result.'
        ]
      },

      analyzer: {
        title:
          'AI Tactician',

        content: [
          'The AI Tactician is a local rule-based analysis engine.',
          'It uses the actual tournament teams and matchup results.',
          'Players can ask why they lost, which matchup hurt them, or how they could draft better next time.'
        ]
      }
    };


  /* =======================================================
     GLOBAL HEADER
  ======================================================= */

  const showHeader =
    screen !==
    'gamehub';


  return (
    <div
      className="min-h-screen text-neutral-100 font-sans pb-16 bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(4,4,4,0.70), rgba(4,4,4,0.94)), url('/konoha-background.png')"
      }}
    >

      {/* ===================================================
          GAME HUB
      =================================================== */}

      {screen ===
        'gamehub' && (
        <>
          <header className="border-b border-red-900/50 bg-black/80 backdrop-blur-xl sticky top-0 z-40 px-4 md:px-6 py-3">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="bg-red-600 p-2.5 rounded-xl">
                  <Swords className="w-6 h-6 text-black" />
                </div>

                <div>
                  <h1 className="text-lg font-black tracking-wider text-red-500 uppercase">
                    Anime Arena
                  </h1>

                  <span className="text-[10px] text-neutral-500">
                    Anime Gaming Hub
                  </span>
                </div>

              </div>

            </div>

          </header>


          <GameHub
            onSelectMode={(
              mode
            ) => {

              if (
                mode ===
                'draft'
              ) {
                navigateTo(
                  'home'
                );
              }

              if (
                mode ===
                'battle'
              ) {
                navigateTo(
                  'battle'
                );
              }

              if (
                mode ===
                'tournament'
              ) {
                navigateTo(
                  'tournament'
                );
              }

              if (
                mode ===
                'auction'
              ) {
                navigateTo(
                  'auction'
                );
              }

            }}
          />
        </>
      )}


      {/* ===================================================
          BATTLE
      =================================================== */}

      {screen ===
        'battle' && (
        <BattleMode
          animeVerses={
            ANIME_VERSES
          }

          onBack={() =>
            navigateTo(
              'gamehub'
            )
          }
        />
      )}


      {/* ===================================================
          TOURNAMENT
      =================================================== */}

      {screen ===
        'tournament' && (
        <TournamentMode
          animeVerses={
            ANIME_VERSES
          }

          characterPool={
            Object.values(
              ANIME_VERSES
            ).flat()
          }

          onBack={() =>
            navigateTo(
              'gamehub'
            )
          }

          onStartTournament={(
            config
          ) => {
            console.log(
              'Tournament foundation ready:',
              config
            );
          }}
        />
      )}


      {/* ===================================================
          AUCTION
      =================================================== */}

      {screen ===
        'auction' && (
        <AuctionMode
          animeVerses={
            ANIME_VERSES
          }

          characterPool={
            Object.values(
              ANIME_VERSES
            ).flat()
          }

          onBack={() =>
            navigateTo(
              'gamehub'
            )
          }
        />
      )}


      {/* ===================================================
          DRAFT HEADER
      =================================================== */}

      {showHeader && (
        <header className="border-b border-red-900/50 bg-black/80 backdrop-blur-xl sticky top-0 z-40 px-4 md:px-6 py-3">

          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

            <div className="flex items-center gap-3">

              <div className="bg-red-600 p-2.5 rounded-xl shadow-lg shadow-red-600/30">

                <Swords className="w-6 h-6 text-black" />

              </div>

              <div>

                <h1 className="text-lg md:text-xl font-black tracking-wider text-red-500 uppercase">
                  Anime Draft Arena
                </h1>

                <span className="text-[10px] text-neutral-400">
                  Fan-Made Anime Team Draft Simulator
                </span>

              </div>

            </div>


            <div className="flex items-center gap-2">

              <button
                onClick={() =>
                  setShowHelp(
                    true
                  )
                }
                className="bg-red-950/70 border border-red-800 hover:border-red-500 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                How To Play
              </button>


              <button
                onClick={() =>
                  navigateTo(
                    'gamehub'
                  )
                }
                className="bg-neutral-900 border border-neutral-700 px-3 py-2 rounded-xl text-xs"
              >
                Game Hub
              </button>


              <a
                href="https://anilist.co"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex bg-neutral-900 border border-neutral-700 px-3 py-2 rounded-xl text-xs items-center gap-1"
              >
                <Globe className="w-3 h-3 text-blue-400" />
                AniList
              </a>

            </div>

          </div>

        </header>
      )}


      {/* ===================================================
          DRAFT HOME
      =================================================== */}

      {screen ===
        'home' && (
        <div className="relative z-10 max-w-6xl mx-auto px-4">

          <button
            onClick={() =>
              navigateTo(
                'gamehub'
              )
            }
            className="mt-6 text-xs text-neutral-400 hover:text-white flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Game Hub
          </button>


          <section className="min-h-[520px] flex items-center justify-center py-12">

            <div className="text-center max-w-4xl">

              <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700 text-red-300 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">

                <Flame className="w-4 h-4" />

                Build Your Ultimate Anime Team

              </div>


              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6">

                Anime

                <span className="text-red-500">
                  {' '}Draft{' '}
                </span>

                Arena

              </h2>


              <p className="max-w-2xl mx-auto text-neutral-300 mt-5 text-sm md:text-lg leading-relaxed">

                Draft characters.
                Receive a random form.
                Build your team.
                Then let the tactical judge
                determine who built the stronger roster.

              </p>


              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">

                <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

                  <Users className="w-5 h-5 text-red-500 mx-auto mb-2" />

                  <div className="text-xl font-black">
                    2–8
                  </div>

                  <div className="text-[10px] text-neutral-500 uppercase font-bold">
                    Players
                  </div>

                </div>


                <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

                  <Sparkles className="w-5 h-5 text-red-500 mx-auto mb-2" />

                  <div className="text-xl font-black">
                    {
                      Object.keys(
                        ANIME_VERSES
                      ).length
                    }
                  </div>

                  <div className="text-[10px] text-neutral-500 uppercase font-bold">
                    Verses
                  </div>

                </div>


                <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

                  <Crown className="w-5 h-5 text-red-500 mx-auto mb-2" />

                  <div className="text-xl font-black">
                    {
                      EXPANDED_ROLES.length
                    }
                  </div>

                  <div className="text-[10px] text-neutral-500 uppercase font-bold">
                    Roles
                  </div>

                </div>


                <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

                  <Brain className="w-5 h-5 text-red-500 mx-auto mb-2" />

                  <div className="text-xl font-black">
                    AI
                  </div>

                  <div className="text-[10px] text-neutral-500 uppercase font-bold">
                    Tactical Judge
                  </div>

                </div>

              </div>


              <button
                onClick={() =>
                  setScreen(
                    'setup'
                  )
                }
                className="mt-9 bg-red-600 hover:bg-red-500 text-black font-black px-10 py-4 rounded-2xl uppercase shadow-xl shadow-red-600/30 flex items-center gap-2 mx-auto"
              >

                Start Tournament

                <ChevronRight className="w-5 h-5" />

              </button>


              <button
                onClick={() =>
                  setShowHelp(
                    true
                  )
                }
                className="mt-3 text-xs text-neutral-400 hover:text-white underline"
              >
                New here? Read the complete rules
              </button>

            </div>

          </section>


          <section className="grid md:grid-cols-3 gap-5 pb-10">

            <div className="bg-black/75 border border-red-900/50 rounded-3xl p-6">

              <Crosshair className="w-8 h-8 text-red-500 mb-4" />

              <h3 className="font-black text-lg">
                Fair Random Draft
              </h3>

              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Character and form are random.
                You cannot secretly pick the strongest transformation.
              </p>

            </div>


            <div className="bg-black/75 border border-red-900/50 rounded-3xl p-6">

              <Wand2 className="w-8 h-8 text-red-500 mb-4" />

              <h3 className="font-black text-lg">
                Role Forge
              </h3>

              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Rename Tank to Berserker,
                Captain to Emperor,
                or invent your own style.
              </p>

            </div>


            <div className="bg-black/75 border border-red-900/50 rounded-3xl p-6">

              <MessageCircle className="w-8 h-8 text-red-500 mb-4" />

              <h3 className="font-black text-lg">
                Learn From Losing
              </h3>

              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Ask the AI Tactician what cost you the battle.
              </p>

            </div>

          </section>

        </div>
      )}


      {/* ===================================================
          DRAFT SETUP
      =================================================== */}

      {screen ===
        'setup' && (
        <div className="relative z-10 max-w-5xl mx-auto mt-8 px-4">

          <div className="bg-black/85 backdrop-blur-xl border border-red-900/50 rounded-3xl p-6 md:p-8 shadow-2xl">

            <button
              onClick={() =>
                setScreen(
                  'home'
                )
              }
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 mb-5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>


            <div className="text-center mb-8">

              <span className="bg-red-950 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-800">
                Tournament Setup
              </span>

              <h2 className="text-3xl md:text-4xl font-black mt-3">
                Build Your Arena
              </h2>

              <p className="text-sm text-neutral-500 mt-2">
                {
                  Object.keys(
                    ANIME_VERSES
                  ).length
                } verses loaded.
              </p>

            </div>


            {/* PLAYERS */}

            <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 mb-5">

              <div className="flex flex-wrap justify-between items-center gap-3 mb-4">

                <span className="text-sm font-bold flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-500" />
                  Players (
                  {
                    playerNames.length
                  }
                  /8)
                </span>


                <div className="flex gap-2">

                  <button
                    onClick={
                      handleRemovePlayer
                    }
                    disabled={
                      playerNames.length <=
                      2
                    }
                    className="bg-neutral-800 disabled:opacity-30 px-3 py-2 rounded-lg font-bold text-xs"
                  >
                    − Remove
                  </button>


                  <button
                    onClick={
                      handleAddPlayer
                    }
                    disabled={
                      playerNames.length >=
                      8
                    }
                    className="bg-red-600 disabled:opacity-30 text-black px-3 py-2 rounded-lg font-bold text-xs"
                  >
                    + Add Player
                  </button>

                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-3">

                {playerNames.map(
                  (
                    name,
                    index
                  ) => (
                    <div
                      key={
                        index
                      }
                      className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-2 rounded-xl"
                    >

                      <span className="text-xs font-bold text-red-500 w-12">
                        P
                        {index + 1}
                      </span>

                      <input
                        type="text"
                        value={
                          name
                        }
                        onChange={(
                          event
                        ) =>
                          handleNameChange(
                            index,
                            event.target.value
                          )
                        }
                        className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white font-bold w-full outline-none focus:border-red-500"
                      />

                    </div>
                  )
                )}

              </div>

            </div>


            {/* VERSES */}

            <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 mb-5">

              <div className="flex flex-wrap justify-between items-center gap-3 mb-3">

                <span className="text-sm font-bold flex items-center gap-2">

                  <Sparkles className="w-4 h-4 text-red-500" />

                  Anime Verse Pool

                </span>


                <button
                  onClick={
                    toggleSelectAllVerses
                  }
                  className="text-xs font-bold bg-neutral-800 px-3 py-2 rounded-lg text-red-400 flex items-center gap-1"
                >

                  {
                    selectedVerses.length ===
                    Object.keys(
                      ANIME_VERSES
                    ).length ? (
                      <CheckSquare className="w-3.5 h-3.5" />
                    ) : (
                      <Square className="w-3.5 h-3.5" />
                    )
                  }

                  {
                    selectedVerses.length ===
                    Object.keys(
                      ANIME_VERSES
                    ).length
                      ? 'Deselect All'
                      : 'Select All'
                  }

                </button>

              </div>


              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-72 overflow-y-auto pr-1">

                {
                  Object.keys(
                    ANIME_VERSES
                  ).map(
                    (verse) => {

                      const selected =
                        selectedVerses.includes(
                          verse
                        );

                      return (
                        <button
                          key={
                            verse
                          }
                          onClick={() =>
                            toggleVerse(
                              verse
                            )
                          }
                          className={`px-3 py-2 rounded-xl text-xs font-bold border text-left truncate ${
                            selected
                              ? 'bg-red-950/70 border-red-600 text-white'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-500'
                          }`}
                        >

                          {
                            selected
                              ? '✓ '
                              : '+ '
                          }

                          {
                            verse
                          }

                        </button>
                      );
                    }
                  )
                }

              </div>


              <p className="text-[10px] text-neutral-500 mt-3">

                {
                  selectedVerses.length
                }
                {' '}of{' '}
                {
                  Object.keys(
                    ANIME_VERSES
                  ).length
                }
                {' '}selected.

              </p>

            </div>


            {/* POWER */}

            <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 mb-5">

              <label className="text-sm font-bold mb-3 flex items-center gap-2">

                <Scale className="w-4 h-4 text-red-500" />

                Power Balance System

              </label>


              <div className="grid md:grid-cols-2 gap-3">

                <button
                  onClick={() =>
                    setPowerMode(
                      'relative'
                    )
                  }
                  className={`p-4 rounded-xl border text-left ${
                    powerMode ===
                    'relative'
                      ? 'bg-red-950/60 border-red-600'
                      : 'bg-neutral-900 border-neutral-800'
                  }`}
                >

                  <div className="font-black text-sm">
                    ⚖️ Verse Relative
                  </div>

                  <p className="text-[10px] text-neutral-500 mt-1">
                    Fair cross-verse competition.
                  </p>

                </button>


                <button
                  onClick={() =>
                    setPowerMode(
                      'realistic'
                    )
                  }
                  className={`p-4 rounded-xl border text-left ${
                    powerMode ===
                    'realistic'
                      ? 'bg-red-950/60 border-red-600'
                      : 'bg-neutral-900 border-neutral-800'
                  }`}
                >

                  <div className="font-black text-sm">
                    💥 Cross-Verse Realism
                  </div>

                  <p className="text-[10px] text-neutral-500 mt-1">
                    Uses realPower values.
                  </p>

                </button>

              </div>

            </div>


            <button
              onClick={() =>
                setScreen(
                  'config'
                )
              }
              className="w-full bg-red-600 hover:bg-red-500 text-black font-black py-4 rounded-2xl uppercase shadow-lg shadow-red-600/30"
            >
              Configure Draft Roles
            </button>

          </div>

        </div>
      )}


      {/* ===================================================
          CONFIG
      =================================================== */}

      {screen ===
        'config' && (
        <div className="relative z-10 max-w-5xl mx-auto mt-8 px-4">

          <div className="bg-black/85 backdrop-blur-xl border border-red-900/50 rounded-3xl p-6 md:p-8 shadow-2xl">

            <button
              onClick={() =>
                setScreen(
                  'setup'
                )
              }
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 mb-5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Setup
            </button>


            <div className="flex flex-wrap justify-between items-start gap-4">

              <div>

                <h2 className="text-3xl font-black">
                  Configure Team
                </h2>

                <p className="text-sm text-neutral-500 mt-2">
                  Make the team roles yours.
                </p>

              </div>


              <div className="bg-red-950/60 border border-red-800 rounded-xl px-4 py-2">

                <div className="text-[9px] text-red-400 font-bold uppercase">
                  Fun Mode
                </div>

                <div className="text-sm font-black">
                  Role Forge
                </div>

              </div>

            </div>


            {/* CARDS PER PLAYER */}

            <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 mt-6">

              <div className="flex justify-between mb-2">

                <span className="text-sm font-bold">
                  Cards per Player
                </span>

                <span className="text-red-500 font-black">
                  {
                    roleCount
                  }
                </span>

              </div>


              <input
                type="range"
                min="6"
                max={
                  Math.min(
                    20,
                    EXPANDED_ROLES.length
                  )
                }
                value={
                  roleCount
                }
                onChange={(
                  event
                ) =>
                  setRoleCount(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="w-full accent-red-600"
              />


              <div className="flex justify-between text-[9px] text-neutral-600 mt-1">

                <span>
                  6
                </span>

                <span>
                  {
                    Math.min(
                      20,
                      EXPANDED_ROLES.length
                    )
                  }
                </span>

              </div>

            </div>


            {/* ROLE FORGE */}

            <div className="bg-neutral-950/90 border border-red-900/60 rounded-3xl p-5 mt-5">

              <div className="flex flex-wrap justify-between items-center gap-3">

                <div className="flex items-center gap-2">

                  <Wand2 className="w-5 h-5 text-red-500" />

                  <div>

                    <h3 className="font-black">
                      Role Forge
                    </h3>

                    <p className="text-[10px] text-neutral-500">
                      Rename roles without changing hidden mechanics.
                    </p>

                  </div>

                </div>


                <div className="flex flex-wrap gap-2">

                  <button
                    onClick={
                      randomizeRoleNames
                    }
                    className="bg-red-600 hover:bg-red-500 text-black px-3 py-2 rounded-xl text-xs font-black flex items-center gap-2"
                  >

                    <Shuffle className="w-4 h-4" />

                    Randomize

                  </button>


                  {[
                    'Shonen',
                    'Dark',
                    'RPG'
                  ].map(
                    (preset) => (
                      <button
                        key={
                          preset
                        }
                        onClick={() =>
                          applyRolePreset(
                            preset
                          )
                        }
                        className="bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-xl text-xs font-bold"
                      >
                        {preset}
                      </button>
                    )
                  )}


                  <button
                    onClick={
                      resetRoleNames
                    }
                    className="bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-xl text-xs font-bold"
                  >
                    Reset
                  </button>

                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-3 mt-5">

                {selectedRoles.map(
                  (role) => (
                    <div
                      key={
                        role.id
                      }
                      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4"
                    >

                      <div className="flex items-center justify-between gap-3 mb-3">

                        <div className="flex items-center gap-2">

                          <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-900 flex items-center justify-center text-xl">
                            {
                              role.icon
                            }
                          </div>

                          <div>

                            <div className="text-[9px] text-neutral-600 uppercase font-black">
                              Internal Role
                            </div>

                            <div className="text-xs text-neutral-400">
                              {
                                EXPANDED_ROLES.find(
                                  (item) =>
                                    item.id ===
                                    role.id
                                )?.name
                              }
                            </div>

                          </div>

                        </div>


                        <div className="text-[9px] text-red-400 font-bold">

                          P ×
                          {
                            role.powerMult
                          }

                          {'  '}

                          H ×
                          {
                            role.haxMult
                          }

                        </div>

                      </div>


                      <div className="grid grid-cols-[56px_1fr] gap-2">

                        <div>

                          <label className="text-[9px] text-neutral-500 font-bold block mb-1">
                            ICON
                          </label>

                          <input
                            value={
                              customRoleIcons[
                                role.id
                              ] ||
                              role.icon
                            }
                            maxLength={
                              3
                            }
                            onChange={(
                              event
                            ) =>
                              updateRoleIcon(
                                role.id,
                                event.target.value
                              )
                            }
                            className="w-full text-center bg-black border border-neutral-700 focus:border-red-500 rounded-xl px-2 py-2 text-lg outline-none"
                          />

                        </div>


                        <div>

                          <label className="text-[9px] text-neutral-500 font-bold block mb-1">
                            DISPLAY NAME
                          </label>

                          <input
                            value={
                              customRoleNames[
                                role.id
                              ] ||
                              role.name
                            }
                            maxLength={
                              22
                            }
                            onChange={(
                              event
                            ) =>
                              updateRoleName(
                                role.id,
                                event.target.value
                              )
                            }
                            className="w-full bg-black border border-neutral-700 focus:border-red-500 rounded-xl px-3 py-2 text-sm font-black outline-none"
                          />

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>


              <div className="mt-4 bg-black/60 border border-neutral-800 rounded-2xl p-4">

                <div className="flex items-center gap-2 text-xs font-black text-red-400">

                  <Shield className="w-4 h-4" />

                  Hidden mechanics stay locked

                </div>

                <p className="text-[10px] text-neutral-500 mt-2 leading-5">
                  Renaming a role changes what players see,
                  but its original power and hax multipliers remain unchanged.
                </p>

              </div>

            </div>


            {/* PASSES */}

            <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 mt-5">

              <div className="flex justify-between">

                <span className="text-sm font-bold">
                  Passes per Player
                </span>

                <span className="text-red-500 font-black">
                  {
                    maxPasses
                  }
                </span>

              </div>


              <div className="grid grid-cols-5 gap-2 mt-4">

                {[2, 3, 4, 5, 6].map(
                  (value) => (
                    <button
                      key={
                        value
                      }
                      onClick={() =>
                        setMaxPasses(
                          value
                        )
                      }
                      className={`py-3 rounded-xl border font-black ${
                        maxPasses ===
                        value
                          ? 'bg-red-600 border-red-500 text-black'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-red-500'
                      }`}
                    >
                      {
                        value
                      }
                    </button>
                  )
                )}

              </div>

            </div>


            <button
              onClick={
                startDraft
              }
              className="mt-6 w-full bg-red-600 hover:bg-red-500 text-black py-4 rounded-2xl font-black uppercase shadow-lg shadow-red-600/30"
            >
              Launch Draft Arena
            </button>

          </div>

        </div>
      )}


      {/* ===================================================
          DRAFT SCREEN
      =================================================== */}

      {screen ===
        'draft' && (
        <div className="relative z-10 max-w-7xl mx-auto mt-6 px-4">

          <div className="bg-black/85 backdrop-blur-xl border border-red-900/40 rounded-2xl p-4 mb-6">

            <div className="flex justify-between items-center mb-3">

              <h4 className="text-xs font-black text-red-500 uppercase tracking-widest flex items-center gap-2">

                <Zap className="w-4 h-4" />

                Live Tactical Probability

              </h4>


              <span className="text-[10px] text-neutral-500">

                Turn:
                {' '}
                {
                  activePlayerName
                }

              </span>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {liveOdds.map(
                (item) => (
                  <div
                    key={
                      item.player
                    }
                    className="bg-neutral-950 p-3 rounded-xl border border-neutral-800"
                  >

                    <div className="flex justify-between text-xs font-bold">

                      <span className="truncate">
                        {
                          item.player
                        }
                      </span>

                      <span className="text-red-500">
                        {
                          item.odds
                        }%
                      </span>

                    </div>


                    <div className="mt-2 h-1.5 bg-neutral-800 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-red-600"
                        style={{
                          width:
                            `${item.odds}%`
                        }}
                      />

                    </div>

                  </div>
                )
              )}

            </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

            {playerNames.map(
              (player) => (
                <div
                  key={
                    player
                  }
                  className={`p-5 rounded-3xl border backdrop-blur-md ${
                    player ===
                    activePlayerName
                      ? 'bg-black/90 border-red-600 shadow-xl shadow-red-600/20'
                      : 'bg-black/70 border-neutral-800'
                  }`}
                >

                  <div className="flex justify-between items-center mb-4">

                    <h3 className="font-black text-lg text-red-500 truncate">
                      {
                        player
                      }
                    </h3>

                    <span className="text-[10px] text-neutral-400">

                      {
                        Object.keys(
                          teams[
                            player
                          ] ||
                            {}
                        ).length
                      }

                      /

                      {
                        selectedRoles.length
                      }

                    </span>

                  </div>


                  <div className="space-y-2 max-h-96 overflow-y-auto pr-1">

                    {selectedRoles.map(
                      (role) => {

                        const card =
                          teams[
                            player
                          ]?.[
                            role.id
                          ];

                        return (
                          <div
                            key={
                              role.id
                            }
                            className="bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 flex items-center gap-3"
                          >

                            <span>
                              {
                                role.icon
                              }
                            </span>


                            {card ? (
                              <>

                                {card.img && (
                                  <img
                                    src={
                                      card.img
                                    }
                                    alt={
                                      card.name
                                    }
                                    className="w-8 h-8 rounded-lg object-cover border border-neutral-700"
                                  />
                                )}


                                <div className="overflow-hidden flex-1">

                                  <p className="text-xs font-bold truncate">
                                    {
                                      card.name
                                    }
                                  </p>

                                  <p className="text-[9px] text-red-400 truncate">
                                    {
                                      card.form
                                    }
                                  </p>

                                </div>


                                <span className="text-[10px] font-black bg-red-950 text-red-400 px-2 py-1 rounded-md">
                                  {
                                    Number(
                                      card.power
                                    ).toLocaleString()
                                  }
                                </span>

                              </>
                            ) : (
                              <span className="text-xs text-neutral-600">
                                {
                                  role.name
                                }
                                {' '}Slot
                              </span>
                            )}

                          </div>
                        );
                      }
                    )}

                  </div>

                </div>
              )
            )}

          </div>


          <div className="text-center">

            <button
              onClick={
                drawCard
              }
              className="bg-red-600 hover:bg-red-500 text-black font-black px-12 py-5 rounded-2xl text-lg uppercase shadow-lg shadow-red-600/30"
            >

              {
                activePlayerName
              }
              's Draw Card

            </button>


            <p className="text-[10px] text-neutral-500 mt-3">

              {
                availableCards.length
              }
              {' '}unused characters remain

            </p>

          </div>

          <AIDraftTactician
  playerNames={
    playerNames
  }

  teams={
    teams
  }

  selectedRoles={
    selectedRoles
  }

  activePlayerName={
    activePlayerName
  }

  availableCards={
    availableCards
  }

  liveOdds={
    liveOdds
  }
/>

        </div>
      )}


      {/* ===================================================
          DRAW CARD MODAL
      =================================================== */}

      {drawnCard && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">

          <div className="bg-neutral-900 border-2 border-red-600 rounded-3xl p-6 max-w-md w-full text-center shadow-2xl max-h-[95vh] overflow-y-auto">

            <span className="text-xs font-black text-red-500 uppercase tracking-widest">

              {
                activePlayerName
              }

              's Turn

            </span>


            <div className="mt-4">

              <div className="relative w-56 h-64 mx-auto">

                {realImages[
                  normalizeName(
                    drawnCard.name
                  )
                ] ? (
                  <img
                    src={
                      realImages[
                        normalizeName(
                          drawnCard.name
                        )
                      ]
                    }
                    alt={
                      drawnCard.name
                    }
                    className="w-full h-full object-cover rounded-2xl border-2 border-red-500 shadow-lg bg-neutral-800"
                  />
                ) : imageLoading ? (
                  <div className="w-full h-full rounded-2xl border-2 border-red-500 bg-neutral-950 flex flex-col items-center justify-center gap-3">

                    <div className="w-8 h-8 border-4 border-neutral-700 border-t-red-500 rounded-full animate-spin" />

                    <span className="text-xs text-neutral-400">
                      Finding artwork…
                    </span>

                  </div>
                ) : (
                  <div className="w-full h-full rounded-2xl border-2 border-red-500 bg-neutral-950 flex flex-col items-center justify-center gap-3">

                    <ImageOff className="w-12 h-12 text-neutral-700" />

                    <p className="text-xs font-black text-neutral-400">
                      Artwork unavailable
                    </p>

                    <p className="text-[9px] text-neutral-600">
                      Character remains fully playable.
                    </p>

                  </div>
                )}

              </div>

            </div>


            {(() => {

              const pulledForm =
                drawnCard.forms[
                  drawnFormIndex
                ];

              const rarity =
                getFormRarity(
                  pulledForm?.name,
                  drawnFormIndex
                );

              return (
                <div className="mt-5">

                  <div className="flex flex-wrap items-center justify-center gap-2">

                    <div className="inline-flex items-center gap-2 bg-red-950 border border-red-700 rounded-full px-4 py-2">

                      <Shuffle className="w-4 h-4 text-red-400" />

                      <span className="text-xs font-black text-red-300 uppercase">
                        RANDOM FORM PULLED
                      </span>

                    </div>


                    <div
                      className={`inline-flex items-center gap-1 border rounded-full px-3 py-2 text-[10px] font-black ${rarity.className}`}
                    >
                      {
                        rarity.icon
                      }
                      {' '}
                      {
                        rarity.name
                      }
                    </div>

                  </div>


                  <div className="mt-3 bg-black border border-neutral-800 rounded-2xl p-4">

                    <div className="text-[9px] uppercase tracking-[0.25em] text-neutral-600 font-black">
                      Pulled Form
                    </div>

                    <div className="text-xl md:text-2xl font-black text-white mt-1">
                      {
                        pulledForm?.name
                      }
                    </div>

                    <p className="text-[10px] text-neutral-500 mt-2">
                      Randomly determined.
                      You cannot change or reroll this form.
                    </p>

                  </div>

                </div>
              );
            })()}


            <h3 className="text-2xl font-black mt-5">
              {
                drawnCard.name
              }
            </h3>


            <div className="flex flex-wrap justify-center gap-2 mt-2">

              {(
                drawnCard.tags ||
                []
              ).map(
                (tag) => (
                  <span
                    key={
                      tag
                    }
                    className="text-[10px] bg-red-950 border border-red-900 px-2 py-1 rounded-full text-red-300"
                  >
                    {tag}
                  </span>
                )
              )}

            </div>


            <div className="my-4 bg-neutral-950 py-3 px-4 rounded-xl border border-neutral-800 grid grid-cols-2 gap-3 text-xs font-bold">

              <div>

                Power

                <div className="text-red-500 text-lg">

                  {
                    Number(
                      powerMode ===
                      'relative'
                        ? drawnCard
                            .forms[
                              drawnFormIndex
                            ]
                            ?.relPower
                        : drawnCard
                            .forms[
                              drawnFormIndex
                            ]
                            ?.realPower
                    ).toLocaleString()
                  }

                </div>

              </div>


              <div>

                Hax

                <div className="text-red-500 text-lg">

                  {
                    drawnCard
                      .forms[
                        drawnFormIndex
                      ]
                      ?.hax ||
                    0
                  }

                  /100

                </div>

              </div>

            </div>


            <p className="text-xs font-bold text-neutral-400 mb-2">
              Assign Character To Role
            </p>


            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto mb-4">

              {selectedRoles.map(
                (role) => {

                  const taken =
                    teams[
                      activePlayerName
                    ]?.[
                      role.id
                    ];

                  return (
                    <button
                      key={
                        role.id
                      }
                      disabled={
                        Boolean(
                          taken
                        )
                      }
                      onClick={() =>
                        assignCardToRole(
                          role
                        )
                      }
                      className="bg-neutral-950 hover:bg-red-950 border border-neutral-800 disabled:opacity-20 p-3 rounded-xl text-xs font-bold"
                    >

                      {
                        role.icon
                      }

                      {' '}

                      {
                        role.name
                      }

                    </button>
                  );
                }
              )}

            </div>


            <button
              onClick={
                handlePass
              }
              disabled={
                (
                  playerPasses[
                    activePlayerName
                  ] || 0
                ) <= 0
              }
              className="w-full bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 py-3 rounded-xl text-xs font-bold"
            >

              Pass Card
              {' '}
              (
              {
                playerPasses[
                  activePlayerName
                ] || 0
              }
              {' '}Left)

            </button>

          </div>

        </div>
      )}


      {/* ===================================================
          WINNER
      =================================================== */}

      {screen ===
        'winner' &&
        aiVerdict && (
          <div className="relative z-10 max-w-7xl mx-auto mt-8 px-4">

            <div className="bg-black/90 border border-red-600 rounded-3xl p-7 md:p-10 shadow-2xl backdrop-blur-xl">

              <div className="text-center">

                <Trophy className="w-16 h-16 text-red-500 mx-auto mb-3" />

                <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-red-500">
                  Tournament Champion
                </span>

                <h2 className="text-5xl md:text-6xl font-black mt-2">
                  {
                    aiVerdict.winner
                  }
                </h2>

                <p className="text-neutral-400 mt-3 text-sm">
                  Tactical Judge Verdict
                </p>


                <div className="inline-flex items-center gap-2 mt-5 bg-red-950 border border-red-700 rounded-full px-5 py-2">

                  <Brain className="w-4 h-4 text-red-400" />

                  <span className="text-sm font-black text-red-300">

                    {
                      Math.round(
                        aiVerdict.winnerProbability
                      )
                    }

                    % Estimated Advantage

                  </span>

                </div>

              </div>


              <div className="mt-8 bg-neutral-950 border border-neutral-800 rounded-2xl p-5">

                <div className="flex items-center gap-2 mb-3">

                  <Lightbulb className="w-5 h-5 text-red-500" />

                  <h3 className="font-black">
                    Why{' '}
                    {
                      aiVerdict.winner
                    }{' '}
                    Won
                  </h3>

                </div>

                <p className="text-sm text-neutral-300 leading-7">
                  {
                    aiVerdict.explanation
                  }
                </p>

              </div>


              <div className="mt-8">

                <div className="flex items-center gap-2 mb-4">

                  <BarChart3 className="text-red-500" />

                  <h3 className="text-xl font-black">
                    Overall Team Analysis
                  </h3>

                </div>


                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

                  {aiVerdict.ranked.map(
                    (team) => (
                      <div
                        key={
                          team.player
                        }
                        className={`bg-neutral-950 border rounded-2xl p-5 ${
                          team.player ===
                          aiVerdict.winner
                            ? 'border-red-600'
                            : 'border-neutral-800'
                        }`}
                      >

                        <div className="flex justify-between items-center mb-4">

                          <h4 className="font-black truncate">
                            {
                              team.player
                            }
                          </h4>


                          {team.player ===
                            aiVerdict.winner && (
                            <span className="text-[9px] bg-red-600 text-black px-2 py-1 rounded-full font-black">
                              WINNER
                            </span>
                          )}

                        </div>


                        <div className="space-y-3">

                          {[
                            [
                              'Power',
                              team.power
                            ],
                            [
                              'Hax',
                              team.hax
                            ],
                            [
                              'Speed',
                              team.speed
                            ],
                            [
                              'Defense',
                              team.defense
                            ],
                            [
                              'Versatility',
                              team.versatility
                            ],
                            [
                              'Synergy',
                              team.synergy
                            ],
                            [
                              'Coverage',
                              team.coverage
                            ],
                            [
                              'Balance',
                              team.balance
                            ]
                          ].map(
                            ([
                              label,
                              value
                            ]) => (
                              <div
                                key={
                                  label
                                }
                              >

                                <div className="flex justify-between text-[10px] font-bold mb-1">

                                  <span className="text-neutral-500">
                                    {
                                      label
                                    }
                                  </span>

                                  <span>
                                    {Math.round(
                                      value
                                    )}
                                  </span>

                                </div>


                                <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">

                                  <div
                                    className="h-full bg-red-600"
                                    style={{
                                      width:
                                        `${clamp(
                                          value
                                        )}%`
                                    }}
                                  />

                                </div>

                              </div>
                            )
                          )}

                        </div>


                        <div className="mt-5 pt-4 border-t border-neutral-800 flex justify-between">

                          <span className="text-xs text-neutral-500">
                            Tactical Score
                          </span>

                          <span className="text-red-500 font-black">
                            {
                              team.total.toFixed(
                                1
                              )
                            }
                          </span>

                        </div>

                      </div>
                    )
                  )}

                </div>

              </div>


              {/* MAN VS MAN */}

              <div className="mt-10">

                <div className="flex items-center gap-2 mb-4">

                  <Swords className="text-red-500" />

                  <div>

                    <h3 className="text-xl font-black">
                      Man-to-Man Battle
                    </h3>

                    <p className="text-[10px] text-neutral-500">
                      Matching roles are compared one-to-one.
                    </p>

                  </div>

                </div>


                <div className="space-y-3">

                  {aiVerdict.matchupRows.map(
                    (
                      match,
                      index
                    ) => {

                      const leftWon =
                        match.winner ===
                        'left';

                      const rightWon =
                        match.winner ===
                        'right';

                      return (
                        <div
                          key={`${match.role.id}-${index}`}
                          className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4"
                        >

                          <div className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-3">

                            {
                              match.role.icon
                            }
                            {' '}
                            {
                              match.role.name
                            }

                          </div>


                          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">

                            <div
                              className={`rounded-xl p-3 border ${
                                leftWon
                                  ? 'border-red-600 bg-red-950/30'
                                  : 'border-neutral-800'
                              }`}
                            >

                              <div className="text-[10px] text-neutral-500">
                                {
                                  match.leftPlayer
                                }
                              </div>

                              <div className="font-black mt-1">
                                {
                                  match.leftCard
                                    .name
                                }
                              </div>

                              <div className="text-[10px] text-red-400">
                                {
                                  match.leftCard
                                    .form
                                }
                              </div>

                            </div>


                            <div className="text-center">

                              <div className="text-xs font-black text-neutral-600">
                                VS
                              </div>

                              <div className="text-[9px] text-neutral-700 mt-1">

                                {
                                  Math.round(
                                    match.leftScore
                                  )
                                }

                                {' – '}

                                {
                                  Math.round(
                                    match.rightScore
                                  )
                                }

                              </div>

                            </div>


                            <div
                              className={`rounded-xl p-3 border ${
                                rightWon
                                  ? 'border-red-600 bg-red-950/30'
                                  : 'border-neutral-800'
                              }`}
                            >

                              <div className="text-[10px] text-neutral-500">
                                {
                                  match.rightPlayer
                                }
                              </div>

                              <div className="font-black mt-1">
                                {
                                  match.rightCard
                                    .name
                                }
                              </div>

                              <div className="text-[10px] text-red-400">
                                {
                                  match.rightCard
                                    .form
                                }
                              </div>

                            </div>

                          </div>


                          <p className="text-xs text-neutral-400 mt-4 leading-6">
                            {
                              match.explanation
                            }
                          </p>

                        </div>
                      );
                    }
                  )}

                </div>

              </div>


              {/* LOSS ANALYZER */}

              <div className="mt-10 bg-gradient-to-br from-red-950/60 to-neutral-950 border border-red-800 rounded-3xl p-6">

                <div className="flex items-start gap-3">

                  <div className="bg-red-600 p-3 rounded-xl">

                    <Bot className="w-6 h-6 text-black" />

                  </div>


                  <div>

                    <h3 className="text-xl font-black">
                      AI Tactician
                    </h3>

                    <p className="text-xs text-neutral-400 mt-1">
                      Ask why you lost or how to draft better.
                    </p>

                  </div>

                </div>


                <div className="mt-5 flex flex-col md:flex-row gap-2">

                  <input
                    value={
                      lossQuestion
                    }
                    onChange={(
                      event
                    ) =>
                      setLossQuestion(
                        event.target.value
                      )
                    }
                    onKeyDown={(
                      event
                    ) => {
                      if (
                        event.key ===
                        'Enter'
                      ) {
                        analyzeLoss();
                      }
                    }}
                    placeholder="Why did we lose?"
                    className="flex-1 bg-black border border-neutral-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm outline-none"
                  />


                  <button
                    onClick={
                      analyzeLoss
                    }
                    className="bg-red-600 hover:bg-red-500 text-black font-black px-6 py-3 rounded-xl"
                  >
                    Analyze
                  </button>

                </div>


                <div className="flex flex-wrap gap-2 mt-3">

                  {[
                    'Why did I lose?',
                    'Which matchup hurt me?',
                    'What was my biggest mistake?',
                    'How could I draft better?'
                  ].map(
                    (
                      question
                    ) => (
                      <button
                        key={
                          question
                        }
                        onClick={() => {

                          setLossQuestion(
                            question
                          );

                          analyzeLoss(
                            question
                          );

                        }}
                        className="text-[10px] bg-neutral-900 border border-neutral-800 hover:border-red-600 px-3 py-2 rounded-lg text-neutral-400 hover:text-white"
                      >
                        {
                          question
                        }
                      </button>
                    )
                  )}

                </div>


                {lossAnswer && (
                  <div className="mt-5 bg-black border border-red-900 rounded-2xl p-5">

                    <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase">

                      <MessageCircle className="w-4 h-4" />

                      Tactical Analysis

                    </div>

                    <p className="text-sm text-neutral-300 mt-3 leading-7">
                      {
                        lossAnswer
                      }
                    </p>

                  </div>
                )}

              </div>


              <div className="mt-10 flex flex-col md:flex-row gap-3">

                <button
                  onClick={() =>
                    setShowHelp(
                      true
                    )
                  }
                  className="flex-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 py-4 rounded-2xl font-black"
                >

                  <BookOpen className="w-5 h-5 inline-block mr-2" />

                  View Rules

                </button>


                <button
                  onClick={() =>
                    setScreen(
                      'home'
                    )
                  }
                  className="flex-1 bg-red-600 hover:bg-red-500 text-black font-black py-4 rounded-2xl"
                >

                  <RotateCcw className="w-5 h-5 inline-block mr-2" />

                  New Tournament

                </button>

              </div>

            </div>

          </div>
        )}


      {/* ===================================================
          HELP MODAL
      =================================================== */}

      {showHelp && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">

          <div className="bg-neutral-950 border border-red-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

            <div className="flex items-center justify-between p-5 border-b border-neutral-800">

              <div className="flex items-center gap-3">

                <div className="bg-red-600 p-2 rounded-xl">

                  <BookOpen className="w-5 h-5 text-black" />

                </div>


                <div>

                  <h2 className="font-black text-xl">
                    Anime Draft Arena Rulebook
                  </h2>

                  <p className="text-[10px] text-neutral-500">
                    Complete newcomer guide
                  </p>

                </div>

              </div>


              <button
                onClick={() =>
                  setShowHelp(
                    false
                  )
                }
                className="bg-neutral-900 hover:bg-red-950 p-2 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>

            </div>


            <div className="flex flex-col md:flex-row min-h-[520px]">

              <div className="md:w-56 border-b md:border-b-0 md:border-r border-neutral-800 p-3">

                {Object.entries(
                  helpSections
                ).map(
                  ([
                    id,
                    section
                  ]) => (
                    <button
                      key={
                        id
                      }
                      onClick={() =>
                        setHelpTab(
                          id
                        )
                      }
                      className={`w-full text-left px-3 py-3 rounded-xl text-xs font-bold mb-1 ${
                        helpTab ===
                        id
                          ? 'bg-red-950 text-red-300 border border-red-800'
                          : 'text-neutral-500 hover:text-white hover:bg-neutral-900'
                      }`}
                    >
                      {
                        section.title
                      }
                    </button>
                  )
                )}

              </div>


              <div className="flex-1 p-6 md:p-8 overflow-y-auto">

                <h3 className="text-2xl font-black">
                  {
                    helpSections[
                      helpTab
                    ].title
                  }
                </h3>


                <div className="mt-6 space-y-4">

                  {helpSections[
                    helpTab
                  ].content.map(
                    (
                      text,
                      index
                    ) => (
                      <div
                        key={
                          index
                        }
                        className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex gap-3"
                      >

                        <span className="bg-red-950 text-red-500 rounded-lg w-7 h-7 flex items-center justify-center text-xs font-black flex-shrink-0">
                          {
                            index +
                            1
                          }
                        </span>


                        <p className="text-sm text-neutral-300 leading-7">
                          {
                            text
                          }
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      <AITactician
  screen={screen}
  context={`
Anime Arena current screen: ${screen}

Available anime verses:
${Object.keys(
  ANIME_VERSES
).join(', ')}

Loaded character count:
${Object.values(
  ANIME_VERSES
).flat().length}

The AI should explain the game using the supplied
rules and should never invent tournament mechanics.
`}
/>

    </div>
  );
}