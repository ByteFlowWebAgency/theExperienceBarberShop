import React from "react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import IFrameMap from "./IFrameMap";
import TheExperienceBarberShopAndSalon from "../../public/assets/images/TheExperienceBarberShopAndSalonLogo.png";

// Footer Component
const Footer: React.FC = () => {
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
          <IFrameMap />
        </div>

        {/* Bookings Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            REACH OUT
          </h1>
          <ContactForm />
          <Image
            src={TheExperienceBarberShopAndSalon}
            alt="The Experience Barbershop and Salon Logo"
            layout="responsive"
            width={500}
            height={100}
            className="object-contain"
          />
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
