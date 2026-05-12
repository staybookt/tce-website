import { areaCharacter } from '@/data/area-character';

interface Props {
  slug: string;
  areaName: string;
  region: string;
  topServices: string[];
}

/**
 * Pulls together the area's distinctive signals into one card:
 * region, landmarks named in text, top services. Sits right after the hero
 * to give the visitor an instant sense of place before they read any prose.
 */
export default function LocalSnapshot({ slug, areaName, region, topServices }: Props) {
  const character = areaCharacter[slug];
  return (
    <div className="animate-on-scroll bg-gradient-to-br from-amber-50/40 to-white border border-amber-100 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
        {/* Region */}
        <div>
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">Region</p>
          <p className="font-display text-lg md:text-xl font-bold text-gray-900 leading-tight">{region}</p>
          <p className="text-gray-500 text-sm mt-1">Same-day quotes</p>
        </div>

        {/* Known for */}
        {character?.knownFor && (
          <div>
            <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">Known for</p>
            <p className="text-gray-800 text-sm leading-relaxed">{character.knownFor}.</p>
          </div>
        )}

        {/* Top services */}
        {topServices && topServices.length > 0 && (
          <div>
            <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">Most requested in {areaName}</p>
            <ul className="space-y-1">
              {topServices.slice(0, 3).map((s) => (
                <li key={s} className="flex items-center gap-2 text-gray-800 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
