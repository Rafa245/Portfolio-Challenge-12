import React from 'react';

function Resume() {
  return (
    <div className="resume-page container mx-auto px-4 py-6">
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <p className="mt-4 text-lg">A summary of my education, experience, and skills.</p>
      </header>

      <section className="mt-10">
        <div className="education mb-8">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-4">
            <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">XYZ University | 2015 - 2019</p>
            <p className="text-gray-600 mt-2">Relevant coursework: Data Structures, Web Development, Algorithms, Databases</p>
          </div>
        </div>

        <div className="experience mb-8">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl font-medium">Software Developer</h3>
            <p className="text-gray-600">ABC Corp. | June 2020 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to deliver software solutions.</li>
              <li>Optimized database queries for better performance and scalability.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium">Junior Web Developer</h3>
            <p className="text-gray-600">XYZ Solutions | January 2019 - May 2020</p>
            <ul className="list-disc list-inside mt-2">
              <li>Built responsive websites and landing pages using HTML, CSS, and JavaScript.</li>
              <li>Improved website performance by optimizing code and implementing lazy loading.</li>
              <li>Worked on UI/UX design improvements for several client projects.</li>
            </ul>
          </div>
        </div>

        <div className="skills mb-8">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Programming Languages: JavaScript, Python, Java, C++</li>
            <li>Web Technologies: HTML, CSS, React, Node.js, Express</li>
            <li>Version Control: Git, GitHub</li>
            <li>Databases: MySQL, MongoDB, Firebase</li>
            <li>Tools: Docker, AWS, Jenkins</li>
          </ul>
        </div>

        <div className="certifications mb-8">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <div className="mt-4">
            <p className="text-xl font-medium">Certified Web Developer</p>
            <p className="text-gray-600">Issued by XYZ Organization | April 2021</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
