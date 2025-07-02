import { GithubIcon, Linkedin02Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

export function Profile() {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1096px] mx-auto items-center justify-between p-4 gap-4">
            <div className="flex items-center space-x-4">
                <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={64} height={64} className="rounded-full" />
                <div className="flex flex-col">
                    <p className="font-semibold text-zinc-900">Ecthon Almeida</p>
                    <div className="flex items-center space-x-2">
                        <div className="group flex items-center space-x-1">
                            <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-orange-500" />
                            <p className="text-sm text-zinc-500">Manaus</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1">
                <Link href={'#'} className="group flex p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
                    <HugeiconsIcon icon={Linkedin02Icon} size={18} strokeWidth={2} className="text-zinc-500" />
                </Link>
                <Link href={'#'} className="group flex p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
                    <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={2} className="text-zinc-500" />
                </Link>
                <button className="flex py-1.5 px-2 rounded-lg cursor-pointer font-semibold text-zinc-700 bg-zinc-100 text-sm">Send mensagem</button>
            </div>
        </div>
    )
}
