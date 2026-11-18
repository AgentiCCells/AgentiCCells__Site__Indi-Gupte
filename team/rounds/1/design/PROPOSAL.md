# Round 1 design proposal: Indi Gupte

Written by designer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. **Status: proposal.** Nothing here is built; the reviewer passes or rejects each numbered change (D1 to D12) before the developer builds.

## What this proposal answers

Dinis Cruz, 2026-11-18, about 09:30 UTC (the brief): "this time focusing on what he did and what is he is looking for".
Dinis Cruz, 2026-11-18, about 09:51 UTC (recorded in `team/WORKFLOW.md`): "please go to town on Indi and make it look as good (if not better) as [another team member]" and "include on https://indi-gupte.agenticcells.site/ai/ the GitHub repo (which should also be linked from the top nav)".

So every page must make two things plain within the first screen at 390 px: **what he did** (worked with a team of 27 AI agents at Web Summit Lisbon 2026 on RiskMandate, PrompTugal.news and Lisbon Tech Fringe) and **that he is looking for work experience**, with the LinkedIn link. The top navigation of every page links the repository. And the site has to be more crafted than the team-member model site, not a card grid.

### What was read (C1 in the designer's policy)

| Read | When | What it gave |
|---|---|---|
| `src/` (factory first pass, v0.1.3) and `team/rounds/img/r1-before/*.jpg` | 2026-11-18 | Right pages, but one plain style: a card grid, a dashed placeholder where the photo goes, no images, no previews, eight nav links wrapping to two lines at 390 px, the call to action only on the home page. |
| `src/assets/indi-gupte.jpg` | 2026-11-18 | 320x292, head and shoulders, blue arena seating behind. **A second person's face is partly visible in the bottom-left corner.** Every use below crops it out (D2.7). |
| Model A: `the model site (its address is in the factory brief)` (home, `/d/brief/`, `/d/control/`, `/agents/`, `/llms.txt`, `/designs.json`) | 2026-11-18 | Home is one long, warm, serif page with anchor navigation; five designs listed in `designs.json` with 480x300 thumbnails; the "brief" design maps competencies to evidence and lists questions to ask in an interview; the "control" design shows the agent team by commits; `/agents/` splits instructions by who the AI is acting for. `/d/` itself returned GitHub's 404 page on 2026-11-18. |
| Model B: `https://marc-noah.agenticcells.site` (home, `/d/`, `/behind-the-scenes/`) | 2026-11-18 | A "Designs" button on every page opens a `<dialog>` listing the designs with thumbnails, a one-line idea each, "Showing" on the current one, and a link to "All designs on one page"; behind the scenes has Dinis's words, the team, an SVG flow of a round, the story of the passes, rounds, and every commit grouped by round. |

The two model sites are referred to below as Model A and Model B, so that this proposal names no person other than Indi Gupte and Dinis Cruz.

### How this site aims to go further than Model A (summary)

