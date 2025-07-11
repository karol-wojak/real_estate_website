// src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'; // Import Lucide icons
import { Link } from 'react-router-dom'; // Import Link
import { HashLink } from 'react-router-hash-link'; // Import HashLink

// Footer component no longer accepts handlePageChange as a prop
const Footer = () => {
    // Define menu items based on your website's navigation with paths/hashes
    const menuItems = [
        { name: 'Usługi', path: '/#services', type: 'hash' },
        { name: 'Realizacje', path: '/#portfolio-section', type: 'hash' },
        { name: 'O Nas', path: '/#about-section', type: 'hash' },
        { name: 'Opinie', path: '/#reviews-section', type: 'hash' },
        { name: 'FAQ', path: '/#faq-section', type: 'hash' },
        { name: 'Kontakt', path: '/contact', type: 'link' },
    ];

    // Define the dark gray color for icons to match the text
    const iconDarkGrayColor = '#1F2937'; // Hex code for Tailwind's gray-800

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement ? headerElement.offsetHeight : 0;
        window.scrollTo({ top: yCoordinate - headerOffset - 20, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-50 text-gray-800 py-12 px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {/* Column 1: Kontakt Information */}
                <div className="flex flex-col items-start text-left space-y-4">
                    {/* CHANGED: h3 font size for mobile, then scales up */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-800">Kontakt</h3>
                    {/* CHANGED: p font size to text-sm for all contact info */}
                    <p className="flex items-center space-x-2 text-sm text-gray-800">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" color={iconDarkGrayColor} />
                        <a href="tel:+48515235550" className="hover:underline focus:underline outline-none">+48 515 235 550</a>
                    </p>
                    <p className="flex items-center space-x-2 text-sm text-gray-800">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" color={iconDarkGrayColor} />
                        <a href="mailto:kontakt@emholding.pl" className="hover:underline focus:underline outline-none">kontakt@emholding.pl</a>
                    </p>
                    <p className="flex items-center space-x-2 text-sm text-gray-800">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" color={iconDarkGrayColor} />
                        <a href="https://maps.google.com/?q=Rynek+Główny+28,+31-010+Kraków" target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline outline-none">
                            Rynek Główny 28,<br/>31-010 Kraków
                        </a>
                    </p>
                </div>

                {/* Column 2: Menu */}
                <div className="flex flex-col items-start text-left">
                    {/* CHANGED: h3 font size for mobile, then scales up */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-gray-800">Menu</h3>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                {item.type === 'hash' ? (
                                    <HashLink
                                        to={item.path}
                                        smooth
                                        scroll={scrollWithOffset}
                                        // CHANGED: text size to text-sm for menu items
                                        className="hover:underline text-gray-800 transition-colors duration-200 text-left text-sm"
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        // CHANGED: text size to text-sm for menu items
                                        className="hover:underline text-gray-800 transition-colors duration-200 text-left text-sm"
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                {/* Changed sm:col-span-2 to remove the span on smaller screens, allowing it to naturally fall into its column */}
                <div className="flex flex-col items-start text-left md:col-span-1">
                    {/* CHANGED: h3 font size for mobile, then scales up */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-gray-800">Social Media</h3>
                    {/* CHANGED: p font size to text-sm */}
                    <p className="mb-4 text-sm text-gray-800">Bądź na bieżąco i zobacz jak prężnie działamy.</p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/people/EM-Holding/61566959755802/" target="_blank" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-200">
                            <Facebook className="w-6 h-6 sm:w-8 sm:h-8" color={iconDarkGrayColor} /> {/* Reduced icon size for mobile */}
                        </a>
                        <a href="https://www.instagram.com/edyta_augustynczyk?igsh=MXNtdGF2dmtzMDJvNw==/" target="_blank" aria-label="Instagram" className="hover:opacity-75 transition-opacity duration-200">
                            <Instagram className="w-6 h-6 sm:w-8 sm:h-8" color={iconDarkGrayColor} /> {/* Reduced icon size for mobile */}
                        </a>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            {/* CHANGED: p font size to text-xs for copyright */}
            <div className="mt-10 pt-6 text-center border-t border-gray-300 text-xs text-gray-800">
                <p>&copy; {new Date().getFullYear()} EM Holding. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
};

export default Footer;