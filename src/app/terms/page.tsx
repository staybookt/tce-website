import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/data/client';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms governing use of ${client.name}'s website and services.`,
  alternates: {
    canonical: 'https://www.topchoiceelectrical.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const lastUpdated = 'May 9, 2026';

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Terms of Service
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
                These terms govern your use of the {client.name} website at topchoiceelectrical.com. By using the site, you agree to them. If you don&rsquo;t agree, don&rsquo;t use the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What this site is for</h2>
              <p>
                The site exists to give you information about our electrical services, let you request a quote, and contact us. It&rsquo;s informational. No transactions happen through the site itself &mdash; quotes, work agreements, and payments are handled directly between you and us once you reach out.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quotes and estimates</h2>
              <p>
                Pricing ranges shown on the site (panel upgrades from $X, EV chargers from $Y, etc.) are typical ranges based on common scenarios. Your actual price depends on the specifics of your job: existing wiring, accessibility, materials needed, and code requirements at the time of work.
              </p>
              <p className="mt-4">
                A quote is binding only when we&rsquo;ve provided it in writing (email or written estimate) for your specific job, and only for the work described in that quote. Verbal estimates and ballpark figures are starting points, not commitments.
              </p>
              <p className="mt-4">
                If we discover during the work that the scope is different from what we quoted (hidden conditions, additional code requirements, etc.), we&rsquo;ll stop and discuss the change with you before continuing. You won&rsquo;t be charged for additional work without your approval.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our work</h2>
              <p>
                We&rsquo;re licensed by the Electrical Safety Authority of Ontario ({client.licenseNumber}). All electrical work is performed to the Ontario Electrical Code and inspected where required. We pull permits for any work that needs them.
              </p>
              <p className="mt-4">
                Workmanship on labour is warrantied for one year from the date of completion. Manufacturer warranties on parts and equipment apply separately according to the manufacturer&rsquo;s terms.
              </p>
              <p className="mt-4">
                If something we installed fails because of our work within the warranty period, we&rsquo;ll fix it at no charge to you. Damage caused by misuse, modification by others, or external events (lightning, flooding, etc.) is not covered.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Site content</h2>
              <p>
                The text, photos, layout, and brand on this site are owned by {client.name}. You can read it, share links to it, and quote it for non-commercial purposes with attribution. You can&rsquo;t copy the design or content for use on another business&rsquo;s website.
              </p>
              <p className="mt-4">
                Logos and trademarks of products we work with (Tesla, Generac, Eaton, etc.) belong to their respective owners and are used here only to identify the equipment we install or service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy</h2>
              <p>
                We try to keep the site accurate, but electrical codes, pricing, and best practices change. The site is current as of the &ldquo;Last updated&rdquo; date at the top. For your specific situation, the right answer is to call us &mdash; we&rsquo;ll give you current information for your home or building.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of liability</h2>
              <p>
                The site is provided &ldquo;as is.&rdquo; We don&rsquo;t guarantee it&rsquo;s available 24/7, free of bugs, or that any specific information will be on it at any given time.
              </p>
              <p className="mt-4">
                We&rsquo;re not liable for indirect damages from your use of the site &mdash; for example, decisions you made based on information here without contacting us first. Liability for our actual electrical work is governed by the written agreement you sign with us when we do the job, not by these site terms.
              </p>
              <p className="mt-4">
                Nothing in these terms limits liability that can&rsquo;t legally be limited under Canadian or Ontario law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-party links</h2>
              <p>
                The site may link to third-party websites (manufacturer pages, government resources, etc.). We&rsquo;re not responsible for the content, privacy practices, or terms of those sites. Use them at your own discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing law</h2>
              <p>
                These terms are governed by the laws of Ontario and the federal laws of Canada. Any dispute will be resolved in the courts of Ontario.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to these terms</h2>
              <p>
                We may update these terms occasionally. Material changes will be posted with a new &ldquo;Last updated&rdquo; date. Continuing to use the site after changes means you accept the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p>
                Questions about these terms:
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
              <Link href="/privacy" className="text-gold font-semibold hover:underline">
                Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
