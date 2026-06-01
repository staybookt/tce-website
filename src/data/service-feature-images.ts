// Per-service "feature" image shown between AEO summary and intro on /services/[slug].
//
// History: the original entries were all Unsplash URLs picked by text-description
// search-rank. Audit (June 2026) found 17 of 18 were wrong — foreign-industrial
// stock, brand-promo of foreign EV chargers, off-topic shots, or category-
// mislabeled photos. Same failure mode that killed the before/after slider in Wave 3.
//
// Current policy:
// 1. Where Tim has a real photo that matches the service, use it. Real beats stock.
// 2. Where Tim doesn't have a photo, use only metadata-verified Unsplash/Pexels
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
  'ev-charger-installation': '/images/work/IMG_3038.webp',    // Aurora Tesla Wall Connector install
  'pot-light-installation': '/images/work/IMG_6204.webp',     // Richmond Hill 12-pot install
  'landscape-lighting': '/images/work/IMG_3610.webp',         // King City 14-fixture estate package
  'generator-installation': '/images/work/IMG_5695.webp',     // Stouffville 22kW Generac

  // Metadata-verified Pexels/Unsplash replacements where Tim has no photo.
  // Each URL was verified via photographer caption, tags, and topical-search
  // inclusion before being added. Eyeball before merging.
  'battery-backup-installation': 'https://images.pexels.com/photos/33751679/pexels-photo-33751679.jpeg?auto=compress&cs=tinysrgb&w=1600',  // Tesla Powerwall 3 wall-mount, residential
  'heat-pump-electrical': 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1600',         // outdoor residential HVAC condenser, US front yard
  'ceiling-fan-installation': 'https://images.pexels.com/photos/4030072/pexels-photo-4030072.jpeg?auto=compress&cs=tinysrgb&w=1600',       // installed residential bedroom ceiling fan
  'smoke-co-detectors': 'https://images.unsplash.com/photo-1585367437379-e0b71bb18156?auto=format&fit=crop&w=1600&q=80',                   // wall-mounted residential smoke/CO alarm
  'smart-home-installation': 'https://images.pexels.com/photos/12996907/pexels-photo-12996907.jpeg?auto=compress&cs=tinysrgb&w=1600',      // installed white rocker switches on wall

  // Intentionally omitted — no clean free-stock photo exists, component
  // renders null. Add when Tim sends a job-site photo from his phone.
  // 'aluminum-wiring': null
  // 'hot-tub-wiring': null
};
