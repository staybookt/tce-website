import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import PageSchema from '@/components/PageSchema';
import SectionCTA from '@/components/SectionCTA';

export const metadata: Metadata = {
  title: { absolute: 'Federal Pioneer Stab-Lok Panels | Ontario' },
  description:
    'Independent testing has reported Federal Pioneer Stab-Lok breakers failing to trip. What that means for your Ontario home, and how to tell what you have.',
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/federal-pioneer-stab-lok-panels',
  },
  openGraph: {
    title: 'Federal Pioneer Stab-Lok Panels | Ontario',
    description:
      'How to identify a Federal Pioneer Stab-Lok panel, what the documented concern actually is, and what ESA does and does not require.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Federal Pioneer Stab-Lok panels in Ontario — Top Choice Electrical',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'Does ESA require me to replace a Federal Pioneer panel?',
    a: 'No. The Electrical Safety Authority does not require replacement simply because a panel carries the Federal Pioneer name. There is no recall on the panels themselves and no legal obligation to swap one out. What triggers work is a specific defect found on inspection, an insurer or lender making it a condition, or a panel that is full, damaged, or too small for what the house now draws.',
  },
  {
    q: 'How do I know if I have one?',
    a: 'Look at the label on the panel door or the directory inside it — the name Federal Pioneer, Federal Pacific, FPE or Stab-Lok is usually printed there. The breakers are the other tell: Stab-Lok breakers have a distinctive narrow body and the toggles are often red, orange or black with a thin stem. Do not remove the dead front cover to look inside. The main lugs stay energized even with the main breaker off.',
  },
  {
    q: 'What is actually wrong with them?',
    a: 'The documented concern is failure to trip. Independent bench testing of Stab-Lok breakers, including Canadian Federal Pioneer units, has reported a meaningful share failing to open under overcurrent conditions — the one job a breaker exists to do. Schneider Canada also recalled certain Federal Pioneer breakers in 1997. The reported issue is attributed to the breaker design rather than to age, which is why fitting a brand-new breaker of the same type is not treated as a fix.',
  },
  {
    q: 'My home inspection flagged the panel. Does that mean I have to replace it?',
    a: 'Not automatically. A home inspector flags the panel type because it is a known talking point, not because they have tested your specific breakers. What it does mean is that it will come up in the negotiation and may come up again with your insurer. Getting a licensed electrician to actually assess it gives you something factual to work from instead of a line on a report.',
  },
  {
    q: 'Can you just replace the breakers instead of the whole panel?',
    a: 'Sometimes, but it is often the wrong value. Because the reported concern is with the breaker design, replacing like with like does not address it, and compatible alternatives are limited and not cheap. In a lot of houses the panel is also already full or undersized for a heat pump, an EV charger or a finished basement — at which point a service upgrade solves three problems for one mobilization instead of one problem twice.',
  },
  {
    q: 'Do you pull the ESA permit?',
    a: `Yes. ${client.name} is a licensed electrical contractor, so the ESA notification is filed by us before the work starts, the inspection is arranged, and you receive the Certificate of Acceptance when it passes. That certificate is the document your insurer or your buyer's lawyer will ask for.`,
  },
];

const IDENTIFY = [
  {
    label: 'The name on the label',
    detail:
      'Federal Pioneer, Federal Pacific, FPE, or Stab-Lok printed on the panel door, the inside of the cover, or the circuit directory.',
  },
  {
    label: 'The breaker toggles',
    detail:
      'Narrow-bodied breakers with thin stem toggles, commonly red, orange or black. They look visibly different from a modern Siemens, Schneider or Eaton breaker.',
  },
  {
    label: 'The era of the house',
    detail:
      'Common in Ontario homes wired roughly from the 1960s through the early 1980s — which covers a lot of the original housing stock in Newmarket, Aurora and Richmond Hill.',
  },
  {
    label: 'A previous inspection report',
    detail:
      'If the house changed hands in the last decade, the panel type is often already noted in the home inspection from that sale.',
  },
];

