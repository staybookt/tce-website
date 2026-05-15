// Service categories used by the /services index page to group the 18 services
// into navigable sections. Order in the array = visual order on the page.

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
      'aluminum-wiring',
      'generator-installation',
      'battery-backup-installation',
      'surge-protection',
    ],
  },
  {
    slug: 'ev-energy',
    title: 'EV & Energy',
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
    slug: 'wiring',
    title: 'Wiring & renovation',
    eyebrow: 'New builds, additions, rewires',
    description: 'Basement finishes, additions, garage conversions, kitchen and bathroom renos, knob-and-tube removal, plus light commercial fit-outs.',
    services: [
      'residential-wiring',
      'commercial-electrical',
      'knob-and-tube-removal',
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
    description: 'Specific jobs that need a dedicated circuit and the right disconnect.',
    services: [
      'hot-tub-wiring',
    ],
  },
];

// Featured services — pinned at the top of the /services page as large hero cards.
// Order matters: highest-intent first.
export const featuredServiceSlugs = [
  'panel-upgrades',
  'ev-charger-installation',
  // 'emergency-electrician' is a special card — it points to /emergency-electrician
  // (its own page, not a service slug). Rendered manually in the page.
];
