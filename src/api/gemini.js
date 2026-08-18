/* =========================================================
   ANIME ARENA — GEMINI API CLIENT
========================================================= */

const GEMINI_ENDPOINT =
  "/api/gemini";

const GEMINI_HEALTH_ENDPOINT =
  "/api/gemini/health";


/* =========================================================
   GEMINI REQUEST
========================================================= */

export async function askGemini(
  prompt
) {
  if (
    !prompt ||
    typeof prompt !== "string"
  ) {
    throw new Error(
      "Gemini prompt is empty."
    );
  }

  const response =
    await fetch(
      GEMINI_ENDPOINT,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          prompt,
        }),
      }
    );

  let data = null;

  try {
    data =
      await response.json();
  } catch {
    throw new Error(
      `Gemini server returned invalid JSON (${response.status}).`
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.error ||
        `Gemini request failed (${response.status}).`
    );
  }

  return (
    data?.text ??
    data?.response ??
    data?.content ??
    data
  );
}


/* =========================================================
   GEMINI HEALTH CHECK
========================================================= */

export async function checkGeminiHealth() {
  try {
    const response =
      await fetch(
        GEMINI_HEALTH_ENDPOINT,
        {
          method: "GET",
          headers: {
            Accept:
              "application/json",
          },
        }
      );

    let data = null;

    try {
      data =
        await response.json();
    } catch {
      return {
        ok: false,
        configured: false,
        error:
          "Gemini health endpoint returned invalid JSON.",
      };
    }

    return {
      ok:
        Boolean(
          response.ok &&
          data?.ok
        ),

      configured:
        Boolean(
          data?.configured
        ),

      model:
        data?.model ||
        null,

      api:
        data?.api ||
        null,

      error:
        response.ok
          ? null
          : data?.error ||
            "Gemini health check failed.",
    };
  } catch (
    error
  ) {
    return {
      ok: false,

      configured: false,

      model: null,

      api: null,

      error:
        error?.message ||
        "Unable to reach Gemini server.",
    };
  }
}


/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default askGemini;