import Reveal from '../ui/Reveal';
import Datum from '../ui/Datum';
import { principles } from '@/data/company';

export default function Principles() {
  return (
    <section className="band tinted">
      <div className="shell">
        <Datum n="04" label="Why Choose Us" />

        <Reveal as="h2" className="h h-1 prin-head">
  Built on Quality. Driven by Detail.
</Reveal>

        <div className="prin-grid">
          {principles.map((p, i) => (
            <Reveal className="prin-row" key={p.n} delay={Math.min(i * 0.05, 0.2)} duration={0.6}>
              <span className="num">{p.n}</span>
              <h3 className="hd hd-3">{p.title}</h3>
              <p>{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
