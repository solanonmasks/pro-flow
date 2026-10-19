// ─────────────────────────────────────────────────────────────
// All the words, phone numbers and photos for the site live here.
// To change text on the site, edit this file. You rarely need to
// touch the page files.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'PRO FLO Drainage & Landscape Construction',
  shortName: 'PRO FLO',
  phoneDisplay: '604-369-0039',
  phoneLink: '+16043690039', // used for tel: and sms: links
  email: 'proflodrainage@gmail.com',
  street: 'Unit 441, 7184 120th St',
  city: 'Surrey',
  region: 'BC',
  postalCode: 'V3W 0M6',
  facebook: 'https://www.facebook.com/proflodrainage',
  instagram: 'https://www.instagram.com/proflodrainage',
  // TODO: paste the PRO FLO HomeStars profile link here. Until then "HomeStars" shows as plain text.
  homestars: '',
  // TODO: get business hours from the client, e.g. 'Mon–Fri 7am–5pm, Sat by appointment'.
  // Leave empty ('') and the hours line is hidden.
  hours: '',
};

export const telHref = `tel:${business.phoneLink}`;
export const smsHref = (body) =>
  body ? `sms:${business.phoneLink}?&body=${encodeURIComponent(body)}` : `sms:${business.phoneLink}`;

// ── Photos ───────────────────────────────────────────────────
// Photos currently load from the client's GoDaddy site. When you
// self-host them later, change IMAGE_BASE and img() below.
const IMAGE_BASE = 'https://img1.wsimg.com/isteam/ip/84a84f38-0a31-41e9-afff-9ceec56e0e81/';

/** One photo URL at a given width. */
export const img = (file, width = 1200) => `${IMAGE_BASE}${file}/:/rs=w:${width},cg:true,m`;

/** A srcset string so phones download smaller photos. */
export const srcset = (file, widths = [600, 1000, 1600]) =>
  widths.map((w) => `${img(file, w)} ${w}w`).join(', ');

export const logo = `${IMAGE_BASE}logo-nobackground-500.png/:/rs=w:200,cg:true,m`;
export const badges = {
  homestars: `${IMAGE_BASE}Homestars%20Badge.png/:/rs=h:160,cg:true,m`,
  bbb: `${IMAGE_BASE}bbb_a_rating_logo.jpg/:/rs=h:120,cg:true`,
};

