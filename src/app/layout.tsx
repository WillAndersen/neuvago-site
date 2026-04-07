import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://neuvago.com"),
  title: {
    default: "Neuvago | Calm support for stress, sleep, and recovery",
    template: "%s | Neuvago",
  },
  description:
    "Neuvago combines a thoughtfully designed device, guided app experiences, and research-informed learning to support stress, sleep, recovery, and nervous system regulation.",
  keywords: [
    "Neuvago",
    "vagus nerve",
    "nervous system regulation",
    "vagal tone",
    "stress support",
    "sleep support",
    "recovery",
    "calm technology",
  ],
  openGraph: {
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
    url: "https://neuvago.com",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f4ef] text-[#1f1f1c] antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