export default function FederalPioneerStabLokPage() {
  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Federal Pioneer Stab-Lok Panels', url: '/federal-pioneer-stab-lok-panels' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* === Hero === */}
      <section className="relative min-h-[56vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5017.webp"
            alt="Electrical panel work by Top Choice Electrical in York Region"
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
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Ontario panels</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[0.95] max-w-4xl">
              Federal Pioneer{' '}
              <span className="gradient-text">Stab-Lok panels.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              If a home inspector or an insurer has flagged your panel, here is the honest version: what the documented
              concern actually is, what ESA does and does not require, and how to find out whether yours is a problem
              before anyone sells you a new one.
            </p>
          </div>
        </div>
      </section>

      {/* === The short answer === */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 border-l-4 border-amber-500 rounded-r-xl p-7 md:p-9">
            <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-3">The short answer</p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Federal Pioneer was the Canadian licensee of the Stab-Lok breaker design; Federal Pacific and FPE are the
              US names for the same system. The documented concern is that these breakers have been reported to fail to
              trip under overcurrent — the one thing a breaker exists to do. There is no ESA requirement to replace the
              panel because of its brand. There is a good reason to have one actually tested rather than guessed at.
            </p>
          </div>
        </div>
      </section>

      {/* === What the concern is === */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">What is documented</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            A breaker that doesn&apos;t trip is{' '}
            <span className="gradient-text">a breaker that isn&apos;t there.</span>
          </h2>
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              A circuit breaker has one safety job. When a circuit draws more current than the wire behind the wall can
              carry, the breaker opens and cuts the power before the wire gets hot enough to start a fire. Everything
              else about a panel is convenience. That one function is the safety.
            </p>
            <p>
              Independent bench testing of Stab-Lok breakers over several decades, including Canadian Federal Pioneer
              units, has reported a meaningful proportion failing to open under overcurrent conditions. Schneider Canada
              recalled certain Federal Pioneer breakers in 1997. The reported failure is attributed to the design of the
              breaker rather than to its age, which is the part that matters practically: putting a brand-new breaker of
              the same type into the same panel is not generally treated as having solved anything.
            </p>
            <p>
              What this does <em className="not-italic font-semibold">not</em> mean is that every Federal Pioneer panel
              in Ontario is about to cause a fire. Plenty have sat in service for forty years without incident. It means
              the protection you are relying on is less certain than the protection a modern panel gives you, and that
              uncertainty is worth resolving deliberately rather than ignoring or panicking about.
            </p>
          </div>
        </div>
      </section>

      {/* === How to identify === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">Identifying one</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Four ways to tell what you have.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {IDENTIFY.map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 md:p-7">
            <div className="flex gap-4 items-start">
              <svg
                className="w-6 h-6 text-red-600 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <p className="font-bold text-gray-900 mb-1">Don&apos;t take the cover off.</p>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  The main lugs inside a panel stay energized even when the main breaker is switched off. Reading the
                  label on the outside is safe. Removing the dead front is not. Send us a photo of the panel door
                  instead &mdash; text it to {client.phone} and we can usually tell you what it is from that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === What it means in practice === */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">In practice</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            Where this usually comes up.
          </h2>
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-1.5">On a home inspection</h3>
              <p>
                Inspectors flag the panel type because it is known, not because they have tested your breakers. It
                becomes a negotiating point. An actual assessment from a licensed electrician gives you a fact to
                replace the flag with.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1.5">With your insurer</h3>
              <p>
                Some insurers ask about panel type at renewal or when you switch providers. If yours makes replacement a
                condition of coverage, what they want afterwards is documentation &mdash; which is the{' '}
                <Link href="/why-esa-licensed" className="text-amber-600 hover:underline font-semibold">
                  ESA Certificate of Acceptance
                </Link>{' '}
                a licensed contractor obtains for you.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1.5">When the house needs more power</h3>
              <p>
                This is the common one. The panel is full, or you are adding an{' '}
                <Link href="/services/ev-charger-installation" className="text-amber-600 hover:underline font-semibold">
                  EV charger
                </Link>
                , a heat pump, or a finished basement, and the existing service cannot carry it. At that point a{' '}
                <Link href="/services/panel-upgrades" className="text-amber-600 hover:underline font-semibold">
                  service upgrade
                </Link>{' '}
                resolves the panel question and the capacity question in one visit rather than two.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">Common questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              What homeowners ask us.
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        eyebrow="Find out instead of guessing"
        headline="Send Tim a photo of your panel door."
        body={`${client.yearsExperience} years on the tools, most of it in York Region housing stock from exactly this era. Tim will tell you what you have, whether it needs doing, and what it would take — and he will tell you if the answer is nothing.`}
        image="/images/work/IMG_3258.webp"
        imageAlt="ESA-certified panel work by Top Choice Electrical"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Send a photo and details', href: '/contact' }}
      />
    </>
  );
}
