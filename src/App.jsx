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
  // activePage will now be 'main' for the combined scrolling page, or 'contact'
  const [activePage, setActivePage] = useState('main');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to manage body overflow when mobile menu is open
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

  // Modified handlePageChange to switch to Contact or scroll within the main page
  const handlePageChange = (pageId) => {
    setIsMobileMenuOpen(false); // Always close mobile menu on navigation

    if (pageId === 'contact') {
      setActivePage('contact');
      // For instant switch, scroll to top of window to avoid previous scroll position
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // It's one of the sections on the main page: about, portfolio, offers
      setActivePage('main'); // Ensure the main page is visible
      // Use a small delay to ensure the DOM has updated before attempting to scroll
      setTimeout(() => {
        const section = document.getElementById(`${pageId}-section`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Delay helps ensure component is rendered before scroll
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-800">
      <header className="sticky top-0 bg-white shadow-lg z-50 py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <div className="logo-container">
            <img src="/logo_placeholder.png" alt="Company Logo" className="h-10 md:h-12 w-auto rounded-md shadow-sm" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-blue-700 hidden sm:block">Real Estate Co.</h1>
        </div>
        <Navigation
          activePage={activePage}
          handlePageChange={handlePageChange}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Conditionally render the main scrolling content or the Contact page */}
        {activePage === 'main' && (
          <div className="space-y-16 md:space-y-24"> {/* Adds vertical spacing between sections */}
            <AboutUsPage />
            <PortfolioPage projects={portfolioProjects} />
            <OffersPage offers={currentOffers} />
          </div>
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>
      {/* Animation keyframes are now in src/index.css */}
    </div>
  );
};

export default App;
