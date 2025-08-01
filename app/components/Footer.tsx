"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2025 ADmyBRAND. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="mailto:contact@admybrand.com" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
