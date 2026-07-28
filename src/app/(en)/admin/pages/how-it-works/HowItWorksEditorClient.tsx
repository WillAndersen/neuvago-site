"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { howItWorksPageContent as howItWorksPageContentFallback } from "@/content/how-it-works";
import { saveHowItWorksContent } from "./actions";
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

type HowItWorksContent = DeepWiden<typeof howItWorksPageContentFallback>;

function splitLines(value: string[]) {
  return value.join("\n");
}

function cloneContent(content: HowItWorksContent): HowItWorksContent {
  return JSON.parse(JSON.stringify(content)) as HowItWorksContent;
}

function formatSavedTime(date: Date) {
  return new Intl.DateTimeFormat("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function HowItWorksEditorClient({
  initialContent,
}: {
  initialContent: HowItWorksContent;
}) {
  const [content, setContent] = useState<HowItWorksContent>(() =>
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
      systemCardCount: content.systemAtAGlance.cards.length,
      stepCount: content.steps.items.length,
      appAddsCount: content.appAdds.features.length,
      dailyLifeCount: content.dailyLife.cards.length,
      repetitionCount: content.repetition.cards.length,
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
      const result = await saveHowItWorksContent(content);

      if (result.ok) {
        const savedAt = new Date();
        setLastSavedAt(savedAt);
        setSaveState({
          type: "success",
          message: `How-it-works page content saved successfully at ${formatSavedTime(savedAt)}.`,
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
            How it works editor
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1c] sm:text-4xl">
            Edit how-it-works page content
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f5a52] sm:text-lg">
            This editor saves how-it-works page content to the database. The public
            page reads saved content first, and falls back to the local TypeScript
            file if no saved content exists yet.
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
            {isPending ? "Saving..." : "Save how-it-works page"}
          </button>

          <Link
            href="/how-it-works"
            className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
          >
            View page
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
          <p className="text-sm text-[#7a756c]">System cards</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.systemCardCount}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
          <p className="text-sm text-[#7a756c]">App-adds features</p>
          <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">
            {previewStats.appAddsCount}
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
            description="Main how-it-works hero, CTA labels, images, and proof chips."
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
            title="System at a glance"
            description="Short overview of device, app, and connected system."
          >
            <AdminToggle
              label="Show section"
              checked={content.systemAtAGlance.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  systemAtAGlance: {
                    ...prev.systemAtAGlance,
                    visible: value,
                  },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.systemAtAGlance.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  systemAtAGlance: {
                    ...prev.systemAtAGlance,
                    title: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.systemAtAGlance.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  systemAtAGlance: {
                    ...prev.systemAtAGlance,
                    description: value,
                  },
                }))
              }
            />

            <AdminTextarea
              label="System cards (title | description, one per line)"
              rows={6}
              value={content.systemAtAGlance.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  systemAtAGlance: {
                    ...prev.systemAtAGlance,
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
            title="Step by step"
            description="Core usage explanation for the system."
          >
            <AdminToggle
              label="Show step section"
              checked={content.steps.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  steps: { ...prev.steps, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.steps.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  steps: { ...prev.steps, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.steps.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  steps: { ...prev.steps, description: value },
                }))
              }
            />
          </AdminSectionCard>

          <AdminSectionCard
            title="What the app adds"
            description="Guidance, app structure, and continuity section."
          >
            <AdminToggle
              label="Show section"
              checked={content.appAdds.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appAdds: { ...prev.appAdds, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.appAdds.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appAdds: { ...prev.appAdds, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.appAdds.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appAdds: { ...prev.appAdds, description: value },
                }))
              }
            />

            <AdminTextarea
              label="Features (title | description, one per line)"
              rows={8}
              value={content.appAdds.features
                .map((item) => `${item.title} | ${item.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  appAdds: {
                    ...prev.appAdds,
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
                value={content.appAdds.cta.label}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    appAdds: {
                      ...prev.appAdds,
                      cta: { ...prev.appAdds.cta, label: value },
                    },
                  }))
                }
              />
              <AdminTextInput
                label="CTA href"
                value={content.appAdds.cta.href}
                onChange={(value) =>
                  setContent((prev) => ({
                    ...prev,
                    appAdds: {
                      ...prev.appAdds,
                      cta: { ...prev.appAdds.cta, href: value },
                    },
                  }))
                }
              />
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Daily life"
            description="Real-life routine section."
          >
            <AdminToggle
              label="Show section"
              checked={content.dailyLife.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  dailyLife: { ...prev.dailyLife, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.dailyLife.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  dailyLife: { ...prev.dailyLife, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.dailyLife.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  dailyLife: { ...prev.dailyLife, description: value },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={6}
              value={content.dailyLife.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  dailyLife: {
                    ...prev.dailyLife,
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
            title="Built for repetition, not pressure"
            description="Low-pressure repetition and steadiness section."
          >
            <AdminToggle
              label="Show section"
              checked={content.repetition.visible}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  repetition: { ...prev.repetition, visible: value },
                }))
              }
            />

            <AdminTextInput
              label="Title"
              value={content.repetition.title}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  repetition: { ...prev.repetition, title: value },
                }))
              }
            />

            <AdminTextarea
              label="Description"
              rows={4}
              value={content.repetition.description}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  repetition: { ...prev.repetition, description: value },
                }))
              }
            />

            <AdminTextarea
              label="Cards (title | description, one per line)"
              rows={6}
              value={content.repetition.cards
                .map((card) => `${card.title} | ${card.description}`)
                .join("\n")}
              onChange={(value) =>
                setContent((prev) => ({
                  ...prev,
                  repetition: {
                    ...prev.repetition,
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
            description="Closing section at the end of the how-it-works page."
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
          </AdminSectionCard>
        </div>

        <aside className="space-y-6">
          <AdminSectionCard
            title="Status"
            description="How-it-works editor is now extended."
          >
            <div className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <p>Editor state: connected to database save.</p>
              <p>Public page: reads DB first, then falls back to local TS content.</p>
              <p>This editor now covers much more of the live page.</p>
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Preview notes"
            description="Useful reminders while editing."
          >
            <ul className="space-y-3 text-sm leading-6 text-[#5f5a52]">
              <li>Keep this page clarity-first and easy to scan.</li>
              <li>Use image paths from <code>/images/home/...</code>.</li>
              <li>Use one item per line in textarea fields where noted.</li>
              <li>For cards and links, keep copy concise and practical.</li>
            </ul>
          </AdminSectionCard>

          <AdminSectionCard
            title="Expanded how-it-works coverage"
            description="These additional sections are now editable."
          >
            <div className="space-y-2 text-sm text-[#5f5a52]">
              <p>What the app adds</p>
              <p>Daily life</p>
              <p>Built for repetition, not pressure</p>
              <p>FAQ</p>
            </div>
          </AdminSectionCard>
        </aside>
      </div>
    </div>
  );
}