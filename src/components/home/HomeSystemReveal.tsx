import Image from "next/image";
import Link from "next/link";
import type { homepageContent } from "@/content/homepage";

type HomeSystemRevealProps = {
  content: typeof homepageContent.systemReveal;
};

export function HomeSystemReveal({ content }: HomeSystemRevealProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-12 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-10 divide-y divide-black/8 border-y border-black/8">
            {content.items.map((item) => (
              <Link
                key={item.title}
                href={item.href ?? "/product"}
                className="group grid gap-3 py-6 transition hover:bg-white/35 sm:grid-cols-[0.22fr_0.78fr]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b8277]">
                  {item.eyebrow}
                </p>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/55 shadow-[0_34px_100px_rgba(35,28,20,0.1)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
