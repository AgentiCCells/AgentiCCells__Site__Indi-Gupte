// data/facts.mjs: the master copy of every fact and every piece of copy on https://indi-gupte.agenticcells.site
//
// Written by writer.indi-gupte@AgentiCCells.dinis, round 1, 18 November 2026; round 2 copy the same day (see
// team/rounds/2/copy/NOTES.md).
// The developer generates every page, /index.md, /llms.txt and /designs.json from this file. A fact that is not
// here, with a source id, does not go on the site.
//
// Conventions
// - Every fact carries `sources: [ids]`; each id is a key of SOURCES below and is described in data/sources.md.
// - `quote` fields are exact words from the source, character for character (straight apostrophes as sent). Never
//   join, trim inside or reword a quote. Indi's WhatsApp post is in QUOTES.whatsapp; the extracts in QUOTES.extracts
//   are exact substrings of it (checked at the bottom of this file).
// - `derived: true` marks a value worked out from a source rather than printed in it; show it as such.
// - `awaitingIndi: true` marks words the site puts forward that Indi has not yet approved (through Dinis Cruz).
// - `proposal: true` marks an idea or a suggestion, not a fact.
// - Names: only Indi Gupte and Dinis Cruz are named. Anyone else is "another team member".
// - Body copy speaks about Indi in the third person ("he"); navigation and buttons keep the first person the
//   design uses ("What I built", "Message me on LinkedIn"). See team/rounds/1/copy/NOTES.md.
// - Dates are ISO (YYYY-MM-DD) in data fields and written out ("18 November 2026") in copy.
// - Agent addresses such as accountant@web-summit.indi look like email addresses to scripts/validate.mjs; render
//   AGENTS.list[].role on pages, not .address (see AGENTS.namingNote).
// - Round 2 wording rules (reviewer C5, C25, C26, C31, C34, C39; checked at the bottom of this file):
//   the 27 agents always as "a team of 27 AI agents, 23 running" (or his words, "working every day with a team of
//   AI agents"), never in the same claim as Web Summit or the three projects; 277 commits always with its window,
//   3 to 13 November 2026; the Oxford entry always with "as his profile lists it".
//
// Licence: text CC BY 4.0.

export const READ_DATE = '2026-11-18';
export const READ_DATE_TEXT = '18 November 2026';

// ---------------------------------------------------------------------------------------------------------------
// SOURCES: every source the site uses. `namesIndi`: does the page itself name him. `group` orders /sources/.
// ---------------------------------------------------------------------------------------------------------------
export const SOURCE_GROUPS = [
  { id: 'own-words', title: 'His own words' },
  { id: 'profile', title: 'His LinkedIn profile' },
  { id: 'team-record', title: "The team's public record" },
  { id: 'project-sites', title: 'Project sites' },
  { id: 'this-site', title: 'This site' },
];

export const SOURCES = {
  whatsapp: {
    title: "Indi Gupte's post to a UK Web Summit WhatsApp group",
    url: null,
    read: '2026-11-18',
    publisher: 'Indi Gupte',
    namesIndi: true,
    group: 'own-words',
    note: 'As sent by Dinis Cruz, 2026-11-18 (a screenshot). No public URL. The post was cut off after "If you have an opening, or know someone who might..."; only that part is used.',
  },
  linkedin: {
    title: "Indi Gupte's LinkedIn profile",
    url: 'https://www.linkedin.com/in/indi-gupte-26960b318',
    read: '2026-11-18',
    publisher: 'Indi Gupte, on LinkedIn',
    namesIndi: true,
    group: 'profile',
    note: 'Facts read from the profile PDF as sent by Dinis Cruz, 2026-11-18. The link is to the profile itself; LinkedIn was not scraped.',
  },
  'factory-brief': {
    title: 'Factory brief: Indi Gupte',
    url: 'https://github.com/AgentiCCells/AgentiCCells__Site__Factory/blob/dev/requests/2026-11-18__indi-gupte/brief.md',
    read: '2026-11-18',
    publisher: 'AgentiCCells',
    namesIndi: true,
    group: 'this-site',
    note: "Records Dinis Cruz's words of 2026-11-18, Indi's agreement to the site, and what the site may use. Copied in team/BRIEF.md.",
  },
  workflow: {
    title: 'Workflow of the Indi Gupte cell',
    url: 'https://github.com/AgentiCCells/AgentiCCells__Site__Indi-Gupte/blob/dev/team/WORKFLOW.md',
    read: '2026-11-18',
    publisher: 'AgentiCCells',
    namesIndi: true,
    group: 'this-site',
    note: "Records Dinis Cruz's words of about 09:51 UTC, 2026-11-18, and how the team works.",
  },
  'ws-team-indi': {
    title: "Indi Gupte's role card, Web Summit team site",
    url: 'https://web-summit.sgit.ai/team/indi/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'His role, what it means, and the rules he works by.',
  },
  'ws-people-indi': {
    title: "Indi Gupte's dashboard, Web Summit team site",
    url: 'https://web-summit.sgit.ai/people/indi/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: '"27 agents (23 running)", the list of his agents with commit counts, and the mentor handover of 6 November.',
  },
  'ws-brief-indi': {
    title: "Indi Gupte's brief, Web Summit team site",
    url: 'https://web-summit.sgit.ai/brief-indi/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'His focus (the message, outreach, the factory), joining in person on 5 November, the factory of company pages (3 November). One line uses "her"; the site follows the factory brief and uses "he".',
  },
  'ws-everything': {
    title: 'The team register, Web Summit team site',
    url: 'https://web-summit.sgit.ai/team/everything/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'Agent status and commit counts (site version v0.2.2313); 27 agents, 23 active; his conductor\'s schedule.',
  },
  'ws-home': {
    title: 'Web Summit team site, home page',
    url: 'https://web-summit.sgit.ai/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'Web Summit Lisbon dates (9 to 12 November 2026), the stand on Thursday 12 November, "23 agents running", and RiskMandate described as making Agent Behaviour Policies.',
  },
  'ws-meet': {
    title: 'Meet the team, Web Summit team site',
    url: 'https://web-summit.sgit.ai/meet/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'His line: "Your agents. Your rules."',
  },
  'ws-design': {
    title: 'Design page, Web Summit team site',
    url: 'https://web-summit.sgit.ai/design/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'The business card rounds made by his designer agent, and his vote of 4 November.',
  },
  'ws-cards': {
    title: 'Business cards, Web Summit team site',
    url: 'https://web-summit.sgit.ai/cards/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'The card he chose on 4 November; the printed Design A, chosen on 5 November; three audience cards, 85 x 55 mm, about 200 of each.',
  },
  'ws-education': {
    title: 'RiskMandate for education and children, Web Summit team site',
    url: 'https://web-summit.sgit.ai/people/indi/education/index.md',
    read: '2026-11-18',
    publisher: 'The Web Summit team (web-summit.sgit.ai)',
    namesIndi: true,
    group: 'team-record',
    note: 'His idea, written on 4 November 2026, published 10 November 2026. "An idea, not yet built".',
  },
  'news-ten-days': {
    title: 'Ten days at Web Summit (newsroom.sgit.ai, by Dinis Cruz, 14 November 2026)',
    url: 'https://newsroom.sgit.ai/articles/ten-days-at-web-summit.md',
    read: '2026-11-18',
    publisher: 'newsroom.sgit.ai',
    namesIndi: true,
    group: 'team-record',
    note: '277 commits by his agents on the team\'s site (3 to 13 November); his lane, "communities and organisers"; Lisbon Tech Fringe live at 12:57 on 11 November.',
  },
  'news-every-hour': {
    title: 'Every hour is twenty years (newsroom.sgit.ai, by Dinis Cruz, 15 November 2026)',
    url: 'https://newsroom.sgit.ai/articles/every-hour-is-twenty-years.md',
    read: '2026-11-18',
    publisher: 'newsroom.sgit.ai',
    namesIndi: true,
    group: 'team-record',
    note: 'Strangers in the Loop, "produced by Indi Gupte", released the day after the first song (13 November).',
  },
  'promptugal-home': {
    title: 'PrompTugal.news, front page',
    url: 'https://promptugal.news/index.md',
    read: '2026-11-18',
    publisher: 'PrompTugal.news',
    namesIndi: true,
    group: 'project-sites',
    note: '"edited by Dinis Cruz, Indi Gupte and" another team member.',
  },
  'promptugal-about': {
    title: 'PrompTugal.news, about',
    url: 'https://promptugal.news/about/index.md',
    read: '2026-11-18',
    publisher: 'PrompTugal.news',
    namesIndi: true,
    group: 'project-sites',
    note: 'Its mandate, and his line as editor: "What we publish and how it reads."',
  },
  'promptugal-board': {
    title: 'PrompTugal.news, the board',
    url: 'https://promptugal.news/about/board/index.md',
    read: '2026-11-18',
    publisher: 'PrompTugal.news',
    namesIndi: true,
    group: 'project-sites',
    note: 'Lists him as editor.',
  },
  riskmandate: {
    title: 'RiskMandate',
    url: 'https://riskmandate.ai/index.md',
    read: '2026-11-18',
    publisher: 'RiskMandate',
    namesIndi: false,
    group: 'project-sites',
    note: 'What RiskMandate does, in its own words. Does not name Indi.',
  },
  'ltf-home': {
    title: 'Lisbon Tech Fringe',
    url: 'https://lisbontechfringe.com/',
    read: '2026-11-18',
    publisher: 'Lisbon Tech Fringe (a PrompTugal.news site)',
    namesIndi: false,
    group: 'project-sites',
    note: '"An independent guide to the side events around Web Summit Lisbon." Does not name Indi.',
  },
  'ltf-storm': {
    title: 'Lisbon Tech Fringe, the storm',
    url: 'https://lisbontechfringe.com/storm/',
    read: '2026-11-18',
    publisher: 'Lisbon Tech Fringe',
    namesIndi: false,
    group: 'project-sites',
    note: '"The storm · Wednesday 11 November". Does not name Indi.',
  },
  'ltf-how': {
    title: 'Lisbon Tech Fringe, how it is made',
    url: 'https://lisbontechfringe.com/how/',
    read: '2026-11-18',
    publisher: 'Lisbon Tech Fringe',
    namesIndi: false,
    group: 'project-sites',
    note: 'Built by a swarm of conductors, one per person on the team. Does not name Indi.',
  },
  'ltf-join': {
    title: 'Lisbon Tech Fringe, join',
    url: 'https://lisbontechfringe.com/join/',
    read: '2026-11-18',
    publisher: 'Lisbon Tech Fringe',
    namesIndi: true,
    group: 'project-sites',
    note: '"lane: communities (Indi)": the communities page, marked done, owned by his conductor.',
  },
  kneelens: {
    title: 'OmKneeHealth (kneelens.com)',
    url: 'https://kneelens.com/',
    read: '2026-11-18',
    publisher: 'OmKneeHealth',
    namesIndi: false,
    group: 'project-sites',
    note: 'kneelens.com serves the OmKneeHealth site. Does not name Indi.',
  },
  spotify: {
    title: 'Strangers in the Loop, on Spotify',
    url: 'https://open.spotify.com/track/5j5q25JQi47br4fPTo7wd1',
    read: null,
    publisher: 'Spotify',
    namesIndi: null,
    group: 'project-sites',
    note: 'Link only, as given in the newsroom article. Not read (streaming platforms are out of scope for the research).',
  },
  'dinis-video': {
    title: "Dinis Cruz's LinkedIn post with a video about Indi's Lisbon Tech Fringe app",
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7528764173284077568/',
    read: '2026-11-18',
    publisher: 'Dinis Cruz, on LinkedIn, 18 November 2026',
    namesIndi: true,
    group: 'team-record',
    note: 'Post text and transcript as sent by Dinis Cruz; LinkedIn linked, not read by this site.',
  },
  repo: {
    title: 'This site\'s repository',
    url: 'https://github.com/AgentiCCells/AgentiCCells__Site__Indi-Gupte',
    read: '2026-11-18',
    publisher: 'AgentiCCells',
    namesIndi: true,
    group: 'this-site',
    note: 'Every page is generated from data/facts.mjs; the history is in git.',
  },
};

