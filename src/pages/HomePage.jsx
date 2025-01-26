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
          <a
            href="https://github.com/Rafa245/Vehicle-Builder"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-white p-6 shadow-lg rounded-lg w-64 hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold">Vehicle Builder</h3>
            <p className="mt-4 text-gray-700">TypeScript command-line application.</p>
          </a>
          <a
            href="https://github.com/bbybee1747/PetProps"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-white p-6 shadow-lg rounded-lg w-64 hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold">Pet Props Adoption</h3>
            <p className="mt-4 text-gray-700">Group project using React and Vite </p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;


