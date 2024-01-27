import { Grid2X2, Home, Info, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Menu() {

  return(
      <DropdownMenu>
          <DropdownMenuTrigger asChild className="group-focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              <Button variant="secondary" className="flex items-center gap-2 select-none" aria-expanded="false">
                <HamburgerMenuIcon className="w-5 h-5"/>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                  <span>Ecthon Almeida</span>
                  <span className="text-xs font-normal text-muted-foreground">ecthon@gmail.com</span>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href='#' className="flex gap-2">
                      <Home className="w-4 h-4"/>
                      <span>Home</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-rose-400">
                      <Grid2X2 className="w-4 h-4 mr-2"/>
                      <span>Projetos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-rose-400">
                      <Info className="w-4 h-4 mr-2"/>
                      <span>Sobre</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-rose-400">
                      <MessageSquare className="w-4 h-4 mr-2"/>
                      <span>Contato</span>
                  </DropdownMenuItem>
              </DropdownMenuLabel>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}