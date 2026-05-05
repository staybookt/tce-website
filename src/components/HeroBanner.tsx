import Link from 'next/link';
import { client } from '@/data/client';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-gradient" />
        {/* Grain texture */}
        <div className="absolute inset-0 grain" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 w-full">
        <div className="max-w-3xl" style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Serving York Region &amp; Simcoe County
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 text-shadow-heavy tracking-tight">
            Electrical Work{' '}
            <br className="hidden md:block" />
            Done Right.{' '}
            <span className="gradient-text">Every Time.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Licensed, insured, and trusted by homeowners across Newmarket, Aurora, and York Region
            for {client.yearsInBusiness}+ years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-premium bg-gold hover:bg-gold-dark text-navy-dark font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 text-center shadow-lg shadow-gold/20 hover:shadow-gold/40"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${client.phone}`}
              className="glass hover:bg-white/10 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 text-center"
            >
              Call {client.phone}
            </a>
          </div>
        </div>

        {/* Floating stats - Apple style */}
        <div
          className="hidden lg:flex absolute bottom-12 right-8 gap-6"
          style={{ animation: 'fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both' }}
        >
          {[
            { number: `${client.yearsInBusiness}+`, label: 'Years Experience' },
            { number: '24/7', label: 'Emergency Service' },
            { number: '100%', label: 'ESA Compliant' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl px-6 py-4 text-center min-w-[120px]">
              <p className="text-gold text-2xl font-bold stat-number">{stat.number}</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
