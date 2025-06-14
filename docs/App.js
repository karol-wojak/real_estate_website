import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('about'); // State to manage active page
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Effect to manage body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevents scrolling on the body
    } else {
      document.body.style.overflow = ''; // Resets body overflow
    }
    // Cleanup function to ensure overflow is reset if component unmounts or state changes unexpectedly
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);


  // Data for Portfolio and Offers
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu and set active page
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false); // Close menu on item click
  };

  // Component for Navigation
  const Navigation = ({ activePage, handlePageChange, isMobileMenuOpen, toggleMobileMenu }) => {
    const navItems = [
      { name: 'About Us', id: 'about' },
      { name: 'Portfolio', id: 'portfolio' },
      { name: 'Offers', id: 'offers' },
      { name: 'Contact', id: 'contact' },
    ];

    return (
      <>
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex flex-grow justify-end">
          <ul className="flex space-x-8 md:space-x-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handlePageChange(item.id)}
                  className={`
                    relative px-3 py-2 text-lg font-medium text-gray-700
                    hover:text-blue-600 transition-all duration-300
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300
                    ${activePage === item.id ? 'text-blue-600 after:w-full' : 'after:w-0'}
                    hover:after:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  `}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          aria-label="Open navigation menu"
        >
          {/* Hamburger Icon (Lucide React or SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`
            fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            sm:hidden flex flex-col p-8 overflow-y-hidden /* Prevent scrolling of the menu itself */
          `}
        >
          <button
            onClick={toggleMobileMenu}
            className="self-end p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            {/* Close Icon (Lucide React or SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <ul className="flex flex-col items-center space-y-6 mt-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handlePageChange(item.id)}
                  className={`
                    text-2xl font-bold py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300
                    ${activePage === item.id ? 'text-blue-600' : ''}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  `}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  // Component for About Us page
  const AboutUsPage = () => (
    <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-8 leading-tight">About Us</h1>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-blue-600">[Your Company Name]</span>, where we transform visions into vibrant living and working spaces. We are a passionate team dedicated to delivering exceptional real estate solutions that blend innovative design with timeless quality.
      </p>
      <p className="text-md md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        With years of expertise and a deep understanding of market dynamics, we specialize in crafting stunning residential and commercial properties that not only meet but exceed expectations. Our commitment to integrity, client satisfaction, and sustainable practices is at the core of every project we undertake.
      </p>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Meet the Visionaries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">[Owner 1 Name]</h3>
          <p className="text-gray-600 text-center">
            <span className="font-medium">Founder & CEO:</span> With over two decades in real estate development, [Owner 1 Name] brings unparalleled expertise in architectural innovation and strategic project management. Their vision has shaped our most iconic properties.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">[Owner 2 Name]</h3>
          <p className="text-gray-600 text-center">
            <span className="font-medium">Co-founder & Head of Sales:</span> A market maestro with a keen eye for emerging trends, [Owner 2 Name] excels in client relations and ensuring our properties connect with the right buyers. Their passion drives our success in the market.
          </p>
        </div>
      </div>
    </section>
  );

  // Component for Portfolio page
  const PortfolioPage = ({ projects }) => (
    <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-10">Our Finished Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <div key={project.id} className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-xl group">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCD1D1/555555?text=Image+Error`; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <p className="text-gray-800 font-medium text-sm mb-1"><span className="text-blue-500">Location:</span> {project.location}</p>
              <p className="text-gray-800 font-medium text-sm"><span className="text-blue-500">Completion:</span> {project.completion}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Component for Offers page
  const OffersPage = ({ offers }) => (
    <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-10">Currently Available Real Estates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {offers.map((offer) => (
          <div key={offer.id} className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-xl group">
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCD1D1/555555?text=Image+Error`; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{offer.name}</h3>
              <p className="text-gray-600 mb-3">{offer.description}</p>
              <p className="text-gray-800 font-medium text-sm mb-1"><span className="text-blue-500">Location:</span> {offer.location}</p>
              <p className="text-gray-800 font-medium text-sm mb-1">
                <span className="text-blue-500">Price:</span> {offer.price}
              </p>
              {offer.bedrooms && (
                <p className="text-gray-800 font-medium text-sm">
                  <span className="text-blue-500">Bedrooms:</span> {offer.bedrooms} | <span className="text-blue-500">Bathrooms:</span> {offer.bathrooms}
                </p>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Component for Contact page
  const ContactPage = () => (
    <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-8">Contact Us</h1>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        We'd love to hear from you! Whether you have a question about our projects, current offers, or just want to connect, feel free to reach out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Get in Touch</h3>
          <div className="space-y-4 text-center">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">Mobile:</span> <a href="tel:+1234567890" className="text-blue-500 hover:underline transition-colors duration-200">+1 (234) 567-890</a>
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">Email:</span> <a href="mailto:info@yourcompany.com" className="text-blue-500 hover:underline transition-colors duration-200">info@yourcompany.com</a>
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">Address:</span> 123 Prime Estate Ave, Grand City, GE 12345
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Connect With Us</h3>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="#" target="_blank" aria-label="Facebook" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
              {/* Simple Facebook icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-3 7h-2c-1.01 0-1.25.56-1.25 1.25V10h3.5l-.5 3H12v8h-3v-8H7v-3h2V6.75C9 4.88 10.15 3 13.5 3H16v4z"/>
              </svg>
            </a>
            <a href="#" target="_blank" aria-label="Instagram" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
              {/* Simple Instagram icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.06 1.745.247 2.18.423.473.189.873.446 1.21.789.336.342.593.743.789 1.21.176.435.362 1.01.422 2.18.06.85.07 1.25.07 4.85s-.01 3.99-.07 4.85c-.06 1.17-.247 1.745-.423 2.18-.189.473-.446.873-.789 1.21-.342.336-.743.593-1.21.789-.435.176-1.01.362-2.18.422-.85.06-1.25.07-4.85.07s-3.99-.01-4.85-.07c-1.17-.06-1.745-.247-2.18-.423-.473-.189-.873-.446-1.21-.789-.336-.342-.593-.743-.789-1.21-.176-.435-.362-1.01-.422-2.18-.06-.85-.07-1.25-.07-4.85s.01-3.99.07-4.85c.06-1.17.247-1.745.423-2.18.189-.473.446-.873.789-1.21.342-.336.743-.593.789-1.21.176-.435.362-1.01.422-2.18.06-.85.07-1.25.07-4.85zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>
              </svg>
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
              {/* Simple LinkedIn icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.52v-5.593c0-1.339-.253-2.311-1.422-2.311-1.167 0-1.666.862-1.666 2.274v5.63H9.288V9.167h3.522v1.516h.05a3.85 3.85 0 0 1 3.456-1.895c3.701 0 4.382 2.448 4.382 7.094v5.07zM5.59 7.917a2.33 2.33 0 0 1-2.333-2.334c0-1.282 1.05-2.333 2.333-2.333s2.333 1.051 2.333 2.333c0 1.282-1.05 2.334-2.333 2.334zM7.397 20.452H3.59V9.167h3.807v11.285z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-lg z-50 py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <div className="logo-container">
            <img src="https://placehold.co/120x60/87CEEB/FFFFFF?text=Logo" alt="Company Logo" className="h-10 md:h-12 w-auto rounded-md shadow-sm" />
          </div>
          {/* Company name, hidden on small screens */}
          <h1 className="text-xl md:text-2xl font-bold text-blue-700 hidden sm:block">Real Estate Co.</h1>
        </div>
        <Navigation
          activePage={activePage}
          handlePageChange={handlePageChange}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Conditional Page Rendering with CSS Transitions */}
        <div className="relative">
          {activePage === 'about' && <AboutUsPage />}
          {activePage === 'portfolio' && <PortfolioPage projects={portfolioProjects} />}
          {activePage === 'offers' && <OffersPage offers={currentOffers} />}
          {activePage === 'contact' && <ContactPage />}
        </div>
      </main>

      {/* Tailwind CSS keyframes for fade-in-up animation */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
