// Service categories used by the /services index page to group the 18 services
// into navigable sections. Order in the array = visual order on the page.
//
// IA restructured June 2026 per Tim's feedback:
//   1. Aluminum-wiring pulled out of "Panels & Power" — it's wiring, not panels.
//   2. New "Residential Wiring" bucket combining residential-wiring,
//      knob-and-tube-removal, and aluminum-wiring.
//   3. "Commercial" stands on its own — not tucked into wiring/reno.
//   4. Hot Tub Wiring added to featured pins so it surfaces visually —
//      Tim wants to promote this work.

export interface ServiceCategory {
  slug: string;          // url anchor, e.g. 'panels-power'
  title: string;         // section heading
  eyebrow: string;       // small uppercase label
  description: string;   // 1-line intro under the heading
  services: string[];    // service slugs from client.services
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'panels-power',
    title: 'Panels & power',
    eyebrow: 'Capacity, safety, backup',
    description: 'Anything that lives in or feeds your electrical panel. Upgrades, insurance-flagged replacements, generators, surge and battery backup.',
    services: [
      'panel-upgrades',
      'fpe-panel-replacement',
      'generator-installation',
      'battery-backup-installation',
      'surge-protection',
    ],
  },
  {
    slug: 'residential-wiring',
    title: 'Residential housing wiring',
    eyebrow: 'New builds, rewires, remediation',
    description: 'Branch wiring for new builds, additions, basement finishes, and renovations — plus knob-and-tube removal and aluminum-wire remediation for older homes.',
    services: [
      'residential-wiring',
      'knob-and-tube-removal',
      'aluminum-wiring',
    ],
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    eyebrow: 'Fit-outs, three-phase, inspection',
    description: 'Small-business buildouts — restaurants, retail, salons, offices. ESA-permitted, three-phase capable, scheduled around your trades. Stands on its own, not a residential offshoot.',
    services: [
      'commercial-electrical',
    ],
  },
  {
    slug: 'ev-energy',
    title: 'EV & energy',
    eyebrow: 'Charging at home, electrified heating',
    description: 'Level 2 EV chargers — Tesla, Grizzl-E, ChargePoint, FLO — plus the dedicated circuits and panel work for heat pumps and modern HVAC.',
    services: [
      'ev-charger-installation',
      'heat-pump-electrical',
    ],
  },
  {
    slug: 'lighting',
    title: 'Lighting',
    eyebrow: 'Interior, exterior, smart',
    description: 'Pot lights and recessed retrofits, exterior landscape lighting, ceiling fans, smart switches and thermostats wired in properly.',
    services: [
      'pot-light-installation',
      'landscape-lighting',
      'ceiling-fan-installation',
      'smart-home-installation',
    ],
  },
  {
    slug: 'safety',
    title: 'Safety & inspection',
    eyebrow: 'Code, insurance, peace of mind',
    description: 'ESA safety inspections for home sales and insurance renewals, plus code-compliant smoke and CO detector installs.',
    services: [
      'esa-safety-inspections',
      'smoke-co-detectors',
    ],
  },
  {
    slug: 'specialty',
    title: 'Specialty',
    eyebrow: 'Specific job, specific spec',
    description: 'Hot tub wiring — dedicated 240V circuit, GFCI disconnect, proper bonding, ESA permit. Tim does a lot of these.',
    services: [
      'hot-tub-wiring',
    ],
  },
];

// Featured services — pinned at the top of the /services page as large hero cards.
// Order matters: highest-intent first.
// Hot tub added June 2026 — Tim wants this promoted.
export const featuredServiceSlugs = [
  'panel-upgrades',
  'ev-charger-installation',
  'hot-tub-wiring',
  // 'emergency-electrician' is a special card — it points to /emergency-electrician
  // (its own page, not a service slug). Rendered manually in the page.
];
