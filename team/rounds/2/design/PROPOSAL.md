# Round 2 design proposal: Indi Gupte

Written by designer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. **Status: proposal.** Nothing here is built. The reviewer passes, passes with changes or rejects each numbered change (R1 to R6) before the writer and developer start.

## What this proposal answers

- Dinis Cruz, 2026-11-18, about 09:51 UTC: "please go to town on Indi and make it look as good (if not better) as [another team member]".
- Dinis Cruz, 2026-11-18, about 10:03 UTC: "remember to add those 5 very different designs as that popup view that we use in the other sites".
- Dinis Cruz, 2026-11-18, about 10:04 UTC: "can you provide those visualisations of the multiple agentic teams he created and run".
- The round's aim (`team/rounds/2.md`, conductor): a new first screen, five designs that look different, The Card as a full card, a dated strip of his ten days, his agents as one team figure, no repeated link strip, and the reviewer's fixes.

### What was read

| Read | When | What it gave |
|---|---|---|
| `team/rounds/1/review/LIVE.md` | 18 Nov 2026 | Five failed conditions (C5, C7, C12, C39, C41), the smaller fixes, seven lifts, and the reviewer's account of the model site's home page (framed photo, a one-line voice, three buttons, four stat tiles at the fold). |
| `team/rounds/img/r2-before/` (home, `/d/`, The Card at 390 and 1366) and `team/rounds/1/review/shots/d_lingua-1366.jpg` | 18 Nov 2026 | At 1366 the photo is a 240 px tile in the corner and the first screen is text; at 390 the photo is below the fold (y about 1100). The `/d/` previews share their top third (same band and bar). The Card is a white card with an empty middle, then a long document. Lingua's hero figure is cut at the right edge. |
| `src/index.html`, `src/built/index.html`, `src/style.css`, `scripts/cards.mjs`, `scripts/validate.mjs` (read only) | 18 Nov 2026 | Current markup and classes (`header.site > .band + .bar`, `.refs a{min-width:18px;padding:5px 1px}`), dialog previews with `loading="lazy"`, the share-card seal at `left:382px;top:438px`, and the validator's rule that `role@web-summit.indi` passes the email check. |
| `data/facts.mjs`, `data/research/RECORD.md`, `data/research/agents.json` | 18 Nov 2026 | Every fact, date and figure below. Nothing here is new: where a fact is not in those files it is marked "writer to add, with source" or left out. |
| `src/assets/work/*.jpg` | 18 Nov 2026 | Real sizes: the three card shots 800x518, `sticker-gap.jpg` 800x800, `schedules.jpg` 800x675, `education.jpg` 800x870, `newsroom-workflow.jpg` 800x416, `stickers-overview.jpg` 800x566. `/built/` gives every one `width="800" height="518"`, which is wrong for four of them (fix in R6.7). |

The model site's address is not in this repository (it is in the factory brief, withheld here), so I compare against the reviewer's account of it in `LIVE.md`, read on 18 November 2026, and name no one.

### The changes

| Id | Change | Who builds | Pages |
|---|---|---|---|
| R1 | The home first screen: larger photo, his own line, three sourced figures, the ask, his work in pictures | developer (copy: writer) | `/` (The Briefing) |
| R2 | Five designs that look five ways apart: each its own header and band; Lingua and The Card as full designs; new previews | developer | `/`, `/d/*`, dialog, `/d/` |
| R3 | A dated strip of his ten days | writer (two source ids), developer | `/`, `/built/`, Front Page, Agent Console |
| R4 | His agents as one team figure with full names, grouped, status shown | developer | `/how-i-work/`, `/`, Agent Console |
| R5 | Drop the link strip under every h1 | developer | 9 inner pages, footer, `/built/` |
| R6 | The reviewer's fixes (C7, C12, C41, dialog previews, share-card seal, C39, image sizes) | developer, writer for C5 and C39 | all |

Common rules, unchanged from round 1: system fonts only; every text pair at least 4.5:1 (ratios given, WCAG 2.x relative luminance, computed by the designer); every standalone target at least 44x44 px; note references at least 24x24 px; no horizontal page scroll at 390; `prefers-reduced-motion` stops all motion; the headshot is always the CSS crop (D2.7), never the whole file, and never shown larger than 300 px (1.25 times the 240 px crop).

---

## R1. The home first screen (The Briefing)

### R1.1 What the first screen holds, in order

1. A label: `BRIEFING NOTE · FACTS READ 18 NOVEMBER 2026` (as now; `awaitingIndi` as in facts.mjs).
2. `h1` "Indi Gupte". **No note numbers on the name or the line under it.**
3. "Brand, partnerships and research · West London". No note numbers.
4. **His own line**, the one sentence from his post that says what he offers, quoted exactly (`QUOTES.extracts.bring`):
   > What I bring: company research, design (I designed our business cards), and working every day with a team of AI agents.

   Attribution under it, 14 px: "From his post to a UK Web Summit WhatsApp group, November 2026". The attribution is a 44 px link to `/sources/#src-whatsapp`. This replaces the lede paragraph, which carried the C5 wording.
5. The ask: primary button "Message me on LinkedIn" (to his profile), secondary "What I am looking for" (to `/looking-for/`). The Purpose box goes: the band and these buttons carry the ask, and the box cost 90 px.
6. **Three sourced figures**, each a tile with its number, a label and a visible source line:

| Tile | Number | Label | Source line (a 44 px link) | facts.mjs |
|---|---|---|---|---|
| 1 | 27 | AI agents in his team, 23 running | "His dashboard, web-summit.sgit.ai, read 18 Nov 2026" | `AGENTS.total`, `AGENTS.running` (`ws-people-indi`) |
| 2 | 277 | commits by his agents on the team's site, 3 to 13 November 2026 | "Ten days at Web Summit, newsroom.sgit.ai, read 18 Nov 2026" | `AGENTS.commits` (`news-ten-days`) |
| 3 | 1 of 3 | editors of PrompTugal.news | "PrompTugal.news, about, read 18 Nov 2026" | `editor` (`promptugal-home`, `promptugal-about`) |

7. "Sources for this screen" as one 44 px link under the tiles (to `/sources/`), which takes the place of the numbers removed from the name and line (tagline: `factory-brief`; place: `whatsapp`).
8. Photo: the headshot crop at **300x300** at 1366 (was 240), **112x112** at 390 beside the name (was 160, below the fold). Caption under it at 1366, 13 px muted: "Photo used with his agreement." The seal "IG" moves off the photo: it sits at 40 px before the label line (left of "BRIEFING NOTE"), so nothing covers his face.
9. Second screen: **His work, in pictures**: three of his shots, each linking to its entry on `/built/`:

