import { ConstructionIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
    title: string;
    href: string;
    image?: string;
    statusText?: string;
    rowSpan?: number;
}

function WorkCard({ title, href, image, statusText, rowSpan = 1 }: WorkCardProps) {
    const cardVisuals = (
        <div className="group w-full flex border border-zinc-200 dark:border-zinc-800 items-center justify-center flex-1 h-full rounded-2xl font-medium cursor-pointer bg-white dark:bg-zinc-950 p-1">
            <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-zinc-50 dark:bg-zinc-900/20">
                <div className={`flex w-full h-full ${image ? 'flex-col justify-end' : 'p-6 items-center justify-center'} transition-transform duration-500 ease-out group-hover:scale-110`}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            width={1000}
                            height={1000}
                            priority={true}
                            quality={100}
                            unoptimized
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="text-zinc-900 dark:text-zinc-500 transition-opacity duration-500 group-hover:opacity-0">
                            <div className="flex items-center justify-center gap-2">
                                <HugeiconsIcon icon={ConstructionIcon} size={20} strokeWidth={2} className="text-zinc-600 dark:text-zinc-200" />
                                {statusText}
                            </div>
                        </div>
                    )}
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 dark:from-black/90 via-black/30 dark:via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex pointer-events-none">
                    <p className="text-lg font-bold text-white font-sans text-left">{title}</p>
                </div>
            </div>
        </div>
    );

    const layoutClasses = `flex w-full h-full aspect-square md:aspect-auto ${rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1'}`;

    return (
        <div className={layoutClasses}>
            {href && href !== "#" ? (
                <Link href={href} target="_blank" rel="noopener noreferrer" className="flex w-full h-full">
                    {cardVisuals}
                </Link>
            ) : (
                <div className="flex w-full h-full">
                    {cardVisuals}
                </div>
            )}
        </div>
    );
}

export function Works() {
    return (
        <section aria-labelledby="works-title" className="flex flex-col gap-8 md:gap-10 w-full mt-4">
            <div className="group flex flex-col gap-2">
                <h2 id="works-title" className="flex flex-col">
                    <span className="text-3xl font-semibold text-zinc-900 dark:text-white font-sans">
                        Projetos
                    </span>
                    <span className="text-3xl font-normal text-zinc-500 font-sans">
                        em destaque
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
                <WorkCard
                    title="Links"
                    href="https://ecthon.me/links"
                    image="/img-links.webp"
                    rowSpan={1}
                />
                <WorkCard
                    title="Cartão de embarque"
                    href="https://boarding-pass-seven.vercel.app/"
                    image="/img-ticket.webp"
                    rowSpan={2}
                />
                <WorkCard
                    title="Projeto sendo construído..."
                    href="#"
                    statusText="Em breve..."
                    rowSpan={1}
                />
            </div>
        </section>
    );
}