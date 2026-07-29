import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const base = new URL(baseUrl);
const expectedOrigin =
  process.env.EXPECTED_ORIGIN ||
  (base.hostname === "localhost" || base.hostname === "127.0.0.1"
    ? "https://neuvago.com"
    : base.origin);

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, "-")
  .replace("T", "-")
  .slice(0, 19);

const outDir = path.join("exports", "indexing-audit");
const reportPath = path.join(outDir, `indexing-readiness-${timestamp}.md`);
const csvPath = path.join(outDir, `indexing-readiness-${timestamp}.csv`);

const essentialPaths = [
  "/",
  "/product",
  "/app",
  "/how-it-works",
  "/support",
  "/about",
  "/legal",
  "/legal/intended-use",
  "/legal/privacy-policy",
  "/legal/terms-of-service",

  "/no",
  "/no/produkt",
  "/no/app",
  "/no/slik-fungerer-det",
  "/no/support",
  "/no/om-oss",
  "/no/forskning",
  "/no/tilstander",
  "/no/kunnskap",
  "/no/juridisk",
  "/no/juridisk/tiltenkt-bruk",
  "/no/juridisk/personvern",
  "/no/juridisk/vilkar",
  "/no/juridisk/medisinsk-ansvarsfraskrivelse",
  "/no/juridisk/regulatorisk",
  "/no/juridisk/tillit-og-sikkerhet",
  "/no/juridisk/ce-samsvar",
  "/no/juridisk/fda-status",
];

const privatePaths = [
  "/admin",
  "/admin/pages",
  "/dashboard",
];

