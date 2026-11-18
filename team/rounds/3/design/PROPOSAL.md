# Round 3 design proposal: Indi Gupte

Written by designer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. **Status: proposal.** Nothing here is built. The reviewer passes, passes with changes or rejects each change (S1 to S4) before the developer starts.

**Answers** `team/rounds/3.md` and "Open after round 2" items 1 to 4 in `team/rounds/2/review/LIVE.md`. **Before:** `team/rounds/2/review/shots/` (home, `d_lingua`, `d_front-page`, `d_console`, `d_card` at 390 and 1366, read 18 November 2026). Contrast ratios below were computed with the WCAG formula for this proposal. All words come from `data/facts.mjs`; nothing new is said about him.

| Id | Change | Who builds |
|---|---|---|
| S1 | Lingua's new first screen | developer; writer updates `leadsWith` |
| S2 | Picture strip and ten-day strip redrawn per design | developer |
| S3 | A share card per design, and new 480x300 previews | developer (`scripts/cards.mjs` is the conductor's to rerun) |
| S4 | Front Page header focus colour `#B3121B` (C69) | developer |

---

## S1. Lingua: a triptych, not a briefing note

**What was wrong.** Lingua opened on cream (`#F5EFE3`, against the Briefing's `#F7F4EC`), a 72 px Charter "Indi Gupte", the italic "What I bring" line with its rule and attribution, and the same two buttons, with the photo top right (`d_lingua-1366.jpg`, `home-1366.jpg`). The languages showed only as thin rules and a figure below.

**The idea.** Three panels side by side, one per language he speaks, each in its own ink, each carrying the ask and the section titles in that language. His languages are the first thing seen, as solid colour, not a quotation. No serif display name, no italic quote, no cream.

### Palette (replaces the round 2 Lingua palette; fixed light, both schemes)

| Token | Hex | Use | Ratio |
|---|---|---|---|
| ground | `#EEF1F4` | page ground (cool grey, not cream) | |
| bar | `#16202B` | header bar | `#FFFFFF` on it 16.46 |
| ink | `#16202B` | text on ground | 14.52 |
| muted | `#4A5563` | notes, captions | 6.69 on ground, 7.58 on white |
| en | `#1E4D8C` | English panel | `#FFFFFF` 8.42; tint `#DCE6F5` 6.68 |
| it | `#1F6B3A` | Italian panel | `#FFFFFF` 6.52; tint `#D6EBDD` 5.21 |
| fr | `#8C2A3B` | French panel | `#FFFFFF` 8.37; tint `#F5DCE1` 6.46 |
| sa | `#9A4A00` | Sanskrit tile (dashed) | 5.52 on ground |
| code | `#4B3F8C` | programming languages tile (dashed) | 7.75 on ground |
| focus | `#16202B` on ground; `#FFFFFF` inside panels and the bar | 3 px outline, 2 px offset | |

The three language colours are always paired with the language's name in words, never colour alone.

### Type

- One sans stack throughout the first screen: `var(--sans)` (system-ui stack in `src/style.css`), weights 400, 600, 700. **No Charter on the first screen.** Charter stays for body text further down only.
- Name: 28 px 700 at 1366, 24 px at 390, `#16202B`, sentence case. It is the h1 (`<h1>Indi Gupte</h1>`), deliberately small.
- Panel language name: 64 px 700 line-height 1 at 1366, 36 px at 390, `#FFFFFF`, with `lang` set ("English", "italiano", "français").
- Panel ask: 26 px 600 line-height 1.25 at 1366, 19 px at 390, `#FFFFFF`, `lang` set.
- Panel code: "EN", "IT", "FR" 13 px 700, letter-spacing 0.16em, in the panel's tint.
- Panel titles: 17 px 400 at 1366, 15 px at 390, `#FFFFFF`, underlined (offset 4 px), each a 44 px tall link.

### What the first screen holds, in order

1. Header bar: "INDI GUPTE" 15 px 700 +0.12em white; nav lower case sans 14 px white; source icon; "designs" outline pill (1 px white). The three 4 px rules and the cream three-language band are removed (the panels now carry the ask in three languages).
2. Name strip on the ground: headshot (the same CSS crop, 248x248 from x 72, y 20), the h1, one line "Speaks English, Italian and French; an interest in Sanskrit and in programming languages." (from `LANGUAGES`, note to `#src-linkedin`), and one button "Message me on LinkedIn" (`#FFFFFF` on `#16202B`, 48 px). No "What I am looking for" button and no "What I bring" line here.
3. The triptych. Each panel: code, language name, the ask in that language (`LINGUA_TITLES.looking-for`: "Looking for work experience", "Cerco un'esperienza di lavoro", "Je cherche une expérience professionnelle"), a 1px rule in the tint, then three title links in that language (`LINGUA_TITLES` built, how-i-work, languages: "What I built · How I work · Languages", "Cosa ho costruito · Come lavoro · Lingue", "Ce que j'ai construit · Comment je travaille · Langues"), each to its section.
4. Under the triptych, 13 px muted: "Italian and French lines are the site's translations, not his words. They await Indi's approval." (existing `glossNote`), then the two dashed interest tiles (Sanskrit `संस्कृतम्`, `{ }` programming languages) and "Working through Harvard's CS50x" on one row.

"What I bring" moves to the "How I work" section further down (as now). The languages figure stays below, unchanged except its colours follow this palette.

### Grid at 1366 (first 768 px)

- Header bar: full bleed, 56 px tall; inner container 1152 px, centred (107 px margins).
- Name strip: container 1152, `display:grid; grid-template-columns:96px 1fr auto; column-gap:24px; align-items:center; padding:24px 0`; photo 96x96, radius 0, no frame; button right. Height 144 px.
- Triptych: container 1152, `display:grid; grid-template-columns:repeat(3,1fr); gap:0`; each panel 384 px wide, `min-height:400px; padding:32px`, square corners. y 200 to 600.
- Note and interest row: y 616 to 720.

```
1366 x 768
+------------------------------------------------------------------------------------------+
| INDI GUPTE   home  what I built  how I work  languages  background ...   [src] (designs) |  56  #16202B
+------------------------------------------------------------------------------------------+
|        [photo]  Indi Gupte                                         [Message me on LinkedIn]|  144 #EEF1F4
|        96x96    Speaks English, Italian and French; an interest in Sanskrit ...  (2)       |
|      +----------------------------+----------------------------+----------------------------+
|      | EN                         | IT                         | FR                         |
|      | English                    | italiano                   | français                   |  400
|      | Looking for work           | Cerco un'esperienza        | Je cherche une expérience  |
|      | experience                 | di lavoro                  | professionnelle            |
|      | -------------------------- | -------------------------- | -------------------------- |
|      | What I built               | Cosa ho costruito          | Ce que j'ai construit      |
|      | How I work                 | Come lavoro                | Comment je travaille       |
|      | Languages                  | Lingue                     | Langues                    |
|      +----------------------------+----------------------------+----------------------------+
|      | #1E4D8C                    | #1F6B3A                    | #8C2A3B                    |
|      Italian and French lines are the site's translations ...                              |
|      [ संस्कृतम् Sanskrit ]  [ { } Programming languages ]   Working through Harvard's CS50x  |
+------------------------------------------------------------------------------------------+
```

### Grid at 390 (first 844 px)

- Side gutters 16 px; content 358 px.
- Header bar 56 px: "INDI GUPTE" 14 px, then source icon, Menu, designs (each 44x44).
- Name strip: `grid-template-columns:64px 1fr; column-gap:12px; padding:16px 0`; photo 64x64; h1 24 px; the languages line 15 px under it. Button full width, 48 px, 12 px below. About 160 px.
- Triptych stacked: `grid-template-columns:1fr`; each panel `padding:16px 20px`, about 190 px (code 12 px, name 36 px, ask 19 px, titles 15 px in one wrapping row, `display:flex; flex-wrap:wrap; column-gap:16px`).
- Total to the end of the French panel: 56 + 160 + 3 x 190 = 786 px, inside 844.

```
390 x 844
+--------------------------------------+
| INDI GUPTE        [src] [Menu] [des] |  56
+--------------------------------------+
| [ph] Indi Gupte                      |
| 64   Speaks English, Italian and     |  160
|      French; an interest in ...      |
| [     Message me on LinkedIn      ]  |
+--------------------------------------+
| EN  English                          |
| Looking for work experience          |  190 #1E4D8C
| What I built  How I work  Languages  |
+--------------------------------------+
| IT  italiano                         |
| Cerco un'esperienza di lavoro        |  190 #1F6B3A
| Cosa ho costruito  Come lavoro  ...  |
+--------------------------------------+
| FR  français                         |
| Je cherche une expérience prof...    |  190 #8C2A3B
| Ce que j'ai construit  Comment ...   |
+--------------------------------------+
```

**Leads with (writer, `DESIGNS.lingua.leadsWith` and `/designs.json`):** "His three languages, each with the ask and the section titles in that language". The three-language title rows further down keep their round 2 form, recoloured to this palette, on the cool ground.

---

## S2. The two strips in each design's own style

Content is the same everywhere: the three pictures and captions of round 2, and the 16 `TEN_DAYS` entries with their notes, the "Times as the sources give them; no time zone stated." line, Sat 7 and Sun 8 shown with no text, and 14 November marked "date derived" with its reason (C73 to C78 still hold). Only the drawing changes. Kind is always shown in words ("his work", "the team", "the event").

### The Briefing (home): unchanged, as the reference

The round 2 drawing stays (`home-1366.jpg`): pictures on `#EFE9DC` mats, the timeline with the `#F2E3D9` event panel. It is the one the others now differ from. Only change: headings become numbered like the rest of the note, "Annex A. His work, in pictures" and "Annex B. His ten days, 3 to 13 November 2026" (Charter 600 28 px, "Annex A." in `#8C1D18`).

### Lingua: a trilingual calendar

A two-week wall calendar: rows are weeks, columns are weekdays, and each weekday header is set in the three languages. 3 November 2026 is a Tuesday, so the grid runs Monday 2 to Sunday 15 November; 2 and 15 are outside the ten days and drawn empty. Entries stay in English (they are facts from the sources); only the weekday headers are translated, and they are standard abbreviations. The pictures sit on plain white with a thin ink frame, as plates in a bilingual edition.

```css
.cal{display:grid;grid-template-columns:repeat(7,1fr);border-top:2px solid #16202B;border-left:1px solid #C9D0D8}
.cal .dow{font:600 13px/1.3 var(--sans);padding:8px;border-right:1px solid #C9D0D8;border-bottom:1px solid #C9D0D8}
.cal .dow span{display:block}                    /* "Mon" / <span lang="it">lun</span> / <span lang="fr">lun</span> */
.cal .dow span:nth-child(1){color:#1E4D8C}.cal .dow span:nth-child(2){color:#1F6B3A}.cal .dow span:nth-child(3){color:#8C2A3B}
.cal .day{min-height:150px;padding:8px;background:#FFFFFF;border-right:1px solid #C9D0D8;border-bottom:1px solid #C9D0D8;font:14px/1.35 var(--sans);color:#16202B}
.cal .day b{display:block;font:700 22px/1 var(--sans);margin-bottom:6px}   /* the date number */
.cal .out{background:#EEF1F4;color:#4A5563}                                 /* 2 and 15 November */
.cal .ev{box-shadow:inset 0 4px 0 #16202B}                                  /* 9 to 12 November, labelled above the row */
.cal .kind{font:700 11px/1 var(--sans);letter-spacing:.08em;text-transform:uppercase;color:#4A5563}
.lpics{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.lpics img{background:#FFFFFF;border:1px solid #16202B;aspect-ratio:4/3;object-fit:contain;padding:8px}
```

- 1366: 1152 px, 7 columns of 164.6 px. "Web Summit Lisbon, 9 to 12 November" label 12 px caps over columns 1 to 4 of week 2. Days 3 to 14: up to three entries per day (Wed 11 has three; Tue 3 has three).
- 390: the grid becomes a list, one row per day with entries, `grid-template-columns:72px 1fr`; the day cell shows "Tue 3" with "mar 3" and "mar 3" under it in the it and fr inks at 12 px. Sat 7 and Sun 8 as one thin row each, no text. Pictures in one column.
- Weekday headers: Mon/lun/lun, Tue/mar/mar, Wed/mer/mer, Thu/gio/jeu, Fri/ven/ven, Sat/sab/sam, Sun/dom/dim. Marked, like the titles, as the site's translations.

### Front Page: news briefs in columns, with datelines

"The week in dates" leaves the right rail and becomes a full-width "Briefs" section under the lead story, set in newspaper columns. Each day is a dateline in caps; each entry is one sentence brief. No place names in the datelines (the sources do not place every day). The pictures become a picture desk: greyscale (as now), square frames, a caption in the paper's credit style.

```css
.briefs{column-count:4;column-gap:32px;column-rule:1px solid #111111;border-top:4px solid #111111;padding-top:12px}
.briefs .dl{break-after:avoid;font:700 11px/1.3 var(--sans);letter-spacing:.1em;text-transform:uppercase;color:#B3121B;margin:0 0 4px}  /* "TUESDAY 3 NOVEMBER" */
.briefs .day{break-inside:avoid;margin:0 0 16px}
.briefs p{font:15px/1.4 Georgia,serif;color:#111111;margin:0 0 6px;text-indent:0}
.briefs .t{font:700 13px var(--mono)}                 /* 23:30, 19:09, 12:57, 21:11 */
.briefs .kind{font:700 10px var(--sans);letter-spacing:.1em;text-transform:uppercase;color:#555049}
.briefs .ev{background:#F1EEE6;padding:8px}           /* 9 to 12 November; label "WEB SUMMIT LISBON, 9 TO 12 NOVEMBER" */
.fpics{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid #111111;border-bottom:1px solid #111111}
.fpics figure{margin:0;padding:12px;border-right:1px solid #111111}.fpics figure:last-child{border-right:0}
.fpics figcaption{font:12px/1.35 var(--sans);color:#555049}   /* "PICTURE: his designer agent, 4 to 5 November" with the title in Georgia 700 15 px above */
```

- 1366: 4 columns of 264 px inside 1152 px; the "Briefs" kicker 11 px caps red above, a 4 px rule. Sat 7 and Sun 8: dateline then "No dated record." in `#555049`. The right rail keeps the Notice and "In this edition" only.
- 390: `column-count:1`, a 1 px `#111111` rule between days; pictures in one column with the rules between them.

### Agent Console: a log, and the pictures as files

The ten days are already a log (`d_console-1366.jpg`); keep it and make it read as one: a `$ tail ten-days.log` title, a line number gutter, and kind as a coloured word. The pictures become a file listing: each a panel with a title bar showing the file name, as an image viewer window.

```css
.log{counter-reset:ln;font:13px/1.6 var(--mono);background:#0B1016;border:1px solid #1F2B38}
.log li{counter-increment:ln;display:grid;grid-template-columns:40px 96px 48px 64px 1fr;gap:0 12px;padding:2px 12px}
.log li::before{content:counter(ln,decimal-leading-zero);color:#8395A3}
.log .k-his{color:#5BD69B}.log .k-team{color:#D7E3EA}.log .k-event{color:#F2C14E}   /* the word is shown too */
.log .gap{color:#8395A3}                         /* "2026-11-07  -- no dated record" and 2026-11-08 */
.log .derived{color:#F2C14E}
.win{background:#121A23;border:1px solid #1F2B38}
.win .bar{font:12px var(--mono);color:#8395A3;padding:6px 10px;border-bottom:1px solid #1F2B38}   /* "cards-round2-seal.jpg  4-5 Nov  designer" */
.win img{display:block;width:100%;aspect-ratio:4/3;object-fit:contain;background:#0B1016}
```

- 1366: log full width of the main column (1152 px); pictures `repeat(3,1fr)` gap 16 px under `$ ls pictures/`.
- 390: the log row becomes `grid-template-columns:28px 1fr` with date, time and kind on one line above the text; pictures in one column.

### The Card: small cards on the desk

Inside More, the two strips sit on the desk (`#24231F`), not on the light sheet, so they read as cards laid out on the same table as his card. Each picture is an 85:55 card; each day is a small index card.

```css
.more .desk-strip{max-width:1120px;margin:0 auto;padding:32px 0}
.cpics{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.cpics img{aspect-ratio:85/55;object-fit:contain;background:#FFFFFF;border-radius:6px;padding:10px;box-shadow:0 2px 0 rgba(0,0,0,.25),0 20px 40px -16px rgba(0,0,0,.6)}
.cpics figcaption{color:#EDEAE3;font:13px/1.4 var(--card-sans)}            /* 13.09 on the desk */
.cdays{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:16px}
.cdays li{background:#FFFFFF;color:#1A1A1A;border-radius:6px;padding:12px;font:14px/1.35 var(--card-sans);box-shadow:0 1px 0 rgba(0,0,0,.25),0 12px 24px -12px rgba(0,0,0,.6)}
.cdays .d{font:600 13px var(--card-sans);letter-spacing:.12em;text-transform:uppercase;color:#B4471F}   /* "TUE 3", 5.44 on white */
.cdays .ev{background:#1E4D8C;color:#FFFFFF}.cdays .ev .d{color:#C9D8EE}    /* 9 to 12 November: the card-back blue, 8.42 and 5.83 */
.cdays .empty{background:transparent;border:1px dashed #B5B0A5;box-shadow:none}   /* Sat 7, Sun 8 */
```

- 1366: pictures 3 across (352 px each); days 6 across (168 to 176 px), 12 cards (3 to 14 November) in two rows.
- 390: pictures one column; days 2 across (171 px each).

---

## S3. Share cards per design (1200x630) and previews (480x300)

**Common to all six.** 1200x630 JPEG, quality 82, under 300 KB (round 2 cards were 52 to 59 KB; these add no images beyond the one photo). Safe area 60 px on every side. The headshot is always the same crop: the 248x248 square from x 72, y 20 of `src/assets/indi-gupte.jpg` (the existing `crop(size)` helper: `width:129.032%; left:-29.032%; top:-8.065%`), never the whole file. Text on every card: "Indi Gupte", "Looking for work experience" (`ASK.short`), "indi-gupte.agenticcells.site" (from `SITE`). Fonts: each card's HTML uses the same font stacks as its page (`--sans`, `--serif`, `--mono`, the Front Page and Card stacks), so the card and page fall back alike (round 2 Open 6). `og:image:alt` per card names the design: "Indi Gupte, looking for work experience: the Lingua design".

`indi-gupte.jpg` (inner pages) stays as now.

### The Briefing (`briefing.jpg`): the note, not navy

Ground `#F7F4EC`; 8 px `#8C1D18` rule across the top (y 0 to 8). Band text y 40: "BRIEFING NOTE · LOOKING FOR WORK EXPERIENCE" 20 px caps +0.08em `#13233F`. Photo 300x300 at x 60, y 150, 3 px `#13233F` frame. Name Charter 600 96 px `#13233F` at x 410, y 170. Ask 40 px 600 `#8C1D18` at x 410, y 300. Seal 120 px (as now) at x 1020, y 440. Address 26 px `#4A5468` at x 410, y 510. Double rule `#13233F` 3 px at y 590.

### Lingua (`lingua.jpg`): the triptych

Top 300 px on `#EEF1F4`: photo 240x240 at x 60, y 30; "Indi Gupte" sans 700 64 px `#16202B` at x 340, y 60; "indi-gupte.agenticcells.site" 26 px `#4A5563` at x 340, y 150. Bottom: three panels 400x330 from y 300 (x 0, 400, 800) in `#1E4D8C`, `#1F6B3A`, `#8C2A3B`, each with padding 40 px: code 18 px 700 tint, language name 48 px 700 white, then the ask in that language 30 px 600 white. The English panel's ask is the required "Looking for work experience".

```
+-------------------------------------------------------------+
| [photo 240]  Indi Gupte                                     |  #EEF1F4
|              indi-gupte.agenticcells.site                   |
+-------------------+-------------------+---------------------+
| EN English        | IT italiano       | FR français         |
| Looking for work  | Cerco un'espe-    | Je cherche une      |
| experience        | rienza di lavoro  | expérience prof.    |
+-------------------+-------------------+---------------------+
```

### Front Page (`front-page.jpg`): the masthead

Ground `#FBFAF6`. Rules: 6 px `#111111` at y 60, 2 px at y 72 (x 60 to 1140). Masthead "Indi Gupte" Bodoni stack 700 96 px centred, y 84 to 190. 1 px rule at y 200; dateline row y 210: "INDI-GUPTE.AGENTICCELLS.SITE" 18 px caps +0.1em centred. 1 px rule at y 240. Left column x 60 to 700: kicker "WANTED" 18 px caps `#B3121B` at y 280, headline "Looking for work experience" Georgia 700 64 px `#111111` line-height 1.05 (two lines) at y 310. Right x 780 to 1140: photo 300x300 greyscale (`filter:grayscale(1)`) at y 270, 1 px `#111111` frame. 4 px rule at y 590.

### Agent Console (`console.jpg`): the terminal

Ground `#0B1016`. Status line y 0 to 64, `#5BD69B`, mono 28 px `#0B1016` (10.49): "● status: LOOKING FOR WORK EXPERIENCE". Panel `#121A23` x 60 to 1140, y 110 to 570, 1 px `#1F2B38`. Photo 260x260 at x 100, y 150, 2 px `#5BD69B` frame. At x 410: "operator" mono 22 px `#8395A3` (y 160); "Indi Gupte" mono 700 72 px `#D7E3EA` (y 195); "$ open indi-gupte.agenticcells.site" mono 28 px `#5BD69B` (y 330) followed by a 16x30 block `#5BD69B`; "a team of 27 AI agents, 23 running" mono 24 px `#8395A3` (y 390).

### The Card (`card.jpg`): the card on the dark desk

Desk `#24231F` with `radial-gradient(60% 60% at 50% 45%, #34322C 0%, #24231F 70%)`. A white card 760x492 (85:55) at x 220, y 69, radius 10 px, shadow `0 30px 60px -20px rgba(0,0,0,.6)`; four 24 px crop marks `#8A857A` 14 px outside the corners. On the card (inset 48 px): photo 180x180 at card x 48, y 48, radius 8 px; "Indi Gupte" Gill Sans stack 600 64 px `#1A1A1A` at card x 260, y 60; 6 px `#B4471F` rule 300 px long at card y 150; "LOOKING FOR WORK EXPERIENCE" 28 px caps +0.12em `#B4471F` at card y 175; "indi-gupte.agenticcells.site" 24 px `#1A1A1A` at card y 410; "WEST LONDON" 20 px caps `#5B5B5B` right-aligned on the same line. No RiskMandate mark (C67).

### Previews (480x300)

After S1 to S4 are built, rerun `node scripts/cards.mjs --designs <url>` (1280x800 at 0.375, under 60 KB each, as the script checks). Each preview is that design's first screen, so it matches its share card:

| Design | Top third of the 480x300 preview |
|---|---|
| The Briefing | cream, oxblood rule, photo left of the serif name |
| Lingua | dark bar, small name strip, then three solid panels blue, green, red |
| Front Page | centred black masthead between rules, ears either side |
| Agent Console | green status line on near-black, the agent grid |
| The Card | white card and blue back on the dark desk |

Add to `/d/` cards the 6 px top border in Lingua's new lead colour `#1E4D8C` (unchanged hex); the other four stay.

---

## S4. Front Page header focus colour (C69)

**Cause.** `src/style.css` line 49 sets `.band{...;--focus:var(--hb-seal)}`, and `--hb-seal` is the Briefing's `#8C1D18`. On Front Page the ears ("Wanted", "Reply via LinkedIn") sit inside `.band`, so they take that value instead of `.d-front`'s `--focus:#B3121B`.

**Fix.** In `src/d/front-page/style.css`, add:

```css
.d-front .band{--focus:#B3121B}
```

`#B3121B` on `#FBFAF6` is 6.66:1, on the ears' `#FFFFFF` 6.96:1. Test: Tab through the Front Page header at 390 and 1366; all 23 stops show a 3 px `#B3121B` outline. The same leak, read in the CSS: Console already sets `.d-console .band{--focus:#0B1016}`; **The Card does not**, so its band link "Message me on LinkedIn" focuses in `#8C1D18` on the `#24231F` desk (1.73:1, below 3:1). Add `.d-card .band{--focus:#F2B38F}` (8.70 on the desk) in `src/d/card/style.css`. Lingua's band goes in S1; its new bar sets `--focus:#FFFFFF`.

---

## For the reviewer

| Id | Check |
|---|---|
| S1 | At 390 and 1366 the Lingua first screen has no cream, no serif name over 28 px, no italic "What I bring" block, and the three panels with name, ask and titles in each language; French panel ends inside 844 px at 390; no overflow; focus visible on panels. Side by side with `home-*.jpg`, nobody would take one for the other. |
| S2 | Five different drawings of the same 16 entries and three pictures; C73 to C78 hold in each; kind in words; no horizontal scroll at 390. |
| S3 | Six cards 1200x630, each under 300 KB, each in its design's look, each with the crop, the name, "Looking for work experience" and the address; previews regenerated, under 60 KB. |
| S4 | Front Page ears focus in `#B3121B`; The Card's band link in `#F2B38F`. |

Decisions for Dinis (and Indi, through Dinis): the Lingua weekday abbreviations and the ask in Italian and French are the site's translations and await Indi's approval, like the section titles.
