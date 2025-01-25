import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <header className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">A collection of my work and skills</p>
      </header>
      <section className="mt-10 px-4 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Hello! I'm a passionate developer who loves to build web applications and create innovative solutions. Take a look at my work and feel free to get in touch!
        </p>
      </section>
      <section className="mt-10 bg-gray-100 py-10">
        <h2 className="text-3xl font-semibold text-center">Featured Projects</h2>
        <div className="mt-6 flex justify-center gap-8">
          <div className="project-card bg-white p-6 shadow-lg rounded-lg w-64">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-4 text-gray-700">Description of Project 1 goes here.</p>
          </div>
          <div className="project-card bg-white p-6 shadow-lg rounded-lg w-64">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-4 text-gray-700">Description of Project 2 goes here.</p>
          </div>
        </div>
      </section>
      <footer className="text-center py-6 bg-blue-600 text-white">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
