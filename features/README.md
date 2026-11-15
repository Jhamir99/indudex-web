# Features

One folder per feature, `NNN-<feature>/`, numbered in the order the features must be built: `spec.md` (what and why, written with `/spec`), `plan.md` (how, generated from the spec) and `tasks.md` (generated from the plan). A feature's code lives in `src/features/<feature>/` (no number); what two or more features use lives in `src/shared/`.

Status: **idea** (only `idea.md`, from `/idea`), **outline** (context and legacy references only; requirements still to write with `/spec`), **draft** (spec written), **planned** (plan and tasks approved), **in progress**, **done**.

The legacy web (`JustJans/indudex`, `web/` and `app/lib`) was split into these features on 2026-11-15. The scrapper and the processor have their own features in `indudex-scrapper`.

## Order

A feature starts when the ones before it are closed. The search screen comes first (003-006), because it is the product; then the CV reader, the first page, the about pages and the directory, each of which builds on it. From 003 on, the features wait for real data from the API (the processor's `010-publication` in `indudex-scrapper`, then `indudex-api`).

| #   | Feature                                     | Status  | What it covers                                                              |
| --- | ------------------------------------------- | ------- | --------------------------------------------------------------------------- |
| 001 | [localization](001-localization/)           | done    | `en`/`es`/`ca` under `/en`, `/es`, `/cat`; messages kept in sync            |
| 002 | [site-shell](002-site-shell/)               | outline | Logo, navigation, language menu, theme, 404                                 |
| 003 | [plate](003-plate/)                         | outline | Profile codec in the URL hash, compatible with legacy plates                |
| 004 | [offer-pile](004-offer-pile/)               | outline | Download only the shards a profile needs and match offers in the browser    |
| 005 | [filters](005-filters/)                     | outline | Filter panel and the code row                                               |
| 006 | [results](006-results/)                     | outline | Offer list and card, source attribution, share, seen marks, more on scroll  |
| 007 | [cv-reader](007-cv-reader/)                 | outline | Read a CV in the browser and tick occupations, degrees and languages        |
| 008 | [home](008-home/)                           | outline | First page: what the site is, latest offers, when the pile was last rebuilt |
| 009 | [about](009-about/)                         | outline | Privacy, sources and licences, contact, our bot                             |
| 010 | [company-directory](010-company-directory/) | outline | Index of employers and each company's panel                                 |
