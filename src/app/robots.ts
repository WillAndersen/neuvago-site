import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/account",
          "/account/",
          "/login",
          "/signup",
          "/verify-email",
          "/onboarding",
          "/open-app",
          "/continue",
          "/get-started",
          "/how-to-use",
        ],
      },
    ],
    sitemap: "https://neuvago.com/sitemap.xml",
    host: "https://neuvago.com",
  };
}
