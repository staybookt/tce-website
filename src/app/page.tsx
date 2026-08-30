import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
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
