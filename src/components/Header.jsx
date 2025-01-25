import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Hello, I'm [Your Name]</h1>
        <p className="mt-4 text-xl sm:text-2xl">Web Developer | Software Engineer | Problem Solver</p>
        <p className="mt-6 text-lg sm:text-xl">I create beautiful and functional websites and applications.</p>
        <div className="mt-8">
          <a
            href="#portfolio"
            className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
