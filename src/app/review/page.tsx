import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';

// The Google review link will live here once the GBP CID is known after
// verification. For now, fall back to a search-by-business-name link that
// resolves to the Place even before the CID exists.
const GOOGLE_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
  `https://www.google.com/search?q=${encodeURIComponent('Top Choice Electrical Newmarket')}#lrd=,1,,,,`;

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: `Thanks for choosing ${client.name}. If we did right by you, a quick Google review helps other York Region homeowners find us.`,
  alternates: { canonical: 'https://www.topchoiceelectrical.com/review' },
  // Don't waste crawler budget on this page — internal-use only
  robots: { index: false, follow: false },
};

export default function ReviewPage() {
  return (
    <>
      <section className="relative min-h-[44vh] md:min-h-[48vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5017.webp"
            alt="Clean residential electrical panel by Top Choice Electrical"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-12 pt-32">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Thanks for choosing Top Choice</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[0.95] max-w-3xl">
              Two minutes.{' '}
              <span className="gradient-text">Huge impact.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              If the work met your standard, a quick Google review is the single biggest thing that helps other York Region homeowners find us. If it didn&apos;t, send a private note — we&apos;ll make it right.
            </p>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Public — Google review */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-gradient-to-br from-amber-50 via-white to-amber-50/40 border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl rounded-3xl p-7 md:p-9 transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0 shadow-md">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em] mb-1">Happy with the work?</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                    Leave a Google review
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-7">
                Takes about 2 minutes. A line or two about what we did and how it went is plenty — that&apos;s what helps the next homeowner.
              </p>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-amber-500 group-hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-md">
                  <span>Open Google review</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Private — feedback to Tim */}
            <a
              href={`mailto:${client.email}?subject=Private%20feedback%20on%20our%20job`}
              className="group block bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-md rounded-3xl p-7 md:p-9 transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mb-1">Something we should know?</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                    Send a private note
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-7">
                If something fell short of what we promised, email Tim directly. We want the chance to make it right before it becomes public.
              </p>
              <div className="inline-flex items-center gap-2 text-gray-800 font-bold text-sm">
                <span>{client.email}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* Why reviews matter — small footer */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm leading-relaxed">
              Top Choice has been built almost entirely on word-of-mouth and Google reviews. Every honest review &mdash; the good ones and the constructive ones &mdash; helps Tim keep doing the work the way it should be done. Thank you.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-gray-400">
              <Link href="/" className="hover:text-amber-600 transition-colors">Back to homepage</Link>
              <span>·</span>
              <a href={`tel:${client.phone}`} className="hover:text-amber-600 transition-colors">
                {client.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
