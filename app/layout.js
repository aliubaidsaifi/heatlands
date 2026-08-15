import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import './sections.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { company } from '@/data/company';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: 'Heatlands Construction Ltd — Construction & Property Renovation, London',
    template: '%s · Heatlands Construction Ltd',
  },
  description:
    'Heatlands Construction Ltd is a construction and property renovation company serving London and surrounding areas. New build homes, extensions, loft conversions, bespoke kitchens and bathrooms, electrical, plumbing and finishing.',
  keywords: [
    'construction company London',
    'builders London',
    'building contractors London',
    'home extensions London',
    'loft conversions London',
    'new build homes London',
    'property renovation London',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: company.name,
    title: 'Heatlands Construction Ltd — Building Dreams. Creating Exceptional Spaces.',
    description:
      'Construction and property renovation for homeowners and property developers across London and surrounding areas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heatlands Construction Ltd',
    description: 'Construction and property renovation across London and surrounding areas.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0E0E0D',
  width: 'device-width',
  initialScale: 1,
};

/**
 * LocalBusiness structured data.
 *
 * Deliberately minimal: no address, no registration number, no ratings,
 * no founding date — none of that was provided, and inventing it would
 * be both dishonest and a schema violation. Add `address`, `telephone`
 * and `email` once the real details are in data/company.js.
 */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: company.name,
  description: company.intro,
  url: company.url,
  areaServed: { '@type': 'Place', name: 'London and surrounding areas, United Kingdom' },
  knowsAbout: [
    'New build homes',
    'Home extensions',
    'Loft conversions',
    'Bespoke kitchens',
    'Bespoke bathrooms',
    'Electrical services',
    'Plumbing',
    'Plastering and finishing',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
