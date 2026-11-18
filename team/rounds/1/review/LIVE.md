# Round 1 live review

Written by reviewer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Reviewed: the live site https://indi-gupte.agenticcells.site, v0.1.4 (footer), commit 55bc174, read between about 10:30 and 10:50 UTC. Against: `team/BRIEF.md`, `team/WORKFLOW.md`, `CLAUDE.md`, `team/reviewer/POLICY.md`, my conditions C1 to C60 in `team/rounds/1/review/DESIGN.md`, `team/rounds/1/build/NOTES.md`, `data/facts.mjs` and `data/sources.md`. No `board/HOLD.md` existed at any step.

## Verdict

**The rules of the brief hold on the live site; five of my conditions fail and go back to the developer and writer for round 2.** No person is named but Indi Gupte and Dinis Cruz (pages, data files and the screenshots of his work); no email or phone; one photograph of him, cropped as C9 asks; every fact I spot-checked (27) matches its source; his post is quoted exactly. The failures are one wording claim that my conditions forbid (C5: the 27 agents tied to Web Summit, and "ran 27 AI agents, 23 of them running"), small targets (C7, C12), a missing label on three designs (C39) and clipped text in the Lingua figure (C41). Against the model site, this site is better sourced, more accessible and works better on a phone, but its home page's first screen and its five designs are plainer, and the five designs do not yet look "very different" from each other (Dinis, about 10:03 UTC).

## How I checked

- **Screenshots**: `node scripts/shots.mjs --max-height=6000 https://indi-gupte.agenticcells.site team/rounds/1/review/shots` with the 15 paths of the brief, at 390 and 1366 px (30 files in `shots/`, re-encoded at JPEG quality 40 to keep the folder at 8 MB). I looked at every one, as first screens and as whole pages. Also `shots/dialog-home-1366.jpg` and `shots/dialog-console-390.jpg` (the designs pop-up open).
- **Playwright** (Chromium, Linux): the designs dialog on `/`, `/d/console/` and `/d/lingua/` at both widths; per page at both widths: horizontal overflow, the visible GitHub link in the header, share meta, `mailto:`/`tel:`, email and phone patterns, U+2014, target sizes, Tab focus styles; text contrast in light and dark scheme computed from the rendered page (WCAG 2.x, every text node against its effective background).
- **Crawl**: a node script from `/` following every internal `href` and `src`: 74 internal URLs, all 200; 97 external links fetched, none failed (the two LinkedIn links were not fetched: no scraping of LinkedIn).
- **Names**: every capitalised word pair in all 16 pages, `/llms.txt`, `/index.md`, `/questions.md`, `/facts.json`, `/data/agents.json`, `/designs.json` and `/behind-the-scenes/rounds/1/`; every `@` address; and the validator's own name hashes (from `scripts/validate.mjs`, read, not changed) run over the same 23 files: 0 hits.
- **Sources**: 20 source pages fetched with curl on 18 November 2026 and searched for the exact words the site uses (table below).
- Tools only; no file outside `team/rounds/1/review/` changed.

## Conditions, pass or fail

