"use client";
import { ResourcesAddIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Buiding() {
    return (
        <section aria-label="Em construção" className="flex bg-zinc-200 dark:bg-zinc-900 py-2 px-4 md:px-6 w-full items-center justify-center">
            <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
                <div className="flex sm:flex-row items-center gap-2 text-center">
                    <HugeiconsIcon icon={ResourcesAddIcon} size={16} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200 shrink-0 animate-pulse" />
                    <p className="text-xs sm:text-xs flex-1 text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        Portfólio em desenvolvimento.
                    </p>
                </div>
            </div>
        </section>
    );
}