// Shared helpers for scripts/generate.mjs, scripts/designs.mjs, scripts/behind.mjs and scripts/cards.mjs.
// Copyright 2026 AgentiCCells. Code Apache-2.0; the text it writes is CC BY 4.0.
// Adapted from the Marc Noah site's scripts/lib.mjs (Apache-2.0,
// https://github.com/AgentiCCells/AgentiCCells__Site__Marc-Noah/blob/dev/scripts/lib.mjs, read 2026-11-18):
// the escape helper, the page head with its link-preview tags, the Designs dialog and the shared script pattern.
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1. Every word and fact comes from data/facts.mjs.
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import {
  READ_DATE, READ_DATE_TEXT, SOURCE_GROUPS, SOURCES, LINKEDIN, LINKEDIN_TEXT, REPO, SITE, PERSON, ASK, AGENTS,
  LANGUAGES, DESIGNS, NAV, STRIP, FOOTER, PAGES, QUOTES, WEB_SUMMIT, BUILT, VIDEO, HOME_LINE, HOME_FIGURES, TEN_DAYS,
  TEN_DAYS_RANGE,
} from '../data/facts.mjs';

export { REPO, SITE, LINKEDIN };
export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const fmtDay = iso => { const [y, m, d] = iso.slice(0, 10).split('-').map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };
export const shortDay = iso => { const [, m, d] = iso.slice(0, 10).split('-').map(Number); return `${d} ${MONTHS[m - 1].slice(0, 3)}`; };

