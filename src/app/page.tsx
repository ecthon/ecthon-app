"use client";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";
import { Footer } from "@/components/footer";
import MarqueeDemo from "@/components/marquee-demo";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { ArrowRight02Icon } from "hugeicons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[600px] mx-auto text-base px-4 py-6 md:py-10 space-y-4">
      <div className="flex w-full justify-between">
        <Link href={"/"} className="flex items-center gap-1">
          <p className="font-bold text-lg py-1 px-2 rounded-md bg-zinc-900">
            EA
          </p>
        </Link>
        <ThemeSwitcher />
      </div>
      <header className="flex flex-col w-full">
        <h1 className="font-semibold text-xl md:text-2xl">Ecthon Almeida</h1>
        <p className="text-zinc-500">Design Engineer</p>
      </header>
      <div>
        <p className="text-zinc-500 text-sm md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          consequatur reiciendis enim fugiat nobis velit ut, amet expedita?
          Sequi excepturi nostrum eveniet quasi debitis. Est temporibus facere
          non a neque!
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold text-lg md:text-xl">Projetos</h2>
          <div className="group flex items-center gap-2">
            <button className="text-zinc-600 text-sm md:text-base">
              ver todos
            </button>
            <ArrowRight02Icon className="size-0 group-hover:size-4 md:group-hover:size-6 transition-all duration-300" />
          </div>
        </div>
        <CardHoverEffectDemo />
      </div>
      <MarqueeDemo />
      <Footer />
    </div>
  );
}
