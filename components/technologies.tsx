import { Marquee } from "./ui/marquee";

export function Technologies() {
    return (
        <section className="py-4 md:py-8 overflow-hidden">
            <Marquee>
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/react.svg" alt="React" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">React</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/nextdotjs.svg" alt="Next.js" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">Next.js</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/typescript.svg" alt="TypeScript" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">TypeScript</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/tailwindcss.svg" alt="Tailwind CSS" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">Tailwind CSS</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/mongodb.svg" alt="MongoDB" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">MongoDB</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/nodedotjs.svg" alt="Node.js" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">Node.js</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/express.svg" alt="Express" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">Express</span>
                    </div>
                    <div className="flex w-32 md:w-40 items-center justify-center gap-2">
                        <img src="/tech-img/figma.svg" alt="Figma" className="size-5 md:size-6 dark:invert" />
                        <span className="text-xs md:text-sm font-normal">Figma</span>
                    </div>
                </div>
            </Marquee>
        </section>
    );
}