| Order | File | Shows | Link | Alt text |
|---|---|---|---|---|
| 1 | `cards-round4-executives.jpg` (800x518) | the printed Executives card: "Do you know what your agents are doing?" | `/built/#work-business-cards-printed` | "The printed RiskMandate business card for executives, made by his designer agent" |
| 2 | `sticker-gap.jpg` (800x800) | the "Control the gap" laptop sticker | `/built/#work-laptop-stickers` | "The laptop sticker on the gap between what an agent can reach and what it may do" |
| 3 | `schedules.jpg` (800x675) | his agents: who wakes when | `/built/#work-schedules` | "His page showing when each of his agents wakes up during the day" |

   Caption under each, 15 px: a title ("The printed cards", "The gap sticker", "Who wakes when") and one muted line ("4 to 5 November, his designer agent", "4 November, after his notes", "8 November, his conductor agent"; dates from RECORD.md, round 1b table). Each caption and image is one link (whole tile, at least 44 px tall).

### R1.2 Layout at 1366 px (first 900 px)

Container 1152 px, 12 columns of 74 px, 24 px gaps. Header (band 44 + bar 64) = 108 px.

- Hero grid: `grid-template-columns: 300px 1fr; column-gap: 56px`. Photo column 300 px (x 107 to 407); text column 796 px.
- Tiles: `grid-template-columns: repeat(3, 1fr); gap: 16px` inside the text column (each 255 px wide, 112 px tall), `background:#FFFDF8; border:1px solid #D8CFBC; border-top:3px solid #8C1D18; padding:14px 16px`.
- Work strip: full container width, `grid-template-columns: repeat(3, 1fr); gap: 24px` (each 368 px). Each image sits on a mat `aspect-ratio: 4 / 3; background:#EFE9DC; padding:12px; object-fit: contain` (276 px tall), so no shot is cropped and no text in it is cut.

| Element | Type | Size | Colour |
|---|---|---|---|
| Label | sans small caps, +0.06em | 14 px | `#8C1D18` |
| h1 | Charter 600, line-height 1 | 72 px | `#13233F` |
| Tagline | Charter 400 | 22 px | `#4A5468` |
| His line | Charter italic 400, line-height 1.4, `max-width: 34em`, a 3 px `#8C1D18` rule on the left, 20 px padding | 24 px | `#13233F` |
| Attribution | sans | 14 px | `#4A5468`, underlined |
| Buttons | sans 600, 48 px tall | 17 px | primary `#FFFFFF` on `#13233F` (15.67); secondary `#13233F` text, 2 px `#13233F` ring |
| Tile number | Charter 600, `font-variant-numeric: lining-nums tabular-nums` | 44 px | `#13233F` |
| Tile label | sans | 15 px | `#13233F` |
| Tile source | sans, underlined | 13 px | `#4A5468` (6.92 on paper, 7.49 on the tile) |
| Work strip h2 | Charter 600 | 28 px | `#13233F` |

Mock-up, first 900 px at 1366 (one character is about 9 px; y in px on the right):

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐   0
│▓ BRIEFING NOTE · LOOKING FOR WORK EXPERIENCE  · a team of 27 AI agents, 23 running   Message me on LinkedIn ↗ │  band 44 (R2.1)
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤  44
│ (IG) INDI GUPTE      Home · What I built · How I work · Languages · Background · Looking for ·          │
│                      Use with AI · Source ↗                                             [ DESIGNS ]      │  bar 64
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤ 108
│                                                                                                        │
│   ┌──────────────────────────┐    (IG) BRIEFING NOTE · FACTS READ 18 NOVEMBER 2026                     │ 156
│   │                          │                                                                         │
│   │                          │    Indi Gupte                                         (72 px)           │ 180
│   │      headshot crop       │                                                                         │
│   │        300 x 300         │    Brand, partnerships and research · West London     (22 px)           │ 268
│   │                          │                                                                         │
│   │                          │  ┃ What I bring: company research, design (I designed our              │ 316
│   │                          │  ┃ business cards), and working every day with a team                  │
│   │                          │  ┃ of AI agents.                                       (24 px italic)  │
│   └──────────────────────────┘    From his post to a UK Web Summit WhatsApp group, November 2026        │ 424
│   Photo used with his agreement.                                                                       │ 466
│                                   [ Message me on LinkedIn ]  [ What I am looking for ]                │ 468
│                                                                                                        │
│                                   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                      │ 548
│                                   │ 27          │ │ 277         │ │ 1 of 3      │                      │
│                                   │ AI agents,  │ │ commits,    │ │ editors of  │                      │
│                                   │ 23 running  │ │ 3-13 Nov    │ │ PrompTugal  │                      │
│                                   │ source ↗    │ │ source ↗    │ │ source ↗    │                      │
│                                   └─────────────┘ └─────────────┘ └─────────────┘                      │ 660
│                                   Sources for this screen                                              │ 668
│ ────────────────────────────────────────────────────────────────────────────────────────────────────── │ 724
│   His work, in pictures                                                     Everything he built →       │ 748
│   ┌──────────────────────────────┐ ┌──────────────────────────────┐ ┌──────────────────────────────┐   │ 792
│   │ ▓▓ DO YOU KNOW WHAT YOUR     │ │      ( CONTROL THE GAP )      │ │ Indi's agents: who wakes when│   │
│   │ ▓▓ AGENTS ARE DOING?         │ │                               │ │ [5] [10] [9] [0]             │   │
│   │ (printed card, 4:3 mat)      │ │ (sticker, 4:3 mat)            │ │ 07:20 ○  12:20 ○  17:20 ○    │   │
└───┴──────────────────────────────┴─┴───────────────────────────────┴─┴──────────────────────────────┴───┘ 900
        (tiles end at 1068; captions to 1124; the dated strip, R3, follows at 1180)
```

The tops of all three pictures show in the first 900 px; the whole strip and its captions end at about 1124, inside the second screen.

### R1.3 Layout at 390 px (first 844 px)

Gutters 16 px, content 358 px. Header: band 44 (one line, R2.1) + bar 56 = 100 px.

- Name block: `grid-template-columns: 112px 1fr; column-gap: 16px; align-items: center`. Photo 112x112, radius 10 px, 2 px `#13233F` frame. h1 40 px Charter 600, line-height 1.05 (two lines: "Indi" / "Gupte" if needed); tagline 16 px under it, `#4A5468`.
- His line: 19 px Charter italic, line-height 1.4, 3 px left rule, padding-left 14 px (five lines).
- Buttons: full width, 48 px, stacked with 8 px gap.
- Tiles: `grid-template-columns: repeat(3, 1fr); gap: 8px` (each 114 px): number 30 px, label 13 px (three lines), source line "source ↗" 13 px as a 44 px tall link.
- Work strip: a row that scrolls in its own box, `display:grid; grid-auto-flow:column; grid-auto-columns:78%; gap:12px; overflow-x:auto; scroll-snap-type:x mandatory; overscroll-behavior-x:contain`, each tile `scroll-snap-align:start`, mat 4:3 (279x209). The page itself does not scroll sideways (the strip has `max-width:100%`). A visible "1 of 3 · swipe" hint is not needed: the second tile shows 67 px at the right edge.

