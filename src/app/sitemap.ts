import type { MetadataRoute } from 'next';
import { client } from '@/data/client';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.topchoiceelectrical.com';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      // Highest-intent page on the site. Someone searching "emergency
      // electrician" at 11pm is not comparing quotes.
      url: `${baseUrl}/emergency-electrician`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-esa-licensed`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  /**
   * Research pages. Each one targets a query we verified returns no map
   * pack, which is the point: on "electrician <city>" the 3-pack owns the
   * fold and an organic result at position 4 gets almost nothing. On these
   * there is no pack to lose to.
   */
  const guidePages: MetadataRoute.Sitemap = [
    `${baseUrl}/federal-pioneer-stab-lok-panels`,
    `${baseUrl}/knob-and-tube-wiring-insurance`,
    `${baseUrl}/electrical-permits-ontario`,
  ].map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const servicePages: MetadataRoute.Sitemap = client.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = client.areas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages, ...servicePages, ...areaPages];
}
