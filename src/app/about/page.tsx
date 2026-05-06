import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: 'About Us | Meet the Team Behind Top Choice Electrical',
  description: `${client.name} provides licensed electrical services across York Region with over ${client.yearsExperience} years of experience. ESA licensed, fully insured, and committed to quality work.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — immersive photo */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              The People Behind{' '}
              <span className="gradient-text">the Work</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              A local electrical company that takes quality seriously. No corporate overhead, no upselling. Just good work, fair prices, and people who care about doing the job right.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                {client.yearsExperience}+ years of{' '}
                <span className="gradient-text">doing it right.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[17px]">
                <p>
                  {client.name} started the way most good trade businesses start: one person who was good at the work and cared about doing it right. With {client.yearsExperience}+ years of experience behind him, Tim built a team that serves homeowners and businesses across York Region and Simcoe County.
                </p>
                <p>
                  We're not a franchise. We're not a call center that dispatches random contractors. When you call us, you're talking to the people who actually do the work. We know the homes in this area because we've been working on them for years.
                </p>
                <p>
                  Most of our business comes from repeat customers and word of mouth. That's not an accident. It's the result of showing up on time, charging fair prices, doing clean work, and treating every home like it matters.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div className="animate-on-scroll slide-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: `${client.yearsExperience}+`, label: 'Years Experience', icon: '🔧' },
                  { number: '24/7', label: 'Emergency Response', icon: '⚡' },
                  { number: '100%', label: 'ESA Compliant Jobs', icon: '✓' },
                  { number: '5★', label: 'Customer Reviews', icon: '★' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center premium-card">
                    <p className="text-4xl md:text-5xl font-bold gradient-text mb-2 stat-number">{stat.number}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80"
          alt="Electrical work in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full animate-on-scroll slide-left">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg mb-4 tracking-tight text-shadow-heavy">
              We know the codes. We know the inspectors.
            </h2>
            <p className="text-white/50 max-w-md text-lg">
              We know what it takes to get a job done right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Values — premium cards */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Built on{' '}
              <span className="gradient-text">the basics.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              {
                title: 'Quality Over Speed',
                desc: 'Every connection tight, every wire secured, every circuit tested before we leave.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Honest Pricing',
                desc: 'Clear price before we start. If something changes mid-job, you hear about it first.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Clean Jobsite',
                desc: 'Drop cloths down, debris cleaned up. Your home looks the same or better when we leave.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: 'Respect Your Time',
                desc: 'We give you a window and stick to it. If we\'re running late, you know before the appointment.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 premium-card relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy/10 to-navy/5 group-hover:from-gold/20 group-hover:to-gold/10 flex items-center justify-center mb-6 transition-all duration-500 text-navy group-hover:text-gold">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials — dark section */}
      <section className="py-24 md:py-32 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Credentials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Licensed. Insured.{' '}
              <span className="gradient-text">Proven.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              { label: 'ESA Licensed', value: client.licenseNumber, sub: client.licenseBody },
              { label: 'Fully Insured', value: 'General Liability', sub: "Workers' compensation coverage" },
              { label: 'Bonded', value: 'Property Protection', sub: 'Additional security for your home' },
              { label: 'Experience', value: `${client.yearsExperience}+ Years`, sub: 'Serving York Region & Simcoe County' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-2">{item.label}</p>
                <p className="text-white font-bold text-lg mb-1">{item.value}</p>
                <p className="text-white/60 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — immersive */}
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
            Ready to work with us?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Whether it's a small repair or a full rewire, we're here. Call us or fill out our form for a free, no-obligation quote.
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
