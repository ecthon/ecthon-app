import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaLinkedinIn } from "react-icons/fa"

export function Heading() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[928px] max-sm:w-full h-screen max-sm:px-5">
      
    <div className="flex items-center rounded-lg bg-emerald-500/5 gap-2 px-3 py-1 text-sm font-medium mx-auto">
      <div className="h-2 w-2 rounded-full bg-emerald-500">
          <div className="z-[11] h-2 w-2 animate-ping rounded-full bg-emerald-500 transition-[4s]" />
      </div>
        <Separator orientation="vertical" className="h-4 dark:bg-white/10 bg-black/10"/>
      <span className="text-zinc-900 antialiased max-sm:text-[11px]">DISPONÍVEL PARA <span className="font-bold">FREELANCE</span></span>
    </div>
    <h1 className=" flex max-sm:flex-col max-sm:w-full mx-auto text-center text-5xl max-sm:text-4xl font-bold mt-8 text-zinc-900 antialiased">Front-end<span>& UI Designer ✨.</span></h1>
    <p className="text-zinc-700 max-sm:w-full max-w-[750px] text-center text-lg text-muted-foreground max-sm:text-sm justify-center mt-6 mb-8">
      Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.
    </p>
    <div className="flex w-full items-center justify-center space-x-4 max-sm:space-x-2 py-4 md:pb-10">
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