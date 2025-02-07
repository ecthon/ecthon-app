"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={toggleTheme}
      className="flex items-center w-[40px] h-[18px] data-[state=checked]:bg-zinc-800 data-[state=unchecked]:bg-zinc-100"
    >
      <div className="flex  items-center justify-center w-[1rem] h-[1rem] rounded-full">
        {theme === "light" ? (
          <Sun className="size-3 w-[0.9rem] text-zinc-950" />
        ) : (
          <Moon className="zize-3 text-white" />
        )}
      </div>
    </Switch>
  );
}
