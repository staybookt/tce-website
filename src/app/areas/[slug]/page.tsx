import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';
import ServiceCard from '@/components/ServiceCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return client.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = client.areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Electrician in ${area.name}, ON`,
    description: `${client.name} provides licensed electrical services in ${area.name}, Ontario. Panel upgrades, EV chargers, wiring, landscape lighting. ESA licensed, fully insured. Call ${client.phone}.`,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = client.areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const nearbyAreas = client.areas.filter((a) => a.slug !== slug).slice(0, 5);

  return (
    <>
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-gold">Service Areas</Link>
            <span>/</span>
            <span className="text-gold">{area.name}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Electrician in {area.name}, Ontario</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Licensed electrical services for homes and businesses in {area.name} and the surrounding {area.region} area.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Local Electrician in {area.name}</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {client.name} has been serving {area.name} and the broader {area.region} area for over {client.yearsInBusiness} years.
                  When you call us, you're getting a local electrician who knows the area, understands the housing stock,
                  and can be at your door the same day for most jobs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We handle everything from a single outlet repair to a full house rewire. Every job comes with an ESA permit
                  where required, a clean jobsite, and a clear quote before any work starts. No surprises, no hidden charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Available in {area.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {client.services.map((service) => (
                    <ServiceCard key={service.slug} {...service} />
                  ))}
                </div>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Why {area.name} Homeowners Choose Us</h2>
                <ul className="space-y-3">
                  {[
                    `Local to ${area.region} — fast response times`,
                    'ESA licensed with every permit pulled and inspected',
                    'Upfront pricing with no hidden charges',
                    'Clean jobsite policy — we clean up before we leave',
                    `${client.yearsInBusiness}+ years of experience in residential and commercial`,
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm mb-4">in {area.name}</p>
                <QuoteForm />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Nearby Areas We Serve</h3>
                <ul className="space-y-3">
                  {nearbyAreas.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/areas/${a.slug}`} className="text-navy hover:text-gold text-sm font-medium transition-colors flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
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
      </section>

      <section className="py-12 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need an electrician in {area.name}?</h2>
          <p className="text-white/70 mb-6">We're local, we're licensed, and we can usually get there same-day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${client.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded transition-colors">
              Call {client.phone}
            </a>
            <Link href="/contact" className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
