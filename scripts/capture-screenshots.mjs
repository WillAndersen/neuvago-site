import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, "-")
  .replace("T", "-")
  .slice(0, 19);

const outputDir = path.join("exports", "screenshots", `neuvago-screenshots-${timestamp}`);

const routes = [
  { name: "home", path: "/" },
  { name: "product", path: "/product" },
  { name: "product-buy", path: "/product#buy", selector: "#buy", viewportOnly: true },
  { name: "app", path: "/app" },
  { name: "how-it-works", path: "/how-it-works" },
];

const viewports = [
  {
    name: "desktop",
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  },
  {
    name: "mobile",
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function canReach(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1200);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return response.status < 500;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function waitForServer(url, timeoutMs = 60000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await canReach(url)) {
      return;
    }

    await sleep(500);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function getDevCommand() {
  if (existsSync("pnpm-lock.yaml")) {
    return { command: "pnpm", args: ["dev"] };
  }

  return { command: "npm", args: ["run", "dev"] };
}

async function startDevServerIfNeeded() {
  if (await canReach(baseUrl)) {
    console.log(`Using existing dev server at ${baseUrl}`);
    return null;
  }

  const { command, args } = getDevCommand();

  console.log(`Starting dev server with ${command} ${args.join(" ")}...`);

  const child = spawn(command, args, {
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
      PORT: "3000",
    },
  });

  child.stdout.on("data", (data) => {
    const text = data.toString();
    if (text.includes("Ready") || text.includes("Local:") || text.includes("error")) {
      process.stdout.write(`[dev] ${text}`);
    }
  });

  child.stderr.on("data", (data) => {
    const text = data.toString();
    if (!text.includes("DeprecationWarning")) {
      process.stderr.write(`[dev] ${text}`);
    }
  });

  await waitForServer(baseUrl);

  return child;
}

async function addQaStyles(page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
      }
    `,
  });
}

async function waitForVisibleImages(page, timeoutMs = 3500) {
  await page.evaluate(async (timeoutMs) => {
    const timeout = new Promise((resolve) => setTimeout(resolve, timeoutMs));

    const work = async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }

      const images = Array.from(document.images).filter((image) => {
        const rect = image.getBoundingClientRect();

        return (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom >= -600 &&
          rect.top <= window.innerHeight + 600
        );
      });

      await Promise.all(
        images.map((image) => {
          if (image.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          });
        }),
      );
    };

    await Promise.race([work(), timeout]);
  }, timeoutMs);
}

async function settlePage(page, delayMs = 500) {
  await page.waitForLoadState("load", { timeout: 8000 }).catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {});
  await page.waitForTimeout(delayMs);
  await waitForVisibleImages(page);
}

async function autoScrollForLazyImages(page) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
  await waitForVisibleImages(page, 2500);

  for (let index = 0; index < 18; index += 1) {
    const atBottom = await page.evaluate(() => {
      const doc = document.documentElement;
      return window.scrollY + window.innerHeight >= doc.scrollHeight - 12;
    });

    if (atBottom) {
      break;
    }

    await page.evaluate(() => {
      window.scrollBy(0, Math.max(600, window.innerHeight * 0.8));
    });

    await page.waitForTimeout(180);
    await waitForVisibleImages(page, 2500);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

function urlFor(routePath) {
  return new URL(routePath, `${baseUrl}/`).toString();
}

function csvEscape(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

async function zipOutputFolder(folder) {
  const zipPath = `${folder}.zip`;
  const zipName = path.basename(zipPath);
  const folderName = path.basename(folder);
  const cwd = path.dirname(folder);

  return new Promise((resolve) => {
    const child = spawn("zip", ["-rq", zipName, folderName], {
      cwd,
      stdio: "ignore",
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve(zipPath);
      } else {
        resolve(null);
      }
    });

    child.on("error", () => resolve(null));
  });
}

async function main() {
  let playwright;

  try {
    playwright = await import("playwright");
  } catch {
    console.error("");
    console.error("Playwright is not installed.");
    console.error("Run:");
    console.error("  npm install -D playwright");
    console.error("  npx playwright install chromium");
    console.error("");
    process.exit(1);
  }

  await mkdir(outputDir, { recursive: true });

  const devServer = await startDevServerIfNeeded();
  const browser = await playwright.chromium.launch({ headless: true });

  const results = [];

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: {
          width: viewport.width,
          height: viewport.height,
        },
        deviceScaleFactor: viewport.deviceScaleFactor,
        isMobile: viewport.isMobile,
        hasTouch: viewport.hasTouch,
        colorScheme: "light",
        locale: "en-US",
      });

      const page = await context.newPage();
      page.setDefaultTimeout(30000);
      await page.emulateMedia({ reducedMotion: "reduce" });

      for (const route of routes) {
        const captureModes = route.viewportOnly
          ? [{ name: "viewport", fullPage: false }]
          : [
              { name: "fold", fullPage: false },
              { name: "full", fullPage: true },
            ];

        for (const mode of captureModes) {
          const targetUrl = urlFor(route.path);
          const fileName = `${route.name}-${viewport.name}-${mode.name}.jpg`;
          const filePath = path.join(outputDir, fileName);

          console.log(`Capturing ${fileName}`);

          const response = await page.goto(targetUrl, {
            waitUntil: "domcontentloaded",
            timeout: 30000,
          });

          const status = response?.status() ?? 0;

          if (status >= 400) {
            console.warn(`Warning: ${targetUrl} returned HTTP ${status}`);
          }

          await addQaStyles(page);
          await settlePage(page);

          if (route.selector) {
            await page.locator(route.selector).scrollIntoViewIfNeeded();
            await page.waitForTimeout(500);
            await waitForVisibleImages(page);
          } else if (mode.fullPage) {
            await autoScrollForLazyImages(page);
          } else {
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(300);
            await waitForVisibleImages(page);
          }

          await page.screenshot({
            path: filePath,
            type: "jpeg",
            quality: 90,
            fullPage: mode.fullPage,
            animations: "disabled",
            caret: "hide",
          });

          console.log(`Saved ${fileName}`);

          results.push({
            fileName,
            route: route.path,
            url: targetUrl,
            viewport: viewport.name,
            width: viewport.width,
            height: viewport.height,
            mode: mode.name,
            status,
          });
        }
      }

      await context.close();
    }
  } finally {
    await browser.close();

    if (devServer) {
      console.log("Stopping dev server...");
      devServer.kill("SIGINT");
    }
  }

  const manifest = [
    ["file", "route", "url", "viewport", "width", "height", "mode", "status"]
      .map(csvEscape)
      .join(","),
    ...results.map((result) =>
      [
        result.fileName,
        result.route,
        result.url,
        result.viewport,
        result.width,
        result.height,
        result.mode,
        result.status,
      ]
        .map(csvEscape)
        .join(","),
    ),
  ].join("\n");

  await writeFile(path.join(outputDir, "manifest.csv"), manifest);

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Neuvago screenshot review</title>
  <style>
    body {
      margin: 0;
      background: #f2eee8;
      color: #1f1f1c;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    main {
      padding: 32px;
    }

    h1 {
      margin: 0 0 8px;
      font-size: 32px;
      letter-spacing: -0.04em;
    }

    p {
      margin: 0 0 24px;
      color: #6b6257;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }

    article {
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.55);
      box-shadow: 0 18px 70px rgba(31, 31, 28, 0.08);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      background: white;
    }

    h2 {
      margin: 0;
      padding: 16px 18px 6px;
      font-size: 15px;
    }

    .meta {
      padding: 0 18px 18px;
      font-size: 13px;
      color: #756b60;
    }
  </style>
</head>
<body>
  <main>
    <h1>Neuvago screenshot review</h1>
    <p>Generated ${new Date().toLocaleString()}</p>

    <section class="grid">
      ${results
        .map(
          (result) => `<article>
        <h2>${result.fileName}</h2>
        <div class="meta">${result.route} · ${result.viewport} · ${result.mode} · ${result.width}×${result.height}</div>
        <img src="./${result.fileName}" alt="${result.fileName}" loading="lazy" />
      </article>`,
        )
        .join("\n")}
    </section>
  </main>
</body>
</html>
`;

  await writeFile(path.join(outputDir, "review.html"), html);

  const zipPath = await zipOutputFolder(outputDir);

  console.log("");
  console.log("Done.");
  console.log(`Screenshots folder: ${outputDir}`);
  console.log(`Review page: ${path.join(outputDir, "review.html")}`);

  if (zipPath) {
    console.log(`ZIP: ${zipPath}`);
  } else {
    console.log("ZIP was not created automatically. You can zip the folder manually.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
