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
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7a756c] sm:text-sm">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <ul className="border-t border-black/10">
          {content.items.map((item) => (
            <li key={item.id} className="border-b border-black/10">
              <Link
                href={item.href}
                className="group grid gap-5 py-8 transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1f1f1c] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-2"
              >
                <div>
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="self-center text-xl text-[#6f675d] transition group-hover:translate-x-1 group-hover:text-[#1f1f1c] group-focus-visible:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
