import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';
import QuoteForm from '@/components/QuoteForm';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'Contact Us | Free Electrical Quote',
  description: `Contact ${client.name} for a free electrical quote. Serving Newmarket, Aurora, and all of York Region. Call ${client.phone} or fill out our online form.`,
  alternates: { canonical: 'https://www.topchoiceelectrical.ca/contact' },
  openGraph: {
    title: 'Contact Us | Free Electrical Quote',
    description: `Contact ${client.name} for a free electrical quote in York Region. Call ${client.phone} or use our online form.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Top Choice Electrical' }],
  },
};

export default function ContactPage() {
  const phoneDigits = client.phone.replace(/[^0-9]/g, '');

  return (
    <>
      <section className="relative min-h-[56vh] md:min-h-[64vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Illuminated home at dusk in York Region — Top Choice Electrical"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full pb-16 pt-40">
          <div style={{ animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">Contact · Same-day response</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[0.95] max-w-4xl">
              Get a{' '}
              <span className="gradient-text">quote.</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              Tim texts back within 2 hours during business hours. Call, text a photo of the issue, or fill out the form &mdash; whichever is fastest for you.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <a href={`tel:${client.phone}`} className="group flex items-center gap-4 bg-amber-500 hover:bg-amber-600 rounded-2xl p-5 md:p-6 transition-all shadow-md hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
              <div className="min-w-0"><p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-0.5">Call</p><p className="text-white font-display font-bold text-base md:text-lg leading-tight truncate">{client.phone}</p><p className="text-white/80 text-xs mt-0.5">Tim picks up · same day</p></div>
            </a>
            <a href={`sms:${phoneDigits}`} className="group flex items-center gap-4 bg-gray-900 hover:bg-gray-800 rounded-2xl p-5 md:p-6 transition-all shadow-md hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
              <div className="min-w-0"><p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5">Text</p><p className="text-white font-display font-bold text-base md:text-lg leading-tight truncate">{client.phone}</p><p className="text-white/60 text-xs mt-0.5">Send a photo of the issue</p></div>
            </a>
            <a href={`mailto:${client.email}`} className="group flex items-center gap-4 bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md rounded-2xl p-5 md:p-6 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
              <div className="min-w-0"><p className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-0.5">Email</p><p className="text-gray-900 font-display font-bold text-base leading-tight truncate">{client.email}</p><p className="text-gray-500 text-xs mt-0.5">Same-day reply during hours</p></div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
            <div className="space-y-10">
              <div>
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Get in touch</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-[1.05]">Tim responds <span className="gradient-text">within 2 hours.</span></h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">During business hours we typically text back within 30 minutes. After-hours and weekends, expect a same-day or next-morning reply unless it&apos;s an emergency &mdash; then call.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-50/40 to-white border border-amber-100 rounded-2xl p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3"><div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div><p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em]">Hours</p></div>
                  <p className="font-display font-bold text-gray-900 text-base mb-1">{client.hours.regular}</p>
                  <p className="text-amber-600 font-semibold text-sm">{client.hours.emergency}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50/40 to-white border border-amber-100 rounded-2xl p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3"><div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg></div><p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em]">Service area</p></div>
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
                    <div>
                      <p className="font-display font-bold text-gray-900 text-base mb-1">{client.address}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">12 cities across York Region, Simcoe County, and Durham Region.</p>
                      <Link href="/areas" className="inline-flex items-center gap-1.5 mt-3 text-amber-600 hover:text-amber-700 font-bold text-xs">See all areas<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6">
                  <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mb-3">Payment methods accepted</p>
                  <div className="flex flex-wrap gap-2">
                    {client.paymentMethods.map((method) => (<span key={method} className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 font-semibold">{method}</span>))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-3xl shadow-xl shadow-amber-100/40 border border-amber-100 p-7 md:p-10 relative overflow-hidden lg:sticky lg:top-28">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">Request a quote</h3>
                <p className="text-gray-500 mb-7">30 seconds. Same-day response during business hours.</p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10"><p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">What happens next</p><h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.05]">From form to finished job.</h2><p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">No mystery. Here&apos;s exactly what happens after you call or send the form.</p></div>
          <div className="grid md:grid-cols-4 gap-4">
            {[{ num: '01', title: 'Tim texts back', desc: 'Within 2 hours during business hours. He asks a few questions to figure out scope — type of job, urgency, address.' }, { num: '02', title: 'On-site walkthrough', desc: 'Tim drives over, looks at the work, asks the right questions, takes photos if needed. Free, no obligation.' }, { num: '03', title: 'Fixed quote', desc: 'In writing, same day or next morning. The quote you get is the price you pay — it doesn’t move unless scope changes.' }, { num: '04', title: 'Booked and done', desc: 'Most jobs scheduled within 48 hours. ESA permit pulled, work completed, inspection passed, paperwork delivered.' }].map((step) => (
              <div key={step.num} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 hover:border-amber-300 hover:shadow-md transition-all"><p className="font-display font-bold text-amber-500 text-3xl mb-4 leading-none">{step.num}</p><h3 className="font-display font-bold text-gray-900 text-base mb-2 tracking-tight">{step.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-red-50/30 via-white to-amber-50/30 border-y border-red-100">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[400px] bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4"><span className="relative inline-flex w-3 h-3"><span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-60" /><span className="relative rounded-full w-3 h-3 bg-red-500" /></span><p className="text-red-700 font-bold text-xs uppercase tracking-[0.25em]">Electrical Emergency · 24/7</p></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.05]">Sparks, smoke, or burning smell? <span className="text-red-600">Don&apos;t wait.</span></h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">Sparking outlets, burning smells, power outages, tripped breakers that won&apos;t reset. Tim picks up day or night. If there&apos;s active fire or someone&apos;s been shocked &mdash; call 911 first.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a href={`tel:${client.phone}`} className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-all shadow-lg shadow-red-200 hover:scale-[1.02] whitespace-nowrap">Call now &mdash; {client.phone}</a>
              <Link href="/emergency-electrician" className="text-red-600 hover:text-red-700 font-bold text-sm transition-colors inline-flex items-center gap-1.5">What counts as an emergency<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
