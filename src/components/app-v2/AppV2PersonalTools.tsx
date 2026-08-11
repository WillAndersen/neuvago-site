import Image from "next/image";
import type { appV2Content } from "@/content/app-v2";

type AppV2PersonalToolsProps = {
  content: typeof appV2Content.personalTools;
};

export function AppV2PersonalTools({
  content,
}: AppV2PersonalToolsProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-12 lg:py-24">
        <div className="overflow-hidden rounded-[2.2rem] border border-black/6 bg-[#eee4d8] shadow-[0_30px_105px_rgba(31,31,28,0.1)]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={1024}
            height={1536}
            className="mx-auto h-auto max-h-[45rem] w-auto"
            sizes="(max-width: 1024px) 84vw, 470px"
          />
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.7rem)] font-medium leading-[0.97] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 space-y-4">
            {content.cards.map((card) => (
              <article
                key={card.title}
                className="border-t border-black/10 pt-5"
              >
                <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-7 rounded-[1.2rem] border border-black/6 bg-[#fbf8f2] px-4 py-3 text-xs leading-6 text-[#6f675e]">
            {content.methodologyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
