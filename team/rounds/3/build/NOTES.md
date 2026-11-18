# Round 3 build notes

Written by developer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Built from `team/rounds/3/design/PROPOSAL.md` (S1 to S4) with the reviewer's conditions C85 to C98 (`team/rounds/3/review/DESIGN.md`) and the writer's data (`team/rounds/3/copy/NOTES.md`). No `board/HOLD.md` at any step. Changed: `scripts/designs.mjs`, `scripts/lib.mjs`, `scripts/cards.mjs`, the pages they write under `src/`, the share cards and previews, and this folder. Not pushed.

## What was built

- **S1 Lingua.** No band and no cream: one dark bar (`#16202B`, "INDI GUPTE" in caps sans, lower-case nav, white pill "designs"); a name strip (96 px crop at 1366, 64 px at 390; a 28 px sans h1; `LANGUAGES.speaksLine`; "Message me on LinkedIn"); then the triptych from `LINGUA_TRIPTYCH` (blue, green, red panels: code, language name, the ask, three title links to the sections); then `glossNote`, the two dashed interest tiles and the CS50x line. Charter stays only in the body text further down. The languages figure and the three-language title rows follow, recoloured.
- **S2 strips, five drawings.** The Briefing: unchanged drawing, headings "Annex A." and "Annex B." in `#8C1D18`. Lingua: a two-week calendar (Mon 2 to Sun 15 November), weekday headers from `LINGUA_WEEKDAYS` in three inks; at 390 a list of days; pictures as white plates with an ink frame. Front Page: "Briefs" in four columns under the lead story (two at tablet, one at 390), datelines in red caps, the event days on `#F1EEE6`; pictures as a greyscale picture desk with a "Picture:" credit line; the right rail keeps Notice and "In this edition". Agent Console: `$ tail ten-days.log` with a line-number gutter and kind as a coloured word; `$ ls pictures/` as image viewer windows. The Card: inside More, the strips lie on the desk: pictures as 85:55 cards, days as index cards (event days blue, 7 and 8 November dashed).
- **S3 share cards** (`node scripts/cards.mjs`, 1200x630, q82): briefing 59 KB, lingua 42 KB, front-page 54 KB, console 46 KB, card 41 KB, indi-gupte (inner pages, unchanged look) 55 KB. Home and `/d/briefing/` now use `briefing.jpg`; each design page uses its own card; `og:image:alt` names the design ("Indi Gupte, looking for work experience: the Lingua design"). **Previews** (`--designs http://localhost:8765`): briefing 24, lingua 23, front-page 34, console 24, card 18 KB (all under 60).
- **S4 focus.** `.d-front .band{--focus:#B3121B}`, `.d-card .band{--focus:#F2B38F}`; Lingua bar and panels `#FFFFFF`, ground `#16202B`. Measured with Playwright: Front Page ear `rgb(179,18,27)`, Card band link `rgb(242,179,143)`, Lingua panel links and bar `rgb(255,255,255)`, all 3 px.
- `designLeads()` now returns `leadsWith` as the writer wrote it.

## Conditions

