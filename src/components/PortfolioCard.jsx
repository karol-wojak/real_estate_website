// src/components/PortfolioCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid2x2 } from 'lucide-react';

// Accept 'idx' as a prop
const PortfolioCard = ({ project, idx }) => {
  return (
    // Conditionally apply 'md:flex-row-reverse' based on the index
    <div className={`relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full ${idx % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Image Section (Left side on desktop, top on mobile - when not reversed) */}
      <div className="w-full md:w-1/2 flex-shrink-0 relative">
        {/* On Sale Badge */}
        {project.description && project.description.includes('Na sprzedaż') && (
          <div className="absolute top-3 left-3 z-20 bg-[#e0bc88] text-black font-bold px-4 py-1 rounded shadow-lg text-xs uppercase tracking-wider">
            NA SPRZEDAŻ
          </div>
        )}
        {/* For Rent Badge */}
        {project.description && /najem/i.test(project.description) && (
          <div className={`absolute ${project.description.includes('Na sprzedaż') ? 'top-12' : 'top-3'} left-3 z-10 bg-[#e0bc88] text-black font-bold px-4 py-1 rounded shadow-lg text-xs uppercase tracking-wider`}>
            NA WYNAJEM
          </div>
        )}
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

      {/* Details Section (Right side on desktop, bottom on mobile - when not reversed) */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        {/* Top Right Label */}
        {project.shortName && (
          <div className="absolute top-4 right-4 bg-white border border-gray-300 px-3 py-1 text-xs font-semibold rounded-md text-gray-700">
            {project.shortName.toUpperCase()}
          </div>
        )}

        {/* Project Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8 md:mt-0">{project.name}</h2>

        {/* Stat Row */}
        <div className="flex items-center gap-2 mb-6">
          <Grid2x2 className="w-6 h-6 text-[#e0bc88]" />
          <span className="ml-2 text-lg font-semibold text-gray-800">
            {project.area ? `${project.area} m²` : ''}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>

        {/* "Zobacz" Button */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-block self-start px-8 py-3 rounded-md font-semibold bg-black text-white hover:bg-neutral-700 active:bg-neutral-700 transition-colors duration-300"
        >
          Zobacz
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;