// Per-service "feature" image shown between AEO summary and intro on /services/[slug].
//
// History: the original entries were all Unsplash URLs picked by text-description
// search-rank. Audit (June 2026) found 17 of 18 were wrong — foreign-industrial
// stock, brand-promo of foreign EV chargers, off-topic shots, or category-
// mislabeled photos. Tim follow-up (June 2026) flagged IMG_3038 (EV charger photo)
// as not-to-code — stripped sitewide, replaced with verified Pexels stock.
//
// Current policy:
// 1. Where Tim has a real photo that matches the service, use it. Real beats stock.
// 2. Where Tim doesn't have a photo, use only visually-verified Unsplash/Pexels
//    images confirmed to depict the named service in a North American residential
//    context. No foreign-brand visible, no industrial settings, no "electrician in
//    hardhat with crossed arms" stock.
// 3. If neither exists, omit the entry. <ServiceFeatureImage> renders null when
//    the slug is missing — better null than wrong.

export const serviceFeatureImage: Record<string, string> = {
  // Kept — only original Unsplash pick that survived the audit.
  // Generic but plausible residential breakers, no foreign tells.
  'panel-upgrades': 'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?auto=format&fit=crop&w=1600&q=80',

  // Tim's real photos — topically matched.
  'fpe-panel-replacement': '/images/work/IMG_5017.webp',      // clean panel install — what replaces FPE
  'knob-and-tube-removal': '/images/work/IMG_5017.webp',      // actual K&T job, East Gwillimbury
  'esa-safety-inspections': '/images/work/IMG_3258.webp',     // clean panel that passed inspection
  'surge-protection': '/images/work/IMG_3258.webp',           // SPDs mount inside panels
  'residential-wiring': '/images/work/IMG_6785.webp',         // real interior wiring detail
  'commercial-electrical': '/images/work/IMG_2638.webp',      // Markham commercial / LED retrofit
  'pot-light-installation': '/images/work/IMG_6204.webp',     // Richmond Hill 12-pot install
  'landscape-lighting': '/images/work/IMG_3610.webp',         // King City 14-fixture estate package
  'generator-installation': '/images/work/IMG_5695.webp',     // Stouffville 22kW Generac

  // Visually-verified Pexels replacements (Chrome navigation + screenshot inspection).
  'ev-charger-installation': 'https://images.pexels.com/photos/9799734/pexels-photo-9799734.jpeg?auto=compress&cs=tinysrgb&w=1600',        // Tesla Wall Connector handle close-up, Kindel Media
  'heat-pump-electrical': 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1600',         // outdoor residential Carrier condenser, North American home
  'ceiling-fan-installation': 'https://images.pexels.com/photos/4030072/pexels-photo-4030072.jpeg?auto=compress&cs=tinysrgb&w=1600',       // installed residential bedroom ceiling fan

  // Intentionally omitted — no clean free-stock photo exists, component
  // renders null. Add when Tim sends a job-site phone photo from his next job.
  // 'aluminum-wiring': null           — niche topic, no acceptable free stock
  // 'hot-tub-wiring': null            — niche topic, no acceptable free stock
  // 'battery-backup-installation': null — Pexels/Unsplash Powerwall stock all has installer branding or wrong product
  // 'smart-home-installation': null   — no clean North American Decora-style switch stock available
  // 'smoke-co-detectors': null        — Unsplash "smoke-alarm" results are either commercial fire horns or atmospheric smoke
};
