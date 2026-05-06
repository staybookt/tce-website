import Link from 'next/link';
import { client } from '@/data/client';

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <source src="https://videos.pexels.com/video-files/8853517/8853517-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/65 to-navy-dark/90" />
        <div className="absolute inset-0 grain" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 w-full">
        <div className="max-w-4xl" style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full px-5 py-2.5 mb-10">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Serving York Region &amp; Simcoe County
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-[0.9] mb-8 tracking-[-0.04em]">
            Your Local
            <br />
            Electrician.
            <br />
            <span className="gradient-text">Not a Call Centre.</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
            You call, Tim answers. Licensed, insured, and doing electrical work across York Region for {client.yearsInBusiness}+ years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${client.phone}`}
              className="btn-premium bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-base px-10 py-4 rounded-xl transition-all duration-300 text-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02]"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="glass hover:bg-white/10 text-white font-semibold text-base px-10 py-4 rounded-xl transition-all duration-300 text-center hover:scale-[1.02]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into TrustBar */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: 'fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1) 1s both' }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/40 rounded-full" style={{ animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
