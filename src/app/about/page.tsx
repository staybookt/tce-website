import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';
import TrustBar from '@/components/TrustBar';

export const metadata: Metadata = {
  title: 'About Us',
  description: `${client.name} has been providing licensed electrical services across York Region for over ${client.yearsInBusiness} years. ESA licensed, fully insured, and committed to quality work.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">About Us</p>
          <h1 className="text-4xl font-bold text-white mb-4">The People Behind the Work</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            We're a local electrical company that takes quality seriously. No corporate overhead, no upselling, no runaround. Just good work, fair prices, and people who care about doing the job right.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Story */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Got Here</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {client.name} started the way most good trade businesses start: one person who was good at the work and cared about doing it right. Over {client.yearsInBusiness} years, that's grown into a team that serves homeowners and businesses across York Region and Simcoe County.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're not a franchise. We're not a call center that dispatches random contractors. When you call us, you're talking to the people who actually do the work. We know the homes in this area because we've been working on them for years. We know the local codes, we know the inspectors, and we know what it takes to get a job done right the first time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most of our business comes from repeat customers and word of mouth. That's not an accident. It's the result of showing up on time, charging fair prices, doing clean work, and treating every home like it matters. Because it does.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Stand For</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Quality Over Speed',
                  desc: 'We don\'t rush through jobs to fit in more calls. Every connection is tight, every wire is properly secured, and every circuit is tested before we leave.',
                },
                {
                  title: 'Honest Pricing',
                  desc: 'We quote the job, not the customer. You get a clear price before we start, and that\'s what you pay. If something changes mid-job, we talk to you first.',
                },
                {
                  title: 'Clean Jobsite',
                  desc: 'Drop cloths go down, debris gets cleaned up, and your home looks the same (or better) when we leave. We take this seriously.',
                },
                {
                  title: 'Respect Your Time',
                  desc: 'We give you a window and we stick to it. If we\'re going to be late, you hear from us before the appointment, not after.',
                },
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-navy/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Credentials &amp; Licensing</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <p className="font-semibold text-gray-900">ESA Licensed</p>
                  <p className="text-sm text-gray-600">License #{client.licenseNumber} — {client.licenseBody}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <p className="font-semibold text-gray-900">Fully Insured</p>
                  <p className="text-sm text-gray-600">General liability and workers' compensation</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <p className="font-semibold text-gray-900">Bonded</p>
                  <p className="text-sm text-gray-600">Additional protection for your property</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <p className="font-semibold text-gray-900">{client.yearsInBusiness}+ Years</p>
                  <p className="text-sm text-gray-600">Serving York Region and Simcoe County</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a question or need a quote?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${client.phone}`} className="bg-navy hover:bg-navy-dark text-white font-bold px-8 py-3 rounded transition-colors">
                Call {client.phone}
              </a>
              <Link href="/contact" className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
