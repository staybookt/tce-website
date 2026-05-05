import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import CostEstimator from '@/components/CostEstimator';
import FounderStory from '@/components/FounderStory';
import RecentWork from '@/components/RecentWork';
import { client } from '@/data/client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TrustBar />

      {/* ═══ Services ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Every electrical service your home needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard key={client.services[0].slug} {...client.services[0]} featured />
            {client.services.slice(1).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why Choose Us ═══ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Top Choice</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              We treat your home like it&apos;s ours.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mt-4">
              Upfront pricing. Clean jobsites. Licensed, inspected, guaranteed.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                title: 'ESA Licensed',
                desc: 'Every job meets or exceeds the Ontario Electrical Safety Code. Permits pulled, inspections passed.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Clean Jobsite',
                desc: 'Drop cloths down, debris cleaned up, and your home looks better when we leave. Every time.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: 'Upfront Pricing',
                desc: 'No surprise charges. We quote upfront and stick to it. If something changes, you hear about it first.',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: '24/7 Emergency',
                desc: "Electrical problems don't wait for business hours. Neither do we. Same-day service across York Region.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Cost Estimator */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What&apos;s this going to cost?</h3>
              <p className="text-gray-500 text-base max-w-lg">
                Pick your service and scope to get a ballpark range. Real numbers based on typical jobs in York Region.
              </p>
            </div>
            <CostEstimator />
          </div>
        </div>
      </section>

      {/* ═══ Reviews ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Trusted by homeowners.
              </h2>
            </div>
            <Link href="/reviews" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors shrink-0">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {client.reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Founder Story ═══ */}
      <FounderStory />

      {/* ═══ Recent Work ═══ */}
      <RecentWork />

      {/* ═══ Service Areas ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Where We Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Proudly serving York Region.
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto mb-12">
            Licensed electrical service for every community in the region. Local crew, fast response.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {client.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-slate-50 hover:bg-blue-600 text-gray-600 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border border-gray-200 hover:border-blue-600"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-md mx-auto">
            Whether it&apos;s a small repair or a major project, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:bg-blue-50"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 border border-blue-500"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
