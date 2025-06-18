// src/components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons

const Navigation = ({ activePage, handlePageChange, isMobileMenuOpen, toggleMobileMenu }) => {
  const navItems = [
    { name: 'O Nas', id: 'about' },
    { name: 'Realizacje', 'id': 'portfolio' },
    { name: 'Oferty', id: 'offers' },
    { name: 'Kontakt', id: 'contact' },
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
                // Reverted to original class list; hover handled in index.css
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
        <Menu className="w-6 h-6" /> 
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
          className="self-end p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" color="#000000" /> 
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