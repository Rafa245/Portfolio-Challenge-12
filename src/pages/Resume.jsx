import React from 'react';

function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      {/* "Explore My Journey" at the Top */}
      <div className="w-full text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-800">Explore My Journey</h1>
      </div>

      {/* Spacer to Push Content to the Middle */}
      <div className="flex-grow flex flex-col justify-center items-center">
        {/* Description */}
        <p className="max-w-xl text-lg text-gray-600 text-center mb-4">
          Discover my professional background, skills, and accomplishments in detail. 
          Download my resume to learn more about how I can bring value to your team or project.
        </p>

        {/* Resume Button */}
        <a
          href="/Rafael_Guerra_Resume.pdf"
          download="Rafael_Guerra_Resume"
          className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg text-xl hover:bg-blue-700 transition duration-300"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
