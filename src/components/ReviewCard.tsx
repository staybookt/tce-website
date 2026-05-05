interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
}

export default function ReviewCard({ name, location, rating, text, service }: ReviewCardProps) {
  return (
    <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-500">
      {/* Large decorative quote */}
      <div className="absolute -top-2 left-6 text-[100px] leading-none font-serif text-gold/[0.08] select-none pointer-events-none">&ldquo;</div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-6 relative">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/70 leading-relaxed mb-8 relative text-[15px]">&ldquo;{text}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
            <span className="text-gold font-bold text-sm">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-sm text-white">{name}</p>
            <p className="text-xs text-white/30">{location}</p>
          </div>
        </div>
        {service && (
          <span className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">
            {service}
          </span>
        )}
      </div>
    </div>
  );
}