Mock-up, first 844 px at 390 (one character is about 9 px):

```
┌──────────────────────────────────────┐   0
│ LOOKING FOR WORK EXPERIENCE  LinkedIn↗│  band 44
├──────────────────────────────────────┤  44
│ (IG) Indi Gupte   [Menu] [gh] [▦]     │  bar 56
├──────────────────────────────────────┤ 100
│ (IG) BRIEFING NOTE · FACTS READ       │ 120
│      18 NOVEMBER 2026                 │
│ ┌──────────┐  Indi                    │ 164
│ │ headshot │  Gupte        (40 px)    │
│ │ 112x112  │  Brand, partnerships and │
│ └──────────┘  research · West London  │ 276
│ ┃ What I bring: company research,     │ 296
│ ┃ design (I designed our business     │
│ ┃ cards), and working every day       │
│ ┃ with a team of AI agents.           │
│ From his post to a UK Web Summit      │ 430
│ WhatsApp group, November 2026         │
│ [      Message me on LinkedIn      ]  │ 488
│ [      What I am looking for       ]  │ 544
│ ┌─────────┐┌─────────┐┌─────────┐     │ 612
│ │27       ││277      ││1 of 3   │     │
│ │agents,  ││commits, ││editors, │     │
│ │23 runn. ││3-13 Nov ││PrompTug.│     │
│ │source ↗ ││source ↗ ││source ↗ │     │
│ └─────────┘└─────────┘└─────────┘     │ 740
│ Sources for this screen               │ 748
│ His work, in pictures                 │ 800
│ ┌────────────────────────────┐┌────   │ 836
└─┴────────────────────────────┴┴───────┘ 844
   (strip tiles 836 to 1045, captions to 1100: inside the second screen)
```

### R1.4 After the first two screens

The numbered paragraphs stay (Summary with his whole post, What he built, How he works, Languages, Background, Fields, Next step), with these changes: paragraph 3 "How he works" shows the small version of the team figure (R4.4) instead of the four stat tiles (the figures are now in the hero); the dated strip (R3) comes straight after the work strip, before paragraph 1.

### R1.5 Against the model

The reviewer's account: the model opens with a framed photo, the name large, one line in the owner's voice, three buttons and four stat tiles at the fold. R1 has each of those (photo 300 px with caption, the name at 72 px, his own sentence, two buttons, three tiles) and adds what the model does not have: a visible source under every figure, and his work as pictures inside two screens.

---

## R2. Five designs that look five ways apart

### R2.0 The contract every design keeps

Every page in every design has, in the first screen at 390 px: the ask ("Looking for work experience" and "Message me on LinkedIn"), the full navigation (or Menu at 390), the Source link to the repository, and the Designs button that opens the dialog. Those are the **items**; their **look** is now each design's own.

Markup stays one shape, so the generator does not fork:

```html
<body class="d-<slug>">
<header class="site">
  <div class="band"> ask text + LinkedIn link </div>
  <div class="bar"> .home (logo) · nav.nav-wide · details.menu · a.src-icon · a.designs-btn </div>
</header>
```

Each `/d/<slug>/style.css` (and `/style.css` for The Briefing) restyles `.band`, `.bar`, `.home`, `.nav-wide a`, `.menu summary`, `.src`, `.src-icon` and `.designs-btn`, and may reorder them with `header.site{display:flex;flex-direction:column}` plus `order`, and `.bar{display:grid;grid-template-areas:...}`. The inner pages (`/built/` and the rest) keep the main system's header, which is The Briefing's (the default), so moving from home to an inner page does not change the header.

The text of the band may differ per design (given below, each from facts.mjs). The Designs button keeps the word "Designs" in every design, so a visitor can always find it.

### R2.1 The Briefing (`briefing`, home)

**Art direction.** A document on a desk in a ministry: cream paper, navy ink, one oxblood accent, serif type, small capitals for every label, and hairline rules. Nothing is rounded beyond 2 px; the only circle is the seal. The header reads like the top of a briefing paper: a classification-style line, then the masthead with a seal and the sections set as small capitals separated by middots. It is quiet on purpose, so that the photo, his line and the three figures carry the screen.

| Part | Decision |
|---|---|
| Band | `background:#F7F4EC; border-top:4px solid #8C1D18; border-bottom:1px solid #B8AE98; height:44px`. Text `BRIEFING NOTE · LOOKING FOR WORK EXPERIENCE` in sans small caps 13 px +0.08em `#13233F`, then (1366 only) "· a team of 27 AI agents, 23 running" 13 px `#4A5468`; right, "Message me on LinkedIn ↗" 14 px 600 `#8C1D18`, underlined, 44 px tall. At 390: "LOOKING FOR WORK EXPERIENCE" left, "LinkedIn ↗" right, one line. |
| Logo | A 32 px seal (two circles `#8C1D18`, "IG" Charter 15 px) then "INDI GUPTE" in Charter small caps 18 px +0.06em `#13233F`. |
| Nav | Charter small caps 15 px, `#13233F`, middots `#B8AE98` between items, `padding:12px 6px` (44 px); current page: oxblood text and a 2 px oxblood underline at 6 px offset. Two rows allowed at 1366 only if the measured width exceeds the space (it does not today: about 990 px of 1152). |
| Source | "Source ↗" in the same small caps with the 14 px GitHub mark, last nav item. At 390 the 44x44 icon link stays in the bar. |
| Designs | Rectangle, 1 px `#13233F`, radius 2 px, 44 px tall, "DESIGNS" small caps 14 px, a 4-square icon. |
| Bar | `background:#F7F4EC; height:64px` (56 at 390); `border-bottom:3px double #13233F`. |
| Palette | paper `#F7F4EC`, sheet `#FFFDF8`, ink `#13233F` (14.26 on paper), muted `#4A5468` (6.92), seal `#8C1D18` (8.29), rule `#B8AE98` (decorative). Dark: paper `#10192A`, ink `#EDE7DA` (14.27), muted `#A9B3C4` (8.31), seal `#F09A8E` (8.14). |
| Type | Charter stack for headings and body; sans small caps for labels. |

