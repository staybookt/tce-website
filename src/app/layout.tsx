import type { Metadata } from 'next';
import Script from 'next/script';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClickToCall from '@/components/ClickToCall';
import CallTracker from '@/components/CallTracker';
import SchemaMarkup from '@/components/SchemaMarkup';
import ScrollAnimator from '@/components/ScrollAnimator';
import { client } from '@/data/client';
import { homeTitle, homeDescription } from '@/lib/snippets';

// Self-hosted by next/font: the CSS is inlined into our own stylesheet and the
// woff2 is preloaded from our origin, so the headline font no longer waits on a
// render-blocking stylesheet from fonts.googleapis.com and a second connection
// to fonts.gstatic.com. Exposed as a CSS variable for .font-display.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const GA4_ID = 'G-VMJ6LFNBLY';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.topchoiceelectrical.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s | ${client.name}`,
  },
  description: homeDescription,
  keywords: [client.primaryKeyword, ...client.secondaryKeywords],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: client.name,
    title: homeTitle,
    description: homeDescription,
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
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Skip link — visible on keyboard focus, jumps over the header to main content */}
        <a href="#main" className="skip-link">Skip to main content</a>
        <SchemaMarkup />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <ClickToCall />
        <CallTracker />
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
