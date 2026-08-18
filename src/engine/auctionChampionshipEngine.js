/* =========================================================
   ANIME ARENA — AUCTION CHAMPIONSHIP ENGINE
   PHASE 8/9 — DETERMINISTIC CHAMPIONSHIP SYSTEM

   Exports required by AuctionBattle.jsx
   ---------------------------------------------------------
   • runAuctionChampionship()
   • createChampionshipDossier()

   Uses the deterministic Auction Battle Engine as the
   evidence source. Gemini only interprets the dossier later.
========================================================= */

import {
  simulateAuctionBattle,
  calculateTeamStatistics,
} from "./auctionBattleEngine";


/* =========================================================
   HELPERS
========================================================= */

function safeNumber(value, fallback = 0) {
  const n = Number(value);

  return Number.isFinite(n)
    ? n
    : fallback;
}


function clamp(value, min = 0, max = 100) {
  return Math.max(
    min,
    Math.min(
      max,
      safeNumber(value)
    )
  );
}


function round(value, digits = 2) {
  const multiplier = 10 ** digits;

  return (
    Math.round(
      safeNumber(value) * multiplier
    ) / multiplier
  );
}


function normalizePlayers(players) {
  if (!Array.isArray(players)) {
    return [];
  }

  return players.map((player, index) => ({
    ...player,

    id:
      player?.id ??
      `player-${index + 1}`,

    name:
      player?.name ||
      `Player ${index + 1}`,

    team:
      Array.isArray(player?.team)
        ? player.team
        : [],
  }));
}


function getPlayerStats(player) {
  const stats =
    calculateTeamStatistics(
      player
    );

  return {
    tacticalScore:
      safeNumber(
        stats?.tacticalScore
      ),

    roleEfficiency:
      safeNumber(
        stats?.roleEfficiency?.average
      ),

    synergy:
      safeNumber(
        stats?.synergy
      ),

    coverage:
      safeNumber(
        stats?.coverage
      ),

    balance:
      safeNumber(
        stats?.balance
      ),

    strategicBlunders:
      Array.isArray(
        stats?.strategicBlunders
      )
        ? stats.strategicBlunders
        : [],

    roleDistribution:
      stats?.roleDistribution || {},
  };
}


/* =========================================================
   BATTLE HELPERS
========================================================= */

function safeBattle(leftPlayer, rightPlayer) {
  try {
    return simulateAuctionBattle(
      leftPlayer,
      rightPlayer
    );
  } catch (error) {
    console.error(
      "Championship battle simulation failed:",
      error
    );

    return {
      players: {
        left: {
          id: leftPlayer?.id,
          name:
            leftPlayer?.name ||
            "Player 1",
        },

        right: {
          id: rightPlayer?.id,
          name:
            rightPlayer?.name ||
            "Player 2",
        },
      },

      teams: {},

      probability: {
        [leftPlayer?.id]: 50,
        [rightPlayer?.id]: 50,
      },

      score: {
        [leftPlayer?.id]: 50,
        [rightPlayer?.id]: 50,
      },

      winnerId: "DRAW",

      battleTier:
        "HIGHLY_CONTESTED",

      leftTeamStats:
        getPlayerStats(
          leftPlayer
        ),

      rightTeamStats:
        getPlayerStats(
          rightPlayer
        ),

      matchupMatrix: [],

      keyMatchups: [],

      strategicObservations: [
        "Battle simulation failed and was treated as a draw.",
      ],

      aiEvidence: {
        strategicBlunders: {
          left:
            getPlayerStats(
              leftPlayer
            ).strategicBlunders,

          right:
            getPlayerStats(
              rightPlayer
            ).strategicBlunders,
        },

        naturalVsAssigned: {
          left: [],
          right: [],
        },
      },
    };
  }
}


/* =========================================================
   LEAGUE
========================================================= */

