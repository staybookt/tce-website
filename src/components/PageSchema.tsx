import { client } from '@/data/client';

/**
 * PageSchema — emits page-specific JSON-LD for SEO.
 *
 * Global LocalBusiness schema is rendered by SchemaMarkup in layout.tsx
 * on every page. PageSchema is added on top of that for pages that need
 * extra structured data:
 *
 *  - BreadcrumbList: every page below the homepage. Helps Google show
 *    breadcrumb navigation in SERPs.
 *  - Localized Service schema: area pages. Tells Google "this electrical
 *    service is served in this specific city", which improves ranking
 *    for "electrician in [city]" queries.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.topchoiceelectrical.com';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageSchemaProps {
  breadcrumbs?: BreadcrumbItem[];
  // For area pages: narrow the LocalBusiness schema to the specific city
  areaName?: string;
  areaSlug?: string;
  areaRegion?: string;
}

export default function PageSchema({ breadcrumbs, areaName, areaSlug, areaRegion }: PageSchemaProps) {
  const schemas: Record<string, unknown>[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.url}`,
      })),
    });
  }

  if (areaName && areaSlug) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Electrical Services',
      name: `Electrician in ${areaName}`,
      description: `Licensed, ESA-certified electrician serving ${areaName}, ${areaRegion || 'York Region'}. Panel upgrades, EV chargers, knob-and-tube removal, residential and commercial electrical work.`,
      provider: {
        '@type': 'Electrician',
        '@id': `${SITE_URL}/#business`,
        name: client.name,
        telephone: client.phone,
      },
      areaServed: {
        '@type': 'City',
        name: areaName,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: areaRegion || 'York Region',
        },
      },
      url: `${SITE_URL}/areas/${areaSlug}`,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'CAD',
      },
    });
  }

  if (schemas.length === 0) return null;

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
