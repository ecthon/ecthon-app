"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { useTime } from "../hooks/use-time";
import { ArrowRight02Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { useTemperature } from "../hooks/use-temperature";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function Hero() {
    const { hours, minutes, seconds } = useTime();
    const { temperature } = useTemperature();
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5 mt-10 mb-8 md:mt-24 md:mb-14">
                <h1 className="flex flex-col text-5xl sm:text-6xl md:text-[80px] font-extrabold tracking-tighter text-zinc-900 dark:text-white font-sans leading-[1.05] md:leading-[1.05]">
                    <span>Integrando</span>
                    <span>código e <span className="text-indigo-500 dark:text-indigo-400">design.</span></span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-[300px] sm:max-w-lg">
                    Criando interfaces que equilibram usabilidade, performance e estética.
                </p>
            </div>

            {/* Ajuste de Responsividade: Empilhados e alinhados simetricamente no Mobile */}
            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center mt-4 md:mt-0 gap-4 md:gap-0">

                {/* Botão Call to Action (Altura: 60px) */}
                <Link href="#" className="group sm:w-fit flex items-center justify-between gap-6 pl-6 pr-2 h-[60px] rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm md:shadow-none text-white text-base font-semibold font-sans transition-all duration-300 w-4/5 shrink-0 md:mb-8">
                    <span>Enviar mensagem</span>
                    {/* Círculo interno fixo para caber perfeitamente nos 60px */}
                    <div className="flex rounded-full size-11 shrink-0 bg-white dark:bg-zinc-900 items-center justify-center transition-transform duration-300 border border-transparent dark:border-indigo-400">
                        <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2.5} className="text-zinc-900 dark:text-white group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                </Link>

                <div className="flex w-full md:w-auto mt-2 md:mt-0 mb-10 md:mb-8 shrink-0">
                    {/* Container Cápsula Minimalista - Widget (Altura: 60px) */}
                    <div className="flex items-center w-full md:w-auto justify-between sm:justify-start gap-3 sm:gap-4 p-2 pr-6 h-[60px] rounded-full bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/50 backdrop-blur-md">

                        {/* Bloco do Relógio Destacado */}
                        <div className="flex items-center justify-center gap-1.5 px-4 sm:px-5 h-full bg-white/60 dark:bg-zinc-800/40 rounded-full border border-zinc-100/50 dark:border-zinc-800/80">
                            <p className="text-xl sm:text-2xl font-bold tabular-nums tracking-tight text-zinc-400 dark:text-zinc-600 leading-none">{hours}:{minutes}</p>
                            <p className="text-sm font-medium tabular-nums text-zinc-300 dark:text-zinc-700 leading-none pt-0.5">{seconds}</p>
                        </div>

                        {/* Divisor Separador */}

                        {/* Localização e Clima */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Separator orientation="vertical" />
                            <div className="flex sm:w-full items-center gap-1.5">
                                <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={2.5} className="text-zinc-400 dark:text-zinc-600" />
                                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-600">Manaus</span>
                            </div>
                            <span className="sm:block text-zinc-300 dark:text-zinc-700/50">•</span>
                            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 shrink-0">{temperature}°C</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}