function createLeague(players) {
  const battles = [];

  const standings = players.map(
    (player) => ({
      playerId:
        player.id,

      playerName:
        player.name,

      rank: null,

      wins: 0,
      losses: 0,
      draws: 0,

      points: 0,

      scored: 0,
      conceded: 0,

      tacticalScore:
        getPlayerStats(
          player
        ).tacticalScore,

      roleEfficiency:
        getPlayerStats(
          player
        ).roleEfficiency,

      synergy:
        getPlayerStats(
          player
        ).synergy,

      strategicBlunders:
        getPlayerStats(
          player
        ).strategicBlunders
          .length,

      leagueScore: 0,

      championshipScore: 0,
    })
  );

  const standingsMap = new Map(
    standings.map(
      (item) => [
        item.playerId,
        item,
      ]
    )
  );


  for (
    let i = 0;
    i < players.length;
    i += 1
  ) {
    for (
      let j = i + 1;
      j < players.length;
      j += 1
    ) {
      const left =
        players[i];

      const right =
        players[j];

      const battle =
        safeBattle(
          left,
          right
        );

      battles.push(
        battle
      );


      const leftStanding =
        standingsMap.get(
          left.id
        );

      const rightStanding =
        standingsMap.get(
          right.id
        );

      if (
        !leftStanding ||
        !rightStanding
      ) {
        continue;
      }


      const leftProbability =
        safeNumber(
          battle?.probability?.[
            left.id
          ],
          50
        );

      const rightProbability =
        safeNumber(
          battle?.probability?.[
            right.id
          ],
          50
        );


      leftStanding.scored +=
        leftProbability;

      leftStanding.conceded +=
        rightProbability;

      rightStanding.scored +=
        rightProbability;

      rightStanding.conceded +=
        leftProbability;


      if (
        battle?.winnerId ===
        "DRAW"
      ) {
        leftStanding.draws += 1;
        rightStanding.draws += 1;

        leftStanding.points += 1;
        rightStanding.points += 1;
      } else if (
        battle?.winnerId ===
        left.id
      ) {
        leftStanding.wins += 1;
        rightStanding.losses += 1;

        leftStanding.points += 3;
      } else if (
        battle?.winnerId ===
        right.id
      ) {
        rightStanding.wins += 1;
        leftStanding.losses += 1;

        rightStanding.points += 3;
      }
    }
  }


  standings.forEach(
    (standing) => {
      const games =
        standing.wins +
        standing.losses +
        standing.draws;

      const averageScored =
        games > 0
          ? standing.scored / games
          : 50;

      const tactical =
        standing.tacticalScore;

      const role =
        standing.roleEfficiency;

      const synergy =
        standing.synergy;

      /*
        League score rewards:
        • results
        • battle performance
        • role discipline
        • team synergy
      */

      standing.leagueScore =
        round(
          standing.points * 20 +
          averageScored * 0.25 +
          tactical * 0.30 +
          role * 0.10 +
          synergy * 0.10 -
          standing.strategicBlunders * 2
        );
    }
  );


  standings.sort(
    (a, b) => {
      if (
        b.points !==
        a.points
      ) {
        return (
          b.points -
          a.points
        );
      }

      if (
        b.leagueScore !==
        a.leagueScore
      ) {
        return (
          b.leagueScore -
          a.leagueScore
        );
      }

      if (
        b.wins !==
        a.wins
      ) {
        return (
          b.wins -
          a.wins
        );
      }

      return (
        b.tacticalScore -
        a.tacticalScore
      );
    }
  );


  standings.forEach(
    (
      standing,
      index
    ) => {
      standing.rank =
        index + 1;
    }
  );


  return {
    battles,
    standings,
  };
}


/* =========================================================
   KNOCKOUT HELPERS
========================================================= */

