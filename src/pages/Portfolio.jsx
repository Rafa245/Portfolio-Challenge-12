// src/pages/Portfolio.jsx

import React from 'react';

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="card shadow-lg p-6 bg-white rounded-lg">
          <h3 className="font-semibold text-xl">Project 1</h3>
          <p className="text-gray-600">Description of the project goes here.</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}

export default Portfolio;
