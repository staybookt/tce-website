import { client } from '@/data/client';

/**
 * Compact 4-up trust strip shown right under the hero on every service page.
 * Light variant — light background to sit between the dark hero and the
 * white content sections without competing visually.
 *
 * Different from TrustBar (which is dark and sits under the homepage hero).
 */
export default function TrustStrip() {
  const items = [
    {
      value: 'ESA Certified',
      detail: client.licenseNumber,
    },
    {
      value: 'Insured & Bonded',
      detail: '1-year workmanship warranty',
    },
    {
      value: `${client.yearsExperience}+ Years`,
      detail: 'On the tools in York Region',
    },
    {
      value: '100% Pass',
      detail: 'ESA inspections on first visit',
    },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 py-5 md:py-6 px-4 text-center">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-bold text-sm leading-tight">{item.value}</p>
                <p className="text-gray-500 text-xs leading-tight mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
