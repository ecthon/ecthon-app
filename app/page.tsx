"use client";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { FreeHash } from "@/components/free-hash";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <main className="flex-col space-y-20 md:space-y-12 items-center justify-center w-full max-w-3xl px-6 md:px-0 min-h-screen mx-auto">
      <Header />
      <Hero />
      <Works />
      <Experience />
      <FreeHash />
      <Footer />
    </main>
  );
}
