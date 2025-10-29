import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";

export function Home() {
    return (
        <div className="flex flex-col w-full h-auto space-y-6">
            <Profile />
            <Projects />
        </div>
    )
}
