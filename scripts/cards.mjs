// Make the site's rendered images. Needs Playwright with Chromium; --work also needs ImageMagick's convert.
// Copyright 2026 AgentiCCells. Code Apache-2.0. Adapted from the Marc Noah site's scripts/cards.mjs (Apache-2.0,
// https://github.com/AgentiCCells/AgentiCCells__Site__Marc-Noah/blob/dev/scripts/cards.mjs, read 2026-11-18).
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1. Round 2: the Briefing card's seal moves off the photo to
// x 1020 to 1140, y 60 to 180 (R6.5); previews are remade after each design restyles its header (R2.6).
//   node scripts/cards.mjs                       the 1200x630 share cards into src/assets/share/ (each under 300 KB),
//                                                from his headshot in the reviewer's crop (C9, C42) and the facts
//   node scripts/cards.mjs --designs <base-url>  the 480x300 previews for the Designs dialog into src/assets/designs/,
//                                                from the built site served at <base-url>
//   node scripts/cards.mjs --work                the chosen screenshots of his work into src/assets/work/ (800 px wide,
//                                                JPEG q75), from data/research/shots/; WORK_SHOTS lists each choice
import { mkdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { PERSON, ASK, DESIGNS, SITE } from '../data/facts.mjs';
import { TEAM_LINE } from './lib.mjs';
const { chromium } = createRequire(import.meta.url)('playwright');
const args = process.argv.slice(2);

// Shots of his work, each looked at before use. Left out: factory.jpg and factory-company.jpg (they name target
// companies; conductor's rule), newsroom-steps.jpg (names a scoring product), todo.jpg (his open task list, not work).
// education.jpg is cropped above "How it would work", which names an AI product.
export const WORK_SHOTS = {
  'cards-round4-executives.jpg': {},
  'cards-round4-security.jpg': {},
  'cards-round2-seal.jpg': {},
  'stickers-overview.jpg': {},
  'sticker-gap.jpg': {},
  'newsroom-workflow.jpg': {},
  'schedules.jpg': {},
  'education.jpg': { crop: '920x1000+0+0' },
};
if (args[0] === '--work') {
  mkdirSync('src/assets/work', { recursive: true });
  for (const [f, o] of Object.entries(WORK_SHOTS)) {
    const src = `data/research/shots/${f}`; if (!existsSync(src)) { console.log(`missing ${src}`); continue; }
    const out = `src/assets/work/${f}`;
    execFileSync('convert', [src, ...(o.crop ? ['-crop', o.crop, '+repage'] : []), '-strip', '-resize', '800x>', '-quality', '75', '-interlace', 'JPEG', out]);
    console.log(out, Math.round(statSync(out).size / 1024), 'KB');
  }
  process.exit(0);
}
if (args[0] === '--designs') {
  const base = (args[1] || '').replace(/\/$/, ''); if (!base) throw new Error('usage: node scripts/cards.mjs --designs <base-url>');
  mkdirSync('src/assets/designs', { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.375 });
  for (const d of DESIGNS) {
    await page.goto(`${base}${d.default ? '/' : `/d/${d.slug}/`}`, { waitUntil: 'networkidle' });
    const f = `src/assets/designs/${d.slug}.jpg`;
    await page.screenshot({ path: f, type: 'jpeg', quality: 78 });
    const kb = Math.round(statSync(f).size / 1024); if (kb >= 60) throw new Error(`${f} is ${kb} KB`);
    console.log(f, `${kb} KB`);
  }
  await browser.close();
  process.exit(0);
}

// Share cards (D5): the headshot crop at 360 px (1.45 times the 248 px crop), name, ask, tagline, address.
const PHOTO = `data:image/jpeg;base64,${readFileSync('src/assets/indi-gupte.jpg').toString('base64')}`;
const crop = (size, extra = '') => `<div style="width:${size}px;height:${size}px;overflow:hidden;position:relative;${extra}"><img src="${PHOTO}" style="position:absolute;width:129.032%;left:-29.032%;top:-8.065%;max-width:none"></div>`;
const host = SITE.replace(/^https:\/\//, '');
const card = ({ bg, ink, accent, sub, serif = 'Charter,\'Bitstream Charter\',\'Iowan Old Style\',Georgia,\'DejaVu Serif\',serif', frame = '#FAF7F1', deco = '', line = PERSON.tagline.text, sans = 'system-ui,\'DejaVu Sans\',sans-serif' }) => `<html><body style="margin:0;width:1200px;height:630px;overflow:hidden;background:${bg};color:${ink};position:relative;font-family:${sans}">
${deco}
<div style="position:absolute;left:72px;top:135px;border:4px solid ${frame};border-radius:16px;overflow:hidden">${crop(360)}</div>
<div style="position:absolute;left:510px;top:150px;right:60px">
<div style="font-family:${serif};font-size:88px;font-weight:600;line-height:1">${PERSON.name}</div>
<div style="font-size:48px;color:${accent};margin-top:26px;font-weight:600">${ASK.short}</div>
<div style="font-size:30px;color:${sub};margin-top:22px">${line}</div>
</div>
<div style="position:absolute;right:60px;bottom:58px;font-size:28px">${host}</div>
</body></html>`;
const CARDS = {
  'indi-gupte': card({ bg: '#1B2333', ink: '#FFFFFF', accent: '#F2C29A', sub: '#D7DCE4', deco: '<div style="position:absolute;left:0;top:0;bottom:0;width:12px;background:#F2C29A"></div>' }),
  briefing: card({ bg: '#13233F', ink: '#F7F4EC', accent: '#F09A8E', sub: '#D7DCE4', deco: '<svg width="120" height="120" style="position:absolute;left:1020px;top:60px"><circle cx="60" cy="60" r="56" fill="#13233F" stroke="#F09A8E" stroke-width="4"/><circle cx="60" cy="60" r="46" fill="none" stroke="#F09A8E" stroke-width="2"/><text x="60" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="40" fill="#F7F4EC">IG</text></svg>' }),
  lingua: card({ bg: '#F5EFE3', ink: '#1F1A14', accent: '#8C2A3B', sub: '#5A5246', frame: '#1F1A14', deco: '<div style="position:absolute;left:0;right:0;bottom:0;height:16px;display:flex"><i style="flex:1;background:#1E4D8C"></i><i style="flex:1;background:#1F6B3A"></i><i style="flex:1;background:#8C2A3B"></i><i style="flex:1;background:#9A4A00"></i><i style="flex:1;background:#4B3F8C"></i></div>', line: 'English · italiano · français' }),
  'front-page': card({ bg: '#FBFAF6', ink: '#111111', accent: '#B3121B', sub: '#555049', frame: '#111111', serif: '\'Bodoni 72\',Didot,Georgia,\'DejaVu Serif\',serif', deco: '<div style="position:absolute;left:60px;right:60px;top:70px;border-top:6px solid #111;border-bottom:2px solid #111;height:8px"></div>' }),
  console: card({ bg: '#0B1016', ink: '#D7E3EA', accent: '#F2C14E', sub: '#5BD69B', frame: '#5BD69B', sans: 'ui-monospace,\'DejaVu Sans Mono\',monospace', serif: 'ui-monospace,\'DejaVu Sans Mono\',monospace', line: TEAM_LINE }),
  card: card({ bg: '#EDEAE3', ink: '#1A1A1A', accent: '#B4471F', sub: '#5B5B5B', frame: '#FFFFFF', sans: '\'Gill Sans\',\'Gill Sans MT\',Seravek,\'Trebuchet MS\',\'DejaVu Sans\',sans-serif', serif: '\'Gill Sans\',\'Gill Sans MT\',Seravek,\'Trebuchet MS\',\'DejaVu Sans\',sans-serif' }),
};
mkdirSync('src/assets/share', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const [id, html] of Object.entries(CARDS)) {
  await page.setContent(html, { waitUntil: 'load' });
  const f = `src/assets/share/${id}.jpg`;
  await page.screenshot({ path: f, type: 'jpeg', quality: 82 });
  const kb = Math.round(statSync(f).size / 1024); if (kb >= 300) throw new Error(`${f} is ${kb} KB`);
  console.log(f, `${kb} KB`);
}
await browser.close();
