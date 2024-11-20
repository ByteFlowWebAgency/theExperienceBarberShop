import React from "react";
import { Card } from "@/components/ui/card";

const serviceCategories = [
  {
    title: "Hair cutting",
    services: [
      { name: "Men", price: "Price 1" },
      { name: "Women", price: "Price 2" },
      { name: "Children", price: "Price 3" },
    ],
  },
  {
    title: "Shampoos",
    services: [
      { name: "Men", price: "Price 1" },
      { name: "Women", price: "Price 2" },
      { name: "Children", price: "Price 3" },
    ],
  },
  {
    title: "Styles",
    services: [
      { name: "Men", price: "Price 1" },
      { name: "Women", price: "Price 2" },
      { name: "Children", price: "Price 3" },
    ],
  },
  {
    title: "Trims",
    services: [
      { name: "Men", price: "Price 1" },
      { name: "Women", price: "Price 2" },
      { name: "Children", price: "Price 3" },
    ],
  },
];

export default function Services() {
  return (
    <section className="container mx-auto py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-2">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-blue-600"></div>
          <p className="text-gray-600 mt-4">
            *Note: Walk-ins are accepted. Call ahead!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="text-2xl font-serif mb-4 border-b pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-lg">{service.name}</span>
                    <span className="text-blue-600 font-medium">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
