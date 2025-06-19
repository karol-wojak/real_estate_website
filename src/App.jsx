// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import AboutUsPage from './pages/AboutUs.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import OffersPage from './pages/Offers.jsx';
import ContactPage from './pages/Contact.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import Footer from './components/Footer.jsx';

// Import portfolio images (remains unchanged)
import czyzewskiegoMain from './assets/portfolio/czyzewskiego/main.jpg';
import czyzewskiegoImg1 from './assets/portfolio/czyzewskiego/image-1.jpg';
import czyzewskiegoImg2 from './assets/portfolio/czyzewskiego/image-2.jpg';
import czyzewskiegoImg3 from './assets/portfolio/czyzewskiego/image-3.jpg';
import czyzewskiegoImg4 from './assets/portfolio/czyzewskiego/image-4.jpg';
import czyzewskiegoImg5 from './assets/portfolio/czyzewskiego/image-5.jpg';

import krowoderskichZuchowMain from './assets/portfolio/krowoderskich-zuchow/main.jpg';
import miechowityMain from './assets/portfolio/miechowity/main.jpg';
import moderatoMain from './assets/portfolio/moderato/main.jpg';

// Data for Portfolio and Offers (remains unchanged from last fix)
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
        bathrooms: 3.5,
        image: "https://placehold.co/600x400/FFDDC1/8B4513?text=Offer+1",
    },
    {
        id: 2,
        name: "Suburban Family Home",
        type: "House",
        description: "Spacious single-family home with a large backyard, perfect for families.",
        location: "Maplewood, NJ",
        price: "$750,000",
        bedrooms: 5,
        bathrooms: 3,
        image: "https://placehold.co/600x400/C1FFC1/1C7C54?text=Offer+2",
    },
    {
        id: 3,
        name: "Lakeside Retreat",
        type: "Cottage",
        description: "Charming cottage by the lake, ideal for weekend getaways.",
        location: "Serene Lake, WI",
        price: "$450,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://placehold.co/600x400/BEE9F7/005A7B?text=Offer+3",
    },
    {
        id: 4,
        name: "Commercial Retail Space",
        type: "Commercial",
        description: "Prime retail location in a bustling shopping district, high foot traffic.",
        location: "Market Square, TX",
        price: "$1,200,000",
        bedrooms: null,
        bathrooms: null,
        image: "https://placehold.co/600x400/F0F0F0/666666?text=Offer+4",
    },
];

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <BrowserRouter basename="/real_estate_website">
            <div className="min-h-screen bg-white font-inter text-black flex flex-col">
                <header className="bg-white shadow-lg py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ease-in-out">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl md:text-2xl font-bold hidden sm:block text-gradient-gold">EM HOLDING</h1>
                    </div>
                    <Navigation
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </header>

                <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
                    <Routes>
                        {/* The main page (/) now renders all three sections with their IDs */}
                        <Route path="/" element={
                            <div className="space-y-16 md:space-y-24">
                                <div id="about-section">
                                    <AboutUsPage />
                                </div>
                                <div id="portfolio-section">
                                    <PortfolioPage projects={portfolioProjects} />
                                </div>
                                <div id="offers-section">
                                    <OffersPage offers={currentOffers} />
                                </div>
                            </div>
                        } />
                        {/* Contact page remains a separate route */}
                        <Route path="/contact" element={<ContactPage />} />

                        {/* Project Detail Page remains a separate route */}
                        <Route path="/projects/:projectId" element={<ProjectDetailPage portfolioProjects={portfolioProjects} />} />

                        {/* Fallback route for 404 Not Found */}
                        <Route path="*" element={<h2 className="text-center text-2xl mt-20">404: Strona nie znaleziona</h2>} />
                    </Routes>
                </main>

                {/* Footer no longer receives handlePageChange prop */}
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;