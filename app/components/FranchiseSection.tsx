import React from "react";

const FranchiseSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold border-b-4 border-blue-500 text-center text-gray-800 mb-8">
            The Franchising Process
          </h2>
        </div>

        <p className="text-lg text-gray-600 text-center mb-10">
          <span className="font-semibold">IDENTIFY | TEACH | LAUNCH</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Identify Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
              Identify Candidates
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
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
          </div>

          {/* Teach Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
              Teach
            </h3>
            <p className="text-gray-600 text-sm mb-4">(required)</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
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
          </div>

          {/* Launch Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
              Launch
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
