// src/pages/Contact.jsx
import React from 'react';
import { MapPin, Mail, Facebook, Instagram, Phone } from 'lucide-react';

const ContactPage = () => (
  <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    {/* H1 Heading - applied dark blue gradient */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-8 md:pb-1">Skontaktuj się z Nami</h1>
    <p className="text-lg md:text-xl text-black leading-relaxed mb-10 text-center max-w-3xl mx-auto">
      Chętnie Cię wysłuchamy! Niezależnie od tego, czy masz pytanie dotyczące naszych projektów, aktualnych ofert, czy po prostu chcesz się skontaktować, śmiało się odezwij.
    </p>

    {/* SOCIAL MEDIA ICONS - Facebook and Instagram, gold color, under "Skontaktuj się" */}
    <div className="flex justify-center space-x-6 mb-10 md:mb-12">
      {/* Facebook Icon - now using Lucide's Facebook icon */}
      <a href="#" target="_blank" aria-label="Facebook" className="text-[#cda670] hover:opacity-75 transition-opacity duration-200">
        <Facebook className="w-8 h-8" />
      </a>
      {/* Instagram Icon - now using Lucide's Instagram icon */}
      <a href="#" target="_blank" aria-label="Instagram" className="text-[#cda670] hover:opacity-75 transition-opacity duration-200">
        <Instagram className="w-8 h-8" />
      </a>
    </div>

    {/* THREE CONTACT BOXES - Lokalizacja, Zadzwoń, Napisz, with solid gold icons */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-0 md:max-w-5xl md:mx-auto">
      {/* Lokalizacja (Location) Box */}
      {/* Changed to flex row, items-center, text-left for icon on left */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center text-left">
        <div className="mr-4 flex-shrink-0"> {/* Added mr-4 for spacing, flex-shrink-0 to prevent icon from shrinking */}
          {/* Map Pin Icon - now using Lucide's MapPin icon */}
          <MapPin className="text-[#cda670] w-12 h-12" />
        </div>
        <div> {/* Wrapper for text content to ensure it stacks properly */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lokalizacja</h3>
          <p className="text-gray-700 text-lg">
            Promenada Gwiazd 28/5,<br/>
            72-500 Międzyzdroje
          </p>
        </div>
      </div>

      {/* Zadzwoń (Call) Box */}
      {/* Changed to flex row, items-center, text-left for icon on left */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center text-left">
        <div className="mr-4 flex-shrink-0"> {/* Added mr-4 for spacing, flex-shrink-0 to prevent icon from shrinking */}
          {/* Phone Icon - now using Lucide's Phone icon */}
          <Phone className="text-[#cda670] w-12 h-12" />
        </div>
        <div> {/* Wrapper for text content to ensure it stacks properly */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Zadzwoń</h3>
          <p className="text-gray-700 text-lg">
            +48 885 985 999
          </p>
        </div>
      </div>

      {/* Napisz (Write/Email) Box */}
      {/* Changed to flex row, items-center, text-left for icon on left */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center text-left">
        <div className="mr-4 flex-shrink-0"> {/* Added mr-4 for spacing, flex-shrink-0 to prevent icon from shrinking */}
          {/* Mail Icon - now using Lucide's Mail icon */}
          <Mail className="text-[#cda670] w-12 h-12" />
        </div>
        <div> {/* Wrapper for text content to ensure it stacks properly */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Napisz</h3>
          <p className="text-gray-700 text-lg">
            julia@yourholidays.pl
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;