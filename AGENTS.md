<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Indudex Web — agent guide

> Content outside the `nextjs-agent-rules` block above is project-owned. `next dev` only rewrites what is between its markers.

## What this is

Indudex is a free, public job portal for **engineers and technicians in Europe** (engineering and other technical careers). This repository is **only the frontend** (`indudex-web`).

It is a rewrite of the monolith [`JustJans/indudex`](https://github.com/JustJans/indudex), which mixed the web app (`app/`), the crawler/pile builder (`builder/`) and ops scripts (`ops/`) in one poorly structured codebase. The rewrite splits it into:

- **Frontend** — this repo: Next.js App Router UI.
- **Backend** — the sibling repo `indudex-api` (Hono): REST API, crawler, pile build and catalogues.

Use the legacy repo as the **behavioral reference** (what the product does and how matching works), not as code to copy: it is being restructured precisely because its structure is bad.

## Non-negotiable product rules

These carry over unchanged from the legacy product. Do not weaken them without an explicit decision from the owner.

1. **No accounts, no email, nothing stored about the user.** No sign-up, no login, no server-side user profiles, no third-party tracking.
2. **The CV never leaves the browser.** It is read and parsed client-side to tick occupations, degrees and languages. Never send the file or its text to the backend or any other service.
3. **The "plate".** The user's whole filter profile is packed into a short code that lives after the `#` of the URL, so it can be copied, pasted and bookmarked. The hash is never sent to the server by the browser — keep it that way. The same plate must work in every locale, and the encoding must stay backward-compatible (old plates must keep decoding).
4. **Expired adverts are hidden**, and the UI says when the offer pile was last rebuilt.
5. **Source attribution is shown** as each source's licence requires (e.g. "Jobs by Adzuna").

## Frontend / backend boundary

- The FE **never** crawls sources, builds the pile, deduplicates or translates adverts. That is the backend's job (legacy `builder/`).
- The FE consumes the backend only through its REST API, via a single client module (planned: `src/lib/api/`). Do not scatter `fetch` calls to the API across components.
- The API is **hybrid**: the pile as JSON shards (by locale, occupation family and country) + index + metadata, which the client downloads selectively and filters locally; plus regular endpoints for catalogues, advert detail, sources and pile status.
- **Adverts come already translated** into every locale (`en`, `es`, `ca`). Always request the data for the current locale, and never translate adverts in the browser. An advert keeps the same id in every locale, so switching language keeps the same results and the same plate.
- **Contract**: the backend's Zod schemas (`@hono/zod-openapi`) generate an OpenAPI spec. The FE generates its types and client from it with `openapi-typescript` + `openapi-fetch`. Never hand-write API types, and there is no shared types package.
- Anything derived from the CV or the plate is computed on the client.

## Internationalization

- Locales: **`en`, `es`, `ca`**, every one with a URL prefix: `/en/...`, `/es/...` and `/cat/...`. Catalan's locale code is `ca` (the valid language tag, used by `Intl` and `<html lang>`), while its URL prefix stays `/cat` as on the legacy site. Use `ca` everywhere in code and data; only the URL says `cat`.
- Library: **next-intl**; all routes live under `src/app/[locale]/`. Use `Link`, `redirect`, `useRouter` and friends from `@/i18n/navigation`, not from `next/link` / `next/navigation`, so the locale prefix is kept.
- No hardcoded user-facing copy in components: every string goes through next-intl messages, and every key must exist in all three locales.

## Conventions

- **English everywhere**: code, identifiers, comments, docs, commit messages, PR descriptions.
- **UI copy is written in English first**: `messages/en.json` is the source of truth, and `es`/`ca` are translations of it. New copy is added in English, then translated.
- **Simple code**: prefer the plainest solution that works; no abstractions until a second real use needs them. Use descriptive names (no cryptic abbreviations). Comment only where it adds something the code cannot say, such as *why* a non-obvious decision was made, never *what* the next line does.
- **Clean, responsive design**: every new screen must look and work well on mobile, tablet and desktop. Build mobile-first with Tailwind breakpoints, avoid horizontal scrolling and fixed widths, and keep touch targets comfortable. Check all three sizes before calling a screen done.
- TypeScript in strict mode; import from `src` via the `@/*` alias.
- Server Components by default. Add `"use client"` only where needed — notably CV reading, the plate codec and client-side filtering.
- Deployment target is a **self-hosted Node server** (`next build` + `next start`, likely in Docker). Do not rely on Vercel-only features.
- Testing: **Vitest + Testing Library** for unit/component tests (`src/**/*.test.ts(x)`, next to the code they test), **Playwright** for end-to-end (`e2e/`). The plate codec and matching logic must have unit tests, including decoding of legacy plates. Vitest cannot render `async` Server Components: cover those with Playwright. Every new screen gets an e2e check, which runs on mobile, tablet and desktop sizes.

## Open decisions

Do not assume an answer to these; ask or leave a clear TODO.

- **Backend base URL**: the env var name, and whether it is public (`NEXT_PUBLIC_*`) or server-only. The API runs on port 4000 by default.
- **Matching engine** (legacy `app/lib/`: `codec`, `cv`, `query`, `search`, `gates`, `titles`, …): port to TypeScript inside this repo vs. extract into a package shared with the backend and Argus (the Telegram bot that originated the engine).
