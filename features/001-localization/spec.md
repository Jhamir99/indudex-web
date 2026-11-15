# Spec: Localization

Status: outline, already built (before the features structure existed). This spec records what exists; write its requirements with `/spec` if it changes.

## Context and goal

The site is in English, Spanish and Catalan, each under its own URL prefix, and the same plate works in every locale. The legacy had six languages (English at the root, `/es/`, `/cat/`, `/fr/`, `/nl/`, `/de/`).

**Goal:** every page in `en`, `es` and `ca` under `/en`, `/es` and `/cat`, with no hardcoded copy and every message key present in all three locales.

## What exists

- next-intl 4, locales `en`/`es`/`ca`, URL prefixes `/en`, `/es`, `/cat` (`src/i18n/routing.ts`).
- `src/proxy.ts`: `/` redirected by `Accept-Language`; unknown prefixes to `/en/...`.
- `messages/<locale>.json`, loaded by `src/i18n/request.ts`; `messages/en.json` is the source.
- `src/global.d.ts` types the message keys; `src/i18n/messages.test.ts` fails when `es`/`ca` keys differ from `en`.
- `e2e/i18n.spec.ts` on mobile, tablet and desktop.

## Legacy reference

- `app/lib/i18n.ts` and `app/lib/{es,ca,...}.ts` (copy and translations), `web/app/i18n`, `web/app/components/LanguageMenu.tsx`, `docs/research/language-choice.md`.

## Open questions

- None.
