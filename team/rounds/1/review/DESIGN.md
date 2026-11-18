# Round 1 review of the design proposal

Written by reviewer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Reviewed: `team/rounds/1/design/PROPOSAL.md` (commit f7b9a59), against `team/BRIEF.md`, `team/WORKFLOW.md` (including Dinis's 09:51 UTC words), `data/research/RECORD.md`, `CLAUDE.md` and `team/reviewer/POLICY.md`.

What I checked, besides reading: the contrast of every proposed colour pair (computed with a node script, WCAG 2.x relative luminance; table below); the headshot crop, by cropping `src/assets/indi-gupte.jpg` with ImageMagick and looking at the result; the file size of the headshot (19,966 bytes); `git log` and `src/` for personal names; the model site's home page (the model site (its address is in the factory brief), read 18 November 2026 with curl) to judge ambition. No board/HOLD.md exists.

Conductor decisions applied (given to me in the round brief): The Briefing is the home page (pending Dinis); the headshot is cropped to remove the other person; Italian and French section titles in Lingua are allowed if correct and plain, and marked in data as awaiting Indi's approval; any headline is a plain statement of sourced fact; the business cards entry quotes his post ("I designed our business cards") and states the record (his agent drew the designs, he chose one, the printed design was chosen on 5 November) without setting one against the other.

## Verdicts at a glance

| Change | Verdict |
|---|---|
| D1 Information architecture, header, footer, call to action | pass with changes (C1 to C8) |
| D2 Main system (palette, type, layout, focus, targets, headshot, figures, agent grid) | pass with changes (C9 to C16) |
| D3.1 The Briefing (home) | pass with changes (C17 to C20) |
| D3.2 Lingua | pass with changes (C21 to C24) |
| D3.3 Front Page | pass with changes (C25 to C29) |
| D3.4 Agent Console | pass with changes (C30 to C33) |
| D3.5 The Card | pass with changes (C34 to C37) |
| D3.6 Field Notes (reserve) | not proposed; see "Lifts" (the record now has dated facts) |
| D3.7 Designs table | pass with changes (C38) |
| D4 Languages figure | pass with changes (C39 to C41) |
| D5 Share card | pass with changes (C42 to C45) |
| D6 Designs control | pass with changes (C46 to C48) |
| D7 Behind the scenes | pass with changes (C49 to C53) |
| D8 Inner pages | pass with changes (C54 to C59); "Questions to ask Indi" rejected for round 1 |
| D9 Motion and preferences | pass |
| D10 Performance | pass |
| D11 Needs from other roles | noted; the researcher has already answered both questions (see C16 and Lifts) |
| D12 Checks | pass, with three checks added (C60) |

## The conditions, change by change

### D1. Information architecture: pass with changes

- **C1. Repository link visible in the top navigation at both widths.** Dinis asked for the repository to be "linked from the top nav". At 390 px the proposal puts "Source" only inside the Menu. Keep it in the Menu list and also show a visible GitHub mark link in bar 2 at 390 px: 44x44 px, accessible name "Source code on GitHub", linking https://github.com/AgentiCCells/AgentiCCells__Site__Indi-Gupte.
- **C2. Bar 2 must fit at 390 px.** Avatar 28 + name about 95 + Menu about 76 + Designs about 100 + Source 44 + gaps exceeds the 358 px content width. At 390 px make Designs icon-only (44x44, accessible name "Designs") so the row is about 320 px. No wrap, no horizontal scroll.
- **C3. Bar 2 must fit on one line at 1366 px.** The proposal measures the eight items at about 990 px, which with the name block (about 140 px), the Designs control (about 110 px) and gaps comes to more than the 1152 px container. Measure it in a screenshot at 1366 px; if it wraps, shorten labels (for example "Built", "Use with AI" kept) or move the Menu breakpoint up, decided by the screenshot, not by estimate. Use `max-width:1152px` in px (the 72rem figure becomes 1296 px at the 112.5 % root).
- **C4. Every page, including `/` and each `/d/<slug>/`, carries the full site navigation with the Source link, the ask ("Looking for work experience") and the LinkedIn link in its first screen at 390 px.** A design may restyle the header, not drop items from it. The Briefing at `/` must still link What I built, How I work, Languages, Background, Looking for, Use with AI and Source.
- **C5. Ask band wording.** "I worked with 27 AI agents at Web Summit Lisbon 2026" is not a sourced statement as written: the record gives "27 agents (23 running)", four of them never ran, and his Lisbon Tech Fringe agent (`conductor.fringe@PrompTugal.indi`) is outside the 27. Use the brief's phrase "a team of 27 AI agents" with "23 running" next to it wherever the number appears, or his own words "working every day with a team of AI agents". Never tie the 27 agents to the three projects in one claim (the D1.4 panel placeholder does this; the writer replaces it).
- **C6. First-person copy is the site's words, never in quotation marks.** Only text from the WhatsApp post or the LinkedIn summary goes in quotation marks, exactly as in `team/BRIEF.md`.
- **C7. 44 px targets stated in CSS, not left to padding arithmetic.** Footer links at 14 px with 1.45 line height and 10 px padding are about 40 px. Give nav links, footer links, the home link, the Designs control, the Menu summary, the ask band link and the Copy button `min-height:44px` (and `min-width:44px` for icon links).
- **C8. `/ai/`:** keep as proposed (refresh to `/agents/`, canonical, visible link to `/agents/` and the repository link). Also give `/ai/` the share card meta and name the repository in `/llms.txt` and `/index.md`.

### D2. Main system: pass with changes

- **C9. Headshot crop: replace the 240x240 square at (64, 0).** I cropped it: it cuts off his chin. The other person occupies roughly x 0 to 68, y 225 to 292 of the file. Use a 248x248 square from x 72, y 20 (to x 320, y 268): chin inside, the other person outside, 4 px clear of them. CSS on the square box: `.headshot img{position:absolute;width:129.032%;height:auto;left:-29.032%;top:-8.065%;max-width:none}` (320/248, -72/248, -20/248). Every use of the photo (header, hero, ask panel, share card, design thumbnails) uses this crop; the round 28 px avatar uses it too. No use of the whole file anywhere, and the file stays the one image of him.
- **C10. Enlargement at most 1.5 times the crop** (248 px source, so at most 372 px displayed at 1x; the 240 px hero is fine).
- **C11. Role pills in dark mode.** The fixed pill colours fail on the dark surface (1.74 to 2.31, table below). In dark mode use light variants on their 10 % tint, each at least 4.5:1, for example `#8EB9F0`, `#F0A47F`, `#86EFAC`, `#C4B5FD`, `#F9A8B4`, `#A7B0BD` (8.93 to 11.47 on `--surface`, measured).
- **C12. Note references.** Inline note numbers inside sentences are exempt from the 44 px rule; do not pad them to 44 px (at 1.6 line height that overlaps the lines above and below and the neighbouring links). Give them at least 24x24 px with no overlap (WCAG 2.5.8). The notes themselves, and the standalone links in them, follow C7.
- **C13. Links in body text stay underlined** in both schemes (the proposal says so; keep it in the build).
- **C14. Not-running squares** in the main grid: outline `--muted` (6.93 light, 8.19 dark), as proposed, plus the text label; colour is never the only cue.
- **C15. Figures say only what his words say.** The D2.8 drawings pass as described. The business cards drawing stays blank card outlines. The Lisbon Tech Fringe line has no hour marks (his post gives "the same day"; the record's 12:57 and 21:11 are not credited to him, so do not draw them as his).
- **C16. Agent grid.** The record lists all 27 agents by address, with what each does, status and commit count (`data/research/agents.json`). Name each square (`<title>` and a visible list beside or below the grid), mark the four not running (conductor-teamapp, demo, inbox, vault), and show "not published" where the source gives no description. Legend: "27 agents, 23 running, as listed on https://web-summit.sgit.ai/people/indi/index.md, read 18 November 2026." The 277 figure always carries its window: "277 commits by his agents on the team's site, 3 to 13 November 2026" with the newsroom source. Do not use the derived 309.

### D3.1 The Briefing: pass with changes

- **C17. The label must not read as a date about him.** Replace "BRIEFING NOTE · 18 NOVEMBER 2026" with "Briefing note · facts as read on 18 November 2026".
- **C18. Paragraph 1 quotes the WhatsApp post exactly as in `team/BRIEF.md`**, from "Hi all" to "or know someone who might...", with its line breaks and list items, and nothing after it. If only part is quoted, mark the cut with "[...]" and do not join sentences.
- **C19. Paragraph 2 states his part in each piece of work, with its source** (see C54). His post says "What we built this week"; keep "we" where he wrote it.
- **C20. C4 applies:** the Purpose box replaces the ask band on this design, but the full navigation, Source link and Designs control stay. Paragraph 6 heading as proposed ("Fields he would like to talk to people in") is a fair plain rendering of "glad to talk to people working in languages, AI, medicine or diplomacy".

### D3.2 Lingua: pass with changes

- **C21. Glosses checked.** "Cosa ho costruito", "Come lavoro", "Cerco un'esperienza di lavoro", "Ce que j'ai construit", "Comment je travaille", "Je cherche une expérience professionnelle" are correct, plain translations. ("Cerco un'esperienza lavorativa" and "Ce que j'ai réalisé" are equally correct and slightly more usual; the writer may choose either.) Every gloss used, including any for Languages, Background and Sources, is listed in `data/facts.mjs` with `lang`, the English it renders, and `status: "awaiting Indi's approval"`. The reviewer checks any gloss not listed here before release.
- **C22. Only section titles are glossed**, never his facts or quotations, as proposed. A visible note says the glosses are the site's translations.
- **C23. No Portuguese tile or gloss.** His profile's Oxford entry lists Italian and Portuguese, but he does not say he speaks Portuguese; the "Speaks" group is English, Italian, French only.
- **C24. Devanagari.** संस्कृतम् checked: U+0938 U+0902 U+0938 U+094D U+0915 U+0943 U+0924 U+092E U+094D, saṃskṛtam, correct. The watermark is `aria-hidden`, `lang="sa"`; the live review confirms it renders at 390 and 1366 px.

### D3.3 Front Page: pass with changes

- **C25. Headline is a plain statement of sourced fact.** Not "Student who worked with 27 AI agents at Web Summit is looking for work experience" (it ties the 27 to Web Summit work, see C5). For example: "Indi Gupte, one of the three editors of PrompTugal.news, is looking for work experience" (brief, record section 1, his post). The writer sets the final words within this rule.
- **C26. The Notice must not say he wants work experience in the four fields.** He says he is "glad to talk to people working in languages, AI, medicine or diplomacy". For example: "Wanted: work experience. Glad to talk to people in languages, AI, medicine or diplomacy. Reply via LinkedIn."
- **C27. "By the numbers"**: each number with its source and window (C16), on the page.
- **C28. No imitation of PrompTugal.news**: no logo, name or masthead styling of that site; the masthead is "Indi Gupte".
- **C29. Targets:** the dateline LinkedIn link (12 px uppercase) and the index links get 44 px tall targets (C7).

### D3.4 Agent Console: pass with changes

- **C30. Idle squares at least 3:1** (non-text contrast, WCAG 1.4.11). `#3A4756` is 2.01 on the page and 1.85 on the panel. Use a `#8395A3` outline (6.18 / 5.67) or similar, plus the "not running" label.
- **C31. "Shipped" becomes his words**: heading "What we built this week" (his post), and the log lines as proposed, no timestamps.
- **C32. Counters** carry their sources and the 277 window (C16). Squares named (C16).
- **C33. Pulse** stops under `prefers-reduced-motion` (as proposed) and runs no faster than 2 s.

### D3.5 The Card: pass with changes

- **C34. Business cards as the conductor decided.** The idea text "from the person who designed the team's cards" asserts in the site's voice; replace it with his words and the record, for example: "A business card, front and back. In his words: 'I designed our business cards'." On `/built/`: quote the post; then "His agent, designer@web-summit.indi, drew the designs; he chose one on 4 November; the printed design was chosen on 5 November" with https://web-summit.sgit.ai/cards/index.md and https://web-summit.sgit.ai/people/indi/index.md. No comment on the difference. Do not name who chose the printed design if that would add nothing; if named, it is Dinis.
- **C35. LinkedIn on the card front is a 44 px target at 390 px.** At 358x232 px the front is tight; if the row cannot be 44 px tall, let the card grow taller at 390 px (drop the 85:55 ratio there) or put the button directly under the card in the first screen.
- **C36. Card focus colour on the back** (`--back` `#1E4D8C`): use white (8.42); the default focus colour does not show on blue.
- **C37. No imitation of the real RiskMandate cards** (no seal, no accent strip, no audience colours), as proposed.

### D3.7 The five designs table: pass with changes

- **C38.** Change The Card's idea line as in C34. The others stand.

### D4. Languages figure: pass with changes

- **C39. The university line is his summary's words**, labelled as such: "Modern Languages and International Relations, from next autumn (his words)". Where his education is shown (Languages, Background), show the Oxford entry only exactly as his profile lists it: "University of Oxford, Modern Languages, Italian and Portuguese (2027), as his profile lists it". No "offer", "place", "will study at" or grade.
- **C40. No levels, bars, sizes or order of strength**, as proposed; "Speaks" order as he wrote it. Programming languages not named.
- **C41. One figure in the accessibility tree at a time** (the `display:none` swap does this). Check both SVGs at 390 and 1366 px for clipped text (the vertical tiles at 358 px must fit "Programming languages").

### D5. Share card: pass with changes

- **C42. Use the C9 crop** (248x248 from x 72, y 20) at 360x360 (1.45 times).
- **C43. Text.** Replace "27 AI agents at Web Summit Lisbon 2026" with the brief's line "Brand, partnerships and research" (or "A team of 27 AI agents, 23 running"). Keep "Indi Gupte", "Looking for work experience" and the site address.
- **C44. The validator checks** 1200x630, JPEG, under 300 KB, for every card; `og:image` (absolute), width, height, alt and `twitter:card` on every page, including `/d/<slug>/`, `/ai/`, `/agents/` and `/behind-the-scenes/`.
- **C45. Per-design cards** are optional and follow the same rules; the Briefing card's "IG" seal stays a plain monogram.

### D6. Designs control: pass with changes

- **C46.** Add `aria-haspopup` and `aria-controls` from `/designs.js`, not in the HTML: without the script the control is a plain link to `/d/` and must not announce a dialog.
- **C47.** Close button, list items, "All designs on one page" and "Behind the scenes" links: 44 px targets. Icon-only at 390 px (C2).
- **C48.** Thumbnails are made after the C9 crop is in place, so no thumbnail shows the other person.

### D7. Behind the scenes: pass with changes

- **C49. No person but Indi Gupte and Dinis Cruz named on the page.** Dinis's 09:30 and 09:51 UTC words contain another person's name. Quote them with the name replaced by "[another team member]" and a line saying a name is withheld; do not link or print the model site's address (it contains a name).
- **C50. Commit timeline: names filtered at build time.** Commit 60e27ff's subject names another person. `scripts/behind.mjs` replaces any personal name other than Indi Gupte and Dinis Cruz with "[name withheld]", and the build fails if a name check over `_site/` finds one (the developer proposes the check; the conductor owns the gate).
- **C51. Role pills dark mode** per C11.
- **C52. Round file links**: link to files on GitHub as proposed, but render none of their text on the site unfiltered.
- **C53. Flow SVG and strip chart** as proposed; the strip chart stays `aria-hidden` only because the list carries the same data.

### D8. Inner pages: pass with changes; one item rejected

- **C54. /built/ states his part in each piece of work, each with its source, and keeps his "we":**
  - RiskMandate: his post's line ("What we built this week: RiskMandate: Agent Behaviour Policies ..."); his role, Brand and Partnerships Lead, from November 2026 (LinkedIn); riskmandate.ai does not name him, so do not imply it does.
  - PrompTugal.news: one of the three editors, "What we publish and how it reads" (record section 1).
  - Lisbon Tech Fringe: his post's line; his part per the record, the communities lane and the communities page done by his conductor (https://lisbontechfringe.com/join/). Do not credit him with the 12:57 launch time.
  - Strangers in the Loop: "produced by Indi Gupte" (newsroom, by Dinis Cruz, 15 November 2026). The Spotify link is a plain link.
  - The business cards: C34.
  - OmKneeHealth: his words only ("I'm also working with OmKneeHealth, a London health startup making knee treatment simpler. kneelens.com"); the site does not name him.
- **C55. Background timeline:** dates only as given: Harrow School, September 2021 to June 2026; Harrow Diploma, University of Buckingham, May 2026; SportsHealing Ltd, Operations Manager, from September 2026; RiskMandate, Brand and Partnerships Lead, from November 2026; Web Summit Lisbon, 9 to 12 November 2026 (record, with source); the Oxford entry per C39. Hospitals undated.
- **C56. Looking for:** the four fields per C26 (talk to people in), not "work experience in". The medicine tile may cite hospital volunteering and "three health technology startups" (his summary).
- **C57. "Questions to ask Indi": rejected for round 1.** The questions would speak for him and he has not approved them. Bring them back when Indi approves, through Dinis.
- **C58. How I work:** his three phrases exactly ("company research, design (I designed our business cards), and working every day with a team of AI agents"); his team role in quotation marks with its source.
- **C59. /agents/:** the repository block as proposed; the Copy button is a 44 px target and the prompt stays selectable without the script.

### D9 and D10: pass

No external requests, system fonts only, first-party scripts only, inline SVG, plain Spotify link. The headshot is 19,966 bytes (measured). Print styles as proposed.

### D12. Checks: pass, with three added

- **C60.** Add: (a) a personal-name check over `_site/` (only Indi Gupte and Dinis Cruz); (b) every standalone link and button at least 44x44 px at 390 and 1366 px; (c) every text pair in both schemes at least 4.5:1, and every non-text indicator (focus rings, idle squares) at least 3:1.

## Contrast, computed by the reviewer

WCAG 2.x relative luminance, node script, 18 November 2026. AA needs 4.5 for text, 3 for non-text. The designer's own figures match mine wherever both exist.

| Pair | Colours | Ratio | Result |
|---|---|---|---|
| Main light: ink on bg | `#1B2333` on `#FAF7F1` | 14.71 | pass |
| ink on surface | `#1B2333` on `#FFFFFF` | 15.73 | pass |
| ink on surface-2 | `#1B2333` on `#F6E7D8` | 12.99 | pass |
| muted on bg / surface / surface-2 | `#4D5665` | 6.93 / 7.41 / 6.12 | pass |
| accent on bg / surface / surface-2 / accent-soft | `#1E4D8C` | 7.87 / 8.42 / 6.95 / 7.34 | pass |
| on-accent on accent (button) | `#FFFFFF` on `#1E4D8C` | 8.42 | pass |
| warm on bg / surface / surface-2 | `#9A3B17` | 6.52 / 6.97 / 5.76 | pass |
| on-band on band | `#FFFFFF` on `#1B2333` | 15.73 | pass |
| band-link on band | `#F2C29A` on `#1B2333` | 9.71 | pass |
| focus on bg / surface / surface-2 / accent-soft (non-text) | `#C2410C` | 4.84 / 5.18 / 4.28 / 4.52 | pass |
| band focus on band | `#FDBA74` on `#1B2333` | 9.33 | pass |
| line on bg (decorative only) | `#D9D1C3` on `#FAF7F1` | 1.42 | decorative only |
| Main dark: ink on bg / surface / surface-2 | `#ECE8E1` | 14.69 / 13.19 / 11.62 | pass |
| muted on bg / surface / surface-2 | `#A7B0BD` | 8.19 / 7.35 / 6.48 | pass |
| accent on bg / surface / surface-2 | `#8EB9F0` | 8.84 / 7.93 / 6.99 | pass |
| on-accent on accent | `#0D1420` on `#8EB9F0` | 9.09 | pass |
| warm on bg / surface | `#F0A47F` | 8.82 / 7.91 | pass |
| on-band / band-link on band | `#ECE8E1` / `#F2C29A` on `#0B0F16` | 15.72 / 11.84 | pass |
| focus on bg / surface / surface-2 | `#FDBA74` | 10.64 / 9.55 / 8.41 | pass |
| Briefing light: ink / muted / seal on paper | on `#F7F4EC` | 14.26 / 6.92 / 8.29 | pass |
| Briefing button | `#FFFFFF` on `#13233F` | 15.67 | pass |
| Briefing dark: ink / muted / seal / link on paper | on `#10192A` | 14.27 / 8.31 / 8.14 / 9.42 | pass |
| Briefing dark button | `#10192A` on `#EDE7DA` | 14.27 | pass |
| Lingua: ink / muted on paper | on `#F5EFE3` | 15.08 / 6.72 | pass |
| Lingua: en / it / fr / sa / code | on `#F5EFE3` | 7.35 / 5.69 / 7.31 / 5.47 / 7.68 | pass |
| Lingua button | `#FFFFFF` on `#1F1A14` | 17.27 | pass |
| Front Page: ink / muted / red | on `#FBFAF6` | 18.08 / 7.65 / 6.66 | pass |
| Front Page button | `#FFFFFF` on `#B3121B` | 6.96 | pass |
| Console: text on bg / panel | `#D7E3EA` | 14.61 / 13.41 | pass |
| dim on bg / panel | `#8395A3` | 6.18 / 5.67 | pass |
| green on bg / panel | `#5BD69B` | 10.49 / 9.63 | pass |
| amber on bg / panel | `#F2C14E` | 11.38 / 10.45 | pass |
| Console button | `#0B1016` on `#5BD69B` | 10.49 | pass |
| idle square on bg / panel (non-text) | `#3A4756` | 2.01 / 1.85 | **fail**, C30 |
| panel border (decorative) | `#1F2B38` on `#121A23` | 1.22 | decorative only |
| Card: ink on card / desk | `#1A1A1A` | 17.40 / 14.49 | pass |
| muted on card / desk | `#5B5B5B` | 6.79 / 5.65 | pass |
| accent on card / desk | `#B4471F` | 5.44 / 4.53 | pass (desk only just; keep accent text on the card) |
| back text / small back text | `#FFFFFF` / `#C9D8EE` on `#1E4D8C` | 8.42 / 5.83 | pass |
| Share card: white / `#F2C29A` / `#D7DCE4` on `#1B2333` | | 15.73 / 9.71 / 11.42 | pass |
| Pills on white: `#1F6B3A` / `#4B3F8C` / `#8C2A3B` | on `#FFFFFF` | 6.52 / 8.79 / 8.37 | pass |
| Pills on their 10 % tint over white | six colours | 5.63 to 7.50 | pass |
| Pills on their 10 % tint over dark surface | six colours | 1.74 to 2.31 | **fail**, C11 |
| Dark pill replacements on `#1A2130` | `#93C5FD` `#86EFAC` `#C4B5FD` `#F9A8B4` `#F0A47F` `#A7B0BD` | 8.93 / 11.47 / 8.72 / 8.66 / 7.91 / 7.35 | pass |

Focus colours for the designs are not given in the proposal; each design sets one at least 3:1 on its own backgrounds, for example Briefing `--seal`, Lingua `--en`, Front Page `--red`, Console `--amber`, Card `--accent` (front) and white (back).

## Layouts at 390 and 1366 px

- 390 px: the plan meets the first-screen rule on every page provided C2, C4 and C35 hold. Header height about 144 px (two-line band plus bar 2) leaves room for kicker, h1, lede and the "what he did" strip on a 390x844 screen.
- 1366 px: C3 must be measured. Margin notes in columns 9 to 12 with text in 1 to 7 are sound. The Card at 680x440 and the Console grid at 56 px squares fit.
- No horizontal scroll at either width; the live review checks it.

## Claims in the proposal that rest on facts not in the brief or the record

1. "worked with a team of 27 AI agents at Web Summit Lisbon 2026 on RiskMandate, PrompTugal.news and Lisbon Tech Fringe" (opening, D1.2, D1.4): the record does not say the 27 worked on those three; his Fringe agent is outside the 27; four never ran. C5.
2. The Front Page headline "Student who worked with 27 AI agents at Web Summit ...". C25.
3. "WANTED: work experience. Languages, AI, medicine or diplomacy." (D3.3): he names those as fields he would talk to people in, not as fields for work experience. C26.
4. "from the person who designed the team's cards" and "he designed the team's business cards" (D3.5, D3.7) in the site's voice. C34.
5. "Shipped" (D3.4): the sources say "built"; the education idea is "not yet built". C31.
6. "BRIEFING NOTE · 18 NOVEMBER 2026" reads as a dated event about him. C17.
7. The 240x240 crop "keeps Indi's face centred": it cuts off his chin. C9.
8. "I would like to talk to people in ..." (D1.4 placeholder): a paraphrase of "glad to talk to"; fine as the site's words, never as a quote. C6.
9. About the model sites (internal only, never on a public page): "Model A prints poorly in places", and "Model A tells her project in prose". Not checked; do not repeat them anywhere public.
10. "Photo used with his agreement": supported by the brief (headshot added "with his agreement"). No change.

## Decisions for Dinis or Indi (reviewer's view)

1. Default design: The Briefing, pending Dinis (conductor decision). Agreed on readability grounds.
2. Crop: settled by C9; Indi's word or a new photo would still be better.
3. Questions to ask Indi: rejected for round 1 (C57).
4. Front Page headline and Lingua glosses: within C25 and C21, marked as awaiting Indi's approval.
5. New: **the public repository names other people.** `team/BRIEF.md`, `team/WORKFLOW.md`, the proposal's model-site addresses and commit 60e27ff name people other than Indi and Dinis. The site's pages can be kept clean (C49, C50), but Dinis asked for the repository to be linked from every page. The conductor should put this to Dinis: accept, or redact those files and the commit subject going forward.

## Ambition: would this beat the model site?

On craft and rules, yes: sources beside each claim, a print layout, no-JavaScript fallbacks, dark mode, a designed languages figure and an honest crop. On substance, not yet. The model's home page (read 18 November 2026) opens with four sourced number tiles, a "Hiring for" switch that maps each target role to evidence, a day-by-day strip of the ten days, the named agent roster with what each does and its commits, and "three decisions". This proposal draws unnamed squares, says "no times are given", keeps the reserve notebook design back for lack of dates, and leaves out several sourced pieces of his work.

The three things that would most lift it:

1. **Use the record the researcher found.** The education idea (his two-page brief of 4 November 2026, and Dinis's "we should definitely do it", https://web-summit.sgit.ai/people/indi/education/index.md), the factory of company pages, his team role ("The message, outreach, and the factory of examples"), the named roster of 27 agents with what each does and its commits, the 19 follow-ups ready, about 200 of each of three printed cards. Each with its source. This is the gap between this proposal and the model.
2. **A dated strip of the ten days** from sourced dates only: 2 November named on the team's site; 4 November education brief and his card vote; 5 November joins in person and printed design chosen; 9 to 12 November Web Summit; 10 November the summit calls off its second day (Storm Charles); 11 November the Fringe guide live; 14 November Strangers in the Loop released (derived from the newsroom). It answers "what did he do" in one look, and it makes the Field Notes design possible.
3. **An evidence switch on the home page**, by the fields he names (languages, AI, medicine, diplomacy) or by "What I bring" (research, design, agents): choose one and the page shows the sourced facts for it, as the model does for target roles. It works as plain sections without JavaScript.
