"use client";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export default function Home() {
  return (
    <div className="flex flex-col w-[700px] mx-auto text-sm">
      <ThemeSwitcher />
      <header className="flex flex-col w-full">
        <h1 className="font-semibold">Ecthon Almeida</h1>
        <p>Design Engenier</p>
      </header>
    </div>
  );
}
