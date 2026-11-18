// The five designs of the home page: The Briefing (the home page, at /), Lingua, Front Page, Agent Console and
// The Card; the chooser at /d/ and /designs.json.
// Round 2 (team/rounds/2/design/PROPOSAL.md R1 to R4, with the reviewer's conditions C61 to C84): each design now
// restyles its own header and band (R2.0), The Briefing has the new first screen (R1), Lingua and The Card are full
// designs, and the dated strip (R3) and the team figure (R4) sit where the proposal puts them.
// Copyright 2026 AgentiCCells. Code Apache-2.0; the text it writes is CC BY 4.0.
// Pattern adapted from the Marc Noah site's scripts/designs.mjs (Apache-2.0,
// https://github.com/AgentiCCells/AgentiCCells__Site__Marc-Noah/blob/dev/scripts/designs.mjs, read 2026-11-18).
// Written by developer.indi-gupte@AgentiCCells.dinis, rounds 1 and 2. Run by scripts/generate.mjs.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import {
  LINKEDIN, LINKEDIN_TEXT, PERSON, QUOTES, ASK, WEB_SUMMIT, BUILT, AGENTS, LANGUAGES, BACKGROUND,
  DESIGNS, LINGUA_TITLES, PAGES, SITE, HOME_FIGURES,
} from '../data/facts.mjs';
import {
  esc, ref, note, fact, page, head, headshot, languagesFigure, workFig, chartCommits, chartMap, chartActivity,
  postBlock, TEAM_LINE, TEAM_SRC, COMMITS_LINE, COMMITS_SRC, WE_BUILT, CARDS_QUOTE, thumb, designHref, designIdea, designLeads,
  videoSlot, SEAL, BAND_DEFAULT, linkedinLabel, ARROW, LINE, BRING_PHRASES, lineSource, homeFigures, workPics, tenDays,
  tenDaysLog, teamFigure,
} from './lib.mjs';

const out = (p, s) => { const f = `src${p}`; mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };
const D = Object.fromEntries(DESIGNS.map(d => [d.slug, d]));
const WORKS = BUILT.filter(b => b.kind === 'work');
const DESC = `${PERSON.name}, ${PERSON.place.text}: ${PERSON.tagline.text.toLowerCase()}. ${ASK.short}. ${TEAM_LINE}.`;
const TALK = PERSON.profileSummary.paragraphs[4]; // "He is glad to talk to people working in languages, AI, medicine or diplomacy."
const linkBtn = (cls = 'btn btn-primary') => `<a class="${cls}" href="${LINKEDIN}">${esc(ASK.button.text)}</a>`;
const lookBtn = (cls = 'btn btn-secondary') => `<a class="${cls}" href="${ASK.secondary.href}">${esc(ASK.secondary.text)}</a>`;
const worksList = (cls = '') => `<ul class="works${cls ? ` ${cls}` : ''}">${WORKS.map(b => `<li><a href="/built/#${b.id}"><b>${esc(b.title)}</b></a> <span>${esc(b.oneLine)}</span>${ref(b.sources.filter(s => s !== 'whatsapp'))}</li>`).join('')}</ul>`;
const designTitle = d => `${d.name} · ${PERSON.name}`;
const timeline = (cls = 'timeline-list') => `<ul class="${cls}">${BACKGROUND.timeline.map(t => `<li><time>${esc(t.when.text)}</time>${esc(t.title)}</li>`).join('')}</ul>`;
const lineQuote = cls => `<figure class="${cls}"><blockquote><p>${esc(LINE.quote)}</p></blockquote><figcaption>${lineSource}</figcaption></figure>`;

