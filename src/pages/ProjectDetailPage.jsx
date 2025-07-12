import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Yet Another React Lightbox (YARL) imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Optional: Import additional YARL plugins and their styles for desired features
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { importProjectImages } from '../data/portfolioData';

// Lazy Image Component for better performance
const LazyImage = ({ src, alt, className, onClick, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px' // Start loading 50px before the image comes into view
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
        setIsLoaded(true);
    }, []);

    return (
        <div
            ref={imgRef}
            className={`${className} relative overflow-hidden rounded-lg shadow-md cursor-pointer`}
            onClick={onClick}
        >
            {!isInView && (
                <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Loading...</div>
                </div>
            )}
            
            {isInView && !hasError && (
                <>
                    <img
                        src={src}
                        alt={alt}
                        className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${
                            isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={handleLoad}
                        onError={handleError}
                        loading="lazy"
                    />
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="text-gray-500 text-sm">Loading...</div>
                        </div>
                    )}
                </>
            )}
            
            {hasError && (
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center border border-gray-300">
                    <div className="text-gray-500 text-sm text-center">
                        <div>⚠️</div>
                        <div>Failed to load image</div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProjectDetailPage = ({ portfolioProjects }) => {
    const { projectId } = useParams();
    // NEW: Use state for the selected project, images, loading, and error
    const [project, setProject] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State to control the lightbox: -1 means closed, 0 or higher is the index of the currently viewed slide
    const [index, setIndex] = useState(-1);

    // NEW: useEffect hook to fetch images dynamically
    useEffect(() => {
        const fetchProjectImages = async () => {
            setLoading(true);
            setError(null);
            
            // Find the project data from the lightweight array passed as a prop
            const selectedProject = portfolioProjects.find(p => p.id === parseInt(projectId));
            
            if (!selectedProject) {
                setLoading(false);
                setError('Project not found!');
                return;
            }

            setProject(selectedProject);

            try {
                // First, try to use galleryImages from Strapi
                if (selectedProject.galleryImages && selectedProject.galleryImages.length > 0) {
                    const imageUrls = selectedProject.galleryImages
                        .filter(img => img && img.url)
                        .map(img => img.url);
                    setImages(imageUrls);
                    setLoading(false);
                    return;
                }

                // Fallback to static image imports
                const imageModules = importProjectImages(selectedProject.imageFolder);
                
                if (Object.keys(imageModules).length === 0) {
                    throw new Error('No images found for this project.');
                }

                // Use Promise.all to load all the image modules at once
                const imagePromises = Object.values(imageModules).map(importFn => importFn());
                const loadedImageModules = await Promise.all(imagePromises);

                // Extract the default export (the image URL) from each module
                const imageUrls = loadedImageModules.map(module => module.default);
                
                // Sort the images by filename to ensure consistent order
                imageUrls.sort();

                setImages(imageUrls);
            } catch (err) {
                setError(`Failed to load project images: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        // Scroll to the top of the page when the component first renders
        window.scrollTo(0, 0); 
        
        // Execute the async function to fetch images
        fetchProjectImages();
        
    }, [projectId, portfolioProjects]); // Re-run effect when the project ID or portfolio data changes

    // NEW: Define the scrollWithOffset function for consistent scrolling
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement ? headerElement.offsetHeight : 0;
        window.scrollTo({ top: yCoordinate - headerOffset - 20, behavior: 'smooth' });
    };

    // NEW: Conditional rendering for loading, error, and not found states
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center container mx-auto px-4 py-8 md:py-12">
                <p className="text-xl text-gray-700">Ładowanie szczegółów projektu...</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center container mx-auto px-4 py-8 md:py-12">
                <p className="text-xl text-red-600">Błąd: {error}</p>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center container mx-auto px-4 py-8 md:py-12">
                <p className="text-xl text-gray-700">Nie znaleziono projektu.</p>
            </div>
        );
    }

    // Prepare slides array for Yet Another React Lightbox
    const slides = images.map((imgSrc) => ({
        src: imgSrc,
        // The sizes here are placeholders. You should get the real sizes if possible for a better lightbox experience.
        width: 1200,
        height: 800,
    }));

    return (
        <div className="container mx-auto">
            <nav className="text-sm font-medium mb-8" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex items-center">
                    <li>
                        <HashLink
                            to="/#portfolio-section"
                            smooth
                            scroll={scrollWithOffset}
                            className="text-black hover:text-[#e0bc88] transition-colors font-semibold"
                        >
                            Realizacje
                        </HashLink>
                    </li>
                    <li>
                        <svg className="fill-current w-3 h-3 mx-2 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.357-24.522 0-33.879L223.535 256 34.528 67.234c-9.357-9.357-9.357-24.522 0-33.879l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.029c9.373 9.373 24.569 0 33.942z"/>
                        </svg>
                    </li>
                    <li>
                        <span className="font-semibold" style={{ color: '#e0bc88' }}>{project.name}</span>
                    </li>
                </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-center mb-8 leading-tight">
                {project.name}
            </h1>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
                {project.description}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
                {images.map((imgSrc, idx) => (
                    <LazyImage
                        key={idx}
                        src={imgSrc}
                        alt={`${project.name} - Obraz ${idx + 1}`}
                        className="w-full h-auto"
                        onClick={() => setIndex(idx)}
                        index={idx}
                    />
                ))}
            </div>

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                controller={{ closeOnBackdropClick: true }}
            />
        </div>
    );
};

export default ProjectDetailPage;