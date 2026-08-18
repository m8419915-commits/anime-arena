import {
  Swords,
  Sparkles,
  Gavel,
  Brain,
  BarChart3,
  Trophy,
  Clapperboard,
  Skull,
  ChevronRight,
  Lock,
  Flame,
} from 'lucide-react';


/* =========================================================
   ANIME ARENA — GAME HUB
========================================================= */

const GAME_MODES = [
  {
    id: 'draft',
    icon: Sparkles,
    title: 'Anime Draft',
    subtitle: 'Build Your Team',
    category: 'MULTIPLAYER',
    description:
      'Randomly draft anime characters, receive locked forms, build your team and let the tactical judge decide the winner.',
    tag: 'PLAY NOW',
    color: 'red',
    playable: true,
  },

  {
    id: 'battle',
    icon: Swords,
    title: 'Anime Battle',
    subtitle: 'Character VS Character',
    category: '1 VS 1',
    description:
      'Choose two characters, select their forms and battle using power, speed, hax, defense, IQ and tactical logic.',
    tag: 'PLAY NOW',
    color: 'orange',
    playable: true,
  },

  {
    id: 'auction',
    icon: Gavel,
    title: 'Character Auction',
    subtitle: 'Bid. Bluff. Build.',
    category: 'STRATEGY',
    description:
      'Build your dream roster using a customizable budget, live bidding, rarity pools, role slots and tactical auction rules.',
    tag: 'PLAY NOW',
    color: 'yellow',
    playable: true,
  },

  {
    id: 'tournament',
    icon: Trophy,
    title: 'Character Tournament',
    subtitle: 'Survive The Bracket',
    category: 'CHAMPIONSHIP',
    description:
      'Create a massive character tournament and determine who survives round after round until one champion remains.',
    tag: 'PLAY NOW',
    color: 'gold',
    playable: true,
  },

  {
    id: 'quiz',
    icon: Brain,
    title: 'Quiz Hub',
    subtitle: 'Test Your Anime IQ',
    category: 'QUIZ',
    description:
      'Rapid-fire questions, character clues, forms, powers, Guess Who and competitive anime challenges.',
    tag: 'COMING SOON',
    color: 'purple',
    playable: false,
  },

  {
    id: 'ranking',
    icon: BarChart3,
    title: 'Blind Ranking',
    subtitle: 'Lock Your Choices',
    category: 'RANKING',
    description:
      'Rank characters, villains, fights, transformations, openings, moments and more without changing decisions.',
    tag: 'COMING SOON',
    color: 'green',
    playable: false,
  },

  {
    id: 'moments',
    icon: Clapperboard,
    title: 'Anime Moments',
    subtitle: 'The Greatest Scenes',
    category: 'MOMENTS',
    description:
      'Rank entrances, transformations, deaths, speeches, betrayals, twists, sacrifices and legendary anime moments.',
    tag: 'COMING SOON',
    color: 'pink',
    playable: false,
  },

  {
    id: 'hax',
    icon: Skull,
    title: 'Broken Characters',
    subtitle: 'Hax & Madness',
    category: 'HAX',
    description:
      'Explore reality warping, time manipulation, immortality, causality, sealing, adaptation and other broken abilities.',
    tag: 'COMING SOON',
    color: 'crimson',
    playable: false,
  },
];


/* =========================================================
   COLOR HELPERS
========================================================= */

const colorClasses = {
  red: {
    icon: 'bg-red-600 text-black',
    border: 'border-red-700 hover:border-red-500',
    text: 'text-red-400',
    glow: 'hover:shadow-red-950/40',
  },

  orange: {
    icon: 'bg-orange-500 text-black',
    border: 'border-orange-800 hover:border-orange-500',
    text: 'text-orange-400',
    glow: 'hover:shadow-orange-950/40',
  },

  yellow: {
    icon: 'bg-yellow-400 text-black',
    border: 'border-yellow-700 hover:border-yellow-400',
    text: 'text-yellow-400',
    glow: 'hover:shadow-yellow-950/40',
  },

  gold: {
    icon: 'bg-yellow-500 text-black',
    border: 'border-yellow-700 hover:border-yellow-400',
    text: 'text-yellow-400',
    glow: 'hover:shadow-yellow-950/40',
  },

  purple: {
    icon: 'bg-purple-600 text-white',
    border: 'border-neutral-800',
    text: 'text-purple-400',
    glow: '',
  },

  green: {
    icon: 'bg-emerald-600 text-black',
    border: 'border-neutral-800',
    text: 'text-emerald-400',
    glow: '',
  },

  pink: {
    icon: 'bg-pink-600 text-white',
    border: 'border-neutral-800',
    text: 'text-pink-400',
    glow: '',
  },

  crimson: {
    icon: 'bg-red-700 text-white',
    border: 'border-neutral-800',
    text: 'text-red-400',
    glow: '',
  },
};


