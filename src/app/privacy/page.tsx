import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${client.name} collects, uses, and protects your information. PIPEDA-compliant.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'May 9, 2026';

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-lg">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">
            <div>
              <p className="text-[17px]">
                {client.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this website at topchoiceelectrical.com. We respect your privacy and follow the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws.
              </p>
              <p className="text-[17px] mt-4">
                This policy explains what information we collect, why we collect it, and what we do with it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What we collect</h2>
              <p>When you contact us through the site, we collect the information you provide:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your email address</li>
                <li>Your service address or general location, if you share it</li>
                <li>A description of the work you need done</li>
              </ul>
              <p className="mt-4">
                We also collect anonymous analytics data when you visit the site:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Pages you visit and how long you spend on them</li>
                <li>Browser, device, and operating system</li>
                <li>Approximate location (city level, with your IP address anonymized)</li>
                <li>How you got to the site (search engine, direct, referral)</li>
              </ul>
              <p className="mt-4">
                We use Google Analytics 4 for this. We&rsquo;ve enabled IP anonymization, which means Google strips the last part of your IP address before it&rsquo;s logged or stored.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why we collect it</h2>
              <p>The information you submit through forms is used to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your quote request or question</li>
                <li>Schedule and complete the work you&rsquo;ve hired us for</li>
                <li>Send you an estimate, invoice, or follow-up about the job</li>
                <li>Reach you about a warranty issue if one arises</li>
              </ul>
              <p className="mt-4">The analytics data helps us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>See which pages are useful and which aren&rsquo;t</li>
                <li>Fix things that are broken</li>
                <li>Decide what content to add next</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we share it with</h2>
              <p>
                We do not sell your information. We do not share it with marketers. The only third parties who handle your data are the services we use to run the business:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Google Analytics</strong> &mdash; anonymous site usage data only</li>
                <li><strong>Vercel</strong> &mdash; hosts our website (sees standard server logs)</li>
                <li>Email and bookkeeping software we use internally to follow up on your quote and bill the job</li>
              </ul>
              <p className="mt-4">
                If we&rsquo;re ever legally required to disclose information (court order, lawful warrant), we&rsquo;ll comply with the law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p>
                We use cookies for two things: keeping the site working properly (essential cookies) and anonymous analytics through Google Analytics. We don&rsquo;t use cookies for advertising or tracking you across other websites.
              </p>
              <p className="mt-4">
                You can disable cookies in your browser settings. The site will still work, but our analytics won&rsquo;t see your visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How long we keep it</h2>
              <p>
                Customer records (name, contact info, job details, invoices) are kept for as long as needed for warranty, legal, and tax purposes &mdash; typically seven years. Analytics data is retained for 14 months.
              </p>
              <p className="mt-4">
                If you submit a quote request and don&rsquo;t end up hiring us, we delete the inquiry within 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your rights</h2>
              <p>Under PIPEDA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Know what personal information we have about you</li>
                <li>See it</li>
                <li>Correct it if it&rsquo;s wrong</li>
                <li>Ask us to delete it</li>
                <li>Withdraw consent for us to keep it</li>
              </ul>
              <p className="mt-4">
                Email us at <a href={`mailto:${client.email}`} className="text-gold hover:underline">{client.email}</a> with any of these requests. We&rsquo;ll respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
              <p>
                We protect your information with reasonable technical and organizational safeguards. The website uses HTTPS to encrypt data in transit. Our forms submit through encrypted connections. We don&rsquo;t store credit card information &mdash; payments happen through third-party processors that handle their own security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children</h2>
              <p>
                The site isn&rsquo;t directed at children under 13 and we don&rsquo;t knowingly collect their information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to this policy</h2>
              <p>
                If we update this policy, we&rsquo;ll change the &ldquo;Last updated&rdquo; date at the top. Material changes will be flagged on the homepage for at least 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p>
                Questions about this policy or how we handle your information:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 mt-4 not-prose">
                <p className="font-semibold text-gray-900">{client.name}</p>
                <p className="text-gray-600 text-sm mt-1">{client.address}</p>
                <p className="text-gray-600 text-sm mt-3">
                  <a href={`mailto:${client.email}`} className="text-gold hover:underline">{client.email}</a>
                </p>
                <p className="text-gray-600 text-sm">
                  <a href={`tel:${client.phone}`} className="text-gold hover:underline">{client.phone}</a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <Link href="/contact" className="text-gold font-semibold hover:underline">
                &larr; Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
