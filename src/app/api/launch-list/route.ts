import { NextResponse } from "next/server";
import { launchSignupCopy, type LaunchLocale, type LaunchErrorCode } from "@/content/launch-signup";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function successPayload(locale: LaunchLocale, saved = false) {
  return {
    ok: true,
    message: launchSignupCopy[locale].confirmation,
    ...(saved ? { saved: true } : {}),
  };
}

function failure(status: number, code: LaunchErrorCode, locale: LaunchLocale = "en") {
  return NextResponse.json({
    ok: false,
    code,
    error: launchSignupCopy[locale].errors[code],
  }, { status });
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function isValidEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return failure(403, "REQUEST_REJECTED");
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) {
    return failure(403, "REQUEST_REJECTED");
  }
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return failure(415, "REQUEST_REJECTED");
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > 4096) {
    return failure(413, "REQUEST_REJECTED");
  }

  let payload: unknown;
  try { payload = await request.json(); }
  catch { return failure(400, "REQUEST_REJECTED"); }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return failure(400, "REQUEST_REJECTED");
  }
  const record = payload as Record<string, unknown>;
  const locale: LaunchLocale = record.locale === "no" ? "no" : "en";
  const honeypot = typeof record.website === "string" ? record.website.trim() : "";
  // Deliberately generic to the bot; no saved receipt and no database write.
  if (honeypot) return NextResponse.json(successPayload(locale));

  const email = typeof record.email === "string" ? record.email.trim().toLowerCase() : "";
  if (!isValidEmail(email)) return failure(400, "INVALID_EMAIL", locale);
  if (record.consent !== true) return failure(400, "CONSENT_REQUIRED", locale);

  const allowedSources = new Set(["shop", "home", "header", "direct"]);
  const source = typeof record.source === "string" && allowedSources.has(record.source)
    ? record.source : "shop";
  const now = new Date().toISOString();

  try {
    const { error } = await supabaseAdmin
      .from("neuvago_launch_signups")
      .upsert({
        email,
        locale,
        source,
        status: "subscribed",
        consented_at: now,
        consent_version: launchSignupCopy[locale].consentVersion,
        updated_at: now,
      }, {
        onConflict: "email",
        ignoreDuplicates: false,
      });
    if (error) {
      // Do not log database messages that could contain customer details.
      console.error("Launch-list signup failed");
      return failure(503, "SAVE_FAILED", locale);
    }
  } catch {
    console.error("Launch-list signup failed");
    return failure(503, "SAVE_FAILED", locale);
  }

  // Means a successful upsert response, not a newly unique subscriber or email delivery.
  return NextResponse.json(successPayload(locale, true));
}
