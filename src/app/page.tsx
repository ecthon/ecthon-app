"use client";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full px-4 md:px-6 lg:w-[1120px] mx-auto">
        <Header />
        <HeroSection />
        <PortfolioSection />
      </div>
    </div>
  );
}
