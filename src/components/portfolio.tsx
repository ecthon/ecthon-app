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
          <CardProject title='Title here' />
          <CardProject title='Title here' />
          <CardProject title='Title here' />
        </div>
      </div>

    </section>
  )
}