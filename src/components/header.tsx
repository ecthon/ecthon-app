import { Menu } from "./menu";

export function Header() {
  return (
    <header className="flex w-full items-center border-b bg-white/50 filter backdrop-blur-sm fixed">
      <div className="flex w-[1216px] justify-between items-center mx-auto py-5 max-sm:py-2 max-sm:px-5">
        <h1 className="font-semibold text-xl max-sm:text-sm">ecthon<span className="text-blue-600">.</span></h1>
        <Menu />
      </div>
    </header>
  )
}