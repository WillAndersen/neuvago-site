import Link from "next/link";

import type { ConditionsV2Content } from "@/content/conditions-v2";

type ConditionsV2MoreProps = {
  content: ConditionsV2Content["more"];
};

export function ConditionsV2More({
  content,
}: ConditionsV2MoreProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[#1f1f1c] sm:text-5xl">
          {content.title}
        </h2>
        {content.description ? (
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        ) : null}

        <ul className="mt-12 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const rowClass = [
              "group flex min-h-32 items-end justify-between gap-5 border-b border-black/10 py-6",
              index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6",
              index === 2 ? "lg:border-l lg:pl-6 lg:pr-6" : "",
              index === 1 ? "lg:pr-6" : "",
              index === 3 ? "lg:border-l lg:pl-6" : "",
            ].join(" ");

            return (
              <li key={item.id}>
                {item.href ? (
                  <Link href={item.href} className={rowClass}>
                    <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-[#1f1f1c] sm:text-2xl">
                      {item.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-[#6f675d] transition group-hover:translate-x-1 group-hover:text-[#1f1f1c]"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <div className={rowClass}>
                    <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-[#1f1f1c] sm:text-2xl">
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