// ======================= The Briefing (home, at /): R1 and R2.1 =======================
const B = D.briefing.copy;
const para = (n, title, body, id = '') => `<section class="bp"${id ? ` id="${id}"` : ''} aria-labelledby="bp${n}"><h2 id="bp${n}"><span class="pn">${n}.</span> ${esc(title)}</h2>${body}</section>`;
const briefing = page({
  path: '/', title: PAGES.home.title, description: DESC, share: 'indi-gupte', css: ['/d/briefing/style.css'], cls: 'd-briefing', design: 'briefing',
  hdr: { band: BAND_DEFAULT('<span class="band-pre">Briefing note · </span>') },
  body: `<div class="wrap bwrap">
<section class="bhero" aria-labelledby="bh-name">
<figure class="hphoto">${headshot({ size: 300, eager: true, cls: 'portrait' })}<figcaption>${esc(PERSON.photo.credit)}</figcaption></figure>
<p class="blabel">${SEAL('seal lbl-seal')}<span>${esc(B.label.text)}</span></p>
<div class="hname"><h1 id="bh-name">${esc(PERSON.name)}</h1><p class="bsub">${esc(PERSON.tagline.text)} · ${esc(PERSON.place.text)}</p></div>
${lineQuote('hline')}
<p class="btns hbtns">${linkBtn()}${lookBtn()}</p>
${homeFigures()}
<p class="hsrc"><a href="/sources/">Sources for this screen</a></p>
</section>
<section class="bwork" aria-labelledby="bw-h"><div class="sec-head"><h2 id="bw-h">His work, in pictures</h2><a class="more" href="/built/">Everything he built</a></div>
${workPics({ eager: true })}
</section>
${tenDays({ id: 'ten-days' })}
<div class="sheet">
${para(1, B.paragraphs[0], fact(postBlock(), ['whatsapp']))}
${para(2, B.paragraphs[1], `${WORKS.map(b => fact(`<div class="bw">${workFig(b.id, b.title, 'sm')}<div><h3><a href="/built/#${b.id}">${esc(b.title)}</a></h3><p>${esc(b.oneLine)} <span class="muted">His part: ${esc(b.role)}.</span></p></div></div>`, b.sources)).join('\n')}
${videoSlot()}
<p><a class="more" href="/built/">Every piece of work, and his pages at web-summit.sgit.ai</a></p>`)}
${para(3, B.paragraphs[2], `${teamFigure({ id: 'home-team', small: true })}${fact(`<ul>${AGENTS.howHeWorks.slice(1, 4).map(h => `<li>${esc(h.text)}${ref(h.sources)}</li>`).join('')}</ul><p><a class="more" href="/how-i-work/">All four charts of his agent teams</a></p>`, [...new Set(AGENTS.howHeWorks.slice(1, 4).flatMap(h => h.sources))])}`)}
${para(4, B.paragraphs[3], languagesFigure('hlf'))}
${para(5, B.paragraphs[4], fact(`${timeline()}<p>${esc(BACKGROUND.undated[0].title)}: ${esc(BACKGROUND.undated[0].text)}</p>`, ['linkedin', 'ws-home']))}
${para(6, B.paragraphs[5], fact(`<p>${esc(TALK)}</p><ul class="fields">${ASK.fields.map(f => `<li><a href="${f.link}">${esc(f.name)}</a></li>`).join('')}</ul>`, ASK.fieldsIntro.sources))}
${para(7, B.paragraphs[6], `<p>${esc(B.nextStep.text)} ${esc(PERSON.contactNote.text)}</p><p class="btns">${linkBtn()}</p>`)}
</div>
</div>`,
});
out('/index.html', briefing);
out('/d/briefing/index.html', `${head({ title: designTitle(D.briefing), description: DESC, path: '/d/briefing/', refresh: '/', canonical: '/' })}
<body><main class="wrap" style="padding:48px 16px"><h1>${esc(D.briefing.name)}</h1><p>The Briefing is the home page: <a href="/">open it</a>.</p></main></body></html>
`);
// The Briefing's header is the main system's header (in /style.css), so moving from home to an inner page keeps it.
out('/d/briefing/style.css', `/* The Briefing: a briefing paper on a desk in a ministry (R1, R2.1, C61 to C65, C69, C70). Code Apache-2.0. */
.d-briefing{--bg:#F7F4EC;--surface:#FFFDF8;--surface-2:#EFE8DA;--ink:#13233F;--muted:#4A5468;--line:#B8AE98;--tile-line:#D8CFBC;--accent:#13233F;--accent-soft:#E6E2D6;--on-accent:#FFFFFF;--warm:#8C1D18;--focus:#8C1D18;--head:var(--serif);--evband:#F2E3D9;--run:#1F7A4D;--lf-tile:#13233F;--lf-warm:#8C1D18;--c-on:#13233F;--c-bar:#13233F;--c-link:rgba(19,35,63,.4)}
@media (prefers-color-scheme:dark){.d-briefing{--bg:#10192A;--surface:#16213A;--surface-2:#1C2945;--ink:#EDE7DA;--muted:#A9B3C4;--line:#3A4866;--tile-line:#34425E;--accent:#EDE7DA;--accent-soft:#1F2B44;--on-accent:#10192A;--warm:#F09A8E;--focus:#F09A8E;--evband:#2A2533;--run:#6FCF97;--lf-tile:#9FC0EE;--lf-warm:#F09A8E;--c-on:#9FC0EE;--c-bar:#9FC0EE;--c-link:rgba(159,192,238,.45)}}
.d-briefing main{font-family:var(--serif)}
.d-briefing .btn-primary{background:var(--ink);color:var(--bg)}
.d-briefing .btn-secondary{color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink)}
.bwrap{padding-top:16px}
/* R1: the first screen */
.bhero{display:grid;grid-template-columns:112px minmax(0,1fr);gap:0 16px;align-items:center}
.bhero>*{grid-column:1/-1}
.blabel{display:flex;align-items:center;gap:10px;font:600 .8rem var(--sans);font-variant-caps:all-small-caps;font-size:.95rem;letter-spacing:.04em;color:var(--warm);margin:0 0 10px}
.lbl-seal{width:32px;height:32px;flex:none}
.hphoto{grid-column:1;grid-row:2;margin:0;align-self:start}
.hphoto .headshot{--size:112px!important;border-radius:10px;border:2px solid var(--ink);box-shadow:none}
.hphoto figcaption{display:none}
.hname{grid-column:2;grid-row:2}
.d-briefing h1{font-size:2.3rem;line-height:1.02;margin:0;letter-spacing:-.01em}
.bsub{font-size:1rem;color:var(--muted);margin:6px 0 0;line-height:1.35}
.hline{margin:14px 0 0;border-left:3px solid var(--warm);padding-left:14px}
.hline blockquote{border:0;padding:0;margin:0;font:italic 400 1.08rem/1.38 var(--serif);color:var(--ink)}
.hline blockquote p{margin:0}
.hline figcaption{margin-top:0;font:.82rem var(--sans)}
.hline .attr,.hsrc a{color:var(--muted);display:inline-flex;align-items:center;min-height:44px}
.hbtns .btn{flex:1 1 100%;justify-content:center}
.figs{list-style:none;padding:0;margin:14px 0 0;display:grid;gap:6px}
.fig{background:var(--surface);border:1px solid var(--tile-line);border-top:3px solid var(--warm);padding:8px 12px 0;display:grid;grid-template-columns:76px minmax(0,1fr);gap:0 12px;align-items:baseline}
.fnum{grid-row:1/3;margin:0;font:600 1.9rem/1 var(--serif);font-variant-numeric:lining-nums tabular-nums;color:var(--ink);white-space:nowrap}
.flab2{margin:0;font:.9rem/1.35 var(--sans);color:var(--ink);overflow-wrap:break-word}
.fsrc{font:.78rem/1.3 var(--sans);color:var(--muted);min-height:44px;display:inline-flex;align-items:center}
.hsrc{margin:4px 0 0;font:.85rem var(--sans)}
@media (max-width:699px){.hbtns{margin-top:12px;gap:8px}.blabel{font-size:.82rem}}
@media (min-width:700px){.hbtns .btn{flex:0 0 auto}.figs{grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.fig{display:block;padding:14px 16px 4px}.fnum{font-size:2.45rem;margin-bottom:6px}}
@media (min-width:960px){
  .bwrap{padding-top:44px}.blabel{margin-bottom:14px;letter-spacing:.08em}.figs{margin-top:20px}.hline{margin-top:22px}
  .bhero{grid-template-columns:300px minmax(0,1fr);gap:0 56px;align-items:start}
  .bhero>*{grid-column:2}
  .hphoto{grid-column:1;grid-row:1/span 7}
  .hphoto .headshot{--size:300px!important;border-radius:4px;border:1px solid var(--line);box-shadow:10px 10px 0 var(--accent-soft)}
  .hphoto figcaption{display:block;font:.72rem var(--sans);color:var(--muted);margin-top:14px}
  .hname{grid-row:auto}
  .d-briefing h1{font-size:4rem}
  .bsub{font-size:1.22rem;margin-top:8px}
  .hline{margin-top:22px;padding-left:20px}.hline blockquote{font-size:1.33rem;max-width:34em}
}
/* the work strip: a row that scrolls in its own box at 390, three columns at 1366 */
.bwork{margin-top:36px;border-top:1px solid var(--line);padding-top:20px}
.sec-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:0 16px}
.sec-head h2{margin:0 0 10px;font-size:1.55rem}
.d-briefing .pics{grid-auto-columns:78%}
.tendays{margin-top:36px;border-top:1px solid var(--line);padding-top:20px}
.tendays>h2{margin-top:0;font-size:1.55rem}
.sheet{margin-top:40px}
@media (min-width:960px){.sheet{background:var(--surface);border:1px solid var(--line);padding:24px 56px 32px;box-shadow:0 30px 60px -40px rgba(19,35,63,.4)}}
.bp{padding:28px 0 8px;border-bottom:1px solid var(--line)}
.bp:last-child{border-bottom:0}
.bp>h2{margin:0 0 16px;font-size:1.5rem}.pn{font-family:var(--sans);color:var(--warm);font-size:.9em;margin-right:4px}
.bw{display:flex;gap:16px;align-items:flex-start}.bw h3{margin:0 0 4px;font-size:1.1rem}.bw p{margin:0}
.pfig.sm{width:96px;height:64px;flex:none}
.fields{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.fields a{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border:1px solid var(--ink);border-radius:2px;font-family:var(--sans);font-variant-caps:all-small-caps;letter-spacing:.08em;font-weight:600;text-decoration:none;color:var(--ink)}
@media print{.sheet{box-shadow:none;border:0;padding:0}.bp{break-inside:avoid}}
`);

