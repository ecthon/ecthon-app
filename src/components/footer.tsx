import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full max-w-[1096px] mx-auto flex items-center justify-between p-4 text-zinc-500">
            <p className="text-sm">© 2025 • <b>Base²²</b>.</p>
            <p className="text-sm">Made with ❤️ by <Link href={'#'} className="font-semibold hover:text-zinc-800">@ecthon</Link>.</p>
        </footer>
    )
}
