import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { Portfolio } from "@/components/portfolio";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <Heading />
      <Portfolio />
      <Footer />
    </div>
  )
}
