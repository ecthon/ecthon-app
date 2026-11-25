import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SocialDock } from "../components/social-dock";

export default function Home() {
  return (
    <>
      <main className="relative isolate flex w-full flex-1 items-center justify-center overflow-hidden bg-[#f7f6f3] px-4 py-16 font-sans sm:px-6">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-lime-200/40 blur-3xl sm:size-96" />
          <div className="absolute -bottom-28 -right-20 size-72 rounded-full bg-lime-100/80 blur-3xl sm:size-96" />
        </div>

        <section
          aria-labelledby="hero-title"
          className="relative flex w-full max-w-4xl flex-col items-center text-center"
        >
          <header className="space-y-5 sm:space-y-7">
            <h1
              id="hero-title"
              className="text-[clamp(2.4rem,8vw,6rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-zinc-950"
            >
              ecthon <span className="text-lime-700 font-light">almeida</span>
            </h1>
            <p className="flex items-center justify-center gap-3 text-lg font-medium tracking-tight sm:text-2xl">
              <span className="h-px w-8 bg-lime-600" aria-hidden="true" />
              <span>
                <span className="text-zinc-900">Software</span>{" "}
                <span className="text-zinc-400">Developer</span>
              </span>
              <span className="h-px w-8 bg-lime-600" aria-hidden="true" />
            </p>
          </header>

          <a
            href="mailto:"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-[14px] bg-lime-500 px-6 text-sm font-semibold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-lime-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 sm:mt-10 sm:h-14"
          >
            <span>vamos conversar</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </a>
        </section>
      </main>

      <footer className="border-t border-zinc-200/70 bg-[#f7f6f3] px-4 py-3 sm:py-4">
        <div className="mx-auto flex max-w-5xl justify-center">
          <SocialDock />
        </div>
      </footer>
    </>
  );
}
