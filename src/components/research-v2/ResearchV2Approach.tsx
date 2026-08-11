import type { researchV2Content } from "@/content/research-v2";

type ResearchV2ApproachProps = {
  content: typeof researchV2Content.approach;
};

export function ResearchV2Approach({
  content,
}: ResearchV2ApproachProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="max-w-xl">
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

          <div className="grid gap-4 md:grid-cols-3">
            {content.principles.map((principle, index) => (
              <article
                key={principle.title}
                className={`rounded-[1.7rem] border p-6 shadow-[0_18px_62px_rgba(31,31,28,0.05)] ${
                  index === 2
                    ? "border-black/10 bg-[#1f1f1c] text-white"
                    : "border-black/6 bg-[#fbf8f2] text-[#1f1f1c]"
                }`}
              >
                <p
                  className={`text-[0.65rem] font-medium uppercase tracking-[0.2em] ${
                    index === 2 ? "text-white/45" : "text-[#9a8f82]"
                  }`}
                >
                  Principle {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.045em]">
                  {principle.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 2 ? "text-white/68" : "text-[#5f5a52]"
                  }`}
                >
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
