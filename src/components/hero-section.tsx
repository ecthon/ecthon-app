"use client";

import { ArrowUpRight02Icon } from "hugeicons-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

export function HeroSection() {
  return (
    <main className="flex flex-col w-full max-sm:h-[400px] h-[500px] space-y-8 justify-center">
      <div className="group cursor-pointer flex items-center justify-center gap-2 border rounded-full px-2 py-0.5 font-semibold bg-zinc-900 w-[fit-content]">
        <p>👋</p>
        <p className="lg:text-[11px] text-zinc-500 flex items-center gap-2 space-x-1 max-sm:space-x-0 text-xs sm:text-[12px] md:text-[12px]">
          Disponível para projetos
        </p>
        <Separator orientation="vertical" />
        <p className="group-hover:text-zinc-300 text-[12px] text-zinc-400 lg:text-[11px] transition-colors duration-300 ease-in-out">
          Freelancer
        </p>
      </div>
      <div className="group flex flex-col text-4xl md:text-6xl lg:text-7xl font-bold w-full lg:w-[600px]">
        <p>Desenvolvedor</p>
        <div className="flex items-center gap-2">
          <p>Front-End</p>
          <span className="text-zinc-600 transition-transform duration-300 ease-in-out group-hover:-rotate-12">
            e
          </span>
        </div>
        <p>UI Designer.</p>
      </div>
      <div className="flex max-sm:flex-col w-full gap-2 max-sm:gap-1 mt-6">
        <Link
          href="https://github.com/ecthon"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-2 rounded-full"
        >
          <div className="flex items-center justify-center p-0.5 bg-zinc-900 rounded-full">
            <ArrowUpRight02Icon className="w-4 h-4 text-white" />
          </div>
          <div className="flex text-xs sm:text-sm md:text-base font-semibold">
            <p className="text-zinc-600">github.com/</p>
            <span className="group-hover:text-white text-zinc-300">ecthon</span>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ecthon/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-2 rounded-full"
        >
          <div className="flex items-center justify-center p-0.5 bg-zinc-900 rounded-full">
            <ArrowUpRight02Icon className="w-4 h-4 text-white" />
          </div>
          <div className="flex text-xs sm:text-sm md:text-base font-semibold">
            <p className="text-zinc-600">linkedin.com/in/</p>
            <span className="group-hover:text-white text-zinc-300">ecthon</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
