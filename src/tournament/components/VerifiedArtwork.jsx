/*
  Anime Arena — Grand Tournament
  Verified Artwork
  Identity-Safe Version
*/

import {
  useEffect,
  useState,
} from "react";

import {
  resolveCharacterArtwork,
} from "../data/tournamentImageResolver";

import {
  artworkSafetyGate,
  ARTWORK_STATUS,
} from "../data/tournamentArtworkValidator";

const PLACEHOLDER =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg"
         width="600"
         height="800"
         viewBox="0 0 600 800">

      <rect
        width="600"
        height="800"
        fill="#090b10"
      />

      <rect
        x="25"
        y="25"
        width="550"
        height="750"
        rx="30"
        fill="#11151d"
        stroke="#3f4652"
        stroke-width="4"
      />

      <text
        x="300"
        y="350"
        text-anchor="middle"
        fill="#717987"
        font-family="Arial, sans-serif"
        font-size="32"
        font-weight="900">
        ARTWORK
      </text>

      <text
        x="300"
        y="395"
        text-anchor="middle"
        fill="#4b5563"
        font-family="Arial, sans-serif"
        font-size="22">
        UNAVAILABLE
      </text>

    </svg>
  `);

export default function VerifiedArtwork({
  character,
  activeForm,
  className = "",
  alt,
  showVerification = false,
  ...props
}) {
  const [
    src,
    setSrc,
  ] = useState(PLACEHOLDER);

  const [
    status,
    setStatus,
  ] = useState(
    ARTWORK_STATUS.LOADING
  );

  const [
    verification,
    setVerification,
  ] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus(
        ARTWORK_STATUS.LOADING
      );

      setVerification(null);

      if (!character) {
        setSrc(PLACEHOLDER);

        setStatus(
          ARTWORK_STATUS.REJECT
        );

        return;
      }

      /*
        Identity normalization check.
      */

      const characterId =
        character.characterId;

      const formId =
        activeForm?.formId ||
        null;

      const formCharacterId =
        activeForm?.characterId ||
        null;

      console.log(
        "[Anime Arena] Artwork identity:",
        {
          characterId,
          characterName:
            character.name,

          formId,

          formCharacterId,

          formName:
            activeForm?.name,
        }
      );

      /*
        Resolve artwork.
      */

      const artwork =
        await resolveCharacterArtwork(
          character,
          activeForm
        );

      if (cancelled) return;

      /*
        Canon / identity safety gate.
      */

      const check =
        await artworkSafetyGate({
          character,
          activeForm,
          imageUrl: artwork,
        });

      if (cancelled) return;

      setVerification(check);

      if (
        check?.safeToDisplay
      ) {
        setSrc(
          artwork ||
          PLACEHOLDER
        );

        setStatus(
          check.status ||
          ARTWORK_STATUS.PASS
        );
      } else {
        setSrc(PLACEHOLDER);

        setStatus(
          ARTWORK_STATUS.REJECT
        );
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [
    character,
    activeForm,
  ]);

  return (
    <div
      className={`relative ${className}`}
    >
      <img
        {...props}
        src={src}
        alt={
          alt ||
          `${character?.name || "Character"}${
            activeForm?.name
              ? ` — ${activeForm.name}`
              : ""
          }`
        }
        className="w-full h-full object-cover"
        onError={() => {
          setSrc(PLACEHOLDER);

          setStatus(
            ARTWORK_STATUS.REJECT
          );
        }}
      />

      {showVerification &&
        status !==
          ARTWORK_STATUS.LOADING && (
          <div
            className="
              absolute
              top-2
              right-2
              px-2
              py-1
              rounded-md
              text-[10px]
              font-black
              bg-black/80
              text-white
            "
          >
            {status ===
            ARTWORK_STATUS.PASS
              ? "✓ VERIFIED"
              : status ===
                ARTWORK_STATUS.WARNING
              ? "⚠ REVIEW"
              : "✕ REJECTED"}
          </div>
        )}
    </div>
  );
}