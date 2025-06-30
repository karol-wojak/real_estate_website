// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import carousel1 from '../assets/carousel/img2.webp';
import carousel2 from '../assets/carousel/img3.webp';
import carousel3 from '../assets/carousel/img4.webp';
import contact from '../assets/carousel/img1.webp';

// Import all project main images
import bajecznaMain from '../assets/portfolio/bajeczna/main.webp';
import czyzewskiegoMain from '../assets/portfolio/czyzewskiego/main.webp';
import imperialMain from '../assets/portfolio/imperial/main.webp';
import jagiellonskieMain from '../assets/portfolio/jagiellonskie/main.webp';
import krowoderskichZuchowMain from '../assets/portfolio/krowoderskich-zuchow/main.webp';
import miechowityMain from '../assets/portfolio/miechowity/main.webp';
import pachonskiegoMain from '../assets/portfolio/pachonskiego/main.webp';
import radzikowskiegoMain from '../assets/portfolio/radzikowskiego/main.webp';
import strusiaMain from '../assets/portfolio/strusia/main.webp';
import wieliczkaMain from '../assets/portfolio/wieliczka/main.webp';
import wilenskaMain from '../assets/portfolio/wilenska/main.webp';
import zagonczykaMain from '../assets/portfolio/zagonczyka/main.webp';

const HeroCarousel = () => {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/';

  const homeImages = [carousel1, carousel2, carousel3];

  // Map static routes and specific project detail pages to their images
  const staticHeroImages = {
    '/contact': contact,
    // Map each project ID to its corresponding main image (portfolioData.js order)
    '/projects/1': imperialMain,
    '/projects/2': krowoderskichZuchowMain,
    '/projects/3': wilenskaMain,
    '/projects/4': radzikowskiegoMain,
    '/projects/5': miechowityMain,
    '/projects/6': pachonskiegoMain,
    '/projects/7': wieliczkaMain,
    '/projects/8': jagiellonskieMain,
    '/projects/9': bajecznaMain,
    '/projects/10': strusiaMain,
    '/projects/11': zagonczykaMain,
    '/projects/12': czyzewskiegoMain,
  };

  // Default image fallback
  let staticImage = carousel1;

  // Try to match exact path
  if (!isHome) {
    for (const route in staticHeroImages) {
      if (path === route) {
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
