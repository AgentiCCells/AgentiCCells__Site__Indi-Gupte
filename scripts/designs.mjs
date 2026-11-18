// The five designs of the home page (proposal D3, with the reviewer's conditions C17 to C38): The Briefing (the home
// page, at /), Lingua, Front Page, Agent Console and The Card; the chooser at /d/ and /designs.json.
// Copyright 2026 AgentiCCells. Code Apache-2.0; the text it writes is CC BY 4.0.
// Pattern adapted from the Marc Noah site's scripts/designs.mjs (Apache-2.0,
// https://github.com/AgentiCCells/AgentiCCells__Site__Marc-Noah/blob/dev/scripts/designs.mjs, read 2026-11-18).
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1. Run by scripts/generate.mjs.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import {
  READ_DATE_TEXT, LINKEDIN, LINKEDIN_TEXT, PERSON, QUOTES, ASK, WEB_SUMMIT, BUILT, AGENTS, LANGUAGES, BACKGROUND,
  DESIGNS, LINGUA_TITLES, PAGES, SITE,
} from '../data/facts.mjs';
import {
  esc, fmtDay, ref, note, fact, page, head, headshot, languagesFigure, workFig, chartTeams, chartCommits, chartMap,
  chartActivity, postBlock, stats, TEAM_LINE, TEAM_SRC, COMMITS_LINE, COMMITS_SRC, WE_BUILT, CARDS_QUOTE, thumb,
  designHref, designIdea, AGENT_LIST, videoSlot,
} from './lib.mjs';

const out = (p, s) => { const f = `src${p}`; mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };
const D = Object.fromEntries(DESIGNS.map(d => [d.slug, d]));
const WORKS = BUILT.filter(b => b.kind === 'work');
const DESC = `${PERSON.name}, ${PERSON.place.text}: ${PERSON.tagline.text.toLowerCase()}. ${ASK.short}. ${TEAM_LINE}.`; // C5: not PAGES.home.description
const TALK = PERSON.profileSummary.paragraphs[4]; // "He is glad to talk to people working in languages, AI, medicine or diplomacy."
const linkBtn = (cls = 'btn btn-primary') => `<a class="${cls}" href="${LINKEDIN}">${esc(ASK.button.text)}</a>`;
const worksList = (cls = '') => `<ul class="works${cls ? ` ${cls}` : ''}">${WORKS.map(b => `<li><a href="/built/#${b.id}"><b>${esc(b.title)}</b></a> <span>${esc(b.oneLine)}</span>${ref(b.sources.filter(s => s !== 'whatsapp'))}</li>`).join('')}</ul>`;
const designTitle = d => `${d.name} · ${PERSON.name}`;

