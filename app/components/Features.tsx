"use client";
import React from "react";
import { FaBrain, FaChartLine, FaShieldAlt, FaRocket, FaUsers, FaCog } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-4xl text-purple-600" />,
    title: "AI-Powered Insights",
    desc: "Automate your marketing with powerful AI tools.",
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-600" />,
    title: "Real-Time Analytics",
    desc: "Track performance and optimize campaigns instantly.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-purple-600" />,
    title: "Data Security",
    desc: "Your data stays protected with enterprise-grade encryption.",
  },
  {
    icon: <FaRocket className="text-4xl text-purple-600" />,
    title: "Boost Productivity",
    desc: "Automate repetitive tasks and scale faster.",
  },
  {
    icon: <FaUsers className="text-4xl text-purple-600" />,
    title: "Team Collaboration",
    desc: "Work with your team in real-time on one platform.",
  },
  {
    icon: <FaCog className="text-4xl text-purple-600" />,
    title: "Customizable Workflows",
    desc: "Adapt tools to match your business style.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Powerful Features to Supercharge Your Business
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-600 mt-4 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