// ---------- names: the site names no person but Indi Gupte and Dinis Cruz ----------
// The validator keeps the other team members' first names only as SHA-256 hashes. We read those hashes (we do not
// change the gate) so text from the repository (commit subjects, round reports, role files) can be cleaned at
// build time: any matching word becomes "[another team member]" (review condition C50).
// Round 2: the validator now keeps the first 16 hex digits of each hash, so we compare prefixes of that length.
const NAME_HASHES = new Set(existsSync('scripts/validate.mjs') ? (readFileSync('scripts/validate.mjs', 'utf8').match(/'[0-9a-f]{16}(?:[0-9a-f]{48})?'/g) || []).map(s => s.slice(1, 17)) : []);
const isName = w => NAME_HASHES.has(createHash('sha256').update(w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')).digest('hex').slice(0, 16));
if (!NAME_HASHES.size) throw new Error('lib.mjs: no name hashes read from scripts/validate.mjs; scrub() would do nothing');
// Replaces names in plain text; a whole URL or address that contains a name is replaced too.
export const scrub = s => String(s ?? '')
  .replace(/\b(?:https?:\/\/)?[\w.-]+\.[a-z]{2,}(?:\/[^\s)<>"']*)?/gi, u => (u.toLowerCase().match(/[a-z]+/g) || []).some(isName) ? '[address withheld: it contains a name]' : u)
  .replace(/[A-Za-zÀ-ɏ]+(?:'s)?/g, w => isName(w.replace(/'s$/, '')) ? (w.endsWith("'s") ? "[another team member]'s" : '[another team member]') : w);

// ---------- sources: numbered once for the whole site, in the order /sources/ lists them ----------
export const SRC_ORDER = SOURCE_GROUPS.flatMap(g => Object.keys(SOURCES).filter(id => SOURCES[id].group === g.id));
export const srcNum = id => { const i = SRC_ORDER.indexOf(id); if (i < 0) throw new Error(`unknown source ${id}`); return i + 1; };
const readText = s => (s.read ? `read ${fmtDay(s.read)}` : 'link only, not read');
// Superscript references inside a sentence: 24 px targets (C12), linking the source on /sources/.
// Round 2 (R6.2, C83): at most three numbers per claim; a claim with more shows one "N sources" chip (24 px box)
// that opens a note listing every source by number and title.
const refA = id => `<a href="/sources/#src-${id}" aria-label="Source ${srcNum(id)}: ${esc(SOURCES[id].title)}">${srcNum(id)}</a>`;
export const ref = (...ids) => {
  const list = [...new Set(ids.flat(3).filter(Boolean))];
  if (!list.length) return '';
  if (list.length <= 3) return `<sup class="refs">${list.map(refA).join('')}</sup>`;
  const n = `sn-${++MANY}`; // phrasing content only, so it can sit inside a <p>; without popover support the note shows inline
  return `<span class="refs many"><button type="button" class="many-b" popovertarget="${n}" aria-label="${list.length} sources for this claim">${list.length} sources</button><span class="refs-note" popover id="${n}"><span class="rn-h">Sources for this claim</span>${list.map(id => `<span class="rn">${refA(id)} ${esc(SOURCES[id].title)}</span>`).join('')}</span></span>`;
};
let MANY = 0;
// One source as a line: number, title (linked when it has an address), read date.
export const srcLine = id => { const s = SOURCES[id]; return `<span class="n">${srcNum(id)}</span> ${s.url ? `<a href="${esc(s.url)}">${esc(s.title)}</a>` : esc(s.title)}, ${readText(s)}`; };
// A margin note (beside the fact at 960 px and wider, after it below).
export const note = (ids, extra = '') => {
  const list = [...new Set([].concat(ids).flat(2).filter(Boolean))];
  if (!list.length && !extra) return '';
  return `<aside class="note">${extra ? `<p>${extra}</p>` : ''}${list.length ? `<ul>${list.map(id => `<li>${srcLine(id)}</li>`).join('')}</ul>` : ''}</aside>`;
};
// A fact block: text on the left, its sources in the margin.
export const fact = (html, ids, { cls = '', extra = '', id = '' } = {}) => `<div class="fact${cls ? ` ${cls}` : ''}"${id ? ` id="${id}"` : ''}><div class="ft">${html}</div>${note(ids, extra)}</div>`;
export const srcMd = ids => [...new Set([].concat(ids).flat(2).filter(Boolean))].map(id => SOURCES[id].url ? `[${SOURCES[id].title}](${SOURCES[id].url})` : SOURCES[id].title).join('; ');

// ---------- copy composed from the facts (where a reviewer condition rules out a field as written) ----------
// C5: "a team of 27 AI agents" with "23 running" beside it; never tie the 27 to the three projects.
export const TEAM_LINE = `A team of ${AGENTS.total.value} AI agents, ${AGENTS.running.value} running`;
export const TEAM_SRC = ['ws-people-indi'];
// C16: 277 always with its window. Round 2: the writer's text now carries the window itself, so it is used as is.
export const COMMITS_LINE = /3 to 13 November/.test(AGENTS.commits.text) ? AGENTS.commits.text : `${AGENTS.commits.text}, 3 to 13 November 2026`;
export const COMMITS_SRC = AGENTS.commits.sources;
export const POST_LINES = QUOTES.whatsapp.lines;
export const WE_BUILT = POST_LINES[0].match(/What we built this week/)[0]; // C31: his words
export const CARDS_QUOTE = QUOTES.extracts.cards;

// ---------- the headshot: always the reviewer's crop (C9), never the whole file ----------
export const headshot = ({ size = 240, round = false, alt = PERSON.photo.alt, eager = false, cls = '' } = {}) =>
  `<span class="headshot${round ? ' round' : ''}${cls ? ` ${cls}` : ''}" style="--size:${size}px"><img src="${PERSON.photo.src}" width="${PERSON.photo.width}" height="${PERSON.photo.height}" alt="${esc(alt)}"${eager ? '' : ' loading="lazy"'} decoding="async"></span>`;

// ---------- icons ----------
export const GH = '<svg class="ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
const GRID = '<svg class="ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><g fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></g></svg>';
export const ARROW = '<span aria-hidden="true"> ↗</span>';

// ---------- the header: the ask band, then the site bar (D1.2, C1 to C4, C7; round 2 R2.0) ----------
// One markup shape for every design, so each design's stylesheet restyles it (R2.0): the band's words, the logo,
// an optional line under the logo (Front Page's dateline) and the nav labels may differ per design; the items do not
// (the ask, LinkedIn, the full nav or Menu, Source and Designs, C4). The word "Designs" stays in every design.
export const SEAL = (cls = 'seal') => `<svg class="${cls}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="30" class="s1"/><circle cx="32" cy="32" r="24" class="s2"/><text x="32" y="41" text-anchor="middle">IG</text></svg>`;
export const linkedinLabel = `<span class="ll-long">${esc(ASK.button.text.replace(/LinkedIn$/, ''))}</span>LinkedIn`;
export const BAND_DEFAULT = (prefix = '') => `<p class="band-ask">${prefix}<b>${esc(ASK.band.lead)}</b><span class="band-rest"> · ${esc(TEAM_LINE.replace(/^A /, 'a '))}</span></p>
<a class="band-link" href="${LINKEDIN}">${linkedinLabel}${ARROW}</a>`;
const navText = (n, i, style) => style ? style(n, i) : esc(n.text);
const navLinks = (path, style) => NAV.map((n, i) => n.external
  ? `<a class="src" href="${esc(n.href)}">${GH}<span>${navText(n, i, style)}</span><span class="vh"> (${esc(n.srText)})</span></a>`
  : `<a href="${n.href}"${n.href === path ? ' aria-current="page"' : ''}>${navText(n, i, style)}</a>`).join('');
export const header = (path, { band, logo, extra = '', nav } = {}) => `<a class="skip" href="#main">Skip to content</a>
<header class="site">
${band === false ? '' : `<div class="band"><div class="wrap">
${band || BAND_DEFAULT()}
</div></div>`}
<div class="bar"><div class="wrap">
<a class="home" href="/"${path === '/' ? ' aria-current="page"' : ''}>${logo || `${SEAL('seal logo-seal')}<span class="home-name">${esc(PERSON.name)}</span>`}</a>
${extra}<nav class="nav-wide" aria-label="Main">${navLinks(path, nav)}</nav>
<div class="tools">
<details class="menu"><summary><span>Menu</span></summary><nav aria-label="Main (menu)">${navLinks(path)}</nav></details>
<a class="src-icon" href="${REPO}" aria-label="Source code on GitHub">${GH}</a>
<a class="designs-btn" href="/d/" data-dialog="designs">${GRID}<span class="lbl">Designs</span></a>
</div>
</div></div>
</header>`;

// ---------- the Designs dialog (D6, C46 to C48) ----------
// aria-haspopup and aria-controls are added by /designs.js, so without the script this is a plain link to /d/.
export const designHref = d => (d.default ? '/' : `/d/${d.slug}/`);
export const thumb = (slug, { eager = false, w = 480, h = 300 } = {}) => existsSync(`src/assets/designs/${slug}.jpg`)
  ? `<img src="/assets/designs/${slug}.jpg" width="${w}" height="${h}" alt="" ${eager ? 'loading="eager" fetchpriority="low"' : 'loading="lazy"'} decoding="async">`
  : `<span class="nothumb" aria-hidden="true"></span>`;
// Round 3: the writer brought every leadsWith up to date, so it is shown as it is.
export const designLeads = d => d.leadsWith;
export const designIdea = d => (d.slug === 'card' ? `A business card, front and back. In his words: "${CARDS_QUOTE}".` : d.idea); // C34, C38
export const designsDialog = cur => `<dialog id="designs" class="dlg" aria-labelledby="dlg-h">
<div class="dlg-head"><div><h2 id="dlg-h" tabindex="-1">${esc(PAGES.d.dialogHeading)}</h2><p>${esc(PAGES.d.dialogLine)}</p></div>
<form method="dialog"><button class="x" type="submit">Close</button></form></div>
<ul class="dgrid">
${DESIGNS.map(d => `<li><a href="${designHref(d)}"${d.slug === cur ? ' aria-current="page"' : ''}>${thumb(d.slug, { eager: true })}<span class="dn"><b>${esc(d.name)}</b>${d.slug === cur ? `<span class="tag">${esc(PAGES.d.showing)}</span>` : ''}${d.default ? `<span class="tag dim">${esc(PAGES.d.home)}</span>` : ''}</span><span class="di">${esc(designIdea(d))}</span></a></li>`).join('\n')}
</ul>
<p class="dlg-foot"><a href="/d/">${esc(PAGES.d.allLink)}</a><a href="/behind-the-scenes/">Behind the scenes</a></p>
</dialog>`;

// ---------- the ask panel (D1.4) and the footer (D1.3) ----------
export const askPanel = () => `<aside class="ask" aria-labelledby="ask-h"><div class="wrap ask-in">
${headshot({ size: 200 })}
<div>
<h2 id="ask-h">${esc(ASK.panel.heading)}</h2>
<p>${esc(ASK.long.text)}${ref(ASK.long.sources)}</p>
<p class="muted">${esc(TEAM_LINE)}${ref(TEAM_SRC)}. ${esc(PERSON.profileSummary.paragraphs[4])}${ref('linkedin')}</p>
<p class="btns"><a class="btn btn-primary" href="${LINKEDIN}">${esc(ASK.button.text)}</a><a class="btn btn-secondary" href="${ASK.secondary.href}">${esc(ASK.secondary.text)}</a></p>
</div></div></aside>`;
export const footer = () => `<footer class="foot"><div class="wrap foot-in">
<div><p><b>${esc(FOOTER.about)}</b></p><p><a href="${LINKEDIN}">${esc(LINKEDIN_TEXT)}</a></p><p class="muted">${esc(FOOTER.contact)}</p></div>
<div><p class="fh">Site</p><ul>${FOOTER.site.map(l => `<li><a href="${l.href}">${esc(l.text)}</a></li>`).join('')}<li><a href="/index.md">index.md</a></li></ul></div>
<div><p class="fh">His work</p><ul>${STRIP.map(l => `<li><a href="${l.href}">${esc(l.text)}</a></li>`).join('')}</ul></div>
<div><p class="fh">Made by</p><ul><li>${esc(FOOTER.madeBy)}</li><li><a href="${REPO}">${GH} ${esc(FOOTER.source.text)}</a></li><li>Version __VERSION__</li><li>${esc(FOOTER.licence)}</li></ul></div>
</div></footer>`;

// ---------- the head, with the link preview on every page (D5, C44) ----------
export const SHARE_ALT = `${PERSON.name}: ${ASK.short.toLowerCase()}`;
export const shareUrl = (name = 'indi-gupte') => `${SITE}/assets/share/${name}.jpg`;
// Round 3 (S3): each design's pages use its own card, and the alt text names the design.
const shareAlt = name => { const d = DESIGNS.find(x => x.slug === name); return d ? `${PERSON.name}, ${ASK.short.toLowerCase()}: the ${d.name} design` : SHARE_ALT; };
export function head({ title, description, path, share = 'indi-gupte', css = [], extra = '', canonical, refresh, scheme = 'light dark' }) {
  const url = `${SITE}${path}`;
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${refresh ? `<meta http-equiv="refresh" content="0; url=${esc(refresh)}">\n` : ''}<link rel="canonical" href="${esc(canonical ? SITE + canonical : url)}">
<link rel="alternate" type="text/markdown" href="/index.md">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="color-scheme" content="${scheme}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(PERSON.name)}">
<meta property="og:locale" content="en_GB">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${esc(shareUrl(share))}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(shareAlt(share))}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(shareUrl(share))}">
<link rel="stylesheet" href="/style.css">
${css.map(h => `<link rel="stylesheet" href="${h}">`).join('\n')}${extra}
<script src="/designs.js" defer></script>
</head>`;
}

// One page: header, main, ask panel, footer, dialog. body is HTML.
export function page({ path, title, description, body, share, css = [], cls = '', design = 'briefing', ask = true, scheme, canonical, hdr = {} }) {
  return `${head({ title, description, path, share, css, scheme, canonical })}
<body${cls ? ` class="${cls}"` : ''}>
${header(path, hdr)}
<main id="main">
${body}
</main>
${ask ? askPanel() : ''}
${footer()}
${designsDialog(design)}
</body>
</html>
`;
}
export const pageHead = (p, extra = '') => `<div class="wrap hero-in"><p class="kicker">${esc(p.kicker)}</p><h1>${esc(p.h1)}</h1><p class="lede">${esc(p.lede)}${ref(p.sources)}</p>${extra}</div>`;

// ---------- shared fragments: his post, the numbers ----------
export const postBlock = () => `<div class="post">${POST_LINES.map(l => `<p${l.startsWith('- ') ? ' class="li"' : ''}>${esc(l)}</p>`).join('')}<p class="cut">${esc(QUOTES.whatsapp.cutNote)} ${esc(QUOTES.whatsapp.attribution)}.${ref(QUOTES.whatsapp.sources)}</p></div>`;
export const stats = () => `<div class="stats">
<div class="stat"><b>${AGENTS.total.value}</b><span>AI agents in his team${ref(AGENTS.total.sources)}</span></div>
<div class="stat"><b>${AGENTS.running.value}</b><span>of them running${ref(AGENTS.running.sources)}</span></div>
<div class="stat"><b>${AGENTS.commits.value}</b><span>${esc(COMMITS_LINE.replace(/^277 /, ''))}${ref(COMMITS_SRC)}</span></div>
<div class="stat"><b>${BUILT.filter(b => b.kind === 'work').length}</b><span>pieces of work on <a href="/built/">What I built</a></span></div>
</div>`;


// ---------- Dinis Cruz's video about the Lisbon Tech Fringe app (VIDEO in data/facts.mjs) ----------
// Until VIDEO.youtube is set: a link to the LinkedIn post. Once set: a drawn poster button; /designs.js inserts the
// youtube-nocookie.com iframe only on a press, so nothing loads from YouTube before it. Without JS: a plain link.
const PLAY = '<svg class="vp-ic" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle cx="24" cy="24" r="23" fill="currentColor" opacity=".9"/><path d="M19 14v20l16-10z" fill="var(--bg)"/></svg>';
export const videoSlot = () => {
  const V = VIDEO; if (!V) return '';
  const date = fmtDay(V.date);
  const id = V.youtube && /^[\w-]{6,20}$/.test(V.youtube) ? V.youtube : null;
  const body = id
    ? `<a class="vposter" href="https://www.youtube.com/watch?v=${id}" data-yt="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" data-title="${esc(V.title)}">${PLAY}<span><b>Play the video</b><small>${esc(V.title)} · plays from YouTube (youtube-nocookie.com)</small></span></a>`
    : `<a class="vposter" href="${esc(V.linkedin)}">${PLAY}<span><b>Watch the video on LinkedIn</b><small>${esc(V.title)}</small></span></a>`;
  return `<figure class="video" id="${esc(V.id)}">${body}<figcaption><p>${esc(V.summary)}${ref(V.sources)}</p><p class="muted">${esc(V.attribution)}, ${date}.${id ? ` <a href="${esc(V.linkedin)}">His post on LinkedIn</a>.` : ''}</p></figcaption></figure>`;
};

// ---------- the languages figure (D4, C39 to C41) ----------
// Colours come from CSS custom properties (--lf-*), so each design recolours it; shape and words do not change.
const T = (x, y, s, { cls = '', anchor = 'start', lang = '' } = {}) => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}"${lang ? ` lang="${lang}"` : ''}>${esc(s)}</text>`;
function langTile(x, y, w, h, l, solid, wide) {
  const rect = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="${solid ? 'lf-solid' : 'lf-dash'} t-${l.code || 'pl'}"/>`;
  const own = l.code === 'sa' ? 'lf-own deva' : l.code ? 'lf-own' : 'lf-own mono';
  const tcls = solid ? ' on' : '';
  if (wide) {
    const lines = l.name === 'Programming languages' ? ['Programming', 'languages'] : [l.name];
    return `${rect}${T(x + 14, y + 34, l.ownName, { cls: own + tcls, lang: l.code && l.code !== 'en' ? l.code : '' })}${lines.map((s, i) => T(x + 14, y + 58 + i * 16, s, { cls: 'lf-en' + tcls })).join('')}`;
  }
  return `${rect}${T(x + 16, y + h / 2 + 7, l.ownName, { cls: own + tcls, lang: l.code && l.code !== 'en' ? l.code : '' })}${T(x + w - 16, y + h / 2 + 6, l.name, { cls: 'lf-en' + tcls, anchor: 'end' })}`;
}
export function languagesFigure(id = 'lf') {
  const L = LANGUAGES, F = L.figure;
  const LEADS = /\(his words\)/.test(L.leadsTo.text) ? L.leadsTo.text : `${L.leadsTo.text} (his words)`;
  const desc = `${F.desc} ${LEADS}.`;
  // Horizontal, 720 x 300.
  let h = `<svg class="fig-h lf" viewBox="0 0 720 300" role="img" aria-labelledby="${id}h-t ${id}h-d"><title id="${id}h-t">${esc(F.title)}</title><desc id="${id}h-d">${esc(desc)}</desc>`;
  h += T(0, 18, F.labels.speaks.toUpperCase(), { cls: 'lf-lab' }) + T(456, 18, F.labels.interest.toUpperCase(), { cls: 'lf-lab' });
  L.speaks.forEach((l, i) => { h += langTile(i * 146, 30, 136, 92, l, true, true); });
  L.interest.forEach((l, i) => { h += langTile(456 + i * 136, 30, 126, 92, l, false, true); });
  h += `<path d="M462 136 v10 H708 v-10 M585 146 v10" class="lf-br"/>` + T(585, 176, L.sameInterest.text, { cls: 'lf-brt', anchor: 'middle' });
  h += `<path d="M659 122 v70" class="lf-dot"/>` + T(712, 208, L.learning.text, { cls: 'lf-small', anchor: 'end' });
  h += `<path d="M10 236 H560" class="lf-arrow"/><path d="M560 230 l10 6 -10 6z" class="lf-ah"/>` + T(0, 268, LEADS, { cls: 'lf-lead' });
  h += '</svg>';
  // Vertical, 358 x 540.
  let v = `<svg class="fig-v lf" viewBox="0 0 358 560" role="img" aria-labelledby="${id}v-t ${id}v-d"><title id="${id}v-t">${esc(F.title)}</title><desc id="${id}v-d">${esc(desc)}</desc>`;
  v += T(0, 16, F.labels.speaks.toUpperCase(), { cls: 'lf-lab' });
  L.speaks.forEach((l, i) => { v += langTile(0, 26 + i * 72, 358, 62, l, true, false); });
  v += T(0, 264, F.labels.interest.toUpperCase(), { cls: 'lf-lab' });
  L.interest.forEach((l, i) => { v += langTile(0, 274 + i * 72, 322, 62, l, false, false); });
  v += `<path d="M330 280 h10 V402 h-10 M340 341 h8" class="lf-br"/>` + T(322, 434, L.sameInterest.text, { cls: 'lf-brt', anchor: 'end' });
  v += T(0, 460, L.learning.text, { cls: 'lf-small' });
  v += `<path d="M6 478 V506" class="lf-arrow"/><path d="M0 504 l6 10 6 -10z" class="lf-ah"/>`;
  v += T(20, 506, 'Modern Languages and International', { cls: 'lf-lead' }) + T(20, 526, 'Relations, from next autumn', { cls: 'lf-lead' }) + T(20, 546, '(his words)', { cls: 'lf-lead' });
  v += '</svg>';
  return `<figure class="langs">${h}${v}<figcaption>${esc(F.caption)}${ref(F.sources)}</figcaption></figure>`;
}

// ---------- small drawings of each piece of work (D2.8, C15) ----------
const FIG = {
  riskmandate: '<rect x="8" y="14" width="70" height="52" rx="8" class="pf-line"/><rect x="40" y="22" width="72" height="44" rx="8" class="pf-tint"/><path d="M14 22 l20 20 M14 34 l20 20 M14 46 l14 14 M22 18 l12 12" class="pf-hatch"/><text x="10" y="78" class="pf-t">the gap</text>',
  promptugal: '<path d="M14 12 h92 v58 h-92z" class="pf-line"/><path d="M14 24 h92" class="pf-line"/><circle cx="32" cy="38" r="5" class="pf-warm"/><path d="M23 60 a9 9 0 0 1 18 0z" class="pf-warm"/><rect x="50" y="34" width="20" height="16" rx="3" class="pf-acc"/><path d="M60 34 v-5 M55 50 v6 M65 50 v6" class="pf-line"/><circle cx="88" cy="38" r="5" class="pf-warm"/><path d="M79 60 a9 9 0 0 1 18 0z" class="pf-warm"/>',
  fringe: '<path d="M10 52 H110" class="pf-line"/><path d="M14 30 q0 -10 10 -10 q4 -8 12 -4 q8 -2 10 6 q8 0 8 8 z" class="pf-warmline"/><path d="M26 34 l-4 8 M34 34 l-4 8 M42 34 l-4 8" class="pf-warmline"/><circle cx="70" cy="52" r="6" class="pf-acc"/><circle cx="98" cy="52" r="6" class="pf-acc"/><text x="72" y="72" class="pf-t" text-anchor="middle">guide</text><text x="100" y="72" class="pf-t" text-anchor="middle">app</text>',
  song: '<path d="M10 40 l6 -10 6 20 6 -28 6 34 6 -24 6 14 6 -8 6 4" class="pf-acc-line"/><path d="M78 40 a18 18 0 1 1 18 18" class="pf-warmline"/><path d="M90 54 l6 4 -4 6" class="pf-warmline"/>',
  cards: '<rect x="12" y="16" width="68" height="44" rx="4" class="pf-line"/><rect x="36" y="26" width="68" height="44" rx="4" class="pf-tint"/>',
  factory: '<rect x="10" y="14" width="28" height="36" rx="3" class="pf-line"/><rect x="46" y="14" width="28" height="36" rx="3" class="pf-line"/><rect x="82" y="14" width="28" height="36" rx="3" class="pf-tint"/><path d="M16 24 h16 M16 32 h12 M52 24 h16 M52 32 h12 M88 24 h16 M88 32 h12" class="pf-warmline"/><path d="M10 64 H110" class="pf-line"/>',
  omknee: '<path d="M48 10 v24 q0 10 10 14 l14 6 v16" class="pf-line"/><circle cx="56" cy="40" r="7" class="pf-tint"/><path d="M84 20 v16 M76 28 h16" class="pf-acc-line"/>',
  education: '<path d="M60 12 a18 18 0 0 1 10 33 v8 h-20 v-8 a18 18 0 0 1 10 -33z" class="pf-line"/><path d="M52 60 h16 M54 66 h12" class="pf-warmline"/>',
};
export const workFig = (id, title, cls = '') => FIG[id] ? `<svg class="pfig${cls ? ` ${cls}` : ''}" viewBox="0 0 120 80" role="img" aria-labelledby="pf-${id}${cls ? `-${cls}` : ''}"><title id="pf-${id}${cls ? `-${cls}` : ''}">${esc(title)}</title>${FIG[id]}</svg>` : '';


// ---------- the agent teams: data and charts (Dinis, 10:04 UTC) ----------
// From AGENTS in data/facts.mjs (the writer's checked descriptions, status and commits) and data/research/agents.json
// (teams, the researcher's groups, first dates and the who-wrote-to-whom edges). Drawn at build time as inline SVG:
// no chart library, no script. Each chart: heading, one-line reading, table fallback, source and read date.
const RESEARCH = existsSync('data/research/agents.json') ? JSON.parse(readFileSync('data/research/agents.json', 'utf8')) : {};
const R_BY = Object.fromEntries((RESEARCH.agents || []).map(a => [a.handle, a]));
const MON_N = Object.fromEntries(MONTHS.map((m, i) => [m, i + 1]));
const parseFirst = s => { const m = String(s || '').match(/^(\d{1,2}) (\w+)(?: (\d{4}))?/); return m && MON_N[m[2]] ? `${m[3] || '2026'}-${String(MON_N[m[2]]).padStart(2, '0')}-${m[1].padStart(2, '0')}` : null; };
export const GROUPS = RESEARCH.groups || {};
export const GROUPS_NOTE = 'Grouped by this site (a proposal by its researcher), not by the source.';
export const AGENT_LIST = AGENTS.list.map(a => { const r = R_BY[a.address] || {}; return { ...a, group: r.group || 'other', firstDate: parseFirst(r.first_date), firstNote: r.first_date || null, helper: !!r.helper }; });
const fringe = R_BY['conductor.fringe@PrompTugal.indi'];
export const TEAMS = [
  { id: 'web-summit.indi', what: "the Web Summit team's site (web-summit.sgit.ai)", agents: AGENT_LIST, src: ['ws-people-indi', 'ws-everything'] },
  { id: 'PrompTugal.indi', what: 'Lisbon Tech Fringe, a PrompTugal.news site', agents: [{ role: AGENTS.alsoNamed.role, status: 'running', does: AGENTS.alsoNamed.does, commits: null, group: 'lead', firstDate: parseFirst(fringe?.first_date), firstNote: fringe?.first_date || null }], src: ['ltf-join'], note: AGENTS.alsoNamed.note },
];
// Who his agents wrote to: research edges from one of his agents to anyone outside his team, with the recipient
// reduced to a role (no other person is named; teammates are "a teammate").
const MINE = new Set([...(RESEARCH.agents || []).map(a => a.handle), ...AGENTS.list.map(a => a.address)]);
const recipient = to => /^Indi Gupte$/.test(to) ? 'Indi' : /^Dinis Cruz$/.test(to) ? 'Dinis Cruz' : /^Dinis Cruz's/.test(to) ? "Dinis Cruz's agents" : /^teammate [A-Z]'s conductor$/.test(to) ? "teammates' conductors" : /^teammate [A-Z]$/.test(to) ? 'teammates' : 'other';
const edgesRaw = Array.isArray(RESEARCH.edges) ? RESEARCH.edges : [];
export const EDGES_SRC = RESEARCH.edges_source || null;
export const EDGES = (() => {
  const m = new Map();
  for (const e of edgesRaw) {
    if (!MINE.has(e.from) || MINE.has(e.to)) continue;
    const k = `${e.from.split('@')[0]}|${recipient(e.to)}`; m.set(k, (m.get(k) || 0) + (e.count || 1));
  }
  return [...m].map(([k, count]) => { const [from, to] = k.split('|'); return { from, to, count }; }).sort((a, b) => b.count - a.count);
})();
export const INTERNAL = edgesRaw.filter(e => MINE.has(e.from) && MINE.has(e.to)).reduce((o, e) => ({ links: o.links + 1, msgs: o.msgs + (e.count || 1) }), { links: 0, msgs: 0 });

const tbl = (caption, head, rows) => `<details class="data"><summary>${esc(caption)}</summary><div class="table"><table><thead><tr>${head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div></details>`;
const swap = (wide, narrow) => `${wide.replace('<svg class="', '<svg class="fig-h ')}${narrow.replace('<svg class="', '<svg class="fig-v ')}`;
const chartWrap = ({ id, h = 'h3', heading, reading, svg, table, srcIds, extra = '' }) => `<figure class="chart" id="${id}"><${h} class="ch-h">${esc(heading)}</${h}><p class="ch-r">${reading}</p>${svg}${table}<figcaption>${extra}${extra ? ' ' : ''}Source${srcIds.length > 1 ? 's' : ''}: ${srcIds.map(srcLine).join('; ')}.</figcaption></figure>`;
const fit = (s, px, cw = 7.2) => (s.length * cw > px ? s.slice(0, Math.max(3, Math.floor(px / cw) - 1)) + '…' : s);

function teamsSvg(W, cols, id) {
  const tw = (W - (cols - 1) * 8) / cols, th = 32;
  let y = 0, body = '';
  const tile = (a, x, yy) => { const on = a.status === 'running'; return `<g><title>${esc(a.role)}: ${esc(a.status)}${a.commits != null ? `, ${a.commits} commits listed` : ''}</title><rect x="${x}" y="${yy}" width="${tw}" height="${th}" rx="6" class="${on ? 'c-on' : 'c-off'}"/><text x="${x + 9}" y="${yy + 21}" class="${on ? 'c-ont' : 'c-offt'}">${esc(fit(a.role, tw - 16))}</text></g>`; };
  for (const t of TEAMS) {
    const run = t.agents.filter(a => a.status === 'running').length;
    body += `<text x="0" y="${y + 18}" class="c-h">${esc(t.id)}</text><text x="${W}" y="${y + 18}" class="c-m" text-anchor="end">${t.agents.length} agent${t.agents.length === 1 ? '' : 's'}${t.agents.length > 1 ? `, ${run} running` : ''}</text>`;
    y += 30;
    const groups = t.agents.length > 1 ? Object.keys(GROUPS).map(g => [g, t.agents.filter(a => a.group === g)]).filter(([, l]) => l.length) : [['', t.agents]];
    for (const [g, list] of groups) {
      if (g) { body += `<text x="0" y="${y + 12}" class="c-g">${esc(fit(W < 500 ? GROUPS[g].replace(/[:(].*$/, '').trim() : GROUPS[g], W, 7))}</text>`; y += 20; }
      list.forEach((a, i) => { body += tile(a, (i % cols) * (tw + 8), y + Math.floor(i / cols) * (th + 6)); });
      y += Math.ceil(list.length / cols) * (th + 6) + 8;
    }
    y += 12;
  }
  body += `<rect x="0" y="${y}" width="16" height="16" rx="3" class="c-on"/><text x="22" y="${y + 13}" class="c-m">running</text><rect x="96" y="${y}" width="16" height="16" rx="3" class="c-off"/><text x="118" y="${y + 13}" class="c-m">proposed, not yet running</text>`;
  return `<svg class="ch" viewBox="0 0 ${W} ${y + 22}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">His agent teams and their agents</title><desc id="${id}-d">${esc(TEAMS.map(t => `${t.id}: ${t.agents.map(a => `${a.role} (${a.status})`).join(', ')}`).join('. '))}. The same data is in the table below.</desc>${body}</svg>`;
}
export function chartTeams(id = 'ct', h = 'h3') {
  const total = TEAMS.reduce((n, t) => n + t.agents.length, 0);
  return chartWrap({
    id, h, heading: 'His agent teams, agent by agent',
    reading: `Two teams. On web-summit.indi, ${esc(TEAM_LINE.replace(/^A /, 'a '))}${ref(TEAM_SRC)}; the four not running were proposed and not yet started${ref('ws-everything')}. On PrompTugal.indi, one conductor for Lisbon Tech Fringe, outside the 27${ref('ltf-join')}.`,
    svg: swap(teamsSvg(720, 5, `${id}w`), teamsSvg(358, 2, `${id}n`)),
    table: tbl(`The ${total} agents as a table`, ['Agent (role)', 'Team', 'Group (this site\'s)', 'Status', 'What it does (shortened from the source)'], TEAMS.flatMap(t => t.agents.map(a => [a.role, t.id, GROUPS[a.group] || '', a.status, a.does || 'not published']))),
    srcIds: ['ws-people-indi', 'ws-everything', 'ltf-join'],
    extra: `${esc(GROUPS_NOTE)} ${esc(AGENTS.namingNote.text)} Read ${fmtDay(READ_DATE)}.`,
  });
}
function barsSvg(W, id) {
  const list = [...AGENT_LIST].sort((a, b) => b.commits - a.commits || a.role.localeCompare(b.role));
  const lw = W < 500 ? 132 : 170, rh = 22, max = Math.max(...list.map(a => a.commits)), bw = W - lw - (W < 500 ? 100 : 130);
  const body = list.map((a, i) => {
    const y = i * rh, w = a.commits ? Math.max(2, Math.round(a.commits / max * bw)) : 0;
    return `<text x="${lw - 8}" y="${y + 15}" class="c-l" text-anchor="end">${esc(fit(a.role, lw - 12))}</text>${a.commits ? `<rect x="${lw}" y="${y + 4}" width="${w}" height="${rh - 8}" rx="3" class="c-bar"/>` : `<rect x="${lw}" y="${y + 4}" width="1.5" height="${rh - 8}" class="c-axisf"/>`}<text x="${lw + w + 6}" y="${y + 15}" class="c-v">${a.commits}${a.status !== 'running' ? ' · not running' : ''}</text>`;
  }).join('');
  return `<svg class="ch" viewBox="0 0 ${W} ${list.length * rh + 4}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">Commits per agent, as listed on his dashboard</title><desc id="${id}-d">${esc(list.map(a => `${a.role} ${a.commits}`).join(', '))}. The same data is in the table below.</desc>${body}</svg>`;
}
export function chartCommits(id = 'cc', h = 'h3') {
  const list = [...AGENT_LIST].sort((a, b) => b.commits - a.commits);
  return chartWrap({
    id, h, heading: 'Commits per agent',
    reading: `His conductor leads with ${list[0].commits} listed commits, then ${list.slice(1, 4).map(a => `${a.role} (${a.commits})`).join(', ')}; ${list.filter(a => a.commits <= 3).length} agents made three or fewer. These are the per-agent counts on his dashboard, over a longer window than the published total: ${esc(COMMITS_LINE)}${ref(COMMITS_SRC)}.`,
    svg: swap(barsSvg(720, `${id}w`), barsSvg(358, `${id}n`)),
    table: tbl('Commits per agent as a table', ['Agent (role)', 'Commits listed', 'Status', 'Last commit (UTC)'], list.map(a => [a.role, String(a.commits), a.status, a.lastCommitUtc || 'none'])),
    srcIds: ['ws-people-indi', 'ws-everything', 'news-ten-days'],
    extra: `Counts as listed, site version v0.2.2313, read ${fmtDay(READ_DATE)}.`,
  });
}
const D0 = Date.parse('2026-11-02T00:00Z'), D1 = Date.parse('2026-11-18T00:00Z');
const MARKS = [
  { from: WEB_SUMMIT.event.dates.from, to: WEB_SUMMIT.event.dates.to, text: 'Web Summit Lisbon, 9 to 12 Nov' },
  { from: WEB_SUMMIT.joined.date, to: WEB_SUMMIT.joined.date, text: 'joins in person, 5 Nov' },
];
function activitySvg(W, id) {
  const list = AGENT_LIST.filter(a => a.lastCommitUtc).sort((a, b) => (a.firstDate || a.lastCommitUtc).localeCompare(b.firstDate || b.lastCommitUtc) || a.lastCommitUtc.localeCompare(b.lastCommitUtc));
  const lw = W < 500 ? 120 : 160, top = 44, rh = 20, cw = W - lw - 8, H = top + list.length * rh;
  const X = iso => lw + (Date.parse(iso.length > 10 ? iso.replace(' ', 'T') + 'Z' : iso + 'T12:00Z') - D0) / (D1 - D0) * cw;
  let b = '';
  for (const m of MARKS) {
    const x0 = lw + (Date.parse(m.from + 'T00:00Z') - D0) / (D1 - D0) * cw, x1 = lw + (Date.parse(m.to + 'T24:00Z') - D0) / (D1 - D0) * cw;
    b += `<rect x="${x0}" y="${top - 8}" width="${x1 - x0}" height="${H - top + 8}" class="${m.from === m.to ? 'c-mark2' : 'c-mark'}"/><text x="${m.from === m.to ? x0 : x0 + 3}" y="${m.from === m.to ? 12 : 28}" class="c-m">${esc(m.text)}</text>`;
  }
  for (let t = D0; t <= D1; t += 864e5) { const d = new Date(t).getUTCDate(); const x = lw + (t - D0) / (D1 - D0) * cw; if (W > 500 || d % 2 === 0) b += `<text x="${x}" y="${H + 16}" class="c-l" text-anchor="middle">${d}</text>`; b += `<path d="M${x} ${H} v4" class="c-axis"/>`; }
  list.forEach((a, i) => {
    const y = top + i * rh + rh / 2, xl = X(a.lastCommitUtc);
    b += `<text x="${lw - 8}" y="${y + 5}" class="c-l" text-anchor="end">${esc(fit(a.role, lw - 12))}</text>`;
    if (a.firstDate) b += `<path d="M${X(a.firstDate)} ${y} H${xl}" class="c-span"/><circle cx="${X(a.firstDate)}" cy="${y}" r="4" class="c-first"/>`;
    b += `<circle cx="${xl}" cy="${y}" r="5" class="c-node"/>`;
  });
  b += `<path d="M${lw} ${H} H${W}" class="c-axis"/><text x="${lw}" y="${H + 36}" class="c-m">November 2026 (UTC). Filled dot: last commit. Open dot and line: first date, where published.</text>`;
  return `<svg class="ch" viewBox="0 0 ${W} ${H + 44}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">When each agent was active: first date where published, and last commit</title><desc id="${id}-d">${esc(list.map(a => `${a.role}: ${a.firstNote ? `from ${a.firstNote}, ` : ''}last commit ${a.lastCommitUtc}`).join('. '))}. The same data is in the table below.</desc>${b}</svg>`;
}
export function chartActivity(id = 'ca', h = 'h3') {
  const withDate = AGENT_LIST.filter(a => a.lastCommitUtc);
  const inSummit = withDate.filter(a => a.lastCommitUtc.slice(0, 10) >= WEB_SUMMIT.event.dates.from && a.lastCommitUtc.slice(0, 10) <= WEB_SUMMIT.event.dates.to).length;
  const last = [...withDate].sort((a, b) => b.lastCommitUtc.localeCompare(a.lastCommitUtc))[0];
  return chartWrap({
    id, h, heading: 'Activity over time',
    reading: `No per-day commit counts were published, so this draws each agent's published last commit, and its first date where one is published. ${inSummit} of the ${withDate.length} agents that committed made their last commit during Web Summit week${ref(WEB_SUMMIT.event.sources)}; his ${esc(last.role)} was still committing on ${fmtDay(last.lastCommitUtc)}.`,
    svg: swap(activitySvg(720, `${id}w`), activitySvg(358, `${id}n`)),
    table: tbl('First and last dates per agent as a table', ['Agent (role)', 'First date (where published)', 'Last commit (UTC)', 'Commits listed'], [...withDate].sort((a, b) => a.lastCommitUtc.localeCompare(b.lastCommitUtc)).map(a => [a.role, a.firstNote || 'not published', a.lastCommitUtc, String(a.commits)])),
    srcIds: ['ws-people-indi', 'ws-everything', 'ws-home', 'ws-brief-indi'],
    extra: `Read ${fmtDay(READ_DATE)}.`,
  });
}
const RECIP_ORDER = ['Indi', 'Dinis Cruz', "Dinis Cruz's agents", "teammates' conductors", 'teammates', 'other'];
function mapSvg(W, id) {
  const froms = [...new Set(EDGES.map(e => e.from))].sort((a, b) => EDGES.filter(e => e.from === b).reduce((s, e) => s + e.count, 0) - EDGES.filter(e => e.from === a).reduce((s, e) => s + e.count, 0));
  const tos = RECIP_ORDER.filter(t => EDGES.some(e => e.to === t));
  const narrow = W < 500, rh = 26, H = froms.length * rh + 30;
  const fw = narrow ? 128 : 170, rx = narrow ? W - 128 : W - 210;
  const fy = i => 34 + i * rh, ty = i => 34 + (i + 0.5) * ((froms.length - 1) * rh) / tos.length;
  const maxC = Math.max(...EDGES.map(e => e.count));
  const sum = t => EDGES.filter(e => e.to === t).reduce((s, e) => s + e.count, 0);
  let b = `<text x="0" y="14" class="c-m">his agent (role)</text><text x="${rx}" y="14" class="c-m">wrote to (messages)</text>`;
  for (const e of EDGES) {
    const y1 = fy(froms.indexOf(e.from)), y2 = ty(tos.indexOf(e.to)), x1 = fw, x2 = rx - 8;
    b += `<path d="M${x1} ${y1} C${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2} ${y2}" class="c-link" style="stroke-width:${(1 + 7 * Math.sqrt(e.count / maxC)).toFixed(1)}"><title>${esc(e.from)} wrote to ${esc(e.to)} ${e.count} times</title></path>`;
  }
  froms.forEach((f, i) => { b += `<rect x="0" y="${fy(i) - 11}" width="${fw}" height="22" rx="11" class="c-on"/><text x="10" y="${fy(i) + 5}" class="c-ont">${esc(fit(f, fw - 16))}</text>`; });
  tos.forEach((t, i) => {
    const words = t.split(' '), lines = narrow && t.length > 14 ? [words.slice(0, Math.ceil(words.length / 2)).join(' '), words.slice(Math.ceil(words.length / 2)).join(' ')] : [t];
    b += `<circle cx="${rx - 4}" cy="${ty(i)}" r="8" class="c-node"/>${lines.map((s, k) => `<text x="${rx + 10}" y="${ty(i) + 5 + (k - (lines.length - 1) / 2) * 16}" class="c-l">${esc(s)}${k === lines.length - 1 ? ` (${sum(t)})` : ''}</text>`).join('')}`;
  });
  return `<svg class="ch" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">Who his agents wrote to, outside his own team</title><desc id="${id}-d">${esc(EDGES.map(e => `${e.from} to ${e.to}, ${e.count}`).join('; '))}. The same data is in the table below.</desc>${b}</svg>`;
}
export function chartMap(id = 'cm', h = 'h3') {
  if (!EDGES.length) return '';
  const tot = EDGES.reduce((s, e) => s + e.count, 0), toIndi = EDGES.filter(e => e.to === 'Indi').reduce((s, e) => s + e.count, 0);
  const senders = new Set(EDGES.map(e => e.from)).size;
  const read = EDGES_SRC?.read || READ_DATE;
  return chartWrap({
    id, h, heading: 'Who his agents wrote to',
    reading: `${senders} of his agents wrote ${tot} messages to people and agents outside his team; ${toIndi} of them went to Indi himself, most from his conductor. Between his own agents there were ${INTERNAL.msgs} more, over ${INTERNAL.links} links. His agents draft; he sends every message${ref('ws-team-indi')}.`,
    svg: swap(mapSvg(720, `${id}w`), mapSvg(358, `${id}n`)),
    table: tbl('Who each agent wrote to, as a table', ['Agent (role)', 'Wrote to', 'Messages'], EDGES.map(e => [e.from, e.to, String(e.count)])),
    srcIds: ['ws-people-indi', 'ws-team-indi'],
    extra: `From the chart "who they write to" on his dashboard page${EDGES_SRC?.url ? ` (${esc(EDGES_SRC.url)})` : ''}, one line per pair, read ${fmtDay(read)}. Recipients are shown by role: other people on the team are not named.`,
  });
}
// The agents as published data: /data/agents.json.
export const agentsData = () => ({
  about: `${PERSON.name}'s AI agent teams, as published on the Web Summit team's site and on Lisbon Tech Fringe. Agent names are the role, then @, the project, then the person; this file and the site's pages give the role. Descriptions are shortened from the sources; no person other than Indi Gupte and Dinis Cruz is named.`,
  read: READ_DATE,
  sources: ['ws-people-indi', 'ws-everything', 'ltf-join', 'news-ten-days'].map(id => ({ id, title: SOURCES[id].title, url: SOURCES[id].url, read: SOURCES[id].read })),
  counts: { agents: AGENTS.total.value, running: AGENTS.running.value, not_running: AGENTS.notRunning.value, published_line: AGENTS.publishedLine.quote },
  commits_published: { value: AGENTS.commits.value, text: AGENTS.commits.text, window: AGENTS.commits.window, source: SOURCES['news-ten-days'].url },
  commits_per_agent_note: 'Per-agent counts as listed on his dashboard (site version v0.2.2313); they cover a longer window than the published total.',
  groups: GROUPS, groups_note: GROUPS_NOTE,
  teams: TEAMS.map(t => ({ id: t.id, what: t.what, note: t.note || null, agents: t.agents.map(a => ({ role: a.role, group: a.group, status: a.status, commits: a.commits ?? null, first_date: a.firstNote || null, last_commit_utc: a.lastCommitUtc || null, does: a.does || 'not published' })) })),
  wrote_to: { note: 'Messages from his agents to people and agents outside his team, recipients by role.', source: EDGES_SRC, edges: EDGES, between_his_own_agents: INTERNAL },
});


// =====================================================================================================================
// Round 2 (team/rounds/2/design/PROPOSAL.md R1, R3, R4, with the reviewer's conditions C61 to C84).
// =====================================================================================================================

// Real pixel sizes of a JPEG, read from its header, so every <img> reserves the right space (R6.7).
export function jpegSize(file) {
  const b = readFileSync(file); let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xFF) { i++; continue; }
    const m = b[i + 1], len = b.readUInt16BE(i + 2);
    if (m >= 0xC0 && m <= 0xCF && ![0xC4, 0xC8, 0xCC].includes(m)) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    i += 2 + len;
  }
  throw new Error(`no size in ${file}`);
}
export const imgDims = src => { const { w, h } = jpegSize(`src${src}`); return `width="${w}" height="${h}"`; };