### R2.2 Lingua (`lingua`): a full design

**Art direction.** A parallel-text edition, the kind a languages student reads: English, Italian and French set side by side, each in its own ink, on warm paper. The page is ruled into three columns from the header down, so the three languages read as one design idea rather than grey glosses beside English headings. The site's own section titles appear in the three languages; his facts and quotes stay in English only, as he wrote or gave them, so nothing is put into his mouth in another language. The languages figure is the hero, full width, with his name set over the three columns.

| Part | Decision |
|---|---|
| Band | Three 4 px rules stacked at the very top (`#1E4D8C`, `#1F6B3A`, `#8C2A3B`, in that order: English, Italian, French; labelled in the legend under the figure, never colour alone). Under them, 44 px on `#F5EFE3`: a three-column grid `1fr 1fr 1fr` at 1366: "Looking for work experience" (`#1E4D8C`, serif 15 px 600, `lang="en"`), "Cerco un'esperienza di lavoro" (`#1F6B3A`, italic, `lang="it"`), "Je cherche une expérience professionnelle" (`#8C2A3B`, italic, `lang="fr"`), and "Message me on LinkedIn ↗" right-aligned in the English column's ink. At 390: English line and "LinkedIn ↗" only. The two glosses are those the reviewer passed in round 1 (C21), marked as the site's translations (C22). |
| Logo | "Indi Gupte" in Charter italic 22 px `#1F1A14`, then a small tag "EN · IT · FR" in sans 11 px +0.1em, each code in its own ink. |
| Nav | Charter italic 16 px, lower case ("home · what I built · how I work ..."), `#1F1A14`, 44 px tall; current: 2 px underline in `#1E4D8C`. |
| Source | "source ↗" in the same italic, with the mark. |
| Designs | Text button "designs" italic 16 px with a three-bar icon (three 4 px bars in the three inks), 1 px `#1F1A14` border, radius 22 px, 44 px. |
| Bar | `background:#F5EFE3; border-bottom:1px solid #CFC3AE`. |
| Palette | paper `#F5EFE3`, ink `#1F1A14` (15.08), muted `#5A5246` (6.72), en `#1E4D8C` (7.35), it `#1F6B3A` (5.69), fr `#8C2A3B` (7.31), sa `#9A4A00` (5.47), code `#4B3F8C` (7.68). Fixed light palette in both schemes (as now). |
| Type | Charter stack; titles in three languages; Devanagari only in the figure and the decoration (`--deva`). |

**Page, 1366.** Container 1152, three columns `repeat(3, 1fr)`, 24 px gaps, with 1 px `#CFC3AE` column rules (`column-rule` look via borders).

1. Hero, full width: kicker "Brand, partnerships and research" (sans 13 px caps `#5A5246`); h1 "Indi Gupte" Charter 600 72 px; his line (same sentence as R1, 22 px italic, English column only, two columns wide); buttons; headshot 200x200 in the third column with caption.
2. The languages figure at full width (1152 px; the 720x300 viewBox renders at 1.6x, labels at least 14 viewBox units, so 22 px), **caption as HTML `<figcaption>` outside the SVG**, wrapping in the container (fixes C41).
3. Each section opens with a **title row in three columns**: English 40 px `#1E4D8C`, Italian 30 px italic `#1F6B3A`, French 30 px italic `#8C2A3B`, baseline aligned (`align-items: last baseline`). The body under it is English in columns 1 and 2 (`grid-column: 1 / 3`), notes in column 3.
4. Sections and titles (all passed in round 1): In brief / In breve / En bref; What I built / Cosa ho costruito / Ce que j'ai construit; How I work / Come lavoro / Comment je travaille; Languages / Lingue / Langues; Background / Percorso / Parcours; Fields I would like to talk about / Ambiti di cui vorrei parlare / Domaines dont j'aimerais parler; Sources / Fonti / Sources.
5. **His work** as three small pictures (same three as R1) in the three columns.
6. The Oxford entry gets "as his profile lists it" (C39).
7. End panel: the ask with its three-language title row.

**Page, 390.** One column; title rows stack (English 30 px, then Italian and French on one line at 17 px italic, separated by " · "); the figure's vertical variant; photo 112 px beside the name as in R1.3.

**Leads with:** the three languages, before any other fact.

### R2.3 Front Page (`front-page`)

**Art direction.** A broadsheet front page: black on newsprint, one red, heavy and thin rules, a centred masthead in a didone, column rules, and a classified notice for the ask. The header is the masthead, so there is no separate bar: the ask sits in the two "ears" either side of the name, the way a newspaper prints its price and weather, and the sections run under the masthead as the edition's index.

| Part | Decision |
|---|---|
| Band | Becomes the **ears**: at 1366 a grid `220px 1fr 220px`; left ear (box, 1 px `#111111`, padding 10 px): "WANTED" 11 px caps `#B3121B`, then "Work experience" Georgia 16 px 700; right ear: "REPLY VIA" 11 px caps, then "LinkedIn ↗" 16 px 700 `#B3121B`, the whole ear a 44 px+ link. At 390 the ears become one 44 px line above the masthead: "WANTED: work experience · Reply via LinkedIn ↗". |
| Logo | The masthead: "Indi Gupte" in `"Bodoni 72", Didot, "Bodoni MT", "Big Caslon", Georgia, serif` 700, 76 px at 1366 (44 px at 390), centred, between a 4 px rule above and a 1 px rule below (`#111111`). Under it the dateline 12 px caps: "WEST LONDON · WEB SUMMIT LISBON, 9 TO 12 NOVEMBER 2026". |
| Nav | The index row under the dateline: sans 12 px caps +0.1em `#111111`, items separated by 1 px vertical rules, each 44 px tall, centred; current page in `#B3121B`. Bounded by 1 px rules top and bottom. |
| Source | "SOURCE ↗" in the same caps, last in the index. |
| Designs | Square-cornered black button, `#FBFAF6` on `#111111` (18.08), 12 px caps "DESIGNS", 44 px, at the right end of the index row (at 390, beside Menu). |
| Palette | newsprint `#FBFAF6`, ink `#111111` (18.08), muted `#555049` (7.65), red `#B3121B` (6.66). Fixed light palette. |
| Type | Didone masthead and headlines; body Georgia 17 px; drop cap 3 lines. |

