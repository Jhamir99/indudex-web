# Indudex Web

Frontend of [Indudex](https://indudex.com/), a free, public job portal for engineers and technicians in Europe.

- **No account, nothing stored.** Your CV is read in your browser and never uploaded. Your filters are packed into a short code after the `#` of the address, so you can copy, paste or bookmark them.
- **In English, Spanish and Catalan**, at `/en`, `/es` and `/cat`.
- **Data** comes from [indudex-api](https://github.com/Jhamir99/indudex-api): job adverts already translated into each language, which the browser downloads and filters locally.

This is a rewrite of [JustJans/indudex](https://github.com/JustJans/indudex), split into a frontend (this repo) and a backend.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, next-intl, openapi-fetch. Tests with Vitest + Testing Library and Playwright.

## Running it

Requires Node 26 (see `.nvmrc`) and, for real data, [indudex-api](https://github.com/Jhamir99/indudex-api) running on port 4000.

```bash
npm install
cp .env.example .env.local   # NEXT_PUBLIC_API_URL, defaults to http://localhost:4000
npm run dev                  # http://localhost:3000
```

| Command                           | What it does                                         |
| --------------------------------- | ---------------------------------------------------- |
| `npm run build` / `npm run start` | Production build and server                          |
| `npm run lint` / `npm run format` | ESLint / Prettier                                    |
| `npm run typecheck`               | Route types + `tsc`                                  |
| `npm run test:run`                | Unit tests (Vitest)                                  |
| `npm run test:e2e`                | End-to-end tests on mobile, tablet and desktop sizes |
| `npm run api:types`               | Regenerate the API types from the running API's spec |

A pre-commit hook lints and formats staged files, and CI runs all checks on every push and pull request.

To run the API and the web together with Docker, use `docker compose up --build` from indudex-api (with both repos cloned side by side).

## Licence

Source-available, not open source: you may read the code, but not run, copy or build on it. See [LICENSE](LICENSE).
