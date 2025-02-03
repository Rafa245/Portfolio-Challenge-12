import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      description:
        "Weather dashboard application: Will show users a 5 day weather forecast depending on the city that they select.",
      link: "https://github.com/Rafa245/Weather-Dashboard-09-",
      image: "assets/weather-pic.png",
    },
    {
      title: "Personal Blog",
      description:
        "Two-page website/blog where users will input and view blog posts.",
      link: "https://github.com/Rafa245/Challenge-4-Web-APIs",
      image: "assets/blog-pic.png",
    },
    {
      title: "Vehicle Builder",
      description:
        "TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks.",
      link: "https://github.com/Rafa245/Vehicle-Builder",
      image: "assets/vehicle-pic.webp",
    },
    {
      title: "Readme Generator",
      description:
        "CLI application that generates a professional README file based on user input.",
      link: "https://github.com/Rafa245/READ.ME-Generator",
      image: "assets/readme-pic.png",
    },
    {
      title: "Employee Tracker",
      description:
        "A command-line application that manages a company's employee database, using Node.js, Inquirer, and PostgreSQL.",
      link: "https://github.com/Rafa245/Challenge-10-SQL",
      image: "assets/employee-tracker.png",
    },
    {
      title: "Pet Props Adoption",
      description:
        "An adoption platform where users can search and find pets up for adoption.",
      link: "https://github.com/bbybee1747/PetProps",
      image: "assets/pet adoption.jpeg",
    },
    {
      title: "Hobbies on a Budget",
      description:
        "A website dedicated to helping people in search of new hobbies it make recommendations based on price range, activity type, and commitment.",
      link: "https://github.com/Michael-E238/Hobby-Hub",
      image: "assets/hobbies-pic.png",
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
