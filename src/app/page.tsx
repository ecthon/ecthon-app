import { Header } from "@/components/header/header";
import { Heading } from "@/components/heading";
import { Portfolio } from "@/components/portfolio";
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Home() {
  return (
    <>
      <Header />
      <Heading />
      <Portfolio />
    </>
  )
}