function createMatch(
  playerA,
  playerB,
  slot
) {
  if (!playerA || !playerB) {
    return null;
  }

  const battle =
    safeBattle(
      playerA,
      playerB
    );

  let winner = null;

  if (
    battle?.winnerId ===
    playerA.id
  ) {
    winner =
      playerA;
  } else if (
    battle?.winnerId ===
    playerB.id
  ) {
    winner =
      playerB;
  } else {
    /*
      Deterministic draw breaker:
      tactical score → role efficiency → synergy
    */

    const a =
      getPlayerStats(
        playerA
      );

    const b =
      getPlayerStats(
        playerB
      );

    const scoreA =
      a.tacticalScore * 0.60 +
      a.roleEfficiency * 0.20 +
      a.synergy * 0.20;

    const scoreB =
      b.tacticalScore * 0.60 +
      b.roleEfficiency * 0.20 +
      b.synergy * 0.20;

    winner =
      scoreA >= scoreB
        ? playerA
        : playerB;
  }


  return {
    id:
      `match-${slot}-${playerA.id}-${playerB.id}`,

    slot,

    playerA: {
      ...playerA,
    },

    playerB: {
      ...playerB,
    },

    winner: {
      ...winner,
    },

    battle,
  };
}


function createSemifinals(
  qualifiers
) {
  const matches = [];

  if (
    qualifiers.length >= 4
  ) {
    matches.push(
      createMatch(
        qualifiers[0],
        qualifiers[3],
        1
      )
    );

    matches.push(
      createMatch(
        qualifiers[1],
        qualifiers[2],
        2
      )
    );
  }

  return {
    matches,
  };
}


/* =========================================================
   CHAMPIONSHIP SCORE
========================================================= */

function calculateChampionshipScore(
  player,
  leagueStanding,
  knockoutWins,
  finalAppearance
) {
  const stats =
    getPlayerStats(
      player
    );

  let score =
    0;

  /*
    Base team quality
  */

  score +=
    stats.tacticalScore *
    0.25;

  score +=
    stats.roleEfficiency *
    0.10;

  score +=
    stats.synergy *
    0.08;


  /*
    League result
  */

  score +=
    safeNumber(
      leagueStanding?.points
    ) * 4;

  score +=
    safeNumber(
      leagueStanding?.wins
    ) * 4;


  /*
    Knockout pressure
  */

  score +=
    knockoutWins * 12;


  /*
    Final appearance
  */

  if (
    finalAppearance
  ) {
    score += 8;
  }


  /*
    Strategic mistake penalty
  */

  score -=
    stats.strategicBlunders
      .reduce(
        (
          total,
          mistake
        ) =>
          total +
          safeNumber(
            mistake?.severity
          ) *
            1.25,
        0
      );


  return round(
    clamp(
      score,
      0,
      200
    )
  );
}


/* =========================================================
   MAIN CHAMPIONSHIP ENGINE
========================================================= */

