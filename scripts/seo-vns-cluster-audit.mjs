import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const clusterRoutes = [
  "/learn/vagus-nerve",
  "/learn/vagus-nerve-stimulation",
  "/learn/non-invasive-vagus-nerve-stimulation",
  "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation",
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
  "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation",
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

// Wave 2C.1B is a registry-backed Norwegian knowledge article. It is
// generated by the existing /no/kunnskap/[slug] route rather than a new
// physical page.tsx, so the contract follows article, registry, renderer,
// sitemap-registry and reciprocal-language bindings.
const wave2c1bTiredButWiredRequirements = {
  route: "/no/kunnskap/trott-men-far-ikke-slappet-av",
  articleFile: "src/content/knowledge/no/articles/trott-men-far-ikke-slappet-av.ts",
  articleMarkers: [
    'slug: "trott-men-far-ikke-slappet-av"',
    'path: "/no/kunnskap/trott-men-far-ikke-slappet-av"',
    'wave: "2C.1"',
    'primaryKeyword: "trøtt men får ikke slappet av"',
    'label: "Se kveldsrutinen"',
    'href: "/no/kunnskap/kveldsrutine-for-nedtrapping"',
    'label: "Slik fungerer Neuvago"',
    'href: "/no/slik-fungerer-det"',
    'id: "gjenkjennelsessjekkliste"',
    'id: "kort-kveldssekvens"',
    'id: "nar-soke-hjelp"',
    'id: "neuvago-kontekst"',
    'href: "/no/tilstander/sovn"',
    'href: "/no/tilstander/stress"',
    'href: "/no/juridisk/tiltenkt-bruk"',
    'englishEquivalent: "/learn/why-you-feel-tired-but-cant-relax"',
    'pmid: "20514923"',
    'pmid: "19481481"',
    'pmid: "33164742"',
    "ikke en diagnose",
    "ikke som behandling for søvnløshet",
  ],
  forbiddenMarkers: [
    "Neuvago behandler insomni",
    "Neuvago kurerer søvnløshet",
    "Neuvago normaliserer kortisol",
    "Neuvago normaliserer HRV",
    "Neuvago normaliserer søvnarkitektur",
    "beviser autonom dysfunksjon",
  ],
};

const wave2c1bArticleSource = readIfExists(
  path.join(repoRoot, wave2c1bTiredButWiredRequirements.articleFile),
);

if (!wave2c1bArticleSource) {
  errors.push(`${wave2c1bTiredButWiredRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c1bTiredButWiredRequirements.articleMarkers) {
    if (!wave2c1bArticleSource.includes(marker)) {
      errors.push(
        `${wave2c1bTiredButWiredRequirements.route} is missing Wave 2C.1B marker: ${marker}.`,
      );
    }
  }

  for (const forbidden of wave2c1bTiredButWiredRequirements.forbiddenMarkers) {
    if (wave2c1bArticleSource.includes(forbidden)) {
      errors.push(
        `${wave2c1bTiredButWiredRequirements.route} contains forbidden Wave 2C.1B marker: ${forbidden}.`,
      );
    }
  }
}

for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/registry.ts",
    [
      "trottMenFarIkkeSlappetAvArticle",
      "trott-men-far-ikke-slappet-av",
    ],
    "Wave 2C.1B registry binding",
  ],
  [
    "src/content/knowledge/no/types.ts",
    [
      '| "2C.1"',
      "NorwegianKnowledgeCta",
      "primaryCta?: NorwegianKnowledgeCta",
      "secondaryCta?: NorwegianKnowledgeCta",
    ],
    "Wave 2C.1B article CTA contract",
  ],
  [
    "src/components/knowledge/NorwegianKnowledgeArticlePage.tsx",
    [
      "data-knowledge-article-ctas",
      "data-knowledge-primary-cta",
      "data-knowledge-secondary-cta",
      'data-conversion-placement="hero-actions"',
      "article.primaryCta",
      "article.secondaryCta",
    ],
    "Wave 2C.1B shared renderer",
  ],
  [
    "src/app/(en)/learn/why-you-feel-tired-but-cant-relax/page.tsx",
    [
      '"nb-NO": "/no/kunnskap/trott-men-far-ikke-slappet-av"',
      'href="/no/kunnskap/trott-men-far-ikke-slappet-av"',
      'data-language-counterpart="nb-NO"',
      "Les denne siden på norsk",
    ],
    "Wave 2C.1B reciprocal English counterpart",
  ],
  [
    "src/app/(no)/no/kunnskap/[slug]/page.tsx",
    [
      "generateStaticParams",
      "getPublishedNorwegianKnowledgeArticles",
      "getNorwegianKnowledgeArticle",
      "NorwegianKnowledgeArticlePage",
    ],
    "Norwegian dynamic article route",
  ],
  [
    "src/app/sitemap.ts",
    [
      "getPublishedNorwegianKnowledgeArticles",
      "norwegianKnowledgeEntries",
      "article.path",
    ],
    "registry-backed Norwegian sitemap",
  ],
  [
    "public/llms.txt",
    [
      "[Trøtt, men får ikke slappet av](/no/kunnskap/trott-men-far-ikke-slappet-av)",
    ],
    "Wave 2C.1B llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    [
      "trøtt men får ikke slappet av",
      "/no/kunnskap/trott-men-far-ikke-slappet-av",
      "Recognition/sleep overlap",
    ],
    "Wave 2C.1B query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    [
      "## Wave 2C.1B pilot measurement",
      "/no/kunnskap/kveldsrutine-for-nedtrapping",
      "neuvago_how_it_works_click",
      "hero-actions",
    ],
    "Wave 2C.1B measurement plan",
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

// Wave 2C.1C publishes a registry-backed practical routine with new
// shared timeline, video and tracked-action block contracts. The media is an
// abstract explanatory asset, not a product instruction or evidence claim.
const wave2c1cEveningRoutineRequirements = {
  route: "/no/kunnskap/kveldsrutine-for-nedtrapping",
  articleFile: "src/content/knowledge/no/articles/kveldsrutine-for-nedtrapping.ts",
  articleMarkers: [
    'slug: "kveldsrutine-for-nedtrapping"',
    'path: "/no/kunnskap/kveldsrutine-for-nedtrapping"',
    'wave: "2C.1"',
    'primaryKeyword: "kveldsrutine for å roe ned"',
    'label: "Se hvordan en Neuvago-økt passer inn"',
    'href: "#neuvago-i-rutinen"',
    'label: "Les om søvn og nedtrapping"',
    'href: "/no/tilstander/sovn"',
    'type: "timeline"',
    'totalDuration: "20–30 minutter"',
    'type: "video"',
    'src: "/videos/neuvago/kveldsrutine-for-nedtrapping.mp4"',
    'captionsSrc: "/videos/neuvago/kveldsrutine-for-nedtrapping-no.vtt"',
    'type: "actions"',
    'placement: "routine-product-bridge"',
    'href: "/no/slik-fungerer-det"',
    'href: "/no/produkt"',
    'id: "nar-du-ikke-blir-sovnig"',
    'id: "nar-soke-hjelp"',
    'id: "neuvago-i-rutinen"',
    'href: "/no/kunnskap/trott-men-far-ikke-slappet-av"',
    'label: "Les om restitusjon og regulering"',
    'href: "/no/kunnskap/restitusjon-og-regulering"',
    'pmid: "33164742"',
    "ikke behandling for søvnløshet",
    "Søvnhygiene alene",
  ],
  forbiddenMarkers: [
    "Neuvago behandler insomni",
    "Neuvago kurerer søvnløshet",
    "Neuvago normaliserer kortisol",
    "Neuvago normaliserer HRV",
    "Neuvago normaliserer søvnarkitektur",
    "garanterer raskere innsovning",
    "sterkere stimulering er bedre",
    "start med melatonin",
    'href: "/learn/recovery-and-regulation"',
  ],
};

const wave2c1cArticleSource = readIfExists(
  path.join(repoRoot, wave2c1cEveningRoutineRequirements.articleFile),
);

if (!wave2c1cArticleSource) {
  errors.push(`${wave2c1cEveningRoutineRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c1cEveningRoutineRequirements.articleMarkers) {
    if (!wave2c1cArticleSource.includes(marker)) {
      errors.push(
        `${wave2c1cEveningRoutineRequirements.route} is missing Wave 2C.1C marker: ${marker}.`,
      );
    }
  }

  for (const forbidden of wave2c1cEveningRoutineRequirements.forbiddenMarkers) {
    if (wave2c1cArticleSource.includes(forbidden)) {
      errors.push(
        `${wave2c1cEveningRoutineRequirements.route} contains forbidden Wave 2C.1C marker: ${forbidden}.`,
      );
    }
  }
}

for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/registry.ts",
    [
      "kveldsrutineForNedtrappingArticle",
      "kveldsrutine-for-nedtrapping",
    ],
    "Wave 2C.1C registry binding",
  ],
  [
    "src/content/knowledge/no/types.ts",
    [
      "NorwegianKnowledgeTimelineBlock",
      "NorwegianKnowledgeVideoBlock",
      "NorwegianKnowledgeActionsBlock",
      'type: "timeline"',
      'type: "video"',
      'type: "actions"',
    ],
    "Wave 2C.1C shared block contract",
  ],
  [
    "src/components/knowledge/NorwegianKnowledgeArticlePage.tsx",
    [
      'case "timeline"',
      'case "video"',
      'case "actions"',
      "data-knowledge-timeline",
      "data-knowledge-video",
      "data-video-transcript",
      "data-knowledge-actions",
      "data-conversion-placement={block.placement}",
      'kind="captions"',
    ],
    "Wave 2C.1C shared renderer",
  ],
  [
    "src/content/knowledge/no/articles/trott-men-far-ikke-slappet-av.ts",
    [
      'label: "Se kveldsrutinen"',
      'href: "/no/kunnskap/kveldsrutine-for-nedtrapping"',
    ],
    "Wave 2C.1B to 2C.1C editorial bridge",
  ],
  [
    "src/app/(no)/no/kunnskap/[slug]/page.tsx",
    [
      "generateStaticParams",
      "getPublishedNorwegianKnowledgeArticles",
      "getNorwegianKnowledgeArticle",
      "NorwegianKnowledgeArticlePage",
    ],
    "Norwegian dynamic article route",
  ],
  [
    "src/app/sitemap.ts",
    [
      "getPublishedNorwegianKnowledgeArticles",
      "norwegianKnowledgeEntries",
      "article.path",
    ],
    "registry-backed Norwegian sitemap",
  ],
  [
    "public/llms.txt",
    [
      "[Kveldsrutine for nedtrapping](/no/kunnskap/kveldsrutine-for-nedtrapping)",
    ],
    "Wave 2C.1C llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    [
      "kveldsrutine for å roe ned",
      "/no/kunnskap/kveldsrutine-for-nedtrapping",
      "Routine/recognition/sleep overlap",
    ],
    "Wave 2C.1C query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    [
      "## Wave 2C.1C pilot measurement",
      "routine-product-bridge",
      "neuvago_how_it_works_click",
      "neuvago_product_click",
      "video playback, captions and transcript interaction",
    ],
    "Wave 2C.1C measurement plan",
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

