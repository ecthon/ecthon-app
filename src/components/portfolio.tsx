'use client'

import { CardProject } from "./card-project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

export function Portfolio() {
  return (
    <section className="flex flex-col max-w-[1216px] mx-auto mt-20 max-sm:mt-10 gap-6 max-sm:gap-4 max-sm:p-5">
      <h1 className="text-zinc-500">PORTFOLIO</h1>
      <div className="flex items-center">
        <p className="text-5xl max-sm:text-2xl">Projetos <span className="text-zinc-500 font-extralight">recentes</span></p>
      </div>
      <div className="flex max-sm:flex-col gap-8 mt-10 max-sm:mt-8">
        
      </div>
    </section>
  )
}