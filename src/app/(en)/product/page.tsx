import type { Metadata } from "next";
import { productV2Content } from "@/content/product-v2";
import {
  ProductV2Hero,
  ProductV2Benefits,
  ProductV2HowItWorks,
  ProductV2Modes,
  ProductV2Research,
  ProductV2BuyBox,
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
    "Explore Neuvago, a non-invasive vagus nerve stimulation device with adjustable intensity, four stimulation modes, simple controls and an ear-based approach designed for everyday wellness routines.",
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
      "Discover the Neuvago device, its four stimulation modes, high-level vagus nerve stimulation approach, research context, package contents and current purchase information.",
    url: "/product",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulator",
    description:
      "A non-invasive vagus nerve stimulation device with adjustable intensity, four named modes and simple physical controls.",
  },
};

export default function ProductPage() {
  const content = productV2Content;

  const structuredData: Array<Record<string, unknown>> =
    buildPageWithBreadcrumbStructuredData({
      title: content.hero.title,
      description: `${content.hero.description} ${content.hero.technologyDescription}`,
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
          key={`product-v2-2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <ProductV2Hero content={content.hero} />
      <ProductV2Benefits content={content.benefits} />
      <ProductV2HowItWorks content={content.howItWorks} />
      <ProductV2Modes content={content.modes} />
      <ProductV2BuyBox content={content.buyBox} />
      <ProductV2Research content={content.research} />
      <ProductV2Details content={content.productDetails} />
      <ProductV2Faq content={content.faq} />
      <ProductV2FinalCta content={content.finalCta} />
    </main>
  );
}
