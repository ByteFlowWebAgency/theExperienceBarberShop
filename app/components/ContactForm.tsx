"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Zod schema for validation
const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be greater than 2 characters" })
    .max(50, { message: "Name cannot be more than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z
    .string()
    .min(10, { message: "Number must have at least 10 digits" })
    .max(15, { message: "Number cannot exceed 15 digits" })
    .regex(/^\d+$/, { message: "Number must contain only digits" }),
  message: z
    .string()
    .min(1, { message: "Message cannot be empty" })
    .max(300, { message: "Message cannot exceed 300 characters" }),
});

// ContactForm Component
const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    console.log("Sending email with:");
    console.log({ serviceID, templateID, publicKey, data });

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          name: data.name,
          email: data.email,
          number: data.number,
          message: data.message,
        },
        publicKey
      );
      console.log("Email sent successfully: ", response);
      console.log(data);
      alert("Your message has been sent!");
    } catch (error) {
      console.error("Failed to send email: ", error);
      alert("Failed to send your message. Please try again later.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              {form.formState.errors.number && (
                <FormMessage>
                  {form.formState.errors.number.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              {form.formState.errors.message && (
                <FormMessage>
                  {form.formState.errors.message.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded hover:bg-blue-700"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
