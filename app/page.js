import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import ServicesList from '@/components/sections/ServicesList';
import Datum from '@/components/ui/Datum';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Principles from '@/components/sections/Principles';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import AboutSplit from '@/components/sections/AboutSplit';
import Coverage from '@/components/sections/Coverage';
import FinalCta from '@/components/sections/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />

      <section className="band-tight tinted">
        <div className="shell">
          <Datum n="02" label="Services" />
          <div className="intro-grid" style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>
            <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '10ch' }}>
              Our Services
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
                Complete construction and property renovation solutions, delivered with
                care from start to finish.
              </p>
              <Link href="/services" className="arrow-link" style={{ marginTop: 22 }}>
                All services in detail <span className="arw" aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
          <ServicesList />
        </div>
      </section>

      <FeaturedProjects />
      <Principles />
      <ProcessTimeline />
      <AboutSplit />
      <Coverage />
      <FinalCta />
    </>
  );
}
