import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { BaseCard } from "@/components/home/BaseCard";

type HomeInRealLifeProps = {
  content: typeof homepageContent.inRealLife;
};

export function HomeInRealLife({ content }: HomeInRealLifeProps) {
  const images = [
    {
      title: content.images[0].title,
      description: content.images[0].description,
      image: {
        src: "/images/neuvago/morning-reset-desktop.webp",
        alt: "Neuvago device and guided app arranged in a calm morning reset routine.",
      },
    },
    content.images[1],
  ];

  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-18">
        <SectionHeading
          eyebrow="In real life"
          title={content.title}
          description={content.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {images.map((item) => (
            <BaseCard
              key={item.title}
              className="overflow-hidden rounded-[2rem]"
            >
              <div className="relative aspect-[4/3] bg-[#f7f4ef]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1f1f1c]">{item.title}</h3>
                {item.description ? (
                  <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
