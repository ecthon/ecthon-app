import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { IoLogoVercel } from "react-icons/io5";

export function Projects() {
  return (
    <div className="flex max-sm:flex-col max-sm:h-auto max-sm:w-full max-sm:px-5 w-[928px] h-[500px] gap-2 mx-auto mb-[200px]">
      <Card className="group flex max-sm:h-full w-full h-full flex-col bg-transparent p-1 gap-1 border-zinc-900 overflow-hidden">
        <CardContent className="flex-1 w-full p-0 rounded-lg overflow-hidden relative">
          <img src="https://www.github.com/ecthon.png" alt="" className="hover:group-hover:scale-105 transition-transform duration-500 object-cover max-sm:w-full max-sm:h-auto w-full h-full" />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-zinc-50 text-sm">Pizzashop</p>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <Button variant="outline" className="w-full flex gap-2 bg-zinc-900 hover:bg-zinc-800 border-0 text-zinc-300 hover:text-zinc-50">
            Ver online
            <IoLogoVercel />
          </Button>
        </CardFooter>
      </Card>

      <div className="flex flex-col w-full gap-2">
        <Card className="flex flex-col w-full max-sm:h-full h-[300px] bg-transparent p-1 gap-1 border-zinc-900 overflow-hidden transition-all duration-300 ease-in-out hover:h-full">
          <CardContent className="flex-1 w-full p-0 rounded-lg overflow-hidden relative">
            <img src="https://www.github.com/ecthon.png" alt="" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4">
              <p className="text-zinc-50 text-sm">Pizzashop</p>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <Button variant="outline" className="w-full flex gap-2 bg-zinc-900 hover:bg-zinc-800 border-0 text-zinc-300 hover:text-zinc-50">
              Ver online
              <IoLogoVercel />
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col w-full max-sm:h-full h-[300px] bg-transparent p-1 gap-1 border-zinc-900 overflow-hidden transition-all duration-300 ease-in-out hover:h-full">
          <CardContent className="flex-1 w-full p-0 rounded-lg overflow-hidden relative">
            <img src="https://www.github.com/ecthon.png" alt="" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4">
              <p className="text-zinc-50 text-sm">Pizzashop</p>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <Button variant="outline" className="w-full flex gap-2 bg-zinc-900 hover:bg-zinc-800 border-0 text-zinc-300 hover:text-zinc-50">
              Ver online
              <IoLogoVercel />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}