import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import PageSchema from '@/components/PageSchema';
import SectionCTA from '@/components/SectionCTA';

export const metadata: Metadata = {
  title: { absolute: 'Electrical Permits in Ontario | ESA Notifications' },
  description:
    'Almost all electrical work in Ontario needs an ESA notification, and your licensed contractor files it — not you. What that means and why it protects you.',
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/electrical-permits-ontario',
  },
  openGraph: {
    title: 'Electrical Permits in Ontario | ESA Notifications',
    description:
      'ESA notification versus building permit, who is required to file it, and what the Certificate of Acceptance is actually for.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Electrical permits in Ontario — Top Choice Electrical',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'Is an ESA notification the same as a building permit?',
    a: 'No, and this is the most common mix-up. An ESA notification covers the electrical work and is filed with the Electrical Safety Authority. A building permit comes from your municipality and covers structural, plumbing and mechanical work. A job can need one, the other, or both. Replacing a panel usually needs the ESA notification; finishing a basement typically needs both.',
  },
  {
    q: 'Who files the notification — me or the electrician?',
    a: 'Whoever is doing the work files it. If you hire someone, Ontario law requires that person to be a Licensed Electrical Contractor, and the notification is theirs to take out. If a contractor asks you to pull it in your own name, that is a signal worth paying attention to — it usually means they are not licensed to file one.',
  },
  {
    q: 'Can I do electrical work in my own house?',
    a: "ESA publishes specific guidance for homeowners doing their own work, and it is narrower than most people assume — it is limited to your own home, and the work still has to be filed with ESA and inspected. It does not extend to rental units, a property you do not live in, or work for anybody else. Read ESA's own DIY page before you start rather than relying on a contractor's summary, including ours.",
  },
  {
    q: 'What is a Certificate of Acceptance?',
    a: 'It is the document ESA issues once the work has been inspected and found to comply with the Ontario Electrical Safety Code. It is the proof the work was done properly. Keep it — it is what your insurer, your lawyer, or a buyer\'s agent will ask to see later.',
  },
  {
    q: 'What happens if work was done without a permit?',
    a: 'Nothing, right up until it matters. It surfaces when you sell and the buyer\'s lawyer asks for documentation on the panel, when you make a claim and your insurer investigates the cause, or when a future electrician opens the panel and finds work they cannot certify. At that point the cost of sorting it out is higher than the permit would ever have been, because someone has to inspect and often redo work that is already closed up behind drywall.',
  },
  {
    q: 'Do you handle all of this?',
    a: `Yes. ${client.name} is a licensed electrical contractor, so the notification is filed before work starts, the inspection is arranged with ${client.licenseBody}, and the Certificate of Acceptance comes to you when it passes. It is part of the job, not an extra you have to chase.`,
  },
];

export default function ElectricalPermitsOntarioPage() {
  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Electrical Permits in Ontario', url: '/electrical-permits-ontario' },
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
      <section className="relative min-h-[52vh] md:min-h-[58vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_3258.webp"
            alt="Permitted and inspected electrical work by Top Choice Electrical"
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
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Permits &amp; inspections</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[0.95] max-w-4xl">
              Electrical permits{' '}
              <span className="gradient-text">in Ontario.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              Almost all electrical work in Ontario has to be reported to the Electrical Safety Authority before it
              starts. If you hired someone, filing it is their job, not yours. Here is how it actually works and why
              the paperwork is the part that protects you.
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
              The thing people call an &ldquo;electrical permit&rdquo; in Ontario is an ESA notification of work. It is
              filed with {client.licenseBody}, not your municipality, and it is filed by whoever performs the work. When
              the job passes inspection, ESA issues a Certificate of Acceptance. That certificate is the document you
              will be asked for years later &mdash; by an insurer, a lawyer, or a buyer.
            </p>
          </div>
        </div>
      </section>

      {/* === Two different things === */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-3">Two different documents</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              ESA notification is not a building permit.
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              These get used interchangeably and they are not the same thing. Some jobs need one. Some need both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">ESA notification of work</h3>
              <ul className="space-y-2.5 text-gray-700 text-[15px] leading-relaxed">
                <li>Filed with the Electrical Safety Authority</li>
                <li>Covers the electrical work itself</li>
                <li>Filed by the party doing the work</li>
                <li>Results in a Certificate of Acceptance</li>
                <li>Needed for panel changes, new circuits, rewiring, service upgrades</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Municipal building permit</h3>
              <ul className="space-y-2.5 text-gray-700 text-[15px] leading-relaxed">
                <li>Filed with your town or city</li>
                <li>Covers structure, plumbing, HVAC, occupancy</li>
                <li>Usually the homeowner&apos;s or general contractor&apos;s responsibility</li>
                <li>Results in a municipal final inspection</li>
                <li>Needed for things like finishing a basement or an addition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === Who files === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">Who files it</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            If a contractor asks{' '}
            <span className="gradient-text">you</span> to pull the permit.
          </h2>
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              The notification is taken out by whoever is doing the work. In Ontario, if you are paying someone to do
              electrical work, that someone is required to be a Licensed Electrical Contractor &mdash; and the filing is
              theirs.
            </p>
            <p>
              So if a contractor suggests you file it in your own name as the homeowner, treat that as information. The
              common reason is that they are not licensed to file one. What it means practically is that the
              accountability for the work has quietly moved from them to you: the filing is in your name, the inspection
              outcome is yours, and if something is wrong later you have far less recourse.
            </p>
            <p>
              You can check any contractor&apos;s licence yourself in about thirty seconds, including ours, on the{' '}
              <a
                href="https://esasafe.com/customer/looking-for-an-lec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:underline font-semibold"
              >
                ESA contractor lookup
              </a>
              . There is more on why that licence matters on our{' '}
              <Link href="/why-esa-licensed" className="text-amber-600 hover:underline font-semibold">
                ESA-licensed vs handyman
              </Link>{' '}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* === Where it bites === */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">Why it matters later</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            Unpermitted work costs nothing until it costs a lot.
          </h2>
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-1.5">When you sell</h3>
              <p>
                Buyers&apos; lawyers ask for documentation on panel work and rewiring. No certificate means either a
                price reduction or a scramble to get work inspected that is already closed up behind finished walls.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1.5">When you claim</h3>
              <p>
                Most home policies have exclusions around unpermitted work and safety-code violations. If a fire starts
                in a circuit nobody ever inspected, the cause investigation is where that surfaces &mdash; at the worst
                possible moment.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1.5">When the next electrician arrives</h3>
              <p>
                An electrician who opens a panel full of work they cannot verify has a problem. They cannot certify
                someone else&apos;s undocumented work, so the honest ones will quote to make it right rather than build
                on top of it.
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
        eyebrow="Permitted, inspected, documented"
        headline="The paperwork is part of the job."
        body={`${client.yearsExperience} years on the tools, ${client.yearsInBusiness} running his own shop. Every job that needs a notification gets one, every inspection gets booked, and the certificate comes to you.`}
        image="/images/work/IMG_5017.webp"
        imageAlt="ESA-permitted electrical work by Top Choice Electrical"
        primaryCTA={{ label: `Call ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Ask about your job', href: '/contact' }}
      />
    </>
  );
}
