import { Clock01Icon, Location01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Clock from "../ui/clock";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative flex flex-col justify-center gap-8 items-center mx-auto w-full max-w-[1096px] h-auto min-h-[480px] py-20 px-4 sm:px-8 overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-200/40 blur-[120px] rounded-full" />
            </div>

            {/* Profile Badge */}
            <div className="flex items-center gap-2 border border-zinc-200 bg-white/80 rounded-full pl-1 pr-3 py-1 w-max mb-2 transition-transform hover:scale-[1.02] duration-300">
                <div className="relative">
                    <Image
                        src={'https://github.com/ecthon.png'}
                        alt="Avatar"
                        width={28}
                        height={28}
                        className="rounded-full border border-zinc-100"
                    />
                    <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                </div>
                <h1 className="text-zinc-800 text-sm font-semibold px-1">ecthon almeida</h1>
            </div>

            <div className="flex flex-col space-y-8 w-full">
                <div className="flex flex-col space-y-5 items-center text-center">
                    <h2 className="text-zinc-950 font-bold text-6xl max-sm:text-3xl max-md:text-5xl tracking-tight leading-[1.1] max-w-4xl whitespace-nowrap">
                        Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500">Developer</span>
                    </h2>

                    <p className="text-zinc-500 max-w-xl text-lg max-sm:text-[14px] max-md:text-[16px] mx-auto">
                        Desenvolvedor Full Stack que enxerga o design como parte do código.
                        Crio interfaces que unem estética, usabilidade e performance.
                    </p>
                </div>

                <div className="flex flex-wrap w-full justify-center items-center gap-3">
                    <div className="group flex items-center space-x-2 px-4 py-2 rounded-full border border-zinc-100 bg-white transition-all hover:border-indigo-200">
                        <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={2} className="text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-zinc-600 text-[11px] font-medium">Manaus, AM</span>
                    </div>
                    <div className="group flex items-center space-x-2 px-4 py-2 rounded-full border border-zinc-100 bg-white transition-all hover:border-indigo-200">
                        <HugeiconsIcon icon={Clock01Icon} size={16} strokeWidth={2} className="text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                        <div className="text-zinc-600 text-[11px] font-medium">
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
