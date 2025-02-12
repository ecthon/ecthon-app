import { Message02Icon } from "hugeicons-react";
import { Button } from "./ui/button";

export function Profile() {
  return (
    <div className="flex flex-col w-full h-auto justify-center max-sm:rounded-none rounded-2xl space-y-6 px-8 py-8 bg-cover bg-center bg-[url('/bg02.png')]">
      <div className="flex flex-col text-sm space-y-2">
        <p className="text-zinc-500 text-xs">ecthon almeida</p>
        <h1 className="font-bold text-xl">Desenvolvedor & UI Design</h1>
        <p className="text-zinc-300">
          Precisando de uma ajuda com desenvolvimento ou design do seu projeto?
          Eu posso ajudar.
        </p>
      </div>
      <div className="flex items-center">
        <Button className="justify-center bg-zinc-900 rounded-full text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 font-semibold flex items-center gap-2">
          <Message02Icon />
          Enviar mensagem
        </Button>
      </div>
    </div>
  );
}
