import { ModeToggle } from "../theme/mode-toggle";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center w-[1216px] max-sm:w-full max-sm:px-5 mx-auto py-3 max-">
        <a href="/" className="font-semibold">ecthon.</a>
        <nav className="flex gap-2 max-sm:hidden">
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">Home</a>
          <a href="#" className="text-sm text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">Projetos</a>
          <a href="/about" className="text-sm text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">Sobre</a>
          <a href="#" className="text-sm text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <MobileMenu />
        </div>
        
      </div>
    </header>
  )
}