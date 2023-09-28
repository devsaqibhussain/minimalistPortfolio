"use client";
import React from "react";
import Typed from "typed.js";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ContactsList, HiringSites } from "@/utils/constants"
import Link from "next/link";

const homePage = () => {
  const anime = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(anime.current, {
      strings: [
        "a Frontend Developer.",
        "a Mobile App Developer.",
        "a JavaScript Enthusiast.",
        "a Mechanical Engr.",
      ],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-[85vh] flex justify-center items-center ">
      <div className=" lg:w-3/4 h-[65%] flex flex-col lg:flex-row items-baseline justify-evenly lg:justify-between lg:items-center">
        <div className="w-full lg:w-auto mb-10">
          <h1 className=" text-xl font-semibold sm:text-3xl lg:text-3xl pl-10 lg:pl-0">
            Hi, I&apos;m <span>Saqib Hussain,</span>
            <br />
            <span ref={anime}></span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 items-center mt-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="customOutline" size="lg">
                  Hire me
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                { HiringSites.map((site)=>(
                <DropdownMenuItem key={site.id}>
                <Link href={site.href} target="_blank"className="flex items-center gap-2">{site.icon}{site.name}</Link>
                </DropdownMenuItem>
                )) }
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="lg">
                  Contact me
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
              { ContactsList.map((contact)=>(
                <DropdownMenuItem key={contact.id}>
                <Link href={contact.href} target="_blank" className="flex items-center gap-2">{contact.icon}{contact.name}</Link>
                </DropdownMenuItem>
                )) }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div>
          <Image
            src={"/programmerLight.svg"}
            width={500}
            height={500}
            className="dark:hidden"
            alt="2d art of web developer"
          />
          <Image
            src={"/programmer.svg"}
            width={500}
            height={500}
            className="hidden dark:block"
            alt="2d art of web developer"
          />
        </div>
      </div>
    </div>
  );
};

export default homePage;
