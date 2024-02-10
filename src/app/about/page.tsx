import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header/header";

export default function About() {
  return (
    <section>
      <div className="flex flex-col max-w-[500px] mx-auto mt-40 max-sm:mt-14 max-sm:px-7">
        <Avatar>
          <AvatarImage src="https://github.com/ecthon.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col max-w-[500px] mt-6">
          <span className="font-semibold">Olá, me chamo Ecthon Almeida.</span>
          <p className="flex mt-4 text-zinc-500 max-sm:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus amet mollitia quae velit quibusdam, officiis provident cum beatae, tempore distinctio explicabo dolorum a nobis vitae obcaecati sit veniam quidem eos!</p>
        </div>
        <span className="font-semibold mt-6">Skills</span>
        <p className="text-zinc-500 mt-4 max-sm:text-sm">TypeScript • React.js • Next.js • Tailwind CSS • Git...</p>
      </div>

    </section>
  )
}