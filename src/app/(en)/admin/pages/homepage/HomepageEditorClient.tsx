"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { homepageContent as homepageContentFallback } from "@/content/homepage";
import { saveHomepageContent } from "./actions";
import {
  AdminTextInput,
  AdminTextarea,
  AdminToggle,
  AdminSectionCard,
  AdminAssetReference,
} from "@/components/admin";
import { isContentEqual } from "@/lib/admin/is-content-equal";
import {
  getSiteAssetByKey,
  getSiteAssetKeyBySrc,
} from "@/content/assets";

type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? DeepWiden<U>[]
  : T extends object ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
  : T;

type HomepageContent = DeepWiden<typeof homepageContentFallback>;

function splitLines(value: string[]) {
  return value.join("\n");
}

function mergeLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function cloneContent(content: HomepageContent): HomepageContent {
  return JSON.parse(JSON.stringify(content)) as HomepageContent;
}

function formatSavedTime(date: Date) {
  return new Intl.DateTimeFormat("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function HomepageEditorClient({
  initialContent,
}: {
  initialContent: HomepageContent;
}) {
  const [content, setContent] = useState<HomepageContent>(() =>
    cloneContent(initialContent)
  );
  const [heroDesktopAssetKey, setHeroDesktopAssetKey] = useState(() =>
    getSiteAssetKeyBySrc(initialContent.hero.desktopImage.src)
  );
  const [heroMobileAssetKey, setHeroMobileAssetKey] = useState(() =>
    getSiteAssetKeyBySrc(initialContent.hero.mobileImage.src)
  );
  const [finalCtaAssetKey, setFinalCtaAssetKey] = useState(() =>
    getSiteAssetKeyBySrc(initialContent.finalCta.backgroundImage.src)
  );

  const [saveState, setSaveState] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [isPending, startTransition] = useTransition();

  const hasUnsavedChanges = useMemo(() => {
    return !isContentEqual(initialContent, content);
  }, [initialContent, content]);

  const previewStats = useMemo(() => {
    return {
      heroProofCount: content.hero.proofLine.length,
      proofStripCount: content.proofStrip.items.length,
      whyCount: content.whyPeopleComeToNeuvago.cards.length,
      ecosystemFeatureCount: content.appDeviceEcosystem.features.length,
      trustLinkCount: content.trustResearch.links.length,
      learningCount: content.featuredLearning.items.length,
      conditionsCount: content.conditionsOverview.items.length,
    };
  }, [content]);

  function resetChanges() {
    if (!hasUnsavedChanges) return;

    setContent(cloneContent(initialContent));
    setHeroDesktopAssetKey(getSiteAssetKeyBySrc(initialContent.hero.desktopImage.src));
    setHeroMobileAssetKey(getSiteAssetKeyBySrc(initialContent.hero.mobileImage.src));
    setFinalCtaAssetKey(getSiteAssetKeyBySrc(initialContent.finalCta.backgroundImage.src));
    setSaveState({
      type: "idle",
      message: "",
    });
  }

  function handleSave() {
    if (!hasUnsavedChanges) return;

    setSaveState({
      type: "idle",
      message: "",
    });

    startTransition(async () => {
      const result = await saveHomepageContent(content);

      if (result.ok) {
        const savedAt = new Date();
        setLastSavedAt(savedAt);
        setSaveState({
          type: "success",
          message: `Homepage content saved successfully at ${formatSavedTime(savedAt)}.`,
        });
      } else {
        setSaveState({
          type: "error",
          message: result.error,
        });
      }
    });
  }

  function applyHeroDesktopAssetKey(key: string) {
    setHeroDesktopAssetKey(key);

    const asset = getSiteAssetByKey(key);
    if (!asset) return;

    setContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        desktopImage: {
          src: asset.src,
          alt: asset.alt,
        },
      },
    }));
  }

  function applyHeroMobileAssetKey(key: string) {
    setHeroMobileAssetKey(key);

    const asset = getSiteAssetByKey(key);
    if (!asset) return;

    setContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        mobileImage: {
          src: asset.src,
          alt: asset.alt,
        },
      },
    }));
  }

  function applyFinalCtaAssetKey(key: string) {
    setFinalCtaAssetKey(key);

    const asset = getSiteAssetByKey(key);
    if (!asset) return;

    setContent((prev) => ({
      ...prev,
      finalCta: {
        ...prev.finalCta,
        backgroundImage: {
          src: asset.src,
          alt: asset.alt,
        },
      },
    }));
  }

  const statusText = isPending
    ? "Saving..."
    : hasUnsavedChanges
      ? "Unsaved changes"
      : lastSavedAt
        ? `Saved at ${formatSavedTime(lastSavedAt)}`
        : "No changes yet";

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
            Homepage editor
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1c] sm:text-4xl">
            Edit homepage content
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f5a52] sm:text-lg">
            This homepage editor saves content to the database. The public
            homepage reads saved content first, and falls back to the local
            TypeScript file if no saved content exists yet.
          </p>
          <p className="mt-4 text-sm font-medium text-[#7a756c]">{statusText}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={resetChanges}
            disabled={!hasUnsavedChanges || isPending}
            className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reset changes
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={!hasUnsavedChanges || isPending}
            className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Saving..." : "Save homepage"}
          </button>

          <Link
            href="/"
            className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
          >
            View homepage
          </Link>
        </div>
      </div>

      {saveState.type !== "idle" ? (
        <div
          className={`mt-6 rounded-[1.25rem] border px-4 py-3 text-sm ${
            saveState.type === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          {saveState.message}
        </div>
      ) : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">Hero proof items</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.heroProofCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">Why cards</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.whyCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">Trust links</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.trustLinkCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">Condition cards</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.conditionsCount}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <AdminSectionCard
            title="Hero"
            description="Main homepage hero, CTA labels, images, and proof chips."
          >
            <AdminToggle
              label="Show hero section"
              checked={content.hero.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Eyebrow"
              value={content.hero.eyebrow}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, eyebrow: value },
                }))
              }
            />

            <AdminTextarea
              label="Title"
              rows={3}
              value={content.hero.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.hero.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, description: value },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Primary CTA label"
                value={content.hero.primaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      primaryCta: { ...prev.hero.primaryCta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Primary CTA href"
                value={content.hero.primaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      primaryCta: { ...prev.hero.primaryCta, href: value },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Secondary CTA label"
                value={content.hero.secondaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      secondaryCta: { ...prev.hero.secondaryCta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Secondary CTA href"
                value={content.hero.secondaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      secondaryCta: { ...prev.hero.secondaryCta, href: value },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Desktop asset key"
                value={heroDesktopAssetKey}
                onChange={applyHeroDesktopAssetKey}
              />
              <AdminTextInput
                label="Mobile asset key"
                value={heroMobileAssetKey}
                onChange={applyHeroMobileAssetKey}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Desktop image src"
                value={content.hero.desktopImage.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      desktopImage: { ...prev.hero.desktopImage, src: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Desktop image alt"
                value={content.hero.desktopImage.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      desktopImage: { ...prev.hero.desktopImage, alt: value },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Mobile image src"
                value={content.hero.mobileImage.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      mobileImage: { ...prev.hero.mobileImage, src: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Mobile image alt"
                value={content.hero.mobileImage.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    hero: {
                      ...prev.hero,
                      mobileImage: { ...prev.hero.mobileImage, alt: value },
                    },
                  }))
                }
              />
            </div>

            <AdminTextarea
              label="Proof line items (one per line)"
              rows={4}
              value={splitLines(content.hero.proofLine)}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, proofLine: mergeLines(value) },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="Proof strip"
            description="Short trust or validation points below the hero."
          >
            <AdminToggle
              label="Show proof strip"
              checked={content.proofStrip.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  proofStrip: { ...prev.proofStrip, visible: value },
                }))
              }
            />

            <AdminTextarea
              label="Proof strip items (one per line)"
              rows={6}
              value={splitLines(content.proofStrip.items)}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  proofStrip: { ...prev.proofStrip, items: mergeLines(value) },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="What is Neuvago"
            description="Intro section explaining the device and app together."
          >
            <AdminToggle
              label="Show section"
              checked={content.whatIsNeuvago.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whatIsNeuvago: { ...prev.whatIsNeuvago, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.whatIsNeuvago.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whatIsNeuvago: { ...prev.whatIsNeuvago, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.whatIsNeuvago.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whatIsNeuvago: {
                    ...prev.whatIsNeuvago,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Bullets (one per line)"
              rows={5}
              value={splitLines(content.whatIsNeuvago.bullets)}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whatIsNeuvago: {
                    ...prev.whatIsNeuvago,
                    bullets: mergeLines(value),
                  },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Image src"
                value={content.whatIsNeuvago.image.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    whatIsNeuvago: {
                      ...prev.whatIsNeuvago,
                      image: { ...prev.whatIsNeuvago.image, src: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Image alt"
                value={content.whatIsNeuvago.image.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    whatIsNeuvago: {
                      ...prev.whatIsNeuvago,
                      image: { ...prev.whatIsNeuvago.image, alt: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Why people come to Neuvago"
            description="Outcome-driven section near the top of the homepage."
          >
            <AdminToggle
              label="Show section"
              checked={content.whyPeopleComeToNeuvago.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyPeopleComeToNeuvago: {
                    ...prev.whyPeopleComeToNeuvago,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.whyPeopleComeToNeuvago.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyPeopleComeToNeuvago: {
                    ...prev.whyPeopleComeToNeuvago,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.whyPeopleComeToNeuvago.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyPeopleComeToNeuvago: {
                    ...prev.whyPeopleComeToNeuvago,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={8}
              value={content.whyPeopleComeToNeuvago.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyPeopleComeToNeuvago: {
                    ...prev.whyPeopleComeToNeuvago,
                    cards: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [title, ...rest] = line.split("|");
                        return {
                          title: title?.trim() ?? "",
                          description: rest.join("|").trim(),
                        };
                      })
                      .filter((card) => card.title && card.description),
                  },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="App + device ecosystem"
            description="One of the most important system sections on the homepage."
          >
            <AdminToggle
              label="Show section"
              checked={content.appDeviceEcosystem.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appDeviceEcosystem: {
                    ...prev.appDeviceEcosystem,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.appDeviceEcosystem.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appDeviceEcosystem: {
                    ...prev.appDeviceEcosystem,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.appDeviceEcosystem.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appDeviceEcosystem: {
                    ...prev.appDeviceEcosystem,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Feature cards (title | description, one per line)"
              rows={8}
              value={content.appDeviceEcosystem.features
                .map((feature) => `${feature.title} | ${feature.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appDeviceEcosystem: {
                    ...prev.appDeviceEcosystem,
                    features: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [title, ...rest] = line.split("|");
                        return {
                          title: title?.trim() ?? "",
                          description: rest.join("|").trim(),
                        };
                      })
                      .filter((item) => item.title && item.description),
                  },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Main image src"
                value={content.appDeviceEcosystem.image.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    appDeviceEcosystem: {
                      ...prev.appDeviceEcosystem,
                      image: { ...prev.appDeviceEcosystem.image, src: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Main image alt"
                value={content.appDeviceEcosystem.image.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    appDeviceEcosystem: {
                      ...prev.appDeviceEcosystem,
                      image: { ...prev.appDeviceEcosystem.image, alt: value },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="CTA label"
                value={content.appDeviceEcosystem.cta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    appDeviceEcosystem: {
                      ...prev.appDeviceEcosystem,
                      cta: { ...prev.appDeviceEcosystem.cta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="CTA href"
                value={content.appDeviceEcosystem.cta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    appDeviceEcosystem: {
                      ...prev.appDeviceEcosystem,
                      cta: { ...prev.appDeviceEcosystem.cta, href: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Trust / research"
            description="Trust-building bridge into learn and research."
          >
            <AdminToggle
              label="Show section"
              checked={content.trustResearch.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustResearch: { ...prev.trustResearch, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.trustResearch.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustResearch: { ...prev.trustResearch, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.trustResearch.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustResearch: {
                    ...prev.trustResearch,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Links (title | description | href, one per line)"
              rows={8}
              value={content.trustResearch.links
                .map((link) => `${link.title} | ${link.description} | ${link.href}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustResearch: {
                    ...prev.trustResearch,
                    links: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [title, description, href] = line
                          .split("|")
                          .map((part) => part?.trim() ?? "");
                        return { title, description, href };
                      })
                      .filter((link) => link.title && link.description && link.href),
                  },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Primary CTA label"
                value={content.trustResearch.primaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustResearch: {
                      ...prev.trustResearch,
                      primaryCta: {
                        ...prev.trustResearch.primaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Primary CTA href"
                value={content.trustResearch.primaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustResearch: {
                      ...prev.trustResearch,
                      primaryCta: {
                        ...prev.trustResearch.primaryCta,
                        href: value,
                      },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Secondary CTA label"
                value={content.trustResearch.secondaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustResearch: {
                      ...prev.trustResearch,
                      secondaryCta: {
                        ...prev.trustResearch.secondaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Secondary CTA href"
                value={content.trustResearch.secondaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustResearch: {
                      ...prev.trustResearch,
                      secondaryCta: {
                        ...prev.trustResearch.secondaryCta,
                        href: value,
                      },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Featured learning"
            description="Homepage learning cards and CTA."
          >
            <AdminToggle
              label="Show section"
              checked={content.featuredLearning.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  featuredLearning: {
                    ...prev.featuredLearning,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.featuredLearning.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  featuredLearning: {
                    ...prev.featuredLearning,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.featuredLearning.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  featuredLearning: {
                    ...prev.featuredLearning,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Items (title | description | href, one per line)"
              rows={8}
              value={content.featuredLearning.items
                .map((item) => `${item.title} | ${item.description} | ${item.href}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  featuredLearning: {
                    ...prev.featuredLearning,
                    items: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [title, description, href] = line
                          .split("|")
                          .map((part) => part?.trim() ?? "");
                        return { title, description, href };
                      })
                      .filter((item) => item.title && item.description && item.href),
                  },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="CTA label"
                value={content.featuredLearning.cta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    featuredLearning: {
                      ...prev.featuredLearning,
                      cta: { ...prev.featuredLearning.cta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="CTA href"
                value={content.featuredLearning.cta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    featuredLearning: {
                      ...prev.featuredLearning,
                      cta: { ...prev.featuredLearning.cta, href: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Conditions overview"
            description="Homepage conditions cards and CTA."
          >
            <AdminToggle
              label="Show section"
              checked={content.conditionsOverview.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  conditionsOverview: {
                    ...prev.conditionsOverview,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.conditionsOverview.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  conditionsOverview: {
                    ...prev.conditionsOverview,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.conditionsOverview.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  conditionsOverview: {
                    ...prev.conditionsOverview,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Items (title | description | href, one per line)"
              rows={8}
              value={content.conditionsOverview.items
                .map((item) => `${item.title} | ${item.description} | ${item.href}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  conditionsOverview: {
                    ...prev.conditionsOverview,
                    items: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [title, description, href] = line
                          .split("|")
                          .map((part) => part?.trim() ?? "");
                        return { title, description, href };
                      })
                      .filter((item) => item.title && item.description && item.href),
                  },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="CTA label"
                value={content.conditionsOverview.cta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    conditionsOverview: {
                      ...prev.conditionsOverview,
                      cta: { ...prev.conditionsOverview.cta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="CTA href"
                value={content.conditionsOverview.cta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    conditionsOverview: {
                      ...prev.conditionsOverview,
                      cta: { ...prev.conditionsOverview.cta, href: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Final CTA"
            description="Closing section at the end of the homepage."
          >
            <AdminToggle
              label="Show final CTA"
              checked={content.finalCta.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  finalCta: { ...prev.finalCta, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Final CTA asset key"
              value={finalCtaAssetKey}
              onChange={applyFinalCtaAssetKey}
            />

            <AdminTextInput
              label="Title"
              value={content.finalCta.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  finalCta: { ...prev.finalCta, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.finalCta.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  finalCta: { ...prev.finalCta, description: value },
                }))
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Primary CTA label"
                value={content.finalCta.primaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    finalCta: {
                      ...prev.finalCta,
                      primaryCta: { ...prev.finalCta.primaryCta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Primary CTA href"
                value={content.finalCta.primaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    finalCta: {
                      ...prev.finalCta,
                      primaryCta: { ...prev.finalCta.primaryCta, href: value },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Secondary CTA label"
                value={content.finalCta.secondaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    finalCta: {
                      ...prev.finalCta,
                      secondaryCta: {
                        ...prev.finalCta.secondaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Secondary CTA href"
                value={content.finalCta.secondaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    finalCta: {
                      ...prev.finalCta,
                      secondaryCta: {
                        ...prev.finalCta.secondaryCta,
                        href: value,
                      },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Background image src"
                value={content.finalCta.backgroundImage.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    finalCta: {
                      ...prev.finalCta,
                      backgroundImage: {
                        ...prev.finalCta.backgroundImage,
                        src: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Background image alt"
                value={content.finalCta.backgroundImage.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    finalCta: {
                      ...prev.finalCta,
                      backgroundImage: {
                        ...prev.finalCta.backgroundImage,
                        alt: value,
                      },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>
        </div>

        <aside className="space-y-6">
          <AdminSectionCard
            title="Status"
            description="App editor is now extended."
          >
            <div className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <p>Editor state: connected to database save.</p>
              <p>Public app page: reads DB first, then falls back to local TS content.</p>
              <p>This editor now covers much more of the live app page.</p>
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Preview notes"
            description="Useful reminders while editing."
          >
            <ul className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <li>Keep app copy calm, supportive, and guidance-first.</li>
              <li>Use image paths from <code>/images/home/...</code>.</li>
              <li>Use one item per line in textarea fields where noted.</li>
              <li>For cards and links, keep copy concise and scannable.</li>
            </ul>
          </AdminSectionCard>

          <AdminSectionCard
            title="Expanded app coverage"
            description="These additional sections are now editable."
          >
            <div className="space-y-2 text-sm text-[#5f5a52]">
              <p>Sessions, guidance, and rhythm</p>
              <p>Fits into life</p>
              <p>Progress without pressure</p>
              <p>Device together</p>
              <p>FAQ</p>
            </div>
          </AdminSectionCard>

          <AdminAssetReference
            title="App asset reference"
            categories={["hero", "system", "app", "detail", "lifestyle", "background"]}
          />
        </aside>
      </div>
    </div>
  );
}