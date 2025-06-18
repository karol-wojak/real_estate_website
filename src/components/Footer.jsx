// src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'; // Import Lucide icons

// Footer component now accepts handlePageChange as a prop
const Footer = ({ handlePageChange }) => {
  // Define menu items based on your website's navigation
  const menuItems = [
    { name: 'O Nas', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Oferty', id: 'offers' },
    { name: 'Kontakt', id: 'contact' },
  ];

  // Define a solid gold color for icons for better rendering reliability
  const iconGoldColor = '#d7b27d'; // A hex code from your --gradient-gold

  return (
    // Changed background to solid dark blue
    <footer className="bg-dark-blue-solid text-white py-12 px-6 md:px-10">
      {/* Adjusted grid for mobile: 2 columns for Kontakt/Menu, then Social Media spans 2 columns below */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

        {/* Column 1: Kontakt Information - Left aligned on all screens */}
        <div className="flex flex-col items-start text-left space-y-4">
          <h3 className="text-xl font-semibold mb-2 text-gradient-gold">Kontakt</h3>
          <p className="flex items-center space-x-2 text-gradient-gold">
            <Phone className="w-5 h-5" color={iconGoldColor} />
            <span>+48 885 985 999</span>
          </p>
          <p className="flex items-center space-x-2 text-gradient-gold">
            <Mail className="w-5 h-5" color={iconGoldColor} />
            <span>julia@yourholidays.pl</span>
          </p>
          <p className="flex items-center space-x-2 text-gradient-gold">
            <MapPin className="w-5 h-5" color={iconGoldColor} />
            <span>ul. Promenada Gwiazd 28/5,<br/>72-500 Międzyzdroje</span>
          </p>
        </div>

        {/* Column 2: Menu - Left aligned on all screens */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-xl font-semibold mb-4 text-gradient-gold">Menu</h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handlePageChange(item.id)}
                  className="hover:underline text-gradient-gold transition-colors duration-200 text-left"
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Media - Left aligned on all screens, spans 2 columns on mobile */}
        <div className="flex flex-col items-start text-left sm:col-span-2 md:col-span-1"> {/* Added sm:col-span-2 */}
          <h3 className="text-xl font-semibold mb-4 text-gradient-gold">Social Media</h3>
          <p className="mb-4 text-gradient-gold">Bądź na bieżąco i zobacz jak prężnie działamy.</p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-200">
              <Facebook className="w-8 h-8" color={iconGoldColor} />
            </a>
            <a href="#" target="_blank" aria-label="Instagram" className="hover:opacity-75 transition-opacity duration-200">
              <Instagram className="w-8 h-8" color={iconGoldColor} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright - Centered only this text */}
      <div className="mt-10 pt-6 text-center border-t border-white border-opacity-20 text-sm text-gradient-gold"> {/* Changed text-left to text-center */}
        <p>&copy; {new Date().getFullYear()} EM Holding. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;