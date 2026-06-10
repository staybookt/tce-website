export const client = {
  // Business Info
  name: "Top Choice Electrical",
  legalName: "Top Choice Electrical",
  phone: "(416) 805-6676",
  email: "tim.ciszko@gmail.com",
  ownerName: "Tim Ciszkowski",
  address: "Newmarket, ON",
  hours: {
    regular: "Mon–Fri 7am–6pm, Sat 8am–2pm",
    emergency: "24/7 Emergency Service Available",
  },
  yearsInBusiness: 6,
  yearsExperience: 22,
  licenseNumber: "ESA Certified",
  liabilityInsurance: "$5,000,000",
  licenseBody: "Electrical Safety Authority (ESA)",
  insured: true,
  bonded: true,

  // Brand
  primaryColor: "#08080A",
  secondaryColor: "#2563EB",
  accentColor: "#06B6D4",
  logo: null as string | null,
  tagline: "Electrical work done right. Across York Region.",

  // Domain
  domain: "topchoiceelectrical.ca",
  existingSiteUrl: "https://www.topchoiceelectrical.ca",

  // Services
  services: [
    {
      slug: "panel-upgrades",
      name: "Panel Upgrades",
      shortDescription: "Safe, code-compliant electrical panel upgrades for homes and businesses.",
      icon: "Zap",
      image: "/images/work/IMG_3258.webp",
      keywords: ["panel upgrade Newmarket", "electrical panel upgrade York Region", "200 amp panel upgrade"],
    },
    {
      slug: "ev-charger-installation",
      name: "EV Charger Installation",
      shortDescription: "Level 2 home EV charger installation. Drive electric, charge at home.",
      icon: "BatteryCharging",
      image: "https://images.pexels.com/photos/9799734/pexels-photo-9799734.jpeg?auto=compress&cs=tinysrgb&w=1600",
      keywords: ["EV charger installation Newmarket", "home EV charger York Region", "Level 2 charger installation"],
    },
    {
      slug: "landscape-lighting",
      name: "Landscape Lighting",
      shortDescription: "Professional outdoor lighting that transforms your property after dark.",
      icon: "Sun",
      // Richard reference: wide estate at dusk — "pizazz" hero shot
      image: "/images/richard-landscape-2.webp",
      keywords: ["landscape lighting Newmarket", "outdoor lighting York Region", "garden lighting installation"],
    },
    {
      slug: "pot-light-installation",
      name: "Pot Light Installation",
      shortDescription: "Clean, modern recessed lighting for any room in your home.",
      icon: "Lightbulb",
      // Richard round 2: open-concept living room with 4 illuminated recessed pots
      image: "/images/richard-pot-lights.webp",
      keywords: ["pot light installation Newmarket", "recessed lighting York Region", "LED pot lights"],
    },
    {
      slug: "knob-and-tube-removal",
      name: "Knob & Tube Removal",
      shortDescription: "Safe removal of outdated knob-and-tube wiring to protect your home and family.",
      icon: "ShieldCheck",
      // Richard reference: actual K&T wiring in stud cavity
      image: "/images/richard-knob-and-tube.webp",
      keywords: ["knob and tube removal Newmarket", "knob and tube rewiring York Region", "old wiring replacement"],
    },
    {
      slug: "residential-wiring",
      name: "Residential Wiring",
      shortDescription: "Complete residential electrical wiring for renovations and new builds.",
      icon: "Home",
      image: "/images/work/IMG_6204.webp",
      keywords: ["residential electrician Newmarket", "house wiring York Region", "electrical wiring renovation"],
    },
    {
      slug: "commercial-electrical",
      name: "Commercial Electrical",
      shortDescription: "Reliable electrical services for offices, retail, and light commercial spaces.",
      icon: "Building",
      // Richard reference: commercial kitchen
      image: "/images/richard-commercial-primary.webp",
      keywords: ["commercial electrician Newmarket", "commercial electrical York Region", "office electrical"],
    },
    {
      slug: "generator-installation",
      name: "Generator Installation",
      shortDescription: "Whole-home backup generators so you never lose power when it matters.",
      icon: "Power",
      // Richard reference: Generac Guardian Series
      image: "/images/richard-generator-primary.webp",
      keywords: ["generator installation Newmarket", "whole home generator York Region", "backup power"],
    },
    {
      slug: "smoke-co-detectors",
      name: "Smoke & CO Detectors",
      shortDescription: "Code-compliant smoke and carbon monoxide detector installation and upgrades.",
      icon: "AlertTriangle",
      // Pexels free-licence: smoke detector + LED bulbs + smart camera — residential electrical fixtures composition.
      // Was IMG_6785 (pool store interior with a tiny detector in the ceiling) which Jacob flagged as not-actually-a-detector-photo.
      image: "https://images.pexels.com/photos/25020272/pexels-photo-25020272.jpeg?auto=compress&cs=tinysrgb&w=1600",
      keywords: ["smoke detector installation Newmarket", "carbon monoxide detector York Region", "CO detector installation"],
    },
    {
      slug: "smart-home-installation",
      name: "Smart Home Installation",
      shortDescription: "Smart thermostats, lighting, and security systems wired and set up properly.",
      icon: "Wifi",
      // Richard reference: smart home control panel
      image: "/images/richard-smart-home.webp",
      keywords: ["smart home electrician Newmarket", "smart thermostat installation York Region", "smart lighting installation"],
    },
    {
      slug: "esa-safety-inspections",
      name: "ESA Safety Inspections",
      shortDescription: "Certified electrical safety inspections for home sales, insurance, and peace of mind.",
      icon: "ClipboardCheck",
      image: "/images/work/IMG_5017.webp",
      keywords: ["ESA inspection Newmarket", "electrical safety inspection York Region", "home electrical inspection"],
    },
    {
      slug: "hot-tub-wiring",
      name: "Hot Tub Wiring",
      shortDescription: "Dedicated 240V circuits and GFCI disconnects for safe, code-compliant hot tub installations.",
      icon: "Waves",
      // Richard round 2: GFCI disconnect mounted next to outdoor hot tub
      image: "/images/richard-hot-tub.webp",
      keywords: ["hot tub wiring Newmarket", "hot tub electrician Aurora", "240V hot tub circuit York Region"],
    },
    {
      slug: "fpe-panel-replacement",
      name: "Federal Pacific Panel Replacement",
      shortDescription: "Safe replacement of Federal Pacific, Stab-Lok, and Zinsco panels flagged by insurers.",
      icon: "ShieldAlert",
      image: "/images/work/IMG_5375.webp",
      keywords: ["Federal Pacific panel replacement", "Stab-Lok panel replacement York Region", "Zinsco panel replacement Newmarket"],
    },
    {
      slug: "aluminum-wiring",
      name: "Aluminum Wiring Remediation",
      shortDescription: "Pigtailing and full aluminum wiring replacement for homes built between 1965 and 1976.",
      icon: "Cable",
      // Richard reference: aluminum branch wiring inside panel
      image: "/images/richard-aluminum-wiring.webp",
      keywords: ["aluminum wiring remediation York Region", "aluminum wiring pigtailing Newmarket", "AlumiConn connectors Aurora"],
    },
    {
      slug: "heat-pump-electrical",
      name: "Heat Pump Electrical",
      shortDescription: "Dedicated 240V circuits and panel work for heat pump installations and Greener Homes rebates.",
      icon: "Thermometer",
      // Richard reference: single outdoor heat pump unit
      image: "/images/richard-heat-pump-primary.webp",
      keywords: ["heat pump electrical Newmarket", "heat pump wiring York Region", "Greener Homes electrician Aurora"],
    },
    {
      slug: "battery-backup-installation",
      name: "Battery Backup Installation",
      shortDescription: "Tesla Powerwall, Generac PWRcell, and Enphase home battery installations.",
      icon: "BatteryFull",
      // Tim sent: Tesla Powerwall + Gateway + inverter garage install
      image: "/images/tim-battery-backup.webp",
      keywords: ["Tesla Powerwall installation York Region", "home battery backup Newmarket", "Generac PWRcell Aurora"],
    },
    {
      slug: "surge-protection",
      name: "Whole-Home Surge Protection",
      shortDescription: "Type 2 surge protective devices installed at the panel to protect electronics from grid surges.",
      icon: "Shield",
      // Richard reference: WHOLE HOUSE SURGE PROTECTOR mounted next to residential panel
      image: "/images/richard-surge-protection.webp",
      keywords: ["whole home surge protector Newmarket", "Type 2 SPD York Region", "surge protection installation Aurora"],
    },
    {
      slug: "ceiling-fan-installation",
      name: "Ceiling Fan Installation",
      shortDescription: "Ceiling fan installation including new ceiling boxes and circuits where none exist.",
      icon: "Fan",
      // Richard reference: residential ceiling fan in warm living room
      image: "/images/richard-ceiling-fan-primary.webp",
      keywords: ["ceiling fan installation Newmarket", "ceiling fan electrician York Region", "ceiling fan wiring Aurora"],
    },
  ],

  // Service Areas
  areas: [
    { slug: "newmarket", name: "Newmarket", region: "York Region", isPrimary: true,
      description: "Our home base. Tim's been wiring Newmarket homes for 15+ years — the 1965 split-levels along Davis Drive, the 1970s bungalows up around Mulock, the newer builds in Stonehaven and Glenway. Most of the panel upgrades and aluminum wiring jobs we do come from this town.",
      topServices: ["Panel Upgrades", "Knob & Tube Removal", "Pot Light Installation"],
    },
    { slug: "aurora", name: "Aurora", region: "York Region", isPrimary: true,
      description: "Aurora's mix of estate homes in Beacon Hall and post-war neighbourhoods in Aurora Heights means we're often switching between full rewires and 200-amp panel upgrades in the same week. The bigger homes near Bayview run heavier loads — EV chargers, hot tub disconnects, pool electrical.",
      topServices: ["EV Charger Installation", "Landscape Lighting", "Panel Upgrades"],
    },
    { slug: "east-gwillimbury", name: "East Gwillimbury", region: "York Region", isPrimary: false,
      description: "From the 1920s farmhouses in Holland Landing where the knob-and-tube might still be active, to the new subdivisions in Queensville with everything pre-wired. Tim's done full rewires in Sharon and Mount Albert that other electricians said would require gutting walls — they didn't.",
      topServices: ["Residential Wiring", "Panel Upgrades", "Generator Installation"],
    },
    { slug: "bradford", name: "Bradford", region: "Simcoe County", isPrimary: false,
      description: "Bradford West Gwillimbury is mostly newer builds with modern panels, but the older sections off Holland Street and out by Bond Head still have FPE panels and aluminum branch wiring waiting to be dealt with. Tim works the area regularly.",
      topServices: ["Generator Installation", "Residential Wiring", "Commercial Electrical"],
    },
    { slug: "keswick", name: "Keswick", region: "York Region", isPrimary: false,
      description: "Lakefront homes along Lake Drive and the year-round properties south of Sutton. Cottages converted to permanent residences in the 1980s usually still have their original panels — most need a 200-amp upgrade if anyone's planning a hot tub or heat pump.",
      topServices: ["Landscape Lighting", "Generator Installation", "Panel Upgrades"],
    },
    { slug: "stouffville", name: "Stouffville", region: "York Region", isPrimary: false,
      description: "Whitchurch-Stouffville mixes older Main Street homes with the newer subdivisions in Cedar Valley and Lemonville. The 1970s estate properties in the rural sections around Wheler's Mills often need both panel upgrades and Stab-Lok panel replacement.",
      topServices: ["Pot Light Installation", "Panel Upgrades", "EV Charger Installation"],
    },
    { slug: "king-city", name: "King City", region: "York Region", isPrimary: false,
      description: "Estate homes in Kingscross and the larger properties off Bathurst typically run heavy loads — multiple major appliances, pool houses, detached garage subpanels, EV chargers, and landscape lighting. King City accounts for a lot of our larger residential projects.",
      topServices: ["Landscape Lighting", "Panel Upgrades", "Residential Wiring"],
    },
    { slug: "richmond-hill", name: "Richmond Hill", region: "York Region", isPrimary: false,
      description: "From the 1960s and '70s homes in Mill Pond and Crosby to the newer builds in Bayview Hill and Oak Ridges. The older sections have plenty of Federal Pacific panels that insurance companies are now flagging — Tim's swapped dozens of them in Richmond Hill alone.",
      topServices: ["Commercial Electrical", "Pot Light Installation", "EV Charger Installation"],
    },
    { slug: "markham", name: "Markham", region: "York Region", isPrimary: false,
      description: "Markham's housing stock runs from heritage homes in Markham Village to mid-century in Unionville to brand-new builds in Cathedraltown and Cornell. The 1970s subdivisions are where we see most of the aluminum branch wiring remediation work.",
      topServices: ["EV Charger Installation", "Commercial Electrical", "Residential Wiring"],
    },
    { slug: "vaughan", name: "Vaughan", region: "York Region", isPrimary: false,
      description: "We work all four Vaughan communities — Maple, Kleinburg, Woodbridge, and Concord — each with its own housing patterns. Estate homes in Kleinburg need pool electrical and exterior lighting; the post-war neighbourhoods in Woodbridge are where we do most panel upgrades.",
      topServices: ["Commercial Electrical", "Panel Upgrades", "Pot Light Installation"],
    },
    { slug: "innisfil", name: "Innisfil", region: "Simcoe County", isPrimary: false,
      description: "South end of Simcoe County. The Friday Harbour development and the year-round homes along Lake Simcoe in Alcona drive a lot of newer EV charger and panel-upgrade work. Older cottages converted to permanent residences need full service upgrades for modern loads.",
      topServices: ["Generator Installation", "Panel Upgrades", "EV Charger Installation"],
    },
    { slug: "uxbridge", name: "Uxbridge", region: "Durham Region", isPrimary: false,
      description: "Heritage downtown homes, rural properties on larger lots, and new estate builds north of town. The 1920s and '30s homes around the core are where we see knob-and-tube and aluminum work; the new builds are clean panel hookups and EV charger installs.",
      topServices: ["Knob & Tube Removal", "Panel Upgrades", "Generator Installation"],
    },
  ],

  reviews: [] as Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
    service: string;
  }>,

  paymentMethods: ["Cash", "Cheque", "Interac e-Transfer", "Credit Card"],

  leadDelivery: {
    email: "tim.ciszko@gmail.com",
    smsNumber: "(416) 805-6676",
  },

  primaryKeyword: "electrician Newmarket",
  secondaryKeywords: [
    "electrician York Region",
    "electrical contractor Newmarket",
    "licensed electrician Aurora",
    "residential electrician York Region",
  ],
  googleBusinessUrl: null as string | null,
  googleRating: null as number | null,
  reviewCount: 0,

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    google: null as string | null,
  },
};

export type Client = typeof client;
export type Service = (typeof client.services)[number];
export type Area = (typeof client.areas)[number] & { description?: string; topServices?: string[] };
export type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
};
