import type { AboutV2Content } from "@/content/about-v2";

type AboutV2PrinciplesProps = {
  content: AboutV2Content["principles"];
};

export function AboutV2Principles({
  content,
}: AboutV2PrinciplesProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[10ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
            {content.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.introduction}
          </p>
        </div>

        <div className="border-t border-black/12">
          {content.items.map((item) => (
            <article key={item.id} className="border-b border-black/12 py-8 sm:py-10">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
