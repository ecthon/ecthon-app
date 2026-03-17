import { Experience } from "@/components/experience/experience";
import { Works } from "@/components/works/works";
import { Location06Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center w-3xl h-screen mx-auto">
      <header className="flex w-full h-12 py-8 justify-between items-center border-b border-zinc-900">
        <Link href="/">
          <h1 className="text-sm font-semibold text-white px-4 py-2 hover:bg-zinc-900 font-sans transition-colors duration-300 rounded-lg">ecthon.dev</h1>
        </Link>
        <div>
          <div className="group flex h-auto px-4 py-2 items-center justify-center hover:bg-zinc-900 transition-colors duration-300 rounded-lg gap-2">
            <HugeiconsIcon icon={Location06Icon} size={16} color="currentColor" strokeWidth={2} className="text-zinc-200 transition-colors duration-300" />
            <p className="text-[11px] font-semibold text-zinc-200 font-sans transition-colors duration-300">Manaus/AM, Brazil</p>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-4 my-20">
        <div className="flex flex-col gap-2">
          <p className="text-5xl w-2xs font-semibold text-white font-sans">Integrando</p>
          <p className="text-5xl font-semibold text-white font-sans">design e código.</p>
        </div>
        <p className="text-lg text-white/60 font-sans">Criando interfaces que equilibram usabilidade, performance e estética.</p>
      </div>
      <Works />
      <Experience />
    </main>
  );
}