// ======================= Lingua: a parallel-text edition (R2.2) =======================
const LT = Object.fromEntries(LINGUA_TITLES.map(t => [t.id, t]));
const trow = (id, h = 'h2') => { const t = LT[id]; return `<div class="trow"><${h} id="lt-${id}" class="t-en">${esc(t.en)}</${h}><p class="t-it" lang="it">${esc(t.it)}</p><p class="t-fr" lang="fr">${esc(t.fr)}</p></div>`; };
const lsec = (id, body, cls = '') => `<section class="ls${cls ? ` ${cls}` : ''}" aria-labelledby="lt-${id}">${trow(id)}${body}</section>`;
const LOOK = LT['looking-for'];
const lingua = page({
  path: '/d/lingua/', title: designTitle(D.lingua), description: DESC, share: 'lingua', css: ['/d/lingua/style.css'], cls: 'd-lingua', design: 'lingua', scheme: 'light',
  hdr: {
    band: `<p class="lb lb-en"><b>${esc(LOOK.en)}</b></p><p class="lb lb-it" lang="it">${esc(LOOK.it)}</p><p class="lb lb-fr" lang="fr">${esc(LOOK.fr)}</p>
<a class="band-link" href="${LINKEDIN}">${linkedinLabel}${ARROW}</a>`,
    logo: `<span class="home-name">${esc(PERSON.name)}</span><span class="ltag" aria-hidden="true"><span class="c-en">EN</span> · <span class="c-it">IT</span> · <span class="c-fr">FR</span></span>`,
    nav: n => esc(n.text.replace(/^./, c => c.toLowerCase())),
  },
  body: `<div class="wrap lwrap">
<section class="lhero" aria-labelledby="lh-name">
<p class="kicker">${esc(PERSON.tagline.text)}</p>
<h1 id="lh-name">${esc(PERSON.name)}</h1>
<figure class="lphoto">${headshot({ size: 200, eager: true })}<figcaption>${esc(PERSON.photo.credit)}</figcaption></figure>
${lineQuote('lline')}
<p class="btns">${linkBtn()}${lookBtn()}</p>
</section>
<div class="lfig"><span class="wm" lang="sa" aria-hidden="true">${esc(LANGUAGES.interest[0].ownName)}</span>${languagesFigure('llf')}</div>
<p class="glossnote">${esc(D.lingua.copy.glossNote.text)} They await Indi's approval.</p>
${lsec('summary', fact(PERSON.profileSummary.paragraphs.slice(0, 4).map(p => `<p>${esc(p)}</p>`).join(''), ['linkedin']))}
${lsec('built', `${fact(worksList(), ['whatsapp'])}${workPics({ cls: 'lpics' })}`)}
${lsec('how-i-work', fact(`<blockquote>${esc(QUOTES.extracts.bring)}</blockquote><p>${esc(TEAM_LINE)}. ${esc(COMMITS_LINE)}. ${esc(WEB_SUMMIT.rules.text)}</p><p><a class="more" href="/how-i-work/">His agent teams, drawn</a></p>`, ['whatsapp', ...TEAM_SRC, ...COMMITS_SRC]))}
${lsec('languages', LANGUAGES.whereTheyLead.map(w => fact(`<p>${esc(w.text)}</p>`, w.sources)).join(''))}
${lsec('background', fact(`${timeline()}<p>${esc(BACKGROUND.undated[0].title)}. ${esc(BACKGROUND.undated[0].text)}</p>`, ['linkedin', 'ws-home']))}
${lsec('fields', fact(`<p>${esc(TALK)}</p><ul class="lf-fields">${ASK.fields.map(f => `<li><b>${esc(f.name)}</b> ${esc(f.line)}</li>`).join('')}</ul>`, ['linkedin']))}
${lsec('looking-for', `<p>${esc(ASK.long.text)}${ref(ASK.long.sources)}</p><p class="btns">${linkBtn()}</p>`, 'lend')}
${lsec('sources', `<p><a class="more" href="/sources/">Every source, with its address and the date it was read</a></p>`)}
</div>`,
});
out('/d/lingua/index.html', lingua);
out('/d/lingua/style.css', `/* Lingua: a parallel-text edition, English, Italian and French side by side (R2.2, C41, C69, C72). Fixed light palette. Code Apache-2.0. */
.d-lingua{--bg:#F5EFE3;--surface:#FBF7EE;--surface-2:#EDE3D0;--ink:#1F1A14;--muted:#5A5246;--line:#CFC3AE;--accent:#1E4D8C;--accent-soft:#E7E4EA;--on-accent:#FFFFFF;--warm:#8C2A3B;--focus:#1E4D8C;--en:#1E4D8C;--it:#1F6B3A;--fr:#8C2A3B;--sa:#9A4A00;--code:#4B3F8C;--lf-tile:#1E4D8C;--lf-warm:#9A4A00;color-scheme:light}
.d-lingua main{font-family:var(--serif)}
.d-lingua .band{border-top:0;border-bottom:0}.d-lingua .designs-btn .lbl{font-variant-caps:normal;font-size:inherit;letter-spacing:inherit}.d-lingua .home,.d-lingua .menu summary,.d-lingua .src-icon,.d-lingua .designs-btn{color:var(--ink);border-color:var(--line)}.d-lingua .nav-wide a+a::before{content:none}.d-lingua .band-ask{font-variant-caps:normal}.d-lingua .home-name{font:inherit;letter-spacing:0;font-variant-caps:normal}
/* header: three rules, then the band in three languages, then the bar */
.d-lingua header.site{border-top:12px solid transparent;border-image:linear-gradient(#1E4D8C 0 4px,#1F6B3A 4px 8px,#8C2A3B 8px 12px) 12 0 0 0 / 12px 0 0 0}
.d-lingua .band{background:var(--bg);color:var(--ink);border-bottom:1px solid var(--line);font-family:var(--serif)}
.d-lingua .band .wrap{display:flex;align-items:center;gap:0 16px;min-height:44px}
.d-lingua .lb{margin:0;font-size:.95rem}.d-lingua .lb-en{color:var(--en);flex:1}.d-lingua .lb-it{color:var(--it);font-style:italic;display:none}.d-lingua .lb-fr{color:var(--fr);font-style:italic;display:none}
.d-lingua .band-link{color:var(--en);font-weight:600;font-family:var(--serif)}
@media (min-width:960px){.d-lingua .band .wrap{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) auto}.d-lingua .lb-it,.d-lingua .lb-fr{display:block}.d-lingua .ll-long{display:inline}}
.d-lingua .bar{background:var(--bg);border-bottom:1px solid var(--line)}
.d-lingua .home{font:italic 400 1.3rem var(--serif);gap:12px}
.d-lingua .ltag{font:600 .62rem var(--sans);letter-spacing:.1em;font-style:normal}.c-en{color:var(--en)}.c-it{color:var(--it)}.c-fr{color:var(--fr)}
.d-lingua .nav-wide a{font:italic .95rem var(--serif);padding:0 8px}
.d-lingua .nav-wide a[aria-current=page]{text-decoration-color:var(--en);text-decoration-thickness:2px;text-underline-offset:6px;font-weight:400}
.d-lingua .menu summary,.d-lingua .src-icon{border-color:var(--ink);border-radius:22px;font-family:var(--serif);font-style:italic;font-weight:400}
.d-lingua .designs-btn{border:1px solid var(--ink);border-radius:22px;font:italic 400 .95rem var(--serif)}
.d-lingua .designs-btn .ic{display:none}
.d-lingua .designs-btn::before{content:"";width:14px;height:14px;background:linear-gradient(#1E4D8C 0 4px,transparent 4px 5px,#1F6B3A 5px 9px,transparent 9px 10px,#8C2A3B 10px 14px)}
.d-lingua .designs-btn .lbl{text-transform:lowercase}
/* the page: three columns */
.lwrap{padding-top:28px}
.lhero{display:grid;grid-template-columns:minmax(0,1fr) 112px;gap:0 16px;align-items:center}
.lhero>.kicker,.lhero>.lline,.lhero>.btns{grid-column:1/-1}
.lhero .kicker{color:var(--muted);font:600 .8rem var(--sans);letter-spacing:.12em}
.d-lingua h1{font-size:2.6rem;margin:0;line-height:1}
.lphoto{margin:0}.lphoto .headshot{--size:112px!important;border-radius:6px}.lphoto figcaption{display:none}
.lline{margin:18px 0 0}.lline blockquote{border:0;padding:0;font:italic 1.18rem/1.45 var(--serif);color:var(--ink)}.lline blockquote p{margin:0}
.lline figcaption{font:.82rem var(--sans)}.lline .attr{color:var(--muted);display:inline-flex;align-items:center;min-height:44px}
.d-lingua .btn-primary{background:var(--ink);color:#fff;border-radius:22px}.d-lingua .btn-secondary{color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink);border-radius:22px}
@media (min-width:960px){
  .lhero{grid-template-columns:repeat(3,minmax(0,1fr));gap:0 24px;align-items:start;padding-bottom:12px}
  .lhero>.kicker,.lhero>h1,.lhero>.lline,.lhero>.btns{grid-column:1/3}
  .lphoto{grid-column:3;grid-row:1/span 4;justify-self:start;border-left:1px solid var(--line);padding-left:24px}
  .lphoto .headshot{--size:200px!important}.lphoto figcaption{display:block;font:.75rem var(--sans);color:var(--muted);margin-top:8px}
  .d-lingua h1{font-size:4rem}.lline blockquote{font-size:1.33rem}
}
.lfig{position:relative;background:var(--surface);border:1px solid var(--line);padding:22px;overflow:hidden;margin-top:24px}
.lfig .langs{position:relative;z-index:1}.lfig .langs svg{max-width:none}
.lfig .langs figcaption{max-width:none}
.wm{position:absolute;right:-10px;bottom:-40px;font-family:var(--deva);font-size:180px;line-height:1;color:var(--sa);opacity:.07;pointer-events:none;z-index:0}
.d-lingua .lf .t-en{fill:var(--en)}.d-lingua .lf .t-it{fill:var(--it)}.d-lingua .lf .t-fr{fill:var(--fr)}.d-lingua .lf .t-sa{stroke:var(--sa)}.d-lingua .lf .t-pl{stroke:var(--code)}
.glossnote{font:.82rem var(--sans);color:var(--muted);margin:14px 0 0}
.ls{padding:28px 0 6px;border-top:1px solid var(--line);margin-top:24px}
.trow{display:block;margin-bottom:16px}
.trow h2{margin:0;font-size:1.75rem;color:var(--en)}
.trow p{display:inline;margin:0;font:italic 1rem var(--serif)}
.trow .t-it{color:var(--it)}.trow .t-fr{color:var(--fr)}.trow .t-it::after{content:" · ";color:var(--muted)}
@media (min-width:960px){
  .trow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 24px;align-items:last baseline}
  .trow h2{font-size:2.2rem}.trow p{display:block;font-size:1.65rem;border-left:1px solid var(--line);padding-left:24px}.trow .t-it::after{content:none}
  .d-lingua .fact{grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:0 48px}
  .d-lingua .fact .note{border-left:1px solid var(--line)}
}
.works{list-style:none;padding:0}.works li{padding:8px 0;border-bottom:1px dotted var(--line)}.works span{color:var(--muted)}
.works a{display:inline-flex;align-items:center;min-height:44px}
.lpics{margin-top:18px}
.lf-fields{padding-left:1.1em}
.lend{background:var(--surface-2);padding:24px!important;border-top:0!important}
`);

