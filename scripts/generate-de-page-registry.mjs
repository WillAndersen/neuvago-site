#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const inputPath = resolve(
  repositoryRoot,
  "docs/international/de/de-launch-baseline-v1.json",
);
const outputPath = resolve(
  repositoryRoot,
  "src/i18n/page-registry.generated.ts",
);
const checkOnly = process.argv.includes("--check");

function fail(message) {
  console.error(`DE registry generation failed: ${message}`);
  process.exit(1);
}

function localeKey(languageTag) {
  if (languageTag === "en-US") return "en";
  if (languageTag === "nb-NO") return "no";
  if (languageTag === "de-DE") return "de";
  fail(`unsupported locale ${languageTag}`);
}

function localeForReferencePath(pathname) {
  if (pathname === "/no" || pathname.startsWith("/no/")) return "no";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  return "en";
}

function assertPath(pathname, label) {
  if (typeof pathname !== "string" || !pathname.startsWith("/")) {
    fail(`${label} must be an absolute site path`);
  }
}

const sourceText = await readFile(inputPath, "utf8");
const baseline = JSON.parse(sourceText);

if (baseline?.scope?.uniquePageConcepts !== 45) {
  fail("Wave 0 baseline must contain exactly 45 concepts");
}

if (baseline?.scope?.P0 !== 20 || baseline?.scope?.P1 !== 25) {
  fail("Wave 0 priority split must be P0=20 and P1=25");
}

if (baseline?.scope?.targetLocale !== "de-DE") {
  fail("Wave 0 target locale must be de-DE");
}

if (!Array.isArray(baseline.pages) || baseline.pages.length !== 45) {
  fail("Wave 0 pages array must contain exactly 45 entries");
}

const seenIds = new Set();
const seenGermanCandidates = new Set();

const entries = baseline.pages.map((page) => {
  if (!page?.pageId || seenIds.has(page.pageId)) {
    fail(`missing or duplicate pageId: ${page?.pageId ?? "<unknown>"}`);
  }
  seenIds.add(page.pageId);

  if (page.priority !== "P0" && page.priority !== "P1") {
    fail(`${page.pageId} has unsupported priority ${page.priority}`);
  }

  assertPath(page.target?.pathCandidate, `${page.pageId} German candidate`);

  if (seenGermanCandidates.has(page.target.pathCandidate)) {
    fail(`duplicate German path candidate ${page.target.pathCandidate}`);
  }
  seenGermanCandidates.add(page.target.pathCandidate);

  const variants = {};
  const sourceLocale = page.source.locale
    ? localeKey(page.source.locale)
    : "de";

  if (page.source.path) {
    assertPath(page.source.path, `${page.pageId} source`);
    variants[sourceLocale] = {
      path: page.source.path,
      status: "published",
      routeAvailable: true,
      role: "source",
    };
  }

  for (const referencePath of page.referencePaths ?? []) {
    assertPath(referencePath, `${page.pageId} reference`);
    const referenceLocale = localeForReferencePath(referencePath);

    if (variants[referenceLocale]) {
      fail(`${page.pageId} has duplicate ${referenceLocale} variant`);
    }

    variants[referenceLocale] = {
      path: referencePath,
      status: "published",
      routeAvailable: true,
      role: "reference",
    };
  }

  const isGermanRootShell = page.pageId === "de-home";

  variants.de = {
    path: page.target.pathCandidate,
    status: isGermanRootShell ? "draft" : "planned",
    routeAvailable: isGermanRootShell,
    role: "target",
    pathStatus: isGermanRootShell
      ? "wave1-root-shell-stable"
      : page.target.pathStatus,
  };

  return {
    pageId: page.pageId,
    priority: page.priority,
    launchBlocking: Boolean(page.launchBlocking),
    category: page.category,
    title: page.title,
    sourceLocale,
    variants,
  };
});

const p0Count = entries.filter((entry) => entry.priority === "P0").length;
const p1Count = entries.filter((entry) => entry.priority === "P1").length;
const routableGermanCount = entries.filter(
  (entry) => entry.variants.de.routeAvailable,
).length;

if (p0Count !== 20 || p1Count !== 25 || routableGermanCount !== 1) {
  fail(
    `generated scope mismatch (P0=${p0Count}, P1=${p1Count}, routable DE=${routableGermanCount})`,
  );
}

const baselineSha256 = createHash("sha256").update(sourceText).digest("hex");
const generatedHeader = `/* eslint-disable */\n// GENERATED FILE. DO NOT EDIT BY HAND.\n// Source: docs/international/de/de-launch-baseline-v1.json\n// Generator: scripts/generate-de-page-registry.mjs\n\nimport type { PageRegistryEntry } from "@/i18n/page-registry";\n\n`;
const generatedBody = `export const generatedDePageRegistryMeta = ${JSON.stringify(
  {
    schemaVersion: 1,
    baselineName: baseline.baselineName,
    baselineCommit: baseline.provenance.baselineCommit,
    baselineSha256,
    concepts: entries.length,
    P0: p0Count,
    P1: p1Count,
    routableGermanPages: routableGermanCount,
  },
  null,
  2,
)} as const;\n\nexport const generatedDePageRegistry = ${JSON.stringify(
  entries,
  null,
  2,
)} as const satisfies readonly PageRegistryEntry[];\n`;
const generatedText = `${generatedHeader}${generatedBody}`;

if (checkOnly) {
  let currentText;

  try {
    currentText = await readFile(outputPath, "utf8");
  } catch {
    fail(`generated file is missing: ${outputPath}`);
  }

  if (currentText !== generatedText) {
    fail("generated registry is stale; run pnpm de:registry");
  }

  console.log(
    `OK: German page registry is current (${entries.length} concepts, P0=${p0Count}, P1=${p1Count}, routable DE=${routableGermanCount}).`,
  );
  process.exit(0);
}

await writeFile(outputPath, generatedText, "utf8");
console.log(
  `Generated ${outputPath} (${entries.length} concepts, P0=${p0Count}, P1=${p1Count}, routable DE=${routableGermanCount}).`,
);
