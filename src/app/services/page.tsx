import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { client } from '@/data/client';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electrical Services in Newmarket & York Region',
  description: `${client.name} offers a full range of residential and commercial electrical services in York Region. Panel upgrades, EV chargers, landscape lighting, wiring, and more. ESA licensed.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero — immersive */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Electrical Services for{' '}
              <span className="gradient-text">Every Need</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Residential or commercial, big job or small fix. ESA licensed and fully insured to handle everything from a single outlet to a complete rewire.
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
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
          alt="Electrical installation work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full animate-on-scroll slide-left">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">Custom Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg mb-4 tracking-tight text-shadow-heavy">
              Don't see what you need?
            </h2>
            <p className="text-white/60 max-w-md text-lg">
              We handle a wide range of electrical work beyond what's listed. If it involves wires, we can probably help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Tell us what you need.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Give us a call and describe what you're dealing with. Free quote, no obligation.
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
              className="btn-premium bg-gold hover:bg-gold-dark text-navy-dark font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}