// ======================= Front Page: a broadsheet (R2.3) =======================
const FP = D['front-page'].copy;
const front = page({
  path: '/d/front-page/', title: designTitle(D['front-page']), description: DESC, share: 'front-page', css: ['/d/front-page/style.css'], cls: 'd-front', design: 'front-page', scheme: 'light',
  hdr: {
    band: `<a class="ear ear-l" href="/looking-for/"><span class="ear-k">Wanted</span><span class="ear-v">Work experience</span></a>
<a class="ear ear-r band-link" href="${LINKEDIN}"><span class="ear-k">Reply via</span><span class="ear-v">LinkedIn${ARROW}</span></a>`,
    logo: `<span class="mast-name">${esc(PERSON.name)}</span>`,
    extra: `<p class="dateline">${esc(PERSON.place.text)} · ${esc(WEB_SUMMIT.event.text)}, ${esc(WEB_SUMMIT.event.dates.text)}</p>\n`,
  },
  body: `<div class="wrap paper">
<div class="fp-top">
<div class="leadcol"><article class="lead">
<p class="fkicker">The lead story</p>
<h1>${esc(FP.headline.text)}</h1>
<p class="stand">"${esc(QUOTES.extracts.intro)}"${ref('whatsapp')}</p>
<figure class="leadpic">${headshot({ size: 240, eager: true })}<figcaption>${esc(FP.photoCaption)}</figcaption></figure>
<p class="drop">${esc(PAGES.home.lede)}${ref(PAGES.home.sources)} ${esc(WEB_SUMMIT.editor.text)}${ref(WEB_SUMMIT.editor.sources)} ${esc(WEB_SUMMIT.joined.text)}${ref(WEB_SUMMIT.joined.sources)}</p>
<p>${esc(PERSON.profileSummary.paragraphs[0])} ${esc(PERSON.profileSummary.paragraphs[3])}${ref('linkedin')}</p>
<p class="fquote">"${esc(LINE.quote)}"${ref('whatsapp')}</p>
</article>
<section class="inpics" aria-labelledby="ip-h"><h2 id="ip-h">In pictures</h2>${workPics({ cls: 'fpics' })}</section></div>
<aside class="notice" aria-labelledby="nt-h"><h2 id="nt-h">Notice</h2><p>${esc(FP.notice.text)}${ref(FP.notice.sources)}</p><p>${linkBtn('btn fp-btn')}</p></aside>
<aside class="side">
<h2>${esc(FP.indexTitle)}</h2>
<ol class="index">${WORKS.map(b => `<li><a href="#fp-${b.id}">${esc(b.title)}</a></li>`).join('')}</ol>
${tenDays({ id: 'fp-week', title: 'The week in dates', cls: 'narrow' })}
</aside>
</div>
<div class="cols">${WORKS.map(b => `<article class="story" id="fp-${b.id}">${workFig(b.id, b.title, 'fp')}<h3>${esc(b.title)}</h3><p>${esc(b.paragraph)}${ref(b.sources)}</p><p class="by">His part: ${esc(b.role)}. <a href="${esc(b.link.url)}">${esc(b.link.text)}</a></p></article>`).join('')}</div>
<section class="numbers" aria-labelledby="bn-h"><h2 id="bn-h">${esc(FP.numbersTitle)}</h2>
<div class="nums">${HOME_FIGURES.map(f => `<p><b>${esc(f.value)}</b> ${esc(f.label)}${ref(f.sources)}</p>`).join('')}</div>
${chartCommits('fcc', 'h3')}
</section>
<section class="fplang" aria-labelledby="fl-h"><h2 id="fl-h">Languages</h2>${languagesFigure('flf')}</section>
</div>`,
});
out('/d/front-page/index.html', front);
out('/d/front-page/style.css', `/* Front Page: a broadsheet front page; the header is the masthead with two ears (R2.3, C25 to C29, C69). Fixed light palette. Code Apache-2.0. */
.d-front{--bg:#FBFAF6;--surface:#FFFFFF;--surface-2:#F1EEE6;--ink:#111111;--muted:#555049;--line:#111111;--accent:#B3121B;--accent-soft:#F4E4E2;--on-accent:#FFFFFF;--warm:#B3121B;--focus:#B3121B;--head:"Bodoni 72",Didot,"Bodoni MT","Big Caslon",Georgia,serif;--evband:#F1EEE6;--run:#111111;--lf-tile:#111111;--lf-warm:#B3121B;--c-on:#111;--c-bar:#111;color-scheme:light}
.d-front main{font-family:Georgia,"Times New Roman",serif}
.d-front .band{border-top:0;border-bottom:0}.d-front .designs-btn .lbl{font-variant-caps:normal;font-size:inherit;letter-spacing:inherit}.d-front .home,.d-front .menu summary,.d-front .src-icon,.d-front .designs-btn{color:var(--ink);border-color:var(--line)}.d-front .nav-wide a+a::before{content:none}.d-front .band-ask{font-variant-caps:normal}.d-front .home-name{font:inherit}
/* the masthead: ears, name, dateline, index */
.d-front header.site{background:var(--bg);position:relative}
.d-front .band{background:var(--bg);color:var(--ink);font-family:var(--sans)}
.d-front .band .wrap{display:flex;justify-content:space-between;align-items:center;min-height:44px;border-bottom:1px solid var(--ink)}
.d-front .ear{display:inline-flex;align-items:center;gap:6px;min-height:44px;color:var(--ink);text-decoration:none;font-size:.8rem}
.d-front .ear-k{font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--accent);font-size:.68rem}
.d-front .ear-v{font:700 .9rem Georgia,serif}.d-front .ear-r .ear-v{color:var(--accent);text-decoration:underline}
.d-front .bar{background:var(--bg);border-bottom:0}
.d-front .bar .wrap{display:grid;grid-template-columns:1fr auto;align-items:center;gap:0 8px;min-height:0;padding-top:6px}
.d-front .home{grid-column:1;justify-content:flex-start;margin:0}
.mast-name{font:700 2.3rem/1 var(--head);letter-spacing:-.01em;color:var(--ink)}
.d-front .dateline{grid-column:1/-1;grid-row:2;margin:4px 0 0;padding:6px 0;border-top:4px solid var(--ink);border-bottom:1px solid var(--ink);font:600 .62rem var(--sans);letter-spacing:.1em;text-transform:uppercase;text-align:center;color:var(--ink)}
.d-front .tools{grid-column:2;grid-row:1}
.d-front .menu summary,.d-front .src-icon{border-radius:0;border-color:var(--ink)}
.d-front .designs-btn{background:var(--ink);color:var(--bg);border-radius:0;border-color:var(--ink);font:700 .7rem var(--sans);text-transform:uppercase;letter-spacing:.1em}
@media (min-width:1180px){
  .d-front .band{position:absolute;left:0;right:0;top:0;background:transparent;pointer-events:none}
  .d-front .band .wrap{border:0;padding-top:16px;align-items:flex-start}
  .d-front .ear{pointer-events:auto;flex-direction:column;align-items:flex-start;justify-content:center;gap:2px;width:220px;padding:8px 12px;border:1px solid var(--ink);background:var(--surface)}
  .d-front .ear-r{align-items:flex-end}
  .d-front .ear-v{font-size:1.05rem}
  .d-front .bar .wrap{grid-template-columns:1fr auto;padding-top:14px}
  .d-front .home{grid-column:1/-1;justify-content:center;padding:0 240px}
  .mast-name{font-size:4.6rem;padding:6px 0 10px}
  .d-front .dateline{grid-row:2}
  .d-front .nav-wide{grid-column:1;grid-row:3;justify-content:center;border-bottom:1px solid var(--ink)}
  .d-front .tools{grid-column:2;grid-row:3;border-bottom:1px solid var(--ink);align-self:stretch}
  .d-front .nav-wide a{font:600 .68rem var(--sans);text-transform:uppercase;letter-spacing:.1em;padding:0 12px;border-left:1px solid var(--ink)}
  .d-front .nav-wide a:first-child{border-left:0}
  .d-front .nav-wide a[aria-current=page]{color:var(--accent);text-decoration:none}
}
.paper{padding-top:24px}
.fp-top{display:grid;gap:22px}
@media (min-width:960px){.fp-top{grid-template-columns:8fr 4fr;grid-template-areas:"lead notice" "lead side"}.leadcol{grid-area:lead;border-right:1px solid var(--ink);padding-right:24px}.notice{grid-area:notice}.side{grid-area:side}}
.notice{border:3px double var(--ink);padding:14px 16px;background:var(--surface);align-self:start}
.notice h2{font:700 .8rem var(--sans);text-transform:uppercase;letter-spacing:.12em;margin:0 0 6px;color:var(--accent)}
.notice p{font-size:1.05rem;margin:0 0 8px}
.fp-btn{background:var(--accent);color:#fff;border-radius:0}
.fkicker{font:700 .72rem var(--sans);text-transform:uppercase;letter-spacing:.1em;color:var(--accent);margin:0}
.lead h1{font-family:var(--head);font-size:clamp(1.9rem,1.2rem + 2.2vw,3rem);line-height:1.06;margin:6px 0 12px}
.stand{font-size:1.2rem;font-style:italic;color:var(--muted)}
.leadpic{float:right;margin:4px 0 10px 18px}.leadpic .headshot{border-radius:0;filter:grayscale(1) contrast(1.1)}.leadpic figcaption{font:.75rem var(--sans);color:var(--muted);max-width:240px;margin-top:4px}
@media (max-width:699px){.leadpic{float:none;margin:0 0 12px}.leadpic .headshot{--size:180px!important}}
.drop::first-letter{float:left;font-family:var(--head);font-size:3.6em;line-height:.85;padding:4px 8px 0 0;font-weight:700}
.fquote{font:italic 1.15rem Georgia,serif;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink);padding:10px 0;clear:both}
.side h2,.numbers h2,.inpics h2,.fplang h2,.tendays.narrow>h2{font:700 .8rem var(--sans);text-transform:uppercase;letter-spacing:.12em;border-bottom:2px solid var(--ink);padding-bottom:4px;margin:0 0 8px}
.index{padding-left:1.3em;margin:0 0 18px}.index li{font-family:var(--head);font-size:1.15rem}.index a{color:var(--ink);min-height:44px;display:inline-flex;align-items:center}
.d-front .tendays.narrow .evband{border-radius:0}
.inpics{margin-top:28px;border-top:3px solid var(--ink);padding-top:8px}
.fpics img{filter:grayscale(1) contrast(1.1);transition:filter .3s}
.fpics a:hover img,.fpics a:focus-visible img{filter:none}
.fpics .mat{border-radius:0;background:var(--surface-2)}
.cols{display:grid;gap:0;margin-top:28px;border-top:3px solid var(--ink)}
@media (min-width:760px){.cols{grid-template-columns:repeat(3,1fr)}.story{border-left:1px solid var(--line);padding:16px 18px!important}.story:nth-child(3n+1){border-left:0;padding-left:0!important}}
.story{padding:16px 0;border-bottom:1px solid var(--line)}
.story h3{font-family:var(--head);font-size:1.4rem;margin:10px 0 6px}.story .by{font:.8rem var(--sans);color:var(--muted)}
.story .by a{display:inline-flex;align-items:center;min-height:44px}
.pfig.fp{width:100%;height:120px;background:var(--surface-2);border-radius:0}
.numbers{margin-top:28px}.nums{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:20px}
.nums p{margin:0;border-top:1px solid var(--ink);padding-top:8px}.nums b{display:block;font-family:var(--head);font-size:2.6rem;line-height:1}
.d-front .chart{border-radius:0;border-color:var(--ink)}
.fplang{margin-top:28px}
`);

