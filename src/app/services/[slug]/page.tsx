import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import { serviceContent } from '@/data/service-content';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import PageSchema from '@/components/PageSchema';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceFeatureImage from '@/components/ServiceFeatureImage';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import SectionCTA from '@/components/SectionCTA';
import TrustStrip from '@/components/TrustStrip';
import ProblemSolutionCard from '@/components/ProblemSolutionCard';
import PhotoBreak from '@/components/PhotoBreak';
import InlineCallStrip from '@/components/InlineCallStrip';
import TrustedBrands from '@/components/TrustedBrands';
import CoveragePromise from '@/components/CoveragePromise';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return client.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = client.services.find((s) => s.slug === slug);
  const content = serviceContent[slug];
  if (!service) return {};
  return {
    title: `${service.name} | Newmarket & York Region`,
    description: content?.metaDescription || service.shortDescription,
    alternates: {
      canonical: `https://www.topchoiceelectrical.ca/services/${slug}`,
    },
    openGraph: {
      title: `${service.name} | Newmarket & York Region`,
      description: content?.metaDescription || service.shortDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${service.name} - Top Choice Electrical` }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = client.services.find((s) => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) notFound();

  const otherServices = client.services.filter((s) => s.slug !== slug).slice(0, 4);

  const heroImage = service.image || '/images/work/IMG_3258.webp';
  const heroAlt = `${service.name} by Top Choice Electrical — ESA-certified work in York Region`;

  const showFpeCallout = slug === 'panel-upgrades';

  return (
    <>
      <SchemaMarkup type="Service" serviceName={service.name} serviceDescription={service.shortDescription} />
      <PageSchema
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name, url: `/services/${slug}` },
        ]}
      />

      {/* HowTo Schema (invisible) */}
      {content.howToSteps && content.howToSteps.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: `How ${service.name} Works`,
              description: service.shortDescription,
              step: content.howToSteps.map((step, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: step.name,
                text: step.text,
              })),
              provider: { '@type': 'Electrician', name: client.name, telephone: client.phone },
            }),
          }}
        />
      )}

      {/* FAQ Schema (invisible) */}
      {content.faqs && content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: content.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }),
          }}
        />
      )}

      {/* AEO summary in schema only — was a visible gray box, schema markup still
          carries the same content for AI search engines */}
      {content.aeoSummary && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: content.headline,
              description: content.aeoSummary,
              about: service.name,
            }),
          }}
        />
      )}

      {/* === 1. Hero === */}
      <section className="relative min-h-[56vh] md:min-h-[64vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold">{service.name}</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">ESA-Certified · York Region</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[0.95] max-w-4xl">
              {content.headline}
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* === 2. Trust strip — ESA, insured, years, pass rate === */}
      <TrustStrip />

      {/* Tap-to-call strip — keeps the phone surfaced right after hero */}
      <InlineCallStrip
        variant="amber"
        headline={`Need ${service.name.toLowerCase()} today?`}
        tagline="Same-day quotes · ESA-certified · 22 years on the tools, 6 on his own"
      />

      {/* === 3. Main content — 2-col on desktop with sticky sidebar === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-14">
              {/* FPE callout — panel-upgrades only */}
              {showFpeCallout && (
                <div className="animate-on-scroll">
                  <Link
                    href="/services/fpe-panel-replacement"
                    className="block bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 hover:bg-red-100 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-700 font-bold text-sm uppercase tracking-wider mb-2">Insurance flagged your panel?</p>
                        <p className="text-gray-800 leading-relaxed mb-2">
                          If your insurer specifically flagged a <strong>Federal Pacific</strong>, <strong>Stab-Lok</strong>, or <strong>Zinsco</strong> panel — see our dedicated Federal Pacific Panel Replacement page.
                        </p>
                        <span className="text-red-600 font-semibold text-sm group-hover:underline">
                          Go to Federal Pacific Panel Replacement &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Intro — single paragraph with drop cap for typographic lift */}
              <div className="animate-on-scroll">
                <p className="text-gray-700 text-lg leading-relaxed first-letter:font-display first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                  {content.intro}
                </p>
              </div>

              {/* Pricing card — promoted, larger numbers, immediately visible */}
              {content.pricingNote && (
                <div className="animate-on-scroll">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shrink-0 shadow-sm">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em] mb-2">What it costs</p>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
                          Transparent pricing in writing.
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">{content.pricingNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Problem / Solution card — text bullets of typical problems + real photo */}
              <ProblemSolutionCard
                problems={content.problems}
                afterImage={service.image || '/images/work/IMG_3258.webp'}
                afterImageAlt={`${service.name} by Top Choice Electrical — finished work in York Region`}
                serviceName={service.name}
              />

              {/* Recent work gallery — visual proof of outcome */}
              <ServiceGallery slug={slug} serviceName={service.name} />

              {/* Feature image (renders null if no slug match) */}
              <ServiceFeatureImage slug={slug} serviceName={service.name} />

              {/* Before/after slider (renders null until real pairs land) */}
              <BeforeAfterSlider slug={slug} />

              {/* Process — numbered stepper when steps exist, paragraph fallback otherwise */}
              <div className="animate-on-scroll">
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">{content.processSubheading}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  {content.processHeading}
                </h2>

                {content.howToSteps && content.howToSteps.length > 0 ? (
                  <ol className="relative space-y-8 md:space-y-10">
                    {/* Vertical connector line */}
                    <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-amber-300 via-amber-200 to-transparent hidden sm:block" />
                    {content.howToSteps.map((step, i) => (
                      <li key={i} className="relative flex gap-5 md:gap-7">
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-sm">
                            <span className="font-display font-bold text-amber-600 text-lg">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 pt-1.5">
                          <h3 className="font-display text-xl font-bold text-gray-900 mb-2 tracking-tight">
                            {step.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base">{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-lg">{content.whatToExpect}</p>
                )}
              </div>

              {/* Full-bleed photo break — pure visual rest */}
              <PhotoBreak
                image="/images/work/IMG_5375.webp"
                alt={`${service.name} work in York Region by Top Choice Electrical`}
                aspect="21/9"
              />

              {/* Pull quote — whyPro content elevated typographically */}
              {content.whyPro && (
                <div className="animate-on-scroll relative py-6 md:py-8">
                  <svg className="absolute -top-2 -left-2 w-16 h-16 text-amber-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="relative pl-10 md:pl-14 pr-4 md:pr-8 border-l-4 border-amber-500">
                    <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-[1.3] tracking-tight">
                      {content.whyPro}
                    </p>
                    <footer className="mt-5 flex items-center gap-3">
                      <div className="h-px w-8 bg-amber-500" />
                      <span className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em]">
                        The standard
                      </span>
                    </footer>
                  </blockquote>
                </div>
              )}

              {/* Common issues — diagnostic content */}
              <div className="animate-on-scroll bg-gray-50 -mx-4 px-4 md:mx-0 md:px-10 py-10 md:py-12 md:rounded-2xl">
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">When to call</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  {content.issuesHeading}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.problems.map((problem, i) => (
                    <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-4 border border-gray-100">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-[15px] leading-relaxed">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {content.faqs && content.faqs.length > 0 && (
                <div className="animate-on-scroll">
                  <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">FAQ</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                    Common questions
                  </h2>
                  <div className="space-y-3">
                    {content.faqs.map((faq, i) => (
                      <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-amber-200 transition-colors">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <span className="font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                          <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-45 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 -mt-1">
                          <p className="text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* === Sidebar === */}
            <aside className="space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* Quote form */}
                <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-7 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Get a free quote</h3>
                  <p className="text-gray-500 text-sm mb-5">for {service.name}</p>
                  <QuoteForm preselectedService={service.name} />
                </div>

                {/* Other services */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Other services</p>
                  <ul className="space-y-1">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors flex items-center gap-2 group py-1.5"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-bold transition-colors"
                  >
                    See all 18 services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* === Coverage Promise — guarantee, warranty, financing === */}
      <CoveragePromise />

      {/* === Trusted Brands === */}
      <TrustedBrands />

      {/* Tap-to-call strip — last inline call CTA before the SectionCTA closer */}
      <InlineCallStrip
        variant="light"
        headline={`Talk to Tim about your ${service.name.toLowerCase()} job.`}
        tagline="Most quotes done in a 10-minute call"
      />

      {/* === CTA === */}
      <SectionCTA
        eyebrow={`${service.name} in York Region`}
        headline={`Need ${service.name.toLowerCase()}? Get a quote.`}
        body="Same-day quote across York Region. ESA-certified, permitted, inspected, passed first visit."
        image="/images/work/IMG_3258.webp"
        imageAlt={`${service.name} work by Top Choice Electrical in York Region`}
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Request a quote', href: '/contact' }}
      />
    </>
  );
}
