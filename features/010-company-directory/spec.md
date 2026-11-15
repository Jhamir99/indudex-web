# Spec: Company directory

Status: outline. Context, scope and legacy references only; the requirements are written with `/spec` before planning.

## Context and goal

The legacy site has an Index of employers: every company with offers today and every one that had some before, each with a panel that says what it hires for, where, and links to its careers page.

**Goal:** the company directory page and each company's panel.

## Scope (from the legacy)

- The list of companies, with today's count, main occupation group and town; search and filters over it.
- The company panel, loaded only when opened: careers page, register data, what its adverts say (what it hires for, where, pay, work mode).

## Depends on

- `site-shell`, the API's directory and company-card endpoints.

## Legacy reference

- `web/app/features/directory/{DirectoryPage,CompanyPanel,useCompanyPanel,useDirectoryData,companies,list}.ts(x)`, `app/lib/{company-card,company-key}.ts`, `docs/research/directory.md`.

## Open questions

- None yet.
