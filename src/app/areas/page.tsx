import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: 'Service Areas | Electrician in York Region & Simcoe County',
  description: `${client.name} serves Newmarket, Aurora, Richmond Hill, Markham, Vaughan, and all of York Region. Licensed electrician, same-day service available.`,
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Where We Work</p>
          <h1 className="text-4xl font-bold text-white mb-4">Service Areas</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            We serve homeowners and businesses across York Region and into Simcoe County.
            If you're not sure whether we cover your area, give us a call.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {client.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-navy">{area.name}</h3>
                    <p className="text-xs text-gray-500">{area.region}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Licensed electrician serving {area.name}. Residential and commercial electrical services with same-day availability.
                </p>
                <span className="inline-block mt-3 text-gold font-medium text-sm group-hover:underline">
                  View Details &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
