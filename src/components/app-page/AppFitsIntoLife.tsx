import Image from "next/image";
import type { appPageContent } from "@/content/app";

type AppFitsIntoLifeProps = {
  content: typeof appPageContent.fitsIntoLife;
};

const defaultImages = [
  { src: "/images/neuvago/morning-reset-desktop.webp", alt: "Neuvago morning reset routine with device and guided app." },
  { src: "/images/neuvago/stress-daytime-pause-desktop.webp", alt: "Neuvago daytime pause routine with device and guided app." },
  { src: "/images/neuvago/evening-wind-down-desktop.webp", alt: "Neuvago evening wind-down routine with device and guided app." },
];

export function AppFitsIntoLife({ content }: AppFitsIntoLifeProps) {
  const sectionContent = content as typeof appPageContent.fitsIntoLife & {
    eyebrow?: string;
    cardLabel?: string;
    cardImages?: typeof defaultImages;
  };

  const images = sectionContent.cardImages ?? defaultImages;

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {sectionContent.eyebrow ?? "In real life"}
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.cards.map((card, index) => {
            const image = images[index] ?? images[0];
            return (
              <article key={card.title} className="overflow-hidden rounded-[2.15rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.07)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 32vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">
                    {sectionContent.cardLabel ?? ""}0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
