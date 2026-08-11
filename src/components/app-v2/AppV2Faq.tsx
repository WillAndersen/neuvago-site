import type { appV2Content } from "@/content/app-v2";

type AppV2FaqProps = {
  content: typeof appV2Content.faq;
};

export function AppV2Faq({ content }: AppV2FaqProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.7rem)] font-medium leading-[0.97] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {content.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.45rem] border border-black/6 bg-[#fbf8f2] px-5 py-1 shadow-[0_14px_45px_rgba(31,31,28,0.04)] open:bg-white sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left">
                <span className="text-base font-medium tracking-[-0.025em] text-[#1f1f1c] sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/8 bg-white text-lg text-[#5f5a52] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-5 pr-10 text-sm leading-7 text-[#5f5a52] sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
