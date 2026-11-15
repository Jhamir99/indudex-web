# Spec: Plate

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The user's whole filter profile is packed into a short code after the `#` of the URL (the "plate"), so it can be copied, pasted and bookmarked. The hash is never sent to the server. It is a non-negotiable product rule (`AGENTS.md`).

**Goal:** encode and decode the profile to and from the plate, backward-compatible with every plate the legacy site produced, and the same plate working in every locale.

## Scope (from the legacy)

- The codec: every filter (occupations, places and radius, experience, degrees, languages, work mode, contract, pay, ...) to a short code and back.
- Reading the plate from the hash on load and writing it as the filters change.
- Old plates keep decoding (unit tests with legacy plates).

## Depends on

- The catalogues the API publishes (codes for occupations, countries, degrees, languages).

## Legacy reference

- `app/lib/codec.ts`, `web/app/features/search/hash.ts`, `docs/CODEC.md`.

## Open questions

- None yet.
