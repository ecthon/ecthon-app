export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex w-[1216px] max-sm:w-full max-sm:px-5 mx-auto py-4 mt-20 border-t">
      <p className="font-normal text-zinc-400 text-sm max-sm:text-[11px]">&copy; {currentYear} — Ecthon Almeida.<br className="hidden max-sm:flex" /> Todos os direitos reservados.</p>
    </footer>
  )
}