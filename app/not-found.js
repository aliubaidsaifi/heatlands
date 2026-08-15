import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="band" style={{ paddingTop: 'calc(var(--nav-h) + 96px)' }}>
      <div className="shell">
        <span className="num" style={{ color: 'var(--bronze)' }}>404</span>
        <h1 className="hd hd-1" style={{ margin: '18px 0 16px', maxWidth: '14ch' }}>
          This page isn&rsquo;t here.
        </h1>
        <p className="lede" style={{ maxWidth: '46ch' }}>
          The page may have moved, or the address may be mistyped. Head back to the
          homepage, or get in touch and we&rsquo;ll point you the right way.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/contact" className="btn btn-outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
