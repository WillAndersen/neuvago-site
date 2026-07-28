import Image from "next/image";

export type AuthorityVisualSectionImage = {
  src: string;
  alt: string;
};

type AuthorityVisualSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: AuthorityVisualSectionImage;
  reverse?: boolean;
};

export function AuthorityVisualSection({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
}: AuthorityVisualSectionProps) {
  return (
    <section className="border-b border-black/5 bg-[#f1ece4]">
      <div
        className={`mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
          reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-[#1f1f1c] md:text-5xl md:leading-[1.04]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            {description}
          </p>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.10)]">
            <div className="relative aspect-[4/5] md:aspect-[16/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 620px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