const blockingPlaceholderPatterns = [
  /\[Sett inn/gi,
  /\[sett inn/gi,
  /Snart ok/gi,
  /Skal fylles ut/gi,
  /TODO/gi,
  /FIXME/gi,
  /placeholder/gi,
  /lorem ipsum/gi,
];

const warningPlaceholderPatterns = [
  /under ferdigstillelse/gi,
  /ikke endelig spesifisert/gi,
  /oppdateres når/gi,
];

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function toBaseUrl(urlOrPath) {
  const url = new URL(urlOrPath, `${baseUrl}/`);
  return new URL(`${url.pathname}${url.search}`, `${baseUrl}/`).toString();
}

function toExpectedCanonical(urlOrPath) {
  const url = new URL(urlOrPath, `${baseUrl}/`);
  return `${expectedOrigin}${url.pathname === "/" ? "/" : url.pathname}`;
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "NeuvagoIndexingAudit/1.0",
        accept: "text/html,application/xhtml+xml,application/xml,text/xml,*/*",
      },
    });

    const text = await response.text();

    return {
      ok: true,
      status: response.status,
      finalUrl: response.url,
      headers: response.headers,
      text,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      finalUrl: url,
      headers: new Headers(),
      text: "",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function getAttr(tag, attr) {
  const match = tag.match(new RegExp(`${attr}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match?.[1]?.trim() || "";
}

function stripTags(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHtmlData(html) {
  const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");

  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  const linkTags = html.match(/<link\b[^>]*>/gi) || [];
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    stripTags(m[1]),
  );

  const description =
    metaTags
      .map((tag) => {
        const name = getAttr(tag, "name").toLowerCase();
        const property = getAttr(tag, "property").toLowerCase();

        if (name === "description" || property === "og:description") {
          return getAttr(tag, "content");
        }

        return "";
      })
      .find(Boolean) || "";

  const robots = metaTags
    .filter((tag) => {
      const name = getAttr(tag, "name").toLowerCase();
      return name === "robots" || name === "googlebot";
    })
    .map((tag) => getAttr(tag, "content"))
    .filter(Boolean)
    .join(" | ");

  const canonical =
    linkTags
      .map((tag) => {
        const rel = getAttr(tag, "rel").toLowerCase();
        if (rel.split(/\s+/).includes("canonical")) {
          return getAttr(tag, "href");
        }

        return "";
      })
      .find(Boolean) || "";

  const alternates = linkTags
    .map((tag) => {
      const rel = getAttr(tag, "rel").toLowerCase();

      if (!rel.split(/\s+/).includes("alternate")) {
        return null;
      }

      const hreflang = getAttr(tag, "hreflang");
      const href = getAttr(tag, "href");

      if (!hreflang || !href) {
        return null;
      }

      return { hreflang, href };
    })
    .filter(Boolean);

  const htmlLang = html.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)?.[1] || "";

  const bodyText = stripTags(html);

  return {
    title,
    description,
    robots,
    canonical,
    alternates,
    htmlLang,
    h1s: h1Matches,
    bodyText,
  };
}

async function discoverSitemapUrls() {
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const seen = new Set();
  const pageUrls = [];

  async function readSitemap(url, depth = 0) {
    if (seen.has(url) || depth > 3) {
      return;
    }

    seen.add(url);

    const result = await fetchText(url);

    if (!result.ok || result.status >= 400) {
      return;
    }

    const locs = [...result.text.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((m) =>
      m[1].trim(),
    );

    for (const loc of locs) {
      if (/\.xml(\?|$)/i.test(loc)) {
        await readSitemap(loc, depth + 1);
      } else {
        pageUrls.push(toBaseUrl(loc));
      }
    }
  }

  await readSitemap(sitemapUrl);

  return unique(pageUrls);
}

async function auditRobotsTxt() {
  const url = `${baseUrl}/robots.txt`;
  const result = await fetchText(url);
  const issues = [];
  const warnings = [];

  if (!result.ok || result.status >= 400) {
    warnings.push("robots.txt is missing or not reachable. This is not always fatal, but sitemap discovery may be weaker.");
    return { url, status: result.status, issues, warnings, text: result.text };
  }

  if (/Disallow:\s*\/\s*$/im.test(result.text)) {
    issues.push("robots.txt contains `Disallow: /`. Verify that Googlebot is not blocked globally.");
  }

  if (!/Sitemap:\s*/i.test(result.text)) {
    warnings.push("robots.txt does not include a Sitemap line.");
  }

  return { url, status: result.status, issues, warnings, text: result.text };
}

function evaluatePage({ auditUrl, status, finalUrl, headers, html }) {
  const issues = [];
  const warnings = [];
  const data = extractHtmlData(html);
  const expectedCanonical = toExpectedCanonical(finalUrl);
  const finalPath = new URL(finalUrl).pathname;
  const xRobots = headers.get("x-robots-tag") || "";
  const contentType = headers.get("content-type") || "";

  if (status !== 200) {
    issues.push(`Expected HTTP 200, got ${status}.`);
  }

  if (!contentType.includes("text/html")) {
    warnings.push(`Content-Type is not clearly text/html: ${contentType || "missing"}.`);
  }

  if (/noindex|none/i.test(data.robots)) {
    issues.push(`Meta robots blocks indexing: ${data.robots}`);
  }

  if (/noindex|none/i.test(xRobots)) {
    issues.push(`X-Robots-Tag blocks indexing: ${xRobots}`);
  }

  if (!data.title) {
    issues.push("Missing <title>.");
  } else {
    if (data.title.length < 18) warnings.push(`Title is short: ${data.title.length} chars.`);
    if (data.title.length > 75) warnings.push(`Title is long: ${data.title.length} chars.`);
  }

  if (!data.description) {
    warnings.push("Missing meta description.");
  } else {
    if (data.description.length < 70) warnings.push(`Meta description is short: ${data.description.length} chars.`);
    if (data.description.length > 180) warnings.push(`Meta description is long: ${data.description.length} chars.`);
  }

  if (data.h1s.length === 0) {
    issues.push("Missing H1.");
  }

  if (data.h1s.length > 1) {
    warnings.push(`Multiple H1s found: ${data.h1s.length}.`);
  }

  if (!data.canonical) {
    issues.push("Missing canonical link.");
  } else {
    let canonicalUrl;

    try {
      canonicalUrl = new URL(data.canonical);
    } catch {
      issues.push(`Canonical is not an absolute valid URL: ${data.canonical}`);
    }

    if (canonicalUrl) {
      if (canonicalUrl.origin !== expectedOrigin) {
        warnings.push(`Canonical origin is ${canonicalUrl.origin}, expected ${expectedOrigin}.`);
      }

      if (canonicalUrl.pathname !== new URL(expectedCanonical).pathname) {
        warnings.push(`Canonical path is ${canonicalUrl.pathname}, expected ${new URL(expectedCanonical).pathname}.`);
      }

      if (finalPath.startsWith("/no") && !canonicalUrl.pathname.startsWith("/no")) {
        issues.push("Norwegian page canonical does not point to Norwegian URL.");
      }
    }
  }

  if (!data.htmlLang) {
    warnings.push("Missing <html lang>.");
  } else if (finalPath.startsWith("/no") && !/^(no|nb)/i.test(data.htmlLang)) {
    warnings.push(`Norwegian page has unexpected html lang: ${data.htmlLang}.`);
  } else if (!finalPath.startsWith("/no") && !/^en/i.test(data.htmlLang)) {
    warnings.push(`English/global page has unexpected html lang: ${data.htmlLang}.`);
  }

  const alternateSummary = data.alternates.map((a) => `${a.hreflang}:${a.href}`).join(" | ");

  if ((finalPath === "/" || finalPath.startsWith("/no")) && data.alternates.length === 0) {
    warnings.push("No hreflang alternates found.");
  }

  for (const pattern of blockingPlaceholderPatterns) {
    const match = data.bodyText.match(pattern);
    if (match) {
      issues.push(`Blocking placeholder-like text found: ${unique(match).slice(0, 3).join(", ")}`);
    }
  }

  for (const pattern of warningPlaceholderPatterns) {
    const match = data.bodyText.match(pattern);
    if (match) {
      warnings.push(`Launch/pending wording found: ${unique(match).slice(0, 3).join(", ")}`);
    }
  }

  if (data.bodyText.length < 500) {
    warnings.push(`Page body text appears thin: ${data.bodyText.length} chars.`);
  }

  return {
    auditUrl,
    status,
    finalUrl,
    title: data.title,
    description: data.description,
    h1: data.h1s[0] || "",
    htmlLang: data.htmlLang,
    canonical: data.canonical,
    robots: data.robots,
    xRobots,
    alternates: alternateSummary,
    issues,
    warnings,
  };
}

async function auditPrivatePath(pathname) {
  const url = toBaseUrl(pathname);
  const result = await fetchText(url);
  const issues = [];
  const warnings = [];

  if (!result.ok) {
    warnings.push(`Could not fetch private path: ${result.error || "unknown error"}`);
    return { path: pathname, url, status: result.status, finalUrl: result.finalUrl, issues, warnings };
  }

  const html = result.text || "";
  const data = extractHtmlData(html);
  const xRobots = result.headers.get("x-robots-tag") || "";
  const finalPath = new URL(result.finalUrl).pathname;

  const protectedByStatus = [401, 403, 404].includes(result.status);
  const redirectedAway = finalPath !== pathname;
  const blockedByRobots = /noindex|none/i.test(data.robots) || /noindex|none/i.test(xRobots);

  if (result.status === 200 && !redirectedAway && !blockedByRobots) {
    issues.push("Private/admin path returns 200 and does not appear to be noindexed or protected.");
  }

  if (!protectedByStatus && !redirectedAway && !blockedByRobots) {
    warnings.push("Consider using auth, 401/403, or noindex for private/admin routes.");
  }

  return { path: pathname, url, status: result.status, finalUrl: result.finalUrl, issues, warnings };
}

function csvEscape(value) {
  return `"${String(value || "").replace(/"/g, '""')}"`;
}

function severitySymbol(result) {
  if (result.issues.length) return "❌";
  if (result.warnings.length) return "⚠️";
  return "✅";
}

async function main() {
  await mkdir(outDir, { recursive: true });

  console.log(`Running indexing readiness audit`);
  console.log(`BASE_URL: ${baseUrl}`);
  console.log(`EXPECTED_ORIGIN: ${expectedOrigin}`);
  console.log("");

  const robots = await auditRobotsTxt();
  const sitemapUrls = await discoverSitemapUrls();
  const urls = unique([
    ...essentialPaths.map(toBaseUrl),
    ...sitemapUrls,
  ]);

  const results = [];

  for (const url of urls) {
    console.log(`Auditing ${url}`);

    const result = await fetchText(url);

    if (!result.ok) {
      results.push({
        auditUrl: url,
        status: 0,
        finalUrl: url,
        title: "",
        description: "",
        h1: "",
        htmlLang: "",
        canonical: "",
        robots: "",
        xRobots: "",
        alternates: "",
        issues: [`Fetch failed: ${result.error}`],
        warnings: [],
      });

      continue;
    }

    results.push(
      evaluatePage({
        auditUrl: url,
        status: result.status,
        finalUrl: result.finalUrl,
        headers: result.headers,
        html: result.text,
      }),
    );
  }

  const privateResults = [];

  for (const pathname of privatePaths) {
    console.log(`Checking private path ${pathname}`);
    privateResults.push(await auditPrivatePath(pathname));
  }

  const issueCount =
    robots.issues.length +
    results.reduce((sum, result) => sum + result.issues.length, 0) +
    privateResults.reduce((sum, result) => sum + result.issues.length, 0);

  const warningCount =
    robots.warnings.length +
    results.reduce((sum, result) => sum + result.warnings.length, 0) +
    privateResults.reduce((sum, result) => sum + result.warnings.length, 0);

  const csv = [
    [
      "severity",
      "url",
      "status",
      "finalUrl",
      "title",
      "description",
      "h1",
      "htmlLang",
      "canonical",
      "robots",
      "xRobots",
      "alternates",
      "issues",
      "warnings",
    ].map(csvEscape).join(","),
    ...results.map((result) =>
      [
        severitySymbol(result),
        result.auditUrl,
        result.status,
        result.finalUrl,
        result.title,
        result.description,
        result.h1,
        result.htmlLang,
        result.canonical,
        result.robots,
        result.xRobots,
        result.alternates,
        result.issues.join(" | "),
        result.warnings.join(" | "),
      ].map(csvEscape).join(","),
    ),
  ].join("\n");

  await writeFile(csvPath, csv);

  const report = `# Neuvago indexing readiness audit

Generated: ${new Date().toISOString()}

BASE_URL: \`${baseUrl}\`  
EXPECTED_ORIGIN: \`${expectedOrigin}\`

## Summary

- URLs audited: ${results.length}
- Blocking issues: ${issueCount}
- Warnings: ${warningCount}
- Sitemap URLs discovered: ${sitemapUrls.length}
- Report CSV: \`${csvPath}\`

${issueCount === 0 ? "✅ No blocking issues found." : "❌ Blocking issues found. Do not submit broadly for indexing yet."}

## robots.txt

URL: ${robots.url}  
Status: ${robots.status}

${robots.issues.length ? `### Issues\n${robots.issues.map((i) => `- ${i}`).join("\n")}` : "No robots.txt blocking issues found."}

${robots.warnings.length ? `### Warnings\n${robots.warnings.map((i) => `- ${i}`).join("\n")}` : ""}

## Page results

${results
  .map(
    (result) => `### ${severitySymbol(result)} ${result.auditUrl}

Status: ${result.status}  
Final URL: ${result.finalUrl}  
Title: ${result.title || "_missing_"}  
H1: ${result.h1 || "_missing_"}  
Lang: ${result.htmlLang || "_missing_"}  
Canonical: ${result.canonical || "_missing_"}  
Meta robots: ${result.robots || "_none_"}  
X-Robots-Tag: ${result.xRobots || "_none_"}  
Hreflang: ${result.alternates || "_none_"}

${result.issues.length ? `Issues:\n${result.issues.map((i) => `- ${i}`).join("\n")}` : "Issues: none"}

${result.warnings.length ? `Warnings:\n${result.warnings.map((i) => `- ${i}`).join("\n")}` : "Warnings: none"}
`,
  )
  .join("\n")}

## Private/admin route checks

${privateResults
  .map(
    (result) => `### ${result.issues.length ? "❌" : result.warnings.length ? "⚠️" : "✅"} ${result.path}

URL: ${result.url}  
Status: ${result.status}  
Final URL: ${result.finalUrl}

${result.issues.length ? `Issues:\n${result.issues.map((i) => `- ${i}`).join("\n")}` : "Issues: none"}

${result.warnings.length ? `Warnings:\n${result.warnings.map((i) => `- ${i}`).join("\n")}` : "Warnings: none"}
`,
  )
  .join("\n")}
`;

  await writeFile(reportPath, report);

  console.log("");
  console.log("Done.");
  console.log(`Report: ${reportPath}`);
  console.log(`CSV: ${csvPath}`);
  console.log("");

  if (issueCount > 0) {
    console.log(`❌ ${issueCount} blocking issue(s), ${warningCount} warning(s).`);
    process.exitCode = 1;
  } else {
    console.log(`✅ No blocking issues. ${warningCount} warning(s).`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
