import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Node.js. It features user authentication and a dynamic dashboard.",
      link: "https://example.com/project1",
      image: "https://via.placeholder.com/600x400?text=Project+One"
    },
    {
      title: "Project Two",
      description: "An e-commerce website built with React, Redux, and Firebase. It includes a shopping cart, product pages, and payment integration.",
      link: "https://example.com/project2",
      image: "https://via.placeholder.com/600x400?text=Project+Two"
    },
    {
      title: "Project Three",
      description: "A blog platform built with HTML, CSS, and JavaScript. Users can write, edit, and delete posts.",
      link: "https://example.com/project3",
      image: "https://via.placeholder.com/600x400?text=Project+Three"
    }
  ];

  return (
    <div className="portfolio-page container mx-auto px-4 py-6">
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <p className="mt-4 text-lg">Check out some of the projects I've worked on.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
