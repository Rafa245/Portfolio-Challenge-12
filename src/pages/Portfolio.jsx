import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      description:
        "Weather dashboard application: Will show users a 5 day weather forecast depending on the city that they select.",
      link: "https://github.com/Rafa245/Weather-Dashboard-09-",
      image: "src/assets/weather-pic.png",
    },
    {
      title: "Personal Blog",
      description:
        "Two-page website/blog where users will input and view blog posts.",
      link: "https://github.com/Rafa245/Challenge-4-Web-APIs",
      image: "src/assets/blog-pic.png",
    },
    {
      title: "Vehicle Builder",
      description:
        "TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks.",
      link: "https://github.com/Rafa245/Vehicle-Builder",
      image: "src/assets/vehicle-pic.webp",
    },
  ];

  return (
    <div className="portfolio-page container mx-auto px-4 py-6">
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <p className="mt-4 text-lg">Check out some of the projects I've worked on.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition duration-300 ease-in-out hover:scale-110"
          >
            <div className="project-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
