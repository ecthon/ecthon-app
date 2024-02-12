import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

interface ICardProps {
  title: String,
  subtitle: String,
  description: String,
}

export function CardProject({title, subtitle, description }: ICardProps) {
  return (
    <div className="group rounded-lg gap-4 hover:bg-zinc-900/50 max-sm:bg-zinc-900/50 p-4 cursor-pointer">
      <div className="flex flex-col w-full h-[200xp]">
        <Avatar className="flex w-full rounded-lg h-[200px]">
          <AvatarImage src="https://github.com/ecthon.png" />
        </Avatar>
      </div>
      <div className="group flex justify-between items-center mt-4">
        <p className="font-semibold text-xl text-zinc-400">DT Money</p>
        <ArrowUpRight className="group-hover:text-emerald-500 w-6 h-6 text-transparent"/>
      </div>
  </div>
  )
}