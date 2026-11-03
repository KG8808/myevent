"use client";

import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form submit event with TypeScript type
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  alert(`Your message has been submitted!
Name: ${name}
Email: ${email}
Message: ${message}`);

  setName("");
  setEmail("");
  setMessage("");
};

  return (
    <div id="contact" className="bg-gray-950 p-10 text-white">

      <h2 className="mb-6 text-3xl font-bold text-blue-400">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded bg-gray-800 p-3"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded bg-gray-800 p-3"
          required
        />

        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded bg-gray-800 p-3"
          required
        />

        <button
          type="submit"
          className="rounded bg-blue-600 px-6 py-3 hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}