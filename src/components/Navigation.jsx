// src/components/Navigation.jsx
import React from 'react';

const Navigation = ({ activePage, handlePageChange, isMobileMenuOpen, toggleMobileMenu }) => {
  const navItems = [
    { name: 'About Us', id: 'about' },
    { name: 'Portfolio', 'id': 'portfolio' },
    { name: 'Offers', id: 'offers' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex grow justify-end">
        <ul className="flex space-x-8 md:space-x-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handlePageChange(item.id)}
                className="nav-item-button relative px-3 py-2 text-lg font-medium transition-all duration-300 no-underline focus:outline-none"
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
        className="sm:hidden p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor" // <-- CHANGE THIS: from fill to stroke
          strokeWidth="2"      // <-- ADD THIS: for line thickness
          strokeLinecap="round" // <-- OPTIONAL: for rounded line caps
          strokeLinejoin="round" // <-- OPTIONAL: for rounded line corners
          className="lucide luciswde-menu" // You can change the class name to reflect it's a menu icon
        >
          <path d="M4 12h16M4 6h16M4 18h16"/>
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
          className="self-end p-2 rounded-md text-gradient-dark-blue hover:bg-gray-100 focus:outline-none transition-colors duration-200" /* Ensures no focus ring */
          aria-label="Close navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="lucide luciswde-x">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <ul className="flex flex-col items-center space-y-6 mt-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handlePageChange(item.id)}
                className="nav-item-button text-2xl font-bold py-2 transition-colors duration-300 no-underline focus:outline-none"
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
