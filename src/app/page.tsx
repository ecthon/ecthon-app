import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col dark:bg-zinc-950 bg-slate-50 w-full h-auto">
      <Header />
      <Heading />
      <Projects />
      <Footer />
    </div>
  )
}
