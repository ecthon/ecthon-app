import { HiMiniArrowDownRight } from "react-icons/hi2";
import { Card } from "./ui/card";

export function Portfolio() {
  return (
    <div className="flex flex-col w-[1216px] max-sm:w-full mx-auto gap-8 -mt-40 max-sm:-mt-12 max-sm:px-5">
      <div className="flex gap-1 items-center">
        <h1 className="font-extralight text-3xl">Portfolio</h1>
        <span><HiMiniArrowDownRight size={24}/></span>
      </div>
      
      <div className="grid grid-cols-6 grid-rows-6 gap-8 max-sm:gap-4 max-sm:flex max-sm:flex-col max-sm:w-full">
          <Card className="max-sm:flex max-sm:w-full h-[500px] max-sm:h-[400px] col-span-3 row-span-6 bg-rose-500 rounded-2xl"></Card>
          <Card className="max-sm:flex max-sm:w-full max-sm:h-[400px] col-span-3 row-span-3 col-start-4 bg-purple-600 rounded-2xl"></Card>
          <Card className="max-sm:flex max-sm:w-full max-sm:h-[400px] col-span-3 row-span-3 col-start-4 row-start-4 bg-emerald-500 rounded-2xl"></Card>
      </div>
    </div>
  )
}