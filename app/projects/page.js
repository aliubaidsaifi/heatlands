import PageHero from '@/components/layout/PageHero';
import ProjectGrid from '@/components/sections/ProjectGrid';
import FinalCta from '@/components/sections/FinalCta';
import { media } from '@/data/media';

export const metadata = {
  title: 'Projects',
  description:
    'Selected new builds, extensions, loft conversions, kitchens, bathrooms and full property renovations across London and surrounding areas.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Our Work"
        lede="Spaces shaped around the people who use them."
        image={media.projects.p1}
        alt="A completed contemporary residential property"
        crumb="Projects"
      />

      <section className="band">
        <div className="shell">
          <ProjectGrid />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
