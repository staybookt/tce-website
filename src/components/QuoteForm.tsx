'use client';

import { useState } from 'react';
import { client } from '@/data/client';

export default function QuoteForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to Resend/Formspree
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green/10 border border-green rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Thanks, {formData.name}!</h3>
        <p className="text-gray-600 text-sm">We got your request and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        />
      </div>
      <div>
        <textarea
          placeholder="What do you need help with?"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-navy-dark font-bold py-3 rounded-lg transition-colors"
      >
        Get a Free Quote
      </button>
      <p className="text-xs text-gray-400 text-center">
        We respond within 2 hours during business hours.
      </p>
    </form>
  );
}
