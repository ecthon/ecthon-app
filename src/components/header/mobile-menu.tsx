import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChatBubbleIcon, DashboardIcon, DiscordLogoIcon, FaceIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BarChart2 } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
        <SheetTrigger className="hidden max-sm:flex">
          <BarChart2 className="-rotate-90"/>
        </SheetTrigger>
        <SheetContent className="px-4">
          
          <div className="flex flex-col mt-6 gap-4">
            <Link href="#" className="flex items-center px-4 py-2 rounded-full  text-base dark:text-gray-500 dark:bg-zinc-800">Home</Link>
            <span className="font-semibold px-4">Recursos</span>
            <Link href="#" className="flex items-center px-4 gap-2 text-base dark:text-gray-500">
              <DashboardIcon />
              Projetos</Link>
            <Link href="#" className="flex items-center px-4 gap-2 text-base dark:text-gray-500">
              <FaceIcon />
              Sobre
            </Link>
            <Link href="#" className="flex items-center px-4 gap-2 text-base dark:text-gray-500">
              <ChatBubbleIcon />
              Contato
            </Link>

            <span className="font-semibold px-4">Social</span>
            <Link href="#" className="flex items-center px-4 gap-2 text-base dark:text-gray-500">
              <LinkedInLogoIcon />
              Linkedin
            </Link>
            <Link href="#" className="flex items-center px-4 gap-2 text-base dark:text-gray-500">
              <GitHubLogoIcon />
              Github
            </Link>
            <Link href="#" className="flex items-center px-4 gap-2 text-base dark:text-gray-500">
              <DiscordLogoIcon />
              Discord
            </Link>
          </div>
        </SheetContent>
      </Sheet>
  )
}