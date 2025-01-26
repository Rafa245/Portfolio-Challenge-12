import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a 
            href="https://github.com/Rafa245" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition"
          >
            GitHub
          </a>
          <a 
            href="mailto:rafaguerra245@hotmail.com" 
            className="hover:text-red-400 transition"
          >
            Email
          </a>
        </div>
        <div className="mt-4">
          <a href="#top" className="text-sm hover:text-blue-300 transition">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

