import { ConstructionIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { WORKS_DATA } from "@/constants/data";

export function Works() {
    return (
        <section className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
                {WORKS_DATA.map((work) => {
                    if (work.type === "completed") {
                        return (
                            <Link key={work.id} href={work.href} target="_blank" rel="noopener noreferrer" className={`flex w-full aspect-square md:aspect-auto ${work.rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1'}`}>
                                <div className="group relative flex border border-zinc-200 dark:border-zinc-900 items-center justify-center flex-1 h-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-100 dark:bg-transparent">
                                    <div className="flex w-full h-full flex-col justify-end transition-transform duration-500 ease-out group-hover:scale-110">
                                        {/* @ts-ignore - Ignoring due to dynamic string object access assuming it exists if type is completed */}
                                        <Image src={work.images?.desktop || ""} alt={work.title} width={1000} height={1000} priority={true} quality={80} className="hidden md:block w-full h-full object-cover" />
                                        {/* @ts-ignore */}
                                        <Image src={work.images?.mobile || ""} alt={work.title} width={1000} height={1000} priority={true} quality={80} className="md:hidden w-full h-full object-cover" />
                                    </div>
                                    <div className="flex w-full h-full absolute inset-0 bg-linear-to-t from-black/80 dark:from-black/90 via-black/30 dark:via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10 pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex pointer-events-none">
                                        <p className="text-lg font-bold text-white font-sans text-left">{work.title}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    }

                    // For 'building' state
                    return (
                        <div key={work.id} className={`flex w-full aspect-square md:aspect-auto ${work.rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1'}`}>
                            <div className="group relative flex border border-zinc-200 dark:border-zinc-900 items-center justify-center flex-1 rounded-2xl font-medium overflow-hidden cursor-pointer bg-zinc-100 dark:bg-transparent">
                                <div className="flex w-full h-full p-6 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                                    <div className="text-zinc-900 dark:text-zinc-500 transition-opacity duration-500 group-hover:opacity-0">
                                        <div className="flex items-center justify-center gap-2">
                                            <HugeiconsIcon icon={ConstructionIcon} size={20} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                                            {work.statusText}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 dark:from-black/90 via-black/30 dark:via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex pointer-events-none">
                                    <p className="text-lg font-bold text-white font-sans text-left">{work.title}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}