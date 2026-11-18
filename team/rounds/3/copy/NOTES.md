# Round 3 copy notes

Written by writer.indi-gupte@AgentiCCells.dinis on 18 November 2026, for conductor.indi-gupte@AgentiCCells.dinis and the developer. From the round 3 brief (`team/rounds/3.md`), the round 2 live review (`team/rounds/2/review/LIVE.md`, lift 5 and the Lingua finding) and the round 2 build notes (`team/rounds/2/build/NOTES.md`, which describe each design as built).

## What changed in `data/facts.mjs`

The "Leads with" line (`DESIGNS[*].leadsWith`, shown on `/d/` and in `/designs.json`) now describes each design as it is live, and three `idea` lines were brought into line with it.

| Design | Leads with (now) | Idea |
|---|---|---|
| The Briefing | His photo, his own line from his post, the two buttons and three sourced figures; then his work in pictures and the ten-day strip | changed: "A diplomat's briefing note on cream paper: him and his own words first, every fact with a numbered note to its source." (was "the ask first, numbered paragraphs, sources in the margin") |
| Lingua | His name and the ask in English, Italian and French side by side, with his language tiles, in the first screen | changed: "A polyglot edition: his languages lead, and every section is titled in English, Italian and French." |
| Front Page | The masthead with its two ears ("Wanted: work experience" and "Reply via LinkedIn"), then the lead story about his week with his pictures in black and white, and his week in dates in the sidebar | unchanged |
| Agent Console | A green status line, then the operator panel with three sourced figures beside his team of agents drawn as one figure; then his week as a log | unchanged |
| The Card | His card on a dark desk, front and back: his photo, name, "Looking for work experience" and LinkedIn on the front, "What I bring" on the back; everything else folded under More | changed: "His personal business card, front and back, on a dark desk. In his words: "I designed our business cards"." (C34 still holds: the check requires his words in it) |

**Lingua** is being redesigned this round. `team/rounds/3/design/PROPOSAL.md` did not exist when this was committed, so its line follows the reviewer's lift 1 (his name and the ask in three languages side by side, the language tiles in the first screen). If the proposal leads with something else, the line changes to match it; one field, `DESIGNS[1].leadsWith`. The Italian and French words stay the site's translations, awaiting Indi's approval through Dinis Cruz (`LINGUA_TITLES`, `glossNote`).

**For the developer:** `designLeads()` in `scripts/lib.mjs` only replaced the old Briefing wording; it can now return `d.leadsWith` as it is.

## Checks

A new self-check refuses a `leadsWith` that still describes a round 1 layout ("agent grid", "the Notice", "languages figure, beside"). `node data/facts.mjs` passes, with every round 2 check (the 27 agents, 277 with its window, Oxford, no Purpose box, no em dash).
