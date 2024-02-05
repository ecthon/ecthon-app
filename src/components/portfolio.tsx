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
        <Card className="flex-1 h-auto rounded-xl cursor-pointer dark:hover:bg-zinc-900/50 dark:border-transparent">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description lorem ipsum dolor react.js, next.js, tailwind css end git.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, perferendis! Cum consequuntur cupiditate delectus, rerum, ad exercitationem asperiores laboriosam incidunt error eveniet dolorum doloremque nemo. Odit ipsam vel iste autem.</p>
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <a href="#" className="font-semibold px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-900/50 rounded-lg text-xs">Detalhes</a>
            <div className="flex gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer">
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
                    <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer">
                      <GitHubLogoIcon width={20} height={20}/>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    Ver repositório
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </div>
        </CardFooter>
        </Card>
        <Card className="flex-1 h-auto rounded-xl cursor-pointer dark:hover:bg-zinc-900/50 dark:border-transparent">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description lorem ipsum dolor react.js, next.js, tailwind css end git.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, perferendis! Cum consequuntur cupiditate delectus, rerum, ad exercitationem asperiores laboriosam incidunt error eveniet dolorum doloremque nemo. Odit ipsam vel iste autem.</p>
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <a href="#" className="font-semibold px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-900/50 rounded-lg text-xs">Detalhes</a>
            <div className="flex gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer">
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
                    <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer">
                      <GitHubLogoIcon width={20} height={20}/>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    Ver repositório
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