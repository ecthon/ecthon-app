"use client";
import { ArrowUp01Icon, Location06Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Footer() {
    return (
        <footer className="flex items-center gap-4 my-20 py-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex items-center size-12 rounded-full justify-center cursor-pointer bg-zinc-900 transition-colors duration-300">
                <HugeiconsIcon icon={ArrowUp01Icon} size={20} color="currentColor" strokeWidth={2} className="text-zinc-200 group-hover:-mt-1 transition-mt duration-300" />
            </button>
            <div className="flex items-center flex-col">
                <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">Ecthon Almeida® •</p>
                    <p className="text-xs font-semibold text-zinc-400">{new Date().getFullYear()}</p>
                </div>
                <p className="text-xs text-zinc-400">Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}