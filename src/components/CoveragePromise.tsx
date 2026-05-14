import { client } from '@/data/client';

/**
 * Coverage Promise — the trio that closes the affordability + risk-reversal
 * gap vs Right Time portfolio (financing copy, satisfaction guarantee,
 * warranty). Pure copy; no third-party widgets required.
 *
 * Three cards:
 *  1. Guarantee — pass-first-time language tied to ESA inspection
 *  2. Warranty — 2-year labour + manufacturer's parts warranty
 *  3. Payment plans — financing teaser (real partner gets wired in next)
 *
 * Drops onto the homepage + service detail pages as a horizontal three-up.
 */

interface Pillar {
  title: string;
  body: string;
  footnote?: string;
  iconPath: string;
}

const PILLARS: Pillar[] = [
  {
    title: 'Passes inspection or the fix is free.',
    body: 'Every job permitted, every job inspected. If ESA flags it, I come back and fix it free — no questions, no clock.',
    footnote: 'ESA-certified · Inspection-pass guarantee',
    iconPath:
      'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '1-year labour warranty on every job.',
    body: 'My workmanship is covered for a full year from the day the inspection passes. Manufacturer warranties on parts (Eaton, Square D, Leviton) are on top of that.',
    footnote: 'Labour + parts protection',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Big job? Ask about payment plans.',
    body: 'Panel upgrades, EV charger installs, and full rewires can run $3k–$10k+. I can connect you with home-services financing if that helps — talk to me about it on the quote call.',
    footnote: 'Most jobs over $2,500 qualify',
    iconPath:
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export default function CoveragePromise() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-4">
            The promise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Inspected, warrantied, and affordable on the bigger jobs.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-6 h-6 text-amber-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.iconPath} />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">
                {p.body}
              </p>
              {p.footnote && (
                <p className="text-amber-700 text-xs font-semibold uppercase tracking-wider">
                  {p.footnote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Inline reassurance with call CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-amber-50/60 border border-amber-200/60 rounded-xl px-5 md:px-7 py-4 md:py-5">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <span className="font-bold text-gray-900">Got a job over $2k?</span>{' '}
            Ask about payment options on the quote call — most homeowners spread $5k+ jobs over 24–60 months.
          </p>
          <a
            href={`tel:${client.phone}`}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Talk to Tim &mdash; {client.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
