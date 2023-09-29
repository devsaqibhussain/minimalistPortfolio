"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Certifications, myStack } from "@/utils/constants";

const page = () => {
  return (
    <div>
      <div className=" text-lg font-bold text-center mt-20 underline underline-offset-8 ">
        ABOUT ME
      </div>
      <div className=" mt-5 text-start flex flex-col justify-center items-center gap-5">
        <p className="indent-5 max-w-[1000px]">
          Hello, I'm Saqib Hussain, a passionate Frontend Web Developer with a
          unique journey. I made the exciting transition from a background in
          Mechanical Engineering to the dynamic world of web development. This
          transition has not only been a career shift but a transformation into
          a realm where creativity, problem-solving, and innovation converge.
        </p>
        <p className=" indent-5 max-w-[1000px]">
          My expertise lies in crafting exceptional user experiences using
          modern web technologies. I thrive on turning ideas into intuitive and
          visually appealing web applications. With a strong foundation in React
          and Next.js, I bring your digital dreams to life. Whether it's
          building interactive web interfaces, optimizing performance, or
          creating responsive designs, I'm up for the challenge.
        </p>
      </div>
      <div className=" text-lg font-bold text-center mt-10 underline underline-offset-8 ">
        My Tech Stack
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[600px] place-items-center justify-items-center m-auto mt-5 shadow-md  rounded-xl p-10">
        {myStack.map((tech, index) => (
          <div key={index} className={` flex flex-col justify-center items-center animate-pulse delay-[${index*100}ms]`}>
            <p className=" text-4xl">{tech.icon}</p>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
      <div className="max-w-[1000px] m-auto mt-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>My Certifications</AccordionTrigger>
            {Certifications.map((data, index) => (
              <AccordionContent key={index}>
                <a
                  href={data.link}
                  target="_blank"
                  className=" ml-4 underline underline-offset-1 inline-flex gap-2 items-center"
                >
                  {data.name}
                  <ExternalLinkIcon />
                </a>
              </AccordionContent>
            ))}
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>My Qualification</AccordionTrigger>
            <AccordionContent>
              <p className="ml-4">
                I did my Bachelor of Science (Bsc) in Mechanical Engineering
                from{" "}
                <a
                  href="https://www.uet.edu.pk/"
                  target="_blank"
                  className="underline underline-offset-1 inline-flex gap-2 items-center"
                >
                  University of Engineering and Technology, Lahore{" "}
                  <ExternalLinkIcon />
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default page;
