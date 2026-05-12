import { areaNeighbourhoods } from '@/data/area-neighbourhoods';
import { areaCharacter } from '@/data/area-character';

interface Props {
  slug: string;
  areaName: string;
  region: string;
  topServices: string[];
}

/**
 * Area-specific FAQ accordion. Questions are templated with the city name
 * and answers interpolate area data (neighbourhoods, region, top services).
 *
 * Plain HTML accordion using <details>/<summary> — keyboard-friendly,
 * no JS state, native browser behaviour.
 */
export default function AreaFAQ({ slug, areaName, region, topServices }: Props) {
  const hoods = areaNeighbourhoods[slug] || [];
  const landmarks = areaCharacter[slug]?.knownFor || '';
  const firstThreeHoods = hoods.slice(0, 3).join(', ');
  const topService = topServices[0] || 'panel upgrades';

  const faqs = [
    {
      q: `How fast can you get to ${areaName}?`,
      a: `Newmarket is the headquarters — most jobs in ${areaName} are same-day for the quote and within 48 hours for the work itself. Emergency calls in ${areaName} typically get on-site within a few hours of the call.`,
    },
    {
      q: `Do you handle older homes in ${areaName}?`,
      a: hoods.length > 0
        ? `Yes — we know the housing stock in ${areaName} street by street. ${firstThreeHoods} all have homes from different eras, and we handle the older electrical that comes with them: 60A fuse panels, Federal Pacific replacements, knob-and-tube removal, aluminum wiring remediation. Every job is ESA-permitted and inspected.`
        : `Yes — we handle older homes across ${areaName} regularly. Federal Pacific replacements, knob-and-tube removal, aluminum wiring remediation, full rewires. Every job is ESA-permitted and inspected.`,
    },
    {
      q: `What kind of electrical work do you do most often in ${areaName}?`,
      a: topServices.length > 0
        ? `In ${areaName} the most-requested services are ${topServices.slice(0, 3).join(', ').toLowerCase()}. ${landmarks ? `Properties near ${landmarks.split(',')[0].trim()} and elsewhere in town keep us busy on this work year-round.` : ''}`
        : `${topService} is the most common, plus full residential wiring, EV chargers, and emergency calls.`,
    },
    {
      q: `Do you do commercial electrical in ${areaName}?`,
      a: `Yes. Restaurant kitchens, retail fit-outs, salon and clinic buildouts, small-office renovations, three-phase service upgrades. We work from your drawings (or with your designer to spec them out), pull the ESA commercial permit, and coordinate with the property manager on power shutdowns and after-hours work where needed.`,
    },
    {
      q: `Are there any neighbourhoods in ${areaName} you don't cover?`,
      a: hoods.length > 0
        ? `We cover all of ${areaName} — ${hoods.join(', ')} are all in the regular service area. If you're not sure whether your specific street is in range, give us a call.`
        : `We cover the entire ${areaName} area in ${region}. If your specific street is outside the main neighbourhoods, give us a call — most cases the answer is yes.`,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">{areaName} FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Common questions from {areaName} homeowners.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-amber-200 transition-colors">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                <svg className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-45 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </summary>
              <div className="px-5 pb-5 -mt-1">
                <p className="text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
