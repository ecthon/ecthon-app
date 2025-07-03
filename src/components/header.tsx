import { EnergyIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-between py-4 px-4 md:px-10 text-white border-b border-zinc-200">
            <Link href={'/'} className="text-zinc-900 font-bold">Base²²</Link>
            <div className="flex items-center space-x-4">
                <HugeiconsIcon icon={EnergyIcon} size={20} strokeWidth={2} className="text-zinc-500" />
                <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={24} height={24} className="rounded-full border border-zinc-300" />
            </div>
        </header>
    )
}
