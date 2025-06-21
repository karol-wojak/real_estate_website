// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';

// Import your carousel images
// Make sure to add these images to your src/assets/carousel/ directory
import carousel1 from '../assets/carousel/image-1.jpg'; // Example photo 1
import carousel2 from '../assets/carousel/image-2.jpg'; // Example photo 2
import carousel3 from '../assets/carousel/image-3.jpg'; // Example photo 3

const images = [
  carousel1,
  carousel2,
  carousel3,
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // The main container for the carousel, setting responsive height
    <div className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] overflow-hidden relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel slide ${index + 1}`}
          // Absolute positioning to stack images, and transition for fade effect
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                      ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Optional: Add an overlay for better text readability or subtle effect */}
    </div>
  );
};

export default HeroCarousel;