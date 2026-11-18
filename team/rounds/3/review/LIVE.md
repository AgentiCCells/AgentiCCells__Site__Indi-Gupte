# Round 3 live review

Written by reviewer.indi-gupte@AgentiCCells.dinis on 18 November 2026 for conductor.indi-gupte@AgentiCCells.dinis. Reviewed: https://indi-gupte.agenticcells.site, v0.1.16, commit a38c519 (`/version.json`: `a38c519a96a7...`, built 11:49 UTC). Against `CLAUDE.md`, `team/reviewer/POLICY.md`, `team/rounds/3.md`, C85 to C98 (`team/rounds/3/review/DESIGN.md`), `team/rounds/3/build/NOTES.md`. No `board/HOLD.md` at any step.

## Verdict

**Round 3 passes.** All of C85 to C98 hold on the live site. The brief's rules hold. **Yes, the five designs now look unmistakably different**, in the pop-up, on the pages and in the share cards. One small flaw, no rule broken: Front Page's "Leads with" line still says "his week in dates in the sidebar", but the ten days now sit as Briefs under the lead story.

## How I checked

- Screenshots: `node scripts/shots.mjs https://indi-gupte.agenticcells.site team/rounds/3/review/shots --max-height=3000 / /d/lingua/ /d/front-page/ /d/console/ /d/card/` (10 files, no overflow warning); plus `shots/dialog-lingua-1366.jpg`, `shots/dialog-home-390.jpg` (dialog open) and `shots/card-more-days-1366.jpg` (The Card, More opened). All looked at.
- Playwright (Chromium) on the five designs at 390 and 1366: overflow, share meta, `mailto:`/`tel:`, U+2014, `lang` counts, target heights, Tab focus colour, the dialog, the Lingua panel end, The Card's day labels.
- Crawl from `/`: every internal `href` and `src`; names (capitalised word pairs) over every HTML page and text file reached; the 31 company names of the factory index (`web-summit.sgit.ai/people/indi/factory/index.md`, not repeated here) over the five designs, `/d/`, `/designs.json`, `/llms.txt`, `/index.md`.
- His quoted lines checked as exact strings against `team/BRIEF.md`.

## Conditions

| Id | Result | Evidence |
|---|---|---|
| C85 | pass | Name strip shows "Speaks English, Italian and French; an interest in Sanskrit and in programming languages." with note 2; it is `LANGUAGES.speaksLine` (source `linkedin`). |
| C86 | pass | Note under the triptych is the `glossNote` text verbatim (ask, section titles, weekday names, "They await Indi's approval."); the `lingua` question covers the weekday names. |
| C87 | pass | `/d/lingua/`: 37 `lang="it"`, 37 `lang="fr"`; panels, names, asks, title links and weekday spans each carry it. |
| C88 | pass | At 390 the French panel ends at 739 px, inside 844; the languages line is kept (`d_lingua-390.jpg`). |
| C89 | pass | All nine panel title links 44 px tall at 390 and 1366; focus outline white, 3 px, inside the panel padding. |
| C90 | pass | `/d/` and `/designs.json` Lingua: "His three languages, each with the ask and the section titles in that language". |
| C91 | pass | Calendar headers "Mon / lun / lun" and so on from `LINGUA_WEEKDAYS`, covered by the note. |
| C92 | pass | 7 and 8 November: date only in Lingua, "Saturday 7 November" dateline only in Front Page, date only in Console rows 09 and 10. No "No dated record." on any design. The Card's "Sat 7" and "Sun 8" are `rgb(237,234,227)` (`#EDEAE3`), dashed cards (`card-more-days-1366.jpg`). |
| C93 | pass | 14 November in no grid cell; Lingua, Front Page and The Card carry the "After the ten days ... (date derived: ...)" line with note 13; Console row 18 reads "derived" with reason and note. Headings say "3 to 13 November". |
| C94 | pass | Entry text matches `TEN_DAYS[].label` (16 entries in each drawing); Console windows show `cards-round4-executives.jpg`, `sticker-gap.jpg`, `schedules.jpg` with "4 to 5 November", "4 November", "8 November". |
| C95 | pass | Lingua's 2 (and 15) cells hold only the date; every cell has its date in text. |
| C96 | pass | The Card share card: "LOOKING FOR WORK EXPERIENCE" on one line under the photo, inside the white card (looked at). |
| C97 | pass | Lingua share card: the ask in English only; the Italian and French panels show "Italiano" and "Français" only. |
| C98 | pass | Six cards 41,827 to 60,241 bytes, all under 300 KB; each uses the square crop, not the whole photo. |

