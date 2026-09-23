import { GA4_MEASUREMENT_ID, CONSENT_STORAGE_KEY, CONSENT_VERSION, CONSENT_LIFETIME_MS, ANALYTICS_SETTINGS_EVENT } from "./config";
import { PUBLIC_ANALYTICS_PATHS } from "./public-paths";

export type ConsentChoice = "unknown" | "granted" | "denied";
export type ProviderState = "off" | "loading" | "ready" | "blocked";
export type ConsentSnapshot = { choice: ConsentChoice; provider: ProviderState; persisted: boolean };
type RecordV1 = { version: number; choice: "granted" | "denied"; decidedAt: number };
type GoogleWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: `ga-disable-${string}`]: boolean | undefined };
const SCRIPT_ID = "neuvago-consented-google-tag";
export const CONVERSION_TARGETS = new Set(["how_it_works_click", "product_click", "buyer_guide_click", "buyer_checklist_download", "launch_access_click", "shop_click", "launch_signup_submit", "launch_signup_success"]);
const DESTINATIONS = new Set(["/how-it-works", "/no/slik-fungerer-det", "/product", "/no/produkt", "/no/product", "/shop", "/no/lansering", "/api/launch-list", "/learn/how-to-choose-a-vagus-nerve-stimulation-device", "/no/kunnskap/hvordan-velge-vagusnervestimulator", "/downloads/neuvago-vns-device-buyer-checklist-en.pdf", "/downloads/neuvago-kjopersjekkliste-vns-enhet-no.pdf"]);
const DENIED = { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };

