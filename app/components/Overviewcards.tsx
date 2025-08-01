"use client";
import React from "react";
import { FaUsers, FaChartLine, FaMoneyBill, FaArrowUp } from "react-icons/fa";

const stats = [
  {
    title: "Total Revenue",
    value: "₹1,20,000",
    icon: <FaMoneyBill className="text-green-600 text-3xl" />,
    color: "bg-green-100",
  },
  {
    title: "Users",
    value: "8,420",
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    color: "bg-blue-100",
  },
  {
    title: "Conversions",
    value: "1,050",
    icon: <FaChartLine className="text-purple-600 text-3xl" />,
    color: "bg-purple-100",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: <FaArrowUp className="text-pink-600 text-3xl" />,
    color: "bg-pink-100",
  },
];

const OverviewCards = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow hover:shadow-lg transition-all ${item.color}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-gray-600 font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              </div>
              <div>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewCards;
