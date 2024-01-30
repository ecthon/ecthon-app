import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { LightningBoltIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Heading () {

  return (
    <main className="flex flex-col h-screen max-sm:h-auto bg-[url('../../public/bg-blur.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center mt-40 max-sm:mt-32 h-auto max-w-[1216px] max-sm:w-full mx-auto">
        <span className="flex dark:text-zinc-300 items-center gap-1 text-base max-sm:text-xs mb-10 max-sm:mb-5 text-zinc-800 bg-white/25 dark:bg-black/25 border border-white dark:border-black px-4 py-1 rounded-full">
          <LightningBoltIcon className="max-sm:w-3 max-sm:h-3" />
          Olá, me chamo Ecthon!
        </span>
        <h1 className="text-6xl max-w-[928px] max-sm:text-2xl max-sm:px-5 text-center leading-snug max-sm:leading-normal font-semibold mb-6">Front-End, UI Designer, Freelancer.✨</h1>
        <p className="text-xl max-sm:text-sm max-sm:px-10 text-zinc-600 dark:text-zinc-400 max-w-[900px] text-center leading-relaxed">Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.</p>
      <div className="flex gap-8 mt-16">
        <Button className="flex flex-1 max-sm:mt-10 max-sm:mb-24 gap-2">
          Enviar mensagem
        </Button>
        <Button variant="ghost" className="border flex-1 border-zinc-900 flex max-sm:mt-10 max-sm:mb-24 gap-2">
          <LinkedInLogoIcon />
          Linkedin
        </Button>
      </div>
      </div>
    </main>
  )
}