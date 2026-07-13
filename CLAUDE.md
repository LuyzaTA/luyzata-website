# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio for Luyza Alexandre (Data Engineer / DBA), deployed on
Vercel at `luyzata-website.vercel.app`. It is a **static site with no build step** — plain
HTML/CSS/vanilla JS — plus **one Vercel serverless function** (`api/tts.js`) for text-to-speech.

There is no `package.json`, bundler, linter, test suite, or framework. Editing a file and
reloading the page is the entire dev loop.

## Running locally

Serve the repo root over HTTP (needed for the fonts/relative paths to behave; opening
`index.html` via `file://` mostly works but the `/api/tts` call will not):

```bash
python -m http.server 8000        # then open http://localhost:8000
# or
npx vercel dev                    # also runs api/tts.js locally (needs GOOGLE_TTS_API_KEY)
```

The TTS endpoint only works under `vercel dev` or on Vercel, and requires the
`GOOGLE_TTS_API_KEY` environment variable. Without it the frontend silently falls back to
the browser's Web Speech API.

## Deployment (Vercel & GitHub)

- **GitHub repo:** `https://github.com/LuyzaTA/luyzata-website.git` (owner `LuyzaTA`).
  Note the local folder is `luyzata-portfolio` but the remote repo is named `luyzata-website`.
- **Default branch:** `main`. Vercel's GitHub integration auto-deploys on push to `main`;
  there is no CI/Actions config in the repo.
- **Production URL:** `https://luyzata-website.vercel.app` (also hard-coded in the Open Graph
  tags in `index.html` — update those if the domain ever changes).
- **No Vercel config committed** — no `vercel.json`, `.vercelignore`, or `.vercel/`. Vercel
  auto-detects this as a static site and treats any file under `/api` as a serverless
  function, so `api/tts.js` is deployed automatically.
- **Required env var:** `GOOGLE_TTS_API_KEY` must be set in the Vercel project settings for
  `api/tts.js`. It is intentionally not in the repo; without it the frontend falls back to
  the browser Web Speech API.

### Deploy workflow (always do this for every new feature/change)

Deploying to GitHub deploys to Vercel — the two are the same action, since Vercel
auto-deploys on push to `main`. There is no separate Vercel step. For every change:

1. **Pull first** to avoid conflicts: `git pull origin main`
2. **Make the change** and verify it locally (see *Running locally*).
3. **Commit locally** with a clear message describing the feature/change:
   `git add <files> && git commit -m "..."`
4. **Push to deploy:** `git push origin main` — this updates GitHub *and* triggers the
   Vercel production deploy automatically. Confirm the change on
   `https://luyzata-website.vercel.app` after the build finishes.

Work directly on `main` (that is the branch Vercel deploys). Do not leave finished features
uncommitted — commit and push so local, GitHub, and Vercel stay in sync.

## Architecture

Everything hangs off the single `index.html`. The three scripts at the bottom of the body
are independent IIFEs, loaded in this order and coupled only through the DOM:

- **`js/main.js`** — scroll/nav behavior and entrance animations. Nav toggles
  `nav--hero` / `nav--scrolled` based on hero height; active-link highlighting; mobile menu;
  an `IntersectionObserver` reveals any element with class `.animate` by adding `.visible`
  (staggered by sibling index). Respects `prefers-reduced-motion`.

- **`js/i18n.js`** — trilingual content (EN / PT / NL). A single `T` object maps keys to
  strings for each language. `setLang()` walks `[data-i18n]` (sets `textContent`) and
  `[data-i18n-html]` (sets `innerHTML`, used for strings containing markup like `<br>`),
  toggles `.lang-btn--active`, and persists choice to `localStorage['lang']`. Default is `en`.

- **`js/tts.js`** — the "Luister in het Nederlands" button. Holds a **hand-curated Dutch
  narration script** (the `SCRIPT` array) — deliberately *not* scraped from the DOM, so it
  reads as natural speech. It POSTs each paragraph to `/api/tts`, plays the returned MP3
  sequentially, and falls back to the Web Speech API if the endpoint fails. Clicking it also
  forces the page language to Dutch via `switchLang('nl')`.

- **`api/tts.js`** — Vercel serverless function proxying text to **Google Cloud
  Text-to-Speech** (voice `nl-NL-Wavenet-D`). POST-only, validates/limits input to 5000
  chars, returns `audio/mpeg`. Note: the frontend comments still say "ElevenLabs" but the
  live backend is Google TTS — treat the backend file as source of truth.

- **`js/theme.js`** — light/dark theme toggle (the sun/moon button in the nav). Loaded first.
  The actual initial theme is set by a small **inline script in `<head>`** (before first paint,
  to avoid a flash): it reads `localStorage['theme']`, falling back to the OS
  `prefers-color-scheme`. `theme.js` only wires the toggle button (flips + persists) and keeps
  following the OS setting live *until* the visitor makes an explicit choice.

- **`css/style.css`** — one stylesheet. Design tokens live in `:root` (dark cinematic theme,
  `--accent: #ff6b2b`). Section styling is organized under banner comments.
  **Theming:** light mode is a `:root[data-theme="light"]` block that overrides the color
  tokens. Any theme-dependent color must go through a token (`--bg`, `--surface`, `--text*`,
  `--border*`, `--glass*`, `--hover*`, `--shadow*`) — do not hardcode dark-only values, or
  they will break in light mode. **Exception — the hero network graph:** it is built from
  dark-navy SVG node circles with white labels *inside* them, so it cannot recolor cleanly.
  Instead `.hero__visual` gives it a **light panel in BOTH themes** (dark-on-dark read as
  muddy in dark mode). Node labels that sit *inside* a navy circle stay white; the leaf
  labels (`.sv-leaf .sv-nlabel`) sit on the light panel, so they are positioned below their
  node and colored dark. Keep that in mind when adding/moving graph labels.

## Content-editing conventions

- **Any user-facing text must be added in all three languages** in `js/i18n.js`, and the HTML
  element must carry a matching `data-i18n` (or `data-i18n-html`) key. Text hard-coded in
  `index.html` will not translate.
- When adding narrated content, also update the `SCRIPT` array in `js/tts.js` — it is
  maintained separately and by hand.
- To animate a new element on scroll, give it class `.animate` (it becomes visible via
  `.visible`).
