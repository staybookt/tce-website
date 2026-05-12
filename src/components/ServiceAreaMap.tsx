'use client';

import Link from 'next/link';
import { useState } from 'react';
import { client } from '@/data/client';

// Angular position per city, measured clockwise from 12 o'clock (true north).
// Not survey-accurate — a close mental model so the dots feel geographically
// reasonable without competing with a real map.
interface Spoke {
  slug: string;
  angle: number;
  radius: number;
}

const SPOKES: Spoke[] = [
  { slug: 'east-gwillimbury', angle:   0, radius: 18 },  // N
  { slug: 'keswick',          angle: 345, radius: 36 },  // NNW
  { slug: 'innisfil',         angle: 320, radius: 36 },  // NW
  { slug: 'bradford',         angle: 290, radius: 22 },  // W
  { slug: 'king-city',        angle: 230, radius: 26 },  // SW
  { slug: 'vaughan',          angle: 205, radius: 38 },  // SSW
  { slug: 'aurora',           angle: 180, radius: 18 },  // S
  { slug: 'richmond-hill',    angle: 170, radius: 32 },  // S/SSE
  { slug: 'markham',          angle: 145, radius: 38 },  // SE
  { slug: 'stouffville',      angle: 115, radius: 32 },  // E/SE
  { slug: 'uxbridge',         angle:  85, radius: 38 },  // E
];

const polar = (angleDeg: number, r: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + r * Math.cos(rad),
    y: 50 + r * Math.sin(rad),
  };
};

export default function ServiceAreaMap() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // HQ first, then alphabetical by name
  const orderedAreas = [...client.areas].sort((a, b) => {
    if (a.slug === 'newmarket') return -1;
    if (b.slug === 'newmarket') return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Service coverage</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            One headquarters.{' '}
            <span className="gradient-text">Twelve cities served.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
            Top Choice Electrical is headquartered in Newmarket. Same-day service across York Region, Simcoe County, and parts of Durham Region.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* === MAP === */}
          <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="zone-fill" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#fde68a" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#fde68a" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="hq-glow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="50" cy="50" r="42" fill="url(#zone-fill)" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#fbbf24" strokeWidth="0.15" strokeDasharray="0.6 1" opacity="0.5" />

              {SPOKES.map((spoke) => {
                const p = polar(spoke.angle, spoke.radius);
                const isHovered = hoveredSlug === spoke.slug;
                return (
                  <line
                    key={`line-${spoke.slug}`}
                    x1={50}
                    y1={50}
                    x2={p.x}
                    y2={p.y}
                    stroke={isHovered ? '#f59e0b' : '#94a3b8'}
                    strokeWidth={isHovered ? 0.3 : 0.15}
                    opacity={isHovered ? 0.7 : 0.35}
                    className="transition-all duration-300"
                  />
                );
              })}

              <circle cx="50" cy="50" r="6" fill="url(#hq-glow)" />

              <circle cx="50" cy="50" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.3" opacity="0">
                <animate attributeName="r" from="2" to="8" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="50" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.3" opacity="0">
                <animate attributeName="r" from="2" to="8" dur="3s" begin="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </circle>

              <circle cx="50" cy="50" r="2.2" fill="#f59e0b" />
              <circle cx="50" cy="50" r="0.9" fill="#fff" />

              <text x="50" y="56" fill="#0f172a" fontSize="2.6" fontWeight="800" textAnchor="middle" letterSpacing="-0.05">Newmarket</text>
              <text x="50" y="59.5" fill="#b45309" fontSize="1.5" fontWeight="700" textAnchor="middle" letterSpacing="0.4">HEADQUARTERS</text>

              {SPOKES.map((spoke) => {
                const p = polar(spoke.angle, spoke.radius);
                const isHovered = hoveredSlug === spoke.slug;
                return (
                  <g key={spoke.slug}>
                    {isHovered && (
                      <circle cx={p.x} cy={p.y} r={3.5} fill="none" stroke="#f59e0b" strokeWidth="0.4" opacity="0.6">
                        <animate attributeName="r" from="2" to="5" dur="1.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.7" to="0" dur="1.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle cx={p.x} cy={p.y} r={isHovered ? 2 : 1.4} fill="#f59e0b" opacity={isHovered ? 0.25 : 0.15} className="transition-all duration-300" />
                    <circle cx={p.x} cy={p.y} r={isHovered ? 1.4 : 1.1} fill="#f59e0b" className="transition-all duration-300" />
                    <circle cx={p.x} cy={p.y} r={isHovered ? 0.5 : 0.4} fill="#fff" className="transition-all duration-300" />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* === LIST === */}
          <div>
            <div className="mb-5 flex items-baseline justify-between">
              <p className="text-gray-700 font-bold text-sm uppercase tracking-[0.18em]">Cities served</p>
              <p className="text-gray-400 text-xs">Hover to highlight on map</p>
            </div>

            <ul className="space-y-1.5">
              {orderedAreas.map((area) => {
                const isHQ = area.slug === 'newmarket';
                const isHovered = hoveredSlug === area.slug;
                const regionShort = area.region.replace(' Region', '').replace(' County', '');
                return (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      onMouseEnter={() => !isHQ && setHoveredSlug(area.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className={`flex items-center justify-between gap-4 px-4 py-3 rounded-xl border transition-all duration-200 ${
                        isHQ
                          ? 'bg-amber-50 border-amber-200'
                          : isHovered
                          ? 'bg-white border-amber-300 shadow-sm'
                          : 'bg-white border-gray-200 hover:border-amber-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {isHQ ? (
                          <span className="relative inline-flex w-2.5 h-2.5 shrink-0">
                            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-60" />
                            <span className="relative rounded-full w-2.5 h-2.5 bg-amber-500" />
                          </span>
                        ) : (
                          <span className={`w-2.5 h-2.5 rounded-full transition-colors shrink-0 ${isHovered ? 'bg-amber-600' : 'bg-amber-500'}`} />
                        )}
                        <span className="font-display font-bold text-gray-900 text-base truncate">
                          {area.name}
                        </span>
                        {isHQ && (
                          <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em] shrink-0">HQ</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-gray-500 font-medium text-xs uppercase tracking-wider">
                          {isHQ ? 'York' : regionShort}
                        </span>
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
