import Link from "next/link";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2TopicsProps = {
  content: typeof researchV2Content.topics;
};

export function ResearchV2Topics({
  content,
}: ResearchV2TopicsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>

          <Link
            href={content.allTopicsCta.href}
            className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
          >
            {content.allTopicsCta.label}
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {content.primary.map((topic, index) => (
            <Link
              key={topic.href}
              href={topic.href}
              className={`group rounded-[2rem] border p-6 shadow-[0_20px_72px_rgba(31,31,28,0.06)] transition hover:-translate-y-0.5 sm:p-8 ${
                index === 1
                  ? "border-[#b98c50]/25 bg-[#f3e6d2]"
                  : "border-black/6 bg-[#f2eee8]"
              }`}
            >
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-[#8a7f72]">
                Primary technology topic
              </p>
              <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[#1f1f1c]">
                {topic.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                {topic.description}
              </p>
              <span className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 group-hover:underline">
                {topic.linkLabel}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {content.related.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_14px_50px_rgba(31,31,28,0.045)] transition hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                {topic.description}
              </p>
              <span className="mt-5 inline-flex text-xs font-medium text-[#1f1f1c] underline-offset-4 group-hover:underline">
                {topic.linkLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
