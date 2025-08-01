"use client";
import React from "react";

const testimonials = [
  {
    name: "Ankit Sharma",
    title: "Marketing Head, Zentech",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    message:
      "The ADmyBRAND AI Suite boosted our productivity 10x. The real-time data and automation features are outstanding!",
  },
  {
    name: "Pooja Sinha",
    title: "Founder, Craftsy",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Out of all the SaaS tools I've used, this one felt the most intuitive and helpful. The UI and insights are both top-notch.",
  },
  {
    name: "Raj Verma",
    title: "Growth Lead, FinMint",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    message:
      "Team collaboration and smart suggestions have completely automated our workflow. Highly recommended!",
  },
];


const Testimonials = () => {
  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        What Our Users Say
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex-1 bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg text-purple-800 font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
            <p className="text-gray-800 font-medium text-base">“{item.message}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