| Model A does | This site does as well, plus |
|---|---|
| Sources as footnotes at the end | Sources as **margin notes beside each fact** at 1366 px (numbered notes inline at 390 px), so the reader sees the evidence where the claim is. |
| Photographs carry the pages | Indi has one small photo, so the pages are carried by **drawn figures**: one small inline SVG per project, the languages figure, the agent grid, the flow of a round. Each is a drawing of his facts, not decoration. |
| Competencies mapped to evidence (one design) | "What I bring", his three phrases, each tied to the work that shows it, on the home page and on "How I work". |
| Questions to ask her in an interview | "Questions to ask Indi", on "Looking for" (proposal: needs Indi's approval, see Decisions). |
| A design picker reading `designs.json` | The same, as Model B's dialog, plus a "Designs" link that works with no JavaScript. |
| Use with AI by audience | The same three audiences, plus the repository named and linked, and `/ai/` kept working. |
| Prints poorly in places | A print stylesheet for every page; The Briefing prints as two A4 pages. |

---

## D1. Information architecture

### D1.1 Pages

| Path | Title (in `<title>`) | Purpose | Leads with |
|---|---|---|---|
| `/` | Indi Gupte: looking for work experience | The home page, in the design chosen as default (The Briefing, D3.1) | The ask and what he did |
| `/built/` | What I built · Indi Gupte | RiskMandate Agent Behaviour Policies, PrompTugal.news, Lisbon Tech Fringe, Strangers in the Loop, the business cards; OmKneeHealth as "also" | One case per piece of work, each with a drawn figure and its source |
| `/how-i-work/` | How I work with AI agents · Indi Gupte | 27 agents, 23 running, 277 commits; company research; design; "What I bring" | The agent grid (D2.9) |
| `/languages/` | Languages · Indi Gupte | English, Italian, French; Sanskrit; programming languages; where they lead | The languages figure (D4) |
| `/background/` | Background · Indi Gupte | Harrow School, Harrow Diploma (University of Buckingham), hospitals in London and rural Italy, the path towards languages and diplomacy, university from next autumn | A vertical timeline with dates only as his profile gives them |
| `/looking-for/` | Looking for work experience · Indi Gupte | Work experience; the fields he names (languages, AI, medicine, diplomacy); how to reach him; questions to ask him | The ask, full width |
| `/sources/` | Sources · Indi Gupte | Every source, with URL and date read, numbered as the margin notes number them | A numbered list, grouped by source type |
| `/agents/` | Use with AI · Indi Gupte | Instructions for AI agents by who they act for; links to `/llms.txt`, `/index.md`, `/designs.json`; **the repository, named and linked** | "Who are you acting for?" |
| `/ai/` | Use with AI · Indi Gupte | Kept working: a short page with `<meta http-equiv="refresh" content="0; url=/agents/">`, `<link rel="canonical" href="https://indi-gupte.agenticcells.site/agents/">`, a description, a visible link to `/agents/` **and the repository link**, so even a reader who stops here sees the repository | (redirect) |
| `/llms.txt` | n/a | Plain text summary for AI agents, in Model A's shape: one-paragraph summary with the ask and LinkedIn, audiences, content links, sources, the repository | |
| `/index.md` | n/a | The whole site as Markdown, generated from `data/facts.mjs`; the master copy for AI readers | |
| `/d/` | Designs · Indi Gupte | The chooser: all five designs on one page, a card each (thumbnail, name, idea, "Open") | The five cards |
| `/d/<slug>/` | (design name) · Indi Gupte | The home page's facts in each design (D3). The default design is served at `/`; `/d/briefing/` is a refresh redirect to `/` | |
| `/behind-the-scenes/` | Behind the scenes · Indi Gupte | Dinis's words, the team, the flow of a round, the commit timeline, round reports (D7) | Dinis's words |
| `/designs.json` | n/a | The list of designs (slug, name, idea, path, thumb, default), read by the designs control and by AI agents | |

All pages are generated from `data/facts.mjs` (writer's file). No page holds a fact that is not in that file with a source id.

### D1.2 Header (every page except the five `/d/<slug>/` designs, which carry their own header but keep the same three items: the ask, Source and Designs)

Two bars.

**Bar 1, the ask band** (dark, full width, 44 px tall at 1366 px; 2 lines at 390 px):

```
[ Looking for work experience · I worked with 27 AI agents at Web Summit Lisbon 2026 ]      [ Message me on LinkedIn ↗ ]
```

At 390 px the band shows "Looking for work experience" (bold) on line 1 and "Message me on LinkedIn ↗" as a 44 px tall link on line 2; the "27 AI agents" phrase moves into the page's own first lines (D1.4).

**Bar 2, site navigation** (light surface):

- Left: "Indi Gupte" (home link, 600 weight, 1.125rem) with a 28 px round crop of the headshot before it.
- Navigation, in this order: Home · What I built · How I work · Languages · Background · Looking for · Use with AI · **Source ↗** (links `https://github.com/AgentiCCells/AgentiCCells__Site__Indi-Gupte`, with a 16 px GitHub mark drawn as inline SVG, `aria-hidden="true"`, visible text "Source", `title` none; the link text for screen readers is "Source code on GitHub" via a visually hidden span).
- Right: the **Designs** control (D6).

At 1366 px the eight items sit on one line (15 px text, 20 px gaps; measured width about 990 px of the 1152 px container). At 390 px bar 2 shows the name, a **Menu** button and the **Designs** button; Menu is a `<details class="menu"><summary>` so it works with no JavaScript, and opens a full-width list of the eight items, each 48 px tall. "Source ↗" is the last item in the list and keeps its icon.

`aria-current="page"` on the current item: ink colour, 600 weight, a 3 px underline in `--warm` offset 6 px.

### D1.3 Footer (every page)

Three columns at 1366 px (`grid-template-columns: 2fr 1fr 1fr`), stacked at 390 px:

1. "Indi Gupte, West London. Looking for work experience." and the LinkedIn link, then "No email or phone: please use LinkedIn."
2. Site: Sources · Behind the scenes · Designs · Use with AI · llms.txt
3. Made by: "the AgentiCCells team, with Indi's agreement" · Source on GitHub · version `__VERSION__` · "Code Apache-2.0, text CC BY 4.0".

### D1.4 The call to action, where it appears

The ask appears **three times on every page**, so it is never more than one screen away:

1. **Top**: the ask band (D1.2).
2. **End of every page's content**: the ask panel, just above the footer. Two columns at 1366 px (`grid-template-columns: 240px 1fr`), stacked at 390 px:

```html
<aside class="ask" aria-labelledby="ask-h">
  <div class="ask-photo"><img src="/assets/indi-gupte.jpg" width="320" height="292" alt="Indi Gupte"></div>
  <div>
    <h2 id="ask-h">Looking for work experience</h2>
    <p>At Web Summit Lisbon 2026 I worked with a team of 27 AI agents on RiskMandate, PrompTugal.news and Lisbon Tech Fringe.
       I bring company research, design and daily work with AI agents, and I would like to talk to people in languages, AI, medicine or diplomacy.</p>
    <p><a class="btn btn-primary" href="https://www.linkedin.com/in/indi-gupte-26960b318">Message me on LinkedIn</a>
       <a class="btn btn-secondary" href="/looking-for/">What I am looking for</a></p>
  </div>
</aside>
```

   (The panel's words are the writer's to set; these are a placeholder that uses only facts in the brief.)
3. **Footer**: column 1.

On the home page and on "Looking for", the first screen also carries the primary button itself. No page links an email address or phone number.

### D1.5 What every page says in its first screen

Each inner page opens with a kicker (the page name), an `h1`, and a one-line lede. Under the lede, a **"what he did" strip**, one line of small text: "27 AI agents · RiskMandate · PrompTugal.news · Lisbon Tech Fringe · Web Summit Lisbon 2026", each item linking to its place on `/built/` or `/how-i-work/`. With the ask band above, every page meets the "two things plain" rule at 390 px without scrolling.

---

## D2. The main system (every inner page)

One stylesheet, `/style.css`. Light and dark schemes; `color-scheme: light dark`.

### D2.1 Palette

```css
:root{
  --bg:#FAF7F1;        /* warm paper */
  --surface:#FFFFFF;   /* panels, cases */
  --surface-2:#F6E7D8; /* ask panel tint */
  --ink:#1B2333;       /* text, ask band background */
  --muted:#4D5665;     /* secondary text, sources */
  --line:#D9D1C3;      /* rules, borders (decorative) */
  --accent:#1E4D8C;    /* links, primary button */
  --accent-soft:#EAF0F8;
  --on-accent:#FFFFFF;
  --warm:#9A3B17;      /* kickers, current-page underline, note numbers */
  --band:#1B2333; --on-band:#FFFFFF; --band-link:#F2C29A;
  --focus:#C2410C;
}
@media (prefers-color-scheme: dark){
  :root{
    --bg:#121721; --surface:#1A2130; --surface-2:#232B3B;
    --ink:#ECE8E1; --muted:#A7B0BD; --line:#2E3642;
    --accent:#8EB9F0; --accent-soft:#1F2B3B; --on-accent:#0D1420;
    --warm:#F0A47F;
    --band:#0B0F16; --on-band:#ECE8E1; --band-link:#F2C29A;
    --focus:#FDBA74;
  }
}
.band{ --focus:#FDBA74; }
```

Contrast ratios (WCAG 2.x relative luminance, computed by the designer on 2026-11-18):

| Pair | Light | Dark | AA need |
|---|---|---|---|
| `--ink` on `--bg` | 14.71 | 14.69 | 4.5 |
| `--ink` on `--surface` | 15.73 | 13.19 | 4.5 |
| `--muted` on `--bg` | 6.93 | 8.19 | 4.5 |
| `--accent` (links) on `--bg` | 7.87 | 8.84 | 4.5 |
| `--accent` on `--surface` | 8.42 | 7.93 | 4.5 |
| `--on-accent` on `--accent` (button) | 8.42 | 9.09 | 4.5 |
| `--warm` on `--bg` | 6.52 | 8.82 | 4.5 |
| `--ink` on `--surface-2` | 12.99 | n/a | 4.5 |
| `--on-band` on `--band` | 15.73 | > 15 | 4.5 |
| `--band-link` on `--band` | 9.71 | > 9.7 | 4.5 |
| `--focus` on `--bg` | 4.84 | 10.64 | 3 (non-text) |
| band focus `#FDBA74` on `--band` | 9.33 | > 9.3 | 3 |
| `--line` on `--bg` | 1.42 | | decorative only, never the only cue |

Every pair is AA for normal text; most are AAA. Links are underlined in body text (not colour alone).

### D2.2 Type (system fonts only)

No web fonts, no `@font-face`, nothing from another host.

```css
:root{
  --sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  --serif: Charter, "Bitstream Charter", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  --mono: ui-monospace, "SF Mono", "Cascadia Mono", "Segoe UI Mono", Menlo, Consolas, "Liberation Mono", monospace;
  --deva: "Kohinoor Devanagari", "Devanagari Sangam MN", "Noto Sans Devanagari", "Nirmala UI", Mangal, sans-serif;
}
```

Headings in `--serif`, body in `--sans`, figures' labels in `--sans`, commit hashes and data in `--mono`. `--deva` is used only for Devanagari text, always with `lang="sa"` and always next to the English word "Sanskrit", so a device with no Devanagari font loses nothing.

Scale (ratio 1.25, base 18 px at 1366, 17 px at 390; `html{font-size:106.25%}` below 700 px, `112.5%` above):

| Token | rem | px at 1366 | Use | Line height | Weight |
|---|---|---|---|---|---|
| `--t-xs` | 0.78 | 14 | margin notes, captions, footer | 1.45 | 400 |
| `--t-s` | 0.889 | 16 | nav, kickers (uppercase, +0.06em) | 1.5 | 500 / 600 |
| `--t-m` | 1 | 18 | body | 1.6 | 400 |
| `--t-l` | 1.25 | 22.5 | lede, h3 | 1.45 | 400 / 600 |
| `--t-xl` | 1.563 | 28 | h2 | 1.25 | 600 |
| `--t-2xl` | clamp(2rem, 1.4rem + 2.4vw, 2.75rem) | 49 max | h1 | 1.1 | 600 |

Measure: body text at most 40rem (about 68 characters).

### D2.3 Spacing

4 px base: `--s1:4px --s2:8px --s3:12px --s4:16px --s5:24px --s6:32px --s7:48px --s8:64px --s9:96px`. Sections are separated by `--s8` at 1366 and `--s7` at 390. Panels pad `--s5` (390) and `--s6` (1366). Radius: 10 px panels, 8 px buttons, 999 px pills.

### D2.4 Layout

| | 390 px | 1366 px |
|---|---|---|
| Container | full width, 16 px gutters (content 358 px) | `max-width: 72rem` (1152 px at 16 px root; at 18 px root use `max-width:1152px`), centred, 24 px gutters |
| Grid | 1 column | 12 columns, 24 px gap (column 74 px) |
| Text column | full | columns 1 to 7 (about 600 px) |
| Margin notes | inline, after the paragraph, as a small numbered block | columns 9 to 12, top aligned with their paragraph (`.note{grid-column:9 / 13}`) |
| Figures | full width, the vertical variant | columns 1 to 12 or 1 to 8, the horizontal variant |
| Hero of an inner page | kicker, h1, lede, strip | same, h1 spans 1 to 9 |

```css
.page{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:24px}
.page > *{grid-column:1 / -1}
@media (min-width:960px){
  .page > p, .page > h2, .page > ul{grid-column:1 / 8}
  .page > .note{grid-column:9 / 13; font-size:var(--t-xs); color:var(--muted); border-left:2px solid var(--line); padding-left:12px}
}
```

Margin notes are real `<aside class="note" id="n3">` elements placed right after their paragraph in the source order; in the text the claim carries `<a href="#n3" class="ref">3</a>` (superscript, `--warm`, 44 px hit area by padding). Each note: source title, link, "read 18 November 2026".

### D2.5 Focus

```css
:focus-visible{outline:3px solid var(--focus);outline-offset:2px;border-radius:4px}
.btn:focus-visible{outline-offset:3px}
```

The skip link ("Skip to content") is the first element; when focused it shows at top left, `--surface` background, `--ink` text, 44 px tall.

### D2.6 Touch targets and buttons

Every link that stands alone (nav, buttons, Designs, Menu, note references, footer links) has a hit area at least 44x44 px: `min-height:44px; display:inline-flex; align-items:center; padding:0 16px` for buttons; footer and nav links get `padding-block:10px`. Inline links inside sentences are exempt under WCAG 2.5.8 but keep 1.6 line height.

```css
.btn{min-height:48px;padding:0 20px;border-radius:8px;font:600 var(--t-m)/1 var(--sans);display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.btn-primary{background:var(--accent);color:var(--on-accent)}
.btn-secondary{background:transparent;color:var(--accent);box-shadow:inset 0 0 0 2px var(--accent)}
```

### D2.7 The headshot

The file is 320x292 with a second person partly in shot at bottom left. It is never shown whole and never enlarged beyond about 1.5 times.

- **Crop**: a square from x 64 to 304 and y 0 to 240 (240x240), which keeps Indi's face centred and leaves the bottom-left corner out. Done in CSS, so there is still exactly one image file of him:

```css
.headshot{width:var(--size,240px);aspect-ratio:1;overflow:hidden;border-radius:var(--r,12px);position:relative;background:#0F2747}
.headshot img{position:absolute;width:133.333%;height:auto;left:-26.667%;top:0;max-width:none}
```

  (`133.333% = 320/240`; `-26.667% = -64/240`.)

- **Sizes**: 240 px (home hero at 1366, ask panel at 1366), 160 px (home hero and ask panel at 390), 28 px round (`--r:50%`) in the header.
- `alt="Indi Gupte"` where it is the only image of him on screen; `alt=""` in the header, beside his name.
- A 1 px `--line` ring and a 6 px offset block of `--accent-soft` behind it at 1366 px (`box-shadow: 8px 8px 0 var(--accent-soft)`), so the small photo reads as a deliberate print-style portrait, not a missing large one.
- `loading="eager"` on the home page, `lazy` elsewhere; always `width="320" height="292"` on the `<img>`.

### D2.8 Project figures (small inline SVGs on `/built/` and the home page)

One 120x80 drawing per piece of work, line art in `--accent` and `--warm`, 2 px strokes, `role="img"` with a `<title>`:

| Work | Drawing (from his own words) |
|---|---|
| RiskMandate Agent Behaviour Policies | Two overlapping rounded rectangles, "can reach" (outline) and "allowed to do" (tint); the part of "can reach" outside "allowed" is hatched and labelled "the gap". This draws his sentence: "what each AI agent can reach, what it's allowed to do, and the gap between the two." |
| PrompTugal.news | A folded newspaper whose columns are alternately a person icon and an agent icon ("run by people and AI agents together"). |
| Lisbon Tech Fringe | A one-day time line: a storm cloud at the start, then "guide" and "app" dots before the day's end ("the same day"). No times are given, so the line has no hour marks. |
| Strangers in the Loop | A small waveform with a loop arrow. Link: Spotify (plain link, no embed). |
| The business cards | Two offset card outlines at 85x55 proportion (business-card ratio), blank. No image of the real card exists in the repository, so nothing imitates it. |

### D2.9 The agent grid (`/how-i-work/`, and in two designs)

27 squares in a 9x3 grid (1366) or 6 columns with a last row of 3 (390). 23 filled `--accent` with the label "running"; 4 outlined in `--muted` with "not running". A legend states: "27 agents, 23 running, as listed on web-summit.sgit.ai/people/indi, read 18 November 2026." Beside it, one large figure: "277 commits by his agents on the team's site" with its source. If the researcher's `data/research/RECORD.md` gives agent names or roles from that public page, each square gets its name as a `<title>`; otherwise the squares stay unnamed. Nothing is invented.

---

## D3. Five designs of the home page

Each design shows **the same home-page facts**: name; "Brand, partnerships and research"; one line about him; the ask and LinkedIn; what he built (five items plus OmKneeHealth); how he works (27 agents, 23 running, 277 commits; research, design); languages; background in brief; the fields he names; sources. Each has its own stylesheet `/d/<slug>/style.css`, its own share card (optional, D5), and the designs control (D6). Each is listed in `/designs.json` with a 480x300 JPEG thumbnail at `/assets/designs/<slug>.jpg`, made by `scripts/shots.mjs` at 1366 px and scaled.

Common rules: system fonts only; every text pair AA (ratios in each table); 44 px targets; the ask in the first screen at 390 px; each fact's source reachable from the page.

### D3.1 The Briefing (`briefing`): default home page

**Idea:** a briefing note of the kind a diplomat reads before a meeting: purpose first, then numbered paragraphs, with the sources in the margin. It suits the direction he names (International Relations, diplomacy "where languages, judgement and tact meet") and it puts the ask first.

**Palette** (light; dark variant given):

| Token | Light | Dark | Use | Ratio (light / dark) |
|---|---|---|---|---|
| `--paper` | `#F7F4EC` | `#10192A` | page | |
| `--ink` | `#13233F` | `#EDE7DA` | text, headings, primary button | 14.26 / 14.27 |
| `--muted` | `#4A5468` | `#A9B3C4` | margin notes, labels | 6.92 / 8.31 |
| `--seal` | `#8C1D18` | `#F09A8E` | paragraph numbers, the monogram, "Purpose" label | 8.29 / 8.14 |
| `--link` | `#13233F` underlined | `#9FC0EE` | links | 14.26 / 9.42 |
| `--rule` | `#B8AE98` | `#2E3A52` | hairlines (decorative) | |
| Button | `#FFFFFF` on `#13233F` | `#10192A` on `#EDE7DA` | | 15.67 / 14.27 |

**Type:** headings and body `--serif` (Charter first); labels, numbers and notes `--sans` small caps (`font-variant-caps: all-small-caps; letter-spacing:.06em`). h1 clamp(2.25rem, 1.5rem + 2.8vw, 3.25rem); paragraph numbers 0.875rem `--seal`.

**Layout:**

- 1366: a "sheet" 1040 px wide centred on the paper, 12 columns. Header block: left (cols 1 to 8) the label "BRIEFING NOTE · 18 NOVEMBER 2026" (the date the facts were read), then `h1` "Indi Gupte", then "Brand, partnerships and research · West London"; right (cols 10 to 12) the 240 px headshot in a thin `--rule` frame with a drawn circular **monogram "IG"** (64 px SVG, `--seal`, two concentric circles, the letters in Charter) overlapping its lower-right corner, like a seal on a document.
- Then a full-width boxed **Purpose** paragraph (`--ink` 2 px left rule): "Purpose: Indi is looking for work experience. Contact: LinkedIn." with the primary button "Message me on LinkedIn" and secondary "What I am looking for".
- Then numbered paragraphs in cols 1 to 7, notes in cols 9 to 12: **1. Summary** (his WhatsApp words, quoted as written); **2. What he built** (five short entries, each with its D2.8 figure at 80x54 floated left, and a note with source); **3. How he works** (the agent grid in small, 277 commits); **4. Languages** (the figure, D4, monochrome `--ink`/`--seal`); **5. Background**; **6. Fields he would like to talk to people in** (languages, AI, medicine, diplomacy, as four small-caps tags); **7. Recommended next step**: "Message him on LinkedIn" with the button again.
- 390: one column; header block stacks (label, h1, line, 160 px headshot with the monogram at 48 px); Purpose box sits directly under the name, above the photo, so the ask is in the first 600 px; notes become inline numbered blocks after each paragraph.
- Print: A4, the sheet at full width, notes kept in the margin, buttons print as "linkedin.com/in/indi-gupte-26960b318".

**Leads with:** the Purpose box (the ask) and the summary.
**Call to action:** the Purpose box at the top and paragraph 7 at the end, both with the LinkedIn button; the ask band is folded into the Purpose box on this design.
**Languages figure:** D4 as drawn, in `--ink` with `--seal` for the "Speaks" label and the bracket.

**Why it should be the home page:** the readers are an employer, a mentor and a university contact. This design answers their first two questions (what does he want, what has he done) in the first screen, reads like a document they already know how to read, shows every source beside its claim (the team's way of working, made visible), prints well for a careers office, and matches the inner pages' palette so moving from home to an inner page feels like turning a page. Lingua is the close second (D3.2) and the most distinctive; if Indi prefers to lead with languages, swap the default in `designs.json` and nothing else changes.

**Beats Model A because:** the ask is in a framed Purpose box rather than at the end; sources sit beside each claim; the monogram, figures and print layout make a small photo look intended.

### D3.2 Lingua (`lingua`)

**Idea:** his own first line about himself is "a student passionate about languages", and he will read Modern Languages and International Relations. The page is set like a polyglot edition: each section heading is given in English with its Italian and French in small type beside it, and the languages figure is the hero.

**Palette:**

| Token | Hex | Use | Ratio on `#F5EFE3` |
|---|---|---|---|
| `--paper` | `#F5EFE3` | page | |
| `--ink` | `#1F1A14` | text | 15.08 |
| `--muted` | `#5A5246` | glosses, notes | 6.72 |
| `--en` | `#1E4D8C` | English | 7.35 |
| `--it` | `#1F6B3A` | Italian | 5.69 |
| `--fr` | `#8C2A3B` | French | 7.31 |
| `--sa` | `#9A4A00` | Sanskrit | 5.47 |
| `--code` | `#4B3F8C` | programming languages | 7.68 |
| Button | `#FFFFFF` on `#1F1A14` | | 17.27 |

Colour is never the only cue: each language also carries its name.

**Type:** `--serif` for headings and body; glosses in `--serif` italic at `--t-s`; Devanagari in `--deva`; code in `--mono`. h1 clamp(2.5rem, 1.6rem + 3vw, 3.5rem).

**Layout:**

- 1366: a two-column hero, cols 1 to 5: kicker "Brand, partnerships and research", h1 "Indi Gupte", the line, the ask (button), the 240 px headshot below; cols 6 to 12: the languages figure (D4) at 640 px wide. Sections after the hero use a "parallel text" grid: English text cols 1 to 7; the section title's Italian and French glosses in cols 9 to 12 in `--it` and `--fr` italic (only the titles are glossed, not his facts, so nothing he said is put into his mouth in another language).
- Section titles and their glosses (the writer to confirm; standard dictionary renderings): "What I built / Cosa ho costruito / Ce que j'ai construit"; "How I work / Come lavoro / Comment je travaille"; "Looking for work experience / Cerco un'esperienza di lavoro / Je cherche une expérience professionnelle". The glosses carry `lang="it"` and `lang="fr"`, and are marked as the site's translations in a note.
- Decoration: a large Devanagari word **संस्कृतम्** (saṃskṛtam, "Sanskrit") at 160 px in `--sa` at 12% opacity behind the languages section, `aria-hidden="true"`, `lang="sa"`, with the readable label "Sanskrit" in the figure itself. A thin row of `{ }` in `--code` at the same opacity behind the programming item. No other scripts are used, so nothing suggests languages he has not named.
- 390: hero stacks (name, line, ask, figure in its vertical variant, then the headshot at 160 px beside the "what he did" strip); glosses sit under each title on one line.

**Leads with:** the languages figure, beside his name and the ask.
**Call to action:** a button under the line in the hero, and an end panel titled "Looking for work experience" with its two glosses.
**Languages figure:** D4 at hero size, each language in its own colour, the five names written in their own language as well as in English.

### D3.3 Front Page (`front-page`)

**Idea:** he is one of the three editors of PrompTugal.news, a newsroom run by people and AI agents. The home page is a newspaper front page about his week: a masthead, a lead story, columns, an index.

**Palette:**

| Token | Hex | Use | Ratio on `#FBFAF6` |
|---|---|---|---|
| `--newsprint` | `#FBFAF6` | page | |
| `--ink` | `#111111` | text, rules | 18.08 |
| `--muted` | `#555049` | datelines, captions | 7.65 |
| `--red` | `#B3121B` | masthead rule, kicker, links on hover | 6.66 |
| Button | `#FFFFFF` on `#B3121B` | the ask | 6.96 |

**Type:** masthead and headlines in a display serif stack `"Bodoni 72", Didot, "Bodoni MT", "Big Caslon", Georgia, serif` (all system fonts on macOS, iOS or Windows with Office; Georgia elsewhere); body `Georgia, "Times New Roman", serif` at 17 px, `text-align:left` (not justified, for readability), first paragraph with a 3-line drop cap; datelines and kickers `--sans` uppercase 12 px +0.08em. Masthead 64 px at 1366, 40 px at 390.

**Layout:**

- Masthead: "Indi Gupte" centred between double rules (`--ink` 3 px and 1 px), with the dateline row below: "West London · Web Summit Lisbon 2026 · Looking for work experience" (the last item in `--red`, linking to LinkedIn).
- 1366: 12 columns, 1 px column rules. Lead story cols 1 to 8: headline "Student who worked with 27 AI agents at Web Summit is looking for work experience" (writer to approve), standfirst from his WhatsApp words, the headshot at 240 px as the lead photo with caption "Indi Gupte. Photo used with his agreement." Sidebar cols 9 to 12: **"In this edition"** index (the five built items as headline links) and a boxed **"Notice"** styled as a classified advert: "WANTED: work experience. Languages, AI, medicine or diplomacy. Reply via LinkedIn." with the button. Below the fold: three columns of short stories (RiskMandate, PrompTugal.news, Lisbon Tech Fringe, each with its D2.8 figure as the "picture"), then a row for Strangers in the Loop and the business cards, then "By the numbers" (27 agents, 23 running, 277 commits, each with source).
- 390: masthead, dateline, the Notice box first (full width), then the lead story, then the rest in one column with rules between.

**Leads with:** the lead story about his week, with the Notice beside it (1366) or above it (390).
**Call to action:** the Notice box ("WANTED: work experience") and the dateline link.
**Languages figure:** a boxed "Languages" fact panel in the sidebar: the D4 figure in black ink only, with the newspaper's caption style ("Source: his LinkedIn profile, read 18 November 2026").

### D3.4 Agent Console (`console`)

**Idea:** the operator's view of his working week: his 27 agents (23 running) and their 277 commits, drawn as a console. It shows the thing that is most unusual about him for an employer, that he works every day with a team of AI agents. It is dark, but not a terminal pastiche: every panel is readable text.

**Palette:**

| Token | Hex | Use | Ratio |
|---|---|---|---|
| `--bg` | `#0B1016` | page | |
| `--panel` | `#121A23` | panels | |
| `--text` | `#D7E3EA` | text | 14.61 on bg, 13.41 on panel |
| `--dim` | `#8395A3` | labels | 6.18 on bg, 5.67 on panel |
| `--green` | `#5BD69B` | "running", primary button | 10.49 on bg, 9.63 on panel |
| `--amber` | `#F2C14E` | "looking for" status | 11.38 on bg, 10.45 on panel |
| `--idle` | `#3A4756` | idle squares (decorative; each also labelled) | |
| Button | `#0B1016` on `#5BD69B` | | 10.49 |

**Type:** `--mono` for labels, numbers, status lines; `--sans` for sentences (readability). Numbers 56 px `--mono` 600.

**Layout:**

- A status bar across the top: `operator: Indi Gupte · status: LOOKING FOR WORK EXPERIENCE` (in `--amber`) `· contact: LinkedIn ↗`.
- 1366: 12 columns of panels, 16 px gaps, 10 px radius, 1 px `#1F2B38` borders. Row 1: operator panel (cols 1 to 4: 160 px headshot, name, "Brand, partnerships and research", the button "Message me on LinkedIn"); agents panel (cols 5 to 12: the D2.9 grid, large, squares 56 px, 23 lit in `--green` with a slow 2 s opacity pulse that stops under `prefers-reduced-motion`). Row 2: three counters, "27 agents", "23 running", "277 commits", each with its source line in `--dim`. Row 3: "Shipped" panel listing the five built items as log lines (`✓ RiskMandate: Agent Behaviour Policies · riskmandate.ai`), no timestamps (none are given). Row 4: languages panel and background panel side by side.
- 390: status bar wraps to two lines; operator panel, then counters in a 3-up row of small tiles, then the grid at 6 columns, then the rest.

**Leads with:** the operator panel and the agent grid.
**Call to action:** the status bar ("status: LOOKING FOR WORK EXPERIENCE") and the button in the operator panel.
**Languages figure:** a "languages" panel listing five rows as key and status, drawn in SVG: `en English · speaks`, `it Italian · speaks`, `fr French · speaks`, `sa Sanskrit · interest`, `{ } programming languages · interest`, with a bracket joining the last two marked "the same interest". All rows the same length: no bars.

### D3.5 The Card (`card`)

**Idea:** he designed the team's business cards. The page is a business card on a desk: the front with his name and the ask, the back with what he did, and a "turn over" control. It is the most compact design; it reads in ten seconds and prints on one sheet.

**Palette:**

| Token | Hex | Use | Ratio |
|---|---|---|---|
| `--desk` | `#EDEAE3` | page | |
| `--card` | `#FFFFFF` | card front | |
| `--ink` | `#1A1A1A` | text | 17.40 on card, 14.49 on desk |
| `--muted` | `#5B5B5B` | small lines | 6.79 on card |
| `--accent` | `#B4471F` | rule, the ask line | 5.44 on card |
| `--back` | `#1E4D8C` | card back | |
| back text | `#FFFFFF` / small `#C9D8EE` | | 8.42 / 5.83 on `--back` |
| Button | `#FFFFFF` on `#1A1A1A` | | 17.40 |

**Type:** a British humanist sans, `"Gill Sans", "Gill Sans MT", Seravek, "Trebuchet MS", system-ui, sans-serif`; name 600 weight, letter-spacing +0.02em; small lines uppercase +0.12em.

**Layout:**

- The card at business-card proportion 85:55. 1366: 680x440 px, centred, `box-shadow: 0 1px 0 rgba(0,0,0,.06), 0 24px 48px -24px rgba(0,0,0,.35)`, rotated 0 deg (no tilt: tilt hurts reading). 390: 358x232 px, then the content below it continues as plain text.
- **Front**: top left the 96 px round headshot crop; name "Indi Gupte" 40 px (24 px at 390); "Brand, partnerships and research"; a 2 px `--accent` rule; "Looking for work experience" in `--accent` uppercase; bottom row: "linkedin.com/in/indi-gupte-26960b318" as a link and "West London".
- **Back** (`--back`): "Web Summit Lisbon 2026" small; five lines, one per piece of work; "27 AI agents · 23 running · 277 commits".
- The **Turn over** button (48 px) flips the card with a 3D rotateY 0.5 s transition; under `prefers-reduced-motion` it cross-fades. With no JavaScript both faces show one above the other. Both faces are in the DOM; the hidden face gets `aria-hidden="true"` and `inert`.
- Below the card at both widths: "More on the reverse of the card" sections in plain text (built, how he works, languages, background, sources), each 40rem wide, so no fact lives only on the card.
- Print: the card front and back at true size (85x55 mm) at the top of an A4 page, then the text.

**Leads with:** his name and "Looking for work experience" on the card front.
**Call to action:** the card front's ask line and the LinkedIn line; a button under the card.
**Languages figure:** on the card back, one line: "English · Italiano · Français", then "Interested in Sanskrit (संस्कृतम्) and programming languages"; the full D4 figure below the card in `--ink` and `--accent`.

The card design must not imitate the team's real business cards (no image of them is in the repository); if Indi supplies a picture of the card he designed, a later round can show it on `/built/` as his work.

### D3.6 In reserve: Field Notes (`notebook`)

A Lisbon field notebook (squared paper, the storm day as a dated entry). Not proposed for round 1: it would need more dated facts from the week than the sources give, and inventing them is not allowed. Kept here in case the researcher finds a public day-by-day record.

### D3.7 The five designs at a glance

The developer takes names, slugs and ideas from this table.

| Slug | Name | One-line idea (for `designs.json` and the dialog) | Default |
|---|---|---|---|
| `briefing` | The Briefing | A diplomat's briefing note: the ask first, numbered paragraphs, sources in the margin. | yes, at `/` |
| `lingua` | Lingua | A polyglot edition: his languages lead, with section titles in English, Italian and French. | |
| `front-page` | Front Page | A newspaper front page about his week, from one of PrompTugal.news's editors. | |
| `console` | Agent Console | The operator's view: 27 agents, 23 running, 277 commits. | |
| `card` | The Card | A business card, front and back, from the person who designed the team's cards. | |

---

## D4. The languages figure

### D4.1 What it may and may not say

From his LinkedIn profile (read 18 November 2026): he **speaks** English, Italian and French; he has **an interest in** Sanskrit, **and the same interest in** programming languages; he is working through Harvard's CS50x; he will read Modern Languages and International Relations from next autumn. No levels, grades or years are given, so the figure has **no bars, no dots out of five, no sizes that differ within a group, and no order of strength**. The order within "Speaks" is the order he wrote them. Programming languages are not named, because he does not name them.

### D4.2 The drawing (horizontal variant, 1366 px)

Two groups as two shelves, with a bracket for "the same interest", and one arrow to where they lead.

```
 SPEAKS                                         AN INTEREST IN
 ┌───────────┐ ┌───────────┐ ┌───────────┐     ┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐  ┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐
 │ English   │ │ italiano  │ │ français  │     ╎ संस्कृतम्     ╎  ╎ { }            ╎
 │ English   │ │ Italian   │ │ French    │     ╎ Sanskrit     ╎  ╎ Programming   ╎
 └───────────┘ └───────────┘ └───────────┘     └╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘  ╎ languages     ╎
                                                       └──── the same interest ────┘
                     ──────────────▶ Modern Languages and International Relations, from next autumn
```

- `viewBox="0 0 720 300"`, `width="100%"`, `max-width:720px`.
- "Speaks" tiles: 140x88, 12 px gap, filled `--accent` (main system) with `--on-accent` text; top line the language's own name (English, italiano, français) 20 px 600; bottom line the English name 13 px. `lang="it"` and `lang="fr"` on the own-name `<text>` elements.
- "An interest in" tiles: 150x88, `fill: none`, 2 px dashed `--accent` stroke (`stroke-dasharray: 6 5`), text `--ink`. Sanskrit tile: top line **संस्कृतम्** in `--deva` 20 px with `lang="sa"`, bottom line "Sanskrit". Programming tile: top line `{ }` in `--mono` 22 px, bottom line "Programming languages" (two lines).
- Bracket under the two interest tiles, 2 px `--warm`, labelled "the same interest" (his phrase) 13 px `--warm`.
- Solid fill versus dashed outline is the only distinction, and it is labelled ("Speaks", "An interest in") in 12 px uppercase `--muted` above each group. Solid means "speaks", dashed means "interest": a difference of kind, not of level.
- A thin arrow from under the "Speaks" group to the line "Modern Languages and International Relations, from next autumn" (13 px `--muted`), and a small note under the programming tile: "working through Harvard's CS50x" (12 px `--muted`, joined by a 1 px dotted line).

### D4.3 Vertical variant (390 px)

`viewBox="0 0 358 520"`. "Speaks" as three full-width tiles (358x64, own name left, English name right); then "An interest in" as two dashed tiles (358x64); the bracket on the right edge spanning the two dashed tiles, label rotated 0 deg below it; then the arrow and the university line. Both SVGs are in the page; CSS shows one (`.fig-h{display:none} @media (min-width:700px){.fig-h{display:block}.fig-v{display:none}}`), so only one is in the accessibility tree at a time.

### D4.4 Accessibility and fallbacks

```html
<figure class="langs">
  <svg class="fig-h" viewBox="0 0 720 300" role="img" aria-labelledby="lf-t lf-d">
    <title id="lf-t">Indi's languages</title>
    <desc id="lf-d">He speaks English, Italian and French. He has an interest in Sanskrit, and the same interest in programming languages; he is working through Harvard's CS50x. From next autumn he will read Modern Languages and International Relations. No levels are given, so none are shown.</desc>
    <!-- tiles as described -->
    <text x="..." y="..." lang="sa" class="deva">संस्कृतम्</text>
  </svg>
  <figcaption>Source: his LinkedIn profile, read 18 November 2026. Solid tiles: languages he speaks. Dashed tiles: his interests. No levels are given, so none are shown.</figcaption>
</figure>
```

The Devanagari is checked character by character: स (sa) ं (anusvara) स (sa) ् (virama) क (ka) ृ (vocalic r sign) त (ta) म (ma) ् (virama), U+0938 U+0902 U+0938 U+094D U+0915 U+0943 U+0924 U+092E U+094D. It is decoration beside the word "Sanskrit", never the only label. The reviewer should confirm it renders on iOS, Android and Windows at 390 and 1366 px.

Each design recolours the figure through its own custom properties (see each design's "Languages figure" line); the shape and the words do not change.

---

## D5. The share card (link preview)

- **Size and format:** 1200x630 JPEG, quality about 82, under 300 KB (the validator checks), at `/assets/share/indi-gupte.jpg`; optional per design at `/assets/share/<slug>.jpg`.
- **Meta on every page:** `og:image` absolute (`https://indi-gupte.agenticcells.site/assets/share/indi-gupte.jpg`), `og:image:width` 1200, `og:image:height` 630, `og:image:alt` "Indi Gupte: looking for work experience", `twitter:card` `summary_large_image`.
- **Layout** (12 columns of 100 px across 1200; safe area 60 px all round, because some apps crop the edges):
  - Background `#1B2333` (the ask band colour), a 12 px `#F2C29A` bar down the left edge.
  - Left, x 60 to 450: the headshot crop (D2.7, the 240x240 square) shown at 360x360 (1.5 times, the most it can take), y 135 to 495, 16 px radius, 4 px `#FAF7F1` frame. The bystander stays outside the crop.
  - Right, x 510 to 1140: "Indi Gupte" 84 px 600 `#FFFFFF` (system serif as rendered by the build machine); below it "Looking for work experience" 48 px `#F2C29A`; below that "27 AI agents at Web Summit Lisbon 2026" 30 px `#D7DCE4`; bottom right "indi-gupte.agenticcells.site" 28 px `#FFFFFF` at y 520.
  - Contrast: white on `#1B2333` 15.73; `#F2C29A` on it 9.71.
- **Per-design cards (optional):** same layout and text, with the design's own background and accent: The Briefing `#13233F` and `#F7F4EC` with the "IG" seal; Lingua `#F5EFE3` and `#1F1A14` with the language colour strip; Front Page newsprint with the masthead rule; Agent Console `#0B1016` with a 9x3 square grid; The Card the card front on the desk.
- **How it is made:** `scripts/cards.mjs` writes each card as a 1200x630 HTML page from the facts and screenshots it with the same browser `scripts/shots.mjs` uses, saving JPEG; it fails the build if a card is over 300 KB. No text is baked into the photo file, and the photo file is not changed.

---

## D6. The designs control (every page)

Modelled on Model B's dialog, built on `designs.json`.

- **Markup:** in bar 2 of the header (inner pages) and in each design's own header: `<a class="designs-btn" href="/d/" aria-haspopup="dialog" aria-controls="designs">` containing a 16 px drawn icon (four small squares, `aria-hidden`) and the word "Designs". With no JavaScript it is a link to `/d/`. A small first-party script (`/designs.js`, same host, `defer`) turns it into a button that calls `showModal()` on `<dialog id="designs">`.
- **Dialog content:** heading "Designs"; line "The same facts about Indi, laid out five ways. Choose one to see it."; a Close button (48 px, top right, `<form method="dialog">`); a list of five items, each a link with the 480x300 thumbnail (`width="480" height="300" alt="" loading="lazy"`), the name in bold, the one-line idea, and "Showing" (on the design being viewed, with `aria-current="page"`) or "Home" on the default; a footer link "All designs on one page" to `/d/`, and a second link "Behind the scenes".
- **Layout:** 1366: dialog 880 px wide, list as a 3-column grid (thumbnails 264x165), max-height 85vh, scrolls inside. 390: full-screen sheet (`width:100vw;height:100dvh;margin:0`), list in one column, thumbnails full width.
- **Style:** dialog background `--surface`, text `--ink`, backdrop `rgba(11,15,22,.6)`; each item's hover and focus state a 2 px `--accent` ring. In the designs, the dialog keeps the main system's tokens so it looks the same everywhere (a fixed "site" frame around each design's own look).
- **Behaviour:** Esc closes; focus moves to the heading on open and back to the button on close; clicking the backdrop closes; the page behind is `inert` while open (native `showModal`).
- **`/d/` page:** the same five items as cards in a 2-column grid at 1366 (1 at 390), each with a larger 560x350 thumbnail, the idea, "what it leads with" and "Open this design".

---

## D7. Behind the scenes (`/behind-the-scenes/`)

Main system, with these sections in order, and an on-page contents list (sticky in cols 10 to 12 at 1366; a `<details>` "On this page" at 390):

1. **In Dinis's words.** Each of Dinis's quoted instructions with its time (UTC, about), as recorded in `team/WORKFLOW.md`, as large pull quotes (`--serif` 1.5rem, `--warm` 4 px left rule). Followed by "Indi agreed to this site" with its source line.
2. **The team.** Six role cards (conductor, researcher, designer, writer, developer, reviewer) in a 3-column grid at 1366 (1 at 390). Each card: the agent's address in `--mono` (for example `designer.indi-gupte@AgentiCCells.dinis`), a 32 px drawn role icon, "What it is for" (from its ROLE.md, one line), "May change" (from `team/scopes.json`), and links "Role" and "Policy" to the files on GitHub. A line above the grid: "Every role runs as a sub-agent of the conductor; each has an Agent Behaviour Policy."
3. **The flow of a round.** An inline SVG of the loop in `team/WORKFLOW.md`: nine boxes (brief, research, design, review of design, copy, build, release, live review, report), each 120x56 with the step name and the role below it in `--muted`; arrows `--ink`; the return arrow from live review back to copy and build in `--warm`, dashed, labelled "a failure goes back". Horizontal at 1366 (`viewBox 0 0 1100 220`, two rows of boxes if needed); vertical at 390 (`viewBox 0 0 340 760`), swapped as in D4.3. `role="img"` with a `<desc>` listing the steps in order. Each box links to the step's paragraph below the figure.
4. **How the site started.** Three short entries: the factory's first pass (with its before screenshots from `team/rounds/img/r1-before/`, two thumbnails 390 and 1366 side by side, linking to full size), the headshot added, the team formed.
5. **Rounds.** One block per round: aim (from `team/rounds/N.md`), what changed, the review verdicts, open items, and before and after screenshots in a 2x2 grid (home and one inner page, before and after, at 1366; at 390 a swipeable horizontal row with `scroll-snap`, each image 280 px wide, plus a "Show all" link). Links to each round's PROPOSAL, review and report files on GitHub.
6. **Every commit.** Generated from `git log` at build time by `scripts/behind.mjs`, grouped by round (newest first), each group a `<details>` (the latest one open) with the summary "Round 1 (N commits)". Each commit row: date and time (UTC) in `--mono` `--t-xs`, short hash linking to the commit on GitHub, the `Agent:` trailer's role as a coloured pill (one colour per role, all AA on `--surface`: use `--accent`, `--warm`, `#1F6B3A`, `#4B3F8C`, `#8C2A3B`, `#4D5665` as text on a 10% tint of the same), and the subject line. At 1366, a 3-column row (`160px 120px 1fr`); at 390, two lines per commit. Above the list, a small SVG strip chart: one 6 px tick per commit along a time axis for the cell's life, coloured by role, with a legend; `aria-hidden` because the list below carries the same data.
7. **The checks.** A short list of the gates a release passes (validator, leak scan, wording check, check-commits, role-scope, abp-check), each with a link to the script on GitHub.
8. **Sources** and **the repository** link, then the ask panel and footer as on every page.

**Beats Model B's page because:** the role cards show what each role may change, the commit list is filterable by eye through role colours, and the strip chart shows the rhythm of the rounds at a glance.

---

## D8. Inner pages, one by one, and how each goes further than Model A

| Page | Design | Compared with Model A |
|---|---|---|
| What I built | One "case" per piece of work: at 1366 a 12-column row with the D2.8 figure (cols 1 to 3, 160x107), title and his own sentence quoted as written (cols 4 to 8), "Where to check" with the link and source note (cols 9 to 12). Cases separated by a 1 px rule and `--s8`. Order: RiskMandate, PrompTugal.news, Lisbon Tech Fringe, Strangers in the Loop, the business cards, then "Also: OmKneeHealth". | Model A tells her project in prose; here each piece of work has a drawing of what it is and a checkable source beside it. |
| How I work with AI agents | Opens with the agent grid (D2.9) and the three counters; then "What I bring": his three phrases (company research; design; working every day with a team of AI agents) as three columns, each pointing to the work that shows it; then his Web Summit team role in quotation ("The message, outreach, and the factory of examples", with source). | Matches Model A's team section and adds the evidence mapping from her "brief" design to the main page. |
| Languages | The D4 figure at full width; "Where they lead" (the university line, the education entry as his profile lists it, the diplomacy quotation). | Model A has no figure of this kind; this is the page's centrepiece. |
| Background | A vertical timeline (2 px `--line` rail, 12 px `--accent` nodes) with only the dates his profile gives: Harrow School, September 2021 to June 2026; Harrow Diploma, University of Buckingham, May 2026; SportsHealing Ltd, from September 2026; RiskMandate, from November 2026; Web Summit Lisbon 2026; university from next autumn. The hospital volunteering in London and rural Italy appears as an undated block beside the rail, since no date is given. | Like Model A's experience list, but nothing is dated that he has not dated. |
| Looking for | Full-width ask at the top: h1 "Looking for work experience", the primary button, and his sentence "I'm looking for work experience" quoted. Then the four fields he names as four large tiles (languages, AI, medicine, diplomacy), each with one line linking it to his own facts (for example medicine: hospital volunteering; three health technology startups). Then "What I bring". Then "Questions to ask Indi" (proposal; see Decisions). | Matches Model A's contact and interview questions and puts them on a page of their own. |
| Sources | Numbered list, grouped (his own words; his LinkedIn profile; the team's public record; project sites), each with URL and "read 18 November 2026". The numbers match the margin notes on every page. | Model A lists sources; here the numbers tie back to margin notes. |
| Use with AI (`/agents/`) | Three audience blocks (an employer or recruiter: read-only; Indi himself; a site editor), each a short instruction list with a copyable prompt in a `<pre>` and a "Copy" button (first-party script; works as selectable text without it). Then "Files for AI": `/llms.txt`, `/index.md`, `/designs.json`. Then **"The source of the site"**: "Repository: AgentiCCells/AgentiCCells__Site__Indi-Gupte on GitHub" linking `https://github.com/AgentiCCells/AgentiCCells__Site__Indi-Gupte`, branch dev, licences. | Same structure as Model A's, plus the repository, as Dinis asked. |

---

## D9. Motion and preferences

- `prefers-reduced-motion: reduce`: no pulses, no flips, no smooth scrolling.
- `prefers-color-scheme: dark`: the main system and The Briefing switch; Lingua, Front Page and The Card are light designs and declare `color-scheme: light`; Agent Console declares `color-scheme: dark`.
- Print: every page hides the header bars, the designs control and the Menu; links print their URL after the text (`a[href^="http"]::after{content:" (" attr(href) ")"}`) except where the URL is already the text.

## D10. Performance

No external requests. One stylesheet per page type (main or design), under 20 KB each. One headshot file (about 20 KB) reused everywhere. Thumbnails 480x300 JPEG about 30 KB each, lazy-loaded inside the dialog. SVG figures inline.

## D11. What the developer needs from other roles

- Writer: final words for the ask panel, the Front Page headline, the Lingua glosses, the Purpose box, and each design's tagline; every fact in `data/facts.mjs` with a source id.
- Researcher: whether the public page `web-summit.sgit.ai/people/indi` lists the agents' names or roles (for the grid's titles), and any public record of the week by day (for the reserve notebook design).

## D12. Checks the reviewer can run on this design

- No `mailto:` or `tel:` anywhere; the LinkedIn link on every page at least twice (band and ask panel).
- The repository link in the top navigation of every page, and on `/agents/` and `/ai/`.
- At 390 px, the phrase "Looking for work experience" and at least one of "27 AI agents" or a built item visible without scrolling on every page and every design.
- The headshot never shows the bottom-left corner of the file.
- The languages figure contains no bar, scale or number of levels.
- Every text colour pair in this proposal at or above 4.5:1.

---

## Decisions for Dinis or Indi

1. **Default home design.** The Briefing is proposed; Lingua is the alternative. Indi's preference decides.
2. **The headshot shows part of another person** in the bottom-left corner. This proposal crops it out everywhere. A different photo, or Indi's word that the crop is fine, would settle it.
3. **"Questions to ask Indi"** on "Looking for" (as Model A has): needs Indi's approval of the questions, since they speak for him.
4. **The Front Page headline and the Lingua glosses** put words on the page that he did not write (a headline about him; Italian and French section titles). Both are marked as the site's words, but Indi should approve them.
5. **The business cards:** a picture of the card he designed would make the "business cards" entry and The Card design much stronger; none is in the repository.
6. **The "about" date** used in The Briefing's label (18 November 2026, the date the facts were read) is not a date about him; confirm that is acceptable.
