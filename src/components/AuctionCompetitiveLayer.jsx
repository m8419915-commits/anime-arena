import React, { useMemo } from "react";

import {
  Flame,
  Trophy,
  TrendingUp,
  AlertTriangle,
  Swords,
  Coins,
} from "lucide-react";

export default function AuctionCompetitiveLayer({
  players = [],
  teams = {},
  purchaseAnalyses = [],
  auctionHistory = [],
}) {
  const leaderboard = useMemo(() => {
    return players
      .map((player) => {
        const team = teams[player.id] || [];

        const spending = team.reduce(
          (sum, character) =>
            sum + Number(character?.boughtFor || 0),
          0
        );

        const power = team.reduce(
          (sum, character) =>
            sum +
            Number(
              character?.power ??
                character?.powerLevel ??
                character?.PNR ??
                character?.pnr ??
                character?.realPower ??
                character?.relPower ??
                0
            ),
          0
        );

        const goodPurchases = purchaseAnalyses.filter(
          (analysis) =>
            analysis?.playerId === player.id &&
            ["STEAL", "GREAT", "GOOD"].includes(
              String(
                analysis?.marketVerdict || ""
              ).toUpperCase()
            )
        ).length;

        const badPurchases = purchaseAnalyses.filter(
          (analysis) =>
            analysis?.playerId === player.id &&
            ["OVERPAY", "DISASTER"].includes(
              String(
                analysis?.marketVerdict || ""
              ).toUpperCase()
            )
        ).length;

        const score =
          power +
          goodPurchases * 100 -
          badPurchases * 100;

        return {
          ...player,
          teamSize: team.length,
          spending,
          power,
          goodPurchases,
          badPurchases,
          score,
        };
      })
      .sort(
        (a, b) =>
          b.score - a.score
      );
  }, [
    players,
    teams,
    purchaseAnalyses,
  ]);

  const recentMoments =
    purchaseAnalyses
      .slice(-5)
      .reverse();

  return (
    <section className="mt-6 rounded-3xl border border-red-900/60 bg-black/80 p-5 shadow-2xl">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">

        <div className="flex items-center gap-3">

          <div className="p-3 rounded-xl bg-red-600">
            <Flame className="w-5 h-5 text-black" />
          </div>

          <div>

            <h2 className="text-lg font-black uppercase">
              Competitive Arena
            </h2>

            <p className="text-[10px] text-neutral-600 mt-1">
              Live strategic pressure • purchase quality • rivalry
            </p>

          </div>

        </div>

        <div className="text-[9px] uppercase tracking-widest text-neutral-600 font-black">
          {auctionHistory.length} auction events
        </div>

      </div>


      {/* LEADERBOARD */}
      <div className="space-y-2">

        {leaderboard.map(
          (player, index) => (
            <div
              key={player.id}
              className={`rounded-2xl border p-4 ${
                index === 0
                  ? "border-yellow-700 bg-yellow-950/20"
                  : "border-neutral-800 bg-neutral-950"
              }`}
            >

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-xl bg-black border border-neutral-800 flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex items-center gap-2">

                    {index === 0 && (
                      <Trophy className="w-4 h-4 text-yellow-400" />
                    )}

                    <span className="font-black truncate">
                      {player.name}
                    </span>

                  </div>

                  <div className="text-[9px] text-neutral-600 mt-1">
                    {player.teamSize} characters
                    {" • "}
                    ₹{player.spending.toLocaleString()} spent
                  </div>

                </div>

                <div className="text-right">

                  <div className="text-[9px] uppercase tracking-widest text-neutral-600">
                    Arena Score
                  </div>

                  <div className="text-xl font-black text-red-400">
                    {Math.round(player.score)}
                  </div>

                </div>

              </div>


              <div className="grid grid-cols-4 gap-2 mt-3">

                <div className="bg-black/50 rounded-xl p-2">

                  <div className="text-[8px] text-neutral-600 uppercase">
                    Power
                  </div>

                  <div className="text-xs font-black mt-1">
                    {Math.round(player.power)}
                  </div>

                </div>

                <div className="bg-black/50 rounded-xl p-2">

                  <div className="text-[8px] text-neutral-600 uppercase">
                    Good
                  </div>

                  <div className="text-xs font-black text-green-400 mt-1">
                    {player.goodPurchases}
                  </div>

                </div>

                <div className="bg-black/50 rounded-xl p-2">

                  <div className="text-[8px] text-neutral-600 uppercase">
                    Blunders
                  </div>

                  <div className="text-xs font-black text-red-400 mt-1">
                    {player.badPurchases}
                  </div>

                </div>

                <div className="bg-black/50 rounded-xl p-2">

                  <div className="text-[8px] text-neutral-600 uppercase">
                    Squad
                  </div>

                  <div className="text-xs font-black mt-1">
                    {player.teamSize}
                  </div>

                </div>

              </div>

            </div>
          )
        )}

      </div>


      {/* RECENT PURCHASE EVENTS */}
      {recentMoments.length > 0 && (
        <div className="mt-5 pt-5 border-t border-neutral-800">

          <div className="flex items-center gap-2 mb-3">

            <Swords className="w-4 h-4 text-red-500" />

            <h3 className="text-xs font-black uppercase tracking-widest">
              Recent Strategic Moments
            </h3>

          </div>

          <div className="space-y-2">

            {recentMoments.map(
              (analysis, index) => {

                const verdict =
                  String(
                    analysis?.marketVerdict ||
                      "FAIR"
                  ).toUpperCase();

                const isGood =
                  ["STEAL", "GREAT", "GOOD"].includes(
                    verdict
                  );

                const isBad =
                  ["OVERPAY", "DISASTER"].includes(
                    verdict
                  );

                return (
                  <div
                    key={`${analysis?.character || "event"}-${index}`}
                    className="flex items-center gap-3 rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-3"
                  >

                    <div
                      className={`p-2 rounded-lg ${
                        isGood
                          ? "bg-green-950 text-green-400"
                          : isBad
                          ? "bg-red-950 text-red-400"
                          : "bg-neutral-900 text-neutral-400"
                      }`}
                    >
                      {isBad ? (
                        <AlertTriangle className="w-4 h-4" />
                      ) : (
                        <TrendingUp className="w-4 h-4" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">

                      <div className="text-xs font-black truncate">
                        {analysis?.character ||
                          "Unknown Character"}
                      </div>

                      <div className="text-[9px] text-neutral-600 mt-1">
                        {analysis?.playerName ||
                          "Unknown Player"}
                        {" • "}
                        {analysis?.assignedRole ||
                          "Unknown Role"}
                      </div>

                    </div>

                    <div
                      className={`text-[9px] font-black px-2 py-1 rounded-lg ${
                        isGood
                          ? "bg-green-950 text-green-400"
                          : isBad
                          ? "bg-red-950 text-red-400"
                          : "bg-neutral-900 text-neutral-400"
                      }`}
                    >
                      {verdict}
                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>
      )}


      {/* COMPETITIVE MESSAGE */}
      <div className="mt-5 grid md:grid-cols-3 gap-2">

        <div className="rounded-xl border border-red-900/40 bg-red-950/10 p-3">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-400" />
            <span className="text-[9px] uppercase font-black tracking-widest">
              Pressure
            </span>
          </div>

          <p className="text-[9px] text-neutral-500 mt-2">
            Every purchase changes the competitive balance.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-900/40 bg-yellow-950/10 p-3">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-[9px] uppercase font-black tracking-widest">
              Economy
            </span>
          </div>

          <p className="text-[9px] text-neutral-500 mt-2">
            Spending decisions matter as much as raw power.
          </p>
        </div>

        <div className="rounded-xl border border-purple-900/40 bg-purple-950/10 p-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-[9px] uppercase font-black tracking-widest">
              Rivalry
            </span>
          </div>

          <p className="text-[9px] text-neutral-500 mt-2">
            Great drafts and terrible blunders are remembered.
          </p>
        </div>

      </div>

    </section>
  );
}