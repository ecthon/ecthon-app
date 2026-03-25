import { 
    CodeSquareIcon, 
    CursorEdit02FreeIcons, 
    DatabaseLightningIcon,
    InstagramIcon,
    Linkedin01Icon,
    Linkedin02Icon,
    GithubIcon,
    Globe02Icon,
    DiscordIcon
} from "@hugeicons/core-free-icons";

export const EXPERIENCES_DATA = [
    {
        title: "UI Design",
        tools: "Figma, Adobe XD, Sketch",
        icon: CursorEdit02FreeIcons
    },
    {
        title: "Front-end",
        tools: "React, Next.js, TypeScript",
        icon: CodeSquareIcon
    },
    {
        title: "Back-end",
        tools: "Node.js, .NET, Python",
        icon: DatabaseLightningIcon
    }
];

export const SOCIAL_LINKS = [
    {
        name: "ecthon",
        url: "https://instagram.com/ecthon",
        icon: InstagramIcon,
        showName: true,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ecthon",
        icon: Linkedin01Icon,
        showName: false,
    },
    {
        name: "GitHub",
        url: "https://github.com/ecthon",
        icon: GithubIcon,
        showName: false,
    }
];

export type WorkItemCompleted = {
    id: string;
    type: "completed";
    title: string;
    href: string;
    images: { desktop: string; mobile: string };
    rowSpan: number;
};

export type WorkItemBuilding = {
    id: string;
    type: "building";
    title: string;
    statusText: string;
    href: string;
    rowSpan: number;
};

export type WorkItem = WorkItemCompleted | WorkItemBuilding;

export const WORKS_DATA: WorkItem[] = [
    {
        id: "work-1",
        title: "Projeto sendo construído...",
        statusText: "Em breve...",
        type: "building",
        href: "#",
        rowSpan: 1
    },
    {
        id: "work-2",
        title: "Cartão de embarque",
        type: "completed",
        href: "https://boarding-pass-seven.vercel.app/",
        images: {
            desktop: "/img-ticket.webp",
            mobile: "/img-ticket-mobile.webp"
        },
        rowSpan: 2
    },
    {
        id: "work-3",
        title: "Projeto sendo construído...",
        statusText: "Em breve...",
        type: "building",
        href: "#",
        rowSpan: 1
    }
];

export const LINKS_DATA = [
    {
        icon: Globe02Icon,
        title: "Portfolio",
        url: "https://www.ecthon.me",
    },
    {
        icon: GithubIcon,
        title: "Github",
        url: "https://github.com/ecthon",
    },
    {
        icon: Linkedin02Icon,
        title: "Linkedin",
        url: "https://linkedin.com/in/ecthon",
    },
    {
        icon: InstagramIcon,
        title: "Instagram",
        url: "https://instagram.com/ecthon",
    },
    {
        icon: DiscordIcon,
        title: "Discord",
        url: "https://discord.gg/zdNXzBB46h",
    },
];
