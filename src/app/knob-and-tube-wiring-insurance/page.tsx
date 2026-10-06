import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import PageSchema from '@/components/PageSchema';
import SectionCTA from '@/components/SectionCTA';

export const metadata: Metadata = {
  title: { absolute: 'Knob & Tube Wiring and Ontario Home Insurance' },
  description:
    'Your insurer wants the knob-and-tube dealt with before renewal. What they actually ask for, the ESA documentation that satisfies it, and how to get it.',
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/knob-and-tube-wiring-insurance',
  },
  openGraph: {
    title: 'Knob & Tube Wiring and Ontario Home Insurance',
    description:
      'What "remediate the knob-and-tube" actually means, the difference between removing it and de-energizing it, and the certificate your insurer wants.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Knob and tube wiring and Ontario home insurance — Top Choice Electrical',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'Does knob-and-tube wiring have to be removed, or just disconnected?',
    a: 'This is the question that saves people the most money and almost nobody asks it. Insurers are generally concerned with knob-and-tube that is live. In many houses the practical answer is to run new circuits, transfer everything onto them, and permanently disconnect the old wiring at both ends — the physical wire stays in the wall cavity and the attic, dead. Tearing it all out means opening up finished walls and ceilings, which is where the cost escalates. Confirm what your specific insurer will accept in writing before you choose, because they are not all identical.',
  },
  {
    q: 'What documentation will my insurer want?',
    a: `Almost always an ESA Certificate of Acceptance — the document ${client.licenseBody} issues after the work has been inspected and passed. A contractor's invoice is not the same thing and is often not accepted. This is one of the clearest reasons to use a licensed electrical contractor for this specific job: an unlicensed person cannot file the notification, so there is no certificate at the end, so the work does not satisfy the condition you paid to satisfy.`,
  },
  {
    q: 'I just bought the house and have 60 days. Is that realistic?',
    a: 'Usually yes, if you start immediately. A closing condition with a short window is common and it is the most time-pressured version of this job. The constraint is rarely the wiring itself — it is scheduling the ESA inspection and getting any access issues sorted. Call as soon as you know the deadline rather than near the end of it, and tell us the date; it changes how the work gets sequenced.',
  },
  {
    q: 'Can it be done in stages?',
    a: 'Technically yes, and sometimes that is the right call for a budget. But understand what it does to the insurance problem: if any knob-and-tube is still live, you generally have not met the condition yet. Staging works when it is planned around getting all of it de-energized at a defined point, not when it leaves a few live circuits indefinitely.',
  },
  {
    q: 'Why do insurers care so much about it?',
    a: 'Knob-and-tube is not inherently defective — plenty of it was installed to the standard of its day and has sat quietly for ninety years. The concerns are about what has happened since: the original rubber and cloth insulation becomes brittle with age and heat, the splices were made in open air rather than in junction boxes, there is no ground conductor, and the system was designed for a house with a few light fixtures rather than one with a kitchen full of appliances. Add decades of homeowner modifications and building insulation packed over conductors that were meant to dissipate heat into open air, and the risk profile is genuinely different from modern cable.',
  },
  {
    q: 'What if only part of the house has it?',
    a: 'Extremely common, and it is good news for the scope. Many York Region houses have been partially updated already — the kitchen and bath rewired at some point, the original circuits still feeding bedroom lighting or an attic fixture. The first job is finding out exactly what is still live, which is a diagnostic visit rather than a guess. Sometimes the remaining scope is far smaller than the homeowner feared.',
  },
];

