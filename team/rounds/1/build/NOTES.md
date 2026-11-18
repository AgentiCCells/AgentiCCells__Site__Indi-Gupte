# Round 1 build notes

Written by developer.indi-gupte@AgentiCCells.dinis on 18 November 2026, for conductor.indi-gupte@AgentiCCells.dinis. Built from `team/rounds/1/design/PROPOSAL.md`, the reviewer's conditions in `team/rounds/1/review/DESIGN.md`, `data/facts.mjs` (up to commit 93851bf, with VIDEO) and `data/research/` (up to 3f13576). Nothing pushed.

## What was built

How to rebuild: `node scripts/generate.mjs && node scripts/build.mjs` (pages in `src/` are committed; CI runs only `build.mjs`). Images: `node scripts/cards.mjs` (share cards), `node scripts/cards.mjs --work` (shots of his work), `node scripts/cards.mjs --designs <served _site>` (dialog previews), then `generate.mjs` again.

- **Scripts** (code adapted from the Marc Noah site's scripts, Apache-2.0, credited in each file header):
  - `scripts/lib.mjs`: escape, page head with og:title, og:description, absolute og:image, og:image:alt and twitter:card summary_large_image on every page; the header (ask band, then the site bar with the full navigation, a visible GitHub "Source" link at every width, the Menu as `<details>` below 1180 px, Designs icon-only below 700 px); the Designs `<dialog>`; the ask panel; the footer; sources numbered once for the site, as superscript references and margin notes; the headshot crop (C9: 248 px square from x 72, y 20, CSS only); the languages figure (horizontal and vertical variants, one in the accessibility tree at a time); small drawings per piece of work; the agent-team charts; `scrub()`, which replaces any other team member's name (checked against the validator's hashes, read, not changed) with "[another team member]".
  - `scripts/generate.mjs`: /built/, /how-i-work/, /languages/, /background/, /looking-for/, /sources/, /agents/, /ai/ (refresh to /agents/, canonical, link to /agents/ and the repository, share meta), /index.md, /llms.txt, /questions.md (from QUESTIONS_FOR_INDI, for Indi's own AI), /facts.json, /data/agents.json, /favicon.svg.
  - `scripts/designs.mjs`: The Briefing at / (and /d/briefing/ as a refresh to /), Lingua, Front Page, Agent Console, The Card, /d/ and /designs.json. Each design has its own stylesheet and share card and keeps the full navigation, Source link, Designs control, ask and LinkedIn (C4).
  - `scripts/behind.mjs` (run by `scripts/build.mjs`): Dinis's words from DINIS_WORDS, the six roles from ROLE.md and POLICY.md, the flow as inline SVG, how the site started, a strip chart of commits by role, every commit from git log (date, role pill from the Agent: trailer, subject linked to the commit on GitHub, short hash), the checks, and a page per `team/rounds/N.md` with its screenshots. All repository text passes through `scrub()` (C49, C50, C52).
  - `scripts/cards.mjs`: six 1200x630 share cards (indi-gupte, briefing, lingua, front-page, console, card; 51 to 57 KB), five 480x300 previews (13 to 32 KB), the work shots.
- **His work at web-summit.sgit.ai** (Dinis 10:03): a gallery on /built/ from `data/research/work.json`: 6 pieces with shots, 8 more as a list, each with title, what, which agent (shown as "his designer agent"), date, link and sources. The factory is described as "one page per target company, 31 companies" with its source.
  - Shots used (each looked at): cards-round4-executives, cards-round4-security, cards-round2-seal, stickers-overview, sticker-gap, newsroom-workflow, schedules, education (cropped to the top 1000 px, above "How it would work", which names an AI product).
  - Shots not used: factory.jpg and factory-company.jpg (they name target companies; conductor's rule), newsroom-steps.jpg (names a scoring product), todo.jpg (his open task list, not work to show).
  - Items left out of the gallery: factory-company-page (names a company), apps-strategy (kept by Dinis Cruz's agent), todo, command-centre (names other people), team-app-redesign (never ran), synthetic-users-cards, digital-card and venue-map (their text names other companies' products).
- **Agent team charts** (Dinis 10:04), on /how-i-work/ (all four), the home page (teams), Agent Console (all four) and Front Page (commits). Inline SVG drawn at build time, each with a heading, a one-line reading worked out from the data, a table in `<details>`, sources and read date, and a wide and a narrow variant:
  1. Teams and their agents: web-summit.indi (27, grouped by the researcher's groups, labelled "grouped by this site, not by the source") and PrompTugal.indi (1); running filled, not running dashed.
  2. Commits per agent, sorted; the reading says the per-agent counts cover a longer window than the published 277 (3 to 13 November 2026). The sum 309 is not shown (C16).
  3. Activity over time: each agent's published last commit, and its first date where published, on a 2 to 18 November axis with Web Summit and "joins in person" marked; the reading says no per-day counts were published.
  4. Who his agents wrote to: the researcher's 111 edges, reduced to messages from his agents to people and agents outside his team, recipients by role (Indi, Dinis Cruz, Dinis Cruz's agents, teammates' conductors, teammates); line width by count; 17 agents, 317 messages; 147 more between his own agents.
- **Dinis's video** (VIDEO): under Lisbon Tech Fringe on /built/ and in paragraph 2 of the home page, as a link to the LinkedIn post. When `VIDEO.youtube` is set to an id, the same slot renders a drawn poster button; `/designs.js` inserts the youtube-nocookie.com iframe only on a press (tested with a sample id); without JS it is a plain link.
- **Front-end**: `src/style.css` (proposal palette, dark mode, 44 px targets stated in CSS, print styles, reduced motion), `src/designs.js` (first-party: dialog with aria-haspopup and aria-controls set by the script (C46), focus to the heading and back, backdrop close; Copy buttons; Turn over; click-to-play).

## Copy composed from the facts where a field breaks a reviewer condition

`data/facts.mjs` still holds these fields as first written; the pages do not use them, and use other fields instead. The writer may want to update them:

| Field | Condition | What the pages use |
|---|---|---|
| `ASK.band.rest` ("I worked with 27 AI agents at Web Summit Lisbon 2026") | C5 | "A team of 27 AI agents, 23 running" from AGENTS.total and AGENTS.running |
| `ASK.panel.paragraphs[0]` (ties the 27 to the three projects) | C5 | ASK.long, then the team line and PERSON.profileSummary paragraph 5 |
| `PAGES.home.description` (ties the 27 to the projects) | C5 | name, place, tagline, ask, team line |
| `DESIGNS` front-page `headline` and `notice` | C25, C26 | "Indi Gupte, one of the three editors of PrompTugal.news, is looking for work experience" (WEB_SUMMIT.editor); "Wanted: work experience. Glad to talk to people working in languages, AI, medicine or diplomacy. Reply via LinkedIn." (profileSummary paragraph 5) |
| `DESIGNS` console `shippedTitle` ("Shipped") | C31 | "What we built this week" from his post |
| `DESIGNS` card `idea` | C34, C38 | "A business card, front and back. In his words: "I designed our business cards"." |
| `PAGES.agents.audiences[1].prompt` (points at NOTES.md) | task | points at /questions.md |

`QUESTIONS_TO_ASK_INDI` is not shown anywhere (C57) and is left out of /facts.json.

## Gate output (last run, before the final commit)

```
node scripts/generate.mjs   ... generated src/ from data/facts.mjs
node scripts/build.mjs      behind-the-scenes: 6 roles, 1 round page(s), 19 commits / built _site/ (dev)
node scripts/validate.mjs   FAILED: 30 problem(s), every one in team/ (names another member of the team):
                            team/BRIEF.md (4), team/WORKFLOW.md (7), team/rounds/1/design/PROPOSAL.md (3),
                            team/rounds/1/review/DESIGN.md (2), team/designer/ROLE.md (2), and two lines in
                            each of the six POLICY.md files. Nothing in _site/ fails.
node scripts/leak-scan.mjs  FAILED (1) in 110 files: scripts/validate.mjs:78: long high-entropy string
                            (the validator's own name hashes)
node scripts/abp-check.mjs  OK (6 policies)
node scripts/check-commits.mjs origin/dev HEAD   OK
node scripts/role-scope.mjs origin/dev HEAD      OK
```

Both failures are in files outside the developer's scope (team/ and scripts/validate.mjs); they are for the conductor. I did not edit them.

My own checks with Playwright at 390 and 1366 px on all 16 pages: no horizontal overflow (wide tables scroll inside their own box, inside a closed `<details>`); the dialog opens, focuses its heading, closes on Escape and returns focus; no `mailto:` or `tel:`. Screenshots: `team/rounds/1/build/shots/` (top 2600 px of each page, JPEG q55; d_front-page-1366 cropped to 2000 px to stay under 300 KB).

## Open issues

1. The validator and leak scan fail on team/ and scripts/validate.mjs (above): the conductor's to fix.
2. The facts fields in the table above should be brought into line by the writer, so the master copy and the pages agree.
3. The Briefing marks itself "Showing" in the dialog on inner pages too, since they share its system (as on the Marc Noah site).
4. Contrast was taken from the reviewer's table; I did not measure the rendered pages with a contrast tool. The Console pulse is 2.4 s and stops under reduced motion.
5. The design previews and share cards are made with the build machine's fonts (Charter and Gill Sans fall back to DejaVu); they look plainer than on a Mac.
6. The Devanagari word needs the live review on iOS, Android and Windows (C24).
7. Indi's approval is still needed for the Lingua glosses, the Front Page headline and notice, the voice and the default design (copy notes).
