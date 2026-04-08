"use client"

import Link from "next/link"

import { useAuthUser } from "@/hooks/useAuthUser"

const benefits = [
  {
    title: "Feel calmer",
    description:
      "Support moments of calm in a way that feels gentle, practical, and easier to return to.",
  },
  {
    title: "Unwind more easily",
    description:
      "Create more supportive transitions around stress, rest, and winding down at the end of the day.",
  },
  {
    title: "Support recovery",
    description:
      "Build better awareness around what helps your body and mind feel more supported over time.",
  },
  {
    title: "Notice patterns",
    description:
      "Check-ins and progress can help make your daily rhythms feel clearer and more understandable.",
  },
  {
    title: "Build a steadier rhythm",
    description:
      "Turn isolated moments into a calmer routine that fits more naturally into everyday life.",
  },
  {
    title: "Stay connected to how you feel",
    description:
      "Use the app and device experience as a simple way to stay more aware of your nervous system needs.",
  },
]

export function HomeBenefits() {
  const { isLoading, isSignedIn } = useAuthUser()

  return (
    <section className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Benefits
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Designed to support how people want to feel in daily life
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Neuvago is not about intensity. It is about creating calmer,
            steadier, and more supportive experiences around stress, sleep, and
            recovery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
            >
              <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                {benefit.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/product"
            className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore product
          </Link>

          {isLoading ? (
            <Link
              href="/app"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore app
            </Link>
          ) : isSignedIn ? (
            <Link
              href="/continue"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Continue
            </Link>
          ) : (
            <Link
              href="/app"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore app
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