// ---------------------------------------------------------------------------------------------------------------
// PERSON
// ---------------------------------------------------------------------------------------------------------------
export const LINKEDIN = 'https://www.linkedin.com/in/indi-gupte-26960b318';
export const LINKEDIN_TEXT = 'linkedin.com/in/indi-gupte-26960b318';
export const REPO = 'https://github.com/AgentiCCells/AgentiCCells__Site__Indi-Gupte';
export const SITE = 'https://indi-gupte.agenticcells.site';

export const PERSON = {
  name: 'Indi Gupte',
  pronoun: 'he',
  place: { text: 'West London', sources: ['whatsapp'] },
  // The site's tagline, from the factory brief's first version (Dinis Cruz's brief, not Indi's words).
  tagline: { text: 'Brand, partnerships and research', sources: ['factory-brief'] },
  // His LinkedIn headline, as lines.
  headline: {
    lines: [
      'Brand and Partnerships Lead at RiskMandate.ai',
      'Operations Manager at SportsHealing Ltd',
      'London',
    ],
    sources: ['linkedin'],
  },
  // One line about him, for the home page, meta and llms.txt.
  summary: {
    text: 'A student from West London who, before starting university, is working with Dinis Cruz at RiskMandate. He works with a team of 27 AI agents, 23 running, and he is looking for work experience.',
    sources: ['whatsapp', 'ws-people-indi', 'ws-everything'],
  },
  // His LinkedIn summary, retold (not quoted, except the one phrase in quotation marks).
  profileSummary: {
    paragraphs: [
      'He describes himself as a student passionate about languages, who will read Modern Languages and International Relations at university from next autumn.',
      'He speaks English, Italian and French, has an interest in Sanskrit, and the same interest in programming languages. He builds software as a junior developer for three health technology startups, and is working through Harvard\'s CS50x.',
      'He recently joined RiskMandate, which lets companies set a clear, auditable mandate for what their AI can access, decide and act on.',
      'Volunteering in hospitals in London and rural Italy left him with a lasting interest in medicine, and drew him towards diplomacy, "where languages, judgement and tact meet".',
      'He is glad to talk to people working in languages, AI, medicine or diplomacy.',
    ],
    sources: ['linkedin'],
  },
  topSkills: { items: ['Web design', 'Web development', 'Debating'], sources: ['linkedin'] },
  linkedin: { url: LINKEDIN, text: LINKEDIN_TEXT, sources: ['linkedin'] },
  contactNote: { text: 'No email or phone: please use LinkedIn.', sources: ['factory-brief'] },
  repo: { url: REPO, text: 'AgentiCCells/AgentiCCells__Site__Indi-Gupte', sources: ['repo'] },
  site: SITE,
  photo: {
    src: '/assets/indi-gupte.jpg',
    width: 320,
    height: 292,
    alt: 'Indi Gupte',
    altBesideName: '', // decorative where his name is next to it (header)
    credit: 'Photo used with his agreement.',
    note: 'The only image of him on the site. A second person is partly in shot at the bottom left: always show the CSS crop (PROPOSAL D2.7), never the whole file.',
    sources: ['factory-brief'],
  },
  agreed: { text: 'Indi agreed to this site, and to the use of his photo, his WhatsApp post and his LinkedIn profile facts.', sources: ['factory-brief'] },
};

// ---------------------------------------------------------------------------------------------------------------
// QUOTES: exact words. Never join, trim inside or reword.
// ---------------------------------------------------------------------------------------------------------------
export const QUOTES = {
  whatsapp: {
    // One string per line of the post, as sent. The post ends where the screenshot was cut off.
    lines: [
      "Hi all, I'm Indi Gupte from West London. Before starting university, I'm working with Dinis Cruz at RiskMandate, and it was a real privilege to be at Web Summit this year. What we built this week:",
      "- RiskMandate: Agent Behaviour Policies, a record of what each AI agent can reach, what it's allowed to do, and the gap between the two. riskmandate.ai",
      '- PrompTugal.news: a newsroom mapping AI in Portugal, run by people and AI agents together. promptugal.news',
      '- Lisbon Tech Fringe: when Storm Charles cancelled Wednesday, we built a guide to the side events, and an app, the same day. lisbontechfringe.com',
      "I'm also working with OmKneeHealth, a London health startup making knee treatment simpler. kneelens.com",
      'What I bring: company research, design (I designed our business cards), and working every day with a team of AI agents.',
      "I'm looking for work experience. If you have an opening, or know someone who might...",
    ],
    attribution: 'Indi Gupte, in a post to a UK Web Summit WhatsApp group, November 2026',
    cutNote: 'The post continues beyond this point; the rest was cut off in the screenshot.',
    sources: ['whatsapp'],
  },
  // Exact extracts of the post (each is a substring of one line above). Use these for pull quotes.
  extracts: {
    intro: "Hi all, I'm Indi Gupte from West London. Before starting university, I'm working with Dinis Cruz at RiskMandate, and it was a real privilege to be at Web Summit this year.",
    riskmandate: "a record of what each AI agent can reach, what it's allowed to do, and the gap between the two.",
    promptugal: 'a newsroom mapping AI in Portugal, run by people and AI agents together.',
    fringe: 'when Storm Charles cancelled Wednesday, we built a guide to the side events, and an app, the same day.',
    omknee: "I'm also working with OmKneeHealth, a London health startup making knee treatment simpler.",
    bring: 'What I bring: company research, design (I designed our business cards), and working every day with a team of AI agents.',
    cards: 'I designed our business cards',
    looking: "I'm looking for work experience.",
    ask: "I'm looking for work experience. If you have an opening, or know someone who might...",
  },
  diplomacy: {
    quote: 'where languages, judgement and tact meet',
    context: 'His LinkedIn summary, on diplomacy.',
    sources: ['linkedin'],
  },
  // Lines by others about his work (Dinis Cruz may be named).
  aboutHim: [
    { quote: 'The message, outreach, and the factory of examples', by: "The Web Summit team's site, his role card", sources: ['ws-team-indi'] },
    { quote: 'Make sure the message makes sense everywhere, and build the examples we send to every company we go for.', by: "The Web Summit team's site, his role card", sources: ['ws-team-indi'] },
    { quote: 'Strangers in the Loop, produced by Indi Gupte.', by: 'Dinis Cruz, newsroom.sgit.ai', sources: ['news-every-hour'] },
    { quote: 'Thank you, Indi, for building all of this with your agents.', by: "His mentor agent's handover, 6 November", sources: ['ws-people-indi'] },
    { quote: 'Your agents. Your rules.', by: "His line on the team's meet page", sources: ['ws-meet'] },
  ],
};

// ---------------------------------------------------------------------------------------------------------------
// ASK: the call to action. Buttons keep the design's first person.
// ---------------------------------------------------------------------------------------------------------------
export const ASK = {
  short: 'Looking for work experience',
  band: {
    lead: 'Looking for work experience',
    rest: 'A team of 27 AI agents, 23 running',
    sources: ['whatsapp', 'ws-people-indi', 'ws-everything'],
  },
  button: { text: 'Message me on LinkedIn', href: LINKEDIN },
  buttonThirdPerson: { text: 'Message Indi on LinkedIn', href: LINKEDIN },
  secondary: { text: 'What I am looking for', href: '/looking-for/' },
  // The ask panel at the end of every page (PROPOSAL D1.4).
  panel: {
    heading: 'Looking for work experience',
    paragraphs: [
      'In his words, what the team built that week: RiskMandate, PrompTugal.news and Lisbon Tech Fringe.',
      'He brings company research, design and daily work with a team of AI agents, and is glad to talk to people working in languages, AI, medicine or diplomacy.',
    ],
    sources: ['whatsapp', 'linkedin'],
  },
  long: {
    text: 'Indi Gupte is looking for work experience. He brings company research, design and daily work with a team of AI agents. If you have an opening, or know someone who might, please message him on LinkedIn.',
    sources: ['whatsapp'],
  },
  contactLine: { text: 'Have an opening, or know someone who might? Please contact Indi on LinkedIn. He does not publish an email address or phone number.', sources: ['whatsapp', 'factory-brief'] },
  // The fields he names (LinkedIn summary), each tied to his own facts.
  fields: [
    { id: 'languages', name: 'Languages', line: 'He speaks English, Italian and French, and will read Modern Languages and International Relations from next autumn.', link: '/languages/', sources: ['linkedin'] },
    { id: 'ai', name: 'AI', line: 'Brand and Partnerships Lead at RiskMandate. He works with a team of 27 AI agents, 23 running.', link: '/how-i-work/', sources: ['linkedin', 'whatsapp', 'ws-people-indi'] },
    { id: 'medicine', name: 'Medicine', line: 'Volunteering in hospitals in London and rural Italy, and junior developer for three health technology startups.', link: '/background/', sources: ['linkedin'] },
    { id: 'diplomacy', name: 'Diplomacy', line: 'Drawn to it as the place "where languages, judgement and tact meet".', link: '/background/', sources: ['linkedin'] },
  ],
  fieldsIntro: { text: 'His profile says he is glad to talk to people working in languages, AI, medicine or diplomacy.', sources: ['linkedin'] },
  // What he brings: his three phrases, each with the work that shows it.
  brings: {
    quote: 'What I bring: company research, design (I designed our business cards), and working every day with a team of AI agents.',
    items: [
      { phrase: 'company research', shownBy: 'The factory of company pages: one page per company the team planned to meet, with what it does, the risks from AI agents and how RiskMandate helps.', link: '/built/#factory', sources: ['whatsapp', 'ws-brief-indi'] },
      { phrase: 'design (I designed our business cards)', shownBy: 'The RiskMandate business cards for Web Summit, from his designer agent\'s rounds to the card he chose.', link: '/built/#cards', sources: ['whatsapp', 'ws-cards', 'ws-design'] },
      { phrase: 'working every day with a team of AI agents', shownBy: 'A team of 27 AI agents, 23 running, and 277 commits by his agents on the team\'s site from 3 to 13 November 2026.', link: '/how-i-work/', sources: ['whatsapp', 'ws-people-indi', 'news-ten-days'] },
    ],
    sources: ['whatsapp'],
  },
  // Not given by any source: leave out of the pages until Indi supplies them.
  notGiven: ['dates he is available', 'the kind or length of placement he prefers', 'where he would like to work'],
};

