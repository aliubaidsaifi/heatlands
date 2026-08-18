'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, nav } from '@/data/company';
import Image from 'next/image';

/**
 * Navbar
 *
 * The tone follows what sits underneath. Inner pages open on a dark
 * PageHero, so the bar starts white and inverts to charcoal once it
 * compacts. The homepage hero is a pale split panel, so there the bar is
 * charcoal on paper from the very start — white would be invisible on it.
 *
 * Passing `overHero` explicitly overrides the route-based default.
 */
export default function Navbar({ overHero }) {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  // Homepage opens on paper; every other page opens on a dark banner.
  const isOverDark = overHero ?? pathname !== '/';
  const tone = isOverDark ? 'nav-over' : 'nav-plain';

  return (
    <>
      <header className={`nav ${tone} ${compact ? 'nav-compact' : ''}`}>
        <div className="shell nav-inner">
          <Link href="/" className="logo" aria-label={`${company.name} — home`}>
            <Image
              src="/logo.png"
              alt={company.name}
              width={200}
              height={52}
              priority
              unoptimized
              className="logo-img"
            />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-right">
            <Link href="/contact" className="btn btn-primary btn-sm nav-cta">
              Get a Free Quote
            </Link>
            <button
              type="button"
              className={`burger ${open ? 'open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`menu ${open ? 'open' : ''}`} hidden={!open}>
        <div className="shell">
          <nav aria-label="Mobile">
            {nav.map((item, i) => (
              <Link key={item.href} href={item.href} className="menu-link">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="menu-foot">
            <span className="label" style={{ color: 'var(--bronze)' }}>
              Enquiries
            </span>
            <a href={company.phoneHref} style={{ fontSize: '1.05rem' }}>
              {company.phone}
            </a>
            <a href={company.emailHref} style={{ fontSize: '1.05rem' }}>
              {company.email}
            </a>
            <Link href="/contact" className="btn btn-light" style={{ marginTop: 12 }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}