"use client";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center w-full max-w-3xl px-6 md:px-0 min-h-screen mx-auto">
      <Header />
      <Hero />
      <Works />
      <Experience />
      <Footer />
    </main>
  );
}
