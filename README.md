# PRO FLO Drainage & Landscape Construction website

The new website for proflodrainage.com. Three pages:

| Page | Address | File |
|---|---|---|
| Home | `/` | `src/pages/index.astro` |
| Photo gallery | `/photo-gallery` | `src/pages/photo-gallery.astro` |
| Contact | `/contact-us` | `src/pages/contact-us.astro` |

It is built with [Astro](https://astro.build), which turns these files into plain HTML pages. The design came from the handoff in `Website prototype for drainage contractor (1).zip`.

## Changing text, photos and phone numbers

**Almost everything is in one file: `src/data/site.js`.** Phone number, email, address, services, drainage steps, before/after photos, gallery photos, reviews and service area are all there. Edit the words between the quotes and save.

Colors and spacing are in `src/styles/global.css` (colors are at the top).

## Running it on your computer

You need [Node.js](https://nodejs.org) version 22 or newer.

```bash
npm install      # first time only: downloads Astro
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # makes the finished site in the "dist" folder
```

## Putting it online (Netlify)

1. Sign in at netlify.com and choose **Add new site → Import an existing project**.
2. Pick this GitHub repository. Netlify reads `netlify.toml` and knows what to do.
3. The quote form uses **Netlify Forms**. After the first deploy, go to **Site → Forms → Form notifications** and add an email notification to proflodrainage@gmail.com.
4. Point the proflodrainage.com domain at Netlify when you're ready to switch over.

The form has a hidden spam trap ("honeypot"). If spam becomes a problem, turn on Netlify's reCAPTCHA option too.

## To do before launch

- [ ] **Reviews:** the two reviews on the home page are placeholders. Replace them with real HomeStars reviews (`reviews` in `src/data/site.js`).
- [ ] **HomeStars link:** paste the profile URL into `homestars` in `src/data/site.js`.
- [ ] **Business hours:** add them to `hours` in `src/data/site.js` (shown on the Contact page).
- [ ] **Photos:** they currently load from the old GoDaddy site. Download them, save as WebP, put them in `public/images/`, and change `IMAGE_BASE` and `img()` in `src/data/site.js`. Do this before the GoDaddy site is cancelled, or the photos will disappear.
- [ ] **More gallery photos:** real drainage, deck and landscaping photos (`gallery` in `src/data/site.js`). The Decks tab says "Photos coming soon" until it has some.
- [ ] **About photo:** a team or family photo (not placed yet).
- [ ] **Confirm with the client:** "We usually reply the same day" and the service area list.
- [ ] **Logo:** ask the client for a vector (SVG) version.
