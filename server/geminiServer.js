/* =========================================================
   ANIME ARENA — GEMINI SERVER
   Gemini 3.6 Flash
   Interactions API
========================================================= */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT =
  Number(
    process.env.GEMINI_PORT
  ) || 3001;

const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY;

const GEMINI_MODEL =
  process.env.GEMINI_MODEL ||
  "gemini-3.6-flash";


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors()
);

app.use(
  express.json({
    limit: "2mb",
  })
);


/* =========================================================
   HEALTH CHECK
========================================================= */

app.get(
  "/api/gemini/health",
  (req, res) => {
    res.json({
      ok: true,

      configured:
        Boolean(
          GEMINI_API_KEY
        ),

      model:
        GEMINI_MODEL,

      api:
        "Gemini Interactions API",
    });
  }
);


/* =========================================================
   GEMINI INTERACTION
========================================================= */

app.post(
  "/api/gemini",
  async (req, res) => {
    try {

      const prompt =
        req.body?.prompt;


      /* -----------------------------------------------
         VALIDATE PROMPT
      ------------------------------------------------ */

      if (
        !prompt ||
        typeof prompt !==
          "string"
      ) {
        return res
          .status(400)
          .json({
            error:
              "A valid prompt is required.",
          });
      }


      /* -----------------------------------------------
         VALIDATE API KEY
      ------------------------------------------------ */

      if (
        !GEMINI_API_KEY
      ) {
        return res
          .status(500)
          .json({
            error:
              "GEMINI_API_KEY is missing from .env",
          });
      }


      /* -----------------------------------------------
         CURRENT GEMINI INTERACTIONS ENDPOINT
      ------------------------------------------------ */

      const endpoint =
        "https://generativelanguage.googleapis.com/v1beta/interactions";


      /* -----------------------------------------------
         REQUEST
      ------------------------------------------------ */

      const response =
        await fetch(
          endpoint,
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",

              "x-goog-api-key":
                GEMINI_API_KEY,
            },

            body:
              JSON.stringify({
                model:
                  GEMINI_MODEL,

                input:
                  prompt,

                /*
                  Tell Gemini that the application
                  expects JSON text.
                */
                response_format: {
                  type: "text",

                  mime_type:
                    "application/json",
                },

                /*
                  Keep the model focused.
                  The actual reasoning remains
                  inside Gemini.
                */
                generation_config: {
                  temperature:
                    0.2,

                  max_tokens:
                    12000,
                },
              }),
          }
        );


      /* -----------------------------------------------
         READ RESPONSE
      ------------------------------------------------ */

      const data =
        await response.json();


      if (
        !response.ok
      ) {
        console.error(
          "❌ Gemini API error:",
          JSON.stringify(
            data,
            null,
            2
          )
        );

        return res
          .status(
            response.status
          )
          .json({
            error:
              data?.error
                ?.message ||
              "Gemini API request failed.",

            details:
              data,
          });
      }


      /* -----------------------------------------------
         EXTRACT MODEL OUTPUT
      ------------------------------------------------ */

      let text =
        "";


      /*
        Current Interactions API:
        steps[]
      */

      if (
        Array.isArray(
          data?.steps
        )
      ) {
        const modelSteps =
          data.steps.filter(
            (step) =>
              step?.type ===
              "model_output"
          );


        const latestStep =
          modelSteps[
            modelSteps.length - 1
          ];


        if (
          Array.isArray(
            latestStep?.content
          )
        ) {
          text =
            latestStep.content
              .map(
                (part) =>
                  part?.text ||
                  ""
              )
              .join("")
              .trim();
        }
      }


      /*
        Compatibility fallback
      */

      if (
        !text &&
        data?.output_text
      ) {
        text =
          String(
            data.output_text
          ).trim();
      }


      /*
        Older-shaped fallback
        in case Google returns
        a compatible response.
      */

      if (
        !text &&
        Array.isArray(
          data?.outputs
        )
      ) {
        text =
          data.outputs
            .map(
              (item) =>
                item?.text ||
                ""
            )
            .join("")
            .trim();
      }


      /* -----------------------------------------------
         EMPTY RESPONSE
      ------------------------------------------------ */

      if (!text) {
        console.error(
          "❌ Gemini returned no usable text:",
          JSON.stringify(
            data,
            null,
            2
          )
        );

        return res
          .status(502)
          .json({
            error:
              "Gemini returned an empty response.",

            raw:
              data,
          });
      }


      /* -----------------------------------------------
         SUCCESS
      ------------------------------------------------ */

      return res.json({
        text,

        model:
          GEMINI_MODEL,

        interactionId:
          data?.id ||
          null,

        status:
          data?.status ||
          "completed",
      });

    } catch (
      error
    ) {

      console.error(
        "❌ Gemini server failure:",
        error
      );

      return res
        .status(500)
        .json({
          error:
            error?.message ||
            "Internal Gemini server error.",
        });
    }
  }
);


/* =========================================================
   START SERVER
========================================================= */

app.listen(
  PORT,
  () => {

    console.log(
      ""
    );

    console.log(
      "========================================"
    );

    console.log(
      " 🤖 ANIME ARENA GEMINI SERVER"
    );

    console.log(
      "========================================"
    );

    console.log(
      ` 🌐 http://localhost:${PORT}`
    );

    console.log(
      ` 🧠 Model: ${GEMINI_MODEL}`
    );

    console.log(
      " 🔌 API: Gemini Interactions API"
    );

    console.log(
      GEMINI_API_KEY
        ? " 🔑 API key detected"
        : " ⚠️ API key missing"
    );

    console.log(
      "========================================"
    );

  }
);