import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: 'About Tim | Top Choice Electrical',
  description: `Tim Ciszko runs Top Choice Electrical out of Newmarket. ${client.yearsExperience}+ years wiring York Region homes. ESA-certified, insured, bonded. Tim works the job himself.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca/about',
  },
  openGraph: {
    title: 'About Tim | Top Choice Electrical',
    description: `Tim Ciszko runs Top Choice Electrical out of Newmarket. ${client.yearsExperience}+ years wiring York Region homes. ESA-certified, insured, bonded.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Top Choice Electrical' }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Tim Ciszko of Top Choice Electrical working on a commercial three-phase panel"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">About Tim</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Owner-operator electrician.{' '}
              <span className="gradient-text">Newmarket.</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Tim Ciszko runs Top Choice with a small crew out of a van in Newmarket. The owner answers the phone, the owner shows up on the big jobs, and the work is referred. That&apos;s the whole story.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">How it started</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                A van, a license,{' '}
                <span className="gradient-text">and a phone that worked.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[17px]">
                <p>
                  Tim spent the first decade of his career at a larger electrical contractor. He watched homeowners get quoted one number and charged another. He watched corners get cut on circuits he&apos;d never run himself, because the company kept adding sales staff and call-centre overhead and the actual electricians on the ground had less and less say in how the work got done.
                </p>
                <p>
                  When Tim left, he bought a van and started knocking on doors in Newmarket. No franchise. No advertising. Just doing the job the way it should be done and trusting that word would travel in a small community. It did. Most of Top Choice&apos;s work today still comes from homeowners who heard about us from a neighbour.
                </p>
                <p>
                  Tim runs a small crew now &mdash; small enough that he&apos;s still on every site visit over $1,000, still pulls every permit himself, and still answers the phone when it rings. If you call this number, you&apos;re going to talk to him.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div className="animate-on-scroll slide-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: `${client.yearsExperience}+`, label: 'Years on the Tools' },
                  { number: '200+', label: 'Panels Wired in York Region' },
                  { number: '100%', label: 'ESA Inspections Passed' },
                  { number: '24/7', label: 'Emergency Response' },
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
        <Image
          src="/images/work/IMG_5017.webp"
          alt="Clean residential electrical panel installed by Top Choice Electrical, every breaker labelled by circuit"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full animate-on-scroll slide-left">
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">The work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg mb-4 tracking-tight text-shadow-heavy">
              Tim knows the housing stock by decade.
            </h2>
            <p className="text-white/50 max-w-md text-lg">
              The 1965 split-levels with the original 60-amp services. The late-70s builds with Federal Pacific panels. The 1920s farmhouses with knob-and-tube still in the attic. Tim doesn&apos;t have to guess what&apos;s behind the wall.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars — the real differentiation */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">What makes us different</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              What sets the{' '}
              <span className="gradient-text">work apart.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                title: 'Owner-operator',
                desc: 'The owner answers the phone, quotes the work, and is on site for every job over $1,000. The name on the truck, the licence, and the invoice is the same name.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                title: 'ESA-permitted, ESA-inspected',
                desc: 'Every job that needs a permit gets one. Every permit gets an inspection. The inspector signs off, and you get the paperwork &mdash; for your records, your insurer, or the next buyer if you ever sell.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
              },
              {
                title: 'Ontario code, every job',
                desc: `ESA-certified (license ${client.licenseNumber}). Every job that needs a permit gets a permit. Every permit gets an inspection. Tim knows the inspectors and gets the work passed on the first visit. No corners cut.`,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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
                <p className="text-gray-500 text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
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
              <span className="gradient-text">Bonded.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              { label: 'ESA Certified', value: client.licenseNumber, sub: client.licenseBody },
              { label: 'Fully Insured', value: 'General Liability', sub: 'Workers\' compensation coverage' },
              { label: 'Bonded', value: 'Property Protection', sub: 'Additional security on your job' },
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

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_2638.webp"
            alt="Top Choice Electrical commercial LED high-bay lighting retrofit in a warehouse"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Talk to Tim.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Same-day quote. Single outlet to full rewire &mdash; same number, same person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="glass hover:bg-white/10 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Call Tim &mdash; {client.phone}
            </a>
            <Link
              href="/contact"
              className="btn-premium bg-gold hover:bg-gold-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
