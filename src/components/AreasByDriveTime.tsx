import Link from 'next/link';
import { client } from '@/data/client';
import { driveTimes } from '@/data/service-drive-times';
import { areaNeighbourhoods } from '@/data/area-neighbourhoods';

interface Band {
  label: string;
  description: string;
  maxMin: number;
}

const BANDS: Band[] = [
  { label: 'Within 15 minutes', description: 'Same-day for any service', maxMin: 15 },
  { label: '15–25 minutes',     description: 'Same-day for most calls',  maxMin: 25 },
  { label: '25–35 minutes',     description: 'Worth the drive for larger jobs', maxMin: 99 },
];

export default function AreasByDriveTime() {
  // Group areas by drive-time band. Skip Newmarket (HQ, 0 min).
  const groups = BANDS.map((band) => {
    const cities = client.areas
      .filter((a) => a.slug !== 'newmarket')
      .filter((a) => {
        const t = driveTimes[a.slug] ?? 999;
        const prevMax = BANDS[BANDS.indexOf(band) - 1]?.maxMin ?? 0;
        return t > prevMax && t <= band.maxMin;
      })
      .sort((a, b) => (driveTimes[a.slug] ?? 0) - (driveTimes[b.slug] ?? 0));
    return { ...band, cities };
  });

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Cities by drive time</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Same-day service across York Region and Simcoe County.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            Service area for electrical work — quick reference by drive time from Newmarket headquarters.
          </p>
        </div>

        <div className="space-y-8">
          {groups.map((band) => (
            <div key={band.label}>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3 mb-5">
                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  {band.label}
                </h3>
                <p className="text-gray-500 text-sm hidden sm:block">{band.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {band.cities.map((area) => {
                  const hoods = (areaNeighbourhoods[area.slug] || []).slice(0, 4);
                  const time = driveTimes[area.slug];
                  return (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="group block bg-white border border-gray-200 hover:border-amber-300 hover:shadow-sm rounded-xl p-5 transition-all"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="font-display font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors">
                          Electrician in {area.name}
                        </h4>
                        <span className="text-amber-600 font-bold text-sm whitespace-nowrap ml-3">{time} min</span>
                      </div>
                      {hoods.length > 0 && (
                        <p className="text-gray-500 text-sm leading-relaxed">
                          Serving {hoods.join(', ')}.
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 mt-3 text-amber-600 font-semibold text-xs">
                        <span>View {area.name} page</span>
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
