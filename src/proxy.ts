
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { pathname } = request.nextUrl;

  const locale = pathname === "/no" || pathname.startsWith("/no/") ? "no" : "en";
  const isPrivatePath = pathname === "/admin" || pathname.startsWith("/admin/");

  requestHeaders.set("x-neuvago-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (isPrivatePath) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\..*).*)"],
};
