import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';
import PageSchema from '@/components/PageSchema';

export const metadata: Metadata = {
  title: `Emergency Electrician in Newmarket & York Region | ${client.name}`,
  description: `24/7 emergency electrician serving Newmarket, Aurora, Richmond Hill, and all of York Region. Sparking outlets, burning smells, power loss, tripped breakers that won't reset. Call Tim at ${client.phone}.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca/emergency-electrician',
  },
  openGraph: {
    title: `Emergency Electrician in Newmarket & York Region | ${client.name}`,
    description: `24/7 emergency electrician serving York Region. Sparking outlets, burning smells, power loss. Call Tim at ${client.phone}.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Emergency Electrician — Top Choice Electrical' }],
  },
};

const emergencySigns = [
  {
    title: 'Burning smell at an outlet, switch, or panel',
    detail: 'Stop. Turn off the breaker for that circuit. Call us. This is the most common precursor to an electrical fire.',
  },
  {
    title: 'Sparks or visible arcing from an outlet or switch',
    detail: 'Don\'t touch it. Cut power at the panel if you can do it safely. We\'ll come out same-day.',
  },
  {
    title: 'A breaker that trips immediately every time you reset it',
    detail: 'Means there\'s a fault somewhere on that circuit. The breaker is doing its job — don\'t fight it. Leave it off and call.',
  },
  {
    title: 'Total power loss to part of the house but utility power is fine',
    detail: 'Often a tripped main breaker or a failing panel connection. Sometimes it\'s a half-loss (one leg of the 240V service is gone). Either way, it\'s a same-day call.',
  },
  {
    title: 'Outlets warm or hot to the touch',
    detail: 'Loose neutral or aluminum-wiring connection oxidizing. Heat in an outlet is a fire risk — stop using it and call.',
  },
  {
    title: 'Water touching electrical equipment',
    detail: 'Flooded basement with a live panel, water dripping near outlets, condensation in an outdoor disconnect. Shut off power at the meter if safe; call us before anyone touches the equipment.',
  },
  {
    title: 'Smoke from a panel, outlet, switch, or fixture',
    detail: 'Cut power at the main breaker and call 911 first. Then call us — we\'ll come out as soon as the fire service clears the scene.',
  },
  {
    title: 'GFCI or AFCI that keeps tripping and won\'t reset',
    detail: 'The device is protecting you. There\'s a real ground fault or arc fault somewhere on the circuit. Don\'t bypass it — call us.',
  },
];

const responseFaqs = [
  {
    q: 'How fast can you get here?',
    a: 'Tim texts back within 15 minutes 90% of the time, day or night. For non-life-threatening emergencies in York Region, on-site usually within 2-4 hours. For active sparking, burning, or fire-adjacent situations, drop everything and head over — usually under an hour from Newmarket / Aurora / Richmond Hill / Markham.',
  },
  {
    q: 'What does an emergency call cost?',
    a: 'Standard hours (Mon-Fri 7am-6pm, Sat 8am-2pm) — same pricing as regular service. After-hours / overnight / Sunday — there\'s a higher call-out rate that Tim quotes on the phone before he heads over. No surprises.',
  },
  {
    q: 'Should I call you or 911?',
    a: 'If there\'s active fire, smoke, or someone\'s been shocked — 911 first, always. Once the immediate danger is handled, call us to make the system safe again. For everything else (sparks, burning smell with no fire, panel issue, power loss) — call us directly.',
  },
  {
    q: 'Do you do real emergency work or just regular jobs marketed as emergencies?',
    a: 'Real emergency work. Tim has done midnight calls for a flooded basement panel, a sparking outdoor disconnect in a thunderstorm, a smoking fixture in a young family\'s nursery. The phone rings, he picks up, he comes.',
  },
  {
    q: 'What if it turns out not to be an emergency?',
    a: 'Tim will tell you on the phone. If a tripped breaker can wait until morning, he\'ll say so and book you in for the next day at regular rates. He won\'t talk you into an after-hours call if your situation doesn\'t need one.',
  },
];

