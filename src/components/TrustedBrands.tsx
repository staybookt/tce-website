/**
 * Trusted brands strip — equipment manufacturers and certifications we
 * install, service, and stand behind. Trust transfer from known-name
 * gear and the ESA badge.
 *
 * Design intent: monochrome, calm, premium. Reads as a credential bar,
 * not an ad. Drop between sections on homepage and service detail pages.
 *
 * Uses elegant text badges instead of raster logos so the bar stays
 * crisp at every viewport and matches our minimal type system.
 */

interface Brand {
  name: string;
  tagline?: string;
}

const BRANDS: Brand[] = [
  { name: 'ESA', tagline: 'Licensed Electrical Contractor' },
  { name: 'Eaton', tagline: 'Panels & breakers' },
  { name: 'Square D', tagline: 'Panels & breakers' },
  { name: 'Leviton', tagline: 'Outlets, switches, EV' },
  { name: 'Schneider', tagline: 'Smart load centres' },
  { name: 'Generac', tagline: 'Standby generators' },
];

interface Props {
  /** Heading override. Defaults to "Trusted brands we install." */
  heading?: string;
  /** Sub-line override. */
  subhead?: string;
  /** Tone: 'light' on white sections, 'dark' on dark sections. */
  tone?: 'light' | 'dark';
}

export default function TrustedBrands({
  heading = 'Trusted brands we install.',
  subhead = 'ESA-certified · Manufacturer-warrantied · One-year labour guarantee on every job',
  tone = 'light',
}: Props) {
  const bg = tone === 'dark' ? 'bg-gray-900' : 'bg-white';
  const border =
    tone === 'dark' ? 'border-white/10' : 'border-gray-200';
  const headingColor =
    tone === 'dark' ? 'text-white' : 'text-gray-900';
  const subColor =
    tone === 'dark' ? 'text-white/50' : 'text-gray-500';
  const eyebrow =
    tone === 'dark' ? 'text-amber-300' : 'text-amber-600';
  const badgeBg =
    tone === 'dark'
      ? 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08]'
      : 'bg-gray-50 border-gray-200 hover:border-amber-300 hover:bg-amber-50/40';
  const badgeText =
    tone === 'dark' ? 'text-white' : 'text-gray-900';
  const badgeTagColor =
    tone === 'dark' ? 'text-white/40' : 'text-gray-500';

  return (
    <section className={`${bg} py-16 md:py-20 border-y ${border}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <p className={`${eyebrow} font-semibold text-xs uppercase tracking-[0.25em] mb-3`}>
            Backed by the names you know
          </p>
          <h2 className={`font-display text-2xl md:text-3xl font-bold ${headingColor} tracking-tight leading-tight mb-2`}>
            {heading}
          </h2>
          <p className={`${subColor} text-sm md:text-base leading-relaxed`}>
            {subhead}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className={`${badgeBg} border rounded-xl px-4 py-5 md:py-6 text-center transition-all`}
            >
              <p className={`font-display text-base md:text-lg font-bold ${badgeText} tracking-tight leading-tight`}>
                {b.name}
              </p>
              {b.tagline && (
                <p className={`text-[10px] md:text-[11px] mt-1.5 ${badgeTagColor} leading-tight uppercase tracking-wider`}>
                  {b.tagline}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
