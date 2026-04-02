"use client";
import { Buiding } from "@/components/buiding";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-auto">
      <Buiding />
      <Header />
      <div className="flex flex-col max-w-5xl space-y-20 md:space-y-12 items-center justify-center w-full px-6 md:px-0 min-h-screen mx-auto">
        <Hero />
        <Works />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
