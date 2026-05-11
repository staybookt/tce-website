import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';
import ServiceCard from '@/components/ServiceCard';
import PageSchema from '@/components/PageSchema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return client.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = client.areas.find((a) => a.slug === slug) as any;
  if (!area) return {};
  return {
    title: `Electrician in ${area.name} | Licensed & Insured`,
    description: `Licensed electrician in ${area.name}, ON. ${area.topServices ? area.topServices.slice(0, 3).join(', ') + ' & more.' : 'Panel upgrades, EV chargers, wiring, lighting.'} ESA certified. Call ${client.phone}.`,
    alternates: {
      canonical: `https://www.topchoiceelectrical.ca/areas/${slug}`,
    },
    openGraph: {
      title: `Electrician in ${area.name} | Licensed & Insured`,
      description: `Licensed electrical services in ${area.name}, Ontario. ESA certified, fully insured. Call ${client.phone}.`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `Electrician in ${area.name} - Top Choice Electrical` }],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = client.areas.find((a) => a.slug === slug) as any;
  if (!area) notFound();

  const nearbyAreas = client.areas.filter((a) => a.slug !== slug).slice(0, 5);
  const topServiceNames = area.topServices || [];
  const topServices = topServiceNames
    .map((name: string) => client.services.find((s) => s.name === name))
    .filter(Boolean);
  const otherServices = client.services.filter(
    (s) => !topServiceNames.includes(s.name)
  ).slice(0, 4);

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

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80"
            alt="Aerial view of a residential neighbourhood in York Region"
            fill
            priority
            sizes="100vw"
            className="object-cover"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Electrician in{' '}
              <span className="gradient-text">{area.name}</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Licensed electrical services for homes and businesses in {area.name} and the surrounding {area.region} area.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Intro with unique area content */}
              <div className="animate-on-scroll">
                <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Local Service</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  Your local electrician in{' '}
                  <span className="gradient-text">{area.name}.</span>
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed text-[17px]">
                  {area.description ? (
                    <p>{area.description}</p>
                  ) : (
                    <p>
                      {client.name} has been serving {area.name} and the broader {area.region} area with over {client.yearsExperience} years of experience.
                      When you call us, you're getting a local electrician who knows the area, understands the housing stock,
                      and can be at your door the same day for most jobs.
                    </p>
                  )}
                  <p>
                    Every job comes with an ESA permit where required, a clean jobsite, and a clear quote before any work starts. No surprises, no upselling, no hidden charges.
                  </p>
                </div>
              </div>

              {/* Popular services in this area */}
              {topServices.length > 0 && (
                <div className="animate-on-scroll">
                  <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Most Requested</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                    Popular in{' '}
                    <span className="gradient-text">{area.name}.</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
                    {topServices.map((service: any) => (
                      <ServiceCard key={service.slug} {...service} />
                    ))}
                  </div>
                </div>
              )}

              {/* Why choose us */}
              <div className="animate-on-scroll">
                <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Why Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  Why {area.name} homeowners{' '}
                  <span className="gradient-text">choose us.</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: `Local to ${area.region}`, desc: 'Fast response times for regular and emergency service' },
                    { label: 'ESA Licensed', desc: 'Every permit pulled, every inspection passed' },
                    { label: 'Upfront Pricing', desc: 'Clear quote before work starts, no hidden charges' },
                    { label: 'Clean Jobsite', desc: 'We clean up before we leave, every single time' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 group hover:bg-gold/5 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-1">{item.label}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All services list */}
              <div className="animate-on-scroll">
                <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Full Service List</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  All services in{' '}
                  <span className="gradient-text">{area.name}.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
                  {client.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 group hover:bg-gold/5 transition-colors duration-300"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm group-hover:text-gold transition-colors">{service.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{service.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-28">
                <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
                  <p className="text-gray-500 text-sm mb-6">in {area.name}</p>
                  <QuoteForm />
                </div>

                <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                  <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Nearby Areas</p>
                  <ul className="space-y-3">
                    {nearbyAreas.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/areas/${a.slug}`}
                          className="text-gray-700 hover:text-gold text-sm font-medium transition-colors flex items-center gap-3 group"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          Electrician in {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
            alt="Electrician working on wiring in a home"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need an electrician in {area.name}?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            We're local, we're licensed, and we can usually get there same-day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="glass hover:bg-white/10 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Call {client.phone}
            </a>
            <Link
              href="/contact"
              className="btn-premium bg-gold hover:bg-gold-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