Page as round 1 (lead story, Notice, index, three short stories with pictures, By the numbers), with these changes: the three stories use his three shots as their pictures (black-and-white with `filter:grayscale(1) contrast(1.1)`, colour on hover and focus); "The week in dates" (R3) as a narrow column of datelined entries in the sidebar; the C5 wording replaced.

### R2.4 Agent Console (`console`)

**Art direction.** A terminal multiplexer on a dark screen: a one-line status bar at the top, a window list as the navigation, monospace for every label, green for running, amber for his status, dashed grey for not running. Sentences stay in a sans so they read; only labels and numbers are mono. The first screen is the team figure (R4) with his operator panel, so the design shows how he works before it says anything.

| Part | Decision |
|---|---|
| Band | The status line: `background:#5BD69B; color:#0B1016` (10.49), 44 px, mono 13 px: `● status: LOOKING FOR WORK EXPERIENCE` left; `contact: linkedin ↗` right as a 44 px link, underlined. At 390: `● LOOKING FOR WORK EXPERIENCE   linkedin ↗`. |
| Logo | `~/indi-gupte` mono 15 px `#D7E3EA` with a 9x16 block cursor `#5BD69B` after it (blinks 1.2 s; static under reduced motion). |
| Nav | A window list: mono 13 px, `[0] home  [1] built  [2] how-i-work  [3] languages  [4] background  [5] looking-for  [6] ai`, each 44 px tall, `#8395A3` (6.18 on bg); current window shown as `[0] home*` with `background:#121A23; color:#5BD69B`. |
| Source | `[git] source ↗`, same style. |
| Designs | `[designs]` mono, 1 px `#5BD69B` border, `#5BD69B` text, radius 0, 44 px. |
| Bar | `background:#0B1016; border-bottom:1px solid #1F2B38; height:48px`. |
| Palette | bg `#0B1016`, panel `#121A23`, text `#D7E3EA` (14.61 / 13.41), dim `#8395A3` (6.18 / 5.67), green `#5BD69B`, amber `#F2C14E` (11.38). Fixed dark palette. |
| Type | `--mono` for labels, numbers, names; `--sans` for sentences. |

Page: row 1 operator panel (cols 1 to 4) and the team figure (R4, cols 5 to 12); row 2 the three counters; row 3 "the week" as a log (R3), one line per day, `2026-11-11  fringe live 12:57 · app out for testing 21:11`; row 4 "shipped" with the three shots as panels; row 5 languages and background.

### R2.5 The Card (`card`): a full design

**Art direction.** A business card on a dark desk, shown the way a printer proofs one: front and back side by side at true proportion (85:55), under a desk lamp, with crop marks at the corners. He designed the team's cards, so the design is the card itself and nothing else in the first screen. Everything that does not fit on a card waits behind "More". It must not imitate the real RiskMandate cards: no RiskMandate seal, no brand strip, no RiskMandate wording or colours on the card; it is his own personal card.

| Part | Decision |
|---|---|
| Desk | `background:#24231F` with a soft light `radial-gradient(60% 50% at 50% 35%, #34322C 0%, #24231F 70%)`; text on desk `#EDEAE3` (13.09 on `#24231F`, 10.67 on the lit centre `#34322C`), muted `#B5B0A5` (7.28 and 5.93). |
| Band | A slim line on the desk, 44 px: "Looking for work experience" in Gill Sans stack 13 px caps +0.14em `#EDEAE3`; "Message me on LinkedIn ↗" right, `#F2B38F` (8.70 on desk, 7.09 on the lit centre), underlined. |
| Logo | "INDI GUPTE" Gill Sans 15 px 600 caps +0.2em `#EDEAE3`, no photo in the header (the photo is on the card). |
| Nav | Gill Sans 13 px caps +0.12em `#B5B0A5`, 44 px, current page `#EDEAE3` with a 1 px underline. |
| Source | "SOURCE ↗" same style. |
| Designs | Outline pill, 1 px `#EDEAE3`, 44 px, "DESIGNS" 13 px caps. |
| Bar | Transparent on the desk, `border-bottom:1px solid #3A3832`. |

**The card.** `aspect-ratio: 85 / 55; container-type: inline-size; border-radius: 1.2cqi; box-shadow: 0 2px 0 rgba(0,0,0,.25), 0 30px 60px -20px rgba(0,0,0,.6)`. Crop marks: four 16 px L-shaped 1 px `#8A857A` lines 10 px outside each corner (decorative, `aria-hidden`). Type sizes in `cqi`, so the card scales as one object:

| | Front (`#FFFFFF`) | Back (`#1E4D8C`) |
|---|---|---|
| Top | Headshot crop, square, 24cqi, radius 1.5cqi, top-left at 7cqi inset | "WEB SUMMIT LISBON 2026" 2.6cqi caps +0.14em `#C9D8EE` (5.83) |
| Main | "Indi Gupte" 7.4cqi Gill Sans 600 `#1A1A1A` (17.40); "Brand, partnerships and research" 3.1cqi `#5B5B5B` (6.79) | "What I bring" 2.6cqi caps; his three phrases on three lines, 3.6cqi `#FFFFFF` (8.42): "company research", "design (I designed our business cards)", "working every day with a team of AI agents" (exact substrings of his line) |
| Rule | 0.4cqi `#B4471F` (5.44) under the name, 40cqi long | none |
| Ask | "LOOKING FOR WORK EXPERIENCE" 3.1cqi caps +0.12em `#B4471F` | "27 agents · 23 running · 277 commits" mono 3cqi `#FFFFFF` |
| Bottom | "linkedin.com/in/indi-gupte-26960b318" 2.9cqi, a link with `min-height:44px`; "West London" right, 2.6cqi caps `#5B5B5B` | "English · italiano · français" 3cqi, `lang` on each |

At 1366 the card is 540 px wide, so 1cqi = 5.4 px: name 40 px, phrases 19 px, small lines 14 px. At 390 it is 358 px wide: name 26 px, phrases 13 px, small lines 10.4 px, which is too small, so below 600 px the sizes take a floor: `font-size: max(12px, 2.9cqi)` for every small line, and the back's three phrases move to `max(13px, 3.6cqi)`; the card's height grows from 232 to auto with `aspect-ratio` dropped only on the back face if the text needs it (`min-height: calc(100cqi * 55 / 85)`).

**Arrangement.**

