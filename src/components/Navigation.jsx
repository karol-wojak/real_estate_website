// src/components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu, logo }) => {
    const location = useLocation();

    // Define navigation items with their display name and corresponding path/hash
    const navItems = [
        // HashLink to sections on the main page (path: '/', hash: '#section-id')
        { name: 'O Nas', path: '/#about-section', type: 'hash' },
        { name: 'Realizacje', path: '/#portfolio-section', type: 'hash' },
        { name: 'Oferty', path: '/#offers-section', type: 'hash' },
        // Regular Link for the separate contact page
        { name: 'Kontakt', path: '/contact', type: 'link' },
    ];

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement ? headerElement.offsetHeight : 0;
        window.scrollTo({ top: yCoordinate - headerOffset - 20, behavior: 'smooth' });
    };

    return (
        // The header itself is still full width and absolute for positioning.
        // Added top padding to lower the bar and horizontal padding to create space from screen edges.
        <header className="absolute top-0 left-0 w-full z-20 pt-10 px-4 md:px-8">
            {/* This inner div now holds the background, blur, controlled width, and rounded corners.
                Increased py- for more vertical space.
                Changed bg-white/0 to bg-black/20 for a slightly darker background than the photo, with backdrop-blur-sm.
                Added px-8 for consistent horizontal padding inside the navigation bar, and removed individual padding from logo and button. */}
            <div className="max-w-7xl mx-auto py-4 bg-black/10 backdrop-blur-sm rounded-xl flex justify-between items-center px-8">
                {/* Logo Link - Removed pl-4, now handled by parent's px-8 */}
                <Link to="/" className="flex items-center">
                    {/* Increased logo height to h-20 sm:h-28 for a bigger logo */}
                    <img src={logo} alt="Company Logo" className="h-12 sm:h-20" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-center flex-grow">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.type === 'hash' ? (
                                    <HashLink
                                        to={item.path}
                                        scroll={el => scrollWithOffset(el)}
                                        className={`
                                            nav-item-button text-gray-800 hover:text-gradient-gold text-lg font-semibold transition-colors duration-300 no-underline focus:outline-none
                                            ${location.pathname === '/' && location.hash === item.path.split('#')[1] ? 'text-gradient-gold' : ''}
                                            ${location.pathname === item.path.split('#')[0] && item.path.split('#')[1] === undefined && location.hash === '' ? 'text-gradient-gold' : ''}
                                            ${location.pathname === item.path.split('#')[0] && item.path.split('#')[1] && location.hash === `#${item.path.split('#')[1]}` ? 'text-gradient-gold' : ''}
                                        `}
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`
                                            nav-item-button text-gray-800 hover:text-gradient-gold text-lg font-semibold transition-colors duration-300 no-underline focus:outline-none
                                            ${location.pathname === item.path ? 'text-gradient-gold' : ''}
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button (Hamburger) - positioned on the right - Removed pr-4, now handled by parent's px-8 */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-800">
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                // Retained translucent background and backdrop blur for mobile menu for readability
                <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 py-10">
                    <button onClick={toggleMobileMenu} className="absolute top-4 right-4 focus:outline-none text-gray-800">
                        <X className="w-8 h-8" />
                    </button>
                    <ul className="flex flex-col items-center space-y-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.type === 'hash' ? (
                                    <HashLink
                                        to={item.path}
                                        scroll={el => scrollWithOffset(el)}
                                        onClick={toggleMobileMenu} // Close mobile menu on click
                                        className={`
                                            nav-item-button text-2xl font-bold py-2 transition-colors duration-300 no-underline focus:outline-none
                                            ${location.pathname === '/' && location.hash === item.path.split('#')[1] ? 'text-gradient-gold' : ''}
                                            ${location.pathname === item.path.split('#')[0] && item.path.split('#')[1] === undefined && location.hash === '' ? 'text-gradient-gold' : ''}
                                            ${location.pathname === item.path.split('#')[0] && item.path.split('#')[1] && location.hash === `#${item.path.split('#')[1]}` ? 'text-gradient-gold' : ''}
                                        `}
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={toggleMobileMenu} // Close mobile menu on click
                                        className={`
                                            nav-item-button text-2xl font-bold py-2 transition-colors duration-300 no-underline focus:outline-none
                                            ${location.pathname === item.path ? 'text-gradient-gold' : ''}
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navigation;