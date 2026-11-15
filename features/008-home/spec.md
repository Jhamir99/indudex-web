# Spec: Home

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

Before any search, the first page says what the site is and shows content of its own, for visitors and for search engines that do not search. The product rule "the UI says when the offer pile was last rebuilt" lives here.

**Goal:** the first page of each locale: what the site gathers, how it works, a few real latest offers and when the pile was last rebuilt.

## Scope (from the legacy)

- A line that says what the site gathers, and a count of offers.
- How it works (CV read in the browser, the plate, no account).
- Up to ten latest offers written in the page's language.
- When the pile was last rebuilt.
- The backdrop.

## Depends on

- `results` (offer cards), the API's latest-offers and pile-status endpoints.

## Legacy reference

- `web/app/features/search/{HowItWorks,Latest,RollingNumber,Backdrop}.tsx`, `today.server.ts`, `docs/research/{how-it-works,front-backdrop,count-animation,landing-pages}.md`.

## Open questions

- None yet.
