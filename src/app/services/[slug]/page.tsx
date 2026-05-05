import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/data/client';
import { serviceContent } from '@/data/service-content';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';

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
    title: `${service.name} in Newmarket & York Region`,
    description: content?.metaDescription || service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = client.services.find((s) => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) notFound();

  const otherServices = client.services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <SchemaMarkup type="Service" serviceName={service.name} serviceDescription={service.shortDescription} />

      {/* Hero */}
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.name}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{content.headline}</h1>
          <p className="text-white/70 max-w-2xl text-lg">{service.shortDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Intro */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">{content.intro}</p>
              </div>

              {/* What to expect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                <p className="text-gray-700 leading-relaxed">{content.whatToExpect}</p>
              </div>

              {/* Common problems */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Reasons People Call Us</h2>
                <ul className="space-y-3">
                  {content.problems.map((problem, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why hire a pro */}
              <div className="bg-navy/5 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Why Hire a Licensed Electrician</h2>
                <p className="text-gray-700 leading-relaxed">{content.whyPro}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote form */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm mb-4">for {service.name}</p>
                <QuoteForm />
              </div>

              {/* Other services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Other Services</h3>
                <ul className="space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-navy hover:text-gold text-sm font-medium transition-colors flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need {service.name.toLowerCase()}?</h2>
          <p className="text-white/70 mb-6">
            Call us for a free, no-obligation quote. We serve Newmarket, Aurora, and all of York Region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${client.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded transition-colors">
              Call {client.phone}
            </a>
            <Link href="/contact" className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors">
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
