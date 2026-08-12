import Image from "next/image";
import type { appV2Content } from "@/content/app-v2";

type AppV2PersonalToolsProps = {
  content: typeof appV2Content.personalTools;
};

export function AppV2PersonalTools({
  content,
}: AppV2PersonalToolsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12 lg:py-24">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 divide-y divide-black/9 border-y border-black/9">
            {content.items.map((item) => (
              <article key={item.title} className="py-5">
                <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.2rem] border border-black/6 bg-[#eadfd2] shadow-[0_28px_95px_rgba(31,31,28,0.09)]">
          <div className="relative aspect-[4/5]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 92vw, 46vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
