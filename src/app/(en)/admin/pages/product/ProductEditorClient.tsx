"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { productPageContent as productPageContentFallback } from "@/content/product";
import { saveProductContent } from "./actions";
import {
  AdminTextInput,
  AdminTextarea,
  AdminToggle,
  AdminSectionCard,
  AdminAssetReference,
} from "@/components/admin";
import { isContentEqual } from "@/lib/admin/is-content-equal";

type DeepWiden<T> =
  T extends string ? string
    : T extends number ? number
      : T extends boolean ? boolean
        : T extends readonly (infer U)[] ? DeepWiden<U>[]
          : T extends object ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
            : T;

type ProductContent = DeepWiden<typeof productPageContentFallback>;

function splitLines(value: string[]) {
  return value.join("\n");
}

function cloneContent(content: ProductContent): ProductContent {
  return JSON.parse(JSON.stringify(content)) as ProductContent;
}

function formatSavedTime(date: Date) {
  return new Intl.DateTimeFormat("no-NO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function ProductEditorClient({
  initialContent,
}: {
  initialContent: ProductContent;
}) {
  const [content, setContent] = useState<ProductContent>(() =>
    cloneContent(initialContent)
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
      differentiatorCount: content.whyItFeelsDifferent.cards.length,
      ecosystemFeatureCount: content.deviceAppTogether.features.length,
      useStepCount: content.howToUse.steps.length,
      trustLinkCount: content.trustBridge.links.length,
      faqCount: content.faq.items.length,
    };
  }, [content]);

  function resetChanges() {
    if (!hasUnsavedChanges) return;

    setContent(cloneContent(initialContent));
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
      const result = await saveProductContent(content);

      if (result.ok) {
        const savedAt = new Date();
        setLastSavedAt(savedAt);
        setSaveState({
          type: "success",
          message: `Product page content saved successfully at ${formatSavedTime(savedAt)}.`,
        });
      } else {
        setSaveState({
          type: "error",
          message: result.error,
        });
      }
    });
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
            Product editor
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1c] sm:text-4xl">
            Edit product page content
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f5a52] sm:text-lg">
            This editor saves product page content to the database. The public
            product page reads saved content first, and falls back to the local
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
            {isPending ? "Saving..." : "Save product page"}
          </button>

          <Link
            href="/product"
            className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
          >
            View product page
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
          <p className="text-sm text-[#7a756c]">Differentiator cards</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.differentiatorCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">How-to-use steps</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.useStepCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">FAQ items</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.faqCount}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <AdminSectionCard
            title="Hero"
            description="Main product page hero, CTA labels, images, and proof chips."
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
                  hero: {
                    ...prev.hero,
                    proofLine: value
                      .split("\n")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="What Neuvago is"
            description="Explain the product simply and clearly."
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
                    bullets: value
                      .split("\n")
                      .map((item) => item.trim())
                      .filter(Boolean),
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
            title="Why it feels different"
            description="Differentiation section for product positioning."
          >
            <AdminToggle
              label="Show section"
              checked={content.whyItFeelsDifferent.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItFeelsDifferent: {
                    ...prev.whyItFeelsDifferent,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Eyebrow"
              value={content.whyItFeelsDifferent.eyebrow}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItFeelsDifferent: {
                    ...prev.whyItFeelsDifferent,
                    eyebrow: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.whyItFeelsDifferent.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItFeelsDifferent: {
                    ...prev.whyItFeelsDifferent,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.whyItFeelsDifferent.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItFeelsDifferent: {
                    ...prev.whyItFeelsDifferent,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Card titles and descriptions (title | description, one per line)"
              rows={8}
              value={content.whyItFeelsDifferent.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItFeelsDifferent: {
                    ...prev.whyItFeelsDifferent,
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

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="Detail image src"
                value={content.whyItFeelsDifferent.detailImage.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    whyItFeelsDifferent: {
                      ...prev.whyItFeelsDifferent,
                      detailImage: {
                        ...prev.whyItFeelsDifferent.detailImage,
                        src: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Detail image alt"
                value={content.whyItFeelsDifferent.detailImage.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    whyItFeelsDifferent: {
                      ...prev.whyItFeelsDifferent,
                      detailImage: {
                        ...prev.whyItFeelsDifferent.detailImage,
                        alt: value,
                      },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Device + app together"
            description="System section explaining how the product and app work together."
          >
            <AdminToggle
              label="Show section"
              checked={content.deviceAppTogether.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  deviceAppTogether: {
                    ...prev.deviceAppTogether,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.deviceAppTogether.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  deviceAppTogether: {
                    ...prev.deviceAppTogether,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.deviceAppTogether.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  deviceAppTogether: {
                    ...prev.deviceAppTogether,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Features (title | description, one per line)"
              rows={8}
              value={content.deviceAppTogether.features
                .map((item) => `${item.title} | ${item.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  deviceAppTogether: {
                    ...prev.deviceAppTogether,
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
                value={content.deviceAppTogether.image.src}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    deviceAppTogether: {
                      ...prev.deviceAppTogether,
                      image: { ...prev.deviceAppTogether.image, src: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Main image alt"
                value={content.deviceAppTogether.image.alt}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    deviceAppTogether: {
                      ...prev.deviceAppTogether,
                      image: { ...prev.deviceAppTogether.image, alt: value },
                    },
                  }))
                }
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <AdminTextInput
                label="CTA label"
                value={content.deviceAppTogether.cta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    deviceAppTogether: {
                      ...prev.deviceAppTogether,
                      cta: { ...prev.deviceAppTogether.cta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="CTA href"
                value={content.deviceAppTogether.cta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    deviceAppTogether: {
                      ...prev.deviceAppTogether,
                      cta: { ...prev.deviceAppTogether.cta, href: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="How it fits into life"
            description="Use-case section for real-life contexts."
          >
            <AdminToggle
              label="Show section"
              checked={content.howItFitsIntoLife.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howItFitsIntoLife: {
                    ...prev.howItFitsIntoLife,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.howItFitsIntoLife.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howItFitsIntoLife: {
                    ...prev.howItFitsIntoLife,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.howItFitsIntoLife.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howItFitsIntoLife: {
                    ...prev.howItFitsIntoLife,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={6}
              value={content.howItFitsIntoLife.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howItFitsIntoLife: {
                    ...prev.howItFitsIntoLife,
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
            title="How to use"
            description="Step-by-step practical use section."
          >
            <AdminToggle
              label="Show section"
              checked={content.howToUse.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howToUse: { ...prev.howToUse, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.howToUse.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howToUse: { ...prev.howToUse, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.howToUse.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howToUse: { ...prev.howToUse, description: value },
                }))
              }
            />

            <AdminTextarea
              label="Steps (title | description, one per line)"
              rows={6}
              value={content.howToUse.steps
                .map((step) => `${step.title} | ${step.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  howToUse: {
                    ...prev.howToUse,
                    steps: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line, index) => {
                        const [title, ...rest] = line.split("|");
                        const previousImage = prev.howToUse.steps[index]?.image;
                        return {
                          title: title?.trim() ?? "",
                          description: rest.join("|").trim(),
                          image: previousImage,
                        };
                      })
                      .filter((step) => step.title && step.description),
                  },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="Trust bridge"
            description="Research and learn bridge section."
          >
            <AdminToggle
              label="Show section"
              checked={content.trustBridge.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustBridge: { ...prev.trustBridge, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.trustBridge.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustBridge: { ...prev.trustBridge, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.trustBridge.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustBridge: {
                    ...prev.trustBridge,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Links (title | description | href, one per line)"
              rows={8}
              value={content.trustBridge.links
                .map((link) => `${link.title} | ${link.description} | ${link.href}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  trustBridge: {
                    ...prev.trustBridge,
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
                value={content.trustBridge.primaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustBridge: {
                      ...prev.trustBridge,
                      primaryCta: {
                        ...prev.trustBridge.primaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Primary CTA href"
                value={content.trustBridge.primaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustBridge: {
                      ...prev.trustBridge,
                      primaryCta: {
                        ...prev.trustBridge.primaryCta,
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
                value={content.trustBridge.secondaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustBridge: {
                      ...prev.trustBridge,
                      secondaryCta: {
                        ...prev.trustBridge.secondaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Secondary CTA href"
                value={content.trustBridge.secondaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    trustBridge: {
                      ...prev.trustBridge,
                      secondaryCta: {
                        ...prev.trustBridge.secondaryCta,
                        href: value,
                      },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="FAQ"
            description="Practical clarity questions and answers."
          >
            <AdminToggle
              label="Show FAQ section"
              checked={content.faq.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  faq: { ...prev.faq, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.faq.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  faq: { ...prev.faq, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.faq.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  faq: { ...prev.faq, description: value },
                }))
              }
            />

            <AdminTextarea
              label="FAQ items (question | answer, one per line)"
              rows={10}
              value={content.faq.items
                .map((item) => `${item.question} | ${item.answer}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  faq: {
                    ...prev.faq,
                    items: value
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line) => {
                        const [question, ...rest] = line.split("|");
                        return {
                          question: question?.trim() ?? "",
                          answer: rest.join("|").trim(),
                        };
                      })
                      .filter((item) => item.question && item.answer),
                  },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="Final CTA"
            description="Closing section at the end of the product page."
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
            description="Product editor is now extended."
          >
            <div className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <p>Editor state: connected to database save.</p>
              <p>Public product page: reads DB first, then falls back to local TS content.</p>
              <p>This editor now covers much more of the live product page.</p>
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Preview notes"
            description="Useful reminders while editing."
          >
            <ul className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <li>Keep hero copy tight and product-first.</li>
              <li>Use image paths from <code>/images/home/...</code>.</li>
              <li>Use one item per line in textarea fields where noted.</li>
              <li>For cards and links, keep copy concise and scannable.</li>
            </ul>
          </AdminSectionCard>

          <AdminSectionCard
            title="Expanded product coverage"
            description="These additional sections are now editable."
          >
            <div className="space-y-2 text-sm text-[#5f5a52]">
              <p>Device + app together</p>
              <p>How it fits into life</p>
              <p>How to use</p>
              <p>Trust bridge</p>
              <p>FAQ</p>
            </div>
          </AdminSectionCard>

          <AdminAssetReference
            title="Product asset reference"
            categories={["hero", "system", "product", "app", "detail", "lifestyle", "background"]}
          />
        </aside>
      </div>
    </div>
  );
}
