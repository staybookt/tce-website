import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import ReviewCard from '@/components/ReviewCard';

export const metadata: Metadata = {
  title: 'Reviews | York Region Customer Testimonials',
  description: `Read what homeowners across York Region say about ${client.name}. Real reviews from real customers in Newmarket, Aurora, Richmond Hill, and more.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca/reviews',
  },
  openGraph: {
    title: 'Reviews | York Region Customer Testimonials',
    description: `Real reviews from York Region homeowners about ${client.name}. See why customers trust us for their electrical needs.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Top Choice Electrical Customer Reviews' }],
  },
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero — immersive */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Residential home with professional electrical work"
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
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Reviews</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              York Region homeowners,{' '}
              <span className="gradient-text">in their own words.</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Real customers, real jobs, real reviews. Reach out for references in your neighbourhood &mdash; we keep a current list.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Aggregate rating */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-900 font-bold">5 Stars</span>
              <span className="text-gray-500 text-sm">across all reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {client.reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Review CTA — premium card */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="animate-on-scroll">
            <div className="bg-gray-50 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Had a good experience?</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                If you're a past customer, a Google review helps other homeowners in York Region find a licensed electrician they can trust.
              </p>
              {client.googleBusinessUrl ? (
                <a
                  href={client.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-block bg-gold hover:bg-gold-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-gold/20"
                >
                  Leave a Google Review
                </a>
              ) : (
                <p className="text-gray-400 text-sm italic">Google Business Profile coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — immersive */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_3258.webp"
            alt="Electrician installing wiring in a residential home"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            See why people keep calling us back.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Same-day service, fair prices, and work that's done right the first time.
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
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
