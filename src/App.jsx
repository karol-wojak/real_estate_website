// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation.jsx';
import AboutUsPage from './pages/AboutUs.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import OffersPage from './pages/Offers.jsx';
import ContactPage from './pages/Contact.jsx';

// Data for Portfolio and Offers (can be moved to a separate data file if it grows larger)
const portfolioProjects = [
  {
    id: 1,
    name: "Sunrise Residences",
    description: "A modern residential complex offering breathtaking city views and premium amenities.",
    location: "Metropolis, NY",
    completion: "Q4 2023",
    image: "https://placehold.co/600x400/D4E6F1/0A2342?text=Project+1",
  },
  {
    id: 2,
    name: "Green Valley Office Park",
    description: "Sustainable commercial spaces designed for collaboration and productivity.",
    location: "Innovation Hub, CA",
    completion: "Q2 2024",
    image: "https://placehold.co/600x400/E1F2DE/2B5421?text=Project+2",
  },
  {
    id: 3,
    name: "Coastal Breeze Villas",
    description: "Luxury beachfront villas with direct ocean access and private pools.",
    location: "Oceanfront, FL",
    completion: "Q1 2023",
    image: "https://placehold.co/600x400/B0E0E6/004B8D?text=Project+3",
  },
  {
    id: 4,
    name: "Urban Loft Conversions",
    description: "Chic industrial lofts reimagined for modern urban living.",
    location: "Downtown, IL",
    completion: "Q3 2022",
    image: "https://placehold.co/600x400/E5E5E5/333333?text=Project+4",
  },
];

const currentOffers = [
  {
    id: 1,
    name: "Skyline Penthouse",
    type: "Apartment",
    description: "An exclusive penthouse with panoramic city views and bespoke interiors.",
    location: "City Center, NY",
    price: "$2,500,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://placehold.co/600x400/FFDDC1/8B4513?text=Offer+1",
  },
  {
    id: 2,
    name: "Suburban Family Home",
    type: "House",
    description: "Spacious single-family home with a large backyard, perfect for families.",
    location: "Maplewood, NJ",
    price: "$750,000",
    bedrooms: 5,
    bathrooms: 3,
    image: "https://placehold.co/600x400/C1FFC1/1C7C54?text=Offer+2",
  },
  {
    id: 3,
    name: "Lakeside Retreat",
    type: "Cottage",
    description: "Charming cottage by the lake, ideal for weekend getaways.",
    location: "Serene Lake, WI",
    price: "$450,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://placehold.co/600x400/BEE9F7/005A7B?text=Offer+3",
  },
  {
    id: 4,
    name: "Commercial Retail Space",
    type: "Commercial",
    description: "Prime retail location in a bustling shopping district, high foot traffic.",
    location: "Market Square, TX",
    price: "$1,200,000",
    bedrooms: null,
    bathrooms: null,
    image: "https://placehold.co/600x400/F0F0F0/666666?text=Offer+4",
  },
];

const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePageChange = (pageId) => {
    setIsMobileMenuOpen(false);

    if (pageId === 'contact') {
      setActivePage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActivePage('main');
      setTimeout(() => {
        const section = document.getElementById(`${pageId}-section`);
        if (section) {
          // Adjust scroll position to account for header if needed
          const headerOffset = document.querySelector('header').offsetHeight;
          const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter text-black"> {/* Changed bg to white, text to black */}
      {/* Header - Removed sticky, top-0, z-50 for non-sticky behavior as requested */}
      <header className="bg-white shadow-lg py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <div className="logo-container">
            {/* Using a placeholder logo that aligns with the new color scheme */}
            <img src="/real-estate-project/logo_placeholder.png" alt="Company Logo" className="h-10 md:h-12 w-auto rounded-md shadow-sm" />
          </div>
          {/* Company name - applied gold gradient */}
          <h1 className="text-xl md:text-2xl font-bold hidden sm:block text-gradient-gold">Real Estate Co.</h1>
        </div>
        <Navigation
          activePage={activePage}
          handlePageChange={handlePageChange}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {activePage === 'main' && (
          <div className="space-y-16 md:space-y-24">
            <AboutUsPage />
            <PortfolioPage projects={portfolioProjects} />
            <OffersPage offers={currentOffers} />
          </div>
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
};

export default App;
