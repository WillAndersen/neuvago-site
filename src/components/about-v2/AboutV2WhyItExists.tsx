import type { AboutV2Content } from "@/content/about-v2";

type AboutV2WhyItExistsProps = {
  content: AboutV2Content["whyItExists"];
};

export function AboutV2WhyItExists({
  content,
}: AboutV2WhyItExistsProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-black/5 bg-[#f2eee8] text-[#1f1f1c]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-[42rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
            {content.title}
          </h2>
        </div>
        <div className="max-w-3xl border-t border-black/12 pt-7">
          <div className="space-y-6">
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-[#5f5a52] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
