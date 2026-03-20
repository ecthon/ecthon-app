"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { useTime } from "../hooks/use-time";
import { ArrowRight02Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { useTemperature } from "../hooks/use-temperature";
import Link from "next/link";

export function Hero() {
    const { hours, minutes, seconds } = useTime();
    const { temperature } = useTemperature();
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-4 mt-8 mb-4 md:mt-20 md:mb-12">
                <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-4xl md:text-5xl md:w-2xs font-semibold text-zinc-900 dark:text-white font-sans leading-tight">Integrando</p>
                    <p className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white font-sans leading-tight">código e design.</p>
                </div>
                <p className="text-base md:text-lg mt-2 text-zinc-500 dark:text-white/60 font-sans max-w-[280px] md:max-w-none">Criando interfaces que equilibram usabilidade, performance e estética.</p>
            </div>

            {/* Ajuste de Responsividade: flex-col no mobile, flex-row no desktop */}
            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-10 md:gap-0">
                
                {/* Botão Call to Action */}
                <Link href="#" className="group flex items-center justify-between gap-6 pl-6 pr-1.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm md:shadow-none text-white text-sm md:text-base font-semibold font-sans transition-all duration-300 w-full sm:w-fit md:mb-8">
                    <span>Enviar mensagem</span>
                    {/* Círculo do Ícone do Botão perfeitamente adaptado para Light e Dark */}
                    <div className="flex rounded-full bg-white dark:bg-zinc-900 items-center justify-center p-2.5 transition-transform duration-300 border border-transparent dark:border-indigo-400">
                        <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2.5} className="text-zinc-900 dark:text-white group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                </Link>

                <div className="flex flex-col items-start md:items-end gap-2 mb-8 md:mb-0 w-full sm:w-auto">
                    {/* Container Cápsula Minimalista - Widget */}
                    <div className="flex items-center w-full justify-between sm:justify-start gap-3 sm:gap-4 p-2 pr-4 sm:pr-6 rounded-full bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/50 backdrop-blur-md">

                        {/* Bloco do Relógio Destacado */}
                        <div className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-white/60 dark:bg-zinc-800/40 rounded-full border border-zinc-100/50 dark:border-zinc-800/80">
                            <p className="text-xl sm:text-2xl font-bold tabular-nums tracking-tight text-zinc-400 dark:text-zinc-600 leading-none">{hours}:{minutes}</p>
                            <p className="text-xs sm:text-sm font-medium tabular-nums text-zinc-300 dark:text-zinc-700 leading-none pt-0.5">{seconds}</p>
                        </div>

                        {/* Divisor Separador */}
                        <div className="hidden sm:block w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800/60"></div>

                        {/* Localização e Clima */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="hidden sm:flex items-center gap-1.5">
                                <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={2} className="text-zinc-400 dark:text-zinc-600" />
                                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-600">Manaus</span>
                            </div>
                            <span className="hidden sm:block text-zinc-300 dark:text-zinc-700/50">•</span>
                            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 shrink-0">{temperature}°C</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}