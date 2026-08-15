import { media } from './media';

/**
 * SERVICES
 *
 * `provides` powers the "What we provide" list on the Services page.
 * Add or remove entries here and both the homepage list and the
 * services page follow automatically.
 */

export const services = [
  {
    n: '01',
    slug: 'new-build-homes',
    title: 'New Build Homes',
    short: 'Complete new-build construction, foundations to finish.',
    copy:
      'From foundations to finishing touches, we provide complete new-build construction services tailored to your requirements. We work closely with clients to create practical, modern and high-quality homes.',
    image: media.services.newBuild,
    alt: 'A newly completed contemporary house exterior',
    provides: [
      'Groundworks and foundations',
      'Structural and shell construction',
      'First and second fix',
      'Internal finishing and decoration',
    ],
  },
  {
    n: '02',
    slug: 'extensions',
    title: 'Extensions',
    short: 'Rear, side and wrap-around extensions, managed end to end.',
    copy:
      'Need more space? Our home extension services can help you make the most of your property. Whether you need a rear extension, side extension or additional living space, we manage the project from start to finish.',
    image: media.services.extensions,
    alt: 'A rear extension with large glazed doors onto a garden',
    provides: [
      'Rear and side extensions',
      'Wrap-around and double-storey',
      'Structural openings and steels',
      'Glazing, roofing and finishes',
    ],
  },
  {
    n: '03',
    slug: 'loft-conversions',
    title: 'Loft Conversions',
    short: 'Unused roof space turned into a room you actually use.',
    copy:
      'Transform your unused loft into a comfortable and functional space. Our loft conversion services can create an additional bedroom, office, bathroom or living area while adding value and versatility to your home.',
    image: media.services.loft,
    alt: 'A converted loft bedroom with a pitched ceiling and rooflight',
    provides: [
      'Dormer and rooflight conversions',
      'Staircase design and installation',
      'Insulation and fire separation',
      'En-suite and storage joinery',
    ],
  },
  {
    n: '04',
    slug: 'bespoke-kitchens',
    title: 'Bespoke Kitchens',
    short: 'Kitchens planned around how the room is actually used.',
    copy:
      'Create a kitchen designed around the way you live. We provide bespoke kitchen solutions with carefully planned layouts, quality finishes and attention to every detail.',
    image: media.services.kitchens,
    alt: 'A bespoke kitchen with an island and integrated cabinetry',
    provides: [
      'Layout planning and design',
      'Cabinetry and worktop installation',
      'Appliance and services integration',
      'Lighting, tiling and finishes',
    ],
  },
  {
    n: '05',
    slug: 'bespoke-bathrooms',
    title: 'Bespoke Bathrooms',
    short: 'Full bathroom installation, tanking to tiling.',
    copy:
      'Turn your bathroom into a stylish and functional space. From complete bathroom installations to custom finishes, we create bathrooms designed to match your requirements and property.',
    image: media.services.bathrooms,
    alt: 'A renovated bathroom with stone tiling and a walk-in shower',
    provides: [
      'Full strip-out and installation',
      'Tanking and waterproofing',
      'Tiling and stone finishes',
      'Sanitaryware and brassware',
    ],
  },
  {
    n: '06',
    slug: 'electrical-services',
    title: 'Electrical Services',
    short: 'Installations, rewiring and lighting for renovation work.',
    copy:
      'Our electrical services cover a wide range of domestic building requirements, including new installations, rewiring, lighting, sockets and electrical work associated with renovation and construction projects.',
    image: media.services.electrical,
    alt: 'Electrical first-fix cabling within a stud wall',
    provides: [
      'New installations and rewiring',
      'Consumer units and circuits',
      'Lighting design and sockets',
      'Renovation-related electrical work',
    ],
  },
  {
    n: '07',
    slug: 'plumbing',
    title: 'Plumbing',
    short: 'New installations, renovations and repairs.',
    copy:
      'From new plumbing installations to renovations and repairs, our plumbing services are designed to provide reliable and efficient solutions for kitchens, bathrooms, extensions and complete property projects.',
    image: media.services.plumbing,
    alt: 'Copper pipework during a plumbing first fix',
    provides: [
      'New plumbing installations',
      'Kitchen and bathroom supply',
      'Heating and radiator work',
      'Repairs and alterations',
    ],
  },
  {
    n: '08',
    slug: 'plastering-and-finishing',
    title: 'P.O.P. / Plastering & Finishing',
    short: 'Flat, clean surfaces ready for decorating.',
    copy:
      'We provide professional plastering and P.O.P. finishing services to achieve smooth, clean and high-quality surfaces ready for decorating. Our finishing work is suitable for new builds, extensions, renovations and interior projects.',
    image: media.services.plastering,
    alt: 'A plasterer skimming a wall to a smooth finish',
    provides: [
      'Skimming and re-skimming',
      'P.O.P. and decorative finishing',
      'Ceilings and coving',
      'Preparation for decoration',
    ],
  },
];

export const serviceLinks = services.map((s) => ({
  label: s.title.replace('P.O.P. / ', ''),
  href: `/services#${s.slug}`,
}));
