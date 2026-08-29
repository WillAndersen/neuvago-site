import Link from "next/link";

import type { SupportV2Content } from "@/content/support-v2";

type SupportV2ResourcesProps = {
  content: SupportV2Content["resources"];
};

export function SupportV2Resources({ content }: SupportV2ResourcesProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section
      id="support-resources"
      className="scroll-mt-24 border-b border-black/5 bg-[#f2eee8] text-[#1f1f1c]"
    >
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
        <header className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
            {content.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.introduction}
          </p>
        </header>

        <div className="border-t border-black/12">
          {content.groups.map((group) => (
            <section
              key={group.id}
              className="border-b border-black/12 py-8 sm:py-10 lg:py-12"
            >
              <h3 className="max-w-[22ch] text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                {group.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                {group.description}
              </p>
              {group.items.length > 0 ? (
                <div className="mt-6 flex flex-col items-start gap-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      target={item.openInNewTab ? "_blank" : undefined}
                      rel={item.openInNewTab ? "noreferrer" : undefined}
                      className="group inline-flex min-h-11 items-center gap-3 border-b border-black/22 pb-1 text-sm font-medium text-[#302d29] transition hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2eee8] sm:text-base"
                    >
                      <span>
                        {item.label}
                        {item.openInNewTab ? (
                          <span className="sr-only"> (opens in a new tab)</span>
                        ) : null}
                      </span>
                      {item.fileType ? (
                        <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#7b7167]">
                          {item.fileType}
                        </span>
                      ) : null}
                      <span
                        aria-hidden="true"
                        className="text-[#8b7f72] transition group-hover:translate-x-0.5"
                      >
                        {item.openInNewTab ? "↗" : "→"}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
