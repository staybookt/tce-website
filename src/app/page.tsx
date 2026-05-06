import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import CostEstimator from '@/components/CostEstimator';
import RecentWork from '@/components/RecentWork';
import { client } from '@/data/client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TrustBar />

      {/* ═══ Why Top Choice — editorial layout ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left — sticky headline */}
            <div className="md:col-span-5 md:sticky md:top-32">
              <div className="accent-line mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                We treat your home like it&apos;s ours.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                No shortcuts. No surprises. Just honest electrical work backed by
                an ESA licence, a clean jobsite, and a team that picks up the phone
                when your power goes out at 2am.
              </p>
            </div>

            {/* Right — feature cards with stagger */}
            <div className="md:col-span-7 space-y-5">
              {[
                {
                  title: 'ESA Licensed',
                  desc: 'Every job meets or exceeds the Ontario Electrical Safety Code. Permits pulled, inspections passed.',
                  number: '01',
                },
                {
                  title: 'Upfront Pricing',
                  desc: 'No surprise charges. We quote upfront and stick to it. If something changes, you hear about it first.',
                  number: '02',
                },
                {
                  title: 'Clean Jobsite',
                  desc: 'Drop cloths down, debris cleaned up, and your home looks better when we leave. Every time.',
                  number: '03',
                },
                {
                  title: '24/7 Emergency',
                  desc: "Electrical problems don't wait for business hours. Neither do we. Same-day service across York Region.",
                  number: '04',
                },
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-500">
                  <span className="font-display text-3xl font-bold text-gray-200 group-hover:text-amber-300 transition-colors duration-500 shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Reviews — dark editorial section ═══ */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        {/* Subtle warm glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Trusted by homeowners<br className="hidden md:block" /> across York Region.
              </h2>
            </div>
            <Link href="/reviews" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors shrink-0">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {client.reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} {...review} variant="dark" />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-10 py-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Services — full bleed featured + grid ═══ */}
      <section className="py-24 md:py-32 section-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="accent-line mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Every electrical service<br className="hidden md:block" /> your home needs.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors shrink-0">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard key={client.services[0].slug} {...client.services[0]} featured />
            {client.services.slice(1, 4).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Cost Estimator ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-950 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Warm gradient accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="mb-10">
                <div className="accent-line mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  What&apos;s this going to cost?
                </h3>
                <p className="text-white/50 text-base max-w-lg">
                  Pick your service and scope to get a ballpark range. Real numbers based on typical jobs in York Region.
                </p>
              </div>
              <CostEstimator variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Recent Work ═══ */}
      <RecentWork />

      {/* ═══ Final CTA — warm gradient ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111113 0%, #1a1408 50%, #111113 100%)' }}>
        {/* Warm ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
            Ready to get started?
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-md mx-auto">
            Whether it&apos;s a small repair or a major project, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02]"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/15 text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
