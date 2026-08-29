import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const clusterRoutes = [
  "/learn/vagus-nerve",
  "/learn/vagus-nerve-stimulation",
  "/learn/non-invasive-vagus-nerve-stimulation",
  "/learn/transcutaneous-vagus-nerve-stimulation",
  "/learn/auricular-vagus-nerve-stimulation",
  "/learn/what-does-vagus-nerve-stimulation-feel-like",
  "/learn/nervous-system-regulation",
  "/research/topics/vagus-nerve-stimulation",
  "/research/topics/transcutaneous-vagus-nerve-stimulation",
  "/research/topics/safety-and-tolerability",
  "/research/topics/autonomic-regulation",
  "/research/topics/heart-rate-variability",
  "/conditions/stress",
  "/conditions/sleep",
  "/how-it-works",
  "/product",
];

const requiredBuildRoutes = [
  "/learn/vagus-nerve-stimulation",
  "/learn/non-invasive-vagus-nerve-stimulation",
  "/learn/transcutaneous-vagus-nerve-stimulation",
  "/learn/auricular-vagus-nerve-stimulation",
  "/learn/what-does-vagus-nerve-stimulation-feel-like",
  "/research/topics/vagus-nerve-stimulation",
  "/research/topics/transcutaneous-vagus-nerve-stimulation",
  "/research/topics/safety-and-tolerability",
  "/research/topics/autonomic-regulation",
];

const wave2c1aSensationRequirements = {
  route: "/learn/what-does-vagus-nerve-stimulation-feel-like",
  sourceMarkers: [
    "What does vagus nerve stimulation feel like?",
    "productV2Content.modes.items.map",
    "Sensation alone does not prove selective vagus-nerve target",
    "Neuvago Editorial Team",
    "Neuvago Source Review",
    "datePublished",
    "dateModified",
    "/how-it-works",
    "/product",
    "/learn/how-to-choose-a-vagus-nerve-stimulation-device",
    "/research/topics/safety-and-tolerability",
    "/learn/auricular-vagus-nerve-stimulation",
    "/glossary/stimulation-intensity",
    "/glossary/electrode",
    "/glossary/target-engagement",
    "33854421",
    "30663712",
    "36543841",
    "30217648",
  ],
};

// Architecture-aware conditions contracts.
// The current /conditions route is intentionally a thin composition layer;
// customer pathways live in the shared Conditions V2 content model.
const conditionHubArchitectureRequirements = {
  routeFile: "src/app/(en)/conditions/page.tsx",
  routeMarkers: [
    'import { conditionsV2Content } from "@/content/conditions-v2"',
    "ConditionsV2Featured",
    "ConditionsV2ResearchBridge",
    "ConditionsV2FinalCta",
  ],
  contentFile: "src/content/conditions-v2.ts",
  contentMarkers: [
    'href: "/conditions/stress"',
    'href: "/conditions/sleep"',
    'href: "/research"',
    'href: "/product"',
    "commerceContent.shopHref",
    "researchBridge:",
    "finalCta:",
  ],
};

const conditionLeafBridgeRequirements = {
  "/conditions/stress": [
    "Condition-to-routine pathway",
    "/research/topics/autonomic-regulation",
    "/research/topics/safety-and-tolerability",
    "/how-it-works",
    "/app",
    "/product",
    "/legal/intended-use",
  ],
  "/conditions/sleep": [
    "Evening-to-routine pathway",
    "/research/topics/autonomic-regulation",
    "/research/topics/heart-rate-variability",
    "/how-it-works",
    "/app",
    "/product",
    "/legal/intended-use",
  ],
};

const errors = [];
const warnings = [];

const sitemapPath = path.join(repoRoot, "src/app/sitemap.ts");
const sitemapSource = readIfExists(sitemapPath);

if (!sitemapSource) {
  errors.push("src/app/sitemap.ts is missing.");
}

