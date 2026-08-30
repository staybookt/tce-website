import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import InlineCallStrip from '@/components/InlineCallStrip';
import CoveragePromise from '@/components/CoveragePromise';
import ServiceSearch from '@/components/ServiceSearch';
import CallbackForm from '@/components/CallbackForm';
import HomepageFAQ from '@/components/HomepageFAQ';
import { client } from '@/data/client';
import Link from 'next/link';

/**
 * Home page.
 *
 * Structure follows the Aug 2026 UX review (Emma Beatty):
 *   Hero -> Search -> Services -> The Promise -> Callback -> tap-to-call -> FAQ
 *
 * Sections removed in that review because they repeated content held on
 * dedicated pages, or pushed the page past what a homeowner will scroll:
 * TrustBar, TrustedBrands, CostEstimator, the reviews/references block,
 * RecentWork, the before/after slider, the closing CTA, and four of the
 * six inline call strips.
 */
export default function Home() {
  return (
    <>
      <HeroBanner />

      {/* === Search - lets a visitor who knows what they need skip the page === */}
      <ServiceSearch />

      {/* === Services === */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              18 electrical services. Most jobs quoted same day.
            </h2>
          </div>

          {/* Featured service - full width hero card */}
          <div className="mb-4">
            <ServiceCard key={client.services[0].slug} {...client.services[0]} featured />
          </div>

          {/* Grid of remaining services */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {client.services.slice(1, 7).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors">
              View All {client.services.length} Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* === The Promise - guarantee, warranty, quote integrity === */}
      <CoveragePromise />

      {/* === Proof - real Google reviews ===
          The Aug 2026 review removed the homepage reviews block, correctly:
          at the time it rendered a "references on request" placeholder because
          the profile had no reviews. The profile now carries 14 at 5.0, so the
          block is back in a compact form that keeps the reviewed page rhythm. */}
      {client.reviews.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-4">
                  What homeowners say
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                  {client.googleRating?.toFixed(1)} on Google, across {client.reviewCount} reviews.
                </h2>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex gap-0.5" role="img" aria-label={`${client.googleRating?.toFixed(1)} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-sm">Verified Google reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {client.reviews.slice(0, 3).map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/reviews" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors">
                Read all {client.reviewCount} reviews
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* === Callback Form - low-friction lead capture === */}
      <CallbackForm />

      {/* Tap-to-call strip - the one inline call CTA the review kept */}
      <InlineCallStrip
        variant="light"
        headline="Want it priced in writing today?"
        tagline="On-site quote, no charge, no obligation"
      />

      {/* === FAQ - answers the last objections before the call === */}
      <HomepageFAQ />
    </>
  );
}
