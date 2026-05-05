import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';
import ReviewCard from '@/components/ReviewCard';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials',
  description: `Read what homeowners across York Region say about ${client.name}. Real reviews from real customers in Newmarket, Aurora, Richmond Hill, and more.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Reviews</p>
          <h1 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            We don't ask for reviews unless we're confident in the work. Here's what homeowners across York Region have to say.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {client.reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="mt-12 bg-white rounded-xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Had a good experience?</h2>
            <p className="text-gray-600 mb-6">
              If you're a past customer, we'd appreciate a Google review. It helps other homeowners in York Region find a licensed electrician they can trust.
            </p>
            {client.googleBusinessUrl ? (
              <a
                href={client.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors"
              >
                Leave a Google Review
              </a>
            ) : (
              <p className="text-gray-400 text-sm italic">Google Business Profile coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to see why people keep calling us back?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${client.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded transition-colors">
              Call {client.phone}
            </a>
            <Link href="/contact" className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
