import {
  FigmaIcon,
  SourceCodeSquareIcon,
  UserAdd02Icon,
} from "hugeicons-react";

export function Skills() {
  return (
    <div className="flex gap-8 max-sm:gap-4">
      <div className="group cursor-pointer flex flex-1 items-center justify-center rounded-xl h-28 flex-col bg-zinc-900 gap-4 transition-all duration-1000">
        <SourceCodeSquareIcon className="group-hover:text-lime-500" />
        <p className="text-xs font-bold">Programação</p>
      </div>
      <div className="group cursor-pointer flex flex-1 items-center justify-center rounded-xl h-28 flex-col bg-zinc-900 gap-4 transition-all duration-1000">
        <FigmaIcon className="group-hover:text-lime-500" />
        <p className="text-xs font-bold">UI Design</p>
      </div>
      <div className="group cursor-pointer flex flex-1 items-center justify-center rounded-xl h-28 flex-col bg-zinc-900 gap-4 transition-all duration-1000">
        <UserAdd02Icon className="group-hover:text-lime-500" />
        <p className="text-xs font-bold">Freelancer</p>
      </div>
    </div>
  );
}
