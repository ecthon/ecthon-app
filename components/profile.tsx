import Image from "next/image";

export function Profile() {
    return (
        <div className="flex w-full items-center gap-4 p-4 border-b border-zinc-800">
            <div className="flex items-center justify-between size-16 border-3 bg-white/20 border-white/20 rounded-full overflow-hidden">
                <Image src="/ecthon.png" alt="Avatar" width={100} height={100} />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-white font-sans">Ecthon Almeida</span>
                <span className="text-sm font-sans text-white/60">Desenvolvedor de Software</span>
            </div>
        </div>
    );
}