import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

interface LinkCardProps {
    icon: any;
    title: string;
    url: string;
}

export function LinkCard({ icon, title, url }: LinkCardProps) {
    return (
        <Link href={url} target="_blank" className="flex justify-between items-center p-3 hover:px-2 transition-all duration-200 cursor-pointer group">
            <div className="flex gap-4">
                <HugeiconsIcon icon={icon} size={16} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                <div className="font-semibold text-sm text-zinc-700 dark:text-zinc-200">{title}</div>
            </div>
            <div>
                <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} className="text-zinc-600 dark:text-zinc-400 transition-transform duration-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
            </div>
        </Link>
    );
}