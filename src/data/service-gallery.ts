// Per-service photo gallery — 4 rotating images per service page.
// Drives the <ServiceGallery> component on /services/[slug] pages.
//
// History:
// - Originally rotated Tim's real photos.
// - Tim feedback June 2026: IMG_3038 (not-to-code EV photo) removed from all rotations.
// - Richard reference batch June 2026: Richard's 14 reference images woven into 9 service
//   galleries alongside Tim's photos. Where Richard provided two images per service (primary + (2)),
//   both rotate in. The HVLS-style ceiling fan (2) is gallery-only per electrician review.

export const serviceGallery: Record<string, { src: string; alt: string }[]> = {
  'panel-upgrades': [
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical panel upgrades in York Region' },
  ],
  'ev-charger-installation': [
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical EV charger installation in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical EV charger installation in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical EV charger installation in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical EV charger installation in York Region' },
  ],
  'landscape-lighting': [
    { src: '/images/richard-landscape-2.webp', alt: 'Top Choice Electrical landscape lighting in York Region' },
    { src: '/images/richard-landscape-primary.webp', alt: 'Top Choice Electrical landscape lighting in York Region' },
    { src: '/images/work/IMG_3610.webp', alt: 'Top Choice Electrical landscape lighting in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical landscape lighting in York Region' },
  ],
  'pot-light-installation': [
    { src: '/images/work/IMG_6204.webp', alt: 'Top Choice Electrical pot light installation in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical pot light installation in York Region' },
    { src: '/images/work/IMG_2638.webp', alt: 'Top Choice Electrical pot light installation in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical pot light installation in York Region' },
  ],
  'knob-and-tube-removal': [
    { src: '/images/richard-knob-and-tube.webp', alt: 'Top Choice Electrical knob and tube removal in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical knob and tube removal in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical knob and tube removal in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical knob and tube removal in York Region' },
  ],
  'residential-wiring': [
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical residential wiring in York Region' },
    { src: '/images/work/IMG_6785.webp', alt: 'Top Choice Electrical residential wiring in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical residential wiring in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical residential wiring in York Region' },
  ],
  'commercial-electrical': [
    { src: '/images/richard-commercial-primary.webp', alt: 'Top Choice Electrical commercial electrical in York Region' },
    { src: '/images/richard-commercial-2.webp', alt: 'Top Choice Electrical commercial electrical in York Region' },
    { src: '/images/work/IMG_2638.webp', alt: 'Top Choice Electrical commercial electrical in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical commercial electrical in York Region' },
  ],
  'generator-installation': [
    { src: '/images/richard-generator-primary.webp', alt: 'Top Choice Electrical generator installation in York Region' },
    { src: '/images/richard-generator-2.webp', alt: 'Top Choice Electrical generator installation in York Region' },
    { src: '/images/work/IMG_5695.webp', alt: 'Top Choice Electrical generator installation in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical generator installation in York Region' },
  ],
  'smoke-co-detectors': [
    { src: '/images/work/IMG_6785.webp', alt: 'Top Choice Electrical smoke co detectors in York Region' },
    { src: '/images/work/IMG_6204.webp', alt: 'Top Choice Electrical smoke co detectors in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical smoke co detectors in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical smoke co detectors in York Region' },
  ],
  'smart-home-installation': [
    { src: '/images/richard-smart-home.webp', alt: 'Top Choice Electrical smart home installation in York Region' },
    { src: '/images/work/IMG_6204.webp', alt: 'Top Choice Electrical smart home installation in York Region' },
    { src: '/images/work/IMG_6785.webp', alt: 'Top Choice Electrical smart home installation in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical smart home installation in York Region' },
  ],
  'esa-safety-inspections': [
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical esa safety inspections in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical esa safety inspections in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical esa safety inspections in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical esa safety inspections in York Region' },
  ],
  'hot-tub-wiring': [
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical hot tub wiring in York Region' },
    { src: '/images/work/IMG_5695.webp', alt: 'Top Choice Electrical hot tub wiring in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical hot tub wiring in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical hot tub wiring in York Region' },
  ],
  'fpe-panel-replacement': [
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical fpe panel replacement in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical fpe panel replacement in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical fpe panel replacement in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical fpe panel replacement in York Region' },
  ],
  'aluminum-wiring': [
    { src: '/images/richard-aluminum-wiring.webp', alt: 'Top Choice Electrical aluminum wiring in York Region' },
    { src: '/images/work/IMG_1140.webp', alt: 'Top Choice Electrical aluminum wiring in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical aluminum wiring in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical aluminum wiring in York Region' },
  ],
  'heat-pump-electrical': [
    { src: '/images/richard-heat-pump-primary.webp', alt: 'Top Choice Electrical heat pump electrical in York Region' },
    { src: '/images/richard-heat-pump-2.webp', alt: 'Top Choice Electrical heat pump electrical in York Region' },
    { src: '/images/work/IMG_2638.webp', alt: 'Top Choice Electrical heat pump electrical in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical heat pump electrical in York Region' },
  ],
  'battery-backup-installation': [
    { src: '/images/work/IMG_5695.webp', alt: 'Top Choice Electrical battery backup installation in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical battery backup installation in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical battery backup installation in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical battery backup installation in York Region' },
  ],
  'surge-protection': [
    { src: '/images/richard-surge-protection.webp', alt: 'Top Choice Electrical surge protection in York Region' },
    { src: '/images/work/IMG_3258.webp', alt: 'Top Choice Electrical surge protection in York Region' },
    { src: '/images/work/IMG_5017.webp', alt: 'Top Choice Electrical surge protection in York Region' },
    { src: '/images/work/IMG_5375.webp', alt: 'Top Choice Electrical surge protection in York Region' },
  ],
  'ceiling-fan-installation': [
    { src: '/images/richard-ceiling-fan-primary.webp', alt: 'Top Choice Electrical ceiling fan installation in York Region' },
    { src: '/images/richard-ceiling-fan-2.webp', alt: 'Top Choice Electrical ceiling fan installation in York Region' },
    { src: '/images/work/IMG_6204.webp', alt: 'Top Choice Electrical ceiling fan installation in York Region' },
    { src: '/images/work/IMG_6785.webp', alt: 'Top Choice Electrical ceiling fan installation in York Region' },
  ],
};