export default function KnobAndTubeInsurancePage() {
  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Knob & Tube Wiring and Insurance', url: '/knob-and-tube-wiring-insurance' },
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
            src="/images/work/IMG_5375.webp"
            alt="Residential rewiring work by Top Choice Electrical in York Region"
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
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Older homes</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[0.95] max-w-4xl">
              Knob-and-tube wiring{' '}
              <span className="gradient-text">and your insurer.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              If a renewal letter or a closing condition has put you on a deadline, the useful question isn&apos;t
              whether knob-and-tube is bad. It&apos;s what your insurer will actually accept as proof it&apos;s been
              dealt with &mdash; because that determines how much of your house has to come apart.
            </p>
          </div>
        </div>
      </section>

      {/* === Short answer === */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 border-l-4 border-amber-500 rounded-r-xl p-7 md:p-9">
            <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-3">The short answer</p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Many Ontario insurers either decline or restrict coverage on homes with live knob-and-tube, and some
              apply a surcharge instead. What they generally want is for the old wiring to stop carrying current
              &mdash; either removed, or permanently disconnected at both ends &mdash; and for that to be documented by
              an ESA Certificate of Acceptance. Removing every strand of dead wire from inside your walls is usually
              not the requirement, and assuming it is can multiply the cost of the job.
            </p>
          </div>
        </div>
      </section>

      {/* === Remove vs de-energize === */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">The distinction that matters</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Removed, or just{' '}
              <span className="gradient-text">permanently dead?</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              These are very different jobs with very different prices, and the words in your insurer&apos;s letter
              decide which one you need. Get their requirement in writing before anyone starts cutting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">De-energized in place</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                New circuits are run to everything the old wiring used to feed. The knob-and-tube is disconnected at
                both ends and left in the wall and attic, carrying nothing.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Far less damage to finished surfaces</li>
                <li>Accepted by many insurers when documented</li>
                <li>Usually the shorter timeline &mdash; relevant on a closing deadline</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Physically removed</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                The old conductors are pulled out of the structure entirely. That means access &mdash; opening walls and
                ceilings that are currently finished.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Required by some insurers and some lenders</li>
                <li>Makes sense during a gut renovation anyway</li>
                <li>Carries drywall, plaster and paint costs beyond the electrical</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === The sequence === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">How it goes</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-10">
            Four steps, in this order.
          </h2>
          <ol className="space-y-7">
            {[
              {
                n: '1',
                h: 'Get the requirement in writing',
                p: 'Ask your insurer or broker exactly what they need: removal, or de-energizing plus documentation. One sentence from them can change the scope of the job substantially. Do this first, before you book anyone.',
              },
              {
                n: '2',
                h: 'Find out what is actually still live',
                p: 'Most older houses have been partially updated already. A diagnostic visit establishes which circuits are still on knob-and-tube rather than assuming the whole house is. This is frequently where the scope shrinks.',
              },
              {
                n: '3',
                h: 'The work, under an ESA notification',
                p: 'New circuits run, loads transferred, old wiring disconnected at both ends. The notification is filed before work starts — see our page on how ESA permits work in Ontario.',
              },
              {
                n: '4',
                h: 'Inspection and certificate',
                p: 'ESA inspects and issues the Certificate of Acceptance. That is the document that goes to your insurer, and the one to keep for whenever you sell.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <div className="font-display text-3xl font-bold text-amber-500 w-10 shrink-0 leading-none pt-1">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5">{step.h}</h3>
                  <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">{step.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-gray-600 text-base leading-relaxed mt-10">
            More detail on the permit side is on our{' '}
            <Link href="/electrical-permits-ontario" className="text-amber-600 hover:underline font-semibold">
              Ontario electrical permits
            </Link>{' '}
            page, and the scope of the work itself is covered under{' '}
            <Link href="/services/knob-and-tube-removal" className="text-amber-600 hover:underline font-semibold">
              knob-and-tube removal
            </Link>
            . If your panel is also original, it is worth reading about{' '}
            <Link href="/federal-pioneer-stab-lok-panels" className="text-amber-600 hover:underline font-semibold">
              Federal Pioneer Stab-Lok panels
            </Link>{' '}
            &mdash; the two tend to turn up in the same houses.
          </p>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">Common questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              What homeowners ask us.
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl overflow-hidden border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
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
        eyebrow="On a deadline?"
        headline="Tell Tim the date your insurer gave you."
        body={`${client.yearsExperience} years in exactly this housing stock. First step is finding out how much is actually still live — which is often far less than the renewal letter made it sound.`}
        image="/images/work/IMG_3258.webp"
        imageAlt="Rewiring work by Top Choice Electrical"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Send the details', href: '/contact' }}
      />
    </>
  );
}
