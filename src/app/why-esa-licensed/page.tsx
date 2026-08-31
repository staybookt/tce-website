import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import SectionCTA from '@/components/SectionCTA';
import TrustStrip from '@/components/TrustStrip';
import InlineCallStrip from '@/components/InlineCallStrip';

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

const DIFFERENCES = [
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Licensed by the Electrical Safety Authority',
    handyman: 'No formal credentials. Anyone can call themselves a handyman.',
    esa: `Tim is licensed by the Ontario Electrical Safety Authority (${client.licenseBody}). The licence number is on every quote, every permit, and every invoice. You can verify it on the ESA Find-a-Contractor site.`,
  },
  {
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    title: 'Pulls a real permit for permitted work',
    handyman: 'Skips the permit. The work might pass inspection. It also might not. Either way, there’s no paper trail.',
    esa: 'Every job that needs an ESA permit gets one. We pull it before the work starts. The inspector signs off when it’s done. You get the paperwork — for your insurer, your records, and the buyer if you ever sell.',
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: '$5 million in liability insurance',
    handyman: 'Often no liability insurance at all. If something goes wrong — a fire, a flooded basement, a tradesperson injured on site — you might be on the hook personally.',
    esa: 'Top Choice carries $5M general liability + WSIB coverage on every tradesperson on site. If the unthinkable happens, the insurance carries it. Not you.',
  },
  {
    icon: 'M3 5a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V5zM3 11a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z',
    title: 'Insurance claims actually pay out',
    handyman: 'If a fire starts in unpermitted wiring, your home insurance can deny the claim. Same with selling: undisclosed unpermitted electrical work is a deal-breaker on a home inspection.',
    esa: 'Permitted, inspected, paper-trailed electrical work is what insurers want to see. If you ever file a claim, you have the documentation. If you ever sell, the inspection passes clean.',
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: 'Knows the Ontario Electrical Safety Code',
    handyman: 'Might know what looks right. Doesn’t necessarily know the OESC, the AFCI requirements, the breaker sizing rules, the bonding requirements.',
    esa: `${client.yearsExperience} years on the tools means Tim has seen every kind of installation Ontario homes contain. He knows what the code requires, what the inspector will check, and what to do when the original work was done wrong.`,
  },
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'A real business with a real warranty',
    handyman: 'Cash deal, no warranty, no recourse if the work fails six months later. If something breaks, the number you have stops working.',
    esa: 'Top Choice is a registered business with a 1-year labour warranty and manufacturer warranties on every part. If the work fails, we come back and fix it. The phone keeps answering.',
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

      {/* === Trust strip === */}
      <TrustStrip />

      {/* === Comparison cards === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">Six real differences</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              What an ESA contractor gives you{' '}
              <span className="gradient-text">that a handyman can&apos;t.</span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-5">
            {DIFFERENCES.map((d, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[auto_1fr_1fr] gap-4 md:gap-6 bg-white border border-gray-200 rounded-2xl p-6 md:p-7"
              >
                <div className="md:row-span-2 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center self-start">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-amber-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d={d.icon} />
                  </svg>
                </div>
                <div className="md:col-span-2 mb-3 md:mb-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug">
                    {d.title}
                  </h3>
                </div>
                <div className="bg-red-50/60 border border-red-100 rounded-xl p-4">
                  <p className="text-red-700 text-xs font-bold uppercase tracking-wider mb-2">Handyman</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{d.handyman}</p>
                </div>
                <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">ESA-certified electrician</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{d.esa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Tap-to-call between sections === */}
      <InlineCallStrip
        variant="amber"
        headline="Got an electrical job? Hire the right person the first time."
        tagline={`${client.licenseBody}-licensed · $5M insured · 1-year warranty`}
      />

      {/* === The insurance angle deep dive === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">The insurance reality</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            Why most homeowner&apos;s policies <em className="not-italic gradient-text">require</em> ESA-permitted work.
          </h2>
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Most Canadian home-insurance policies have language that excludes losses caused by unpermitted electrical work. Read your policy — the words usually live under &ldquo;exclusions&rdquo; or &ldquo;loss caused by non-compliance with safety codes.&rdquo; The line is small. The financial exposure is not.
            </p>
            <p>
              If a fire starts in a knob-and-tube circuit that was &ldquo;repaired&rdquo; by a handyman with no permit and no ESA inspection, your insurer can deny the claim. Same logic applies to aluminum wiring without proper terminations, panels installed without permits, and DIY rewires that were never inspected.
            </p>
            <p>
              An ESA-permitted, ESA-inspected job ends with paperwork: the permit number, the inspector&apos;s sign-off, the certificate of inspection. That document is what your insurer wants to see if anything ever goes sideways. It&apos;s also what your real-estate lawyer wants to see when you sell.
            </p>
            <p className="text-amber-700 font-semibold">
              The few hundred dollars a permit costs is the cheapest insurance you can buy on an electrical job.
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
