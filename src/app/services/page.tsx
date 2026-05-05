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
      {/* Hero */}
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h1 className="text-4xl font-bold text-white mb-4">Electrical Services for Every Need</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Residential or commercial, big job or small fix. We're ESA licensed and fully insured
            to handle everything from a single outlet to a complete rewire.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {client.services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see what you need?</h2>
          <p className="text-gray-600 mb-6">
            We handle a wide range of electrical work beyond what's listed here.
            Give us a call and describe what you need. If it involves wires, we can probably help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${client.phone}`} className="bg-navy hover:bg-navy-dark text-white font-bold px-8 py-3 rounded transition-colors">
              Call {client.phone}
            </a>
            <Link href="/contact" className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
