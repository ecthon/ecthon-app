import { CodeSquareIcon, CursorEdit02FreeIcons, DatabaseLightningIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Experience() {
    return (
        <section className="flex flex-col gap-10 mt-20">
            <div className="group flex items-center gap-2">
                <div className="flex flex-col">
                    <p className="text-3xl font-semibold text-white font-sans">Experiência</p>
                    <p className="text-3xl font-normal text-zinc-500 font-sans">nas seguintes áreas </p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-1 h-32 flex-col gap-4 items-start p-6 justify-center size-12 bg-zinc-900 rounded-2xl">
                    <div className="flex flex-col gap-2">
                        <HugeiconsIcon icon={CursorEdit02FreeIcons} size={24} color="currentColor" strokeWidth={2} className="text-white group-hover:text-white transition-colors duration-300" />
                        <p className="text-sm font-semibold text-white font-sans">UI Design</p>
                    </div>
                    <p className="text-sm font-semibold text-zinc-500 font-sans">Figma, Adobe XD, Sketch</p>
                </div>
                <div className="flex flex-1 h-32 flex-col gap-4 items-start p-6 justify-center size-12 bg-zinc-900 rounded-2xl">
                    <div className="flex flex-col gap-2">
                        <HugeiconsIcon icon={CodeSquareIcon} size={24} color="currentColor" strokeWidth={2} className="text-white group-hover:text-white transition-colors duration-300" />
                        <p className="text-sm font-semibold text-white font-sans">Front-end</p>
                    </div>
                    <p className="text-sm font-semibold text-zinc-500 font-sans">React, Next.js, TypeScript</p>
                </div>
                <div className="flex flex-1 h-32 flex-col gap-4 items-start p-6 justify-center size-12 bg-zinc-900 rounded-2xl">
                    <div className="flex flex-col gap-2">
                        <HugeiconsIcon icon={DatabaseLightningIcon} size={24} color="currentColor" strokeWidth={2} className="text-white group-hover:text-white transition-colors duration-300" />
                        <p className="text-sm font-semibold text-white font-sans">Back-end</p>
                    </div>
                    <p className="text-sm font-semibold text-zinc-500 font-sans">Node.js, .NET, Python</p>
                </div>
            </div>
        </section>
    );
}