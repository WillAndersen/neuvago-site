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
        <h2 className="max-w-[10ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
          {content.title}
        </h2>

        <div className="border-t border-black/12">
          {content.items.map((item) => (
            <article key={item.id} className="border-b border-black/12 py-8 sm:py-10">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
