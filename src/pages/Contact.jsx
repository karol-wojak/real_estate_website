// src/pages/Contact.jsx
import { MapPin, Mail, Facebook, Instagram, Phone } from 'lucide-react';

const ContactPage = () => (
  <section className="bg-white rounded-xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:pb-1">Skontaktuj się z Nami</h1>
    <p className="text-lg md:text-xl text-black leading-relaxed mb-10 text-center">
      Chętnie Cię wysłuchamy! Niezależnie od tego, czy masz pytanie dotyczące naszych projektów, aktualnych ofert, czy po prostu chcesz się skontaktować, śmiało się odezwij.
    </p>

    <div className="flex justify-center space-x-6 mb-10 md:mb-12">
      <a href="#" target="_blank" aria-label="Facebook" className="text-[#cda670] hover:opacity-75 transition-opacity duration-200">
        <Facebook className="w-8 h-8" />
      </a>
      <a href="#" target="_blank" aria-label="Instagram" className="text-[#cda670] hover:opacity-75 transition-opacity duration-200">
        <Instagram className="w-8 h-8" />
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-0">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center text-left">
        <div className="mr-4 flex-shrink-0">
          <MapPin className="text-[#cda670] w-12 h-12" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lokalizacja</h3>
          <p className="text-gray-700 text-lg">
            Rynek Główny 28,<br/>
            31-010 Kraków
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center text-left">
        <div className="mr-4 flex-shrink-0">
          <Phone className="text-[#cda670] w-12 h-12" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Zadzwoń</h3>
          <p className="text-gray-700 text-lg">
            +48 123 456 789
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center text-left">
        <div className="mr-4 flex-shrink-0">
          <Mail className="text-[#cda670] w-12 h-12" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Napisz</h3>
          <p className="text-gray-700 text-lg">
            example@gmail.com
          </p>
        </div>
      </div>
    </div>

    {/* Google Map Embed - Now back in ContactPage with a correct src URL */}
    <div className="mt-12 w-screen relative left-1/2 -translate-x-1/2">
      <iframe
        title="Our Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.3102761006026!2d19.933065976560357!3d50.061750615274825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0dd93abfa3%3A0x89daa63b516ebd22!2zUnluZWsgR8WCw7N3bnkgMjgsIDMxLTAxMCBLcmFrw7N3!5e0!3m2!1spl!2spl!4v1750417674324!5m2!1spl!2spl"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default ContactPage;