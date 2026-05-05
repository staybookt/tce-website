import Link from 'next/link';
import { client } from '@/data/client';

export default function HeroBanner() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A843' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Serving York Region &amp; Simcoe County
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Electrical Work Done Right.{' '}
            <span className="text-gold">Every Time.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed">
            Licensed, insured, and trusted by homeowners across Newmarket, Aurora, and York Region
            for {client.yearsInBusiness}+ years. From panel upgrades to EV chargers, we handle it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-navy-dark font-bold text-lg px-8 py-4 rounded transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${client.phone}`}
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold text-lg px-8 py-4 rounded transition-colors text-center"
            >
              Call {client.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
