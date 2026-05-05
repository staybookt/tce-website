import { client } from '@/data/client';

export default function TrustBar() {
  const items = [
    { value: 'ESA Licensed', detail: client.licenseNumber },
    { value: '5.0 Rating', detail: 'Google Reviews' },
    { value: `${client.yearsInBusiness}+ Years`, detail: 'In Business' },
    { value: '24/7', detail: 'Emergency Service' },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 py-8 px-4 group">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div>
                <p className="text-gray-900 font-bold text-sm tracking-tight">{item.value}</p>
                <p className="text-gray-400 text-xs tracking-wide">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
