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

      {/* ═══ Services — Bento Grid ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-14 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.05]">
              Every electrical service
              <br />
              <span className="gradient-text">your home needs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            <ServiceCard key={client.services[0].slug} {...client.services[0]} featured />
            {client.services.slice(1).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Stats Counter — Full-width, Apple numbers ═══ */}
      <section className="py-20 md:py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 animate-on-scroll">
            {[
              { number: `${client.yearsInBusiness}+`, label: 'Years in Business', sublabel: 'Serving York Region' },
              { number: '5.0', label: 'Google Rating', sublabel: 'From Verified Reviews' },
              { number: '24/7', label: 'Always Available', sublabel: 'Emergency Response' },
              { number: '100%', label: 'ESA Compliant', sublabel: 'Every Single Job' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ticker-number mb-2">{stat.number}</p>
                <p className="text-white/70 font-semibold text-sm tracking-tight">{stat.label}</p>
                <p className="text-white/50 text-xs mt-1">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How It Works — Horizontal timeline ═══ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-[-0.03em]">
              Three steps. <span className="gradient-text">That's it.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-0 relative stagger-children">
            {/* Connecting line behind steps */}
            <div className="hidden md:block absolute top-[48px] left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40" />

            {[
              {
                step: '01',
                title: 'Call or Request a Quote',
                desc: 'Tell us what you need. We ask a few questions to understand the scope and give you an honest answer on what it will take.',
              },
              {
                step: '02',
                title: 'On-Site Assessment & Quote',
                desc: 'We come to you, look at the job, and give you a clear written quote. No surprises, no pressure. You decide.',
              },
              {
                step: '03',
                title: 'Work Done Right',
                desc: 'We show up on time, do the work to code, clean up, and handle the ESA inspection. You get a safe, finished job.',
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center px-4 md:px-8">
                {/* Step circle */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mx-auto mb-8 relative z-10">
                  <span className="text-2xl md:text-3xl font-bold text-gold tracking-tight">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Photo Break — Asymmetric hero with overlapping card ═══ */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
          alt="Electrical work in progress"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-navy-dark/30" />
        <div className="absolute inset-0 grain" />

        <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 flex items-center min-h-[70vh]">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="animate-on-scroll slide-left">
              <p className="text-gold text-sm uppercase tracking-[0.25em] font-semibold mb-6">Quality Workmanship</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6">
                Every connection
                <br />
                <span className="text-white/50">matters.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                ESA licensed. Every permit pulled. Every circuit tested. No shortcuts, no compromises, no exceptions.
              </p>
            </div>

            {/* Floating stat card */}
            <div className="hidden lg:block animate-on-scroll slide-right">
              <div className="rounded-3xl p-10 max-w-sm ml-auto bg-white/[0.12] backdrop-blur-2xl border border-white/[0.18] shadow-2xl shadow-black/20">
                <div className="space-y-4">
                  {[
                    { label: 'ESA Licensed', value: client.licenseNumber },
                    { label: 'Years Active', value: `${client.yearsInBusiness}+` },
                    { label: 'Coverage', value: 'All York Region' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/[0.12] last:border-0">
                      <span className="text-white/70 text-sm font-medium">{item.label}</span>
                      <span className="text-white font-bold text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Why Choose Us — Bold layout ═══ */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section header — centered */}
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Why Top Choice</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.05]">
              We treat your home
              <br />
              <span className="gradient-text">like it&apos;s ours.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mt-6 leading-relaxed">
              Upfront pricing. Clean jobsites. Licensed, inspected, guaranteed. The bar should be higher in this industry, and we set it.
            </p>
          </div>

          {/* Feature cards — 4 column grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 stagger-children">
            {[
              {
                title: 'ESA Licensed',
                desc: 'Every job meets or exceeds the Ontario Electrical Safety Code. Permits pulled, inspections passed.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Clean Jobsite',
                desc: 'Drop cloths down, debris cleaned up, and your home looks better when we leave. Every time.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: 'Upfront Pricing',
                desc: 'No surprise charges. We quote upfront and stick to it. If something changes, you hear about it first.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: '24/7 Emergency',
                desc: 'Electrical problems don&apos;t wait for business hours. Neither do we. Same-day service across York Region.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-dark rounded-2xl p-8 border border-white/[0.06] hover:border-gold/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mb-6 text-gold group-hover:bg-gold/25 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote form — full width */}
          <div className="bg-white rounded-3xl shadow-xl shadow-navy/[0.08] p-8 md:p-12 border border-gray-200 animate-on-scroll">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Get a Free Quote</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Tell us about your project and we&apos;ll get back to you within 2 hours during business hours. No obligation, no pressure.
                </p>
                <div className="space-y-4">
                  {[
                    'Free on-site assessment for larger jobs',
                    'Written quote before any work starts',
                    'No hidden fees or surprise charges',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Reviews — Dark section ═══ */}
      <section className="py-24 md:py-32 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-on-scroll">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Testimonials</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em]">
                Trusted by
                <br />
                <span className="text-white/50">homeowners.</span>
              </h2>
            </div>
            <Link href="/reviews" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors shrink-0">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {client.reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Photo Break 2 — Interior, bottom-aligned text ═══ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
          alt="Modern home interior with professional lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 w-full pb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-lg tracking-[-0.02em] leading-[1.1] text-shadow-heavy">
              From pot lights to full rewires, we make homes shine.
            </h2>
          </div>
        </div>
      </section>

      {/* ═══ Service Areas ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Where We Work</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-[-0.03em]">
              Proudly serving
              <br />
              <span className="gradient-text">York Region.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto mb-14">
              Licensed electrical service for every community in the region. Local crew, fast response.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 stagger-children">
            {client.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-gray-50 hover:bg-navy-dark text-gray-600 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 border border-gray-100 hover:border-navy-dark hover:shadow-lg hover:shadow-navy-dark/10 hover:scale-[1.03]"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Our Promise ═══ */}
      <section className="py-24 md:py-32 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 text-center relative animate-on-scroll">
          <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-10">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-[-0.03em]">
            Our promise to you.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            If you&apos;re not happy with the work, we come back and make it right at no extra charge. Every job is ESA inspected, every quote is honoured, and every jobsite is left clean. That&apos;s not a policy. It&apos;s how we&apos;ve kept customers coming back for {client.yearsInBusiness}+ years.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 stagger-children">
            {[
              { label: 'Written Quote', desc: 'Before any work starts' },
              { label: 'ESA Inspected', desc: 'Every job, every time' },
              { label: 'Satisfaction Guaranteed', desc: 'We make it right' },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-8 hover:bg-white/[0.1] transition-all duration-500">
                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/92" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-[-0.03em] leading-[0.95]">
            Ready to
            <br />
            get started?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
            Whether it&apos;s a small repair or a major project, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="glass hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:scale-[1.02]"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="btn-premium bg-gold hover:bg-gold-dark text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 shadow-lg shadow-gold/20 hover:scale-[1.02]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
