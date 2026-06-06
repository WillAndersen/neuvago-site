import type { appPageContent } from "@/content/app";
import { CoreCinematicHero } from "@/components/core-page";

type AppHeroProps = {
  content: typeof appPageContent.hero;
};

export function AppHero({ content }: AppHeroProps) {
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
      panelEyebrow="Guidance without pressure"
      panelText="The app gives each session a beginning, a rhythm, and a gentle reason to return — without turning calm into another performance metric."
      imagePosition="68% center"
      mobileImagePosition="55% center"
    />
  );
}
