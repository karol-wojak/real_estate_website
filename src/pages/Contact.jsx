// src/pages/Contact.jsx
import { MapPin, Mail, Facebook, Instagram, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <section className="bg-white rounded-xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:pb-1">Skontaktuj się z Nami</h1>
    <p className="text-lg md:text-xl text-black leading-relaxed mb-10 text-justify">
      Chętnie Cię wysłuchamy! Niezależnie od tego, czy masz pytanie dotyczące naszych projektów, aktualnych ofert, czy po prostu chcesz się skontaktować, śmiało się odezwij.
    </p>

    <div className="flex justify-center space-x-6 mb-10 md:mb-12">
      <a href="https://www.facebook.com/people/EM-Holding/61566959755802/" target="_blank" aria-label="Facebook" className="text-[#cda670] hover:opacity-75 transition-opacity duration-200">
        <Facebook className="w-8 h-8" />
      </a>
      <a href="https://www.instagram.com/edyta_augustynczyk?igsh=MXNtdGF2dmtzMDJvNw==/" target="_blank" aria-label="Instagram" className="text-[#cda670] hover:opacity-75 transition-opacity duration-200">
        <Instagram className="w-8 h-8" />
      </a>
    </div>

    {/* Responsive grid: info blocks (left), contact form (right) */}
    <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-12 mb-12">
      {/* Info blocks and map column */}
      <div className="flex flex-col gap-6 md:w-1/2 md:max-w-xs flex-shrink-0">
        {/* Zadzwoń */}
        <div className="bg-white rounded-xl shadow-lg p-5 flex items-start gap-4 border border-gray-100 transition-all duration-200 hover:border-[#e0bc88] hover:shadow-[0_4px_24px_0_rgba(224,188,136,0.18)]">
          <span className="inline-block text-[#e0bc88] text-2xl mt-1">
            <Phone className="w-7 h-7 md:w-8 md:h-8" />
          </span>
          <div>
            <div className="font-bold text-lg mb-1">Zadzwoń</div>
            <a href="tel:+48515235550" className="text-gray-700 text-sm leading-relaxed hover:underline">+48 515 235 550</a>
          </div>
        </div>
        {/* Napisz */}
        <div className="bg-white rounded-xl shadow-lg p-5 flex items-start gap-4 border border-gray-100 transition-all duration-200 hover:border-[#e0bc88] hover:shadow-[0_4px_24px_0_rgba(224,188,136,0.18)]">
          <span className="inline-block text-[#e0bc88] text-2xl mt-1">
            <Mail className="w-7 h-7 md:w-8 md:h-8" />
          </span>
          <div>
            <div className="font-bold text-lg mb-1">Napisz</div>
            <a href="mailto:kontakt@emholding.pl" className="text-gray-700 text-sm leading-relaxed hover:underline">kontakt@emholding.pl</a>
          </div>
        </div>
        {/* Lokalizacja */}
        <div className="bg-white rounded-xl shadow-lg p-5 flex items-start gap-4 border border-gray-100 transition-all duration-200 hover:border-[#e0bc88] hover:shadow-[0_4px_24px_0_rgba(224,188,136,0.18)]">
          <span className="inline-block text-[#e0bc88] text-2xl mt-1">
            <MapPin className="w-7 h-7 md:w-8 md:h-8" />
          </span>
          <div>
            <div className="font-bold text-lg mb-1">Lokalizacja</div>
            <div className="text-gray-700 text-sm leading-relaxed">
              Rynek Główny 28<br />31-010 Kraków
            </div>
          </div>
        </div>
        
        {/* Map below info blocks on tablets and up (md and up) */}
        <div className="hidden md:block mt-6">
          <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.3102761006026!2d19.933065976560357!3d50.061750615274825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0dd93abfa3%3A0x89daa63b516ebd22!2zUnluZWsgR8WCw7N3bnkgMjgsIDMxLTAxMCBLcmFrw7N3!5e0!3m2!1spl!2spl!4v1750417674324!5m2!1spl!2spl"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Contact form column */}
      <div className="flex-1">
        <ContactForm />
      </div>
    </div>
    {/* Map below both columns on mobile only */}
    <div className="mt-12 w-full md:hidden pb-12">
      <iframe
        title="Our Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.3102761006026!2d19.933065976560357!3d50.061750615274825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0dd93abfa3%3A0x89daa63b516ebd22!2zUnluZWsgR8WCw7N3bnkgMjgsIDMxLTAxMCBLcmFrw7N3!5e0!3m2!1spl!2spl!4v1750417674324!5m2!1spl!2spl"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default ContactPage;