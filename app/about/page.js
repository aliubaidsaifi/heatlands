import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/ui/Reveal';
import Datum from '@/components/ui/Datum';
import Figure from '@/components/ui/Figure';
import Principles from '@/components/sections/Principles';
import Coverage from '@/components/sections/Coverage';
import FinalCta from '@/components/sections/FinalCta';
import { company } from '@/data/company';
import { media } from '@/data/media';

export const metadata = {
  title: 'About',
  description:
    'Heatlands Construction Ltd is a construction and property renovation company working with homeowners and property developers across London and surrounding areas.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Heatlands"
        title="Built Around Quality."
        lede={company.intro}
        image={media.about.wide}
        alt="A contemporary London residential building"
        crumb="About"
      />

      <section className="band">
        <div className="shell">
          <Datum n="01" label="Our Approach" />

          <div className="split">
            <div>
              <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '15ch' }}>
                We build the way we&rsquo;d want our own homes built.
              </Reveal>
              <Reveal as="p" className="lede" delay={0.08} style={{ marginTop: 20 }}>
                Every project starts with understanding what the finished space needs to do.
                From there we plan the work properly, sequence the trades so they follow each
                other cleanly, and keep you informed at each stage rather than leaving you to
                guess where things stand.
              </Reveal>
              <Reveal as="p" className="lede" delay={0.12} style={{ marginTop: 16 }}>
                Because we handle construction, electrical, plumbing and finishing, the parts
                of a project that usually fall between contractors stay with one team. That is
                where most of the delays and most of the disappointments come from, and it is
                the part we take seriously.
              </Reveal>
            </div>

            <Reveal className="split-media" delay={0.1} duration={0.85}>
              <Figure
                src={media.about.portrait}
                alt="Building work under way on a residential renovation"
                sizes="(max-width: 1000px) 100vw, 46vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Principles />
      <Coverage />
      <FinalCta />
    </>
  );
}
