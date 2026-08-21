import React, { useMemo, useState } from "react";
import { getTournamentCharacter } from "../engine/tournamentDatabase";
import { getTournamentProgress } from "../engine/progressionEngine";

export default function TournamentBracket({
  tournament,
  players = [],
  onOpenMatch,
  onSimulateReadyMatches,
  onResetTournament,
  onBack,
}) {
  const [selectedRoundId, setSelectedRoundId] = useState("all");
  const [selectedRegionId, setSelectedRegionId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const progress = useMemo(() => {
    return getTournamentProgress(tournament);
  }, [tournament]);

  const rounds = tournament?.mainBracket?.rounds || [];
  const playInMatches = tournament?.playInMatches || [];
  const regions = tournament?.format?.regions || [];

  // Helper to get character profile
  const resolveCharacter = (entry) => {
    if (!entry || entry.type !== "character" || !entry.characterId) {
      return null;
    }
    const char = getTournamentCharacter(entry.characterId);
    if (!char) return null;
    const form = char.forms?.find((f) => f.id === entry.formId) || char.forms?.[0];
    return {
      ...char,
      selectedForm: form,
    };
  };

  // Find next ready match
  const nextReadyMatch = useMemo(() => {
    const readyPlayIn = playInMatches.find((m) => m.status === "ready");
    if (readyPlayIn) return readyPlayIn;
    for (const round of rounds) {
      const match = round.matches.find((m) => m.status === "ready");
      if (match) return match;
    }
    return null;
  }, [playInMatches, rounds]);

  // Filter matches based on selected filters and search
  const visibleRounds = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return rounds
      .filter((round) => selectedRoundId === "all" || round.id === selectedRoundId)
      .map((round) => {
        const filteredMatches = round.matches.filter((match) => {
          if (selectedRegionId !== "all") {
            // Determine region slice
            const matchesPerRegion = Math.ceil(round.matches.length / (regions.length || 1));
            const regionIndex = regions.findIndex((r) => r.id === selectedRegionId);
            if (regionIndex >= 0) {
              const startIdx = regionIndex * matchesPerRegion;
              const endIdx = startIdx + matchesPerRegion;
              if (match.order <= startIdx || match.order > endIdx) {
                return false;
              }
            }
          }

          if (!query) return true;

          const leftChar = resolveCharacter(match.left);
          const rightChar = resolveCharacter(match.right);

          const leftMatch =
            leftChar?.name?.toLowerCase().includes(query) ||
            leftChar?.verseId?.toLowerCase().includes(query);
          const rightMatch =
            rightChar?.name?.toLowerCase().includes(query) ||
            rightChar?.verseId?.toLowerCase().includes(query);

          return leftMatch || rightMatch || match.id.toLowerCase().includes(query);
        });

        return {
          ...round,
          matches: filteredMatches,
        };
      });
  }, [rounds, selectedRoundId, selectedRegionId, searchQuery, regions]);

  const isCompleted = tournament?.status === "completed" && tournament?.champion;
  const championChar = isCompleted ? resolveCharacter(tournament.champion) : null;

  return (
    <div className="min-h-screen bg-[#050507] text-white px-4 py-8 md:px-8 font-sans">
      <div className="mx-auto max-w-[1600px]">

        {/* TOP STATUS BAR & ACTIONS */}
        <header className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-red-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              Live Tournament Atlas
            </div>
            <h1 className="mt-2 text-3xl font-black md:text-5xl tracking-tight">
              {tournament?.name || "Grand Tournament"}
            </h1>
            <p className="mt-1 text-xs text-zinc-500 font-bold uppercase tracking-widest">
              {tournament?.format?.fieldSize} Entrants • {tournament?.config?.seedingMode} Seeding • {tournament?.config?.formRulesetId} Ruleset
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onSimulateReadyMatches && !isCompleted && (
              <button
                type="button"
                onClick={onSimulateReadyMatches}
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-xs font-black text-yellow-300 transition hover:bg-yellow-500/20 active:scale-95"
              >
                ⚡ Auto-Simulate Ready ({progress.readyMatches || 0})
              </button>
            )}

            <button
              type="button"
              onClick={onResetTournament}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-black text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
            >
              🔄 Reset Tournament
            </button>

            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-black text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
              >
                ← Back
              </button>
            )}
          </div>
        </header>

        {/* CHAMPION BANNER (IF COMPLETED) */}
        {isCompleted && championChar && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-yellow-500/40 bg-gradient-to-r from-yellow-950/40 via-red-950/30 to-black p-8 text-center shadow-2xl shadow-yellow-500/10">
            <span className="text-5xl">👑</span>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
              Grand Champion Crowned
            </p>
            <h2 className="mt-2 text-4xl font-black md:text-6xl text-white">
              {championChar.name}
            </h2>
            {championChar.selectedForm && (
              <p className="mt-1 text-sm font-bold text-yellow-300/80">
                Form: {championChar.selectedForm.name}
              </p>
            )}
            <p className="mt-3 text-xs text-zinc-400 font-bold uppercase tracking-wider">
              Verse: {championChar.verseId}
            </p>
          </div>
        )}

        {/* PROGRESS HUD */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Progress</p>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-black">{progress.percentage}%</span>
              <span className="text-xs text-zinc-400">{progress.completedMatches} / {progress.totalMatches} matches</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/40">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-500"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Field Size</p>
            <p className="mt-2 text-3xl font-black">{tournament?.format?.fieldSize}</p>
            <p className="mt-1 text-xs text-zinc-500 font-bold">Total Entrants</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Main Bracket</p>
            <p className="mt-2 text-3xl font-black text-red-400">{rounds.length} Rounds</p>
            <p className="mt-1 text-xs text-zinc-500 font-bold">Single Elimination</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Eliminations</p>
            <p className="mt-2 text-3xl font-black text-zinc-300">{tournament?.eliminations?.length || 0}</p>
            <p className="mt-1 text-xs text-zinc-500 font-bold">Fighters Fallen</p>
          </div>
        </section>

        {/* SPOTLIGHT NEXT READY MATCH */}
        {nextReadyMatch && !isCompleted && (
          <section className="mb-10 rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/20 via-black to-black p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="rounded-full bg-red-500/20 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-red-400">
                  Featured Up Next • {nextReadyMatch.roundName}
                </span>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-2xl md:text-3xl font-black">
                  <span className="text-blue-400">
                    {resolveCharacter(nextReadyMatch.left)?.name || "TBD"}
                  </span>
                  <span className="text-xs font-black text-zinc-600">VS</span>
                  <span className="text-red-400">
                    {resolveCharacter(nextReadyMatch.right)?.name || "TBD"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenMatch?.(nextReadyMatch)}
                className="group relative overflow-hidden rounded-2xl bg-red-600 px-8 py-5 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition hover:bg-red-500 active:scale-95"
              >
                ENTER MATCH ARENA ⚔️
              </button>
            </div>
          </section>
        )}

        {/* CONTROLS: REGIONS, ROUNDS, & SEARCH */}
        <section className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Round Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedRoundId("all")}
                className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                  selectedRoundId === "all"
                    ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                    : "bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08]"
                }`}
              >
                All Rounds
              </button>
              {rounds.map((round) => (
                <button
                  key={round.id}
                  type="button"
                  onClick={() => setSelectedRoundId(round.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                    selectedRoundId === round.id
                      ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                      : "bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08]"
                  }`}
                >
                  {round.name}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔍 Search fighter, verse..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold outline-none focus:border-red-500 text-white"
              />
            </div>
          </div>

          {/* Region Tabs (if field >= 64) */}
          {regions.length > 1 && (
            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-3">
              <span className="self-center text-[10px] font-black uppercase text-zinc-600 mr-2">
                Region:
              </span>
              <button
                type="button"
                onClick={() => setSelectedRegionId("all")}
                className={`rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition ${
                  selectedRegionId === "all"
                    ? "bg-white/20 text-white"
                    : "bg-white/[0.03] text-zinc-500 hover:bg-white/[0.06]"
                }`}
              >
                All Regions
              </button>
              {regions.map((reg) => (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => setSelectedRegionId(reg.id)}
                  className={`rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition ${
                    selectedRegionId === reg.id
                      ? "bg-red-500/20 text-red-300 border border-red-500/40"
                      : "bg-white/[0.03] text-zinc-500 hover:bg-white/[0.06]"
                  }`}
                >
                  {reg.name}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* BRACKET ROUNDS & MATCH NODES */}
        <div className="space-y-8">
          {visibleRounds.map((round) => (
            <section key={round.id} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">{round.name}</h3>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {round.matches.length} Matches • {round.entrants} Entrants
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {round.matches.map((match) => {
                  const leftChar = resolveCharacter(match.left);
                  const rightChar = resolveCharacter(match.right);
                  const isReady = match.status === "ready";
                  const isDone = match.status === "completed";
                  const isLocked = match.status === "locked";

                  const winnerId = match.winner?.characterId;

                  return (
                    <div
                      key={match.id}
                      onClick={() => isReady && onOpenMatch?.(match)}
                      className={`relative overflow-hidden rounded-2xl border p-4 transition ${
                        isReady
                          ? "border-red-500/60 bg-red-950/20 hover:border-red-400 hover:bg-red-950/30 cursor-pointer shadow-lg shadow-red-500/10"
                          : isDone
                          ? "border-white/10 bg-black/40 opacity-80"
                          : "border-white/5 bg-black/20 opacity-50"
                      }`}
                    >
                      {/* Match Node Header */}
                      <div className="mb-3 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-zinc-500">
                        <span>Match #{match.order}</span>
                        <span
                          className={`rounded-md px-2 py-0.5 font-bold ${
                            isReady
                              ? "bg-red-500/20 text-red-300 animate-pulse"
                              : isDone
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-white/5 text-zinc-600"
                          }`}
                        >
                          {match.status}
                        </span>
                      </div>

                      {/* Fighter 1 (Left) */}
                      <div
                        className={`flex items-center justify-between rounded-xl p-2.5 mb-1.5 transition ${
                          isDone && winnerId === leftChar?.id
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                            : isDone
                            ? "bg-black/40 opacity-40 line-through text-zinc-600"
                            : "bg-black/30 text-zinc-300"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="truncate text-xs font-black">
                            {leftChar ? leftChar.name : "Waiting..."}
                          </p>
                          {leftChar?.selectedForm && (
                            <p className="truncate text-[8px] font-bold text-zinc-500">
                              {leftChar.selectedForm.name}
                            </p>
                          )}
                        </div>
                        {isDone && match.result?.leftScore !== undefined && (
                          <span className="text-xs font-black">{match.result.leftScore}</span>
                        )}
                      </div>

                      {/* Fighter 2 (Right) */}
                      <div
                        className={`flex items-center justify-between rounded-xl p-2.5 transition ${
                          isDone && winnerId === rightChar?.id
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                            : isDone
                            ? "bg-black/40 opacity-40 line-through text-zinc-600"
                            : "bg-black/30 text-zinc-300"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="truncate text-xs font-black">
                            {rightChar ? rightChar.name : "Waiting..."}
                          </p>
                          {rightChar?.selectedForm && (
                            <p className="truncate text-[8px] font-bold text-zinc-500">
                              {rightChar.selectedForm.name}
                            </p>
                          )}
                        </div>
                        {isDone && match.result?.rightScore !== undefined && (
                          <span className="text-xs font-black">{match.result.rightScore}</span>
                        )}
                      </div>

                      {/* Ready Action Prompt */}
                      {isReady && (
                        <div className="mt-3 text-center text-[10px] font-black uppercase text-red-400 tracking-widest">
                          ▶ Click to Fight / Vote
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}