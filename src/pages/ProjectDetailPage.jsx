import React, { useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // <-- NEW: Import HashLink

// Yet Another React Lightbox (YARL) imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Base styles for the lightbox

// Optional: Import additional YARL plugins and their styles for desired features
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"; // Fullscreen button
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";   // Auto-play slideshow
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"; // Thumbnail strip at the bottom
import Zoom from "yet-another-react-lightbox/plugins/zoom";         // Zoom functionality
import "yet-another-react-lightbox/plugins/thumbnails.css"; // Styles specifically for thumbnails plugin


const ProjectDetailPage = ({ portfolioProjects }) => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    // State to control the lightbox: -1 means closed, 0 or higher is the index of the currently viewed slide
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        if (portfolioProjects) {
            const foundProject = portfolioProjects.find(p => p.id === parseInt(projectId));
            setProject(foundProject);
        }
        window.scrollTo(0, 0); // Scroll to top when the page loads
    }, [projectId, portfolioProjects]);

    // NEW: Define the scrollWithOffset function for consistent scrolling
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const headerElement = document.querySelector('header'); // Assuming your header has a 'header' tag or a specific class/ID
        const headerOffset = headerElement ? headerElement.offsetHeight : 0; // Get header height
        // Adjust scroll position by header height + a little extra padding (e.g., 20px)
        window.scrollTo({ top: yCoordinate - headerOffset - 20, behavior: 'smooth' });
    };

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center container mx-auto px-4 py-8 md:py-12">
                <p className="text-xl text-gray-700">Ładowanie szczegółów projektu...</p>
            </div>
        );
    }

    // Prepare slides array for Yet Another React Lightbox
    const slides = project.images.map((imgSrc) => ({
        src: imgSrc,
        width: 800,  // Placeholder: *** Strongly recommend replacing with actual image width ***
        height: 600, // Placeholder: *** Strongly recommend replacing with actual image height ***
        // You can also add other properties like 'alt', 'title', etc., if available in your data
        // alt: "Description for SEO and accessibility",
    }));

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* --- NEW: Breadcrumbs Navigation --- */}
            <nav className="text-sm font-medium mb-8" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex items-center">
                    <li>
                        {/* CHANGE HERE: Use HashLink to point to the portfolio section */}
                        <HashLink
                            to="/#portfolio-section" // Target the div with id="portfolio-section" on the main page
                            smooth // Enable smooth scrolling
                            scroll={scrollWithOffset} // Use your custom offset function
                            className="text-blue-800 hover:text-yellow-500 transition-colors font-semibold"
                        >
                            Realizacje
                        </HashLink>
                    </li>
                    <li>
                        {/* Separator icon (Font Awesome chevron right) */}
                        <svg className="fill-current w-3 h-3 mx-2 text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.357-24.522 0-33.879L223.535 256 34.528 67.234c-9.357-9.357-9.357-24.522 0-33.879l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.029c9.373 9.373 24.569 0 33.942z"/>
                        </svg>
                    </li>
                    <li>
                        {/* Current project name (styled in gold) */}
                        <span className="text-yellow-500 font-semibold">{project.name}</span>
                    </li>
                </ol>
            </nav>

            {/* Title (3rem font size) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-center text-gradient-dark-blue mb-8 leading-tight">
                {project.name}
            </h1>

            {/* Short Description (3 short sentences) */}
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
                {project.description}
            </p>

            {/* Images Grid - Uses your original Tailwind CSS grid classes */}
            <div className="grid grid-cols-1 gap-4
                            sm:grid-cols-2
                            lg:grid-cols-4 {/* Your desired 4 columns for larger screens */}
                            max-w-6xl mx-auto">
                {project.images.map((imgSrc, idx) => (
                    <div
                        key={idx}
                        className="w-full h-auto overflow-hidden rounded-lg shadow-md cursor-pointer"
                        // When an image in the grid is clicked, open the lightbox at that image's index
                        onClick={() => setIndex(idx)}
                    >
                        <img
                            src={imgSrc} // This directly uses imgSrc
                            alt={`${project.name} - Obraz ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Yet Another React Lightbox Component */}
            {/* It will be rendered conditionally when 'index' is 0 or higher */}
            <Lightbox
                slides={slides} // Pass the prepared array of slides
                open={index >= 0} // 'true' to open the lightbox, 'false' to close
                index={index} // Set the initial slide index
                close={() => setIndex(-1)} // Function to call when the lightbox is closed
                // Optional: Add desired plugins for additional features (e.g., fullscreen, thumbnails, zoom)
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                // Customize various controller options (e.g., close on backdrop click)
                controller={{ closeOnBackdropClick: true }}
            />
        </div>
    );
};

export default ProjectDetailPage;