#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const checks = [];

function addCheck(name, passed, detail) {
  checks.push({ name, passed: Boolean(passed), detail });
}

async function text(relativePath) {
  return readFile(resolve(repositoryRoot, relativePath), "utf8");
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else {
      files.push(path);
    }
  }

  return files;
}

const baseline = JSON.parse(
  await text("docs/international/de/de-launch-baseline-v1.json"),
);
addCheck(
  "Wave 0 concept count",
  baseline?.scope?.uniquePageConcepts === 45,
  `expected 45, found ${baseline?.scope?.uniquePageConcepts ?? "missing"}`,
);
addCheck(
  "Wave 0 priority split",
  baseline?.scope?.P0 === 20 && baseline?.scope?.P1 === 25,
  `expected P0=20/P1=25, found P0=${baseline?.scope?.P0 ?? "missing"}/P1=${baseline?.scope?.P1 ?? "missing"}`,
);

const generatorResult = spawnSync(
  process.execPath,
  [resolve(scriptDirectory, "generate-de-page-registry.mjs"), "--check"],
  { cwd: repositoryRoot, encoding: "utf8" },
);
addCheck(
  "Generated page registry",
  generatorResult.status === 0,
  (generatorResult.stdout || generatorResult.stderr || "no output").trim(),
);

const localeRegistry = await text("src/i18n/locale-registry.ts");
const germanLocaleBlock = localeRegistry.match(
  /de:\s*\{[\s\S]*?\n\s*\},\n\};/,
)?.[0];
addCheck(
  "German locale definition",
  Boolean(
    germanLocaleBlock &&
      germanLocaleBlock.includes('languageTag: "de-DE"') &&
      germanLocaleBlock.includes('htmlLang: "de"') &&
      germanLocaleBlock.includes('openGraphLocale: "de_DE"') &&
      germanLocaleBlock.includes('market: "DE"') &&
      germanLocaleBlock.includes('pathPrefix: "/de"') &&
      germanLocaleBlock.includes('status: "draft"') &&
      germanLocaleBlock.includes("indexable: false") &&
      germanLocaleBlock.includes("sitemap: false") &&
      germanLocaleBlock.includes("languageSwitcher: false"),
  ),
  "de-DE must remain a non-indexable draft locale during Wave 1",
);
addCheck(
  "Norwegian locale normalization",
  localeRegistry.includes('languageTag: "nb-NO"') &&
    localeRegistry.includes('openGraphLocale: "nb_NO"') &&
    localeRegistry.includes('htmlLang: "nb"'),
  "Norwegian SEO language must be nb-NO / nb_NO and HTML language nb",
);

