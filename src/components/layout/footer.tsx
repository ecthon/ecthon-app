'use client'
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="flex w-full max-sm:px-5">
            <div className="w-full max-w-[1096px] border-t-1 border-zinc-400/15 mx-auto flex md:flex-row items-center justify-between p-4 text-zinc-500 gap-2 md:gap-0">
                <p className="text-sm max-sm:text-[11px]"><span className="font-bold">Base²²</span> © 2025 • Todos os direitos reservados</p>
                <button
                    onClick={scrollToTop}
                    aria-label="Voltar ao topo"
                    className="group flex h-[32px] items-center gap-1 px-2.5 justify-center rounded-lg cursor-pointer font-semibold bg-zinc-50"
                >
                    <HugeiconsIcon icon={ArrowUp01Icon} size={18} strokeWidth={2} className="text-indigo-500 transition-colors duration-300" />
                </button>
            </div>
        </footer >
    )
}
