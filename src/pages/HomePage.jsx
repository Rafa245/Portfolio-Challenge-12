// src/pages/HomePage.jsx

// src/pages/HomePage.jsx

import React from 'react';
import Header from '../components/Header'; // Import the Header component
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-screen">
      {/* Header with Navbar inside */}
      <Header />

      {/* Main Content */}
      <main className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Introduction Section */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4">
              Hi, I'm [Your Name]
            </h2>
            <p className="text-lg sm:text-xl mb-6 text-gray-700 max-w-3xl mx-auto">
              I'm a full-stack developer with a passion for building responsive and dynamic web applications.
              Let me take you through my work and how I can help you bring your ideas to life.
            </p>
            <div>
              <Link
                to="/portfolio"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 mb-4 shadow-lg hover:shadow-2xl"
              >
                View My Work
              </Link>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skill 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Frontend Development</h4>
                <p className="text-gray-700">
                  I specialize in building user-friendly, responsive, and interactive front-end experiences
                  using technologies like React, HTML, CSS, and JavaScript.
                </p>
              </div>

              {/* Skill 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Backend Development</h4>
                <p className="text-gray-700">
                  I am experienced in creating robust back-end systems with Node.js, Express, and working with
                  databases like MongoDB and MySQL.
                </p>
              </div>

              {/* Skill 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Web Design</h4>
                <p className="text-gray-700">
                  I design visually appealing websites with attention to detail, focusing on user experience and
                  accessibility using tools like Figma and Adobe XD.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
              Let's Work Together
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              Have a project in mind or want to collaborate? I'm open to new opportunities and love working on
              exciting projects!
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-2xl"
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
