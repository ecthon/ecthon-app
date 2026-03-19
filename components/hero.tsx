"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { useTime } from "../hooks/use-time";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { useTemperature } from "../hooks/use-temperature";

export function Hero() {
    const { hours, minutes, seconds } = useTime();
    const { temperature } = useTemperature();
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-0">
            <div className="flex flex-col gap-4 mt-8 mb-4 md:my-20">
                <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-4xl md:text-5xl md:w-2xs font-semibold text-zinc-900 dark:text-white font-sans leading-tight">Integrando</p>
                    <p className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white font-sans leading-tight">código e design.</p>
                </div>
                <p className="text-base md:text-lg text-zinc-500 dark:text-white/60 font-sans max-w-[280px] md:max-w-none">Criando interfaces que equilibram usabilidade, performance e estética.</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 mb-8 md:mb-0">
                <div className="flex items-center gap-4 p-2 pr-6 rounded-full bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/50 backdrop-blur-md w-fit">

                    {/* Bloco do Relógio Destacado (Cápsula interna) */}
                    <div className="flex items-center gap-1.5 px-5 py-2.5 bg-white/60 dark:bg-zinc-800/40 rounded-full border border-zinc-100/50 dark:border-zinc-800/80">
                        <p className="text-2xl font-bold tabular-nums tracking-tight text-zinc-400 dark:text-zinc-600 leading-none">{hours}:{minutes}</p>
                        <p className="text-sm font-medium tabular-nums text-zinc-300 dark:text-zinc-700 leading-none pt-0.5">{seconds}</p>
                    </div>

                    {/* Divisor Separador */}
                    <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800/60"></div>

                    {/* Localização e Clima inline */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={2} className="text-zinc-400 dark:text-zinc-600" />
                            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-600">Manaus</span>
                        </div>
                        <span className="text-zinc-300 dark:text-zinc-700/50">•</span>
                        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-500">{temperature}°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}