// ======================= The Briefing (home, at /) =======================
const B = D.briefing.copy;
const seal = `<svg class="seal" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" class="s1"/><circle cx="32" cy="32" r="24" class="s2"/><text x="32" y="40" text-anchor="middle">IG</text></svg>`;
const para = (n, title, body, ids = [], id = '') => `<section class="bp"${id ? ` id="${id}"` : ''} aria-labelledby="bp${n}"><h2 id="bp${n}"><span class="pn">${n}.</span> ${esc(title)}</h2>${body}</section>`;
const briefing = page({
  path: '/', title: PAGES.home.title, description: DESC, share: 'indi-gupte', css: ['/d/briefing/style.css'], cls: 'd-briefing', design: 'briefing',
  body: `<div class="sheet wrap">
<header class="bh">
<div class="bh-text">
<p class="blabel">${esc(B.label.text)}</p>
<h1>${esc(PERSON.name)}</h1>
<p class="bsub">${esc(PERSON.tagline.text)} · ${esc(PERSON.place.text)}${ref(PERSON.tagline.sources, PERSON.place.sources)}</p>
<div class="purpose" role="note" aria-label="Purpose">
<p><b class="plab">Purpose</b> ${esc(B.purpose.text.replace(/^Purpose: /, ''))}${ref(B.purpose.sources)}</p>
<p class="btns">${linkBtn()}<a class="btn btn-secondary" href="${ASK.secondary.href}">${esc(ASK.secondary.text)}</a></p>
</div>
<p class="blede">${esc(PAGES.home.lede)}${ref(PAGES.home.sources)} <span class="muted">(${esc(AGENTS.running.text)}${ref(AGENTS.running.sources)})</span></p>
</div>
<div class="bh-photo">${headshot({ size: 240, eager: true, cls: 'portrait' })}${seal}</div>
</header>
${para(1, B.paragraphs[0], `${fact(postBlock(), ['whatsapp'])}`)}
${para(2, B.paragraphs[1], `${WORKS.map(b => fact(`<div class="bw">${workFig(b.id, b.title, 'sm')}<div><h3><a href="/built/#${b.id}">${esc(b.title)}</a></h3><p>${esc(b.oneLine)} <span class="muted">His part: ${esc(b.role)}.</span></p></div></div>`, b.sources)).join('\n')}
${videoSlot()}
<p><a class="more" href="/built/">Every piece of work, and his pages at web-summit.sgit.ai</a></p>`)}
${para(3, B.paragraphs[2], `${stats()}${chartTeams('hct', 'h3')}<p><a class="more" href="/how-i-work/">All four charts of his agent teams</a></p>`)}
${para(4, B.paragraphs[3], languagesFigure('hlf'))}
${para(5, B.paragraphs[4], fact(`<ul class="timeline-list">${BACKGROUND.timeline.map(t => `<li><time>${esc(t.when.text)}</time>${esc(t.title)}${t.note ? ` <span class="muted">(${esc(t.note.replace(/\.$/, '').toLowerCase())})</span>` : ''}</li>`).join('')}</ul><p>${esc(BACKGROUND.undated[0].title)}: ${esc(BACKGROUND.undated[0].text)}</p>`, ['linkedin', 'ws-home']))}
${para(6, B.paragraphs[5], fact(`<p>${esc(TALK)}</p><ul class="fields">${ASK.fields.map(f => `<li><a href="${f.link}">${esc(f.name)}</a></li>`).join('')}</ul>`, ASK.fieldsIntro.sources))}
${para(7, B.paragraphs[6], `<p>${esc(B.nextStep.text)} ${esc(PERSON.contactNote.text)}</p><p class="btns">${linkBtn()}</p>`)}
</div>`,
});
out('/index.html', briefing);
out('/d/briefing/index.html', `${head({ title: designTitle(D.briefing), description: DESC, path: '/d/briefing/', refresh: '/', canonical: '/' })}
<body><main class="wrap" style="padding:48px 16px"><h1>${esc(D.briefing.name)}</h1><p>The Briefing is the home page: <a href="/">open it</a>.</p></main></body></html>
`);
out('/d/briefing/style.css', `/* The Briefing: a diplomat's briefing note (D3.1). Code Apache-2.0. */
.d-briefing{--bg:#F7F4EC;--surface:#FFFDF8;--surface-2:#EFE8DA;--ink:#13233F;--muted:#4A5468;--line:#B8AE98;--accent:#13233F;--accent-soft:#E6E2D6;--on-accent:#FFFFFF;--warm:#8C1D18;--focus:#8C1D18;--head:var(--serif);--lf-tile:#13233F;--lf-warm:#8C1D18;--c-on:#13233F;--c-bar:#13233F;--c-link:rgba(19,35,63,.4)}
@media (prefers-color-scheme:dark){.d-briefing{--bg:#10192A;--surface:#16213A;--surface-2:#1C2945;--ink:#EDE7DA;--muted:#A9B3C4;--line:#2E3A52;--accent:#9FC0EE;--accent-soft:#1F2B44;--on-accent:#10192A;--warm:#F09A8E;--focus:#F09A8E;--lf-tile:#9FC0EE;--lf-warm:#F09A8E;--c-on:#9FC0EE;--c-bar:#9FC0EE;--c-link:rgba(159,192,238,.45)}}
.d-briefing main{font-family:var(--serif)}
.d-briefing .btn-primary{background:var(--ink);color:var(--bg)}
.sheet{max-width:1088px;padding-top:28px}
@media (min-width:960px){.sheet{background:var(--surface);border:1px solid var(--line);margin-top:32px;padding:48px 56px 32px;box-shadow:0 30px 60px -40px rgba(19,35,63,.4)}}
.bh{display:grid;gap:20px;border-bottom:2px solid var(--ink);padding-bottom:24px}
@media (min-width:860px){.bh{grid-template-columns:1fr 260px;gap:40px}}
.blabel{font-family:var(--sans);font-variant-caps:all-small-caps;letter-spacing:.08em;color:var(--warm);font-weight:600;margin:0 0 8px}
.d-briefing h1{font-size:clamp(2.4rem,1.5rem + 2.8vw,3.4rem);margin:0}
.bsub{font-size:1.25rem;color:var(--muted);margin:6px 0 16px}
.purpose{border-left:4px solid var(--ink);background:var(--surface-2);padding:14px 18px;margin:0 0 16px}
.purpose p{margin:0}.plab{font-family:var(--sans);font-variant-caps:all-small-caps;letter-spacing:.08em;color:var(--warm);margin-right:6px}
.blede{font-size:1.1rem}
.bh-photo{position:relative;justify-self:start;align-self:start;width:max-content;order:-1}
@media (min-width:860px){.bh-photo{order:0;justify-self:end;margin-top:12px}}
@media (max-width:859px){.bh-photo{order:0}.bh-photo .headshot{--size:160px!important}.bh-photo .seal{width:48px;height:48px}}
.seal{position:absolute;right:-14px;bottom:-14px;width:64px;height:64px}
.seal .s1{fill:var(--bg);stroke:var(--warm);stroke-width:3}.seal .s2{fill:none;stroke:var(--warm);stroke-width:1.5}.seal text{font:600 22px var(--serif);fill:var(--warm)}
.bp{padding:28px 0 8px;border-bottom:1px solid var(--line)}
.bp>h2{margin:0 0 16px;font-size:1.5rem}.pn{font-family:var(--sans);color:var(--warm);font-size:.9em;margin-right:4px}
.bw{display:flex;gap:16px;align-items:flex-start}.bw h3{margin:0 0 4px;font-size:1.1rem}.bw p{margin:0}
.pfig.sm{width:96px;height:64px;flex:none}
.fields{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.fields a{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border:1px solid var(--ink);border-radius:999px;font-family:var(--sans);font-variant-caps:all-small-caps;letter-spacing:.08em;font-weight:600;text-decoration:none;color:var(--ink)}
@media print{.sheet{box-shadow:none;border:0;padding:0}.bp{break-inside:avoid}}
`);

