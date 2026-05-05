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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Electrical Services for Homes &amp; Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a single outlet to a full rewire, we handle residential and light commercial
              electrical work across York Region. Every job is done to code, inspected, and guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {client.services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-gold hover:text-gold-dark font-medium">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Why Top Choice</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                We treat your home like it's ours.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'ESA Licensed & Inspected',
                    desc: 'Every job meets or exceeds the Ontario Electrical Safety Code. We pull permits, we pass inspections, and we stand behind the work.',
                  },
                  {
                    title: 'Clean Jobsite, Every Time',
                    desc: 'We show up on time, lay down drop cloths, and clean up before we leave. Your home should look better when we leave, not worse.',
                  },
                  {
                    title: 'Straight Talk on Pricing',
                    desc: 'No surprise charges. We quote the job upfront and stick to it. If something changes, you hear about it before we do the work.',
                  },
                  {
                    title: 'Same-Day Emergency Response',
                    desc: 'Electrical problems don\'t wait for business hours. Neither do we. Call us 24/7 for emergency service across York Region.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-500 text-sm mb-6">Tell us what you need. We'll get back to you within 2 hours.</p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">What Our Customers Say</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Homeowners Across York Region
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {client.reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews" className="text-gold hover:text-gold-dark font-medium">
              Read All Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Where We Work</p>
          <h2 className="text-3xl font-bold mb-6">
            Proudly Serving York Region &amp; Simcoe County
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {client.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white/10 hover:bg-gold/20 text-white hover:text-gold px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors"
          >
            Request Service in Your Area
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-8">
            Whether it's a small repair or a major project, we're here to help.
            Call us directly or fill out our form for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="bg-navy hover:bg-navy-dark text-white font-bold px-8 py-4 rounded text-lg transition-colors"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-4 rounded text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
