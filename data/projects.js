import { media } from './media';

/**
 * PROJECTS — PLACEHOLDER DATA
 *
 * Every project below is a temporary placeholder. Titles, locations and
 * descriptions are illustrative and must be replaced with real completed
 * work before the site goes live.
 *
 * To add a real project: copy one object, change the fields, point
 * `image` at the client's photograph. The homepage grid, the projects
 * page and the category filter all read from this array — nothing else
 * needs editing.
 *
 * `category` must match one of the `filters` values below.
 */

export const filters = [
  'All',
  'New Builds',
  'Extensions',
  'Loft Conversions',
  'Kitchens',
  'Bathrooms',
  'Renovations',
];

export const projects = [
  {
    slug: 'contemporary-london-home',
    title: 'Contemporary London Home',
    category: 'New Builds',
    location: 'London',
    year: '',
    image: media.projects.p1,
    alt: 'A contemporary detached house with a rendered facade',
    description:
      'A complete new-build residential project delivered from groundworks through to internal finishing.',
    featured: true,
  },
  {
    slug: 'rear-extension',
    title: 'Rear Extension',
    category: 'Extensions',
    location: 'London',
    year: '',
    image: media.projects.p2,
    alt: 'A single-storey rear extension with glazed doors',
    description:
      'A single-storey rear extension opening the ground floor onto the garden, with structural openings formed throughout.',
    featured: true,
  },
  {
    slug: 'luxury-loft-conversion',
    title: 'Luxury Loft Conversion',
    category: 'Loft Conversions',
    location: 'London',
    year: '',
    image: media.projects.p3,
    alt: 'A converted loft with a pitched ceiling and rooflights',
    description:
      'Unused roof space converted into a bedroom and en-suite, including new staircase and full insulation.',
    featured: true,
  },
  {
    slug: 'bespoke-kitchen-renovation',
    title: 'Bespoke Kitchen Renovation',
    category: 'Kitchens',
    location: 'London',
    year: '',
    image: media.projects.p4,
    alt: 'A bespoke kitchen with an island and integrated appliances',
    description:
      'A kitchen replanned around the way the room is used, with bespoke cabinetry and integrated services.',
    featured: true,
  },
  {
    slug: 'modern-bathroom-renovation',
    title: 'Modern Bathroom Renovation',
    category: 'Bathrooms',
    location: 'London',
    year: '',
    image: media.projects.p5,
    alt: 'A renovated bathroom with large-format tiling',
    description:
      'Full strip-out and reinstallation including tanking, tiling and new sanitaryware.',
    featured: false,
  },
  {
    slug: 'complete-property-renovation',
    title: 'Complete Property Renovation',
    category: 'Renovations',
    location: 'London',
    year: '',
    image: media.projects.p6,
    alt: 'A fully renovated residential interior',
    description:
      'A whole-property renovation coordinating structural work, electrical, plumbing and interior finishing.',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
