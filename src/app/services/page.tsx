import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/data/client';
import { featuredServiceSlugs } from '@/data/service-categories';
import ServicesExplorer from '@/components/ServicesExplorer';
import SectionCTA from '@/components/SectionCTA';

export const metadata: Metadata = {
  title: 'Electrical Services | Newmarket & York Region',
  description: 'Panel upgrades, EV chargers, landscape lighting, full rewires, knob-and-tube removal, generators, smart home installs, ESA inspections. 18 services across York Region. Same-day quotes.',
  alternates: { canonical: 'https://www.topchoiceelectrical.ca/services' },
  openGraph: {
    title: 'Electrical Services | Newmarket & York Region',
    description: '18 electrical services, ESA-licensed, fully insured, same-day quotes across York Region.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Top Choice Electrical Services' }],
  },
};

export default function ServicesPage() {
  const findService = (slug: string) => client.services.find((s) => s.slug === slug);

  const featuredServices = featuredServiceSlugs
    .map((slug) => findService(slug))
    .filter(Boolean) as typeof client.services;

  return (
    <>
      {/* === Hero === */}
      <section className="relative min-h-[44vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Top Choice Electrical work in York Region"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-14 pt-32">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              18 electrical services.{' '}
              <span className="gradient-text">One number to call.</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Residential or commercial, single outlet or full rewire. ESA-permitted, inspected, passed first visit. Same-day quotes across York Region.
            </p>
          </div>
        </div>
      </section>

      {/* === Jump nav — sticky scroll anchors === */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav aria-label="Quick links" className="flex gap-1 overflow-x-auto py-3 -mx-1 px-1">
            <a href="#featured" className="flex-shrink-0 text-xs md:text-sm font-semibold text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
              Most requested
            </a>
            <a href="#explorer" className="flex-shrink-0 text-xs md:text-sm font-semibold text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
              Browse all 18 services
            </a>
            <Link
              href="/emergency-electrician"
              className="flex-shrink-0 text-xs md:text-sm font-bold text-red-600 hover:bg-red-50 px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap ml-auto"
            >
              Emergency →
            </Link>
          </nav>
        </div>
      </div>

      {/* === Featured row — three high-intent cards === */}
      <section id="featured" className="py-16 md:py-20 bg-gray-50 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Most Requested</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Start here if you&apos;re not sure where to look.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Featured service cards from the data array */}
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[320px] bg-gray-900"
              >
                <Image
                  src={s.image || '/images/work/IMG_3258.webp'}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
                <div className="relative h-full flex flex-col justify-end p-7 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{s.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{s.shortDescription}</p>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <span>See details</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Emergency card — third slot, special treatment */}
            <Link
              href="/emergency-electrician"
              className="group block relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[320px] bg-red-950"
            >
              <Image
                src="/images/work/IMG_3258.webp"
                alt="Emergency electrical service"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/80 to-red-900/40" />
              <div className="relative h-full flex flex-col justify-end p-7 md:p-8">
                <div className="inline-flex items-center gap-2 bg-red-500/[0.15] backdrop-blur-md border border-red-400/30 rounded-full px-3 py-1 mb-4 w-fit">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-red-100 text-xs font-semibold tracking-wide uppercase">24/7 · Tim picks up</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">Emergency Electrician</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">Sparks, burning smell, panel won&apos;t reset. Same-day across York Region.</p>
                <div className="flex items-center gap-2 text-red-300 font-semibold text-sm">
                  <span>Get help now</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* === Filterable services explorer === */}
      <div id="explorer" className="scroll-mt-20">
        <ServicesExplorer />
      </div>

      {/* === Single closing CTA (left-justified, unified across the site) === */}
      <SectionCTA
        eyebrow="Don't see your job?"
        headline="If it involves wires, the answer is probably yes."
        body="Call and describe the job — same-day quote, no obligation. Tim will tell you straight whether it's in our wheelhouse."
        image="/images/work/IMG_5375.webp"
        imageAlt="Tim Ciszkowski of Top Choice Electrical, hands on residential panel work in York Region"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Get a quote online', href: '/contact' }}
      />
    </>
  );
}
