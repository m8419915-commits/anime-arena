import React, { useEffect, useMemo, useState } from "react";
import { getTournamentCharacter } from "../engine/tournamentDatabase";
import { executeTournamentMatch } from "../engine/tournamentMatchController";
import { createMatchVote } from "../engine/matchVotingEngine";
import { tournamentAudio } from "../audio/tournamentAudio";
import TournamentCard from "./TournamentCard";

function getCharacter(reference) {
  if (!reference || reference.type !== "character") return null;
  return getTournamentCharacter(reference.characterId);
}

function getForm(character, formId) {
  if (!character) return null;
  return character.forms?.find((form) => form.id === formId) || character.forms?.[0];
}

export default function TournamentMatch({
  tournament,
  match,
  players = [],
  onTournamentUpdate,
  onBack,
}) {
  const [battle, setBattle] = useState(null);
  const [votes, setVotes] = useState({});
  const [phase, setPhase] = useState("preview"); // "preview", "clash", "vote", "complete"
  const [error, setError] = useState("");
  const [isUpset, setIsUpset] = useState(false);

  useEffect(() => {
    tournamentAudio.playMatchStart();
  }, []);

  const leftCharacter = useMemo(() => getCharacter(match?.left), [match]);
  const rightCharacter = useMemo(() => getCharacter(match?.right), [match]);
  const leftForm = getForm(leftCharacter, match?.left?.formId);
  const rightForm = getForm(rightCharacter, match?.right?.formId);

  if (!match) {
    return (
      <div className="min-h-screen bg-[#050507] p-8 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-black">No Match Selected</h2>
          <button type="button" onClick={onBack} className="mt-4 rounded-xl bg-red-600 px-6 py-2">
            ← Back
          </button>
        </div>
      </div>
    );
  }

  function handleStartClash() {
    tournamentAudio.playVersusClash(); // ⚔️ Epic Metal Blade Clash + Sub-Bass Boom!
    setError("");
    setPhase("clash");

    setTimeout(() => {
      const result = executeTournamentMatch({
        tournament,
        matchId: match.id,
      });

      if (!result.success) {
        setError(result.error || "Battle calculation failed.");
        setPhase("preview");
        return;
      }

      setBattle(result.battle);
      setPhase("vote");
    }, 1200);
  }

  function handleVote(playerId, side) {
    tournamentAudio.playVote();
    setVotes((curr) => ({
      ...curr,
      [playerId]: side,
    }));
  }

  const voteCounts = useMemo(() => {
    return Object.values(votes).reduce(
      (acc, side) => {
        if (side === "left") acc.left++;
        if (side === "right") acc.right++;
        return acc;
      },
      { left: 0, right: 0 }
    );
  }, [votes]);

  const allVoted = players.length > 0 && players.every((p) => votes[p.id]);

  function handleConfirmWinner() {
    if (!allVoted) {
      setError("Every participating player must cast their vote!");
      return;
    }
    if (voteCounts.left === voteCounts.right) {
      setError("Vote is tied! Use the tie-breaker to decide the winner.");
      return;
    }

    const officialWinner = voteCounts.left > voteCounts.right ? "left" : "right";
    const winnerChar = officialWinner === "left" ? leftCharacter : rightCharacter;
    const loserChar = officialWinner === "left" ? rightCharacter : leftCharacter;

    // Upset Detection Check
    const isMajorUpset =
      battle?.winner && battle.winner !== officialWinner;

    setIsUpset(isMajorUpset);

    if (isMajorUpset) {
      tournamentAudio.playUpset();
    } else {
      tournamentAudio.playVictory();
    }

    const voteResult = createMatchVote({
      matchId: match.id,
      votes,
      officialWinner,
    });

    onTournamentUpdate?.({
      matchId: match.id,
      officialWinner,
      votes,
      voteResult,
      battle,
    });

    setPhase("complete");
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white px-4 py-6 md:px-8 font-sans">
      <div className="mx-auto max-w-[1500px]">
        {/* MATCH HEADER */}
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
              {match.roundName}
            </span>
            <h1 className="text-2xl font-black">Official Match #{match.order}</h1>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-black text-zinc-400 hover:text-white"
          >
            ← Back to Bracket
          </button>
        </header>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/40 bg-red-950/40 p-4 text-center text-sm font-bold text-red-300">
            {error}
          </div>
        )}

        {/* FIGHTERS SHOWCASE (GOLDEN VERTICAL CARD RATIO — FULL HEAD & BODY FRAMED) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 my-6">
          <div className="w-full max-w-[420px]">
            <TournamentCard
              character={leftCharacter}
              form={leftForm}
              isWinner={phase === "complete" && voteCounts.left > voteCounts.right}
              isLoser={phase === "complete" && voteCounts.left < voteCounts.right}
            />
          </div>

          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/40 bg-red-950/40 text-xl font-black text-red-400 shadow-2xl animate-pulse">
              VS
            </div>
          </div>

          <div className="w-full max-w-[420px]">
            <TournamentCard
              character={rightCharacter}
              form={rightForm}
              isWinner={phase === "complete" && voteCounts.right > voteCounts.left}
              isLoser={phase === "complete" && voteCounts.right < voteCounts.left}
            />
          </div>
        </div>
        {/* PHASE 1: PREVIEW */}
        {phase === "preview" && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={handleStartClash}
              className="group relative overflow-hidden rounded-2xl bg-red-600 px-12 py-5 text-lg font-black uppercase tracking-wider text-white shadow-2xl shadow-red-600/40 transition hover:bg-red-500 active:scale-95"
            >
              ⚔️ INITIATE BATTLE ANALYSIS
            </button>
          </div>
        )}

        {/* PHASE 2: CLASH ANIMATION */}
        {phase === "clash" && (
          <div className="mt-10 rounded-3xl border border-red-500/30 bg-red-950/20 p-8 text-center">
            <div className="text-4xl animate-bounce">⚡</div>
            <h3 className="mt-2 text-2xl font-black text-red-400 animate-pulse">
              ANALYZING TACTICAL COMBAT MATRIX...
            </h3>
          </div>
        )}

        {/* PHASE 3: GEMINI AI VERDICT & PLAYER VOTING */}
        {phase === "vote" && battle && (
          <div className="mt-10 space-y-8 max-w-5xl mx-auto">
            {/* AI Recommendation Spotlight */}
            <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/30 via-black to-black p-6">
              <span className="rounded-full bg-purple-500/20 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-purple-300">
                🤖 Gemini Tactical Scouting
              </span>
              <h3 className="mt-3 text-2xl font-black">
                Predicted Advantage:{" "}
                <span className="text-yellow-400">
                  {battle.winner === "left" ? leftCharacter?.name : rightCharacter?.name}
                </span>
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {battle.summary || "Calculations favor the fighter with superior offensive scaling."}
              </p>
            </div>

            {/* Player Voting Panel */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-black text-center">Cast Player Votes</h3>
              <p className="text-xs text-zinc-500 text-center mt-1">
                Gemini suggests, but your votes make the official winner!
              </p>

              <div className="mt-6 space-y-3">
                {players.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-2xl bg-black/40 p-4 border border-white/5">
                    <span className="font-black text-sm">{p.name}</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleVote(p.id, "left")}
                        className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                          votes[p.id] === "left"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "bg-white/5 text-zinc-400 hover:bg-white/10"
                        }`}
                      >
                        Vote {leftCharacter?.name}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleVote(p.id, "right")}
                        className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                          votes[p.id] === "right"
                            ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                            : "bg-white/5 text-zinc-400 hover:bg-white/10"
                        }`}
                      >
                        Vote {rightCharacter?.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vote Count Indicator */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-blue-950/30 p-3 border border-blue-500/20">
                  <p className="text-xs text-blue-300 font-bold">{leftCharacter?.name}</p>
                  <p className="text-2xl font-black mt-1">{voteCounts.left} Votes</p>
                </div>
                <div className="rounded-2xl bg-red-950/30 p-3 border border-red-500/20">
                  <p className="text-xs text-red-300 font-bold">{rightCharacter?.name}</p>
                  <p className="text-2xl font-black mt-1">{voteCounts.right} Votes</p>
                </div>
              </div>

              <button
                type="button"
                disabled={!allVoted}
                onClick={handleConfirmWinner}
                className="mt-6 w-full rounded-2xl bg-red-600 py-4 font-black uppercase text-white shadow-xl shadow-red-600/30 hover:bg-red-500 disabled:opacity-30"
              >
                Confirm Official Winner & Advance →
              </button>
            </div>
          </div>
        )}

        {/* PHASE 4: VICTORY & UPSET REVEAL */}
        {phase === "complete" && (
          <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center max-w-3xl mx-auto shadow-2xl">
            {isUpset && (
              <span className="inline-block mb-3 rounded-full bg-red-600 px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-red-600/40 animate-pulse">
                🚨 UPSET OF THE TOURNAMENT! 🚨
              </span>
            )}
            <span className="text-5xl block">🏆</span>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-emerald-400">
              Official Winner Advanced
            </p>
            <h2 className="mt-2 text-4xl font-black">
              {voteCounts.left > voteCounts.right ? leftCharacter?.name : rightCharacter?.name}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              The fighter moves into the next round of the Grand Tournament bracket!
            </p>

            <button
              type="button"
              onClick={onBack}
              className="mt-6 rounded-2xl bg-emerald-600 px-8 py-3.5 text-xs font-black uppercase text-white hover:bg-emerald-500"
            >
              Return to Live Bracket →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}