interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
}

export default function ReviewCard({ name, location, rating, text, service }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-gold' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        {service && (
          <span className="text-[10px] uppercase tracking-wider text-navy bg-navy/5 px-2 py-1 rounded">
            {service}
          </span>
        )}
      </div>
    </div>
  );
}
