'use client'
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
export function Menu() {

  return(
    <NavigationMenu className="max-sm:hidden">
    <NavigationMenuList className="flex gap-1">
      <Link href="#">
        <NavigationMenuItem className="font-normal dark:text-zinc-400 text-sm px-4 py-2 hover:text-black hover:bg-black/5 dark:hover:bg-zinc-900 rounded-lg">
          Home
        </NavigationMenuItem>
      </Link>
      <Link href="#">
        <NavigationMenuItem className="font-normal dark:text-zinc-400 text-sm px-4 py-2 hover:text-black hover:bg-black/5 dark:hover:bg-zinc-900 rounded-lg">
          Projetos
        </NavigationMenuItem>
      </Link>
      <Link href="#">
        <NavigationMenuItem className="font-normal dark:text-zinc-400 text-sm px-4 py-2 hover:text-black hover:bg-black/5 dark:hover:bg-zinc-900 rounded-lg">
          Sobre
        </NavigationMenuItem>
      </Link>
      <Link href="#">
        <NavigationMenuItem className="font-normal dark:text-zinc-400 text-sm px-4 py-2 hover:text-black hover:bg-black/5 dark:hover:bg-zinc-900 rounded-lg">
          Contato
        </NavigationMenuItem>
      </Link>
    </NavigationMenuList>
  </NavigationMenu>
  )
}