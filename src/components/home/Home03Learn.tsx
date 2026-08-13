import Link from "next/link";
import { CtaButton } from "@/components/home/CtaButton";
import type { homepage03Content } from "@/content/homepage-v3";

type Home03LearnProps = {
  content: typeof homepage03Content.learn;
};

export function Home03Learn({
  content,
}: Home03LearnProps) {
  return (
    <section className="bg-[#ebe3d8]">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
              {content.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[14ch] text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-y border-black/9 py-5">
              {content.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#5f5a52] underline-offset-4 transition hover:text-[#1f1f1c] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-7">
              <CtaButton
                href={content.cta.href}
                label={content.cta.label}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
