import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function Footer() {
  const currentYers = new Date().getFullYear()
  return (
    <footer className="max-sm:py-4">
      <div className="flex max-sm:flex-col-reverse w-[1216px] max-sm:w-full items-center justify-between mx-auto py-5 max-sm:py-2 max-sm:px-5 max-sm:gap-2">
        <span className="text-sm max-sm:text-xs text-zinc-500">&copy; {currentYers} - Code with Next.js by <span className="hover:text-blue-500 hover:underline cursor-pointer underline-offset-2">@ecthon</span>.</span>
        <div className="flex gap-1">
          <a href="#" target="_blank" className="p-2 max-sm:p-1 max-sm:border  rounded-lg hover:bg-black/5 dark:hover:bg-zinc-900/50 cursor-pointer"><LinkedInLogoIcon className="w-5 h-5 max-sm:w-4 max-sm:h-4"/></a>
          <a href="#" target="_blank" className="p-2 max-sm:p-1 max-sm:border  rounded-lg hover:bg-black/5 dark:hover:bg-zinc-900/50 cursor-pointer"><GitHubLogoIcon className="w-5 h-5 max-sm:w-4 max-sm:h-4"/></a>
          <a href="#" target="_blank" className="p-2 max-sm:p-1 max-sm:border  rounded-lg hover:bg-black/5 dark:hover:bg-zinc-900/50 cursor-pointer"><DiscordLogoIcon className="w-5 h-5 max-sm:w-4 max-sm:h-4"/></a>
        </div>
      </div>
    </footer>
  )
}