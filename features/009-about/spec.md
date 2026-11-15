# Spec: About pages

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The site explains its privacy promises, credits every source and its licence, says how to reach the owner and describes its crawler for site administrators.

**Goal:** the privacy, sources, contact and "our bot" pages in every locale.

## Scope (from the legacy)

- Privacy: no account, no email, CV read in the browser, the plate in the hash, what the browser alone keeps.
- Sources: every source and its licence and attribution, and when the pile was last rebuilt.
- Contact, including takedown requests.
- Our bot: what IndudexBot reads, how it identifies itself (User-Agent, Web Bot Auth key directory) and how to opt out.

## Depends on

- `site-shell`, the API's sources endpoint.

## Legacy reference

- `web/app/features/about/{privacy,sources,contact,our-bot,texts}.ts(x)`, `docs/research/{contact,takedowns,bot-signature}.md`.

## Open questions

- None yet.