for (const [relativePath, minimumBytes, marker] of [
  [
    "public/videos/neuvago/kveldsrutine-for-nedtrapping.mp4",
    100000,
    null,
  ],
  [
    "public/videos/neuvago/kveldsrutine-for-nedtrapping-no.vtt",
    500,
    "WEBVTT",
  ],
]) {
  const absolutePath = path.join(repoRoot, relativePath);
  if (!existsSync(absolutePath)) {
    errors.push(`${relativePath} is missing.`);
    continue;
  }
  const stat = statSync(absolutePath);
  if (stat.size < minimumBytes) {
    errors.push(`${relativePath} is unexpectedly small: ${stat.size} bytes.`);
  }
  if (marker) {
    const source = readIfExists(absolutePath);
    if (!source?.includes(marker)) {
      errors.push(`${relativePath} is missing media marker: ${marker}.`);
    }
  }
}

// Wave 2C.1D publishes a registry-backed Norwegian recognition guide.
// It uses the established article model and shared renderer; no new physical
// page.tsx or analytics contract is introduced.
const wave2c1dOverstimulationRequirements = {
  route: "/no/kunnskap/overstimulert",
  articleFile: "src/content/knowledge/no/articles/overstimulert.ts",
  articleMarkers: [
    'slug: "overstimulert"',
    'path: "/no/kunnskap/overstimulert"',
    'wave: "2C.1"',
    'order: 137',
    'primaryKeyword: "overstimulert nervesystem"',
    'label: "Lær hvordan du kan roe ned"',
    'href: "/no/kunnskap/hvordan-roe-ned-nervesystemet"',
    'label: "Se hvordan Neuvago fungerer"',
    'href: "/no/slik-fungerer-det"',
    'id: "stimulusbelastningssjekkliste"',
    'id: "forste-fem-minutter"',
    'id: "nar-stillhet-eller-pust-ikke-hjelper"',
    'id: "nar-soke-hjelp"',
    'id: "neuvago-som-valgfritt-steg"',
    'href: "/no/tilstander/stress"',
    'href: "/no/tilstander/sovn"',
    'href: "/no/kunnskap/tegn-pa-dysregulert-nervesystem"',
    'pmid: "37416535"',
    "ikke en diagnose",
    "ikke som behandling for overstimulering",
    "Sterkere stimulering er ikke nødvendigvis bedre",
  ],
  forbiddenMarkers: [
    "Neuvago behandler overstimulering",
    "Neuvago kurerer overstimulering",
    "Neuvago behandler angst",
    "Neuvago behandler ADHD",
    "Neuvago behandler autisme",
    "Neuvago normaliserer kortisol",
    "Neuvago normaliserer HRV",
    "beviser autonom dysfunksjon",
    "vagusnerven virker ikke",
  ],
};
const wave2c1dArticleSource = readIfExists(
  path.join(repoRoot, wave2c1dOverstimulationRequirements.articleFile),
);
if (!wave2c1dArticleSource) {
  errors.push(`${wave2c1dOverstimulationRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c1dOverstimulationRequirements.articleMarkers) {
    if (!wave2c1dArticleSource.includes(marker)) {
      errors.push(
        `${wave2c1dOverstimulationRequirements.route} is missing Wave 2C.1D marker: ${marker}.`,
      );
    }
  }
  for (const forbidden of wave2c1dOverstimulationRequirements.forbiddenMarkers) {
    if (wave2c1dArticleSource.includes(forbidden)) {
      errors.push(
        `${wave2c1dOverstimulationRequirements.route} contains forbidden Wave 2C.1D marker: ${forbidden}.`,
      );
    }
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/registry.ts",
    ["overstimulertArticle", "articles/overstimulert"],
    "Wave 2C.1D registry binding",
  ],
  [
    "src/app/(no)/no/kunnskap/[slug]/page.tsx",
    [
      "generateStaticParams",
      "getPublishedNorwegianKnowledgeArticles",
      "getNorwegianKnowledgeArticle",
      "NorwegianKnowledgeArticlePage",
    ],
    "Norwegian dynamic article route",
  ],
  [
    "src/app/sitemap.ts",
    ["getPublishedNorwegianKnowledgeArticles", "norwegianKnowledgeEntries", "article.path"],
    "registry-backed Norwegian sitemap",
  ],
  [
    "public/llms.txt",
    [
      "[Overstimulert – hva betyr det, og hva kan hjelpe?](/no/kunnskap/overstimulert)",
    ],
    "Wave 2C.1D llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["overstimulert nervesystem", "/no/kunnskap/overstimulert", "Overstimulation/calming/stress overlap"],
    "Wave 2C.1D query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    [
      "## Wave 2C.1D pilot measurement",
      "/no/kunnskap/overstimulert",
      "neuvago_how_it_works_click",
      "checklist answers",
    ],
    "Wave 2C.1D measurement plan",
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

// Wave 2C.1E publishes a registry-backed Norwegian lived-experience guide.
// It uses the established shared article renderer, timeline and actions blocks;
// no new physical page.tsx or analytics contract is introduced.
const wave2c1eStuckStressRequirements = {
  route: "/no/kunnskap/fastlast-i-stress",
  articleFile: "src/content/knowledge/no/articles/fastlast-i-stress.ts",
  articleMarkers: [
    'slug: "fastlast-i-stress"',
    'path: "/no/kunnskap/fastlast-i-stress"',
    'wave: "2C.1"',
    'order: 138',
    'primaryKeyword: "fastlåst i stress"',
    'englishEquivalent: "/learn/why-your-body-feels-stuck-in-stress"',
    'label: "Slik kan kroppen skifte gir"',
    'href: "#fra-aktivering-til-tilbakevending"',
    'label: "Slik fungerer Neuvago"',
    'href: "/no/slik-fungerer-det"',
    'id: "fra-aktivering-til-tilbakevending"',
    'type: "timeline"',
    'id: "forste-ti-minutter"',
    'id: "nar-pust-eller-stillhet-ikke-hjelper"',
    'id: "nar-soke-hjelp"',
    'id: "neuvago-som-valgfritt-steg"',
    'placement: "stuck-stress-product-bridge"',
    'href: "/no/produkt"',
    'href: "/no/tilstander/stress"',
    'label: "Les om restitusjon og regulering"',
    'href: "/no/kunnskap/restitusjon-og-regulering"',
    '"hvordan-roe-ned-nervesystemet"',
    'pmid: "16439263"',
    'pmid: "32799204"',
    "ikke en diagnose",
    "ikke som behandling for langvarig stress",
    "Sterkere stimulering er ikke nødvendigvis bedre",
  ],
  forbiddenMarkers: [
    "Neuvago behandler kronisk stress",
    "Neuvago kurerer stress",
    "Neuvago behandler angst",
    "Neuvago behandler PTSD",
    "Neuvago behandler utbrenthet",
    "Neuvago normaliserer kortisol",
    "Neuvago normaliserer HRV",
    "resetter nervesystemet",
    "frigjør traumer",
    "garanterer restitusjon",
    'href: "/learn/recovery-and-regulation"',
  ],
};
const wave2c1eArticleSource = readIfExists(
  path.join(repoRoot, wave2c1eStuckStressRequirements.articleFile),
);
if (!wave2c1eArticleSource) {
  errors.push(`${wave2c1eStuckStressRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c1eStuckStressRequirements.articleMarkers) {
    if (!wave2c1eArticleSource.includes(marker)) {
      errors.push(
        `${wave2c1eStuckStressRequirements.route} is missing Wave 2C.1E marker: ${marker}.`,
      );
    }
  }
  for (const forbidden of wave2c1eStuckStressRequirements.forbiddenMarkers) {
    if (wave2c1eArticleSource.includes(forbidden)) {
      errors.push(
        `${wave2c1eStuckStressRequirements.route} contains forbidden Wave 2C.1E marker: ${forbidden}.`,
      );
    }
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/registry.ts",
    ["fastlastIStressArticle", "articles/fastlast-i-stress"],
    "Wave 2C.1E registry binding",
  ],
  [
    "src/app/(en)/learn/why-your-body-feels-stuck-in-stress/page.tsx",
    [
      '\"nb-NO\": \"/no/kunnskap/fastlast-i-stress\"',
      'data-language-counterpart=\"nb-NO\"',
      "Les denne siden på norsk",
    ],
    "Wave 2C.1E English counterpart",
  ],
  [
    "src/app/(no)/no/kunnskap/[slug]/page.tsx",
    [
      "generateStaticParams",
      "getPublishedNorwegianKnowledgeArticles",
      "getNorwegianKnowledgeArticle",
      "NorwegianKnowledgeArticlePage",
    ],
    "Norwegian dynamic article route",
  ],
  [
    "src/app/sitemap.ts",
    ["getPublishedNorwegianKnowledgeArticles", "norwegianKnowledgeEntries", "article.path"],
    "registry-backed Norwegian sitemap",
  ],
  [
    "public/llms.txt",
    ["[Hvorfor kroppen føles fastlåst i stress](/no/kunnskap/fastlast-i-stress)"],
    "Wave 2C.1E llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["fastlåst i stress", "/no/kunnskap/fastlast-i-stress", "Stuck-in-stress/calming/stress overlap"],
    "Wave 2C.1E query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    [
      "## Wave 2C.1E pilot measurement",
      "/no/kunnskap/fastlast-i-stress",
      "neuvago_how_it_works_click",
      "neuvago_product_click",
      "timeline interactions",
    ],
    "Wave 2C.1E measurement plan",
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

// Wave 2C.1F publishes a registry-backed Norwegian recovery guide.
// It reuses the established article renderer, timeline and actions blocks;
// no new physical page.tsx or analytics contract is introduced.
const wave2c1fRecoveryRequirements = {
  route: "/no/kunnskap/restitusjon-og-regulering",
  articleFile: "src/content/knowledge/no/articles/restitusjon-og-regulering.ts",
  articleMarkers: [
    'slug: "restitusjon-og-regulering"',
    'path: "/no/kunnskap/restitusjon-og-regulering"',
    'wave: "2C.1"',
    'order: 139',
    'primaryKeyword: "restitusjon nervesystemet"',
    'englishEquivalent: "/learn/recovery-and-regulation"',
    'label: "Bygg en roligere rutine"',
    'href: "#bygg-en-roligere-rutine"',
    'label: "Utforsk Neuvago-systemet"',
    'href: "/no/produkt"',
    'id: "restitusjonskart"',
    'type: "timeline"',
    'id: "hrv-og-vagal-tone-som-kontekst"',
    'id: "nar-soke-hjelp"',
    'id: "neuvago-som-valgfritt-steg"',
    'placement: "recovery-product-bridge"',
    'href: "/no/slik-fungerer-det"',
    'href: "/no/app"',
    'href: "/no/tilstander/stress"',
    'href: "/no/tilstander/sovn"',
    'href: "/no/kunnskap/hrv-og-vagusnerven"',
    'href: "/no/kunnskap/vagal-tone"',
    'pmid: "28358572"',
    'pmid: "28265249"',
    'pmid: "29034226"',
    "En opplevelse er ikke en biomarkørdiagnose",
    "HRV og vagal tone kan gi kontekst",
    "uten løfte om restitusjon eller HRV-endring",
    "Sterkere stimulering er ikke nødvendigvis bedre",
  ],
  forbiddenMarkers: [
    "Neuvago garanterer restitusjon",
    "Neuvago behandler stress",
    "Neuvago behandler søvnløshet",
    "Neuvago behandler utmattelse",
    "Neuvago normaliserer HRV",
    "Neuvago øker vagal tone",
    "Neuvago reparerer nervesystemet",
    "Neuvago resetter nervesystemet",
    "beviser autonom dysfunksjon",
    "beviser selektiv vagusaktivering",
  ],
};
const wave2c1fArticleSource = readIfExists(
  path.join(repoRoot, wave2c1fRecoveryRequirements.articleFile),
);
if (!wave2c1fArticleSource) {
  errors.push(`${wave2c1fRecoveryRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c1fRecoveryRequirements.articleMarkers) {
    if (!wave2c1fArticleSource.includes(marker)) {
      errors.push(
        `${wave2c1fRecoveryRequirements.route} is missing Wave 2C.1F marker: ${marker}.`,
      );
    }
  }
  for (const forbidden of wave2c1fRecoveryRequirements.forbiddenMarkers) {
    if (wave2c1fArticleSource.includes(forbidden)) {
      errors.push(
        `${wave2c1fRecoveryRequirements.route} contains forbidden Wave 2C.1F marker: ${forbidden}.`,
      );
    }
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/registry.ts",
    ["restitusjonOgReguleringArticle", "articles/restitusjon-og-regulering"],
    "Wave 2C.1F registry binding",
  ],
  [
    "src/app/(en)/learn/recovery-and-regulation/page.tsx",
    [
      '\"nb-NO\": \"/no/kunnskap/restitusjon-og-regulering\"',
      'data-language-counterpart=\"nb-NO\"',
      "Les denne siden på norsk",
    ],
    "Wave 2C.1F English counterpart",
  ],
  [
    "src/app/(no)/no/kunnskap/[slug]/page.tsx",
    [
      "generateStaticParams",
      "getPublishedNorwegianKnowledgeArticles",
      "getNorwegianKnowledgeArticle",
      "NorwegianKnowledgeArticlePage",
    ],
    "Norwegian dynamic article route",
  ],
  [
    "src/app/sitemap.ts",
    ["getPublishedNorwegianKnowledgeArticles", "norwegianKnowledgeEntries", "article.path"],
    "registry-backed Norwegian sitemap",
  ],
  [
    "public/llms.txt",
    ["[Restitusjon og regulering](/no/kunnskap/restitusjon-og-regulering)"],
    "Wave 2C.1F llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["restitusjon nervesystemet", "/no/kunnskap/restitusjon-og-regulering", "Recovery/stress/sleep/HRV overlap"],
    "Wave 2C.1F query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    [
      "## Wave 2C.1F pilot measurement",
      "/no/kunnskap/restitusjon-og-regulering",
      "neuvago_how_it_works_click",
      "neuvago_product_click",
      "recovery scores",
    ],
    "Wave 2C.1F measurement plan",
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

// Wave 2C.2A publishes a new physical English comparison page.
// It owns direct implanted-versus-non-invasive intent while preserving the
// broad VNS, nVNS, method, safety and product-specific evidence boundaries.
const wave2c2aComparisonRequirements = {
  route: "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation",
  pageFile: "src/app/(en)/learn/implanted-vs-non-invasive-vagus-nerve-stimulation/page.tsx",
  sourceMarkers: [
    'const path = "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation"',
    "Implanted vs non-invasive vagus nerve stimulation",
    "buildAuthorityPageStructuredData",
    "buildFAQStructuredData",
    "datePublished: publishedAt",
    "dateModified: modifiedAt",
    "data-wave2c2a-page",
    "data-wave2c2a-comparison-table",
    "data-wave2c2a-category-card",
    "data-wave2c2a-source-card",
    "data-wave2c2a-faq",
    "Implanted clinical VNS",
    "Cervical non-invasive VNS",
    "Auricular VNS / taVNS",
    "comparison-product-bridge",
    'href="/how-it-works"',
    'href="/product"',
    'href="/research/topics/safety-and-tolerability"',
    'href="/legal/intended-use"',
    'href="/legal/medical-disclaimer"',
    "25614179",
    "33854421",
    "31742681",
    "36543841",
    "30217648",
    "Neuvago Editorial Team",
    "Neuvago Source Review",
    "General information only",
    "stronger stimulation is not automatically better",
  ],
  forbiddenMarkers: [
    "all VNS devices work the same",
    "implanted VNS evidence proves",
    "Neuvago treats epilepsy",
    "Neuvago treats depression",
    "Neuvago is FDA approved",
    "non-invasive VNS is universally safer",
    "stronger sensation means stronger target engagement",
  ],
};
const wave2c2aSource = readIfExists(
  path.join(repoRoot, wave2c2aComparisonRequirements.pageFile),
);
if (!wave2c2aSource) {
  errors.push(`${wave2c2aComparisonRequirements.pageFile} is missing.`);
} else {
  for (const marker of wave2c2aComparisonRequirements.sourceMarkers) {
    if (!wave2c2aSource.includes(marker)) {
      errors.push(`${wave2c2aComparisonRequirements.route} is missing Wave 2C.2A marker: ${marker}.`);
    }
  }
  for (const forbidden of wave2c2aComparisonRequirements.forbiddenMarkers) {
    if (wave2c2aSource.includes(forbidden)) {
      errors.push(`${wave2c2aComparisonRequirements.route} contains forbidden Wave 2C.2A marker: ${forbidden}.`);
    }
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/app/(en)/learn/page.tsx",
    ["Implanted vs non-invasive vagus nerve stimulation", wave2c2aComparisonRequirements.route],
    "Wave 2C.2A Learn hub binding",
  ],
  [
    "src/app/(en)/learn/vagus-nerve-stimulation/page.tsx",
    ["Implanted vs non-invasive VNS", wave2c2aComparisonRequirements.route],
    "Wave 2C.2A VNS pillar bridge",
  ],
  [
    "src/app/(en)/learn/non-invasive-vagus-nerve-stimulation/page.tsx",
    ["Implanted vs non-invasive VNS", wave2c2aComparisonRequirements.route],
    "Wave 2C.2A nVNS guide bridge",
  ],
  [
    "src/app/sitemap.ts",
    [wave2c2aComparisonRequirements.route, 'lastModified: "2026-08-31"'],
    "Wave 2C.2A sitemap entry",
  ],
  [
    "public/llms.txt",
    ["Updated: 2026-09-01", "[Implanted vs non-invasive vagus nerve stimulation](/learn/implanted-vs-non-invasive-vagus-nerve-stimulation)"],
    "Wave 2C.2A llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["implanted vs non-invasive VNS", wave2c2aComparisonRequirements.route, "Wave 2C.2A cannibalization watchlist"],
    "Wave 2C.2A query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    ["## Wave 2C.2A pilot measurement", wave2c2aComparisonRequirements.route, "comparison-product-bridge", "medical history"],
    "Wave 2C.2A measurement plan",
  ],
  [
    "docs/seo/wave2c2a-implanted-vs-non-invasive-source-and-claims-lock.md",
    ["VNS is an umbrella category", "product-specific bridge", "must not stage, commit, push"],
    "Wave 2C.2A source and claims lock",
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
// Wave 2C.2B publishes a registry-backed Norwegian workday-pause guide.
// It owns the concrete use moment while preserving broad stress, regulation,
// recovery, workplace-responsibility and product-specific evidence boundaries.
const wave2c2bWorkdayPauseRequirements = {
  route: "/no/kunnskap/pause-i-arbeidsdagen",
  articleFile: "src/content/knowledge/no/articles/pause-i-arbeidsdagen.ts",
  articleMarkers: [
    'slug: "pause-i-arbeidsdagen"',
    'path: "/no/kunnskap/pause-i-arbeidsdagen"',
    'wave: "2C.2"',
    'order: 140',
    'primaryKeyword: "hvordan roe ned på jobb"',
    'label: "Prøv femminutterspausen"',
    'href: "#fem-minutters-pause"',
    'label: "Utforsk Neuvago-appen"',
    'href: "/no/app"',
    'id: "fem-minutters-pause"',
    'id: "kort-videoguide"',
    'id: "velg-pause-etter-belastning"',
    'id: "nar-en-pause-ikke-er-nok"',
    'id: "neuvago-som-valgfritt-steg"',
    'placement: "workday-product-bridge"',
    'src: "/videos/neuvago/pause-i-arbeidsdagen.mp4"',
    'captionsSrc: "/videos/neuvago/pause-i-arbeidsdagen-no.vtt"',
    'poster: "/images/neuvago/pause-i-arbeidsdagen-poster.webp"',
    'href: "/no/tilstander/stress"',
    'href: "/no/slik-fungerer-det"',
    'href: "/no/produkt"',
    'doi: "10.1371/journal.pone.0272460"',
    "ikke behandling for arbeidsrelatert stress",
    "Organisatoriske problemer må fortsatt håndteres organisatorisk",
    "sterkere stimulering er ikke nødvendigvis bedre",
  ],
  forbiddenMarkers: [
    "Neuvago behandler arbeidsrelatert stress",
    "Neuvago behandler utbrenthet",
    "garanterer en fysiologisk reset",
    "normaliserer kortisol",
    "normaliserer HRV",
    "beviser vagal aktivering",
    "beviser autonom dysfunksjon",
  ],
};
const wave2c2bSource = readIfExists(
  path.join(repoRoot, wave2c2bWorkdayPauseRequirements.articleFile),
);
if (!wave2c2bSource) {
  errors.push(`${wave2c2bWorkdayPauseRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c2bWorkdayPauseRequirements.articleMarkers) {
    if (!wave2c2bSource.includes(marker)) {
      errors.push(`${wave2c2bWorkdayPauseRequirements.route} is missing Wave 2C.2B marker: ${marker}.`);
    }
  }
  for (const forbidden of wave2c2bWorkdayPauseRequirements.forbiddenMarkers) {
    if (wave2c2bSource.includes(forbidden)) {
      errors.push(`${wave2c2bWorkdayPauseRequirements.route} contains forbidden Wave 2C.2B marker: ${forbidden}.`);
    }
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/types.ts",
    ['| "2C.2";'],
    "Wave 2C.2B wave type",
  ],
  [
    "src/content/knowledge/no/registry.ts",
    ["pauseIArbeidsdagenArticle", "pause-i-arbeidsdagen"],
    "Wave 2C.2B registry binding",
  ],
  [
    "src/content/conditions/no/pages/stress.ts",
    ["Pause i arbeidsdagen", wave2c2bWorkdayPauseRequirements.route],
    "Wave 2C.2B stress-pathway bridge",
  ],
  [
    "src/app/(no)/no/kunnskap/[slug]/page.tsx",
    ["generateStaticParams", "getPublishedNorwegianKnowledgeArticles", "getNorwegianKnowledgeArticle", "NorwegianKnowledgeArticlePage"],
    "Norwegian dynamic article route",
  ],
  [
    "src/app/sitemap.ts",
    ["getPublishedNorwegianKnowledgeArticles", "norwegianKnowledgeEntries", "article.path"],
    "registry-backed Norwegian sitemap",
  ],
  [
    "public/llms.txt",
    ["[Pause i arbeidsdagen – hjelp kroppen å skifte gir](/no/kunnskap/pause-i-arbeidsdagen)"],
    "Wave 2C.2B llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["hvordan roe ned på jobb", wave2c2bWorkdayPauseRequirements.route, "Wave 2C.2B cannibalization watchlist"],
    "Wave 2C.2B query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    ["## Wave 2C.2B pilot measurement", wave2c2bWorkdayPauseRequirements.route, "workday-product-bridge", "workplace details"],
    "Wave 2C.2B measurement plan",
  ],
  [
    "docs/seo/wave2c2b-workday-pause-source-and-claims-lock.md",
    ["## Workplace boundary", "guarantees calm, focus, productivity or recovery", "must not stage, commit, push or delete unrelated untracked work"],
    "Wave 2C.2B source and claims lock",
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
for (const mediaPath of [
  "public/videos/neuvago/pause-i-arbeidsdagen.mp4",
  "public/videos/neuvago/pause-i-arbeidsdagen-no.vtt",
  "public/images/neuvago/pause-i-arbeidsdagen-poster.webp",
]) {
  if (!existsSync(path.join(repoRoot, mediaPath))) {
    errors.push(`${mediaPath} is missing for Wave 2C.2B media.`);
  }
}

// Wave 2C.2C publishes a registry-backed Norwegian recognition guide.
// It owns non-diagnostic signs intent while preserving regulation, calming,
// overstimulation, condition-pathway and product-specific evidence boundaries.
const wave2c2cSignsRequirements = {
  route: "/no/kunnskap/tegn-pa-dysregulert-nervesystem",
  articleFile: "src/content/knowledge/no/articles/tegn-pa-dysregulert-nervesystem.ts",
  sourceMarkers: [
    'slug: "tegn-pa-dysregulert-nervesystem"',
    'path: "/no/kunnskap/tegn-pa-dysregulert-nervesystem"',
    'wave: "2C.2"',
    'primaryKeyword: "tegn på dysregulert nervesystem"',
    'id: "gjenkjennelsessjekkliste"',
    'placement: "signs-product-bridge"',
    'englishEquivalent: "/learn/signs-of-a-dysregulated-nervous-system"',
    "ikke én avgrenset medisinsk diagnose",
    "Ikke bruk antall kryss som diagnose",
    "Legevakt og akutt hjelp",
    "Sterkere stimulering er ikke nødvendigvis bedre",
  ],
  forbiddenMarkers: [
    "Neuvago behandler autonom dysfunksjon",
    "Neuvago normaliserer HRV",
    "garanterer en fysiologisk reset",
    "beviser vagal dysfunksjon",
  ],
};
const wave2c2cSource = readIfExists(path.join(repoRoot, wave2c2cSignsRequirements.articleFile));
if (!wave2c2cSource) {
  errors.push(`${wave2c2cSignsRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c2cSignsRequirements.sourceMarkers) {
    if (!wave2c2cSource.includes(marker)) {
      errors.push(`${wave2c2cSignsRequirements.route} is missing Wave 2C.2C marker: ${marker}.`);
    }
  }
  for (const forbidden of wave2c2cSignsRequirements.forbiddenMarkers) {
    if (wave2c2cSource.includes(forbidden)) {
      errors.push(`${wave2c2cSignsRequirements.route} contains forbidden Wave 2C.2C marker: ${forbidden}.`);
    }
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/content/knowledge/no/registry.ts",
    ["tegnPaDysregulertNervesystemArticle", "tegn-pa-dysregulert-nervesystem"],
    "Wave 2C.2C registry binding",
  ],
  [
    "src/content/knowledge/no/articles/overstimulert.ts",
    ['href: "/no/kunnskap/tegn-pa-dysregulert-nervesystem"'],
    "Wave 2C.2C overstimulation bridge",
  ],
  [
    "src/app/(en)/learn/signs-of-a-dysregulated-nervous-system/page.tsx",
    ['"nb-NO": "/no/kunnskap/tegn-pa-dysregulert-nervesystem"', "Les denne siden på norsk"],
    "Wave 2C.2C reciprocal language discovery",
  ],
  [
    "public/llms.txt",
    ["Updated: 2026-09-01", "[Tegn på et dysregulert nervesystem](/no/kunnskap/tegn-pa-dysregulert-nervesystem)"],
    "Wave 2C.2C llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["tegn på dysregulert nervesystem", wave2c2cSignsRequirements.route, "Wave 2C.2C cannibalization watchlist"],
    "Wave 2C.2C query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    ["## Wave 2C.2C pilot measurement", wave2c2cSignsRequirements.route, "signs-product-bridge", "checklist selections"],
    "Wave 2C.2C measurement plan",
  ],
  [
    "docs/seo/wave2c2c-signs-dysregulation-source-and-claims-lock.md",
    ["## Recognition boundary", "Symptoms and lived experiences are non-specific", "checklist result", "116 117", "113", "must not stage, commit, push or delete unrelated untracked work"],
    "Wave 2C.2C source and claims lock",
  ],
]) {
  const source = readIfExists(path.join(repoRoot, relativePath));
  if (!source) {
    errors.push(`${label}: ${relativePath} is missing.`);
    continue;
  }
  for (const marker of markers) {
    if (!source.includes(marker)) errors.push(`${label} is missing marker: ${marker}.`);
  }
}

// Wave 2C.2D publishes NO-025 through the existing Norwegian condition registry.
// The page owns everyday bodily-unease lived experience without diagnosing anxiety,
// dysregulation or autonomic/vagal dysfunction, and all pathways remain untracked.
const wave2c2d2HverdagsuroRequirements = {
  route: "/no/tilstander/hverdagsuro",
  articleFile: "src/content/conditions/no/pages/hverdagsuro.ts",
  sourceMarkers: [
    'slug: "hverdagsuro"',
    'path: "/no/tilstander/hverdagsuro"',
    'status: "published"',
    'wave: "2C.2"',
    'order: 15',
    'primaryKeyword: "uro i kroppen nervesystemet"',
    'sourceReviewerId: "neuvago-redaksjonen"',
    'sitemapPriority: 0.78',
    'changeFrequency: "monthly"',
    'id: "hva-mener-vi-med-hverdagsuro"',
    'id: "slik-kan-uro-kjennes"',
    'id: "uro-stress-angst-og-overstimulering"',
    'id: "behold-flere-forklaringer-apne"',
    'id: "fire-sporsmal-for-du-velger-tiltak"',
    'id: "start-med-det-enkleste"',
    'id: "nar-bor-du-soke-hjelp"',
    'id: "legevakt-og-akutt-hjelp"',
    'id: "hvor-neuvago-eventuelt-passer-inn"',
    "Hverdagsuro er en beskrivelse – ikke en diagnose",
    "Uro betyr ikke automatisk angst eller panikklidelse",
    "Uro alene beviser ikke vagal eller autonom dysfunksjon",
    "Fire spørsmål gir mer informasjon enn en symptomscore",
    "Start med støtte som ikke krever en diagnose",
    "Ring 116 117",
    "Ring 113",
    "Neuvago kan eventuelt inngå som et valgfritt steg i en bredere velværerutine",
    "Sterkere stimulering er ikke nødvendigvis bedre",
    "Generell informasjon. Ikke medisinsk rådgivning, diagnose eller behandling.",
  ],
  forbiddenMarkers: [
    "Neuvago behandler angst",
    "Neuvago forebygger angst",
    "Neuvago lindrer angstlidelse",
    "Neuvago kurerer uro",
    "Neuvago resetter nervesystemet",
    "Neuvago reparerer nervesystemet",
    "Neuvago normaliserer kortisol",
    "Neuvago normaliserer HRV",
    "Neuvago øker vagal tone",
    "uro beviser vagal dysfunksjon",
    "uro beviser autonom dysfunksjon",
    "alle som kjenner uro har et dysregulert nervesystem",
    "ett bestemt antall symptomer gir en diagnose",
    "sterkere stimulering gir bedre effekt",
    "HRV avgjør om Neuvago passer for deg",
    "denne siden kan avgjøre om du har angst",
    "endre eller stopp legemidler på egen hånd",
    "akutte symptomer skal håndteres av kundeservice",
  ],
};
const wave2c2dSource = readIfExists(path.join(repoRoot, wave2c2d2HverdagsuroRequirements.articleFile));
if (!wave2c2dSource) {
  errors.push(`${wave2c2d2HverdagsuroRequirements.articleFile} is missing.`);
} else {
  for (const marker of wave2c2d2HverdagsuroRequirements.sourceMarkers) {
    if (!wave2c2dSource.includes(marker)) {
      errors.push(`${wave2c2d2HverdagsuroRequirements.route} is missing Wave 2C.2D marker: ${marker}.`);
    }
  }
  for (const forbidden of wave2c2d2HverdagsuroRequirements.forbiddenMarkers) {
    if (wave2c2dSource.toLocaleLowerCase("nb-NO").includes(forbidden.toLocaleLowerCase("nb-NO"))) {
      errors.push(`${wave2c2d2HverdagsuroRequirements.route} contains forbidden Wave 2C.2D marker: ${forbidden}.`);
    }
  }
  if ((wave2c2dSource.match(/type: "table"/g) ?? []).length !== 2) {
    errors.push(`${wave2c2d2HverdagsuroRequirements.route} must contain exactly two semantic tables.`);
  }
  if (wave2c2dSource.includes('/no/produkt') || wave2c2dSource.includes('englishEquivalent:')) {
    errors.push(`${wave2c2d2HverdagsuroRequirements.route} contains a forbidden direct Product link or English equivalent.`);
  }
  if (wave2c2dSource.includes('data-knowledge-action') || wave2c2dSource.includes('trackOrganicConversion')) {
    errors.push(`${wave2c2d2HverdagsuroRequirements.route} must keep every Wave 2C.2D.2 action untracked.`);
  }
}
for (const [relativePath, markers, label] of [
  [
    "src/content/conditions/no/registry.ts",
    ["hverdagsuroConditionPage", "@/content/conditions/no/pages/hverdagsuro"],
    "Wave 2C.2D condition registry binding",
  ],
  [
    "src/app/(no)/no/tilstander/page.tsx",
    ["Hverdagsuro og nervesystemet", wave2c2d2HverdagsuroRequirements.route, "Norsk hovedside"],
    "Wave 2C.2D condition hub card",
  ],
  [
    "src/content/conditions/no/pages/stress.ts",
    ["Hverdagsuro og et nervesystem som ikke roer seg", wave2c2d2HverdagsuroRequirements.route, "Les om hverdagsuro"],
    "Wave 2C.2D stress incoming link",
  ],
  [
    "public/llms.txt",
    ["Updated: 2026-09-01", "[Hverdagsuro og et nervesystem som ikke roer seg](/no/tilstander/hverdagsuro)"],
    "Wave 2C.2D llms entry",
  ],
  [
    "docs/seo-vns-cluster-target-queries.md",
    ["uro i kroppen nervesystemet", wave2c2d2HverdagsuroRequirements.route, "Wave 2C.2D cannibalization watchlist"],
    "Wave 2C.2D query map",
  ],
  [
    "docs/seo-measurement-plan.md",
    ["## Wave 2C.2D pilot measurement", wave2c2d2HverdagsuroRequirements.route, "All Wave 2C.2D.2 pathways remain editorial and untracked", "free text"],
    "Wave 2C.2D privacy measurement lock",
  ],
  [
    "docs/seo/wave2c2d-hverdagsuro-source-and-claims-lock.md",
    ["Hverdagsuro er en beskrivelse – ikke en diagnose", "No new analytics contract", "The 2D.2 pilot must not link directly to `/no/produkt`", "`/conditions/anxiety` is adjacent but not equivalent"],
    "Wave 2C.2D source and claims lock",
  ],
]) {
  const source = readIfExists(path.join(repoRoot, relativePath));
  if (!source) {
    errors.push(`${label}: ${relativePath} is missing.`);
    continue;
  }
  for (const marker of markers) {
    if (!source.includes(marker)) errors.push(`${label} is missing marker: ${marker}.`);
  }
}

// Wave 2C.2D.2 privacy recovery: the global conversion tracker classifies links
// by destination. NO-025 is a health-adjacent lived-experience page whose locked
// contract requires every action to remain editorial and untracked. The source
// path must therefore be excluded before the document-level click listener mounts.
const wave2c2d2PrivacySourceExclusion = {
  trackerFile: "src/components/analytics/OrganicConversionTracker.tsx",
  sourcePath: "/no/tilstander/hverdagsuro",
};
const wave2c2d2TrackerSource = readIfExists(
  path.join(repoRoot, wave2c2d2PrivacySourceExclusion.trackerFile),
);
if (!wave2c2d2TrackerSource) {
  errors.push(`${wave2c2d2PrivacySourceExclusion.trackerFile} is missing.`);
} else {
  const excludedSourceBlock =
    wave2c2d2TrackerSource.match(
      /const\s+EXCLUDED_SOURCE_PREFIXES\s*=\s*\[([\s\S]*?)\];/,
    )?.[1] ?? "";
  const exclusionCount = (
    excludedSourceBlock.match(/"\/no\/tilstander\/hverdagsuro"/g) ?? []
  ).length;
  if (exclusionCount !== 1) {
    errors.push(
      `${wave2c2d2PrivacySourceExclusion.sourcePath} ` +
        `must appear exactly once in EXCLUDED_SOURCE_PREFIXES; found ${exclusionCount}.`,
    );
  }
}

// WAVE 2D.2A.2 — bilingual stimulation pillars and VNS owner hardening
const wave2d2a2 = {
  noPillar: "src/content/knowledge/no/articles/hvordan-stimulere-vagusnerven.ts",
  enPillar: "src/app/(en)/learn/how-to-stimulate-the-vagus-nerve/page.tsx",
  noOwner: "src/content/knowledge/no/articles/vagusnervestimulering.ts",
  enOwner: "src/app/(en)/learn/vagus-nerve-stimulation/page.tsx",
  noHub: "src/app/(no)/no/kunnskap/page.tsx",
  enHub: "src/app/(en)/learn/page.tsx",
  futureRoutes: [
    "/no/kunnskap/resette-vagusnerven",
    "/learn/vagus-nerve-reset",
    "/no/kunnskap/pusteovelser-og-vagusnerven",
    "/learn/breathing-exercises-and-the-vagus-nerve",
    "/no/kunnskap/vagusnerven-og-massasje",
    "/learn/vagus-nerve-massage",
  ],
};
const wave2d2a2Sources = Object.fromEntries(
  Object.entries(wave2d2a2)
    .filter(([, value]) => typeof value === "string")
    .map(([key, value]) => [key, readIfExists(path.join(repoRoot, value))]),
);
for (const [key, source] of Object.entries(wave2d2a2Sources)) {
  if (!source) errors.push(`Wave 2D.2A.2 source missing: ${key}`);
}
if (!wave2d2a2Sources.noPillar.includes('englishEquivalent: "/learn/how-to-stimulate-the-vagus-nerve"')) {
  errors.push("Wave 2D.2A.2 Norwegian pillar lacks the English equivalent metadata field.");
}
if (!wave2d2a2Sources.noPillar.includes('href: "/learn/how-to-stimulate-the-vagus-nerve"')) {
  errors.push("Wave 2D.2A.2 Norwegian pillar lacks the visible English link.");
}
if (!wave2d2a2Sources.enPillar.includes('"nb-NO": "/no/kunnskap/hvordan-stimulere-vagusnerven"')) {
  errors.push("Wave 2D.2A.2 English pillar lacks nb-NO hreflang.");
}
if (!wave2d2a2Sources.enPillar.includes('href="/no/kunnskap/hvordan-stimulere-vagusnerven"')) {
  errors.push("Wave 2D.2A.2 English pillar lacks the visible Norwegian link.");
}
if ((wave2d2a2Sources.noOwner.match(/\/no\/kunnskap\/hvordan-stimulere-vagusnerven/g) ?? []).length !== 1) {
  errors.push("Norwegian VNS owner must link exactly once to the Norwegian methods pillar.");
}
if ((wave2d2a2Sources.enOwner.match(/\/learn\/how-to-stimulate-the-vagus-nerve/g) ?? []).length !== 1) {
  errors.push("English VNS owner must link exactly once to the English methods pillar.");
}
if ((wave2d2a2Sources.noHub.match(/\/no\/kunnskap\/hvordan-stimulere-vagusnerven/g) ?? []).length !== 1) {
  errors.push("Norwegian knowledge hub must expose exactly one direct methods-pillar destination.");
}
if ((wave2d2a2Sources.enHub.match(/\/learn\/how-to-stimulate-the-vagus-nerve/g) ?? []).length !== 1) {
  errors.push("English Learn hub must expose exactly one direct methods-pillar destination.");
}
for (const route of wave2d2a2.futureRoutes) {
  for (const [key, source] of Object.entries(wave2d2a2Sources)) {
    if (source.includes(route)) errors.push(`Unpublished child route ${route} is live-linked from ${key}.`);
  }
}
for (const [key, source] of [["noPillar", wave2d2a2Sources.noPillar], ["enPillar", wave2d2a2Sources.enPillar]]) {
  if (/href\s*[:=]\s*["']\/(?:no\/)?produkt["']/.test(source) || /href\s*[:=]\s*["']\/product["']/.test(source)) {
    errors.push(`Wave 2D.2A.2 ${key} must not link directly to Product.`);
  }
  if (/QAPage/.test(source)) errors.push(`Wave 2D.2A.2 ${key} must not use QAPage.`);
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