// ======================= Agent Console: a terminal multiplexer (R2.4) =======================
const SLUG = { '/': 'home', '/built/': 'built', '/how-i-work/': 'how-i-work', '/languages/': 'languages', '/background/': 'background', '/looking-for/': 'looking-for', '/agents/': 'ai' };
const langRows = () => {
  const rows = [...LANGUAGES.speaks.map(l => [l.code, l.name, 'speaks']), ...LANGUAGES.interest.map(l => [l.code || '{ }', l.name, 'an interest in'])];
  return `<svg class="lrows" viewBox="0 0 360 ${rows.length * 36 + 30}" role="img" aria-labelledby="clr-t clr-d"><title id="clr-t">Languages</title><desc id="clr-d">${esc(LANGUAGES.figure.desc)}</desc>${rows.map((r, i) => `<g transform="translate(0 ${i * 36})"><rect width="300" height="28" rx="4" class="${r[2] === 'speaks' ? 'lr-on' : 'lr-off'}"/><text x="12" y="19" class="lr-k">${esc(r[0])}</text><text x="64" y="19">${esc(r[1])}</text><text x="288" y="19" text-anchor="end" class="lr-s">${esc(r[2])}</text></g>`).join('')}<path d="M308 112 h8 V172 h-8" class="lr-br"/><text x="0" y="${rows.length * 36 + 20}" class="lr-s">bracket: ${esc(LANGUAGES.sameInterest.text)} (his words)</text></svg>`;
};
const consolePage = page({
  path: '/d/console/', title: designTitle(D.console), description: DESC, share: 'console', css: ['/d/console/style.css'], cls: 'd-console', design: 'console', scheme: 'dark',
  hdr: {
    band: `<p class="band-ask"><span class="st-dot" aria-hidden="true">●</span> <span class="st-k">status: </span><b>${esc(ASK.short.toUpperCase())}</b></p>
<a class="band-link" href="${LINKEDIN}"><span class="st-k">contact: </span>linkedin${ARROW}</a>`,
    logo: `<span class="vh">${esc(PERSON.name)}: </span><span class="home-name" aria-hidden="true">~/indi-gupte</span><span class="cursor" aria-hidden="true"></span>`,
    nav: (n, i) => n.external ? '[git] source' : `[${i}] ${SLUG[n.href] || n.text}`,
  },
  body: `<div class="wrap con">
<section class="pn op" aria-labelledby="op-h">${headshot({ size: 120, eager: true })}<div><p class="dim mono">operator</p><h1 id="op-h">${esc(PERSON.name)}</h1><p class="dim">${esc(PERSON.tagline.text)} · ${esc(PERSON.place.text)}</p></div>
<p class="op-ask">${esc(ASK.long.text)}${ref(ASK.long.sources)}</p><p class="btns">${linkBtn()}</p>
<div class="counters">${HOME_FIGURES.map(f => `<p><b class="${f.id === 'agents' ? 'g' : ''}">${esc(f.value)}</b><span>${esc(f.label)}${ref(f.sources)}</span></p>`).join('')}</div>
</section>
<section class="pn tfp" aria-labelledby="tf-h"><h2 id="tf-h">team: web-summit.indi</h2>${teamFigure({ id: 'cteam' })}</section>
<section class="pn wide" aria-labelledby="wk-h"><h2 id="wk-h">the week: ${esc('3 to 13 November 2026')}</h2>${tenDaysLog()}</section>
<section class="pn wide" aria-labelledby="log-h"><h2 id="log-h">${esc(WE_BUILT)}</h2><p class="dim">His words, from his post${ref('whatsapp')}.</p>
<ul class="log">${WORKS.map(b => `<li><span class="ok" aria-hidden="true">✓</span> <a href="/built/#${b.id}">${esc(b.title)}</a> <span class="dim">· ${esc(b.link.text)}</span></li>`).join('')}</ul>
${workPics({ cls: 'cpics' })}</section>
<section class="pn wide">${chartCommits('ccc', 'h2')}</section>
<section class="pn wide">${chartMap('ccm', 'h2')}</section>
<section class="pn wide">${chartActivity('cca', 'h2')}</section>
<section class="pn half" aria-labelledby="cl-h"><h2 id="cl-h">languages</h2>${langRows()}<p class="dim">${esc(LANGUAGES.figure.caption)}${ref('linkedin')}</p></section>
<section class="pn half" aria-labelledby="cb-h"><h2 id="cb-h">background</h2>${timeline('log')}${note(['linkedin', 'ws-home'])}</section>
</div>`,
});
out('/d/console/index.html', consolePage);
out('/d/console/style.css', `/* Agent Console: a terminal multiplexer; the header is a status line and a window list (R2.4, R4.4, C30 to C33, C69, C71, C81). Fixed dark palette. Code Apache-2.0. */
.d-console{--bg:#0B1016;--surface:#121A23;--surface-2:#16212C;--ink:#D7E3EA;--muted:#8395A3;--line:#1F2B38;--tile-line:#1F2B38;--accent:#5BD69B;--accent-soft:#16302A;--on-accent:#0B1016;--warm:#F2C14E;--focus:#5BD69B;--head:var(--mono);--evband:#16212C;--run:#5BD69B;--lf-tile:#5BD69B;--lf-on:#0B1016;--c-on:#5BD69B;--c-on-t:#0B1016;--c-off:#8395A3;--c-bar:#5BD69B;--c-mark:rgba(242,193,78,.12);--c-link:rgba(91,214,155,.45);color-scheme:dark}
.d-console .band{border-top:0;border-bottom:0}.d-console .designs-btn .lbl{font-variant-caps:normal;font-size:inherit;letter-spacing:inherit}.d-console .home,.d-console .menu summary,.d-console .src-icon,.d-console .designs-btn{color:var(--ink);border-color:var(--line)}.d-console .nav-wide a+a::before{content:none}.d-console .band-ask{font-variant-caps:normal}.d-console .home-name{font:inherit;letter-spacing:0;font-variant-caps:normal}
/* the status line */
.d-console .band{background:#5BD69B;color:#0B1016;font:600 .8rem var(--mono);--focus:#0B1016}
.d-console .band .wrap{display:flex;justify-content:space-between;align-items:center;flex-wrap:nowrap;min-height:44px;padding-top:0}
.d-console .band p{margin:0;padding:0;white-space:nowrap}.d-console .band-ask{font-size:inherit;letter-spacing:0}
.d-console .band-link{color:#0B1016;text-decoration:underline}
.d-console .st-k{display:none}@media (min-width:700px){.d-console .st-k{display:inline}}
/* the window list */
.d-console .bar{background:#0B1016;border-bottom:1px solid #1F2B38}
.d-console .bar .wrap{min-height:48px}
.d-console .home{font:600 .95rem var(--mono);color:var(--ink);gap:0}
.cursor{display:inline-block;width:9px;height:16px;background:#5BD69B;margin-left:2px;animation:blink 1.2s steps(1) 4}
@keyframes blink{50%{opacity:0}}
.d-console .nav-wide a{font:.74rem var(--mono);color:#8395A3;padding:0 5px}
.d-console .nav-wide a[aria-current=page]{background:#121A23;color:#5BD69B;text-decoration:none}
.d-console .nav-wide a[aria-current=page]::after{content:"*"}
.d-console .nav-wide .ic{display:none}
.d-console .menu summary,.d-console .src-icon{border-radius:0;border-color:#1F2B38;font-family:var(--mono)}
.d-console .designs-btn{border:1px solid #5BD69B;color:#5BD69B;padding:0 6px;border-radius:0;font:600 .8rem var(--mono)}
.d-console .designs-btn .ic{display:none}.d-console .designs-btn::before{content:"[";}.d-console .designs-btn::after{content:"]"}
.d-console .designs-btn .lbl{display:inline;text-transform:lowercase}
@media (max-width:699px){.d-console .band{font-size:.7rem}.d-console .band .wrap{gap:0 8px}.d-console .home{font-size:.85rem}}
/* the panes */
.con{display:grid;gap:16px;padding-top:20px;grid-template-columns:repeat(12,minmax(0,1fr))}
.con>.pn{grid-column:1/-1;background:var(--surface);border:1px solid var(--line);border-radius:0;padding:18px;min-width:0}
@media (min-width:1100px){.op{grid-column:1/5!important;align-self:start;position:sticky;top:12px}.tfp{grid-column:5/13!important}.half{grid-column:span 6!important}}
.pn h2,.pn .ch-h{font-family:var(--mono);font-size:1rem;text-transform:lowercase;color:var(--accent);margin:0 0 10px}
.pn h2::before,.pn .ch-h::before{content:"$ ";color:var(--muted)}
.pn .chart{background:transparent;border:0;padding:0;margin:0}
.op{display:grid;grid-template-columns:auto 1fr;gap:12px 16px;align-items:center}
.op>.op-ask,.op>.btns,.op>.counters{grid-column:1/-1}
.op .headshot{--size:96px!important;border-radius:0;border:1px solid #5BD69B}
.op h1{font-family:var(--mono);font-size:1.5rem;margin:0}.op p{margin:0}.mono{font-family:var(--mono);font-size:.8rem}
.dim{color:var(--muted)}
.counters{display:grid;gap:10px;border-top:1px dashed var(--line);padding-top:12px}
.counters p{margin:0;display:grid;grid-template-columns:118px 1fr;gap:10px;align-items:baseline}
.counters b{font:600 1.7rem/1 var(--mono);white-space:nowrap}.counters .g{color:var(--accent)}.counters span{font-size:.8rem;color:var(--muted)}
.log{list-style:none;padding:0;margin:0;font-family:var(--mono);font-size:.85rem}.log li{padding:6px 0;border-bottom:1px solid var(--line)}.log a{color:var(--ink);display:inline-flex;align-items:center;min-height:44px}.ok{color:var(--accent)}
.log time{display:inline;color:var(--muted);margin-right:8px}
.tlog{list-style:none;padding:0;margin:0;font:.82rem/1.5 var(--mono)}
.tlog li{display:grid;grid-template-columns:auto;padding:6px 0;border-bottom:1px solid var(--line)}
.tlog time{color:var(--muted)}.tl-t{color:var(--warm);white-space:pre}.tl-k{color:var(--accent)}.tl-x{font-family:var(--sans);font-size:.92rem}
@media (min-width:760px){.tlog li{grid-template-columns:96px 52px 70px 1fr;gap:10px;align-items:baseline}}
.cpics{margin-top:16px}.cpics .mat{background:#0E151D;border:1px solid var(--line);border-radius:0}
/* the team figure in the dark palette */
.d-console .teamfig .chip{background:#0E151D}
.d-console .tf-groups{grid-template-columns:1fr}
@media (min-width:760px){.d-console .tf-groups{grid-template-columns:repeat(2,minmax(0,1fr))}}
.d-console .tf-lead{border-color:#5BD69B}
.d-console .ch .c-on{animation:pulse 2.4s ease-in-out infinite alternate}
@keyframes pulse{from{opacity:1}to{opacity:.72}}
.lrows{width:100%;max-width:420px;height:auto}.lrows text{font:13px var(--mono);fill:var(--ink)}
.lr-on{fill:#16302A;stroke:#5BD69B}.lr-off{fill:none;stroke:#8395A3;stroke-dasharray:4 3}.lr-k{fill:#5BD69B!important;font-weight:700}.lr-s{fill:#8395A3!important}.lr-br{fill:none;stroke:#F2C14E;stroke-width:2}
.d-console .note{border-color:var(--line)}
.d-console .btn-primary{border-radius:0}
`);

