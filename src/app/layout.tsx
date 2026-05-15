import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClickToCall from '@/components/ClickToCall';
import SchemaMarkup from '@/components/SchemaMarkup';
import ScrollAnimator from '@/components/ScrollAnimator';
import { client } from '@/data/client';

const GA4_ID = 'G-VMJ6LFNBLY';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.topchoiceelectrical.ca';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo/tce-logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
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
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
