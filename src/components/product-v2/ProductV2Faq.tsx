import Link from "next/link";
import type {
  productV2Content,
  ProductV2FaqItem,
} from "@/content/product-v2";

type ProductV2FaqProps = {
  content: Omit<
    typeof productV2Content.faq,
    "items"
  > & {
    items: readonly ProductV2FaqItem[];
  };
};

const emphasizedModeNames = [
  "Sleep",
  "Relax",
  "Meditation",
  "Relief",
] as const;

function renderAnswerParagraph(paragraph: string) {
  const text = paragraph.trim();
  const modeName = emphasizedModeNames.find((name) =>
    text.startsWith(`${name} `),
  );

  if (!modeName) {
    return text;
  }

  return (
    <>
      <strong className="font-semibold text-[#302d29]">{modeName}</strong>
      {text.slice(modeName.length)}
    </>
  );
}

export function ProductV2Faq({
  content,
}: ProductV2FaqProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.4rem,9.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-lg py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf8f2]">
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

              <div className="max-w-3xl pb-5 pr-10">
                <div className="space-y-4">
                  {item.answer.split(/\n\s*\n/).map((paragraph, index) => (
                    <p
                      key={`${item.question}-answer-${index}`}
                      className="text-sm leading-7 text-[#5f5a52] sm:text-base"
                    >
                      {renderAnswerParagraph(paragraph)}
                    </p>
                  ))}
                </div>
                {item.answerLink ? (
                  <Link
                    href={item.answerLink.href}
                    className="mt-3 inline-flex text-sm font-medium text-[#1f1f1c] underline underline-offset-4 transition hover:text-[#5f5a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2"
                  >
                    {item.answerLink.label}
                  </Link>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