// ======================= The Card: his personal card on a desk (R2.5, C66 to C69) =======================
const CA = D.card.copy;
const LANG_CODES = ['en', 'it', 'fr'];
const marks = '<span class="cm tl" aria-hidden="true"></span><span class="cm tr" aria-hidden="true"></span><span class="cm bl" aria-hidden="true"></span><span class="cm br" aria-hidden="true"></span>';
const cardPage = page({
  path: '/d/card/', title: designTitle(D.card), description: DESC, share: 'card', css: ['/d/card/style.css'], cls: 'd-card', design: 'card', scheme: 'dark', ask: false,
  hdr: {
    band: `<p class="band-ask"><b>${esc(ASK.short)}</b></p>\n<a class="band-link" href="${LINKEDIN}">${linkedinLabel}${ARROW}</a>`,
    logo: `<span class="home-name">${esc(PERSON.name)}</span>`,
  },
  body: `<div class="desk">
<div class="wrap">
<div class="cards" id="bcard">
<div class="cw front-w"><p class="flab" aria-hidden="true">Front</p>
<div class="face front">${marks}
<div class="cf-top">${headshot({ size: 120, eager: true, cls: 'cphoto' })}<div class="cf-id"><h1 class="cname">${esc(CA.front[0])}</h1><p class="csub">${esc(CA.front[1])}</p><span class="crule" aria-hidden="true"></span><p class="cask">${esc(CA.front[2])}</p></div></div>
<p class="crow"><a href="${LINKEDIN}">${esc(CA.front[3])}</a><span>${esc(CA.front[4])}</span></p>
</div></div>
<div class="cw back-w"><p class="flab" aria-hidden="true">Back</p>
<div class="face back">${marks}
<p class="ck">What I bring${ref('whatsapp')}</p>
<ul class="cphr">${BRING_PHRASES.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
<p class="cnum">${esc(CA.back.numbers)}</p>
<p class="clang">${CA.languagesLine.split(' · ').map((l, i) => `<span lang="${LANG_CODES[i]}">${esc(l)}</span>`).join(' · ')}</p>
</div></div>
</div>
<p class="btns cbtns"><button type="button" id="turn" class="btn cbtn-turn" hidden aria-pressed="false" aria-controls="bcard">${esc(CA.turnOver)}</button>${linkBtn('btn cbtn-primary')}<a class="btn cbtn-more" href="#more">More</a></p>
<p class="cintro">${esc(designIdea(D.card))}${ref('whatsapp')} His personal card, not a RiskMandate card.</p>
</div>
</div>
<div class="wrap">
<details id="more" class="cmore"><summary>More about Indi</summary>
<div class="msheet">
<section><h2>What he built</h2>${fact(worksList(), ['whatsapp'])}${workPics({ cls: 'mpics' })}${fact(`<p>In his words: "${esc(CARDS_QUOTE)}". ${esc(BUILT.find(b => b.id === 'cards').paragraph)}</p>`, BUILT.find(b => b.id === 'cards').sources)}</section>
<section>${tenDays({ id: 'card-days', title: 'His ten days, 3 to 13 November 2026', cls: 'narrow' })}</section>
<section><h2>How he works</h2>${fact(`<p>${esc(TEAM_LINE)}. ${esc(COMMITS_LINE)}. ${esc(AGENTS.howHeWorks[0].text)}</p><p><a class="more" href="/how-i-work/">His agent teams, drawn</a></p>`, [...TEAM_SRC, ...COMMITS_SRC, ...AGENTS.howHeWorks[0].sources])}</section>
<section><h2>Languages</h2>${languagesFigure('clf')}</section>
<section><h2>Background</h2>${fact(timeline(), ['linkedin', 'ws-home'])}</section>
<section><h2>Looking for</h2><p>${esc(ASK.long.text)}${ref(ASK.long.sources)}</p><p class="btns">${linkBtn()}</p></section>
<section><h2>Sources</h2><p><a class="more" href="/sources/">Every source, with the date it was read</a></p></section>
</div>
</details>
</div>`,
});
out('/d/card/index.html', cardPage);
out('/d/card/style.css', `/* The Card: his personal card, front and back, on a dark desk under a lamp (R2.5, C66 to C69, C35 to C37). Fixed dark desk. Code Apache-2.0. */
.d-card{--bg:#24231F;--surface:#2E2C27;--surface-2:#34322C;--ink:#EDEAE3;--muted:#B5B0A5;--line:#3A3832;--accent:#F2B38F;--accent-soft:#3A342D;--on-accent:#1A1A1A;--warm:#F2B38F;--focus:#F2B38F;--head:"Gill Sans","Gill Sans MT",Seravek,"Trebuchet MS",system-ui,sans-serif;--lf-tile:#F2B38F;--lf-on:#1A1A1A;--lf-warm:#F2B38F;--c-on:#F2B38F;--c-on-t:#1A1A1A;--c-bar:#F2B38F;color-scheme:dark}
.d-card body,.d-card{background:#24231F}
.d-card main{font-family:var(--head)}
.d-card .band{border-top:0;border-bottom:0}.d-card .designs-btn .lbl{font-variant-caps:normal;font-size:inherit;letter-spacing:inherit}.d-card .home,.d-card .menu summary,.d-card .src-icon,.d-card .designs-btn{color:var(--ink);border-color:var(--line)}.d-card .nav-wide a+a::before{content:none}.d-card .band-ask{font-variant-caps:normal}.d-card .home-name{font:inherit;font-variant-caps:normal}
/* header on the desk */
.d-card .band{background:transparent;color:var(--ink);font-family:var(--head)}
.d-card .band-ask{font-size:.75rem;letter-spacing:.14em;text-transform:uppercase}
.d-card .band-link{color:#F2B38F;text-decoration:underline}
.d-card .bar{background:transparent;border-bottom:1px solid #3A3832}
.d-card .home{font:600 .9rem var(--head);letter-spacing:.2em;text-transform:uppercase}
.d-card .nav-wide a{font:.75rem var(--head);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:0 9px}
.d-card .nav-wide a[aria-current=page]{color:var(--ink);text-decoration-thickness:1px;text-decoration-color:var(--ink)}
.d-card .menu summary,.d-card .src-icon{border-color:#5A5750;border-radius:22px;font-family:var(--head)}
.d-card .designs-btn{border:1px solid #EDEAE3;color:#EDEAE3;border-radius:22px;font:600 .75rem var(--head);letter-spacing:.12em;text-transform:uppercase}
/* the desk and the cards */
.desk{background:radial-gradient(60% 50% at 50% 35%,#34322C 0%,#24231F 70%);padding:28px 0 36px}
.cards{display:grid;gap:32px;justify-content:center;grid-template-columns:minmax(0,560px)}
.cw{container-type:inline-size;min-width:0}
.flab{margin:0 0 10px;font:.7rem var(--head);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.face{position:relative;border-radius:1.2cqi;box-shadow:0 2px 0 rgba(0,0,0,.25),0 30px 60px -20px rgba(0,0,0,.6);padding:7cqi;min-height:calc(100cqi * 55 / 85)}
.cm{position:absolute;width:16px;height:16px;border-color:#8A857A;border-style:solid;border-width:0}
.cm.tl{left:-26px;top:-26px;border-right-width:1px;border-bottom-width:1px}.cm.tr{right:-26px;top:-26px;border-left-width:1px;border-bottom-width:1px}
.cm.bl{left:-26px;bottom:-26px;border-right-width:1px;border-top-width:1px}.cm.br{right:-26px;bottom:-26px;border-left-width:1px;border-top-width:1px}
@media (max-width:460px){.cm{display:none}}
.front{background:#FFFFFF;color:#1A1A1A;--focus:#B4471F;display:flex;flex-direction:column;justify-content:space-between;gap:4cqi}
.cf-top{display:flex;gap:5cqi;align-items:flex-start}
.cphoto{--size:24cqi!important;border-radius:1.5cqi;background:#0F2747}
.cname{font:600 max(26px,7.4cqi)/1.05 var(--head);margin:0;color:#1A1A1A;letter-spacing:.01em}
.csub{margin:1.2cqi 0 0;font-size:max(13px,3.1cqi);color:#5B5B5B;line-height:1.3}
.crule{display:block;width:40cqi;max-width:100%;height:max(2px,.4cqi);background:#B4471F;margin:3cqi 0 2.4cqi}
.cask{margin:0;font-size:max(12px,3.1cqi);letter-spacing:.12em;text-transform:uppercase;color:#B4471F;font-weight:600}
.crow{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0 12px;margin:0;font-size:max(12px,2.9cqi)}
.crow a{color:#1A1A1A;min-height:44px;display:inline-flex;align-items:center;overflow-wrap:anywhere}
.crow span{font-size:max(12px,2.6cqi);letter-spacing:.12em;text-transform:uppercase;color:#5B5B5B}
.back{background:#1E4D8C;color:#FFFFFF;--focus:#FFFFFF;display:flex;flex-direction:column;justify-content:center;gap:2.4cqi}
.back .refs a{color:#FFFFFF}
.ck{margin:0;font-size:max(12px,2.6cqi);letter-spacing:.14em;text-transform:uppercase;color:#C9D8EE}
.cphr{list-style:none;margin:0;padding:0;font-size:max(15px,3.9cqi);line-height:1.3}.cphr li{padding:.5cqi 0}
.cnum,.clang{margin:0;font-size:max(12px,2.8cqi);color:#C9D8EE;line-height:1.4}
.clang{color:#FFFFFF}
.cbtns{justify-content:center;margin-top:28px}
.cbtn-primary{background:#EDEAE3;color:#1A1A1A}
.cbtn-more,.cbtn-turn{color:#EDEAE3;box-shadow:inset 0 0 0 2px #EDEAE3;background:transparent;border:0;cursor:pointer}
.cintro{text-align:center;color:var(--muted);font-size:.85rem;max-width:40rem;margin:18px auto 0}
@media (min-width:1100px){
  .cards{grid-template-columns:repeat(2,minmax(0,528px));gap:40px}
  #turn{display:none!important}
}
@media (max-width:1099px){
  .cards.js{grid-template-columns:minmax(0,560px);perspective:1600px}
  .cards.js .cw{grid-area:1/1;backface-visibility:hidden;transition:transform .5s;transform-style:preserve-3d}
  .cards.js .flab{display:none}
  .cards.js .back-w{transform:rotateY(180deg)}
  .cards.js.flipped .front-w{transform:rotateY(-180deg)}.cards.js.flipped .back-w{transform:rotateY(0)}
}
@media (max-width:1099px) and (prefers-reduced-motion:reduce){.cards.js .cw{transform:none!important;transition:opacity .2s!important}.cards.js .back-w{opacity:0}.cards.js.flipped .front-w{opacity:0}.cards.js.flipped .back-w{opacity:1}}
/* More: everything that does not fit on a card, on a light sheet */
.cmore{margin:32px auto 0;max-width:820px}
.cmore>summary{min-height:48px;display:flex;align-items:center;justify-content:center;font:600 .9rem var(--head);letter-spacing:.14em;text-transform:uppercase;border:1px solid #5A5750;color:var(--ink);list-style:none}
.cmore>summary::-webkit-details-marker{display:none}
.msheet{--bg:#EDEAE3;--surface:#FFFFFF;--surface-2:#E3DED3;--ink:#1A1A1A;--muted:#5B5B5B;--line:#CFC8BA;--accent:#1E4D8C;--accent-soft:#E3DED3;--on-accent:#FFFFFF;--warm:#8F3415;--focus:#B4471F;--evband:#E3DED3;--run:#1F7A4D;--lf-tile:#1E4D8C;--lf-on:#FFFFFF;--lf-warm:#8F3415;background:#EDEAE3;color:#1A1A1A;padding:8px 24px 24px;margin-top:12px}
.msheet section{border-top:1px solid var(--line);padding-top:12px}.msheet section:first-child{border-top:0}
.msheet .btn-primary{background:#1A1A1A;color:#fff}
.d-card .foot{background:#24231F}
@media print{.cbtns{display:none}.cards.js .cw{transform:none!important}.cmore{display:block}}
`);

