"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ANALYTICS_SETTINGS_EVENT } from "@/lib/analytics/config";
import { getAnalyticsRuntime, publicPath, type ConsentSnapshot } from "@/lib/analytics/consent-runtime";
const COPY = {
 no: {
  title: "Valgfri nettstedsanalyse", yes: "Tillat analyse", no: "Avslå analyse", close: "Behold valget",
  body: "Med ditt samtykke bruker vi Google Analytics til å forstå besøk på offentlige sider og om lanseringsskjemaet fungerer. Google mottar da nettleser- og bruksdata og bruker informasjonskapsler. Vi sender ikke e-postadressen eller andre skjemaverdier til Analytics.",
  separate: "Du kan bruke nettstedet og melde deg på lanseringslisten uten å tillate analyse. Valget huskes i opptil 180 dager og kan endres under Personvernvalg nederst på siden.",
  reload: "Når du slår av tidligere tillatt analyse, lastes siden på nytt for å stoppe den innlastede Google-taggen. Uinnsendt skjematekst kan da gå tapt.",
  privacy: "Les om personvern", path: "/no/juridisk/personvern", on: "Nåværende valg: Analyse tillatt.", off: "Nåværende valg: Analyse avslått.",
 },
 en: {
  title: "Optional website analytics", yes: "Allow analytics", no: "Reject analytics", close: "Keep current choice",
  body: "With your consent, we use Google Analytics to understand visits to public pages and whether the launch form works. Google then receives browser and usage data and uses cookies. We do not send your email address or other form values to Analytics.",
  separate: "You can use the website and join the launch list without allowing analytics. Your choice is remembered for up to 180 days and can be changed under Privacy choices at the bottom of the page.",
  reload: "When you turn off previously allowed analytics, the page reloads to stop the loaded Google tag. Unsubmitted form text may be lost.",
  privacy: "Read about privacy", path: "/legal/privacy-policy", on: "Current choice: Analytics allowed.", off: "Current choice: Analytics rejected.",
 }
};
export function AnalyticsConsent() {
 const pathname = usePathname() ?? "/";
 const [snapshot, setSnapshot] = useState<ConsentSnapshot>({ choice: "unknown", provider: "off", persisted: true });
 const [hydrated, setHydrated] = useState(false);
 const [opened, setOpened] = useState(false);
 const focusHeading = useRef<HTMLHeadingElement>(null);
 const restoreFocus = useRef<HTMLElement | null>(null);
 const c = pathname === "/no" || pathname.startsWith("/no/") ? COPY.no : COPY.en;
 useEffect(() => {
  const runtime = getAnalyticsRuntime(); if (!runtime) return;
  const update = () => setSnapshot(runtime.getSnapshot()); const unsubscribe = runtime.subscribe(update);
  update(); setHydrated(true); runtime.routeChanged();
  const open = () => { restoreFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null; setOpened(true); };
  window.addEventListener(ANALYTICS_SETTINGS_EVENT, open);
  return () => { unsubscribe(); window.removeEventListener(ANALYTICS_SETTINGS_EVENT, open); };
 }, []);
 useEffect(() => { getAnalyticsRuntime()?.routeChanged(); }, [pathname]);
 useEffect(() => { if (opened) focusHeading.current?.focus(); }, [opened]);
 function close() { setOpened(false); restoreFocus.current?.focus(); }
 function choose(choice: "granted" | "denied") { getAnalyticsRuntime()?.choose(choice); close(); }
 if (!hydrated || (!opened && (snapshot.choice !== "unknown" || !publicPath(pathname)))) return null;
 const button = "min-h-11 flex-1 rounded-full border border-[#1f1f1c] bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#eee7dd] focus-visible:outline-2 focus-visible:outline-offset-4";
 return <section role="region" aria-labelledby="neuvago-analytics-title" data-analytics-consent className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-h-[85dvh] max-w-3xl overflow-y-auto rounded-2xl border border-black/15 bg-[#f7f4ef] p-5 text-[#1f1f1c] shadow-xl sm:p-6">
  <h2 ref={focusHeading} tabIndex={-1} id="neuvago-analytics-title" className="text-xl font-medium outline-offset-4">{c.title}</h2>
  <p className="mt-3 text-sm leading-6">{c.body}</p><p className="mt-2 text-sm leading-6">{c.separate}</p>
  {snapshot.choice !== "unknown" && <p className="mt-3 text-sm font-medium">{snapshot.choice === "granted" ? c.on : c.off}</p>}
  {snapshot.choice === "granted" && <p className="mt-2 text-sm leading-6">{c.reload}</p>}
  <div className="mt-4 flex flex-col gap-3 sm:flex-row"><button type="button" className={button} data-analytics-reject onClick={() => choose("denied")}>{c.no}</button><button type="button" className={button} data-analytics-accept onClick={() => choose("granted")}>{c.yes}</button></div>
  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm"><a href={c.path + "#website-analytics"} className="underline underline-offset-4">{c.privacy}</a>{opened && snapshot.choice !== "unknown" && <button type="button" onClick={close} className="underline underline-offset-4">{c.close}</button>}</div>
 </section>;
}
