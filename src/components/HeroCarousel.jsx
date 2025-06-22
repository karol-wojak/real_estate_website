// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import your carousel images
import carousel1 from '../assets/carousel/image-1.jpg';
import carousel2 from '../assets/carousel/image-2.jpg';
import carousel3 from '../assets/carousel/image-3.jpg';
import contact from '../assets/carousel/contact-page.jpg';

const HeroCarousel = () => {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/';

  const homeImages = [
    carousel1,
    carousel2,
    carousel3,
  ];

  const staticHeroImages = {
    '/contact': contact,
    '/projects': carousel3,
    // Add more routes and images as needed
  };

  let staticImage = carousel1; // default fallback
  for (const route in staticHeroImages) {
    if (path.startsWith(route)) {
      staticImage = staticHeroImages[route];
      break;
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
