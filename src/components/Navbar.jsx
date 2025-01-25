// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile toggle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility

  return (
    <nav className="bg-blue-600 shadow-md py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">
          <Link to="/">My Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link to="/about" className="hover:text-blue-200 transition duration-300">About Me</Link>
          <Link to="/portfolio" className="hover:text-blue-200 transition duration-300">Portfolio</Link>
          <Link to="/contact" className="hover:text-blue-200 transition duration-300">Contact</Link>
          <Link to="/resume" className="hover:text-blue-200 transition duration-300">Resume</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
