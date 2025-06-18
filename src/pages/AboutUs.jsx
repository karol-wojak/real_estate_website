// src/pages/AboutUs.jsx
import React from 'react';

const AboutUsPage = () => (
  <section id="about-section" className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    {/* H1 Heading - applied dark blue gradient */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-8 leading-tight md:pb-1">O Nas</h1>
    {/* Text color changed to black/dark gray, span to dark blue gradient for accent */}
    <p className="text-lg md:text-xl text-black leading-relaxed mb-6 text-center max-w-3xl mx-auto">
      Witamy w EM Holding, gdzie przekształcamy wizje w tętniące życiem przestrzenie mieszkalne. Jesteśmy pełnym pasji zespołem, który poświęca się dostarczaniu wyjątkowych rozwiązań w zakresie nieruchomości, łączących innowacyjny design z ponadczasową jakością.
    </p>
    <p className="text-md md:text-lg text-gray-800 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
      Dzięki wieloletniemu doświadczeniu i głębokiemu zrozumieniu dynamiki rynku specjalizujemy się w tworzeniu luksusowych nieruchomości mieszkalnych, które nie tylko spełniają, ale i przewyższają oczekiwania. Nasze zaangażowanie w uczciwość, zadowolenie klienta i zrównoważone praktyki leży u podstaw każdego podejmowanego przez nas projektu.
    </p>
    {/* H2 Subheading - applied dark blue gradient */}
    <h2 className="text-3xl font-bold text-center text-gradient-dark-blue mb-8 md:pb-1">Właściciele</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Content box for Owner 1 */}
      {/* Removed shadow-md and hover:shadow-xl for mobile, applied md: prefix */}
      <div className="bg-white p-6 rounded-lg md:shadow-md md:hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Owner 1 Image Placeholder */}
        <img
          src="/real-estate-project/src/assets/team/owner-edyta.jpg" // Placeholder image URL for Owner 1
          alt="Właściciel 1"
          className="w-64 h-64 rounded-full mx-auto mb-4 object-cover shadow-lg" // Styling for circular, centered image with spacing
        />
        {/* H3 Subheading - gold gradient */}
        <h3 className="text-2xl font-semibold text-gradient-gold mb-3 text-center">Edyta Augustyńczyk</h3>
        <p className="text-gray-800 text-center">
          <span className="font-medium text-gradient-dark-blue">Founder & CEO:</span> With over two decades in real estate development, [Owner 1 Name] brings unparalleled expertise in architectural innovation and strategic project management. Their vision has shaped our most iconic properties.
        </p>
      </div>
      {/* Content box for Owner 2 */}
      {/* Removed shadow-md and hover:shadow-xl for mobile, applied md: prefix */}
      <div className="bg-white p-6 rounded-lg md:shadow-md md:hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Owner 2 Image Placeholder */}
        <img
          src="/real-estate-project/src/assets/team/owner-michal.jpg" // Placeholder image URL for Owner 2
          alt="Właściciel 2"
          className="w-64 h-64 rounded-full mx-auto mb-4 object-cover shadow-lg" // Styling for circular, centered image with spacing
        />
        {/* H3 Subheading - gold gradient */}
        <h3 className="text-2xl font-semibold text-gradient-gold mb-3 text-center">Michał Wojak</h3>
        <p className="text-gray-800 text-center">
          <span className="font-medium text-gradient-dark-blue">Co-founder & Head of Sales:</span> A market maestro with a keen eye for emerging trends, [Owner 2 Name] excels in client relations and ensuring our properties connect with the right buyers. Their passion drives our success in the market.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsPage;