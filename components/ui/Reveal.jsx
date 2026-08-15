'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal — the only scroll animation on the site.
 * Short distance, quick easing. Subtle, fast, purposeful.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  duration = 0.75,
  as = 'div',
  className = '',
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
