"use client";
import {
  DigitalClockIcon,
} from "hugeicons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded-lg border border-zinc-900">
      <DigitalClockIcon size={16} />
      <p className="font-bold">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-4 justify-between py-4">
      <Link href={"/"} className="font-bold text-sm py-1 px-2 rounded-md">
      ecthon.<span className="text-zinc-700">almeida</span>
      </Link>

      <div className="text-zinc-500 text-[11px] w-full md:w-[90px] px-2 flex items-center gap-2 justify-center md:justify-start">
      <Clock />
      </div>
    </footer>
  );
}
