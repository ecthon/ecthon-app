"use client";
import { ArrowUp01Icon, Location06Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-6 md:gap-4 py-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex shrink-0 items-center size-12 rounded-full justify-center cursor-pointer bg-zinc-200 dark:bg-zinc-900 transition-colors duration-300">
                <HugeiconsIcon icon={ArrowUp01Icon} size={20} color="currentColor" strokeWidth={2} className="text-zinc-600 dark:text-zinc-200 group-hover:-mt-1 transition-all duration-300" />
            </button>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Ecthon Almeida® •</p>
                    <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{new Date().getFullYear()}</p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}