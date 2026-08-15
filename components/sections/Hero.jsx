'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { company } from '@/data/company';
import { media } from '@/data/media';

const ease = [0.16, 1, 0.3, 1];

/**
 * Hero
 *
 * One image, one headline, two actions. The entrance is a short stagger —
 * the image settles out of a slow scale while the type steps in beneath it.
 * Nothing loops, nothing parallaxes; it plays once and gets out of the way.
 */
export default function Hero() {
  const reduced = useReducedMotion();

  const step = (i) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.3 + i * 0.08, ease },
  });

  return (
    <section className="hero">
      <motion.div
        className="hero-img"
        initial={reduced ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
      >
        <Image
          src={media.hero}
          alt="A contemporary London residential property"
          fill
          priority
          quality={82}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <div className="veil" />

      <div className="shell hero-inner">
        <motion.p className="hero-eyebrow" {...step(0)}>
          Construction &amp; Property Renovation
        </motion.p>

        <h1 className="hd hd-hero">
          <motion.span style={{ display: 'block' }} {...step(1)}>
            Building Dreams.
          </motion.span>
          <motion.span style={{ display: 'block' }} {...step(2)}>
            Creating Exceptional Spaces.
          </motion.span>
        </h1>

        <motion.p className="lede hero-sub" {...step(3)}>
          {company.intro}
        </motion.p>

        <motion.div className="hero-actions" {...step(4)}>
          <Link href="/contact" className="btn btn-light">
            Get a Free Quote
          </Link>
          <a href={company.phoneHref} className="btn btn-outline-light">
            Talk to Our Team
          </a>
        </motion.div>

        <motion.div className="hero-foot" {...step(5)}>
          <span className="dot" aria-hidden="true" />
          {company.serviceArea}
        </motion.div>
      </div>
    </section>
  );
}
