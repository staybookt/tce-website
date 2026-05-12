import Image from 'next/image';

interface Props {
  /** Bullets describing what we typically replace / fix / encounter. */
  problems: string[];
  /** Path to Tim's real photo of the finished outcome. */
  afterImage: string;
  afterImageAlt: string;
  /** Service name for the headline. */
  serviceName: string;
}

/**
 * Two-column "before vs. after" style card without faking a before photo.
 * Left column: text bullet list of common conditions / problems / typical
 * starting state (from the service's `problems` array).
 * Right column: Tim's real photo of the finished outcome.
 *
 * Delivers the visual contrast of a before/after pattern using only honest
 * material — text descriptions of typical problems on one side, real photos
 * of real work on the other.
 */
export default function ProblemSolutionCard({ problems, afterImage, afterImageAlt, serviceName }: Props) {
  if (!problems || problems.length === 0) return null;
  const topProblems = problems.slice(0, 5);

  return (
    <div className="animate-on-scroll">
      <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Before &amp; after</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        What we replace. What we leave.
      </h2>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Left — what we typically replace */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em]">What we typically find</p>
          </div>
          <ul className="space-y-3">
            {topProblems.map((problem, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-gray-400 mt-1.5 flex-shrink-0">
                  <svg viewBox="0 0 8 8" className="w-2 h-2" fill="currentColor">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </span>
                <span className="text-gray-700 text-[15px] leading-relaxed">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — what we leave (real photo) */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 min-h-[320px] md:min-h-0 md:aspect-auto">
          <Image
            src={afterImage}
            alt={afterImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-amber-300 font-bold text-xs uppercase tracking-[0.2em]">What Tim leaves</p>
            </div>
            <p className="text-white font-semibold text-base md:text-lg leading-snug">
              {serviceName} done to code. ESA-permitted, inspected, passed first visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