// ======================= Lingua =======================
const LT = Object.fromEntries(LINGUA_TITLES.map(t => [t.id, t]));
const lh = (id, n) => { const t = LT[id]; return `<header class="lh"><h2 id="lt-${id}">${esc(t.en)}</h2><p class="gloss"><span lang="it">${esc(t.it)}</span><span lang="fr">${esc(t.fr)}</span></p></header>`; };
const lingua = page({
  path: '/d/lingua/', title: designTitle(D.lingua), description: DESC, share: 'lingua', css: ['/d/lingua/style.css'], cls: 'd-lingua', design: 'lingua', scheme: 'light',
  body: `<div class="lhero wrap">
<div class="lhero-text">
<p class="kicker">${esc(PERSON.tagline.text)}</p>
<h1>${esc(PERSON.name)}</h1>
<p class="lline">${esc(PERSON.profileSummary.paragraphs[0])}${ref('linkedin')}</p>
<p class="ask-line"><b>${esc(ASK.short)}</b> · ${esc(TEAM_LINE)}${ref(TEAM_SRC)}</p>
<p class="btns">${linkBtn()}</p>
<div class="lphoto">${headshot({ size: 200, eager: true })}<p class="muted">${esc(PERSON.photo.credit)}</p></div>
</div>
<div class="lfig"><span class="wm" lang="sa" aria-hidden="true">${esc(LANGUAGES.interest[0].ownName)}</span>${languagesFigure('llf')}</div>
</div>
<div class="wrap lbody">
<p class="glossnote">${esc(D.lingua.copy.glossNote.text)} They await Indi's approval.</p>
<section aria-labelledby="lt-summary">${lh('summary')}${fact(PERSON.profileSummary.paragraphs.slice(1).map(p => `<p>${esc(p)}</p>`).join(''), ['linkedin'])}</section>
<section aria-labelledby="lt-built">${lh('built')}${fact(worksList(), ['whatsapp'])}</section>
<section aria-labelledby="lt-how-i-work">${lh('how-i-work')}${fact(`<blockquote>${esc(QUOTES.extracts.bring)}</blockquote><p>${esc(TEAM_LINE)}. ${esc(COMMITS_LINE)}.</p><p><a class="more" href="/how-i-work/">His agent teams, drawn</a></p>`, ['whatsapp', ...TEAM_SRC, ...COMMITS_SRC])}</section>
<section aria-labelledby="lt-languages">${lh('languages')}${LANGUAGES.whereTheyLead.map(w => fact(`<p>${esc(w.text)}</p>`, w.sources)).join('')}</section>
<section aria-labelledby="lt-background">${lh('background')}${fact(`<ul class="timeline-list">${BACKGROUND.timeline.map(t => `<li><time>${esc(t.when.text)}</time>${esc(t.title)}</li>`).join('')}</ul><p>${esc(BACKGROUND.undated[0].title)}. ${esc(BACKGROUND.undated[0].text)}</p>`, ['linkedin', 'ws-home'])}</section>
<section aria-labelledby="lt-fields">${lh('fields')}${fact(`<p>${esc(TALK)}</p><ul class="lf-fields">${ASK.fields.map(f => `<li><b>${esc(f.name)}</b> ${esc(f.line)}</li>`).join('')}</ul>`, ['linkedin'])}</section>
<section aria-labelledby="lt-looking-for" class="lend">${lh('looking-for')}<p>${esc(ASK.long.text)}${ref(ASK.long.sources)}</p><p class="btns">${linkBtn()}</p></section>
<section aria-labelledby="lt-sources">${lh('sources')}<p><a class="more" href="/sources/">Every source, with its address and the date it was read</a></p></section>
</div>`,
});
out('/d/lingua/index.html', lingua);
out('/d/lingua/style.css', `/* Lingua: a polyglot edition (D3.2). Light design. Code Apache-2.0. */
.d-lingua{--bg:#F5EFE3;--surface:#FBF7EE;--surface-2:#EDE3D0;--ink:#1F1A14;--muted:#5A5246;--line:#D8CCB4;--accent:#1E4D8C;--accent-soft:#E7E4EA;--on-accent:#FFFFFF;--warm:#8C2A3B;--focus:#1E4D8C;--band:#1F1A14;--on-band:#F5EFE3;--band-link:#F2C29A;--en:#1E4D8C;--it:#1F6B3A;--fr:#8C2A3B;--sa:#9A4A00;--code:#4B3F8C;--lf-tile:#1E4D8C;--lf-warm:#9A4A00;color-scheme:light}
.d-lingua .btn-primary{background:var(--ink);color:#fff}
.lhero{display:grid;gap:28px;padding-top:36px;padding-bottom:20px}
@media (min-width:960px){.lhero{grid-template-columns:5fr 7fr;gap:48px;align-items:start}}
.d-lingua h1{font-size:clamp(2.5rem,1.6rem + 3vw,3.6rem);margin:0 0 10px}
.lline{font-family:var(--serif);font-size:1.25rem;font-style:italic}
.ask-line{border-top:2px solid var(--fr);padding-top:10px}
.lphoto{display:flex;gap:14px;align-items:flex-end;margin-top:18px}.lphoto p{font-size:.78rem;margin:0}
@media (max-width:699px){.lphoto .headshot{--size:140px!important}}
.lfig{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:22px;overflow:hidden}
.lfig .langs{position:relative}
.wm{position:absolute;right:-10px;bottom:-30px;font-family:var(--deva);font-size:160px;line-height:1;color:var(--sa);opacity:.08;pointer-events:none;z-index:0}.lfig .langs{z-index:1;white-space:nowrap}
.d-lingua .lf .t-en{fill:var(--en)}.d-lingua .lf .t-it{fill:var(--it)}.d-lingua .lf .t-fr{fill:var(--fr)}.d-lingua .lf .t-sa{stroke:var(--sa)}.d-lingua .lf .t-pl{stroke:var(--code)}
.lbody section{padding:26px 0 6px;border-top:1px solid var(--line)}
.lh{display:grid;gap:2px 32px;margin-bottom:12px}
@media (min-width:960px){.lh{grid-template-columns:minmax(0,7fr) minmax(0,4fr);align-items:baseline}}
.lh h2{margin:0;color:var(--en)}
.gloss{margin:0;font-family:var(--serif);font-style:italic;display:flex;flex-wrap:wrap;gap:4px 18px}
.gloss [lang=it]{color:var(--it)}.gloss [lang=fr]{color:var(--fr)}
.glossnote{font-size:.85rem;color:var(--muted)}
.works{list-style:none;padding:0}.works li{padding:8px 0;border-bottom:1px dotted var(--line)}.works span{color:var(--muted)}
.lf-fields{padding-left:1.1em}
.lend{background:var(--surface-2);padding:24px!important;border-radius:12px;border-top:0!important;margin-top:20px}
`);

