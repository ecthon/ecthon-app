import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function App() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <Hero />
      <Projects />
    </div>
  );
}