// ---------------------------------------------------------------------------------------------------------------
// WEB_SUMMIT
// ---------------------------------------------------------------------------------------------------------------
export const WEB_SUMMIT = {
  event: { text: 'Web Summit Lisbon', dates: { from: '2026-11-09', to: '2026-11-12', text: '9 to 12 November 2026' }, place: 'Lisbon', sources: ['ws-home'] },
  tenDays: { text: 'The team\'s ten days ran from 3 to 13 November 2026.', sources: ['news-ten-days'] },
  joined: { text: 'He worked remotely at first and joined the team in person on Thursday 5 November.', date: '2026-11-05', sources: ['ws-brief-indi'] },
  stand: { text: 'The team\'s stand: Thursday 12 November, booth A1-30.', sources: ['ws-home'] },
  role: {
    quote: 'The message, outreach, and the factory of examples',
    meaning: 'Make sure the message makes sense everywhere, and build the examples we send to every company we go for.',
    sources: ['ws-team-indi'],
  },
  focus: {
    items: [
      // Exact words from his brief on the team's site.
      { name: 'The message', quote: 'That what we say about RiskMandate makes sense, and is the same on every page and in every draft.' },
      { name: 'Outreach', quote: 'Indi can do a lot of it.' },
      { name: 'The factory', quote: 'The vaults and examples for every company we reach out to' },
    ],
    sources: ['ws-brief-indi'],
  },
  // His lane, per the newsroom and Lisbon Tech Fringe. Different parts of the work, not a contradiction.
  lane: {
    text: 'In the newsroom\'s account of the ten days, his lane was communities and organisers; on Lisbon Tech Fringe his lane was communities.',
    quote: 'communities and organisers',
    sources: ['news-ten-days', 'ltf-join'],
  },
  editor: { text: 'One of the three editors of PrompTugal.news.', sources: ['promptugal-home', 'promptugal-about'] },
  rules: {
    quote: 'Their agents draft; they send every message.',
    text: 'His agents draft; he sends every message.',
    sources: ['ws-team-indi'],
  },
  shirtLine: { quote: 'Your agents. Your rules.', sources: ['ws-meet'] },
};

