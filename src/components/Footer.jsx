// src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'; // Import Lucide icons
import { Link } from 'react-router-dom'; // Import Link
import { HashLink } from 'react-router-hash-link'; // Import HashLink

// Footer component no longer accepts handlePageChange as a prop
const Footer = () => {
    // Define menu items based on your website's navigation with paths/hashes
    const menuItems = [
        { name: 'O Nas', path: '/#about-section', type: 'hash' },
        { name: 'Portfolio', path: '/#portfolio-section', type: 'hash' },
        { name: 'Oferty', path: '/#offers-section', type: 'hash' },
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
        // CHANGED: text-black to text-gray-800 for general text
        <footer className="bg-gray-50 text-gray-800 py-12 px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {/* Column 1: Kontakt Information */}
                <div className="flex flex-col items-start text-left space-y-4">
                    {/* CHANGED: text-black to text-gray-800 */}
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Kontakt</h3>
                    <p className="flex items-center space-x-2 text-gray-800"> {/* CHANGED: text-black to text-gray-800 */}
                        <Phone className="w-5 h-5" color={iconDarkGrayColor} /> {/* CHANGED: color="black" to color={iconDarkGrayColor} */}
                        <span>+48 885 985 999</span>
                    </p>
                    <p className="flex items-center space-x-2 text-gray-800"> {/* CHANGED: text-black to text-gray-800 */}
                        <Mail className="w-5 h-5" color={iconDarkGrayColor} /> {/* CHANGED: color="black" to color={iconDarkGrayColor} */}
                        <span>julia@yourholidays.pl</span>
                    </p>
                    <p className="flex items-center space-x-2 text-gray-800"> {/* CHANGED: text-black to text-gray-800 */}
                        <MapPin className="w-5 h-5" color={iconDarkGrayColor} /> {/* CHANGED: color="black" to color={iconDarkGrayColor} */}
                        <span>ul. Promenada Gwiazd 28/5,<br/>72-500 Międzyzdroje</span>
                    </p>
                </div>

                {/* Column 2: Menu */}
                <div className="flex flex-col items-start text-left">
                    {/* CHANGED: text-black to text-gray-800 */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Menu</h3>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                {item.type === 'hash' ? (
                                    <HashLink
                                        to={item.path}
                                        smooth
                                        scroll={scrollWithOffset}
                                        // CHANGED: text-black to text-gray-800
                                        className="hover:underline text-gray-800 transition-colors duration-200 text-left"
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                                    >
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        // CHANGED: text-black to text-gray-800
                                        className="hover:underline text-gray-800 transition-colors duration-200 text-left"
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                <div className="flex flex-col items-start text-left sm:col-span-2 md:col-span-1">
                    {/* CHANGED: text-black to text-gray-800 */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Social Media</h3>
                    {/* CHANGED: text-black to text-gray-800 */}
                    <p className="mb-4 text-gray-800">Bądź na bieżąco i zobacz jak prężnie działamy.</p>
                    <div className="flex space-x-4">
                        <a href="#" target="_blank" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-200">
                            <Facebook className="w-8 h-8" color={iconDarkGrayColor} /> {/* CHANGED: color="black" to color={iconDarkGrayColor} */}
                        </a>
                        <a href="#" target="_blank" aria-label="Instagram" className="hover:opacity-75 transition-opacity duration-200">
                            <Instagram className="w-8 h-8" color={iconDarkGrayColor} /> {/* CHANGED: color="black" to color={iconDarkGrayColor} */}
                        </a>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            {/* CHANGED: text-black to text-gray-800 */}
            <div className="mt-10 pt-6 text-center border-t border-gray-300 text-sm text-gray-800">
                <p>&copy; {new Date().getFullYear()} EM Holding. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
};

export default Footer;