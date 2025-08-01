"use client";
import React, { useState } from "react";

const ChatBox = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
        <h1 className="flex justify-center text-gray-800 font-bold text-3xl mb-5">ChatBot</h1>
      <div className="bg-white rounded-xl shadow max-w-xl mx-auto p-6">

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ask AI about this Product</h3>
        <textarea
          value={question}
          rows={4}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something like: What does this AI tool do?"
          className="w-full px-4 py-2 border text-gray-500 border-gray-500 rounded mb-4"
        ></textarea>
        <button
          onClick={handleAsk}
          className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Ask
        </button>
        {answer && <p className="mt-4 text-gray-700">{answer}</p>}
      </div>
    </div>
  );
};

export default ChatBox;
