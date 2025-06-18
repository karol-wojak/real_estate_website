// src/pages/Contact.jsx
import React from 'react';

const ContactPage = () => (
  <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    {/* H1 Heading - applied dark blue gradient */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-8 md:pb-1">Contact Us</h1>
    <p className="text-lg md:text-xl text-black leading-relaxed mb-10 text-center max-w-3xl mx-auto">
      We'd love to hear from you! Whether you have a question about our projects, current offers, or just want to connect, feel free to reach out.
    </p>
    {/* H2 Heading - applied dark blue gradient */}
    <h2 className="text-3xl font-bold text-center text-gradient-dark-blue mb-8">Get in Touch</h2> {/* New H2 header */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Content box */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* H3 Subheading - gold gradient */}
        <h3 className="text-2xl font-semibold text-gradient-gold mb-4 text-center">Inquiries</h3>
        <div className="space-y-4 text-center">
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gradient-dark-blue">Mobile:</span> <a href="tel:+1234567890" className="text-gray-800 hover:text-gradient-dark-blue transition-colors duration-200 no-underline">+1 (234) 567-890</a>
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gradient-dark-blue">Email:</span> <a href="mailto:info@yourcompany.com" className="text-gray-800 hover:text-gradient-dark-blue transition-colors duration-200 no-underline">info@yourcompany.com</a>
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gradient-dark-blue">Address:</span> 123 Prime Estate Ave, Grand City, GE 12345
          </p>
        </div>
      </div>
      {/* Content box */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* H3 Subheading - gold gradient */}
        <h3 className="text-2xl font-semibold text-gradient-gold mb-4 text-center">Connect With Us</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          {/* Social icons - dark blue gradient, hover gold gradient */}
          <a href="#" target="_blank" aria-label="Facebook" className="text-gradient-dark-blue hover:text-gradient-gold transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-3 7h-2c-1.01 0-1.25.56-1.25 1.25V10h3.5l-.5 3H12v8h-3v-8H7v-3h2V6.75C9 4.88 10.15 3 13.5 3H16v4z"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="Instagram" className="text-gradient-dark-blue hover:text-gradient-gold transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.06 1.745.247 2.18.423.473.189.873.446 1.21.789.336.342.593.743.789 1.21.176.435.362 1.01.422 2.18.06.85.07 1.25.07 4.85s-.01 3.99-.07 4.85c-.06 1.17-.247 1.745-.423 2.18-.189.473-.446.873-.789 1.21-.342.336-.743-.593-1.21-.789-.435.176-1.01-.362-2.18-.422-.85-.06-1.25-.07-4.85-.07s-3.99-.01-4.85-.07c-1.17-.06-1.745-.247-2.18-.423-.473-.189-.873-.446-1.21-.789-.336-.342-.593-.743-.789-1.21-.176-.435-.362-1.01-.422-2.18-.06-.85-.07-1.25-.07-4.85s.01-3.99.07-4.85c.06-1.17.247-1.745.423-2.18.189-.473.446-.873.789-1.21.342-.336.743-.593.789-1.21.176-.435.362-1.01.422-2.18.06-.85.07-1.25.07-4.85zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn" className="text-gradient-dark-blue hover:text-gradient-gold transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.52v-5.593c0-1.339-.253-2.311-1.422-2.311-1.167 0-1.666.862-1.666 2.274v5.63H9.288V9.167h3.522v1.516h.05a3.85 3.85 0 0 1 3.456-1.895c3.701 0 4.382 2.448 4.382 7.094v5.07zM5.59 7.917a2.33 2.33 0 0 1-2.333-2.334c0-1.282 1.05-2.333 2.333-2.333s2.333 1.051 2.333 2.333c0 1.282-1.05 2.334-2.333 2.334zM7.397 20.452H3.59V9.167h3.807v11.285z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
