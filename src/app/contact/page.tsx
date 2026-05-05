import type { Metadata } from 'next';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description: `Contact ${client.name} for a free electrical quote. Serving Newmarket, Aurora, and all of York Region. Call ${client.phone} or fill out our online form.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Whether you need a quote, have a question, or need emergency service, we're here.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a href={`tel:${client.phone}`} className="text-navy hover:text-gold text-lg font-bold transition-colors">
                        {client.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{client.hours.emergency}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href={`mailto:${client.email}`} className="text-navy hover:text-gold transition-colors">
                        {client.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Service Area</p>
                      <p className="text-gray-600">{client.address}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Serving {client.areas.map(a => a.name).join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Hours</p>
                      <p className="text-gray-600">{client.hours.regular}</p>
                      <p className="text-gold font-medium text-sm mt-1">{client.hours.emergency}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment methods */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {client.paymentMethods.map((method) => (
                    <span key={method} className="bg-white border border-gray-200 px-3 py-1.5 rounded text-sm text-gray-700">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Request a Free Quote</h2>
              <p className="text-gray-500 text-sm mb-6">
                Tell us about your project. We'll get back to you within 2 hours during business hours.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
