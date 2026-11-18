# Round 2 live review

Written by reviewer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Reviewed: the live site https://indi-gupte.agenticcells.site, v0.1.9 (footer), commit cbac649 (`/version.json`: `cbac64958fb2...`, built 11:19 UTC), read between about 11:20 and 11:30 UTC. The live home page matches the local build of cbac649 except the version line. Against: `CLAUDE.md`, `team/reviewer/POLICY.md`, `team/rounds/2.md`, my conditions C61 to C84 (`team/rounds/2/review/DESIGN.md`), the round 1 must-fix list (`team/rounds/1/review/LIVE.md`), `team/rounds/2/build/NOTES.md`, `data/facts.mjs`. No `board/HOLD.md` existed at any step.

## Verdict

**Round 2 passes. Every round 2 condition (C61 to C84) and every round 1 must-fix holds on the live site, with three small flaws that do not break a rule** (Front Page header ears focus in the Briefing red, not the Front Page red; stale "Leads with" lines on `/d/`; share cards that do not show the new designs). The brief's rules hold: no person named but Indi Gupte and Dinis Cruz, no target company, no email or phone, one photograph of him, his words exact, and all 22 facts I checked (every `TEN_DAYS` entry among them) match their sources. Four of the five designs now look plainly different from each other; **Lingua still looks too much like The Briefing** in its first screen. Against the model site, this site is now at least as good on the first screen and better on sourcing, phone layout and accessibility.

## How I checked

- **Screenshots**: `node scripts/shots.mjs https://indi-gupte.agenticcells.site team/rounds/2/review/shots --max-height=4000 / /built/ /how-i-work/ /d/ /d/lingua/ /d/front-page/ /d/console/ /d/card/` (16 files, no overflow warning). Also `shots/dialog-home-1366.jpg`, `shots/dialog-console-390.jpg` (dialog open), `shots/card-back-390.jpg` (The Card turned over), `shots/home-dark-1366.jpg` (dark scheme). I looked at every one, as first screens and down the page.
- **Playwright** (Chromium, Linux) on all 16 HTML pages at 390 and 1366: horizontal overflow, GitHub link in the header, share meta, `mailto:`/`tel:`, U+2014, standalone targets under 44 px and note references under 24x24, Tab focus outline colour; the designs dialog on `/`, `/d/console/`, `/d/card/`, `/d/lingua/` at both widths; The Card's Turn over at 390; the Console cursor animation.
- **Crawl**: every internal `href` and `src` from `/`: 123 internal URLs, all 200.
- **Names and companies**: capitalised word pairs, `@` addresses and the first names of the other team members (read from the sources) across the 16 pages, `/llms.txt`, `/index.md`, `/questions.md`, `/facts.json`, `/designs.json`, `/data/agents.json`; the 31 company names of the factory index (`web-summit.sgit.ai/people/indi/factory/index.md`, read, not repeated here) over the same files. `node scripts/validate.mjs` OK; `node data/facts.mjs` exit 0.
- **Sources**: 13 source pages fetched with curl and searched for the site's words (table below).
- Only `team/rounds/2/review/` changed.

## Round 2 conditions

