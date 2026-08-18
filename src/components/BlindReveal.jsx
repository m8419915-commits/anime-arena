import React from 'react';

import {
  Eye,
  EyeOff,
  Lightbulb,
  Lock,
  Trophy,
  Sparkles,
  ShieldQuestion,
  Zap,
  Brain,
  Target,
  CheckCircle2
} from 'lucide-react';

import {
  getOptionalHints
} from '../engine/blindTournamentEngine';


export default function BlindReveal({
  side,
  revealState,
  onRevealPaidClue,
  intelPhase,
  translucent = true
}) {
  if (!revealState) {
    return (
      <div className="rounded-[2rem] border border-neutral-800 bg-black/80 p-8 text-center">

        <ShieldQuestion className="w-12 h-12 text-neutral-700 mx-auto" />

        <p className="text-sm text-neutral-600 mt-3">
          Fighter not selected.
        </p>

      </div>
    );
  }


  const character =
    revealState.character;

  const forms =
    Array.isArray(
      character?.forms
    )
      ? character.forms
      : [];

  const strongestForm =
    [...forms].sort(
      (a, b) =>
        Number(
          b?.relPower || 0
        ) -
        Number(
          a?.relPower || 0
        )
    )[0];

  const image =
    strongestForm?.img ||
    strongestForm?.image ||
    character?.image ||
    character?.img ||
    character?.imageUrl ||
    null;

  const revealed =
    Boolean(
      revealState.fullyRevealed
    );

  const showTranslucent =
    intelPhase &&
    translucent &&
    !revealed;

  const freeHints =
    (
      revealState.hints ||
      []
    ).filter(
      (hint) =>
        hint.type === 'free'
    );

  const optionalHints =
    getOptionalHints(
      revealState
    );

  const isLeft =
    side === 'left';

  const border =
    isLeft
      ? 'border-red-700/60'
      : 'border-blue-700/60';

  const accent =
    isLeft
      ? 'text-red-400'
      : 'text-blue-400';

  const accentBg =
    isLeft
      ? 'bg-red-950/50'
      : 'bg-blue-950/50';

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border ${border} bg-black/90 backdrop-blur-xl shadow-2xl`}
    >

      {/* GLOW */}

      <div
        className={`absolute -top-28 ${
          isLeft
            ? '-left-24 bg-red-600'
            : '-right-24 bg-blue-600'
        } w-72 h-72 rounded-full blur-3xl opacity-15`}
      />


      {/* HEADER */}

      <div className="relative px-5 pt-5">

        <div className="flex items-center justify-between gap-3">

          <div>

            <div
              className={`text-[9px] uppercase tracking-[0.3em] font-black ${accent}`}
            >
              {isLeft
                ? 'FIGHTER A'
                : 'FIGHTER B'}
            </div>

            <div className="text-xs text-neutral-500 mt-1">
              {
                revealState
                  .selector?.name
              }
            </div>

          </div>


          <div
            className={`rounded-full border px-3 py-1.5 text-[8px] font-black tracking-widest ${
              revealed
                ? 'border-green-800 bg-green-950/30 text-green-400'
                : 'border-neutral-800 bg-neutral-950 text-neutral-500'
            }`}
          >
            {revealed
              ? 'REVEALED'
              : intelPhase
                ? 'INTEL'
                : 'VISIBLE'}
          </div>

        </div>

      </div>


      {/* CHARACTER IMAGE */}

      <div className="px-5 pt-4">

        <div className="relative h-[350px] md:h-[420px] rounded-[1.5rem] overflow-hidden border border-neutral-800 bg-neutral-950">

          {image ? (
            <img
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
                showTranslucent
                  ? 'opacity-[0.38] blur-[1px] brightness-75 saturate-[0.45] scale-[1.02]'
                  : 'opacity-100 blur-0 brightness-100 saturate-100 scale-100'
              }`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <EyeOff className="w-24 h-24 text-neutral-800" />
            </div>
          )}


          {!revealed &&
            intelPhase && (
              <div className="absolute inset-0 bg-black/15" />
            )}


          {!revealed &&
            intelPhase && (
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div
                    className={`w-20 h-20 rounded-[1.5rem] ${accentBg} border border-current ${accent} flex items-center justify-center mx-auto animate-pulse`}
                  >
                    <EyeOff className="w-9 h-9" />
                  </div>

                  <div className="text-3xl font-black tracking-[0.25em] mt-4">
                    ???
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.3em] text-neutral-600 mt-1">
                    Translucent Vision
                  </div>

                </div>

              </div>
            )}


          {!revealed &&
            !intelPhase && (
              <div className="absolute top-4 left-4 rounded-full border border-green-800 bg-green-950/40 px-3 py-1.5 text-[8px] font-black text-green-400">
                FULL CARD ACTIVE
              </div>
            )}


          {revealed && (
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">

              <div className="text-[8px] uppercase tracking-[0.3em] text-green-400 font-black">
                FIGHTER REVEALED
              </div>

              <div className="text-3xl md:text-4xl font-black mt-1">
                {
                  character?.name
                }
              </div>

              {(
                character?.verse ||
                character?.anime ||
                character?.series
              ) && (
                <div className="text-xs text-neutral-400 mt-1">
                  {
                    character.verse ||
                    character.anime ||
                    character.series
                  }
                </div>
              )}

            </div>
          )}

        </div>

      </div>


      {/* STATS */}

      <div className="px-5 pt-3">

        <div className="grid grid-cols-3 gap-2">

          <StatBox
            icon={
              <Zap className="w-3.5 h-3.5" />
            }
            label="POWER"
            value={
              strongestForm?.relPower
                ? Number(
                    strongestForm.relPower
                  ).toLocaleString()
                : '—'
            }
          />

          <StatBox
            icon={
              <Brain className="w-3.5 h-3.5" />
            }
            label="HAX"
            value={
              strongestForm?.hax ??
              '—'
            }
          />

          <StatBox
            icon={
              <Target className="w-3.5 h-3.5" />
            }
            label="FORMS"
            value={
              forms.length
            }
          />

        </div>

      </div>


      {/* FREE INTEL */}

      {intelPhase &&
        !revealed && (
        <div className="px-5 pt-4">

          <div className="rounded-[1.25rem] border border-neutral-800 bg-neutral-950/80">

            <div className="px-4 py-3 border-b border-neutral-900 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Lightbulb className="w-4 h-4 text-yellow-400" />

                <span className="text-xs font-black">
                  FREE INTEL
                </span>

              </div>

              <span className="text-[8px] font-black tracking-widest text-green-400">
                3 FREE
              </span>

            </div>


            <div className="p-3 space-y-2">

              {freeHints.map(
                (
                  hint,
                  index
                ) => (
                  <div
                    key={
                      hint.id
                    }
                    className="rounded-xl border border-neutral-900 bg-black/50 p-3"
                  >

                    <div className="flex items-start gap-3">

                      <div className="w-7 h-7 rounded-lg bg-yellow-500 text-black flex items-center justify-center text-[9px] font-black shrink-0">
                        {
                          index + 1
                        }
                      </div>

                      <div>

                        <div className="text-[8px] uppercase tracking-widest text-yellow-500 font-black">
                          {
                            hint.label
                          }
                        </div>

                        <p className="text-[10px] text-neutral-300 leading-5 mt-1">
                          {
                            hint.text
                          }
                        </p>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      )}


      {/* OPTIONAL INTEL */}

      {intelPhase &&
        !revealed && (
        <div className="px-5 pt-3 pb-5">

          <div className="rounded-[1.25rem] border border-red-900/50 bg-red-950/10">

            <div className="px-4 py-3 border-b border-red-900/30 flex items-center gap-2">

              <Sparkles className="w-4 h-4 text-red-400" />

              <span className="text-xs font-black">
                OPTIONAL INTEL
              </span>

              <span className="text-[8px] text-red-400 font-black ml-auto">
                EACH = -1 REWARD
              </span>

            </div>


            <div className="p-3 space-y-2">

              {optionalHints.map(
                (
                  hint,
                  index
                ) => {

                  const unlocked =
                    revealState
                      .revealedPaidHints
                      .includes(
                        hint.id
                      );

                  return (
                    <div
                      key={
                        hint.id
                      }
                      className={`rounded-xl border p-3 ${
                        unlocked
                          ? 'border-green-900/50 bg-green-950/10'
                          : 'border-neutral-900 bg-black/50'
                      }`}
                    >

                      <div className="flex items-center justify-between gap-3">

                        <div className="flex items-center gap-2">

                          <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">

                            {unlocked ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                              <Lock className="w-3.5 h-3.5 text-neutral-600" />
                            )}

                          </div>

                          <div>

                            <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black">
                              Clue {index + 1}
                            </div>

                            <div className="text-[10px] font-black mt-1">
                              {
                                unlocked
                                  ? hint.label
                                  : 'Hidden Intel'
                              }
                            </div>

                          </div>

                        </div>


                        {!unlocked && (
                          <button
                            onClick={() =>
                              onRevealPaidClue(
                                hint.id
                              )
                            }
                            className="rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-600 px-3 py-2 text-[8px] font-black"
                          >
                            REVEAL
                          </button>
                        )}

                      </div>


                      {unlocked && (
                        <p className="text-[10px] text-neutral-300 leading-5 mt-3 pl-9">
                          {
                            hint.text
                          }
                        </p>
                      )}

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </div>
      )}


      {revealed && (
        <div className="p-5">

          <div className="rounded-2xl border border-green-900/50 bg-green-950/10 p-4">

            <div className="flex items-center gap-2 text-green-400">

              <Trophy className="w-4 h-4" />

              <span className="text-xs font-black">
                FIGHTER LOCKED
              </span>

            </div>

            <p className="text-[10px] text-neutral-400 mt-2">
              This character is now part of the official 1v1 battle.
            </p>

          </div>

        </div>
      )}

    </div>
  );
}


function StatBox({
  icon,
  label,
  value
}) {
  return (
    <div className="rounded-xl border border-neutral-900 bg-neutral-950 p-3">

      <div className="text-red-400">
        {icon}
      </div>

      <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-black mt-2">
        {label}
      </div>

      <div className="text-xs font-black mt-1 truncate">
        {value}
      </div>

    </div>
  );
}