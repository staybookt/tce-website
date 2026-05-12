import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | Free Electrical Quote',
  description: `Contact ${client.name} for a free electrical quote. Serving Newmarket, Aurora, and all of York Region. Call ${client.phone} or fill out our online form.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca/contact',
  },
  openGraph: {
    title: 'Contact Us | Free Electrical Quote',
    description: `Contact ${client.name} for a free electrical quote in York Region. Call ${client.phone} or use our online form.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Top Choice Electrical' }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — immersive */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Top Choice Electrical work in York Region"
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
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Get a{' '}
              <span className="gradient-text">quote.</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Same-day response across York Region. Call, text, or fill out the form &mdash; whichever is fastest for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info — left side */}
            <div className="animate-on-scroll slide-left">
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                We respond{' '}
                <span className="gradient-text">within 2 hours.</span>
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: client.phone,
                    href: `tel:${client.phone}`,
                    sub: client.hours.emergency,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: client.email,
                    href: `mailto:${client.email}`,
                    sub: 'We reply same-day during business hours',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: 'Service Area',
                    value: client.address,
                    sub: `Serving ${client.areas.slice(0, 4).map(a => a.name).join(', ')}, and more`,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: client.hours.regular,
                    sub: client.hours.emergency,
                    subGold: true,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-navy group-hover:bg-gold/10 group-hover:text-gold group-hover:border-gold/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-bold text-lg hover:text-gold transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-bold text-lg">{item.value}</p>
                      )}
                      {item.sub && (
                        <p className={`text-sm mt-0.5 ${item.subGold ? 'text-gold font-medium' : 'text-gray-400'}`}>{item.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment methods */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Payment Methods</p>
                <div className="flex flex-wrap gap-2">
                  {client.paymentMethods.map((method) => (
                    <span key={method} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Form — elevated card */}
            <div className="animate-on-scroll slide-right">
              <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-10 relative overflow-hidden sticky top-28">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a quote</h3>
                <p className="text-gray-500 mb-8">30 seconds. Same-day response during business hours.</p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-24 md:py-32 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative animate-on-scroll">
          <div className="w-16 h-16 rounded-2xl bg-red/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Electrical Emergency?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Don't wait. Call now.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
            Sparking outlets, burning smells, power outages, tripped breakers that won't reset. We're available 24/7 for emergencies across York Region.
          </p>
          <a
            href={`tel:${client.phone}`}
            className="btn-premium inline-block bg-gold hover:bg-gold-dark text-white font-bold px-12 py-5 rounded-xl text-xl transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Call {client.phone}
          </a>
        </div>
      </section>
    </>
  );
}
