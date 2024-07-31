import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { IoLogoVercel } from "react-icons/io5";

export function Projects() {
  return (
    // <div className="flex items-center justify-center mx-auto w-[928px] max-sm:w-full h-screen max-sm:-mt-12 max-sm:px-5 bg-red-400"> 
    //   <div className="flex gap-2 w-full h-[500px]">
    //     <Card className="flex flex-col bg-transparent p-1 gap-1 border-zinc-900 w-2/3">
    //       <CardContent className="p-0 rounded-lg overflow-hidden relative">
    //         <Image src="https://www.github.com/ecthon.png" alt="" width={500} height={500} className="w-full h-full" />
    //         <div className="absolute flex items-end w-full align-bottom inset-0 bg-gradient-to-t from-black/50 to-transparent">
    //           <p className="text-zinc-50 text-sm p-4">Pizzashop</p>
    //         </div>
    //       </CardContent>
    //       <CardFooter className="p-0">
    //         <Button variant="outline" className="w-full flex gap-2 bg-zinc-900 hover:bg-zinc-800 border-0 text-zinc-300 hover:text-zinc-50">
    //           Ver online
    //           <IoLogoVercel />
    //         </Button>
    //       </CardFooter>
    //     </Card>
    //   </div>
    // </div>  
      
    <div className="flex w-[1120px] h-[500px] bg-orange-500 gap-4 mx-auto">
      <div className="flex w-2/4 h-full bg-purple-700">
        <img src="https://www.github.com/ecthon.png" alt="" className="w-full" />
      </div>
      <div className="flex w-2/4 h-[500px] flex-col bg-blue-500">
        <div className="flex w-full h-2/4 bg-yellow-500">
          <img src="https://www.github.com/ecthon.png" alt="" className="w-full" />
        </div>
        <div className="flex w-full bg-red-500">
          <img src="https://www.github.com/ecthon.png" alt="" className="w-full h-2/4" />
        </div>
      </div>
    </div>
  )
}