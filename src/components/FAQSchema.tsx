interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQItem[];
}

/**
 * Server component that emits FAQPage JSON-LD for a list of Q&A pairs.
 *
 * Drop this on any page that has a real FAQ block (service detail pages,
 * homepage FAQ, /why-esa-licensed, etc.) to make the FAQs eligible for
 * Google's rich FAQ snippets in SERP. Schema-only — no visible output.
 */
export default function FAQSchema({ faqs }: Props) {
  if (!faqs || faqs.length === 0) return null;

  const payload = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Stringify here so Next renders it as inline JSON
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
