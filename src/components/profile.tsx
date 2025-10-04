'use client';

import { Clock01Icon, GithubIcon, Linkedin02Icon, Location01Icon, TelegramIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import Clock from "./clock";

export function Profile() {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1096px] mx-auto items-center justify-between p-4 gap-4">
            <div className="flex items-center space-x-4">
                <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={64} height={64} className="rounded-full border-2 border-zinc-300" />
                <div className="flex flex-col">
                    <p className="font-semibold text-zinc-900">Ecthon Almeida</p>
                    <div className="flex items-center space-x-4">
                        <div className="group flex items-center space-x-1">
                            <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-orange-500" />
                            <p className="text-sm text-zinc-500">Manaus/AM</p>
                        </div>
                        <div className="group flex items-center space-x-1">
                            <HugeiconsIcon icon={Clock01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-orange-500" />
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1">
                <Link href={'https://www.linkedin.com/in/ecthon/'} target="_blank" rel="noopener noreferrer" className="group flex p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
                    <HugeiconsIcon icon={Linkedin02Icon} size={18} strokeWidth={2} className="text-zinc-500" />
                </Link>
                <Link href={'https://github.com/ecthon'} target="_blank" rel="noopener noreferrer" className="group flex p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
                    <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={2} className="text-zinc-500" />
                </Link>
                <button className="group flex h-[32px] items-center gap-1 px-2.5 justify-center rounded-lg cursor-pointer font-semibold text-zinc-100 bg-zinc-900 text-xs">
                    <HugeiconsIcon icon={TelegramIcon} size={18} strokeWidth={2} className="text-zinc-500 group-hover:text-orange-500 transition-colors duration-300" />
                    Send message
                </button>
            </div>
        </div>
    )
}