// ---------------------------------------------------------------------------------------------------------------
// BUILT: what he built, in the order of /built/. `kind`: 'work' | 'also' | 'idea'.
// ---------------------------------------------------------------------------------------------------------------
export const BUILT = [
  {
    id: 'riskmandate',
    kind: 'work',
    title: 'RiskMandate: Agent Behaviour Policies',
    oneLine: 'A record of what each AI agent can reach, what it is allowed to do, and the gap between the two.',
    quote: "a record of what each AI agent can reach, what it's allowed to do, and the gap between the two.",
    paragraph: 'RiskMandate writes an Agent Behaviour Policy for every AI agent a company runs: what the agent can reach, what the company authorised it to do, the gap between the two, and what stands in the way. Indi joined RiskMandate in November 2026 as Brand and Partnerships Lead, and at Web Summit Lisbon his part of the team\'s work was the message, outreach and the factory of examples.',
    role: 'Brand and Partnerships Lead, from November 2026',
    link: { url: 'https://riskmandate.ai', text: 'riskmandate.ai' },
    sources: ['whatsapp', 'riskmandate', 'linkedin', 'ws-team-indi'],
  },
  {
    id: 'promptugal',
    kind: 'work',
    title: 'PrompTugal.news',
    oneLine: 'A newsroom mapping AI in Portugal, run by people and AI agents together.',
    quote: 'a newsroom mapping AI in Portugal, run by people and AI agents together.',
    paragraph: 'PrompTugal.news sets out to map the universe of AI in Portugal: the companies, the people, the events and how they connect, every fact with its source and the date it was read. Its articles are written by AI agents and edited by people. Indi is one of its three editors, with Dinis Cruz and another team member.',
    role: 'Editor',
    editorLine: { quote: 'What we publish and how it reads.', sources: ['promptugal-about', 'promptugal-board'] },
    mandate: { quote: 'Our mandate: to map the universe of AI in Portugal.', sources: ['promptugal-about'] },
    link: { url: 'https://promptugal.news', text: 'promptugal.news' },
    sources: ['whatsapp', 'promptugal-home', 'promptugal-about', 'promptugal-board'],
  },
  {
    id: 'fringe',
    kind: 'work',
    title: 'Lisbon Tech Fringe',
    oneLine: 'When Storm Charles cancelled Wednesday, the team built a guide to the side events, and an app, the same day.',
    quote: 'when Storm Charles cancelled Wednesday, we built a guide to the side events, and an app, the same day.',
    paragraph: 'On 10 November at 19:09, as Storm Charles reached Lisbon, Web Summit called off its second day. On Wednesday 11 November the team built Lisbon Tech Fringe, an independent guide to the side events around Web Summit Lisbon: it went live at 12:57, and the Fringe app was out for testing at 21:11. Each person on the team ran one conductor agent; Indi\'s lane was communities, and his conductor made the communities page: who runs the week\'s events, and how to join.',
    role: 'The communities lane and the communities page',
    timeline: [
      { when: '2026-11-10 19:09', text: 'Web Summit calls off its second day as Storm Charles reaches Lisbon', sources: ['news-ten-days'] },
      { when: '2026-11-11', text: 'The storm · Wednesday 11 November', sources: ['ltf-storm'] },
      { when: '2026-11-11 12:57', text: 'Lisbon Tech Fringe live', sources: ['news-ten-days'] },
      { when: '2026-11-11 21:11', text: 'The Fringe app out for testing', sources: ['news-ten-days'] },
    ],
    timelineNote: 'Times as the newsroom gives them; the newsroom does not say which time zone.',
    link: { url: 'https://lisbontechfringe.com', text: 'lisbontechfringe.com' },
    related: [
      { text: 'Video: how Indi built the Lisbon Tech Fringe app (Dinis Cruz, on LinkedIn)', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7528764173284077568/', see: 'VIDEO', sources: ['dinis-video'] },
    ],
    sources: ['whatsapp', 'ltf-home', 'ltf-storm', 'ltf-how', 'ltf-join', 'news-ten-days', 'dinis-video'],
  },
  {
    id: 'song',
    kind: 'work',
    title: 'Strangers in the Loop',
    oneLine: 'RiskMandate\'s second song, produced by Indi Gupte.',
    paragraph: 'Strangers in the Loop is RiskMandate\'s second song, produced by Indi. Dinis Cruz writes: "I helped a little with the lyrics, but it is mainly his." It was released the day after the first song, which came out on 13 November.',
    dinisQuote: { quote: 'I helped a little with the lyrics, but it is mainly his.', sources: ['news-every-hour'] },
    role: 'Producer',
    released: { value: '2026-11-14', text: '14 November 2026', derived: true, how: 'The article says it was "released the next day" after the first song, "released on 13 November".', sources: ['news-every-hour'] },
    link: { url: 'https://open.spotify.com/track/5j5q25JQi47br4fPTo7wd1', text: 'Listen on Spotify' },
    sources: ['news-every-hour', 'spotify'],
  },
  {
    id: 'cards',
    kind: 'work',
    title: 'The business cards',
    oneLine: 'RiskMandate\'s business cards for Web Summit Lisbon.',
    quote: 'I designed our business cards',
    paragraph: 'Indi\'s designer agent drew the RiskMandate business cards for Web Summit in two rounds, and his synthetic-users agent tested them on invented personas. On 4 November he chose his card: the real seal, the brand\'s accent strip, no event lines. On 5 November Dinis Cruz chose Design A for printing: three audience cards (Executives, GRC and Security), 85 x 55 mm, about 200 of each.',
    role: 'Designer, working with his designer agent',
    record: [
      { when: '2026-11-04', text: 'His vote on the round 2 designs: "love R2-1 Seal, like R2-4 Boardroom".', sources: ['ws-design'] },
      { when: '2026-11-04', text: 'The card he chose: the real seal, the brand\'s accent strip, no event lines.', sources: ['ws-cards'] },
      { when: '2026-11-05', text: 'Design A chosen for printing: three audience cards, 85 x 55 mm, about 200 of each.', sources: ['ws-cards'] },
    ],
    imageNote: 'No picture of the cards is in the repository; draw nothing that imitates them.',
    link: { url: 'https://web-summit.sgit.ai/cards/index.md', text: 'The cards on the team\'s site' },
    sources: ['whatsapp', 'ws-cards', 'ws-design', 'ws-people-indi'],
  },
  {
    id: 'factory',
    kind: 'work',
    title: 'The factory of company pages',
    oneLine: 'One page per company the team planned to meet: what it does, the risks from AI agents, and how RiskMandate helps.',
    paragraph: 'On 3 November, at Indi\'s go, his developer agent opened the factory: one infographic page for each company marked "meet" on the team\'s company map. Each page shows what the company does as a flow, the risks it faces from AI agents as a mind map, and how RiskMandate helps. It is the "factory of examples" in his team role, and the company research he names in what he brings.',
    role: 'Set it going and steered it; his developer and factory agents built the pages',
    date: { value: '2026-11-03', text: '3 November 2026', sources: ['ws-brief-indi'] },
    link: { url: 'https://web-summit.sgit.ai/brief-indi/index.md', text: 'His brief on the team\'s site' },
    sources: ['ws-brief-indi', 'ws-people-indi'],
  },
  {
    id: 'omknee',
    kind: 'also',
    title: 'Also: OmKneeHealth',
    oneLine: 'A London health startup making knee treatment simpler.',
    quote: "I'm also working with OmKneeHealth, a London health startup making knee treatment simpler.",
    paragraph: 'Alongside the Web Summit work, Indi is working with OmKneeHealth, a London health startup. Its site offers UK knee-health guidance, a Knee Score and curated support.',
    role: 'Working with them (his post gives no title)',
    link: { url: 'https://kneelens.com', text: 'kneelens.com' },
    sources: ['whatsapp', 'kneelens'],
  },
  {
    id: 'education',
    kind: 'idea',
    title: 'RiskMandate for education and children',
    label: 'An idea, not yet built',
    oneLine: 'AI helpers for schools that help students learn and keep children safe online, held to plain-language rules that schools and governments set.',
    paragraph: 'On 4 November Indi wrote a two-page brief for Dinis Cruz: AI helpers for schools that help students learn and keep children safe online, held to plain-language rules (Agent Behaviour Policies) that schools and governments set. Dinis read it and said "we should definitely do it". It was published on the team\'s site on 10 November. Nothing here is built or sold yet.',
    role: 'His idea and his brief',
    dates: { written: '2026-11-04', published: '2026-11-10', sources: ['ws-education'] },
    dinisQuote: { quote: 'we should definitely do it', sources: ['ws-education'] },
    link: { url: 'https://web-summit.sgit.ai/people/indi/education/index.md', text: 'The idea on the team\'s site' },
    sources: ['ws-education', 'ws-brief-indi'],
  },
];

// ---------------------------------------------------------------------------------------------------------------
// VIDEO: Dinis Cruz's video about the Lisbon Tech Fringe app. Attributed to Dinis; no words of Indi's are quoted
// from it (we have none exactly). Set `youtube` when Dinis posts it there; until then link the LinkedIn post.
// ---------------------------------------------------------------------------------------------------------------
export const VIDEO = {
  id: 'ltf-app-video',
  title: 'How Indi built the Lisbon Tech Fringe app with a team of AI agents',
  summary: 'At the end of Web Summit, Indi built an iOS app for Lisbon Tech Fringe in two to three hours with a team of AI agents: design agents, coding agents, and synthetic users playing attendee personas. He had no earlier iOS experience. The app gathers the side events around Web Summit, so attendees can find them, see their details, open their websites and add them to their calendars.',
  attribution: 'Dinis Cruz, in his post with the video',
  date: '2026-11-18',
  linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7528764173284077568/',
  youtube: null,
  sources: ['dinis-video'],
};

// ---------------------------------------------------------------------------------------------------------------
// AGENTS: his team of AI agents at Web Summit.
// ---------------------------------------------------------------------------------------------------------------
export const AGENTS = {
  total: { value: 27, text: '27 agents', sources: ['ws-people-indi', 'ws-everything'] },
  running: { value: 23, text: '23 running', sources: ['ws-people-indi', 'ws-everything', 'ws-home'] },
  notRunning: { value: 4, text: '4 proposed, not yet running', sources: ['ws-everything'] },
  publishedLine: { quote: '27 agents (23 running)', sources: ['ws-people-indi'] },
  commits: {
    value: 277,
    text: '277 commits by his agents on the team\'s site, 3 to 13 November 2026',
    window: 'Counted for the ten days, 3 to 13 November 2026.',
    sources: ['news-ten-days'],
    note: 'His dashboard lists a commit count for each agent; those counts add up to 309. That sum was worked out by the researcher, is not a published figure, and covers a longer window (his conductor\'s last listed commit is on 16 November). The site uses 277 (3 to 13 November 2026), the published figure.',
    dashboardSum: { value: 309, derived: true, sources: ['ws-people-indi'] },
  },
  legend: { text: '27 agents, 23 running, as listed on web-summit.sgit.ai/people/indi, read 18 November 2026.', sources: ['ws-people-indi'] },
  namingNote: {
    text: 'Each agent\'s name is its role, then the project (web-summit), then the person (indi), so every commit says whose agent made it.',
    sources: ['news-ten-days', 'ws-people-indi'],
    forDeveloper: 'Show `role` on pages. The full address (role, @, project, person) matches the email pattern in scripts/validate.mjs.',
  },
  schedule: { text: 'His conductor agent ran at 07:20, 12:20 and 17:20 GMT each day from 3 November.', sources: ['ws-everything'] },
  handover: {
    quote: 'Your conductor, dashboard, dev and accountant agents ran every scheduled slot for two days without a prompt, and every slot has a commit.',
    by: 'His mentor agent, 6 November',
    sources: ['ws-people-indi'],
  },
  howHeWorks: [
    { text: 'His agents draft; he sends every message.', sources: ['ws-team-indi', 'ws-people-indi'] },
    { text: 'His social agent drafts one post a day for RiskMandate\'s LinkedIn page; Indi posts.', sources: ['ws-people-indi'] },
    { text: 'His infographic agent tests each page on a stranger (a small sub-agent) before Indi sees it.', sources: ['ws-people-indi'] },
    { text: 'His synthetic-users agent tests what he works on with invented personas, starting with the business cards.', sources: ['ws-people-indi'] },
    { text: 'His accountant agent measures the tokens his agents use and proposes changes, so each agent gives its best output for the fewest tokens.', sources: ['ws-people-indi', 'ws-brief-indi'] },
    { text: 'His prompter agent improves his prompts so that his tasks get done in one or two prompts.', sources: ['ws-people-indi'] },
  ],
  // From data/research/agents.json (status and commits from the team register, site version v0.2.2313).
  // `does` is shortened from the source; "not published" means the source gives no description.
  list: [
    { role: "accountant", address: "accountant@web-summit.indi", does: "token accountant: measures the tokens Indi's agents use, finds the waste, proposes changes, briefs Indi and Dinis at 17:30 UTC daily (WS-148)", status: "running", statusAsPublished: "active", commits: 42, lastCommitUtc: "2026-11-13 17:38", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "appdev", address: "appdev@web-summit.indi", does: "not published", status: "running", statusAsPublished: "active", commits: 1, lastCommitUtc: "2026-11-11 13:29", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "builder", address: "builder@web-summit.indi", does: "another team member's site and learning environment, under that team member's policies", status: "running", statusAsPublished: "active", commits: 1, lastCommitUtc: "2026-11-04 22:17", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "conductor", address: "conductor@web-summit.indi", does: "conducts Indi's agents, keeps people/indi/, feeds the stand-ups and briefs Indi", status: "running", statusAsPublished: "active", commits: 90, lastCommitUtc: "2026-11-16 13:37", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "conductor-abpmaker", address: "conductor-abpmaker@web-summit.indi", does: "not published", status: "running", statusAsPublished: "active", commits: 1, lastCommitUtc: "2026-11-11 14:34", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "conductor-map", address: "conductor-map@web-summit.indi", does: "one-off helper: the venue map screen in the PrompTugal Team app and venue.geojson", status: "running", statusAsPublished: "active", commits: 3, lastCommitUtc: "2026-11-10 13:48", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "conductor-newsapp", address: "conductor-newsapp@web-summit.indi", does: "one-off helper: the UI and UX redesign of the public PrompTugal app: fewest taps per workflow, original colours, no AI-sounding text", status: "running", statusAsPublished: "active", commits: 3, lastCommitUtc: "2026-11-11 00:20", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "conductor-newsroom", address: "conductor-newsroom@web-summit.indi", does: "one-off helper: the unified interview-to-article workflow, its plain-words infographic on the team site, the visual newsroom map, and the pt.news redesign focused on agents", status: "running", statusAsPublished: "active", commits: 1, lastCommitUtc: "2026-11-10 14:51", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "conductor-teamapp", address: "conductor-teamapp@web-summit.indi", does: "overnight helper (10 to 11 November): the Team app's light mode, ticked-off tasks with an animation, a bigger venue-map button, every Web Summit event in Plan, and one-tap messaging", status: "not running", statusAsPublished: "proposed (in the brief), not yet running", commits: 0, lastCommitUtc: null, sources: ['ws-people-indi', 'ws-everything'] },
    { role: "dashboard", address: "dashboard@web-summit.indi", does: "keeps Indi's dashboard (people/indi/dashboard.md) and Indi's to-do infographic's list (people/indi/todo/todo.json, from 4 November)", status: "running", statusAsPublished: "active", commits: 30, lastCommitUtc: "2026-11-13 17:33", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "demo", address: "demo@web-summit.indi", does: "at the stand: asks a visitor five questions, researches their company's public facts, and builds a simulation and its ABP for the side-by-side ABP demo", status: "not running", statusAsPublished: "proposed (in the brief), not yet running", commits: 0, lastCommitUtc: null, sources: ['ws-people-indi', 'ws-everything'] },
    { role: "designer", address: "designer@web-summit.indi", does: "RiskMandate business cards for Web Summit: round 1 and round 2 designs, and /cards/ for a phone (WS-48)", status: "running", statusAsPublished: "active", commits: 24, lastCommitUtc: "2026-11-05 12:45", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "dev", address: "dev@web-summit.indi", does: "explorer developer for the factory (WS-27): a page or vault per target company, fast", status: "running", statusAsPublished: "active", commits: 31, lastCommitUtc: "2026-11-11 19:42", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "education", address: "education@web-summit.indi", does: "RiskMandate for education and children (WS-209): the public page /people/indi/education/, the people to meet at Web Summit, the chat with Dinis", status: "running", statusAsPublished: "active", commits: 2, lastCommitUtc: "2026-11-10 11:51", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "factory", address: "factory@web-summit.indi", does: "for each target company: the analysis, the risk analysis and how RiskMandate helps, as a page or vault (WS-27)", status: "running", statusAsPublished: "active", commits: 2, lastCommitUtc: "2026-11-04 22:18", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "followups", address: "followups@web-summit.indi", does: "not published", status: "running", statusAsPublished: "active", commits: 2, lastCommitUtc: "2026-11-13 17:20", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "inbox", address: "inbox@web-summit.indi", does: "reads Indi's summit and RiskMandate mail only, and drafts replies; never sends", status: "not running", statusAsPublished: "proposed (in the brief), not yet running", commits: 0, lastCommitUtc: null, sources: ['ws-people-indi', 'ws-everything'] },
    { role: "infographic", address: "infographic@web-summit.indi", does: "makes plain-word, pastel infographic pages on the team site at Indi's request, each tested on a stranger (a small sub-agent) before Indi sees it", status: "running", statusAsPublished: "active", commits: 1, lastCommitUtc: "2026-11-09 12:17", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "journalist", address: "journalist@web-summit.indi", does: "every wake, reports what happened that matters to Indi, and once a day at the evening wake a digest", status: "running", statusAsPublished: "active", commits: 3, lastCommitUtc: "2026-11-04 21:43", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "messaging", address: "messaging@web-summit.indi", does: "checks every new page and draft against the message", status: "running", statusAsPublished: "active", commits: 3, lastCommitUtc: "2026-11-09 17:48", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "prompter", address: "prompter@web-summit.indi", does: "prompt engineering: writes new prompts and improves existing ones (especially rushed or garbled ones) so Indi's tasks get done in one or two prompts", status: "running", statusAsPublished: "active", commits: 35, lastCommitUtc: "2026-11-11 13:16", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "recruiter", address: "recruiter@web-summit.indi", does: "not published", status: "running", statusAsPublished: "active", commits: 1, lastCommitUtc: "2026-11-06 12:39", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "social", address: "social@web-summit.indi", does: "drafts one post a day for RiskMandate's LinkedIn page (company voice, plus a reshare line in Indi's voice), with a picture suggestion and dated sources; Indi posts (WS-126)", status: "running", statusAsPublished: "active", commits: 9, lastCommitUtc: "2026-11-12 16:02", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "synthetic", address: "synthetic@web-summit.indi", does: "synthetic users: invented personas, played by sub-agents, test what Indi works on (first, the RiskMandate business cards); the runs go into a public vault", status: "running", statusAsPublished: "active", commits: 18, lastCommitUtc: "2026-11-08 16:27", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "ux", address: "ux@web-summit.indi", does: "the user experience of Indi's dashboard, command centre and to-do page (WS-06)", status: "running", statusAsPublished: "active", commits: 2, lastCommitUtc: "2026-11-07 17:59", sources: ['ws-people-indi', 'ws-everything'] },
    { role: "vault", address: "vault@web-summit.indi", does: "Indi's SGit vaults and their keys (WS-121)", status: "not running", statusAsPublished: "proposed (in the brief), not yet running", commits: 0, lastCommitUtc: null, sources: ['ws-people-indi', 'ws-everything'] },
    { role: "video-editor", address: "video-editor@web-summit.indi", does: "not published", status: "running", statusAsPublished: "active", commits: 4, lastCommitUtc: "2026-11-11 13:25", sources: ['ws-people-indi', 'ws-everything'] },
  ],
  alsoNamed: {
    role: 'conductor.fringe',
    does: 'his conductor on Lisbon Tech Fringe: owner of the communities page (who runs this week\'s events, how to join), marked done',
    note: 'Not counted in the 27.',
    sources: ['ltf-join'],
  },
};

// ---------------------------------------------------------------------------------------------------------------
// LANGUAGES: only what his profile says. No levels, grades or years. The order within "speaks" is his.
// ---------------------------------------------------------------------------------------------------------------
export const LANGUAGES = {
  speaks: [
    { code: 'en', name: 'English', ownName: 'English', sources: ['linkedin'] },
    { code: 'it', name: 'Italian', ownName: 'italiano', sources: ['linkedin'] },
    { code: 'fr', name: 'French', ownName: 'français', sources: ['linkedin'] },
  ],
  interest: [
    { code: 'sa', name: 'Sanskrit', ownName: 'संस्कृतम्', ownNameLatin: 'saṃskṛtam', sources: ['linkedin'] },
    // His profile names no programming languages; none are named here.
    { code: null, name: 'Programming languages', ownName: '{ }', sources: ['linkedin'] },
  ],
  sameInterest: { text: 'the same interest', note: 'His profile gives programming languages "the same interest" as Sanskrit.', sources: ['linkedin'] },
  learning: { text: 'Working through Harvard\'s CS50x', status: 'in progress', sources: ['linkedin'] },
  leadsTo: { text: 'Modern Languages and International Relations, from next autumn (his words)', sources: ['linkedin'] },
  figure: {
    title: "Indi's languages",
    desc: 'He speaks English, Italian and French. He has an interest in Sanskrit, and the same interest in programming languages; he is working through Harvard\'s CS50x. From next autumn he will read Modern Languages and International Relations. No levels are given, so none are shown.',
    caption: 'Source: his LinkedIn profile, read 18 November 2026. Solid tiles: languages he speaks. Dashed tiles: his interests. No levels are given, so none are shown.',
    labels: { speaks: 'Speaks', interest: 'An interest in' },
    sources: ['linkedin'],
  },
  devanagariCheck: 'संस्कृतम् = U+0938 U+0902 U+0938 U+094D U+0915 U+0943 U+0924 U+092E U+094D',
  whereTheyLead: [
    { text: 'From next autumn he will read Modern Languages and International Relations at university.', sources: ['linkedin'] },
    { text: 'University of Oxford, Modern Languages, Italian and Portuguese (2027), as his profile lists it.', sources: ['linkedin'] },
    { text: 'Volunteering in hospitals drew him towards diplomacy, "where languages, judgement and tact meet".', sources: ['linkedin'] },
  ],
};

// ---------------------------------------------------------------------------------------------------------------
// BACKGROUND: dates only as his profile gives them. The two university entries are shown as he lists them,
// side by side, without reconciling them.
// ---------------------------------------------------------------------------------------------------------------
export const BACKGROUND = {
  timeline: [
    { id: 'harrow', title: 'Harrow School', when: { from: '2021-09', to: '2026-06', text: 'September 2021 to June 2026' }, sources: ['linkedin'] },
    { id: 'diploma', title: 'Harrow Diploma, University of Buckingham', when: { at: '2026-05', text: 'May 2026' }, sources: ['linkedin'] },
    { id: 'sportshealing', title: 'Operations Manager, SportsHealing Ltd', when: { from: '2026-09', to: null, text: 'September 2026 to present' }, sources: ['linkedin'] },
    { id: 'riskmandate', title: 'Brand and Partnerships Lead, RiskMandate', when: { from: '2026-11', to: null, text: 'November 2026 to present' }, sources: ['linkedin'] },
    { id: 'websummit', title: 'Web Summit Lisbon, with the RiskMandate team', when: { from: '2026-11-09', to: '2026-11-12', text: '9 to 12 November 2026' }, sources: ['ws-home', 'whatsapp'] },
    { id: 'university', title: 'Modern Languages and International Relations, at university, from next autumn (his words)', when: { text: 'from next autumn' }, note: 'His summary.', sources: ['linkedin'] },
    { id: 'oxford', title: 'University of Oxford, Modern Languages, Italian and Portuguese (2027), as his profile lists it', when: { at: '2027', text: '2027' }, note: 'As his profile lists it. Show the title whole wherever the entry appears (C39).', sources: ['linkedin'] },
  ],
  undated: [
    { id: 'hospitals', title: 'Volunteering in hospitals in London and rural Italy', text: 'It left him with a lasting interest in medicine, and drew him towards diplomacy, "where languages, judgement and tact meet".', sources: ['linkedin'] },
    { id: 'startups', title: 'Junior developer for three health technology startups', text: 'He builds software for them. His profile does not name them.', sources: ['linkedin'] },
    { id: 'omknee', title: 'Working with OmKneeHealth', text: 'A London health startup making knee treatment simpler (kneelens.com).', sources: ['whatsapp', 'kneelens'] },
    { id: 'cs50', title: 'Harvard\'s CS50x', text: 'Working through it now.', sources: ['linkedin'] },
  ],
  path: {
    text: 'From Harrow School, through hospital volunteering in London and rural Italy, towards languages and diplomacy at university.',
    sources: ['linkedin'],
  },
  skills: { items: ['Web design', 'Web development', 'Debating'], sources: ['linkedin'] },
};

// ---------------------------------------------------------------------------------------------------------------
// DESIGNS: the five home-page designs (PROPOSAL D3). The Briefing is the default, served at /.
// ---------------------------------------------------------------------------------------------------------------
export const DESIGNS = [
  {
    slug: 'briefing',
    name: 'The Briefing',
    idea: 'A diplomat\'s briefing note on cream paper: him and his own words first, every fact with a numbered note to its source.',
    leadsWith: 'His photo, his own line from his post, the two buttons and three sourced figures; then his work in pictures and the ten-day strip',
    default: true,
    copy: {
      label: { text: 'Briefing note · facts read 18 November 2026', awaitingIndi: true, note: 'The date is the date the facts were read, not a date about him.' },
      // Round 2 (R1): the Purpose box is gone; the first screen uses HOME_LINE and HOME_FIGURES.
      paragraphs: ['Summary', 'What he built', 'How he works', 'Languages', 'Background', 'Fields he would like to talk to people in', 'Recommended next step'],
      nextStep: { text: 'Message him on LinkedIn.', sources: ['linkedin'] },
    },
  },
  {
    slug: 'lingua',
    name: 'Lingua',
    idea: 'A polyglot edition: his languages lead, and every section is titled in English, Italian and French.',
    leadsWith: 'His name and the ask in English, Italian and French side by side, with his language tiles, in the first screen',
    default: false,
    copy: { glossNote: { text: 'Italian and French section titles are the site\'s translations, not his words.', awaitingIndi: true } },
  },
  {
    slug: 'front-page',
    name: 'Front Page',
    idea: 'A newspaper front page about his week, from one of PrompTugal.news\'s editors.',
    leadsWith: 'The masthead with its two ears ("Wanted: work experience" and "Reply via LinkedIn"), then the lead story about his week with his pictures in black and white, and his week in dates in the sidebar',
    default: false,
    copy: {
      dateline: { text: 'West London · Web Summit Lisbon 2026 · Looking for work experience', sources: ['whatsapp', 'ws-home'] },
      headline: { text: 'Indi Gupte, one of the three editors of PrompTugal.news, is looking for work experience', awaitingIndi: true, sources: ['promptugal-home', 'promptugal-about', 'whatsapp'] },
      standfirst: { useQuote: 'intro', sources: ['whatsapp'] },
      photoCaption: 'Indi Gupte. Photo used with his agreement.',
      indexTitle: 'In this edition',
      notice: { text: 'Wanted: work experience. Glad to talk to people working in languages, AI, medicine or diplomacy. Reply via LinkedIn.', awaitingIndi: true, sources: ['whatsapp', 'linkedin'] },
      numbersTitle: 'By the numbers',
    },
  },
  {
    slug: 'console',
    name: 'Agent Console',
    idea: 'The operator\'s view: a team of 27 AI agents, 23 running, and 277 commits from 3 to 13 November 2026.',
    leadsWith: 'A green status line, then the operator panel with three sourced figures beside his team of agents drawn as one figure; then his week as a log',
    default: false,
    copy: {
      statusBar: { operator: 'Indi Gupte', status: 'LOOKING FOR WORK EXPERIENCE', contact: 'LinkedIn', sources: ['whatsapp'] },
      shippedTitle: 'What we built this week', // his post's words (C31)
      languageRows: ['en English · speaks', 'it Italian · speaks', 'fr French · speaks', 'sa Sanskrit · interest', '{ } programming languages · interest'],
    },
  },
  {
    slug: 'card',
    name: 'The Card',
    idea: 'His personal business card, front and back, on a dark desk. In his words: "I designed our business cards".',
    leadsWith: 'His card on a dark desk, front and back: his photo, name, "Looking for work experience" and LinkedIn on the front, "What I bring" on the back; everything else folded under More',
    default: false,
    copy: {
      front: ['Indi Gupte', 'Brand, partnerships and research', 'Looking for work experience', LINKEDIN_TEXT, 'West London'],
      back: { kicker: 'Working every day with a team of AI agents', numbers: 'A team of 27 AI agents, 23 running · 277 commits, 3 to 13 November 2026', sources: ['whatsapp', 'ws-people-indi', 'news-ten-days'] },
      languagesLine: 'English · Italiano · Français',
      interestLine: 'Interested in Sanskrit (संस्कृतम्) and programming languages',
      turnOver: 'Turn over',
      belowCard: 'More on the reverse of the card',
      note: 'Must not imitate the real RiskMandate cards.',
    },
  },
];

// Section titles for Lingua (English, Italian, French). The site's translations: plain, standard renderings.
export const LINGUA_TITLES = [
  { id: 'summary', en: 'In brief', it: 'In breve', fr: 'En bref', awaitingIndi: true },
  { id: 'built', en: 'What I built', it: 'Cosa ho costruito', fr: "Ce que j'ai construit", awaitingIndi: true },
  { id: 'how-i-work', en: 'How I work', it: 'Come lavoro', fr: 'Comment je travaille', awaitingIndi: true },
  { id: 'languages', en: 'Languages', it: 'Lingue', fr: 'Langues', awaitingIndi: true },
  { id: 'background', en: 'Background', it: 'Percorso', fr: 'Parcours', awaitingIndi: true },
  { id: 'fields', en: 'Fields I would like to talk about', it: 'Ambiti di cui vorrei parlare', fr: "Domaines dont j'aimerais parler", awaitingIndi: true },
  { id: 'looking-for', en: 'Looking for work experience', it: "Cerco un'esperienza di lavoro", fr: 'Je cherche une expérience professionnelle', awaitingIndi: true },
  { id: 'sources', en: 'Sources', it: 'Fonti', fr: 'Sources', awaitingIndi: true },
];

// ---------------------------------------------------------------------------------------------------------------
// NAV, STRIP, FOOTER
// ---------------------------------------------------------------------------------------------------------------
export const NAV = [
  { href: '/', text: 'Home' },
  { href: '/built/', text: 'What I built' },
  { href: '/how-i-work/', text: 'How I work' },
  { href: '/languages/', text: 'Languages' },
  { href: '/background/', text: 'Background' },
  { href: '/looking-for/', text: 'Looking for' },
  { href: '/agents/', text: 'Use with AI' },
  { href: REPO, text: 'Source', srText: 'Source code on GitHub', external: true },
];

// The "what he did" strip under each inner page's lede (PROPOSAL D1.5).
export const STRIP = [
  { text: 'A team of 27 AI agents, 23 running', href: '/how-i-work/', sources: ['ws-people-indi'] },
  { text: 'RiskMandate', href: '/built/#riskmandate', sources: ['whatsapp'] },
  { text: 'PrompTugal.news', href: '/built/#promptugal', sources: ['whatsapp'] },
  { text: 'Lisbon Tech Fringe', href: '/built/#fringe', sources: ['whatsapp'] },
  { text: 'Web Summit Lisbon 2026', href: '/how-i-work/', sources: ['ws-home'] },
];

export const FOOTER = {
  about: 'Indi Gupte, West London. Looking for work experience.',
  contact: 'No email or phone: please use LinkedIn.',
  site: [
    { href: '/sources/', text: 'Sources' },
    { href: '/behind-the-scenes/', text: 'Behind the scenes' },
    { href: '/d/', text: 'Designs' },
    { href: '/agents/', text: 'Use with AI' },
    { href: '/llms.txt', text: 'llms.txt' },
  ],
  madeBy: 'Made by the AgentiCCells team, with Indi\'s agreement',
  source: { href: REPO, text: 'Source on GitHub' },
  licence: 'Code Apache-2.0, text CC BY 4.0',
};

// ---------------------------------------------------------------------------------------------------------------
// PAGES: <title>, meta description (under 160 characters, checked below), kicker, h1 and lede for each page.
// ---------------------------------------------------------------------------------------------------------------
export const PAGES = {
  home: {
    path: '/',
    title: 'Indi Gupte: looking for work experience',
    description: 'Indi Gupte, West London: brand, partnerships and research. He works with a team of 27 AI agents, 23 running, and is looking for work experience.',
    kicker: 'Brand, partnerships and research',
    h1: 'Indi Gupte',
    lede: 'Before starting university, Indi is working with Dinis Cruz at RiskMandate. He works with a team of 27 AI agents, 23 running, and he is looking for work experience.',
    sources: ['whatsapp', 'ws-people-indi', 'ws-everything', 'factory-brief'],
  },
  built: {
    path: '/built/',
    title: 'What I built · Indi Gupte',
    description: 'What Indi Gupte built with the team at Web Summit Lisbon 2026: RiskMandate, PrompTugal.news, Lisbon Tech Fringe, a song and the business cards.',
    kicker: 'What I built',
    h1: 'Built with the team, at Web Summit Lisbon 2026',
    lede: 'His own summary of the week, then each piece of work with the place you can check it.',
    sources: ['whatsapp'],
  },
  'how-i-work': {
    path: '/how-i-work/',
    title: 'How I work with AI agents · Indi Gupte',
    description: 'Indi Gupte works with a team of 27 AI agents, 23 running: 277 commits from 3 to 13 November 2026. His agents draft; he sends every message.',
    kicker: 'How I work',
    h1: 'A team of 27 AI agents, 23 running',
    lede: 'Indi works with a team of 27 AI agents, 23 running, for research, design, drafting and his daily briefings. His agents draft; he sends every message.',
    sources: ['whatsapp', 'ws-people-indi', 'ws-everything', 'ws-team-indi'],
  },
  languages: {
    path: '/languages/',
    title: 'Languages · Indi Gupte',
    description: 'Indi Gupte speaks English, Italian and French, has an interest in Sanskrit and the same interest in programming languages, and is working through CS50x.',
    kicker: 'Languages',
    h1: 'English, Italian and French; Sanskrit; programming languages',
    lede: 'He speaks three languages, has an interest in Sanskrit, and the same interest in programming languages. From next autumn he will read Modern Languages and International Relations.',
    sources: ['linkedin'],
  },
  background: {
    path: '/background/',
    title: 'Background · Indi Gupte',
    description: 'Indi Gupte: Harrow School, the Harrow Diploma, volunteering in hospitals in London and rural Italy, and a path towards languages and diplomacy.',
    kicker: 'Background',
    h1: 'From school towards languages and diplomacy',
    lede: 'School at Harrow, hospital volunteering in London and rural Italy, software for three health technology startups, and university from next autumn. Dates only as his profile gives them.',
    sources: ['linkedin'],
  },
  'looking-for': {
    path: '/looking-for/',
    title: 'Looking for work experience · Indi Gupte',
    description: 'Indi Gupte is looking for work experience, and would like to talk to people working in languages, AI, medicine or diplomacy. Contact him on LinkedIn.',
    kicker: 'Looking for',
    h1: 'Looking for work experience',
    lede: 'If you have an opening, or know someone who might, please message Indi on LinkedIn.',
    sources: ['whatsapp'],
    questionsTitle: 'Questions to ask Indi',
  },
  sources: {
    path: '/sources/',
    title: 'Sources · Indi Gupte',
    description: 'Every source behind the facts on Indi Gupte\'s site, with its address and the date it was read.',
    kicker: 'Sources',
    h1: 'Where each fact comes from',
    lede: 'Every fact on this site has a source. Each is listed here with its address and the date it was read. The numbers match the notes beside the facts.',
    sources: [],
  },
  agents: {
    path: '/agents/',
    title: 'Use with AI · Indi Gupte',
    description: 'How to use Indi Gupte\'s site with an AI assistant: instructions by who it acts for, llms.txt, index.md, designs.json, and the site\'s source on GitHub.',
    kicker: 'Use with AI',
    h1: 'Who are you acting for?',
    lede: 'Instructions for AI assistants reading this site, by who they act for, and the files made for them. Use only facts with a source.',
    audiences: [
      {
        id: 'employer',
        title: 'An employer, a mentor or a university contact',
        rule: 'Read only. Use only facts that carry a source; say when something is not on the site.',
        prompt: `Read ${SITE}/llms.txt and ${SITE}/index.md. Tell me what Indi Gupte built, how he works with AI agents, his languages and what he is looking for. Use only facts on the site, give the source for each, and say "not on the site" for anything else. Contact is by LinkedIn only.`,
      },
      {
        id: 'indi',
        title: 'Indi himself',
        rule: 'Help him check and improve the site. Every change about him needs his approval, through Dinis Cruz.',
        prompt: `Read ${SITE}/index.md and ${SITE}/questions.md. Ask me the questions in questions.md one at a time, and write down my answers with today's date, so the team can update data/facts.mjs. Every change about me goes to the team through Dinis Cruz.`,
      },
      {
        id: 'editor',
        title: 'Someone editing the site',
        rule: 'Change data/facts.mjs, not the pages: every page is generated from it. Every fact needs a source id.',
        prompt: `Clone ${REPO} (branch dev). Every page is generated from data/facts.mjs and every source is in data/sources.md. Read CLAUDE.md first; propose changes as commits for the team to review.`,
      },
    ],
    files: [
      { href: '/llms.txt', text: 'llms.txt', what: 'A plain-text summary for AI assistants.' },
      { href: '/index.md', text: 'index.md', what: 'The whole site as Markdown, from the master copy of the facts.' },
      { href: '/designs.json', text: 'designs.json', what: 'The five designs of the home page.' },
    ],
    repoTitle: 'The source of the site',
    repoLine: 'Repository: AgentiCCells/AgentiCCells__Site__Indi-Gupte on GitHub (branch dev). Code Apache-2.0, text CC BY 4.0.',
    sources: ['repo'],
  },
  ai: {
    path: '/ai/',
    title: 'Use with AI · Indi Gupte',
    description: 'This page has moved to /agents/: how to use Indi Gupte\'s site with an AI assistant, and the site\'s source on GitHub.',
    h1: 'Use with AI',
    lede: 'This page is now at /agents/. The site\'s source is on GitHub.',
    redirect: '/agents/',
    sources: ['repo'],
  },
  d: {
    path: '/d/',
    title: 'Designs · Indi Gupte',
    description: 'The same facts about Indi Gupte, laid out five ways: The Briefing, Lingua, Front Page, Agent Console and The Card.',
    kicker: 'Designs',
    h1: 'Five designs, one set of facts',
    lede: 'The same facts about Indi, laid out five ways. Choose one to see it.',
    dialogHeading: 'Designs',
    dialogLine: 'The same facts about Indi, laid out five ways. Choose one to see it.',
    showing: 'Showing',
    home: 'Home',
    open: 'Open this design',
    allLink: 'All designs on one page',
    sources: [],
  },
  'behind-the-scenes': {
    path: '/behind-the-scenes/',
    title: 'Behind the scenes · Indi Gupte',
    description: 'How a team of AI agents made Indi Gupte\'s site: Dinis Cruz\'s words, the six roles, the flow of a round, every commit and the checks.',
    kicker: 'Behind the scenes',
    h1: 'How this site was made',
    lede: 'A team of six AI agents, each with a role and an Agent Behaviour Policy, made this site in rounds, from Dinis Cruz\'s words and with Indi\'s agreement.',
    sections: ["In Dinis's words", 'The team', 'The flow of a round', 'How the site started', 'Rounds', 'Every commit', 'The checks', 'Sources'],
    teamLine: 'Every role runs as a sub-agent of the conductor; each has an Agent Behaviour Policy.',
    sources: ['factory-brief', 'workflow'],
  },
};

// Dinis Cruz's words, for Behind the scenes (times UTC, about).
export const DINIS_WORDS = [
  {
    when: '2026-11-18T09:30Z',
    whenText: '18 November 2026, about 09:30 UTC',
    quote: 'great, now can you do the indi-gupte site? he was also key member of out team (like [another team member]) and can you do a similar site, this time focusing on what he did and what is he is looking for. See message he posted on a UK WebSummit WhatsApp group and his LinkedIn profile',
    edited: 'Quoted as written, except one name, replaced with [another team member] because the site names no one but Indi Gupte and Dinis Cruz. The full words are in team/BRIEF.md.',
    sources: ['factory-brief'],
  },
  {
    when: '2026-11-18T09:35Z',
    whenText: '18 November 2026, about 09:35 UTC',
    quote: 'Yes, he agreed',
    context: 'Asked whether Indi has agreed to a public personal site.',
    sources: ['factory-brief'],
  },
  {
    when: '2026-11-18T09:51Z',
    whenText: '18 November 2026, about 09:51 UTC',
    quote: 'HI please go to town on Indi and make it look as good (if not better) as [another team member\'s site] :)',
    edited: 'Quoted as written, except one name, replaced as above. The full words are in team/WORKFLOW.md.',
    sources: ['workflow'],
  },
  {
    when: '2026-11-18T09:51Z',
    whenText: '18 November 2026, about 09:51 UTC',
    quote: 'canyou also include on https://indi-gupte.agenticcells.site/ai/ the GitHub repo (which should also be linked from the top nav)',
    sources: ['workflow'],
  },
];

// ---------------------------------------------------------------------------------------------------------------
// QUESTIONS_TO_ASK_INDI: for "Looking for" (PROPOSAL D8). Proposal: they speak for him, so he approves them first.
// ---------------------------------------------------------------------------------------------------------------
export const QUESTIONS_TO_ASK_INDI = {
  awaitingIndi: true,
  proposal: true,
  intro: 'If you are meeting Indi, these questions start from the work on this site.',
  items: [
    { q: 'What did you learn from working every day with a team of 27 AI agents, 23 running?', ties: '/how-i-work/' },
    { q: 'How did the team build Lisbon Tech Fringe on the day Storm Charles cancelled Wednesday, and what was your part?', ties: '/built/#fringe' },
    { q: 'How did you work with your designer agent on the business cards, and how did you choose?', ties: '/built/#cards' },
    { q: 'What do you look for when you research a company?', ties: '/built/#factory' },
    { q: 'What does an editor of PrompTugal.news decide?', ties: '/built/#promptugal' },
    { q: 'Where do languages, medicine and diplomacy meet for you?', ties: '/background/' },
  ],
};

// ---------------------------------------------------------------------------------------------------------------
// QUESTIONS_FOR_INDI: what his own AI assistant should ask him, to improve the site. Answers go to the team
// through Dinis Cruz, with the date given.
// ---------------------------------------------------------------------------------------------------------------
export const QUESTIONS_FOR_INDI = [
  { id: 'cards-picture', q: 'Can you share a picture of the business card you designed, for "What I built" and The Card design?' },
  { id: 'cards-wording', q: '"What I built" quotes your post ("I designed our business cards"), then gives the record: your designer agent drew the rounds, you chose your card on 4 November, and Design A was chosen for printing on 5 November. Is that right, and is there more you would add?' },
  { id: 'programming', q: 'Which programming languages do you use or want to learn? Your profile names none, so the site names none.' },
  { id: 'lingua', q: 'Do you approve the Italian and French section titles for the Lingua design (LINGUA_TITLES), or would you write them differently?' },
  { id: 'front-page', q: 'Do you approve the Front Page headline ("Indi Gupte, one of the three editors of PrompTugal.news, is looking for work experience") and its "Wanted" notice?' },
  { id: 'questions', q: 'Do you approve the "Questions to ask Indi", or would you change them?' },
  { id: 'voice', q: 'The pages speak about you as "he", with first person in the menu and buttons. Would you prefer the whole site in the first person?' },
  { id: 'default-design', q: 'Which design should be the home page? The Briefing is proposed; Lingua is the alternative.' },
  { id: 'photo', q: 'Your photo shows part of another person at the bottom left; the site crops it out. Is the crop fine, or would you send another photo?' },
  { id: 'availability', q: 'When are you available for work experience, for how long, and where (London, remote, abroad)?' },
  { id: 'kind', q: 'What kind of placement would you like most, in which of your four fields?' },
  { id: 'startups', q: 'May the site name the three health technology startups you build software for, and is OmKneeHealth one of them?' },
  { id: 'omknee-role', q: 'What is your role at OmKneeHealth, in your words?' },
  { id: 'sportshealing', q: 'What does SportsHealing Ltd do, and what do you do there as Operations Manager?' },
  { id: 'university', q: 'Your summary says Modern Languages and International Relations from next autumn; your education lists University of Oxford, Modern Languages, Italian and Portuguese (2027), as your profile lists it. The site shows both as you list them. Do you want either changed?' },
  { id: 'fringe-part', q: 'What was your own part in Lisbon Tech Fringe beyond the communities page?' },
  { id: 'song', q: 'Is 14 November right for the release of Strangers in the Loop, and what did producing it involve?' },
  { id: 'promptugal', q: 'Are there PrompTugal.news articles you edited that the site should link to?' },
  { id: 'sanskrit', q: 'Is it fine to show the word Sanskrit in Devanagari (संस्कृतम्) as decoration?' },
  { id: 'tagline', q: 'Is "Brand, partnerships and research" the right line under your name?' },
  { id: 'briefing-date', q: 'The Briefing is labelled with 18 November 2026, the date the facts were read. Is that fine?' },
];

// ---------------------------------------------------------------------------------------------------------------
// HOME (round 2): the home page's first screen. HOME_LINE is his own line, quoted exactly from his post;
// HOME_FIGURES are the three sourced figures under it. `text` is the whole figure as one phrase (for screen readers,
// /index.md and anywhere the value and label are not shown side by side).
// ---------------------------------------------------------------------------------------------------------------
export const HOME_LINE = {
  quote: QUOTES.extracts.bring,
  attribution: 'Indi Gupte, in his post to a UK Web Summit WhatsApp group',
  sources: ['whatsapp'],
  // A shorter line, also exact, if the design needs one.
  alternative: { quote: QUOTES.extracts.looking, sources: ['whatsapp'] },
};

export const HOME_FIGURES = [
  {
    id: 'agents',
    value: '27',
    label: 'AI agents in his team, 23 running',
    text: 'A team of 27 AI agents, 23 running',
    link: '/how-i-work/',
    sources: ['ws-people-indi', 'ws-everything'],
  },
  {
    id: 'commits',
    value: '277',
    label: 'commits by his agents on the team\'s site, 3 to 13 November 2026',
    text: '277 commits by his agents on the team\'s site, 3 to 13 November 2026',
    link: '/how-i-work/',
    sources: ['news-ten-days'],
  },
  {
    id: 'editor',
    value: '1 of 3',
    label: 'editors of PrompTugal.news',
    text: 'One of the three editors of PrompTugal.news',
    link: '/built/#promptugal',
    sources: ['promptugal-home', 'promptugal-about', 'promptugal-board'],
  },
];

// ---------------------------------------------------------------------------------------------------------------
// TEN_DAYS (round 2): his ten days, 3 to 13 November 2026, as dated events, for the dated strip. Only dates printed
// in a source (or worked out from one, marked `derived: true`). `kind`: 'his' (his own work or his agents'),
// 'team' (the team's work, with his part named), 'event' (Web Summit itself). `time` is 'HH:MM UTC' only where the
// source says UTC or GMT; otherwise 'HH:MM' with `timeNote`, because the source gives no time zone.
// ---------------------------------------------------------------------------------------------------------------
export const TEN_DAYS_RANGE = {
  from: '2026-11-03',
  to: '2026-11-13',
  text: '3 to 13 November 2026',
  eventDays: { from: '2026-11-09', to: '2026-11-12', text: '9 to 12 November 2026', label: 'Web Summit Lisbon' },
  sources: ['news-ten-days', 'ws-home'],
  note: 'One entry, Strangers in the Loop on 14 November, falls the day after the ten days; it is kept, marked derived, because it is his.',
};

export const TEN_DAYS = [
  { date: '2026-11-03', label: 'The team\'s ten days begin', kind: 'team', sources: ['news-ten-days'] },
  { date: '2026-11-03', label: 'His conductor agent starts its daily schedule: 07:20, 12:20 and 17:20 GMT', kind: 'his', sources: ['ws-everything'] },
  { date: '2026-11-03', time: '23:30', timeNote: 'As his brief gives it; no time zone stated.', label: 'At his go, his developer agent opens the factory of company pages', kind: 'his', sources: ['ws-brief-indi'] },
  { date: '2026-11-04', label: 'He writes a two-page brief: RiskMandate for education and children', kind: 'his', sources: ['ws-education', 'ws-brief-indi'] },
  { date: '2026-11-04', label: 'He votes on the round 2 card designs and chooses his card', kind: 'his', sources: ['ws-design', 'ws-cards'] },
  { date: '2026-11-05', label: 'He joins the team in person', kind: 'his', sources: ['ws-brief-indi'] },
  { date: '2026-11-05', label: 'Design A chosen for printing: three audience cards, about 200 of each', kind: 'team', sources: ['ws-cards'] },
  { date: '2026-11-06', label: 'His mentor agent hands over: four of his agents ran every scheduled slot for two days without a prompt', kind: 'his', sources: ['ws-people-indi'] },
  { date: '2026-11-09', label: 'Web Summit Lisbon opens (9 to 12 November)', kind: 'event', sources: ['ws-home'] },
  { date: '2026-11-10', label: 'His education idea is published on the team\'s site', kind: 'his', sources: ['ws-education'] },
  { date: '2026-11-10', time: '19:09', timeNote: 'As the newsroom gives it; no time zone stated.', label: 'Storm Charles reaches Lisbon; Web Summit calls off its second day', kind: 'event', sources: ['news-ten-days'] },
  { date: '2026-11-11', time: '12:57', timeNote: 'As the newsroom gives it; no time zone stated.', label: 'Lisbon Tech Fringe, the team\'s guide to the side events, goes live; his lane: communities', kind: 'team', sources: ['news-ten-days', 'ltf-storm', 'ltf-join'] },
  { date: '2026-11-11', time: '21:11', timeNote: 'As the newsroom gives it; no time zone stated.', label: 'The Fringe app is out for testing', kind: 'team', sources: ['news-ten-days'] },
  { date: '2026-11-12', label: 'The team\'s stand, booth A1-30, on the last day of Web Summit', kind: 'event', sources: ['ws-home'] },
  { date: '2026-11-13', label: 'The ten days end: 277 commits by his agents on the team\'s site, 3 to 13 November 2026', kind: 'his', sources: ['news-ten-days'] },
  { date: '2026-11-14', label: 'Strangers in the Loop, RiskMandate\'s second song, produced by Indi, is released', kind: 'his', derived: true, how: BUILT.find(b => b.id === 'song').released.how, sources: ['news-every-hour'] },
];

// ---------------------------------------------------------------------------------------------------------------
// Self-checks: run `node data/facts.mjs` (also run on import; they throw on a broken rule).
// ---------------------------------------------------------------------------------------------------------------
{
  const post = QUOTES.whatsapp.lines.join('\n');
  for (const [k, v] of Object.entries(QUOTES.extracts)) if (!post.includes(v)) throw new Error(`QUOTES.extracts.${k} is not in the post`);
  for (const b of BUILT) if (b.quote && !post.includes(b.quote) && b.quote !== QUOTES.diplomacy.quote) throw new Error(`BUILT ${b.id}: quote not in the post`);
  for (const [k, p] of Object.entries(PAGES)) if (p.description.length >= 160) throw new Error(`PAGES.${k}.description is ${p.description.length} characters`);
  const ids = new Set(Object.keys(SOURCES));
  const walk = (o, path) => {
    if (Array.isArray(o)) return o.forEach((x, i) => walk(x, `${path}[${i}]`));
    if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) {
      if (k === 'sources' && Array.isArray(v)) { for (const s of v) if (!ids.has(s)) throw new Error(`${path}: unknown source id ${s}`); }
      else walk(v, `${path}.${k}`);
    }
  };
  walk({ PERSON, QUOTES, ASK, WEB_SUMMIT, BUILT, VIDEO, AGENTS, LANGUAGES, BACKGROUND, DESIGNS, STRIP, PAGES, DINIS_WORDS, HOME_LINE, HOME_FIGURES, TEN_DAYS_RANGE, TEN_DAYS }, 'facts');
  if (AGENTS.list.length !== AGENTS.total.value) throw new Error(`AGENTS.list has ${AGENTS.list.length} entries, not ${AGENTS.total.value}`);
  if (AGENTS.list.filter(a => a.status === 'running').length !== AGENTS.running.value) throw new Error('AGENTS: running count does not match');

  // Round 2 wording rules, over every string the pages can show (QUESTIONS_FOR_INDI speaks to him and is left out).
  const shown = { PERSON, QUOTES, ASK, WEB_SUMMIT, BUILT, VIDEO, AGENTS, LANGUAGES, BACKGROUND, DESIGNS, LINGUA_TITLES, NAV, STRIP, FOOTER, PAGES, DINIS_WORDS, QUESTIONS_TO_ASK_INDI, HOME_LINE, HOME_FIGURES, TEN_DAYS_RANGE, TEN_DAYS, SOURCES };
  const strings = [];
  const collect = (o, path) => {
    if (typeof o === 'string') strings.push([path, o]);
    else if (Array.isArray(o)) o.forEach((x, i) => collect(x, `${path}[${i}]`));
    else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) collect(v, `${path}.${k}`);
  };
  collect(shown, 'facts');
  const HYPE = ['world-class', 'cutting-edge', 'revolutionary', 'game-changing', 'amazing', 'incredible', 'seamless', 'unparalleled', 'groundbreaking', 'rockstar'];
  for (const [path, t] of strings) {
    if (t.includes('\u2014')) throw new Error(`${path}: em dash`);
    if (/Purpose box|^Purpose:/.test(t)) throw new Error(`${path}: the Purpose box was removed in round 2 (R1)`);
    if (/\.leadsWith$/.test(path) && /agent grid|the Notice|languages figure, beside/.test(t)) throw new Error(`${path}: describes a round 1 layout (round 2 live review, lift 5)`);
    for (const h of HYPE) if (t.toLowerCase().includes(h)) throw new Error(`${path}: hype word "${h}"`);
    // C5: the 27 agents always with "23 running", and never in one claim with Web Summit or the three projects.
    if (/\b27\b[^.]*\bagents?\b/i.test(t)) {
      if (/27 AI agents/.test(t) && !/27 AI agents, 23 running/.test(t)) throw new Error(`${path}: "27 AI agents" without ", 23 running"`);
      for (const s of t.split(/(?<=\.)\s/)) if (/\b27\b[^.]*\bagents?\b/i.test(s) && /Web Summit|RiskMandate|PrompTugal|Lisbon Tech Fringe/.test(s)) throw new Error(`${path}: the 27 agents tied to Web Summit or a project`);
    }
    // 277 commits always with its window.
    if (/\b277\b/.test(t) && t.length > 3 && !/3 to 13 November/.test(t)) throw new Error(`${path}: 277 without "3 to 13 November"`);
    // C39: the Oxford entry always as his profile lists it.
    if (/University of Oxford/.test(t) && !/as his profile lists it/.test(t)) throw new Error(`${path}: Oxford entry without "as his profile lists it"`);
  }
  // C25, C26, C31, C34: the four design fields as the reviewer set them.
  const dz = Object.fromEntries(DESIGNS.map(d => [d.slug, d]));
  if (!/^Indi Gupte, one of the three editors of PrompTugal\.news/.test(dz['front-page'].copy.headline.text)) throw new Error('C25: Front Page headline');
  if (!/Glad to talk to people/.test(dz['front-page'].copy.notice.text)) throw new Error('C26: Front Page notice');
  if (dz.console.copy.shippedTitle !== 'What we built this week' || !post.includes(dz.console.copy.shippedTitle)) throw new Error('C31: Console title');
  if (!dz.card.idea.includes(QUOTES.extracts.cards)) throw new Error('C34: The Card idea');

  // HOME_LINE, HOME_FIGURES, TEN_DAYS.
  if (!post.includes(HOME_LINE.quote) || !post.includes(HOME_LINE.alternative.quote)) throw new Error('HOME_LINE is not in the post');
  if (HOME_FIGURES.length !== 3) throw new Error('HOME_FIGURES must have three figures');
  for (const f of HOME_FIGURES) if (!f.value || !f.label || !f.text || !f.sources?.length) throw new Error(`HOME_FIGURES ${f.id}: value, label, text and sources are required`);
  let last = '';
  for (const [i, e] of TEN_DAYS.entries()) {
    const at = `TEN_DAYS[${i}]`;
    if (!/^2026-11-\d\d$/.test(e.date)) throw new Error(`${at}: date ${e.date}`);
    if (e.date < TEN_DAYS_RANGE.from || (e.date > TEN_DAYS_RANGE.to && !e.derived)) throw new Error(`${at}: ${e.date} is outside the ten days`);
    if (e.date < last) throw new Error(`${at}: not in date order`);
    last = e.date;
    if (e.time !== undefined && !/^\d\d:\d\d( UTC)?$/.test(e.time)) throw new Error(`${at}: time ${e.time}`);
    if (e.time && !e.time.endsWith('UTC') && !e.timeNote) throw new Error(`${at}: a time with no zone needs a timeNote`);
    if (!e.label || !e.sources?.length) throw new Error(`${at}: label and sources are required`);
    if (!['his', 'team', 'event'].includes(e.kind)) throw new Error(`${at}: kind ${e.kind}`);
    if (e.derived && !e.how) throw new Error(`${at}: derived without how`);
  }
}