// ── Navigation ───────────────────────────────────────────────
export const nav = [
  { label: 'Drainage', href: '/#drainage' },
  { label: 'Landscape construction', href: '/#services' },
  { label: 'Before & after', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact-us' },
];

// ── Hero ─────────────────────────────────────────────────────
export const heroPhotos = [
  { file: 'IMG_1251.JPG', alt: 'Paver patio and block steps' },
  { file: 'IMG_0688.JPG', alt: 'Excavated trench along a retaining wall' },
  { file: 'IMG_1971.JPG', alt: 'New concrete walkway along a house' },
];

export const textChips = [
  'Water in basement',
  'Soggy yard',
  'Sewer backing up',
  'Retaining wall',
  'Patio or walkway',
  'Foundation crack',
];

// ── Drainage steps ───────────────────────────────────────────
export const steps = [
  {
    title: 'Video inspection',
    tag: 'See it',
    body: 'We push a camera through your perimeter and sewer lines and watch it on screen with you. Roots, crushed pipe, sags and silt all show up, along with exactly where they are.',
    file: 'IMG_0688.JPG',
    alt: 'Opened-up trench along a wall, ready for new drain pipe',
  },
  {
    title: 'Hydro flushing',
    tag: 'Try the easy fix',
    body: 'If the pipe is sound but full of silt, a high-pressure flush cleans it out. Sometimes that’s all a house needs, and it costs a fraction of a dig.',
    file: 'IMG_1977.JPG',
    alt: 'Excavated side yard during drainage work',
  },
  {
    title: 'Repair or replace',
    tag: 'Dig only what’s broken',
    body: 'Spot repair, one side, or the full perimeter, plus sump, damp proofing and membrane where it’s needed. Then we put your yard back.',
    file: 'IMG_1973.JPG',
    alt: 'Trench dug along a fence line for new drainage',
  },
];

// ── Services tabs ────────────────────────────────────────────
export const services = [
  {
    label: 'Drainage',
    file: 'IMG_1977.JPG',
    intro: 'Wet basement, soggy yard, a sewer line that keeps backing up. We find the cause and fix it properly.',
    items: [
      { name: 'Perimeter & yard drainage', note: 'Repair or full replacement' },
      { name: 'Water & sewer mains', note: 'Repairs and replacement' },
      { name: 'Sump installations', note: '' },
      { name: 'Hydro flushing', note: 'Perimeter drain cleaning' },
      { name: 'Video inspections', note: 'Drain and sewer pipe' },
      { name: 'Foundation crack repairs', note: '' },
      { name: 'Damp proofing & membrane', note: 'Foundation walls' },
    ],
  },
  {
    label: 'Landscape construction',
    file: 'IMG_1246.JPG',
    intro: 'The hard stuff that has to last: walls that hold, concrete that drains, stairs that don’t heave.',
    items: [
      { name: 'Retaining walls', note: 'Block and timber' },
      { name: 'Sidewalks', note: 'Concrete and pavers' },
      { name: 'Patios', note: '' },
      { name: 'Stairs', note: '' },
      { name: 'Wood decks & fencing', note: '' },
      { name: 'Mini excavator work', note: 'Tight side yards' },
    ],
  },
  {
    label: 'General landscaping',
    file: 'IMG_1259%20%282%29.JPG',
    intro: 'Finishing the yard once the heavy work is done, or a cleanup on its own.',
    items: [
      { name: 'Tree & shrub planting', note: '' },
      { name: 'Mulch or rock beds', note: '' },
      { name: 'Seed or sod lawns', note: '' },
      { name: 'Landscape edging', note: '' },
      { name: 'Excavation & grading', note: 'Slope it away from the house' },
    ],
  },
];

// ── Before & after (home page) ───────────────────────────────
export const work = [
  { file: 'Val%20Wall%20Before-After%201.jpg', title: 'Retaining wall.', cap: 'Rotting timber wall replaced with a block wall.' },
  { file: 'Stairs%20Before%20%26%20After1.jpg', title: 'Front stairs.', cap: 'Old wood steps out, poured concrete stairs in.' },
  { file: 'Walkway%20Before%20%26%20After1.jpg', title: 'Walkway.', cap: 'Mud path turned into a concrete walk to the door.' },
  { file: 'Morgan%20Wall%20Before-After%201.jpg', title: 'Backyard wall.', cap: 'Fence-line slope held back with block.' },
  { file: 'Sidewalk%20Before%20%26%20After1.jpg', title: 'Side yard.', cap: 'New sidewalk wrapping around the house.' },
  { file: 'Val%20Wall%20Before-After%202.jpg', title: 'Retaining wall.', cap: 'Second tier, same job.' },
  { file: 'Morgan%20Wall%20Before-After%202.jpg', title: 'Backyard wall.', cap: 'Finished wall with level lawn above.' },
  { file: 'Retaining%20Wall.jpg', title: 'Concrete wall.', cap: 'Poured retaining wall with drain rock behind.' },
];

// ── Photo gallery page ───────────────────────────────────────
// TODO: add the client's drainage, deck and landscaping photos here.
// A category with no photos shows a "photos coming soon" note.
export const gallery = [
  {
    label: 'Concrete & Retaining Walls',
    photos: [
      ...work,
      { file: 'IMG_1251.JPG', title: 'Patio and steps.', cap: 'Paver patio with block steps down to the yard.' },
      { file: 'IMG_1246.JPG', title: 'Landscape construction.', cap: 'Block wall and hardscape work.' },
      { file: 'IMG_1971.JPG', title: 'Walkway.', cap: 'New concrete walkway along the house.' },
    ],
  },
  {
    label: 'Drainage',
    photos: [
      { file: 'IMG_0688.JPG', title: 'Perimeter drain.', cap: 'Trench opened along the wall for new drain pipe.' },
      { file: 'IMG_1977.JPG', title: 'Side yard dig.', cap: 'Excavated side yard during drainage work.' },
      { file: 'IMG_1973.JPG', title: 'Fence line.', cap: 'Trench along a fence line for new drainage.' },
    ],
  },
  { label: 'Decks', photos: [] },
  {
    label: 'General Landscaping',
    photos: [
      { file: 'IMG_1259%20%282%29.JPG', title: 'Finished yard.', cap: 'Yard put back together after the heavy work.' },
    ],
  },
];

// ── About / process ──────────────────────────────────────────
export const process = [
  { t: 'You call or text', d: 'Send a photo if you can. We reply the same day.' },
  { t: 'Free site visit', d: 'We walk it with you and tell you what we’d do and why.' },
  { t: 'Written quote', d: 'Line by line, so you can compare it fairly.' },
  { t: 'Work and cleanup', d: 'Same crew start to finish. Yard put back before we leave.' },
];

// ── Reviews ──────────────────────────────────────────────────
// TODO before launch: these two are PLACEHOLDERS written for the mockup.
// Replace them with real HomeStars reviews (with the customer's OK).
export const reviews = [
  {
    text: 'They found a collapsed section of drain tile with the camera, dug just that corner, and the crawlspace has been dry all winter. Fair price and they cleaned up better than they found it.',
    who: 'Homeowner, Surrey',
    job: 'Perimeter drain repair',
  },
  {
    text: 'Our old timber wall was falling into the neighbour’s yard. The new block wall is solid and they regraded the whole slope so the water goes where it should.',
    who: 'Homeowner, Langley',
    job: 'Retaining wall',
  },
];

// ── Service area ─────────────────────────────────────────────
export const serviceArea = [
  'Vancouver', 'Burnaby', 'New Westminster', 'Richmond', 'Delta', 'Surrey', 'White Rock',
  'Langley', 'Coquitlam', 'Port Moody', 'Pitt Meadows', 'Maple Ridge', 'Abbotsford',
];
