import type { productPageContent } from "@/content/product";
import { CoreCinematicHero } from "@/components/core-page";

type ProductHeroProps = {
  content: typeof productPageContent.hero;
};

export function ProductHero({ content }: ProductHeroProps) {
  return (
    <CoreCinematicHero
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      primaryCta={content.primaryCta}
      secondaryCta={content.secondaryCta}
      desktopImage={content.desktopImage}
      mobileImage={content.mobileImage}
      proofLine={content.proofLine}
      panelEyebrow="The physical anchor"
      panelText="A tactile, non-invasive device designed to make the guided experience feel calm, grounded, and easy to return to."
      imagePosition="72% center"
      mobileImagePosition="58% center"
    />
  );
}
