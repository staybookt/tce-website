import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Illuminated suburban home at dusk — the outcome of clean residential electrical work in York Region"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover scale-105"
          style={{ animation: 'fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/55 to-navy-dark/90" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-40 w-full">
        <div className="max-w-4xl" style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full px-5 py-2.5 mb-10">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Newmarket, ON &middot; Serving York Region &amp; Simcoe County
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-[0.9] mb-8 tracking-[-0.04em]">
            Electrical work
            <br />
            done right.
            <br />
            <span className="gradient-text">York Region &amp; Simcoe County.</span>
          </h1>

          <div className="mb-12 max-w-2xl space-y-3">
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              Panel upgrades, EV chargers, emergency repairs, full rewires.
            </p>
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              Same-day quotes across York Region and Simcoe County.
            </p>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              ESA-certified, fully insured ($5M), {client.yearsExperience} years on the tools,{' '}
              {client.yearsInBusiness}{' '}
              on his own &mdash; every permit pulled, every inspection passed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${client.phone}`}
              className="btn-premium bg-amber-500 hover:bg-amber-400 ring-1 ring-amber-700/50 text-gray-900 font-bold text-base px-6 sm:px-10 py-4 rounded-xl transition-all duration-300 text-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02]"
            >
              Call Tim &mdash; {client.phone}
            </a>
            <Link
              href="/contact"
              className="glass hover:bg-white/10 text-white font-semibold text-base px-6 sm:px-10 py-4 rounded-xl transition-all duration-300 text-center hover:scale-[1.02]"
            >
              Request a quote online
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: 'fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1) 1s both' }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/40 rounded-full" style={{ animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
