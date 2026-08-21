/*
  Anime Arena — Grand Tournament
  Smart Artwork Resolver v4
  Identity Locked
*/

import {
  createCharacterId,
  createFormId,
  createArtworkId,
  isFormOwnedByCharacter,
} from "./tournamentCharacterIdentity";

const IMAGE_CACHE_PREFIX =
  "anime_arena_art_cache_v4_";

const PLACEHOLDER =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
      <rect width="600" height="800" fill="#090b10"/>
      <rect x="25" y="25" width="550" height="750" rx="30" fill="#11151d" stroke="#3f4652" stroke-width="4"/>
      <text x="300" y="350" text-anchor="middle"
        fill="#717987" font-family="Arial, sans-serif"
        font-size="32" font-weight="900">
        ARTWORK
      </text>
      <text x="300" y="395" text-anchor="middle"
        fill="#4b5563" font-family="Arial, sans-serif"
        font-size="22">
        UNAVAILABLE
      </text>
    </svg>
  `);

/* =========================================================
   NORMALIZATION
========================================================= */

export function normalizeCharacterName(name) {
  return String(name || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/* =========================================================
   CACHE
========================================================= */

function getCacheKey(character, form = null) {
  const characterId =
    createCharacterId(character);

  const formId = form
    ? createFormId(character, form)
    : null;

  const identity =
    formId || characterId;

  return (
    IMAGE_CACHE_PREFIX +
    normalizeCharacterName(identity)
  );
}

export function getCachedArtwork(
  character,
  form = null
) {
  try {
    return (
      localStorage.getItem(
        getCacheKey(character, form)
      ) || null
    );
  } catch {
    return null;
  }
}

export function setCachedArtwork(
  character,
  form,
  url
) {
  if (!url) return;

  try {
    localStorage.setItem(
      getCacheKey(character, form),
      url
    );
  } catch {
    // Ignore storage limits
  }
}

/* =========================================================
   IMAGE VALIDATION
========================================================= */

export function verifyImageAccessibility(
  url,
  timeoutMs = 3000
) {
  return new Promise((resolve) => {
    if (
      !url ||
      typeof url !== "string"
    ) {
      resolve({
        ok: false,
        width: 0,
        height: 0,
        latencyMs: 0,
      });
      return;
    }

    const start = performance.now();
    const img = new Image();
    let settled = false;

    const finish = (result) => {
      if (settled) return;

      settled = true;
      clearTimeout(timer);
      resolve(result);
    };

    const timer = setTimeout(() => {
      finish({
        ok: false,
        width: 0,
        height: 0,
        latencyMs: Math.round(
          performance.now() - start
        ),
      });
    }, timeoutMs);

    img.onload = () => {
      finish({
        ok: true,
        width: img.naturalWidth,
        height: img.naturalHeight,
        latencyMs: Math.round(
          performance.now() - start
        ),
      });
    };

    img.onerror = () => {
      finish({
        ok: false,
        width: 0,
        height: 0,
        latencyMs: Math.round(
          performance.now() - start
        ),
      });
    };

    img.src = url;
  });
}

/* =========================================================
   ARTWORK IDENTITY VALIDATION
========================================================= */

function validateArtworkIdentity(
  character,
  activeForm
) {
  if (!character) {
    return {
      valid: false,
      characterId: null,
      formId: null,
      artworkId: null,
    };
  }

  const characterId =
    createCharacterId(character);

  if (!activeForm) {
    return {
      valid: true,
      characterId,
      formId: null,
      artworkId:
        createArtworkId(character),
    };
  }

  const validForm =
    isFormOwnedByCharacter(
      {
        ...character,
        characterId,
      },
      activeForm
    );

  if (!validForm) {
    return {
      valid: false,
      characterId,
      formId: null,
      artworkId: null,
    };
  }

  const formId =
    createFormId(
      {
        ...character,
        characterId,
      },
      activeForm
    );

  return {
    valid: true,
    characterId,
    formId,
    artworkId:
      createArtworkId(
        {
          ...character,
          characterId,
        },
        {
          ...activeForm,
          formId,
        }
      ),
  };
}

/* =========================================================
   LOCAL ARTWORK
========================================================= */

async function checkLocalArtwork(
  character,
  charName,
  formName
) {
  const verse =
    character?.verseId ||
    character?.verse ||
    "general";

  if (formName) {
    const formPath =
      `/tournament/artwork/${verse}/` +
      `${normalizeCharacterName(charName)}_` +
      `${normalizeCharacterName(formName)}.webp`;

    const formCheck =
      await verifyImageAccessibility(
        formPath,
        700
      );

    if (formCheck.ok) {
      return formPath;
    }
  }

  const basePath =
    `/tournament/artwork/${verse}/` +
    `${normalizeCharacterName(charName)}.webp`;

  const baseCheck =
    await verifyImageAccessibility(
      basePath,
      700
    );

  if (baseCheck.ok) {
    return basePath;
  }

  return null;
}

/* =========================================================
   ANILIST
========================================================= */

async function fetchAniListImage(
  characterName
) {
  const query = `
    query ($search: String) {
      Character(search: $search) {
        id
        name {
          full
          native
        }
        image {
          large
          medium
        }
      }
    }
  `;

  try {
    const cleanSearch =
      String(characterName || "")
        .replace(/\([^)]*\)/g, "")
        .trim();

    if (!cleanSearch) {
      return null;
    }

    const response =
      await fetch(
        "https://graphql.anilist.co",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Accept:
              "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              search: cleanSearch,
            },
          }),
        }
      );

    if (!response.ok) {
      return null;
    }

    const json =
      await response.json();

    return (
      json?.data?.Character?.image
        ?.large ||
      json?.data?.Character?.image
        ?.medium ||
      null
    );
  } catch {
    return null;
  }
}

/* =========================================================
   JIKAN
========================================================= */

async function fetchJikanImage(
  characterName
) {
  try {
    const cleanSearch =
      String(characterName || "")
        .replace(/\([^)]*\)/g, "")
        .trim();

    if (!cleanSearch) {
      return null;
    }

    const url =
      "https://api.jikan.moe/v4/characters" +
      `?q=${encodeURIComponent(
        cleanSearch
      )}&limit=1`;

    const response =
      await fetch(url);

    if (!response.ok) {
      return null;
    }

    const json =
      await response.json();

    return (
      json?.data?.[0]?.images?.jpg
        ?.image_url ||
      json?.data?.[0]?.images?.webp
        ?.image_url ||
      null
    );
  } catch {
    return null;
  }
}

/* =========================================================
   EXPLICIT ARTWORK
========================================================= */

async function resolveExplicitArtwork(
  character,
  activeForm
) {
  const formArtwork =
    activeForm?.artwork;

  if (formArtwork) {
    const candidates = [
      formArtwork.portrait,
      formArtwork.card,
      formArtwork.image,
      formArtwork.url,
    ].filter(Boolean);

    for (const url of candidates) {
      const check =
        await verifyImageAccessibility(url);

      if (check.ok) {
        return url;
      }
    }
  }

  const characterArtwork =
    character?.artwork;

  if (characterArtwork) {
    const candidates = [
      characterArtwork.portrait,
      characterArtwork.card,
      characterArtwork.image,
      characterArtwork.url,
    ].filter(Boolean);

    for (const url of candidates) {
      const check =
        await verifyImageAccessibility(url);

      if (check.ok) {
        return url;
      }
    }
  }

  return null;
}

/* =========================================================
   MAIN RESOLVER
========================================================= */

export async function resolveCharacterArtwork(
  character,
  activeForm = null
) {
  if (!character) {
    return PLACEHOLDER;
  }

  const identity =
    validateArtworkIdentity(
      character,
      activeForm
    );

  if (!identity.valid) {
    console.warn(
      "[Anime Arena] Artwork identity mismatch:",
      {
        characterId:
          identity.characterId,
        activeForm,
      }
    );

    return PLACEHOLDER;
  }

  const formName =
    activeForm?.name ||
    (typeof activeForm === "string"
      ? activeForm
      : "");

  const charName =
    character.name ||
    character.canonName ||
    "Character";

  /* =====================================================
     1. EXPLICIT ARTWORK
  ===================================================== */

  const explicit =
    await resolveExplicitArtwork(
      character,
      activeForm
    );

  if (explicit) {
    return explicit;
  }

  /* =====================================================
     2. LOCAL ARTWORK
  ===================================================== */

  const local =
    await checkLocalArtwork(
      character,
      charName,
      formName
    );

  if (local) {
    return local;
  }

  /* =====================================================
     3. CACHE
  ===================================================== */

  const cached =
    getCachedArtwork(
      character,
      activeForm
    );

  if (cached) {
    const check =
      await verifyImageAccessibility(
        cached,
        1500
      );

    if (check.ok) {
      return cached;
    }
  }

  /* =====================================================
     4. ANILIST
  ===================================================== */

  const anilist =
    await fetchAniListImage(
      charName
    );

  if (anilist) {
    const check =
      await verifyImageAccessibility(
        anilist,
        2000
      );

    if (check.ok) {
      setCachedArtwork(
        character,
        activeForm,
        anilist
      );

      return anilist;
    }
  }

  /* =====================================================
     5. JIKAN
  ===================================================== */

  const jikan =
    await fetchJikanImage(
      charName
    );

  if (jikan) {
    const check =
      await verifyImageAccessibility(
        jikan,
        2000
      );

    if (check.ok) {
      setCachedArtwork(
        character,
        activeForm,
        jikan
      );

      return jikan;
    }
  }

  /* =====================================================
     6. LOCAL PLACEHOLDER
     NO DICEBEAR
  ===================================================== */

  return PLACEHOLDER;
}