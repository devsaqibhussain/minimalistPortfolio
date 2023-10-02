"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendContactForm } from "@/utils/sendContactForm";

// Form Schema ---------------------------------

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  body: z.string().min(50, {
    message: "Message must be at least 30 characters.",
  }),
  subject: z
    .string()
    .min(3, {
      message: "Subject must be at least 3 characters.",
    })
    .max(50, { message: "Must be 50 or fewer characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

// Function Starts here --------------------------

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(() => true);
    await sendContactForm(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Saqib Hussain" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Name you want to be adressed by.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="e.g. example@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Email, you want to be reached out on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Personal Website Project" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Subject, what your email is about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. I would like a fully customizable portfolio built using Nextjs and TailwindCSS."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter the Details, about the Project / Job.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {isLoading ? (
          <Button type="submit" >
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button type="submit">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
