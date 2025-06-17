// src/components/Navigation.jsx
import React from 'react';

const Navigation = ({ activePage, handlePageChange, isMobileMenuOpen, toggleMobileMenu }) => {
  // The 'id' here corresponds to the section IDs or the 'contact' page ID
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
                  ${
                    // Highlight based on current active page or if on main and it's a section
                    (activePage === item.id || (activePage === 'main' && ['about', 'portfolio', 'offers'].includes(item.id)))
                    ? 'text-blue-600 after:w-full'
                    : 'after:w-0'
                  }
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`
          fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          sm:hidden flex flex-col p-8 overflow-y-hidden
        `}
      >
        <button
          onClick={toggleMobileMenu}
          className="self-end p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          aria-label="Close navigation menu"
        >
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
                  ${
                    (activePage === item.id || (activePage === 'main' && ['about', 'portfolio', 'offers'].includes(item.id)))
                    ? 'text-blue-600'
                    : ''
                  }
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

export default Navigation;
