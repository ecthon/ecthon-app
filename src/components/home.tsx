import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";

export function Home() {
    return (
        <div className="flex flex-col w-full h-auto">
            <Profile />
            <Projects />
        </div>
    )
}