S4 focus: Front Page ears and nav `rgb(179,18,27)` (`#B3121B`), 3 px; The Card band `rgb(242,179,143)`; Lingua panels white. Round 2's C69 flaw is fixed.

## The brief's rules on the changed pages

| Check | Result | Evidence |
|---|---|---|
| No person but Indi Gupte and Dinis Cruz | pass | Name pairs found are Indi Gupte, Dinis Cruz and non-person names (Web Summit, Lisbon Tech Fringe, Storm Charles, Harrow School, Claude Code and section words). Front Page says "with Dinis Cruz and another team member". |
| No target companies | pass | 0 of 31 factory company names on the checked pages and files. |
| No email or phone | pass | No `mailto:` or `tel:` on any page reached; footer "No email or phone: please use LinkedIn." |
| One photograph | pass | Only the crop and images made from it (Front Page in black and white). |
| His words exact | pass | Front Page's two quotes ("Hi all, ... this year." and "What I bring: ... AI agents."), The Card's "I designed our business cards" and Lingua's "where languages, judgement and tact meet" are exact substrings of `team/BRIEF.md`. |
| Italian and French marked as awaiting Indi | pass | Gloss note directly under the triptych on `/d/lingua/` at both widths; `awaitingIndi: true` in the data. |
| Em dashes | pass | No U+2014 on any page reached. |

## Share cards

All five designs and the home: absolute `og:image`, `og:image:alt` naming the design, `twitter:card summary_large_image`. Fetched: 200, `image/jpeg`, 1200x630 each. Briefing 60,241 bytes (home), Lingua 43,039, Front Page 55,493, Console 46,721, The Card 41,827, inner pages 56,214. Looked at each: Briefing cream with seal clear of the photo; Lingua grey top over three blue, green and red bands; Front Page masthead with "WANTED" and a black and white photo; Console green status bar over a dark operator panel; The Card a white card on the dark desk. Each card now shows its design. Pass.

Two small wording points (no rule broken): the `og:image:alt` reads "the The Briefing design" and "the The Card design" (doubled "the").

## Designs pop-up

On `/` and `/d/lingua/` at 390 and 1366: Enter on the control opens a modal `<dialog>` labelled `dlg-h`, focus on the "Designs" heading, five items (The Briefing, Lingua, Front Page, Agent Console, The Card) with the current one marked "Showing", five previews painted; Escape closes it and focus returns to the control. Pass.

## Overflow and links

Horizontal overflow 0 px on all five designs at 390 and 1366 (and on The Card with More opened). Crawl: 147 internal URLs, all 200.

## Do the five designs now look unmistakably different?

**Yes.** Lingua no longer opens like The Briefing: dark bar, small name strip, then three full-width blue, green and red panels with the ask and titles in each language, a grey ground and a sans face; no cream, no italic quote block. The two strips are now drawn five ways: Briefing annexes with a timeline, Lingua a two-week calendar with weekday rows in three inks, Front Page newspaper "Briefs" columns and a greyscale picture desk, Console a numbered log and image windows, The Card index cards on the desk. The share cards differ in the same way. In the dialog the five previews are told apart at a glance.

## Open after round 3

1. Writer: Front Page "Leads with" (on `/d/` and `/designs.json`) still names "his week in dates in the sidebar"; the ten days are now Briefs under the lead story.
2. Writer or developer: `og:image:alt` "the The Briefing design" and "the The Card design" (doubled "the").
3. Fonts: share cards and previews still render with the build machine's fallback fonts (build notes, Open).
4. Indi's approvals, through Dinis: the Italian and French ask, titles and weekday names; whether the Lingua share card may carry the Italian and French asks (C97, now English only); the Front Page headline and notice; his line on the first screen.
