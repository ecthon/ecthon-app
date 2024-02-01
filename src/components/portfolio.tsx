'use client'
import Image from "next/image";
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
      <Card className="flex flex-col flex-1 w-full dark:bg-bg-gray-950">
        <CardHeader>
          <CardTitle>Pizza.shop API</CardTitle>
          <CardDescription>Aplicação para controle financeiro</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src='https://github.com/ecthon.png' width={400} height={400} className="rounded-lg" alt="" />
        </CardContent>
        <CardFooter className="flex justify-between">
            <a href="#" className="font-semibold px-4 py-2 hover:bg-black/5 rounded-lg text-sm border">Detalhes</a>
          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-black/5 cursor-pointer border">
                    <GlobeIcon width={20} height={20}/>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Ver online
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-black/5 cursor-pointer border">
                    <GitHubLogoIcon width={20} height={20}/>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Visite o repositório
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
          </div>
        </CardFooter>
      </Card>
      <Card className="flex flex-col flex-1 w-full dark:bg-bg-gray-950">
        <CardHeader>
          <CardTitle>Pizza.shop API</CardTitle>
          <CardDescription>Aplicação para controle financeiro</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src='https://github.com/ecthon.png' width={400} height={400} className="rounded-lg" alt="" />
        </CardContent>
        <CardFooter className="flex justify-between">
            <a href="#" className="font-semibold px-4 py-2 hover:bg-black/5 rounded-lg text-sm border">Detalhes</a>
          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-black/5 cursor-pointer border">
                    <GlobeIcon width={20} height={20}/>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Ver online
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-black/5 cursor-pointer border">
                    <GitHubLogoIcon width={20} height={20}/>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Visite o repositório
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
          </div>
        </CardFooter>
      </Card>
      <Card className="flex flex-col flex-1 w-full dark:bg-bg-gray-950">
        <CardHeader>
          <CardTitle>Pizza.shop API</CardTitle>
          <CardDescription>Aplicação para controle financeiro</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src='https://github.com/ecthon.png' width={400} height={400} className="rounded-lg" alt="" />
        </CardContent>
        <CardFooter className="flex justify-between">
            <a href="#" className="font-semibold px-4 py-2 hover:bg-black/5 rounded-lg text-sm border">Detalhes</a>
          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-black/5 cursor-pointer border">
                    <GlobeIcon width={20} height={20}/>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Ver online
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-black/5 cursor-pointer border">
                    <GitHubLogoIcon width={20} height={20}/>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Visite o repositório
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
          </div>
        </CardFooter>
      </Card>
      </div>
    </section>
  )
}