# Spec: CV reader

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The user can hand the site a CV; it is read in the browser and never leaves it (a non-negotiable product rule in `AGENTS.md`). It ticks the occupations, degrees and languages it names.

**Goal:** read a CV file in the browser and turn it into filters, without sending the file or its text anywhere.

## Scope (from the legacy)

- PDF reading in the browser (`pdfjs-dist` in the legacy) and plain text.
- Occupations from the titles the CV names, by the same rules the gate uses.
- Degrees and languages named.
- The result becomes filters, so it lands in the plate.

## Depends on

- `plate`, `filters`, the catalogues the API publishes, the matching rules.

## Legacy reference

- `app/lib/cv.ts`, `web/app/features/search/filters/useCvReader.ts`, `docs/research/indudex-lector.md`.

## Open questions

- None yet.
