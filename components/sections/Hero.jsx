'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { company } from '@/data/company';
import { media } from '@/data/media';

const ease = [0.16, 1, 0.3, 1];

/**
 * Hero — split, not full-bleed.
 *
 * The type sits on its own paper panel and the photograph holds the other
 * half. Nothing is overlaid, so the headline never has to fight the image
 * and the image never has to be dark enough to carry white text. That is
 * the whole reason for the split: it means almost any decent photograph
 * works here, instead of only the rare one that happens to have a quiet
 * area exactly where the words go.
 *
 * It also removes the scrim entirely — no gradient sitting between the
 * viewer and the work.
 */
export default function Hero() {
  const reduced = useReducedMotion();

  const step = (i) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.15 + i * 0.07, ease },
  });

  return (
    <section className="hero">
      <div className="hero-copy">
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
          <Link href="/contact" className="btn btn-primary">
            Get a Free Quote
          </Link>
          <a href={company.phoneHref} className="btn btn-outline">
            Talk to Our Team
          </a>
        </motion.div>

        <motion.div className="hero-foot" {...step(5)}>
          <span className="dot" aria-hidden="true" />
          {company.serviceArea}
        </motion.div>
      </div>

      {/* The image reveals by unmasking rather than fading — it wipes up from
          the bottom, which reads as something being built. */}
      <motion.div
        className="hero-media"
        initial={reduced ? false : { clipPath: 'inset(100% 0 0 0)' }}
        animate={{ clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.1, ease }}
      >
        <Image
          src={media.hero}
          alt="A contemporary London residential property"
          fill
          priority
          quality={82}
          sizes="(max-width: 1000px) 100vw, 52vw"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </section>
  );
}