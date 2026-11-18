# Round 2 review of the design proposal

Written by reviewer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Reviewed: `team/rounds/2/design/PROPOSAL.md` (commit 149a34e) and the writer's new exports in `data/facts.mjs` (commit fc76fcd: `HOME_LINE`, `HOME_FIGURES`, `TEN_DAYS_RANGE`, `TEN_DAYS`), against `team/BRIEF.md` rules as restated in `CLAUDE.md` and `team/reviewer/POLICY.md`, `team/rounds/2/copy/NOTES.md` and my round 1 conditions (`team/rounds/1/review/DESIGN.md`, `LIVE.md`).

What I checked, besides reading: `node data/facts.mjs` (exit 0: every source id known, wording rules hold); every new colour pair (node script, WCAG 2.x relative luminance; table below); the agent counts in R4 against `AGENTS.list` (27, 23 running, per-agent counts match; they sum to 309, the derived figure C16 keeps off the site); the three work shots in R1 (`cards-round4-executives.jpg`, `sticker-gap.jpg`, `schedules.jpg`: no person, no personal name); the anchors R1 links to (`#work-business-cards-printed`, `#work-laptop-stickers`, `#work-schedules` exist in `src/built/index.html`); text widths at 390 px by estimate where the proposal gives sizes. No `board/HOLD.md` exists.

Conductor decisions applied: `HOME_LINE` is his "What I bring" line; The Card stays his personal card; 7 November stays blank on the strip; any `TEN_DAYS` entry without a source id is left out.

Conditions continue the round 1 numbering (C61 on).

## Verdicts

| Change | Verdict |
|---|---|
| R1 Home first screen | pass with changes (C61 to C65) |
| R2 Five designs, own headers | pass with changes (C66 to C72) |
| R3 Dated strip | pass with changes (C73 to C78) |
| R4 Team figure | pass with changes (C79 to C81) |
| R5 Drop the link strip | pass (C82) |
| R6 Fixes C7, C12, C41, previews, seal, C39, C5, image sizes | pass with changes (C83, C84) |

## R1. Home first screen: pass with changes

Rules hold: his line is `QUOTES.extracts.bring`, exact, attributed and linked to `src-whatsapp`; the three figures are `HOME_FIGURES` with sources; no one but Indi named; the 31 target companies are not used; one photo (the C9 crop, 300 px, under the 372 px limit of C10).

- **C61. Text from the data, whole.** Tile labels are `HOME_FIGURES[].label` verbatim ("commits by his agents on the team's site, 3 to 13 November 2026", not "3-13 Nov"; "AI agents in his team, 23 running", not "23 runn."). The mock-ups' short forms are not copy. `text` is the accessible name of each tile.
- **C62. Tiles at 390 must not overflow.** At 114 px wide with 13 px labels, "PrompTugal.news" (about 100 px) does not fit the inner width (about 94 px), and label 2 runs to five lines. Either make each tile a row (`grid-template-columns: 72px 1fr`, number left, label right) with the whole row as one link to its source entry, or keep three columns with `overflow-wrap:break-word` and no clipping. Decide by screenshot. Must hold: numbers and labels of all three tiles above 844 px at 390; "Sources for this screen" may fall below.
- **C63. Each tile's source link** opens the right `/sources/` entry (`ws-people-indi`, `news-ten-days`, `promptugal-about`), 44 px tall (C7).
- **C64. Work captions** take their dates from the `/built/` entry each tile links to ("4 to 5 November", "4 November", "8 November"), not from RECORD.md directly, so a caption never shows a date the linked entry does not. Alt text as proposed.
- **C65. Nav at 1366 in Charter small caps is re-measured** by screenshot (C3): small caps are wider than the round 1 nav. One row, or shorten labels.

## R2. Five designs: pass with changes

Every text pair proposed passes 4.5:1 (table below); every standalone target is stated at 44 px or more; the item contract (ask, nav or Menu, Source, Designs at 390) keeps C4.

