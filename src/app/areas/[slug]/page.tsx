import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';
import ServiceCard from '@/components/ServiceCard';
import PageSchema from '@/components/PageSchema';
import RecentWorkGallery from '@/components/RecentWorkGallery';
import SectionCTA from '@/components/SectionCTA';
import TrustStrip from '@/components/TrustStrip';
import NeighbourhoodChips from '@/components/NeighbourhoodChips';
import PhotoBreak from '@/components/PhotoBreak';
import LocalSnapshot from '@/components/LocalSnapshot';
import AreaFAQ from '@/components/AreaFAQ';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return client.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const area = client.areas.find((a) => a.slug === slug) as any;
  if (!area) return {};
  return {
    title: `Electrician in ${area.name} | Licensed & Insured`,
    description: `Licensed electrician in ${area.name}, ON. ${area.topServices ? area.topServices.slice(0, 3).join(', ') + ' & more.' : 'Panel upgrades, EV chargers, wiring, lighting.'} ESA certified. Call ${client.phone}.`,
    alternates: { canonical: `https://www.topchoiceelectrical.ca/areas/${slug}` },
    openGraph: {
      title: `Electrician in ${area.name} | Licensed & Insured`,
      description: `Licensed electrical services in ${area.name}, Ontario. ESA certified, fully insured. Call ${client.phone}.`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `Electrician in ${area.name} - Top Choice Electrical` }],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const area = client.areas.find((a) => a.slug === slug) as any;
  if (!area) notFound();

  const nearbyAreas = client.areas.filter((a) => a.slug !== slug).slice(0, 5);
  const topServiceNames: string[] = area.topServices || [];
  const topServices = topServiceNames
    .map((name: string) => client.services.find((s) => s.name === name))
    .filter(Boolean) as typeof client.services;

  // Per-city pull quote — use area.description when it exists (richer copy),
  // fall back to the generic "housing stock by decade" line.
  const pullQuote = area.description ||
    `Tim knows the housing stock by decade. The 1965 split-levels with 60-amp services. The late-70s builds with Federal Pacific panels. The older sections of ${area.name} that still have knob-and-tube in the attic. He doesn't have to guess what's behind the wall.`;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/areas' },
          { name: area.name, url: `/areas/${slug}` },
        ]}
        areaName={area.name}
        areaSlug={slug}
        areaRegion={area.region}
      />

      {/* === Hero === */}
      <section className="relative min-h-[56vh] md:min-h-[64vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt={`Electrical work in ${area.name} by Top Choice Electrical`}
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
              <Link href="/areas" className="hover:text-gold transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-gold">{area.name}</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">{area.region} · ESA-Certified</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[0.95] max-w-4xl">
              Electrician in{' '}
              <span className="gradient-text">{area.name}.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              Same-day quotes for panel upgrades, EV chargers, wiring, and emergencies across {area.name} and the surrounding {area.region} area. ESA-certified, fully insured.
            </p>
          </div>
        </div>
      </section>

      {/* === Trust strip === */}
      <TrustStrip />

      {/* === Content === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-14">
              {/* Local snapshot — instant sense of place */}
              <LocalSnapshot
                slug={slug}
                areaName={area.name}
                region={area.region}
                topServices={topServiceNames}
              />

              {/* Intro — drop cap */}
              <div className="animate-on-scroll">
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Local service</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  Your local electrician in{' '}
                  <span className="gradient-text">{area.name}.</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed first-letter:font-display first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                  {area.description || `Top Choice Electrical has been serving ${area.name} and the broader ${area.region} area with over ${client.yearsExperience} years of experience. When you call, you're getting an electrician who knows the area, understands the housing stock, and can be at your door the same day for most jobs.`}
                </p>
              </div>

              {/* Neighbourhood chips */}
              <NeighbourhoodChips slug={slug} areaName={area.name} />

              {/* Top services — promoted, photo-led */}
              {topServices.length > 0 && (
                <div className="animate-on-scroll">
                  <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Most requested</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                    Top services in{' '}
                    <span className="gradient-text">{area.name}.</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
                    {topServices.map((service) => (
                      <ServiceCard key={service.slug} {...service} />
                    ))}
                  </div>
                </div>
              )}

              {/* Recent work gallery */}
              <RecentWorkGallery headline={`Recent jobs near ${area.name}.`} eyebrow="Recent Work" />

              {/* Photo break */}
              <PhotoBreak
                image="/images/work/IMG_3258.webp"
                alt={`Panel work in ${area.name} by Top Choice Electrical`}
                aspect="21/9"
              />

              {/* Pull quote — per-city when description exists, generic fallback */}
              <div className="animate-on-scroll relative py-6 md:py-8">
                <svg className="absolute -top-2 -left-2 w-16 h-16 text-amber-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="relative pl-10 md:pl-14 pr-4 md:pr-8 border-l-4 border-amber-500">
                  <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-[1.3] tracking-tight">
                    {pullQuote}
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <div className="h-px w-8 bg-amber-500" />
                    <span className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em]">
                      Why local matters
                    </span>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-7 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Get a free quote</h3>
                  <p className="text-gray-500 text-sm mb-5">in {area.name}</p>
                  <QuoteForm />
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Nearby areas</p>
                  <ul className="space-y-1">
                    {nearbyAreas.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/areas/${a.slug}`}
                          className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors flex items-center gap-2 group py-1.5"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          Electrician in {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* === Area FAQ === */}
      <AreaFAQ
        slug={slug}
        areaName={area.name}
        region={area.region}
        topServices={topServiceNames}
      />

      {/* === CTA === */}
      <SectionCTA
        eyebrow={`Serving ${area.name}`}
        headline={`Need an electrician in ${area.name}?`}
        body="Same-day quote. ESA-certified, permitted, inspected, passed first visit."
        image="/images/work/IMG_3258.webp"
        imageAlt={`Top Choice Electrical work in ${area.name}`}
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Request a quote', href: '/contact' }}
      />
    </>
  );
}
