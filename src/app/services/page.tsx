import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { client } from '@/data/client';
import { serviceCategories, featuredServiceSlugs } from '@/data/service-categories';

export const metadata: Metadata = {
  title: 'Electrical Services | Newmarket & York Region',
  description: 'Panel upgrades, EV chargers, landscape lighting, full rewires, knob-and-tube removal, generators, smart home installs, ESA inspections. 18 services across York Region. Same-day quotes.',
  alternates: { canonical: 'https://www.topchoiceelectrical.ca/services' },
  openGraph: {
    title: 'Electrical Services | Newmarket & York Region',
    description: '18 trades covered, ESA-licensed, fully insured, same-day quotes across York Region.',
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
              18 trades covered.{' '}
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
          <nav aria-label="Service categories" className="flex gap-1 overflow-x-auto py-3 -mx-1 px-1">
            <a href="#featured" className="flex-shrink-0 text-xs md:text-sm font-semibold text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
              Most requested
            </a>
            {serviceCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="flex-shrink-0 text-xs md:text-sm font-semibold text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                {cat.title}
              </a>
            ))}
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

      {/* === Category sections === */}
      <div className="bg-white">
        {serviceCategories.map((cat, idx) => {
          const services = cat.services.map(findService).filter(Boolean) as typeof client.services;
          if (services.length === 0) return null;
          const isAlt = idx % 2 === 1; // alternate background tint for visual rhythm
          return (
            <section
              key={cat.slug}
              id={cat.slug}
              className={`py-16 md:py-20 scroll-mt-20 ${isAlt ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-2xl mb-10">
                  <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">{cat.eyebrow}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4">
                    {cat.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {services.map((service) => (
                    <ServiceCard key={service.slug} {...service} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* === Custom work photo break === */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/work/IMG_2638.webp"
          alt="Commercial electrical work in York Region by Top Choice Electrical"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">Custom Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-lg mb-4 tracking-tight">
              Don&apos;t see what you need?
            </h2>
            <p className="text-white/60 max-w-md text-base md:text-lg">
              If it involves wires, the answer is probably yes. Call and describe the job &mdash; we&apos;ll tell you straight whether it&apos;s in our wheelhouse.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5017.webp"
            alt="Top Choice Electrical residential wiring in York Region"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Tell us what you need.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Same-day quote. Across York Region and Simcoe County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="glass hover:bg-white/10 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="btn-premium bg-gold hover:bg-gold-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