const routes = await text("src/i18n/routes.ts");
addCheck(
  "Stable German route scope",
  routes.includes('home: { en: "/", no: "/no", de: "/de" }') &&
    !/["']\/de\//.test(routes),
  "Wave 1 may expose only the stable /de root; candidate child slugs stay out of the route table",
);

const germanAppRoot = resolve(repositoryRoot, "src/app/(de)");
const germanPageFiles = (await walk(germanAppRoot))
  .filter((path) => path.endsWith("/page.tsx"))
  .map((path) => relative(repositoryRoot, path).replaceAll("\\", "/"));
addCheck(
  "German physical route shell",
  germanPageFiles.length === 1 &&
    germanPageFiles[0] === "src/app/(de)/de/page.tsx",
  `expected one German page route, found: ${germanPageFiles.join(", ") || "none"}`,
);

const germanLayout = await text("src/app/(de)/layout.tsx");
const germanPage = await text("src/app/(de)/de/page.tsx");
addCheck(
  "German HTML language",
  germanLayout.includes('getLocaleDefinition("de").htmlLang'),
  "German root layout must render html lang from the central locale registry",
);
addCheck(
  "German page registry metadata",
  germanPage.includes("buildLocalizedPageMetadata") &&
    germanPage.includes('pageId: "de-home"') &&
    germanPage.includes('locale: "de"'),
  "German shell metadata must be built from the central page registry",
);
addCheck(
  "German route marker",
  germanPage.includes('data-neuvago-de-wave="1"') &&
    germanPage.includes('data-neuvago-locale="de"'),
  "German shell must expose deterministic smoke-test markers",
);

const proxy = await text("src/proxy.ts");
addCheck(
  "Path-based locale headers",
  proxy.includes("getLocaleFromPathname") &&
    proxy.includes('requestHeaders.set("x-neuvago-language-tag"') &&
    proxy.includes('requestHeaders.set("x-neuvago-market"') &&
    proxy.includes('response.headers.set("Content-Language"'),
  "Proxy must derive locale, language and market from the URL path",
);
addCheck(
  "Draft locale robots guard",
  proxy.includes("!definition.indexable") &&
    proxy.includes('"noindex, nofollow, noarchive"'),
  "All /de paths must receive an X-Robots-Tag guard until locale publication",
);
for (const prefix of [
  "/admin",
  "/account",
  "/login",
  "/signup",
  "/verify-email",
  "/onboarding",
  "/open-app",
  "/continue",
]) {
  addCheck(
    `Private robots guard ${prefix}`,
    proxy.includes(`"${prefix}"`),
    `${prefix} must remain covered by the private path guard`,
  );
}

const sitemap = await text("src/app/sitemap.ts");
addCheck(
  "German route excluded from sitemap",
  !/https:\/\/neuvago\.com\/de(?:[/'"`]|$)/.test(sitemap) &&
    !/path\s*:\s*["']\/de(?:[/'"]|$)/.test(sitemap),
  "The Wave 1 /de draft shell must not be added to sitemap generation",
);

const robots = await text("src/app/robots.ts");
addCheck(
  "German route crawlable for noindex",
  !/disallow\s*:\s*[^\n]*\/de/i.test(robots),
  "/de must not be blocked in robots.txt because crawlers need to read noindex",
);

const sourceRoot = resolve(repositoryRoot, "src");
const sourceFiles = (await walk(sourceRoot)).filter((path) =>
  /\.(?:ts|tsx)$/.test(path),
);
let oldNorwegianLanguageKeys = 0;
let oldNorwegianOpenGraphLocales = 0;

for (const path of sourceFiles) {
  const source = await readFile(path, "utf8");
  oldNorwegianLanguageKeys += (source.match(/"no-NO"\s*:/g) ?? []).length;
  oldNorwegianOpenGraphLocales += (source.match(/"no_NO"/g) ?? []).length;
}
addCheck(
  "SEO language key normalization",
  oldNorwegianLanguageKeys === 0,
  `found ${oldNorwegianLanguageKeys} legacy \"no-NO\": language keys`,
);
addCheck(
  "Open Graph locale normalization",
  oldNorwegianOpenGraphLocales === 0,
  `found ${oldNorwegianOpenGraphLocales} legacy no_NO locale values`,
);

for (const path of [
  "src/app/(no)/no/app/page.tsx",
  "src/app/(no)/no/om-oss/page.tsx",
  "src/app/(no)/no/support/page.tsx",
  "src/content/no/legal.ts",
]) {
  const source = await text(path);
  addCheck(
    `x-default ${path}`,
    source.includes('"x-default"'),
    "paired Norwegian metadata must retain an English x-default",
  );
}

const howToUseLayout = await text("src/app/(en)/how-to-use/layout.tsx");
addCheck(
  "How-to-use central metadata",
  howToUseLayout.includes("buildLocalizedPageMetadata") &&
    howToUseLayout.includes('pageId: "de-how-to-use"'),
  "/how-to-use must use the registry-backed metadata generator",
);

const header = await text("src/components/layout/site-header.tsx");
const footer = await text("src/components/layout/site-footer.tsx");
const siteChrome = await text("src/i18n/site-chrome.ts");
addCheck(
  "Central header dictionary",
  header.includes("getSiteChromeConfig") &&
    siteChrome.includes('badge: "DE Vorschau"'),
  "Header behavior for EN/NO/DE must come from the central chrome dictionary",
);
addCheck(
  "Central footer dictionary",
  footer.includes("getSiteChromeConfig") &&
    siteChrome.includes("Suchmaschinenindexierung"),
  "Footer behavior for EN/NO/DE must come from the central chrome dictionary",
);

const packageJson = JSON.parse(await text("package.json"));
addCheck(
  "Package registry scripts",
  packageJson.scripts?.["de:registry"] ===
      "node scripts/generate-de-page-registry.mjs" &&
    packageJson.scripts?.["de:registry:check"] ===
      "node scripts/generate-de-page-registry.mjs --check" &&
    packageJson.scripts?.["audit:de-wave1"] ===
      "node scripts/audit-de-wave1-locale-architecture.mjs",
  "package.json must expose generator and Wave 1 audit commands",
);

const failures = checks.filter((check) => !check.passed);
const report = {
  schemaVersion: 1,
  wave: "DE Wave 1",
  scope: "locale architecture and German route shell",
  checkedAt: new Date().toISOString(),
  summary: {
    checks: checks.length,
    passed: checks.length - failures.length,
    failed: failures.length,
    germanPhysicalRoutes: germanPageFiles.length,
    wave0Concepts: baseline.scope.uniquePageConcepts,
    P0: baseline.scope.P0,
    P1: baseline.scope.P1,
  },
  checks,
  intentionalDeferrals: [
    "The 44 German child-path candidates remain non-routable until DE Wave 2 freezes German keyword targets and slugs.",
    "German glossary, knowledge, research, legal and commercial content registries remain unpopulated until their content waves.",
    "The /de shell remains excluded from sitemap and language switching until launch approval.",
  ],
};

for (const check of checks) {
  console.log(`${check.passed ? "OK" : "FAIL"}: ${check.name} — ${check.detail}`);
}

console.log("");
console.log(
  `DE Wave 1 audit: ${report.summary.passed}/${report.summary.checks} checks passed; German routes=${report.summary.germanPhysicalRoutes}; Wave 0 concepts=${report.summary.wave0Concepts} (P0=${report.summary.P0}, P1=${report.summary.P1}).`,
);

const jsonArgumentIndex = process.argv.indexOf("--json");
if (jsonArgumentIndex !== -1) {
  const target = process.argv[jsonArgumentIndex + 1];

  if (!target) {
    console.error("--json requires a target path");
    process.exit(1);
  }

  const targetPath = resolve(repositoryRoot, target);
  await mkdir(dirname(targetPath), { recursive: true });
  await writeFile(targetPath, `${JSON.stringify(report, null, 2)}\n`);
}

if (failures.length > 0) {
  process.exit(1);
}
