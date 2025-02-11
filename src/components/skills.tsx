import { FigmaIcon, SourceCodeSquareIcon, UserAdd02Icon } from "hugeicons-react";

export function Skills() {
    return (
        <div className="flex gap-8">
            <div className="group cursor-pointer flex flex-1 items-center justify-center rounded-xl h-28 flex-col bg-zinc-900 gap-4 transition-all duration-1000">
                <SourceCodeSquareIcon className="group-hover:text-lime-500"/>
                <p className="text-xs">Programação</p>
            </div>
            <div className="group cursor-pointer flex flex-1 items-center justify-center rounded-xl h-28 flex-col bg-zinc-900 gap-4 transition-all duration-1000">
                <FigmaIcon className="group-hover:text-lime-500"/>
                <p className="text-xs">UI Design</p>
            </div>
            <div className="group cursor-pointer flex flex-1 items-center justify-center rounded-xl h-28 flex-col bg-zinc-900 gap-4 transition-all duration-1000">
                <UserAdd02Icon className="group-hover:text-lime-500"/>
                <p className="text-xs">Freelancer</p>
            </div>
        </div>
    )
}