"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LaptopSettingsIcon, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ElasticHover, ElasticHoverItem } from "./ui/elastic-hover"

const themeOptions = [
  {
    value: "light",
    label: "Light",
    icon: Sun03Icon,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon02Icon,
  },
  {
    value: "system",
    label: "System",
    icon: LaptopSettingsIcon,
  },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 cursor-pointer rounded-lg border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 relative">
          <HugeiconsIcon
            icon={Sun03Icon}
            size={16}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-zinc-900 dark:text-zinc-200 ${mounted && theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
          />
          <HugeiconsIcon
            icon={Moon02Icon}
            size={16}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-zinc-900 dark:text-zinc-200 ${mounted && theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
          />
          <HugeiconsIcon
            icon={LaptopSettingsIcon}
            size={16}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-zinc-900 dark:text-zinc-200 ${mounted && theme === 'system' || !mounted ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((theme) => (
          <ElasticHover key={theme.value}>
            <ElasticHoverItem>
              <DropdownMenuItem onClick={() => setTheme(theme.value)} className="cursor-pointer">
                <HugeiconsIcon icon={theme.icon} size={16} color="currentColor" strokeWidth={2} className="text-zinc-500 dark:text-zinc-200 transition-colors duration-300" />
                {theme.label}
              </DropdownMenuItem>
            </ElasticHoverItem>
          </ElasticHover>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
