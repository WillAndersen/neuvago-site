import Image from "next/image";
import type { appPageContent } from "@/content/app";
import { SectionHeading } from "@/components/home";

type AppWhatItDoesProps = {
  content: typeof appPageContent.whatItDoes;
};

export function AppWhatItDoes({ content }: AppWhatItDoesProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
        <div>
          <SectionHeading
            title={content.title}
            description={content.description}
          />

          <ul className="mt-8 space-y-4">
            {content.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-[1.5rem] border border-black/5 bg-white/70 px-5 py-4 text-[#5f5a52] shadow-sm"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.08)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
