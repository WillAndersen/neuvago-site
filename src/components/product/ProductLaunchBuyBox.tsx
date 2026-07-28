
import Image from "next/image";
import Link from "next/link";

type ProductLaunchGalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProductLaunchBuyBoxCopy = {
  galleryImages: readonly [ProductLaunchGalleryImage, ...ProductLaunchGalleryImage[]];
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  purchaseTitle: string;
  launchStatus: string;
  purchaseDescription: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  includedItems: readonly string[];
  reassuranceItems: readonly string[];
};

const defaultCopy = {
  galleryImages: [
    {
      src: "/images/neuvago/launch/product-gallery-front.webp",
      alt: "Neuvago device shown from the front on a calm neutral background.",
      label: "Front view",
    },
    {
      src: "/images/neuvago/launch/product-gallery-angle.webp",
      alt: "Neuvago device shown from an angled view to reveal its shape and finish.",
      label: "Angled view",
    },
    {
      src: "/images/neuvago/launch/product-gallery-detail.webp",
      alt: "Close detail of the Neuvago device material and premium finish.",
      label: "Material detail",
    },
  ],
  eyebrow: "Launch product",
  title: "Neuvago",
  description:
    "A premium non-invasive vagus nerve stimulator paired with guided app sessions for short, repeatable regulation routines.",
  badge: "Device + app",
  purchaseTitle: "Purchase options",
  launchStatus: "Preparing launch",
  purchaseDescription:
    "Price, availability, and checkout options will appear here as soon as purchasing opens.",
  primaryCta: {
    label: "Get launch updates",
    href: "/get-started",
  },
  secondaryCta: {
    label: "Review intended use",
    href: "/legal/intended-use",
  },
  includedItems: [
    "Neuvago device",
    "Guided app experience",
    "Quick-start guidance",
    "Safety and intended-use information",
  ],
  reassuranceItems: [
    "Non-invasive wellness support",
    "Designed for short daily routines",
    "Clear safety and claim boundaries",
  ],
} satisfies ProductLaunchBuyBoxCopy;

function GalleryImage({
  src,
  alt,
  size = "large",
}: {
  src: string;
  alt: string;
  size?: "large" | "small";
}) {
  const containerClassName =
    size === "large"
      ? "flex items-center justify-center p-6 sm:p-8"
      : "flex items-center justify-center p-5";

  const imageFrameClassName =
    size === "large"
      ? "relative aspect-square w-full max-w-[25rem]"
      : "relative aspect-square w-full max-w-[14rem]";

  const imageSizes =
    size === "large"
      ? "(max-width: 640px) 74vw, (max-width: 1024px) 420px, 420px"
      : "(max-width: 640px) 38vw, 220px";

  return (
    <div className={containerClassName}>
      <div className={imageFrameClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes={imageSizes}
        />
      </div>
    </div>
  );
}

export function ProductLaunchBuyBox({
  copy = defaultCopy,
}: {
  copy?: ProductLaunchBuyBoxCopy;
}) {
  const [mainImage, ...secondaryImages] = copy.galleryImages;

  return (
    <section id="buy" className="scroll-mt-28 bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[88rem] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.94fr_0.82fr] lg:items-start lg:gap-10 lg:px-12 lg:py-20">
        <div className="order-2 grid gap-4 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.09)]">
            <GalleryImage src={mainImage.src} alt={mainImage.alt} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {secondaryImages.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[1.55rem] border border-black/5 bg-[#fbf8f2] shadow-[0_16px_56px_rgba(31,31,28,0.06)]"
              >
                <GalleryImage src={image.src} alt={image.alt} size="small" />
                <div className="border-t border-black/5 px-4 py-3">
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[#8a7f72]">
                    {image.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside
          id="shopify-buy-box"
          aria-labelledby="product-buy-heading"
          className="order-1 rounded-[2.15rem] border border-black/5 bg-[#fbf8f2]/90 p-6 shadow-[0_26px_95px_rgba(31,31,28,0.1)] backdrop-blur sm:p-8 lg:sticky lg:top-24 lg:order-2"
        >
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {copy.eyebrow}
          </p>

          <div className="mt-5 border-b border-black/8 pb-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2
                  id="product-buy-heading"
                  className="text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl"
                >
                  {copy.title}
                </h2>
                <p className="mt-3 max-w-md text-base leading-7 text-[#5f5a52]">
                  {copy.description}
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#6f675d]">
                {copy.badge}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-[1.7rem] border border-black/6 bg-[#f2eee8]/72 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-[#292824]">
                {copy.purchaseTitle}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a7f72]">
                {copy.launchStatus}
              </p>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
              {copy.purchaseDescription}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={copy.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
              >
                {copy.primaryCta.label}
              </Link>
              <Link
                href={copy.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                {copy.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {copy.includedItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-black/6 bg-white/58 px-4 py-3 text-sm font-medium text-[#38342f]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7 space-y-3 border-t border-black/8 pt-6">
            {copy.reassuranceItems.map((item) => (
              <p key={item} className="flex gap-3 text-sm leading-6 text-[#5f5a52]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f1f1c]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
