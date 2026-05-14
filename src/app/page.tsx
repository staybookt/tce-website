import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import CostEstimator from '@/components/CostEstimator';
import RecentWork from '@/components/RecentWork';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import SectionCTA from '@/components/SectionCTA';
import InlineCallStrip from '@/components/InlineCallStrip';
import TrustedBrands from '@/components/TrustedBrands';
import CoveragePromise from '@/components/CoveragePromise';
import ServiceSearch from '@/components/ServiceSearch';
import CallbackForm from '@/components/CallbackForm';
import HomepageFAQ from '@/components/HomepageFAQ';
import { client } from '@/data/client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TrustBar />

      {/* Tap-to-call strip — keeps the phone number unmissable below the fold */}
      <InlineCallStrip
        variant="amber"
        headline="Same-day quotes across York Region &amp; Simcoe County."
        tagline="22 years on the tools, 6 on his own · ESA-certified · 24/7 emergency"
      />

      {/* === Service Search — fast nav for visitors who know what they need === */}
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

      {/* === Trusted Brands strip — equipment + ESA badge trust transfer === */}
      <TrustedBrands />

      {/* === Coverage Promise — guarantee + warranty + financing === */}
      <CoveragePromise />

      {/* === Callback Form — low-friction lead capture === */}
      <CallbackForm />

      {/* Tap-to-call strip — bridges services to pricing */}
      <InlineCallStrip
        variant="light"
        headline="Want it priced in writing today?"
        tagline="On-site quote, no charge, no obligation"
      />

      {/* === Cost Estimator === */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        {/* Warm ambient glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left - headline + context */}
            <div className="md:col-span-5">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Pricing</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Fair, transparent, in writing.
              </h2>
              <p className="text-white/40 text-base leading-relaxed mb-8">
                Standard panel upgrades run $2,500&ndash;$4,500 installed. EV chargers $800&ndash;$1,800 with the panel ready. Emergency callouts flat $150 credited to the job. Quotes are on-site, no charge, no obligation. The quote you get is the price you pay &mdash; it doesn&apos;t move unless you change scope.
              </p>
              <div className="hidden md:flex items-center gap-4 text-sm text-white/30">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-400/50" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No obligation
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-400/50" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Same-day, on-site
                </div>
              </div>
            </div>

            {/* Right - the estimator */}
            <div className="md:col-span-7">
              <CostEstimator variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Tap-to-call strip — closes the pricing section with a call CTA */}
      <InlineCallStrip
        variant="dark"
        headline="Skip the estimator — talk to Tim direct."
        tagline="Most quotes done in a 10-minute call"
      />

      {/* === Reviews / References block === */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {client.reviews.length > 0 ? (
            /* Real reviews block — only renders when Google reviews exist */
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-8 tracking-tight">
                  &ldquo;{client.reviews[0].text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                    <span className="font-bold text-amber-600 text-lg">{client.reviews[0].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{client.reviews[0].name}</p>
                    <p className="text-gray-500 text-sm">{client.reviews[0].location} &middot; {client.reviews[0].service}</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/work/IMG_1140.webp"
                  alt="Top Choice Electrical pot-light install on a Newmarket home at dusk, every soffit and porch light glowing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-8">
                  <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    <div>
                      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">200+</p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1">Panels Wired in York Region</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">{client.yearsExperience}+</p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1">Years on the Tools</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">100%</p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1">ESA Inspections Passed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* References-on-request block — runs until Google reviews exist */
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">By the Numbers</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
                  Two decades of York Region work.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Over 200 panels upgraded across Newmarket, Aurora, Bradford, Innisfil, Richmond Hill, and the rest of York Region and Simcoe County. Every job ESA-permitted, every inspection passed.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Reviews from real homeowners are landing on Google as the business profile goes live this month. In the meantime, ask for three recent references &mdash; addresses, phone numbers, the lot. Call them. Then decide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${client.phone}`}
                    className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02] text-center"
                  >
                    Call for a quote &mdash; {client.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 text-center"
                  >
                    Request References
                  </Link>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/work/IMG_1140.webp"
                  alt="Top Choice Electrical pot-light install on a Newmarket home at dusk, every soffit and porch light glowing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-8">
                  <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    <div>
                      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">200+</p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1">Panels Wired in York Region</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">{client.yearsExperience}+</p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1">Years on the Tools</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">100%</p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1">ESA Inspections Passed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary reviews — only renders when 4+ real reviews exist */}
          {client.reviews.length >= 4 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-100">
              {client.reviews.slice(1, 4).map((review, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-gray-500 text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">&ldquo;{review.text}&rdquo;</p>
                    <p className="text-gray-400 text-xs font-medium">{review.name} &middot; {review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tap-to-call strip — bridges proof to recent work */}
      <InlineCallStrip
        variant="light"
        headline="Got a job like these?"
        tagline="Call Tim · most quotes within 24 hours"
      />

      {/* === Recent Work === */}
      <RecentWork />

      {/* === Homepage FAQ — common questions + JSON-LD FAQPage schema === */}
      <HomepageFAQ />

      {/* Tap-to-call strip — final inline call CTA before the section CTA closer */}
      <InlineCallStrip
        variant="amber"
        headline="Ready to book?"
        tagline="Same-day quotes · 24/7 emergency hotline"
      />

      {/* === Before/After slider === */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <BeforeAfterSlider
            slug="homepage"
            headline="Old panel. New panel. Drag to see the difference."
            eyebrow="See the Work"
          />
        </div>
      </section>

      {/* === Final CTA === */}
      <SectionCTA
        eyebrow="Get a quote"
        headline="Same-day quotes across York Region &amp; Simcoe County."
        body="Newmarket, Aurora, Richmond Hill, Markham, Vaughan, King City, Bradford, Innisfil — and everywhere in between. Most jobs scheduled within 48 hours."
        image="/images/work/IMG_5375.webp"
        imageAlt="Top Choice Electrical panel work in York Region"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Request a quote online', href: '/contact' }}
      />
    </>
  );
}
