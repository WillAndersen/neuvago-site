import Link from "next/link";

import { buildLocalizedPageMetadata } from "@/i18n/metadata";

const title = "Neuvago Deutschland | Deutsche Website in Vorbereitung";
const description =
  "Die deutsche Neuvago-Website wird sorgfältig lokalisiert. Inhalte, Sicherheitsinformationen, rechtliche Angaben und Kaufinformationen werden vor der Veröffentlichung vollständig geprüft.";

export const metadata = buildLocalizedPageMetadata({
  pageId: "de-home",
  locale: "de",
  title,
  description,
});

const preparationAreas = [
  {
    title: "Sprache und Terminologie",
    description:
      "Die deutschen Inhalte werden nicht nur übersetzt, sondern sprachlich und fachlich für den deutschen Markt geprüft.",
  },
  {
    title: "Sicherheit und rechtliche Angaben",
    description:
      "Produkt-, Sicherheits-, Datenschutz- und Kaufinformationen werden vor der Freigabe als zusammenhängende deutsche Nutzerreise kontrolliert.",
  },
  {
    title: "SEO und technische Qualität",
    description:
      "Die endgültigen deutschen URLs, Metadaten und internen Verlinkungen werden erst nach der deutschen Suchwortanalyse veröffentlicht.",
  },
] as const;

export default function GermanPreviewPage() {
  return (
    <main
      data-neuvago-locale="de"
      data-neuvago-de-wave="1"
      className="bg-[#f7f4ef] text-[#1f1f1c]"
    >
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#777168]">
              Deutsche Vorschau
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Die deutsche Neuvago-Website wird vorbereitet.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Wir bauen derzeit eine vollständige deutsche Version auf. Sie wird
              erst veröffentlicht, wenn Inhalte, technische SEO, Sicherheit,
              rechtliche Angaben und die kommerzielle Nutzerreise gemeinsam
              geprüft wurden.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-black/7 bg-white/65 p-6">
              <p className="text-sm leading-7 text-[#5f5a52]">
                Diese Vorschauseite ist bewusst nicht für Suchmaschinen
                indexierbar und enthält noch keine deutsche Kaufstrecke.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
              >
                Zur englischen Website
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#777168]">
              In Vorbereitung
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Eine vollständige Lokalisierung statt leerer Übersetzungsseiten
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {preparationAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[2rem] border border-black/5 bg-white/70 p-7"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
