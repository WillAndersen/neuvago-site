import Link from "next/link";
import type {
  productV2Content,
  ProductV2Accordion,
} from "@/content/product-v2";

type ProductV2DetailsProps = {
  content: Omit<
    typeof productV2Content.productDetails,
    "accordions"
  > & {
    accordions: readonly ProductV2Accordion[];
  };
};

export function ProductV2Details({
  content,
}: ProductV2DetailsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-12 lg:py-24">
        <div className="max-w-xl lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.4rem,9.5vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {content.accordions.map((accordion) => (
            <details
              key={accordion.title}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black/30">
                <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c] sm:text-2xl">
                  {accordion.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white/60 text-xl text-[#5f5a52]"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>

              <div className="border-t border-black/6 pb-7 pt-5">
                {accordion.description ? (
                  <p className="max-w-3xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                    {accordion.description}
                  </p>
                ) : null}

                {accordion.items?.length ? (
                  <ul
                    className={[
                      "grid gap-x-8 gap-y-3 sm:grid-cols-2",
                      accordion.description ? "mt-5" : "",
                    ].join(" ")}
                  >
                    {accordion.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-[#5f5a52]"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f1f1c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {accordion.specifications?.length ? (
                  <dl className="divide-y divide-black/8 border-y border-black/8">
                    {accordion.specifications.map(
                      (specification) => (
                        <div
                          key={specification.label}
                          className="grid gap-1 py-4 sm:grid-cols-[0.48fr_0.52fr] sm:gap-8"
                        >
                          <dt className="text-sm font-medium text-[#1f1f1c]">
                            {specification.label}
                          </dt>
                          <dd className="text-sm leading-6 text-[#5f5a52] sm:text-right">
                            {specification.value}
                          </dd>
                        </div>
                      ),
                    )}
                  </dl>
                ) : null}

                {accordion.link ? (
                  <Link
                    href={accordion.link.href}
                    className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/35 underline-offset-4 transition hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  >
                    {accordion.link.label}
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