// His line (HOME_LINE, his words, exact) and its three phrases, each an exact substring (C66, C58).
export const LINE = HOME_LINE;
export const BRING_PHRASES = (() => {
  const m = HOME_LINE.quote.match(/^What I bring: (.+?), (design \(.+?\)), and (.+)\.$/);
  if (!m) throw new Error('HOME_LINE: cannot find the three phrases');
  for (const x of m.slice(1, 4)) if (!HOME_LINE.quote.includes(x)) throw new Error(`phrase not in his line: ${x}`);
  return m.slice(1, 4);
})();
export const lineSource = `<a class="attr" href="/sources/#src-whatsapp">From his post to a UK Web Summit WhatsApp group, November 2026</a>`;

// R1.1 item 6: the three sourced figures. Label is HOME_FIGURES[].label verbatim (C61); the whole phrase `text` is
// the accessible name; each tile's source line opens its /sources/ entry (C63).
const FIG_SRC = { agents: 'ws-people-indi', commits: 'news-ten-days', editor: 'promptugal-about' };
export const homeFigures = (cls = '') => `<ul class="figs${cls ? ` ${cls}` : ''}">${HOME_FIGURES.map(f => {
  const sid = f.sources.includes(FIG_SRC[f.id]) ? FIG_SRC[f.id] : f.sources[0], S = SOURCES[sid];
  return `<li class="fig"><p class="fnum" aria-hidden="true">${esc(f.value)}</p><p class="flab2"><span class="vh">${esc(f.text)}</span><span aria-hidden="true">${esc(f.label)}</span></p><a class="fsrc" href="/sources/#src-${sid}"><span class="vh">Source: </span>${esc(S.title)}, read ${shortDay(S.read)}</a></li>`;
}).join('')}</ul>`;

