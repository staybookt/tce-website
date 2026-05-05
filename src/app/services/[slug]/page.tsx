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

      {/* FAQ Schema */}
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
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      )}

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              {content.headline}
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Intro */}
              <div className="animate-on-scroll">
                <p className="text-gray-600 text-lg leading-relaxed">{content.intro}</p>
              </div>

              {/* Pricing guidance */}
              {content.pricingNote && (
                <div className="animate-on-scroll">
                  <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gold-dark font-bold text-sm uppercase tracking-wider mb-2">Pricing Guide</p>
                        <p className="text-gray-700 text-[15px] leading-relaxed">{content.pricingNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Process */}
              <div className="animate-on-scroll">
                <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">{content.processSubheading}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  <span className="gradient-text">{content.processHeading}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-[17px]">{content.whatToExpect}</p>
              </div>

              {/* Common problems */}
              <div className="animate-on-scroll">
                <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Common Issues</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  {content.issuesHeading}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.problems.map((problem, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 group hover:bg-gold/5 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-[15px] leading-relaxed">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why hire a pro */}
              <div className="animate-on-scroll">
                <div className="bg-navy-dark rounded-2xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                  <div className="relative">
                    <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Why It Matters</p>
                    <h2 className="text-2xl font-bold text-white mb-4">Why Hire a Licensed Electrician</h2>
                    <p className="text-white/60 leading-relaxed">{content.whyPro}</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              {content.faqs && content.faqs.length > 0 && (
                <div className="animate-on-scroll">
                  <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Common Questions</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                    Frequently asked about{' '}
                    <span className="gradient-text">{service.name.toLowerCase()}.</span>
                  </h2>
                  <div className="space-y-4">
                    {content.faqs.map((faq, i) => (
                      <details key={i} className="group bg-gray-50 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-[15px] pr-4">{faq.q}</span>
                          <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 -mt-2">
                          <p className="text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-28">
                <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
                  <p className="text-gray-400 text-sm mb-6">for {service.name}</p>
                  <QuoteForm preselectedService={service.name} />
                </div>

                <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                  <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Other Services</p>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-gray-700 hover:text-gold text-sm font-medium transition-colors flex items-center gap-3 group"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need {service.name.toLowerCase()}?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Call us for a free, no-obligation quote. We serve Newmarket, Aurora, and all of York Region.
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
              className="btn-premium bg-gold hover:bg-gold-dark text-navy-dark font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
