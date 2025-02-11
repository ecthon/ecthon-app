"use client";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";
import { Footer } from "@/components/footer";
import { Profile } from "@/components/profile";
import { ArrowRight02Icon } from "hugeicons-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[600px] mx-auto text-base px-4 py-6 md:py-10 space-y-8">
      {/* <Header /> */}
      <Profile />
      <div className="flex flex-col">
        <div className="flex w-full justify-between px-4">
          <h2 className="font-semibold text-sm">Projetos</h2>
          <div className="group flex items-center gap-2">
            <button className="text-xs text-purple-500">ver todos</button>
            <ArrowRight02Icon className="text-purple-500 size-0 group-hover:size-4 md:group-hover:size-4 transition-all duration-300" />
          </div>
        </div>
        <CardHoverEffectDemo />
      </div>
      <Footer />
    </div>
  );
}
