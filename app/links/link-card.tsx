import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import axios from "axios";

interface LinkCardProps {
    icon: any;
    title: string;
    url: string;
    onClick?: () => void;
}

export function LinkCard({ icon, title, url, onClick }: LinkCardProps) {
    const trackClick = async () => {
        try {
            await axios.post("https://links-tracker.onrender.com/track", {
                url,
                title,
                userAgent: navigator.userAgent
            });
        } catch (error) {
            console.error("Falha ao notificar Analytics", error);
        }
        if (onClick) onClick();
    }

    return (
        <Link href={url} target="_blank" onClick={trackClick} className="flex w-full justify-between items-center p-3 bg-zinc-200/60 dark:bg-zinc-900/60 rounded-lg hover:px-2 transition-all duration-200 cursor-pointer group">
            <div className="flex gap-4">
                <HugeiconsIcon icon={icon} size={16} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
                <div className="font-semibold text-sm text-zinc-700 dark:text-zinc-200">{title}</div>
            </div>
            <div>
                <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} className="text-zinc-600 dark:text-zinc-400 transition-transform duration-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
            </div>
        </Link>
    );
}