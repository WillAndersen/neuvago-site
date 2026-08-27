import { NextResponse, type NextRequest } from "next/server";

import {
  getLocaleDefinition,
  getLocaleFromPathname,
} from "@/i18n/locale-registry";

const privatePathPrefixes = [
  "/admin",
  "/account",
  "/login",
  "/signup",
  "/verify-email",
  "/onboarding",
  "/open-app",
  "/continue",
] as const;

function matchesPathPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { pathname } = request.nextUrl;
  const locale = getLocaleFromPathname(pathname);
  const definition = getLocaleDefinition(locale);
  const isPrivatePath = privatePathPrefixes.some((prefix) =>
    matchesPathPrefix(pathname, prefix),
  );

  requestHeaders.set("x-neuvago-locale", locale);
  requestHeaders.set("x-neuvago-language-tag", definition.languageTag);
  requestHeaders.set("x-neuvago-market", definition.market);
  requestHeaders.set("x-neuvago-locale-status", definition.status);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Language", definition.languageTag);

  if (isPrivatePath || !definition.indexable) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