// ======================= Front Page =======================
const FP = D['front-page'].copy;
const headline = `${PERSON.name}, ${WEB_SUMMIT.editor.text.replace(/\.$/, '').replace(/^One/, 'one')}, is looking for work experience`; // C25
const notice = `Wanted: work experience. ${TALK.replace(/^He is glad/, 'Glad')} Reply via LinkedIn.`; // C26
const front = page({
  path: '/d/front-page/', title: designTitle(D['front-page']), description: DESC, share: 'front-page', css: ['/d/front-page/style.css'], cls: 'd-front', design: 'front-page', scheme: 'light',
  body: `<div class="wrap paper">
<div class="mast"><p class="mast-name">${esc(PERSON.name)}</p>
<p class="dateline"><span>${esc(PERSON.place.text)}</span><span>${esc(WEB_SUMMIT.event.text)}, ${esc(WEB_SUMMIT.event.dates.text)}</span><a href="${LINKEDIN}">${esc(ASK.short)}</a></p></div>
<div class="fp-top">
<aside class="notice" aria-labelledby="nt-h"><h2 id="nt-h">Notice</h2><p>${esc(notice)}${ref('whatsapp', 'linkedin')}</p><p>${linkBtn('btn fp-btn')}</p></aside>
<article class="lead">
<p class="fkicker">The lead story</p>
<h1>${esc(headline)}</h1>
<p class="stand">"${esc(QUOTES.extracts.intro)}"${ref('whatsapp')}</p>
<figure class="leadpic">${headshot({ size: 240, eager: true })}<figcaption>${esc(FP.photoCaption)}</figcaption></figure>
<p class="drop">${esc(PAGES.home.lede)}${ref(PAGES.home.sources)} ${esc(WEB_SUMMIT.editor.text)}${ref(WEB_SUMMIT.editor.sources)} ${esc(WEB_SUMMIT.joined.text)}${ref(WEB_SUMMIT.joined.sources)}</p>
<p>${esc(PERSON.profileSummary.paragraphs[0])} ${esc(PERSON.profileSummary.paragraphs[3])}${ref('linkedin')}</p>
</article>
<aside class="side">
<h2>${esc(FP.indexTitle)}</h2>
<ol class="index">${WORKS.map(b => `<li><a href="#fp-${b.id}">${esc(b.title)}</a></li>`).join('')}</ol>
<div class="fbox"><h2>Languages</h2>${languagesFigure('flf')}</div>
</aside>
</div>
<div class="cols">${WORKS.map(b => `<article class="story" id="fp-${b.id}">${workFig(b.id, b.title, 'fp')}<h3>${esc(b.title)}</h3><p>${esc(b.paragraph)}${ref(b.sources)}</p><p class="by">His part: ${esc(b.role)}. <a href="${esc(b.link.url)}">${esc(b.link.text)}</a></p></article>`).join('')}</div>
<section class="numbers" aria-labelledby="bn-h"><h2 id="bn-h">${esc(FP.numbersTitle)}</h2>
<div class="nums"><p><b>${AGENTS.total.value}</b> AI agents in his team${ref(AGENTS.total.sources)}</p><p><b>${AGENTS.running.value}</b> of them running${ref(AGENTS.running.sources)}</p><p><b>${AGENTS.commits.value}</b> ${esc(AGENTS.commits.text)}, 3 to 13 November 2026${ref(COMMITS_SRC)}</p></div>
${chartCommits('fcc', 'h3')}
</section>
</div>`,
});
out('/d/front-page/index.html', front);
out('/d/front-page/style.css', `/* Front Page: a newspaper front page about his week (D3.3). Light design. Code Apache-2.0. */
.d-front{--bg:#FBFAF6;--surface:#FFFFFF;--surface-2:#F1EEE6;--ink:#111111;--muted:#555049;--line:#111111;--accent:#B3121B;--accent-soft:#F4E4E2;--on-accent:#FFFFFF;--warm:#B3121B;--focus:#B3121B;--band:#111111;--on-band:#FBFAF6;--band-link:#F5B7B1;--head:"Bodoni 72",Didot,"Bodoni MT","Big Caslon",Georgia,serif;--lf-tile:#111111;--lf-warm:#B3121B;--c-on:#111;--c-bar:#111;color-scheme:light}
.d-front main{font-family:Georgia,"Times New Roman",serif}
.paper{padding-top:24px}
.mast{border-top:4px solid var(--ink);border-bottom:1px solid var(--ink);padding:10px 0 6px;text-align:center;margin-bottom:22px;box-shadow:0 3px 0 var(--bg),0 4px 0 var(--ink)}
.mast-name{font-family:var(--head);font-size:clamp(2.5rem,1.5rem + 4vw,4.2rem);font-weight:700;margin:0;line-height:1;letter-spacing:-.01em}
.dateline{display:flex;flex-wrap:wrap;justify-content:center;gap:0 22px;font:600 .72rem var(--sans);text-transform:uppercase;letter-spacing:.08em;margin:8px 0 0;color:var(--muted)}
.dateline span,.dateline a{min-height:44px;display:inline-flex;align-items:center}.dateline a{color:var(--accent)}
.fp-top{display:grid;gap:22px}
@media (min-width:960px){.fp-top{grid-template-columns:8fr 4fr;grid-template-areas:"lead notice" "lead side"}.lead{grid-area:lead;border-right:1px solid var(--ink);padding-right:24px}.notice{grid-area:notice}.side{grid-area:side}}
.notice{border:3px double var(--ink);padding:14px 16px;background:var(--surface)}
.notice h2{font:700 .8rem var(--sans);text-transform:uppercase;letter-spacing:.12em;margin:0 0 6px;color:var(--accent)}
.notice p{font-size:1.05rem;margin:0 0 8px}
.fp-btn{background:var(--accent);color:#fff}
.fkicker{font:700 .72rem var(--sans);text-transform:uppercase;letter-spacing:.1em;color:var(--accent);margin:0}
.lead h1{font-size:clamp(1.9rem,1.2rem + 2.2vw,2.9rem);line-height:1.08;margin:6px 0 12px}
.stand{font-size:1.2rem;font-style:italic;color:var(--muted)}
.leadpic{float:right;margin:4px 0 10px 18px}.leadpic figcaption{font:.75rem var(--sans);color:var(--muted);max-width:240px;margin-top:4px}
@media (max-width:699px){.leadpic{float:none;margin:0 0 12px}.leadpic .headshot{--size:180px!important}}
.drop::first-letter{float:left;font-family:var(--head);font-size:3.6em;line-height:.85;padding:4px 8px 0 0;font-weight:700}
.side h2,.numbers h2{font:700 .8rem var(--sans);text-transform:uppercase;letter-spacing:.12em;border-bottom:2px solid var(--ink);padding-bottom:4px;margin:0 0 8px}
.index{padding-left:1.3em;margin:0 0 18px}.index li{font-family:var(--head);font-size:1.15rem}.index a{color:var(--ink);min-height:44px;display:inline-flex;align-items:center}
.fbox{border:1px solid var(--ink);padding:12px}
.cols{display:grid;gap:0;margin-top:28px;border-top:3px solid var(--ink)}
@media (min-width:760px){.cols{grid-template-columns:repeat(3,1fr)}.story{border-left:1px solid var(--line);padding:16px 18px!important}.story:nth-child(3n+1){border-left:0;padding-left:0!important}}
.story{padding:16px 0;border-bottom:1px solid var(--line)}
.story h3{font-family:var(--head);font-size:1.4rem;margin:10px 0 6px}.story .by{font:.8rem var(--sans);color:var(--muted)}
.pfig.fp{width:100%;height:120px;background:var(--surface-2);border-radius:0}
.numbers{margin-top:28px}.nums{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:20px}
.nums p{margin:0;border-top:1px solid var(--ink);padding-top:8px}.nums b{display:block;font-family:var(--head);font-size:2.6rem;line-height:1}
.d-front .chart{border-radius:0;border-color:var(--ink)}
`);

