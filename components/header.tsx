"use client";
import { ArrowExpandIcon, ArrowShrinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        const handler = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handler);
        return () => document.removeEventListener("fullscreenchange", handler);
    }, []);
    return (
        <header className="flex w-full py-6 justify-between items-center border-b border-zinc-900">
            <Link href="/">
                <h1 className="text-sm font-semibold text-white px-4 py-2 hover:bg-zinc-900 font-sans transition-colors duration-300 rounded-lg -ml-4 md:ml-0">ecthon.dev</h1>
            </Link>
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <button onClick={toggleFullscreen} className="group hidden sm:flex h-auto px-4 py-2 items-center justify-center hover:bg-zinc-900 transition-colors duration-300 rounded-lg gap-2 -mr-4 md:mr-0 cursor-pointer">
                    <p className="text-[11px] font-semibold text-zinc-200 font-sans transition-colors duration-300">{isFullscreen ? "Sair do modo tela cheia" : "Modo tela cheia"}</p>
                    <HugeiconsIcon icon={isFullscreen ? ArrowShrinkIcon : ArrowExpandIcon} size={16} color="currentColor" strokeWidth={2} className="text-zinc-200 transition-colors duration-300" />
                </button>
            </div>
        </header>
    );
}