// src/pages/Offers.jsx
import React from 'react';

const OffersPage = ({ offers }) => (
  <section id="offers-section" className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    {/* H1 Heading - applied dark blue gradient */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-10">Currently Available Real Estates</h1>
    {/* REPLACED: grid container with a space-y container for individual rows */}
    <div className="space-y-12">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl
                     flex flex-col md:flex-row items-center md:items-stretch md:justify-between p-6 md:p-8 space-y-4 md:space-y-0
                     md:space-x-12
                     portfolio-row" // REUSED: portfolio-row for max-width and centering
        >
          {/* Image Container (Left on Desktop, Top on Mobile) */}
          {/* REPLACED: original image div and applied new responsive widths */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <img
              src={offer.image}
              alt={offer.name}
              className="portfolio-image-aspect w-full object-cover rounded-md transition-transform duration-300 hover:scale-105" // REUSED: portfolio-image-aspect
              onError={(e) => { e.target.onerror = null; e.target.src = `/image_error_placeholder.png`; }}
            />
          </div>

          {/* Text Content (Middle) */}
          {/* REPLACED: original text div, applied flexbox for vertical centering and overflow */}
          <div className="flex-grow text-left overflow-y-auto flex flex-col justify-center">
            {/* H3 Subheading - gold gradient */}
            <h3 className="text-2xl font-semibold text-gradient-gold mb-2">{offer.name}</h3>
            <p className="text-gray-800 md:text-lg mb-3">{offer.description}</p> {/* REUSED: md:text-lg for description */}
            <p className="text-gray-800 font-medium text-sm mb-1"><span className="text-gradient-dark-blue">Location:</span> {offer.location}</p>
            <p className="text-gray-800 font-medium text-sm mb-1">
              <span className="text-gradient-dark-blue">Price:</span> {offer.price}
            </p>
            {offer.bedrooms && (
              <p className="text-gray-800 font-medium text-sm">
                <span className="text-gradient-dark-blue">Bedrooms:</span> {offer.bedrooms} | <span className="text-gradient-dark-blue">Bathrooms:</span> {offer.bathrooms}
              </p>
            )}
          </div>

          {/* Button (Right on Desktop, Bottom on Mobile) */}
          {/* REPLACED: original button structure and applied new custom button styles */}
          <div className="w-full md:w-auto flex-shrink-0 md:self-center">
            <button
              className="w-full md:w-auto px-6 py-2 rounded-full font-semibold shadow-md focus:outline-none transition-all duration-300
                         btn-gradient-dark-blue hover:btn-gradient-gold" // REUSED: Custom button gradient classes
            >
              View Offer
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OffersPage;