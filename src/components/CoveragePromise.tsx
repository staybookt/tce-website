import { client } from '@/data/client';

/**
 * Coverage Promise — what Tim stands behind on every job. Three cards:
 *   1. Inspection-pass guarantee
 *   2. 1-year labour warranty + manufacturer parts warranties
 *   3. The quote is the price (no surprise change orders)
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
    title: 'The quote is the price.',
    body: 'I quote on-site, free. The number on the quote is the number on the invoice. No change orders for things I should have flagged on the walkthrough.',
    footnote: 'On-site quote · No obligation',
    iconPath:
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
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
            Inspected. Warrantied. Quoted straight.
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
            <span className="font-bold text-gray-900">Not sure what your job needs?</span>{' '}
            Call Tim. Five minutes, no obligation. He&apos;ll tell you straight whether it&apos;s in his wheelhouse.
          </p>
          <a
            href={`tel:${client.phone}`}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 ring-1 ring-amber-700/50 text-gray-900 font-bold text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Talk to Tim &mdash; {client.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
