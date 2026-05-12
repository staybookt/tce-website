'use client';

import Link from 'next/link';
import { useState } from 'react';
import { client } from '@/data/client';

interface Spoke {
  slug: string;
  angle: number;
  radius: number;
}

const SPOKES: Spoke[] = [
  { slug: 'east-gwillimbury', angle:   0, radius: 18 },
  { slug: 'keswick',          angle: 345, radius: 34 },
  { slug: 'innisfil',         angle: 320, radius: 34 },
  { slug: 'bradford',         angle: 290, radius: 22 },
  { slug: 'king-city',        angle: 230, radius: 26 },
  { slug: 'vaughan',          angle: 205, radius: 36 },
  { slug: 'aurora',           angle: 180, radius: 18 },
  { slug: 'richmond-hill',    angle: 170, radius: 30 },
  { slug: 'markham',          angle: 145, radius: 36 },
  { slug: 'stouffville',      angle: 115, radius: 30 },
  { slug: 'uxbridge',         angle:  85, radius: 36 },
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

  const orderedAreas = [...client.areas].sort((a, b) => {
    if (a.slug === 'newmarket') return -1;
    if (b.slug === 'newmarket') return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50/30 via-white to-white py-16 md:py-24">
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

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-stretch">
          {/* === MAP === */}
          <div className="relative">
            {/* Localized ambient glow — sits only under the map, not the list */}
            <div className="absolute inset-0 bg-amber-200/40 rounded-full blur-3xl scale-90 pointer-events-none" />

            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border border-amber-100 shadow-xl shadow-amber-100/40 overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="zone-fill-v3" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#fcd34d" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="hq-glow-v3" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                  <filter id="dot-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="0.3" />
                    <feOffset dx="0" dy="0.2" result="offsetblur" />
                    <feFlood floodColor="#000" floodOpacity="0.15" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Service area boundary — softer, more visible */}
                <circle cx="50" cy="50" r="42" fill="url(#zone-fill-v3)" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="0.25" strokeDasharray="1 1.4" opacity="0.5" />

                {/* Thicker connector spokes */}
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
                      strokeWidth={isHovered ? 0.5 : 0.25}
                      opacity={isHovered ? 0.85 : 0.4}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* HQ glow */}
                <circle cx="50" cy="50" r="9" fill="url(#hq-glow-v3)" />

                {/* HQ pulse rings */}
                <circle cx="50" cy="50" r="3" fill="none" stroke="#f59e0b" strokeWidth="0.4" opacity="0">
                  <animate attributeName="r" from="3" to="10" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.75" to="0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="3" fill="none" stroke="#f59e0b" strokeWidth="0.4" opacity="0">
                  <animate attributeName="r" from="3" to="10" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.75" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>

                {/* HQ marker — bigger, with drop shadow */}
                <circle cx="50" cy="50" r="3.2" fill="#f59e0b" filter="url(#dot-shadow)" />
                <circle cx="50" cy="50" r="1.3" fill="#fff" />

                {/* HQ labels — bigger and bolder */}
                <text x="50" y="58" fill="#0f172a" fontSize="3.5" fontWeight="900" textAnchor="middle" letterSpacing="-0.08">Newmarket</text>
                <text x="50" y="62" fill="#b45309" fontSize="1.9" fontWeight="800" textAnchor="middle" letterSpacing="0.5">HEADQUARTERS</text>

                {/* City dots — bigger, more vibrant, with shadow */}
                {SPOKES.map((spoke) => {
                  const p = polar(spoke.angle, spoke.radius);
                  const area = client.areas.find((a) => a.slug === spoke.slug);
                  const isHovered = hoveredSlug === spoke.slug;
                  return (
                    <g
                      key={spoke.slug}
                      onMouseEnter={() => setHoveredSlug(spoke.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className="cursor-pointer"
                    >
                      {/* Hover pulse */}
                      {isHovered && (
                        <circle cx={p.x} cy={p.y} r={4} fill="none" stroke="#f59e0b" strokeWidth="0.45" opacity="0.7">
                          <animate attributeName="r" from="2.5" to="6" dur="1.2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.8" to="0" dur="1.2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      {/* Halo */}
                      <circle cx={p.x} cy={p.y} r={isHovered ? 3 : 2.4} fill="#f59e0b" opacity={isHovered ? 0.35 : 0.2} className="transition-all duration-300" />
                      {/* Dot — bigger */}
                      <circle cx={p.x} cy={p.y} r={isHovered ? 2 : 1.7} fill="#f59e0b" filter="url(#dot-shadow)" className="transition-all duration-300" />
                      <circle cx={p.x} cy={p.y} r={isHovered ? 0.7 : 0.6} fill="#fff" className="transition-all duration-300" />
                      {/* Larger transparent hit target for hover */}
                      <circle cx={p.x} cy={p.y} r={6} fill="transparent" />
                      {/* City name label on hover */}
                      {isHovered && area && (
                        <g>
                          <rect
                            x={p.x - 12}
                            y={p.y - 9.5}
                            width="24"
                            height="5.5"
                            rx="1.2"
                            fill="#0f172a"
                            opacity="0.92"
                          />
                          <text
                            x={p.x}
                            y={p.y - 5.7}
                            fill="#fff"
                            fontSize="2.8"
                            fontWeight="700"
                            textAnchor="middle"
                          >
                            {area.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* === LIST === */}
          <div className="relative">
            <div className="mb-5 flex items-baseline justify-between">
              <p className="text-gray-700 font-bold text-sm uppercase tracking-[0.18em]">Cities served</p>
              <p className="text-gray-400 text-xs hidden sm:block">Hover any city or map dot</p>
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
                          ? 'bg-white border-amber-400 shadow-md shadow-amber-100/50'
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
                          <span className={`w-2.5 h-2.5 rounded-full transition-colors shrink-0 ${isHovered ? 'bg-amber-600 ring-2 ring-amber-200' : 'bg-amber-500'}`} />
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
                        <svg className={`w-4 h-4 transition-colors ${isHovered ? 'text-amber-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
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
