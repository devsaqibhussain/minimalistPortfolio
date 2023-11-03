import React from "react";
import { ModeToggle } from "./ModeToggle";
import NavMenuToggle from "./NavMenuToggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between items-center fixed top-0 right-0 left-0 py-2 container bg-white dark:bg-[#0c0a09] shadow-md dark:shadow-lg rounded-full">
        <div className="text-xl font-semibold ">
          <Link href={"/"}>Dev Saqib</Link>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />
          <NavMenuToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
