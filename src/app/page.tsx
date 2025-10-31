import { Profile } from "@/components/sections/profile";
import { Projects } from "@/components/sections/projects";

export default function App() {
  return (
    <div className="flex flex-col w-full">
      <Profile />
      <Projects />
    </div>
  );
}
