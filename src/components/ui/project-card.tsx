import Link from "next/link";

interface ProjectCardProps {
    title: string;
    href?: string;
    className?: string;
    bgClassName?: string;
    overlayClassName?: string;
    titleClassName?: string;
}

export function ProjectCard({
    title,
    href,
    className = "",
    bgClassName = "bg-gray-100",
    overlayClassName = "h-32 bg-gradient-to-t from-black/10 to-transparent/0 backdrop-blur-sm opacity-0 group-hover:opacity-100",
    titleClassName = "text-md font-semibold text-white",
}: ProjectCardProps) {
    const Content = () => (
        <div
            className={`group cursor-pointer w-full border border-zinc-100 rounded-2xl p-1 ${className}`}
        >
            <div
                className={`flex flex-col justify-end h-full rounded-[12px] overflow-hidden bg-cover bg-center ${bgClassName}`}
            >
                <div
                    className={`flex w-full items-end p-4 transition-opacity duration-300 ${overlayClassName}`}
                >
                    <h2 className={titleClassName}>{title}</h2>
                </div>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
            >
                <Content />
            </Link>
        );
    }

    return <Content />;
}
