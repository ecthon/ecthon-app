import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaLinkedinIn } from "react-icons/fa"

export function Heading() {
  return (
    <div className="flex flex-col items-center w-[928px] h-screen justify-center mx-auto">
      
    <div className="flex items-center rounded-lg bg-emerald-500/5 gap-2 px-3 py-1 text-sm font-medium mx-auto">
      <div className="h-2 w-2 rounded-full bg-emerald-500">
          <div className="z-[11] h-2 w-2 animate-ping rounded-full bg-emerald-500 transition-[4s]" />
      </div>
        <Separator orientation="vertical" className="h-4 dark:bg-white/10 bg-black/10"/>
      <span className="text-zinc-900 antialiased">DISPONÍVEL PARA FREELANCE</span>
    </div>
    <h1 className="text-5xl font-semibold mt-8 text-zinc-900 antialiased">Front-end & UI Designer ✨</h1>
    <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
    <Button asChild>
      <Link href="#">Enviar mensagem</Link>
    </Button>
    <Button variant='outline' asChild>
      <Link href="#" className="flex gap-2"><FaLinkedinIn /></Link>
    </Button>
    </div>

  </div>
  )

}