import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClickToCall from '@/components/ClickToCall';
import SchemaMarkup from '@/components/SchemaMarkup';
import ScrollAnimator from '@/components/ScrollAnimator';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: {
    default: `${client.name} | Electrician in Newmarket`,
    template: `%s | ${client.name}`,
  },
  description: `Licensed electrician serving York Region & Simcoe County. Panel upgrades, EV chargers, lighting & more. ESA certified, fully insured. Call ${client.phone}.`,
  keywords: [client.primaryKeyword, ...client.secondaryKeywords],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: client.name,
    title: `${client.name} | Electrician in Newmarket`,
    description: `Licensed electrician serving York Region & Simcoe County. Panel upgrades, EV chargers, lighting & more. ESA certified, fully insured. Call ${client.phone}.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${client.name} - Licensed Electrician in York Region` }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.topchoiceelectrical.ca',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ClickToCall />
        <ScrollAnimator />
      </body>
    </html>
  );
}
