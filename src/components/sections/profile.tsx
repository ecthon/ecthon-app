'use client';

import { CheckmarkBadge01Icon, Clock01Icon, GithubIcon, Linkedin02Icon, Location01Icon, Message01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import Clock from "../ui/clock";

export function Profile() {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1096px] mx-auto items-center justify-between p-4 gap-4">
            <div className="flex max-sm:flex-col max-sm:w-full max-sm:space-y-2 items-center space-x-4">
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

            <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                    <Link href={'https://www.linkedin.com/in/ecthon/'} target="_blank" rel="noopener noreferrer" className="group flex p-1.5 border border-transparent max-sm:border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
                        <HugeiconsIcon icon={Linkedin02Icon} size={18} strokeWidth={2} className="text-zinc-500" />
                    </Link>
                    <Link href={'https://github.com/ecthon'} target="_blank" rel="noopener noreferrer" className="group flex p-1.5 border border-transparent max-sm:border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
                        <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={2} className="text-zinc-500" />
                    </Link>
                </div>
                <div className="flex h-5 w-[1px] rounded-full bg-zinc-300" />
                <button className="group flex h-[32px] items-center gap-1 px-2.5 justify-center rounded-lg cursor-pointer font-semibold text-indigo-600 hover:bg-indigo-600/25 bg-indigo-600/20 text-xs max-sm:text-[11px]">
                    <HugeiconsIcon icon={Message01Icon} size={18} strokeWidth={2} className="text-indigo-600 transition-colors duration-300" />
                    Send message
                </button>
            </div>
        </div>
    )
}
