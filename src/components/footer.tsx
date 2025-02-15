"use client";
import {
  DigitalClockIcon,
} from "hugeicons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 px-2 py-1 rounded-lg border border-zinc-900">
      <DigitalClockIcon size={16} />
      <p className="flex w-[55px] text-xs text-zinc-500 font-bold">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col w-full py-4 md:py-6 space-y-4">
      <Link href={"/"} className="font-bold text-sm py-1 rounded-md mb-2 md:mb-0">
      ecthon.<span className="text-zinc-700">almeida</span>
      </Link>
      <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0">
      <p className="text-xs text-zinc-700 font-semibold">&copy; {new Date().getFullYear()} Ecthon. All rights reserved.</p>
      <Clock />
      </div>
    </footer>
  );
}
