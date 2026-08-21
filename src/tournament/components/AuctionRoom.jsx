/************************************************************
 * Anime Arena — Grand Tournament
 * Advanced Live Auction Room
 *
 * File:
 * src/tournament/components/AuctionRoom.jsx
 *
 * IMPORTANT:
 * Auction logic lives in:
 * src/tournament/engine/auctionEngine.js
 *
 * This file is UI-only.
 ************************************************************/

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import TournamentCard from "./TournamentCard";

import {
  getActiveBidders,
  getAuctionSummary,
  getSkipVoteRequirement,
  passAuction,
  placeAuctionBid,
  quickBid,
  sellCurrentCharacter,
  startNextAuction,
  voteSkipAuction,
} from "../engine/auctionEngine";

import { resolveCharacterArtwork } from "../data/tournamentImageResolver";


/* =========================================================
   FORMATTERS
========================================================= */

const MONEY_FORMATTER =
  new Intl.NumberFormat("en-IN");

function formatMoney(value) {
  return `₹${MONEY_FORMATTER.format(
    Number(value) || 0
  )}`;
}


/* =========================================================
   SAFE ARRAY
========================================================= */

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}


/* =========================================================
   COMPONENT
========================================================= */

export default function AuctionRoom({
  initialAuction,
  onComplete,
  onBack,
}) {

  /* =======================================================
     INITIAL AUCTION
  ======================================================= */

  const [auction, setAuction] = useState(() => {

    if (!initialAuction) {
      return null;
    }

    /*
      If AuctionRoom receives an auction that has not
      opened its first lot yet, open it here.
    */
    const alreadyStarted =
      Boolean(
        initialAuction.currentCharacter
      );

    if (alreadyStarted) {
      return {
        ...initialAuction,

        skipVotes: safeArray(
          initialAuction.skipVotes
        ),

        passedPlayerIds: safeArray(
          initialAuction.passedPlayerIds
        ),

        auctionHistory: safeArray(
          initialAuction.auctionHistory
        ),

        players: safeArray(
          initialAuction.players
        ),
      };
    }

    const result =
      startNextAuction(
        initialAuction
      );

    if (!result?.success) {
      return {
        ...initialAuction,

        skipVotes: safeArray(
          initialAuction.skipVotes
        ),

        passedPlayerIds: safeArray(
          initialAuction.passedPlayerIds
        ),

        auctionHistory: safeArray(
          initialAuction.auctionHistory
        ),

        players: safeArray(
          initialAuction.players
        ),
      };
    }

    return {
      ...result.auction,

      skipVotes: safeArray(
        result.auction?.skipVotes
      ),

      passedPlayerIds: safeArray(
        result.auction?.passedPlayerIds
      ),

      auctionHistory: safeArray(
        result.auction?.auctionHistory
      ),

      players: safeArray(
        result.auction?.players
      ),
    };
  });


  /* =======================================================
     UI STATE
  ======================================================= */

  const [
    selectedPlayerId,
    setSelectedPlayerId,
  ] = useState(
    initialAuction?.players?.[0]?.id || ""
  );

  const [
    customBid,
    setCustomBid,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    activeFormIndex,
    setActiveFormIndex,
  ] = useState(0);

  const [
    resolvedArtUrl,
    setResolvedArtUrl,
  ] = useState("");


  /* =======================================================
     CURRENT CHARACTER
  ======================================================= */

  const currentChar =
    auction?.currentCharacter || null;


  const currentForms =
    Array.isArray(
      currentChar?.forms
    )
      ? currentChar.forms
      : [];


  /*
    Clamp active form index so malformed character data
    cannot create undefined active forms.
  */
  const safeFormIndex =
    currentForms.length > 0
      ? Math.min(
          Math.max(
            activeFormIndex,
            0
          ),
          currentForms.length - 1
        )
      : 0;


  const currentActiveForm =
    currentForms[safeFormIndex] ||
    currentForms[0] ||
    null;


  /* =======================================================
     SAFE AUCTION ARRAYS
  ======================================================= */

  const skipVotes =
    safeArray(
      auction?.skipVotes
    );

  const passedPlayerIds =
    safeArray(
      auction?.passedPlayerIds
    );

  const players =
    safeArray(
      auction?.players
    );


  /* =======================================================
     ARTWORK
  ======================================================= */

  useEffect(() => {

    let mounted = true;

    async function resolveArt() {

      if (!currentChar) {
        if (mounted) {
          setResolvedArtUrl("");
        }

        return;
      }

      try {

        const artwork =
          await resolveCharacterArtwork(
            currentChar,
            currentActiveForm
          );

        if (mounted) {
          setResolvedArtUrl(
            artwork || ""
          );
        }

      } catch {
        if (mounted) {
          setResolvedArtUrl("");
        }
      }
    }

    resolveArt();

    return () => {
      mounted = false;
    };

  }, [
    currentChar?.characterId,
    currentChar?.id,
    currentActiveForm?.formId,
    currentActiveForm?.id,
  ]);


  /* =======================================================
     RESET UI WHEN LOT CHANGES
  ======================================================= */

  useEffect(() => {

    setActiveFormIndex(0);
    setCustomBid("");
    setError("");

  }, [
    currentChar?.characterId,
    currentChar?.id,
  ]);


  /* =======================================================
     KEEP SELECTED PLAYER VALID
  ======================================================= */

  useEffect(() => {

    if (!players.length) {
      setSelectedPlayerId("");
      return;
    }

    const selectedStillExists =
      players.some(
        (player) =>
          String(player.id) ===
          String(selectedPlayerId)
      );

    if (!selectedStillExists) {

      const firstActive =
        players.find(
          (player) =>
            !player.rosterLocked
        );

      setSelectedPlayerId(
        firstActive?.id ||
        players[0]?.id ||
        ""
      );
    }

  }, [
    players,
    selectedPlayerId,
  ]);


  /* =======================================================
     SUMMARY
  ======================================================= */

  const summary = useMemo(
    () =>
      getAuctionSummary(
        auction
      ),
    [auction]
  );


  /* =======================================================
     ACTIVE BIDDERS
  ======================================================= */

  const activeBidders =
    getActiveBidders(
      auction
    );


  /* =======================================================
     HIGHEST BIDDER
  ======================================================= */

  const highestBidder =
    players.find(
      (player) =>
        String(player.id) ===
        String(
          auction?.highestBidderId
        )
    ) || null;


  const highestBidderName =
    highestBidder?.name || null;


  /* =======================================================
     SELECTED PLAYER
  ======================================================= */

  const selectedPlayer =
    players.find(
      (player) =>
        String(player.id) ===
        String(selectedPlayerId)
    ) || null;


  /* =======================================================
     SKIP VOTE SYSTEM
  ======================================================= */

  const totalPlayers =
    players.length;

  /*
    IMPORTANT:
    Use the ENGINE'S requirement.

    Do NOT calculate majority from total players here,
    because roster-locked players are no longer active.
  */
  const requiredSkipVotes =
    getSkipVoteRequirement(
      auction
    );

  const currentSkipVotes =
    skipVotes.length;

  const hasCurrentPlayerVotedSkip =
    skipVotes.some(
      (id) =>
        String(id) ===
        String(selectedPlayerId)
    );


  /* =======================================================
     COMMON AUCTION STATE
  ======================================================= */

  const hasCurrentCharacter =
    Boolean(
      currentChar
    );

  const hasBid =
    Boolean(
      auction?.highestBidderId
    );

  const currentBid =
    Number(
      auction?.currentBid
    ) || 0;

  const minimumBid =
    currentBid + 1;


  /* =======================================================
     APPLY AUCTION STATE SAFELY
  ======================================================= */

  function applyAuctionState(nextAuction) {

    if (!nextAuction) {
      return;
    }

    setAuction({
      ...nextAuction,

      skipVotes:
        safeArray(
          nextAuction.skipVotes
        ),

      passedPlayerIds:
        safeArray(
          nextAuction.passedPlayerIds
        ),

      auctionHistory:
        safeArray(
          nextAuction.auctionHistory
        ),

      players:
        safeArray(
          nextAuction.players
        ),
    });
  }


  /* =======================================================
     COMPLETE AUCTION
  ======================================================= */

  function completeAuction(
    finalAuction,
    successMessage
  ) {

    applyAuctionState(
      finalAuction
    );

    setError("");

    setMessage(
      successMessage ||
      "🏁 Auction completed."
    );

    /*
      Delay is intentionally NOT used.
      Parent gets the exact final state immediately.
    */
    onComplete?.(
      finalAuction
    );
  }


  /* =======================================================
     MOVE TO NEXT LOT
  ======================================================= */

  function moveToNextAuction(
    finishedAuction,
    successMessage
  ) {

    const result =
      startNextAuction(
        finishedAuction
      );

    if (!result?.success) {

      setError(
        result?.error ||
        "Could not open the next auction."
      );

      setMessage("");

      return false;
    }

    /*
      Auction engine can report that the auction has
      completed or entered roster-lock phase.
    */
    if (
      result.completed ||
      result.auction?.status ===
        "completed" ||
      result.auction?.status ===
        "roster_lock"
    ) {

      completeAuction(
        result.auction,
        result.auction?.status ===
          "roster_lock"
          ? "🔒 All rosters are locked."
          : "🏆 AUCTION COMPLETE!"
      );

      return true;
    }

    applyAuctionState(
      result.auction
    );

    setActiveFormIndex(0);
    setCustomBid("");
    setError("");

    setMessage(
      successMessage ||
      "Next fighter is on the block."
    );

    return true;
  }


  /* =======================================================
     BID
  ======================================================= */

  function handleBid(amount) {

    if (!selectedPlayerId) {
      setError(
        "Select a player first."
      );

      setMessage("");

      return;
    }

    const numericAmount =
      Number(amount);

    if (
      !Number.isFinite(
        numericAmount
      )
    ) {

      setError(
        "Enter a valid bid amount."
      );

      setMessage("");

      return;
    }

    const result =
      placeAuctionBid({
        auction,
        playerId:
          selectedPlayerId,
        bidAmount:
          numericAmount,
      });

    if (!result?.success) {

      setError(
        result?.error ||
        "Bid rejected."
      );

      setMessage("");

      return;
    }

    applyAuctionState(
      result.auction
    );

    setCustomBid("");
    setError("");

    setMessage(
      `🔨 ${
        selectedPlayer?.name ||
        "Player"
      } bid ${formatMoney(
        numericAmount
      )}`
    );
  }


  /* =======================================================
     QUICK BID
  ======================================================= */

  function handleQuick(
    increment
  ) {

    if (!selectedPlayerId) {
      setError(
        "Select a player first."
      );

      setMessage("");

      return;
    }

    const safeIncrement =
      Number(increment);

    if (
      !Number.isFinite(
        safeIncrement
      ) ||
      safeIncrement <= 0
    ) {

      setError(
        "Invalid quick-bid increment."
      );

      setMessage("");

      return;
    }

    const result =
      quickBid({
        auction,
        playerId:
          selectedPlayerId,
        increment:
          safeIncrement,
      });

    if (!result?.success) {

      setError(
        result?.error ||
        "Quick bid rejected."
      );

      setMessage("");

      return;
    }

    applyAuctionState(
      result.auction
    );

    setCustomBid("");
    setError("");

    setMessage(
      `⚡ ${
        selectedPlayer?.name ||
        "Player"
      } raised by +${formatMoney(
        safeIncrement
      )}`
    );
  }


  /* =======================================================
     PASS
  ======================================================= */

  function handlePassTurn() {

    if (!selectedPlayerId) {
      setError(
        "Select a player first."
      );

      setMessage("");

      return;
    }

    const result =
      passAuction({
        auction,
        playerId:
          selectedPlayerId,
      });

    if (!result?.success) {

      setError(
        result?.error ||
        "Unable to pass."
      );

      setMessage("");

      return;
    }

    /*
      IMPORTANT:
      The engine may automatically finish the lot when:
      • everyone passes
      • only the highest bidder remains
    */
    const nextAuction =
      result.auction;

    if (
      nextAuction?.currentCharacter ===
        null &&
      nextAuction?.completedCharacters >
        (auction?.completedCharacters || 0)
    ) {

      moveToNextAuction(
        nextAuction,
        nextAuction.status ===
          "completed"
          ? "🏁 Auction completed."
          : "🚫 Lot closed — next fighter incoming."
      );

      return;
    }

    applyAuctionState(
      nextAuction
    );

    setError("");

    setMessage(
      `🚫 ${
        selectedPlayer?.name ||
        "Player"
      } passed.`
    );
  }


  /* =======================================================
     SOLD
  ======================================================= */

  function handleSellCard() {

    if (!auction?.highestBidderId) {

      setError(
        "Nobody has placed a bid on this character yet."
      );

      setMessage("");

      return;
    }

    const result =
      sellCurrentCharacter(
        auction
      );

    if (!result?.success) {

      setError(
        result?.error ||
        "Could not sell this character."
      );

      setMessage("");

      return;
    }

    /*
      finishAuction clears currentCharacter.
      Then immediately open the next lot.
    */
    moveToNextAuction(
      result.auction,
      "🏆 SOLD! Next fighter is on the block."
    );
  }


  /* =======================================================
     DEMOCRATIC SKIP
  ======================================================= */

  function handleSkipVote() {

    if (!selectedPlayerId) {
      setError(
        "Select a player first."
      );

      setMessage("");

      return;
    }

    const result =
      voteSkipAuction(
        auction,
        selectedPlayerId
      );

    if (!result?.success) {

      setError(
        result?.error ||
        "Skip vote rejected."
      );

      setMessage("");

      return;
    }

    const nextAuction =
      result.auction;

    /*
      Majority reached.

      Engine has already:
      • marked the character unsold
      • incremented completedCharacters
      • cleared currentCharacter
    */
    const lotWasSkipped =
      nextAuction?.currentCharacter ===
        null &&
      nextAuction?.completedCharacters >
        (auction?.completedCharacters || 0);

    if (lotWasSkipped) {

      moveToNextAuction(
        nextAuction,
        "🗳 SKIPPED by democratic vote — next fighter incoming."
      );

      return;
    }

    applyAuctionState(
      nextAuction
    );

    setError("");

    const votes =
      safeArray(
        nextAuction?.skipVotes
      ).length;

    const required =
      getSkipVoteRequirement(
        nextAuction
      );

    setMessage(
      `🗳 ${
        selectedPlayer?.name ||
        "Player"
      } voted SKIP — ${votes}/${required} votes`
    );
  }


  /* =======================================================
     BACK / FINISH EARLY
  ======================================================= */

  function handleFinishEarly() {

    /*
      We intentionally don't mutate auction state here.
      Parent decides whether finishing early is allowed.
    */
    onBack?.();
  }


  /* =======================================================
     NO AUCTION STATE
  ======================================================= */

  if (!auction) {

    return (
      <div className="min-h-screen bg-[#06080d] p-8 text-white flex items-center justify-center">

        <div className="text-center">

          <span className="text-6xl mb-4 block">
            ⚠️
          </span>

          <h2 className="text-2xl font-black">
            Auction State Missing
          </h2>

          <p className="text-zinc-500 text-sm mt-2">
            The auction could not be initialized.
          </p>

          <button
            onClick={onBack}
            className="mt-5 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold"
          >
            Go Back
          </button>

        </div>

      </div>
    );
  }


  /* =======================================================
     AUCTION FINISHED / NO CURRENT CHARACTER
  ======================================================= */

  if (!hasCurrentCharacter) {

    const rosterLock =
      auction.status ===
        "roster_lock" ||
      auction.rosterLockPhase;

    return (
      <div className="min-h-screen bg-[#06080d] p-8 text-white flex items-center justify-center">

        <div className="text-center">

          <span className="text-6xl mb-4 block">
            {rosterLock ? "🔒" : "🏆"}
          </span>

          <h2 className="text-2xl font-black">
            {rosterLock
              ? "Rosters Locked"
              : "Auction Phase Finalized"}
          </h2>

          <p className="text-zinc-500 text-sm mt-2">
            {rosterLock
              ? "All active players have completed their auction phase."
              : "All available fighters have been processed."}
          </p>

          <div className="mt-5 flex justify-center gap-3">

            <button
              onClick={() =>
                onComplete?.(
                  auction
                )
              }
              className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold"
            >
              Proceed to Roster Review →
            </button>

          </div>

        </div>

      </div>
    );
  }


  /* =======================================================
     UI
  ======================================================= */

  return (

    <div className="min-h-screen bg-[#05070c] text-white select-none">


      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#05070c]/90 backdrop-blur-xl px-6 py-4">

        <div className="max-w-[1580px] mx-auto flex justify-between items-center">

          <div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
              ANIME ARENA
            </span>

            <h1 className="text-xl font-black uppercase tracking-wide">
              Grand Auction Room
            </h1>

            <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-1">
              Live Character Draft • Canon Protected
            </p>

          </div>


          <div className="flex items-center gap-3">

            <div className="hidden md:block text-right bg-zinc-900/60 px-4 py-1.5 rounded-xl border border-zinc-800">

              <span className="text-[9px] uppercase tracking-widest text-zinc-500 block">
                Lot
              </span>

              <span className="font-mono font-black text-sm text-red-400">
                #{auction.currentAuctionNumber || 1}
              </span>

            </div>


            <div className="text-right bg-zinc-900/60 px-4 py-1.5 rounded-xl border border-zinc-800">

              <span className="text-[9px] uppercase tracking-widest text-zinc-500 block">
                Progress
              </span>

              <span className="font-mono font-black text-sm">
                {summary.completedCharacters}
                {" / "}
                {summary.totalCharacters}
              </span>

            </div>


            <button
              onClick={
                handleFinishEarly
              }
              className="text-xs font-bold text-zinc-400 hover:text-white px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              Finish Early →
            </button>

          </div>

        </div>

      </header>


      {/* ===================================================
          MAIN
      =================================================== */}

      <main className="max-w-[1580px] mx-auto p-6 space-y-6">


        {/* =================================================
            LIVE STATUS BAR
        ================================================= */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">

          <div className="bg-[#080c14] border border-zinc-800 rounded-xl p-3">

            <span className="text-[8px] uppercase tracking-widest text-zinc-500">
              Character
            </span>

            <div className="font-black text-sm truncate mt-1">
              {currentChar.name ||
                currentChar.canonName ||
                "Unknown"}
            </div>

          </div>


          <div className="bg-[#080c14] border border-zinc-800 rounded-xl p-3">

            <span className="text-[8px] uppercase tracking-widest text-zinc-500">
              Current Bid
            </span>

            <div className="font-mono font-black text-sm text-red-400 mt-1">
              {formatMoney(
                currentBid
              )}
            </div>

          </div>


          <div className="bg-[#080c14] border border-zinc-800 rounded-xl p-3">

            <span className="text-[8px] uppercase tracking-widest text-zinc-500">
              Highest Bidder
            </span>

            <div className="font-black text-sm text-emerald-400 truncate mt-1">
              {highestBidderName ||
                "No bids yet"}
            </div>

          </div>


          <div className="bg-[#080c14] border border-zinc-800 rounded-xl p-3">

            <span className="text-[8px] uppercase tracking-widest text-zinc-500">
              Active Bidders
            </span>

            <div className="font-mono font-black text-sm text-cyan-400 mt-1">
              {activeBidders.length}
            </div>

          </div>


          <div className="bg-[#080c14] border border-zinc-800 rounded-xl p-3">

            <span className="text-[8px] uppercase tracking-widest text-zinc-500">
              Skip Vote
            </span>

            <div className="font-mono font-black text-sm text-yellow-400 mt-1">
              {currentSkipVotes}
              {" / "}
              {requiredSkipVotes}
            </div>

          </div>

        </div>


        {/* =================================================
            MESSAGE / ERROR
        ================================================= */}

        {(error || message) && (

          <div
            className={`p-3.5 rounded-xl text-xs font-bold border ${
              error
                ? "bg-red-950/70 border-red-600 text-red-200"
                : "bg-emerald-950/70 border-emerald-600 text-emerald-200"
            }`}
          >
            {error || message}
          </div>

        )}


        {/* =================================================
            MAIN THREE COLUMN AREA
        ================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_320px] gap-6 items-start">


          {/* =================================================
              CHARACTER CARD
          ================================================= */}

          <div className="flex flex-col items-center">

            <TournamentCard
              character={currentChar}
              activeForm={
                currentActiveForm
              }
              customImageUrl={
                resolvedArtUrl
              }
              size="large"
              showStats={true}
            />


            {currentForms.length > 1 && (

              <div className="mt-3 flex flex-wrap gap-1.5 justify-center max-w-[340px]">

                {currentForms.map(
                  (
                    form,
                    index
                  ) => (

                    <button
                      key={
                        form.formId ||
                        form.id ||
                        index
                      }
                      onClick={() =>
                        setActiveFormIndex(
                          index
                        )
                      }
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold border transition ${
                        safeFormIndex ===
                        index
                          ? "bg-red-600 border-red-400 text-white shadow-md shadow-red-600/30"
                          : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {form.name ||
                        form.formName ||
                        `Form ${index + 1}`}
                    </button>

                  )
                )}

              </div>

            )}

          </div>


          {/* =================================================
              AUCTION CENTER
          ================================================= */}

          <div className="space-y-5">


            <div className="bg-[#080c14] border border-zinc-800 rounded-2xl p-6 text-center shadow-xl">

              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono uppercase pb-2 border-b border-zinc-800/60">

                <span>
                  LOT #
                  {auction.currentAuctionNumber || 1}
                </span>

                <span className="text-emerald-400 font-bold">

                  EST. M.P.:
                  {" "}

                  {formatMoney(
                    currentChar?.marketPrice ||
                    45000
                  )}

                </span>

              </div>


              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 block mt-4">
                CURRENT HIGHEST BID
              </span>


              <div className="text-6xl md:text-7xl font-black text-red-500 font-mono my-2 tracking-tight drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">

                {formatMoney(
                  currentBid ||
                  100
                )}

              </div>


              <p className="text-xs text-zinc-400 font-medium">

                {highestBidderName ? (

                  <>
                    Leader:
                    {" "}

                    <span className="text-white font-bold">
                      {highestBidderName}
                    </span>
                  </>

                ) : (

                  "OPENING BID • MINIMUM ₹100"

                )}

              </p>


              {/* QUICK BID */}

              <div className="flex flex-wrap gap-2 justify-center mt-5">

                {[500, 1000, 2000, 5000, 10000].map(
                  (increment) => (

                    <button
                      key={
                        increment
                      }
                      onClick={() =>
                        handleQuick(
                          increment
                        )
                      }
                      disabled={
                        !selectedPlayer ||
                        selectedPlayer.rosterLocked ||
                        passedPlayerIds.includes(
                          selectedPlayer.id
                        )
                      }
                      className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500 text-xs font-black transition hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      +
                      {formatMoney(
                        increment
                      )}
                    </button>

                  )
                )}

              </div>

            </div>


            {/* =================================================
                LIVE AUCTION INTEL
            ================================================= */}

            <div className="bg-[#080c14] border border-zinc-800 rounded-2xl p-5 shadow-xl">

              <div className="flex justify-between items-center mb-3">

                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  LIVE AUCTION INTEL
                </span>

                <span className="text-[9px] text-emerald-400 font-bold uppercase">
                  ● LIVE
                </span>

              </div>


              <div className="grid grid-cols-2 gap-2">

                <div className="bg-black/40 border border-zinc-800 rounded-lg p-3">

                  <span className="text-[8px] text-zinc-500 uppercase">
                    Sold
                  </span>

                  <div className="font-black text-emerald-400 mt-1">
                    {summary.soldCharacters}
                  </div>

                </div>


                <div className="bg-black/40 border border-zinc-800 rounded-lg p-3">

                  <span className="text-[8px] text-zinc-500 uppercase">
                    Unsold
                  </span>

                  <div className="font-black text-yellow-400 mt-1">
                    {summary.unsoldCharacters}
                  </div>

                </div>


                <div className="bg-black/40 border border-zinc-800 rounded-lg p-3">

                  <span className="text-[8px] text-zinc-500 uppercase">
                    Remaining
                  </span>

                  <div className="font-black text-cyan-400 mt-1">
                    {summary.remainingCharacters}
                  </div>

                </div>


                <div className="bg-black/40 border border-zinc-800 rounded-lg p-3">

                  <span className="text-[8px] text-zinc-500 uppercase">
                    Total Players
                  </span>

                  <div className="font-black text-purple-400 mt-1">
                    {totalPlayers}
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              CONTENDERS
          ================================================= */}

          <div className="bg-[#080c14] border border-zinc-800 rounded-2xl p-5 shadow-xl space-y-3">

            <div className="flex justify-between items-center mb-2">

              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                CONTENDERS
              </span>

              <span className="text-[9px] text-zinc-600">
                {activeBidders.length}
                {" "}ACTIVE
              </span>

            </div>


            {players.map(
              (player) => {

                const isSelected =
                  String(
                    selectedPlayerId
                  ) ===
                  String(
                    player.id
                  );

                const isLeading =
                  String(
                    auction.highestBidderId
                  ) ===
                  String(
                    player.id
                  );

                const isPassed =
                  passedPlayerIds.some(
                    (id) =>
                      String(id) ===
                      String(
                        player.id
                      )
                  );

                const votedSkip =
                  skipVotes.some(
                    (id) =>
                      String(id) ===
                      String(
                        player.id
                      )
                  );

                const isLocked =
                  Boolean(
                    player.rosterLocked
                  );


                return (

                  <div
                    key={
                      player.id
                    }
                    onClick={() => {

                      if (
                        !isPassed &&
                        !isLocked
                      ) {
                        setSelectedPlayerId(
                          player.id
                        );
                      }

                    }}
                    className={`p-3.5 rounded-xl border transition ${
                      !isPassed &&
                      !isLocked
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } ${
                      isSelected
                        ? "border-red-500 bg-red-950/20"
                        : "border-zinc-800/80 bg-black/40 hover:border-zinc-700"
                    } ${
                      isPassed ||
                      isLocked
                        ? "opacity-45"
                        : ""
                    }`}
                  >

                    <div className="flex justify-between items-center">

                      <span className="font-black text-sm">
                        {player.name}
                      </span>


                      <div className="flex gap-1 flex-wrap justify-end">

                        {isLeading && (

                          <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[8px] font-black uppercase">
                            LEADING
                          </span>

                        )}

                        {votedSkip && (

                          <span className="px-2 py-0.5 rounded bg-yellow-600/80 text-white text-[8px] font-black uppercase">
                            SKIP ✓
                          </span>

                        )}

                        {isLocked && (

                          <span className="px-2 py-0.5 rounded bg-zinc-700 text-zinc-200 text-[8px] font-black uppercase">
                            LOCKED
                          </span>

                        )}

                      </div>

                    </div>


                    <div className="mt-1 flex justify-between text-xs text-zinc-400 font-mono">

                      <span>
                        {formatMoney(
                          player.budget
                        )}
                        {" "}left
                      </span>

                      <span className="text-zinc-500">
                        {player.roster?.length ||
                          0}
                        {" "}fighters
                      </span>

                    </div>


                    {isPassed && (

                      <div className="mt-2 text-[8px] text-red-400 uppercase font-black">
                        Passed this auction
                      </div>

                    )}

                    {isLocked && (

                      <div className="mt-2 text-[8px] text-zinc-500 uppercase font-black">
                        Roster locked
                      </div>

                    )}

                  </div>

                );

              }
            )}

          </div>

        </div>


        {/* =================================================
            CONTROL BAR
        ================================================= */}

        <div className="bg-[#080c14] border border-zinc-800 rounded-2xl p-4 shadow-2xl">

          <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">

            ACTING AS

            {" "}

            <span className="text-red-400">
              {selectedPlayer?.name ||
                "No Player"}
            </span>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_auto] gap-3 items-center">


            {/* CUSTOM BID */}

            <input
              type="number"
              min={minimumBid}
              step="1"
              value={customBid}
              onChange={(event) => {

                const value =
                  event.target.value;

                /*
                  Allow clearing the input.
                */
                if (value === "") {
                  setCustomBid("");
                  return;
                }

                /*
                  Prevent negative values at UI level.
                */
                if (
                  Number(value) >= 0
                ) {
                  setCustomBid(
                    value
                  );
                }

              }}
              placeholder={`Enter bid above ${formatMoney(
                currentBid
              )}`}
              className="bg-black border border-zinc-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm font-bold outline-none font-mono"
            />


            {/* BID */}

            <button
              onClick={() =>
                handleBid(
                  customBid
                )
              }
              disabled={
                !selectedPlayer ||
                selectedPlayer.rosterLocked ||
                passedPlayerIds.includes(
                  selectedPlayer.id
                )
              }
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl text-sm transition shadow-lg shadow-red-600/30 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              PLACE BID 🔨
            </button>


            {/* PASS */}

            <button
              onClick={
                handlePassTurn
              }
              disabled={
                !selectedPlayer ||
                selectedPlayer.rosterLocked ||
                passedPlayerIds.includes(
                  selectedPlayer.id
                )
              }
              className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-bold rounded-xl text-sm transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              PASS
            </button>


            {/* SOLD */}

            <button
              onClick={
                handleSellCard
              }
              disabled={
                !auction.highestBidderId
              }
              className="px-6 py-3 bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900/80 text-emerald-300 font-black rounded-xl text-sm transition disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-emerald-950/40"
            >
              SOLD! 🏆
            </button>


            {/* DEMOCRATIC SKIP */}

            <button
              onClick={
                handleSkipVote
              }
              disabled={
                !selectedPlayer ||
                selectedPlayer.rosterLocked ||
                hasCurrentPlayerVotedSkip ||
                Boolean(
                  auction.highestBidderId
                )
              }
              className={`px-6 py-3 rounded-xl text-sm font-black border transition ${
                hasCurrentPlayerVotedSkip ||
                Boolean(
                  auction.highestBidderId
                )
                  ? "bg-yellow-950/30 border-yellow-800/40 text-yellow-700 cursor-not-allowed"
                  : "bg-yellow-950/40 border-yellow-600/50 text-yellow-300 hover:bg-yellow-900/50 hover:border-yellow-400"
              }`}
            >
              {hasCurrentPlayerVotedSkip
                ? "VOTED ✓"
                : "VOTE SKIP 🗳"}
            </button>

          </div>


          {/* =================================================
              SKIP VOTE STATUS
          ================================================= */}

          <div className="mt-4 p-4 rounded-xl bg-yellow-950/20 border border-yellow-800/40">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

              <div>

                <div className="text-[10px] font-black uppercase tracking-widest text-yellow-500">
                  Democratic Skip
                </div>

                <div className="text-xs text-yellow-200/70 mt-1">
                  Majority of active players is required to remove this fighter from the current lot.
                </div>

              </div>


              <div className="text-right">

                <div className="text-2xl font-black font-mono text-yellow-400">
                  {currentSkipVotes}
                  {" / "}
                  {requiredSkipVotes}
                </div>

                <div className="text-[8px] uppercase tracking-widest text-yellow-700">
                  Votes Required
                </div>

              </div>

            </div>


            {/* VOTERS */}

            {skipVotes.length > 0 && (

              <div className="mt-3 flex flex-wrap gap-1.5">

                {skipVotes.map(
                  (playerId) => {

                    const voter =
                      players.find(
                        (player) =>
                          String(
                            player.id
                          ) ===
                          String(
                            playerId
                          )
                      );

                    return (

                      <span
                        key={
                          String(
                            playerId
                          )
                        }
                        className="px-2 py-1 rounded-md bg-yellow-950/50 border border-yellow-800/50 text-[9px] font-bold text-yellow-300"
                      >
                        🗳{" "}
                        {voter?.name ||
                          playerId}
                      </span>

                    );

                  }
                )}

              </div>

            )}

          </div>

        </div>


        {/* =================================================
            AUCTION HISTORY
        ================================================= */}

        {safeArray(
          auction.auctionHistory
        ).length > 0 && (

          <div className="bg-[#080c14] border border-zinc-800 rounded-2xl p-5">

            <div className="flex justify-between items-center mb-3">

              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                RECENT AUCTION ACTIVITY
              </span>

              <span className="text-[8px] text-zinc-600 uppercase">
                LIVE FEED
              </span>

            </div>


            <div className="space-y-2">

              {safeArray(
                auction.auctionHistory
              )
                .slice(-5)
                .reverse()
                .map(
                  (
                    entry,
                    index
                  ) => (

                    <div
                      key={`${entry.auctionNumber}-${entry.characterId}-${index}`}
                      className="flex justify-between items-center px-3 py-2 rounded-lg bg-black/30 border border-zinc-900"
                    >

                      <div>

                        <span className="text-[9px] text-zinc-600 font-mono mr-2">
                          #
                          {entry.auctionNumber}
                        </span>

                        <span className="text-xs font-bold">
                          {entry.characterName ||
                            "Character"}
                        </span>

                      </div>


                      <div className="text-right">

                        {entry.result ===
                        "sold" ? (

                          <>

                            <span className="text-[9px] text-emerald-400 font-black uppercase block">
                              SOLD
                            </span>

                            <span className="text-[10px] text-zinc-400 font-mono">
                              {formatMoney(
                                entry.finalBid
                              )}
                            </span>

                          </>

                        ) : (

                          <span className="text-[9px] text-yellow-500 font-black uppercase">
                            UNSOLD
                          </span>

                        )}

                      </div>

                    </div>

                  )
                )}

            </div>

          </div>

        )}

      </main>

    </div>
  );
}