// R1.1 item 9: his work in pictures. Captions take their dates from the /built/ entry each tile links to (C64).
export const WORK_PICS = [
  { src: '/assets/work/cards-round4-executives.jpg', href: '/built/#work-business-cards-printed', title: 'The printed cards', line: '4 to 5 November, his designer agent', alt: 'The printed RiskMandate business card for executives, made by his designer agent' },
  { src: '/assets/work/sticker-gap.jpg', href: '/built/#work-laptop-stickers', title: 'The gap sticker', line: '4 November, his designer agent', alt: 'The laptop sticker on the gap between what an agent can reach and what it may do' },
  { src: '/assets/work/schedules.jpg', href: '/built/#work-schedules', title: 'Who wakes when', line: '8 November, his conductor agent', alt: 'His page showing when each of his agents wakes up during the day' },
];
export const workPics = ({ cls = '', eager = false, h = 'h3' } = {}) => `<ul class="pics${cls ? ` ${cls}` : ''}">${WORK_PICS.map(w => `<li><a href="${w.href}"><span class="mat"><img src="${w.src}" ${imgDims(w.src)} alt="${esc(w.alt)}"${eager ? '' : ' loading="lazy"'} decoding="async"></span><${h} class="pic-t">${esc(w.title)}</${h}><span class="pic-l">${esc(w.line)}</span></a></li>`).join('')}</ul>`;

