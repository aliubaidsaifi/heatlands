import Reveal from '../ui/Reveal';
import Datum from '../ui/Datum';
import { marks } from '@/data/company';

export default function Intro() {
  return (
    <section className="band">
      <div className="shell">
        <Datum n="01" label="Introduction" />

        <div className="intro-grid">
          <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '15ch' }}>
            From Foundations to Finishing Touches.
          </Reveal>

          <Reveal delay={0.08}>
            <p className="lede">
              From complete new-build homes to extensions, loft conversions and bespoke
              interiors, our experienced team manages projects with attention to detail,
              quality workmanship and a commitment to customer satisfaction.
            </p>
            <p className="intro-note">Built with care. Finished with purpose.</p>
          </Reveal>
        </div>

        <div className="marks">
          {marks.map((m, i) => (
            <Reveal className="mark" key={m} delay={i * 0.05} duration={0.6}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span className="mark-title">{m}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
