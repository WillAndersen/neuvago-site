import type { supportPageContent } from "@/content/support";
import { CoreCinematicHero } from "@/components/core-page";

type SupportHeroProps = {
  content: typeof supportPageContent.hero;
};

export function SupportHero({ content }: SupportHeroProps) {
  const heroContent = content as typeof supportPageContent.hero & {
    panelEyebrow?: string;
    panelText?: string;
  };

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
      panelEyebrow={heroContent.panelEyebrow ?? "Calm orientation"}
      panelText={
        heroContent.panelText ??
        "Support should feel like the product itself: clear, warm, practical, and easy to navigate when you need direction."
      }
      imagePosition="68% center"
      mobileImagePosition="54% center"
    />
  );
}
