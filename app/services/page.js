import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/ui/Reveal';
import Figure from '@/components/ui/Figure';
import FinalCta from '@/components/sections/FinalCta';
import Link from 'next/link';
import { services } from '@/data/services';
import { media } from '@/data/media';

export const metadata = {
  title: 'Services',
  description:
    'New build homes, extensions, loft conversions, bespoke kitchens and bathrooms, electrical, plumbing and plastering across London and surrounding areas.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Construction & Renovation, Done Properly."
        lede="Complete construction and property renovation solutions, delivered with care from start to finish."
        image={media.services.newBuild}
        alt="A completed new-build residential property"
        crumb="Services"
      />

      <section className="band">
        <div className="shell">
          {services.map((s) => (
            <article className="svc-detail" id={s.slug} key={s.slug}>
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

                <Reveal delay={0.12}>
                  <h3 className="label" style={{ marginTop: 28, color: 'var(--text-muted)' }}>
                    What we provide
                  </h3>
                  <div className="svc-provides">
                    {s.provides.map((p) => (
                      <div key={p}>
                        <span className="tick" aria-hidden="true" />
                        {p}
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.16} style={{ marginTop: 28 }}>
                  <Link href="/contact" className="btn btn-outline">
                    Enquire about {s.title.replace('P.O.P. / ', '')}
                  </Link>
                </Reveal>
              </div>

              <Reveal className="svc-detail-media" delay={0.08} duration={0.85}>
                <Figure src={s.image} alt={s.alt} sizes="(max-width: 900px) 100vw, 46vw" />
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