// R3: his ten days, from TEN_DAYS only (C73). 7 and 8 November blank (C74); text is TEN_DAYS[].label (C75); one
// note reference per entry (C76); times as printed, with one line saying no zone is stated (C77); the derived
// 14 November entry in a line under the strip, and kind in words (C78).
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const KIND = { his: 'his work', team: 'the team', event: 'the event' };
const dayList = () => { const out = []; for (let t = Date.parse(TEN_DAYS_RANGE.from + 'T12:00Z'); t <= Date.parse(TEN_DAYS_RANGE.to + 'T12:00Z'); t += 864e5) out.push(new Date(t).toISOString().slice(0, 10)); return out; };
const dayLabel = iso => { const d = new Date(iso + 'T12:00Z'); return `${WD[d.getUTCDay()]} ${d.getUTCDate()}`; };
const entryHtml = e => `<li class="ev k-${e.kind}"><span class="ev-k">${KIND[e.kind]}</span>${e.time ? `<time class="ev-t">${esc(e.time)}</time> ` : ''}<span class="ev-x">${esc(e.label)}</span>${ref(e.sources)}</li>`;
const dayHtml = iso => {
  const list = TEN_DAYS.filter(e => e.date === iso && !e.derived);
  return `<li class="day${list.length ? '' : ' blank'}"><time class="dl" datetime="${iso}">${dayLabel(iso)}</time>${list.length ? `<ul class="evs">${list.map(entryHtml).join('')}</ul>` : ''}</li>`;
};
export const tenDays = ({ id = 'ten-days', h = 'h2', title = `His ten days, ${TEN_DAYS_RANGE.text}`, titleHtml = '', cls = '' } = {}) => {
  const days = dayList(), E = TEN_DAYS_RANGE.eventDays;
  const before = days.filter(d => d < E.from), during = days.filter(d => d >= E.from && d <= E.to), after = days.filter(d => d > E.to);
  const tail = TEN_DAYS.filter(e => e.derived);
  return `<section class="tendays${cls ? ` ${cls}` : ''}" id="${id}" aria-labelledby="${id}-h">
<${h} id="${id}-h">${titleHtml || esc(title)}</${h}>
<div class="td-cols">
<ol class="td-col">${before.map(dayHtml).join('')}</ol>
<div class="td-col"><div class="evband"><p class="evband-l">${esc(E.label)}, ${esc(E.text.replace(/ 2026$/, ''))}</p><ol>${during.map(dayHtml).join('')}</ol></div><ol>${after.map(dayHtml).join('')}</ol></div>
</div>
${tdAfter()}
${tdNote()}
</section>`;
};
// Round 3 (S2): the parts each design draws in its own style. The words stay the same everywhere (C73 to C78, C94).
export const TD_KIND = KIND;
export const tdDays = (from = TEN_DAYS_RANGE.from, to = TEN_DAYS_RANGE.to) => { const out = []; for (let t = Date.parse(from + 'T12:00Z'); t <= Date.parse(to + 'T12:00Z'); t += 864e5) out.push(new Date(t).toISOString().slice(0, 10)); return out; };
export const tdOn = iso => TEN_DAYS.filter(e => e.date === iso && !e.derived);
export const tdInEvent = iso => iso >= TEN_DAYS_RANGE.eventDays.from && iso <= TEN_DAYS_RANGE.eventDays.to;
export const tdEventLabel = () => `${TEN_DAYS_RANGE.eventDays.label}, ${TEN_DAYS_RANGE.eventDays.text.replace(/ 2026$/, '')}`;
export const tdAfter = (cls = 'td-after') => TEN_DAYS.filter(e => e.derived).map(e => `<p class="${cls}">After the ten days: ${fmtDay(e.date).replace(/ 2026$/, '')}, ${esc(e.label)} <span class="muted">(date derived: ${esc(e.how)})</span>${ref(e.sources)}</p>`).join('');
export const tdNote = (cls = 'td-note') => `<p class="${cls}">Times as the sources give them; no time zone stated. Days with no dated record are left blank.${ref(TEN_DAYS_RANGE.sources)}</p>`;
export const tdTitle = `His ten days, ${TEN_DAYS_RANGE.text}`;
// The same entries as a log, one line each (Agent Console, R2.4).
export const tenDaysLog = () => `<ol class="tlog">${TEN_DAYS.map(e => `<li><time datetime="${e.date}">${e.date}</time> <span class="tl-t">${e.time ? esc(e.time) : '     '}</span> <span class="tl-k">${e.derived ? 'derived' : KIND[e.kind].replace(/^the /, '').replace(/^his work$/, 'his')}</span> <span class="tl-x">${esc(e.label)}${ref(e.sources)}</span></li>`).join('')}</ol><p class="dim td-note">Times as the sources give them; no time zone stated. 7 and 8 November: no dated record. 14 November is derived: ${esc(TEN_DAYS.find(e => e.derived).how)}</p>`;

