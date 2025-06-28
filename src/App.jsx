// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import logo from './assets/logo.jpg';

import Navigation from './components/Navigation.jsx';
import HeroCarousel from './components/HeroCarousel.jsx'; //
import Services from './pages/Services.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import AboutUsPage from './pages/AboutUs.jsx';
import ReviewsCarousel from './components/ReviewsCarousel.jsx';
import FAQ from './components/FAQ.jsx';
import OffersPage from './pages/Offers.jsx';
import ContactPage from './pages/Contact.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import Footer from './components/Footer.jsx';

import czyzewskiegoMain from './assets/portfolio/czyzewskiego/main.jpg';
import czyzewskiegoImg1 from './assets/portfolio/czyzewskiego/image-1.jpg';
import czyzewskiegoImg2 from './assets/portfolio/czyzewskiego/image-2.jpg';
import czyzewskiegoImg3 from './assets/portfolio/czyzewskiego/image-3.jpg';
import czyzewskiegoImg4 from './assets/portfolio/czyzewskiego/image-4.jpg';
import czyzewskiegoImg5 from './assets/portfolio/czyzewskiego/image-5.jpg';

import krowoderskichZuchowMain from './assets/portfolio/krowoderskich-zuchow/main.jpg';
import krowoderskichZuchowImg1 from './assets/portfolio/krowoderskich-zuchow/image-1.jpg';
import krowoderskichZuchowImg2 from './assets/portfolio/krowoderskich-zuchow/image-2.jpg';
import krowoderskichZuchowImg3 from './assets/portfolio/krowoderskich-zuchow/image-3.jpg';
import krowoderskichZuchowImg4 from './assets/portfolio/krowoderskich-zuchow/image-4.jpg';
import krowoderskichZuchowImg5 from './assets/portfolio/krowoderskich-zuchow/image-5.jpg';
import krowoderskichZuchowImg6 from './assets/portfolio/krowoderskich-zuchow/image-6.jpg';
import krowoderskichZuchowImg7 from './assets/portfolio/krowoderskich-zuchow/image-7.jpg';
import krowoderskichZuchowImg8 from './assets/portfolio/krowoderskich-zuchow/image-8.jpg';


import miechowityMain from './assets/portfolio/miechowity/main.jpg';
import miechowityImg1 from './assets/portfolio/miechowity/image-1.jpg';
import miechowityImg2 from './assets/portfolio/miechowity/image-2.jpg';
import miechowityImg3 from './assets/portfolio/miechowity/image-3.jpg';
import miechowityImg4 from './assets/portfolio/miechowity/image-4.jpg';
import miechowityImg5 from './assets/portfolio/miechowity/image-5.jpg';
import miechowityImg6 from './assets/portfolio/miechowity/image-6.jpg';
import miechowityImg7 from './assets/portfolio/miechowity/image-7.jpg';
import miechowityImg8 from './assets/portfolio/miechowity/image-8.jpg';
import miechowityImg9 from './assets/portfolio/miechowity/image-9.jpg';
import miechowityImg10 from './assets/portfolio/miechowity/image-10.jpg';

import moderatoMain from './assets/portfolio/moderato/main.jpg';
import moderatoImg1 from './assets/portfolio/moderato/image-1.jpg';
import moderatoImg2 from './assets/portfolio/moderato/image-2.jpg';
import moderatoImg3 from './assets/portfolio/moderato/image-3.jpg';
import moderatoImg4 from './assets/portfolio/moderato/image-4.jpg';
import moderatoImg5 from './assets/portfolio/moderato/image-5.jpg';
import moderatoImg6 from './assets/portfolio/moderato/image-6.jpg';

