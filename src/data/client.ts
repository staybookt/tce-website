export const client = {
  // Business Info
  name: "Top Choice Electrical",
  legalName: "Top Choice Electrical",
  phone: "(905) 555-0123",
  email: "tim@topchoiceelectrical.com",
  address: "York Region, ON",
  hours: {
    regular: "Mon–Fri 7am–6pm, Sat 8am–2pm",
    emergency: "24/7 Emergency Service Available",
  },
  yearsInBusiness: 15,
  licenseNumber: "EC-12345",
  licenseBody: "Electrical Safety Authority (ESA)",
  insured: true,
  bonded: true,

  // Brand
  primaryColor: "#1B3A5C",
  secondaryColor: "#D4A843",
  accentColor: "#2E7D32",
  logo: null as string | null,
  tagline: "York Region's Trusted Electrician",

  // Domain
  domain: "topchoiceelectrical.com",
  existingSiteUrl: "https://www.topchoiceelectrical.com",

  // Services
  services: [
    {
      slug: "panel-upgrades",
      name: "Panel Upgrades",
      shortDescription: "Safe, code-compliant electrical panel upgrades for homes and businesses.",
      icon: "Zap",
      keywords: ["panel upgrade Newmarket", "electrical panel upgrade York Region", "200 amp panel upgrade"],
    },
    {
      slug: "ev-charger-installation",
      name: "EV Charger Installation",
      shortDescription: "Level 2 home EV charger installation. Drive electric, charge at home.",
      icon: "BatteryCharging",
      keywords: ["EV charger installation Newmarket", "home EV charger York Region", "Level 2 charger installation"],
    },
    {
      slug: "landscape-lighting",
      name: "Landscape Lighting",
      shortDescription: "Professional outdoor lighting that transforms your property after dark.",
      icon: "Sun",
      keywords: ["landscape lighting Newmarket", "outdoor lighting York Region", "garden lighting installation"],
    },
    {
      slug: "pot-light-installation",
      name: "Pot Light Installation",
      shortDescription: "Clean, modern recessed lighting for any room in your home.",
      icon: "Lightbulb",
      keywords: ["pot light installation Newmarket", "recessed lighting York Region", "LED pot lights"],
    },
    {
      slug: "knob-and-tube-removal",
      name: "Knob & Tube Removal",
      shortDescription: "Safe removal of outdated knob-and-tube wiring to protect your home and family.",
      icon: "ShieldCheck",
      keywords: ["knob and tube removal Newmarket", "knob and tube rewiring York Region", "old wiring replacement"],
    },
    {
      slug: "residential-wiring",
      name: "Residential Wiring",
      shortDescription: "Complete residential electrical wiring for renovations and new builds.",
      icon: "Home",
      keywords: ["residential electrician Newmarket", "house wiring York Region", "electrical wiring renovation"],
    },
    {
      slug: "commercial-electrical",
      name: "Commercial Electrical",
      shortDescription: "Reliable electrical services for offices, retail, and light commercial spaces.",
      icon: "Building",
      keywords: ["commercial electrician Newmarket", "commercial electrical York Region", "office electrical"],
    },
    {
      slug: "generator-installation",
      name: "Generator Installation",
      shortDescription: "Whole-home backup generators so you never lose power when it matters.",
      icon: "Power",
      keywords: ["generator installation Newmarket", "whole home generator York Region", "backup power"],
    },
  ],

  // Service Areas
  areas: [
    { slug: "newmarket", name: "Newmarket", region: "York Region", isPrimary: true },
    { slug: "aurora", name: "Aurora", region: "York Region", isPrimary: true },
    { slug: "east-gwillimbury", name: "East Gwillimbury", region: "York Region", isPrimary: false },
    { slug: "bradford", name: "Bradford", region: "Simcoe County", isPrimary: false },
    { slug: "keswick", name: "Keswick", region: "York Region", isPrimary: false },
    { slug: "stouffville", name: "Stouffville", region: "York Region", isPrimary: false },
    { slug: "king-city", name: "King City", region: "York Region", isPrimary: false },
    { slug: "richmond-hill", name: "Richmond Hill", region: "York Region", isPrimary: false },
    { slug: "markham", name: "Markham", region: "York Region", isPrimary: false },
    { slug: "vaughan", name: "Vaughan", region: "York Region", isPrimary: false },
  ],

  // Reviews (placeholder — will pull from Google once GBP is set up)
  reviews: [
    {
      name: "Sarah M.",
      location: "Newmarket",
      rating: 5,
      text: "Tim and his team rewired our entire basement during a renovation. They showed up on time, cleaned up after themselves, and the work passed inspection on the first try. We've used them three times now.",
      service: "Residential Wiring",
    },
    {
      name: "David K.",
      location: "Aurora",
      rating: 5,
      text: "Had an EV charger installed in my garage. Tim walked me through the options, handled the permit, and had it done in a day. Charges perfectly every night.",
      service: "EV Charger Installation",
    },
    {
      name: "Maria R.",
      location: "Richmond Hill",
      rating: 5,
      text: "Our panel was from the 70s and our insurance company flagged it. Top Choice upgraded us to 200 amps and the whole process was smooth. Fair price, no surprises.",
      service: "Panel Upgrades",
    },
    {
      name: "James T.",
      location: "King City",
      rating: 5,
      text: "The landscape lighting completely changed our backyard. Tim designed a layout that highlights the stone wall and pathway. Neighbors keep asking who did it.",
      service: "Landscape Lighting",
    },
    {
      name: "Linda P.",
      location: "East Gwillimbury",
      rating: 5,
      text: "Had knob and tube wiring throughout our 1920s farmhouse. Tim removed all of it and rewired the house. It was a big job but they kept us informed every step of the way.",
      service: "Knob & Tube Removal",
    },
  ],

  // Payment
  paymentMethods: ["Cash", "Cheque", "Interac e-Transfer", "Credit Card"],

  // Lead Delivery
  leadDelivery: {
    email: "tim@topchoiceelectrical.com",
    smsNumber: "(905) 555-0123",
  },

  // SEO
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

  // Social (to be set up)
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    google: null as string | null,
  },
} as const;

export type Client = typeof client;
export type Service = (typeof client.services)[number];
export type Area = (typeof client.areas)[number];
export type Review = (typeof client.reviews)[number];
