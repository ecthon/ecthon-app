"use client";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full px-4 md:px-6 lg:w-[1120px] mx-auto">
        <Header />
        <main className="flex flex-col w-full h-[400px] gap-6 align-middle justify-center">
          <div className="flex items-center space-x-4 border rounded-full px-2 py-0.5 bg-zinc-900 w-[fit-content]">
            <p className="font-semibold text-white flex items-center gap-2 space-x-1 max-sm:space-x-0 text-xs sm:text-sm md:text-base">
              <span className="font-thin text-xs">👋</span>
              Disponível para projetos
              <span>•</span>
              <span className="text-zinc-400">Freelancer</span>
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold w-full lg:w-[600px]">
            Desenvolvedor Front-End e UI Design.
          </h1>
        </main>
      </div>
    </div>
  );
}
