"use client"
import React from "react";
import { NavLinks } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {AiOutlineMenu} from "react-icons/ai"

const NavMenuToggle = () => {
  const pathname = usePathname()
  return (
    <>
      <ul className="  gap-4 hidden md:flex">
        {NavLinks.map((navLink) => (
          <Link href={navLink.href} key={navLink.id}>
            <li className={` ${pathname === navLink.href && "font-semibold border-b"} `}>{navLink.text}</li>
          </Link>
        ))}
      </ul>
      <div className=" md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" >
             <AiOutlineMenu className="h-[1.2rem] w-[1.2rem]"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {NavLinks.map((navLink) => (
            <Link href={navLink.href} key={navLink.id}>
              <DropdownMenuItem>{navLink.text}</DropdownMenuItem>
            </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default NavMenuToggle;