// ======================= Agent Console =======================
const CON = D.console.copy;
const langRows = () => {
  const rows = [...LANGUAGES.speaks.map(l => [l.code, l.name, 'speaks']), ...LANGUAGES.interest.map(l => [l.code || '{ }', l.name, 'an interest in'])];
  return `<svg class="lrows" viewBox="0 0 360 ${rows.length * 36 + 30}" role="img" aria-labelledby="clr-t clr-d"><title id="clr-t">Languages</title><desc id="clr-d">${esc(LANGUAGES.figure.desc)}</desc>${rows.map((r, i) => `<g transform="translate(0 ${i * 36})"><rect width="300" height="28" rx="4" class="${r[2] === 'speaks' ? 'lr-on' : 'lr-off'}"/><text x="12" y="19" class="lr-k">${esc(r[0])}</text><text x="64" y="19">${esc(r[1])}</text><text x="288" y="19" text-anchor="end" class="lr-s">${esc(r[2])}</text></g>`).join('')}<path d="M308 112 h8 V172 h-8" class="lr-br"/><text x="0" y="${rows.length * 36 + 20}" class="lr-s">bracket: ${esc(LANGUAGES.sameInterest.text)} (his words)</text></svg>`;
};
const consolePage = page({
  path: '/d/console/', title: designTitle(D.console), description: DESC, share: 'console', css: ['/d/console/style.css'], cls: 'd-console', design: 'console', scheme: 'dark',
  body: `<div class="status"><div class="wrap"><span>operator: <b>${esc(CON.statusBar.operator)}</b></span><span>status: <b class="amber">${esc(CON.statusBar.status)}</b></span><a href="${LINKEDIN}">contact: ${esc(CON.statusBar.contact)} ↗</a></div></div>
<div class="wrap con">
<section class="pn op" aria-labelledby="op-h">${headshot({ size: 140, eager: true })}<div><h1 id="op-h">${esc(PERSON.name)}</h1><p class="dim">${esc(PERSON.tagline.text)} · ${esc(PERSON.place.text)}</p><p>${esc(ASK.long.text)}${ref(ASK.long.sources)}</p><p class="btns">${linkBtn()}</p></div></section>
<section class="pn counters" aria-label="Counters">
<p><b>${AGENTS.total.value}</b><span>agents${ref(AGENTS.total.sources)}</span></p>
<p><b class="g">${AGENTS.running.value}</b><span>running${ref(AGENTS.running.sources)}</span></p>
<p><b>${AGENTS.commits.value}</b><span>commits on the team's site, 3 to 13 November 2026${ref(COMMITS_SRC)}</span></p>
</section>
<section class="pn wide">${chartTeams('cct', 'h2')}</section>
<section class="pn wide" aria-labelledby="log-h"><h2 id="log-h">${esc(WE_BUILT)}</h2><p class="dim">His words, from his post${ref('whatsapp')}.</p>
<ul class="log">${WORKS.map(b => `<li><span class="ok" aria-hidden="true">✓</span> <a href="/built/#${b.id}">${esc(b.title)}</a> <span class="dim">· ${esc(b.link.text)}</span></li>`).join('')}</ul></section>
<section class="pn wide">${chartCommits('ccc', 'h2')}</section>
<section class="pn wide">${chartMap('ccm', 'h2')}</section>
<section class="pn wide">${chartActivity('cca', 'h2')}</section>
<section class="pn half" aria-labelledby="cl-h"><h2 id="cl-h">languages</h2>${langRows()}<p class="dim">${esc(LANGUAGES.figure.caption)}${ref('linkedin')}</p></section>
<section class="pn half" aria-labelledby="cb-h"><h2 id="cb-h">background</h2><ul class="log">${BACKGROUND.timeline.map(t => `<li><span class="dim">${esc(t.when.text)}</span> ${esc(t.title)}</li>`).join('')}</ul>${note(['linkedin', 'ws-home'])}</section>
</div>`,
});
out('/d/console/index.html', consolePage);
out('/d/console/style.css', `/* Agent Console: the operator's view (D3.4, C30 to C33). Dark design. Code Apache-2.0. */
.d-console{--bg:#0B1016;--surface:#121A23;--surface-2:#16212C;--ink:#D7E3EA;--muted:#8395A3;--line:#1F2B38;--accent:#5BD69B;--accent-soft:#16302A;--on-accent:#0B1016;--warm:#F2C14E;--focus:#F2C14E;--band:#05080C;--on-band:#D7E3EA;--band-link:#F2C14E;--head:var(--mono);--lf-tile:#5BD69B;--lf-on:#0B1016;--c-on:#5BD69B;--c-on-t:#0B1016;--c-off:#8395A3;--c-bar:#5BD69B;--c-mark:rgba(242,193,78,.12);--c-link:rgba(91,214,155,.45);color-scheme:dark}
.d-console .bar{background:#0E151D}
.status{background:#05080C;border-bottom:1px solid var(--line);font:600 .8rem var(--mono)}
.status .wrap{display:flex;flex-wrap:wrap;gap:4px 22px;align-items:center;min-height:44px}
.status a{color:var(--warm);min-height:44px;display:inline-flex;align-items:center}.amber{color:var(--warm)}
.con{display:grid;gap:16px;padding-top:20px;grid-template-columns:repeat(12,minmax(0,1fr))}
.con>.pn{grid-column:1/-1;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:18px}
@media (min-width:960px){.op{grid-column:1/8!important}.counters{grid-column:8/13!important}.half{grid-column:span 6!important}}
.pn h2,.pn .ch-h{font-family:var(--mono);font-size:1rem;text-transform:lowercase;color:var(--accent);margin:0 0 8px}
.pn .chart{background:transparent;border:0;padding:0;margin:0}
.op{display:flex;gap:18px;align-items:flex-start;flex-wrap:wrap}.op h1{font-family:var(--mono);font-size:1.8rem;margin:0 0 4px}
.dim{color:var(--muted)}
.counters{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;align-content:center}
.counters p{margin:0}.counters b{display:block;font:600 2.6rem/1 var(--mono)}.counters .g{color:var(--accent)}.counters span{display:block;font-size:.78rem;color:var(--muted);margin-top:6px}
@media (max-width:699px){.counters b{font-size:1.9rem}}
.log{list-style:none;padding:0;margin:0;font-family:var(--mono);font-size:.88rem}.log li{padding:6px 0;border-bottom:1px solid var(--line)}.log a{color:var(--ink)}.ok{color:var(--accent)}
.d-console .ch .c-on{animation:pulse 2.4s ease-in-out infinite alternate}
@keyframes pulse{from{opacity:1}to{opacity:.72}}
.lrows{width:100%;max-width:420px;height:auto}.lrows text{font:13px var(--mono);fill:var(--ink)}
.lr-on{fill:#16302A;stroke:#5BD69B}.lr-off{fill:none;stroke:#8395A3;stroke-dasharray:4 3}.lr-k{fill:#5BD69B!important;font-weight:700}.lr-s{fill:#8395A3!important}.lr-br{fill:none;stroke:#F2C14E;stroke-width:2}
.d-console .note{border-color:var(--line)}
`);

