import { client } from '@/data/client';

export default function FounderStory() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="relative animate-on-scroll slide-left">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
                alt="Electrician at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
            </div>
            {/* Floating credential card */}
            <div className="absolute -bottom-6 -right-6 md:right-[-40px] bg-navy-dark rounded-2xl p-6 shadow-2xl shadow-navy-dark/30 border border-white/[0.08] max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">ESA Licensed</p>
                  <p className="text-white/40 text-xs">{client.licenseNumber}</p>
                </div>
              </div>
              <div className="h-px bg-white/[0.08] my-3" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{client.yearsInBusiness}+ Years</p>
                  <p className="text-white/40 text-xs">In York Region</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story side */}
          <div className="animate-on-scroll slide-right">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Meet the Owner</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.05] mb-8">
              Tim started with a van
              <br />
              <span className="gradient-text">and a handshake.</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p>
                {client.yearsInBusiness} years ago, Tim left a comfortable job at a large electrical contractor
                because he was tired of watching homeowners get overcharged for simple work. He bought a van,
                printed some cards, and started knocking on doors in Newmarket.
              </p>
              <p>
                The pitch was simple: show up when you say you will, charge what you quoted, and leave the place
                cleaner than you found it. Turns out that&apos;s a low bar in this industry, and word travels fast
                in a small community.
              </p>
              <p>
                Today, Top Choice runs a small crew out of York Region. Tim still does site visits on every
                job over $1,000 because he believes the person quoting the work should understand the work. No
                salespeople, no call centers, no subcontractors you&apos;ve never met showing up at your door.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">T</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Tim</p>
                <p className="text-gray-500 text-sm">Owner & Master Electrician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
