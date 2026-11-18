# Round 2 copy notes

Written by writer.indi-gupte@AgentiCCells.dinis on 18 November 2026, for conductor.indi-gupte@AgentiCCells.dinis and the developer. From the round 2 brief (`team/rounds/2.md`), the reviewer's conditions (`team/rounds/1/review/DESIGN.md`: C5, C25, C26, C31, C34, C39), the live review (`team/rounds/1/review/LIVE.md`, must-fix 1 and 5), the build notes (`team/rounds/1/build/NOTES.md`, the seven fields) and `data/research/RECORD.md`. The round 2 design folder (`team/rounds/2/design/`) was empty when this copy was finished, so the new exports follow the conductor's brief and the reviewer's lifts 1 and 5.

## The rules every field now keeps (checked when `data/facts.mjs` is imported)

- **The 27 agents** always as "a team of 27 AI agents, 23 running" (sources `ws-people-indi`, `ws-everything`), and never in the same sentence as Web Summit, RiskMandate, PrompTugal.news or Lisbon Tech Fringe (C5).
- **277 commits** always with "3 to 13 November" (source `news-ten-days`).
- **The Oxford entry** always as "University of Oxford, Modern Languages, Italian and Portuguese (2027), as his profile lists it" (C39). The summary's line carries "(his words)", as C39 asks.
- No U+2014 and no word from a short list of hype words in any string the pages can show.

`node data/facts.mjs` runs the checks. I also ran `generate`, `build`, `validate` (OK) and `leak-scan` (OK) in a scratch copy, so `src/` here is untouched.

## Fields changed

| Field | Was | Now |
|---|---|---|
| `ASK.band.rest` | "I worked with 27 AI agents at Web Summit Lisbon 2026" | "A team of 27 AI agents, 23 running" |
| `ASK.panel.paragraphs` | tied the 27 to the three projects | "In his words, what the team built that week: RiskMandate, PrompTugal.news and Lisbon Tech Fringe." / "He brings company research, design and daily work with a team of AI agents, and is glad to talk to people working in languages, AI, medicine or diplomacy." (no number) |
| `PAGES.home.description` | tied the 27 to Web Summit and the projects | "Indi Gupte, West London: brand, partnerships and research. He works with a team of 27 AI agents, 23 running, and is looking for work experience." |
| `PAGES.home.lede`, `PERSON.summary` | "At Web Summit Lisbon 2026 he worked with a team of 27 AI agents" | "He works with a team of 27 AI agents, 23 running, and he is looking for work experience." |
| `PAGES['how-i-work']` h1, lede, description | "Indi ran 27 AI agents, 23 of them running"; 277 without window | "A team of 27 AI agents, 23 running"; lede without Web Summit; description with "277 commits from 3 to 13 November 2026" |
| `DESIGNS` front-page `headline` | "Student who worked with 27 AI agents at Web Summit..." | "Indi Gupte, one of the three editors of PrompTugal.news, is looking for work experience" (C25) |
| `DESIGNS` front-page `notice` | "WANTED: work experience. Languages, AI, medicine or diplomacy..." | "Wanted: work experience. Glad to talk to people working in languages, AI, medicine or diplomacy. Reply via LinkedIn." (C26) |
| `DESIGNS` console `shippedTitle`, `idea` | "Shipped"; 277 without window | "What we built this week" (his post, C31); idea with the window |
| `DESIGNS` card `idea`, `back` | "from the person who designed the team's cards"; back "Web Summit Lisbon 2026 / 27 AI agents · 23 running · 277 commits" | "A business card, front and back. In his words: "I designed our business cards"." (C34); back "Working every day with a team of AI agents / A team of 27 AI agents, 23 running · 277 commits, 3 to 13 November 2026", with sources |
| `PAGES.agents.audiences[1].prompt` | pointed at round 1 NOTES.md | points at `/questions.md`, as the pages already do |
| `ASK.fields` (AI), `ASK.brings.items[2]`, `STRIP[0]` | "a team of 27 AI agents at Web Summit Lisbon 2026"; "27 AI agents"; 277 without window | the phrase above; window added |
| `AGENTS.commits.text`, `.note` | 277 without window in the text | window in both |
| `LANGUAGES.whereTheyLead[1]`, `LANGUAGES.leadsTo` | "His profile lists the University of Oxford..." | the C39 wording; "(his words)" on the summary's line |
| `BACKGROUND.timeline` oxford, university | "as his profile lists it" only in `note` | in the `title`, so every design that shows the title carries it (Lingua, Console, The Card failed C39 live) |
| `QUESTIONS_FOR_INDI` front-page, `QUESTIONS_TO_ASK_INDI` first item | old headline; "27 AI agents" | new headline; ", 23 running" |

## New exports (round 2 design)

- **`HOME_LINE`**: his line, exact from his post: "What I bring: company research, design (I designed our business cards), and working every day with a team of AI agents." `alternative`: "I'm looking for work experience." Both are checked against the post.
- **`HOME_FIGURES`**: three `{ id, value, label, text, link, sources }`:
  1. `27`, "AI agents in his team, 23 running" (`ws-people-indi`, `ws-everything`);
  2. `277`, "commits by his agents on the team's site, 3 to 13 November 2026" (`news-ten-days`);
  3. `1 of 3`, "editors of PrompTugal.news" (`promptugal-home`, `promptugal-about`, `promptugal-board`), the reviewer's choice in lift 1.
  `text` is the whole figure as one phrase, for screen readers and `/index.md`. "31 companies" (the factory) was not used: its only source is the factory page, which names target companies and is not in the register.
- **`TEN_DAYS_RANGE`**: `{ from: '2026-11-03', to: '2026-11-13', eventDays: { from: '2026-11-09', to: '2026-11-12', label: 'Web Summit Lisbon' }, sources }`.
- **`TEN_DAYS`**: 16 events in date order, each `{ date, time?, timeNote?, label, kind, sources, derived?, how? }`. `kind` is `his`, `team` or `event`, so the strip can show which is his. From 3 November (the ten days begin; his conductor's schedule; the factory at 23:30) through 4 November (education brief; his card vote and choice), 5 November (joins in person; Design A for printing), 6 November (mentor handover), 9 November (Web Summit opens), 10 November (education idea published; second day called off at 19:09), 11 November (Fringe live at 12:57, his lane communities; app out for testing at 21:11), 12 November (the stand), 13 November (the ten days end, 277 commits) to 14 November (Strangers in the Loop, `derived: true`, the one entry after the ten days).

**For the developer: times.** The brief asked for 'HH:MM UTC'. The newsroom and his brief print times with no zone, so those four times are 'HH:MM' with a `timeNote`; the check refuses a zoneless time without a note. Show them as printed ("19:09"), not as UTC. Lisbon keeps UTC in November, but no source says the times are Lisbon time.

Left out of `TEN_DAYS` (date not on the page read, or source not in the register): the newsroom workflow's 10 November brief and launch times, the token-efficiency note of 8 November, the social agent's daily drafts from 7 November, and "named on the team's site" on 2 November (before the ten days).

## Still awaiting Indi (through Dinis Cruz)

Unchanged from round 1, plus: the new Front Page headline and notice (`awaitingIndi: true`), and which line he prefers on the first screen (`HOME_LINE` or its alternative).
