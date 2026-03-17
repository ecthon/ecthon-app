
import Image from "next/image";
import { ElasticHover, ElasticHoverItem } from "../ui/elastic-hover";

export function Works() {
    return (
        <section className="flex flex-col gap-4 mt-20">
            <div
                className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4"
            >
                <div className="flex w-full min-h-[120px] md:min-h-0 md:row-span-1">
                    <div className="flex border border-zinc-900 items-center justify-center flex-1 p-6 rounded-2xl font-medium">Java</div>
                </div>
                <div className="flex w-full min-h-[250px] md:min-h-0 md:row-span-2">
                    <div className="flex border border-zinc-900 items-center justify-center flex-1 h-full rounded-2xl overflow-hidden relative">
                        <div className="flex w-full h-full flex-col justify-end">
                            <Image src="/ticket.svg" alt="Work 1" width={400} height={400} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full min-h-[120px] md:min-h-0 md:row-span-1">
                    <div className="flex border border-zinc-900 items-center justify-center flex-1 p-6 rounded-2xl font-medium">TypeScript</div>
                </div>
            </div>
        </section>
    );
}