// ======================= The Card =======================
const CA = D.card.copy;
const cardPage = page({
  path: '/d/card/', title: designTitle(D.card), description: DESC, share: 'card', css: ['/d/card/style.css'], cls: 'd-card', design: 'card', scheme: 'light',
  body: `<div class="desk wrap">
<p class="cintro">${esc(designIdea(D.card))}${ref('whatsapp')}</p>
<div class="bcard" aria-label="Business card">
<div class="face front">
<div class="cf-top">${headshot({ size: 96, round: true, eager: true })}<div><p class="cname">${esc(CA.front[0])}</p><p class="csub">${esc(CA.front[1])}</p></div></div>
<p class="cask">${esc(CA.front[2])}</p>
<p class="crow"><a href="${LINKEDIN}">${esc(CA.front[3])}</a><span>${esc(CA.front[4])}</span></p>
</div>
<div class="face back">
<p class="ck">${esc(CA.back.kicker)}</p>
<ul>${WORKS.map(b => `<li>${esc(b.title)}</li>`).join('')}</ul>
<p class="cnum">${esc(TEAM_LINE)} · ${AGENTS.commits.value} commits, 3 to 13 Nov</p>
<p class="clang">${esc(CA.languagesLine)}<br>${esc(CA.interestLine.replace(/\(([^)]+)\)/, '($1)'))}</p>
</div>
</div>
<p class="btns cbtns"><button type="button" id="turn" class="btn btn-secondary" hidden aria-pressed="false">${esc(CA.turnOver)}</button>${linkBtn()}</p>
</div>
<div class="wrap creverse">
<h2>${esc(CA.belowCard)}</h2>
<section><h3>Built</h3>${fact(worksList(), ['whatsapp'])}${fact(`<p>In his words: "${esc(CARDS_QUOTE)}". ${esc(BUILT.find(b => b.id === 'cards').paragraph)}</p>`, BUILT.find(b => b.id === 'cards').sources)}</section>
<section><h3>How he works</h3>${fact(`<p>${esc(TEAM_LINE)}. ${esc(COMMITS_LINE)}. ${esc(AGENTS.howHeWorks[0].text)}</p>`, [...TEAM_SRC, ...COMMITS_SRC, ...AGENTS.howHeWorks[0].sources])}</section>
<section><h3>Languages</h3>${languagesFigure('clf')}</section>
<section><h3>Background</h3>${fact(`<p>${BACKGROUND.timeline.map(t => `${esc(t.title)} (${esc(t.when.text)})`).join('; ')}.</p>`, ['linkedin', 'ws-home'])}</section>
<section><h3>Sources</h3><p><a class="more" href="/sources/">Every source, with the date it was read</a></p></section>
</div>`,
});
out('/d/card/index.html', cardPage);
out('/d/card/style.css', `/* The Card: a business card, front and back (D3.5, C34 to C37). Light design. Code Apache-2.0. */
.d-card{--bg:#EDEAE3;--surface:#FFFFFF;--surface-2:#E3DED3;--ink:#1A1A1A;--muted:#5B5B5B;--line:#CFC8BA;--accent:#1A1A1A;--accent-soft:#E3DED3;--on-accent:#FFFFFF;--warm:#8F3415;--focus:#B4471F;--band:#1A1A1A;--on-band:#FFFFFF;--band-link:#F2C29A;--head:"Gill Sans","Gill Sans MT",Seravek,"Trebuchet MS",system-ui,sans-serif;--lf-tile:#1E4D8C;--lf-warm:#B4471F;color-scheme:light}
.d-card main{font-family:var(--head)}
.desk{padding-top:36px;display:flex;flex-direction:column;align-items:center}
.cintro{max-width:40rem;text-align:center;color:var(--muted)}
.bcard{position:relative;width:min(680px,100%);perspective:1600px}
.face{background:#fff;border-radius:10px;box-shadow:0 1px 0 rgba(0,0,0,.06),0 24px 48px -24px rgba(0,0,0,.35);padding:34px 38px;margin-bottom:18px}
@media (min-width:700px){.face{aspect-ratio:85/55}}
.front{display:flex;flex-direction:column;justify-content:space-between}
.cf-top{display:flex;gap:18px;align-items:center}
.cname{font-size:clamp(1.6rem,1rem + 2vw,2.5rem);font-weight:600;letter-spacing:.02em;margin:0}
.csub{margin:0;color:var(--muted)}
.cask{color:#B4471F;text-transform:uppercase;letter-spacing:.12em;font-weight:600;border-top:2px solid #B4471F;padding-top:12px;margin:18px 0}
.crow{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;margin:0;font-size:.9rem}
.crow a{color:var(--ink);min-height:44px;display:inline-flex;align-items:center}.crow span{min-height:44px;display:inline-flex;align-items:center;color:var(--muted);text-transform:uppercase;letter-spacing:.12em}
.back{background:#1E4D8C;color:#fff;--focus:#fff}
.back ul{list-style:none;padding:0;margin:8px 0;columns:2 14rem}.back li{padding:3px 0}
.ck,.cnum,.clang{color:#C9D8EE;text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;margin:0}.cnum{margin-top:10px}.clang{text-transform:none;letter-spacing:0;font-size:.9rem;margin-top:8px}
.bcard.js .face{position:relative;backface-visibility:hidden;transition:transform .5s;margin:0}
.bcard.js{display:grid}.bcard.js .face{grid-area:1/1}
.bcard.js .back{transform:rotateY(180deg)}.bcard.js.flipped .front{transform:rotateY(-180deg)}.bcard.js.flipped .back{transform:rotateY(0)}
@media (prefers-reduced-motion:reduce){.bcard.js .face{transform:none!important;transition:opacity .2s}.bcard.js .back{opacity:0}.bcard.js.flipped .front{opacity:0}.bcard.js.flipped .back{opacity:1}}
.cbtns{justify-content:center;margin-top:18px}
.d-card .btn-primary{background:var(--ink);color:#fff}.d-card .btn-secondary{color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink)}
.creverse{max-width:820px;margin-top:40px}.creverse section{border-top:1px solid var(--line);padding-top:12px}
@media print{.cbtns{display:none}.bcard.js .face{transform:none!important;position:static}.face{width:85mm;height:55mm;padding:5mm;font-size:8pt}}
`);

