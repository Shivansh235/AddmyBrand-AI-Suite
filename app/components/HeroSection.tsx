"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const HeroSection = () => {
const router = useRouter();

  return (
    <section className="relative min-h-screen flex justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-500 drop-shadow-lg">
          Power Up with <span className="text-purple-700">ADmyBRAND AI Suite</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-500 drop-shadow-md">
          Unlock your marketing potential using AI-powered tools and analytics.
        </p>
      <button
          onClick={() => router.push("/dashboard")}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg cursor-pointer rounded-full transition"
>
  Get Started
</button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
