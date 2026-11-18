# Round 3 review of the design proposal

Written by reviewer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Reviewed: `team/rounds/3/design/PROPOSAL.md` (commit 18c408e) and `data/facts.mjs` (commit 32090c3), against `CLAUDE.md`, `team/reviewer/POLICY.md` and the round 2 conditions (`team/rounds/2/review/DESIGN.md`, C61 to C84), which all still hold.

Checked: `node data/facts.mjs` (exit 0); every new colour pair (node script, WCAG 2.x; table below); the Italian and French words against `LINGUA_TITLES` and `ASK`; the strip pictures used by the build (`cards-round4-executives.jpg`, `sticker-gap.jpg`, `schedules.jpg`); text widths at 390 and 1366 by estimate from the stated sizes. No `board/HOLD.md`. Conditions continue from C85.

## Verdicts

| Change | Verdict |
|---|---|
| S1 Lingua triptych | pass with changes (C85 to C90) |
| S2 Strips per design | pass with changes (C91 to C95) |
| S3 Share cards and previews | pass with changes (C96 to C98) |
| S4 Focus colours | pass |

## S1. Lingua: pass with changes

The translations are correct and plain. "Cerco un'esperienza di lavoro" and "Je cherche une expérience professionnelle" render his "I'm looking for work experience" (`QUOTES.extracts.ask`, `whatsapp`); "Cosa ho costruito", "Come lavoro", "Lingue" and "Ce que j'ai construit", "Comment je travaille", "Langues" match the English titles. All are in `LINGUA_TITLES` with `awaitingIndi: true`. "italiano" and "français" are `LANGUAGES.speaks[].ownName`, lower case as each language writes them.

- **C85. The name-strip line goes into the data first.** "Speaks English, Italian and French; an interest in Sanskrit and in programming languages." is not in `facts.mjs`. The writer adds it (source `linkedin`) before the build; the page renders that field.
- **C86. The note matches the data.** The current `glossNote` says "section titles" only. The writer widens it to cover the titles, the ask and the weekday abbreviations (C91), keeps `awaitingIndi: true`, and widens the `lingua` question in `QUESTIONS_FOR_INDI` to match. The page shows the data text, not the proposal's wording.
- **C87. `lang` on every Italian and French string**: panel, language name, ask, title links, weekday spans.
- **C88. 390 fit by screenshot.** My estimate: the name strip runs about 185 px (the languages line wraps to three lines at 15 px), the French panel about 220 px (ask on two lines, titles on two 44 px rows), the Italian about 195 px. That puts the end of the French panel near 812 px, inside 844 but with little room. If it is over, shorten the strip (drop the languages line at 390, not the panels).
- **C89. Targets and focus.** Each title link 44 px tall at 390 and 1366, including when the row wraps. The white focus outline must fall inside its panel (padding at least 5 px each side of the outline): white on the ground is 1.13.
- **C90.** "Leads with" changes to the proposal's line in `DESIGNS.lingua.leadsWith` (writer), and the self-check passes.

## S2. Strips: pass with changes

C73 to C78 still bind every drawing. Two drawings break C74 as written.

