"use client";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer";
import { Works } from "@/components/works/works";
import { ArrowExpandIcon, ArrowShrinkIcon, ArrowUpRight, ArrowUpRightIcon, Location06Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  return (
    <main className="flex-col items-center justify-center w-full max-w-3xl px-6 md:px-0 min-h-screen mx-auto">
      <header className="flex w-full py-8 justify-between items-center border-b border-zinc-900">
        <Link href="/">
          <h1 className="text-sm font-semibold text-white px-4 py-2 hover:bg-zinc-900 font-sans transition-colors duration-300 rounded-lg -ml-4 md:ml-0">ecthon.dev</h1>
        </Link>
        <div>
          <button onClick={toggleFullscreen} className="group flex h-auto px-4 py-2 items-center justify-center hover:bg-zinc-900 transition-colors duration-300 rounded-lg gap-2 -mr-4 md:mr-0 cursor-pointer">
            <p className="text-[11px] font-semibold text-zinc-200 font-sans transition-colors duration-300">{isFullscreen ? "Sair do modo tela cheia" : "Modo tela cheia"}</p>
            <HugeiconsIcon icon={isFullscreen ? ArrowShrinkIcon : ArrowExpandIcon} size={16} color="currentColor" strokeWidth={2} className="text-zinc-200 transition-colors duration-300" />
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-4 my-12 md:my-20">
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-4xl md:text-5xl md:w-2xs font-semibold text-white font-sans leading-tight">Integrando</p>
          <p className="text-4xl md:text-5xl font-semibold text-white font-sans leading-tight">design e código.</p>
        </div>
        <p className="text-base md:text-lg text-white/60 font-sans max-w-[280px] md:max-w-none">Criando interfaces que equilibram usabilidade, performance e estética.</p>
      </div>
      <Works />
      <Experience />
      <Footer />
    </main>
  );
}
