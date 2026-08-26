import Link from "next/link";

import type { ConditionsV2Content } from "@/content/conditions-v2";

type ConditionsV2FeaturedProps = {
  content: ConditionsV2Content["featured"];
};

export function ConditionsV2Featured({
  content,
}: ConditionsV2FeaturedProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section
      id={content.id}
      className="scroll-mt-28 border-b border-black/5 bg-[#f2eee8]"
    >
      <div className="mx-auto grid max-w-[92rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-3xl lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          {content.description ? (
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          ) : null}
        </div>

        <ul className="grid border-t border-black/10 md:grid-cols-2">
          {content.items.map((item, index) => {
            const rowClass = [
              "group flex min-h-40 items-end justify-between gap-6 border-b border-black/10 py-7",
              index % 2 === 0 ? "md:pr-8" : "md:border-l md:pl-8",
            ].join(" ");

            return (
              <li key={item.id}>
                {item.href ? (
                  <Link href={item.href} className={rowClass}>
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] sm:text-3xl">
                      {item.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-[#6f675d] transition group-hover:translate-x-1 group-hover:text-[#1f1f1c]"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <div className={rowClass}>
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
