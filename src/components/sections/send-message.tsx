import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function SendMessage() {
    return (
        <div className="flex w-full max-sm:px-5">
            <div className="flex w-[1096px] mx-auto bg-zinc-900 max-w-full items-center justify-between p-4 border border-zinc-700 rounded-2xl gap-4 group cursor-pointer transition-colors duration-300">
                <div className="felx items-center">
                    <p className="text-zinc-300 max-sm:text-[12px]">Precisando de ajuda com algum projeto?</p>
                    <p className="text-white max-sm:text-[13px] font-semibold">Vamos conversar!</p>
                </div>
                <div className="flex size-8 rounded-full items-center justify-center border-2 border-zinc-700">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={3} className="text-zinc-300 group-hover:text-white transition-colors duration-300" />
                </div>
            </div>
        </div>
    );
}