- **C66. The Card back.** Drop "WEB SUMMIT LISBON 2026" from the back: on the same face as "27 agents" it ties the 27 to Web Summit (C5). Drop the mono "27 agents · 23 running · 277 commits" (breaks the 277 window rule). The back is: "What I bring" with his three phrases (exact substrings of his line, with one note reference to `whatsapp`, 24x24, C12), then `DESIGNS.card.copy.back.numbers` exactly, then `languagesLine` as in facts.mjs ("English · Italiano · Français"). Let the back grow at 390 (`min-height`), as proposed.
- **C67. The Card stays his personal card** (conductor): no RiskMandate name, seal, strip, colours or wording on either face (C37 holds).
- **C68. The Card front LinkedIn link** is 44 px tall at 390 and 1366 (C35), and is a plain `https://` link (no `mailto:`/`tel:` anywhere).
- **C69. Focus colour per design, at least 3:1 against every band and bar it sits on.** Not stated in the proposal. Use: Briefing `#8C1D18` (8.29 on paper); Lingua `#1E4D8C` (7.35); Front Page `#B3121B` (6.66); Console `#0B1016` on the green status line (10.49) and `#5BD69B` on the bar (10.49); The Card `#F2B38F` on the desk (8.70), `#B4471F` on the front (5.44), `#FFFFFF` on the back (8.42, C36).
- **C70. Briefing dark mode is incomplete.** Give dark values for the tile sheet, the event band (R3), the primary button and the running dot, each at least 4.5:1 for text and 3:1 for marks, and list them with ratios in the build notes. Lingua and Front Page stay fixed light, Console and The Card fixed dark (as proposed).
- **C71. Console cursor blink** stops after 5 seconds (WCAG 2.2.2) and is static under `prefers-reduced-motion`.
- **C72. Lingua figure scale.** Show the horizontal figure only where it renders at least 620 px wide (labels at least 12 px); below that, the vertical variant. Caption as `<figcaption>`, as proposed.

## R3. Dated strip: pass with changes

The data holds: 16 entries, each with a known source id, dates from sources, four zoneless times with `timeNote`, the 14 November entry marked derived with `how`. The proposal's table is out of date against it.

- **C73. The strip reads `TEN_DAYS` only.** Left out, as the conductor decided and the writer did: 2 November lead-in, 7 November social drafts, 8 November token study and schedules check, 10 November newsroom workflow. So nine of the eleven days have entries, not ten.
- **C74. 7 and 8 November are blank:** day label and an outline mark only, no text such as "no dated record" or "weak".
- **C75. No invented short forms.** Strip text is `TEN_DAYS[].label`. If the 1366 strip needs shorter text, the writer adds a `short` field per entry in facts.mjs (a cut of `label`, no new words or facts) and I check it before the build. No four-line cap: if a column runs past about ten lines at 1366, use the vertical rail in two columns. The same applies to the Console log and the Front Page column ("fringe live 12:57" is not in the data).
- **C76. One source link per entry**, as note references (24x24, at most three, C12), not one "source" link per day: 3, 4, 10 and 11 November have several entries with different sources.
- **C77. Times as printed** ("23:30", "19:09", "12:57", "21:11"), never with "UTC" added; one visible line under the strip: "Times as the sources give them; no time zone stated." "07:20, 12:20 and 17:20 GMT" keeps GMT.
- **C78. 14 November** goes in a line under the strip ("After the ten days: ...", marked derived, with its source), not outside the container's right edge (there is no room at 1366). `kind` (his, team, event) is shown in words or a labelled mark, never colour alone.

## R4. Team figure: pass with changes

Counts match facts.mjs: groups 1 + 8 + 4 + 5 + 6 + 3 = 27; 23 running; four proposed. Caption names the groups as this site's.

