import React from "react";
import ContactForm from "@/components/ContactForm";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ContactsList, HiringSites } from "@/utils/constants";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-10">
      <div className=" text-lg font-bold text-center mt-20 mb-10 underline underline-offset-8 ">
        CONTACTS
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        
        <div className="flex flex-col justify-start items-center gap-4 lg:max-w-[320px]">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="m-auto">My Links</CardTitle>
              <CardDescription className="text-wrap italic">
                For casual chat and discussion.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 justify-evenly">
              {ContactsList.map((hire) => (
                <div
                  className="flex flex-col justify-center items-center gap-2"
                  key={hire.id}
                >
                  <Link className="text-3xl" href={hire.href} target="_blank">
                    {hire.icon}
                  </Link>
                  <Label>{hire.name}</Label>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="m-auto">Hire Me Here</CardTitle>
              <CardDescription className="text-wrap italic">
                Find me worthy to be the developer of your project? Hire me on these links.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 justify-evenly">
              {HiringSites.map((contact) => (
                <div
                  className="flex flex-col justify-center items-center gap-2"
                  key={contact.id}
                >
                  <Link className="text-3xl" href={contact.href} target="_blank">
                    {contact.icon}
                  </Link>
                  <Label>{contact.name}</Label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="flex-1 flex-grow">
          <CardHeader>
            <CardTitle className="m-auto">Email Form</CardTitle>
            <CardDescription className=" italic">Only for business queries</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
