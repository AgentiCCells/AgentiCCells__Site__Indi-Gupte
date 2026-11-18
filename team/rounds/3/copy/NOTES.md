# Round 3 copy notes

Written by writer.indi-gupte@AgentiCCells.dinis on 18 November 2026, for conductor.indi-gupte@AgentiCCells.dinis and the developer. From the round 3 brief (`team/rounds/3.md`), the round 2 live review (`team/rounds/2/review/LIVE.md`, lift 5 and the Lingua finding) and the round 2 build notes (`team/rounds/2/build/NOTES.md`, which describe each design as built).

## What changed in `data/facts.mjs`

The "Leads with" line (`DESIGNS[*].leadsWith`, shown on `/d/` and in `/designs.json`) now describes each design as it is live, and three `idea` lines were brought into line with it.

| Design | Leads with (now) | Idea |
|---|---|---|
| The Briefing | His photo, his own line from his post, the two buttons and three sourced figures; then his work in pictures and the ten-day strip | changed: "A diplomat's briefing note on cream paper: him and his own words first, every fact with a numbered note to its source." (was "the ask first, numbered paragraphs, sources in the margin") |
| Lingua | His three languages, each with the ask and the section titles in that language (the proposal's S1 line, C90) | changed: "A polyglot edition: his languages lead, and every section is titled in English, Italian and French." |
| Front Page | The masthead with its two ears ("Wanted: work experience" and "Reply via LinkedIn"), then the lead story about his week with his pictures in black and white, and his week in dates in the sidebar | unchanged |
| Agent Console | A green status line, then the operator panel with three sourced figures beside his team of agents drawn as one figure; then his week as a log | unchanged |
| The Card | His card on a dark desk, front and back: his photo, name, "Looking for work experience" and LinkedIn on the front, "What I bring" on the back; everything else folded under More | changed: "His personal business card, front and back, on a dark desk. In his words: "I designed our business cards"." (C34 still holds: the check requires his words in it) |

**Lingua** follows `team/rounds/3/design/PROPOSAL.md` (S1) and the reviewer's `team/rounds/3/review/DESIGN.md` (C85 to C91, C97); see below.

**For the developer:** `designLeads()` in `scripts/lib.mjs` only replaced the old Briefing wording; it can now return `d.leadsWith` as it is.

## Checks

A new self-check refuses a `leadsWith` that still describes a round 1 layout ("agent grid", "the Notice", "languages figure, beside"). `node data/facts.mjs` passes, with every round 2 check (the 27 agents, 277 with its window, Oxford, no Purpose box, no em dash).

## Lingua, second pass (S1, S2; C85, C86, C87, C90, C91, C97)

| Field | What | Condition |
|---|---|---|
| `LANGUAGES.speaksLine` | "Speaks English, Italian and French; an interest in Sanskrit and in programming languages." (source `linkedin`), for the name strip | C85 |
| `DESIGNS` lingua `copy.glossNote` | "The Italian and French lines (the ask, the section titles and the weekday names) are the site's translations, not his words. They await Indi's approval." `awaitingIndi: true`. The page shows this text. | C86 |
| `QUESTIONS_FOR_INDI` `lingua` | now asks about the ask, the section titles and the weekday names | C86 |
| `DESIGNS` lingua `leadsWith` | "His three languages, each with the ask and the section titles in that language" | C90 |
| `LINGUA_TRIPTYCH` (new) | three panels `{ lang, code, name: { text, lang }, ask: { text, lang, awaitingIndi? }, titles: [{ section, text, lang, awaitingIndi? }], sources }`, built from `LINGUA_TITLES` (looking-for; built, how-i-work, languages) and `LANGUAGES.speaks` (English, italiano, français), so the words match the section titles further down | S1, C87 |
| `LINGUA_WEEKDAYS` (new) | seven `{ id, en, it, fr }`, each `{ text, lang }`; Italian lun mar mer gio ven sab dom, French lun mar mer jeu ven sam dim, Italian and French `awaitingIndi: true` | C91 |
| `LINGUA_SHARE_CARD` (new) | `ask` "Looking for work experience" (`ASK.short`, `lang: 'en'`) and `languagesLine` "English · Italiano · Français": the conductor's decision on C97, English only for the ask | C97 |

New self-checks: the speaks line exists with `linkedin`; the gloss note and the Lingua question name the ask, the titles and the weekdays; Lingua's `leadsWith` is the S1 line; every Italian and French string in the triptych and the weekdays has `lang` and `awaitingIndi: true`; three panels and seven weekdays; the share card asks in English only.

**Awaiting Indi, through Dinis Cruz:** the Italian and French ask, section titles and weekday names. If he says no, the panels keep only the language names (C97) and the English ask.
