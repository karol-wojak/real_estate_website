// src/components/PortfolioCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, CalendarCheck } from 'lucide-react';

const PortfolioCard = ({ project }) => {
  const buttonColor = '#EE2A7B';

  return (
    // No change here for the main container width, it will now expand to the max-width of PortfolioPage's content
    <div className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
      {/* Image Section (Left side on desktop, top on mobile) */}
      <div className="w-full md:w-7/12 flex-shrink-0">
        {/* Added aspect-w-5 aspect-h-4 to enforce a 1.25/1 width/height ratio for the image container */}
        {/* The image inside will fill this container while maintaining its aspect ratio */}
        <Link to={`/projects/${project.id}`} className="block h-full aspect-w-5 aspect-h-4">
          <img
            src={project.mainImage}
            alt={project.name}
            // Removed fixed height (h-80); height is now managed by aspect ratio
            className="w-full h-full object-cover" // Image height matches block height, consistently
          />
        </Link>
      </div>

      {/* Details Section (Right side on desktop, bottom on mobile) */}
      <div className="w-full md:w-5/12 p-6 flex flex-col justify-between">
        {/* Top Right Label */}
        {project.shortName && (
          <div className="absolute top-4 right-4 bg-white border border-gray-300 px-3 py-1 text-xs font-semibold rounded-md text-gray-700">
            {project.shortName.toUpperCase()}
          </div>
        )}

        {/* Project Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8 md:mt-0">{project.name}</h2>

        {/* Stat Row */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-gray-600 text-sm">
          <div className="flex flex-col items-center text-center">
            <Home className="w-5 h-5 mb-1 text-gray-500" />
            <span className="font-semibold">{project.units}</span>
            <span>Mieszkania</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Building className="w-5 h-5 mb-1 text-gray-500" />
            <span className="font-semibold">{project.buildings}</span>
            <span>Budynki</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <CalendarCheck className="w-5 h-5 mb-1 text-gray-500" />
            <span className="font-semibold">4 kw. {project.completion.split(' ')[1]}</span>
            <span>Zakończenie</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>

        {/* "Zobacz" Button */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-block self-start px-8 py-3 rounded-md text-white font-semibold transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: buttonColor }}
        >
          Zobacz
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;