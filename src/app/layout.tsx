import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClickToCall from '@/components/ClickToCall';
import SchemaMarkup from '@/components/SchemaMarkup';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: {
    default: `${client.name} | Licensed Electrician in Newmarket & York Region`,
    template: `%s | ${client.name}`,
  },
  description: `${client.name} provides licensed electrical services across York Region and Simcoe County. Panel upgrades, EV chargers, landscape lighting, and more. ESA licensed, fully insured. Call ${client.phone}.`,
  keywords: [client.primaryKeyword, ...client.secondaryKeywords],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: client.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ClickToCall />
      </body>
    </html>
  );
}
