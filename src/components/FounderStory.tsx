import Image from 'next/image';
import { client } from '@/data/client';

export default function FounderStory() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md">
              <Image
                src="/images/work/IMG_5375.webp"
                alt="Tim Ciszkowski, owner of Top Choice Electrical, on a panel install in York Region"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Credential card */}
            <div className="absolute -bottom-6 -right-6 md:right-[-40px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">ESA Licensed</p>
                  <p className="text-gray-500 text-xs">{client.licenseNumber}</p>
                </div>
              </div>
              <div className="h-px bg-gray-100 my-3" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{client.yearsExperience} Years</p>
                  <p className="text-gray-500 text-xs">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story side */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Meet the Owner</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-8">
              Tim started with a van and a handshake.
            </h2>
            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p>
                After {client.yearsExperience} years on the tools at a large electrical contractor, Tim went out on his own {client.yearsInBusiness} years ago to start Top Choice. He bought a van,
                printed some cards, and started knocking on doors in Newmarket. The work would
                speak, or it wouldn&apos;t.
              </p>
              <p>
                The pitch was simple: show up when you say you will, charge what you quoted, and leave the place
                cleaner than you found it. Turns out that&apos;s a low bar in this industry, and word travels fast
                in a small community.
              </p>
              <p>
                Today, Top Choice runs a small crew out of York Region. Tim still does site visits on every
                job over $1,000 because he believes the person quoting the work should understand the work. No
                salespeople, no call centers, no subcontractors you&apos;ve never met showing up at your door.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">T</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Tim Ciszkowski</p>
                <p className="text-gray-500 text-sm">Owner & Master Electrician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
