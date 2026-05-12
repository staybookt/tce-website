import Link from 'next/link';
import { client } from '@/data/client';
import { areaCharacter } from '@/data/area-character';
import { areaNeighbourhoods } from '@/data/area-neighbourhoods';

const REGION_ORDER = ['York Region', 'Simcoe County', 'Durham Region'];

interface IconProps { name: string; className?: string }

function CharacterIcon({ name, className = '' }: IconProps) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'home':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
    case 'building':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>;
    case 'building-2':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>;
    case 'landmark':
      return <svg viewBox="0 0 24 24" className={className} {...common}><line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" /></svg>;
    case 'tree':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 5.9.4 1 .7 2 .7 3.1a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4c0-1.1.3-2.1.7-3.1A7 7 0 0 1 5 9a7 7 0 0 1 7-7z" /><path d="M12 22v-3" /></svg>;
    case 'telescope':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" /><path d="m13.56 11.747 4.332-.924" /><path d="m16 21-3.105-6.21" /><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" /><path d="m6.158 8.633 1.114 4.456" /><path d="m8 21 3.105-6.21" /><circle cx="12" cy="13" r="2" /></svg>;
    case 'ferris-wheel':
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="12" r="2" /><path d="M12 2v4" /><path d="m6.8 15-3.5 2" /><path d="m20.7 7-3.5 2" /><path d="M6.8 9 3.3 7" /><path d="m20.7 17-3.5-2" /><path d="m9 22 3-8 3 8" /><path d="M8 22h8" /><path d="M18 18.7a9 9 0 1 0-12 0" /></svg>;
    case 'train':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="5" y="2" width="14" height="16" rx="3" /><path d="M5 12h14" /><circle cx="9" cy="15" r="0.5" fill="currentColor" /><circle cx="15" cy="15" r="0.5" fill="currentColor" /><path d="m8 22 2-3" /><path d="m14 19 2 3" /></svg>;
    case 'waves':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>;
    case 'sprout':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" /></svg>;
    case 'anchor':
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg>;
    case 'footprints':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 16v-2.38c0-.4-.04-.79-.16-1.18a8 8 0 0 1 0-4.88C4 6.5 4.8 5 6 5c1 0 2 1 2 2.5V13c0 .5.5 1 1 1s1-.5 1-1V9c0-.6.4-1 1-1s1 .4 1 1v3.5c0 1.5-1 2.5-2 2.5s-2-1-2-2.5V11" /><path d="M20 16v-2.38c0-.4-.04-.79-.16-1.18a8 8 0 0 0 0-4.88C20 6.5 19.2 5 18 5c-1 0-2 1-2 2.5V13c0 .5-.5 1-1 1s-1-.5-1-1V9c0-.6-.4-1-1-1s-1 .4-1 1v3.5c0 1.5 1 2.5 2 2.5s2-1 2-2.5V11" /><circle cx="7" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

export default function AreasByRegion() {
  const grouped = REGION_ORDER.map((region) => ({
    region,
    cities: client.areas
      .filter((a) => a.region === region)
      .sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((g) => g.cities.length > 0);

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Service area</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Cities and neighbourhoods we cover.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            Same-day service across York Region, Simcoe County, and parts of Durham Region. Click any city for the full local page.
          </p>
        </div>

        <div className="space-y-12">
          {grouped.map(({ region, cities }) => (
            <div key={region}>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3 mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  {region}
                </h3>
                <p className="text-gray-500 text-sm">
                  {cities.length} {cities.length === 1 ? 'city' : 'cities'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((area) => {
                  const character = areaCharacter[area.slug];
                  const hoods = (areaNeighbourhoods[area.slug] || []).slice(0, 4);
                  const isHQ = area.slug === 'newmarket';
                  return (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className={`group block bg-white border rounded-2xl p-5 transition-all ${
                        isHQ
                          ? 'border-amber-300 shadow-md ring-1 ring-amber-200/50'
                          : 'border-gray-200 hover:border-amber-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          isHQ ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-600 border border-amber-100'
                        }`}>
                          <CharacterIcon name={character?.icon || 'home'} className="w-6 h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h4 className="font-display font-bold text-gray-900 text-lg leading-tight">
                              Electrician in {area.name}
                            </h4>
                            {isHQ && (
                              <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em] bg-amber-100 px-2 py-0.5 rounded">HQ</span>
                            )}
                          </div>
                          {character?.knownFor && (
                            <p className="text-gray-700 text-[13px] leading-relaxed mb-2">
                              <span className="font-semibold text-gray-500">Known for:</span> {character.knownFor}.
                            </p>
                          )}
                          {hoods.length > 0 && (
                            <p className="text-gray-500 text-[13px] leading-relaxed">
                              Serving {hoods.join(', ')}.
                            </p>
                          )}
                          <div className="flex items-center gap-1.5 mt-3 text-amber-600 font-semibold text-xs">
                            <span>View {area.name} page</span>
                            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
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
