import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full max-w-[1096px] border-t-1 border-zinc-400/15 mx-auto flex flex-col md:flex-row items-center justify-between p-4 text-zinc-500 gap-2 md:gap-0">
            <p className="text-sm">© 2025 • <b>Base²²</b></p>
            <p className="text-sm">Made with ☕ by <Link href={'https://github.com/ecthon'} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-zinc-800">@ecthon</Link>.</p>
        </footer>
    )
}
