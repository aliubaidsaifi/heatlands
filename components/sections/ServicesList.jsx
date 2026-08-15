'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../ui/Reveal';
import Figure from '../ui/Figure';
import { services } from '@/data/services';

/**
 * ServicesList
 *
 * Desktop: a plain editorial list. Hovering a row lifts a photograph that
 * tracks the cursor — the image is the reward for reading, not decoration
 * sitting there by default. Position is written straight to the node with
 * requestAnimationFrame so pointer movement never triggers a React render.
 *
 * Mobile: the float is disabled entirely (no hover, no cursor) and each
 * row carries its own thumbnail instead.
 */
export default function ServicesList() {
  const [active, setActive] = useState(null);
  const floatRef = useRef(null);
  const frameRef = useRef(0);

  const move = (e) => {
    if (!floatRef.current) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      if (floatRef.current) {
        floatRef.current.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      }
    });
  };

  return (
    <>
      <div className="svc-list" onMouseMove={move} onMouseLeave={() => setActive(null)}>
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            className="svc-row"
            delay={Math.min(i * 0.04, 0.2)}
            duration={0.6}
            onMouseEnter={() => setActive(i)}
          >
            <span className="num">{s.n}</span>

            <h3 className="hd hd-3">
              <Link href={`/services#${s.slug}`}>{s.title}</Link>
            </h3>

            <p className="svc-copy">{s.short}</p>

            <span className="svc-arw" aria-hidden="true">
              &rarr;
            </span>

            <Link href={`/services#${s.slug}`} className="svc-thumb" tabIndex={-1} aria-hidden="true">
              <Figure src={s.image} alt="" sizes="100vw" quality={62} />
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Desktop-only cursor companion. Hidden from assistive tech — every
          image here is already reachable through the row link. */}
      <div
        className={`svc-float ${active !== null ? 'show' : ''}`}
        ref={floatRef}
        aria-hidden="true"
      >
        {active !== null && (
          <Image
            src={services[active].image}
            alt=""
            width={320}
            height={400}
            quality={65}
            sizes="320px"
          />
        )}
      </div>
    </>
  );
}
