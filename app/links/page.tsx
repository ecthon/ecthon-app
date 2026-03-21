import { LinkCard } from "./link-card";
import { myLinks } from "./all-links";

export default function LinksPage() {
    return (
        <main className="flex flex-col w-[600px] mx-auto h-screen justify-center gap-2">
            {myLinks.map((link) => (
                <LinkCard
                    key={link.title}
                    icon={link.icon}
                    title={link.title}
                    url={link.url}
                />
            ))}
        </main>
    );
}