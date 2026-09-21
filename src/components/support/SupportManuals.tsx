"use client";

import { useState } from "react";

type Locale = "en" | "no";
type DocumentKind = "quickStart" | "manual";

const copy = {
  en: {
    eyebrow: "DOCUMENTS",
    title: "Manuals & guides",
    description: "Keep the essentials close. Read a guide here or save a copy for later.",
    language: "Documents in English",
    open: "Open PDF",
    download: "Download PDF",
    newTab: "opens in a new tab",
    fallback: "Trouble viewing the document? Open the PDF in a new tab using the button above.",
    quickStart: {
      title: "Quick Start Guide",
      description: "A short guide to setup, earpiece placement and the controls.",
    },
    manual: {
      title: "User Manual",
      description: "Instructions for use, care, cleaning, storage and device specifications.",
    },
  },
  no: {
    eyebrow: "DOKUMENTER",
    title: "Brukerveiledninger",
    description: "Finn veiledningen du trenger. Les den her, eller lagre en kopi til senere.",
    language: "Dokumentene er på engelsk",
    open: "Åpne PDF",
    download: "Last ned PDF",
    newTab: "åpnes i en ny fane",
    fallback: "Problemer med visningen? Åpne PDF-en i en ny fane med knappen over.",
    quickStart: {
      title: "Hurtigstart",
      description: "En kort guide til oppsett, plassering av øredelen og knappene.",
    },
    manual: {
      title: "Brukermanual",
      description: "Veiledning om bruk, vedlikehold, rengjøring, oppbevaring og spesifikasjoner.",
    },
  },
} as const;

const documents: { kind: DocumentKind; href: string; fileName: string }[] = [
  {
    kind: "quickStart",
    href: "/documents/neuvago/neuvago-quick-start-guide-en.pdf",
    fileName: "Neuvago-Quick-Start-Guide-EN.pdf",
  },
  {
    kind: "manual",
    href: "/documents/neuvago/neuvago-user-manual-en.pdf",
    fileName: "Neuvago-User-Manual-EN.pdf",
  },
];

function ManualItem({
  document,
  locale,
}: {
  document: (typeof documents)[number];
  locale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const text = copy[locale];
  const item = text[document.kind];

  return (
    <details
      className="group overflow-hidden rounded-3xl border border-black/10 bg-white/80"
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-6 outline-none transition-colors hover:bg-black/[0.02] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#23594c] sm:gap-5 sm:px-7 [&::-webkit-details-marker]:hidden">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf1ed] text-[#23594c]" aria-hidden="true">
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
            <path d="M14 3v6h6M8 13h8M8 17h5" />
          </svg>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-medium tracking-tight sm:text-xl">{item.title}</span>
          <span className="mt-1 block text-sm leading-6 text-black/60">{item.description}</span>
        </span>
        <span className="hidden text-xs font-medium tracking-wider text-black/45 sm:block">PDF · EN</span>
        <svg className="h-5 w-5 shrink-0 text-[#23594c] transition-transform group-open:rotate-180 motion-reduce:transition-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="border-t border-black/10 px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={document.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${text.open}: ${item.title} (${text.newTab})`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#23594c] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1b483d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23594c]"
          >
            {text.open}
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={document.href}
            download={document.fileName}
            aria-label={`${text.download}: ${item.title}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23594c]"
          >
            {text.download}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="mb-4 text-sm leading-6 text-black/60">{text.fallback}</p>
        {/* Do not request the PDF while its accordion is closed. The links also work without JavaScript. */}
        {isOpen ? (
          <iframe
            src={`${document.href}#view=FitH`}
            title={`${item.title} — PDF (English)`}
            loading="lazy"
            className="h-[65vh] min-h-80 w-full rounded-xl border border-black/10 bg-[#eeece7] md:h-[75vh]"
          />
        ) : null}
      </div>
    </details>
  );
}

export default function SupportManuals({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale];

  return (
    <section id="manuals-and-guides" aria-labelledby="support-manuals-heading" className="px-5 py-14 text-[#1f1f1c] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[#23594c]">{text.eyebrow}</p>
          <h2 id="support-manuals-heading" className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{text.title}</h2>
          <p className="mt-4 text-base leading-7 text-black/65">{text.description}</p>
          <p className="mt-2 text-sm text-black/50">{text.language}</p>
        </div>
        <div className="space-y-4">
          {documents.map((document) => <ManualItem key={document.kind} document={document} locale={locale} />)}
        </div>
      </div>
    </section>
  );
}
