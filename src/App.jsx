// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; // Keep useLocation

import logo from './assets/logo.jpg';

import Navigation from './components/Navigation.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import AboutUsPage from './pages/AboutUs.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
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
    const location = useLocation(); // This will now work as App is inside BrowserRouter
    const isHomePage = location.pathname === '/'; // Determine if current path is homepage

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

    // Header will remain static (on top of carousel) as requested for now
    const headerClasses = "bg-white shadow-lg py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ease-in-out";

    return (
        // BrowserRouter removed from here, now in main.jsx
        <div className="min-h-screen bg-white font-inter text-black flex flex-col overflow-x-hidden">
            <header className={headerClasses}>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="EM Holding Logo"
                            className="h-14 md:h-24 w-auto"
                        />
                    </Link>
                </div>
                <Navigation
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                />
            </header>

            {/* Conditionally render HeroCarousel only on the homepage */}
            {isHomePage && <HeroCarousel />}

            {/* Applied consistent max-width to main content area for all pages */}
            <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12 flex-grow">
                <Routes>
                    <Route path="/" element={
                        <div className="space-y-16 md:space-y-24">
                            <div id="about-section">
                                <AboutUsPage />
                            </div>
                            <div id="portfolio-section">
                                <PortfolioPage projects={portfolioProjects} />
                            </div>
                            {/* The OffersPage component was commented out in your provided code,
                                but it is included in the project structure.
                                If you want to display it on the homepage, uncomment the line below. */}
                            {/* <div id="offers-section">
                                <OffersPage offers={currentOffers} />
                            </div> */}
                        </div>
                    } />
                    <Route path="/contact" element={<ContactPage />} />

                    <Route path="/projects/:projectId" element={<ProjectDetailPage portfolioProjects={portfolioProjects} />} />

                    <Route path="*" element={<h2 className="text-center text-2xl mt-20">404: Strona nie znaleziona</h2>} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;