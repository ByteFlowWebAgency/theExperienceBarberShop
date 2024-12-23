import React from "react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import IFrameMap from "./IFrameMap";
import TheExperienceBarberShopAndSalon from "../../public/assets/images/TheExperienceBarberShopAndSalonLogo.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            CONTACTS
          </h1>
          <p className="text-gray-600 mb-2">
            Address: 88 E Mill St Akron, OH 44308
          </p>
          <p className="text-gray-600 mb-2">Phone Number: 330-475-2552</p>
          <p className="text-gray-600 mb-2">
            Email: theexperiencebarbershopandsalon@gmail.com
          </p>
          <IFrameMap />
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            REACH OUT
          </h1>
          <ContactForm />
          <div className="pl-10">
            <Image
              src={TheExperienceBarberShopAndSalon}
              alt="The Experience Barbershop and Salon Logo"
              layout="intrinsic"
              width={500}
              height={10}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <footer className="text-center mt-10 text-sm text-gray-500">
        <p>
          Terms & Conditions | Privacy Policy | Copyright © The Experience
          Barbershop & Salon | All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
