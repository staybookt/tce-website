// Per-service "feature" image shown between AEO summary and intro on /services/[slug].
//
// History:
// - June 2026 audit (PR #16): replaced 17 of 18 original Unsplash picks with Tim's photos + verified stock
// - June 2026 Tim feedback (PR #17): removed IMG_3038 (not-to-code EV photo) sitewide
// - June 2026 Richard reference batch: 14 reference images via email.
// - June 2026 patch: added (2) versions of smart-home and surge-protection that were initially skipped.
// - June 2026 Richard round 2: 3 more refs solving content-mismatch on pot-light, hot-tub, emergency.
// - June 2026 Tim battery-backup: Tesla Powerwall photo replacing the EV-charger-lookalike.

export const serviceFeatureImage: Record<string, string> = {
  // Kept — only original Unsplash pick that survived the audit.
  'panel-upgrades': 'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?auto=format&fit=crop&w=1600&q=80',

  // Tim's real photos — topically matched (services Richard didn't provide refs for).
  'fpe-panel-replacement': '/images/work/IMG_5017.webp',
  'esa-safety-inspections': '/images/work/IMG_3258.webp',
  'residential-wiring': '/images/work/IMG_6785.webp',
  'ev-charger-installation': 'https://images.pexels.com/photos/9799734/pexels-photo-9799734.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'battery-backup-installation': '/images/tim-battery-backup.webp',           // Tim sent: Tesla Powerwall + Gateway + inverter garage install

  // Richard reference images.
  'aluminum-wiring': '/images/richard-aluminum-wiring.webp',                  // panel-internal aluminum wiring
  'knob-and-tube-removal': '/images/richard-knob-and-tube.webp',              // actual K&T in stud cavity
  'ceiling-fan-installation': '/images/richard-ceiling-fan-primary.webp',     // residential fan (NOT the HVLS (2))
  'commercial-electrical': '/images/richard-commercial-2.webp',               // buildout with panels + tools
  'generator-installation': '/images/richard-generator-2.webp',               // Generac + meter base + disconnect
  'heat-pump-electrical': '/images/richard-heat-pump-2.webp',                 // twin outdoor units
  'landscape-lighting': '/images/richard-landscape-primary.webp',             // tight shot of path + uplights
  'smart-home-installation': '/images/richard-smart-home-2.webp',             // (2) version — feature distinct from hero
  'surge-protection': '/images/richard-surge-protection-2.webp',              // (2) version — feature distinct from hero
  'pot-light-installation': '/images/richard-pot-lights.webp',                // Richard round 2: open-concept room with 4 lit pots
  'hot-tub-wiring': '/images/richard-hot-tub.webp',                            // Richard round 2: GFCI disconnect next to outdoor hot tub

  // Intentionally omitted — component renders null gracefully.
  // 'smoke-co-detectors': null        — Unsplash "smoke-alarm" results are commercial fire horns or atmospheric smoke
};