for (const route of clusterRoutes) {
  const pagePath = pageFileForRoute(route);
  const source = readIfExists(pagePath);

  if (!source) {
    errors.push(`${route} is missing ${relative(pagePath)}.`);
    continue;
  }

  if (!sitemapSource.includes(`path: "${route}"`)) {
    errors.push(`${route} is missing from sitemap.ts.`);
  }

  if (!hasCanonical(source, route)) {
    errors.push(`${route} is missing canonical metadata.`);
  }

  if (source.includes("index: false") || source.includes("noindex")) {
    errors.push(`${route} appears to contain noindex language.`);
  }

  if (!source.includes("title") || !source.includes("description")) {
    warnings.push(`${route} may be missing title/description metadata.`);
  }

  if (isAuthorityRoute(route)) {
    if (!source.includes("buildAuthorityPageStructuredData")) {
      errors.push(`${route} is missing authority structured data helper usage.`);
    }

    if (!source.includes("dateModified")) {
      warnings.push(`${route} authority schema does not include dateModified.`);
    }

    if (!source.includes("JsonLd")) {
      errors.push(`${route} does not render JsonLd.`);
    }
  }
}

const wave2c1aSource = readIfExists(
  pageFileForRoute(wave2c1aSensationRequirements.route),
);

if (!wave2c1aSource) {
  errors.push(`${wave2c1aSensationRequirements.route} is missing.`);
} else {
  for (const marker of wave2c1aSensationRequirements.sourceMarkers) {
    if (!wave2c1aSource.includes(marker)) {
      errors.push(
        `${wave2c1aSensationRequirements.route} is missing Wave 2C.1A marker: ${marker}.`,
      );
    }
  }

  for (const forbidden of [
    "sensation proves",
    "stronger is better",
    "treats insomnia",
    "cures",
    "diagnoses",
  ]) {
    if (wave2c1aSource.toLowerCase().includes(forbidden)) {
      errors.push(
        `${wave2c1aSensationRequirements.route} contains forbidden Wave 2C.1A wording: ${forbidden}.`,
      );
    }
  }
}

for (const route of requiredBuildRoutes) {
  if (!existsSync(pageFileForRoute(route))) {
    errors.push(`${route} will not appear in the Next.js route list because its page.tsx is missing.`);
  }
}

for (const [relativePath, markers, label] of [
  [
    conditionHubArchitectureRequirements.routeFile,
    conditionHubArchitectureRequirements.routeMarkers,
    "/conditions route composition",
  ],
  [
    conditionHubArchitectureRequirements.contentFile,
    conditionHubArchitectureRequirements.contentMarkers,
    "/conditions shared content pathways",
  ],
]) {
  const source = readIfExists(path.join(repoRoot, relativePath));
  if (!source) {
    errors.push(`${relativePath} is missing and cannot be checked for ${label}.`);
    continue;
  }

  for (const marker of markers) {
    if (!source.includes(marker)) {
      errors.push(`${relativePath} is missing ${label} marker: ${marker}.`);
    }
  }
}

for (const [route, markers] of Object.entries(conditionLeafBridgeRequirements)) {
  const source = readIfExists(pageFileForRoute(route));

  if (!source) {
    errors.push(`${route} is missing and cannot be checked for condition bridge markers.`);
    continue;
  }

  for (const marker of markers) {
    if (!source.includes(marker)) {
      errors.push(`${route} is missing condition bridge marker: ${marker}.`);
    }
  }
}

const llmsPath = path.join(repoRoot, "public/llms.txt");
const llmsSource = readIfExists(llmsPath);
if (!llmsSource) {
  errors.push("public/llms.txt is missing.");
} else {
  for (const marker of ["# Neuvago", "Canonical site: https://neuvago.com", "Do not claim that Neuvago treats"]) {
    if (!llmsSource.includes(marker)) {
      errors.push(`public/llms.txt is missing marker: ${marker}.`);
    }
  }
}

const activeVisualRouteBindings = {
  "src/app/(en)/page.tsx": [
    '@/content/homepage-v3',
    "homepage03Content",
    "HomeHero",
    "HomeFinalCta",
  ],
  "src/app/(en)/product/page.tsx": [
    '@/content/product-v2',
    "productV2Content",
    "ProductV2Hero",
    "ProductV2FinalCta",
  ],
};

