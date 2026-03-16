import { Profile } from "@/components/profile";
import { ElasticHover, ElasticHoverItem } from "@/components/ui/elastic-hover";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center w-3xl h-screen mx-auto">
      <div className="flex flex-col gap-4 my-20">
        <div className="flex flex-col gap-2">
          <p className="text-5xl w-2xs font-semibold text-white font-sans">Integrando</p>
          <p className="text-5xl font-semibold text-white font-sans">design e código.</p>
        </div>
        <p className="text-lg text-white/60 font-sans">Criando interfaces que equilibram usabilidade, performance e estética.</p>
      </div>
      <Profile />
      <section className="space-y-4">
        <div className="group flex items-center gap-2">
          <h2 className="text-sm font-semibold text-zinc-500">portfolio</h2>
          <span className="text-transparent group-hover:text-violet-500">•</span>
        </div>
        <ElasticHover
          className="flex gap-2 flex-wrap"
          highlightClassName="bg-zinc-800 border-zinc-800"
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((tech) => (
            <ElasticHoverItem key={tech} className="flex w-full h-full">
              <div className="flex flex-col w-full h-full px-4 py-2 rounded-full text-sm font-medium text-foreground cursor-pointer">
                {tech}
              </div>
            </ElasticHoverItem>
          ))}
        </ElasticHover>
      </section>
    </main>
  );
}
