// src/pages/Portfolio.jsx
import React from 'react';
import PortfolioCard from '../components/PortfolioCard.jsx';

const PortfolioPage = ({ projects }) => (
  <section id="portfolio-section" className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-10 md:pb-1">Realizacje</h1>
    {/* Removed max-w-screen-lg mx-auto as global max-width is now handled by App.jsx */}
    <div className="flex flex-col space-y-8">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default PortfolioPage;