const visualImageMarkers = {
  "src/content/homepage-v3.ts": [
    "/images/neuvago/product-hero-desktop.webp",
    "/images/neuvago/launch/product-hero-mobile.webp",
    "/images/neuvago/product-hero-mobile.webp",
    "desktopImage: homepageHeroDesktop",
    "mobileImage: homepageHeroMobile",
    "backgroundImage: finalCtaDesktop",
    "mobileImage: finalCtaMobile",
  ],
  "src/content/product-v2.ts": [
    "/images/neuvago/launch/product-hero-desktop.webp",
    "/images/neuvago/launch/product-hero-mobile.webp",
    "/images/neuvago/product-hero-desktop.webp",
    "/images/neuvago/product-hero-mobile.webp",
    "finalCta:",
  ],
  "src/content/app.ts": [
    "/images/neuvago/app-hero-desktop.webp",
    "/images/neuvago/app-hero-mobile.webp",
    "/images/neuvago/final-cta-desktop.webp",
  ],
  "src/content/how-it-works.ts": [
    "/images/neuvago/how-it-works-routine-desktop.webp",
    "/images/neuvago/how-it-works-routine-mobile.webp",
    "/images/neuvago/final-cta-desktop.webp",
  ],
  "src/content/support.ts": [
    "/images/neuvago/support-guidance-desktop.webp",
    "/images/neuvago/support-guidance-mobile.webp",
    "/images/neuvago/final-cta-desktop.webp",
  ],
  "src/lib/content/core-visual-overrides.ts": [
    "/images/neuvago/homepage-master-hero-desktop.webp",
    "/images/neuvago/product-hero-desktop.webp",
    "/images/neuvago/app-hero-desktop.webp",
    "/images/neuvago/how-it-works-routine-desktop.webp",
    "/images/neuvago/support-guidance-desktop.webp",
  ],
  "src/app/(en)/research/topics/safety-and-tolerability/page.tsx": [
    "/images/neuvago/safety-tolerability-desktop.webp",
    "AuthorityVisualSection",
  ],
  "src/app/(en)/learn/auricular-vagus-nerve-stimulation/page.tsx": [
    "/images/neuvago/auricular-vns-education-desktop.webp",
    "AuthorityVisualSection",
  ],
  "src/app/(en)/learn/transcutaneous-vagus-nerve-stimulation/page.tsx": [
    "/images/neuvago/transcutaneous-vns-education-desktop.webp",
    "AuthorityVisualSection",
  ],
};

for (const [relativePath, markers] of Object.entries(activeVisualRouteBindings)) {
  const source = readIfExists(path.join(repoRoot, relativePath));
  if (!source) {
    errors.push(`${relativePath} is missing and cannot be checked for active visual route binding.`);
    continue;
  }

  for (const marker of markers) {
    if (!source.includes(marker)) {
      errors.push(`${relativePath} is missing active visual route binding marker: ${marker}.`);
    }
  }
}

for (const [relativePath, markers] of Object.entries(visualImageMarkers)) {
  const source = readIfExists(path.join(repoRoot, relativePath));
  if (!source) {
    errors.push(`${relativePath} is missing and cannot be checked for P3.1 visual QA markers.`);
    continue;
  }

  for (const marker of markers) {
    if (!source.includes(marker)) {
      errors.push(`${relativePath} is missing P3.1 visual QA marker: ${marker}.`);
    }
  }
}


const launchBlockedImageMarkers = [
  "/images/home/lifestyle-sofa-neuvago.png",
];

for (const filePath of [
  ...collectFiles(path.join(repoRoot, "src/app"), "page.tsx"),
  ...collectFiles(path.join(repoRoot, "src/components"), ".tsx"),
  ...collectFiles(path.join(repoRoot, "src/content"), ".ts"),
  ...collectFiles(path.join(repoRoot, "src/lib/content"), ".ts"),
]) {
  const source = readIfExists(filePath);
  if (!source) continue;

  for (const marker of launchBlockedImageMarkers) {
    if (source.includes(marker)) {
      errors.push(`${relative(filePath)} still references launch-blocked body-placement image: ${marker}.`);
    }
  }
}

