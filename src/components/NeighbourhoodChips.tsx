import { areaNeighbourhoods } from '@/data/area-neighbourhoods';

interface Props {
  slug: string;
  areaName: string;
}

/**
 * Surfaces the neighbourhoods inside an area as a visual chip cluster.
 * Returns null if no data exists for the slug.
 */
export default function NeighbourhoodChips({ slug, areaName }: Props) {
  const list = areaNeighbourhoods[slug];
  if (!list || list.length === 0) return null;

  return (
    <div className="animate-on-scroll">
      <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Neighbourhoods we serve</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        Tim knows {areaName} street by street.
      </h2>
      <div className="flex flex-wrap gap-2.5">
        {list.map((n) => (
          <span
            key={n}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:border-amber-300 hover:bg-amber-50 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            </svg>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
