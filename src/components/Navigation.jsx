// src/components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu }) => {
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
        const headerElement = document.querySelector('header'); // Assuming your header has a 'header' tag or a specific class/ID
        const headerOffset = headerElement ? headerElement.offsetHeight : 0; // Get header height
        window.scrollTo({ top: yCoordinate - headerOffset - 20, behavior: 'smooth' }); // Adjust scroll position by header height + a little extra padding
    };


    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex grow justify-end">
                <ul className="flex space-x-8 md:space-x-12">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            {item.type === 'hash' ? (
                                <HashLink
                                    to={item.path}
                                    smooth
                                    scroll={scrollWithOffset} // Use custom scroll function
                                    className={`
                                        nav-item-button relative px-3 py-2 text-lg font-medium transition-all duration-300 no-underline focus:outline-none
                                        ${location.pathname === '/' && location.hash === item.path.split('#')[1] ? 'text-gradient-gold' : ''}
                                        ${location.pathname === item.path.split('#')[0] && item.path.split('#')[1] === undefined && location.hash === '' ? 'text-gradient-gold' : ''} // for Realizacje (/) when no hash is present
                                        ${location.pathname === item.path.split('#')[0] && item.path.split('#')[1] && location.hash === `#${item.path.split('#')[1]}` ? 'text-gradient-gold' : ''}
                                    `}
                                >
                                    {item.name}
                                </HashLink>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`
                                        nav-item-button relative px-3 py-2 text-lg font-medium transition-all duration-300 no-underline focus:outline-none
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
                        <li key={item.path}>
                            {item.type === 'hash' ? (
                                <HashLink
                                    to={item.path}
                                    smooth
                                    scroll={scrollWithOffset} // Use custom scroll function
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
        </>
    );
};

export default Navigation;