import { media } from './media';

/**
 * PROCESS
 *
 * `detail` is only used on the Our Process page; the homepage timeline
 * shows `copy` alone.
 */

export const processSteps = [
  {
    n: '01',
    title: 'Consultation',
    copy: 'Tell us about your project, requirements and ideas.',
    detail:
      'We start with a conversation. You tell us what you want the finished space to do, what is fixed and what is flexible, and we tell you honestly what is and is not achievable within the property.',
    image: media.process.consultation,
    alt: 'A first site consultation on a residential project',
  },
  {
    n: '02',
    title: 'Planning & Quotation',
    copy: 'We discuss the scope of work and provide a clear quotation.',
    detail:
      'We set out the scope in writing — what is included, what is excluded, and the sequence of works. The quotation is itemised so you can see exactly what you are paying for before anything begins.',
    image: media.process.planning,
    alt: 'Drawings and plans laid out during project planning',
  },
  {
    n: '03',
    title: 'Construction',
    copy:
      'Our team carries out the work with professional project management and attention to detail.',
    detail:
      'Work is managed on site day to day, with one point of contact throughout. You know who is coming, what is happening this week, and where the project stands against the programme.',
    image: media.process.construction,
    alt: 'Construction work in progress on a residential build',
  },
  {
    n: '04',
    title: 'Finishing',
    copy: 'We complete the final electrical, plumbing, plastering and interior works.',
    detail:
      'Second fix, plastering, tiling and decoration are coordinated so trades follow each other cleanly rather than working over one another. This is the stage where the quality of the earlier work shows.',
    image: media.process.finishing,
    alt: 'Interior finishing and plastering work nearing completion',
  },
  {
    n: '05',
    title: 'Handover',
    copy: 'We ensure the completed project meets the agreed requirements and standards.',
    detail:
      'We walk the finished project with you, work through any snagging together, and hand over a space that is genuinely finished — not one you are still chasing us about weeks later.',
    image: media.process.handover,
    alt: 'A completed residential project at handover',
  },
];
