"use client";
import { Buiding } from "@/components/buiding";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Technologies } from "@/components/technologies";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-auto">
      <Buiding />
      <Header />
      <div className="flex flex-col max-w-5xl gap-20 md:gap-32 w-full px-6 md:px-8 min-h-screen mx-auto pt-8 md:pt-12 pb-16">
        <Hero />
        <Works />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
