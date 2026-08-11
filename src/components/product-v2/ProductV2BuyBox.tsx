import Image from "next/image";
import Link from "next/link";
import { ShopifyCheckoutButton } from "@/components/commerce/ShopifyCheckoutButton";
import type { productV2Content } from "@/content/product-v2";

type ProductV2BuyBoxProps = {
  content: typeof productV2Content.buyBox;
};

function GalleryImage({
  src,
  alt,
  size = "large",
}: {
  src: string;
  alt: string;
  size?: "large" | "small";
}) {
  return (
    <div
      className={
        size === "large"
          ? "flex items-center justify-center p-6 sm:p-8"
          : "flex items-center justify-center p-5"
      }
    >
      <div
        className={
          size === "large"
            ? "relative aspect-square w-full max-w-[25rem]"
            : "relative aspect-square w-full max-w-[14rem]"
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes={
            size === "large"
              ? "(max-width: 640px) 74vw, 420px"
              : "(max-width: 640px) 38vw, 220px"
          }
        />
      </div>
    </div>
  );
}

export function ProductV2BuyBox({ content }: ProductV2BuyBoxProps) {
  return (
    <section id="buy" className="scroll-mt-28 bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[88rem] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.94fr_0.82fr] lg:items-start lg:gap-10 lg:px-12 lg:py-20">
        <div className="order-2 grid gap-4 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.09)]">
            <GalleryImage
              src={content.gallery[0].src}
              alt={content.gallery[0].alt}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {content.gallery.slice(1).map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[1.55rem] border border-black/5 bg-[#fbf8f2] shadow-[0_16px_56px_rgba(31,31,28,0.06)]"
              >
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  size="small"
                />
              </div>
            ))}
          </div>
        </div>

        <aside
          id="shopify-buy-box"
          aria-labelledby="product-buy-heading"
          className="order-1 rounded-[2.15rem] border border-black/5 bg-[#fbf8f2]/90 p-6 shadow-[0_26px_95px_rgba(31,31,28,0.1)] backdrop-blur sm:p-8 lg:sticky lg:top-24 lg:order-2"
        >
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>

          <div className="mt-5 border-b border-black/8 pb-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2
                  id="product-buy-heading"
                  className="text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl"
                >
                  {content.productName}
                </h2>
                <p className="mt-3 max-w-md text-base leading-7 text-[#5f5a52]">
                  {content.productDescription}
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#6f675d]">
                {content.badge}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-[1.7rem] border border-black/6 bg-[#f2eee8]/72 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-[#292824]">
                {content.purchaseTitle}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a7f72]">
                {content.launchStatus}
              </p>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
              {content.purchaseDescription}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.purchaseOpen ? (
                <ShopifyCheckoutButton
                  locale="en"
                  quantity={1}
                  disabledLabel={content.checkoutDisabledLabel}
                  loadingLabel={content.checkoutLoadingLabel}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {content.checkoutLabel}
                </ShopifyCheckoutButton>
              ) : (
                <Link
                  href={content.prelaunchCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
                >
                  {content.prelaunchCta.label}
                </Link>
              )}

              {content.purchaseOpen ? (
                <Link
                  href={content.prelaunchCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  {content.prelaunchCta.label}
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-black/8 bg-white/58 px-5 py-3 text-sm font-medium text-[#82796f] opacity-80"
                >
                  {content.checkoutDisabledLabel}
                </button>
              )}
            </div>

            <Link
              href={content.intendedUseCta.href}
              className="mt-4 inline-flex text-sm font-medium text-[#5f5a52] underline-offset-4 transition hover:text-[#1f1f1c] hover:underline"
            >
              {content.intendedUseCta.label}
            </Link>

            <p className="mt-6 border-t border-black/8 pt-5 text-xs leading-5 text-[#6d655d]">
              {content.prelaunchNote}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {content.trustLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-black/8 bg-white/60 px-3.5 py-2 text-xs font-medium text-[#5f5a52] transition hover:bg-white hover:text-[#1f1f1c]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a7f72]">
              Included
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {content.includedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.15rem] border border-black/6 bg-white/58 px-4 py-3 text-sm font-medium text-[#38342f]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-3 border-t border-black/8 pt-6">
            {content.reassuranceItems.map((item) => (
              <p
                key={item}
                className="flex gap-3 text-sm leading-6 text-[#5f5a52]"
              >
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
