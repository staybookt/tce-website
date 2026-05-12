// Before/after pairs for the BeforeAfterSlider component.
// "Before" images are stock photos representing the typical condition we
// encounter at the start of a job (we don't claim they're the exact before-
// state of any specific job — they're typical examples). "After" images are
// Tim's real work from /public/images/work/.

export interface BeforeAfterPair {
  beforeSrc: string;
  beforeLabel: string;
  beforeCaption: string;
  afterSrc: string;
  afterLabel: string;
  afterCaption: string;
}

const STOCK = 'https://images.unsplash.com';
const before = (id: string) => STOCK + '/' + id + '?auto=format&fit=crop&w=1600&q=80';

export const beforeAfterPairs: Record<string, BeforeAfterPair> = {
  'homepage': {
    beforeSrc: before('photo-1635335874521-7987db781153'),
    beforeLabel: 'Typical Before',
    beforeCaption: 'Old fuse / breaker panel — common in 1960s–80s York Region homes',
    afterSrc: '/images/work/IMG_5017.webp',
    afterLabel: "After — Tim's Work",
    afterCaption: '200A Square D panel, every circuit labelled, ESA inspected first visit',
  },
  'panel-upgrades': {
    beforeSrc: before('photo-1635335874521-7987db781153'),
    beforeLabel: 'Typical Before',
    beforeCaption: 'Original 60A or 100A panel — undersized for modern loads',
    afterSrc: '/images/work/IMG_3258.webp',
    afterLabel: "After — Tim's Work",
    afterCaption: 'New 200A service, every circuit labelled by room',
  },
  'fpe-panel-replacement': {
    beforeSrc: before('photo-1566417110090-6b15a06ec800'),
    beforeLabel: 'Typical Before',
    beforeCaption: 'Federal Pacific Stab-Lok — flagged by insurers since the 1980s',
    afterSrc: '/images/work/IMG_5375.webp',
    afterLabel: "After — Tim's Work",
    afterCaption: 'Code-compliant replacement panel, ESA-permitted and inspected',
  },
  'ev-charger-installation': {
    beforeSrc: before('photo-1601462904263-f2fa0c851cb9'),
    beforeLabel: 'Typical Before',
    beforeCaption: 'Standard garage with no dedicated EV circuit',
    afterSrc: '/images/work/IMG_3038.webp',
    afterLabel: "After — Tim's Work",
    afterCaption: 'Wall-mounted Level 2 charger on a dedicated 40A circuit',
  },
  'knob-and-tube-removal': {
    beforeSrc: before('photo-1645639417590-32e8778b2141'),
    beforeLabel: 'Typical Before',
    beforeCaption: "Active knob-and-tube — flagged by insurers, can't be insulated over",
    afterSrc: '/images/work/IMG_1140.webp',
    afterLabel: "After — Tim's Work",
    afterCaption: 'Modern NMD-90 wiring fished through existing wall cavities',
  },
  'aluminum-wiring': {
    beforeSrc: before('photo-1652715564391-38cc4475b7f5'),
    beforeLabel: 'Typical Before',
    beforeCaption: 'Aluminum branch wiring — oxidizes, overheats, fire risk',
    afterSrc: '/images/work/IMG_6785.webp',
    afterLabel: "After — Tim's Work",
    afterCaption: 'AlumiConn pigtails or full copper replacement, ESA-inspected',
  },
};
