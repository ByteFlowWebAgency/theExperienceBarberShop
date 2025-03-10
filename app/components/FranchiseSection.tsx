"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DeShawnJohnson from "../../public/assets/images/DeShawnJohnson.jpg";

const FranchiseSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold border-b-4 border-blue-500 text-center text-gray-800">
            Looking to join The <em>Experience</em>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center pb-20 pt-20">
          <motion.div
            className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={DeShawnJohnson}
                alt="DeShawn Johnson"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-center text-3xl font-bold text-blue-600">
              A Message from DeShawn
            </h2>
            <div className="flex justify-center">
              <p className="text-center text-xl text-gray-700 leading-relaxed">
                &quot;I&rsquo;m looking to expand The Experience and bring our
                unique approach to barbering to more communities. If you share
                our passion for excellence and want to be part of something
                special, I want to hear from you!&quot;
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b-4 border-blue-500 inline-block">
              How we Identify Candidates
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Leadership prowess</li>
              <li>Business acumen</li>
              <li>
                Strong communication skills to connect effectively with
                customers and team members.
              </li>
              <li>
                Proven problem-solving abilities to navigate challenges and
                innovate within the business framework.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b-4 border-blue-500 inline-block">
              Teaching Process
            </h3>
            <p className="text-sm mb-4">(required)</p>
            <ul className="list-disc list-inside space-y-2">
              <li>6-week leadership classes</li>
              <li>Financial literacy</li>
              <li>Business cultivation</li>
            </ul>
            <ul className="list-disc list-inside pl-6 mt-4 space-y-2">
              <li>Professionalism</li>
              <li>Customer service training</li>
              <li>Being a servant-leader</li>
              <li>Accountability on all levels</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b-4 border-blue-500 inline-block">
              Official Launch
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">$25,000</span> investment for
                equipment rent/utilities for 1 year
              </li>
              <li>
                <span className="font-semibold">$20,000</span> cost in carrying
                the experience name
              </li>
              <li>5-10 year payoff period in monthly payments</li>
              <li>
                Access to continual training and coaching to elevate your
                business
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