export function runAuctionChampionship(
  inputPlayers
) {
  try {
    const players =
      normalizePlayers(
        inputPlayers
      );


    if (
      players.length <
      2
    ) {
      return {
        success: false,

        errors: [
          "Auction Championship requires at least 2 players.",
        ],

        championship:
          null,
      };
    }


    if (
      players.length >
      6
    ) {
      return {
        success: false,

        errors: [
          "Auction Championship supports a maximum of 6 players.",
        ],

        championship:
          null,
      };
    }


    /*
      -----------------------------------------------------
      LEAGUE
      -----------------------------------------------------
    */

    const league =
      createLeague(
        players
      );


    const leagueStandings =
      league.standings;


    /*
      -----------------------------------------------------
      KNOCKOUT QUALIFICATION
      -----------------------------------------------------
    */

    let semifinalMatches =
      [];

    let final = null;

    let champion = null;

    let knockoutPlayers = [];


    if (
      players.length ===
      2
    ) {
      /*
        Two-player format:
        league itself determines
        the finalists.
      */

      const playerA =
        leagueStandings[0]
          ? players.find(
              (player) =>
                player.id ===
                leagueStandings[0]
                  .playerId
            )
          : players[0];

      const playerB =
        leagueStandings[1]
          ? players.find(
              (player) =>
                player.id ===
                leagueStandings[1]
                  .playerId
            )
          : players[1];


      final =
        createMatch(
          playerA,
          playerB,
          "FINAL"
        );

      champion =
        final?.winner ||
        playerA;

      knockoutPlayers = [
        playerA,
        playerB,
      ];
    } else {
      /*
        3–6 players:
        Top 4 advance.
      */

      const qualifiers =
        leagueStandings
          .slice(
            0,
            Math.min(
              4,
              leagueStandings.length
            )
          )
          .map(
            (standing) =>
              players.find(
                (player) =>
                  player.id ===
                  standing.playerId
              )
          )
          .filter(Boolean);


      knockoutPlayers =
        qualifiers;


      if (
        qualifiers.length >=
        4
      ) {
        const semifinals =
          createSemifinals(
            qualifiers
          );

        semifinalMatches =
          semifinals.matches;


        const semifinalWinnerA =
          semifinalMatches[0]
            ?.winner;

        const semifinalWinnerB =
          semifinalMatches[1]
            ?.winner;


        if (
          semifinalWinnerA &&
          semifinalWinnerB
        ) {
          final =
            createMatch(
              semifinalWinnerA,
              semifinalWinnerB,
              "FINAL"
            );

          champion =
            final?.winner ||
            semifinalWinnerA;
        }
      } else if (
        qualifiers.length ===
        3
      ) {
        /*
          Rare fallback for 3 players.
          First two by league ranking enter final.
        */

        final =
          createMatch(
            qualifiers[0],
            qualifiers[1],
            "FINAL"
          );

        champion =
          final?.winner ||
          qualifiers[0];
      }
    }


    if (!champion) {
      champion =
        players[0];
    }


    /*
      -----------------------------------------------------
      CHAMPIONSHIP LEADERBOARD
      -----------------------------------------------------
    */

    const leagueMap =
      new Map(
        leagueStandings.map(
          (item) => [
            item.playerId,
            item,
          ]
        )
      );


    const knockoutWinMap =
      new Map();


    function registerWinner(
      player
    ) {
      if (!player?.id) {
        return;
      }

      knockoutWinMap.set(
        player.id,
        safeNumber(
          knockoutWinMap.get(
            player.id
          )
        ) + 1
      );
    }


    semifinalMatches.forEach(
      (match) => {
        registerWinner(
          match?.winner
        );
      }
    );


    if (
      final?.winner
    ) {
      registerWinner(
        final.winner
      );
    }


    const leaderboard =
      players
        .map(
          (player) => {
            const leagueStanding =
              leagueMap.get(
                player.id
              ) || {};

            const knockoutWins =
              safeNumber(
                knockoutWinMap.get(
                  player.id
                )
              );

            const finalAppearance =
              Boolean(
                final &&
                (
                  final.playerA
                    ?.id ===
                    player.id ||
                  final.playerB
                    ?.id ===
                    player.id
                )
              );

            const championshipScore =
              calculateChampionshipScore(
                player,
                leagueStanding,
                knockoutWins,
                finalAppearance
              );

            return {
              playerId:
                player.id,

              playerName:
                player.name,

              rank:
                leagueStanding.rank ||
                null,

              leagueRank:
                leagueStanding.rank ||
                null,

              points:
                leagueStanding.points ||
                0,

              wins:
                leagueStanding.wins ||
                0,

              losses:
                leagueStanding.losses ||
                0,

              draws:
                leagueStanding.draws ||
                0,

              tacticalScore:
                round(
                  leagueStanding.tacticalScore
                ),

              roleEfficiency:
                round(
                  leagueStanding.roleEfficiency
                ),

              synergy:
                round(
                  leagueStanding.synergy
                ),

              strategicBlunders:
                leagueStanding
                  .strategicBlunders ||
                0,

              knockoutWins,

              finalAppearance,

              championshipScore,
            };
          }
        )
        .sort(
          (a, b) => {
            if (
              b.championshipScore !==
              a.championshipScore
            ) {
              return (
                b.championshipScore -
                a.championshipScore
              );
            }

            if (
              b.points !==
              a.points
            ) {
              return (
                b.points -
                a.points
              );
            }

            if (
              b.wins !==
              a.wins
            ) {
              return (
                b.wins -
                a.wins
              );
            }

            return (
              b.tacticalScore -
              a.tacticalScore
            );
          }
        )
        .map(
          (
            player,
            index
          ) => ({
            ...player,

            championshipRank:
              index + 1,
          })
        );


    /*
      Champion must always be the actual
      knockout winner, while leaderboard
      shows complete championship evidence.
    */

    const championPlayer =
      players.find(
        (player) =>
          player.id ===
          champion.id
      ) ||
      champion;


    /*
      -----------------------------------------------------
      FORMAT
      -----------------------------------------------------
    */

    let formatName =
      "Multi-stage Auction Championship";

    if (
      players.length ===
      2
    ) {
      formatName =
        "2-Player Championship Final";
    } else if (
      players.length ===
      3
    ) {
      formatName =
        "3-Player League + Final";
    } else {
      formatName =
        "Round-Robin League + Top-4 Knockout";
    }


    const championship = {
      format: {
        name:
          formatName,

        playerCount:
          players.length,

        stages: [
          "League",
          ...(players.length > 2
            ? [
                "Semifinals",
              ]
            : []),
          "Grand Final",
        ],
      },


      champion: {
        ...championPlayer,

        score:
          leaderboard.find(
            (item) =>
              item.playerId ===
              championPlayer.id
          )?.championshipScore ||
          0,
      },


      leaderboard,


      league: {
        battles:
          league.battles,

        standings:
          leagueStandings,
      },


      semifinals: {
        matches:
          semifinalMatches,
      },


      final,


      participants:
        players.map(
          (player) => ({
            id:
              player.id,

            name:
              player.name,
          })
        ),


      meta: {
        generatedAt:
          new Date().toISOString(),

        engine:
          "auction-championship-v1",

        deterministic:
          true,
      },
    };


    return {
      success: true,

      errors: [],

      championship,
    };
  } catch (error) {
    console.error(
      "Auction Championship Engine Error:",
      error
    );

    return {
      success: false,

      errors: [
        error?.message ||
          "Unknown championship engine error.",
      ],

      championship:
        null,
    };
  }
}


