'use client'

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [ changeTheme, setChangeTheme ] = React.useState(true)
  const { setTheme } = useTheme()


  function handleChangeTheme() {
    setChangeTheme(!changeTheme)
  }

  changeTheme ? setTheme("light") : setTheme("dark")

  return (
    <Button onClick={handleChangeTheme} variant="ghost" size="icon" className="flex max-sm:w-8 max-sm:h-8 items-center justify-center p-0">
      <SunIcon className="h-[1.2rem] max-sm:h-4 max-sm:w-4 w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] max-sm:h-4 max-sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
