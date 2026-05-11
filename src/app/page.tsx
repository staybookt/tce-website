import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import CostEstimator from '@/components/CostEstimator';
import RecentWork from '@/components/RecentWork';
import { client } from '@/data/client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TrustBar />

      {/* === Services === */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">What Tim Does</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              From a tripped breaker to a full rewire.
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
                Fair pricing. No franchise markup.
              </h2>
              <p className="text-white/40 text-base leading-relaxed mb-8">
                The big franchise operations charge more because they have to. National marketing, call centres, royalty fees, sales reps on commission. Tim runs Top Choice out of Newmarket with a small crew and a van. Same ESA licence, same inspections, same code &mdash; just without the layers in between that drive your bill up.
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
                  Tim quotes it himself, same day
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
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">References, Not Stock Photos</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
                  Most of Tim&apos;s work comes by referral.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Tim&apos;s Google Business Profile is going live this month — reviews from real York Region homeowners will land there as they come in.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Until then, the honest version: call Tim and ask for three recent customers in your neighbourhood. He&apos;ll give you their numbers. Call them. Then decide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${client.phone}`}
                    className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02] text-center"
                  >
                    Call Tim &mdash; {client.phone}
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

      {/* === Recent Work === */}
      <RecentWork />

      {/* === Final CTA === */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111113 0%, #1a1408 50%, #111113 100%)' }}>
        {/* Warm ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
            Let&apos;s get it done.
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-md mx-auto">
            Call for a same-day quote. Tim picks up. No voicemail, no runaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02]"
            >
              Call Tim &mdash; {client.phone}
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/15 text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
