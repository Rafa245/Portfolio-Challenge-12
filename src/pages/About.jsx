import React from 'react';

function About() {
  const skills = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "React", url: "https://reactjs.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
  ];

  return (
    <div className="about-page container mx-auto px-4 py-6">
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">Learn more about my journey and skills.</p>
      </header>

      <section className="mt-10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Hello! I’m Rafael Guerra, a passionate web developer who loves building beautiful and functional websites. 
            I specialize in front-end development, but I also enjoy exploring back-end technologies to create full-stack solutions. 
            I have experience working with JavaScript, React, Node.js, and other modern web technologies.
          </p>

          <p className="text-lg mb-6">
            My journey into web development began with a curiosity for technology and design. I started by experimenting with HTML, CSS, and JavaScript, and gradually built more complex applications. Over time, I realized that I not only enjoyed solving problems but also loved creating user-centric experiences that make an impact.
          </p>

          <p className="text-lg mb-6">
            I’m always looking to improve my skills, learn new technologies, and contribute to meaningful projects. My goal is to continue growing as a developer, while helping others achieve their goals through innovative web solutions.
          </p>
        </div>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer transition transform duration-200 ease-in-out hover:scale-125 hover:bg-blue-700"
            >
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                {skill.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
