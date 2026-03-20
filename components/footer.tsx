"use client";
import { ArrowUp01Icon, InstagramIcon, Linkedin01Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 w-full border-t border-zinc-200 dark:border-zinc-800">
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
                <Link href="https://instagram.com/ecthon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-[10px] bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-full transition-colors duration-300">
                    <HugeiconsIcon icon={InstagramIcon} size={20} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">ecthon</span>
                </Link>
                <Link href="https://linkedin.com/in/ecthon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-[40px] md:size-11 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-full transition-colors duration-300">
                    <HugeiconsIcon icon={Linkedin01Icon} size={20} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                </Link>
                <Link href="https://github.com/ecthon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-[40px] md:size-11 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-full transition-colors duration-300">
                    <HugeiconsIcon icon={GithubIcon} size={20} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                </Link>
            </div>
        </footer>
    );
}