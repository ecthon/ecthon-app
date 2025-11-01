import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { SendMessage } from "@/components/sections/send-message";

export default function App() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <Hero />
      <Projects />
      <SendMessage />
    </div>
  );
}
