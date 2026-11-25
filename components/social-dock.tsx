import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

export interface SocialItem {
  name: string;
  href: string;
  icon: IconSvgElement;
}

const DEFAULT_SOCIALS: SocialItem[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin01Icon,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: NewTwitterIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
];

interface SocialDockProps {
  items?: SocialItem[];
  className?: string;
}

export function SocialDock({
  items = DEFAULT_SOCIALS,
  className = "",
}: SocialDockProps) {
  return (
    <nav
      aria-label="Redes sociais"
      className={`flex items-center justify-center gap-1 ${className}`}
    >
      {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
            className="group flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 sm:h-10 sm:w-10"
          >
            <HugeiconsIcon
              icon={item.icon}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </a>
      ))}
    </nav>
  );
}
