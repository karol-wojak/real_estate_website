// src/components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu, logo }) => {
    const location = useLocation();

    const navItems = [
        { name: 'O Nas', path: '/#about-section', type: 'hash' },
        { name: 'Realizacje', path: '/#portfolio-section', type: 'hash' },
        { name: 'Oferty', path: '/#offers-section', type: 'hash' },
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
                                        scroll={el => scrollWithOffset(el)}
                                        className={`
                                            nav-item-button text-xl font-normal no-underline focus:outline-none hover:scale-[1.02]
                                        `}
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`
                                            nav-item-button text-xl font-normal no-underline focus:outline-none hover:scale-[1.02]
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-800">
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 py-20">
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
                                        onClick={toggleMobileMenu}
                                        className={`
                                            nav-item-button text-2xl font-normal py-2 no-underline focus:outline-none hover:scale-[1.02]
                                        `}
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={toggleMobileMenu}
                                        className={`
                                            nav-item-button text-2xl font-normal py-2 no-underline focus:outline-none hover:scale-[1.02]
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