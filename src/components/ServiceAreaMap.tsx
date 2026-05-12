import Link from 'next/link';
import { client } from '@/data/client';
import { driveTimes } from '@/data/service-drive-times';

// Cities arranged in an even circular pattern around Newmarket. Position is
// angular (not geographic) — clean visual, predictable layout, easier to read.
//
// angle is in degrees, measured clockwise from 12 o'clock (top).
// Each city sits on a circle of radius `r` (% of container width).
interface Spoke {
  slug: string;
  angle: number;
  r: number;
}

const SPOKES: Spoke[] = [
  { slug: 'east-gwillimbury', angle:   0, r: 28 },  // N
  { slug: 'keswick',          angle: 330, r: 36 },  // NNW
  { slug: 'innisfil',         angle: 300, r: 38 },  // NW
  { slug: 'bradford',         angle: 270, r: 32 },  // W
  { slug: 'king-city',        angle: 240, r: 36 },  // SW
  { slug: 'vaughan',          angle: 210, r: 38 },  // SSW
  { slug: 'richmond-hill',    angle: 180, r: 32 },  // S
  { slug: 'markham',          angle: 150, r: 38 },  // SSE
  { slug: 'stouffville',      angle: 120, r: 36 },  // SE
  { slug: 'uxbridge',         angle:  90, r: 38 },  // E
  { slug: 'aurora',           angle:  60, r: 30 },  // NE
];

const polar = (angleDeg: number, r: number) => {
  // angle measured clockwise from 12 o'clock — center at (50,50)
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + r * Math.cos(rad),
    y: 50 + r * Math.sin(rad),
  };
};

export default function ServiceAreaMap() {
  const areas = client.areas;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Subtle warm wash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Service coverage</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            One headquarters.{' '}
            <span className="gradient-text">Twelve cities served.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
            Top Choice Electrical is headquartered in Newmarket. Most jobs across York Region and Simcoe County are within a 30-minute drive of the van.
          </p>
        </div>

        {/* The hub-and-spoke map */}
        <div className="relative w-full aspect-square sm:aspect-[16/11] max-w-4xl mx-auto">
          {/* SVG canvas — only renders connector lines + service-area outline + HQ marker */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="hq-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="area-fill" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {/* Soft service area boundary — single shape, not multiple rings */}
            <circle cx="50" cy="50" r="42" fill="url(#area-fill)" stroke="#f59e0b" strokeWidth="0.15" strokeDasharray="0.5 1" opacity="0.6" />

            {/* Connector spokes — clean thin lines from HQ to each city */}
            {SPOKES.map((spoke) => {
              const p = polar(spoke.angle, spoke.r);
              return (
                <line
                  key={`line-${spoke.slug}`}
                  x1={50}
                  y1={50}
                  x2={p.x}
                  y2={p.y}
                  stroke="#94a3b8"
                  strokeWidth="0.15"
                  opacity="0.45"
                />
              );
            })}

            {/* HQ ambient glow */}
            <circle cx="50" cy="50" r="8" fill="url(#hq-glow)" />

            {/* HQ pulse rings — staggered */}
            <circle cx="50" cy="50" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.3" opacity="0">
              <animate attributeName="r" from="2" to="8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.3" opacity="0">
              <animate attributeName="r" from="2" to="8" dur="3s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.3" opacity="0">
              <animate attributeName="r" from="2" to="8" dur="3s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>

            {/* HQ solid dot */}
            <circle cx="50" cy="50" r="1.8" fill="#f59e0b" />
            <circle cx="50" cy="50" r="0.7" fill="#fff" />
          </svg>

          {/* HQ HTML label — over the SVG */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-4 text-center pointer-events-none">
            <p className="text-gray-900 font-display font-extrabold text-base sm:text-lg leading-tight">Newmarket</p>
            <p className="text-amber-700 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-0.5">Headquarters</p>
          </div>

          {/* City spokes — real HTML links positioned over the SVG */}
          {SPOKES.map((spoke) => {
            const p = polar(spoke.angle, spoke.r);
            const area = areas.find((a) => a.slug === spoke.slug);
            if (!area) return null;
            const time = driveTimes[spoke.slug];
            return (
              <Link
                key={spoke.slug}
                href={`/areas/${spoke.slug}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2 hover:z-10"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                aria-label={`${area.name} — ${time} minutes from Newmarket headquarters`}
              >
                <div className="relative flex flex-col items-center">
                  {/* City dot */}
                  <span className="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm transition-transform group-hover:scale-125" />
                  {/* Card label */}
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border border-gray-200 shadow-sm rounded-lg px-2.5 py-1 mt-1 group-hover:border-amber-300 group-hover:shadow transition-colors">
                    <span className="block text-gray-900 text-xs sm:text-sm font-bold leading-tight">{area.name}</span>
                    <span className="block text-amber-600 text-[10px] sm:text-[11px] font-semibold leading-tight">~ {time} min</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex w-3 h-3">
              <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-60" />
              <span className="relative rounded-full w-3 h-3 bg-amber-500" />
            </span>
            <span className="text-gray-800 font-semibold">Newmarket headquarters</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm" />
            <span className="text-gray-600">11 cities served, click any city</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-px w-6 border-t border-dashed border-amber-500/60" />
            <span className="text-gray-600">~30-minute drive radius</span>
          </div>
        </div>
      </div>
    </section>
  );
}
