import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <>    
      <div className="flex flex-col items-center justify-center mx-auto w-[928px] max-sm:w-full h-screen max-sm:-mt-12 max-sm:px-5"> 
        <div className="flex items-center rounded-lg bg-white/5 gap-2 px-3 py-1 text-sm font-medium mx-auto">
          <div className="h-2 w-2 rounded-full bg-emerald-500">
              <div className="z-[11] h-2 w-2 animate-ping rounded-full bg-emerald-500 transition-[4s]" />
          </div>
            <Separator orientation="vertical" className="h-4 dark:bg-white/10 bg-black/10"/>
          <span className="text-zinc-400 text-xs max-sm:text-[11px]">DISPONÍVEL PARA <span className="font-bold">FREELANCE</span></span>
        </div>
        <h1 className="flex max-sm:flex-col max-sm:w-full mx-auto text-center text-5xl max-sm:text-4xl font-bold mt-8 text-zinc-50 dark:text-zinc-100">Front-End & <br className="hidden max-sm:flex" /> UI Designer ✨.</h1>
        <p className="text-zinc-400 dark:text-zinc-500 max-sm:w-full max-w-[750px] text-center text-lg text-muted-foreground max-sm:text-sm justify-center mt-6 mb-8">
          Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.
        </p>
        <div className="z-20 flex w-full items-center justify-center space-x-4 max-sm:space-x-2 py-4 md:pb-10">
          <Button asChild>
            <Link href="#" className="text-zinc-300 hover:text-zinc-50">Enviar mensagem</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href="#" className="flex"><FaLinkedinIn className="text-zinc-950"/></Link>
          </Button>
        </div>
      </div>
      <Projects />
      <Footer />
    </>
  );
}
