---
description: Create a new specification
argument-hint: <feature description>
---

NEVER write code. We are going to draft the specification of a new
Indudex web feature. Read docs/constitution.md.
Initial idea: $ARGUMENTS

Your job:

1. Ask me questions ONE at a time to remove ambiguity (edge cases,
   behaviour on errors, what is out of scope for this version). At most 5
   questions.
2. With my answers, generate features/`NNN-<feature>`/spec.md with this
   structure: context and goal, users, user stories, numbered functional
   requirements (FR-x) with acceptance criteria in EARS notation in
   English, non-functional requirements, edge cases, out of scope,
   completion criteria and open questions marked as
   [NEEDS CLARIFICATION].
   `<feature>` is 1-3 lowercase keywords joined by hyphens; `NNN` is its place in the build order of `features/README.md`, zero-padded to three digits (the next free number unless I say where it goes; inserting it earlier renumbers the folders after it and their references)
   (e.g. `cv-reader`). If the feature already has an outline spec,
   replace it; if it has an `idea.md`, start from it. Add or update its row in `features/README.md`.
3. The WHAT and the WHY. No stack, architecture or file names:
   those go in the plan.
