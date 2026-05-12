import Link from 'next/link';

interface CityMark {
  slug: string;
  name: string;
  x: number;
  y: number;
  labelAnchor: 'start' | 'middle' | 'end';
  labelDy: number;
}

const HQ = { x: 500, y: 350 };

const cities: CityMark[] = [
  { slug: 'east-gwillimbury', name: 'East Gwillimbury', x: 510, y: 250, labelAnchor: 'middle', labelDy: -16 },
  { slug: 'keswick',          name: 'Keswick',           x: 470, y: 160, labelAnchor: 'middle', labelDy: -16 },
  { slug: 'bradford',         name: 'Bradford',          x: 380, y: 270, labelAnchor: 'end',    labelDy: 4 },
  { slug: 'innisfil',         name: 'Innisfil',          x: 300, y: 190, labelAnchor: 'end',    labelDy: 4 },
  { slug: 'king-city',        name: 'King City',         x: 370, y: 470, labelAnchor: 'end',    labelDy: 4 },
  { slug: 'aurora',           name: 'Aurora',            x: 530, y: 450, labelAnchor: 'start',  labelDy: 4 },
  { slug: 'vaughan',          name: 'Vaughan',           x: 360, y: 590, labelAnchor: 'end',    labelDy: 4 },
  { slug: 'richmond-hill',    name: 'Richmond Hill',     x: 560, y: 580, labelAnchor: 'middle', labelDy: 24 },
  { slug: 'markham',          name: 'Markham',           x: 680, y: 590, labelAnchor: 'start',  labelDy: 4 },
  { slug: 'stouffville',      name: 'Stouffville',       x: 680, y: 440, labelAnchor: 'start',  labelDy: 4 },
  { slug: 'uxbridge',         name: 'Uxbridge',          x: 770, y: 370, labelAnchor: 'start',  labelDy: 4 },
];

export default function ServiceAreaMap() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Subtle warm wash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Service coverage</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            One headquarters.{' '}
            <span className="gradient-text">Twelve cities served.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
            Top Choice Electrical operates out of Newmarket. Most jobs across York Region and Simcoe County are within a 30-minute drive. Same-day quotes across the entire service area.
          </p>
        </div>

        <div className="relative w-full aspect-[10/7] rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm overflow-hidden">
          <svg
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-label="Service area map — Newmarket headquarters with 11 surrounding cities across York Region and Simcoe County"
          >
            <defs>
              <radialGradient id="hq-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ring-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Concentric drive-time rings */}
            <circle cx={HQ.x} cy={HQ.y} r={260} fill="none" stroke="url(#ring-stroke)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
            <circle cx={HQ.x} cy={HQ.y} r={180} fill="none" stroke="url(#ring-stroke)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.65" />
            <circle cx={HQ.x} cy={HQ.y} r={100} fill="none" stroke="url(#ring-stroke)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.8" />

            {/* Drive-time labels on outer ring */}
            <text x={HQ.x + 270} y={HQ.y - 268} fill="#b45309" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.65">~ 30 MIN</text>
            <text x={HQ.x + 190} y={HQ.y - 188} fill="#b45309" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.7">~ 20 MIN</text>
            <text x={HQ.x + 110} y={HQ.y - 108} fill="#b45309" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.75">~ 10</text>

            {/* Connector lines from cities to HQ */}
            {cities.map((c) => (
              <line
                key={`line-${c.slug}`}
                x1={HQ.x}
                y1={HQ.y}
                x2={c.x}
                y2={c.y}
                stroke="#94a3b8"
                strokeWidth="0.6"
                opacity="0.4"
                strokeDasharray="2 4"
              />
            ))}

            {/* HQ glow */}
            <circle cx={HQ.x} cy={HQ.y} r={70} fill="url(#hq-glow)" />
            {/* Three pulse rings — staggered */}
            <circle cx={HQ.x} cy={HQ.y} r={14} fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0">
              <animate attributeName="r" from="14" to="55" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={HQ.x} cy={HQ.y} r={14} fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0">
              <animate attributeName="r" from="14" to="55" dur="3s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx={HQ.x} cy={HQ.y} r={14} fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0">
              <animate attributeName="r" from="14" to="55" dur="3s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>
            {/* HQ solid dot */}
            <circle cx={HQ.x} cy={HQ.y} r={12} fill="#f59e0b" />
            <circle cx={HQ.x} cy={HQ.y} r={4.5} fill="#fff" />
            {/* HQ label */}
            <text x={HQ.x} y={HQ.y + 38} fill="#0f172a" fontSize="18" fontWeight="800" textAnchor="middle" letterSpacing="-0.5">Newmarket</text>
            <text x={HQ.x} y={HQ.y + 56} fill="#b45309" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="3">HEADQUARTERS</text>

            {/* Other cities */}
            {cities.map((c) => (
              <g key={c.slug}>
                <circle cx={c.x} cy={c.y} r={14} fill="#f59e0b" opacity="0.1" />
                <circle cx={c.x} cy={c.y} r={6} fill="#f59e0b" />
                <circle cx={c.x} cy={c.y} r={2.5} fill="#fff" />
                <text
                  x={c.labelAnchor === 'start' ? c.x + 12 : c.labelAnchor === 'end' ? c.x - 12 : c.x}
                  y={c.y + c.labelDy}
                  fill="#0f172a"
                  fontSize="13"
                  fontWeight="600"
                  textAnchor={c.labelAnchor}
                >
                  {c.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Legend / quick links beneath the map */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-60" />
                <span className="relative rounded-full w-3 h-3 bg-amber-500" />
              </span>
              <span className="text-gray-800 font-semibold">Newmarket headquarters</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-gray-600">11 cities served regularly</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-px w-6 border-t border-dashed border-amber-500/60" />
              <span className="text-gray-600">~30-minute drive radius</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-amber-600 hover:text-amber-700 font-bold text-sm transition-colors inline-flex items-center gap-2"
          >
            Not on the map? Call anyway
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
