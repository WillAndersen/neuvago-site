import Image from "next/image";
import Link from "next/link";
import type { productV2Content } from "@/content/product-v2";

type ProductV2BuyBoxProps = {
  content: typeof productV2Content.buyBox;
};

type GalleryImageProps = {
  image: ProductV2BuyBoxProps["content"]["gallery"][number];
  size: "large" | "small";
};

function GalleryImage({
  image,
  size,
}: GalleryImageProps) {
  const frameClassName =
    size === "large"
      ? "relative aspect-[4/3] w-full"
      : "relative aspect-square w-full";

  const sizes =
    size === "large"
      ? "(max-width: 1023px) 92vw, 52vw"
      : "(max-width: 1023px) 44vw, 25vw";

  return (
    <div className={frameClassName}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-contain"
        sizes={sizes}
      />
    </div>
  );
}

export function ProductV2BuyBox({
  content,
}: ProductV2BuyBoxProps) {
  const primaryImage = content.gallery[0];
  const detailImages = content.gallery.slice(1, 3);

  return (
    <section
      id="buy"
      aria-labelledby="product-buy-heading"
      className="scroll-mt-28 bg-[#f2eee8]"
    >
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2.35rem] border border-black/6 bg-[#fbf8f2] shadow-[0_28px_100px_rgba(31,31,28,0.1)]">
              <GalleryImage
                image={primaryImage}
                size="large"
              />
            </div>

            {detailImages.length ? (
              <div className="grid grid-cols-2 gap-4">
                {detailImages.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-[1.65rem] border border-black/6 bg-[#fbf8f2] shadow-[0_16px_54px_rgba(31,31,28,0.07)]"
                  >
                    <GalleryImage
                      image={image}
                      size="small"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-[2.35rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_28px_100px_rgba(31,31,28,0.09)] sm:p-8 lg:sticky lg:top-28 lg:p-10">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#81766a]">
              {content.eyebrow}
            </p>

            <h2
              id="product-buy-heading"
              className="mt-5 max-w-[13ch] text-balance text-[clamp(2.75rem,8vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[#1f1f1c]"
            >
              {content.title}
            </h2>

            <div className="mt-7 border-y border-black/9 py-5">
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c] sm:text-3xl">
                {content.productName}
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5f5a52]">
                {content.productDescription}
              </p>
            </div>

            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1f1f1c] sm:text-2xl">
                {content.includedTitle}
              </h3>

              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {content.includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#4f4a43] sm:text-[0.95rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.58rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a8267]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <Link
                href={content.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf8f2]"
              >
                {content.primaryCta.label}
              </Link>

              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/65 px-6 py-3.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf8f2]"
              >
                {content.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
