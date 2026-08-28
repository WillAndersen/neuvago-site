import Link from "next/link";

import type { ConditionsV2Content } from "@/content/conditions-v2";

type ConditionsV2ResearchBridgeProps = {
  content: ConditionsV2Content["researchBridge"];
};

export function ConditionsV2ResearchBridge({
  content,
}: ConditionsV2ResearchBridgeProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#1f1f1c] text-white">
      <div className="mx-auto grid max-w-[92rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[14ch] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {content.introduction}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            {content.context}
          </p>

          <Link
            href={content.cta.href}
            className="mt-9 inline-flex w-fit items-center gap-2 border-b border-white/35 pb-1 text-sm font-medium text-white transition hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f1f1c]"
          >
            {content.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#292925] sm:min-h-[28rem]"
        >
          <svg
            viewBox="0 0 720 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id="conditionsResearchPath"
                x1="90"
                y1="420"
                x2="630"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6C5B0" stopOpacity="0.2" />
                <stop offset="0.52" stopColor="#F1E8DD" stopOpacity="0.8" />
                <stop offset="1" stopColor="#D6C5B0" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M86 405C180 346 196 237 286 257C372 276 382 148 470 176C533 196 555 120 637 105"
              stroke="url(#conditionsResearchPath)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M112 455C216 402 257 339 342 359C430 380 485 304 610 285"
              stroke="#F1E8DD"
              strokeOpacity="0.18"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M126 126C218 151 273 122 350 92C430 61 512 75 594 132"
              stroke="#F1E8DD"
              strokeOpacity="0.12"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="86" cy="405" r="7" fill="#E9DED0" fillOpacity="0.82" />
            <circle cx="286" cy="257" r="7" fill="#E9DED0" fillOpacity="0.72" />
            <circle cx="470" cy="176" r="7" fill="#E9DED0" fillOpacity="0.72" />
            <circle cx="637" cy="105" r="7" fill="#E9DED0" fillOpacity="0.82" />
            <circle cx="342" cy="359" r="4" fill="#E9DED0" fillOpacity="0.4" />
            <circle cx="594" cy="132" r="4" fill="#E9DED0" fillOpacity="0.32" />
          </svg>
        </div>
      </div>
    </section>
  );
}
