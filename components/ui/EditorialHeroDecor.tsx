/**
 * EditorialHeroDecor — shared decoration for the editorial "Art of Resolution"
 * hero treatment: faint construction line-art, a small dot accent, and the
 * giant clipped "PDR COURT" wordmark bleeding off the bottom edge.
 *
 * Drop inside a `relative overflow-hidden` hero <section>. All elements are
 * absolutely positioned + pointer-events-none, so placement order is flexible.
 */
export default function EditorialHeroDecor() {
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g fill="none" stroke="#834009" strokeWidth="1" opacity="0.09">
          <path d="M-50 250 C 420 90, 900 430, 1490 180" />
          <path d="M-50 540 C 460 620, 980 360, 1490 600" />
          <path d="M300 -50 C 380 360, 240 640, 560 980" />
          <ellipse cx="720" cy="410" rx="680" ry="300" />
        </g>
      </svg>
      <span className="pointer-events-none absolute top-28 right-8 md:right-14 w-3 h-3 rounded-full bg-dark/70" />
      <div className="pointer-events-none absolute -bottom-[3vw] left-0 right-0 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="block font-editorial font-semibold text-dark/[0.05] leading-none whitespace-nowrap text-[clamp(3.5rem,16vw,16rem)]">
            PDR COURT
          </span>
        </div>
      </div>
    </>
  );
}
