"use client";

import Link from "next/link";
import {
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { launchSignupCopy, launchErrorMessage, type LaunchLocale } from "@/content/launch-signup";

type SubmissionState =
  | "idle"
  | "submitting"
  | "success"
  | "error";

type LaunchSignupResponse = {
  ok?: boolean;
  saved?: boolean;
  code?: string;
  message?: string;
  error?: string;
};

export function LaunchSignupForm({ locale = "en" }: { locale?: LaunchLocale } = {}) {
  const copy = launchSignupCopy[locale];
  const busy = useRef(false);
  const completed = useRef(false);
  const websiteId = useId();
  const emailId = useId();
  const consentId = useId();
  const [state, setState] =
    useState<SubmissionState>("idle");
  const [message, setMessage] = useState<string | null>(
    null,
  );

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (busy.current || completed.current) {
      return;
    }

    busy.current = true;
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("submitting");
    setMessage(null);

    try {
      const response = await fetch("/api/launch-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
          locale,
          source: "shop",
        }),
      });

      const json: unknown = await response.json();
      const result = json && typeof json === "object" && !Array.isArray(json)
        ? json as LaunchSignupResponse
        : null;

      if (!response.ok || result?.ok !== true) {
        setState("error");
        setMessage(launchErrorMessage(locale, result?.code));
        return;
      }

      completed.current = true;
      setState("success");
      // Never display raw server/transport messages in the localized interface.
      setMessage(copy.confirmation);
      form.reset();

      // A legacy ok:true or a honeypot response is not a persistence receipt.
      // The existing tracker owns analytics delivery; this contains no form data.
      if (result.saved === true) {
        try {
          form.dispatchEvent(new CustomEvent("neuvago:launch-signup-saved", {
            bubbles: true,
          }));
        } catch {
          // A tracking failure must not turn a stored signup into a UI failure.
        }
      }
    } catch {
      setState("error");
      setMessage(copy.errors.SAVE_FAILED);
    } finally {
      busy.current = false;
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-[1.4rem] border border-black/8 bg-white/70 px-5 py-5"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-medium tracking-[-0.025em] text-[#1f1f1c]">
          {copy.successTitle}
        </p>
        <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
          {message}
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={handleSubmit}
      data-neuvago-launch-form="true"
      aria-busy={state === "submitting"}
    >
      <div className="grid gap-2">
        <label
          htmlFor={emailId}
          className="text-sm font-medium text-[#1f1f1c]"
        >
          {copy.emailLabel}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder={copy.emailPlaceholder}
          className="min-h-14 rounded-[1rem] border border-black/12 bg-white px-4 text-base text-[#1f1f1c] outline-none transition placeholder:text-[#9a938a] focus:border-black/35 focus:ring-2 focus:ring-black/5"
        />
      </div>

      <div
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={websiteId}>
          Website
        </label>
        <input
          id={websiteId}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={consentId}
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-black/20"
        />
        <label
          htmlFor={consentId}
          className="text-sm leading-6 text-[#5f5a52]"
        >
          {copy.consentLabel}
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] disabled:cursor-wait disabled:opacity-65"
      >
        {state === "submitting"
          ? copy.submittingLabel
          : copy.submitLabel}
      </button>

      <p className="text-xs leading-6 text-[#746e66]">
        {copy.privacyBefore}{" "}
        <Link
          href={copy.privacyHref}
          className="font-medium text-[#1f1f1c] underline underline-offset-4"
        >
          {copy.privacyLabel}
        </Link>
        .
      </p>

      {message ? (
        <p
          className="text-sm leading-6 text-[#9a3f2f]"
          role="alert"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
