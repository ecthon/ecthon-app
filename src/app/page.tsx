"use client";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export default function Home() {
  return (
    <div className="flex flex-col w-[600px] mx-auto text-sm py-10 space-y-4">
      <div className="flex w-full justify-end">
        <ThemeSwitcher />
      </div>
      <header className="flex flex-col w-full">
        <h1 className="font-semibold">Ecthon Almeida</h1>
        <p className="text-zinc-300">Design Engineer</p>
      </header>
      <div>
        <p className="text-zinc-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          consequatur reiciendis enim fugiat nobis velit ut, amet expedita?
          Sequi excepturi nostrum eveniet quasi debitis. Est temporibus facere
          non a neque!
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold">Projetos</h2>
          <button className="text-zinc-400">Ver todos</button>
        </div>
        <CardHoverEffectDemo />
      </div>
      <Footer />
    </div>
  );
}
