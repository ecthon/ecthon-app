import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full px-4 md:px-6 lg:w-[1120px] mx-auto">
        <header className="flex w-full justify-between items-center py-4">
          <Link href={"/"} className="font-bold text-sm py-1 px-2 rounded-md">
            ecthon.<span className="text-zinc-700">almeida</span>
          </Link>
          <ThemeSwitcher />
        </header>
        <main className="flex flex-col w-full h-[400px] gap-6 align-middle justify-center">
          <div className="flex items-center space-x-4 border rounded-full px-2 bg-zinc-900 w-[fit-content]">
            <span className="relative flex size-3 max-sm:size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-700 opacity-75"></span>
              <span className="relative inline-flex size-3 max-sm:size-2 rounded-full bg-purple-500"></span>
            </span>
            <p className="font-bold text-white">ecthon almeida</p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold w-full lg:w-[600px]">
            Desenvolvedor Front-End e UI Design.
          </h1>
        </main>
      </div>
    </div>
  );
}
