import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import QuoteForm from '@/components/QuoteForm';
import { client } from '@/data/client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TrustBar />

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Electrical Services for{' '}
              <span className="gradient-text">Homes &amp; Businesses</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              From a single outlet to a full rewire, we handle residential and light commercial
              electrical work across York Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {client.services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Apple-style numbered steps */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Three steps to{' '}
              <span className="gradient-text">getting it done.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 stagger-children">
            {[
              {
                step: '01',
                title: 'Call or Request a Quote',
                desc: 'Tell us what you need. We ask a few questions to understand the scope and give you an honest answer on what it will take.',
              },
              {
                step: '02',
                title: 'On-Site Assessment & Quote',
                desc: 'We come to you, look at the job, and give you a clear written quote. No surprises, no pressure. You decide if you want to move forward.',
              },
              {
                step: '03',
                title: 'Work Done Right',
                desc: 'We show up on time, do the work to code, clean up when we\'re done, and handle the ESA inspection. You get a safe, finished job.',
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="text-7xl md:text-8xl font-black text-navy/[0.04] leading-none mb-4 select-none">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 -mt-8 relative">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 -right-6 w-12">
                    <svg viewBox="0 0 48 24" className="w-full text-gold/30" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M0 12h40m-8-8l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Break - Full bleed */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
          alt="Electrical work in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full animate-on-scroll slide-left">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">Quality Workmanship</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg mb-4 tracking-tight text-shadow-heavy">
              Every connection matters.
            </h2>
            <p className="text-white/60 max-w-md text-lg">
              ESA licensed. Every permit pulled. Every circuit tested. No shortcuts.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stripe style */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Why Top Choice</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                We treat your home{' '}
                <span className="gradient-text">like it's ours.</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'ESA Licensed & Inspected',
                    desc: 'Every job meets or exceeds the Ontario Electrical Safety Code. We pull permits, pass inspections, and stand behind the work.',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Clean Jobsite, Every Time',
                    desc: 'Drop cloths down, debris cleaned up, and your home looks better when we leave. We take this seriously.',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Straight Talk on Pricing',
                    desc: 'No surprise charges. We quote upfront and stick to it. If something changes, you hear about it first.',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: '24/7 Emergency Response',
                    desc: 'Electrical problems don\'t wait for business hours. Neither do we. Same-day service across York Region.',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote form - elevated card */}
            <div className="animate-on-scroll slide-right">
              <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
                <p className="text-gray-400 mb-8">We respond within 2 hours during business hours.</p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - dark section */}
      <section className="py-24 md:py-32 bg-navy-dark relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Trusted by Homeowners{' '}
              <span className="gradient-text">Across York Region</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {client.reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Break 2 - Interior shot */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
          alt="Modern home interior with professional lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 w-full pb-16 animate-on-scroll">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">Modern Living</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg tracking-tight text-shadow-heavy">
              From pot lights to full rewires, we make homes shine.
            </h2>
          </div>
        </div>
      </section>

      {/* Service Areas - Clean, Stripe-inspired */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Where We Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Proudly Serving{' '}
              <span className="gradient-text">York Region</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12 stagger-children">
            {client.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-gray-50 hover:bg-navy text-gray-700 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-200 hover:border-navy hover:shadow-lg hover:shadow-navy/20"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our promise to you.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            If you're not happy with the work, we come back and make it right at no extra charge. Every job is ESA inspected, every quote is honoured, and every jobsite is left clean. That's not a policy. It's how we've kept customers coming back for {client.yearsInBusiness}+ years.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: 'Written Quote', desc: 'Before any work starts' },
              { label: 'ESA Inspected', desc: 'Every job, every time' },
              { label: 'Satisfaction Guaranteed', desc: 'We make it right' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gold font-bold text-sm uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
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
            Ready to get started?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Whether it's a small repair or a major project, we're here to help.
            Call us directly or request a free, no-obligation quote.
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
