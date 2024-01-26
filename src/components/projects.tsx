'use client'
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function Projects() {
  return (
    <div className="flex flex-col w-[1216px] max-sm:w-full h-[800px] mx-auto mt-[-150px] max-sm:mt-0 max-sm:px-5">
      <h2 className="text-5xl max-sm:text-2xl font-thin mb-12 max-sm:mb-6 text-gray-400"><span className="font-normal text-gray-900">Projetos </span>recentes</h2>  
      <div className="flex max-sm:flex-col flex-wrap gap-8 max-sm:gap-4">
        <Card className="flex flex-col flex-1 w-full">
          <CardHeader>
            <CardTitle>Pizza.shop API</CardTitle>
            <CardDescription>Aplicação para controle financeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src='https://github.com/ecthon.png' width={400} height={400} alt="" />
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
        <Card className="flex flex-col flex-1 w-full">
          <CardHeader>
            <CardTitle>Pizza.shop API</CardTitle>
            <CardDescription>Aplicação para controle financeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src='https://github.com/ecthon.png' width={400} height={400} alt="" />
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
        <Card className="flex flex-col flex-1 w-full">
          <CardHeader>
            <CardTitle>Pizza.shop API</CardTitle>
            <CardDescription>Aplicação para controle financeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src='https://github.com/ecthon.png' width={400} height={400} alt="" />
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
    </div>
  )
}