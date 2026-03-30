"use client";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/data";

export function Footer() {
    return (
        <footer className="flex w-full justify-center border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 w-full max-w-5xl px-6 md:px-0 mx-auto">
                {/* Esquerda: Botão Voltar ao Topo e Copyright */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex shrink-0 items-center size-12 rounded-full justify-center cursor-pointer bg-zinc-200 dark:bg-zinc-900 hover:bg-indigo-500 dark:hover:bg-indigo-500 transition-colors duration-300">
                        <HugeiconsIcon icon={ArrowUp01Icon} size={20} color="currentColor" strokeWidth={2} className="text-zinc-600 dark:text-zinc-200 group-hover:text-white transition-all duration-300 group-hover:-mt-1" />
                    </button>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2">
                            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Ecthon Almeida® •</p>
                            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{new Date().getFullYear()}</p>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Todos os direitos reservados.</p>
                    </div>
                </div>

                {/* Direita: Redes Sociais */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
                    {SOCIAL_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-full transition-colors duration-300 bg-zinc-200 dark:bg-zinc-900 ${link.showName ? 'gap-2 px-4 py-[10px]' : 'size-[40px] md:size-11'}`}
                        >
                            <HugeiconsIcon icon={link.icon} size={20} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                            {link.showName && (
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{link.name}</span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}