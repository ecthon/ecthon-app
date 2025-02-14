import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";

export function Header() {
  return (
    <header className="flex w-full justify-between">
      <Link href={"/"} className="flex items-center gap-1">
        <p className="font-bold text-sm py-1 px-2 rounded-md bg-zinc-900">
          ecthonalmeida
        </p>
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
