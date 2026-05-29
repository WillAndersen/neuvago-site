"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { aboutPageContent as aboutPageContentFallback } from "@/content/about";
import { saveAboutContent } from "./actions";
import {
  AdminTextInput,
  AdminTextarea,
  AdminToggle,
  AdminSectionCard,
} from "@/components/admin";
import { isContentEqual } from "@/lib/admin/is-content-equal";

type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? DeepWiden<U>[]
  : T extends object ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
  : T;

type AboutContent = DeepWiden<typeof aboutPageContentFallback>;

function splitLines(value: string[]) {
  return value.join("\n");
}

function cloneContent(content: AboutContent): AboutContent {
  return JSON.parse(JSON.stringify(content)) as AboutContent;
}

function formatSavedTime(date: Date) {
  return new Intl.DateTimeFormat("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function AboutEditorClient({
  initialContent,
}: {
  initialContent: AboutContent;
}) {
  const [content, setContent] = useState<AboutContent>(() =>
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
      whyCount: content.whyItExists.cards.length,
      approachCount: content.approach.cards.length,
      connectedCount: content.connectedSystem.features.length,
      calmDesignCount: content.calmDesign.cards.length,
      knowledgeLinkCount: content.knowledgeUniverse.links.length,
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
      const result = await saveAboutContent(content);

      if (result.ok) {
        const savedAt = new Date();
        setLastSavedAt(savedAt);
        setSaveState({
          type: "success",
          message: `About page content saved successfully at ${formatSavedTime(savedAt)}.`,
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
            About editor
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1c] sm:text-4xl">
            Edit about page content
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f5a52] sm:text-lg">
            This editor saves about page content to the database. The public about
            page reads saved content first, and falls back to the local
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
            {isPending ? "Saving..." : "Save about page"}
          </button>

          <Link
            href="/about"
            className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
          >
            View about page
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
          <p className="text-sm text-[#7a756c]">Approach cards</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.approachCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">Knowledge links</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.knowledgeLinkCount}
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
            description="Main about page hero, CTA labels, images, and proof chips."
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
            title="Why Neuvago exists"
            description="Brand reason and positioning section."
          >
            <AdminToggle
              label="Show section"
              checked={content.whyItExists.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItExists: { ...prev.whyItExists, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.whyItExists.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItExists: { ...prev.whyItExists, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.whyItExists.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItExists: {
                    ...prev.whyItExists,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={6}
              value={content.whyItExists.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  whyItExists: {
                    ...prev.whyItExists,
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
            title="Approach"
            description="Brand philosophy and core principles."
          >
            <AdminToggle
              label="Show section"
              checked={content.approach.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  approach: { ...prev.approach, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Eyebrow"
              value={content.approach.eyebrow}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  approach: { ...prev.approach, eyebrow: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.approach.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  approach: { ...prev.approach, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.approach.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  approach: { ...prev.approach, description: value },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={8}
              value={content.approach.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  approach: {
                    ...prev.approach,
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
            title="Connected system"
            description="Device + app system section."
          >
            <AdminToggle
              label="Show section"
              checked={content.connectedSystem.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  connectedSystem: {
                    ...prev.connectedSystem,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.connectedSystem.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  connectedSystem: {
                    ...prev.connectedSystem,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.connectedSystem.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  connectedSystem: {
                    ...prev.connectedSystem,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Features (title | description, one per line)"
              rows={8}
              value={content.connectedSystem.features
                .map((item) => `${item.title} | ${item.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  connectedSystem: {
                    ...prev.connectedSystem,
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
                label="CTA label"
                value={content.connectedSystem.cta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    connectedSystem: {
                      ...prev.connectedSystem,
                      cta: { ...prev.connectedSystem.cta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="CTA href"
                value={content.connectedSystem.cta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    connectedSystem: {
                      ...prev.connectedSystem,
                      cta: { ...prev.connectedSystem.cta, href: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Calm design"
            description="Design philosophy and supporting cards."
          >
            <AdminToggle
              label="Show section"
              checked={content.calmDesign.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  calmDesign: {
                    ...prev.calmDesign,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.calmDesign.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  calmDesign: {
                    ...prev.calmDesign,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.calmDesign.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  calmDesign: {
                    ...prev.calmDesign,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={8}
              value={content.calmDesign.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  calmDesign: {
                    ...prev.calmDesign,
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
            title="Built for everyday life"
            description="Real-life use context section."
          >
            <AdminToggle
              label="Show section"
              checked={content.builtForEverydayLife.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  builtForEverydayLife: {
                    ...prev.builtForEverydayLife,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.builtForEverydayLife.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  builtForEverydayLife: {
                    ...prev.builtForEverydayLife,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.builtForEverydayLife.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  builtForEverydayLife: {
                    ...prev.builtForEverydayLife,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={6}
              value={content.builtForEverydayLife.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  builtForEverydayLife: {
                    ...prev.builtForEverydayLife,
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
            title="Knowledge universe"
            description="Research and learn bridge section."
          >
            <AdminToggle
              label="Show section"
              checked={content.knowledgeUniverse.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  knowledgeUniverse: {
                    ...prev.knowledgeUniverse,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.knowledgeUniverse.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  knowledgeUniverse: {
                    ...prev.knowledgeUniverse,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.knowledgeUniverse.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  knowledgeUniverse: {
                    ...prev.knowledgeUniverse,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Links (title | description | href, one per line)"
              rows={8}
              value={content.knowledgeUniverse.links
                .map((link) => `${link.title} | ${link.description} | ${link.href}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  knowledgeUniverse: {
                    ...prev.knowledgeUniverse,
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
                value={content.knowledgeUniverse.primaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    knowledgeUniverse: {
                      ...prev.knowledgeUniverse,
                      primaryCta: {
                        ...prev.knowledgeUniverse.primaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Primary CTA href"
                value={content.knowledgeUniverse.primaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    knowledgeUniverse: {
                      ...prev.knowledgeUniverse,
                      primaryCta: {
                        ...prev.knowledgeUniverse.primaryCta,
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
                value={content.knowledgeUniverse.secondaryCta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    knowledgeUniverse: {
                      ...prev.knowledgeUniverse,
                      secondaryCta: {
                        ...prev.knowledgeUniverse.secondaryCta,
                        label: value,
                      },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="Secondary CTA href"
                value={content.knowledgeUniverse.secondaryCta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    knowledgeUniverse: {
                      ...prev.knowledgeUniverse,
                      secondaryCta: {
                        ...prev.knowledgeUniverse.secondaryCta,
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
            description="Closing section at the end of the about page."
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
            description="About editor is now extended."
          >
            <div className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <p>Editor state: connected to database save.</p>
              <p>Public about page: reads DB first, then falls back to local TS content.</p>
              <p>This editor now covers much more of the live page.</p>
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Preview notes"
            description="Useful reminders while editing."
          >
            <ul className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <li>Keep this page brand-first and trust-building.</li>
              <li>Use image paths from <code>/images/home/...</code>.</li>
              <li>Use one item per line in textarea fields where noted.</li>
              <li>For cards and links, keep copy concise and readable.</li>
            </ul>
          </AdminSectionCard>

          <AdminSectionCard
            title="Expanded about coverage"
            description="These additional sections are now editable."
          >
            <div className="space-y-2 text-sm text-[#5f5a52]">
              <p>Connected system</p>
              <p>Calm design</p>
              <p>Built for everyday life</p>
              <p>Knowledge universe</p>
              <p>FAQ</p>
            </div>
          </AdminSectionCard>
        </aside>
      </div>
    </div>
  );
}