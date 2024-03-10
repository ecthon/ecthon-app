import { Separator } from "./ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex flex-col w-[1216px] max-sm:w-full max-sm:px-5 mx-auto mt-20">
      <Separator orientation="horizontal" className="w-full dark:bg-zinc-800"/>
      <p className="font-normal text-zinc-400 dark:text-zinc-500 text-sm py-4 max-sm:text-[11px]">&copy; {currentYear} — Ecthon Almeida.<br className="hidden max-sm:flex" /> Todos os direitos reservados.</p>
    </footer>
  )
}