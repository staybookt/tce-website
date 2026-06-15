import { client } from '@/data/client';

interface SchemaMarkupProps {
  type?: 'LocalBusiness' | 'Service' | 'Review';
  serviceName?: string;
  serviceDescription?: string;
}

const SITE_URL = 'https://www.topchoiceelectrical.com';

export default function SchemaMarkup({ type = 'LocalBusiness', serviceName, serviceDescription }: SchemaMarkupProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${SITE_URL}/#business`,
    name: client.name,
    legalName: client.legalName,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/og-image.jpg`,
    telephone: client.phone,
    email: client.email,
    description: `Licensed, ESA-certified electrician serving York Region and Simcoe County. Panel upgrades, EV chargers, knob-and-tube removal, residential wiring, lighting, generators, and commercial electrical work. ${client.yearsExperience} years of experience. Fully insured and bonded.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Newmarket',
      addressRegion: 'ON',
      postalCode: 'L3Y',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.0592,
      longitude: -79.4613,
    },
    areaServed: client.areas.map((a) => ({
      '@type': 'City',
      name: a.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: a.region,
      },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: client.paymentMethods,
    currenciesAccepted: 'CAD',
    knowsAbout: client.services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: client.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.shortDescription,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
    founder: {
      '@type': 'Person',
      name: client.ownerName,
      jobTitle: 'Master Electrician',
    },
    foundingDate: `${new Date().getFullYear() - client.yearsInBusiness}`,
    ...(client.googleRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: client.googleRating,
        reviewCount: client.reviewCount,
      },
    }),
    sameAs: [
      client.googleBusinessUrl,
      client.social.facebook,
      client.social.instagram,
    ].filter(Boolean) as string[],
  };

  const service = serviceName
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription,
        provider: {
          '@type': 'Electrician',
          '@id': `${SITE_URL}/#business`,
          name: client.name,
        },
        areaServed: client.areas.map((a) => ({
          '@type': 'City',
          name: a.name,
        })),
      }
    : null;

  const schema = type === 'Service' && service ? [localBusiness, service] : [localBusiness];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
