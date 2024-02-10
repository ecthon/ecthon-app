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
    <Card className="flex-1 h-auto rounded-xl cursor-pointer dark:hover:bg-zinc-900/50 dark:border-zinc-900/20">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
    <CardFooter className="flex gap-2 justify-end">
      <a href="#" className="font-semibold px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-900/50 rounded-lg text-xs">Detalhes</a>
      <div className="flex gap-1">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-zinc-900/5 cursor-pointer">
                <GlobeIcon width={20} height={20}/>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              Ver online
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#" target="_blank" className="p-2 rounded-lg hover:bg-zinc-900/5 cursor-pointer">
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
  )
}