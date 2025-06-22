// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import carousel1 from '../assets/carousel/image-1.jpg';
import carousel2 from '../assets/carousel/image-2.jpg';
import carousel3 from '../assets/carousel/image-3.jpg';
import contact from '../assets/carousel/contact-page.jpg';

// Import your project main images
import czyzewskiegoMain from '../assets/portfolio/czyzewskiego/main.jpg';
import krowoderskichZuchowMain from '../assets/portfolio/krowoderskich-zuchow/main.jpg';
import miechowityMain from '../assets/portfolio/miechowity/main.jpg';
import moderatoMain from '../assets/portfolio/moderato/main.jpg';

const HeroCarousel = () => {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/';

  const homeImages = [carousel1, carousel2, carousel3];

  // Map static routes and specific project detail pages to their images
  const staticHeroImages = {
    '/contact': contact,
    '/projects/1': czyzewskiegoMain,
    '/projects/2': krowoderskichZuchowMain,
    '/projects/3': miechowityMain,
    '/projects/4': moderatoMain,
  };

  // Default image fallback
  let staticImage = carousel1;

  // Try to match exact path
  if (!isHome) {
    for (const route in staticHeroImages) {
      if (path.startsWith(route)) {
        staticImage = staticHeroImages[route];
        break;
      }
    }
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
    <div className="w-full h-[620px] sm:h-[630px] md:h-[640px] lg:h-[650px] xl:h-[660px] overflow-hidden relative mb-8">
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
