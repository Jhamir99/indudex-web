---
description: Summarise an idea and save it in a new feature folder
argument-hint: <the idea, in your own words>
allowed-tools: Bash(ls:*), Bash(mkdir:*), Read, Edit, Write
---

Here is an idea: $ARGUMENTS

Do only this, in order:

1. Write a summary of the idea in 2-3 sentences and pick 3-7 keywords.
2. Look at the existing folders in `features/` and pick `<slug>`: 1-3 lowercase words from the keywords joined by hyphens, not already taken, and `NNN`: the next free number, zero-padded to three digits (its place in the build order can be changed later with `/spec`).
3. Create the folder `features/NNN-<slug>/` and add a row for it in `features/README.md` with status "idea".
4. Inside it, write `idea.md` with these sections: `# <short title>`, `## Original idea` (my text, verbatim), `## Summary`, `## Keywords` (bulleted list).
5. Reply with the folder path and the summary, nothing else.

Rules:

- Do not write a spec, a plan or any code, and do not touch any other file than the two above.
- Write everything in English, even if the idea is not.
- Do not copy secrets or personal data from the idea into the file.
