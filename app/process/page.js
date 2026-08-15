import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/ui/Reveal';
import Figure from '@/components/ui/Figure';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FinalCta from '@/components/sections/FinalCta';
import { processSteps } from '@/data/process';
import { media } from '@/data/media';

export const metadata = {
  title: 'Our Process',
  description:
    'How a Heatlands project runs, from first consultation and quotation through construction, finishing and handover.',
  alternates: { canonical: '/process' },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A Clear Process. From First Conversation to Final Handover."
        lede="Five stages, in the same order on every project, so you always know what happens next."
        image={media.process.construction}
        alt="A residential construction project in progress"
        crumb="Our Process"
      />

      <section className="band">
        <div className="shell">
          {processSteps.map((s) => (
            <article className="step-detail" key={s.n}>
              <div>
                <Reveal as="span" className="num" style={{ color: 'var(--bronze)' }}>
                  {s.n}
                </Reveal>
                <Reveal as="h2" className="hd hd-2" delay={0.04} style={{ margin: '12px 0 16px' }}>
                  {s.title}
                </Reveal>
                <Reveal as="p" className="lede" delay={0.08}>
                  {s.copy}
                </Reveal>
                <Reveal as="p" delay={0.12} className="body-muted" style={{ marginTop: 14, maxWidth: '52ch' }}>
                  {s.detail}
                </Reveal>
              </div>

              <Reveal className="step-detail-media" delay={0.08} duration={0.85}>
                <Figure src={s.image} alt={s.alt} sizes="(max-width: 900px) 100vw, 46vw" />
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <ProcessTimeline />
      <FinalCta />
    </>
  );
}
