import { Header } from "@/components/header";
import { Heading } from "@/components/heading";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50 w-full min-h-screen">
      <Header />
      <Heading />
    </div>
  )
}
