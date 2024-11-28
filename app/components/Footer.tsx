import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
          <div className="mt-4">
            <img
              // src="/map-placeholder.jpg"
              alt="Map Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Bookings Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            BOOKINGS
          </h1>
          <div className="space-y-4">
            <Input
              id="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Input
              id="email"
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Input
              id="phone"
              value={phone}
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
            ></Textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              SEND
            </button>
          </div>
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
