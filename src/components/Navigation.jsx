// src/components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu, logo }) => {
    const location = useLocation();

    const navItems = [
        { name: 'Realizacje', path: '/#portfolio-section', type: 'hash' },
        { name: 'O Nas', path: '/#about-section', type: 'hash' },
        // { name: 'Oferty', path: '/#offers-section', type: 'hash' },
        { name: 'FAQ', path: '/#faq-section', type: 'hash' },
        { name: 'Kontakt', path: '/contact', type: 'link' },
    ];

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement ? headerElement.offsetHeight : 0;
        window.scrollTo({ top: yCoordinate - headerOffset - 20, behavior: 'smooth' });
    };

    return (
        <header className="absolute top-0 left-0 w-full z-20 pt-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto py-4 bg-black/10 backdrop-blur-sm rounded-xl flex justify-between items-center px-8">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Company Logo" className="h-12 sm:h-20" />
                </Link>

                <nav className="hidden md:flex justify-center flex-grow">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.type === 'hash' ? (
                                    <HashLink
                                        to={item.path}
                                        scroll={scrollWithOffset}
                                        className="nav-item-button text-xl font-medium text-white no-underline focus:outline-none hover:scale-[1.02] inline-block transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="nav-item-button text-xl font-medium text-white no-underline focus:outline-none hover:scale-[1.02] inline-block transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:hidden relative">
                    <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-800 z-50 relative">
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>

                    {isMobileMenuOpen && (
                        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden w-48">
                            <ul className="flex flex-col divide-y divide-gray-200">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        {item.type === 'hash' ? (
                                            <HashLink
                                                to={item.path}
                                                scroll={scrollWithOffset}
                                                onClick={toggleMobileMenu}
                                                className="block px-4 py-3 text-gray-800 text-center hover:bg-gray-100"
                                            >
                                                {item.name}
                                            </HashLink>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={toggleMobileMenu}
                                                className="block px-4 py-3 text-gray-800 text-center hover:bg-gray-100"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navigation;
