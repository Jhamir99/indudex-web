# Spec: Offer pile

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The browser downloads only the shards a profile names (by locale, occupation family and country) and filters them locally, so the profile never reaches a server. The matching rules are Argus's, run client-side.

**Goal:** load the shards the current profile needs from the API and match the adverts against the profile in the browser.

## Scope (from the legacy)

- Read the index and download only the shards named by the profile; the newest offers when nothing is named.
- Matching: titles, places and distance, years, degrees, languages, work mode, contract, pay; expired adverts hidden.
- Word index for free-text search.

## Depends on

- `plate` (the profile), the API's shard and index endpoints (via `src/lib/api/client.ts`).

## Legacy reference

- `web/app/features/search/{usePile,useSearch,view}.ts`, `app/lib/{shards,search,query,gates,titles,distance,index-search,word-index,work-modes}.ts`, `docs/research/{index-search,progressive-results,pile-memory,single-search}.md`.

## Open questions

- [NEEDS CLARIFICATION] The matching engine: port to TypeScript in this repo, or the shared `indudex-matching` package (open decision in `AGENTS.md`).
