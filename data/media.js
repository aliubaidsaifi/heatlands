
export const media = {
  // Homepage hero — full screen, the first thing anyone sees.
  hero: '/images/01-hero.webp',

  about: {
    // Home "About" split + About page. Portrait crop (4:5).
    portrait: '/images/03-about-portrait.webp',
    // About page banner + Contact page banner. Full width.
    wide: '/images/04-page-banner.webp',
  },

  // "Proudly Serving London & Surrounding Areas"
  london: '/images/05-london.webp',

  // "Build Your Vision With Us" — appears at the foot of every page.
  cta: '/images/06-cta.webp',

  services: {
    newBuild: '/images/07-new-build.webp', // also the Services page banner
    extensions: '/images/08-extensions.webp',
    loft: '/images/09-loft.webp',
    kitchens: '/images/10-kitchens.webp',
    bathrooms: '/images/11-bathrooms.webp',
    electrical: '/images/12-electrical.webp',
    plumbing: '/images/13-plumbing.webp',
    plastering: '/images/14-plastering.webp',
  },

  process: {
    consultation: '/images/15-consultation.webp',
    planning: '/images/02-planning.webp',
    construction: '/images/03-about-portrait.webp', // dup — also the page banner
    finishing: '/images/14-plastering.webp',        // dup of services.plastering
    handover: '/images/01-hero.webp',               // dup of hero
  },

  projects: {
    p1: '/images/01-hero.webp',        // dup of hero — also the Projects banner
    p2: '/images/08-extensions.webp',  // dup of services.extensions
    p3: '/images/09-loft.webp',        // dup of services.loft
    p4: '/images/10-kitchens.webp',    // dup of services.kitchens
    p5: '/images/11-bathrooms.webp',   // dup of services.bathrooms
    p6: '/images/07-new-build.webp',   // dup of services.newBuild
  },
};

export default media;