import { HugeiconsIcon } from "@hugeicons/react";
import { EXPERIENCES_DATA } from "@/constants/data";

export function Experience() {
    return (
        <section aria-labelledby="experience-title" className="flex w-full flex-col gap-8 md:gap-10">

            <h2 id="experience-title" className="flex flex-col">
                <span className="text-3xl font-semibold text-zinc-900 dark:text-white font-sans">
                    Experiência
                </span>
                <span className="text-3xl font-normal text-zinc-500 font-sans">
                    nas seguintes áreas
                </span>
            </h2>

            <div className="flex flex-col md:flex-row gap-4 w-full">
                {EXPERIENCES_DATA.map((exp: any, index: number) => (
                    <div
                        key={index}
                        className="group/card relative flex flex-1 flex-col h-32 justify-between items-start p-6 bg-zinc-100 dark:bg-zinc-900 rounded-2xl w-full border border-transparent dark:border-zinc-800/50 hover:-translate-y-1 transition-transform duration-300 overflow-hidden cursor-default"
                    >
                        <div className="flex flex-col gap-2 z-10">
                            <HugeiconsIcon
                                icon={exp.icon}
                                size={24}
                                color="currentColor"
                                strokeWidth={2}
                                className="text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="text-sm font-semibold text-zinc-900 dark:text-white font-sans">
                                {exp.title}
                            </p>
                        </div>
                        <p className="text-sm font-medium text-zinc-500 font-sans z-10">
                            {exp.tools}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}

