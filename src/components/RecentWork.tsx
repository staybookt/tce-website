'use client';

import Image from 'next/image';
import { useRef } from 'react';

// Recent Work carousel — 4 of 6 cards now use Richard reference images. Newmarket Panel and
// Aurora EV stay on Tim's existing photos (real local jobs).

const recentJobs = [
  {
    area: 'Newmarket',
    service: 'Panel Upgrade',
    detail: "Owner had been refused renewal until the 60A fuse panel was gone. Quoted Wednesday, swapped Tuesday — full 200A Square D, every circuit labelled, ESA-inspected and passed first visit. Paperwork delivered, policy renewed by Friday.",
    image: '/images/work/IMG_3258.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    area: 'Aurora',
    service: 'EV Charger',
    detail: "Family bought their first EV and wanted home charging in the detached garage. Tim ran a dedicated 40A circuit 60ft from the main panel, fished underground through the trench, mounted the Tesla Wall Connector. Half-day job, weatherproofed end-to-end, ESA-permitted.",
    image: 'https://images.pexels.com/photos/9799734/pexels-photo-9799734.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5z" />
      </svg>
    ),
  },
  {
    area: 'King City',
    service: 'Landscape Lighting',
    detail: "14-fixture estate package in King City. Pathway lighting up the drive, uplighting on three mature oaks, accent wash on the stone retaining wall. Direct-burial cable to code depth, smart controller wired to the homeowner's phone. Walked the property at dusk to dial in every aim.",
    // Richard reference: wide estate-at-dusk
    image: '/images/richard-landscape-2.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
  },
  {
    area: 'Richmond Hill',
    service: 'Pot Lights',
    detail: '12 LED pot lights across the main floor open concept. Replaced 6 old fluorescent fixtures. Matched dimmer to LED driver — zero flicker, full-range dim. Drywall touch-up handled by the homeowner; cuts were clean enough that a single coat covered it.',
    // Richard round 2: open-concept living room with 4 illuminated recessed pots — matches the copy directly
    image: '/images/richard-pot-lights.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    area: 'East Gwillimbury',
    service: 'Knob & Tube',
    detail: "Three other electricians had quoted gutting walls. Tim worked the 1920s farmhouse room by room over three days, fishing new NMD-90 through the existing plaster cavities. Plaster stayed up. ESA-permitted, paperwork to the insurer the same week.",
    // Richard reference: actual K&T wiring in stud cavity
    image: '/images/richard-knob-and-tube.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    area: 'Stouffville',
    service: 'Generator',
    detail: 'Generac 22kW whole-home standby with automatic transfer switch. Customer lost power 4 times last winter. Quoted, permitted, gas line coordinated with the plumber, installed and commissioned in two days. Tested with a simulated outage before we left.',
    // Richard reference: Generac Guardian Series on brick pad
    image: '/images/richard-generator-primary.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
      </svg>
    ),
  },
];

export default function RecentWork() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('article')?.clientWidth ?? 380;
    const gap = 16;
    el.scrollBy({ left: direction === 'next' ? cardWidth + gap : -(cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section className="section-warm py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-xl">
            <div className="accent-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              The work, across York Region.
            </h2>
            <p className="text-gray-500 text-lg mt-5">
              Panel upgrades, EV chargers, generators, full rewires. Common projects across York Region and Simcoe County.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button type="button" onClick={() => scrollBy('prev')} aria-label="Previous recent job" className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-amber-500 hover:bg-amber-50 transition-colors flex items-center justify-center text-gray-700 hover:text-amber-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button type="button" onClick={() => scrollBy('next')} aria-label="Next recent job" className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-amber-500 hover:bg-amber-50 transition-colors flex items-center justify-center text-gray-700 hover:text-amber-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4">
          <div ref={scrollerRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2" style={{ scrollbarWidth: 'none' }}>
            {recentJobs.map((job, i) => (
              <article key={i} className="flex-shrink-0 snap-start w-[85%] sm:w-[60%] md:w-[42%] lg:w-[31%] bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                {job.image && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={job.image} alt={`${job.service} in ${job.area} by Top Choice Electrical`} fill sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 31vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">{job.icon}</div>
                      <span className="text-sm font-bold text-gray-900 font-display">{job.service}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-[7rem]">{job.detail}</p>
                  <div className="flex items-center gap-1.5 pt-3 border-t border-gray-100">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <span className="text-xs font-medium text-gray-400">{job.area}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute top-0 right-0 bottom-6 w-12 bg-gradient-to-l from-[color:var(--warm-bg,#fafaf7)] to-transparent md:hidden" />
        </div>
        <p className="md:hidden mt-2 text-center text-gray-400 text-xs italic">Swipe to see more →</p>
      </div>
    </section>
  );
}