- **At 1100 px and wider: side by side.** `grid-template-columns: 540px 540px; gap: 40px; justify-content: center`; total 1120 px. Front at left, back at right, both 349 px tall (540 x 55/85). Labels above each, on the desk: "FRONT" and "BACK" 12 px caps `#B5B0A5`. Under them, centred: "Message me on LinkedIn" (button, `#1A1A1A` on `#EDEAE3`, 48 px) and "More" (outline button, 48 px).
- **Below 1100 px: one card that turns.** Card 358 px wide at 390 (232 px tall). A "Turn over" button (48 px, full width under the card) flips it with `transform: rotateY(180deg)` over 0.5 s, `transform-style: preserve-3d; backface-visibility: hidden`; under reduced motion a 0.2 s cross-fade. The hidden face gets `inert` and `aria-hidden="true"`; the button's label changes "Turn over" / "Show the front" and it has `aria-pressed`. Without JavaScript both faces show, one above the other.
- **More.** Everything else (what he built with the three pictures, the dated strip, how he works, languages figure, background, sources) sits in `<details id="more" class="more"><summary>More about Indi</summary>…</details>`, closed by default; the "More" button is a link to `#more` that opens it (a small script sets `open` on `hashchange`); `summary` 48 px tall, full width, Gill Sans 15 px caps on the desk; the content inside is on a `#EDEAE3` sheet (`#1A1A1A` text, 14.49), 40rem measure. Search engines and AI readers still get every fact (it is in the DOM); the Oxford entry carries "as his profile lists it" (C39).

Mock-up of the first screen at 1366:

```
 LOOKING FOR WORK EXPERIENCE                                              Message me on LinkedIn ↗
 INDI GUPTE      HOME  WHAT I BUILT  HOW I WORK  LANGUAGES  BACKGROUND  LOOKING FOR  USE WITH AI  SOURCE ↗  ( DESIGNS )
 ─────────────────────────────────────────────────────────────────────────────────────────────────────────
            FRONT                                              BACK
       ┌ ─────────────────────────────────────┐        ┌ ─────────────────────────────────────┐
       │ ┌──────┐                              │        │ WEB SUMMIT LISBON 2026                │
       │ │photo │  Indi Gupte                  │        │                                       │
       │ │ crop │  Brand, partnerships and     │        │ WHAT I BRING                          │
       │ └──────┘  research                    │        │ company research                      │
       │           ──────────────              │        │ design (I designed our business cards)│
       │           LOOKING FOR WORK EXPERIENCE │        │ working every day with a team of AI   │
       │                                       │        │ agents                                │
       │ linkedin.com/in/indi-gupte-26960b318  │        │ 27 agents · 23 running · 277 commits  │
       │                           WEST LONDON │        │ English · italiano · français         │
       └ ─────────────────────────────────────┘        └ ─────────────────────────────────────┘
                              [ Message me on LinkedIn ]   [ More ]
```

### R2.6 Previews and the dialog

After R2 is built, the conductor reruns `node scripts/cards.mjs --designs <url>` (1280x800 at scale 0.375, so 480x300, each under 60 KB as the script checks). The top third of each preview then differs: cream with an oxblood rule (Briefing), three coloured rules and three columns (Lingua), a centred black masthead (Front Page), a green status line on near-black (Console), two cards on a dark desk (The Card). The `/d/` chooser cards get a 6 px top border in each design's lead colour (`#8C1D18`, `#1E4D8C`, `#111111`, `#5BD69B`, `#24231F`).

The share cards per design (`scripts/cards.mjs`) take the same lead colours; only the seal moves (R6.5).

---

## R3. A dated strip of his ten days

### R3.1 Which dates exist

From `data/facts.mjs` and `data/research/RECORD.md` only. Weekdays follow from "Thursday 5 November" and "Wednesday 11 November" in the sources. "Writer to add" means the fact is in RECORD.md but has no source id in facts.mjs yet; the writer adds the id (URL and date read are in RECORD.md) or the entry is dropped.

| Day | Entry on the strip (short form) | Source id | Status |
|---|---|---|---|
| Mon 2 Nov | (before the strip) Named on the team's site | `ws-team-indi` | exists; shown as a lead-in mark left of the strip |
| Tue 3 Nov | His developer agent opens the factory of company pages, at his go (23:30); his conductor's three daily wakes start | `ws-brief-indi`, `ws-everything` | exists |
| Wed 4 Nov | Writes the education brief; votes on the card designs; chooses his card; stickers revised after his notes | `ws-education`, `ws-design`, `ws-cards`; stickers: writer to add (RECORD.md, round 1b) | exists |
| Thu 5 Nov | Joins the team in person; Design A chosen for printing | `ws-brief-indi`, `ws-cards` | exists |
| Fri 6 Nov | His mentor agent's handover: "every slot has a commit" | `ws-people-indi` | exists |
| Sat 7 Nov | His social agent drafts a post a day from today | RECORD.md ("daily 16:00 UTC from 7 Nov"), no public page found | **weak**: writer to confirm a URL; if none, the day shows "no dated record" in muted text |
| Sun 8 Nov | Token-efficiency study written at his word; "who wakes when" checked | writer to add (RECORD.md: token-efficiency and schedules pages) | exists in RECORD.md |
| Mon 9 Nov | Web Summit Lisbon opens | `ws-home` | exists |
| Tue 10 Nov | Newsroom workflow infographic live (15:00); his education idea published; Web Summit calls off its second day (19:09) | writer to add (newsroom workflow); `ws-education`; `news-ten-days` | exists |
| Wed 11 Nov | Lisbon Tech Fringe live (12:57); the Fringe app out for testing (21:11); his lane: communities | `news-ten-days`, `ltf-join` | exists |
| Thu 12 Nov | The team's stand, booth A1-30; last day of Web Summit | `ws-home` | exists |
| Fri 13 Nov | Last day of the ten days counted: 277 commits by his agents | `news-ten-days` | exists |
| Sat 14 Nov | (after the strip) Strangers in the Loop released, "derived" | `news-every-hour` | derived; shown as a tail mark right of the strip, labelled "the day after 13 November" |

So ten of the eleven days from 3 to 13 November have a dated, sourced entry; 7 November has only a weak one. No date is invented, and no times are added where the source gives none.

### R3.2 Where it goes

- Home (The Briefing): straight after the work pictures (second screen), titled "His ten days, 3 to 13 November 2026".
- `/built/`: at the top, under the h1 and lede, where the removed link strip was (R5).
- Front Page: "The week in dates" in the sidebar (vertical form).
- Agent Console: "the week" as a log panel (one mono line per day).
- Not on Lingua or The Card's first screen (The Card has it inside More).

### R3.3 Drawing, 1366

An HTML ordered list, not an SVG, so text wraps and each entry can carry its own source link.