| Id | Result | Evidence |
|---|---|---|
| C61 | pass | Tile labels are `HOME_FIGURES[].label` verbatim ("commits by his agents on the team's site, 3 to 13 November 2026", "AI agents in his team, 23 running"); `text` in a visually hidden span, the visible number and label `aria-hidden`. |
| C62 | pass | Rows at 390; the third tile's "1 of 3" and "editors of PrompTugal.news" are inside 844 px (`home-390.jpg`); its source line falls below, as allowed. |
| C63 | pass | Tile links go to `#src-ws-people-indi`, `#src-news-ten-days`, `#src-promptugal-about`; none under 44 px (script). |
| C64 | pass | Captions "4 to 5 November, his designer agent", "4 November, his designer agent", "8 November, his conductor agent". |
| C65 | pass | One row at 1366: logo, eight links, Source, Designs (`home-1366.jpg`). |
| C66 | pass | Back: "What I bring" with note 1, his three phrases (exact substrings of his line), "A team of 27 AI agents, 23 running · 277 commits, 3 to 13 November 2026", "English · Italiano · Français". No "Web Summit Lisbon 2026" on either face (it appears only as a separate footer link). |
| C67 | pass | No RiskMandate mark on either face; line under the card: "His personal card, not a RiskMandate card." |
| C68 | pass | Front LinkedIn link 218x44 at 390, 278x44 at 1366, plain `https://`. |
| C69 | pass, one flaw | Outline 3 px: Briefing `#8C1D18`, Lingua `#1E4D8C`, Console `#5BD69B`, Card `#F2B38F`, Front Page `#B3121B` on 21 of 23 tab stops. The Front Page ears ("Wanted", "Reply via LinkedIn") use `#8C1D18`; it still passes 3:1 on `#FBFAF6`, but is not the colour set. |
| C70 | pass | Dark scheme home (`home-dark-1366.jpg`): tiles, buttons, band and rules all legible; ratios as listed in the build notes (not recomputed). |
| C71 | pass | `.cursor` animation `blink 1.2s`, 4 iterations (4.8 s), then stops; reduced motion turns it off (build CSS). |
| C72 | pass | Lingua figure wide at 1366 with caption and source line whole (`d_lingua-1366.jpg`); vertical at 390. |
| C73 | pass | Strip has the 16 `TEN_DAYS` entries only; nine of eleven days have entries. |
| C74 | pass | "Sat 7" and "Sun 8": day label and outline mark, no text. |
| C75 | pass | Strip text is `TEN_DAYS[].label`; no column past about ten lines at 1366. |
| C76 | pass | One note reference per source per entry, at most three per entry. |
| C77 | pass | "23:30", "19:09", "12:57", "21:11" with no "UTC"; line "Times as the sources give them; no time zone stated." present; "07:20, 12:20 and 17:20 GMT" keeps GMT. |
| C78 | pass | 14 November in a line under the strip, "date derived" with its reason and source; kind shown in words ("his work", "the team", "the event"). |
| C79 | pass | Per-agent counts only; the only total is 277 with its window. |
| C80 | pass | Full names, no `mailto:`; "conductor-" / "newsapp" breaks at the hyphen (`how-i-work-1366.jpg`); validator OK. |
| C81 | pass | Bars dark on light tiles and light on Console panels, well above 3:1 by eye and by the build's figures. |
| C82 | pass | No strip under any h1; footer "His work" column; no footer link under 44 px. |
| C83 | pass | "N sources" chips 71 to 88 x 24; the popover lists every source by number and title (6 on the Fringe claim). |
| C84 | pass | See C5 and C39 below. |

## Round 1 must-fix

