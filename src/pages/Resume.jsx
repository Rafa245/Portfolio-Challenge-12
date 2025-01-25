// src/pages/Resume.jsx

import React from 'react';

function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Resume</h1>
      <p className="text-lg text-gray-800">
        Download my resume <a href="resume.pdf" className="text-blue-600">here</a>.
      </p>
    </div>
  );
}

export default Resume;
