"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";


const pricingPlans = [
  {
    name: "Basic",
    price: "₹499/month",
    features: [
      "1 Project",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: "₹999/month",
    features: [
      "5 Projects",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "₹1999/month",
    features: [
      "Unlimited Projects",
      "AI Automation Tools",
      "24/7 Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Choose a Plan That Fits You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-600">{plan.name}</h3>
            <p className="text-2xl font-semibold text-purple-700 mb-4">
{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="text-purple-700 flex items-center gap-2"><FaCheck /> {f}</li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
