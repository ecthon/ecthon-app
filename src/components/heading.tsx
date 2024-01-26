import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { LightningBoltIcon } from "@radix-ui/react-icons";

export function Heading () {

  return (
    <main className="flex flex-col h-screen max-sm:h-auto bg-[url('../../public/bg-blur.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center mt-40 max-sm:mt-20 h-auto max-w-[1120px] max-sm:w-full mx-auto">
        <span className="flex items-center gap-1 text-base max-sm:text-xs mb-10 max-sm:mb-5 text-zinc-800 bg-white/25 border border-white px-4 py-1 rounded-full">
          <LightningBoltIcon className="max-sm:w-3 max-sm:h-3" />
          Olá, me chamo Ecthon!
        </span>
        <h1 className="text-6xl max-w-[928px] max-sm:text-2xl max-sm:px-5 text-center leading-snug max-sm:leading-normal font-semibold mb-6">Front-End, UI Designer, Freelancer.✨</h1>
        <p className="text-xl max-sm:text-sm max-sm:px-10 text-zinc-600 max-w-[900px] text-center leading-relaxed">Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.</p>
      <Button className="flex mt-16 max-sm:mt-10 max-sm:mb-10 gap-2">
        Enviar mensagem
        <Send className="max-sm:w-4 max-sm:h-4"/>
      </Button>
      </div>
    </main>
  )
}