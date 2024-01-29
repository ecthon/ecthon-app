'use client'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";
import { Button } from "../ui/button";
import { useState } from "react";

export function Header() {
  const [isActive, setIsActive] = useState(false)
  function handleActive() {
    setIsActive(!isActive)
  }
  return (
    <>
      <header className="flex w-full items-center border-b bg-white/50 filter backdrop-blur-sm fixed">
        <div className="flex w-[1216px] justify-between items-center mx-auto py-5 max-sm:py-2 max-sm:px-5">
          <h1 className="font-semibold text-xl max-sm:text-sm">ecthon<span className="text-blue-600">.</span></h1>
          <Menu />
          <Button 
            className="flex w-8 h-8 items-center justify-center p-0 bg-black/5"
            onClick={handleActive}
          >
            <HamburgerMenuIcon className="w-4 h-4 text-yellow-50"/>
          </Button>
        </div>
      </header>
      {isActive ? <MobileMenu onClick={handleActive}/> : <></>}
    </>
  )
}