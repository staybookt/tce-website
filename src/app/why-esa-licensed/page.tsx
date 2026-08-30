import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import SectionCTA from '@/components/SectionCTA';

export const metadata: Metadata = {
  title: 'Why hire an ESA-licensed electrician (vs a handyman)',
  description:
    'ESA-certified electricians are licensed by the Electrical Safety Authority of Ontario. Permits, inspections, insurance, code compliance. Here is what you get with an ESA contractor that a handyman cannot give you.',
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/why-esa-licensed',
  },
  openGraph: {
    title: 'Why hire an ESA-licensed electrician in Ontario',
    description:
      'Permits, inspections, $5M insurance, code compliance, and a paper trail your insurer will accept. The real differences between an ESA-certified electrician and a handyman doing electrical work.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Why hire an ESA-licensed electrician — Top Choice Electrical',
      },
    ],
  },
};

/**
 * Comparison rows. Wording follows the Aug 2026 UX review: it states what a
 * licensed contractor is required to do, and describes the unlicensed column
 * in terms of what is not guaranteed rather than asserting what any individual
 * does or does not carry.
 */
const COMPARISON_ROWS = [
  {
    label: 'Licensed to do electrical work',
    licensed: `ECRA/${client.licenseBody} licensed`,
    unlicensed: `Not authorized unless they hold an ECRA/${client.licenseBody} licence`,
  },
  {
    label: `${client.licenseBody} notification & inspection`,
    licensed: 'Handles required notifications and inspections',
    unlicensed: 'May not provide this',
  },
  {
    label: 'Proof of completed work',
    licensed: `${client.licenseBody} Certificate of Acceptance when applicable`,
    unlicensed: `No ${client.licenseBody} certificate without the required process`,
  },
  {
    label: 'Insurance & protection',
    licensed: 'Licensed contractors carry required liability coverage',
    unlicensed: 'Coverage can vary \u2014 verify before hiring',
  },
  {
    label: 'Ontario Electrical Safety Code',
    licensed: 'Work is performed to applicable code requirements',
    unlicensed: 'Qualifications can vary',
  },
  {
    label: 'Warranty & accountability',
    licensed: `Backed by ${client.name}'s workmanship warranty`,
    unlicensed: 'Depends on the individual',
  },
];

export default function WhyEsaLicensedPage() {
  return (
    <>
      {/* === Hero === */}
      <section className="relative min-h-[56vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5017.webp"
            alt="Code-compliant ESA-certified electrical work by Top Choice Electrical"
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
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Hiring an electrician</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[0.95] max-w-4xl">
              ESA-licensed electrician{' '}
              <span className="gradient-text">vs handyman.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              The difference between an ESA-certified electrician and a handyman doing electrical work isn&apos;t skill. It&apos;s paperwork, insurance, code knowledge, and whether your homeowner&apos;s policy still covers you afterwards. Here&apos;s what you actually get.
            </p>
          </div>
        </div>
      </section>

      {/* === Comparison table === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">Six real differences</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              What an ESA contractor gives you{' '}
              <span className="gradient-text">that a handyman can&apos;t.</span>
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Licensed electrical contractor compared with an unlicensed handyman
              </caption>
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th scope="col" className="py-4 pr-6 w-[26%]">
                    <span className="sr-only">Requirement</span>
                  </th>
                  <th scope="col" className="py-4 px-4 w-[37%] text-sm md:text-base font-bold text-gray-900">
                    Licensed Electrical Contractor
                  </th>
                  <th scope="col" className="py-4 px-4 w-[37%] text-sm md:text-base font-bold text-gray-900">
                    Unlicensed / Handyman
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-gray-200 align-top">
                    <th scope="row" className="py-5 pr-6 text-sm md:text-[15px] font-semibold text-gray-900">
                      {row.label}
                    </th>
                    <td className="py-5 px-4">
                      <div className="flex gap-3">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.7 7.7l-5.6 5.6a1 1 0 01-1.4 0l-2.4-2.4a1 1 0 111.4-1.4l1.7 1.7 4.9-4.9a1 1 0 011.4 1.4z" />
                        </svg>
                        <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed">{row.licensed}</span>
                      </div>
                    </td>
                    <td className="py-5 px-4">
                      <div className="flex gap-3">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5 text-red-600" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.7 12.3a1 1 0 01-1.4 1.4L12 13.4l-2.3 2.3a1 1 0 11-1.4-1.4l2.3-2.3-2.3-2.3a1 1 0 011.4-1.4l2.3 2.3 2.3-2.3a1 1 0 011.4 1.4L13.4 12z" />
                        </svg>
                        <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed">{row.unlicensed}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === The insurance angle deep dive === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">The insurance reality</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            Why most homeowner&apos;s policies <em className="not-italic gradient-text">require</em> ESA-permitted work.
          </h2>
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Most Canadian home-insurance policies have exclusions for unpermitted electrical work or safety-code violations. If something goes wrong with unpermitted wiring, panels, or DIY work, your coverage could be affected.
            </p>
            <p>
              With permitted and inspected electrical work, you receive documentation from {client.licenseBody} that can help protect you if an issue arises &mdash; and provide important records when selling your home.
            </p>
            <p className="text-gray-900 font-semibold">
              A permit is a small cost compared to the risk of unpermitted electrical work.
            </p>
          </div>
        </div>
      </section>

      {/* === Verify a contractor sidebar === */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50/60 to-white border border-amber-200 rounded-2xl p-7 md:p-9">
            <p className="text-amber-700 font-semibold text-xs uppercase tracking-[0.25em] mb-3">Verify any contractor</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              You can check us. You can check anyone.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Before hiring any electrician — including us — verify their ESA licence. It takes 30 seconds.
            </p>
            <ol className="space-y-2 mb-6 text-gray-700 text-base">
              <li>1. Go to <a href="https://esasafe.com/customer/looking-for-an-lec/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">esasafe.com/customer/looking-for-an-lec/</a></li>
              <li>2. Search by business name or licence number</li>
              <li>3. Confirm the contractor is active and licensed in Ontario</li>
            </ol>
            <p className="text-gray-500 text-sm italic">
              If they&apos;re not on that list, they&apos;re not allowed to do electrical work in Ontario. It really is that simple.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <SectionCTA
        eyebrow="Hire the right person the first time"
        headline="ESA-licensed. $5M insured. Same-day quotes."
        body={`${client.yearsExperience} years on the tools, ${client.yearsInBusiness} on his own. Every job permitted. Every inspection passed. The paperwork your insurer wants to see.`}
        image="/images/work/IMG_3258.webp"
        imageAlt="Top Choice Electrical ESA-certified panel work"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Request a quote online', href: '/contact' }}
      />
    </>
  );
}