- **C91. Weekday abbreviations go into the data** (for example `LINGUA_WEEKDAYS`, each with `awaitingIndi: true`). Italian lun, mar, mer, gio, ven, sab, dom and French lun, mar, mer, jeu, ven, sam, dim are correct.
- **C92. 7 and 8 November carry no text** in any design (C74): drop Front Page's "No dated record." and Console's "-- no dated record". Dateline or date only. On The Card the empty cards' day label uses `#EDEAE3` (13.09 on the desk), not `#B4471F` (2.89).
- **C93. 14 November in a grid cell** (Lingua Saturday 14, The Card's twelfth card) is allowed only if the cell says "date derived", gives `how` and links its source; it is after the ten days, so headings keep "3 to 13 November". Otherwise a line under the strip (C78).
- **C94. Text from the data.** Front Page briefs, calendar cells and Console rows are `TEN_DAYS[].label` (or a checked `short`, C75), never rewritten. Console window bars show the real file names of the three strip pictures (not `cards-round2-seal.jpg`) and the date as the linked `/built/` entry gives it ("4 to 5 November", not "4-5 Nov", C64).
- **C95.** 2 and 15 November in the Lingua calendar hold no entry. The calendar grid lines (`#C9D0D8`, 1.37 on the ground) are decorative only; each cell has its date in text.

## S3. Share cards: pass with changes

Every text pair passes 4.5:1. No new facts: the Console card's "a team of 27 AI agents, 23 running" stands alone (no Web Summit on that card); "WEST LONDON" is `PERSON.place` (`whatsapp`).

- **C96. The Card's share text must fit.** "LOOKING FOR WORK EXPERIENCE" at 28 px caps +0.12em is about 600 px; from card x 260 it ends near x 860, past the card's 712 px inset. Either 20 px at card x 260, or 28 px at card x 48 below the photo (y 250 or lower). Check by render.
- **C97. The Lingua card carries the Italian and French asks** without the note. That is the same standing as the live titles; the conductor puts it to Dinis with C86. If Dinis says no, the Italian and French panels show only the language name; the English panel keeps the ask.
- **C98.** `scripts/cards.mjs` checks size (each card under 300 KB, each preview under 60 KB) on the rerun; the crop is the 248x248 square from x 72, y 20, never the whole photo (C9).

## S4. Focus: pass

`#B3121B` on `#FBFAF6` 6.66 and on `#FFFFFF` 6.96; The Card band `#F2B38F` on the desk 8.70 (the leaked `#8C1D18` is 1.73); Lingua bar `#FFFFFF` on `#16202B` 16.46.

## New colour pairs (computed)

| Where | Pair | Ratio |
|---|---|---|
| Lingua | `#FFFFFF` on bar `#16202B`; ink `#16202B` / muted `#4A5563` on ground `#EEF1F4` | 16.46; 14.52 / 6.69 |
| Lingua panels | `#FFFFFF` / tint on en `#1E4D8C` | 8.42 / 6.68 |
| Lingua panels | `#FFFFFF` / tint on it `#1F6B3A` | 6.52 / 5.21 |
| Lingua panels | `#FFFFFF` / tint on fr `#8C2A3B` | 8.37 / 6.46 |
| Lingua tiles | sa `#9A4A00` / code `#4B3F8C` on ground | 5.52 / 7.75 |
| Lingua calendar | en / it / fr inks on ground | 7.42 / 5.75 / 7.38 |
| Lingua calendar | `#16202B` / `#4A5563` on `#FFFFFF` | 16.46 / 7.58 |
| Front Page briefs | `#B3121B` / `#555049` / `#111111` on `#F1EEE6` | 6.00 / 6.89 / 16.29 |
| Console log | `#8395A3` / `#5BD69B` / `#F2C14E` / `#D7E3EA` on `#0B1016` | 6.18 / 10.49 / 11.38 / 14.61 |
| The Card days | `#B4471F` / `#1A1A1A` on `#FFFFFF`; `#C9D8EE` / `#FFFFFF` on `#1E4D8C`; captions `#EDEAE3` on desk | 5.44 / 17.40; 5.83 / 8.42; 13.09 |
| Share: Briefing | `#13233F` / `#8C1D18` / `#4A5468` on `#F7F4EC` | 14.26 / 8.29 / 6.92 |
| Share: Lingua | top as Lingua above; panels as above | |
| Share: Front Page | `#111111` / `#B3121B` on `#FBFAF6` | 18.08 / 6.66 |
| Share: Console | `#0B1016` on `#5BD69B`; `#8395A3` / `#5BD69B` / `#D7E3EA` on `#121A23` | 10.49; 5.67 / 9.63 / 13.41 |
| Share: The Card | `#1A1A1A` / `#B4471F` / `#5B5B5B` on `#FFFFFF` | 17.40 / 5.44 / 6.79 |

## For Dinis (and Indi, through Dinis)

The Italian and French ask, titles and weekday abbreviations are the site's translations awaiting Indi's approval (C86, C91), and whether the Lingua share card may carry them before he approves (C97).