// R4: his agents as one team figure, HTML and CSS so full names wrap (C80); per-agent counts only, no sum (C79).
const GROUP_SHORT = g => (GROUPS[g] || g).replace(/[:(].*$/, '').trim();
const isOneOff = a => /^(one-off|overnight) helper/.test(a.does || '');
const chip = (a, team = 'web-summit.indi') => {
  const run = a.status === 'running', w = a.commits ? Math.max(2, a.commits / 90 * 100) : 0;
  return `<li class="chip ${run ? 'run' : 'off'}${isOneOff(a) ? ' oneoff' : ''}"><span class="ch-n"><span class="dot" aria-hidden="true"></span><b>${esc(a.role)}</b><span class="ch-at">@${esc(team)}</span></span><span class="vh">, ${run ? 'running' : 'proposed, not running'}${isOneOff(a) ? ', a one-off helper' : ''}, </span>${isOneOff(a) ? '<span class="tag1" aria-hidden="true">one-off</span>' : ''}${run ? `<span class="ch-c"><span class="cbar" style="--w:${w.toFixed(1)}%" aria-hidden="true"></span>${a.commits == null ? 'commits not listed' : `${a.commits} commit${a.commits === 1 ? '' : 's'}`}</span>` : '<span class="ch-c">proposed, not running</span>'}</li>`;
};
const sortAgents = l => [...l].sort((a, b) => (a.status === 'running' ? 0 : 1) - (b.status === 'running' ? 0 : 1) || (b.commits || 0) - (a.commits || 0) || a.role.localeCompare(b.role));
const groupsOf = () => Object.keys(GROUPS).map(g => [g, AGENT_LIST.filter(a => a.group === g)]).filter(([, l]) => l.length);
const runCount = l => l.filter(a => a.status === 'running').length;
const agentsWord = n => `${n} agent${n === 1 ? '' : 's'}`;
export const teamFigure = ({ id = 'team', small = false } = {}) => {
  const lead = AGENT_LIST.find(a => a.role === 'conductor');
  const leadCard = `<div class="tf-lead"><p class="tf-lr"><span class="dot" aria-hidden="true"></span><b>${esc(lead.role)}</b><span class="ch-at">@web-summit.indi</span></p><p class="tf-ls">leads the team · ${lead.commits} commits · running</p></div>`;
  const groups = groupsOf().filter(([g]) => g !== 'lead' || AGENT_LIST.filter(a => a.group === 'lead').length > 1);
  if (small) return `<figure class="teamfig small" id="${id}">${leadCard}<ul class="tf-tiles">${groups.map(([g, l]) => `<li><a href="/how-i-work/#team"><b>${esc(GROUP_SHORT(g))}</b><span>${agentsWord(l.length)}, ${runCount(l)} running</span></a></li>`).join('')}</ul><figcaption>${esc(WEB_SUMMIT.rules.text)}${ref(WEB_SUMMIT.rules.sources)} <span class="muted">${esc(TEAM_LINE)}${ref(TEAM_SRC)}. Groups are this site's, not the source's.</span> <a class="more" href="/how-i-work/#team">All ${AGENTS.total.value} agents, by name</a></figcaption></figure>`;
  const fr = TEAMS[1].agents[0];
  return `<figure class="teamfig" id="${id}" aria-labelledby="${id}-cap">
${leadCard}<div class="tf-bus" aria-hidden="true"></div>
<div class="tf-groups">${groups.map(([g, l]) => `<section class="tf-g" aria-label="${esc(GROUP_SHORT(g))}"><p class="tf-gh"><b>${esc(GROUP_SHORT(g))}</b><span>${agentsWord(l.length)}, ${runCount(l)} running</span></p><ul class="chips">${sortAgents(l.filter(a => a !== lead)).map(a => chip(a)).join('')}</ul></section>`).join('')}</div>
<section class="tf-other" aria-label="PrompTugal.indi"><p class="tf-gh"><b>PrompTugal.indi</b><span>1 agent, not counted in the ${AGENTS.total.value}</span></p><ul class="chips">${chip({ ...fr, commits: null }, 'PrompTugal.indi')}</ul></section>
<ul class="tf-legend" aria-label="Legend"><li><span class="lg run" aria-hidden="true"></span>running</li><li><span class="lg oneoff" aria-hidden="true"></span>running, a one-off helper</li><li><span class="lg off" aria-hidden="true"></span>proposed, not running</li><li><span class="lg bar" aria-hidden="true"></span>commits listed for that agent</li></ul>
<figcaption id="${id}-cap"><b>${esc(WEB_SUMMIT.rules.text)}</b>${ref(WEB_SUMMIT.rules.sources)} <span class="muted">${esc(AGENTS.legend.text)} Groups are this site's, not the source's. Commit counts are per agent, as listed on his dashboard (to 16 November); the published figure is ${esc(COMMITS_LINE)}.${ref('ws-people-indi', 'ws-everything', 'news-ten-days')} His Lisbon Tech Fringe conductor is listed on lisbontechfringe.com.${ref('ltf-join')}</span></figcaption>
${tbl(`The ${AGENTS.total.value} agents as a table`, ['Agent', 'Group (this site\'s)', 'Status', 'Commits listed', 'What it does (shortened from the source)'], sortAgents(AGENT_LIST).map(a => [`${a.role}@web-summit.indi`, GROUP_SHORT(a.group), a.status, String(a.commits), a.does || 'not published']))}
</figure>`;
};
