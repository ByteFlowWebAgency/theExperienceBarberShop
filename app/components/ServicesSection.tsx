import React from "react";
import TheExperienceShop from "../../public/assets/images/theexperienceshop.webp";
import { Card } from "./card";
import Script from "next/script";

const serviceCategories = [
  {
    title: "Popular Services",
    services: [
      { name: "Haircut - Beard not included", price: "$30.00+" },
      { name: "Male Haircut with beard included", price: "$40.00" },
      { name: "Kids haircut", price: "$25.00" },
    ],
  },
  {
    title: "Other Services",
    services: [
      { name: "Shave service", price: "$20.00+" },
      { name: "Eyebrow shaping", price: "$20.00" },
      { name: "Line up/Head only", price: "$20.00+" },
      { name: "Beard trim", price: "$20.00" },
      { name: "Hair color", price: "$35.00" },
      { name: "Appointment prices", price: "$5.00" },
      {
        name: "College cuts",
        price: "$25.00 (College students with valid ID)",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative bg-gray-100 bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${TheExperienceShop.src})` }}
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "Barbershop",
              "name": "The Experience Barber Shop",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "88 E Mill St",
                "addressLocality": "Akron",
                "addressRegion": "OH",
                "postalCode": "44308",
                "addressCountry": "US"
              },
              "telephone": "330-475-2552"
            },
            "serviceType": "Haircuts & Grooming",
            "offers": serviceCategories.flatMap(category =>
              category.services.map(service => ({
                "@type": "Offer",
                "name": service.name,
                "price": service.price.replace(/[^0-9.]/g, ""),
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }))
            )
          })
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 id="services-heading" className="text-4xl font-serif text-white mb-2">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-200 mt-4">
            <strong>*Note: </strong>Walk-ins are accepted. Call ahead!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-white bg-opacity-90 font-semibold shadow-lg rounded-md"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 border-b pb-2">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.services.map((service) => (
                  <li key={service.name} className="flex justify-between items-center">
                    <span className="text-lg text-gray-800">{service.name}</span>
                    <span className="text-blue-600 font-semibold">{service.price}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
