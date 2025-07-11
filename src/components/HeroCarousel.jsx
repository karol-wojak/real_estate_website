// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import carousel1 from '../assets/carousel/img2.webp';
import carousel2 from '../assets/carousel/img3.webp';
import carousel3 from '../assets/carousel/img4.webp';
import carousel4 from '../assets/carousel/img5.webp';
import contact from '../assets/carousel/img1.webp';

const HeroCarousel = ({ portfolioProjects }) => {
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === '/';

  const homeImages = [carousel1, carousel2, carousel3, carousel4];

  // Default image fallback
  let staticImage = carousel1;

  // Check if we're on a project detail page
  const projectMatch = path.match(/^\/projects\/(\d+)$/);
  if (projectMatch && portfolioProjects) {
    const projectId = parseInt(projectMatch[1]);
    const project = portfolioProjects.find(p => p.id === projectId);
    
    if (project && project.mainImage) {
      staticImage = project.mainImage;
    }
  } else if (path === '/contact') {
    staticImage = contact;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isHome) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHome]);

  return (
    <div className="w-full relative mb-8" style={{ height: '70vh', minHeight: '450px' }}>
      {isHome ? (
        homeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))
      ) : (
        <img
          src={staticImage}
          alt="Static hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default HeroCarousel;
