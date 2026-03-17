
import Image from "next/image";
import { ElasticHover, ElasticHoverItem } from "../ui/elastic-hover";

export function Works() {
    return (
        <section className="flex flex-col gap-4 mt-20">
            <div
                className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4"
            >
                <div className="flex w-full min-h-[120px] md:min-h-0 md:row-span-1">
                    <div className="group relative flex border border-zinc-900 items-center justify-center flex-1 rounded-2xl font-medium overflow-hidden cursor-pointer">
                        <div className="flex w-full h-full p-6 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                            <span className="transition-opacity duration-500 group-hover:opacity-0">Java</span>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex pointer-events-none">
                            <p className="text-lg font-bold text-white font-sans text-left">Java</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full min-h-[250px] md:min-h-0 md:row-span-2">
                    <div className="group relative flex border border-zinc-900 items-center justify-center flex-1 h-full rounded-2xl overflow-hidden cursor-pointer">
                        <div className="flex w-full h-full flex-col justify-end transition-transform duration-500 ease-out group-hover:scale-110">
                            <Image src="/ticket.svg" alt="Work 1" width={400} height={400} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex w-full h-full absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex pointer-events-none">
                            <p className="text-lg font-bold text-white font-sans text-left">Cartão de embarque</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full min-h-[120px] md:min-h-0 md:row-span-1">
                    <div className="group relative flex border border-zinc-900 items-center justify-center flex-1 rounded-2xl font-medium overflow-hidden cursor-pointer">
                        <div className="flex w-full h-full p-6 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                            <span className="transition-opacity duration-500 group-hover:opacity-0">TypeScript</span>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex pointer-events-none">
                            <p className="text-lg font-bold text-white font-sans text-left">TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}