// ======================= /d/ and /designs.json =======================
const LEAD = { briefing: '#8C1D18', lingua: '#1E4D8C', 'front-page': '#111111', console: '#5BD69B', card: '#24231F' };
out('/d/index.html', page({
  path: '/d/', title: PAGES.d.title, description: PAGES.d.description, css: ['/d/chooser.css'], design: '',
  body: `<div class="wrap hero-in"><p class="kicker">${esc(PAGES.d.kicker)}</p><h1>${esc(PAGES.d.h1)}</h1><p class="lede">${esc(PAGES.d.lede)}</p></div>
<div class="wrap"><ul class="chooser">${DESIGNS.map(d => `<li style="--lead:${LEAD[d.slug]}"><a href="${designHref(d)}">${thumb(d.slug)}<span class="cn"><b>${esc(d.name)}</b>${d.default ? `<span class="tag dim">${esc(PAGES.d.home)}</span>` : ''}</span><span>${esc(designIdea(d))}</span><span class="muted">Leads with: ${esc(designLeads(d))}</span><span class="more">${esc(PAGES.d.open)}</span></a></li>`).join('')}</ul></div>`,
}));
out('/d/chooser.css', `.chooser{list-style:none;padding:0;display:grid;gap:22px;grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr))}
.chooser a{display:flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-top:6px solid var(--lead,var(--accent));border-radius:4px;padding:12px}
.chooser a:hover,.chooser a:focus-visible{box-shadow:0 0 0 2px var(--accent)}
.chooser img,.chooser .nothumb{width:100%;height:auto;aspect-ratio:480/300;display:block;border-radius:2px;background:var(--accent-soft)}
.chooser .cn{display:flex;gap:8px;align-items:center;font-size:1.2rem;margin-top:6px}.chooser .more{color:var(--accent)}
`);
out('/designs.json', JSON.stringify({
  about: `The five designs of ${SITE}: the same facts, laid out five ways.`,
  designs: DESIGNS.map(d => ({ slug: d.slug, name: d.name, idea: designIdea(d), leads_with: designLeads(d), path: designHref(d), url: `${SITE}${designHref(d)}`, thumb: `/assets/designs/${d.slug}.jpg`, share: `${SITE}/assets/share/${d.slug}.jpg`, default: !!d.default })),
}, null, 1) + '\n');
console.log('designs: briefing (home), lingua, front-page, console, card; /d/ and /designs.json');
