'use client';

import { CheckmarkBadge01Icon, Clock01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import Clock from "../ui/clock";
import { sociaLinks } from "@/app/(without-layout)/to/links-const";

export function Profile() {
    return (
        <div className="flex flex-col w-full max-w-lg mx-auto p-4 gap-4 mt-16">
            <div className="flex flex-col items-center gap-4 w-full">
                <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={64} height={64} className="rounded-full border-2 border-zinc-300" />
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                        <p className="font-semibold text-zinc-900">Ecthon Almeida</p>
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} size={14} strokeWidth={2} className="text-indigo-400 group-hover:text-indigo-600" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <div className="group flex items-center space-x-1 bg-zinc-100 px-2 py-1 rounded-full transition-colors duration-300">
                            <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                            <p className="text-zinc-500 text-xs">Manaus • AM</p>
                        </div>
                        <div className="group flex items-center space-x-1 bg-zinc-100 px-2 py-1 rounded-full transition-colors duration-300">
                            <HugeiconsIcon icon={Clock01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col gap-2 my-5">
                {sociaLinks.map((link) => (
                    <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="group w-full max-w-full mx-auto flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-zinc-200">
                        <div className="flex size-8 shrink-0 items-center justify-center bg-white/50 rounded-full p-1">
                            <HugeiconsIcon icon={link.icon} size={20} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                        </div>
                        <p className="text-zinc-500 font-medium text-sm">{link.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
