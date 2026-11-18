# Round 2 build notes

Written by developer.indi-gupte@AgentiCCells.dinis on 18 November 2026, for conductor.indi-gupte@AgentiCCells.dinis. Built from `team/rounds/2/design/PROPOSAL.md` (R1 to R6), the reviewer's conditions in `team/rounds/2/review/DESIGN.md` (C61 to C84), the must-fix list in `team/rounds/1/review/LIVE.md`, the round 1 conditions still in force, `team/rounds/2/copy/NOTES.md` and `data/facts.mjs` (commit fc76fcd). Conductor decisions applied: `HOME_LINE` is his "What I bring" line; The Card is his personal card with no RiskMandate marks; 7 November blank; `TEN_DAYS` entries without a source id left out (the writer had already left them out); `/questions.md` stays, addressed to his own AI. Nothing pushed. No `board/HOLD.md` existed at any step.

How to rebuild: `node scripts/generate.mjs && node scripts/build.mjs`. Images: `node scripts/cards.mjs` (share cards), then serve `_site/` and run `node scripts/cards.mjs --designs <url>` (dialog previews), then `generate.mjs` again.

## What was built, change by change

### R1. The home first screen (The Briefing)

- Order as proposed: seal and label, `h1`, tagline and place (no note numbers on either), his line (`HOME_LINE.quote`, exact, with a 44 px attribution link to `/sources/#src-whatsapp`), the two buttons, three figure tiles, "Sources for this screen". The Purpose box and the old lede are gone.
- Photo: the C9 crop at 300 px at 960 px and wider (caption "Photo used with his agreement."), 112 px beside the name below that. The seal moved off the photo to the label line.
- "His work, in pictures": the printed cards, the gap sticker, "who wakes when"; each tile is one link to its `/built/` entry; mats 4:3 with `object-fit:contain` so nothing is cut. At 390 the strip scrolls in its own box (no page overflow).
- **C61**: tile labels are `HOME_FIGURES[].label` verbatim; `text` is in a visually hidden span, so it is each tile's accessible name, with the visible number and label hidden from screen readers.
- **C62**: decided by screenshot: rows (`76px 1fr`) below 700 px, three columns above. At 390 the third tile's number and label end at about 815 px, inside 844 (`shots/home-390.jpg`).
- **C63**: tile source links open `ws-people-indi`, `news-ten-days` and `promptugal-about` on `/sources/`, each 44 px tall.
- **C64**: captions take their dates from the `/built/` gallery entries they link to: "4 to 5 November, his designer agent", "4 November, his designer agent", "8 November, his conductor agent". Alt text as proposed.
- **C65**: the nav in Charter small caps fits one row at 1366 with the logo, Source and Designs (`shots/home-1366.jpg`).

### R2. Five designs that look five ways apart

One header markup for every design (`header(path, { band, logo, extra, nav })` in `scripts/lib.mjs`); each design passes its own band words, logo and nav labels, and its stylesheet restyles it. The items stay in every design at 390: the ask, LinkedIn, Menu, Source, Designs (C4). Inner pages keep The Briefing's header, now in `/style.css`.

