const recentJobs = [
  {
    area: 'Newmarket',
    service: 'Panel Upgrade',
    detail: '100A to 200A upgrade in a 1985 colonial. Insurance company required it before renewal.',
    timeAgo: '3 days ago',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    area: 'Aurora',
    service: 'EV Charger',
    detail: 'Tesla Wall Connector in a detached garage. Ran 40A circuit from the main panel, 60ft run.',
    timeAgo: '5 days ago',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5z" />
      </svg>
    ),
  },
  {
    area: 'King City',
    service: 'Landscape Lighting',
    detail: '14-fixture package: pathway lights, uplighting on mature oaks, and accent lighting on the stone retaining wall.',
    timeAgo: '1 week ago',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
  },
  {
    area: 'Richmond Hill',
    service: 'Pot Lights',
    detail: '12 LED pot lights across the main floor open concept. Replaced 6 old fluorescent fixtures.',
    timeAgo: '1 week ago',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    area: 'East Gwillimbury',
    service: 'Knob & Tube',
    detail: 'Full knob-and-tube removal in a 1920s farmhouse. 3-day job, all new circuits, ESA inspected.',
    timeAgo: '2 weeks ago',
    image: 'https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    area: 'Stouffville',
    service: 'Generator',
    detail: 'Generac 22kW whole-home standby with automatic transfer switch. Customer lost power 4 times last winter.',
    timeAgo: '2 weeks ago',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
      </svg>
    ),
  },
];

export default function RecentWork() {
  return (
    <section className="section-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            What we&apos;ve been working on.
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto mt-5">
            Real jobs. Real neighbourhoods. Here&apos;s what the last few weeks looked like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentJobs.map((job, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md hover:border-amber-200 transition-all duration-300"
            >
              {job.image && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={job.image}
                    alt={`${job.service} in ${job.area}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    {job.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-900 font-display">
                    {job.service}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  {job.timeAgo}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {job.detail}
              </p>
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-xs font-medium text-gray-400">
                  {job.area}
                </span>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