/* =========================================================
   COMPONENT
========================================================= */

export default function GameHub({ onSelectMode }) {
  const playableModes = GAME_MODES.filter(
    (mode) => mode.playable
  );

  const comingSoonModes = GAME_MODES.filter(
    (mode) => !mode.playable
  );

  const handleModeSelect = (mode) => {
    if (!mode.playable) return;

    if (typeof onSelectMode === 'function') {
      onSelectMode(mode.id);
    }
  };


  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-14">


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="text-center max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700 text-red-300 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">

          <Sparkles className="w-4 h-4" />

          Anime Gaming Hub

        </div>


        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6">

          Anime

          <span className="text-red-500">
            {' '}Arena
          </span>

        </h2>


        <p className="max-w-3xl mx-auto text-neutral-300 mt-5 text-sm md:text-lg leading-relaxed">

          One website.

          <span className="text-red-400 font-black">
            {' '}Multiple anime games.
          </span>

          <br />

          Draft teams, battle characters, conquer tournaments,
          build auction rosters and eventually explore an entire
          anime gaming universe.

        </p>


        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-8">

          <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

            <div className="text-2xl md:text-3xl font-black">
              400
            </div>

            <div className="text-[9px] text-neutral-500 font-black uppercase tracking-widest mt-1">
              Characters
            </div>

          </div>


          <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

            <div className="text-2xl md:text-3xl font-black">
              20
            </div>

            <div className="text-[9px] text-neutral-500 font-black uppercase tracking-widest mt-1">
              Anime Verses
            </div>

          </div>


          <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

            <div className="text-2xl md:text-3xl font-black">
              8
            </div>

            <div className="text-[9px] text-neutral-500 font-black uppercase tracking-widest mt-1">
              Max Players
            </div>

          </div>


          <div className="bg-black/75 border border-neutral-800 rounded-2xl p-4">

            <div className="text-2xl md:text-3xl font-black">
              {GAME_MODES.length}+
            </div>

            <div className="text-[9px] text-neutral-500 font-black uppercase tracking-widest mt-1">
              Game Modes
            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          FEATURED TOURNAMENT
      =================================================== */}

      <section className="mt-10">

        <button
          onClick={() =>
            handleModeSelect({
              id: 'tournament',
              playable: true,
            })
          }
          className="w-full text-left group"
        >

          <div className="relative overflow-hidden rounded-3xl border border-yellow-700/70 bg-gradient-to-r from-yellow-950/50 via-black/90 to-red-950/50 p-6 md:p-8 transition-all duration-300 hover:border-yellow-400 hover:-translate-y-1 hover:shadow-2xl">

            <div className="flex flex-col md:flex-row items-center gap-6">

              <div className="shrink-0 bg-yellow-400 text-black p-5 rounded-2xl shadow-lg shadow-yellow-500/30">

                <Trophy className="w-9 h-9" />

              </div>


              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="text-[9px] font-black tracking-widest uppercase text-yellow-400 border border-yellow-700 bg-yellow-950/60 px-2 py-1 rounded-full">
                    Featured Mode
                  </span>

                  <span className="text-[9px] font-black tracking-widest uppercase text-neutral-500">
                    400 CHARACTER POOL
                  </span>

                </div>


                <h3 className="text-2xl md:text-3xl font-black mt-3">
                  Grand Tournament
                </h3>


                <div className="text-yellow-400 text-sm font-black mt-1">
                  Anime Arena Championship
                </div>


                <p className="text-sm text-neutral-400 mt-3 max-w-3xl leading-6">

                  Enter the massive Anime Arena character tournament.
                  Fight through multiple phases until one character
                  becomes the ultimate champion.

                </p>

              </div>


              <div className="shrink-0">

                <div className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-black text-xs flex items-center gap-2 group-hover:bg-yellow-300">

                  ENTER TOURNAMENT

                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

                </div>

              </div>

            </div>

          </div>

        </button>

      </section>


      {/* ===================================================
          PLAY NOW
      =================================================== */}

      <section className="mt-12">

        <div className="flex items-center gap-3 mb-5">

          <div className="bg-red-600 text-black p-2 rounded-xl">
            <Flame className="w-5 h-5" />
          </div>

          <div>

            <h3 className="text-2xl font-black">
              Play Now
            </h3>

            <p className="text-xs text-neutral-500">
              Fully playable Anime Arena modes.
            </p>

          </div>

        </div>


        <div className="grid md:grid-cols-2 gap-5">

          {playableModes.map((mode) => {

            const Icon = mode.icon;
            const colors =
              colorClasses[mode.color] ||
              colorClasses.red;


            return (

              <button
                key={mode.id}
                onClick={() => handleModeSelect(mode)}
                className={`group text-left rounded-3xl border p-6 min-h-[280px] bg-black/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${colors.border} ${colors.glow}`}
              >

                <div className="flex items-start justify-between">

                  <div
                    className={`p-4 rounded-2xl shadow-lg ${colors.icon}`}
                  >

                    <Icon className="w-7 h-7" />

                  </div>


                  <span
                    className={`text-[9px] font-black tracking-widest px-3 py-1.5 rounded-full border ${colors.text}`}
                  >
                    PLAY NOW
                  </span>

                </div>


                <div className="mt-7">

                  <div className="text-[9px] text-neutral-500 font-black uppercase tracking-[0.2em]">
                    {mode.category}
                  </div>


                  <h4 className="text-2xl font-black mt-2">
                    {mode.title}
                  </h4>


                  <div className={`text-sm font-black mt-1 ${colors.text}`}>
                    {mode.subtitle}
                  </div>


                  <p className="text-sm text-neutral-400 leading-6 mt-4">
                    {mode.description}
                  </p>

                </div>


                <div className={`flex items-center gap-1 text-xs font-black mt-5 ${colors.text}`}>

                  Enter Mode

                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

                </div>

              </button>

            );

          })}

        </div>

      </section>


      {/* ===================================================
          COMING SOON
      =================================================== */}

      {comingSoonModes.length > 0 && (

        <section className="mt-14">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-neutral-900 border border-neutral-700 text-neutral-500 p-2 rounded-xl">
              <Lock className="w-5 h-5" />
            </div>

            <div>

              <h3 className="text-2xl font-black">
                Coming Soon
              </h3>

              <p className="text-xs text-neutral-500">
                More games are being built into the hub.
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {comingSoonModes.map((mode) => {

              const Icon = mode.icon;
              const colors =
                colorClasses[mode.color] ||
                colorClasses.red;


              return (

                <div
                  key={mode.id}
                  className="text-left rounded-3xl border border-neutral-800 bg-black/65 p-5 min-h-[230px] opacity-70"
                >

                  <div className="flex items-start justify-between">

                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-500">

                      <Icon className="w-6 h-6" />

                    </div>


                    <span className="text-[9px] font-black tracking-widest px-2 py-1 rounded-full border border-neutral-800 text-neutral-600">

                      COMING SOON

                    </span>

                  </div>


                  <div className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.2em] mt-5">
                    {mode.category}
                  </div>


                  <h4 className="text-xl font-black text-neutral-300 mt-2">
                    {mode.title}
                  </h4>


                  <div className={`text-sm font-black mt-1 ${colors.text}`}>
                    {mode.subtitle}
                  </div>


                  <p className="text-xs text-neutral-500 leading-6 mt-3">
                    {mode.description}
                  </p>

                </div>

              );

            })}

          </div>

        </section>

      )}


      {/* ===================================================
          FOOTER MESSAGE
      =================================================== */}

      <section className="mt-14 bg-black/75 border border-red-900/50 rounded-3xl p-7 md:p-10 text-center">

        <div className="inline-flex bg-red-600 text-black p-3 rounded-xl">
          <Trophy className="w-6 h-6" />
        </div>


        <h3 className="text-xl md:text-2xl font-black mt-4">

          One Anime Universe.

          <span className="text-red-500">
            {' '}Many Ways To Play.
          </span>

        </h3>


        <p className="text-sm text-neutral-500 mt-3 max-w-2xl mx-auto leading-6">

          Anime Arena is growing into a complete fan-made anime
          gaming hub — built around characters, battles, strategy,
          rankings, tournaments and pure anime chaos.

        </p>

      </section>

    </main>
  );
}