/* =========================================================
   GEMINI CHAMPIONSHIP DOSSIER
========================================================= */

export function createChampionshipDossier(
  championshipResult
) {
  if (
    !championshipResult
  ) {
    return null;
  }


  const championship =
    championshipResult
      ?.championship ||
    null;


  if (!championship) {
    return {
      version:
        "auction-championship-v1",

      success: false,

      errors:
        championshipResult
          ?.errors ||
        [
          "Championship data unavailable.",
        ],
    };
  }


  function safeBattle(
    battle
  ) {
    if (!battle) {
      return null;
    }

    return {
      players:
        battle.players ||
        null,

      winnerId:
        battle.winnerId ??
        null,

      battleTier:
        battle.battleTier ||
        null,

      probability:
        battle.probability ||
        {},

      score:
        battle.score ||
        {},

      leftTeamStats:
        battle.leftTeamStats ||
        null,

      rightTeamStats:
        battle.rightTeamStats ||
        null,

      strategicObservations:
        Array.isArray(
          battle.strategicObservations
        )
          ? battle.strategicObservations
          : [],

      strategicBlunders: {
        left:
          battle.aiEvidence
            ?.strategicBlunders
            ?.left ||
          [],

        right:
          battle.aiEvidence
            ?.strategicBlunders
            ?.right ||
          [],
      },

      roleAssignments: {
        left:
          battle.aiEvidence
            ?.naturalVsAssigned
            ?.left ||
          [],

        right:
          battle.aiEvidence
            ?.naturalVsAssigned
            ?.right ||
          [],
      },

      keyMatchups:
        Array.isArray(
          battle.keyMatchups
        )
          ? battle.keyMatchups
          : [],

      matchupMatrix:
        Array.isArray(
          battle.matchupMatrix
        )
          ? battle.matchupMatrix
          : [],
    };
  }


  return {
    version:
      "auction-championship-v1",

    success: true,


    champion:
      championship.champion
        ? {
            id:
              championship
                .champion
                .id ??
              null,

            name:
              championship
                .champion
                .name ||
              "Unknown",

            score:
              championship
                .champion
                .score ??
              null,
          }
        : null,


    format:
      championship.format ||
      null,


    leaderboard:
      Array.isArray(
        championship.leaderboard
      )
        ? championship
            .leaderboard
            .map(
              (player) => ({
                playerId:
                  player.playerId,

                playerName:
                  player.playerName,

                rank:
                  player.rank ??
                  null,

                championshipRank:
                  player
                    .championshipRank ??
                  null,

                leagueRank:
                  player
                    .leagueRank ??
                  null,

                points:
                  player.points ??
                  0,

                wins:
                  player.wins ??
                  0,

                losses:
                  player.losses ??
                  0,

                draws:
                  player.draws ??
                  0,

                tacticalScore:
                  player
                    .tacticalScore ??
                  0,

                roleEfficiency:
                  player
                    .roleEfficiency ??
                  0,

                synergy:
                  player.synergy ??
                  0,

                strategicBlunders:
                  player
                    .strategicBlunders ??
                  0,

                knockoutWins:
                  player
                    .knockoutWins ??
                  0,

                finalAppearance:
                  Boolean(
                    player
                      .finalAppearance
                  ),

                championshipScore:
                  player
                    .championshipScore ??
                  0,
              })
            )
        : [],


    league: {
      battles:
        Array.isArray(
          championship
            ?.league
            ?.battles
        )
          ? championship
              .league
              .battles
              .map(
                safeBattle
              )
          : [],

      standings:
        Array.isArray(
          championship
            ?.league
            ?.standings
        )
          ? championship
              .league
              .standings
          : [],
    },


    semifinals: {
      matches:
        Array.isArray(
          championship
            ?.semifinals
            ?.matches
        )
          ? championship
              .semifinals
              .matches
              .map(
                (match) => ({
                  id:
                    match?.id ??
                    null,

                  slot:
                    match?.slot ??
                    null,

                  playerA:
                    match?.playerA
                      ? {
                          id:
                            match
                              .playerA
                              .id,

                          name:
                            match
                              .playerA
                              .name,
                        }
                      : null,

                  playerB:
                    match?.playerB
                      ? {
                          id:
                            match
                              .playerB
                              .id,

                          name:
                            match
                              .playerB
                              .name,
                        }
                      : null,

                  winner:
                    match?.winner
                      ? {
                          id:
                            match
                              .winner
                              .id,

                          name:
                            match
                              .winner
                              .name,
                        }
                      : null,

                  battle:
                    safeBattle(
                      match?.battle
                    ),
                })
              )
          : [],
    },


    final:
      championship?.final
        ? {
            playerA:
              championship
                .final
                .playerA
                ? {
                    id:
                      championship
                        .final
                        .playerA
                        .id,

                    name:
                      championship
                        .final
                        .playerA
                        .name,
                  }
                : null,

            playerB:
              championship
                .final
                .playerB
                ? {
                    id:
                      championship
                        .final
                        .playerB
                        .id,

                    name:
                      championship
                        .final
                        .playerB
                        .name,
                  }
                : null,

            winner:
              championship
                .final
                .winner
                ? {
                    id:
                      championship
                        .final
                        .winner
                        .id,

                    name:
                      championship
                        .final
                        .winner
                        .name,
                  }
                : null,

            battle:
              safeBattle(
                championship
                  .final
                  .battle
              ),
          }
        : null,


    participants:
      Array.isArray(
        championship
          .participants
      )
        ? championship
            .participants
        : [],


    meta:
      championship.meta ||
      null,
  };
}


/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {
  runAuctionChampionship,
  createChampionshipDossier,
};