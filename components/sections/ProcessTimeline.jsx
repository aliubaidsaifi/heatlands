import Link from 'next/link';
import Reveal from '../ui/Reveal';
import Datum from '../ui/Datum';
import { processSteps } from '@/data/process';

/**
 * ProcessTimeline — five columns on desktop, a vertical list on mobile.
 * The bronze rule above each column is the only ornament; it reads as a
 * progress bar without pretending to be interactive.
 */
export default function ProcessTimeline() {
  return (
    <section className="band dark">
      <div className="shell">
        <Datum n="05" label="How We Work" dark />

        <div className="intro-grid" style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '14ch' }}>
            From Concept to Completion
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede lede-light">
              Whether you&rsquo;re building a new home, extending your existing property or
              completely renovating your interiors, our team can help bring your ideas to life.
            </p>
            <Link href="/process" className="arrow-link arrow-link-light" style={{ marginTop: 24 }}>
              See the full process <span className="arw" aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <div className="steps">
          {processSteps.map((s, i) => (
            <Reveal className="step" key={s.n} delay={Math.min(i * 0.06, 0.3)} duration={0.6}>
              <span className="num">{s.n}</span>
              <h3 className="hd hd-4">{s.title}</h3>
              <p>{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
