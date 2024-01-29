import { ChatBubbleIcon, DashboardIcon, DiscordLogoIcon, FaceIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function MobileMenu(props: any) {
  function handleClick() {
    props.onClick();
  }

  return (
    <div className="flex flex-col w-full h-screen bg-white px-4 fixed">
      <header className="flex w-full items-center mb-4 justify-between border-b py-2">
        <h1 className="font-semibold text-xl max-sm:text-sm">ecthon<span className="text-blue-600">.</span></h1>
        <Button
          className="flex w-8 h-8 items-center justify-center p-0 bg-black/5"
          onClick={handleClick}
        >
          <X className="w-4 h-4 text-yellow-50"/>
        </Button>
      </header>
      <div className="flex flex-col">
        <Link href="#" className="text-base py-2 px-3 rounded-full bg-slate-400 mb-4">Homepage</Link>
      </div>
      <div className="flex flex-col py-2 px-3 gap-4">
          <span className="font-semibold">Recursos</span>
          <Link href="#" className="flex items-center gap-2 text-base">
            <DashboardIcon />
            <span>Projetos</span></Link>
          <Link href="#" className="flex items-center gap-2 text-base">
            <FaceIcon />
            <span>Sobre</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-base">
            <ChatBubbleIcon />
            <span>Contato</span>
          </Link>
      </div>
      <div className="flex flex-col py-2 px-3 gap-4">
          <span className="font-semibold">Social</span>
          <Link href="#" className="flex items-center gap-2 text-base">
            <LinkedInLogoIcon />
            <span>Linkedin</span></Link>
          <Link href="#" className="flex items-center gap-2 text-base">
            <GitHubLogoIcon />
            <span>Github</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-base">
            <DiscordLogoIcon />
            <span>Discord</span>
          </Link>
      </div>
    </div>
  )
}