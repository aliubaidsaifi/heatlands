import Reveal from './Reveal';

/**
 * Datum — the setting-out line that opens every section.
 * Carries the section number and name; the tick comb fills the rest.
 */
export default function Datum({ n, label, dark = false }) {
  return (
    <Reveal className={`datum ${dark ? 'datum-dark' : ''}`} duration={0.6}>
      <span className="datum-n">{n}</span>
      <span className="datum-label">{label}</span>
      <span className="datum-ticks" aria-hidden="true" />
    </Reveal>
  );
}
