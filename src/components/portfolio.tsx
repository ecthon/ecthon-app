'use client'

import Image from "next/image";
import { CardProject } from "./card-project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { ArrowTopLeftIcon, ArrowTopRightIcon, GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="flex flex-col max-w-[1216px] mx-auto mt-20 mb-20 max-sm:mt-10 gap-6 max-sm:gap-4 max-sm:p-5">
      <h1 className="text-zinc-500">PORTFOLIO</h1>
      <div className="flex items-center">
        <p className="text-5xl max-sm:text-2xl">Projetos <span className="text-zinc-500 font-extralight">recentes</span></p>
      </div>
      <div className="mx-auto w-[1216px] max-sm:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">


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


        </div>
      </div>

    </section>
  )
}