import { CtaButton } from "@/components/home/CtaButton";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2LibraryProps = {
  content: typeof researchV2Content.library;
};

function ResearchLibraryVisual() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-black/8 bg-[#f6f1ea]"
    >
      <svg
        viewBox="0 0 640 480"
        className="h-full w-full"
        fill="none"
        focusable="false"
      >
        <rect
          x="126"
          y="96"
          width="340"
          height="260"
          rx="28"
          fill="#e2d6c7"
          stroke="#1f1f1c"
          strokeOpacity="0.08"
          transform="rotate(-5 126 96)"
        />
        <rect
          x="174"
          y="116"
          width="340"
          height="260"
          rx="28"
          fill="#fbf8f2"
          stroke="#1f1f1c"
          strokeOpacity="0.12"
        />
        <path
          d="M220 174H308"
          stroke="#b98c50"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M220 214H456M220 242H430M220 270H468"
          stroke="#1f1f1c"
          strokeOpacity="0.12"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <rect
          x="220"
          y="310"
          width="104"
          height="34"
          rx="17"
          fill="#eee5d9"
          stroke="#1f1f1c"
          strokeOpacity="0.08"
        />
        <rect
          x="338"
          y="310"
          width="116"
          height="34"
          rx="17"
          fill="#eee5d9"
          stroke="#1f1f1c"
          strokeOpacity="0.08"
        />
        <circle cx="492" cy="132" r="10" fill="#b98c50" fillOpacity="0.7" />
        <path
          d="M512 132H552M532 112V152"
          stroke="#81766a"
          strokeOpacity="0.55"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function ResearchV2Library({
  content,
}: ResearchV2LibraryProps) {
  return (
    <section className="bg-[#e9e1d7]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-[40rem]">
            <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8">
              <CtaButton
                href={content.primaryCta.href}
                label={content.primaryCta.label}
                variant="primary"
              />
            </div>
          </div>

          <ResearchLibraryVisual />
        </div>
      </div>
    </section>
  );
}
