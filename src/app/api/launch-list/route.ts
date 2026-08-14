import { NextResponse } from "next/server";
import { launchConsentVersion } from "@/content/commerce";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const successPayload = {
  ok: true,
  message:
    "You're on the list. We'll let you know when Neuvago becomes available.",
};

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return (
      new URL(origin).origin ===
      new URL(request.url).origin
    );
  } catch {
    return false;
  }
}

function isValidEmail(value: string) {
  return (
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Request origin was not accepted.",
      },
      { status: 403 },
    );
  }

  const fetchSite =
    request.headers.get("sec-fetch-site");

  if (
    fetchSite &&
    !["same-origin", "same-site", "none"].includes(
      fetchSite,
    )
  ) {
    return NextResponse.json(
      {
        ok: false,
        error: "Request origin was not accepted.",
      },
      { status: 403 },
    );
  }

  const contentType =
    request.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request format.",
      },
      { status: 415 },
    );
  }

  const contentLength = Number(
    request.headers.get("content-length") || "0",
  );

  if (
    Number.isFinite(contentLength) &&
    contentLength > 4096
  ) {
    return NextResponse.json(
      {
        ok: false,
        error: "Request was too large.",
      },
      { status: 413 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request.",
      },
      { status: 400 },
    );
  }

  if (
    !payload ||
    typeof payload !== "object"
  ) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request.",
      },
      { status: 400 },
    );
  }

  const record = payload as Record<string, unknown>;
  const honeypot =
    typeof record.website === "string"
      ? record.website.trim()
      : "";

  if (honeypot) {
    return NextResponse.json(successPayload);
  }

  const email =
    typeof record.email === "string"
      ? record.email.trim().toLowerCase()
      : "";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Enter a valid email address.",
      },
      { status: 400 },
    );
  }

  if (record.consent !== true) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Consent is required to join the launch list.",
      },
      { status: 400 },
    );
  }

  const locale =
    record.locale === "no" ? "no" : "en";

  const allowedSources = new Set([
    "shop",
    "home",
    "header",
    "direct",
  ]);

  const source =
    typeof record.source === "string" &&
    allowedSources.has(record.source)
      ? record.source
      : "shop";

  const now = new Date().toISOString();

  const { error } = await supabaseAdmin
    .from("neuvago_launch_signups")
    .upsert(
      {
        email,
        locale,
        source,
        status: "subscribed",
        consented_at: now,
        consent_version: launchConsentVersion,
        updated_at: now,
      },
      {
        onConflict: "email",
        ignoreDuplicates: false,
      },
    );

  if (error) {
    console.error("Launch-list signup failed", {
      code: error.code,
      message: error.message,
    });

    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't save your details right now. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json(successPayload);
}
