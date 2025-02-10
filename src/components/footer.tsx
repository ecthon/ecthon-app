"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DigitalClockIcon,
  Github01Icon,
  Linkedin02Icon,
  Location03Icon,
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
    <div className="flex items-center gap-2 p-1 rounded-lg">
      <DigitalClockIcon size={16} />
      <p className="font-bold">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center gap-4 justify-between text-zinc-500 p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex max-sm:text-xs items-center gap-2 p-2 rounded-lg hover:bg-zinc-900">
              <Location03Icon size={20} />
              <p>Manaus, AM</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{Clock()}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex items-center justify-center gap-2 max-sm:gap-1">
        <Link
          href={"#"}
          className="p-2 rounded-lg hover:bg-zinc-900 max-sm:bg-zinc-900"
        >
          <Linkedin02Icon size={20} className="max-sm:size-4" />
        </Link>
        <Link
          href={"#"}
          className="p-2 rounded-lg hover:bg-zinc-900 max-sm:bg-zinc-900"
        >
          <Github01Icon size={20} className="max-sm:size-4" />
        </Link>
      </div>
    </footer>
  );
}
