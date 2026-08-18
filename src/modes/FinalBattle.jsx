import React, { useMemo } from "react";
import { Crown, Swords, Trophy, Shield, Sparkles } from "lucide-react";

function num(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function powerOf(c) {
  return num(c?.power ?? c?.powerLevel ?? c?.realPower ?? c?.relPower ?? c?.stats?.power);
}

function haxOf(c) {
  return num(c?.hax ?? c?.stats?.hax);
}

function roleOf(c) {
  return (
    c?.role ||
    c?.roles?.[0] ||
    c?.type ||
    "Unknown"
  );
}

function teamStats(team = []) {
  const power = team.reduce((s, c) => s + powerOf(c), 0);
  const hax = team.reduce((s, c) => s + haxOf(c), 0);
  const roles = team.reduce((map, c) => {
    const role = roleOf(c);
    map[role] = (map[role] || 0) + 1;
    return map;
  }, {});

  const roleCoverage = Object.keys(roles).length;
  const balance = Math.min(100, roleCoverage * 12.5);

  // This is a deterministic local battle score.
  // Gemini will later adjudicate the same teams with a detailed explanation.
  const score =
    power +
    hax * 1.15 +
    balance * 10 +
    team.length * 100;

  return { power, hax, roles, roleCoverage, balance, score };
}

export default function FinalBattle({
  players = [],
  teams = {},
  onContinue,
}) {
  const results = useMemo(() => {
    return players
      .map((player) => {
        const team = teams[player.id] || [];
        return {
          player,
          team,
          stats: teamStats(team),
        };
      })
      .sort((a, b) => b.stats.score - a.stats.score);
  }, [players, teams]);

  const winner = results[0];
  const runnerUp = results[1];

  if (!winner) return null;

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-800 bg-red-950/40 text-red-300 text-xs font-black uppercase tracking-widest">
          <Swords className="w-4 h-4" />
          Final Team Battle
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase mt-5">
          Team
          <span className="text-red-500"> VS Team</span>
        </h1>

        <p className="text-neutral-400 mt-3">
          Local tactical adjudication is ready. Gemini can be connected next
          for the final explanation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {results.map((result, index) => (
          <section
            key={result.player.id}
            className={`rounded-3xl border p-5 ${
              index === 0
                ? "border-yellow-500 bg-yellow-950/20"
                : "border-neutral-800 bg-black/70"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                  {index === 0 ? "Current Winner" : `Rank #${index + 1}`}
                </div>
                <h2 className="font-black text-xl mt-1">
                  {result.player.name}
                </h2>
              </div>

              {index === 0 && <Crown className="text-yellow-400" />}
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="bg-neutral-950 rounded-xl p-3">
                <div className="text-[10px] text-neutral-500 uppercase">
                  Power
                </div>
                <div className="font-black mt-1">
                  {Math.round(result.stats.power).toLocaleString()}
                </div>
              </div>

              <div className="bg-neutral-950 rounded-xl p-3">
                <div className="text-[10px] text-neutral-500 uppercase">
                  Hax
                </div>
                <div className="font-black mt-1">
                  {Math.round(result.stats.hax).toLocaleString()}
                </div>
              </div>

              <div className="bg-neutral-950 rounded-xl p-3">
                <div className="text-[10px] text-neutral-500 uppercase">
                  Role Coverage
                </div>
                <div className="font-black mt-1">
                  {result.stats.roleCoverage}
                </div>
              </div>

              <div className="bg-neutral-950 rounded-xl p-3">
                <div className="text-[10px] text-neutral-500 uppercase">
                  Battle Score
                </div>
                <div className="font-black text-red-400 mt-1">
                  {Math.round(result.stats.score).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {result.team.map((character, i) => (
                <div
                  key={`${character.id}-${i}`}
                  className="flex items-center gap-3 bg-neutral-950 rounded-xl px-3 py-2"
                >
                  {character.image ? (
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-neutral-700" />
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {character.name}
                    </div>
                    <div className="text-[9px] text-neutral-600">
                      {roleOf(character)} • PNR {powerOf(character).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {runnerUp && (
        <section className="mt-6 rounded-3xl border border-red-900/50 bg-black/80 p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Battle Verdict
          </div>

          <h2 className="text-2xl md:text-3xl font-black mt-3">
            {winner.player.name} currently leads
          </h2>

          <p className="text-neutral-400 mt-2 max-w-2xl mx-auto">
            The local engine currently favors {winner.player.name} over{" "}
            {runnerUp.player.name} based on total power, hax, role coverage,
            and roster size. Gemini will later provide the detailed
            character-by-character explanation.
          </p>
        </section>
      )}

      <button
        onClick={() => onContinue?.(results)}
        className="w-full mt-6 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-black font-black uppercase tracking-widest flex items-center justify-center gap-2"
      >
        <Trophy className="w-5 h-5" />
        Continue to AI Adjudication
      </button>
    </main>
  );
}