| Id | How it holds |
|---|---|
| C85 | Name strip renders `LANGUAGES.speaksLine` with its `linkedin` note. |
| C86 | The note under the triptych is `DESIGNS.lingua.copy.glossNote.text` verbatim (no extra sentence added). |
| C87 | `lang` on each Italian and French panel, name, ask, title link and weekday span: 37 `lang="it"` and 37 `lang="fr"` on `/d/lingua/`. |
| C88 | At 390 the French panel ends at about 748 px (`d_lingua-390.jpg`), inside 844; the languages line kept. |
| C89 | All nine title links 44 px tall at 390 and 1366 (Playwright); panel padding 20 px (390) and 32 px (1366), so the white outline (3 px plus 2 px offset) stays inside the panel. |
| C90 | `/d/` and `/designs.json` show the writer's Lingua line. |
| C91 | Weekday headers from `LINGUA_WEEKDAYS`; the gloss note covers them. |
| C92 | 7 and 8 November: date or dateline only in every design (no "No dated record." in any cell or row); The Card's empty cards' label in `#EDEAE3`. |
| C93 | 14 November is not put in a grid cell: Lingua's 14 is an empty out-of-range cell; Lingua, Front Page and The Card carry the "After the ten days ... (date derived: ...)" line with its source; Console's log row says "derived" with the reason and source. Headings keep "3 to 13 November". |
| C94 | All entry text is `TEN_DAYS[].label`; window bars show the real file names (`cards-round4-executives.jpg`, `sticker-gap.jpg`, `schedules.jpg`) and the `WORK_PICS` dates ("4 to 5 November"). |
| C95 | 2 and 15 November hold no entry; each cell has its date in text (and the weekday in three languages for screen readers at 1366, visible at 390). |
| C96 | The Card's card: "LOOKING FOR WORK EXPERIENCE" 28 px at card x 48, y 288, under the photo; checked by render, inside the card. |
| C97 | Lingua card: the ask in English only, in the English panel; the Italian and French panels show only "Italiano" and "Français" (`LINGUA_SHARE_CARD.languagesLine`). |
| C98 | `cards.mjs` throws on a card at 300 KB or a preview at 60 KB; every card uses `crop()` (248x248 from x 72, y 20). |
| C73 to C78 | Same 16 entries in each drawing; kind in words ("his work", "the team", "the event"); times as given with the no-time-zone line. |

## Checks

- Screenshots in `shots/` (390 and 1366, top 4000 px): `/`, `/d/`, `/d/lingua/`, `/d/front-page/`, `/d/console/`, `/d/card/`; plus `card-more-strips-390.jpg` and `-1366.jpg` (More opened) and `dialog-card-1366.jpg` (the dialog with the five new previews). No horizontal overflow reported at either width. All looked at, with the six share cards.
- Fixed on looking: Lingua's designs button was empty at 390 (icon now shown below 700 px); Front Page's right rail left a gap under the Notice (row now sized to content).

## Gate output

`node scripts/generate.mjs && node scripts/build.mjs && node scripts/validate.mjs && node scripts/leak-scan.mjs && node scripts/abp-check.mjs`, exit 0:

```
designs: briefing (home), lingua, front-page, console, card; /d/ and /designs.json
generated src/ from data/facts.mjs
behind-the-scenes: 6 roles, 3 round page(s), 40 commits
built _site/ (dev)
OK
OK (124 files, 274 binary skipped)
team/conductor/POLICY.md: conductor.indi-gupte@AgentiCCells.dinis 0.1.0 proposal, mixed; 15 rules: boundary 1, setting 6, expectation 8, nothing 0
team/designer/POLICY.md: designer.indi-gupte@AgentiCCells.dinis 0.1.0 proposal, observe; 14 rules: boundary 0, setting 5, expectation 9, nothing 0
team/developer/POLICY.md: developer.indi-gupte@AgentiCCells.dinis 0.1.0 proposal, observe; 15 rules: boundary 0, setting 5, expectation 10, nothing 0
team/researcher/POLICY.md: researcher.indi-gupte@AgentiCCells.dinis 0.1.0 proposal, observe; 15 rules: boundary 0, setting 5, expectation 10, nothing 0
team/reviewer/POLICY.md: reviewer.indi-gupte@AgentiCCells.dinis 0.1.0 proposal, observe; 15 rules: boundary 0, setting 5, expectation 10, nothing 0
team/writer/POLICY.md: writer.indi-gupte@AgentiCCells.dinis 0.1.0 proposal, observe; 14 rules: boundary 0, setting 5, expectation 9, nothing 0
OK (6 policies)
```

## Open

- Fonts: cards and previews render with the build machine's fallbacks (DejaVu and similar), as in round 2; the stacks match the pages.
- Awaiting Indi, through Dinis Cruz: the Italian and French ask, titles and weekday names.
