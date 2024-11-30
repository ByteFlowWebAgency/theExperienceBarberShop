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
  FormLabel,
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
    try {
      const response = await emailjs.send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        { ...data },
        "your_public_key" // Replace with your EmailJS Public Key
      );
      console.log("Email sent successfully: ", response);
      alert("Your message has been sent!");
    } catch (error) {
      console.error("Failed to send email: ", error);
      alert("Failed to send your message. Please try again later.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Email</FormLabel>
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
              <FormLabel>Phone Number</FormLabel>
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
              <FormLabel>Message</FormLabel>
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
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
};

// Footer Component
const Footer = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contacts Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            CONTACTS
          </h1>
          <p className="text-gray-600 mb-2">88 E Mill St Akron, OH 44308</p>
          <p className="text-gray-600 mb-2">330-475-2552</p>
          <p className="text-gray-600 mb-2">
            theexperiencebarbershopandsalon@gmail.com
          </p>
          <p className="text-blue-600 underline">
            <a
              href="https://www.downtownakron.com/go/the-experience-barber-and-beauty-shop"
              className="text-blue-500 underline hover:text-blue-700"
            >
              www.downtownakron.com/go/the-experience-barber-and-beauty-shop
            </a>
          </p>
        </div>

        {/* Bookings Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            BOOKINGS
          </h1>
          <ContactForm />
          <p className="text-center text-gray-400 mt-4 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
      <footer className="text-center mt-10 text-sm text-gray-500">
        <p>
          Terms & Conditions | Privacy Policy | Copyright © The Experience
          Barbershop & Salon
        </p>
      </footer>
    </div>
  );
};

export default Footer;