- **The Briefing**: cream band with an oxblood top rule, "Briefing note · Looking for work experience · a team of 27 AI agents, 23 running" (the first and last parts from 960 px), seal and small-caps name, small-caps nav with middots, double rule under the bar.
- **Lingua**: three 4 px rules (English, Italian, French inks) on top; the band in three columns at 960 px and wider ("Looking for work experience", "Cerco un'esperienza di lavoro", "Je cherche une expérience professionnelle", with `lang`), English only at 390; italic lower-case nav; a three-bar Designs icon. The page is ruled in three columns: hero over two, photo in the third; every section opens with a title row in three languages (English 40 px, Italian and French 30 px italic) and English body in two columns with notes in the third; his three pictures in three columns; the gloss note kept (C22).
- **Front Page**: the header is the masthead. At 1180 px and wider: two ears ("Wanted / Work experience" to `/looking-for/`, "Reply via / LinkedIn"), the name in a didone at 74 px, the dateline between a heavy and a thin rule, the index as the nav with vertical rules, a black Designs button. At 390 the ears are one line above the masthead. The pictures sit under the lead story in black and white (colour on hover and focus); "The week in dates" is in the sidebar.
- **Agent Console**: a green status line (`● status: LOOKING FOR WORK EXPERIENCE`, `contact: linkedin`), `~/indi-gupte` with a block cursor, the window list `[0] home ... [6] ai [git] source`, `[designs]`. First screen: operator panel with the three figures, beside the team figure (R4) in the dark palette; then the week as a log (R3), what we built with the three pictures, the three charts, languages and background.
- **The Card**: a dark desk with a lamp gradient; front (white: crop, name, tagline, rule, "Looking for work experience", LinkedIn, West London) and back (blue) at 85:55 with crop marks, side by side at 1100 px and wider; one card that turns below (button "Turn over" / "Show the front", `aria-pressed`, the hidden face `inert` and `aria-hidden`; cross-fade under reduced motion; both faces show without JavaScript). Everything else is in `<details id="more">` on a light sheet; the "More" button opens it. Type in `cqi` against the card's wrapper, with floors at 390.
- **C66**: back = "What I bring" with one note reference to `whatsapp`, his three phrases (checked in code as exact substrings of `HOME_LINE`), `DESIGNS.card.copy.back.numbers` exactly, `languagesLine` with `lang` on each. No "Web Summit Lisbon 2026", no mono numbers line.
- **C67**: no RiskMandate name, seal, strip, colours or wording on either face; the line under the card says "His personal card, not a RiskMandate card."
- **C68**: the front LinkedIn link is 44 px tall at both widths (Playwright check below); a plain `https://` link.
- **C69**: focus: Briefing `#8C1D18` (dark `#F09A8E`), Lingua `#1E4D8C`, Front Page `#B3121B`, Console `#5BD69B` on the page and `#0B1016` on the status line, The Card `#F2B38F` on the desk, `#B4471F` on the front, `#FFFFFF` on the back.
- **C70**: Briefing dark values, computed (WCAG 2.x): tile sheet `#16213A`: ink `#EDE7DA` 12.98, muted `#A9B3C4` 7.57, seal `#F09A8E` 7.40; event band `#2A2533`: ink 12.08, seal 6.89, muted 7.04; primary button `#10192A` on `#EDE7DA` 14.27; running dot `#6FCF97` on the tile 8.42. Lingua and Front Page fixed light, Console and The Card fixed dark.
- **C71**: the cursor blinks four times (4.8 s) then stops; the global reduced-motion rule turns it off.
- **C72**: the languages figure is a container query: the wide variant only where the figure is at least 620 px wide, labels at 14 units (12 px or more at 620 px); caption is a `<figcaption>` outside the SVG. In Lingua it renders 1058 px wide at 1366 with nothing cut (C41).
- **Previews (R2.6, R6.4)**: rebuilt with `cards.mjs --designs` (24, 23, 34, 24, 18 KB); their top thirds now differ (`shots/dialog-1366.jpg`). Dialog images are `loading="eager" fetchpriority="low" decoding="async"`, and `/designs.js` calls `decode()` on all five on the first hover or focus of the Designs button. `/d/` keeps lazy loading and gives each card a 6 px top border in its lead colour.

### R3. His ten days

- `tenDays()` in `scripts/lib.mjs`: an HTML list, a vertical rail in two columns at 860 px and wider (3 to 8 November left; 9 to 12 inside a labelled "Web Summit Lisbon, 9 to 12 November" band, then 13, right), one column below. On the home page after the pictures, at the top of `/built/`, in Front Page's sidebar and inside The Card's More; Console shows `tenDaysLog()`, one line per entry.
- **C73** reads `TEN_DAYS` only; **C74** 7 and 8 November show the day and an outline mark only; **C75** text is `TEN_DAYS[].label` (no short forms, so no `short` field was needed; at 1366 the two-column rail keeps every column under ten lines); **C76** one note reference per entry, at most three; **C77** times as printed ("23:30", "19:09", "12:57", "21:11") and one line: "Times as the sources give them; no time zone stated."; "GMT" stays inside its label; **C78** 14 November in a line under the strip, marked "date derived" with its `how` and source; `kind` shown in words ("his work", "the team", "the event").

### R4. The team figure

- `teamFigure()` in `scripts/lib.mjs`, HTML and CSS: the conductor card, a bus, six groups (three columns at 960 px, one below; two in Console), chips in two columns with role, `@web-summit.indi`, status, a "one-off" tag where the source says so, and a commit bar with the count. The PrompTugal.indi agent separately, "not counted in the 27". Legend in words, caption "His agents draft; he sends every message." with sources, and the table in `<details>`.
- On `/how-i-work/` it is first after the lede and replaces the round 1 grid chart (which cut names); the home page shows the small version (conductor card and six group tiles linking to `/how-i-work/#team`); Console shows the full figure.
- **C79** per-agent counts only; the only total is 277 with its window. **C80** full names as text, no `mailto:`; `overflow-wrap:break-word`, so "conductor-newsapp" breaks at the hyphen; `validate.mjs` untouched and OK. **C81** bar colours: `#13233F` on `#FFFDF8` 15.42, `#EDE7DA` on `#16213A` 12.98, Console `#D7E3EA` on `#0E151D`, all above 3:1.

