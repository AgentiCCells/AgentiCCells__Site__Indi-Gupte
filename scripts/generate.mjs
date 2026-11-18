// Writes every page under src/ from data/facts.mjs (and data/research/ for his work and his agent teams), then
// runs scripts/designs.mjs for the home page, the five designs, /d/ and /designs.json.
// Copyright 2026 AgentiCCells. Code Apache-2.0; the text it writes is CC BY 4.0.
// Structure adapted from the Marc Noah site's scripts/generate.mjs (Apache-2.0,
// https://github.com/AgentiCCells/AgentiCCells__Site__Marc-Noah/blob/dev/scripts/generate.mjs, read 2026-11-18).
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1. Run: node scripts/generate.mjs
import { writeFileSync, mkdirSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';
import * as F from '../data/facts.mjs';
import {
  esc, fmtDay, ref, note, fact, srcLine, srcMd, SRC_ORDER, srcNum, page, pageHead, headshot, languagesFigure, workFig,
  chartTeams, chartCommits, chartActivity, chartMap, agentsData, AGENT_LIST, TEAM_LINE, TEAM_SRC, COMMITS_LINE,
  COMMITS_SRC, POST_LINES, CARDS_QUOTE, scrub, GH, designIdea, designHref, postBlock, stats, videoSlot,
} from './lib.mjs';
const { READ_DATE_TEXT, SOURCE_GROUPS, SOURCES, LINKEDIN, LINKEDIN_TEXT, REPO, SITE, PERSON, QUOTES, ASK, WEB_SUMMIT, BUILT, AGENTS, LANGUAGES, BACKGROUND, DESIGNS, PAGES, QUESTIONS_FOR_INDI, FOOTER } = F;

const out = (p, s) => { const f = `src${p}`; mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };
const P = PAGES;

// ---------- his work at web-summit.sgit.ai (data/research/work.json) ----------
const WORK = existsSync('data/research/work.json') ? JSON.parse(readFileSync('data/research/work.json', 'utf8')) : null;
// Left out of the gallery: pages that name a target company, products of other companies, work kept by someone
// else's agents, his open task list, and planned work not yet run (see team/rounds/1/build/NOTES.md).
const WORK_SKIP = new Set(['factory-company-page', 'apps-strategy', 'todo', 'command-centre', 'team-app-redesign', 'synthetic-users-cards', 'digital-card', 'venue-map']);
const agentWords = s => String(s || '').replace(/\b([\w.-]+)@[\w-]+\.indi\b/g, 'his $1 agent').replace(/\b([\w.-]+)@[\w-]+\.dinis\b/g, "Dinis Cruz's $1 agent");
const workWhat = it => it.slug === 'factory' ? `One page per target company, ${it.numbers.companies} companies: what each does, the risks it faces from AI agents, and how RiskMandate helps.` : it.what;
const WORK_ITEMS = WORK ? WORK.items.filter(it => !WORK_SKIP.has(it.slug)).map(it => ({ ...it, shots: [].concat(it.shot || []).map(s => `/assets/work/${s.split('/').pop()}`).filter(s => existsSync(`src${s}`)) })) : [];
const srcLinks = it => (it.sources || []).map(u => `<a href="${esc(u)}">${esc(u.replace(/^https:\/\//, '').replace(/\/index\.md$/, '/'))}</a>`).join(', ');
const workCard = it => `<article class="wk" id="work-${esc(it.slug)}">
${it.shots.length ? `<div class="shots">${it.shots.map(s => `<a href="${s}"><img src="${s}" alt="Screenshot: ${esc(it.title)}" loading="lazy" decoding="async" width="800" height="518"></a>`).join('')}</div>` : ''}
<div class="body"><h3>${it.url ? `<a href="${esc(it.url)}">${esc(it.title)}</a>` : esc(it.title)}</h3>
<p>${esc(workWhat(it))}</p>
<dl><dt>Agent</dt><dd>${esc(agentWords(it.agent))}</dd><dt>Date</dt><dd>${esc(it.date)}</dd><dt>Source</dt><dd>${srcLinks(it)}, read ${fmtDay(it.read || WORK.read)}</dd></dl>
</div></article>`;
export const workGallery = (h = 'h2') => {
  if (!WORK_ITEMS.length) return '';
  const withShots = WORK_ITEMS.filter(i => i.shots.length), rest = WORK_ITEMS.filter(i => !i.shots.length);
  return `<section class="wrap section" id="his-work" aria-labelledby="hw-h">
<${h} id="hw-h">His work at web-summit.sgit.ai</${h}>
<p class="lede">Pages he and his agents made on the Web Summit team's site, each with the agent that made it, the date and where to check it. Screenshots taken from the public pages on ${fmtDay(WORK.read)}.</p>
<div class="work">${withShots.map(workCard).join('\n')}</div>
${rest.length ? `<h3>More of his work there</h3><ul class="morelist">${rest.map(it => `<li><b>${it.url ? `<a href="${esc(it.url)}">${esc(it.title)}</a>` : esc(it.title)}</b>. ${esc(workWhat(it))} <span class="muted">${esc(agentWords(it.agent))}; ${esc(it.date)}. Source: ${srcLinks(it)}.</span></li>`).join('')}</ul>` : ''}
</section>`;
};

// ---------- /built/ ----------
const caseBody = b => {
  const parts = [];
  if (b.label) parts.push(`<span class="label">${esc(b.label)}</span>`);
  parts.push(`<h3>${esc(b.title)}</h3>`);
  if (b.quote && POST_LINES.join('\n').includes(b.quote)) parts.push(`<p class="what">In his words: "${esc(b.quote)}"${ref('whatsapp')}</p>`);
  else parts.push(`<p class="what">${esc(b.oneLine)}</p>`);
  parts.push(`<p>${esc(b.paragraph)}${ref(b.sources.filter(s => s !== 'whatsapp'))}</p>`);
  if (b.record) parts.push(`<ul class="timeline-list">${b.record.map(r => `<li><time datetime="${r.when}">${fmtDay(r.when)}</time>${esc(r.text)}${ref(r.sources)}</li>`).join('')}</ul>`);
  if (b.id === 'factory' && WORK) { const f = WORK.items.find(i => i.slug === 'factory'); if (f) parts.push(`<p>One page per target company, ${f.numbers.companies} companies, as his factory page lists them (<a href="${esc(f.sources[0])}">source</a>, read ${fmtDay(f.read)}).</p>`); }
  parts.push(`<p><b>His part:</b> ${esc(b.role)}.</p>`);
  if (b.id === 'fringe') parts.push(videoSlot());
  return parts.join('\n');
};
const builtCase = b => `<article class="case" id="${b.id}">
<div>${workFig(b.id, b.title)}</div>
<div>${caseBody(b)}</div>
<div><p class="kicker">Where to check</p><p><a class="more" href="${esc(b.link.url)}">${esc(b.link.text)}</a></p>${note(b.sources)}</div>
</article>`;
out('/built/index.html', page({
  path: '/built/', title: P.built.title, description: P.built.description, share: 'indi-gupte',
  body: `${pageHead(P.built)}
<section class="wrap section"><h2>His own summary of the week</h2>${postBlock()}</section>
<section class="wrap section" aria-label="Each piece of work">
${BUILT.filter(b => b.kind === 'work').map(builtCase).join('\n')}
<h2>An idea, and other work</h2>
${BUILT.filter(b => b.kind !== 'work').map(builtCase).join('\n')}
</section>
${workGallery()}`,
}));

// ---------- /how-i-work/ ----------
out('/how-i-work/index.html', page({
  path: '/how-i-work/', title: P['how-i-work'].title, description: P['how-i-work'].description,
  body: `${pageHead(P['how-i-work'])}
<section class="wrap section">${stats()}
${fact(`<blockquote>${esc(ASK.brings.quote)}</blockquote><p class="muted">His words, in his post.${ref('whatsapp')}</p>`, ['whatsapp'])}
<h2>What he brings, and the work that shows it</h2>
<div class="tiles">${ASK.brings.items.map(i => `<div class="tile"><h3>${esc(i.phrase)}</h3><p>${esc(i.shownBy)}${ref(i.sources)}</p><p><a class="more" href="${i.link}">See the work</a></p></div>`).join('')}</div>
<h2>His role on the Web Summit team</h2>
${fact(`<blockquote>${esc(WEB_SUMMIT.role.quote)}</blockquote><p>${esc(WEB_SUMMIT.role.meaning)}</p><ul>${WEB_SUMMIT.focus.items.map(i => `<li><b>${esc(i.name)}.</b> "${esc(i.quote)}"</li>`).join('')}</ul><p>${esc(WEB_SUMMIT.lane.text)}</p>`, [...WEB_SUMMIT.role.sources, ...WEB_SUMMIT.focus.sources, ...WEB_SUMMIT.lane.sources])}
</section>
<section class="wrap section" id="teams" aria-labelledby="teams-h">
<h2 id="teams-h">The agent teams he created and ran</h2>
<p class="lede">${esc(AGENTS.namingNote.text)} Every chart below is drawn from the published record, with the data as a table and its source.</p>
${chartTeams('ct', 'h3')}
${chartCommits('cc', 'h3')}
${chartActivity('ca', 'h3')}
${chartMap('cm', 'h3')}
<p><a class="more" href="/data/agents.json">The data behind these charts: /data/agents.json</a></p>
</section>
<section class="wrap section">
<h2>How he works with them</h2>
${fact(`<ul>${AGENTS.howHeWorks.map(h => `<li>${esc(h.text)}${ref(h.sources)}</li>`).join('')}</ul><p>${esc(AGENTS.schedule.text)}${ref(AGENTS.schedule.sources)}</p>`, [...new Set(AGENTS.howHeWorks.flatMap(h => h.sources)), ...AGENTS.schedule.sources])}
${fact(`<blockquote>${esc(AGENTS.handover.quote)}</blockquote><p class="muted">${esc(AGENTS.handover.by)}.</p>`, AGENTS.handover.sources)}
</section>`,
}));

// ---------- /languages/ ----------
out('/languages/index.html', page({
  path: '/languages/', title: P.languages.title, description: P.languages.description,
  body: `${pageHead(P.languages)}
<section class="wrap section">${languagesFigure('lf')}</section>
<section class="wrap section"><h2>Where they lead</h2>
${LANGUAGES.whereTheyLead.map(w => fact(`<p>${esc(w.text)}</p>`, w.sources)).join('\n')}
${fact(`<p>${esc(LANGUAGES.learning.text)}: ${esc(LANGUAGES.learning.status)}. His profile names no programming languages, so none are named here.</p>`, LANGUAGES.learning.sources)}
</section>`,
}));

// ---------- /background/ ----------
out('/background/index.html', page({
  path: '/background/', title: P.background.title, description: P.background.description,
  body: `${pageHead(P.background)}
<section class="wrap section"><h2>Dated, as his profile gives it</h2>
${fact(`<ul class="timeline-list">${BACKGROUND.timeline.map(t => `<li><time>${esc(t.when.text)}</time><b>${esc(t.title)}</b>${t.note ? ` <span class="muted">${esc(t.note)}</span>` : ''}${ref(t.sources)}</li>`).join('')}</ul>`, [...new Set(BACKGROUND.timeline.flatMap(t => t.sources))])}
<h2>Not dated</h2>
<div class="grid">${BACKGROUND.undated.map(u => `<div class="panel"><h3>${esc(u.title)}</h3><p>${esc(u.text)}${ref(u.sources)}</p></div>`).join('')}</div>
<h2>The path</h2>
${fact(`<p>${esc(BACKGROUND.path.text)}</p><p>Top skills on his profile: ${esc(BACKGROUND.skills.items.join(', '))}.</p>`, BACKGROUND.path.sources)}
</section>`,
}));

// ---------- /looking-for/ ----------
out('/looking-for/index.html', page({
  path: '/looking-for/', title: P['looking-for'].title, description: P['looking-for'].description, ask: false,
  body: `${pageHead(P['looking-for'], `<p class="btns"><a class="btn btn-primary" href="${LINKEDIN}">${esc(ASK.button.text)}</a></p>`)}
<section class="wrap section">
${fact(`<blockquote>${esc(QUOTES.extracts.ask)}</blockquote><p class="muted">His words, in his post.</p><p>${esc(ASK.contactLine.text)}</p>`, ASK.contactLine.sources)}
<h2>Fields he would like to talk to people in</h2>
<p>${esc(ASK.fieldsIntro.text)}${ref(ASK.fieldsIntro.sources)}</p>
<div class="tiles">${ASK.fields.map(f => `<div class="tile"><h3>${esc(f.name)}</h3><p>${esc(f.line)}${ref(f.sources)}</p><p><a class="more" href="${f.link}">More</a></p></div>`).join('')}</div>
<h2>What he brings</h2>
<ul>${ASK.brings.items.map(i => `<li><b>${esc(i.phrase)}</b>: ${esc(i.shownBy)}${ref(i.sources)}</li>`).join('')}</ul>
<div class="panel" style="margin-top:24px"><h3>How to reach him</h3><p>${esc(PERSON.contactNote.text)}</p><p><a class="btn btn-primary" href="${LINKEDIN}">${esc(ASK.button.text)}</a></p><p class="muted">${esc(LINKEDIN_TEXT)}</p></div>
</section>`,
}));

// ---------- /sources/ ----------
out('/sources/index.html', page({
  path: '/sources/', title: P.sources.title, description: P.sources.description,
  body: `${pageHead(P.sources)}
<section class="wrap section">
${SOURCE_GROUPS.map(g => `<h2>${esc(g.title)}</h2><ol class="srclist" start="${srcNum(SRC_ORDER.find(id => SOURCES[id].group === g.id))}">${SRC_ORDER.filter(id => SOURCES[id].group === g.id).map(id => { const s = SOURCES[id]; return `<li id="src-${id}"><b>${s.url ? `<a href="${esc(s.url)}">${esc(s.title)}</a>` : esc(s.title)}</b><br><span class="muted">${esc(s.publisher)}; ${s.read ? `read ${fmtDay(s.read)}` : 'link only, not read'}; ${s.namesIndi === true ? 'names Indi' : s.namesIndi === false ? 'does not name Indi' : 'not checked'}. ${esc(s.note)}</span></li>`; }).join('')}</ol>`).join('\n')}
${WORK ? `<h2>His work at web-summit.sgit.ai</h2><p>The pages behind the gallery on <a href="/built/#his-work">What I built</a>, read ${fmtDay(WORK.read)}, are listed with each piece of work there.</p>` : ''}
</section>`,
}));

// ---------- /agents/ and /ai/ ----------
const A = P.agents;
const promptFor = a => a.id === 'indi' ? `Read ${SITE}/index.md and ${SITE}/questions.md. Ask me the questions in questions.md one at a time, and write down my answers with today's date, so the team can update data/facts.mjs. Every change about me goes to the team through Dinis Cruz.` : a.prompt;
const repoBlock = () => `<div class="panel" id="repository"><h2 style="margin-top:0">${esc(A.repoTitle)}</h2><p>${esc(A.repoLine)}</p><p class="btns"><a class="btn btn-primary" href="${REPO}">${GH} ${esc(PERSON.repo.text)}</a><a class="btn btn-secondary" href="${REPO}/tree/dev/data">data/ on GitHub</a></p></div>`;
out('/agents/index.html', page({
  path: '/agents/', title: A.title, description: A.description,
  body: `${pageHead(A)}
<section class="wrap section">
${repoBlock()}
${A.audiences.map(a => `<h2 id="for-${a.id}">${esc(a.title)}</h2><p>${esc(a.rule)}</p><pre class="prompt">${esc(promptFor(a))}</pre>`).join('\n')}
<h2>Files for AI</h2>
<ul>${[...A.files, { href: '/questions.md', text: 'questions.md', what: 'The questions for Indi\'s own AI assistant to ask him.' }, { href: '/facts.json', text: 'facts.json', what: 'Every fact on the site, with its source ids.' }, { href: '/data/agents.json', text: 'data/agents.json', what: 'His agent teams, agents, commits and who they wrote to.' }].map(f => `<li><a class="more" href="${f.href}">${esc(f.text)}</a> ${esc(f.what)}</li>`).join('')}</ul>
</section>`,
}));
out('/ai/index.html', `${(await import('./lib.mjs')).head({ title: P.ai.title, description: P.ai.description, path: '/ai/', refresh: P.ai.redirect, canonical: '/agents/' })}
<body><main class="wrap" style="padding:48px 16px"><h1>${esc(P.ai.h1)}</h1><p>${esc(P.ai.lede)}</p>
<p><a class="more" href="/agents/">Use with AI: /agents/</a></p>
<p><a class="more" href="${REPO}">The site's source on GitHub: ${esc(PERSON.repo.text)}</a></p></main></body></html>
`);

// ---------- Markdown, text and data files ----------
const md = [];
md.push(`# ${PERSON.name}`, '', `${PERSON.tagline.text} · ${PERSON.place.text}`, '', `**${ASK.short}.** ${ASK.long.text} LinkedIn: ${LINKEDIN} (no email or phone).`, '');
md.push(`${P.home.lede} (Sources: ${srcMd(P.home.sources)})`, '', `${TEAM_LINE}; ${COMMITS_LINE}. (Sources: ${srcMd([...TEAM_SRC, ...COMMITS_SRC])})`, '');
md.push('## His own words', '', ...POST_LINES.map(l => `> ${l}`), '', `${QUOTES.whatsapp.cutNote} ${QUOTES.whatsapp.attribution}.`, '');
md.push('## What he built', '');
for (const b of BUILT) { md.push(`### ${b.title}${b.label ? ` (${b.label})` : ''}`, '', b.paragraph, '', `His part: ${b.role}. Check: ${b.link.url}`, ''); if (b.id === 'fringe') md.push(`Video: ${F.VIDEO.title}. ${F.VIDEO.summary} (${F.VIDEO.attribution}, ${F.VIDEO.linkedin})`, ''); md.push(`Sources: ${srcMd(b.sources)}`, ''); }
if (WORK_ITEMS.length) { md.push('## His work at web-summit.sgit.ai', ''); for (const it of WORK_ITEMS) md.push(`- **${it.title}**: ${workWhat(it)} (${agentWords(it.agent)}; ${it.date}) ${it.url || ''}`); md.push(''); }
md.push('## How he works with AI agents', '', `${TEAM_LINE}. ${COMMITS_LINE}.`, '', ...AGENTS.howHeWorks.map(h => `- ${h.text}`), '', '| Agent (role) | Status | Commits listed | What it does |', '|---|---|---|---|', ...AGENT_LIST.map(a => `| ${a.role} | ${a.status} | ${a.commits} | ${a.does} |`), '', `Sources: ${srcMd(['ws-people-indi', 'ws-everything', 'news-ten-days'])}. Data: ${SITE}/data/agents.json`, '');
md.push('## Languages', '', LANGUAGES.figure.desc, '', ...LANGUAGES.whereTheyLead.map(w => `- ${w.text}`), '', `Source: ${srcMd(['linkedin'])}`, '');
md.push('## Background', '', ...BACKGROUND.timeline.map(t => `- ${t.when.text}: ${t.title}${t.note ? ` (${t.note})` : ''}`), ...BACKGROUND.undated.map(u => `- ${u.title}: ${u.text}`), '');
md.push('## Looking for', '', ASK.long.text, '', ASK.fieldsIntro.text, '', ...ASK.fields.map(f => `- ${f.name}: ${f.line}`), '', ASK.contactLine.text, '');
md.push('## Sources', '', ...SRC_ORDER.map(id => `${srcNum(id)}. ${SOURCES[id].title}${SOURCES[id].url ? `: ${SOURCES[id].url}` : ''} (${SOURCES[id].read ? `read ${SOURCES[id].read}` : 'link only'})`), '');
md.push('## This site', '', `Repository: ${REPO} (branch dev). ${FOOTER.licence}. Designs: ${DESIGNS.map(d => `${d.name} (${SITE}${designHref(d)})`).join(', ')}.`, '');
out('/index.md', md.join('\n'));
out('/llms.txt', [`# ${PERSON.name}`, '', `> ${PERSON.name}, ${PERSON.place.text}: ${PERSON.tagline.text.toLowerCase()}. ${ASK.long.text} Contact by LinkedIn only: ${LINKEDIN}`, '',
  `${TEAM_LINE} (${SOURCES['ws-people-indi'].url}); ${COMMITS_LINE} (${SOURCES['news-ten-days'].url}).`, '',
  '## Who this is for', '', ...A.audiences.map(a => `- ${a.title}: ${a.rule}`), '',
  '## Pages', '', ...[['/', 'Home (The Briefing)'], ['/built/', 'What I built'], ['/how-i-work/', 'How I work, with charts of his agent teams'], ['/languages/', 'Languages'], ['/background/', 'Background'], ['/looking-for/', 'Looking for work experience'], ['/sources/', 'Sources'], ['/agents/', 'Use with AI'], ['/d/', 'Five designs'], ['/behind-the-scenes/', 'Behind the scenes']].map(([p, t]) => `- [${t}](${SITE}${p})`), '',
  '## Files', '', `- [index.md](${SITE}/index.md): the whole site as Markdown`, `- [facts.json](${SITE}/facts.json): every fact with its source ids`, `- [data/agents.json](${SITE}/data/agents.json): his agent teams`, `- [designs.json](${SITE}/designs.json)`, `- [questions.md](${SITE}/questions.md): questions for Indi`, '',
  '## Source', '', `- Repository: ${REPO} (branch dev). ${FOOTER.licence}.`, ''].join('\n'));
out('/questions.md', [`# Questions for ${PERSON.name}`, '', `For Indi's own AI assistant: ask him these one at a time, write down each answer with the date, and send them to the team through Dinis Cruz. They come from data/facts.mjs (QUESTIONS_FOR_INDI), ${READ_DATE_TEXT}.`, '', ...QUESTIONS_FOR_INDI.map((q, i) => `${i + 1}. ${q.q}`), ''].join('\n'));
const factsOut = Object.fromEntries(Object.entries(F).filter(([k]) => !['QUESTIONS_TO_ASK_INDI'].includes(k)));
out('/facts.json', JSON.stringify({ about: `Every fact on ${SITE}, from data/facts.mjs in ${REPO}. Each fact carries source ids; see SOURCES.`, ...factsOut }, (k, v) => typeof v === 'string' ? scrub(v) : v, 1) + '\n');
out('/data/agents.json', JSON.stringify(agentsData(), null, 1) + '\n');
out('/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1B2333"/><text x="32" y="43" text-anchor="middle" font-family="Georgia,serif" font-size="30" fill="#F2C29A">IG</text></svg>\n`);

// ---------- the home page, the designs, /d/ and /designs.json ----------
await import('./designs.mjs');
console.log('generated src/ from data/facts.mjs');
