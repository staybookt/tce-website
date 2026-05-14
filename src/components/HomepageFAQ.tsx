import { client } from '@/data/client';
import FAQSchema from './FAQSchema';

/**
 * Top-of-funnel FAQ for the homepage. Answers the questions people ask
 * before they call: cost, area coverage, why ESA matters, response time,
 * payment options, warranty. Six questions, short Tim-voice answers.
 *
 * Wired with FAQSchema for Google rich-result eligibility.
 */

const FAQS = [
  {
    q: 'How much does an electrician cost in York Region?',
    a: 'Most jobs in York Region and Simcoe County run $150–$300 for a service call, $800–$1,800 for an EV charger install, and $2,500–$4,500 for a 200-amp panel upgrade. Tim quotes on-site with no charge and no obligation — the price you get is the price you pay.',
  },
  {
    q: 'What cities does Top Choice Electrical serve?',
    a: 'Newmarket (the home base), Aurora, Richmond Hill, Markham, Vaughan, King City, East Gwillimbury, Bradford, Innisfil, Stouffville, and the rest of York Region and Simcoe County. Most jobs are within a 30-minute drive of Newmarket.',
  },
  {
    q: 'Why does my electrical work need to be done by an ESA-licensed electrician?',
    a: 'In Ontario, an ESA-licensed Electrical Contractor (LEC) is the only person allowed to pull a permit and have the job inspected. Without the permit and inspection, home insurance can deny a claim if anything goes wrong, and the work can flag during a home sale. ESA-licensed work means you have the paperwork your insurer wants.',
  },
  {
    q: 'How fast can Tim respond to an electrical emergency?',
    a: 'Most emergencies — power out, breaker tripping repeatedly, a burnt smell from an outlet — Tim is on site the same day. After-hours, weekends, and holidays included. The 24/7 emergency line is the same number as the regular phone: ' + client.phone + '.',
  },
  {
    q: 'Do you offer payment plans on bigger jobs?',
    a: 'Panel upgrades, EV charger installs, and full rewires can run $3k–$10k+. For jobs over $2,500, Tim can connect you with home-services financing if that helps spread the cost over 24–60 months. Ask about it on the quote call.',
  },
  {
    q: 'How long is the warranty on the work?',
    a: 'One-year labour warranty on every job, starting the day the ESA inspection passes. Manufacturer warranties on parts (Eaton, Square D, Leviton, etc.) are on top of that. If the work fails, Tim comes back and fixes it free.',
  },
];

export default function HomepageFAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <FAQSchema faqs={FAQS} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 md:mb-14 text-center max-w-2xl mx-auto">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
            Common questions
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            What homeowners ask before they call.
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-200 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 md:px-7 py-5 md:py-6 list-none">
                <h3 className="font-display text-base md:text-lg font-bold text-gray-900 tracking-tight leading-snug pr-2">
                  {f.q}
                </h3>
                <span className="shrink-0 w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                  {f.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          More questions? Call Tim direct at{' '}
          <a href={`tel:${client.phone}`} className="text-amber-700 font-semibold hover:underline">
            {client.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
