import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Links() {
    return (
        <div className="flex flex-col dark:bg-zinc-900 w-[600px] mx-auto">
            <div className="flex w-full h-[48px] p-3 justify-between items-center cursor-pointer border border-zinc-200 dark:border-zinc-900 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={ArrowRight02Icon} size={24} color="currentColor" strokeWidth={2} className="text-zinc-500 dark:text-zinc-200 transition-colors duration-300" />
                    <p className="text-zinc-500 dark:text-zinc-200 transition-colors duration-300">Titulo</p>
                </div>
                <HugeiconsIcon icon={ArrowRight02Icon} size={24} color="currentColor" strokeWidth={2} className="text-zinc-500 dark:text-zinc-500 transition-colors duration-300" />
            </div>
        </div>
    );
}