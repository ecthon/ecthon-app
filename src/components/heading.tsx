import { GitHubLogoIcon, LightningBoltIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

export function Heading() {
  return (
    <section className="mx-auto flex max-w-[1216px] flex-col items-center py-8 max-sm:py-16 md:py-12 md:pb-8 lg:py-40 lg:pb-20 gap-6">
      <div className="inline-flex items-center rounded-lg bg-muted gap-2 px-3 py-1 text-sm font-medium">
      <div className="h-2 w-2 rounded-full bg-emerald-500">
          <div className="z-[11] h-2 w-2 animate-ping rounded-full bg-emerald-500 transition-[4s]" />
        </div>
        <Separator orientation="vertical" className="h-4 dark:bg-white/10 bg-black/10"/>
        Olá, sou Ecthon Almeida.
      </div>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">Front-end, UI Designer, Freelancer ✨</h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground max-sm:text-base justify-center">Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.</p>
      <div className="flex gap-2">
        <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Enviar mensagem</Link>
        <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-2">
          <LinkedInLogoIcon />
          Linkedin
        </Link>
      </div>
    </section>
  )
}