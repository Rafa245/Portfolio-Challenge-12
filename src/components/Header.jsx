// src/components/Header.jsx

import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-24 px-6">
      <Navbar /> {/* Including Navbar inside the Header */}

      <div className="max-w-4xl mx-auto text-center mt-12">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to My Portfolio!
        </h1>

        {/* Subheading / Description */}
        <p className="text-lg sm:text-xl mb-6">
          I'm a passionate developer creating amazing web applications. Explore my work and get to know me!
        </p>

        {/* Call-to-Action Button */}
        <div className="space-x-4">
          <Link
            to="/portfolio"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg text-lg transition duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 py-2 px-6 rounded-lg text-lg transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
