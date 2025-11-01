'use client';

import { CheckmarkBadge01Icon, Clock01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import Clock from "../ui/clock";
import { sociaLinks } from "@/app/(without-layout)/links/links-const";

export function Profile() {
    return (
        <div className="flex flex-col w-lg mx-auto p-4 gap-4 mt-16">
            <div className="flex flex-col w-full max-sm:flex-col max-sm:w-full max-sm:space-y-2 items-center space-x-4">
                <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={64} height={64} className="rounded-full border-2 border-zinc-300" />
                <div className="flex max-sm:items-center flex-col space-y-1">
                    <div className="flex items-center gap-1">
                        <p className="font-semibold text-zinc-900">Ecthon Almeida</p>
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} size={14} strokeWidth={2} className="text-indigo-400 group-hover:text-indigo-600" />
                    </div>

                    <div className="flex items-center space-x-1">
                        <div className="group flex items-center space-x-1 bg-zinc-100 px-2 py-1 rounded-full transition-colors duration-300">
                            <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                            <p className="text-zinc-500 text-xs max-sm:text-[11px]">Manaus • AM</p>
                        </div>
                        <div className="group flex items-center space-x-1 bg-zinc-100 px-2 py-1 rounded-full transition-colors duration-300">
                            <HugeiconsIcon icon={Clock01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col space-y-2 my-5">
                {sociaLinks.map((link) => (
                    <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="group w-[80%] mx-auto flex items-center space-x-2 bg-zinc-100 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-zinc-200">
                        <HugeiconsIcon icon={link.icon} size={16} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                        <p className="text-zinc-500 group-hover:text-indigo-600 font-medium text-sm">{link.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
