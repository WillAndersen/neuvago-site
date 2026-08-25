import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

type MechanismContent = HowItWorksV2Content["mechanism"];
type MechanismStep = MechanismContent["steps"][number];

export type HowItWorksV2MechanismProps = {
  content: MechanismContent;
};

type PathwayVisualProps = {
  id: MechanismStep["id"];
};

function PathwayVisual({ id }: PathwayVisualProps) {
  const sharedProps = {
    "aria-hidden": true,
    focusable: false,
    viewBox: "0 0 64 64",
    fill: "none",
    className: "h-11 w-11 text-[#756655]",
  } as const;

  switch (id) {
    case "outer-ear":
      return (
        <svg {...sharedProps}>
          <path d="M38 9c-12 0-21 9-21 22 0 8 3 14 8 19 3 3 5 6 5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M39 19c-7 0-12 5-12 12 0 5 2 8 6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M39 27c4 0 6 2 6 5 0 4-3 7-7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="49" cy="23" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M49 27v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "vagus-nerve":
      return (
        <svg {...sharedProps}>
          <path d="M32 7v50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 18c-9 2-14 8-17 16M32 26c10 2 15 8 18 16M32 36c-7 2-11 7-13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="15" cy="34" r="3" fill="currentColor" />
          <circle cx="50" cy="42" r="3" fill="currentColor" />
          <circle cx="19" cy="50" r="3" fill="currentColor" />
        </svg>
      );

    case "brainstem":
      return (
        <svg {...sharedProps}>
          <path d="M22 13c-7 2-11 8-11 16 0 7 4 12 10 15M42 13c7 2 11 8 11 16 0 7-4 12-10 15M22 13c5-5 15-5 20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 10v31c0 7 2 12 7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M25 24c3-2 6-2 9 0M39 24c-3-2-6-2-9 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "autonomic-networks":
      return (
        <svg {...sharedProps}>
          <path d="M18 18 32 31 47 17M32 31 17 47M32 31l15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="47" cy="17" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="31" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="47" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="47" cy="47" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg {...sharedProps}>
          <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

export function HowItWorksV2Mechanism({ content }: HowItWorksV2MechanismProps) {
  return (
    <section data-how-it-works-section="mechanism" className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#81766a] sm:text-xs">
          {content.eyebrow}
        </p>

        <h2 className="mt-5 max-w-[14ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-7xl">
          {content.title}
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
          {content.description}
        </p>

        <div className="mt-16 hidden lg:block">
          <ol className="grid grid-cols-4">
            {content.steps.map((step, index) => (
              <li key={step.id} className="relative min-w-0 px-6 first:pl-0 last:pr-0">
                <div className="relative">
                  <div className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border border-black/10 bg-[#eee7dd]">
                    <PathwayVisual id={step.id} />
                  </div>

                  {index < content.steps.length - 1 ? (
                    <div aria-hidden="true" className="absolute left-[calc(50%+2.5rem)] top-10 flex w-[calc(100%-5rem)] -translate-y-1/2 items-center text-[#8f8273]">
                      <span className="h-px flex-1 bg-black/15" />
                      <span className="ml-2 text-xl leading-none">→</span>
                    </div>
                  ) : null}
                </div>

                <div className="mt-7">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9a8f82]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c] xl:text-3xl">
                    {step.label}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-12 lg:hidden">
          {content.steps.map((step, index) => (
            <li key={step.id} className="relative grid grid-cols-[5rem_1fr] gap-x-5 pb-12 last:pb-0">
              <div className="relative flex justify-center">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-black/10 bg-[#eee7dd]">
                  <PathwayVisual id={step.id} />
                </div>

                {index < content.steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute bottom-0 left-1/2 top-16 flex -translate-x-1/2 flex-col items-center text-[#8f8273]">
                    <span className="w-px flex-1 bg-black/15" />
                    <span className="mt-2 text-xl leading-none">↓</span>
                  </div>
                ) : null}
              </div>

              <div className="min-w-0 pt-1">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9a8f82]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-[-0.045em] text-[#1f1f1c]">
                  {step.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