export function cleanPath(value: string): string | null {
  // Never interpret an arbitrary origin, percent-encoded identity, query or fragment as a telemetry path.
  if (!value.startsWith("/") || value.startsWith("//") || /[%\\\u0000-\u0020]/.test(value)) return null;
  const path = value.split(/[?#]/, 1)[0];
  return path.replace(/\/+$/, "") || "/";
}
export function publicPath(value: string): string | null {
  const path = cleanPath(value);
  return path && PUBLIC_ANALYTICS_PATHS.has(path) ? path : null;
}
export function parseConsent(raw: string | null, now = Date.now()): RecordV1 | null {
  try {
    const v: unknown = raw ? JSON.parse(raw) : null;
    if (!v || typeof v !== "object") return null;
    const r = v as Partial<RecordV1>;
    if (r.version !== CONSENT_VERSION || !["granted", "denied"].includes(r.choice ?? "") || typeof r.decidedAt !== "number" || !Number.isFinite(r.decidedAt) || r.decidedAt > now || now - r.decidedAt >= CONSENT_LIFETIME_MS) return null;
    return r as RecordV1;
  } catch { return null; }
}
export function pageGroup(path: string): string {
  if (path === "/" || path === "/no") return "home";
  if (["/shop", "/no/lansering"].includes(path)) return "shop";
  if (["/product", "/no/produkt", "/no/product"].includes(path)) return "product";
  if (["/how-it-works", "/no/slik-fungerer-det"].includes(path)) return "how_it_works";
  if (path.includes("how-to-choose-a-vagus") || path.includes("hvordan-velge-vagusnervestimulator")) return "buyer_guide";
  if (path.startsWith("/learn") || path.startsWith("/no/kunnskap")) return "learn";
  if (path.startsWith("/research") || path.startsWith("/no/forskning")) return "research";
  return "other";
}
function safeReferrer(raw: string, origin: string): string {
  try {
    const u = new URL(raw);
    if (u.origin === origin) { const p = publicPath(u.pathname); return p ? "https://neuvago.com" + p : ""; }
    // Preserve broad organic source, never a search term or an arbitrary referring URL.
    if (/^(?:www\.)?(?:google\.(?:com|no|se|de|co\.uk)|bing\.com|duckduckgo\.com|search\.yahoo\.com|ecosia\.org)$/.test(u.hostname)) return "https://" + u.hostname + "/";
  } catch { /* no referrer */ }
  return "";
}

/** Browser-only owner of consent, loading and telemetry. No event queue before readiness. */
export class AnalyticsRuntime {
  private snapshot: ConsentSnapshot = { choice: "unknown", provider: "off", persisted: true };
  private listeners = new Set<() => void>();
  private record: RecordV1 | null = null;
  private epoch = 0;
  private lastPath: string | null = null;
  private lastFields: Record<string, string> = {};
  private requested = false;
  private owned = false;
  private stopped = false;
  private timer: number | undefined;
  private script: HTMLScriptElement | null = null;
  private previousReferrer: string;
  constructor(private readonly win: Window, private readonly id = GA4_MEASUREMENT_ID) {
    this.previousReferrer = safeReferrer(win.document.referrer, win.location.origin);
    this.setDisabled(true);
    this.readPreference();
    this.installNavigationBarrier();
    win.addEventListener("storage", (e) => { if (e.key === CONSENT_STORAGE_KEY || e.key === null) this.readPreference(true); });
    win.addEventListener("pageshow", (e) => { if (e.persisted) this.readPreference(true); });
  }
  getSnapshot = (): ConsentSnapshot => this.snapshot;
  subscribe = (fn: () => void): (() => void) => { this.listeners.add(fn); return () => { this.listeners.delete(fn); }; };
  getEpoch(): number { return this.epoch; }
  private announce(change: Partial<ConsentSnapshot>): void {
    this.snapshot = { ...this.snapshot, ...change };
    this.listeners.forEach(fn => fn());
  }
  private setDisabled(value: boolean): void { (this.win as GoogleWindow)[`ga-disable-${this.id}`] = value; }
  private armExpiry(): void {
    this.win.clearTimeout(this.timer);
    if (!this.record) return;
    const remaining = this.record.decidedAt + CONSENT_LIFETIME_MS - Date.now();
    this.timer = this.win.setTimeout(() => {
      if (!this.record) return;
      if (Date.now() - this.record.decidedAt >= CONSENT_LIFETIME_MS) this.expire();
      else this.armExpiry();
    }, Math.min(Math.max(remaining, 1), 2_000_000_000));
  }
  private expire(): void {
    this.record = null; this.epoch++;
    this.announce({ choice: "unknown" });
    this.stopProvider(true);
  }
  private readPreference(external = false): void {
    let next: RecordV1 | null = null;
    try { next = parseConsent(this.win.localStorage.getItem(CONSENT_STORAGE_KEY)); }
    catch { this.announce({ persisted: false }); }
    const changed = this.snapshot.choice !== (next?.choice ?? "unknown");
    this.record = next;
    if (changed) this.epoch++;
    this.announce({ choice: next?.choice ?? "unknown" });
    this.armExpiry();
    if (external && this.snapshot.choice !== "granted") this.stopProvider(true);
    else if (external) this.routeChanged();
  }
  choose(choice: "granted" | "denied"): void {
    if (choice !== "granted" && choice !== "denied") return;
    const next: RecordV1 = { version: CONSENT_VERSION, choice, decidedAt: Date.now() };
    this.epoch++; this.record = next;
    let persisted = true;
    try { this.win.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next)); }
    catch { persisted = false; }
    this.announce({ choice, persisted }); this.armExpiry();
    if (choice === "denied") this.stopProvider(true);
    else this.routeChanged();
  }
  private currentPath(): string | null { return publicPath(this.win.location.pathname); }
  private allowed(): boolean {
    if (this.record && Date.now() - this.record.decidedAt >= CONSENT_LIFETIME_MS) this.expire();
    return !this.stopped && this.snapshot.choice === "granted" && this.currentPath() !== null && /^G-[A-Z0-9]{6,20}$/.test(this.id);
  }
  routeChanged(): void {
    if (!this.currentPath()) { if (this.requested) this.stopProvider(true); return; }
    if (!this.allowed()) return;
    if (!this.requested) this.load();
    else if (this.snapshot.provider === "ready") this.pageView();
  }
  private load(): void {
    const w = this.win as GoogleWindow;
    // Do not replace an externally configured tag / CMP. Needs explicit reconciliation.
    if (w.gtag || (w.dataLayer && w.dataLayer.length) || this.win.document.querySelector('script[src*="googletagmanager.com"],script[src*="google-analytics.com"]')) {
      this.announce({ provider: "blocked" }); return;
    }
    const path = this.currentPath(); if (!path || !this.allowed()) return;
    this.requested = true; this.owned = true; this.setDisabled(false);
    w.dataLayer = [];
    w.gtag = function (..._args: unknown[]) { w.dataLayer!.push(arguments); };
    this.command("consent", "default", { ...DENIED });
    this.command("consent", "update", { ...DENIED, analytics_storage: "granted" });
    this.command("js", new Date());
    this.command("config", this.id, {
      ...this.pageParameters(path), send_page_view: false,
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_prefix: "nvga", cookie_domain: "none", cookie_path: "/",
      cookie_expires: CONSENT_LIFETIME_MS / 1000, cookie_update: false,
      campaign_id: "", campaign_source: "", campaign_medium: "", campaign_name: "", campaign_term: "", campaign_content: "",
    });
    this.announce({ provider: "loading" });
    const script = this.win.document.createElement("script"); this.script = script;
    script.id = SCRIPT_ID; script.async = true; script.referrerPolicy = "no-referrer";
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + this.id;
    script.onload = () => {
      if (!this.allowed()) { this.stopProvider(true); return; }
      this.announce({ provider: "ready" }); this.pageView();
    };
    script.onerror = () => { this.stopProvider(false); this.announce({ provider: "blocked" }); };
    this.win.document.head.appendChild(script);
  }
  private command(...args: unknown[]): void {
    if (!this.owned || this.stopped) return;
    (this.win as GoogleWindow).gtag?.(...args);
  }
  private pageParameters(path: string): Record<string, string> {
    return {
      page_location: "https://neuvago.com" + path,
      page_title: "Neuvago | " + pageGroup(path),
      page_referrer: this.previousReferrer,
      source_locale: path === "/no" || path.startsWith("/no/") ? "nb-NO" : "en-US",
      source_page_group: pageGroup(path),
    };
  }
  private pageView(): void {
    const path = this.currentPath();
    if (!path || !this.allowed() || this.snapshot.provider !== "ready" || this.lastPath === path) return;
    const fields = this.pageParameters(path);
    this.command("set", fields);
    this.command("event", "page_view", { ...fields, send_to: this.id });
    this.lastFields = fields; this.lastPath = path; this.previousReferrer = "https://neuvago.com" + path;
  }
  emit(target: string, context: { sourcePath: string; destinationPath: string; sourceSection: string }): boolean {
    const path = publicPath(context.sourcePath);
    const destination = cleanPath(context.destinationPath);
    if (!this.allowed() || this.snapshot.provider !== "ready" || !path || path !== this.currentPath() || !destination || !DESTINATIONS.has(destination) || !CONVERSION_TARGETS.has(target)) return false;
    const fields = {
      ...this.lastFields, conversion_target: target,
      source_path: path, destination_path: destination,
      source_section: ["header", "footer", "launch-signup-form"].includes(context.sourceSection) ? context.sourceSection : "main",
    };
    try {
      this.command("event", "neuvago_" + target, { ...fields, send_to: this.id });
      this.win.dispatchEvent(new CustomEvent("neuvago:conversion", { detail: { eventName: "neuvago_" + target, ...fields } }));
      return true;
    } catch { return false; }
  }
  private clearOwnedCookies(): void {
    // Host-only cookies, our namespace only. Never clear authentication or other products' cookies.
    try {
      for (const item of this.win.document.cookie.split(";")) {
        const name = item.trim().split("=", 1)[0];
        if (/^nvga_ga(?:_[A-Z0-9]+)?$/.test(name)) this.win.document.cookie = name + "=;Max-Age=0;Path=/;SameSite=Lax";
      }
    } catch { /* functional UI stays available */ }
  }
  private stopProvider(reload: boolean): void {
    this.setDisabled(true); this.epoch++; this.clearOwnedCookies();
    if (this.owned) {
      const w = this.win as GoogleWindow;
      w.gtag = () => {}; if (w.dataLayer) w.dataLayer.length = 0;
    }
    this.script?.remove(); this.announce({ provider: "off" });
    if (this.requested) {
      this.stopped = true;
      // Removing the script alone does not unload the SDK. A document reload does.
      // Already transmitted requests/data cannot be recalled by this code.
      if (reload) this.win.location.reload();
    }
  }
  private installNavigationBarrier(): void {
    // Make private-route transitions hard navigations once the SDK has been loaded.
    // Enhanced measurement/history listeners must also be OFF in the GA4 stream settings.
    const win = this.win;
    for (const key of ["pushState", "replaceState"] as const) {
      const original = win.history[key].bind(win.history);
      win.history[key] = (data: unknown, unused: string, url?: string | URL | null) => {
        let restricted = false;
        if (url != null) {
          try { const next = new URL(String(url), win.location.href); restricted = next.origin === win.location.origin && !publicPath(next.pathname); } catch { /* native API validates */ }
        }
        if (restricted && this.requested) this.setDisabled(true);
        original(data, unused, url);
        if (restricted && this.requested) this.stopProvider(true);
      };
    }
    win.addEventListener("popstate", () => { if (!this.currentPath() && this.requested) this.stopProvider(true); }, true);
    win.document.addEventListener("click", (event: MouseEvent) => {
      if (!this.requested || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const a = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      try {
        const next = new URL(a.href, win.location.href);
        if (next.origin !== win.location.origin || publicPath(next.pathname)) return;
        event.preventDefault(); event.stopImmediatePropagation(); this.stopProvider(false);
        win.location.assign(next.href);
      } catch { /* normal navigation */ }
    }, true);
  }
}
let runtime: AnalyticsRuntime | undefined;
export function getAnalyticsRuntime(): AnalyticsRuntime | undefined {
  if (typeof window === "undefined") return undefined;
  return runtime ??= new AnalyticsRuntime(window);
}
export function openAnalyticsPreferences(): void {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(ANALYTICS_SETTINGS_EVENT));
}
