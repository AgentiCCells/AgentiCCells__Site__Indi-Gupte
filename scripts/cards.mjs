// Make the site's rendered images. Needs Playwright with Chromium; --work also needs ImageMagick's convert.
// Copyright 2026 AgentiCCells. Code Apache-2.0. Adapted from the Marc Noah site's scripts/cards.mjs (Apache-2.0,
// https://github.com/AgentiCCells/AgentiCCells__Site__Marc-Noah/blob/dev/scripts/cards.mjs, read 2026-11-18).
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1. Round 3: a share card per design (S3). Round 2: the Briefing card's seal moves off the photo to
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
import { PERSON, ASK, DESIGNS, SITE, LINGUA_SHARE_CARD } from '../data/facts.mjs';
const CARD_FRONT = DESIGNS.find(d => d.slug === 'card').copy.front;
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

// Round 3 (S3, C96 to C98): a card per design, each drawn in its design's look with the page's own font stacks.
// Every card: the crop (never the whole photo, C9), the name, "Looking for work experience" and the address.
const F = {
  sans: 'system-ui,-apple-system,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,\'Noto Sans\',\'DejaVu Sans\',sans-serif',
  serif: 'Charter,\'Bitstream Charter\',\'Iowan Old Style\',\'Palatino Linotype\',Palatino,Georgia,\'DejaVu Serif\',serif',
  mono: 'ui-monospace,\'SF Mono\',\'Cascadia Mono\',\'Segoe UI Mono\',Menlo,Consolas,\'Liberation Mono\',\'DejaVu Sans Mono\',monospace',
  bodoni: '\'Bodoni 72\',Didot,\'Bodoni MT\',\'Big Caslon\',Georgia,\'DejaVu Serif\',serif',
  georgia: 'Georgia,\'Times New Roman\',\'DejaVu Serif\',serif',
  gill: '\'Gill Sans\',\'Gill Sans MT\',Seravek,\'Trebuchet MS\',system-ui,\'DejaVu Sans\',sans-serif',
};
const at = (x, y, style, html) => `<div style="position:absolute;left:${x}px;top:${y}px;${style}">${html}</div>`;
const sheet = (bg, body, font = F.sans) => `<html><body style="margin:0;width:1200px;height:630px;overflow:hidden;background:${bg};position:relative;font-family:${font}">${body}</body></html>`;
const NAME = PERSON.name, ASKS = ASK.short;
const card = (deco, ask) => sheet('#1B2333', `${deco}
${at(72, 135, 'border:4px solid #FAF7F1;border-radius:16px;overflow:hidden', crop(360))}
${at(510, 150, 'right:60px;color:#FFFFFF', `<div style="font-family:${F.serif};font-size:88px;font-weight:600;line-height:1">${NAME}</div><div style="font-size:48px;color:#F2C29A;margin-top:26px;font-weight:600">${ask}</div><div style="font-size:30px;color:#D7DCE4;margin-top:22px">${PERSON.tagline.text}</div>`)}
<div style="position:absolute;right:60px;bottom:58px;font-size:28px;color:#FFFFFF">${host}</div>`);
const SEAL_SVG = (size, ink, paper) => `<svg width="${size}" height="${size}" viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="${paper}" stroke="${ink}" stroke-width="4"/><circle cx="60" cy="60" r="46" fill="none" stroke="${ink}" stroke-width="2"/><text x="60" y="74" text-anchor="middle" font-family="${F.serif.replace(/'/g, '')}" font-size="40" fill="${ink}">IG</text></svg>`;
const [EN, IT, FR] = LINGUA_SHARE_CARD.languagesLine.text.split(' · ');
const lpanel = (x, bg, tint, code, name, ask = '') => at(x, 300, `width:400px;height:330px;box-sizing:border-box;padding:40px;background:${bg};color:#FFFFFF`,
  `<div style="font:700 18px ${F.sans};letter-spacing:.16em;color:${tint}">${code}</div><div style="font:700 48px/1 ${F.sans};margin-top:14px">${name}</div>${ask ? `<div style="font:600 30px/1.25 ${F.sans};margin-top:22px">${ask}</div>` : ''}`);
