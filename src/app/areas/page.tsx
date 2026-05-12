import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import SectionCTA from '@/components/SectionCTA';
import TrustStrip from '@/components/TrustStrip';
import PhotoBreak from '@/components/PhotoBreak';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import { areaNeighbourhoods } from '@/data/area-neighbourhoods';
import { areaImage } from '@/data/area-images';

export const metadata: Metadata = {
  title: 'Service Areas | York Region & Simcoe County',
  description: `${client.name} serves Newmarket, Aurora, Richmond Hill, Markham, Vaughan, and all of York Region. Licensed electrician, same-day service.`,
  alternates: { canonical: 'https://www.topchoiceelectrical.ca/areas' },
  openGraph: {
    title: 'Service Areas | York Region & Simcoe County',
    description: 'Licensed electrician serving Newmarket, Aurora, Richmond Hill, Markham, Vaughan & all of York Region. Same-day service.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Top Choice Electrical Service Areas' }],
  },
};

export default function AreasPage() {
  const homeBase = client.areas.find((a) => a.slug === 'newmarket');
  const otherAreas = client.areas.filter((a) => a.slug !== 'newmarket');

  return (
    <>
      {/* === Hero === */}
      <section className="relative min-h-[56vh] md:min-h-[64vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Top Choice Electrical work across York Region"
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
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">12 cities · One number</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[0.95] max-w-4xl">
              York Region &amp;{' '}
              <span className="gradient-text">Simcoe County.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              Tim&apos;s home base is Newmarket. Most jobs across York Region run on a 30-minute drive or less. Same-day quotes, same-day visits for most jobs. Not sure if your city&apos;s in range? Call &mdash; the answer is usually yes.
            </p>
          </div>
        </div>
      </section>

      {/* === Trust strip === */}
      <TrustStrip />

      {/* === Featured home base — Newmarket === */}
      {homeBase && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <Link
              href="/areas/newmarket"
              className="group block relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[440px] bg-gray-900 shadow-xl"
            >
              <Image
                src={areaImage[homeBase.slug] || '/images/work/IMG_5375.webp'}
                alt="Newmarket — Top Choice Electrical home base"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/30" />
              <div className="relative h-full flex items-end p-8 md:p-12 lg:p-16">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2.5 bg-amber-500/[0.15] backdrop-blur-md border border-amber-400/30 rounded-full px-4 py-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-amber-200 text-xs font-bold tracking-wide uppercase">Home base · Tim&apos;s yard</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-[0.95]">
                    Newmarket.
                  </h2>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                    {homeBase.description || `Tim's been wiring Newmarket homes for ${client.yearsExperience}+ years. Most of the panel upgrades and aluminum wiring jobs we do come from this town.`}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {(areaNeighbourhoods['newmarket'] || []).slice(0, 5).map((n) => (
                      <span key={n} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {n}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 text-white/50 text-xs font-medium px-3 py-1.5 rounded-full">
                      &amp; more
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-amber-300 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    <span>See the Newmarket page</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* === Service area map === */}
      <ServiceAreaMap />

      {/* === Other 11 cities — photo-led grid === */}
      <section className="py-14 md:py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Across the region</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              11 more cities Tim covers regularly.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherAreas.map((area) => {
              const hoods = (areaNeighbourhoods[area.slug] || []).slice(0, 3);
              const img = areaImage[area.slug] || '/images/work/IMG_5375.webp';
              return (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={img}
                      alt={`Electrical work in ${area.name} by Top Choice Electrical`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-800 text-xs font-bold uppercase tracking-wider">{area.region}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3 tracking-tight">{area.name}</h3>
                    {hoods.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {hoods.map((n) => (
                          <span key={n} className="inline-block bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                            {n}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-amber-600 group-hover:text-amber-700 font-semibold text-sm transition-colors">
                      <span>View {area.name}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Photo break === */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <PhotoBreak
            image="/images/work/IMG_3258.webp"
            alt="Top Choice Electrical panel work across York Region"
            aspect="21/9"
          />
        </div>
      </section>

      {/* === Pull quote === */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative py-6 md:py-8">
            <svg className="absolute -top-2 -left-2 w-16 h-16 text-amber-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="relative pl-10 md:pl-14 pr-4 md:pr-8 border-l-4 border-amber-500">
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-[1.3] tracking-tight">
                Tim knows the housing stock by decade. The 1965 split-levels with 60-amp services. The late-70s builds with Federal Pacific panels. The older sections that still have knob-and-tube in the attic. He doesn&apos;t have to guess what&apos;s behind the wall.
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
      </section>

      {/* === CTA === */}
      <SectionCTA
        eyebrow="Outside the 12 cities?"
        headline="Not sure if we cover your area?"
        body="Call. If we can get there, we can quote it. Newmarket and Simcoe County have been the base for years — we know the drive times."
        image="/images/work/IMG_5375.webp"
        imageAlt="Top Choice Electrical hands-on residential panel work in York Region"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Get a free quote', href: '/contact' }}
      />
    </>
  );
}
