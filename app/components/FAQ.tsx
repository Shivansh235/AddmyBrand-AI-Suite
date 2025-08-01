"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Is the ADmyBRAND AI Suite secure?",
    answer: "Yes, it uses enterprise-grade encryption and secure authentication methods.",
  },
  {
    question: "Can I integrate it with my existing tools?",
    answer: "Absolutely! It offers easy integration with tools like Zapier, Slack, and more.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can access a 7-day free trial without needing a credit card.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl p-4 cursor-pointer shadow-sm transition-all"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-purple-700 text-lg">{item.question}</h4>
              <span className="text-purple-700 text-lg">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-800 mt-3 leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
