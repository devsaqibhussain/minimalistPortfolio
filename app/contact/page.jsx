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
import Image from "next/image";

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
                    <DialogTitle className="text-center">
                      My Whatsapp
                    </DialogTitle>
                    <DialogDescription>
                      <p className="text-center">
                        Scan <span className="font-semibold">QR Code </span> 
                        or click
                        <span className="font-semibold"> Message me</span> to
                        directly start the conversation.
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                  <div className=" flex flex-col gap-2 items-center">
                    <Image
                      src={phoneNumber.qr}
                      width={200}
                      height={200}
                      alt="whatsapp qr code"
                      className="p-1 bg-white rounded-md"
                    />
                    <Label className="font-thin ">Scan QR Code</Label>
                    <Label className="font-bold my-3">OR</Label>

                    <Link href={phoneNumber.href} target="_blank">
                      <Button variant="outline" className=" flex gap-2">
                        {phoneNumber.icon} Message Me
                      </Button>
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
            <CardDescription className=" italic text-center">
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