| Id | Result | Evidence |
|---|---|---|
| C1 | pass | GitHub mark link in the header at 390 px, 44x44, name "Source code on GitHub", on all 15 pages; "Source" 91x44 at 1366. |
| C2 | pass | Bar 2 on one row at 390 (avatar, name, Menu, GitHub, Designs icon 44x44); overflow 0 on every page. |
| C3 | pass | One row at 1366 on every page (`fs` shots): eight links, Source, Designs. |
| C4 | pass | Every page and every `/d/<slug>/` has the ask band "Looking for work experience", "Message me on LinkedIn", the full nav (Menu at 390), Source and Designs in the first screen at 390. |
| C5 | **fail** | Home lede: "At Web Summit Lisbon 2026 he worked with a team of 27 AI agents, and he is looking for work experience." (also in Front Page body and `/index.md`); `/how-i-work/` lede: "At Web Summit Lisbon 2026 Indi ran 27 AI agents, 23 of them running" (says he ran the four that never ran); Lingua and `/looking-for/` AI tile: "a team of 27 AI agents at Web Summit Lisbon 2026". C5 and C25 forbid tying the 27 to Web Summit work. Use "a team of 27 AI agents, 23 running" or his words "working every day with a team of AI agents". |
| C6 | pass | Only his post and his summary are in quotation marks as his words; site copy is unquoted. |
| C7 | **fail** | Standalone links under 44 px tall: the strip under each h1 ("27 AI agents, 23 running", "RiskMandate", "PrompTugal.news", "Lisbon Tech Fringe", "Web Summit Lisbon 2026") is 32 px tall on 9 pages at both widths; the three `<summary>` rows on `/behind-the-scenes/` ("Round 1 (10 commits)" and two more) are 27 to 29 px; the five h3 links in "What he built" on `/` are 42 px at 390. Header, buttons, Copy (67x44), dialog Close (72x44), footer links pass. |
| C8 | pass | `/ai/`: refresh to `/agents/`, canonical `/agents/`, links to `/agents/` and the repository, full share meta. `/llms.txt` and `/index.md` name the repository. |
| C9 | pass | Every use of the photo (header avatar, heroes, ask panel, share cards, previews) shows the crop; no other person visible in any shot. |
| C10 | pass | Largest display about 240 px. |
| C11 | pass | Dark scheme `/behind-the-scenes/`: no text pair under 4.5 (computed). |
| C12 | **fail** | Note numbers are 18 px wide and 19 to 26 px tall (all pages); C12 asks at least 24x24. |
| C13 | pass | Body links underlined in both schemes. |
| C14 | pass | Not running drawn dashed in `--muted`, with "not running" text and a legend. |
| C15 | pass | Business cards drawn as blank outlines; the Fringe drawing has no hour marks. |
| C16 | pass | Every square named (`<title>` and labels), four marked not running, legend with source and read date; 277 always with "3 to 13 November 2026"; 309 not shown. Long names are cut ("conductor-newsa...", "conductor-abpma..."): see lifts. |
| C17 | pass | "Briefing note · facts read 18 November 2026". |
| C18 | pass | Post quoted on `/` and `/built/` from "Hi all" to "know someone who might..."; all seven sentences match `team/BRIEF.md` (script). |
| C19 | pass | "His part:" line with sources under each piece on `/`. |
| C20 | pass | |
| C21 | pass | Glosses shown are those I checked ("Cosa ho costruito", "Ce que j'ai construit", "Cerco un'esperienza di lavoro", "Je cherche une expérience professionnelle", and for the other sections "Ambiti di cui vorrei parlare", "Domaines dont j'aimerais parler", "Percorso", "Parcours", "Lingue", "Langues", "Fonti", "Sources", "In breve", "En bref"); all correct and plain; `lang="it"` and `lang="fr"` set. |
| C22 | pass | "Italian and French section titles are the site's translations, not his words. They await Indi's approval." |
| C23 | pass | Speaks: English, Italian, French only. |
| C24 | pass | संस्कृतम् renders at 390 and 1366 (Linux Chromium); `lang="sa"`, `aria-hidden`. iOS, Android, Windows not tested. |
| C25 | pass | Headline: "Indi Gupte, one of the three editors of PrompTugal.news, is looking for work experience". (The body under it breaks C5.) |
| C26 | pass | "Wanted: work experience. Glad to talk to people working in languages, AI, medicine or diplomacy. Reply via LinkedIn." |
| C27 | pass | "By the numbers" with sources and window. |
| C28 | pass | Masthead "Indi Gupte"; no PrompTugal.news styling. |
| C29 | pass | Dateline link 230x44; LinkedIn 262x44. |
| C30 | pass | Not running outline `#8395A3` (5.67 on panel). |
| C31 | pass | "what we built this week", no timestamps. |
| C32 | pass | |
| C33 | pass | Pulse 2.4 s; `prefers-reduced-motion` turns all animation off (`/style.css`). |
| C34 | pass | Card line: "A business card, front and back. In his words: "I designed our business cards"."; `/built/` gives the record with sources, no comment. |
| C35 | pass | No undersized target on `/d/card/` at 390 (script). |
| C36 | pass | `.back{--focus:#fff}`. |
| C37 | pass | |
| C38 | pass | |
| C39 | **fail** | "as his profile lists it" missing where the Oxford entry appears in Lingua (Background list), Agent Console (background) and The Card ("University of Oxford, Modern Languages, Italian and Portuguese (2027)."). Present on `/` and `/background/`. |
| C40 | pass | No levels; programming languages not named. |
| C41 | **fail** | Lingua at 1366: the languages figure in the hero clips its source line at the right edge: "...Solid tiles: languages he speaks. Da" (the rest, "Dashed tiles: his interests...", is cut). Crop: `shots/d_lingua-1366.jpg`, x 690 to 1366, y 390 to 470. The figure's labels are also about 9 to 10 px at that size. |
| C42 | pass | All six cards use the crop. |
| C43 | pass | Cards say "Looking for work experience" and "Brand, partnerships and research" (Console: "A team of 27 AI agents, 23 running"; Lingua: "English · italiano · français"). |
| C44 | pass | All 16 pages (with `/d/briefing/`): absolute `og:image`, width 1200, height 630, `og:image:alt`, `twitter:card summary_large_image`, description. Six cards fetched: all 200, `image/jpeg`, 1200x630, 52,481 to 58,623 bytes. |
| C45 | pass, one flaw | The Briefing card's "IG" seal overlaps the photo frame so the "I" is half hidden (`/assets/share/briefing.jpg`). |
| C46 | pass | Without JavaScript the control is `<a href="/d/">` with no `aria-haspopup`; with it, `role="button"`, `aria-haspopup="dialog"`, `aria-controls="designs"`. |
| C47 | pass | Close 72x44, list items 346x308, "All designs on one page" and "Behind the scenes" 44 tall. |
| C48 | pass | No preview shows the other person. |
| C49 | pass | Dinis's words with "[another team member]" and a line saying a name is withheld; model site address not printed. |
| C50 | pass | Name hashes over all pages and data files: 0 hits. |
| C51 | pass | |
| C52 | pass | `/behind-the-scenes/rounds/1/` shows the round file filtered (no names found). |
| C53 | pass | |
| C54 | pass | His part per piece, with sources; "we" kept. Front Page says the Fringe site "went live at 12:57" as the team's work, not his: acceptable. |
| C55 | pass | |
| C56 | pass | |
| C57 | pass | No "Questions to ask Indi" section. Note: `/questions.md` (questions for Indi's own AI, linked from `/agents/`) publishes the team's open questions to him, including "Do you approve the 'Questions to ask Indi'". It names no one and speaks for no one, so it passes, but it is internal work on a public page; see must-fix 6. |
| C58 | pass | His three phrases exact; team role in quotation marks with its source. |
| C59 | pass | Copy buttons 67x44; prompts are text without the script. |
| C60 | not checked live | The live site passes (a); (b) and (c) fail live (C7, C12). Whether the gates check (b) and (c) is for the conductor to confirm in `scripts/validate.mjs`. |

## Rule checks the brief asked for

| Check | Result | Evidence |
|---|---|---|
| Quotes of Indi exactly as in `team/BRIEF.md` | pass | Post: script compared every sentence on `/`, `/built/`, `/d/front-page/` (Front Page quotes the first two sentences only, as a whole sentence). Also exact: "I designed our business cards", "I'm looking for work experience. If you have an opening, or know someone who might...", "I'm also working with OmKneeHealth, a London health startup making knee treatment simpler.", "where languages, judgement and tact meet" (his summary). "Your agents. Your rules." matches his line on the team's Meet page. |
| No person named but Indi Gupte and Dinis Cruz | pass | Text, data files, `@` addresses (only `*.AgentiCCells.dinis` and `*@web-summit.indi`), name hashes; and I looked at the eight images in `/assets/work/` (card rounds 2 and 4, the gap sticker, the sticker sheet, the newsroom map, his schedules page, the education brief): they name only Indi and Dinis Cruz. The education shot's text says "Ask for Indi" and "Dinis Cruz read and said...". |
| No target-company or prospect names | pass | No factory or company-page shot is used; the schedules shot shows a "Companies" tab with no company names; text names only RiskMandate, PrompTugal.news, Lisbon Tech Fringe, OmKneeHealth, SportsHealing Ltd, Web Summit, his school and universities, and tools (GitHub, Spotify, LinkedIn, Harvard's CS50x, Claude Code on the behind-the-scenes page). |
| No email or phone | pass | No `mailto:` or `tel:`; no email or phone pattern in any page text (agent addresses only). Footer: "No email or phone: please use LinkedIn." |
| Designs pop-up | pass | On `/`, `/d/console/`, `/d/lingua/` at 390 and 1366: Enter or click opens a modal `<dialog>` (`:modal` true), labelled by its heading, focus on the heading, five list items with five previews; Escape closes it and focus returns to the Designs button. One flaw: the previews are lazy-loaded, so 300 ms after opening, one or more previews were still blank (The Card in `shots/dialog-home-1366.jpg`). |
| GitHub link in the top nav | pass | Visible in the header of all 15 pages at both widths, including `/agents/`; `/ai/` is a redirect page with no header but links the repository in its body and redirects at once. |
| Share card meta, images open, under 300 KB | pass | See C44. |
| Contrast of main text pairs (computed on the live CSS) | pass | Light: ink `#1B2333` on `#FAF7F1` 14.71, muted `#4D5665` 6.93, warm `#9A3B17` 6.52, accent `#1E4D8C` 7.87; Briefing `#13233F` on `#FFFDF8` 15.42; Lingua `#1F1A14` on `#F5EFE3` 15.08; Front Page `#111111` on `#FBFAF6` 18.08, red `#B3121B` 6.66; Console `#D7E3EA` on `#121A23` 13.41, dim `#8395A3` 5.67; Card `#1A1A1A` on `#EDEAE3` 14.49, `#5B5B5B` 5.65. Dark: `#ECE8E1` on `#121721` 14.69, muted 8.19, accent 8.84; Briefing `#EDE7DA` on `#16213A` 12.98. No text pair under 4.5 on 12 pages in either scheme (the one flagged, the white "Watch the video on LinkedIn" title, sits on a dark gradient the script cannot read; visually it is white on dark navy). Four designs keep their own light or dark palette in both schemes. |
| Horizontal overflow at 390 | pass | 0 px on all 15 pages (wide tables scroll in their own box). |
| Keyboard focus visible | pass | `:focus-visible{outline:3px solid var(--focus);outline-offset:2px}` on every element tabbed; per design `#C2410C`, Briefing `#8C1D18`, Lingua `#1E4D8C`, Front Page `#B3121B`, Console `#F2C14E`, Card `#B4471F`, white on the card back. A skip link exists. |
| Links not broken | pass | 74 internal URLs 200, 97 external fine. |
| Em dashes, hype words | pass | No U+2014 in any page or data file. "passionate" appears only in "He describes himself as a student passionate about languages" (his summary, attributed). |

## Facts against sources (27 checked, all match)

Fetched with curl on 18 November 2026.

| Fact on the site | Source | Found |
|---|---|---|
| "27 agents (23 running)" | https://web-summit.sgit.ai/people/indi/index.md | yes |
| conductor 90 commits, last 16 November | same | yes ("90 commits, last 2026-11-16 13:37 UTC") |
| "The message, outreach, and the factory of examples" | https://web-summit.sgit.ai/team/indi/index.md | yes |
| "Make sure the message makes sense everywhere, and build the examples we send to every company we go for." | same | yes |
| "That what we say about RiskMandate makes sense, and is the same on every page and in every draft." | https://web-summit.sgit.ai/brief-indi/index.md | yes |
| "Indi can do a lot of it." | same | yes |
| "The vaults and examples for every company we reach out to" | same | yes |
| remote until Thursday 5 November | same | yes |
| "Your agents. Your rules." | https://web-summit.sgit.ai/meet/index.md | yes |
| Web Summit Lisbon, 9 to 12 November 2026; booth A1-30; "23 agents running" | https://web-summit.sgit.ai/index.md | yes |
| "love R2-1 Seal, like R2-4 Boardroom" | https://web-summit.sgit.ai/design/index.md | yes |
| Design A for printing; 85 x 55 mm; about 200 | https://web-summit.sgit.ai/cards/index.md | yes |
| "we should definitely do it"; "not yet built"; 4 November | https://web-summit.sgit.ai/people/indi/education/index.md | yes |
| 277 commits, between 3 and 13 November | https://newsroom.sgit.ai/articles/ten-days-at-web-summit.md | yes ("Indi's 277") |
| "communities and organisers" | same | yes |
| Web Summit called off its second day at 19:09 on 10 November | same | yes |
| Fringe live at 12:57, app out for testing at 21:11 | same | yes |
| "produced by Indi Gupte" | https://newsroom.sgit.ai/articles/every-hour-is-twenty-years.md | yes |
| "I helped a little with the lyrics, but it is mainly his" (Dinis Cruz) | same | yes (the site closes the quotation with a full stop the source does not have there: trivial) |
| Second song, released the next day | same ("two songs", "released the next day") | yes |
| One of three editors | https://promptugal.news/index.md | yes |
| "What we publish and how it reads." | https://promptugal.news/about/index.md | yes |
| "to map the universe of AI in Portugal" | same | yes |
| Listed on the board | https://promptugal.news/about/board/index.md | yes |
| RiskMandate: an Agent Behaviour Policy per agent | https://riskmandate.ai/index.md | yes |
| "An independent guide to the side events around Web Summit Lisbon." / "Wednesday 11 November" / "communities (Indi)" | https://lisbontechfringe.com/, /storm/, /join/ | yes |
| kneelens.com serves OmKneeHealth | https://kneelens.com/ | yes |

Facts from his LinkedIn PDF and his WhatsApp post were checked against `team/BRIEF.md` (headline, dates, education, summary phrases): all match. The source pages name other people; the site does not repeat them.

## Against the model site

I looked at the model site's home page and `/d/` at 390 and 1366 px on 18 November 2026 (screenshots kept outside the repository, since the model site names its owner).

**Where this site is better**

- Sourcing: every claim has a numbered note with the source and the date read, and `/sources/` lists all 28. The model cites but not as consistently.
- Phone: no horizontal overflow on any page at 390; the model's `/d/` overflows by 310 px at 390.
- The designs dialog: modal, labelled, focus managed, Escape and focus return, works without JavaScript as a link.
- Data: four agent charts with tables, readings worked out from the data, and `/data/agents.json`; dark mode throughout; reduced motion respected.
- Rules: no email published (the model has an email button; this brief forbids one), the repository linked from every header, Use with AI with copyable prompts.
- Behind the scenes: commit timeline, roles, flow and round pages.

**Where it falls short**

- **First screen of the home page.** The model opens with one composed hero: a large framed photo with a small caption tag, the name in large display type, a one-line voice ("Set the standard. Hand out the work. Check the result."), three buttons, and four stat tiles at the fold. Here, at 1366 the photo is a small tile in the corner and the first screen is a label, the name, footnote numbers stuck to the subtitle ("West London 25 1"), a beige Purpose box and a paragraph ending in "(23 running 4 6 7 )". At 390 the photo is below the fold. There is no number, no picture of his work and no line in his voice above the fold.
- **One idea that holds the page together.** The model frames her agents as a kitchen brigade ("the pass"), and the agent diagram, tickets and copy all use it. Here the agent grid is a set of identical rounded rectangles in category rows; it informs but does not show how his team worked.
- **The five designs are not "very different".** All five keep the same ask band and site bar on top, so in the dialog the five previews share their top third. Lingua looks like the main site with a languages figure moved up; its Italian and French appear as small grey glosses beside the English headings. The Card is a white card with a large empty middle, followed by the same long document as the other pages. Agent Console and Front Page are the most distinct.
- **His work is shown late.** The best visual material (his card rounds, the gap sticker, the sticker sheet, the schedules page) sits halfway down `/built/`. The model puts a picture in the first screen.
- **Clutter**: the five-link strip repeats under every h1 (and fails C7); superscript runs like "19 20 21 22 12 14" after one sentence; cut agent names in the grid.

## Round 2: must fix (failures)

1. **C5, wording** (writer, then developer): replace "At Web Summit Lisbon 2026 he worked with a team of 27 AI agents" (`/`, Front Page, `/index.md`), "Indi ran 27 AI agents, 23 of them running" (`/how-i-work/`), and "a team of 27 AI agents at Web Summit Lisbon 2026" (Lingua, `/looking-for/`) with "a team of 27 AI agents, 23 running" (with its source) or his words "working every day with a team of AI agents". Bring the seven `data/facts.mjs` fields listed in `team/rounds/1/build/NOTES.md` into line in the same change.
2. **C41**: the Lingua hero figure clips its source line at 1366. Let the caption wrap outside the SVG, or widen the figure; labels at least 12 px.
3. **C7**: the strip links under each h1 (32 px) and the `<summary>` rows on `/behind-the-scenes/` (27 to 29 px) to `min-height:44px`; the "What he built" h3 links on `/` from 42 to 44 px. (Or drop the strip: lift 6.)
4. **C12**: note references at least 24x24 px (padding on the `<a>`, not the line).
5. **C39**: add "as his profile lists it" to the Oxford entry in Lingua, Agent Console and The Card.
6. **`/questions.md`** (conductor to decide): it publishes the team's open questions to Indi on the public site. Keep it in `team/` until Indi has answered, or retitle it so a visitor cannot read it as Indi's words.
7. Smaller: load the five dialog previews eagerly (one was blank after opening); move the "IG" seal on the Briefing share card off the photo frame.

## Round 2: lifts (the seven that would most improve it)

1. **A first screen built around him and his work.** At 1366: photo at about 300 px in a frame with its caption ("Photo used with his agreement"), the name large, "Brand, partnerships and research", one line in his words ("What I bring: company research, design, and working every day with a team of AI agents"), the two buttons, and a row of three sourced figures (27 agents, 23 running; 277 commits, 3 to 13 November; one of three editors of PrompTugal.news). Move every note number off the name and subtitle into the lede's end. At 390: the photo above the fold, beside the name at about 96 px.
2. **Show his work in the first two screens.** A strip of three of his pictures (card round 4, the gap sticker, the schedules page) under the hero, each linking to its entry on `/built/`. These are the strongest things on the site and need no words.
3. **Make the five designs look five ways apart.** Let each design restyle the ask band and site bar in its own palette and type (C4 needs the items, not the same look): Lingua with a tricolour ruled band and its headings set large in three languages side by side; Front Page with a black masthead rule and a red ask line; Console as a terminal status bar; The Card as a desk with the card at full width and the rest folded behind "Turn over"; The Briefing as a paper sheet with a classification line. Then make new previews: the dialog will show the difference at a glance.
4. **The Card: fill the card.** Put the photo, name, role, "Looking for work experience" and LinkedIn on a properly proportioned front (85:55 at 1366), the "What I bring" three phrases on the back, and move the long document under a plain "More" link, so the design is the card and not a page with a card on top.
5. **A dated strip of his ten days** (proposed in DESIGN.md, still missing): 2 November named on the team's site; 3 November the factory; 4 November the education brief and his card vote; 5 November joins in person, printed design chosen; 9 to 12 November Web Summit; 10 November the second day called off; 11 November the Fringe guide; 14 November Strangers in the Loop (derived). One line of sourced dates on the home page answers "what did he do" in one look.
6. **Cut the repeated strip under every h1** and put those five links once, in the footer or on `/built/`. It costs a line of height on every page and fails C7.
7. **Draw his team as a team.** Replace the grid of identical boxes with one figure: his conductor in the centre, the groups around it, size by commits, dashed for not running, and the line "His agents draft; he sends every message" as its caption. Keep the table. Show full agent names (wrap, or a smaller size) instead of "conductor-newsa...".
