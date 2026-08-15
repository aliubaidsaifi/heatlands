import Link from 'next/link';
import Reveal from '../ui/Reveal';
import Datum from '../ui/Datum';
import Figure from '../ui/Figure';
import { company } from '@/data/company';
import { media } from '@/data/media';

const points = [
  'Professional service',
  'Quality workmanship',
  'Clear communication',
  'Attention to detail',
  'End-to-end project management',
];

export default function AboutSplit() {
  return (
    <section className="band">
      <div className="shell">
        <Datum n="06" label="The Company" />

        <div className="split">
          <Reveal className="split-media" duration={0.85}>
            <Figure
              src={media.about.portrait}
              alt="Construction work in progress on a London residential property"
              sizes="(max-width: 1000px) 100vw, 46vw"
            />
          </Reveal>

          <div>
            <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '14ch' }}>
              Construction with a Personal Approach.
            </Reveal>
            <Reveal as="p" className="lede" delay={0.08} style={{ marginTop: 20 }}>
              {company.intro}
            </Reveal>

            <Reveal className="split-list" delay={0.14}>
              {points.map((p) => (
                <div key={p}>
                  <span className="tick" aria-hidden="true" />
                  {p}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.2} style={{ marginTop: 28 }}>
              <Link href="/about" className="btn btn-outline">
                More About Heatlands
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
