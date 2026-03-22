import { LinkCard } from "./link-card";
import { myLinks } from "./all-links";
import Image from "next/image";

export default function LinksPage() {
    return (
        <main className="flex flex-col w-full max-w-[600px] px-4 mx-auto justify-center space-y-12">
            <Image src="/bg-links.jpeg" alt="Ecthon" width={1000} height={1000} quality={80} className="w-full h-full" />
            <div className="flex flex-col items-center justify-center gap-8">
                <Image src="/ecthon.jpeg" alt="Ecthon" width={1000} height={1000} quality={80} className="w-16 h-16 rounded-full" />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">@ecthon</p>
                    <div className="flex items-center gap-4">
                        <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">×͜×</p>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">ecthon</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-2">
                {myLinks.map((link) => (
                    <LinkCard
                        key={link.title}
                        icon={link.icon}
                        title={link.title}
                        url={link.url}
                    />
                ))}
            </div>
        </main>
    );
}