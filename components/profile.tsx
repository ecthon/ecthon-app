import Image from "next/image";

export function Profile() {
    return (
        <div className="flex w-full items-center gap-4 p-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between size-12 border-dashed border-2 border-indigo-500/50 dark:border-indigo-500/60 rounded-full overflow-hidden">
                <Image src="/avatarbw.jpeg" alt="Avatar" width={100} height={100} />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white font-sans">Ecthon Almeida</span>
                <span className="text-sm font-sans text-zinc-500 dark:text-white/60">Desenvolvedor de Software</span>
            </div>
        </div>
    );
}