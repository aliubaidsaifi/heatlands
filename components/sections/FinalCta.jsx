import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../ui/Reveal';
import { company } from '@/data/company';
import { media } from '@/data/media';

/**
 * FinalCta — closes every page. Contact details read from data/company.js,
 * so replacing the placeholders updates them everywhere at once.
 */
export default function FinalCta() {
  return (
    <section className="cta-sec band">
      <div className="cta-bg">
        <Image
          src={media.cta}
          alt=""
          fill
          quality={68}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="shell cta-inner">
        <Reveal as="h2" className="hd hd-1" style={{ maxWidth: '16ch' }}>
          Build Your Vision With Us.
        </Reveal>
        <Reveal as="p" className="lede lede-light" delay={0.06} style={{ maxWidth: '54ch', marginTop: 20 }}>
          Planning a new build, extension, loft conversion or home renovation?
          Speak to our team today to discuss your project.
        </Reveal>

        <Reveal className="cta-actions" delay={0.12}>
          <Link href="/contact" className="btn btn-light">
            Request a Free Quote
          </Link>
          <a href={company.phoneHref} className="btn btn-outline-light">
            Talk to Our Team
          </a>
        </Reveal>

        <Reveal className="cta-contacts" delay={0.18}>
          <div className="cta-contact">
            <span className="label">Call us</span>
            <a href={company.phoneHref}>{company.phone}</a>
          </div>
          <div className="cta-contact">
            <span className="label">Email</span>
            <a href={company.emailHref}>{company.email}</a>
          </div>
          <div className="cta-contact">
            <span className="label">Serving</span>
            <span>{company.serviceArea}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