### R5. The link strip

- **C82**: `strip()` removed; no strip under any h1. `/built/` has "On this page" (every `BUILT` entry, his work gallery and the ten days; on-site anchors only, 44 px rows). The footer has a fourth column, "His work", from `STRIP`, 44 px links.

### R6. Fixes

- **C7**: every `summary` is a 44 px flex row; h3 links, footer links, figure source lines and the `/how-i-work/` stat link are 44 px (the stat link was 43 px at 390; fixed).
- **C12**: note references are 24 x 24 px boxes with `line-height:0` on the `sup`.
- **C83**: a claim with more than three sources shows one "N sources" chip (24 px) that opens a note listing every source by number and title. It is a `<button popovertarget>` with a `popover` note, so it can sit inside a paragraph; without popover support the note shows inline.
- **C84 / C5 / C39**: the pages use the writer's corrected fields directly; my round 1 workarounds are gone except two that the data still needs (below). The developer note in `BACKGROUND.timeline` (oxford `note`, which mentions "C39") is no longer printed on `/background/` or in `/index.md`.
- **C41**: see C72.
- **Seal (R6.5)**: The Briefing share card's seal is at x 1020 to 1140, y 60 to 180, clear of the photo and the name; six cards rebuilt, 51 to 58 KB.
- **Image sizes (R6.7)**: `jpegSize()` reads each JPEG's real size, used on `/built/` and in the picture strips (for example `sticker-gap.jpg` 800x800, `schedules.jpg` 800x675).

### Found and fixed while building

- `scrub()` in `scripts/lib.mjs` read 64-hex name hashes, but the validator now keeps 16-hex prefixes, so since commit 8f83058 it had silently matched nothing. It now reads the prefixes and fails the build if it finds none. (No name had leaked: the validator's own check passed.)
- `AGENTS.commits.text` now carries "3 to 13 November 2026", and several places appended it again; `COMMITS_LINE` now uses the text as it is.
- The languages figure printed "(his words) (his words)" because `LANGUAGES.leadsTo.text` now includes it.

## For the writer

- `DESIGNS.briefing.leadsWith` still says "The Purpose box (the ask) and his own summary"; R1 removed the box. `designLeads()` shows "His photo, his own line from his post and three sourced figures" on `/d/` and in `/designs.json` until the field is updated.
- `BACKGROUND.timeline` oxford `note` holds a note for the developer; the pages filter it, but it would be cleaner as a comment.

## Checks

Playwright, Chromium, 390 and 1366 px, on `/`, `/built/`, `/how-i-work/`, `/d/`, the four `/d/<slug>/`, `/behind-the-scenes/`, `/languages/`, `/background/`, `/looking-for/`, `/sources/`, `/agents/`: horizontal overflow 0 on every page; no standalone link, button or summary under 44 px tall, and no note reference under 24 x 24 (links inside running text are exempt, C12). The Card: Turn over flips at 390 with `aria-pressed` and `inert`, at 1366 both faces stay live and the button is hidden; More opens; the sources popover opens; the dialog shows five painted previews on opening.

Screenshots: `team/rounds/2/build/shots/` (home, `/built/`, `/how-i-work/`, `/d/`, Lingua, Front Page, Console, The Card, `/behind-the-scenes/` at 390 and 1366, top 5000 px, each under 300 KB; also `dialog-390.jpg` and `dialog-1366.jpg`). Each was looked at.

## Gate output (last run, before the commits)

```
node scripts/generate.mjs   designs: briefing (home), lingua, front-page, console, card; /d/ and /designs.json
                            generated src/ from data/facts.mjs
node scripts/build.mjs      behind-the-scenes: 6 roles, 2 round page(s), 27 commits
                            built _site/ (dev)
node scripts/validate.mjs   OK
node scripts/leak-scan.mjs  OK (117 files, 212 binary skipped)
node scripts/abp-check.mjs  OK (6 policies)
```

## Open

1. Design previews and share cards are rendered with the build machine's fonts (Charter, Gill Sans and the didone fall back), so they look plainer than on a Mac.
2. The popover note needs a browser with the Popover API (all current ones); older browsers show the source list inline.
3. Indi's approval is still needed for the Lingua glosses, the Front Page headline and notice, and his line on the first screen (copy notes).
