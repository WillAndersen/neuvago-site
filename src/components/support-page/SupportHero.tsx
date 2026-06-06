import type { supportPageContent } from "@/content/support";
import { CoreCinematicHero } from "@/components/core-page";

type SupportHeroProps = {
  content: typeof supportPageContent.hero;
};

export function SupportHero({ content }: SupportHeroProps) {
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
      panelEyebrow="Calm orientation"
      panelText="Support should feel like the product itself: clear, warm, practical, and easy to navigate when you need direction."
      imagePosition="68% center"
      mobileImagePosition="54% center"
    />
  );
}
