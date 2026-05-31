import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const clusterRoutes = [
  "/learn/vagus-nerve",
  "/learn/vagus-nerve-stimulation",
  "/learn/non-invasive-vagus-nerve-stimulation",
  "/learn/transcutaneous-vagus-nerve-stimulation",
  "/learn/auricular-vagus-nerve-stimulation",
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
  "/research/topics/vagus-nerve-stimulation",
  "/research/topics/transcutaneous-vagus-nerve-stimulation",
  "/research/topics/safety-and-tolerability",
  "/research/topics/autonomic-regulation",
];

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

for (const route of requiredBuildRoutes) {
  if (!existsSync(pageFileForRoute(route))) {
    errors.push(`${route} will not appear in the Next.js route list because its page.tsx is missing.`);
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

function pageFileForRoute(route) {
  const routePath = route === "/" ? "" : route.replace(/^\//, "");
  return path.join(repoRoot, "src/app", routePath, "page.tsx");
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