- `ol.days{display:grid;grid-template-columns:repeat(11,1fr);gap:0}` across 1152 px (each day 104.7 px). A 2 px `#13233F` baseline runs through the day marks (8 px circles `#13233F`; 10 px oxblood `#8C1D18` for 9 to 12 November).
- **The event band**: a 28 px tall band behind days 9 to 12 (`grid-column: 7 / 11`), `background:#F2E3D9`, labelled "WEB SUMMIT LISBON, 9 TO 12 NOVEMBER" in sans small caps 12 px `#8C1D18` (7.28 on the band). It sits above the day labels.
- Each day: label "Tue 3" sans 13 px 600; under it the entry, 14 px Charter, line-height 1.35, `#13233F`, at most four lines; under that "source ↗" 12 px muted, a 44 px link to its `/sources/` entry.
- Lead-in mark "2 Nov: named on the team's site" outside the left edge in muted 13 px, and tail mark "14 Nov: Strangers in the Loop (derived)" outside the right edge, both above the baseline, dotted connectors.
- The weak day (7 November) if left without a source: the mark is an 8 px outline circle and the text "no dated record" in `#4A5468`.

```
 2 Nov named ┄┐                ┌───────────── WEB SUMMIT LISBON, 9 TO 12 NOVEMBER ─────────────┐   ┌┄ 14 Nov song
 ─────────────●───────●───────●───────●───────●───────●───────◉───────◉───────◉───────◉───────●──────────
            Tue 3   Wed 4   Thu 5   Fri 6   Sat 7   Sun 8   Mon 9   Tue 10  Wed 11  Thu 12  Fri 13
            factory edu.    joins   mentor  social  token   Web     2nd day Fringe  stand   277
            opens   brief;  in      hand-   drafts  study;  Summit  called  live    A1-30   commits
            23:30   card    person; over    (weak)  who     opens   off     12:57;          counted
                    vote    Design A                wakes           19:09   app 21:11
            source↗ source↗ source↗ source↗ source↗ source↗ source↗ source↗ source↗ source↗ source↗
```

### R3.4 Drawing, 390

The same list as a vertical rail: `grid-template-columns: 64px 1fr`, the day in the left column ("Tue 3", 14 px 600), a 2 px vertical line between, the entry right (15 px), "source ↗" under each entry (44 px link). Days 9 to 12 sit on a `#F2E3D9` panel with the label "Web Summit Lisbon, 9 to 12 November" at its top. About 56 px per day, 640 px in all.

---

## R4. His agents as one team figure

### R4.1 What it shows

All 27 agents of web-summit.indi, with **full names** (`role@web-summit.indi`; the validator accepts addresses ending in `.indi`), grouped in the six groups of `data/research/agents.json` (marked there as the researcher's proposal, so the figure's caption says "grouped by this site, not by the source"), each with its status and commit count. His conductor leads; his own line closes it: "His agents draft; he sends every message." (`AGENTS.howHeWorks[0]`, `ws-team-indi`, `ws-people-indi`).

| Group (label) | Agents (commits) |
|---|---|
| Leads the team | conductor (90) |
| Building pages, apps and the factory | dev (31), factory (2), appdev (1), builder (1), conductor-map (3, one-off), conductor-newsapp (3, one-off), conductor-newsroom (1, one-off), conductor-teamapp (0, proposed, one-off) |
| Design and user experience | designer (24), video-editor (4), ux (2), infographic (1) |
| Research, writing and prompts | prompter (35), social (9), journalist (3), education (2), recruiter (1) |
| Operations | accountant (42), dashboard (30), followups (2), demo (0, proposed), inbox (0, proposed), vault (0, proposed) |
| Safeguards and checks | synthetic (18), messaging (3), conductor-abpmaker (1) |

Total 1 + 8 + 4 + 5 + 6 + 3 = 27; running 23; proposed, not running 4. Also named, outside the 27: `conductor.fringe@PrompTugal.indi` (Lisbon Tech Fringe, `ltf-join`), drawn as a separate small team to the right (1366) or below (390), labelled "PrompTugal.indi, 1 agent, not counted in the 27".

### R4.2 Drawing, 1366 (HTML and CSS, not SVG, so names wrap)

- Figure width 1152. Top: the **conductor card**, centred, 360x96: `conductor` mono 20 px 600, `@web-summit.indi` mono 14 px muted on the next line, "leads the team · 90 commits · running" 14 px; `border:2px solid var(--ink)`. From its bottom a 2 px vertical line (40 px) to a horizontal bus spanning the six groups.
- Groups: `grid-template-columns: repeat(3, 1fr); gap: 24px`, two rows (368 px each). Each group: a header (sans 13 px caps, its label, and "8 agents, 7 running"), a 2 px top border in `var(--ink)`, and its chips in `grid-template-columns: repeat(2, 1fr); gap: 8px`.
- **Chip** (172 px wide, min-height 64 px, padding 8px 10px, radius 6 px):
  - line 1: the role, mono 14 px 600, `overflow-wrap:anywhere` (never cut with an ellipsis): "conductor-newsroom" is 18 characters at about 8.4 px = 151 px, which fits;
  - line 2: `@web-summit.indi`, mono 12 px muted;
  - line 3: a commit bar, height 4 px, width `calc(var(--c) / 90 * 100%)` with a minimum of 2 px when commits > 0, then the count "31 commits" 12 px.
  - Status: running: solid 1.5 px border `var(--ink)`, an 8 px filled dot `#1F7A4D` before the role, label "running" in the chip's `aria-label`; one-off helper: solid border plus a tag "one-off" 11 px caps; proposed: `border: 1.5px dashed var(--muted)`, role in muted, line 3 reads "proposed, not running". Legend under the figure shows all three, with words.
- Sort: within a group, by commits, highest first; proposed last.
- Caption (figcaption, 15 px): "His agents draft; he sends every message." then 13 px muted: "27 agents, 23 running, as listed on web-summit.sgit.ai/people/indi, read 18 November 2026. Groups are this site's, not the source's. Commit counts are per agent from his dashboard (to 16 November); the published total for 3 to 13 November is 277." with source links.
- The table of the 27 stays, in `<details><summary>The 27 agents as a table</summary>` (summary 48 px).

### R4.3 Drawing, 390

Conductor card full width (358 px); bus becomes a 2 px vertical line on the left edge (x 8) joining the groups; groups stack, each with chips in two columns (`repeat(2, 1fr)`, 171 px each; "conductor-newsroom" at 13 px mono is about 140 px, fits). Height about 1500 px, so on the home page only the small version shows (R4.4).

### R4.4 Where it goes

