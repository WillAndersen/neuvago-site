import Image from "next/image";
import Link from "next/link";
import type { homepageContent } from "@/content/homepage";

type HomeEverydayPathwaysProps = {
  content: typeof homepageContent.everydayPathways;
};

export function HomeEverydayPathways({ content }: HomeEverydayPathwaysProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.items.map((item) => (
            <Link
              key={item.title}
              href={item.href ?? "/conditions"}
              className="group overflow-hidden rounded-[2.2rem] border border-black/5 bg-white/55 shadow-[0_24px_80px_rgba(35,28,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(35,28,20,0.12)]"
            >
              {item.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ede5d9]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    sizes="(max-width: 1024px) 92vw, 420px"
                  />
                </div>
              ) : null}
              <div className="p-7">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b8277]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
