# Heatlands Construction Ltd

A six-page website for a UK construction and property renovation company.
Next.js 15 · React 19 · JavaScript · Tailwind · Framer Motion.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start
```

Node 18.18+. No environment variables, no API keys, no backend required.

> The first run fetches Manrope and Inter from Google Fonts, so stay online
> for it. They are cached and self-hosted from then on.

---

## The design idea

The visual language comes from the drawings a construction project starts
with: setting-out lines, datum rules, tick marks, work numbered in sequence.

**The datum** is the signature — the hairline with a tick comb that opens
every section, carrying the section number and name. It is the same device
used to level a build, doing the same job here: telling you where you are and
keeping everything aligned to it. Sections run 01 through 07 down the
homepage because a build is a sequence, and the numbering means something.

No serif, no rounded cards, no gradients, no drop shadows. Square corners,
one warm accent (bronze) used only for emphasis, and hard contrast between
paper-light and near-black sections.

---

## Structure

```
app/
  layout.js          fonts, metadata, GeneralContractor schema, nav + footer
  page.js            homepage
  about/             services/    process/    projects/    contact/
  sitemap.js         robots.js    not-found.js
  globals.css        tokens, type scale, the datum, buttons, forms
  sections.css       per-section layout and breakpoints

components/
  layout/            Navbar, Footer, PageHero
  sections/          Hero, Intro, ServicesList, FeaturedProjects,
                     ProjectCard, ProjectGrid, Principles, ProcessTimeline,
                     AboutSplit, Coverage, FinalCta, EnquiryForm
  ui/                Reveal, Datum, Figure

data/
  company.js         name, contact, nav, principles   ← EDIT THIS FIRST
  services.js        all 8 services + detail content
  projects.js        project gallery + filter categories
  process.js         the 5 stages
  media.js           every image URL on the site
```

---

## What the client will want to change

**Contact details — `data/company.js`.** `phone`, `phoneHref`, `email` and
`emailHref` are placeholders. Change them once and they update in the navbar,
the mobile menu, every page's closing CTA, the footer and the contact page.

**Images — `data/media.js`.** The only file in the project that references an
image. Drop real photographs into `public/images/`, change the values to
`/images/your-file.jpg`, then trim the `remotePatterns` allow-list in
`next.config.mjs`.

**Projects — `data/projects.js`.** Every project in there is a placeholder.
Titles, locations and descriptions are illustrative and must be replaced with
real completed work before launch. Copy an object, change the fields, point
`image` at a real photograph. The homepage grid, the projects page and the
category filter all read from that one array.

**Services — `data/services.js`.** Titles, descriptions and the "what we
provide" lists.

---

## Not yet wired

- **Enquiry form** validates properly and shows a real success state, but does
  not submit anywhere. In `components/sections/EnquiryForm.jsx`, replace the
  body of `submit` with a POST to your endpoint — the `values` object is
  already shaped for it. A route handler at `app/api/enquiry/route.js`,
  Formspree, or the client's CRM all work.
- **Project detail pages.** `ProjectCard` currently links to `/projects`.
  Each project already has a `slug`, so adding `app/projects/[slug]/page.js`
  and changing one `href` is all it takes.
- **Legal pages.** Privacy, Cookie and Terms links point at `/contact` as a
  holding position. Add the real pages and update `legalLinks` in
  `data/company.js`.

---

## What was deliberately not invented

No testimonials, client logos, awards, certifications, project counts, years
of experience, company address or specific borough coverage — none of it was
provided, and putting made-up trust signals on a construction site is exactly
the kind of thing that gets noticed. The structured data in `app/layout.js` is
minimal for the same reason. Add `address`, `telephone` and `email` to the
schema object once the real details exist.

---

## Notes

- All six pages prerender as static HTML. Homepage first load is ~151 kB.
- Framer Motion only — no GSAP, no Lenis, no WebGL. Animation is short-throw
  and plays once.
- `prefers-reduced-motion` is respected throughout, including the project
  filter's layout animation.
- Mobile is a separate layout, not a squeeze: the services list swaps its
  cursor-following image for inline thumbnails, the process timeline goes
  vertical, and the nav becomes a full-screen menu.
- Keyboard: skip link, visible focus rings, Escape closes the menu, form
  errors move focus to the first invalid field and are announced.
- `sitemap.xml` and `robots.txt` generate from `company.url`.