| Item | Result | Evidence |
|---|---|---|
| 1. C5 wording | pass | None of the three forbidden phrasings is on any page or data file; every "27" reads "a team of 27 AI agents, 23 running". |
| 2. C41 Lingua figure clipped | pass | See C72. |
| 3. C7 targets | pass | No standalone link, button or summary under 44 px on any page at either width. Links inside running text, the `/built/` "Source" lines and the `/sources/` titles are 16 to 21 px tall but sit in sentences or list text, as in round 1. |
| 4. C12 note size | pass | Every note reference at least 24x24 (script, 16 pages, both widths). |
| 5. C39 Oxford | pass | Every page that shows the Oxford entry (home, `/background/`, `/languages/`, Lingua, Console, The Card, `/index.md`) says "as his profile lists it". |
| 6. `/questions.md` | pass (conductor's decision) | Opens "For Indi's own AI assistant: ask him these one at a time..."; it cannot be read as his words. |
| 7. Previews, seal | pass | Five previews painted 300 ms after opening at both widths on four pages (5/5); the Briefing share card's seal sits clear of the photo. |

## The brief's rules

| Check | Result | Evidence |
|---|---|---|
| No person but Indi Gupte and Dinis Cruz | pass | Name pairs found: Indi Gupte, Dinis Cruz, and non-person names (Web Summit, Lisbon Tech Fringe, Harrow School, Storm Charles (a storm), Claude Code, Agent Behaviour Policies). No other team member's name. `@` addresses: only `*@web-summit.indi` and `*@AgentiCCells.dinis`. The three work pictures show no person and no other name. |
| No target companies | pass | None of the 31 factory company names appears on any page or data file. |
| No email or phone | pass | No `mailto:` or `tel:`; no address or number pattern (number-like hits are SVG view boxes). Footer: "No email or phone: please use LinkedIn." |
| One photograph | pass | Only `/assets/indi-gupte.jpg` (the crop) and images made from it (share cards, previews; Front Page shows it in black and white). |
| His words exact | pass | Post on `/` and `/built/`: 11 of 11 sentences match `team/BRIEF.md` (script). His line on the first screen, Lingua and the Card back phrases are exact. |
| Em dashes, hype words | pass | No U+2014 in any page. |

## Facts against sources (22 checked, all match)

Fetched with curl, 18 November 2026, about 11:22 UTC.

| Fact on the site | Source | Found |
|---|---|---|
| TEN_DAYS 3 Nov: the team's ten days begin | news-ten-days | "Between 3 and 13 November 2026" |
| TEN_DAYS 3 Nov: conductor's schedule 07:20, 12:20 and 17:20 GMT | ws-everything | "07:20, 12:20 and 17:20 GMT ... from 3 November" |
| TEN_DAYS 3 Nov 23:30: developer agent opens the factory at his go | ws-brief-indi | "3 November, 23:30 (dev@web-summit.indi, at Indi's go)" |
| TEN_DAYS 4 Nov: two-page brief, education and children | ws-brief-indi, ws-education | "Indi wrote a two-page brief on 4 November" |
| TEN_DAYS 4 Nov: votes on round 2 cards, chooses his card | ws-design, ws-cards | "Indi (2026-11-04): ... love R2-1 Seal"; "The card Indi chose on 4 November" |
| TEN_DAYS 5 Nov: joins in person | ws-brief-indi | "Remote until Thursday 5 November, when Indi joins us." |
| TEN_DAYS 5 Nov: Design A, three audience cards, about 200 each | ws-cards | "Design A, chosen by Dinis on 5 November"; "about 200 of each card" |
| TEN_DAYS 6 Nov: mentor hands over; four agents, two days, no prompt | ws-people-indi | "2026-11-06-0841 ... a handover"; "conductor, dashboard, dev and accountant agents ran every scheduled slot for two days without a prompt" |
| TEN_DAYS 9 Nov: Web Summit opens, 9 to 12 November | ws-home | "Web Summit Lisbon (9 to 12 November 2026)" |
| TEN_DAYS 10 Nov: education idea published | ws-education | "published on 10 November 2026" |
| TEN_DAYS 10 Nov 19:09: Storm Charles, second day called off | news-ten-days | "Web Summit calls off its second day at 19:09" |
| TEN_DAYS 11 Nov 12:57: Fringe live; his lane communities | news-ten-days, ltf-storm, ltf-join | "Lisbon Tech Fringe live at 12:57"; "lane: communities (Indi)" |
| TEN_DAYS 11 Nov 21:11: app out for testing | news-ten-days | "the Fringe iPhone app on TestFlight at 21:11" |
| TEN_DAYS 12 Nov: booth A1-30, last day | ws-home | "Our stand: Thursday 12 November, booth A1-30" |
| TEN_DAYS 13 Nov: 277 commits, 3 to 13 November | news-ten-days | "Indi's 277" |
| TEN_DAYS 14 Nov (derived): Strangers in the Loop, produced by Indi | news-every-hour | "released on 13 November ... Strangers in the Loop, released the next day, was produced by Indi Gupte" |
| 27 agents, 23 running | ws-people-indi | "27 agents (23 running)" |
| conductor 90 commits | ws-people-indi | "90 commits, last 2026-11-16 13:37 UTC" |
| accountant 42 commits | ws-people-indi | "42 commits" |
| One of three editors; "What we publish and how it reads." | promptugal-about | "Indi Gupte, editor ... What we publish and how it reads." |
| "His agents draft; he sends every message." | ws-team-indi | "Their agents draft; they send every message." |
| Post line "What I bring: ..." | `team/BRIEF.md` | exact |

## Designs pop-up

On `/`, `/d/console/`, `/d/card/` and `/d/lingua/` at 390 and 1366: the control is a link to `/d/` without JavaScript and `role="button"`, `aria-haspopup="dialog"`, `aria-controls="designs"` with it; Enter opens a modal `<dialog>` labelled by its heading, focus on the heading, five items (The Briefing, Lingua, Front Page, Agent Console, The Card), five previews painted; Escape closes and focus returns to the control. Pass.

## Do the five designs look unmistakably different?

**Four do; Lingua does not yet.** In the dialog and on `/d/` the previews now differ from the top down: Front Page has a newspaper masthead with ears, a headline and a black and white photo; Agent Console is a dark terminal with a green status line and the team figure; The Card is a dark desk with a white front and a blue back. Nobody would mistake these for each other or for The Briefing.

What still looks alike:
- **Lingua and The Briefing**: both open on a cream ground with a large serif "Indi Gupte", the same italic "What I bring" line with the same attribution link, the same two buttons and his photo; Lingua's difference (the three coloured rules, the three-language band, the language tiles) sits in thin rules or below the first screen at 1366. Its three-language section titles start lower down. At 390 the two first screens differ mainly in the band and the tiles.
- **The same blocks repeated**: "His work, in pictures" (same three pictures and captions) and the ten-day strip appear in the same form on the home page, Lingua, Front Page and The Card's More. Console alone redraws them (as a log).
- **Share cards**: all six use one layout (photo left, name, "Looking for work experience"); The Card's card is a light beige panel while the design is now a dark desk. Shared on a social network, the designs look like one.

## Share cards

All 16 pages: absolute `og:image`, 1200x630, `og:image:alt`, `twitter:card summary_large_image`. Six cards fetched: 200, `image/jpeg`, 1200x630, 52,481 to 59,473 bytes. Each uses the crop; the Briefing seal clears the photo. Pass (see above for the design match).

## Overflow at 390 and links

Horizontal overflow 0 px on all 16 pages at 390 and 1366. 123 internal URLs, all 200; the GitHub link is in the header of every page at both widths.

## Against the model site

The comparison rests on my round 1 record of the model site (home and `/d/`, 18 November); I did not reopen it.

- **First screen**: now comparable. At 1366: framed photo about 300 px with its caption, the name large, his own line, two buttons and three sourced figures above the fold; at 390 the photo sits beside the name and all three figures are on screen. The model still has the stronger single voice line; this site's line is his own words, which the model does not have.
- **His work shown early**: his three pictures end at about 1,260 px at 390 and 1,150 px at 1366, inside two screens. The model has one picture in its hero; this site has three, each linked to its record.
- **One idea that holds**: the team figure (his conductor, six groups, dashed for not running, "His agents draft; he sends every message.") now plays the part of the model's "pass". It is clear and complete, though plainer as a picture.
- **Five designs**: closer to "very different" than the model's, except Lingua.
- **Still better than the model**: sourcing on every claim, no overflow at 390 (the model's `/d/` overflows), the accessible dialog, dark mode, reduced motion, no email.

**Verdict: as good as the model site, and better on sourcing, phone layout and accessibility; Lingua and the share cards are the places it is still behind on looks.**

## Open after round 2 (what a third round would do)

1. **Lingua apart from The Briefing**: open on his name and line set in three languages side by side (with the glosses awaiting his approval), a different ground or type, the language tiles in the first screen; drop the Briefing-style italic quote block there.
2. **Share cards per design**: render each from its design (The Card as the dark desk with the card, Front Page with its masthead, Lingua with its three bands), so a shared link shows the design.
3. **Redraw the repeated blocks per design**: the picture strip and the ten days in Front Page's column style and Lingua's three columns, as Console already does.
4. **Front Page focus colour** on the ears to `#B3121B` (C69).
5. **Writer**: update "Leads with" on `/d/` and in `/designs.json` (Briefing "the ask first, numbered paragraphs"; Console "the agent grid"; Lingua "beside his name and the ask") to match the pages.
6. **Fonts**: previews and share cards are rendered with fallback fonts on the build machine (build notes, Open 1); render them with the fonts the pages use.
7. **Indi's approvals** still outstanding (Lingua glosses, Front Page headline and notice, his line on the first screen), through Dinis.
