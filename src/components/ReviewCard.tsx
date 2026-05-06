interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
  variant?: 'light' | 'dark';
}

export default function ReviewCard({ name, location, rating, text, service, variant = 'light' }: ReviewCardProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`rounded-2xl p-7 transition-all duration-300 ${
      isDark
        ? 'bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.12] backdrop-blur-sm'
        : 'bg-white border border-gray-200 hover:shadow-md'
    }`}>
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : isDark ? 'text-white/10' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className={`leading-relaxed mb-6 text-[15px] ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isDark ? 'bg-amber-500/10' : 'bg-amber-50'
          }`}>
            <span className={`font-bold text-sm ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</p>
            <p className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-500'}`}>{location}</p>
          </div>
        </div>
        {service && (
          <span className={`text-[10px] uppercase tracking-widest font-medium ${isDark ? 'text-white/20' : 'text-gray-400'}`}>
            {service}
          </span>
        )}
      </div>
    </div>
  );
}
