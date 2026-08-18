import React, { useMemo, useState } from "react";

import {
  ArrowLeft,
  Gavel,
  Wallet,
  Users,
  Trophy,
  Coins,
  Shield,
  RotateCcw,
  Check,
  X,
  Sparkles,
  Swords,
  Crown,
  Plus,
  Minus,
} from "lucide-react";

import AuctionBattle from "./AuctionBattle";
import AuctionCompetitiveLayer from "../components/AuctionCompetitiveLayer";
import { ANIME_VERSES } from "../data/animeData";

import {
  analyzePurchaseDecision,
  generateAuctionMoment,
} from "../engine/auctionMetaEngine";

/* =========================================================
   ANIME ARENA — AUCTION MODE
========================================================= */

const ROLE_OPTIONS = [
  "Tank",
  "DPS",
  "Speed",
  "Hax",
  "Support",
  "IQ",
  "Versatility",
  "Finisher",
];

const DEFAULT_ROLE_DISTRIBUTION = {
  Tank: 0,
  DPS: 0,
  Speed: 0,
  Hax: 0,
  Support: 0,
  IQ: 0,
  Versatility: 0,
  Finisher: 0,
};

const RARITY_OPTIONS = [
  "Common",
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
];

const DEFAULT_RARITY_DENSITY = {
  Common: 40,
  Rare: 30,
  Epic: 15,
  Legendary: 10,
  Mythic: 5,
};

const MONEY_OPTIONS = [
  500,
  1000,
  2500,
  5000,
  10000,
  25000,
  50000,
];

const SLOT_OPTIONS = [
  6,
  9,
  12,
  15,
  18,
];

const POOL_SIZE_OPTIONS = [
  12,
  18,
  24,
  30,
  40,
  50,
  75,
  100,
  150,
  200,
  250,
  300,
  350,
  400,
];

const PLAYER_COUNT_OPTIONS = [
  2,
  3,
  4,
  5,
  6,
];

