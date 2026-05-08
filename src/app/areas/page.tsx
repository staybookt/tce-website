import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: 'Service Areas | Electrician in York Region & Simcoe County',
  description: `${client.name} serves Newmarket, Aurora, Richmond Hill, Markham, Vaughan, and all of York Region. Licensed electrician, same-day service available.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca/areas',
  },
};

export default function AreasPage() {
  return (
    <>
      {/* Hero — immersive */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Where We Work</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Proudly Serving{' '}
              <span className="gradient-text">York Region</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              We serve homeowners and businesses across York Region and into Simcoe County. If you're not sure whether we cover your area, give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {client.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group block bg-white rounded-2xl p-8 premium-card relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 group-hover:via-gold/60 transition-all duration-500" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy/10 to-navy/5 group-hover:from-gold/20 group-hover:to-gold/10 flex items-center justify-center transition-all duration-500">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-navy transition-colors">{area.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{area.region}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                  Licensed electrician serving {area.name}. Residential and commercial electrical services with same-day availability.
                </p>
                <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                  <span>View Details</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Not sure if we cover your area?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Give us a call. If we can get there, we will.
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
