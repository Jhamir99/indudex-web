---
description: Summarise an idea and save it in a new specs folder
argument-hint: <the idea, in your own words>
allowed-tools: Bash(ls:*), Bash(mkdir:*), Write
---

Here is an idea: $ARGUMENTS

Do only this, in order:

1. Write a summary of the idea in 2-3 sentences and pick 3-7 keywords.
2. Look at the existing folders in `specs/` (create `specs/` if it does not exist) and take the next number, zero-padded to three digits (`001` if there are none).
3. Create the folder `specs/NNN-<slug>/`, where `<slug>` is 2-5 lowercase words from the keywords joined by hyphens.
4. Inside it, write `idea.md` with these sections: `# <short title>`, `## Original idea` (my text, verbatim), `## Summary`, `## Keywords` (bulleted list).
5. Reply with the folder path and the summary, nothing else.

Rules:

- Do not write a spec, a plan or any code, and do not touch any other file.
- Write everything in English, even if the idea is not.
- Do not copy secrets or personal data from the idea into the file.
