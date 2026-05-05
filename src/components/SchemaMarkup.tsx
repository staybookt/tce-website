import { client } from '@/data/client';

interface SchemaMarkupProps {
  type?: 'LocalBusiness' | 'Service' | 'Review';
  serviceName?: string;
  serviceDescription?: string;
}

export default function SchemaMarkup({ type = 'LocalBusiness', serviceName, serviceDescription }: SchemaMarkupProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: client.name,
    telephone: client.phone,
    email: client.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'ON',
      addressLocality: 'Newmarket',
      addressCountry: 'CA',
    },
    areaServed: client.areas.map((a) => ({
      '@type': 'City',
      name: `${a.name}, Ontario`,
    })),
    openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-14:00',
    priceRange: '$$',
    paymentAccepted: client.paymentMethods.join(', '),
    ...(client.googleRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: client.googleRating,
        reviewCount: client.reviewCount,
      },
    }),
  };

  const service = serviceName
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription,
        provider: {
          '@type': 'Electrician',
          name: client.name,
        },
        areaServed: client.areas.map((a) => ({
          '@type': 'City',
          name: `${a.name}, Ontario`,
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
