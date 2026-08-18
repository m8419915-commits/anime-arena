import React from 'react';
import { Gavel, Zap, Shield, Sparkles } from 'lucide-react';

const RARITY_CONFIG = {
  Common: {
    label: 'Common',
    className: 'text-neutral-300 border-neutral-600 bg-neutral-900/80',
  },
  Rare: {
    label: 'Rare',
    className: 'text-blue-300 border-blue-700 bg-blue-950/80',
  },
  Epic: {
    label: 'Epic',
    className: 'text-purple-300 border-purple-700 bg-purple-950/80',
  },
  Legendary: {
    label: 'Legendary',
    className: 'text-yellow-300 border-yellow-700 bg-yellow-950/80',
  },
  Mythic: {
    label: 'Mythic',
    className: 'text-red-300 border-red-700 bg-red-950/80',
  },
};

const getPower = (character, form) => {
  return (
    form?.relPower ??
    form?.realPower ??
    form?.power ??
    character?.power ??
    character?.powerLevel ??
    character?.stats?.power ??
    0
  );
};

const getImage = (character, form) => {
  return (
    form?.image ||
    form?.imageUrl ||
    character?.image ||
    character?.imageUrl ||
    character?.artwork ||
    character?.image_url ||
    ''
  );
};

const getRarity = (character, form) => {
  return (
    form?.rarity ||
    character?.rarity ||
    'Common'
  );
};

const getRoles = (character, form) => {
  const roles =
    form?.roles ||
    character?.roles ||
    character?.role ||
    [];

  if (Array.isArray(roles)) return roles;

  if (roles) return [roles];

  return [];
};

export default function AuctionCard({
  character,
  form,
  currentBid = 0,
  startingBid = 0,
  isFeatured = true,
  onBid,
  onPass,
  disabled = false,
}) {
  if (!character) {
    return (
      <div className="w-full max-w-md mx-auto rounded-3xl border border-neutral-800 bg-black/80 p-10 text-center">
        <Gavel className="w-10 h-10 mx-auto text-neutral-600" />

        <p className="text-neutral-500 mt-4 font-bold">
          Waiting for next character...
        </p>
      </div>
    );
  }

  const rarity = getRarity(character, form);
  const rarityInfo =
    RARITY_CONFIG[rarity] || RARITY_CONFIG.Common;

  const image = getImage(character, form);
  const power = getPower(character, form);
  const roles = getRoles(character, form);

  const name =
    form?.name ||
    character?.name ||
    'Unknown Fighter';

  const verse =
    character?.verse ||
    character?.anime ||
    character?.series ||
    'Unknown Universe';

  return (
    <article className="relative w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-cyan-500/70 bg-[#05070d] shadow-2xl shadow-cyan-950/40">

      {/* TOP BAR */}

      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-cyan-900/60 bg-[#050817]">

        <div className="flex items-center gap-2">

          {isFeatured ? (
            <>
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-[11px] font-black tracking-widest text-cyan-300 uppercase">
                Featured Card
              </span>
            </>
          ) : (
            <>
              <Gavel className="w-4 h-4 text-cyan-300" />

              <span className="text-[11px] font-black tracking-widest text-cyan-300 uppercase">
                Auction Card
              </span>
            </>
          )}

        </div>

        <span
          className={`px-3 py-1 rounded-full border text-[10px] font-black tracking-wide ${rarityInfo.className}`}
        >
          {rarityInfo.label}
        </span>

      </div>

      {/* IMAGE */}

      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">

        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <Shield className="w-16 h-16 mx-auto text-neutral-800" />

              <p className="text-neutral-700 text-xs font-bold mt-3">
                ARTWORK UNAVAILABLE
              </p>

            </div>

          </div>
        )}

        {/* IMAGE GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 pointer-events-none" />

        {/* POWER */}

        <div className="absolute right-4 bottom-5 text-right">

          <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
            PWR
          </div>

          <div className="text-4xl font-black text-white leading-none">
            {Number(power).toLocaleString()}
          </div>

        </div>

        {/* CHARACTER INFO */}

        <div className="absolute left-4 bottom-5 max-w-[65%]">

          <h2 className="text-3xl md:text-4xl font-black italic uppercase text-white leading-none drop-shadow-lg">
            {name}
          </h2>

          <p className="text-[10px] md:text-xs font-black uppercase text-cyan-400 mt-2 tracking-wide">
            {verse}
          </p>

          {/* ROLES */}

          {roles.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">

              {roles.slice(0, 4).map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="px-2 py-1 rounded-md bg-black/75 border border-white/10 text-[9px] font-black uppercase text-neutral-200"
                >
                  {typeof role === 'string'
                    ? role
                    : role?.name || 'Role'}
                </span>
              ))}

            </div>
          )}

        </div>

      </div>

      {/* AUCTION INFORMATION */}

      <div className="p-4 bg-[#050817]">

        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-2xl border border-neutral-800 bg-black/50 p-3">

            <div className="text-[9px] uppercase tracking-widest text-neutral-500 font-black">
              Starting Bid
            </div>

            <div className="text-lg font-black text-neutral-200 mt-1">
              ₹{Number(startingBid).toLocaleString()}
            </div>

          </div>

          <div className="rounded-2xl border border-cyan-900/70 bg-cyan-950/20 p-3">

            <div className="text-[9px] uppercase tracking-widest text-cyan-500 font-black">
              Current Bid
            </div>

            <div className="text-lg font-black text-cyan-300 mt-1">
              ₹{Number(currentBid).toLocaleString()}
            </div>

          </div>

        </div>

        {/* ACTIONS */}

        {(onBid || onPass) && (
          <div className="grid grid-cols-2 gap-3 mt-4">

            {onPass && (
              <button
                type="button"
                onClick={onPass}
                disabled={disabled}
                className="rounded-xl border border-neutral-700 bg-neutral-900 py-3 text-xs font-black uppercase tracking-wider text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Pass
              </button>
            )}

            {onBid && (
              <button
                type="button"
                onClick={onBid}
                disabled={disabled}
                className="rounded-xl bg-cyan-500 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
              >
                <Gavel className="w-4 h-4" />
                Bid
              </button>
            )}

          </div>
        )}

      </div>

      {/* BOTTOM ACCENT */}

      <div className="h-1 bg-cyan-500" />

    </article>
  );
}