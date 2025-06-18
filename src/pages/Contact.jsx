// src/pages/Contact.jsx
import React from 'react';
import { MapPin, Mail, Facebook, Instagram, Phone } from 'lucide-react'; // Import all necessary Lucide icons directly

const ContactPage = () => (
  <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    {/* TOP TEXT - as specified */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-8 md:pb-1">Skontaktuj się z Nami</h1>
    <p className="text-lg md:text-xl text-black leading-relaxed mb-10 text-center max-w-3xl mx-auto">
      Chętnie Cię wysłuchamy! Niezależnie od tego, czy masz pytanie dotyczące naszych projektów, aktualnych ofert, czy po prostu chcesz się skontaktować, śmiało się odezwij.
    </p>
    <h2 className="text-3xl font-bold text-center text-gradient-dark-blue mb-8">Skontaktuj się</h2>

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Lokalizacja (Location) Box */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
        <div className="mb-4">
          {/* Map Pin Icon - now using Lucide's MapPin icon */}
          <MapPin className="text-[#cda670] w-12 h-12" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lokalizacja</h3>
        <p className="text-gray-700 text-lg">
          Promenada Gwiazd 28/5,<br/>
          72-500 Międzyzdroje
        </p>
      </div>

      {/* Zadzwoń (Call) Box */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
        <div className="mb-4">
          {/* Phone Call Icon - now using Lucide's Phone icon directly */}
          <Phone className="text-[#cda670] w-12 h-12" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Zadzwoń</h3>
        <p className="text-gray-700 text-lg">
          +48 885 985 999
        </p>
      </div>

      {/* Napisz (Write/Email) Box */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
        <div className="mb-4">
          {/* Mail Icon - now using Lucide's Mail icon */}
          <Mail className="text-[#cda670] w-12 h-12" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Napisz</h3>
        <p className="text-gray-700 text-lg">
          julia@yourholidays.pl
        </p>
      </div>
    </div>
  </section>
);

export default ContactPage;