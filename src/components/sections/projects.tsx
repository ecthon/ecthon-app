import Link from "next/link";
import { ProjectCard } from "../ui/project-card";

export function Projects() {
    return (
        <div className="w-full max-w-[1096px] mx-auto flex flex-col md:flex-row gap-2 max-md:px-4">
            <div id="col-1" className="flex flex-col w-full md:w-[360px]">
                <ProjectCard
                    title="Boarding Pass"
                    href="https://boarding-pass-seven.vercel.app/"
                    className="h-[300px] md:h-[420px]"
                    bgClassName="bg-gray-100 bg-[url('/ticket.svg')] max-md:bg-[url('/ticket-md.svg')]"
                    overlayClassName="h-full bg-gradient-to-t from-black/40 to-transparent/0 md:opacity-0 md:group-hover:opacity-100"
                    titleClassName="text-sm text-white"
                />
            </div>

            <div id="col-2" className="flex flex-col w-full md:w-[360px] gap-2">
                <ProjectCard
                    title="Nome do projeto."
                    className="h-[300px] md:h-[260px]"
                />
                <ProjectCard
                    title="Nome do projeto."
                    className="h-[300px] md:h-[260px]"
                />
            </div>

            <div id="col-3" className="flex flex-col w-full md:w-[360px]">
                <ProjectCard
                    title="Nome do projeto."
                    className="h-[300px] md:h-[420px]"
                />
            </div>
        </div>
    )
}