// ======================= /d/ and /designs.json =======================
out('/d/index.html', page({
  path: '/d/', title: PAGES.d.title, description: PAGES.d.description, css: ['/d/chooser.css'], design: '',
  body: `<div class="wrap hero-in"><p class="kicker">${esc(PAGES.d.kicker)}</p><h1>${esc(PAGES.d.h1)}</h1><p class="lede">${esc(PAGES.d.lede)}</p></div>
<div class="wrap"><ul class="chooser">${DESIGNS.map(d => `<li><a href="${designHref(d)}">${thumb(d.slug)}<span class="cn"><b>${esc(d.name)}</b>${d.default ? `<span class="tag dim">${esc(PAGES.d.home)}</span>` : ''}</span><span>${esc(designIdea(d))}</span><span class="muted">Leads with: ${esc(d.leadsWith)}</span><span class="more">${esc(PAGES.d.open)}</span></a></li>`).join('')}</ul></div>`,
}));
out('/d/chooser.css', `.chooser{list-style:none;padding:0;display:grid;gap:22px;grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr))}
.chooser a{display:flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:12px}
.chooser a:hover,.chooser a:focus-visible{box-shadow:0 0 0 2px var(--accent)}
.chooser img,.chooser .nothumb{width:100%;height:auto;aspect-ratio:480/300;display:block;border-radius:8px;background:var(--accent-soft)}
.chooser .cn{display:flex;gap:8px;align-items:center;font-size:1.2rem;margin-top:6px}.chooser .more{color:var(--accent)}
`);
out('/designs.json', JSON.stringify({
  about: `The five designs of ${SITE}: the same facts, laid out five ways.`,
  designs: DESIGNS.map(d => ({ slug: d.slug, name: d.name, idea: designIdea(d), leads_with: d.leadsWith, path: designHref(d), url: `${SITE}${designHref(d)}`, thumb: `/assets/designs/${d.slug}.jpg`, share: `${SITE}/assets/share/${d.slug}.jpg`, default: !!d.default })),
}, null, 1) + '\n');
console.log('designs: briefing (home), lingua, front-page, console, card; /d/ and /designs.json');
