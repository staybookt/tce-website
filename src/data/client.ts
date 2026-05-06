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
  primaryColor: "#08080A",
  secondaryColor: "#2563EB",
  accentColor: "#06B6D4",
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
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["panel upgrade Newmarket", "electrical panel upgrade York Region", "200 amp panel upgrade"],
    },
    {
      slug: "ev-charger-installation",
      name: "EV Charger Installation",
      shortDescription: "Level 2 home EV charger installation. Drive electric, charge at home.",
      icon: "BatteryCharging",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80",
      keywords: ["EV charger installation Newmarket", "home EV charger York Region", "Level 2 charger installation"],
    },
    {
      slug: "landscape-lighting",
      name: "Landscape Lighting",
      shortDescription: "Professional outdoor lighting that transforms your property after dark.",
      icon: "Sun",
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80",
      keywords: ["landscape lighting Newmarket", "outdoor lighting York Region", "garden lighting installation"],
    },
    {
      slug: "pot-light-installation",
      name: "Pot Light Installation",
      shortDescription: "Clean, modern recessed lighting for any room in your home.",
      icon: "Lightbulb",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["pot light installation Newmarket", "recessed lighting York Region", "LED pot lights"],
    },
    {
      slug: "knob-and-tube-removal",
      name: "Knob & Tube Removal",
      shortDescription: "Safe removal of outdated knob-and-tube wiring to protect your home and family.",
      icon: "ShieldCheck",
      image: "https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["knob and tube removal Newmarket", "knob and tube rewiring York Region", "old wiring replacement"],
    },
    {
      slug: "residential-wiring",
      name: "Residential Wiring",
      shortDescription: "Complete residential electrical wiring for renovations and new builds.",
      icon: "Home",
      image: "https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["residential electrician Newmarket", "house wiring York Region", "electrical wiring renovation"],
    },
    {
      slug: "commercial-electrical",
      name: "Commercial Electrical",
      shortDescription: "Reliable electrical services for offices, retail, and light commercial spaces.",
      icon: "Building",
      image: "https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["commercial electrician Newmarket", "commercial electrical York Region", "office electrical"],
    },
    {
      slug: "generator-installation",
      name: "Generator Installation",
      shortDescription: "Whole-home backup generators so you never lose power when it matters.",
      icon: "Power",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80",
      keywords: ["generator installation Newmarket", "whole home generator York Region", "backup power"],
    },
    {
      slug: "smoke-co-detectors",
      name: "Smoke & CO Detectors",
      shortDescription: "Code-compliant smoke and carbon monoxide detector installation and upgrades.",
      icon: "AlertTriangle",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
      keywords: ["smoke detector installation Newmarket", "carbon monoxide detector York Region", "CO detector installation"],
    },
  ],

  // Service Areas
  areas: [
    { slug: "newmarket", name: "Newmarket", region: "York Region", isPrimary: true,
      description: "Our home base. We know Newmarket's housing stock inside and out, from the older homes along Main Street South that still have knob-and-tube, to the newer builds in Bristol and Glenway that need EV charger circuits. Most of our emergency calls come from Newmarket, and we can usually be on-site within 30 minutes.",
      topServices: ["Panel Upgrades", "Knob & Tube Removal", "Pot Light Installation"],
    },
    { slug: "aurora", name: "Aurora", region: "York Region", isPrimary: true,
      description: "Aurora has some of the highest EV adoption rates in York Region, and we've installed more Level 2 chargers here than anywhere else. We also do a lot of landscape lighting work in Aurora's established neighbourhoods, where homeowners are investing in curb appeal.",
      topServices: ["EV Charger Installation", "Landscape Lighting", "Panel Upgrades"],
    },
    { slug: "east-gwillimbury", name: "East Gwillimbury", region: "York Region", isPrimary: false,
      description: "East Gwillimbury is growing fast. Between the new subdivisions in Holland Landing and the older rural properties in Mount Albert, we handle everything from new-build rough-ins to upgrading panels in century homes that were never designed for modern electrical loads.",
      topServices: ["Residential Wiring", "Panel Upgrades", "Generator Installation"],
    },
    { slug: "bradford", name: "Bradford", region: "Simcoe County", isPrimary: false,
      description: "We cross the York Region line into Bradford regularly. It's a quick drive from our base in Newmarket, and Bradford's mix of new construction and agricultural properties means we see a wide range of work here, from barn power feeds to whole-house generators for properties that lose power during ice storms.",
      topServices: ["Generator Installation", "Residential Wiring", "Commercial Electrical"],
    },
    { slug: "keswick", name: "Keswick", region: "York Region", isPrimary: false,
      description: "Keswick's lakefront properties along Lake Simcoe have unique electrical needs. We handle dock lighting, outdoor entertainment areas, and the seasonal panel loads that come with cottages being converted to year-round homes. Storm-related power issues are common here, and we respond quickly.",
      topServices: ["Landscape Lighting", "Generator Installation", "Panel Upgrades"],
    },
    { slug: "stouffville", name: "Stouffville", region: "York Region", isPrimary: false,
      description: "Stouffville's blend of historic downtown buildings and rapidly expanding residential neighbourhoods keeps us busy. We do a lot of pot light retrofits in the older homes along Main Street and panel upgrades in the new developments that aren't wired for the owner's planned hot tub or EV charger.",
      topServices: ["Pot Light Installation", "Panel Upgrades", "EV Charger Installation"],
    },
    { slug: "king-city", name: "King City", region: "York Region", isPrimary: false,
      description: "King City's estate properties often need specialized electrical work. Large homes, heated driveways, extensive landscape lighting systems, multi-zone HVAC circuits, and detached workshops that need their own sub-panels. We're comfortable with the scale of work that King City properties require.",
      topServices: ["Landscape Lighting", "Panel Upgrades", "Residential Wiring"],
    },
    { slug: "richmond-hill", name: "Richmond Hill", region: "York Region", isPrimary: false,
      description: "Richmond Hill is one of our busiest service areas. Between the commercial electrical work along Yonge Street, the residential upgrades in the established neighbourhoods around Elgin Mills, and the new builds going up around Bayview, we're in Richmond Hill multiple times a week.",
      topServices: ["Commercial Electrical", "Pot Light Installation", "EV Charger Installation"],
    },
    { slug: "markham", name: "Markham", region: "York Region", isPrimary: false,
      description: "Markham's tech-forward homeowners are early adopters. EV chargers, smart home wiring, home office circuits with dedicated 20-amp outlets for workstations. We also handle a lot of commercial electrical work for the small businesses and offices along Highway 7 and in the Markham Innovation Exchange area.",
      topServices: ["EV Charger Installation", "Commercial Electrical", "Residential Wiring"],
    },
    { slug: "vaughan", name: "Vaughan", region: "York Region", isPrimary: false,
      description: "Vaughan is the southern edge of our service area, and we're there regularly. Between the commercial work in the Vaughan Metropolitan Centre, the residential projects in Kleinburg and Woodbridge, and the new developments along Major Mackenzie, Vaughan keeps us as busy as any of our closer-to-home areas.",
      topServices: ["Commercial Electrical", "Panel Upgrades", "Pot Light Installation"],
    },
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
export type Area = (typeof client.areas)[number] & { description?: string; topServices?: string[] };
export type Review = (typeof client.reviews)[number];
