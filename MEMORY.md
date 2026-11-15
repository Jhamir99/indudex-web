# MEMORY

Working memory of indudex-web. Rules for keeping it: see "Memory" in `AGENTS.md`. Last updated: 2026-11-15.

## Current state

**Built**

- Next.js 16 App Router app with Tailwind v4 under `src/app/[locale]/`.
- i18n with next-intl: `en`, `es`, `ca` (URL prefixes `/en`, `/es`, `/cat`), middleware in `src/proxy.ts`, messages in `messages/*.json` with a test that keeps the keys identical.
- Typed API client `src/lib/api/client.ts` (openapi-fetch); types generated into `src/lib/api/schema.d.ts` (currently only `/health`). Base URL from `NEXT_PUBLIC_API_URL`.
- Placeholder home page.
- Tooling: Vitest + Testing Library, Playwright e2e on mobile/tablet/desktop (`e2e/i18n.spec.ts`), ESLint, Prettier, husky + lint-staged, GitHub Actions CI, Dependabot, Dockerfile, licence, README.

**Not built yet**

- Every product feature: plate codec, CV reading, client-side matching and filtering, offer list and detail, filters UI, source attribution, "last rebuilt" notice, real API data (the API has no data endpoints yet).

**Next**

- When the API exposes catalogue/shard endpoints, run `npm run api:types`, then write the specs of `003-plate` and `004-offer-pile` with `/spec` and build them (plate codec with legacy-plate tests first). Order and status of every feature: `features/README.md`.

## Decisions

- 2026-11-15: work organised by feature, like Session Recorder: `features/NNN-<feature>/{spec,plan,tasks}.md` with `features/README.md` as the index (numbered in build order; the code folders have no number), and feature-first code in `src/features/<feature>/` with thin route files and `src/shared/` for what two or more features use. The legacy web was split into 10 features (outline specs). Why: smaller specs closed one by one, code grouped by what it does (the legacy web was already organised this way).
- No `output: "standalone"`: it breaks the `/cat` → `/ca` rewrite (verified with Next 16.4.5).
- TypeScript stays on 5.9 until Next and typescript-eslint support 7.

## Mistakes to avoid

- Use `npm run typecheck`, not bare `tsc` (route types live in `.next`).
- Never bypass the pre-commit hook with `--no-verify`.
