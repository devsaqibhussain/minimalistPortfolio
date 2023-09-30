"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ContactsList, HiringSites, phoneNumber } from "@/utils/constants";
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
              <CardDescription className="m-auto italic">
                For casual chat and discussion.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-4 lg:grid-cols-3 grid-cols-3 gap-y-4">
              {ContactsList.map((contact) => (
                <div
                  className="flex flex-col justify-center items-center gap-2"
                  key={contact.id}
                >
                  <Link
                    className="text-3xl"
                    href={contact.href}
                    target="_blank"
                  >
                    {contact.icon}
                  </Link>
                  <Label>{contact.name}</Label>
                </div>
              ))}
              <Dialog>
                <DialogTrigger className="text-3xl flex flex-col justify-center items-center gap-2">
                  {phoneNumber.icon}
                  <Label>{phoneNumber.name}</Label>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>My Phone Number</DialogTitle>
                    <DialogDescription>
                      Note: Use <span className="font-semibold">phone</span> button if using <span className="font-semibold">mobile</span>, otherwise use <span className="font-semibold">copy </span> button.
                    </DialogDescription>
                  </DialogHeader>
                  <div className=" flex gap-2 items-center">
                    <Label className="font-bold">Phone Number:</Label>
                    {phoneNumber.number}
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(phoneNumber.number);
                      }}
                      variant="outline"
                    >
                      <Popover>
                        <PopoverTrigger>{phoneNumber.copy}</PopoverTrigger>
                        <PopoverContent>
                          Text copied to clipboard.
                        </PopoverContent>
                      </Popover>
                    </Button>
                    <Link href={phoneNumber.href}>
                      <Button variant="outline">{phoneNumber.icon}</Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="m-auto">Hire Me Here</CardTitle>
              <CardDescription className="text-wrap text-center italic">
                Find me worthy to be the developer of your project? Hire me on
                these links.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-4 lg:grid-cols-3 grid-cols-3 gap-y-4">
              {HiringSites.map((hire) => (
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
        </div>

        <Card className="flex-1 flex-grow">
          <CardHeader>
            <CardTitle className="m-auto">Email Form</CardTitle>
            <CardDescription className=" italic">
              Only for business queries
            </CardDescription>
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
