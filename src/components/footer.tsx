"use client";

import { Github01Icon, Linkedin02Icon, Location03Icon } from "hugeicons-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-between text-zinc-500">
      <div className="flex items-center gap-2">
        <Location03Icon size={20} />
        <p>manaus, am</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link href={"#"} className="p-2 rounded-lg hover:bg-zinc-900">
          <Linkedin02Icon size={20} />
        </Link>
        <Link href={"#"} className="p-2 rounded-lg hover:bg-zinc-900">
          <Github01Icon size={20} />
        </Link>
      </div>
    </footer>
  );
}
