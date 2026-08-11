import type { Metadata } from "next";
import { productV2Content } from "@/content/product-v2";
import {
  ProductV2Hero,
  ProductV2BuyBox,
  ProductV2HowItWorks,
  ProductV2Features,
  ProductV2EverydayUse,
  ProductV2UseSequence,
  ProductV2Research,
  ProductV2Included,
  ProductV2Details,
  ProductV2Faq,
  ProductV2FinalCta,
} from "@/components/product-v2";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago | Non-Invasive Vagus Nerve Stimulator",
  description:
    "Explore Neuvago, a non-invasive vagus nerve stimulation device with adjustable intensity, physical controls, and ear-based application. No app or Bluetooth connection is required.",
  alternates: {
    canonical: "/product",
    languages: {
      "en-US": "/product",
      "no-NO": "/no/produkt",
      "x-default": "/product",
    },
  },
  openGraph: {
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulator",
    description:
      "Explore the Neuvago device, how ear-based stimulation works, its practical features, what is included, and the purchase options being prepared for launch.",
    url: "/product",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulator",
    description:
      "A self-contained non-invasive vagus nerve stimulation device with adjustable intensity and physical controls.",
  },
};

export default function ProductPage() {
  const content = productV2Content;

  const structuredData: Array<Record<string, unknown>> =
    buildPageWithBreadcrumbStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/product",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
      ],
    });

  const faqStructuredData = buildFAQStructuredData(content.faq.items);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`product-v2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <ProductV2Hero content={content.hero} />
      <ProductV2BuyBox content={content.buyBox} />
      <ProductV2HowItWorks content={content.howItWorks} />
      <ProductV2Features content={content.features} />
      <ProductV2EverydayUse content={content.everydayUse} />
      <ProductV2UseSequence content={content.useSequence} />
      <ProductV2Research content={content.research} />
      <ProductV2Included content={content.included} />
      <ProductV2Details content={content.productDetails} />
      <ProductV2Faq content={content.faq} />
      <ProductV2FinalCta content={content.finalCta} />
    </main>
  );
}
