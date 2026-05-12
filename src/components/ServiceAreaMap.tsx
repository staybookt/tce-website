import Link from 'next/link';

interface CityMark {
  slug: string;
  name: string;
  x: number;
  y: number;
  /** label anchor side relative to the dot */
  labelAnchor: 'start' | 'middle' | 'end';
  /** label offset y from dot center */
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
    <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
      {/* Ambient amber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/[0.06] rounded-full blur-3xl pointer-events-none" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-amber-400" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Service area · 30-min radius</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">
            One yard.{' '}
            <span className="gradient-text">Twelve cities.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mt-5">
            Tim works out of Newmarket. Most jobs across York Region and Simcoe County land within a 30-minute drive of the van. Same-day quotes everywhere on this map.
          </p>
        </div>

        <div className="relative w-full aspect-[10/7] rounded-2xl bg-gray-900/40 border border-white/5 overflow-hidden">
          <svg
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-label="Service area map — Newmarket headquarters with 11 surrounding cities across York Region and Simcoe County"
          >
            <defs>
              <radialGradient id="hq-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ring-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Concentric drive-time rings */}
            <circle cx={HQ.x} cy={HQ.y} r={260} fill="none" stroke="url(#ring-stroke)" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
            <circle cx={HQ.x} cy={HQ.y} r={180} fill="none" stroke="url(#ring-stroke)" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />
            <circle cx={HQ.x} cy={HQ.y} r={100} fill="none" stroke="url(#ring-stroke)" strokeWidth="1" strokeDasharray="4 6" opacity="0.8" />

            {/* Drive-time labels on outer ring */}
            <text x={HQ.x + 270} y={HQ.y - 270} fill="#fbbf24" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.6">~ 30 MIN</text>
            <text x={HQ.x + 190} y={HQ.y - 190} fill="#fbbf24" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.6">~ 20 MIN</text>
            <text x={HQ.x + 110} y={HQ.y - 110} fill="#fbbf24" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.7">~ 10</text>

            {/* Connector lines from cities to HQ */}
            {cities.map((c) => (
              <line
                key={`line-${c.slug}`}
                x1={HQ.x}
                y1={HQ.y}
                x2={c.x}
                y2={c.y}
                stroke="#fbbf24"
                strokeWidth="0.5"
                opacity="0.2"
                strokeDasharray="2 4"
              />
            ))}

            {/* HQ glow + pulse */}
            <circle cx={HQ.x} cy={HQ.y} r={60} fill="url(#hq-glow)" />
            {/* Three pulse rings — staggered */}
            <circle cx={HQ.x} cy={HQ.y} r={14} fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0">
              <animate attributeName="r" from="14" to="50" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={HQ.x} cy={HQ.y} r={14} fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0">
              <animate attributeName="r" from="14" to="50" dur="3s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx={HQ.x} cy={HQ.y} r={14} fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0">
              <animate attributeName="r" from="14" to="50" dur="3s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>
            {/* HQ solid dot */}
            <circle cx={HQ.x} cy={HQ.y} r={12} fill="#fbbf24" />
            <circle cx={HQ.x} cy={HQ.y} r={5} fill="#111827" />
            {/* HQ label */}
            <text x={HQ.x} y={HQ.y + 38} fill="#fff" fontSize="18" fontWeight="800" textAnchor="middle" letterSpacing="-0.5">Newmarket</text>
            <text x={HQ.x} y={HQ.y + 56} fill="#fbbf24" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="3">HQ · TIM'S YARD</text>

            {/* Other cities */}
            {cities.map((c) => (
              <g key={c.slug}>
                {/* Tiny halo */}
                <circle cx={c.x} cy={c.y} r={14} fill="#fbbf24" opacity="0.08" />
                {/* Dot */}
                <circle cx={c.x} cy={c.y} r={6} fill="#fbbf24" />
                <circle cx={c.x} cy={c.y} r={2.5} fill="#111827" />
                {/* Label */}
                <text
                  x={c.labelAnchor === 'start' ? c.x + 12 : c.labelAnchor === 'end' ? c.x - 12 : c.x}
                  y={c.y + c.labelDy}
                  fill="#fff"
                  fontSize="13"
                  fontWeight="600"
                  textAnchor={c.labelAnchor}
                  opacity="0.92"
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
                <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-50" />
                <span className="relative rounded-full w-3 h-3 bg-amber-400" />
              </span>
              <span className="text-white/80 font-semibold">Newmarket HQ</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-white/60">11 cities, regular routes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-px w-6 border-t border-dashed border-amber-400/50" />
              <span className="text-white/60">~30-min drive radius</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors inline-flex items-center gap-2"
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
