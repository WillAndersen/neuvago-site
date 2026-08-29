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
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <h2 className="max-w-[12ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
          {content.title}
        </h2>
        <div className="mt-14 grid border-t border-black/12 lg:grid-cols-3">
          {content.groups.map((group, index) => (
            <section
              key={group.id}
              className={[
                "py-9 lg:px-10 lg:py-11",
                index > 0 ? "border-t border-black/12 lg:border-l lg:border-t-0" : "",
              ].join(" ")}
            >
              <h3 className="max-w-[18ch] text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                {group.title}
              </h3>
              <div className="mt-7 border-t border-black/10">
                {group.items.map((item) =>
                  item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group flex min-h-14 items-center justify-between gap-4 border-b border-black/10 py-4 text-sm font-medium text-[#302d29] transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2eee8] sm:text-base"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-[#8b7f72] transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  ) : (
                    <div
                      key={item.id}
                      data-resource-status="reserved"
                      className="flex min-h-14 items-center border-b border-black/10 py-4 text-sm text-[#786f66] sm:text-base"
                    >
                      {item.label}
                    </div>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
