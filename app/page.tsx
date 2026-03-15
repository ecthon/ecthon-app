import { Profile } from "@/components/profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center w-3xl h-screen mx-auto">
      <Profile />
      <div className="flex flex-col gap-4 my-20">
        <div className="flex flex-col gap-2">
          <p className="text-5xl w-2xs font-semibold text-white font-sans">Integrando</p>
          <p className="text-5xl font-semibold text-white font-sans">design e código</p>
        </div>
        <p className="text-lg text-white/60 font-sans">para criar interfaces que equilibram usabilidade, performance e estética.</p>
      </div>
    </main>
  );
}
