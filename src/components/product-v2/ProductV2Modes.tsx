"use client";

import Link from "next/link";
import {
  type KeyboardEvent,
  useId,
  useRef,
  useState,
} from "react";
import type { productV2Content } from "@/content/product-v2";

type ProductV2ModesProps = {
  content: typeof productV2Content.modes;
};

type ModesContent = ProductV2ModesProps["content"];
type Mode = ModesContent["items"][number];

type ModeDetailsProps = {
  content: ModesContent;
  mode: Mode;
  showTitle?: boolean;
};

function ModeDetails({
  content,
  mode,
  showTitle = true,
}: ModeDetailsProps) {
  return (
    <div>
      {showTitle ? (
        <h3 className="text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">
          {mode.name}
        </h3>
      ) : null}

      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        <div className="border-t border-white/12 pt-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[#cdbda9]">
            {content.detailLabels.intendedUse}
          </p>
          <p className="mt-3 text-sm leading-7 text-[#f0e7de] sm:text-base">
            {mode.intendedUse}
          </p>
        </div>

        <div className="border-t border-white/12 pt-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[#cdbda9]">
            {content.detailLabels.stimulationPattern}
          </p>
          <p className="mt-3 text-sm leading-7 text-[#f0e7de] sm:text-base">
            {mode.stimulationPattern}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.15rem] border border-white/10 bg-black/10 px-4 py-4 sm:px-5">
        <p className="text-sm leading-7 text-[#ddd2c6]">
          {mode.sensation}
        </p>
      </div>
    </div>
  );
}

export function ProductV2Modes({
  content,
}: ProductV2ModesProps) {
  const instanceId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeId, setActiveId] = useState<Mode["id"]>(
    content.items[0]?.id ?? "sleep",
  );

  const activeMode =
    content.items.find((mode) => mode.id === activeId) ??
    content.items[0];

  if (!activeMode) {
    return null;
  }

  const desktopPanelId = `${instanceId}-mode-panel`;
  const tabId = (mode: Mode) =>
    `${instanceId}-mode-tab-${mode.id}`;
  const accordionButtonId = (mode: Mode) =>
    `${instanceId}-mode-accordion-button-${mode.id}`;
  const accordionPanelId = (mode: Mode) =>
    `${instanceId}-mode-accordion-panel-${mode.id}`;

  const selectAndFocus = (index: number) => {
    const nextMode = content.items[index];

    if (!nextMode) {
      return;
    }

    setActiveId(nextMode.id);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const lastIndex = content.items.length - 1;
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectAndFocus(nextIndex);
  };

  return (
    <section className="bg-[#3a312a] text-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#cdbda9]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-medium leading-[0.97] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#d9cfc4] sm:text-base">
              {content.description}
            </p>
          </div>

          <div>
            <div className="hidden lg:block">
              <div
                role="tablist"
                aria-label={content.eyebrow}
                aria-orientation="horizontal"
                className="grid grid-cols-4 gap-px overflow-hidden rounded-[1.45rem] border border-white/12 bg-white/12"
              >
                {content.items.map((mode, index) => {
                  const isActive = mode.id === activeMode.id;

                  return (
                    <button
                      key={mode.id}
                      ref={(element) => {
                        tabRefs.current[index] = element;
                      }}
                      id={tabId(mode)}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={desktopPanelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveId(mode.id)}
                      onKeyDown={(event) =>
                        handleTabKeyDown(event, index)
                      }
                      className={[
                        "px-4 py-5 text-center text-lg font-medium tracking-[-0.035em]",
                        "transition-colors duration-200 motion-reduce:transition-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e4d6c5]",
                        isActive
                          ? "bg-[#f7f4ef] text-[#1f1f1c]"
                          : "bg-[#40362e] text-white hover:bg-white/[0.09]",
                      ].join(" ")}
                    >
                      {mode.name}
                    </button>
                  );
                })}
              </div>

              <div
                key={activeMode.id}
                id={desktopPanelId}
                role="tabpanel"
                aria-labelledby={tabId(activeMode)}
                tabIndex={0}
                className="mt-5 rounded-[1.8rem] border border-white/12 bg-white/[0.055] p-6 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#e4d6c5] motion-reduce:transition-none sm:p-8"
              >
                <ModeDetails
                  content={content}
                  mode={activeMode}
                />
              </div>
            </div>

            <div className="divide-y divide-white/12 border-y border-white/12 lg:hidden">
              {content.items.map((mode) => {
                const isActive = mode.id === activeMode.id;

                return (
                  <div key={mode.id}>
                    <button
                      id={accordionButtonId(mode)}
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={accordionPanelId(mode)}
                      onClick={() => setActiveId(mode.id)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e4d6c5]"
                    >
                      <span className="text-2xl font-medium tracking-[-0.04em] text-white">
                        {mode.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className={[
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-[#e5d9cc]",
                          "transition-transform duration-200 motion-reduce:transition-none",
                          isActive ? "rotate-45" : "",
                        ].join(" ")}
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={accordionPanelId(mode)}
                      role="region"
                      aria-labelledby={accordionButtonId(mode)}
                      hidden={!isActive}
                      className={isActive ? "pb-7" : "hidden"}
                    >
                      {isActive ? (
                        <ModeDetails
                          content={content}
                          mode={mode}
                          showTitle={false}
                        />
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-l-2 border-[#cdbda9]/60 pl-4">
              <p className="text-sm leading-7 text-[#d9cfc4]">
                {content.intensityNote}
              </p>
            </div>

            <div className="mt-7 flex justify-start lg:justify-end">
              <Link
                href={content.cta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#f7f4ef] px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3a312a] motion-reduce:transition-none"
              >
                {content.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