const portfolioProjects = [
    {
        id: 1,
        name: "Czyżewskiego, Kraków",
        description: "Nowoczesne apartamenty w zielonej okolicy krakowskiej ulicy Czyżewskiego.",
        location: "ul. Czyżewskiego, Kraków",
        completion: "Q4 2023",
        mainImage: czyzewskiegoMain,
        images: [
            czyzewskiegoMain,
            czyzewskiegoImg1,
            czyzewskiegoImg2,
            czyzewskiegoImg3,
            czyzewskiegoImg4,
            czyzewskiegoImg5,
        ],
    },
    {
        id: 2,
        name: "Krowoderskich Zuchów, Kraków",
        description: "Ekologiczne przestrzenie biurowe w sercu ulicy Krowoderskich Zuchów w Krakowie.",
        location: "ul. Krowoderskich Zuchów, Kraków",
        completion: "Q2 2024",
        mainImage: krowoderskichZuchowMain,
        images: [
            krowoderskichZuchowMain,
            krowoderskichZuchowImg1,
            krowoderskichZuchowImg2,
            krowoderskichZuchowImg3,
            krowoderskichZuchowImg4,
            krowoderskichZuchowImg5,
            krowoderskichZuchowImg6,
            krowoderskichZuchowImg7,
            krowoderskichZuchowImg8,
        ],
    },
    {
        id: 3,
        name: "Miechowity, Kraków",
        description: "Współczesne wille miejskie w pobliżu ulicy Miechowity na północ od Krakowa.",
        location: "ul. Miechowity, Kraków",
        completion: "Q1 2023",
        mainImage: miechowityMain,
        images: [
            miechowityMain,
            miechowityImg1,
            miechowityImg2,
            miechowityImg3,
            miechowityImg4,
            miechowityImg5,
            miechowityImg6,
            miechowityImg7,
            miechowityImg8,
            miechowityImg9,
            miechowityImg10,
        ],
    },
    {
        id: 4,
        name: "Moderato",
        description: "Nowoczesne mieszkania w spokojnej okolicy Starogardu Gdańskiego.",
        location: "Starogard Gdański",
        completion: "Q3 2022",
        mainImage: moderatoMain,
        images: [
            moderatoMain,
            moderatoImg1,
            moderatoImg2,
            moderatoImg3,
            moderatoImg4,
            moderatoImg5,
            moderatoImg6,
        ],
    },
];

const currentOffers = [
    {
        id: 1,
        name: "Skyline Penthouse",
        type: "Apartment",
        description: "An exclusive penthouse with panoramic city views and bespoke interiors.",
        location: "City Center, NY",
        price: "$2,500,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Penthouse"
    },
    {
        id: 2,
        name: "Riverside Villa",
        type: "House",
        description: "A spacious villa located by the river, perfect for families.",
        location: "Riverbend, CA",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Villa"
    },
    {
        id: 3,
        name: "Urban Loft",
        type: "Apartment",
        description: "Modern loft in the bustling urban area, ideal for young professionals.",
        location: "Downtown, IL",
        price: "$750,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Loft"
    },
    {
        id: 4,
        name: "Suburban Family Home",
        type: "House",
        description: "A comfortable family home in a quiet suburban neighborhood with a large backyard.",
        location: "Suburbia, GA",
        price: "$450,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://via.placeholder.com/600x400/FFA500/FFFFFF?text=Family+Home"
    }
];


const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // To get current path for conditional rendering

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when navigating to a new page
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname, location.hash]); // Close on path or hash change

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            {/* Navigation component, passed logo and mobile menu state/toggle */}
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                logo={logo} // Pass the logo down to Navigation
            />

            <main
                className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex-grow py-0">
                <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 mb-8">
                    <HeroCarousel location={location} />
                </div>
                <Routes>
                    <Route path="/" element={
                        <div className="w-full space-y-16 md:space-y-24">
                            <div id="services">
                                <Services />
                            </div>

                            <div id="portfolio-section">
                                <PortfolioPage projects={portfolioProjects} />
                            </div>

                            <div id="about-section">
                                <AboutUsPage />
                            </div>

                            <div id="reviews-section">
                                <ReviewsCarousel />
                            </div>

                            <div id="faq-section">
                                <FAQ />
                            </div>

                            {/* <div id="offers-section">
                                <OffersPage offers={currentOffers} />
                            </div> */}
                        </div>
                    } />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage portfolioProjects={portfolioProjects} />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="*" element={<h2 className="text-center text-2xl mt-20">404: Strona nie znaleziona</h2>} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;