- `/how-i-work/`: the full figure replaces the grid of identical boxes, as the first thing after the h1 and lede.
- Home, paragraph 3: a small version: the conductor card and six group headers with counts ("Building, 8 agents, 7 running") as one row of six tiles at 1366 (two rows of three at 390), linking to `/how-i-work/#team`.
- Agent Console: the full figure in its dark palette (chip `background:#121A23`, running dot `#5BD69B`, dashed `#8395A3`) as the hero panel.
- Front Page: not used (it keeps "By the numbers").

---

## R5. Drop the link strip under every h1

The strip "27 AI agents, 23 running · RiskMandate · PrompTugal.news · Lisbon Tech Fringe · Web Summit Lisbon 2026" goes from all nine inner pages (it repeated the band and failed C7 at 32 px).

What replaces it:

- On `/built/`: the dated strip (R3) under the lede, and an "On this page" index of the pieces of work (RiskMandate, PrompTugal.news, Lisbon Tech Fringe, Strangers in the Loop, the business cards, the factory, OmKneeHealth, the education idea), as a list of 44 px links in two columns at 1366, one at 390.
- In the footer, a fourth column "His work" with the same five links as the old strip, each 44 px (`grid-template-columns: 2fr 1fr 1fr 1fr` at 1366).
- On the other inner pages: nothing. The band already says what he is looking for and the lede says what the page is.
- The `STRIP` export in `data/facts.mjs` stays (the footer column reads it); the writer renames its comment.

---

## R6. Fixes the reviewer listed

### R6.1 C7, 44 px targets

```css
.bp h3 a, .built h3 a{display:inline-flex;align-items:center;min-height:44px}
details > summary{display:flex;align-items:center;min-height:44px;cursor:pointer}
.more, .fields a, .foot li a, .src-line a, .tile .src{display:inline-flex;align-items:center;min-height:44px}
```

Covers the "What he built" h3 links (42 to 44 px), the three `<summary>` rows on `/behind-the-scenes/` (27 to 29 px), and the new source lines (R1, R3). The old strip is gone (R5).

### R6.2 C12, note numbers at least 24x24

```css
.refs{font-size:.72em;line-height:0;vertical-align:baseline;position:relative;top:-.5em;margin-left:2px;white-space:nowrap}
.refs a{display:inline-flex;align-items:center;justify-content:center;min-width:24px;min-height:24px;padding:0 4px;
        margin:0 1px;border-radius:4px;color:var(--warm);font-weight:600;line-height:1;text-decoration:none}
.refs a:hover,.refs a:focus-visible{background:var(--accent-soft);text-decoration:underline}
```

`line-height:0` on the `sup` keeps the 24 px box from opening the line. And to cut the clutter the reviewer saw ("19 20 21 22 12 14"): **at most three numbers per claim**; a claim with more sources shows one chip "6 sources" (same 24 px box, text 0.72em) linking to that paragraph's margin note, which lists them all. The name and tagline carry none (R1).

### R6.3 C41, the Lingua figure

Covered in R2.2: the caption leaves the SVG and becomes `<figcaption>`; the figure is full width (1.6x); every label in the viewBox is at least 14 units, so at least 12 px rendered at any width the figure is shown (at 390 the vertical variant, viewBox 358 wide, renders at 1x). Check: no `<text>` in the figure ends past the viewBox right edge (the developer asserts `getBBox().x + width <= 720` in the build check).

### R6.4 Dialog previews loading

The five previews in the dialog lose `loading="lazy"` (a lazy image inside a closed `<dialog>` does not load until shown, so one was blank after opening). They become `loading="eager" decoding="async" fetchpriority="low"`. Cost: 110 KB in all (22.7 + 21.5 + 32.8 + 20.4 + 13.7 KB, measured 18 November 2026), fetched after the page's own images. In `designs.js`, on the first `pointerenter` or `focus` of the Designs button, call `img.decode()` on the five, so they are painted when the dialog opens. On `/d/` (the chooser page) the cards keep `loading="lazy"`.

### R6.5 The share-card seal

In `scripts/cards.mjs`, The Briefing card's seal moves from `left:382px;top:438px` (over the photo frame, which spans x 72 to 440, y 135 to 503) to `left:1020px;top:60px` (x 1020 to 1140, y 60 to 180, inside the 60 px safe area). The name "Indi Gupte" at 88 px starts at x 510 and ends at about x 940, and the ask line starts at y about 264, so nothing overlaps. Rebuild the six cards; each stays under 300 KB (they are 52 to 59 KB now).

### R6.6 C39 and C5 (writer)

- C39: "as his profile lists it" after the Oxford entry in Lingua, Agent Console and The Card (inside More).
- C5: R1 removes the home lede; the writer replaces the other places the reviewer listed (`/how-i-work/`, Lingua, `/looking-for/`, Front Page, `/index.md`, the seven facts fields) with "a team of 27 AI agents, 23 running" or his words "working every day with a team of AI agents". The band text "a team of 27 AI agents, 23 running" (R2.1) already follows it.

### R6.7 Image sizes on `/built/` (found while reading)

`/built/` gives every work shot `width="800" height="518"`. Real sizes: `sticker-gap.jpg` 800x800, `schedules.jpg` 800x675, `education.jpg` 800x870, `newsroom-workflow.jpg` 800x416, `stickers-overview.jpg` 800x566. Use the real sizes (the generator can read them from the files), so the browser reserves the right space and nothing is stretched.

---

## For the reviewer: what to check

| Change | Check at 390 and 1366 |
|---|---|
| R1 | Photo, name, his line, both buttons and the three tiles above the fold at 1366 (900 px) and photo, name, line, buttons and tiles above 844 px at 390; no note number on the name or tagline; each tile's source opens the right entry; the three pictures start inside the first screen and end inside the second. |
| R2 | In the dialog the five previews differ in their top third; each design has the ask, nav or Menu, Source and Designs in its first screen at 390; Lingua shows titles in three languages and the full figure with no clipping; The Card shows front and back at 85:55 side by side at 1366 and turns at 390, with More holding the rest. |
| R3 | Every entry has a source link; 7 November weak or blank; nothing dated that the sources do not date. |
| R4 | 27 chips plus the PrompTugal.indi one, full names, no ellipsis, three statuses with words, counts match facts.mjs. |
| R5 | No strip under any h1; footer "His work" column; `/built/` index. |
| R6 | C7, C12, C41, C39, C5 pass; previews painted on opening; seal clear of the photo; image sizes real. |

## Decisions for Dinis (and Indi, through Dinis)

1. His line on the first screen is "What I bring: ..." from his post. Indi may prefer another sentence of his post.
2. The Card is his personal card, not a RiskMandate card. If Indi wants it to carry RiskMandate, that needs RiskMandate's agreement to use its marks.
3. The 7 November entry stays blank unless a public page dates it.
