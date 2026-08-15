/**
 * COMPANY CONFIGURATION
 *
 * Everything the client will eventually want to change lives here.
 * Phone, email and social links are placeholders — replace the values
 * below and they update across every page, header, footer and the
 * structured data in app/layout.js.
 */

export const company = {
  name: 'Heatlands Construction Ltd',
  shortName: 'Heatlands',
  legalSuffix: 'Construction Ltd',
  tagline: 'Building Dreams. Creating Exceptional Spaces.',
  serviceArea: 'London & Surrounding Areas',

  // ---- PLACEHOLDERS — replace with the client's real details ----
  phone: '[PHONE NUMBER]',
  phoneHref: 'tel:',
  email: '[EMAIL ADDRESS]',
  emailHref: 'mailto:',
  // ---------------------------------------------------------------

  url: 'https://www.heatlandsconstruction.co.uk',

  intro:
    'We are a professional construction and property renovation company delivering high-quality building solutions for homeowners and property developers across London and surrounding areas.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Process', href: '/process' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const legalLinks = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Cookie Policy', href: '/contact' },
  { label: 'Terms & Conditions', href: '/contact' },
];

export const principles = [
  {
    n: '01',
    title: 'Quality Workmanship',
    copy:
      'We take pride in delivering high standards of workmanship and paying attention to the details that make a difference.',
  },
  {
    n: '02',
    title: 'Complete Project Solutions',
    copy:
      'From initial construction work to electrical, plumbing and interior finishing, we can coordinate multiple aspects of your project.',
  },
  {
    n: '03',
    title: 'Bespoke Solutions',
    copy:
      'Every property and client is different. We tailor our services to your requirements, budget and vision.',
  },
  {
    n: '04',
    title: 'Reliable & Professional',
    copy:
      'We believe in clear communication, professional service and keeping our clients informed throughout the project.',
  },
  {
    n: '05',
    title: 'Attention to Detail',
    copy:
      "We don't just build spaces — we focus on creating finished spaces that look great, work well and are built to last.",
  },
];

export const marks = [
  'Quality First',
  'End-to-End Service',
  'London Based',
  'Built to Last',
];
