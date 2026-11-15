# Spec: Results

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The matched offers are shown as a list. Each offer shows only its title (in the current locale), employer and place, and links to the source page for the rest; the advert's own text is never shown. Each source's attribution is shown as its licence requires.

**Goal:** the list of matched offers and each offer's card, with source attribution and a way to share one offer.

## Scope (from the legacy)

- Offer card: title, employer ("via the agency's site" for agencies), place, facts (work mode, pay, ...), link to the source page.
- Source attribution per its licence (e.g. "Jobs by Adzuna").
- Share an offer.
- Offers seen and opened marked, kept only in the browser (local and session storage).
- More results as the user scrolls; an empty state.

## Depends on

- `offer-pile`.

## Legacy reference

- `web/app/features/search/results/{OfferList,OfferCard,OfferMeta,ShareButton,Empty}.tsx`, `web/app/hooks/useAutoMore.ts`, `docs/research/{offer-details,share-offer,infinite-scroll,results-line}.md`.

## Open questions

- None yet.
