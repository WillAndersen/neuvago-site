"use client";

import {
  type KeyboardEvent,
  useId,
  useRef,
  useState,
} from "react";
import type {
  HowItWorksV2Content,
  HowItWorksV2Mode,
} from "@/content/how-it-works-v2";

export type HowItWorksV2ModesProps = {
  content: HowItWorksV2Content["modes"];
};

type Orientation = "horizontal" | "vertical";
type Variant = "desktop" | "mobile";

function ReservedModePanel({ mode }: { mode: HowItWorksV2Mode }) {
  return (
    <div>
      <h3 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
        {mode.name}
      </h3>
      {mode.description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#ddd2c6]">
          {mode.description}
        </p>
      ) : (
        <div
          aria-hidden="true"
          className="mt-7 min-h-20 border-t border-white/12"
        />
      )}
    </div>
  );
}

export function HowItWorksV2Modes({
  content,
}: HowItWorksV2ModesProps) {
  const instanceId = useId();
  const desktopRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mobileRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeId, setActiveId] = useState<HowItWorksV2Mode["id"]>(
    "sleep",
  );

  const activeMode =
    content.items.find((mode) => mode.id === activeId) ??
    content.items[0];

  if (!activeMode) {
    return null;
  }

  const panelId = (variant: Variant) =>
    `${instanceId}-${variant}-mode-panel`;
  const tabId = (variant: Variant, mode: HowItWorksV2Mode) =>
    `${instanceId}-${variant}-mode-tab-${mode.id}`;

  const selectAndFocus = (
    index: number,
    variant: Variant,
  ) => {
    const nextMode = content.items[index];

    if (!nextMode) {
      return;
    }

    setActiveId(nextMode.id);

    const refs =
      variant === "desktop" ? desktopRefs : mobileRefs;
    refs.current[index]?.focus();
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
    variant: Variant,
    orientation: Orientation,
  ) => {
    const lastIndex = content.items.length - 1;
    let nextIndex: number | null = null;

    if (
      orientation === "horizontal" &&
      event.key === "ArrowRight"
    ) {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (
      orientation === "horizontal" &&
      event.key === "ArrowLeft"
    ) {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (
      orientation === "vertical" &&
      event.key === "ArrowDown"
    ) {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (
      orientation === "vertical" &&
      event.key === "ArrowUp"
    ) {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    selectAndFocus(nextIndex, variant);
  };

  return (
    <section
      data-how-it-works-section="modes"
      className="bg-[#3a312a] text-[#f7f4ef]"
    >
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <h2 className="max-w-[13ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
              {content.title}
            </h2>

            {content.description ? (
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d9cfc4] sm:text-lg">
                {content.description}
              </p>
            ) : null}
          </div>

          <div>
            <div className="hidden lg:block">
              <div
                role="tablist"
                aria-orientation="horizontal"
                aria-label={content.title}
                className="grid grid-cols-4 gap-px overflow-hidden rounded-[1.45rem] border border-white/12 bg-white/12"
              >
                {content.items.map((mode, index) => {
                  const isActive = mode.id === activeMode.id;

                  return (
                    <button
                      key={mode.id}
                      ref={(element: HTMLButtonElement | null) => {
                        desktopRefs.current[index] = element;
                      }}
                      id={tabId("desktop", mode)}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId("desktop")}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveId(mode.id)}
                      onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) =>
                        handleTabKeyDown(
                          event,
                          index,
                          "desktop",
                          "horizontal",
                        )
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
                id={panelId("desktop")}
                role="tabpanel"
                aria-labelledby={tabId("desktop", activeMode)}
                tabIndex={0}
                className="mt-5 min-h-52 rounded-[1.8rem] border border-white/12 bg-white/[0.055] p-7 outline-none focus-visible:ring-2 focus-visible:ring-[#e4d6c5] sm:p-9"
              >
                <ReservedModePanel mode={activeMode} />
              </div>
            </div>

            <div className="lg:hidden">
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label={content.title}
                className="grid gap-px overflow-hidden rounded-[1.45rem] border border-white/12 bg-white/12"
              >
                {content.items.map((mode, index) => {
                  const isActive = mode.id === activeMode.id;

                  return (
                    <button
                      key={mode.id}
                      ref={(element: HTMLButtonElement | null) => {
                        mobileRefs.current[index] = element;
                      }}
                      id={tabId("mobile", mode)}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId("mobile")}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveId(mode.id)}
                      onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) =>
                        handleTabKeyDown(
                          event,
                          index,
                          "mobile",
                          "vertical",
                        )
                      }
                      className={[
                        "flex items-center justify-between px-5 py-5 text-left text-xl font-medium tracking-[-0.04em]",
                        "transition-colors duration-200 motion-reduce:transition-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e4d6c5]",
                        isActive
                          ? "bg-[#f7f4ef] text-[#1f1f1c]"
                          : "bg-[#40362e] text-white hover:bg-white/[0.09]",
                      ].join(" ")}
                    >
                      <span>{mode.name}</span>
                      <span aria-hidden="true">{isActive ? "—" : "+"}</span>
                    </button>
                  );
                })}
              </div>

              <div
                id={panelId("mobile")}
                role="tabpanel"
                aria-labelledby={tabId("mobile", activeMode)}
                tabIndex={0}
                className="mt-4 min-h-44 rounded-[1.6rem] border border-white/12 bg-white/[0.055] p-6 outline-none focus-visible:ring-2 focus-visible:ring-[#e4d6c5]"
              >
                <ReservedModePanel mode={activeMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
