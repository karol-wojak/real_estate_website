// src/data/portfolioData.js

// --- Statically import the main image for each project ---
import bajecznaMain from '../assets/portfolio/bajeczna/main.webp';
import czyzewskiegoMain from '../assets/portfolio/czyzewskiego/main.webp';
import imperialMain from '../assets/portfolio/imperial/main.webp';
import jagiellonskieMain from '../assets/portfolio/jagiellonskie/main.webp';
import krowoderskichZuchowMain from '../assets/portfolio/krowoderskich-zuchow/main.webp';
import miechowityMain from '../assets/portfolio/miechowity/main.webp';
import pachonskiegoMain from '../assets/portfolio/pachonskiego/main.webp';
import radzikowskiegoMain from '../assets/portfolio/radzikowskiego/main.webp';
import strusiaMain from '../assets/portfolio/strusia/main.webp';
import wieliczkaMain from '../assets/portfolio/wieliczka/main.webp';
import wilenskaMain from '../assets/portfolio/wilenska/main.webp';
import zagonczykaMain from '../assets/portfolio/zagonczyka/main.webp';


export const importProjectImages = (projectName) => {
    const globImports = {
        'bajeczna': import.meta.glob('../assets/portfolio/bajeczna/*.webp', { eager: false }),
        'czyzewskiego': import.meta.glob('../assets/portfolio/czyzewskiego/*.webp', { eager: false }),
        'imperial': import.meta.glob('../assets/portfolio/imperial/*.webp', { eager: false }),
        'jagiellonskie': import.meta.glob('../assets/portfolio/jagiellonskie/*.webp', { eager: false }),
        'krowoderskich-zuchow': import.meta.glob('../assets/portfolio/krowoderskich-zuchow/*.webp', { eager: false }),
        'miechowity': import.meta.glob('../assets/portfolio/miechowity/*.webp', { eager: false }),
        'pachonskiego': import.meta.glob('../assets/portfolio/pachonskiego/*.webp', { eager: false }),
        'radzikowskiego': import.meta.glob('../assets/portfolio/radzikowskiego/*.webp', { eager: false }),
        'strusia': import.meta.glob('../assets/portfolio/strusia/*.webp', { eager: false }),
        'wieliczka': import.meta.glob('../assets/portfolio/wieliczka/*.webp', { eager: false }),
        'wilenska': import.meta.glob('../assets/portfolio/wilenska/*.webp', { eager: false }),
        'zagonczyka': import.meta.glob('../assets/portfolio/zagonczyka/*.webp', { eager: false }),
    };
    return globImports[projectName] || {};
};


export const portfolioProjects = [
    {
        id: 1,
        name: "Bajeczna, Kraków",
        description: "Opis projektu Bajeczna.",
        location: "Kraków",
        completion: "Q2 2025",
        imageFolder: 'bajeczna',
        mainImage: bajecznaMain,
    },
    {
        id: 2,
        name: "Czyżewskiego, Kraków",
        description: "Opis projektu Czyżewskiego.",
        location: "Kraków",
        completion: "Q4 2023",
        imageFolder: 'czyzewskiego',
        mainImage: czyzewskiegoMain,
    },
    {
        id: 3,
        name: "Imperial, Kraków",
        description: "Opis projektu Imperial.",
        location: "Kraków",
        completion: "Q3 2024",
        imageFolder: 'imperial',
        mainImage: imperialMain,
    },
    {
        id: 4,
        name: "Jagiellonskie, Kraków",
        description: "Opis projektu Jagiellonskie.",
        location: "Kraków",
        completion: "Q1 2024",
        imageFolder: 'jagiellonskie',
        mainImage: jagiellonskieMain,
    },
    {
        id: 5,
        name: "Krowoderskich Zuchów, Kraków",
        description: "Opis projektu Krowoderskich Zuchów.",
        location: "Kraków",
        completion: "Q2 2024",
        imageFolder: 'krowoderskich-zuchow',
        mainImage: krowoderskichZuchowMain,
    },
    {
        id: 6,
        name: "Miechowity, Kraków",
        description: "Opis projektu Miechowity.",
        location: "Kraków",
        completion: "Q1 2023",
        imageFolder: 'miechowity',
        mainImage: miechowityMain,
    },
    {
        id: 7,
        name: "Pachonskiego, Kraków",
        description: "Opis projektu Pachonskiego.",
        location: "Kraków",
        completion: "Q3 2025",
        imageFolder: 'pachonskiego',
        mainImage: pachonskiegoMain,
    },
    {
        id: 8,
        name: "Radzikowskiego, Kraków",
        description: "Opis projektu Radzikowskiego.",
        location: "Kraków",
        completion: "Q4 2024",
        imageFolder: 'radzikowskiego',
        mainImage: radzikowskiegoMain,
    },
    {
        id: 9,
        name: "Strusia, Kraków",
        description: "Opis projektu Strusia.",
        location: "Kraków",
        completion: "Q2 2023",
        imageFolder: 'strusia',
        mainImage: strusiaMain,
    },
    {
        id: 10,
        name: "Wieliczka",
        description: "Opis projektu Wieliczka.",
        location: "Wieliczka",
        completion: "Q3 2023",
        imageFolder: 'wieliczka',
        mainImage: wieliczkaMain,
    },
    {
        id: 11,
        name: "Wilenska, Kraków",
        description: "Opis projektu Wilenska.",
        location: "Kraków",
        completion: "Q4 2025",
        imageFolder: 'wilenska',
        mainImage: wilenskaMain,
    },
    {
        id: 12,
        name: "Zagonczyka, Kraków",
        description: "Opis projektu Zagonczyka.",
        location: "Kraków",
        completion: "Q1 2026",
        imageFolder: 'zagonczyka',
        mainImage: zagonczykaMain,
    },
];

export const currentOffers = [
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