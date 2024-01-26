'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <header className="flex w-full items-center border-b fixed z-10">
      <div className="flex w-[1120px] justify-between mx-auto py-5">
        <h1 className="font-semibold text-xl">ecthon<span className="text-purple-600">.</span></h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HamburgerMenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Home</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Projetos</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Sobre</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Contato</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}