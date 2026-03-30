"use client";
import { ArrowExpandIcon, ArrowShrinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useFullscreen } from "../hooks/use-fullscreen";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const { isFullscreen, toggleFullscreen } = useFullscreen();
    return (
        <header className="flex sticky top-0 z-50 w-full py-4 sm:py-6 justify-center bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-indigo-200 dark:border-indigo-900 transition-colors duration-300">
            <div className="flex max-w-5xl w-full justify-between items-center px-6 md:px-0 mx-auto">
                <Link href="/" className="active:scale-95 transition-transform duration-200">
                    <span className="text-lg font-semibold text-zinc-900 dark:text-white px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-sans transition-colors duration-300 rounded-lg">
                        ecthon<span className="text-indigo-500">.</span>
                    </span>
                </Link>
                <div className="flex items-center gap-1 sm:gap-2">
                    <ThemeToggle />

                    <button
                        onClick={toggleFullscreen}
                        className="group hidden sm:flex h-auto px-3 py-2 items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 rounded-lg gap-2 cursor-pointer active:scale-95"
                        aria-label={isFullscreen ? "Sair do modo tela cheia" : "Modo tela cheia"}
                    >
                        <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-200 font-sans transition-colors duration-300">
                            {isFullscreen ? "Sair do modo tela cheia" : "Modo tela cheia"}
                        </p>
                        <HugeiconsIcon
                            icon={isFullscreen ? ArrowShrinkIcon : ArrowExpandIcon}
                            size={16}
                            strokeWidth={2}
                            className="text-zinc-500 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
