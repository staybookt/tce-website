// Per-service photo gallery — 4 rotating images per service page.
// Drives the <ServiceGallery> component on /services/[slug] pages.
//
// UPDATED: June 10 2026 — Professional quality images for visual consistency.
// Panel Upgrades: improved professional panel image.
// CTA section: night/evening landscape lighting for high-impact visual appeal.

export const serviceGallery: Record<string, { src: string; alt: string }[]> = {
  'panel-upgrades': [
    { src: '/images/panel-upgrade-professional.webp', alt: 'Professional electrical panel upgrades in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
  ],
  'ev-charger-installation': [
    { src: '/images/richard-ev-charger-primary.webp', alt: 'Professional EV charger installation in York Region' },
    { src: '/images/richard-ev-charger-2.webp', alt: 'EV charger electrical panel upgrade by Top Choice Electrical' },
    { src: '/images/richard-emergency.webp', alt: 'Professional electrical installation in York Region' },
    { src: '/images/richard-generator-primary.webp', alt: 'Residential electrical upgrade work' },
  ],
  'landscape-lighting': [
    { src: '/images/landscape-lighting-night.webp', alt: 'Professional night landscape lighting installation in York Region' },
    { src: '/images/richard-landscape-2.webp', alt: 'Top Choice Electrical landscape lighting in York Region' },
    { src: '/images/work/IMG_3610.webp', alt: 'Top Choice Electrical landscape lighting in York Region' },
    { src: '/images/richard-knob-and-tube.webp', alt: 'Professional electrical work in York Region' },
  ],
  'pot-light-installation': [
    { src: '/images/richard-pot-lights.webp', alt: 'Professional pot light installation by Top Choice Electrical in York Region' },
    { src: '/images/richard-commercial-2.webp', alt: 'Professional lighting installation work' },
    { src: '/images/work/IMG_2638.webp', alt: 'Top Choice Electrical pot light installation in York Region' },
    { src: '/images/richard-ceiling-fan-primary.webp', alt: 'Professional electrical work in York Region' },
  ],
  'knob-and-tube-removal': [
    { src: '/images/richard-knob-and-tube.webp', alt: 'Professional knob and tube removal in York Region' },
    { src: '/images/richard-commercial-primary.webp', alt: 'Professional electrical remediation work' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical knob and tube removal in York Region' },
    { src: '/images/richard-aluminum-wiring.webp', alt: 'Professional wiring remediation' },
  ],
  'residential-wiring': [
    { src: '/images/richard-residential-wiring.webp', alt: 'Professional residential wiring installation in York Region' },
    { src: '/images/richard-heat-pump-primary.webp', alt: 'Residential electrical work by Top Choice Electrical' },
    { src: '/images/richard-commercial-2.webp', alt: 'Professional residential electrical installation' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical residential wiring in York Region' },
  ],
  'commercial-electrical': [
    { src: '/images/richard-commercial-primary.webp', alt: 'Professional commercial electrical installation in York Region' },
    { src: '/images/richard-commercial-install.webp', alt: 'Commercial electrical panel upgrade work' },
    { src: '/images/richard-commercial-2.webp', alt: 'Top Choice Electrical commercial electrical in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical commercial electrical in York Region' },
  ],
  'generator-installation': [
    { src: '/images/richard-generator-primary.webp', alt: 'Professional generator installation by Top Choice Electrical in York Region' },
    { src: '/images/richard-generator-2.webp', alt: 'Top Choice Electrical generator installation in York Region' },
    { src: '/images/richard-commercial-primary.webp', alt: 'Professional electrical installation work' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical generator installation in York Region' },
  ],
  'smoke-co-detectors': [
    { src: '/images/richard-smoke-detector.webp', alt: 'Professional smoke and CO detector installation in York Region' },
    { src: '/images/richard-surge-protection.webp', alt: 'Professional electrical safety installation' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical smoke co detectors in York Region' },
    { src: '/images/richard-heat-pump-2.webp', alt: 'Professional electrical work in York Region' },
  ],
  'smart-home-installation': [
    { src: '/images/richard-smart-home-install.webp', alt: 'Professional smart home electrical installation in York Region' },
    { src: '/images/richard-smart-home.webp', alt: 'Smart home automation installation by Top Choice Electrical' },
    { src: '/images/richard-smart-home-2.webp', alt: 'Top Choice Electrical smart home installation in York Region' },
    { src: '/images/richard-ceiling-fan-primary.webp', alt: 'Professional smart home wiring work' },
  ],
  'esa-safety-inspections': [
    { src: '/images/richard-esa-inspection.webp', alt: 'Professional ESA safety inspection by Top Choice Electrical in York Region' },
    { src: '/images/richard-commercial-primary.webp', alt: 'ESA certified electrical inspection work' },
    { src: '/images/richard-residential-wiring.webp', alt: 'Professional electrical inspection in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical esa safety inspections in York Region' },
  ],
  'hot-tub-wiring': [
    { src: '/images/richard-hot-tub.webp', alt: 'Professional hot tub wiring installation by Top Choice Electrical in York Region' },
    { src: '/images/richard-commercial-2.webp', alt: 'Hot tub electrical installation work' },
    { src: '/images/richard-generator-2.webp', alt: 'Professional residential electrical work' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical hot tub wiring in York Region' },
  ],
  'fpe-panel-replacement': [
    { src: '/images/richard-fpe-panel.webp', alt: 'Professional FPE panel replacement by Top Choice Electrical in York Region' },
    { src: '/images/richard-commercial-primary.webp', alt: 'FPE panel upgrade and replacement work' },
    { src: '/images/richard-residential-wiring.webp', alt: 'Electrical panel replacement in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical fpe panel replacement in York Region' },
  ],
  'aluminum-wiring': [
    { src: '/images/richard-aluminum-wiring.webp', alt: 'Professional aluminum wiring remediation by Top Choice Electrical in York Region' },
    { src: '/images/richard-residential-wiring.webp', alt: 'Aluminum wire pigtailing and remediation work' },
    { src: '/images/richard-heat-pump-primary.webp', alt: 'Professional electrical remediation' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical aluminum wiring in York Region' },
  ],
  'heat-pump-electrical': [
    { src: '/images/richard-heat-pump-primary.webp', alt: 'Professional heat pump electrical installation by Top Choice Electrical in York Region' },
    { src: '/images/richard-heat-pump-2.webp', alt: 'Top Choice Electrical heat pump electrical in York Region' },
    { src: '/images/richard-commercial-2.webp', alt: 'Heat pump electrical installation work' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical heat pump electrical in York Region' },
  ],
  'battery-backup-installation': [
    { src: '/images/tim-battery-backup.webp', alt: 'Tesla Powerwall battery backup installation by Top Choice Electrical in York Region' },
    { src: '/images/richard-generator-2.webp', alt: 'Battery backup system installation work' },
    { src: '/images/richard-commercial-primary.webp', alt: 'Professional electrical system installation' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical battery backup installation in York Region' },
  ],
  'surge-protection': [
    { src: '/images/richard-surge-protection-install.webp', alt: 'Professional whole-home surge protection installation in York Region' },
    { src: '/images/richard-surge-protection-2.webp', alt: 'Surge protector installation by Top Choice Electrical' },
    { src: '/images/richard-commercial-primary.webp', alt: 'Professional surge protection installation work' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical surge protection in York Region' },
  ],
  'ceiling-fan-installation': [
    { src: '/images/richard-ceiling-fan-primary.webp', alt: 'Professional ceiling fan installation by Top Choice Electrical in York Region' },
    { src: '/images/richard-ceiling-fan-install.webp', alt: 'Ceiling fan electrical installation in York Region' },
    { src: '/images/richard-ceiling-fan-2.webp', alt: 'Top Choice Electrical ceiling fan installation in York Region' },
    { src: '/images/richard-residential-wiring.webp', alt: 'Professional electrical installation work' },
  ],
  'cta-featured': [
    { src: '/images/landscape-lighting-night.webp', alt: 'Professional night landscape lighting in York Region' },
  ],
};
