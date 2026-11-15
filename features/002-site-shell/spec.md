# Spec: Site shell

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

Every page shares the same frame: the logo, the navigation, the language menu and the light/dark theme switch, plus a page for addresses that do not exist.

**Goal:** the shared frame of every page and the 404 page, responsive on mobile, tablet and desktop.

## Scope (from the legacy)

- Logo and site navigation (search, company directory, about pages).
- Language menu that keeps the current page and the plate in the hash.
- Theme button (light/dark).
- Not-found page in the current locale.

## Depends on

- `localization`.

## Legacy reference

- `web/app/components/{SiteNav,LanguageMenu,ThemeButton,Logo,Page,Icon}.tsx`, `web/app/root.tsx`, `web/app/features/not-found/route.tsx`, `docs/research/{logo,front-controls}.md`.

## Open questions

- None yet.
