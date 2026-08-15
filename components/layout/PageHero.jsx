import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../ui/Reveal';

/**
 * PageHero — the shared header for every page except the homepage.
 * Dark, with the image dropped well back so the type carries.
 */
export default function PageHero({ eyebrow, title, lede, image, alt, crumb }) {
  return (
    <section className="phero">
      {image && (
        <div className="phero-img">
          <Image
            src={image}
            alt={alt || ''}
            fill
            priority
            quality={72}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      <div className="shell phero-inner">
        <Reveal className="crumbs" duration={0.55}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb || title}</span>
        </Reveal>

        {eyebrow && (
          <Reveal as="p" className="label" delay={0.05} style={{ color: 'var(--bronze)', marginBottom: 16 }}>
            {eyebrow}
          </Reveal>
        )}

        <Reveal as="h1" className="hd hd-1" delay={0.1}>
          {title}
        </Reveal>

        {lede && (
          <Reveal as="p" className="lede lede-light" delay={0.16}>
            {lede}
          </Reveal>
        )}
      </div>
    </section>
  );
}
