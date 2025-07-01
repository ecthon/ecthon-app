import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin02Icon, Location01Icon } from '@hugeicons/core-free-icons'

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <header className="flex items-center justify-between py-4 px-10 text-white border-b border-zinc-200">
        <Link href={'#'} className="text-zinc-900 font-bold">Base²²</Link>
        <div>
          <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={24} height={24} className="rounded-full" />
        </div>
      </header>

      <div className="flex w-[1112px] mx-auto items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image src={'https://github.com/ecthon.png'} alt="Avatar" width={64} height={64} className="rounded-full" />
          <div className="flex flex-col">
            <p className="font-semibold text-zinc-900">Ecthon Almeida</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={1.5} />
                <p className="text-sm text-zinc-500">Manaus</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <Link href={'#'} className="group flex p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
            <HugeiconsIcon icon={Linkedin02Icon} size={18} strokeWidth={2} className="text-zinc-500" />
          </Link>
          <Link href={'#'} className="group flex p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
            <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={2} className="text-zinc-500" />
          </Link>
          <button className="flex py-1.5 px-2 rounded-lg cursor-pointer font-semibold bg-zinc-100 text-sm">Send mensagem</button>
        </div>
      </div>

      <div className="w-[1112px] mx-auto flex gap-4">
        <div className="group cursor-pointer w-[360px] h-[420px] border border-zinc-100 rounded-2xl p-1">
          <div className="flex flex-col justify-end h-full bg-gray-100 rounded-[12px] overflow-hidden">
            <div className="flex w-full items-center p-4 bg-white/20 backdrop-blur-sm">
              <h2 className="text-md font-semibold text-zinc-900">Nome do projeto.</h2>
            </div>
          </div>
        </div>
        <div className="w-[360px] bg-gray-100 p-4 rounded-2xl">
          <h2 className="text-lg font-semibold mb-2">Card 2</h2>
          <p>Conteúdo do card 2.</p>
        </div>
        <div className="w-[360px] bg-gray-100 p-4 rounded-2xl">
          <h2 className="text-lg font-semibold mb-2">Card 3</h2>
          <p>Conteúdo do card 3.</p>
        </div>
      </div>
    </div>
  );
}