- **C79. No commit total but 277.** Per-agent counts and bars only; no sum per group or overall (they add to 309, C16).
- **C80. Full names as text, never `mailto:`**, and `scripts/validate.mjs` passes unchanged (no gate edited to let them through). Long roles may wrap at the hyphen ("conductor-" / "newsroom"): at 180 px (1366) and 171 px (390) chips the name plus dot does not fit one line. Use `overflow-wrap:break-word`, not `anywhere`, so the break falls at the hyphen.
- **C81. Commit bar colour at least 3:1** on its chip in each palette (not stated). Running dot `#1F7A4D` 5.23 on sheet, dashed `#4A5468` 7.49, Console dot `#5BD69B` 9.63 and dashed `#8395A3` 5.67 on panel: pass.

## R5. Drop the link strip: pass

- **C82.** The `/built/` index links only to on-site anchors; the factory entry names no company and does not link to the factory's company pages from new elements. Footer "His work" links 44 px tall.

## R6. Fixes: pass with changes

- **C83. "6 sources" chip** is at least 24x24 and its margin note lists every source by id.
- **C84. C5 and C39** are met in the data (`node data/facts.mjs` checks both); the live review rechecks them on every design, including The Card's More and the Console background.

R6.4 (eager previews, 110 KB), R6.5 (seal at x 1020 to 1140, clear of the frame and the name) and R6.7 (real image sizes) pass as proposed.

## New colour pairs (computed)

| Design | Pair | Ratio |
|---|---|---|
| Briefing | `#13233F` / `#4A5468` / `#8C1D18` on paper `#F7F4EC` | 14.26 / 6.92 / 8.29 |
| Briefing | same on tile `#FFFDF8` | 15.42 / 7.49 / 8.97 |
| Briefing | `#8C1D18` / `#13233F` / `#4A5468` on event band `#F2E3D9` | 7.28 / 12.51 / 6.08 |
| Briefing | `#FFFFFF` on button `#13233F` | 15.67 |
| Briefing dark | `#EDE7DA` / `#A9B3C4` / `#F09A8E` on `#10192A` | 14.27 / 8.31 / 8.14 |
| Lingua | ink `#1F1A14`, muted `#5A5246`, en `#1E4D8C`, it `#1F6B3A`, fr `#8C2A3B`, sa `#9A4A00`, code `#4B3F8C` on `#F5EFE3` | 15.08, 6.72, 7.35, 5.69, 7.31, 5.47, 7.68 |
| Front Page | `#111111` / `#555049` / `#B3121B` on `#FBFAF6`; `#FBFAF6` on `#111111` | 18.08 / 7.65 / 6.66; 18.08 |
| Console | `#0B1016` on band `#5BD69B` | 10.49 |
| Console | `#D7E3EA` / `#8395A3` / `#5BD69B` / `#F2C14E` on `#0B1016` | 14.61 / 6.18 / 10.49 / 11.38 |
| Console | same on panel `#121A23` | 13.41 / 5.67 / 9.63 / 10.45 |
| The Card | `#EDEAE3` / `#B5B0A5` / `#F2B38F` on desk `#24231F` | 13.09 / 7.28 / 8.70 |
| The Card | same on lit centre `#34322C` | 10.67 / 5.93 / 7.09 |
| The Card | front `#1A1A1A` / `#5B5B5B` / `#B4471F` on `#FFFFFF` | 17.40 / 6.79 / 5.44 |
| The Card | back `#C9D8EE` / `#FFFFFF` on `#1E4D8C`; More `#1A1A1A` on `#EDEAE3` | 5.83 / 8.42; 14.49 |

Decorative only (no text, no meaning): Briefing rule `#B8AE98` 2.00, Lingua rule `#CFC3AE` 1.52, Console border `#1F2B38` 1.33, Card bar border `#3A3832` 1.34, crop marks `#8A857A` 4.28.

## For Dinis (and Indi, through Dinis)

Unchanged from the proposal: his line on the first screen (`HOME_LINE` or its alternative), The Card as his personal card, 7 November blank.
