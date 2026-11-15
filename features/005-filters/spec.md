# Spec: Filters

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The filters are the user's whole profile: what they do, where, with what experience, degrees and languages. Every change updates the plate.

**Goal:** the filter panel, responsive on mobile, tablet and desktop, with the plate shown so it can be copied.

## Scope (from the legacy)

- Occupation families and their specialties (the fullest first).
- Places: countries, regions, a town and a radius.
- Years of experience, degrees, languages, work mode, contract, pay.
- The code row: the plate, to copy or paste.
- The entry point to the CV reader.

## Depends on

- `plate`, `cv-reader`, the catalogues the API publishes.

## Legacy reference

- `web/app/features/search/filters/{FilterPanel,CodeRow,useFilters}.tsx`, `web/app/components/places`, `web/app/components/controls`, `docs/research/{filter-sections,front-controls,locations}.md`.

## Open questions

- None yet.
