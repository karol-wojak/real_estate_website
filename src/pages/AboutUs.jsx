// src/pages/AboutUs.jsx
import React from 'react';
// Import images
import EdytaImage from '../assets/team/owner-edyta.jpg';
import MichalImage from '../assets/team/owner-michal.jpg';

const AboutUsPage = () => (
    <section id="about-section" className="transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up py-12">
        {/* H1 Heading - applied dark blue gradient */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gradient-dark-blue mb-8 leading-tight md:pb-1">O Nas</h1>
        {/* Text color changed to black/dark gray, span to dark blue gradient for accent */}
        {/* CHANGED: text-center to text-justify */}
        <p className="text-lg md:text-xl text-black leading-relaxed mb-6 text-justify max-w-3xl mx-auto">
            Witamy w EM Holding, gdzie przekształcamy wizje w tętniące życiem przestrzenie mieszkalne. Jesteśmy pełnym pasji zespołem, który poświęca się dostarczaniu wyjątkowych rozwiązań w zakresie nieruchomości, łączących innowacyjny design z ponadczasową jakością.
        </p>
        {/* CHANGED: text-center to text-justify */}
        <p className="text-md md:text-lg text-black leading-relaxed mb-10 text-justify max-w-3xl mx-auto">
            Dzięki wieloletniemu doświadczeniu i głębokiemu zrozumieniu dynamiki rynku specjalizujemy się w tworzeniu luksusowych nieruchomości mieszkalnych, które nie tylko spełniają, ale i przewyższają oczekiwania. Nasze zaangażowanie w uczciwość, zadowolenie klienta i zrównoważone praktyki leży u podstaw każdego podejmowanego przez nas projektu.
        </p>
        {/* H2 Subheading - applied dark blue gradient */}
        <h2 className="text-3xl font-bold text-center text-gradient-dark-blue mb-8 md:pb-1">Właściciele</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Content box for Owner 1 */}
            <div className="flex flex-col items-center max-w-sm mx-auto">
                {/* Owner 1 Image */}
                <img
                    src={EdytaImage}
                    alt="Właściciel 1"
                    className="w-full h-auto mb-4" // Image takes full width of its parent (max-w-sm), height auto-adjusts
                />
                {/* H3 Subheading - gold gradient (left as is) */}
                <h3 className="text-2xl font-semibold text-gradient-gold mb-3 text-center">Edyta Augustyńczyk</h3>
                {/* Paragraph for description */}
                {/* CHANGED: text-left to text-justify */}
                <p className="text-black font-serif text-justify max-w-sm leading-relaxed">
                    <span className="font-medium text-black">Founder & CEO:</span> With over two decades in real estate development, Edyta brings unparalleled expertise in architectural innovation and strategic project management. Their vision has shaped our most iconic properties.
                </p>
            </div>
            {/* Content box for Owner 2 */}
            <div className="flex flex-col items-center max-w-sm mx-auto">
                <img
                    src={MichalImage}
                    alt="Właściciel 2"
                    className="w-full h-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gradient-gold mb-3 text-center">Michał Wojak</h3>
                {/* Paragraph for description */}
                {/* CHANGED: text-left to text-justify */}
                <p className="text-black font-serif text-justify max-w-sm leading-relaxed">
                    <span className="font-medium text-black">Co-founder & Head of Sales:</span> A market maestro with a keen eye for emerging trends, Michał Wojak excels in client relations and ensuring our properties connect with the right buyers. Their passion drives our success in the market.
                </p>
            </div>
        </div>
    </section>
);

export default AboutUsPage;