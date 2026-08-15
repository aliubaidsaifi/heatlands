import Reveal from '../ui/Reveal';
import Datum from '../ui/Datum';
import Figure from '../ui/Figure';
import { media } from '@/data/media';

export default function Coverage() {
  return (
    <section className="band-tight tinted">
      <div className="shell">
        <Datum n="07" label="Service Area" />

        <div className="split">
          <div>
            <Reveal as="h2" className="hd hd-2" style={{ maxWidth: '16ch' }}>
              Proudly Serving London &amp; Surrounding Areas
            </Reveal>
            <Reveal as="p" className="lede" delay={0.08} style={{ marginTop: 18, maxWidth: '48ch' }}>
              We work with homeowners and property developers across London and surrounding
              areas, delivering construction and renovation solutions tailored to each
              property and project.
            </Reveal>
          </div>

          <Reveal className="split-media wide" delay={0.1} duration={0.85}>
            <Figure
              src={media.london}
              alt="London rooftops and residential architecture"
              sizes="(max-width: 1000px) 100vw, 46vw"
              quality={72}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
