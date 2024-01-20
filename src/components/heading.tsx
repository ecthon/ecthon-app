import { Send } from "lucide-react";
import { Button } from "./ui/button";

export function Heading () {

  return (
    <main className="flex flex-col min-w-full min-h-screen bg-[url('../../public/bg-blur.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center mt-40 min-w-[1120px] h-auto mx-auto">
        <span className="text-base mb-10 text-zinc-800 bg-white/25 px-4 py-1 rounded-full">Olá, me chamo Ecthon!</span>
        <h1 className="text-6xl max-w-[928px] text-center leading-snug font-semibold mb-6">Front-End, UI Designer, Freelancer.✨</h1>
        <p className="text-xl text-zinc-600 max-w-[900px] text-center leading-relaxed">Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.</p>
      <Button className="flex mt-16 gap-2">
        Enviar mensagem
        <Send />
      </Button>
      </div>
    </main>
  )
}