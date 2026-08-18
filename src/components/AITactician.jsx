import React, {
  useEffect,
  useState
} from 'react';

import {
  Brain,
  Send,
  LoaderCircle,
  Sparkles,
  X,
  Minimize2,
  Maximize2,
  CircleCheck,
  CircleX
} from 'lucide-react';

import {
  askGemini,
  checkGeminiHealth
} from '../api/gemini';


export default function AITactician({
  screen = 'gamehub',
  context = '',
  compact = false
}) {
  const [
    open,
    setOpen
  ] =
    useState(false);


  const [
    question,
    setQuestion
  ] =
    useState('');


  const [
    answer,
    setAnswer
  ] =
    useState('');


  const [
    loading,
    setLoading
  ] =
    useState(false);


  const [
    error,
    setError
  ] =
    useState('');


  const [
    online,
    setOnline
  ] =
    useState(null);


  useEffect(() => {
    let active = true;

    checkGeminiHealth()
      .then(
        (result) => {
          if (active) {
            setOnline(
              result
            );
          }
        }
      )
      .catch(() => {
        if (active) {
          setOnline(
            false
          );
        }
      });


    return () => {
      active = false;
    };
  }, []);


  const sendQuestion =
    async (
      forcedQuestion = null
    ) => {
      const finalQuestion =
        (
          forcedQuestion ??
          question
        )
          .trim();


      if (
        !finalQuestion ||
        loading
      ) {
        return;
      }


      setQuestion(
        finalQuestion
      );

      setLoading(
        true
      );

      setError('');

      setAnswer('');


      try {
        const result =
          await askGemini({
            prompt:
              finalQuestion,

            system:
              `You are helping a player inside Anime Arena.

Current UI mode:
${screen}

Answer directly and naturally.
Do not mention APIs, servers, prompts or programming unless the player asks about them.`,

            context
          });


        setAnswer(
          result
        );

        setOnline(
          true
        );

      } catch (
        requestError
      ) {
        setError(
          requestError?.message ||
          'Unable to contact Gemini.'
        );

        setOnline(
          false
        );

      } finally {
        setLoading(
          false
        );
      }
    };


  const clearChat =
    () => {
      setQuestion('');
      setAnswer('');
      setError('');
    };


  return (
    <>
      {/* ===================================================
          FLOATING BUTTON
      =================================================== */}

      {!open && (
        <button
          onClick={() =>
            setOpen(
              true
            )
          }
          className="fixed bottom-5 right-5 z-[180] group"
          aria-label="Open AI Tactician"
        >

          <div className="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-30 group-hover:opacity-50 transition" />

          <div className="relative flex items-center gap-3 rounded-full border border-red-500/70 bg-black/95 backdrop-blur-xl px-4 py-3 shadow-2xl shadow-red-900/30 hover:border-red-400 transition">

            <div className="w-9 h-9 rounded-full bg-red-600 text-black flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>

            <div className="text-left">

              <div className="text-[8px] uppercase tracking-[0.25em] text-red-400 font-black">
                AI Tactician
              </div>

              <div className="text-xs font-black text-white">
                Ask Anime Arena
              </div>

            </div>

          </div>

        </button>
      )}


      {/* ===================================================
          AI PANEL
      =================================================== */}

      {open && (
        <div
          className={`fixed right-4 bottom-4 z-[180] w-[min(440px,calc(100vw-2rem))] ${
            compact
              ? 'max-h-[70vh]'
              : 'max-h-[82vh]'
          }`}
        >

          <div className="relative overflow-hidden rounded-[2rem] border border-red-900/70 bg-black/95 backdrop-blur-2xl shadow-2xl shadow-black">

            {/* Glow */}

            <div className="pointer-events-none absolute -top-24 -right-20 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />


            {/* Header */}

            <div className="relative flex items-center justify-between gap-3 p-4 border-b border-neutral-900">

              <div className="flex items-center gap-3">

                <div className="relative">

                  <div className="absolute inset-0 rounded-xl bg-red-600 blur-md opacity-30" />

                  <div className="relative w-10 h-10 rounded-xl bg-red-600 text-black flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>

                </div>


                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-sm font-black">
                      AI Tactician
                    </h3>

                    {online === true && (
                      <CircleCheck className="w-3.5 h-3.5 text-green-400" />
                    )}

                    {online === false && (
                      <CircleX className="w-3.5 h-3.5 text-red-500" />
                    )}

                  </div>

                  <div className="text-[8px] uppercase tracking-widest text-neutral-600 mt-1">
                    Gemini Intelligence
                  </div>

                </div>

              </div>


              <div className="flex items-center gap-1">

                <button
                  onClick={
                    clearChat
                  }
                  className="rounded-lg p-2 hover:bg-neutral-900 text-neutral-600 hover:text-white"
                  title="Clear"
                >
                  <Sparkles className="w-4 h-4" />
                </button>


                <button
                  onClick={() =>
                    setOpen(
                      false
                    )
                  }
                  className="rounded-lg p-2 hover:bg-neutral-900 text-neutral-500 hover:text-white"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>

              </div>

            </div>


            {/* Mode */}

            <div className="relative px-4 pt-3">

              <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-[8px] uppercase tracking-widest text-neutral-600">
                Mode:
                <span className="text-red-400 ml-1">
                  {
                    screen
                  }
                </span>
              </div>

            </div>


            {/* Answer */}

            <div className="relative max-h-[45vh] overflow-y-auto px-4 pt-4">

              {!answer &&
                !error &&
                !loading && (
                  <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5">

                    <div className="text-sm font-black">
                      Your tactical assistant is ready.
                    </div>

                    <p className="text-[10px] text-neutral-500 leading-5 mt-2">
                      Ask about the current game, battle,
                      tournament, character or rules.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">

                      {[
                        'How does this mode work?',
                        'Who is currently winning?',
                        'Explain the rules',
                        'What should I watch out for?'
                      ].map(
                        (
                          preset
                        ) => (
                          <button
                            key={
                              preset
                            }
                            onClick={() =>
                              sendQuestion(
                                preset
                              )
                            }
                            className="rounded-xl border border-neutral-800 bg-black px-3 py-2 text-[8px] font-black text-neutral-500 hover:text-white hover:border-red-700"
                          >
                            {
                              preset
                            }
                          </button>
                        )
                      )}

                    </div>

                  </div>
                )}


              {loading && (
                <div className="rounded-2xl border border-red-900/50 bg-red-950/10 p-5">

                  <div className="flex items-center gap-3">

                    <LoaderCircle className="w-5 h-5 text-red-400 animate-spin" />

                    <div>

                      <div className="text-xs font-black">
                        Tactician is thinking...
                      </div>

                      <div className="text-[9px] text-neutral-600 mt-1">
                        Analyzing the supplied game state.
                      </div>

                    </div>

                  </div>

                </div>
              )}


              {error && (
                <div className="rounded-2xl border border-red-900 bg-red-950/30 p-5">

                  <div className="text-xs font-black text-red-400">
                    AI connection problem
                  </div>

                  <p className="text-[9px] text-neutral-500 mt-2 leading-5">
                    {
                      error
                    }
                  </p>

                </div>
              )}


              {answer && !loading && (
                <div className="rounded-2xl border border-red-900/40 bg-gradient-to-br from-red-950/20 to-neutral-950 p-5">

                  <div className="flex items-center gap-2 text-red-400 text-[8px] uppercase tracking-widest font-black">

                    <Brain className="w-4 h-4" />

                    Tactical Briefing

                  </div>


                  <div className="text-sm text-neutral-200 leading-7 mt-4 whitespace-pre-wrap">
                    {
                      answer
                    }
                  </div>

                </div>
              )}

            </div>


            {/* Input */}

            <div className="relative p-4 border-t border-neutral-900">

              <div className="flex items-end gap-2">

                <textarea
                  value={
                    question
                  }
                  onChange={(
                    event
                  ) =>
                    setQuestion(
                      event.target.value
                    )
                  }
                  onKeyDown={(
                    event
                  ) => {
                    if (
                      event.key ===
                        'Enter' &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();

                      sendQuestion();
                    }
                  }}
                  rows={2}
                  placeholder="Ask the Tactician..."
                  className="flex-1 resize-none bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3 py-3 text-xs outline-none"
                />


                <button
                  onClick={() =>
                    sendQuestion()
                  }
                  disabled={
                    loading ||
                    !question.trim()
                  }
                  className="w-12 h-12 rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-neutral-900 disabled:text-neutral-700 text-black flex items-center justify-center shrink-0"
                  title="Ask Gemini"
                >

                  {loading ? (
                    <LoaderCircle className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}

                </button>

              </div>


              <div className="text-[7px] text-neutral-700 mt-2">
                Enter = send • Shift + Enter = new line
              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
}