// src/pages/Contact.jsx

import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact</h1>
      <p className="text-lg text-gray-800">Feel free to reach out to me through the contact form or via email!</p>
      <form className="mt-8 space-y-4">
        <input type="text" placeholder="Your Name" className="p-4 w-full border rounded-md" />
        <input type="email" placeholder="Your Email" className="p-4 w-full border rounded-md" />
        <textarea placeholder="Your Message" className="p-4 w-full border rounded-md h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
