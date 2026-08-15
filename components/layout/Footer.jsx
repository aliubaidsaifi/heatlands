import Link from 'next/link';
import { company, nav, legalLinks } from '@/data/company';
import { serviceLinks } from '@/data/services';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          <div className="foot-col">
            <Link href="/" className="logo" style={{ marginBottom: 18 }}>
              <Image
    src="/logo-light.png"
    alt={company.name}
    width={200}
    height={52}
    unoptimized
    className="logo-img"
  />
            </Link>
            <p style={{ maxWidth: '32ch', paddingTop: 14 }}>{company.tagline}</p>
          </div>

          <div className="foot-col">
            <h4>Navigation</h4>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={company.emailHref}>{company.email}</a>
            <span>{company.serviceArea}</span>
            <Link href="/contact" className="btn btn-light btn-sm" style={{ marginTop: 18 }}>
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; 2026 {company.name}. All rights reserved.</span>
          <div className="links">
            {legalLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
