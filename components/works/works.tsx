
import { ElasticHover, ElasticHoverItem } from "../ui/elastic-hover";

export function Works() {
    return (
        <section className="flex flex-col gap-4 mt-20">
            <ElasticHover
                className="grid grid-cols-2 grid-rows-2 gap-4"
                highlightClassName="bg-zinc-800 border-zinc-800"
            >
                <div className="flex w-full row-span-16">
                    <div className="flex border border-zinc-900 items-center justify-center flex-1 rounded-2xl">Java</div>
                </div>
                <div className="flex w-full row-span-32">
                    <div className="flex border border-zinc-900 items-center justify-center flex-1 h-200px rounded-2xl">React</div>
                </div>
                <div className="flex w-full row-span-16">
                    <div className="flex border border-zinc-900 items-center justify-center flex-1 rounded-2xl">TypeScript</div>
                </div>
            </ElasticHover>
        </section>
    );
}