const authorityVisualSource = readIfExists(path.join(repoRoot, "src/components/authority/AuthorityVisualSection.tsx"));
if (authorityVisualSource && !authorityVisualSource.includes("aspect-[4/5] md:aspect-[16/9]")) {
  warnings.push("AuthorityVisualSection does not use the P3.3 mobile-friendly aspect ratio.");
}

for (const filePath of [
  ...collectFiles(path.join(repoRoot, "src/content"), ".ts"),
  ...collectFiles(path.join(repoRoot, "src/app"), "page.tsx"),
]) {
  const source = readIfExists(filePath);
  const imageRefs = source.matchAll(/["'](\/images\/[^"']+)["']/g);
  for (const match of imageRefs) {
    const imagePath = path.join(repoRoot, "public", match[1]);
    if (!existsSync(imagePath)) {
      errors.push(`${relative(filePath)} references missing image asset: ${match[1]}.`);
    }
  }
}


const productSource = readIfExists(pageFileForRoute("/product"));
if (productSource.includes("buildProductStructuredData")) {
  errors.push("/product still renders Product structured data; keep Product schema disabled until real offer/review data exists.");
}

const featuredStudyRendererPath = path.join(
  repoRoot,
  "src/components/research-v2/FeaturedTavnsStudyPage.tsx",
);
const featuredStudyCatalogPath = path.join(
  repoRoot,
  "src/content/research-study-catalog.ts",
);
const featuredStudyRendererSource = readIfExists(featuredStudyRendererPath);
const featuredStudyCatalogSource = readIfExists(featuredStudyCatalogPath);

for (const marker of [
  "PlainEnglishSummary",
  "study.plainEnglish.title",
  "study.plainEnglish.description",
  "study.plainEnglish.points",
  'href={`https://doi.org/${study.doi}`}',
  "DOI: {study.doi}",
]) {
  if (!featuredStudyRendererSource.includes(marker)) {
    errors.push(
      `src/components/research-v2/FeaturedTavnsStudyPage.tsx is missing shared featured-study marker: ${marker}.`,
    );
  }
}

if (!featuredStudyCatalogSource) {
  errors.push("src/content/research-study-catalog.ts is missing.");
}

const studyPageFiles = collectFiles(path.join(repoRoot, "src/app/(en)/research/studies"), "page.tsx")
  .filter((filePath) => !filePath.endsWith(path.join("research", "studies", "page.tsx")));

for (const filePath of studyPageFiles) {
  const source = readIfExists(filePath);
  const usesFeaturedStudyRenderer =
    source.includes("FeaturedTavnsStudyPage") &&
    source.includes("getFeaturedTavnsStudy");

  if (usesFeaturedStudyRenderer) {
    const slugMatch = source.match(
      /getFeaturedTavnsStudy\(\s*["']([^"']+)["']\s*,?\s*\)/s,
    );
    const slug = slugMatch?.[1];

    if (!slug) {
      errors.push(`${relative(filePath)} does not expose a featured-study slug.`);
      continue;
    }

    const catalogEntry = catalogEntryForSlug(featuredStudyCatalogSource, slug);
    if (!catalogEntry) {
      errors.push(`${relative(filePath)} has no matching study catalog entry for ${slug}.`);
      continue;
    }

    if (!catalogEntry.includes("plainEnglish:")) {
      errors.push(`${relative(filePath)} catalog entry is missing plain-English study content.`);
    }
    if (!catalogEntry.includes("doi:")) {
      errors.push(`${relative(filePath)} catalog entry is missing DOI metadata.`);
    }
    continue;
  }

  if (!source.includes("PlainEnglishSummary") || !source.includes("studyPlainEnglish")) {
    errors.push(`${relative(filePath)} is missing the P4.3B plain-English study summary.`);
  }

  if (!source.includes("Open DOI record")) {
    warnings.push(`${relative(filePath)} may be missing descriptive DOI anchor text.`);
  }
}

