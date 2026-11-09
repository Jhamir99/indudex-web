# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Read `AGENTS.md` first.** It holds the product context, the non-negotiable product rules (privacy, CV never uploaded, the URL-hash "plate"), the FE/BE boundary, i18n rules and open decisions. This file only adds Claude Code specifics and does not repeat them.

## Status

Frontend of Indudex (job portal for engineers and technicians in Europe), rewritten from the monolith [`JustJans/indudex`](https://github.com/JustJans/indudex). Only the i18n setup and a placeholder home page exist so far. Update this file as real architecture emerges.

## Core conventions

Full rules are in `AGENTS.md`. The ones to keep in mind on every change:

- Code and UI copy in English (`messages/en.json` is the source; `es`/`ca` are translations).
- Simple code, descriptive names, comments only where they add something.
- Clean, responsive design: every new screen must work on mobile, tablet and desktop (mobile-first Tailwind).

## Commands

```bash
npm run dev     # next dev (http://localhost:3000)
npm run build   # next build
npm run start   # serve the production build
npm run lint    # eslint (flat config in eslint.config.mjs, eslint-config-next)
npx tsc --noEmit  # type-check
npm test            # vitest in watch mode
npm run test:run    # vitest once (use this to verify a change)
npx vitest run src/i18n/messages.test.ts   # a single test file
npm run test:e2e    # playwright: builds, serves on :3100, runs e2e/ on mobile, tablet and desktop
npx playwright test e2e/i18n.spec.ts --project=mobile   # one file, one size
```

Testing setup:

- `vitest.config.mts`: jsdom, `@/*` alias via `vite-tsconfig-paths`, setup in `vitest.setup.ts` (jest-dom matchers + Testing Library cleanup).
- `playwright.config.ts`: three projects (`mobile` Pixel 7, `tablet` iPad Mini, `desktop`), all on Chromium, so only Chromium is installed (`npx playwright install chromium`). The web server is a production build on port 3100; locally it reuses one already running there.
- `src/i18n/messages.test.ts` fails if `es.json` or `ca.json` have different keys from `en.json`.

## Stack and conventions

- Next.js 16.4.5 (App Router, `src/app/`), React 19.3, TypeScript (strict), Tailwind CSS v4.
- **This Next.js version has breaking changes versus common training data.** Read the relevant guide in `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`) before writing Next.js code, and heed deprecation notices. Example already in the repo: layouts and pages type props with the global `LayoutProps<"/[locale]">` / `PageProps<"/[locale]">` helpers instead of hand-written prop types. Another: `middleware.ts` is now `proxy.ts`. If `tsc` reports errors in `.next/types` after moving routes, run `npm run build` (or `next dev`) to regenerate them.
- Path alias: `@/*` → `./src/*`.
- Tailwind v4 is wired through Turbopack in `next.config.ts` (`turbopack.rules` runs `@tailwindcss/turbopack` on `*.css`), not via a PostCSS config. Theme tokens live in `src/app/globals.css` (`@theme inline`, CSS variables `--background`/`--foreground` with a `prefers-color-scheme` dark override).
- Fonts: Geist / Geist Mono loaded via `next/font/google` in `src/app/[locale]/layout.tsx` and exposed as `--font-geist-sans` / `--font-geist-mono` CSS variables.
- i18n: next-intl 4. Locales `en` / `es` / `ca`, URL prefixes `/en`, `/es`, `/cat` (set in `src/i18n/routing.ts`). Wiring:
  - `src/proxy.ts` runs the next-intl middleware: redirects `/` by `Accept-Language`, and unknown prefixes to `/en/...`.
  - `src/i18n/request.ts` loads `messages/<locale>.json`; `next.config.ts` wraps the config with the next-intl plugin.
  - `src/app/[locale]/layout.tsx` is the root layout: validates the locale, sets `<html lang>` and wraps the app in `NextIntlClientProvider`.
  - `src/global.d.ts` types locales and message keys from `messages/en.json`, so a missing key is a type error.
  - Every page and layout calls `setRequestLocale(locale)` so it can render statically.
  Check next-intl's docs for the installed version before changing this setup.
- Deploy: self-hosted Node (`next start`, likely Docker). Consider `output: "standalone"` in `next.config.ts` when the Docker image is set up.
- `AGENTS.md` has a block managed by `next dev` between `nextjs-agent-rules` markers; edit only outside it, and commit it rather than deleting it.

## Intended structure

Target layout, not yet created — adjust here when it changes:

```
src/
  app/[locale]/      # all routes, one segment per locale
  components/        # shared UI
  lib/api/           # the only REST client for the backend
  lib/               # plate codec, CV reading, client-side filtering
  i18n/              # next-intl routing, navigation and request config
  proxy.ts           # next-intl locale middleware
messages/            # en.json, es.json, ca.json
```

## Legacy reference

When reproducing behavior, consult the legacy repo (`JustJans/indudex`) rather than guessing:

- `app/lib/codec.js` — plate encoding/decoding (must stay compatible).
- `app/lib/cv.js` — in-browser CV reading.
- `app/lib/query.js`, `search.js`, `gates.js`, `titles.js`, `distance.js` — filtering and matching rules.
- `app/lib/i18n.js` and `app/lib/{es,ca,de,fr,...}.js` — existing copy and translations.
- `builder/` — backend concern; read only to understand the data shape the FE will receive.
