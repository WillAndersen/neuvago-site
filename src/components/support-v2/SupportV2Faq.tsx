import type { SupportV2Content } from "@/content/support-v2";

type SupportV2FaqProps = {
  content: SupportV2Content["faq"];
};

export function SupportV2Faq({ content }: SupportV2FaqProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20 lg:px-12 lg:py-28">
        <h2 className="max-w-[12ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
          {content.title}
        </h2>
        <div className="border-t border-black/12">
          {content.items.map((item) =>
            item.answer ? (
              <details key={item.id} className="group border-b border-black/12 py-6 sm:py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-[-0.025em] marker:content-none sm:text-xl">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="text-[#8b7f72] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.answer}
                </p>
              </details>
            ) : (
              <div
                key={item.id}
                data-answer-status="reserved"
                className="flex min-h-20 items-center justify-between gap-6 border-b border-black/12 py-6 sm:py-7"
              >
                <h3 className="text-lg font-medium tracking-[-0.025em] sm:text-xl">
                  {item.question}
                </h3>
                <span aria-hidden="true" className="shrink-0 text-[#8b7f72]">
                  +
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