const CARDS = {
  // Inner pages: unchanged from round 2.
  'indi-gupte': card('<div style="position:absolute;left:0;top:0;bottom:0;width:12px;background:#F2C29A"></div>', ASKS),
  // The Briefing: the note on cream, an oxblood rule, the seal.
  briefing: sheet('#F7F4EC', `<div style="position:absolute;left:0;right:0;top:0;height:8px;background:#8C1D18"></div>
${at(60, 40, `font:600 20px ${F.sans};letter-spacing:.08em;color:#13233F;text-transform:uppercase`, `Briefing note · ${ASKS}`)}
${at(60, 150, 'border:3px solid #13233F;line-height:0', crop(300))}
${at(410, 170, `font:600 96px/1 ${F.serif};color:#13233F`, NAME)}
${at(410, 300, `font:600 40px/1.2 ${F.serif};color:#8C1D18`, ASKS)}
${at(410, 510, `font:26px ${F.sans};color:#4A5468`, host)}
${at(1020, 440, '', SEAL_SVG(120, '#8C1D18', '#F7F4EC'))}
<div style="position:absolute;left:60px;right:60px;top:590px;border-top:3px solid #13233F;border-bottom:1px solid #13233F;height:3px"></div>`),
  // Lingua: the triptych; the ask in English only, with the three language names (C97, LINGUA_SHARE_CARD).
  lingua: sheet('#EEF1F4', `${at(60, 30, 'line-height:0', crop(240))}
${at(340, 60, `font:700 64px/1 ${F.sans};color:#16202B`, NAME)}
${at(340, 150, `font:26px ${F.sans};color:#4A5563`, host)}
${lpanel(0, '#1E4D8C', '#DCE6F5', 'EN', EN, LINGUA_SHARE_CARD.ask.text)}
${lpanel(400, '#1F6B3A', '#D6EBDD', 'IT', IT)}
${lpanel(800, '#8C2A3B', '#F5DCE1', 'FR', FR)}`),
  // Front Page: the masthead, "Wanted", the headline, his photo in black and white.
  'front-page': sheet('#FBFAF6', `<div style="position:absolute;left:60px;right:60px;top:60px;border-top:6px solid #111111"></div><div style="position:absolute;left:60px;right:60px;top:72px;border-top:2px solid #111111"></div>
${at(60, 84, `right:60px;text-align:center;font:700 96px/106px ${F.bodoni};color:#111111`, NAME)}
<div style="position:absolute;left:60px;right:60px;top:200px;border-top:1px solid #111111"></div>
${at(60, 210, `right:60px;text-align:center;font:600 18px/20px ${F.sans};letter-spacing:.1em;text-transform:uppercase;color:#111111`, host)}
<div style="position:absolute;left:60px;right:60px;top:240px;border-top:1px solid #111111"></div>
${at(60, 280, `font:700 18px ${F.sans};letter-spacing:.1em;text-transform:uppercase;color:#B3121B`, 'Wanted')}
${at(60, 310, `width:640px;font:700 64px/1.05 ${F.georgia};color:#111111`, ASKS)}
${at(780, 266, 'border:1px solid #111111;line-height:0;filter:grayscale(1) contrast(1.1)', crop(300))}
<div style="position:absolute;left:60px;right:60px;top:590px;border-top:4px solid #111111"></div>`, F.georgia),
  // Agent Console: the status line, the operator panel, the address as a command.
  console: sheet('#0B1016', `${at(0, 0, `right:0;height:64px;background:#5BD69B;color:#0B1016;font:700 28px/64px ${F.mono};padding-left:60px`, `● status: ${ASKS.toUpperCase()}`)}
<div style="position:absolute;left:60px;top:110px;width:1080px;height:460px;box-sizing:border-box;background:#121A23;border:1px solid #1F2B38"></div>
${at(100, 150, 'border:2px solid #5BD69B;line-height:0', crop(260))}
${at(410, 160, `font:22px ${F.mono};color:#8395A3`, 'operator')}
${at(410, 195, `font:700 72px/1.1 ${F.mono};color:#D7E3EA`, NAME)}
${at(410, 330, `font:28px/30px ${F.mono};color:#5BD69B;white-space:nowrap`, `$ open ${host}<span style="display:inline-block;width:16px;height:30px;background:#5BD69B;vertical-align:-6px;margin-left:6px"></span>`)}
${at(410, 390, `font:24px ${F.mono};color:#8395A3`, TEAM_LINE.replace(/^A /, 'a '))}`, F.mono),
  // The Card: his card on the dark desk, with crop marks; the ask under the photo at 28 px (C96).
  card: sheet('radial-gradient(60% 60% at 50% 45%, #34322C 0%, #24231F 70%)', `${[[196, 45, 'right', 'bottom'], [980, 45, 'left', 'bottom'], [196, 561, 'right', 'top'], [980, 561, 'left', 'top']].map(([x, y, a, b]) => `<div style="position:absolute;left:${x}px;top:${y}px;width:24px;height:24px;border-${a}:1px solid #8A857A;border-${b}:1px solid #8A857A"></div>`).join('')}
<div style="position:absolute;left:220px;top:69px;width:760px;height:492px;background:#FFFFFF;border-radius:10px;box-shadow:0 30px 60px -20px rgba(0,0,0,.6);font-family:${F.gill};color:#1A1A1A">
${at(48, 48, 'border-radius:8px;overflow:hidden;line-height:0', crop(180))}
${at(260, 60, 'font-size:64px;font-weight:600;line-height:1.05', NAME)}
${at(260, 140, 'font-size:24px;color:#5B5B5B;width:452px;line-height:1.3', CARD_FRONT[1])}
<div style="position:absolute;left:48px;top:262px;width:300px;height:6px;background:#B4471F"></div>
${at(48, 288, 'font-size:28px;letter-spacing:.12em;text-transform:uppercase;color:#B4471F;font-weight:600;white-space:nowrap', ASKS)}
${at(48, 410, 'font-size:24px', host)}
${at(48, 414, 'width:664px;text-align:right;font-size:20px;letter-spacing:.12em;text-transform:uppercase;color:#5B5B5B', PERSON.place.text)}
</div>`, F.gill),
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