export default function EmergencyElectricianPage() {
  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Emergency Electrician', url: '/emergency-electrician' },
        ]}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: responseFaqs.map((faq) => ({
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

      {/* Hero — phone-first */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_3258.webp"
            alt="Emergency electrical panel work — Top Choice Electrical"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-navy-dark/85 to-navy-dark/95" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="inline-flex items-center gap-2.5 bg-red-500/[0.15] backdrop-blur-md border border-red-400/30 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-red-100 text-sm font-medium tracking-wide uppercase">
                24/7 &middot; Tim picks up
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6 tracking-[-0.03em] max-w-4xl">
              Emergency Electrician in
              <br />
              <span className="gradient-text">Newmarket &amp; York Region.</span>
            </h1>

            <p className="text-white/70 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl">
              Sparks. Burning smell. A breaker that won&apos;t stay reset. Tim takes the call himself, day or night.
              ESA-certified, fully insured. Texts back within 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${client.phone}`}
                className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 text-center shadow-2xl shadow-amber-500/30 hover:scale-[1.02]"
              >
                Call Tim Now &mdash; {client.phone}
              </a>
              <a
                href={`sms:${client.phone.replace(/[^0-9]/g, '')}`}
                className="bg-white/10 hover:bg-white/15 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 text-center border border-white/20 backdrop-blur-sm"
              >
                Text a photo of the problem
              </a>
            </div>

            <p className="mt-6 text-white/50 text-sm">
              If there&apos;s active fire, smoke, or someone&apos;s been shocked — call 911 first. Then call us.
            </p>
          </div>
        </div>
      </section>

      {/* Direct-answer AEO summary */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 border-l-4 border-amber-500 rounded-r-xl p-8">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              Top Choice Electrical provides 24/7 emergency electrical service across York Region — Newmarket, Aurora,
              Richmond Hill, Markham, Vaughan, King City, Stouffville, and surrounding areas. Tim Ciszko, an ESA-certified
              Master Electrician with {client.yearsExperience}+ years of experience, takes emergency calls personally.
              Most non-life-threatening emergencies are on-site within 2-4 hours; active sparking, burning, or fire
              situations are prioritized for under-an-hour response. Standard rates during business hours; an after-hours
              call-out rate applies overnight, on Sundays, and on stat holidays — quoted up front before dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* What counts as an emergency */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Call Right Away If</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              Real electrical emergencies.
            </h2>
            <p className="text-gray-600 text-lg mt-5">
              These aren&apos;t inconveniences. They&apos;re fire risks, shock risks, or signs of a system
              that&apos;s about to fail. If you&apos;re seeing any of them, stop using the affected
              outlets and call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {emergencySigns.map((sign, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 transition-colors duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{sign.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{sign.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">When It Can Wait</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              A single breaker that tripped once and reset cleanly. A light that&apos;s out (probably the bulb).
              A flickering fixture on a windy day. An outlet that lost power to a single device. Annoying — but not
              dangerous. Call us during business hours and we&apos;ll book you in at regular rates.
            </p>
          </div>
        </div>
      </section>

      {/* Response promise */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">The Response</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-8">
                Tim picks up. Not a call centre.
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Most &ldquo;24/7 emergency electrician&rdquo; numbers route to a call-centre dispatcher who
                  takes your address and a credit card hold before anyone calls you back. Then maybe a tech
                  arrives in the morning.
                </p>
                <p>
                  Tim&apos;s phone goes off, Tim answers. If it&apos;s a real emergency, he&apos;s in the van
                  inside 15 minutes from Newmarket. If it&apos;s something that can wait, he&apos;ll tell you
                  that on the phone and book you in for the next day — no overnight charge to make a problem
                  that wasn&apos;t actually an emergency.
                </p>
                <p>
                  ESA-certified. Fully insured. Same name on the truck, the licence, and the invoice.
                </p>
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-amber-400 font-semibold text-xs uppercase tracking-[0.2em] mb-6">Typical Response</p>
              <div className="space-y-6">
                {[
                  { time: '15 min', what: 'Text or callback', detail: 'Tim confirms what you\'re seeing and whether it\'s safe to wait or he should head over now.' },
                  { time: '< 1 hour', what: 'On-site for fire / spark / smoke', detail: 'Active hazards in Newmarket, Aurora, Richmond Hill, Markham — same hour. Often under 30 minutes.' },
                  { time: '2-4 hours', what: 'On-site for non-life-threatening', detail: 'Tripped main, partial power loss, GFCI that won\'t reset, hot outlet. Same day across York Region.' },
                  { time: 'Next day', what: 'Booked at regular rates', detail: 'If it can wait, Tim says so. No upselling an emergency call you don\'t need.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="text-amber-400 font-display font-bold text-2xl w-24 shrink-0">{item.time}</div>
                    <div>
                      <p className="text-white font-bold mb-1">{item.what}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Common Questions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              Before you call, here&apos;s what people ask.
            </h2>
          </div>

          <div className="space-y-4">
            {responseFaqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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

      {/* Quote form / contact */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Not Urgent?</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
                Tell Tim about it.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                If it&apos;s not an active emergency but something&apos;s bothering you — flickering lights, a
                buzzing outlet, a breaker that keeps tripping — fill out the form. Tim texts back same day with
                a quote or a diagnostic visit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">ESA Certified &middot; Fully Insured &middot; Bonded</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{client.yearsExperience}+ years across York Region</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Same-day response across all York Region cities</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Send Tim the details</h3>
              <p className="text-gray-500 text-sm mb-6">30 seconds. Tim texts you back within 2 hours during business hours.</p>
              <QuoteForm preselectedService="Emergency / Diagnostic" />
            </div>
          </div>
        </div>
      </section>

      {/* Final emergency CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #2a1408 50%, #1a0a0a 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Smell smoke. See sparks. Call now.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Day or night. Tim picks up.
          </p>
          <a
            href={`tel:${client.phone}`}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-12 py-5 rounded-xl text-xl transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:scale-[1.02]"
          >
            Call Tim &mdash; {client.phone}
          </a>

          <p className="mt-8 text-white/40 text-sm">
            If there&apos;s active fire or someone&apos;s been shocked — 911 first.
          </p>
        </div>
      </section>
    </>
  );
}
