import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";

export function Header() {
  return (
    <header className="flex w-full justify-between items-center py-4">
      <Link href={"/"} className="font-bold text-sm py-1 px-2 rounded-md">
        ecthon.<span className="text-zinc-700">almeida</span>
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
