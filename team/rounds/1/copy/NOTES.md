# Round 1 copy notes

Written by writer.indi-gupte@AgentiCCells.dinis on 18 November 2026, for conductor.indi-gupte@AgentiCCells.dinis and the developer.

## What was written

- `data/facts.mjs`: the master copy of every fact and every piece of copy, as a plain ES module. Exports: `READ_DATE`, `READ_DATE_TEXT`, `SOURCE_GROUPS`, `SOURCES`, `LINKEDIN`, `LINKEDIN_TEXT`, `REPO`, `SITE`, `PERSON`, `QUOTES`, `ASK`, `WEB_SUMMIT`, `BUILT`, `AGENTS`, `LANGUAGES`, `BACKGROUND`, `DESIGNS`, `LINGUA_TITLES`, `NAV`, `STRIP`, `FOOTER`, `PAGES`, `DINIS_WORDS`, `QUESTIONS_TO_ASK_INDI`, `QUESTIONS_FOR_INDI`. Every fact carries `sources: [ids]`.
- `data/sources.md`: every source id with URL, read date, whether it names Indi, what it supports, and a "Not found / conflicts" section from `data/research/RECORD.md`.

The file checks itself when imported: every extract of his post is an exact substring of it, every source id exists, every meta description is under 160 characters, and the agent list has 27 entries with 23 running. `node -e "import('./data/facts.mjs')"` passes; no em dash in either file.

## Choices made

1. **Voice.** Body copy speaks about Indi as "he"; the menu and buttons keep the first person the design uses ("What I built", "Message me on LinkedIn"). This keeps his own words (quotes) apart from the site's words. `ASK.buttonThirdPerson` is there if the conductor prefers third person throughout.
2. **His post** is kept line by line in `QUOTES.whatsapp.lines`, straight apostrophes as sent, ending at "If you have an opening, or know someone who might...". Pull quotes use `QUOTES.extracts`, each an exact substring.
3. **Business cards.** His post is quoted, then the record: his designer agent drew the rounds, he chose his card on 4 November, and Dinis Cruz chose Design A for printing on 5 November. No contradiction is drawn between them.
4. **Strangers in the Loop.** 14 November is marked `derived: true` with how it was worked out.
5. **Lisbon Tech Fringe.** The newsroom's lines do not credit Indi, so the site says "the team built" and gives his own part: the communities lane and the communities page. Product names the sources use but he does not (the app-testing service) are left out: "out for testing at 21:11".
6. **Commits.** 277 is the figure used; 309 is explained in `AGENTS.commits.note`.
7. **Agent names.** `AGENTS.list[]` has `role` and `address`. **For the developer:** an address such as `accountant@web-summit.indi` matches the email pattern in `scripts/validate.mjs`, so pages should show `role` and use `AGENTS.namingNote` to explain the naming. Two descriptions were shortened further to drop product names (the inbox agent's mail service, a map service).
8. **Dinis's words** in `DINIS_WORDS` replace one name with "[another team member]", so the site names no one but Indi Gupte and Dinis Cruz; the full words stay in `team/BRIEF.md` and `team/WORKFLOW.md`.
9. **The university.** Both entries are shown as he lists them, side by side, without reconciling them.
10. **No programming languages are named**: neither his profile nor the record names any.
11. **Not given, so left out:** availability dates, kind of placement, the three startups' names, his role at OmKneeHealth, what SportsHealing Ltd does (`ASK.notGiven`). The first-pass placeholder for availability should go.
12. **Tagline** "Brand, partnerships and research" is from the factory brief, sourced as `factory-brief`, not as his words.

## Awaiting Indi's approval (through Dinis Cruz)

- `LINGUA_TITLES`: the Italian and French section titles (each `awaitingIndi: true`).
- `DESIGNS` Front Page headline and the "WANTED" notice; The Briefing's label with the date 18 November 2026.
- `QUESTIONS_TO_ASK_INDI`: six questions for visitors to ask him (proposal).
- The voice (third person in the body copy).
- The default home design (The Briefing proposed; Lingua the alternative), and the photo crop.
- Everything in `QUESTIONS_FOR_INDI` (21 questions his own AI assistant should ask him), first among them: a picture of the business card, which programming languages, approval of the Lingua titles, availability and kind of placement.