const DEFAULT_PLAYERS = [
  {
    id: 1,
    name: "Player 1",
    budget: 5000,
  },
  {
    id: 2,
    name: "Player 2",
    budget: 5000,
  },
  {
    id: 3,
    name: "Player 3",
    budget: 5000,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function rarityClass(rarity) {
  const value = String(
    rarity || ""
  ).toLowerCase();

  if (value.includes("mythic")) {
    return "border-red-500 bg-red-950/60 text-red-300";
  }

  if (value.includes("legendary")) {
    return "border-orange-500 bg-orange-950/50 text-orange-300";
  }

  if (value.includes("epic")) {
    return "border-purple-500 bg-purple-950/50 text-purple-300";
  }

  if (value.includes("rare")) {
    return "border-blue-500 bg-blue-950/50 text-blue-300";
  }

  return "border-neutral-700 bg-neutral-900 text-neutral-300";
}

function getCharacterImage(character) {
  return (
    character?.image ||
    character?.imageUrl ||
    character?.img ||
    character?.art ||
    character?.portrait ||
    ""
  );
}

function getPower(character) {
  return Number(
    character?.power ??
      character?.powerLevel ??
      character?.PNR ??
      character?.pnr ??
      character?.realPower ??
      character?.relPower ??
      character?.stats?.power ??
      0
  );
}

function getHax(character) {
  return Number(
    character?.hax ??
      character?.stats?.hax ??
      0
  );
}

function normalizeRole(role) {
  if (!role) {
    return "Versatility";
  }

  const value =
    String(role).toLowerCase();

  if (
    value.includes("tank") ||
    value.includes("defense") ||
    value.includes("defender")
  ) {
    return "Tank";
  }

  if (
    value.includes("dps") ||
    value.includes("attack") ||
    value.includes("damage")
  ) {
    return "DPS";
  }

  if (
    value.includes("speed") ||
    value.includes("assassin")
  ) {
    return "Speed";
  }

  if (
    value.includes("hax") ||
    value.includes("ability") ||
    value.includes("reality")
  ) {
    return "Hax";
  }

  if (
    value.includes("support") ||
    value.includes("heal") ||
    value.includes("medic")
  ) {
    return "Support";
  }

  if (
    value.includes("iq") ||
    value.includes("intelligence") ||
    value.includes("strateg")
  ) {
    return "IQ";
  }

  if (
    value.includes("finish") ||
    value.includes("execution")
  ) {
    return "Finisher";
  }

  if (
    value.includes("versat") ||
    value.includes("hybrid")
  ) {
    return "Versatility";
  }

  return "Versatility";
}

function getNaturalRole(character) {
  return normalizeRole(
    character?.auctionRole ||
      character?.role ||
      character?.primaryRole ||
      character?.type ||
      character?.class ||
      character?.traits?.role
  );
}

function getDisplayedRole(character) {
  return (
    character?.assignedRole ||
    getNaturalRole(character)
  );
}

function getAuctionId(
  character,
  index = 0
) {
  return String(
    character?.auctionId ??
      character?.id ??
      character?.characterId ??
      `${character?.verse || "anime"}-${
        character?.name || "character"
      }-${index}`
  );
}

function shuffle(input) {
  const array = [
    ...input,
  ];

  for (
    let i = array.length - 1;
    i > 0;
    i -= 1
  ) {
    const j =
      Math.floor(
        Math.random() *
          (i + 1)
      );

    [
      array[i],
      array[j],
    ] = [
      array[j],
      array[i],
    ];
  }

  return array;
}

/* =========================================================
   DATABASE NORMALIZATION
========================================================= */

function flattenAnimeDatabase() {
  const normalizedVerses =
    Array.isArray(ANIME_VERSES)
      ? ANIME_VERSES.map(
          (
            verse,
            index
          ) => ({
            name:
              verse?.name ||
              verse?.title ||
              `Verse ${index + 1}`,

            characters:
              verse?.characters ||
              verse?.roster ||
              verse?.cards ||
              [],
          })
        )
      : Object.entries(
          ANIME_VERSES || {}
        ).map(
          ([
            verseName,
            characters,
          ]) => ({
            name:
              verseName,

            characters:
              Array.isArray(
                characters
              )
                ? characters
                : [],
          })
        );

  const result = [];

  normalizedVerses.forEach(
    (
      verse,
      verseIndex
    ) => {
      const characters =
        Array.isArray(
          verse.characters
        )
          ? verse.characters
          : [];

      characters.forEach(
        (
          character,
          characterIndex
        ) => {
          const forms =
            character?.forms ||
            character?.versions ||
            [];

          if (
            Array.isArray(forms) &&
            forms.length > 0
          ) {
            forms.forEach(
              (
                form,
                formIndex
              ) => {
                const id =
                  form?.id ||
                  `${verse.name}-${
                    character?.id ||
                    characterIndex
                  }-form-${formIndex}`;

                result.push({
                  ...character,
                  ...form,

                  id,

                  auctionId:
                    id,

                  characterId:
                    character?.id ||
                    `${verse.name}-${characterIndex}`,

                  characterName:
                    character?.name ||
                    character?.characterName ||
                    "Unknown Character",

                  name:
                    form?.name ||
                    character?.name ||
                    "Unknown Character",

                  verse:
                    verse.name ||
                    "Unknown Anime",

                  rarity:
                    form?.rarity ||
                    character?.rarity ||
                    "Common",

                  role:
                    form?.role ||
                    character?.role ||
                    "Versatility",

                  auctionRole:
                    normalizeRole(
                      form?.role ||
                        character?.role ||
                        "Versatility"
                    ),

                  image:
                    form?.image ||
                    form?.img ||
                    character?.image ||
                    character?.imageUrl ||
                    character?.img ||
                    "",

                  power:
                    form?.power ??
                    form?.powerLevel ??
                    form?.PNR ??
                    form?.pnr ??
                    form?.relPower ??
                    form?.realPower ??
                    character?.power ??
                    character?.powerLevel ??
                    0,

                  relPower:
                    form?.relPower ??
                    character?.relPower ??
                    0,

                  realPower:
                    form?.realPower ??
                    character?.realPower ??
                    0,

                  hax:
                    form?.hax ??
                    character?.hax ??
                    0,
                });
              }
            );

            return;
          }

          const id =
            character?.id ||
            `${verse.name}-${characterIndex}-character-${verseIndex}`;

          result.push({
            ...character,

            id,

            auctionId:
              id,

            characterId:
              character?.id ||
              id,

            characterName:
              character?.name ||
              "Unknown Character",

            name:
              character?.name ||
              character?.characterName ||
              "Unknown Character",

            verse:
              verse.name ||
              "Unknown Anime",

            rarity:
              character?.rarity ||
              "Common",

            role:
              character?.role ||
              "Versatility",

            auctionRole:
              normalizeRole(
                character?.role ||
                  "Versatility"
              ),

            image:
              character?.image ||
              character?.imageUrl ||
              character?.img ||
              "",

            power:
              character?.power ??
              character?.powerLevel ??
              character?.PNR ??
              character?.pnr ??
              character?.relPower ??
              character?.realPower ??
              0,

            relPower:
              character?.relPower ??
              0,

            realPower:
              character?.realPower ??
              0,

            hax:
              character?.hax ??
              0,
          });
        }
      );
    }
  );

  return result;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function AuctionMode({
  onBack,
  onComplete,
}) {
  const database = useMemo(
    () =>
      flattenAnimeDatabase(),
    []
  );

  /* =========================================================
     SETUP STATE
  ========================================================= */

  const [
    setupComplete,
    setSetupComplete,
  ] = useState(false);

  const [
    startingBudget,
    setStartingBudget,
  ] = useState(5000);

  const [
    totalSlots,
    setTotalSlots,
  ] = useState(12);

  const [
    poolSize,
    setPoolSize,
  ] = useState(50);

  const [
    selectedRarities,
    setSelectedRarities,
  ] = useState([
    ...RARITY_OPTIONS,
  ]);

  const [
    rarityDensity,
    setRarityDensity,
  ] = useState({
    ...DEFAULT_RARITY_DENSITY,
  });

  const [
    selectedVerses,
    setSelectedVerses,
  ] = useState([]);

  const [
    players,
    setPlayers,
  ] = useState(() =>
    DEFAULT_PLAYERS.map(
      (player) => ({
        ...player,
      })
    )
  );

  const [
    roleDistributions,
    setRoleDistributions,
  ] = useState(() =>
    DEFAULT_PLAYERS.reduce(
      (
        acc,
        player
      ) => {
        acc[player.id] = {
          ...DEFAULT_ROLE_DISTRIBUTION,
        };

        return acc;
      },
      {}
    )
  );

  /* =========================================================
     AUCTION STATE
  ========================================================= */

  const [
    auctionPool,
    setAuctionPool,
  ] = useState([]);

  const [
    currentCharacter,
    setCurrentCharacter,
  ] = useState(null);

  const [
    currentBid,
    setCurrentBid,
  ] = useState(0);

  const [
    highestBidder,
    setHighestBidder,
  ] = useState(null);

  const [
    turnIndex,
    setTurnIndex,
  ] = useState(0);

  const [
    passedPlayers,
    setPassedPlayers,
  ] = useState([]);

  const [
    teams,
    setTeams,
  ] = useState(() =>
    DEFAULT_PLAYERS.reduce(
      (
        acc,
        player
      ) => {
        acc[player.id] = [];

        return acc;
      },
      {}
    )
  );

  const [
    auctionHistory,
    setAuctionHistory,
  ] = useState([]);

  const [
    auctionFinished,
    setAuctionFinished,
  ] = useState(false);

  const [
    showAuctionBattle,
    setShowAuctionBattle,
  ] = useState(false);

  const [
    pendingRoleAssignment,
    setPendingRoleAssignment,
  ] = useState(null);

  const [
    purchaseAnalyses,
    setPurchaseAnalyses,
  ] = useState([]);

  const [
    currentAuctionMoment,
    setCurrentAuctionMoment,
  ] = useState(null);

  const [
    message,
    setMessage,
  ] = useState(
    "Configure your auction and begin."
  );

  /* =========================================================
     DERIVED VALUES

     IMPORTANT:
     These MUST be inside AuctionMode because they depend
     on component state.
  ========================================================= */

  const currentPlayer =
    players[turnIndex] ||
    players[0] ||
    null;

  const maxSameRole =
    Math.max(
      1,
      Math.floor(
        Number(totalSlots) / 3
      )
    );

  const maxSlotsPerPlayer =
    Math.max(
      1,
      Number(totalSlots) || 1
    );

  const minimumBid =
    currentBid > 0
      ? currentBid +
        Math.max(
          50,
          Math.round(
            currentBid * 0.1
          )
        )
      : Math.max(
          50,
          Math.round(
            startingBudget * 0.01
          )
        );

  /* =========================================================
     ROLE HELPERS
  ========================================================= */

  function getRoleTotal(
    playerId
  ) {
    const distribution =
      roleDistributions[
        playerId
      ] ||
      DEFAULT_ROLE_DISTRIBUTION;

    return Object.values(
      distribution
    ).reduce(
      (
        sum,
        value
      ) =>
        sum +
        Number(
          value || 0
        ),
      0
    );
  }

  function getRemainingRoleSlots(
    playerId
  ) {
    return Math.max(
      0,
      totalSlots -
        getRoleTotal(
          playerId
        )
    );
  }

  function updateRoleCount(
    playerId,
    role,
    value
  ) {
    const numericValue =
      Math.max(
        0,
        Math.min(
          maxSameRole,
          Math.floor(
            Number(value) ||
              0
          )
        )
      );

    setRoleDistributions(
      (
        current
      ) => {
        const existing =
          current[
            playerId
          ] ||
          DEFAULT_ROLE_DISTRIBUTION;

        const otherRolesTotal =
          Object.entries(
            existing
          ).reduce(
            (
              sum,
              [
                key,
                count,
              ]
            ) =>
              key === role
                ? sum
                : sum +
                  Number(
                    count ||
                      0
                  ),
            0
          );

        if (
          otherRolesTotal +
            numericValue >
          totalSlots
        ) {
          setMessage(
            `Role distribution cannot exceed ${totalSlots} total slots.`
          );

          return current;
        }

        return {
          ...current,

          [playerId]: {
            ...existing,

            [role]:
              numericValue,
          },
        };
      }
    );
  }

  function resetPlayerRoles(
    playerId
  ) {
    setRoleDistributions(
      (
        current
      ) => ({
        ...current,

        [playerId]: {
          ...DEFAULT_ROLE_DISTRIBUTION,
        },
      })
    );
  }

  function isRoleDistributionComplete(
    playerId
  ) {
    return (
      getRoleTotal(
        playerId
      ) ===
      totalSlots
    );
  }

  function getPlayerRoleStatus(
    playerId,
    role,
    teamOverride = null
  ) {
    const team =
      teamOverride ||
      teams[playerId] ||
      [];

    const limit =
      Number(
        roleDistributions[
          playerId
        ]?.[role] ||
          0
      );

    const used =
      team.filter(
        (character) =>
          character?.assignedRole ===
          role
      ).length;

    return {
      used,
      limit,

      remaining:
        Math.max(
          0,
          limit - used
        ),

      full:
        limit <= 0 ||
        used >= limit,
    };
  }

  function getAvailablePurchaseRoles(
    playerId,
    teamOverride = null
  ) {
    return ROLE_OPTIONS.filter(
      (role) =>
        getPlayerRoleStatus(
          playerId,
          role,
          teamOverride
        ).remaining > 0
    );
  }

  function canPlayerBidOnCurrentCharacter(
    playerId,
    passedList = passedPlayers
  ) {
    if (!currentCharacter) {
      return false;
    }

    if (pendingRoleAssignment) {
      return false;
    }

    const player =
      players.find(
        (item) =>
          item.id ===
          playerId
      );

    if (!player) {
      return false;
    }

    if (
      passedList.includes(
        playerId
      )
    ) {
      return false;
    }

    if (
      (
        teams[playerId] ||
        []
      ).length >=
      maxSlotsPerPlayer
    ) {
      return false;
    }

    if (
      Number(
        player.budget
      ) <
      minimumBid
    ) {
      return false;
    }

    return (
      getAvailablePurchaseRoles(
        playerId
      ).length >
      0
    );
  }

  function getEligiblePlayers(
    passedList = passedPlayers
  ) {
    return players.filter(
      (player) =>
        canPlayerBidOnCurrentCharacter(
          player.id,
          passedList
        )
    );
  }

  /* =========================================================
     RARITY
  ========================================================= */

  function getRarityDensityTotal() {
    return selectedRarities.reduce(
      (
        sum,
        rarity
      ) =>
        sum +
        Number(
          rarityDensity[
            rarity
          ] || 0
        ),
      0
    );
  }

  function rebalanceDensity(
    nextRarities
  ) {
    if (
      !nextRarities.length
    ) {
      return {
        ...DEFAULT_RARITY_DENSITY,
      };
    }

    const result = {
      ...rarityDensity,
    };

    const existingSelected =
      nextRarities.filter(
        (rarity) =>
          Number(
            result[rarity] ||
              0
          ) > 0
      );

    const existingTotal =
      existingSelected.reduce(
        (
          sum,
          rarity
        ) =>
          sum +
          Number(
            result[rarity] ||
              0
          ),
        0
      );

    RARITY_OPTIONS.filter(
      (
        rarity
      ) =>
        !nextRarities.includes(
          rarity
        )
    ).forEach(
      (
        rarity
      ) => {
        result[rarity] = 0;
      }
    );

    if (
      existingTotal <=
      0
    ) {
      const each =
        Math.floor(
          100 /
            nextRarities.length
        );

      let remainder =
        100 -
        each *
          nextRarities.length;

      nextRarities.forEach(
        (
          rarity
        ) => {
          result[rarity] =
            each +
            (
              remainder >
              0
                ? 1
                : 0
            );

          remainder -=
            remainder >
            0
              ? 1
              : 0;
        }
      );

      return result;
    }

    const scale =
      100 /
      existingTotal;

    let assigned = 0;

    nextRarities.forEach(
      (
        rarity,
        index
      ) => {
        if (
          index ===
          nextRarities.length -
            1
        ) {
          result[rarity] =
            Math.max(
              0,
              100 -
                assigned
            );
        } else {
          const scaled =
            Math.round(
              Number(
                result[
                  rarity
                ] || 0
              ) *
                scale
            );

          result[rarity] =
            scaled;

          assigned +=
            scaled;
        }
      }
    );

    return result;
  }

  function toggleRarity(
    rarity
  ) {
    setSelectedRarities(
      (
        current
      ) => {
        let next;

        if (
          current.includes(
            rarity
          )
        ) {
          if (
            current.length ===
            1
          ) {
            return current;
          }

          next =
            current.filter(
              (
                item
              ) =>
                item !==
                rarity
            );
        } else {
          next = [
            ...current,
            rarity,
          ];
        }

        setRarityDensity(
          rebalanceDensity(
            next
          )
        );

        return next;
      }
    );
  }

  function updateRarityDensity(
    rarity,
    value
  ) {
    if (
      !selectedRarities.includes(
        rarity
      )
    ) {
      return;
    }

    const numericValue =
      Math.max(
        0,
        Math.min(
          100,
          Math.floor(
            Number(value) ||
              0
          )
        )
      );

    setRarityDensity(
      (
        current
      ) => {
        const next = {
          ...current,

          [rarity]:
            numericValue,
        };

        const others =
          selectedRarities.filter(
            (
              item
            ) =>
              item !==
              rarity
          );

        if (
          !others.length
        ) {
          next[rarity] =
            100;

          return next;
        }

        const remaining =
          100 -
          numericValue;

        const currentOtherTotal =
          others.reduce(
            (
              sum,
              item
            ) =>
              sum +
              Number(
                current[
                  item
                ] || 0
              ),
            0
          );

        if (
          currentOtherTotal <=
          0
        ) {
          const each =
            Math.floor(
              remaining /
                others.length
            );

          let remainder =
            remaining -
            each *
              others.length;

          others.forEach(
            (
              item
            ) => {
              next[item] =
                each +
                (
                  remainder >
                  0
                    ? 1
                    : 0
                );

              remainder -=
                remainder >
                0
                  ? 1
                  : 0;
            }
          );
        } else {
          let assigned =
            0;

          others.forEach(
            (
              item,
              index
            ) => {
              if (
                index ===
                others.length -
                  1
              ) {
                next[item] =
                  Math.max(
                    0,
                    remaining -
                      assigned
                  );
              } else {
                const share =
                  Math.round(
                    (
                      Number(
                        current[
                          item
                        ] || 0
                      ) /
                      currentOtherTotal
                    ) *
                      remaining
                  );

                next[item] =
                  share;

                assigned +=
                  share;
              }
            }
          );
        }

        return next;
      }
    );
  }

  /* =========================================================
     PLAYER / VERSE
  ========================================================= */

  function toggleVerse(
    verseName
  ) {
    setSelectedVerses(
      (
        current
      ) =>
        current.includes(
          verseName
        )
          ? current.filter(
              (
                item
              ) =>
                item !==
                verseName
            )
          : [
              ...current,
              verseName,
            ]
    );
  }

  function updatePlayerName(
    id,
    name
  ) {
    setPlayers(
      (
        current
      ) =>
        current.map(
          (
            player
          ) =>
            player.id ===
            id
              ? {
                  ...player,
                  name,
                }
              : player
        )
    );
  }

  function updatePlayerBudget(
    id,
    budget
  ) {
    const value =
      Math.max(
        0,
        Number(budget) ||
          0
      );

    setPlayers(
      (
        current
      ) =>
        current.map(
          (
            player
          ) =>
            player.id ===
            id
              ? {
                  ...player,
                  budget:
                    value,
                }
              : player
        )
    );
  }

  function changeStartingBudget(
    value
  ) {
    const budget =
      Number(value);

    if (
      !Number.isFinite(
        budget
      ) ||
      budget <
        500 ||
      budget >
        50000
    ) {
      return;
    }

    setStartingBudget(
      budget
    );

    setPlayers(
      (
        current
      ) =>
        current.map(
          (
            player
          ) => ({
            ...player,

            budget:
              Math.max(
                Number(
                  player.budget
                ) || 0,
                budget
              ),
          })
        )
    );
  }

  function updatePlayerCount(
    count
  ) {
    const numericCount =
      Math.max(
        2,
        Math.min(
          6,
          Number(count) ||
            2
        )
      );

    setPlayers(
      (
        current
      ) => {
        if (
          numericCount ===
          current.length
        ) {
          return current;
        }

        if (
          numericCount <
          current.length
        ) {
          return current.slice(
            0,
            numericCount
          );
        }

        const next = [
          ...current,
        ];

        for (
          let i =
            current.length;
          i <
          numericCount;
          i += 1
        ) {
          next.push({
            id:
              i + 1,

            name:
              `Player ${
                i + 1
              }`,

            budget:
              startingBudget,
          });
        }

        return next;
      }
    );

    setRoleDistributions(
      (
        current
      ) => {
        const next = {};

        for (
          let i = 0;
          i <
          numericCount;
          i += 1
        ) {
          const id =
            i + 1;

          next[id] = {
            ...(
              current[id] ||
              DEFAULT_ROLE_DISTRIBUTION
            ),
          };
        }

        return next;
      }
    );

    setTeams(
      (
        current
      ) => {
        const next = {};

        for (
          let i = 0;
          i <
          numericCount;
          i += 1
        ) {
          const id =
            i + 1;

          next[id] =
            current[id] ||
            [];
        }

        return next;
      }
    );
  }

  /* =========================================================
     POOL GENERATION
  ========================================================= */

  function generateAuctionPool() {
    const base =
      database.filter(
        (
          character
        ) => {
          if (
            selectedVerses.length &&
            !selectedVerses.includes(
              character.verse
            )
          ) {
            return false;
          }

          return selectedRarities.includes(
            String(
              character.rarity ||
                "Common"
            )
          );
        }
      );

    const unique = [];
    const seen = new Set();

    base.forEach(
      (
        character,
        index
      ) => {
        const id =
          getAuctionId(
            character,
            index
          );

        if (
          seen.has(id)
        ) {
          return;
        }

        seen.add(id);

        unique.push({
          ...character,
          id,
          auctionId:
            id,
        });
      }
    );

    if (
      unique.length <
      poolSize
    ) {
      throw new Error(
        `Only ${unique.length} unique entries match your filters; ${poolSize} are required.`
      );
    }

    const chosen = [];
    const used = new Set();

    selectedRarities.forEach(
      (
        rarity
      ) => {
        if (
          chosen.length >=
          poolSize
        ) {
          return;
        }

        const target =
          Math.round(
            (
              Number(
                rarityDensity[
                  rarity
                ] || 0
              ) /
              100
            ) *
              poolSize
          );

        const bucket =
          shuffle(
            unique.filter(
              (
                character
              ) =>
                String(
                  character.rarity ||
                    "Common"
                ).toLowerCase() ===
                rarity.toLowerCase()
            )
          );

        let added = 0;

        for (
          const character of
          bucket
        ) {
          if (
            added >=
              target ||
            chosen.length >=
              poolSize
          ) {
            break;
          }

          if (
            used.has(
              character.id
            )
          ) {
            continue;
          }

          used.add(
            character.id
          );

          chosen.push(
            character
          );

          added += 1;
        }
      }
    );

    for (
      const character of
      shuffle(unique)
    ) {
      if (
        chosen.length >=
        poolSize
      ) {
        break;
      }

      if (
        used.has(
          character.id
        )
      ) {
        continue;
      }

      used.add(
        character.id
      );

      chosen.push(
        character
      );
    }

    if (
      chosen.length <
      poolSize
    ) {
      throw new Error(
        `Pool generation produced only ${chosen.length} unique entries.`
      );
    }

    return shuffle(
      chosen.slice(
        0,
        poolSize
      )
    );
  }

  /* =========================================================
     START AUCTION
  ========================================================= */

  function startAuction() {
    try {
      if (
        players.length <
          2 ||
        players.length >
          6
      ) {
        setMessage(
          "Auction requires between 2 and 6 players."
        );

        return;
      }

      const invalidBudget =
        players.find(
          (
            player
          ) =>
            Number(
              player.budget
            ) <
            startingBudget
        );

      if (
        invalidBudget
      ) {
        setMessage(
          `${invalidBudget.name}'s budget must be at least ₹${startingBudget.toLocaleString()}.`
        );

        return;
      }

      const requiredCharacters =
        players.length *
        totalSlots;

      if (
        poolSize <
        requiredCharacters
      ) {
        setMessage(
          `Pool size ${poolSize} is too small. ${players.length} players × ${totalSlots} slots requires at least ${requiredCharacters}.`
        );

        return;
      }

      const densityTotal =
        getRarityDensityTotal();

      if (
        densityTotal !==
        100
      ) {
        setMessage(
          `Selected rarity density must total 100%. Current total: ${densityTotal}%.`
        );

        return;
      }

      for (
        const player of
        players
      ) {
        const total =
          getRoleTotal(
            player.id
          );

        if (
          total !==
          totalSlots
        ) {
          setMessage(
            `${player.name}'s role distribution is ${total}/${totalSlots}. It must equal exactly ${totalSlots}.`
          );

          return;
        }

        const overflow =
          Object.entries(
            roleDistributions[
              player.id
            ] || {}
          ).find(
            ([
              ,
              value,
            ]) =>
              Number(
                value || 0
              ) >
              maxSameRole
          );

        if (
          overflow
        ) {
          setMessage(
            `${player.name}: ${overflow[0]} cannot exceed ${maxSameRole} slots.`
          );

          return;
        }
      }

      const pool =
        generateAuctionPool();

      const freshTeams =
        players.reduce(
          (
            acc,
            player
          ) => {
            acc[player.id] =
              [];

            return acc;
          },
          {}
        );

      setTeams(
        freshTeams
      );

      setAuctionPool(
        pool
      );

      setCurrentCharacter(
        pool[0] || null
      );

      setCurrentBid(
        0
      );

      setHighestBidder(
        null
      );

      setTurnIndex(
        0
      );

      setPassedPlayers(
        []
      );

      setAuctionHistory(
        []
      );

      setPurchaseAnalyses(
        []
      );

      setCurrentAuctionMoment(
        null
      );

      setAuctionFinished(
        false
      );

      setShowAuctionBattle(
        false
      );

      setPendingRoleAssignment(
        null
      );

      setSetupComplete(
        true
      );

      setMessage(
        `Auction started with ${pool.length} characters. ${
          players[0]?.name ||
          "Player 1"
        } is first.`
      );
    } catch (
      error
    ) {
      console.error(
        "START AUCTION ERROR:",
        error
      );

      setMessage(
        `Auction could not start: ${
          error?.message ||
          "Unknown error"
        }`
      );
    }
  }

  /* =========================================================
     TURN SYSTEM
  ========================================================= */

  function advanceTurn(
    startIndex = turnIndex
  ) {
    if (
      !currentCharacter ||
      !players.length ||
      pendingRoleAssignment
    ) {
      return;
    }

    const eligible =
      getEligiblePlayers(
        passedPlayers
      );

    if (
      !eligible.length
    ) {
      if (
        highestBidder &&
        currentBid > 0
      ) {
        finishCurrentAuction(
          highestBidder
        );
      } else {
        finishCurrentAuction(
          null
        );
      }

      return;
    }

    for (
      let step = 1;
      step <=
      players.length;
      step +=
        1
    ) {
      const nextIndex =
        (
          startIndex +
          step
        ) %
        players.length;

      const candidate =
        players[
          nextIndex
        ];

      if (
        candidate &&
        eligible.some(
          (
            player
          ) =>
            player.id ===
            candidate.id
        )
      ) {
        setTurnIndex(
          nextIndex
        );

        return;
      }
    }
  }

  /* =========================================================
     BIDDING
  ========================================================= */

  function placeBid(
    amount
  ) {
    if (
      !currentCharacter ||
      !currentPlayer ||
      pendingRoleAssignment
    ) {
      setMessage(
        "No character is currently available for bidding."
      );

      return;
    }

    if (
      !canPlayerBidOnCurrentCharacter(
        currentPlayer.id
      )
    ) {
      setMessage(
        `${currentPlayer.name} cannot legally bid on this character.`
      );

      advanceTurn(
        turnIndex
      );

      return;
    }

    const numericAmount =
      Math.floor(
        Number(amount) ||
          0
      );

    if (
      numericAmount <
      minimumBid
    ) {
      setMessage(
        `Minimum bid is ₹${minimumBid.toLocaleString()}.`
      );

      return;
    }

    if (
      numericAmount >
      Number(
        currentPlayer.budget
      )
    ) {
      setMessage(
        `${currentPlayer.name} cannot afford ₹${numericAmount.toLocaleString()}.`
      );

      return;
    }

    setCurrentBid(
      numericAmount
    );

    setHighestBidder(
      currentPlayer.id
    );

    setPassedPlayers(
      (
        current
      ) =>
        current.filter(
          (
            id
          ) =>
            id !==
            currentPlayer.id
        )
    );

    setMessage(
      `${currentPlayer.name} bids ₹${numericAmount.toLocaleString()} on ${currentCharacter.name}.`
    );

    /*
      React state is asynchronous, so move to the next eligible
      bidder directly rather than relying on the just-updated
      currentBid/highestBidder state.
    */
    const nextEligible =
      players.filter(
        (
          player
        ) => {
          if (
            player.id ===
            currentPlayer.id
          ) {
            return false;
          }

          if (
            passedPlayers.includes(
              player.id
            )
          ) {
            return false;
          }

          if (
            (
              teams[
                player.id
              ] ||
              []
            ).length >=
            maxSlotsPerPlayer
          ) {
            return false;
          }

          if (
            Number(
              player.budget
            ) <
            numericAmount +
              Math.max(
                50,
                Math.round(
                  numericAmount *
                    0.1
                )
              )
          ) {
            return false;
          }

          return (
            getAvailablePurchaseRoles(
              player.id
            ).length >
            0
          );
        }
      );

    if (
      nextEligible.length ===
      0
    ) {
      /*
        The current highest bidder is the only bidder remaining.
        Let the auction host sell the character manually.
      */
      return;
    }

    for (
      let step = 1;
      step <=
      players.length;
      step +=
        1
    ) {
      const nextIndex =
        (
          turnIndex +
          step
        ) %
        players.length;

      const candidate =
        players[
          nextIndex
        ];

      if (
        candidate &&
        nextEligible.some(
          (
            player
          ) =>
            player.id ===
            candidate.id
        )
      ) {
        setTurnIndex(
          nextIndex
        );

        return;
      }
    }
  }

  function quickBid(
    multiplier
  ) {
    const amount =
      currentBid > 0
        ? Math.ceil(
            currentBid *
              multiplier
          )
        : Math.max(
            50,
            Math.round(
              startingBudget *
                0.01
            )
          );

    placeBid(
      amount
    );
  }

  function passAuction() {
    if (
      !currentCharacter ||
      !currentPlayer ||
      pendingRoleAssignment
    ) {
      return;
    }

    if (
      passedPlayers.includes(
        currentPlayer.id
      )
    ) {
      advanceTurn(
        turnIndex
      );

      return;
    }

    const nextPassed = [
      ...passedPlayers,
      currentPlayer.id,
    ];

    setPassedPlayers(
      nextPassed
    );

    setMessage(
      `${currentPlayer.name} passed on ${currentCharacter.name}.`
    );

    const eligible =
      getEligiblePlayers(
        nextPassed
      );

    if (
      currentBid > 0 &&
      highestBidder
    ) {
      const challengers =
        eligible.filter(
          (
            player
          ) =>
            player.id !==
            highestBidder
        );

      if (
        !challengers.length
      ) {
        finishCurrentAuction(
          highestBidder
        );

        return;
      }
    } else if (
      currentBid ===
        0 &&
      !eligible.length
    ) {
      finishCurrentAuction(
        null
      );

      return;
    }

    advanceTurn(
      turnIndex
    );
  }

  function sellCurrentCharacter() {
    if (
      !currentCharacter ||
      !highestBidder ||
      currentBid <= 0 ||
      pendingRoleAssignment
    ) {
      setMessage(
        "A valid bidder is required before selling."
      );

      return;
    }

    finishCurrentAuction(
      highestBidder
    );
  }

  /* =========================================================
     PURCHASE ANALYSIS
  ========================================================= */

  function runPurchaseAnalysis({
    player,
    character,
    purchasePrice,
    assignedRole,
    updatedTeam,
  }) {
    try {
      if (
        typeof analyzePurchaseDecision !==
        "function"
      ) {
        return null;
      }

      const analysis =
        analyzePurchaseDecision(
          {
            player: {
              ...player,

              team:
                updatedTeam ||
                teams[
                  player.id
                ] ||
                [],
            },

            character,

            purchasePrice,

            assignedRole,

            roleDistributions,
          }
        );

      if (
        analysis
      ) {
        setPurchaseAnalyses(
          (
            current
          ) => [
            ...current,
            analysis,
          ]
        );

        try {
          if (
            typeof generateAuctionMoment ===
            "function"
          ) {
            const moment =
              generateAuctionMoment(
                analysis
              );

            if (
              moment
            ) {
              setCurrentAuctionMoment(
                moment
              );

              window.setTimeout(
                () => {
                  setCurrentAuctionMoment(
                    null
                  );
                },
                5000
              );
            }
          }
        } catch (
          momentError
        ) {
          console.warn(
            "Auction moment generation failed:",
            momentError
          );
        }
      }

      return analysis;
    } catch (
      error
    ) {
      console.error(
        "Purchase analysis failed:",
        error
      );

      return null;
    }
  }

  /* =========================================================
     FINISH CURRENT AUCTION
  ========================================================= */

  function finishCurrentAuction(
    winnerId
  ) {
    if (
      !currentCharacter ||
      pendingRoleAssignment
    ) {
      return;
    }

    const character =
      currentCharacter;

    const winningPrice =
      Number(
        currentBid
      ) || 0;

    let updatedPlayers =
      players;

    const updatedTeams = {
      ...teams,
    };

    /* =======================================================
       SOLD
    ======================================================= */

    if (
      winnerId
    ) {
      const winner =
        players.find(
          (
            player
          ) =>
            player.id ===
            winnerId
        );

      if (
        !winner
      ) {
        setMessage(
          "Winning player could not be found."
        );

        return;
      }

      const winnerTeam =
        updatedTeams[
          winnerId
        ] || [];

      if (
        winnerTeam.length >=
        maxSlotsPerPlayer
      ) {
        setMessage(
          `${winner.name}'s team is already full.`
        );

        return;
      }

      if (
        winningPrice >
        Number(
          winner.budget
        )
      ) {
        setMessage(
          `${winner.name} cannot afford this purchase.`
        );

        return;
      }

      /*
        IMPORTANT:
        Natural role is recorded only as evidence.
        assignedRole stays NULL until the player chooses.
      */

      const purchased = {
        ...character,

        boughtFor:
          winningPrice,

        purchasePrice:
          winningPrice,

        purchasedBy:
          winnerId,

        naturalRole:
          getNaturalRole(
            character
          ),

        assignedRole:
          null,

        roleAssignedByPlayer:
          false,
      };

      updatedTeams[
        winnerId
      ] = [
        ...winnerTeam,
        purchased,
      ];

      updatedPlayers =
        players.map(
          (
            player
          ) =>
            player.id ===
            winnerId
              ? {
                  ...player,

                  budget:
                    Number(
                      player.budget
                    ) -
                    winningPrice,
                }
              : player
        );

      setAuctionHistory(
        (
          history
        ) => [
          ...history,
          {
            character:
              purchased,

            winnerId,

            price:
              winningPrice,

            status:
              "SOLD",
          },
        ]
      );

      setPlayers(
        updatedPlayers
      );

      setTeams(
        updatedTeams
      );

      /*
        Remove current character BEFORE role assignment.
      */

      const remainingPool =
        auctionPool.filter(
          (
            item
          ) =>
            getAuctionId(
              item
            ) !==
            getAuctionId(
              character
            )
        );

      setAuctionPool(
        remainingPool
      );

      setCurrentCharacter(
        null
      );

      setCurrentBid(
        0
      );

      setHighestBidder(
        null
      );

      setPassedPlayers(
        []
      );

      setPendingRoleAssignment(
        {
          playerId:
            winnerId,

          characterId:
            purchased.id,
        }
      );

      setMessage(
        `${winner.name} bought ${character.name} for ₹${winningPrice.toLocaleString()}. Choose its role.`
      );

      return;
    }

    /* =======================================================
       UNSOLD
    ======================================================= */

    setAuctionHistory(
      (
        history
      ) => [
        ...history,
        {
          character,

          winnerId:
            null,

          price:
            0,

          status:
            "PASSED",
        },
      ]
    );

    const remainingPool =
      auctionPool.filter(
        (
          item
        ) =>
          getAuctionId(
            item
          ) !==
          getAuctionId(
            character
          )
      );

    setAuctionPool(
      remainingPool
    );

    setCurrentBid(
      0
    );

    setHighestBidder(
      null
    );

    setPassedPlayers(
      []
    );

    const everyoneDone =
      updatedPlayers.every(
        (
          player
        ) =>
          (
            updatedTeams[
              player.id
            ] || []
          ).length >=
          maxSlotsPerPlayer
      );

    if (
      everyoneDone ||
      !remainingPool.length
    ) {
      setCurrentCharacter(
        null
      );

      setAuctionFinished(
        true
      );

      setMessage(
        `${character.name} was unsold. Auction completed.`
      );

      return;
    }

    setCurrentCharacter(
      remainingPool[0]
    );

    setTurnIndex(
      0
    );

    setMessage(
      `${character.name} was unsold. Next character is on the block.`
    );
  }

  /* =========================================================
     PLAYER ROLE ASSIGNMENT
  ========================================================= */

  function assignPurchasedCharacterRole(
    playerId,
    characterId,
    role
  ) {
    if (
      !ROLE_OPTIONS.includes(
        role
      )
    ) {
      setMessage(
        "Invalid role selected."
      );

      return;
    }

    const player =
      players.find(
        (
          item
        ) =>
          item.id ===
          playerId
      );

    if (
      !player
    ) {
      setMessage(
        "Player not found."
      );

      return;
    }

    const team =
      teams[playerId] ||
      [];

    const character =
      team.find(
        (
          item
        ) =>
          item.id ===
          characterId
      );

    if (
      !character
    ) {
      setMessage(
        "Purchased character not found."
      );

      return;
    }

    const roleStatus =
      getPlayerRoleStatus(
        playerId,
        role,
        team
      );

    if (
      roleStatus.full
    ) {
      setMessage(
        `${player.name} has no remaining ${role} slot.`
      );

      return;
    }

    /*
      Store the player's decision permanently.
    */

    const updatedCharacter =
      {
        ...character,

        assignedRole:
          role,

        roleAssignedByPlayer:
          true,

        roleDecisionTimestamp:
          Date.now(),
      };

    const updatedTeam =
      team.map(
        (
          item
        ) =>
          item.id ===
          characterId
            ? updatedCharacter
            : item
      );

    const updatedTeams = {
      ...teams,

      [playerId]:
        updatedTeam,
    };

    setTeams(
      updatedTeams
    );

    setPendingRoleAssignment(
      null
    );

    /*
      Analyze this exact decision.
    */

    const analysis =
      runPurchaseAnalysis(
        {
          player,

          character:
            updatedCharacter,

          purchasePrice:
            Number(
              updatedCharacter.boughtFor ||
                0
            ),

          assignedRole:
            role,

          updatedTeam,
        }
      );

    if (
      analysis?.marketVerdict
    ) {
      setMessage(
        `${character.name} → ${role}. ${
          analysis.marketVerdict
        }${
          analysis.grade
            ? ` • Grade ${analysis.grade}`
            : ""
        }`
      );
    } else {
      setMessage(
        `${character.name} was assigned to ${role}.`
      );
    }

    const everyoneDone =
      players.every(
        (
          item
        ) =>
          (
            updatedTeams[
              item.id
            ] || []
          ).length >=
          maxSlotsPerPlayer
      );

    /*
      If everyone has a full team, finish.
      Otherwise continue the auction.
    */

    if (
      everyoneDone ||
      auctionPool.length ===
        0
    ) {
      setCurrentCharacter(
        null
      );

      setCurrentBid(
        0
      );

      setHighestBidder(
        null
      );

      setPassedPlayers(
        []
      );

      setAuctionFinished(
        true
      );

      return;
    }

    const nextCharacter =
      auctionPool[0] ||
      null;

    setCurrentCharacter(
      nextCharacter
    );

    setCurrentBid(
      0
    );

    setHighestBidder(
      null
    );

    setPassedPlayers(
      []
    );

    setTurnIndex(
      0
    );
  }

  /* =========================================================
     RESET
  ========================================================= */

  function resetAuction() {
    setSetupComplete(
      false
    );

    setShowAuctionBattle(
      false
    );

    setPendingRoleAssignment(
      null
    );

    setPurchaseAnalyses(
      []
    );

    setCurrentAuctionMoment(
      null
    );

    setAuctionPool(
      []
    );

    setCurrentCharacter(
      null
    );

    setCurrentBid(
      0
    );

    setHighestBidder(
      null
    );

    setPassedPlayers(
      []
    );

    setAuctionHistory(
      []
    );

    setAuctionFinished(
      false
    );

    setMessage(
      "Configure your auction and begin."
    );
  }

  /* =========================================================
     LOCAL SUMMARY
  ========================================================= */

  function calculateLocalWinner() {
    return players
      .map(
        (
          player
        ) => {
          const team =
            teams[player.id] ||
            [];

          const power =
            team.reduce(
              (
                sum,
                character
              ) =>
                sum +
                getPower(
                  character
                ),
              0
            );

          const hax =
            team.reduce(
              (
                sum,
                character
              ) =>
                sum +
                getHax(
                  character
                ),
              0
            );

          const spending =
            team.reduce(
              (
                sum,
                character
              ) =>
                sum +
                Number(
                  character.boughtFor ||
                    0
                ),
              0
            );

          return {
            player,
            team,
            power,
            hax,
            spending,

            remaining:
              Number(
                player.budget
              ) || 0,

            score:
              power +
              hax * 1.15 +
              team.length *
                100,
          };
        }
      )
      .sort(
        (
          a,
          b
        ) =>
          b.score -
          a.score
      );
  }

  /* =========================================================
     AUCTION BATTLE
  ========================================================= */

  if (
    auctionFinished &&
    showAuctionBattle
  ) {
    return (
      <AuctionBattle
        players={players.map(
          (
            player
          ) => ({
            ...player,

            team:
              teams[player.id] ||
              [],
          })
        )}

        onBack={() =>
          setShowAuctionBattle(
            false
          )
        }
      />
    );
  }

  /* =========================================================
     ROLE MODAL DATA
  ========================================================= */

  const roleAssignmentPlayer =
    pendingRoleAssignment
      ? players.find(
          (
            player
          ) =>
            player.id ===
            pendingRoleAssignment.playerId
        )
      : null;

  const roleAssignmentTeam =
    roleAssignmentPlayer
      ? teams[
          roleAssignmentPlayer.id
        ] || []
      : [];

  const roleAssignmentCharacter =
    pendingRoleAssignment
      ? roleAssignmentTeam.find(
          (
            character
          ) =>
            character.id ===
            pendingRoleAssignment.characterId
        )
      : null;

  /* =========================================================
     SETUP SCREEN
  ========================================================= */

  if (
    !setupComplete
  ) {
    const densityTotal =
      getRarityDensityTotal();

    const roleReady =
      players.every(
        (
          player
        ) =>
          isRoleDistributionComplete(
            player.id
          )
      );

    const budgetReady =
      players.every(
        (
          player
        ) =>
          Number(
            player.budget
          ) >=
          startingBudget
      );

    return (
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-bold mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Game Hub
        </button>

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-800 bg-red-950/60 text-red-300 text-xs font-black uppercase tracking-widest">
              <Gavel className="w-4 h-4" />
              Auction Mode
            </div>

            <h1 className="text-4xl md:text-6xl font-black uppercase mt-5">
              Character{" "}
              <span className="text-red-500">
                Auction
              </span>
            </h1>

            <p className="text-neutral-400 mt-3">
              Build your roster. Manage your money.
              Outbid your opponents.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-5">

            {/* BUDGET */}

            <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-5">

                <Wallet className="text-red-500" />

                <div>
                  <h2 className="font-black text-lg">
                    Starting Budget
                  </h2>

                  <p className="text-xs text-neutral-500">
                    Credits per player
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-3 gap-2">

                {MONEY_OPTIONS.map(
                  (
                    money
                  ) => (
                    <button
                      type="button"
                      key={money}
                      onClick={() =>
                        changeStartingBudget(
                          money
                        )
                      }
                      className={`rounded-xl border px-3 py-3 text-sm font-black ${
                        startingBudget ===
                        money
                          ? "border-red-500 bg-red-600 text-black"
                          : "border-neutral-800 bg-neutral-950 text-neutral-400"
                      }`}
                    >
                      ₹
                      {money.toLocaleString()}
                    </button>
                  )
                )}

              </div>

            </section>

            {/* SLOTS */}

            <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-5">

                <Users className="text-red-500" />

                <div>
                  <h2 className="font-black text-lg">
                    Team Slots
                  </h2>

                  <p className="text-xs text-neutral-500">
                    Characters per player
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-5 gap-2">

                {SLOT_OPTIONS.map(
                  (
                    slots
                  ) => (
                    <button
                      type="button"
                      key={slots}
                      onClick={() =>
                        setTotalSlots(
                          slots
                        )
                      }
                      className={`rounded-xl border py-3 font-black ${
                        totalSlots ===
                        slots
                          ? "border-red-500 bg-red-600 text-black"
                          : "border-neutral-800 bg-neutral-950 text-neutral-400"
                      }`}
                    >
                      {slots}
                    </button>
                  )
                )}

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="bg-neutral-950 rounded-xl p-3">

                  <div className="text-[10px] uppercase text-neutral-500">
                    Max same role
                  </div>

                  <div className="text-xl font-black mt-1">
                    {maxSameRole}
                  </div>

                </div>

                <div className="bg-neutral-950 rounded-xl p-3">

                  <div className="text-[10px] uppercase text-neutral-500">
                    Players
                  </div>

                  <div className="text-xl font-black mt-1">
                    {players.length}
                  </div>

                </div>

              </div>

            </section>

            {/* POOL */}

            <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-5">

                <Sparkles className="text-red-500" />

                <div>
                  <h2 className="font-black text-lg">
                    Character Pool Size
                  </h2>

                  <p className="text-xs text-neutral-500">
                    12–400 unique entries
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">

                {POOL_SIZE_OPTIONS.map(
                  (
                    size
                  ) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() =>
                        setPoolSize(
                          size
                        )
                      }
                      className={`rounded-xl border py-3 font-black text-sm ${
                        poolSize ===
                        size
                          ? "border-red-500 bg-red-600 text-black"
                          : "border-neutral-800 bg-neutral-950 text-neutral-400"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}

              </div>

              <div className="text-[10px] text-neutral-600 mt-3">
                Minimum required:{" "}
                {players.length *
                  totalSlots}
              </div>

            </section>

            {/* PLAYERS */}

            <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6">

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">

                <div className="flex items-center gap-3">
                  <Users className="text-red-500" />

                  <h2 className="font-black text-lg">
                    Players
                  </h2>
                </div>

                <div className="flex items-center gap-2">

                  <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-black">
                    Player Count
                  </span>

                  <select
                    value={
                      players.length
                    }
                    onChange={(
                      event
                    ) =>
                      updatePlayerCount(
                        event.target.value
                      )
                    }
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm font-black outline-none focus:border-red-600"
                  >
                    {PLAYER_COUNT_OPTIONS.map(
                      (
                        count
                      ) => (
                        <option
                          key={
                            count
                          }
                          value={
                            count
                          }
                        >
                          {count} Players
                        </option>
                      )
                    )}
                  </select>

                </div>

              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">

                {players.map(
                  (
                    player
                  ) => (
                    <div
                      key={
                        player.id
                      }
                      className="grid grid-cols-[1fr_120px] gap-2"
                    >

                      <input
                        value={
                          player.name
                        }
                        onChange={(
                          event
                        ) =>
                          updatePlayerName(
                            player.id,
                            event.target
                              .value
                          )
                        }
                        className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600"
                      />

                      <input
                        type="number"
                        value={
                          player.budget
                        }
                        min={
                          startingBudget
                        }
                        onChange={(
                          event
                        ) =>
                          updatePlayerBudget(
                            player.id,
                            event.target
                              .value
                          )
                        }
                        className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-3 text-sm outline-none focus:border-red-600"
                      />

                    </div>
                  )
                )}

              </div>

            </section>

          </div>

          {/* RARITY */}

          <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6 mt-5">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">

              <div>

                <div className="flex items-center gap-3">
                  <Sparkles className="text-red-500" />

                  <h2 className="font-black text-lg">
                    Rarity Density
                  </h2>
                </div>

                <p className="text-xs text-neutral-500 mt-1">
                  Selected rarity percentages are normalized to 100%.
                </p>

              </div>

              <div
                className={`px-4 py-2 rounded-xl border text-sm font-black ${
                  densityTotal ===
                  100
                    ? "border-green-700 bg-green-950/30 text-green-400"
                    : "border-red-700 bg-red-950/30 text-red-400"
                }`}
              >
                {densityTotal}%
              </div>

            </div>

            <div className="flex flex-wrap gap-2 mb-5">

              {RARITY_OPTIONS.map(
                (
                  rarity
                ) => (
                  <button
                    type="button"
                    key={
                      rarity
                    }
                    onClick={() =>
                      toggleRarity(
                        rarity
                      )
                    }
                    className={`px-4 py-2 rounded-xl border text-xs font-black ${
                      selectedRarities.includes(
                        rarity
                      )
                        ? rarityClass(
                            rarity
                          )
                        : "border-neutral-800 text-neutral-600 bg-neutral-950"
                    }`}
                  >
                    {rarity}
                  </button>
                )
              )}

            </div>

            <div className="grid md:grid-cols-2 gap-3">

              {RARITY_OPTIONS.map(
                (
                  rarity
                ) => (
                  <div
                    key={
                      rarity
                    }
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-sm font-black">
                        {rarity}
                      </span>

                      <span className="text-red-400 font-black">
                        {
                          rarityDensity[
                            rarity
                          ]
                        }%
                      </span>

                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={
                        rarityDensity[
                          rarity
                        ]
                      }
                      onChange={(
                        event
                      ) =>
                        updateRarityDensity(
                          rarity,
                          event.target.value
                        )
                      }
                      disabled={
                        !selectedRarities.includes(
                          rarity
                        )
                      }
                      className="w-full mt-3 accent-red-600"
                    />

                  </div>
                )
              )}

            </div>

          </section>

          {/* ROLE DISTRIBUTION */}

          <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6 mt-5">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

              <div>

                <div className="flex items-center gap-3">

                  <Shield className="text-red-500" />

                  <h2 className="font-black text-lg">
                    Role Distribution
                  </h2>

                </div>

                <p className="text-xs text-neutral-500 mt-1">
                  Every player must configure exactly{" "}
                  {totalSlots} role slots.
                  No single role may exceed{" "}
                  {maxSameRole}.
                </p>

              </div>

              <div className="text-xs text-neutral-500">
                Max same role:{" "}
                <span className="text-red-400 font-black">
                  {maxSameRole}
                </span>
              </div>

            </div>

            <div className="space-y-6">

              {players.map(
                (
                  player
                ) => {
                  const distribution =
                    roleDistributions[
                      player.id
                    ] ||
                    DEFAULT_ROLE_DISTRIBUTION;

                  const roleTotal =
                    getRoleTotal(
                      player.id
                    );

                  const remaining =
                    getRemainingRoleSlots(
                      player.id
                    );

                  return (
                    <div
                      key={
                        player.id
                      }
                      className="border border-neutral-800 rounded-2xl p-4"
                    >

                      <div className="flex items-center justify-between mb-4">

                        <div>

                          <h3 className="font-black">
                            {player.name}
                          </h3>

                          <div className="text-[10px] text-neutral-500 mt-1">
                            {roleTotal} /{" "}
                            {totalSlots} roles assigned
                          </div>

                        </div>

                        <div
                          className={`text-xs font-black px-3 py-2 rounded-lg ${
                            roleTotal ===
                            totalSlots
                              ? "bg-green-950/40 text-green-400 border border-green-800"
                              : "bg-yellow-950/40 text-yellow-400 border border-yellow-800"
                          }`}
                        >
                          {roleTotal ===
                          totalSlots
                            ? "COMPLETE"
                            : `${remaining} remaining`}
                        </div>

                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">

                        {ROLE_OPTIONS.map(
                          (
                            role
                          ) => (
                            <div
                              key={
                                role
                              }
                              className="bg-neutral-950 border border-neutral-800 rounded-xl p-3"
                            >

                              <div className="flex items-center justify-between mb-2">

                                <span className="text-xs font-bold text-neutral-300">
                                  {role}
                                </span>

                                <span className="text-[10px] text-neutral-600">
                                  max{" "}
                                  {maxSameRole}
                                </span>

                              </div>

                              <div className="flex items-center gap-2">

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateRoleCount(
                                      player.id,
                                      role,
                                      Number(
                                        distribution[
                                          role
                                        ] ||
                                          0
                                      ) -
                                        1
                                    )
                                  }
                                  className="w-8 h-8 rounded-lg border border-neutral-800 hover:border-red-700 flex items-center justify-center"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>

                                <input
                                  type="number"
                                  min="0"
                                  max={
                                    maxSameRole
                                  }
                                  value={
                                    distribution[
                                      role
                                    ] ||
                                    0
                                  }
                                  onChange={(
                                    event
                                  ) =>
                                    updateRoleCount(
                                      player.id,
                                      role,
                                      event.target
                                        .value
                                    )
                                  }
                                  className="w-full text-center bg-black border border-neutral-800 rounded-lg py-1.5 text-sm font-black outline-none focus:border-red-600"
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateRoleCount(
                                      player.id,
                                      role,
                                      Number(
                                        distribution[
                                          role
                                        ] ||
                                          0
                                      ) +
                                        1
                                    )
                                  }
                                  className="w-8 h-8 rounded-lg border border-neutral-800 hover:border-red-700 flex items-center justify-center"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>

                              </div>

                            </div>
                          )
                        )}

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          resetPlayerRoles(
                            player.id
                          )
                        }
                        className="mt-4 text-xs text-neutral-500 hover:text-red-400 flex items-center gap-2"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset {player.name}'s roles
                      </button>

                    </div>
                  );
                }
              )}

            </div>

          </section>

          {/* VERSES */}

          <section className="bg-black/80 border border-red-900/50 rounded-3xl p-6 mt-5">

            <div className="flex items-center justify-between gap-3 mb-5">

              <div>

                <h2 className="font-black text-lg">
                  Character Pool
                </h2>

                <p className="text-xs text-neutral-500 mt-1">
                  Leave empty to use every available verse.
                </p>

              </div>

              <span className="text-xs text-red-400 font-black">
                {selectedVerses.length ===
                0
                  ? "ALL"
                  : `${selectedVerses.length} selected`}
              </span>

            </div>

            <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto">

              {Object.keys(
                ANIME_VERSES ||
                  {}
              ).map(
                (
                  verseName
                ) => {
                  const selected =
                    selectedVerses.includes(
                      verseName
                    );

                  return (
                    <button
                      type="button"
                      key={
                        verseName
                      }
                      onClick={() =>
                        toggleVerse(
                          verseName
                        )
                      }
                      className={`px-3 py-2 rounded-xl border text-xs font-bold ${
                        selected
                          ? "border-red-500 bg-red-600 text-black"
                          : "border-neutral-800 bg-neutral-950 text-neutral-500"
                      }`}
                    >
                      {selected
                        ? "✓ "
                        : "+ "}
                      {verseName}
                    </button>
                  );
                }
              )}

            </div>

          </section>

          {/* START */}

          <button
            type="button"
            onClick={
              startAuction
            }
            disabled={
              !roleReady ||
              densityTotal !==
                100 ||
              !budgetReady
            }
            className="w-full mt-6 py-5 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest flex items-center justify-center gap-2 transition"
          >
            <Gavel className="w-5 h-5" />

            Start Auction
          </button>

          <div className="text-center text-xs text-neutral-600 mt-3">
            Database:{" "}
            {database.length}{" "}
            entries • Pool:{" "}
            {poolSize} • Required:{" "}
            {players.length *
              totalSlots} • Team:{" "}
            {totalSlots}/player
          </div>

          <div className="text-center text-xs mt-2">

            <span
              className={
                densityTotal ===
                100
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Rarity Density:{" "}
              {densityTotal}%
            </span>

            <span className="text-neutral-700 mx-2">
              •
            </span>

            <span
              className={
                roleReady
                  ? "text-green-500"
                  : "text-yellow-500"
              }
            >
              Roles:{" "}
              {roleReady
                ? "READY"
                : "INCOMPLETE"}
            </span>

          </div>

          <div className="text-center text-xs mt-2">

            <span
              className={
                budgetReady
                  ? "text-green-500"
                  : "text-yellow-500"
              }
            >
              Budgets:{" "}
              {budgetReady
                ? "READY"
                : "CHECK"}
            </span>

          </div>

          {message && (
            <div className="mt-4 bg-black/70 border border-neutral-800 rounded-2xl px-5 py-3 text-center text-sm text-neutral-300">
              {message}
            </div>
          )}

        </div>
      </main>
    );
  }

  /* =========================================================
     FINAL RESULTS
  ========================================================= */

  if (
    auctionFinished
  ) {
    const results =
      calculateLocalWinner();

    return (
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">

        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-700 bg-yellow-950/40 text-yellow-300 text-xs font-black uppercase tracking-widest">
            <Trophy className="w-4 h-4" />
            Auction Complete
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase mt-5">
            Final{" "}
            <span className="text-red-500">
              Rosters
            </span>
          </h1>

          <p className="text-neutral-400 mt-3">
            Every purchased character has been assigned by its owner.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {results.map(
            (
              result,
              index
            ) => (
              <section
                key={
                  result.player.id
                }
                className={`rounded-3xl border p-5 ${
                  index === 0
                    ? "border-yellow-500 bg-yellow-950/20"
                    : "border-neutral-800 bg-black/70"
                }`}
              >

                <div className="flex items-center justify-between">

                  <h2 className="font-black text-lg">
                    {
                      result.player
                        .name
                    }
                  </h2>

                  {index ===
                    0 && (
                    <Crown className="text-yellow-400" />
                  )}

                </div>

                <div className="grid grid-cols-2 gap-2 mt-5">

                  <div className="bg-neutral-950 rounded-xl p-3">
                    <div className="text-[10px] text-neutral-500 uppercase">
                      Power
                    </div>
                    <div className="font-black mt-1">
                      {Math.round(
                        result.power
                      )}
                    </div>
                  </div>

                  <div className="bg-neutral-950 rounded-xl p-3">
                    <div className="text-[10px] text-neutral-500 uppercase">
                      Hax
                    </div>
                    <div className="font-black mt-1">
                      {Math.round(
                        result.hax
                      )}
                    </div>
                  </div>

                </div>

                <div className="mt-4 space-y-2 max-h-80 overflow-y-auto pr-1">

                  {result.team.map(
                    (
                      character,
                      indexInTeam
                    ) => (
                      <div
                        key={`${getAuctionId(
                          character
                        )}-${indexInTeam}`}
                        className="flex items-center justify-between gap-3 bg-neutral-950 rounded-xl px-3 py-2"
                      >

                        <div className="min-w-0">

                          <div className="text-xs font-bold truncate">
                            {
                              character.name
                            }
                          </div>

                          <div className="text-[9px] text-neutral-600">
                            {
                              character.verse
                            }{" "}
                            • Natural:{" "}
                            {
                              character.naturalRole ||
                              getNaturalRole(
                                character
                              )
                            }
                          </div>

                          <div className="text-[9px] text-red-400 font-black mt-0.5">
                            Assigned:{" "}
                            {
                              character.assignedRole ||
                              "Unassigned"
                            }
                          </div>

                        </div>

                        <span className="text-[10px] text-red-400 font-black whitespace-nowrap">
                          ₹
                          {Number(
                            character.boughtFor ||
                              0
                          ).toLocaleString()}
                        </span>

                      </div>
                    )
                  )}

                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800 flex justify-between text-xs">

                  <span className="text-neutral-500">
                    Remaining
                  </span>

                  <span className="font-black">
                    ₹
                    {Number(
                      result.remaining
                    ).toLocaleString()}
                  </span>

                </div>

              </section>
            )
          )}

        </div>

        {/* STRATEGIC LEDGER */}

        {purchaseAnalyses.length >
          0 && (
          <section className="mt-8 bg-black/70 border border-neutral-800 rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <Sparkles className="w-5 h-5 text-red-500" />

              <div>
                <h2 className="font-black text-lg">
                  Strategic Auction Ledger
                </h2>

                <p className="text-[10px] text-neutral-600 mt-1">
                  Every purchase and role decision recorded for final judgment.
                </p>
              </div>

            </div>

            <div className="space-y-3">

              {purchaseAnalyses
                .slice()
                .reverse()
                .map(
                  (
                    analysis,
                    index
                  ) => {
                    const verdict =
                      analysis?.marketVerdict ||
                      "FAIR";

                    return (
                      <div
                        key={`${analysis?.character || "purchase"}-${index}`}
                        className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4"
                      >

                        <div className="flex flex-wrap items-center justify-between gap-3">

                          <div>
                            <div className="text-sm font-black">
                              {
                                analysis?.character ||
                                "Unknown Character"
                              }
                            </div>

                            <div className="text-[9px] text-neutral-600 mt-1">
                              {
                                analysis?.playerName ||
                                "Unknown Player"
                              }

                              {" • "}

                              {
                                analysis?.naturalRole ||
                                "Unknown"
                              }

                              {" → "}

                              {
                                analysis?.assignedRole ||
                                "Unknown"
                              }
                            </div>
                          </div>

                          <div className="flex items-center gap-2">

                            <span
                              className={`px-2 py-1 rounded-lg text-[9px] font-black ${
                                verdict ===
                                "STEAL"
                                  ? "bg-green-950 text-green-400"
                                  : verdict ===
                                    "DISASTER"
                                  ? "bg-red-950 text-red-400"
                                  : verdict ===
                                    "OVERPAY"
                                  ? "bg-orange-950 text-orange-400"
                                  : "bg-neutral-900 text-neutral-400"
                              }`}
                            >
                              {
                                verdict
                              }
                            </span>

                            {analysis?.grade && (
                              <span className="text-xs font-black text-yellow-400">
                                {
                                  analysis.grade
                                }
                              </span>
                            )}

                          </div>

                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-3">

                          <div className="bg-black/50 rounded-xl p-3">
                            <div className="text-[8px] text-neutral-600 uppercase">
                              Market
                            </div>

                            <div className="text-xs font-black mt-1">
                              ₹
                              {Number(
                                analysis?.marketValue ||
                                  0
                              ).toLocaleString()}
                            </div>
                          </div>

                          <div className="bg-black/50 rounded-xl p-3">
                            <div className="text-[8px] text-neutral-600 uppercase">
                              Role Fit
                            </div>

                            <div className="text-xs font-black mt-1">
                              {Math.round(
                                Number(
                                  analysis?.roleCompatibility ||
                                    0
                                )
                              )}
                              %
                            </div>
                          </div>

                          <div className="bg-black/50 rounded-xl p-3">
                            <div className="text-[8px] text-neutral-600 uppercase">
                              Strategy
                            </div>

                            <div className="text-xs font-black mt-1 text-red-400">
                              {Math.round(
                                Number(
                                  analysis?.strategicScore ||
                                    0
                                )
                              )}
                            </div>
                          </div>

                        </div>

                        {analysis?.explanation && (
                          <p className="text-xs text-neutral-400 mt-3 leading-6">
                            {
                              analysis.explanation
                            }
                          </p>
                        )}

                      </div>
                    );
                  }
                )}

            </div>

          </section>
        )}
        <AuctionCompetitiveLayer
  players={players}
  teams={teams}
  purchaseAnalyses={purchaseAnalyses}
  auctionHistory={auctionHistory}
/>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">

          <button
            type="button"
            onClick={
              resetAuction
            }
            className="flex-1 py-4 rounded-2xl border border-neutral-700 bg-black/70 hover:border-red-600 font-black flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            New Auction
          </button>

          <button
            type="button"
            onClick={() =>
              setShowAuctionBattle(
                true
              )
            }
            className="flex-1 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-black font-black flex items-center justify-center gap-2"
          >
            <Swords className="w-4 h-4" />
            Enter Auction Battle
          </button>

          {onComplete && (
            <button
              type="button"
              onClick={() =>
                onComplete({
                  players,
                  teams,
                  history:
                    auctionHistory,
                  purchaseAnalyses,
                })
              }
              className="flex-1 py-4 rounded-2xl border border-neutral-700 bg-black/70 hover:border-red-600 font-black flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Continue
            </button>
          )}

        </div>

      </main>
    );
  }

  /* =========================================================
     LIVE AUCTION
  ========================================================= */

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-8">

      {/* TOP BAR */}

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">

        <div>

          <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest">

            <Gavel className="w-4 h-4" />

            Live Auction

          </div>

          <h1 className="text-3xl md:text-4xl font-black uppercase mt-2">
            Anime{" "}
            <span className="text-red-500">
              Market
            </span>
          </h1>

        </div>

        <button
          type="button"
          onClick={
            resetAuction
          }
          className="px-4 py-2 rounded-xl border border-neutral-800 bg-black/70 text-xs font-bold text-neutral-400 hover:text-white"
        >
          Exit Auction
        </button>

      </div>

      {/* PLAYER MONEY */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">

        {players.map(
          (
            player
          ) => {
            const team =
              teams[player.id] ||
              [];

            const active =
              currentPlayer?.id ===
              player.id;

            return (
              <div
                key={
                  player.id
                }
                className={`rounded-2xl border p-4 transition ${
                  active
                    ? "border-red-500 bg-red-950/30"
                    : "border-neutral-800 bg-black/70"
                }`}
              >

                <div className="flex justify-between items-center">

                  <span className="font-black text-sm">
                    {
                      player.name
                    }
                  </span>

                  {active && (
                    <span className="text-[9px] text-red-400 font-black uppercase">
                      Your Turn
                    </span>
                  )}

                </div>

                <div className="flex items-center gap-2 mt-3 text-green-400 font-black">

                  <Coins className="w-4 h-4" />

                  ₹
                  {Number(
                    player.budget
                  ).toLocaleString()}

                </div>

                <div className="text-[10px] text-neutral-500 mt-1">
                  {
                    team.length
                  } /{" "}
                  {
                    maxSlotsPerPlayer
                  } slots
                </div>

              </div>
            );
          }
        )}

      </div>

      <div className="bg-black/70 border border-neutral-800 rounded-2xl px-5 py-3 text-center text-sm text-neutral-300 mb-6">
        {message}
      </div>

      {/* AUCTION MOMENT */}

      {currentAuctionMoment && (
        <div
          className={`mb-5 rounded-2xl border p-4 shadow-2xl ${
            currentAuctionMoment.tone ===
            "green"
              ? "border-green-700 bg-green-950/30"
              : currentAuctionMoment.tone ===
                "red"
              ? "border-red-700 bg-red-950/30"
              : currentAuctionMoment.tone ===
                "orange"
              ? "border-orange-700 bg-orange-950/30"
              : currentAuctionMoment.tone ===
                "yellow"
              ? "border-yellow-700 bg-yellow-950/30"
              : "border-purple-700 bg-purple-950/30"
          }`}
        >

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              {
                currentAuctionMoment.icon ||
                "⚡"
              }
            </div>

            <div className="min-w-0">

              <div className="text-[9px] uppercase tracking-[0.25em] font-black text-neutral-500">
                Auction Moment
              </div>

              <div className="text-xl font-black mt-1">
                {
                  currentAuctionMoment.title ||
                  "Strategic Moment"
                }
              </div>

              <p className="text-xs text-neutral-400 mt-1 leading-5">
                {
                  currentAuctionMoment.message ||
                  ""
                }
              </p>

            </div>

          </div>

        </div>
      )}

      {/* AUCTION AREA */}

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">

        {/* CHARACTER CARD */}

        <section className="relative min-h-[650px] rounded-[2rem] overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl">

          <div
            className={`absolute inset-0 opacity-20 pointer-events-none ${
              String(
                currentCharacter?.rarity ||
                  ""
              )
                .toLowerCase()
                .includes(
                  "mythic"
                )
                ? "bg-red-600"
                : String(
                    currentCharacter?.rarity ||
                      ""
                  )
                    .toLowerCase()
                    .includes(
                      "legendary"
                    )
                ? "bg-orange-500"
                : String(
                    currentCharacter?.rarity ||
                      ""
                  )
                    .toLowerCase()
                    .includes(
                      "epic"
                    )
                ? "bg-purple-600"
                : String(
                    currentCharacter?.rarity ||
                      ""
                  )
                    .toLowerCase()
                    .includes(
                      "rare"
                    )
                ? "bg-blue-600"
                : "bg-neutral-600"
            }`}
          />

          <div className="absolute top-5 left-5 z-20">

            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] ${rarityClass(
                currentCharacter?.rarity
              )}`}
            >
              <Sparkles className="w-3.5 h-3.5" />

              {
                currentCharacter?.rarity ||
                "COMMON"
              }
            </span>

          </div>

          <div className="absolute top-5 right-5 z-20">

            <span className="px-3 py-2 rounded-full bg-black/70 border border-neutral-700 text-[9px] font-black uppercase tracking-widest text-neutral-400">
              LIVE AUCTION
            </span>

          </div>

          <div className="relative z-10 flex justify-center pt-16 px-6">

            {getCharacterImage(
              currentCharacter
            ) ? (
              <img
                src={getCharacterImage(
                  currentCharacter
                )}
                alt={
                  currentCharacter?.name ||
                  "Character"
                }
                className="relative w-[280px] h-[330px] md:w-[340px] md:h-[390px] object-contain drop-shadow-2xl"
                onError={(
                  event
                ) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            ) : (
              <div className="w-[280px] h-[330px] md:w-[340px] md:h-[390px] rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center">

                <Swords className="w-24 h-24 text-neutral-800" />

                <span className="text-xs text-neutral-700 font-black uppercase tracking-widest mt-4">
                  Artwork unavailable
                </span>

              </div>
            )}

          </div>

          <div className="relative z-10 px-6 pb-6">

            <div className="text-center">

              <div className="text-[10px] text-red-400 font-black uppercase tracking-[0.25em]">
                {
                  currentCharacter?.verse ||
                  "Unknown Anime"
                }
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-2 leading-none">
                {
                  currentCharacter?.name ||
                  "Waiting..."
                }
              </h2>

            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">

              <div className="bg-black/70 border border-neutral-800 rounded-xl p-3 text-center">

                <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
                  Natural Role
                </div>

                <div className="text-sm font-black text-neutral-200 mt-1 truncate">

                  {currentCharacter
                    ? getNaturalRole(
                        currentCharacter
                      )
                    : "—"}

                </div>

              </div>

              <div className="bg-black/70 border border-neutral-800 rounded-xl p-3 text-center">

                <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
                  PNR
                </div>

                <div className="text-sm font-black text-yellow-400 mt-1">
                  {getPower(
                    currentCharacter
                  ).toLocaleString()}
                </div>

              </div>

              <div className="bg-black/70 border border-neutral-800 rounded-xl p-3 text-center">

                <div className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">
                  Hax
                </div>

                <div className="text-sm font-black text-purple-400 mt-1">
                  {getHax(
                    currentCharacter
                  ).toLocaleString()}
                </div>

              </div>

            </div>

            <div className="h-px bg-neutral-800 my-6" />

            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-red-900/50 bg-red-950/20 p-4">

                <div className="text-[9px] text-red-400 uppercase tracking-widest font-black">
                  Current Bid
                </div>

                <div className="text-3xl md:text-4xl font-black mt-1">
                  ₹
                  {currentBid.toLocaleString()}
                </div>

              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black/60 p-4">

                <div className="text-[9px] text-neutral-500 uppercase tracking-widest font-black">
                  Highest Bidder
                </div>

                <div className="text-lg font-black mt-2 truncate">

                  {highestBidder
                    ? players.find(
                        (
                          player
                        ) =>
                          player.id ===
                          highestBidder
                      )?.name ||
                      "Unknown"
                    : "No bids yet"}

                </div>

              </div>

            </div>

            <div className="flex items-center justify-between mt-4 text-xs">

              <span className="text-neutral-600">
                Minimum next bid
              </span>

              <span className="font-black text-red-400">
                ₹
                {minimumBid.toLocaleString()}
              </span>

            </div>

          </div>

        </section>

        {/* CONTROLS */}

        <aside className="bg-black/80 border border-neutral-800 rounded-[2rem] p-5">

          <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest">

            <Gavel className="w-4 h-4" />

            Current Bid

          </div>

          <div className="text-5xl font-black mt-3">
            ₹
            {currentBid.toLocaleString()}
          </div>

          <div className="text-xs text-neutral-500 mt-2">
            Minimum next bid: ₹
            {minimumBid.toLocaleString()}
          </div>

          {currentCharacter && (
            <div className="mt-5 rounded-2xl border border-red-900/50 bg-red-950/20 p-4">

              <div className="text-[9px] text-red-400 uppercase tracking-widest font-black">
                Natural Role
              </div>

              <div className="text-lg font-black mt-2">
                {getNaturalRole(
                  currentCharacter
                )}
              </div>

              <div className="text-[9px] text-neutral-600 mt-1">
                Natural role is information only.
                The buyer chooses the actual role.
              </div>

            </div>
          )}

          {highestBidder && (
            <div className="mt-4 p-3 rounded-xl bg-red-950/30 border border-red-900/50 text-sm">

              Highest bidder:{" "}

              <span className="font-black text-red-400">
                {
                  players.find(
                    (
                      player
                    ) =>
                      player.id ===
                      highestBidder
                  )?.name
                }
              </span>

            </div>
          )}

          <div className="grid grid-cols-2 gap-2 mt-6">

            <button
              type="button"
              onClick={() =>
                quickBid(
                  1.1
                )
              }
              disabled={
                !canPlayerBidOnCurrentCharacter(
                  currentPlayer?.id
                )
              }
              className="py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-black font-black text-sm"
            >
              +10%
            </button>

            <button
              type="button"
              onClick={() =>
                quickBid(
                  1.25
                )
              }
              disabled={
                !canPlayerBidOnCurrentCharacter(
                  currentPlayer?.id
                )
              }
              className="py-3 rounded-xl border border-red-700 text-red-400 hover:bg-red-950/40 disabled:opacity-30 disabled:cursor-not-allowed font-black text-sm"
            >
              +25%
            </button>

          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">

            <button
              type="button"
              onClick={() =>
                placeBid(
                  minimumBid
                )
              }
              disabled={
                !canPlayerBidOnCurrentCharacter(
                  currentPlayer?.id
                )
              }
              className="py-4 rounded-xl bg-neutral-100 text-black hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed font-black text-sm flex items-center justify-center gap-2"
            >
              <Gavel className="w-4 h-4" />
              Bid
            </button>

            <button
              type="button"
              onClick={
                passAuction
              }
              disabled={
                !currentCharacter ||
                !currentPlayer
              }
              className="py-4 rounded-xl border border-neutral-700 text-neutral-300 hover:bg-neutral-900 disabled:opacity-30 font-black text-sm flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" />
              Pass
            </button>

          </div>

          <button
            type="button"
            onClick={
              sellCurrentCharacter
            }
            disabled={
              !highestBidder
            }
            className="w-full mt-3 py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 disabled:opacity-30 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Sold
          </button>

          <div className="mt-6 pt-5 border-t border-neutral-800">

            <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">
              Team Structure
            </div>

            <div className="space-y-2 mt-3 max-h-64 overflow-y-auto pr-1">

              {players.map(
                (
                  player
                ) => (
                  <div
                    key={
                      player.id
                    }
                    className="bg-neutral-950 rounded-xl p-3 border border-neutral-800"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-black">
                        {
                          player.name
                        }
                      </span>

                      <span className="text-[9px] text-neutral-600">
                        {
                          (
                            teams[
                              player.id
                            ] || []
                          ).length
                        }/
                        {
                          maxSlotsPerPlayer
                        }
                      </span>

                    </div>

                    <div className="grid grid-cols-2 gap-1 mt-2">

                      {ROLE_OPTIONS.map(
                        (
                          role
                        ) => {
                          const status =
                            getPlayerRoleStatus(
                              player.id,
                              role
                            );

                          return (
                            <div
                              key={
                                role
                              }
                              className="flex items-center justify-between rounded-lg bg-black/50 px-2 py-1"
                            >

                              <span className="text-[8px] text-neutral-600">
                                {
                                  role
                                }
                              </span>

                              <span
                                className={`text-[8px] font-black ${
                                  status.full
                                    ? "text-red-500"
                                    : "text-neutral-300"
                                }`}
                              >
                                {
                                  status.used
                                }
                                /
                                {
                                  status.limit
                                }
                              </span>

                            </div>
                          );
                        }
                      )}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </aside>

      </div>

      {/* CURRENT ROSTERS */}

      <section className="mt-6">

        <div className="flex items-center gap-2 mb-4">

          <Trophy className="w-5 h-5 text-red-500" />

          <h2 className="font-black text-lg">
            Current Rosters
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {players.map(
            (
              player
            ) => {
              const team =
                teams[player.id] ||
                [];

              return (
                <div
                  key={
                    player.id
                  }
                  className="bg-black/70 border border-neutral-800 rounded-2xl p-4"
                >

                  <div className="flex justify-between items-center mb-3">

                    <span className="font-black">
                      {
                        player.name
                      }
                    </span>

                    <span className="text-xs text-neutral-500">
                      {
                        team.length
                      }/
                      {
                        maxSlotsPerPlayer
                      }
                    </span>

                  </div>

                  {team.length ===
                  0 ? (
                    <div className="text-xs text-neutral-600 py-6 text-center">
                      No characters purchased yet.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-80 overflow-y-auto pr-1">

                      {team.map(
                        (
                          character,
                          index
                        ) => (
                          <div
                            key={`${getAuctionId(
                              character
                            )}-${index}`}
                            className="flex items-center justify-between gap-3 bg-neutral-950 rounded-xl px-3 py-2"
                          >

                            <div className="min-w-0">

                              <div className="text-xs font-bold truncate">
                                {
                                  character.name
                                }
                              </div>

                              <div className="text-[9px] text-neutral-600">
                                {
                                  character.verse
                                }
                              </div>

                              <div className="text-[9px] text-red-400 font-black mt-0.5">

                                <span className="text-neutral-600">
                                  Natural:
                                </span>{" "}

                                {
                                  character.naturalRole ||
                                  getNaturalRole(
                                    character
                                  )
                                }

                                {" • "}

                                <span className="text-red-400">
                                  Assigned:
                                </span>{" "}

                                {
                                  character.assignedRole ||
                                  "Not assigned"
                                }

                              </div>

                            </div>

                            <div className="text-[10px] text-red-400 font-black whitespace-nowrap">
                              ₹
                              {Number(
                                character.boughtFor ||
                                  0
                              ).toLocaleString()}
                            </div>

                          </div>
                        )
                      )}

                    </div>
                  )}

                </div>
              );
            }
          )}

        </div>

      </section>

      {/* AUCTION HISTORY */}

      {auctionHistory.length >
        0 && (
        <section className="mt-6 bg-black/70 border border-neutral-800 rounded-2xl p-5">

          <h2 className="font-black text-sm uppercase tracking-widest">
            Auction History
          </h2>

          <div className="space-y-2 mt-4">

            {auctionHistory
              .slice(
                -12
              )
              .reverse()
              .map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={`${getAuctionId(
                      item.character
                    )}-${index}`}
                    className="flex items-center justify-between bg-neutral-950 rounded-xl px-4 py-3"
                  >

                    <div>

                      <div className="text-sm font-bold">
                        {
                          item.character
                            ?.name ||
                          "Unknown Character"
                        }
                      </div>

                      <div className="text-[10px] text-neutral-600">

                        {
                          item.status
                        }

                        {item.winnerId
                          ? ` • ${
                              players.find(
                                (
                                  p
                                ) =>
                                  p.id ===
                                  item.winnerId
                              )?.name ||
                              "Unknown"
                            }`
                          : ""}

                      </div>

                    </div>

                    <div className="font-black text-red-400">

                      {item.price
                        ? `₹${Number(
                            item.price
                          ).toLocaleString()}`
                        : "—"}

                    </div>

                  </div>
                )
              )}

          </div>

        </section>
      )}

      {/* STRATEGIC LEDGER */}

      {purchaseAnalyses.length >
        0 && (
        <section className="mt-6 bg-black/70 border border-neutral-800 rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-4">

            <Sparkles className="w-5 h-5 text-red-500" />

            <div>

              <h2 className="font-black text-sm uppercase tracking-widest">
                Strategic Auction Ledger
              </h2>

              <p className="text-[10px] text-neutral-600 mt-1">
                Every player decision is recorded for final judgment.
              </p>

            </div>

          </div>

          <div className="space-y-2">

            {purchaseAnalyses
              .slice()
              .reverse()
              .map(
                (
                  analysis,
                  index
                ) => {
                  const verdict =
                    analysis?.marketVerdict ||
                    "FAIR";

                  return (
                    <div
                      key={`${analysis?.character || "purchase"}-${index}`}
                      className="bg-neutral-950 border border-neutral-800 rounded-xl p-4"
                    >

                      <div className="flex flex-wrap items-center justify-between gap-3">

                        <div>

                          <div className="text-sm font-black">
                            {
                              analysis?.character ||
                              "Unknown Character"
                            }
                          </div>

                          <div className="text-[9px] text-neutral-600 mt-1">

                            {
                              analysis?.playerName ||
                              "Unknown Player"
                            }

                            {" • "}

                            {
                              analysis?.naturalRole ||
                              "Unknown"
                            }

                            {" → "}

                            {
                              analysis?.assignedRole ||
                              "Unknown"
                            }

                          </div>

                        </div>

                        <div className="flex items-center gap-2">

                          <span
                            className={`px-2 py-1 rounded-lg text-[9px] font-black ${
                              verdict ===
                              "STEAL"
                                ? "bg-green-950 text-green-400"
                                : verdict ===
                                  "DISASTER"
                                ? "bg-red-950 text-red-400"
                                : verdict ===
                                  "OVERPAY"
                                ? "bg-orange-950 text-orange-400"
                                : "bg-neutral-900 text-neutral-400"
                            }`}
                          >
                            {
                              verdict
                            }
                          </span>

                          {analysis?.grade && (
                            <span className="text-xs font-black text-yellow-400">
                              {
                                analysis.grade
                              }
                            </span>
                          )}

                        </div>

                      </div>

                      <div className="grid grid-cols-3 gap-2 mt-3">

                        <div className="bg-black/50 rounded-lg p-2">

                          <div className="text-[8px] text-neutral-600 uppercase">
                            Market
                          </div>

                          <div className="text-xs font-black mt-1">
                            ₹
                            {Number(
                              analysis?.marketValue ||
                                0
                            ).toLocaleString()}
                          </div>

                        </div>

                        <div className="bg-black/50 rounded-lg p-2">

                          <div className="text-[8px] text-neutral-600 uppercase">
                            Role Fit
                          </div>

                          <div className="text-xs font-black mt-1">
                            {Math.round(
                              Number(
                                analysis?.roleCompatibility ||
                                  0
                              )
                            )}
                            %
                          </div>

                        </div>

                        <div className="bg-black/50 rounded-lg p-2">

                          <div className="text-[8px] text-neutral-600 uppercase">
                            Strategy
                          </div>

                          <div className="text-xs font-black mt-1 text-red-400">
                            {Math.round(
                              Number(
                                analysis?.strategicScore ||
                                  0
                              )
                            )}
                          </div>

                        </div>

                      </div>

                      {analysis?.explanation && (
                        <p className="text-xs text-neutral-400 leading-6 mt-3">
                          {
                            analysis.explanation
                          }
                        </p>
                      )}

                    </div>
                  );
                }
              )}

          </div>

        </section>
      )}

      {/* ROLE ASSIGNMENT MODAL */}

      {pendingRoleAssignment &&
        roleAssignmentPlayer &&
        roleAssignmentCharacter && (
          <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">

            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-red-800 rounded-3xl p-6 md:p-8 shadow-2xl">

              <div className="text-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950 border border-red-800 text-red-300 text-[10px] font-black uppercase tracking-widest">

                  <Shield className="w-4 h-4" />

                  Role Assignment

                </div>

                <h2 className="text-3xl md:text-4xl font-black mt-4">
                  {
                    roleAssignmentPlayer.name
                  }
                </h2>

                <p className="text-neutral-500 text-sm mt-2">
                  You purchased
                </p>

                <p className="text-2xl md:text-3xl font-black text-red-400 mt-1">
                  {
                    roleAssignmentCharacter.name
                  }
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">

                  <span className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-black text-neutral-500">

                    NATURAL ROLE:{" "}

                    {
                      roleAssignmentCharacter.naturalRole ||
                      getNaturalRole(
                        roleAssignmentCharacter
                      )
                    }

                  </span>

                  <span className="px-3 py-2 rounded-xl bg-red-950 border border-red-900 text-[10px] font-black text-red-300">

                    PURCHASE: ₹
                    {Number(
                      roleAssignmentCharacter.boughtFor ||
                        0
                    ).toLocaleString()}

                  </span>

                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">

                {ROLE_OPTIONS.map(
                  (
                    role
                  ) => {
                    const status =
                      getPlayerRoleStatus(
                        roleAssignmentPlayer.id,
                        role,
                        roleAssignmentTeam
                      );

                    const isNatural =
                      (
                        roleAssignmentCharacter.naturalRole ||
                        getNaturalRole(
                          roleAssignmentCharacter
                        )
                      ) ===
                      role;

                    return (
                      <button
                        type="button"
                        key={
                          role
                        }
                        disabled={
                          status.full
                        }
                        onClick={() =>
                          assignPurchasedCharacterRole(
                            roleAssignmentPlayer.id,
                            roleAssignmentCharacter.id,
                            role
                          )
                        }
                        className={`rounded-2xl border p-4 text-left transition ${
                          status.full
                            ? "opacity-25 cursor-not-allowed border-neutral-900 bg-neutral-950"
                            : isNatural
                            ? "border-blue-700 bg-blue-950/20 hover:border-blue-400"
                            : "border-neutral-800 bg-black hover:border-red-600 hover:bg-red-950/30"
                        }`}
                      >

                        <div className="flex items-center justify-between gap-2">

                          <span className="font-black text-sm">
                            {
                              role
                            }
                          </span>

                          {isNatural && (
                            <span className="text-[8px] font-black uppercase text-blue-400">
                              Natural
                            </span>
                          )}

                        </div>

                        <div className="text-[9px] text-neutral-500 mt-3">
                          {
                            status.used
                          }
                          /
                          {
                            status.limit
                          }{" "}
                          used
                        </div>

                        <div
                          className={`text-[9px] font-black mt-1 ${
                            status.full
                              ? "text-red-500"
                              : "text-green-400"
                          }`}
                        >
                          {status.full
                            ? "ROLE FULL"
                            : `${
                                status.remaining
                              } slot${
                                status.remaining ===
                                1
                                  ? ""
                                  : "s"
                              } available`}
                        </div>

                      </button>
                    );
                  }
                )}

              </div>

              <div className="mt-7 rounded-2xl border border-yellow-900/50 bg-yellow-950/10 p-4 text-center">

                <div className="text-xs font-black text-yellow-400">
                  YOUR DECISION MATTERS
                </div>

                <p className="text-[10px] text-neutral-500 mt-2 leading-5">

                  The game never automatically chooses the final role.
                  You decide the placement.
                  The purchase, price, natural role and assigned role
                  are all recorded for the final tactical evaluation.

                </p>

              </div>

            </div>

          </div>
        )}

    </main>
  );
}