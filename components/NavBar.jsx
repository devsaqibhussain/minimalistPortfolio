import React from "react";
import { ModeToggle } from "./ModeToggle";
import  NavMenuToggle  from "./NavMenuToggle"
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" flex flex-row justify-between items-center fixed top-0 right-0 left-0 py-2 container">
      <div className="text-xl font-semibold ">
        <Link href={"/"}>Dev Saqib</Link>
      </div>
      <div className="flex items-center md:gap-4">
        <ModeToggle />
        <NavMenuToggle/>
      </div>
    </div>
  );
};

export default NavBar;
