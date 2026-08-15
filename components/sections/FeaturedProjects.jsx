import Link from 'next/link';
import Reveal from '../ui/Reveal';
import Datum from '../ui/Datum';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '@/data/projects';

export default function FeaturedProjects() {
  return (
    <section className="band">
      <div className="shell">
        <Datum n="03" label="Recent Work" />

        <div className="intro-grid" style={{ marginBottom: 'clamp(36px, 4vw, 56px)' }}>
          <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '12ch' }}>
            Selected Projects
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">Spaces shaped around the people who use them.</p>
            <Link href="/projects" className="arrow-link" style={{ marginTop: 22 }}>
              View all projects <span className="arw" aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <div className="proj-grid">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 0.07, 0.28)} duration={0.7}>
              <ProjectCard project={p} tall={i % 3 === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
