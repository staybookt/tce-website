import type { Metadata } from 'next';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import { client } from '@/data/client';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electrical Services | Newmarket & York Region',
  description: `Full range of residential and commercial electrical services in York Region. Panel upgrades, EV chargers, landscape lighting, wiring & more. ESA licensed.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca/services',
  },
  openGraph: {
    title: 'Electrical Services | Newmarket & York Region',
    description: `Residential and commercial electrical services in York Region. Panel upgrades, EV chargers, lighting & more. ESA licensed.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Top Choice Electrical Services' }],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero — immersive */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Top Choice Electrical panel work in York Region"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Electrical services for{' '}
              <span className="gradient-text">York Region.</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Residential or commercial, single outlet or full rewire. 18 trades covered, ESA-permitted, inspected. Same-day quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {client.services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/work/IMG_2638.webp"
          alt="Commercial electrical work in York Region by Top Choice Electrical"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full animate-on-scroll slide-left">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">Custom Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg mb-4 tracking-tight text-shadow-heavy">
              Don't see what you need?
            </h2>
            <p className="text-white/60 max-w-md text-lg">
              If it involves wires, the answer is probably yes. Call and describe the job &mdash; we&apos;ll tell you straight whether it&apos;s in our wheelhouse.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
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
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
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
