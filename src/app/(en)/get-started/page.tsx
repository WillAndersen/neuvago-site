import Link from "next/link"

export default function GetStartedPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Get started
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              Begin your Neuvago experience in a calm, simple way.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Neuvago is designed to help you build a steadier relationship with
              stress, recovery, sleep, and nervous system regulation. Create your
              account to begin, or sign in if you already have one.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Create account
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:px-8 lg:grid-cols-3 lg:px-12 lg:py-20">
          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              01
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#1f1f1c]">
              Create your account
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f5a52]">
              Set up your Neuvago account to access the personal side of the
              experience. This is where your app journey, preferences, and future
              device connection can come together.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              02
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#1f1f1c]">
              Start with the app
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f5a52]">
              The app is where Neuvago becomes personal. It is designed to guide
              daily regulation, support calming routines, and help you build a
              more consistent rhythm over time.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              03
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#1f1f1c]">
              Expand your system later
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f5a52]">
              Over time, your account can become the bridge between your app
              experience, guided routines, and the wider Neuvago ecosystem,
              including future device connection and support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              What to expect
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-4xl">
              A gentler way into nervous system support.
            </h2>
            <div className="mt-8 space-y-6 text-[#5f5a52]">
              <p className="text-base leading-8">
                Neuvago is not built around urgency, pressure, or performance
                obsession. The experience is intended to feel steady, intelligent,
                and usable in real life.
              </p>
              <p className="text-base leading-8">
                That means starting simply. Create your account, step into the
                app, and begin building a calmer relationship with stress,
                recovery, and regulation at your own pace.
              </p>
              <p className="text-base leading-8">
                You do not need to understand everything before you begin. The
                public site is here to help you explore the ideas, research, and
                context behind Neuvago. Your account is where the experience
                becomes yours.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-[#f2eee8] p-8 shadow-[0_14px_40px_rgba(0,0,0,0.03)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              Good to know
            </p>

            <div className="mt-6 space-y-6">
              <div className="border-b border-black/6 pb-6">
                <h3 className="text-lg font-semibold text-[#1f1f1c]">
                  New to Neuvago?
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  Start by creating an account. That gives you a clean entry point
                  into the app and future Neuvago services.
                </p>
              </div>

              <div className="border-b border-black/6 pb-6">
                <h3 className="text-lg font-semibold text-[#1f1f1c]">
                  Already have an account?
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  Sign in to continue where your experience begins to connect
                  across Neuvago.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1f1f1c]">
                  Want to explore first?
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  You can continue reading through Learn, Conditions, Research,
                  Product, and App before creating an account.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Create account
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Sign in
              </Link>
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-sm font-medium text-[#5f5a52] transition hover:text-[#1f1f1c]"
              >
                Explore the app
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Next step
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-4xl">
                Ready to begin?
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5f5a52]">
                Create your account to start your Neuvago experience, or sign in
                if you are already part of it.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Create account
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
