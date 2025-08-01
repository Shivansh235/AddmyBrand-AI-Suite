"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      // Replace this with actual form handling logic (Formspree, EmailJS, Firebase, etc.)
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Get in Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 text-gray-600 rounded border border-gray-500"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 text-gray-600 rounded border border-gray-500"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Your Message"
          className="w-full px-4 py-2 text-gray-600 rounded border border-gray-500"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
