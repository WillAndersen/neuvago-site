"use client";

import Link from "next/link";
import {
  useId,
  useState,
  type FormEvent,
} from "react";
import { commerceContent } from "@/content/commerce";

type SubmissionState =
  | "idle"
  | "submitting"
  | "success"
  | "error";

type LaunchSignupResponse = {
  ok?: boolean;
  message?: string;
  error?: string;
};

export function LaunchSignupForm() {
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

    if (state === "submitting") {
      return;
    }

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
          locale: "en",
          source: "shop",
        }),
      });

      const json =
        (await response.json()) as LaunchSignupResponse;

      if (!response.ok || !json.ok) {
        throw new Error(
          json.error ||
            "We couldn't save your details right now.",
        );
      }

      setState("success");
      setMessage(
        json.message ||
          commerceContent.launch.confirmation,
      );
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't save your details right now.",
      );
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
          You&apos;re on the list.
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
    >
      <div className="grid gap-2">
        <label
          htmlFor={emailId}
          className="text-sm font-medium text-[#1f1f1c]"
        >
          Email address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@example.com"
          className="min-h-14 rounded-[1rem] border border-black/12 bg-white px-4 text-base text-[#1f1f1c] outline-none transition placeholder:text-[#9a938a] focus:border-black/35 focus:ring-2 focus:ring-black/5"
        />
      </div>

      <div
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="launch-website">
          Website
        </label>
        <input
          id="launch-website"
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
          {commerceContent.launch.consentLabel}
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] disabled:cursor-wait disabled:opacity-65"
      >
        {state === "submitting"
          ? "Joining…"
          : "Join the launch list"}
      </button>

      <p className="text-xs leading-6 text-[#746e66]">
        We use your email for Neuvago launch and
        availability updates. Read our{" "}
        <Link
          href="/legal/privacy-policy"
          className="font-medium text-[#1f1f1c] underline underline-offset-4"
        >
          Privacy Policy
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