const studiesHubSource = readIfExists(pageFileForRoute("/research/studies"));
if (studiesHubSource && !studiesHubSource.includes("How to read this library")) {
  warnings.push("/research/studies is missing the P4.3B reading guidance block.");
}

const pageSources = collectFiles(path.join(repoRoot, "src/app"), "page.tsx");
for (const filePath of pageSources) {
  const source = readIfExists(filePath);
  const titleMatches = source.matchAll(/title\s*[:=]\s*["`]([^"`]+)["`]/g);
  for (const match of titleMatches) {
    const title = match[1];
    if (title.includes("Neuvago") && title.length > 70) {
      errors.push(`${relative(filePath)} has a long SEO title (${title.length} chars): ${title}`);
    }
  }

  if (/>\s*https:\/\/doi\.org\//.test(source)) {
    errors.push(`${relative(filePath)} has a naked DOI URL as anchor text.`);
  }
}

const artifacts = findArtifacts(repoRoot);
if (artifacts.length > 0) {
  errors.push(`Remove generated artifacts before commit: ${artifacts.slice(0, 12).join(", ")}${artifacts.length > 12 ? " ..." : ""}`);
}

if (errors.length > 0) {
  console.error("SEO VNS cluster audit failed:");
  for (const error of errors) console.error(`- ${error}`);
}

if (warnings.length > 0) {
  console.warn("SEO VNS cluster audit warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length > 0) {
  process.exit(1);
}

console.log(`SEO VNS cluster audit passed for ${clusterRoutes.length} routes.`);


function collectFiles(dir, fileName, matches = []) {
  if (!existsSync(dir)) return matches;

  for (const entry of readdirSync(dir)) {
    if (["node_modules", ".next", ".git", "out", "dist", "build"].includes(entry)) {
      continue;
    }

    const absolute = path.join(dir, entry);
    const stat = statSync(absolute);

    if (stat.isDirectory()) {
      collectFiles(absolute, fileName, matches);
      continue;
    }

    if (entry === fileName || (fileName.startsWith(".") && entry.endsWith(fileName))) {
      matches.push(absolute);
    }
  }

  return matches;
}

function pageFileForRoute(route) {
  const routePath = route === "/" ? "" : route.replace(/^\//, "");
  const directPath = path.join(repoRoot, "src/app", routePath, "page.tsx");

  if (existsSync(directPath)) {
    return directPath;
  }

  const routeGroup = route === "/no" || route.startsWith("/no/") ? "(no)" : "(en)";
  return path.join(repoRoot, "src/app", routeGroup, routePath, "page.tsx");
}

function isAuthorityRoute(route) {
  return route.startsWith("/learn/") || route.startsWith("/research/topics/") || route.startsWith("/conditions/");
}

function hasCanonical(source, route) {
  return (
    source.includes(`canonical: "${route}"`) ||
    source.includes(`canonical: '${route}'`) ||
    (source.includes("canonical: path") && source.includes(`const path = "${route}"`)) ||
    (source.includes("canonical: path") && source.includes(`const path = '${route}'`))
  );
}

function readIfExists(filePath) {
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : "";
}

function catalogEntryForSlug(source, slug) {
  if (!source) return "";
  const marker = `slug: "${slug}"`;
  const start = source.indexOf(marker);
  if (start === -1) return "";
  const next = source.indexOf("\n  {\n    slug:", start + marker.length);
  return source.slice(start, next === -1 ? source.length : next);
}

function findArtifacts(dir, matches = []) {
  for (const entry of readdirSync(dir)) {
    if (["node_modules", ".next", ".git", "out", "dist", "build"].includes(entry)) {
      continue;
    }

    const absolute = path.join(dir, entry);
    const stat = statSync(absolute);

    if (stat.isDirectory()) {
      findArtifacts(absolute, matches);
      continue;
    }

    if (/\.(rej|orig|patch|zip)$/.test(entry) || entry.includes(".bak")) {
      matches.push(relative(absolute));
    }
  }

  return matches;
}

function relative(filePath) {
  return path.relative(repoRoot, filePath);
}
