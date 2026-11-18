// Gate: fails the build on any problem. Never weaken a check to get a release out.
// From scripts/validate.mjs in the site repositories made by sites@AgentiCCells.dinis
// (2026-11-16); factory@ added the hub.json fields, the description check and the
// placeholder check (a seeded site must hold no __SITE_*__ placeholder).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const problems = [];
const fail = m => problems.push(m);
const hype = /\b(revolutionary|cutting[- ]edge|seamless(?:ly)?|world[- ]class|game[- ]changing)\b/i;
const isTemplate = existsSync('.factory-template');
if (!existsSync('_site')) { console.error('FAILED: _site/ is not built: run node scripts/build.mjs'); process.exit(1); }
const files = walk('_site');
for (const f of [...files, 'hub.json', 'README.md']) {
  if (!existsSync(f) || !/\.(html|js|css|json|md)$/.test(f)) continue;
  const s = readFileSync(f, 'utf8');
  s.split('\n').forEach((line, i) => {
    if (line.includes('—')) fail(`${f}:${i + 1}: em dash`);
    const m = line.match(hype); if (m) fail(`${f}:${i + 1}: hype word "${m[0]}"`);
    if (!isTemplate && /__SITE_[A-Z]+__/.test(line)) fail(`${f}:${i + 1}: template placeholder left in a seeded site`);
  });
  if (f.endsWith('.html')) {
    if (!/<title>[^<]+<\/title>/.test(s)) fail(`${f}: no <title>`);
    if (!/<meta name="description" content="[^"]+"/.test(s)) fail(`${f}: no description`);
    if (!/<html lang="/.test(s)) fail(`${f}: no lang on <html>`);
    for (const m of s.matchAll(/<script[^>]+src="([^"]+)"/g)) if (/^(https?:)?\/\//.test(m[1])) fail(`${f}: third-party script ${m[1]}`);
    for (const m of s.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)) if (/^(https?:)?\/\//.test(m[1])) fail(`${f}: third-party stylesheet ${m[1]}`);
    for (const m of s.matchAll(/(?:href|src)="([^"#?]+)/g)) {
      const u = m[1]; if (/^(https?:|mailto:|data:|\/\/)/.test(u)) continue;
      const target = u.startsWith('/') ? join('_site', u) : join(dirname(f), u);
      if (!existsSync(target) && !existsSync(join(target, 'index.html'))) fail(`${f}: broken link ${u}`);
    }
  }
}
// Strengthened by conductor.indi-gupte@AgentiCCells.dinis, 2026-11-18 (from the Marc Noah cell's validator, plus the
// brief's rules for this site: no email address or phone number for Indi, a link preview on every page).
// The team's own files follow the same wording rules, and every policy passes abp-check.
if (existsSync('team')) for (const f of walk('team').filter(f => f.endsWith('.md'))) {
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    if (line.includes('—')) fail(`${f}:${i + 1}: em dash`);
    const m = line.match(hype); if (m) fail(`${f}:${i + 1}: hype word "${m[0]}"`);
  });
}
{
  const { extract, check, policyFiles } = await import('./abp-check.mjs');
  for (const f of policyFiles()) {
    const md = readFileSync(f, 'utf8'); const { data, error } = extract(md);
    if (error) { fail(`${f}: ${error}`); continue; }
    for (const e of check(data, md).errs) fail(`${f}: ${e}`);
  }
}
// Contact by LinkedIn only: no mailto:, no tel:, no email address other than an agent's name
// (role@AgentiCCells.person, or role@project.indi / role@project.dinis as the team's sites write them).
const email = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g;
for (const f of files.filter(f => /\.(html|md|txt|json|xml)$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  if (/(href|content)="(mailto|tel):/i.test(s)) fail(`${f}: mailto: or tel: link (contact is by LinkedIn only)`);
  for (const m of s.matchAll(email)) if (!/@agenticcells\.|@[A-Za-z0-9-]+\.(?:indi|dinis)$/i.test(m[0])) fail(`${f}: email address ${m[0].replace(/^[^@]+/, '...')} (contact is by LinkedIn only)`);
}
// A link preview on every page: og:image and twitter:card, the image hosted here, JPEG or PNG under 300 KB.
for (const f of files.filter(f => f.endsWith('.html'))) {
  const s = readFileSync(f, 'utf8');
  if (/http-equiv="refresh"/i.test(s)) continue;
  const og = s.match(/<meta property="og:image" content="([^"]+)"/);
  if (!og) { fail(`${f}: no og:image (every page needs a link preview)`); continue; }
  if (!/<meta name="twitter:card" content="summary_large_image"/.test(s)) fail(`${f}: no twitter:card summary_large_image`);
  const m = og[1].match(/^https:\/\/indi-gupte\.agenticcells\.site(\/.+\.(?:jpg|png))$/);
  if (!m) { fail(`${f}: og:image must be an absolute .jpg or .png on https://indi-gupte.agenticcells.site`); continue; }
  const img = join('_site', m[1]);
  if (!existsSync(img)) fail(`${f}: og:image ${m[1]} is missing`);
  else if (statSync(img).size > 300 * 1024) fail(`${f}: og:image ${m[1]} is over 300 KB`);
}
// Name no person except Indi Gupte and Dinis Cruz (brief rule). The first names of the other members of the
// Web Summit team are checked by their SHA-256, so this file does not name them either. Covers the built site,
// team/, data/, README.md and REALITY.md. Add a hash (of the lower-case name) here when a source names someone new.
{
  const { createHash } = await import('node:crypto');
  const NAMES = new Set(['c9805e841751391ca18d1c3508700975438fe0e86161f2d52e5ade49cbb41776', 'e7f9a4608a5b9ab406a212a8c57a3b1af507c61b43c431eea00a72f3879e5d46', 'c5099a6000c2be06c62bd9ca2dd25526efb177e0d7193746a2a163f7f4f48947', '358ca1231c373128e8b31e69938b21e1f6226d96b740796916ed2678c1a12300', 'b6f2920002873556366ad9f9a44711e4f34b596a892bd175427071e4064a89cc', 'e4ee06d13f52021bfbfc793ebce404608a0efd7786e1accad9d113d099fbab48', '1ec4ed037766aa181d8840ad04b9fc6e195fd37dedc04c98a5767a67d3758ece', 'd233633d9524e84c71d6fe45eb3836f8919148e4a5fc2234cc9e6494ec0f11c2', '2ac81299578013795576682809a4a16d1ecca67118a797ea576c113c41786849']);
  const named = [...files, ...['team', 'data'].flatMap(d => existsSync(d) ? walk(d) : []), 'README.md', 'REALITY.md']
    .filter(f => existsSync(f) && /\.(html|md|txt|json|mjs|xml|js)$/.test(f));
  for (const f of named) {
    const seen = new Set();
    readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
      for (const w of line.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[a-z]+/g) || []) {
        if (seen.has(w + i)) continue; seen.add(w + i);
        if (NAMES.has(createHash('sha256').update(w).digest('hex'))) fail(`${f}:${i + 1}: names another member of the team (only Indi Gupte and Dinis Cruz may be named)`);
      }
    });
  }
}
if (!existsSync('_site/behind-the-scenes/index.html')) fail('no /behind-the-scenes/ (scripts/behind.mjs must run in the build)');
if (!existsSync('_site/d/index.html')) fail('no /d/ design chooser');
if (!existsSync('_site/version.json')) fail('no version.json');
if (!existsSync('_site/index.html')) fail('no index.html');
try {
  const h = JSON.parse(readFileSync('hub.json', 'utf8'));
  for (const k of ['name', 'what_it_does', 'owner', 'repository', 'live_address', 'version_from']) if (typeof h[k] !== 'string' || !h[k].trim()) fail(`hub.json: ${k} must be a non-empty string`);
  if (h.version_from !== `${h.live_address}/version.json`) fail(`hub.json: version_from must be ${h.live_address}/version.json (the hub copies it verbatim)`);
  if (h.owner !== 'AgentiCCells') fail('hub.json: owner must be AgentiCCells');
  if (!h.licence || h.licence.code !== 'Apache-2.0' || h.licence.text !== 'CC BY 4.0') fail('hub.json: licence must be code Apache-2.0, text CC BY 4.0');
} catch (e) { fail(`hub.json is missing or not JSON (${e.message})`); }
if (problems.length) { console.error(problems.join('\n')); console.error(`FAILED: ${problems.length} problem(s)`); process.exit(1); }
console.log(`OK${isTemplate ? ' (template)' : ''}`);
