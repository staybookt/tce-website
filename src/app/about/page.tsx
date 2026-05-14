import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import SectionCTA from '@/components/SectionCTA';
import TrustStrip from '@/components/TrustStrip';
import PhotoBreak from '@/components/PhotoBreak';
import RecentWork from '@/components/RecentWork';

export const metadata: Metadata = {
  title: 'About Tim | Top Choice Electrical',
  description: `Tim Ciszkowski runs Top Choice Electrical out of Newmarket. ${client.yearsExperience}+ years wiring York Region homes. ESA-certified, insured, bonded. Tim works the job himself.`,
  alternates: { canonical: 'https://www.topchoiceelectrical.ca/about' },
  openGraph: {
    title: 'About Tim | Top Choice Electrical',
    description: `Tim Ciszkowski runs Top Choice Electrical out of Newmarket. ${client.yearsExperience}+ years wiring York Region homes. ESA-certified, insured, bonded.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Top Choice Electrical' }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* === Hero — elevated === */}
      <section className="relative min-h-[56vh] md:min-h-[64vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/work/IMG_5375.webp"
            alt="Tim Ciszkowski of Top Choice Electrical working on a residential panel"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">About · Tim Ciszkowski · Newmarket</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[0.95] max-w-4xl">
              Owner-operator electrician.{' '}
              <span className="gradient-text">Newmarket.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              Tim Ciszkowski runs Top Choice with a small crew out of Newmarket. The owner answers the phone, the owner shows up on the bigger jobs, and the work is referred. That&apos;s the whole story.
            </p>
          </div>
        </div>
      </section>

      {/* === Trust strip === */}
      <TrustStrip />

      {/* === Story Section — drop cap === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="animate-on-scroll">
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">How it started</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.05]">
                A van, a licence,{' '}
                <span className="gradient-text">and a phone that worked.</span>
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                <p className="first-letter:font-display first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                  Tim spent the first decade of his career at a larger electrical contractor. He watched homeowners get quoted one number and charged another. He watched corners get cut on circuits he&apos;d never run himself, because the company kept adding sales staff and call-centre overhead and the actual electricians on the ground had less and less say in how the work got done.
                </p>
                <p>
                  When Tim left, he bought a van and started knocking on doors in Newmarket. No franchise. No advertising. Just doing the job the way it should be done and trusting that word would travel in a small community. It did. Most of Top Choice&apos;s work today still comes from homeowners who heard about us from a neighbour.
                </p>
                <p>
                  Tim runs a small crew now &mdash; small enough that he&apos;s still on every site visit over $1,000, still pulls every permit himself, and still answers the phone when it rings. If you call this number, you&apos;re going to talk to him.
                </p>

              </div>
            </div>

            {/* Tim portrait placeholder + stats */}
            <div className="animate-on-scroll lg:sticky lg:top-28 space-y-5">
              {/* Portrait card — placeholder uses real work photo cropped portrait.
                  Swap src to actual Tim headshot when one is available. */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
                <Image
                  src="/images/work/IMG_5375.webp"
                  alt="Tim Ciszkowski, owner and master electrician at Top Choice Electrical"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px w-8 bg-amber-400" />
                    <span className="text-amber-300 text-[10px] font-bold uppercase tracking-[0.25em]">Owner-operator</span>
                  </div>
                  <p className="font-display text-white text-2xl font-bold leading-tight">Tim Ciszkowski</p>
                  <p className="text-white/70 text-sm mt-1">Master Electrician · ESA-Certified</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { number: `${client.yearsExperience}`, label: 'Years on the tools' },
                  { number: `${client.yearsInBusiness}`, label: 'Years on his own' },
                  { number: '$5M', label: 'Liability insurance coverage' },
                  { number: '24/7', label: 'Emergency response' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-6 text-center shadow-sm">
                    <p className="font-display text-3xl md:text-4xl font-bold text-amber-600 mb-1 leading-none">{stat.number}</p>
                    <p className="text-gray-600 text-xs leading-tight mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Byline banner — horizontal === */}
      <section className="bg-gradient-to-r from-amber-50 via-amber-50/60 to-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center shrink-0 shadow-md">
                <span className="font-display font-bold text-white text-2xl">TC</span>
              </div>
              <div>
                <p className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">Written by</p>
                <p className="font-display font-bold text-gray-900 text-xl md:text-2xl leading-tight">Tim Ciszkowski</p>
                <p className="text-gray-600 text-sm mt-0.5">Owner &amp; Master Electrician · ESA-Certified · Newmarket, ON</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:border-l md:border-amber-200 md:pl-8">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-gray-700 font-semibold">ESA-Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-gray-700 font-semibold">{client.yearsExperience}+ years on the tools</span>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href={`tel:${client.phone}`} className="text-amber-700 font-bold hover:text-amber-800 transition-colors">{client.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Photo break === */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <PhotoBreak
            image="/images/work/IMG_5017.webp"
            alt="Clean residential electrical panel installed by Top Choice Electrical, every breaker labelled by circuit"
            aspect="21/9"
          />
        </div>
      </section>

      {/* === Pull quote — housing stock by decade === */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative py-6 md:py-8">
            <svg className="absolute -top-2 -left-2 w-16 h-16 text-amber-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="relative pl-10 md:pl-14 pr-4 md:pr-8 border-l-4 border-amber-500">
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-[1.3] tracking-tight">
                Tim knows the housing stock by decade. The 1965 split-levels with the original 60-amp services. The late-70s builds with Federal Pacific panels. The 1920s farmhouses with knob-and-tube still in the attic. He doesn&apos;t have to guess what&apos;s behind the wall.
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="h-px w-8 bg-amber-500" />
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em]">
                  The work
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* === Tim's business rules to live by — consolidated values + voice === */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Owner-operator</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
              Tim&apos;s business rules{' '}
              <span className="gradient-text">to live by.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              The owner answers the phone, quotes the work, and is on site for every job over $1,000. The name on the truck, the licence, and the invoice is the same name. These are the six rules he holds himself and his crew to, every job, no exceptions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { rule: 'The owner shows up.', why: 'Tim quotes every job himself and is on site for anything over $1,000. The person you talk to is the person who does the work.' },
              { rule: 'I won’t quote a panel over the phone.', why: 'Service entrances, wire condition, code variances — they need eyes on. The walkthrough is free.' },
              { rule: 'The quote you get is the price you pay.', why: 'It doesn’t move unless you change scope. No change orders for things I should have flagged.' },
              { rule: 'Every permit. Every inspection. Every time.', why: `If the job needs an ESA permit, we pull it. ${client.licenseBody}. You get the paperwork at the end.` },
              { rule: 'I label every breaker by room.', why: 'A panel with a sticker saying “Kitchen” on it isn’t finished work. Every circuit gets named.' },
              { rule: 'I clean up before I leave.', why: 'Drywall dust, wire offcuts, packaging. The site looks like we were never there — except the work works.' },
            ].map((r, i) => (
              <div key={i} className="flex gap-4 bg-gradient-to-br from-amber-50/40 to-white border border-amber-100 rounded-2xl p-5 md:p-6 hover:border-amber-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 text-base mb-1.5 leading-snug">{r.rule}</p>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{r.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Recent work carousel — proof of the rules === */}
      <RecentWork />

      {/* === Photo break #2 — different photo than first === */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <PhotoBreak
            image="/images/work/IMG_3038.webp"
            alt="EV charger install by Top Choice Electrical in York Region"
            aspect="21/9"
          />
        </div>
      </section>

      {/* === Credentials — light theme, cleaner === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Credentials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              Licensed. Insured. Bonded.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'ESA Certified', value: client.licenseNumber, sub: client.licenseBody },
              { label: 'Fully Insured', value: 'General Liability', sub: "WSIB workers' coverage" },
              { label: 'Bonded', value: 'Property Protection', sub: 'Additional security on every job' },
              { label: 'Experience', value: `${client.yearsExperience}+ Years`, sub: 'Serving York Region & Simcoe' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-50/40 to-white border border-amber-100 rounded-2xl p-6 md:p-7">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center mb-4 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-amber-700 text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5">{item.label}</p>
                <p className="font-display text-gray-900 font-bold text-lg mb-1 leading-tight">{item.value}</p>
                <p className="text-gray-500 text-sm leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Where we work — compact link to /areas === */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Where we work</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-5">
                Newmarket-based.{` `}
                <span className="gradient-text">York Region covered.</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Twelve cities across York Region, Simcoe County, and Durham Region. Same-day quotes everywhere on the map. Click through to see the neighbourhoods we serve in each city.
              </p>
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-sm transition-colors"
              >
                See all service areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mini map — visual */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-amber-200/30 rounded-full blur-3xl scale-90 pointer-events-none" />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border border-amber-100 shadow-lg overflow-hidden">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <defs>
                    <radialGradient id="mini-zone" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Zone fill */}
                  <circle cx="50" cy="50" r="42" fill="url(#mini-zone)" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="0.25" strokeDasharray="1 1.4" opacity="0.5" />
                  {/* 11 city dots at approximate positions */}
                  {[[50,32],[47,21],[34,22],[26,32],[26,46],[33,58],[50,58],[44,62],[60,66],[68,58],[72,44]].map(([x,y],i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="2.2" fill="#f59e0b" opacity="0.2" />
                      <circle cx={x} cy={y} r="1.5" fill="#f59e0b" />
                      <circle cx={x} cy={y} r="0.55" fill="#fff" />
                    </g>
                  ))}
                  {/* HQ pulse */}
                  <circle cx="50" cy="50" r="3" fill="none" stroke="#f59e0b" strokeWidth="0.4" opacity="0">
                    <animate attributeName="r" from="3" to="10" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="50" r="3.2" fill="#f59e0b" />
                  <circle cx="50" cy="50" r="1.3" fill="#fff" />
                  <text x="50" y="56" fill="#0f172a" fontSize="3.2" fontWeight="800" textAnchor="middle" letterSpacing="-0.05">Newmarket</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Brands installed === */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Brands we install</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight max-w-2xl mx-auto">
              The equipment we trust on the panels we wire.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Square D', category: 'Panels' },
              { name: 'Eaton', category: 'Panels' },
              { name: 'Siemens', category: 'Panels' },
              { name: 'Generac', category: 'Generators' },
              { name: 'Tesla', category: 'EV / Powerwall' },
              { name: 'ChargePoint', category: 'EV chargers' },
              { name: 'Grizzl-E', category: 'EV chargers' },
              { name: 'FLO', category: 'EV chargers' },
              { name: 'Enphase', category: 'Battery backup' },
              { name: 'Lutron', category: 'Smart lighting' },
              { name: 'Leviton', category: 'Devices' },
              { name: 'Hubbell', category: 'Devices' },
            ].map((b) => (
              <div key={b.name} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-amber-300 transition-colors">
                <p className="font-display font-bold text-gray-900 text-sm leading-tight">{b.name}</p>
                <p className="text-gray-400 text-[11px] uppercase tracking-wider mt-1">{b.category}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
            Working with a specific brand or model? Mention it on the quote &mdash; chances are we&apos;ve installed it before.
          </p>
        </div>
      </section>

      {/* === CTA === */}
      <SectionCTA
        eyebrow="Talk to Tim"
        headline="Same-day quote. Same number every time."
        body="Single outlet to full rewire — Tim picks up, Tim quotes, Tim shows up."
        image="/images/work/IMG_5375.webp"
        imageAlt="Tim Ciszkowski on residential panel work in York Region"
        primaryCTA={{ label: `Call Tim — ${client.phone}`, href: `tel:${client.phone}` }}
        secondaryCTA={{ label: 'Request a quote online', href: '/contact' }}
      />
    </>
  );
}
