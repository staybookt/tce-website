import { client } from '@/data/client';

export default function TrustBar() {
  const items = [
    { label: 'ESA Licensed', value: client.licenseNumber },
    { label: 'Fully Insured', value: '& Bonded' },
    { label: 'Experience', value: `${client.yearsInBusiness}+ Years` },
    { label: 'Service', value: client.hours.emergency },
  ];

  return (
    <div className="bg-navy text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
