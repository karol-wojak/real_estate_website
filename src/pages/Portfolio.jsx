// src/pages/Portfolio.jsx
import React from 'react';

const PortfolioPage = ({ projects }) => (
  <section id="portfolio-section" className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    {/* H1 Heading - applied dark blue gradient */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-10">Our Finished Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {projects.map((project) => (
        <div key={project.id} className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-xl group">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = `/image_error_placeholder.png`; }}
          />
          <div className="p-6">
            {/* H3 Subheading - gold gradient */}
            <h3 className="text-2xl font-semibold text-gradient-gold mb-2">{project.name}</h3>
            <p className="text-gray-800 mb-3">{project.description}</p>
            <p className="text-gray-800 font-medium text-sm mb-1"><span className="text-gradient-dark-blue">Location:</span> {project.location}</p>
            <p className="text-gray-800 font-medium text-sm"><span className="text-gradient-dark-blue">Completion:</span> {project.completion}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            {/* Button - applied gold gradient background */}
            <button className="bg-[var(--gradient-gold)] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-80 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioPage;
