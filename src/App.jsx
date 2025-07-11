// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import logo from './assets/logo.jpg';

import Navigation from './components/Navigation.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import Services from './pages/Services.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import AboutUsPage from './pages/AboutUs.jsx';
import ReviewsCarousel from './components/ReviewsCarousel.jsx';
import FAQ from './components/FAQ.jsx';
import OffersPage from './pages/Offers.jsx';
import ContactPage from './pages/Contact.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import Footer from './components/Footer.jsx';

import { portfolioProjects as staticPortfolioProjects, currentOffers } from './data/portfolioData.js';
import { fetchPortfolioProjects, STRAPI_BASE_URL } from './api/strapi';


const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [portfolioProjects, setPortfolioProjects] = useState(staticPortfolioProjects); // Use static as fallback
    const location = useLocation(); // To get current path for conditional rendering

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when navigating to a new page
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname, location.hash]); // Close on path or hash change

    // Fetch portfolio projects from Strapi
    useEffect(() => {
        const loadStrapiProjects = async () => {
            try {
                const strapiData = await fetchPortfolioProjects();
                if (strapiData && strapiData.length > 0) {
                    // Map Strapi data to your frontend structure
                    const mappedProjects = strapiData.map((item) => ({
                        id: item.id,
                        name: item.Title,
                        description: Array.isArray(item.Description)
                          ? item.Description.map(block =>
                              block.children?.map(child => child.text).join(' ')
                            ).join('\n')
                          : '',
                        location: item.Location,
                        area: item.Area,
                        mainImage: item.mainImage?.url
                          ? (item.mainImage.url.startsWith('http')
                              ? item.mainImage.url
                              : `${STRAPI_BASE_URL}${item.mainImage.url}`)
                          : '',
                        // Add galleryImages for detail page
                        galleryImages: Array.isArray(item.galleryImages)
                          ? item.galleryImages.map(img => ({
                              url: img.url?.startsWith('http') ? img.url : `${STRAPI_BASE_URL}${img.url}`
                            }))
                          : [],
                        // Keep imageFolder for backward compatibility
                        imageFolder: item.Slug || 'default'
                    }));
                    setPortfolioProjects(mappedProjects);
                }
            } catch (error) {
                console.error('Error loading Strapi projects, using static data:', error);
                console.warn('Failed to load data from production server. Check console for details.');
                // Keep static data as fallback
            }
        };

        loadStrapiProjects();
    }, []);

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