import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            LinkedIn
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            GitHub
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-red-500 transition">
            Email
          </a>
        </div>
        <div className="mt-4">
          <a href="#top" className="text-sm hover:text-blue-500 transition">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
