import { Message02Icon } from "hugeicons-react";
import { Button } from "./ui/button";

export function Profile() {
  return (
    <div className="flex flex-col w-full h-[200px] justify-center rounded-2xl space-y-6 px-8 bg-cover bg-center bg-[url('/bg02.png')]">
      <div className="flex flex-col text-sm space-y-2">
        <h1 className="font-bold text-xl">ecthon almeida</h1>
        <p className="text-zinc-500 text-md">Design Engineer</p>
      </div>
      <div className="flex items-center">
        <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 font-semibold flex items-center gap-2">
          <Message02Icon />
          Enviar mensagem
        </Button>
      </div>
    </div>
  );
}
