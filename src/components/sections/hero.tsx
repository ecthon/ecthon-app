import { Clock01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Clock from "../ui/clock";
import Image from "next/image";

export function Hero() {
    return (
        <section className="flex flex-col justify-center gap-6 max-sm:gap-4 items-center mx-auto w-full max-w-[1096px] h-auto min-h-[320px] py-8 px-4 sm:px-8">
            <div className="flex items-center gap-2 max-sm:gap-1 border border-dashed border-indigo-200 rounded-full pl-2 pr-3 py-1 w-max mb-4">
                <Image
                    src={'https://github.com/ecthon.png'}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-full border border-zinc-300"
                />
                <h1 className="font-semibold text-zinc-900 text-md max-sm:text-[14px] leading-none px-1">ecthon almeida</h1>
            </div>

            <div className="flex flex-col space-y-6 w-full">
                <div className="flex flex-col space-y-4 items-center text-center">
                    <p className="text-zinc-900 font-semibold text-4xl sm:text-5xl md:text-6xl max-sm:text-2xl">
                        Full Stack Developer
                    </p>
                    <p className="text-zinc-600 max-w-2xl text-base max-sm:text-[14px] mx-auto">
                        Desenvolvedor Full Stack que enxerga o design como parte do código.
                        Crio interfaces que unem estética, usabilidade e performance.
                    </p>
                </div>
                <div className="flex flex-wrap w-full justify-center items-center gap-2">
                    <div className="group flex items-center space-x-1 px-2 py-1 rounded-full transition-colors duration-300 bg-zinc-100">
                        <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                        <p className="text-zinc-500 text-sm sm:text-md max-sm:text-[11px]">Manaus • AM</p>
                    </div>
                    <div className="group flex items-center space-x-1 px-2 py-1 rounded-full transition-colors duration-300 bg-zinc-100">
                        <HugeiconsIcon icon={Clock01Icon} size={14} strokeWidth={2} className="text-zinc-500 group-hover:text-indigo-600" />
                        <Clock />
                    </div>
                </div>
            </div>
        </section>
    );
}
