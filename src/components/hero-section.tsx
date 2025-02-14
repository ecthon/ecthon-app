'use client'

import { Separator } from "./ui/separator"

export function HeroSection() {
    return (
        <main className="flex flex-col w-full h-[400px] gap-6 justify-center">
            <div className="group cursor-pointer flex items-center justify-center gap-2 border rounded-full px-2 py-0.5 font-semibold bg-zinc-900 w-[fit-content]">
                <p>👋</p>
                <p className="lg:text-[11px] text-zinc-500 flex items-center gap-2 space-x-1 max-sm:space-x-0 text-xs sm:text-sm md:text-base">
                    Disponível para projetos
                </p>
                <Separator orientation="vertical" />
                <p className="group-hover:text-zinc-300 text-zinc-400 lg:text-[11px] transition-colors duration-300 ease-in-out">
                    Freelancer
                </p>
            </div>
            <div className="group flex flex-col text-4xl md:text-6xl lg:text-7xl font-bold w-full lg:w-[600px]">
                <p>Desenvolvedor</p>
                <div className="flex items-center gap-2">
                    <p>Front-End</p>
                    <span className="text-zinc-600 transition-transform duration-300 ease-in-out group-hover:-rotate-12">e</span>
                </div>
                <p>UI Designer.</p>
            </div>
        </main>
    )
}