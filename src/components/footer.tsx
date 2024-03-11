import { GetTimeZone } from "./get-time-zone"
import { Separator } from "./ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex flex-col w-[1216px] max-sm:w-full max-sm:px-5 mx-auto mt-20">
      <Separator orientation="horizontal" className="w-full dark:bg-zinc-800"/>
      <div className="flex max-sm:w-full w-full items-center justify-between">
        <p className="font-normal text-zinc-400 dark:text-zinc-500 text-sm py-4 max-sm:text-[11px]">&copy; {currentYear} — Feito com ❤️ por  @ecthon.<br className="hidden max-sm:flex" /> Todos os direitos reservados.</p>
        <GetTimeZone />
      </div>
    </footer>
  )
}